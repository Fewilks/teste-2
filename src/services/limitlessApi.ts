import { MetaDeck } from '../types';
import { fallbackMetaDecks } from '../data/fallbackDecks';
import { limitlessUrl } from '../utils/setSync';

export interface LimitlessApiResponse {
  decks: MetaDeck[];
  tournamentName: string;
  tournamentDate?: string;
  playersCount?: number;
  source: 'api-server' | 'api-direct-limitless' | 'offline-fallback';
}

/**
 * Converte a estrutura de decklist retornada pela Limitless TCG API
 * para o formato de texto canônico do PTCGL (Pokémon TCG Live).
 */
export function formatLimitlessDecklistToPTCGL(decklist: {
  pokemon?: { count: number; name: string; set?: string; number?: string }[];
  trainer?: { count: number; name: string; set?: string; number?: string }[];
  energy?: { count: number; name: string; set?: string; number?: string }[];
}): string {
  const sections: string[] = [];

  if (decklist.pokemon && decklist.pokemon.length > 0) {
    const total = decklist.pokemon.reduce((acc, p) => acc + (p.count || 1), 0);
    const lines = decklist.pokemon.map(p => `${p.count} ${p.name} ${p.set || ''} ${p.number || ''}`.trim());
    sections.push(`Pokémon: ${total}\n${lines.join('\n')}`);
  }

  if (decklist.trainer && decklist.trainer.length > 0) {
    const total = decklist.trainer.reduce((acc, t) => acc + (t.count || 1), 0);
    const lines = decklist.trainer.map(t => `${t.count} ${t.name} ${t.set || ''} ${t.number || ''}`.trim());
    sections.push(`Trainer: ${total}\n${lines.join('\n')}`);
  }

  if (decklist.energy && decklist.energy.length > 0) {
    const total = decklist.energy.reduce((acc, e) => acc + (e.count || 1), 0);
    const lines = decklist.energy.map(e => `${e.count} ${e.name} ${e.set || ''} ${e.number || ''}`.trim());
    sections.push(`Energy: ${total}\n${lines.join('\n')}`);
  }

  return sections.join('\n\n');
}

/**
 * Resolve a imagem de capa mais representativa para um deck da Limitless.
 */
function resolveBestDeckImage(pokemonCards: { name: string; set?: string; number?: string }[]): string {
  if (!pokemonCards || pokemonCards.length === 0) {
    return 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_130_R_EN_LG.png';
  }

  // Prioriza atacantes ex, VSTAR ou Mega
  const aceCard = pokemonCards.find(p => 
    p.name.toLowerCase().includes('ex') || 
    p.name.toLowerCase().includes('vstar') ||
    p.name.toLowerCase().includes('mega')
  ) || pokemonCards[0];

  if (aceCard.set && aceCard.number) {
    const url = limitlessUrl(aceCard.set, aceCard.number);
    if (url) return url;
  }

  // Fallbacks visuais conhecidos
  const lower = (aceCard.name || '').toLowerCase();
  if (lower.includes('starmie')) return 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/POR/POR_021_R_EN_LG.png';
  if (lower.includes('dragapult')) return 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_130_R_EN_LG.png';
  if (lower.includes('charizard')) return 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_125_R_EN_LG.png';
  if (lower.includes('gardevoir')) return 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_086_R_EN_LG.png';
  if (lower.includes('ogerpon')) return 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_025_R_EN_LG.png';
  if (lower.includes('bolt')) return 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_123_R_EN_LG.png';

  return 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_130_R_EN_LG.png';
}

/**
 * Busca dados diretamente da API oficial da Limitless TCG no cliente.
 * Funciona nativamente no GitHub Pages, mobile e PWA graças ao header CORS (access-control-allow-origin: *).
 */
export async function fetchLimitlessDirect(): Promise<LimitlessApiResponse | null> {
  try {
    // 1. Busca lista de torneios recentes de Standard Format (sempre sem cache)
    const cacheBuster = `_t=${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const tournamentsUrl = `https://play.limitlesstcg.com/api/tournaments?game=PTCG&format=STANDARD&${cacheBuster}`;
    
    const tResp = await fetch(tournamentsUrl, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!tResp.ok) {
      throw new Error(`Limitless API HTTP ${tResp.status}`);
    }

    const tournaments: any[] = await tResp.json();
    if (!Array.isArray(tournaments) || tournaments.length === 0) {
      throw new Error('Nenhum torneio retornado pela API');
    }

    // Filtra torneios com jogadores suficientes para relevância de metagame
    const candidates = tournaments.filter(t => (t.players || 0) >= 12);
    const pool = candidates.length > 0 ? candidates : tournaments;

    // Percorre os torneios mais recentes até encontrar um com decklists submetidas
    for (const tour of pool.slice(0, 6)) {
      try {
        const standingsUrl = `https://play.limitlesstcg.com/api/tournaments/${tour.id}/standings?${cacheBuster}`;
        const sResp = await fetch(standingsUrl, {
          cache: 'no-store',
          headers: { 'Accept': 'application/json' }
        });

        if (!sResp.ok) continue;

        const standings: any[] = await sResp.json();
        if (!Array.isArray(standings)) continue;

        const withDecks = standings.filter(
          s => s.decklist && Array.isArray(s.decklist.pokemon) && s.decklist.pokemon.length > 0
        );

        if (withDecks.length >= 3) {
          // Processa até os 10 melhores colocados
          const tourDateStr = tour.date ? new Date(tour.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
          const topDecks: MetaDeck[] = withDecks.slice(0, 10).map((item, index) => {
            const place = typeof item.placing === 'number' ? item.placing : index + 1;
            const wins = item.record?.wins || 0;
            const losses = item.record?.losses || 0;
            const ties = item.record?.ties || 0;
            const totalMatches = wins + losses + ties;
            const computedWinRate = totalMatches > 0
              ? parseFloat(((wins / totalMatches) * 100).toFixed(1))
              : parseFloat((65 - (place * 1.2)).toFixed(1));

            const deckName = item.deck?.name || 
              item.decklist.pokemon.find((p: any) => p.name.includes('ex') || p.name.includes('VSTAR'))?.name || 
              'Deck Competitivo';

            const countryStr = item.country ? ` (${item.country})` : '';
            const playerName = item.name || 'Jogador';
            const rawList = formatLimitlessDecklistToPTCGL(item.decklist);
            const topCards = (item.decklist.pokemon || []).slice(0, 4).map((p: any) => ({
              name: `${p.name} (${p.set || ''} ${p.number || ''})`.trim(),
              count: p.count || 1
            }));

            const imageUrl = resolveBestDeckImage(item.decklist.pokemon || []);

            return {
              name: deckName,
              archetype: `Jogador: ${playerName}${countryStr} (${place}º Lugar)`,
              share: place,
              winRate: Math.max(48, Math.min(85, computedWinRate)),
              imageUrl,
              description: `Baralho oficial utilizado por ${playerName} conquistando o ${place}º lugar no torneio '${tour.name}' (${tour.players || 0} jogadores) com lista validada pela Limitless TCG.`,
              updatedAt: tourDateStr,
              cards: topCards,
              rawList
            };
          });

          return {
            decks: topDecks,
            tournamentName: tour.name,
            tournamentDate: tourDateStr,
            playersCount: tour.players || topDecks.length,
            source: 'api-direct-limitless'
          };
        }
      } catch (err) {
        console.warn(`Erro ao verificar torneio ${tour.id}:`, err);
      }
    }

    return null;
  } catch (err) {
    console.warn('Erro ao consultar Limitless TCG diretamente via client:', err);
    return null;
  }
}

/**
 * Busca de baralhos do metagame com garantia de dados em tempo real:
 * 1. Tenta o endpoint proxy do backend com parâmetro de forçar refresh (bypassa qualquer cache no servidor).
 * 2. Se falhar (ex: rodando no GitHub Pages, app exportado, ou mobile sem servidor backend ativo),
 *    chama DIRETAMENTE a API oficial da Limitless TCG através do client CORS.
 * 3. Só em caso extremo de falta total de internet recorre ao fallback local.
 */
export async function fetchLiveMetaDecks(forceRefresh = true): Promise<LimitlessApiResponse> {
  const cacheBuster = `_t=${Date.now()}`;
  
  // 1. Tenta backend proxy com force refresh
  try {
    const backendUrl = `/api/pokemon/meta?refresh=true&${cacheBuster}`;
    const res = await fetch(backendUrl, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });

    if (res.ok) {
      const data = await res.json();
      const rawDecks = data.decks || (Array.isArray(data) ? data : []);
      if (Array.isArray(rawDecks) && rawDecks.length > 0) {
        return {
          decks: rawDecks,
          tournamentName: data.tournamentName || 'Limitless Premier Metagame',
          tournamentDate: data.tournamentDate || new Date().toISOString().split('T')[0],
          playersCount: data.playersCount,
          source: 'api-server'
        };
      }
    }
  } catch (backendErr) {
    console.warn('Backend proxy /api/pokemon/meta indisponível ou em host estático (GitHub):', backendErr);
  }

  // 2. Tenta conexão direta com a API da Limitless (funciona em GitHub Pages e Mobile)
  try {
    const directResult = await fetchLimitlessDirect();
    if (directResult && directResult.decks.length > 0) {
      return directResult;
    }
  } catch (directErr) {
    console.warn('Conexão direta com Limitless falhou:', directErr);
  }

  // 3. Fallback seguro apenas para quando não há conectividade
  console.info('Usando dados de emergência do metagame.');
  return {
    decks: fallbackMetaDecks,
    tournamentName: 'Pokémon World Championships (Modo Offline de Contingência)',
    tournamentDate: new Date().toISOString().split('T')[0],
    playersCount: 200,
    source: 'offline-fallback'
  };
}
