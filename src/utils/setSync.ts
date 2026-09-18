// ============================================================================
// setSync.ts — Fonte única de verdade para TODOS os sets entre as 3 plataformas
//
//   PTCGL (TPCi)  ──┐
//                   ├──  SET_SYNC_TABLE  ──►  { tcgdex, ptcgIo, names, era }
//   TCGdex       ───┤
//                   │
//   pokemontcg.io ──┘
//
// Estratégia de imagem:
//   1. TCGdex   (CDN livre, PT+EN, alta resolução)   ← PRIMÁRIA
//   2. pokemontcg.io (CDN livre)                     ← SECUNDÁRIA
//   3. Card back                                     ← FALLBACK
//
// Rate limits:
//   assets.tcgdex.net     → sem limite
//   images.pokemontcg.io  → sem limite
//   api.tcgdex.net        → livre (cacheie)
//   api.pokemontcg.io     → 1000/dia sem key | 20k/dia com key | 30 req/min
// ============================================================================

export type SetEra =
  | 'base' | 'ex' | 'dp' | 'hgss' | 'col' | 'bw' | 'xy'
  | 'sm' | 'swsh' | 'sv' | 'me' | 'tcgp' | 'anniv';

export interface SetSyncEntry {
  tpci: string;
  tcgdexSeries: string | null;
  tcgdexSet: string | null;
  ptcgIo: string | null;
  name: string;
  namePt?: string;
  era: SetEra;
  isSubset?: boolean;
}

type Row = [
  tpci: string,
  tcgdexSeries: string | null,
  tcgdexSet: string | null,
  ptcgIo: string | null,
  name: string,
  era: SetEra,
  namePt?: string,
  isSubset?: boolean,
];

const SET_SYNC_RAW: Row[] = [
  // ===== BASE =====
  ['BS',  'base', 'base1', 'base1', 'Base Set', 'base', 'Coleção Básica'],
  ['JU',  'base', 'base2', 'base2', 'Jungle',   'base', 'Selva'],
  ['FO',  'base', 'base3', 'base3', 'Fossil',   'base', 'Fóssil'],

  // ===== EX =====
  ['RS',  'ex', 'ex1',  'ex1',  'EX Ruby & Sapphire',        'ex', 'EX Rubi e Safira'],
  ['SS',  'ex', 'ex2',  'ex2',  'EX Sandstorm',              'ex'],
  ['DR',  'ex', 'ex3',  'ex3',  'EX Dragon',                 'ex'],
  ['MA',  'ex', 'ex4',  'ex4',  'EX Team Magma vs Team Aqua','ex'],
  ['HL',  'ex', 'ex5',  'ex5',  'EX Hidden Legends',         'ex'],
  ['RG',  'ex', 'ex6',  'ex6',  'EX FireRed & LeafGreen',    'ex'],
  ['TRR', 'ex', 'ex7',  'ex7',  'EX Team Rocket Returns',    'ex', 'EX O Retorno da Equipe Rocket'],
  ['DX',  'ex', 'ex8',  'ex8',  'EX Deoxys',                 'ex', 'EX Deoxys'],
  ['EM',  'ex', 'ex9',  'ex9',  'EX Emerald',                'ex', 'EX Esmeralda'],
  ['UF',  'ex', 'ex10', 'ex10', 'EX Unseen Forces',          'ex', 'EX Forças Ocultas'],
  ['DS',  'ex', 'ex11', 'ex11', 'EX Delta Species',          'ex'],
  ['LM',  'ex', 'ex12', 'ex12', 'EX Legend Maker',           'ex'],
  ['HP',  'ex', 'ex13', 'ex13', 'EX Holon Phantoms',         'ex'],
  ['CG',  'ex', 'ex14', 'ex14', 'EX Crystal Guardians',      'ex'],
  ['DF',  'ex', 'ex15', 'ex15', 'EX Dragon Frontiers',       'ex'],
  ['PK',  'ex', 'ex16', 'ex16', 'EX Power Keepers',          'ex'],

  // ===== DP =====
  ['DP', 'dp', 'dp1', 'dp1', 'Diamond & Pearl',      'dp', 'Diamante & Pérola'],
  ['MT', 'dp', 'dp2', 'dp2', 'Mysterious Treasures', 'dp', 'Tesouros Misteriosos'],
  ['SW', 'dp', 'dp3', 'dp3', 'Secret Wonders',       'dp', 'Maravilhas Secretas'],
  ['GE', 'dp', 'dp4', 'dp4', 'Great Encounters',     'dp'],
  ['MD', 'dp', 'dp5', 'dp5', 'Majestic Dawn',        'dp'],
  ['LA', 'dp', 'dp6', 'dp6', 'Legends Awakened',     'dp'],
  ['SF', 'dp', 'dp7', 'dp7', 'Stormfront',           'dp'],

  // ===== HGSS =====
  ['HS', 'hgss', 'hgss1', 'hgss1', 'HeartGold SoulSilver', 'hgss', 'HeartGold SoulSilver'],
  ['UL', 'hgss', 'hgss2', 'hgss2', 'Unleashed',            'hgss', 'Revelado'],
  ['UD', 'hgss', 'hgss3', 'hgss3', 'Undaunted',            'hgss', 'Destemido'],
  ['TM', 'hgss', 'hgss4', 'hgss4', 'Triumphant',           'hgss', 'Triunfante'],

  // ===== COL =====
  ['CL', 'col', 'col1', 'col1', 'Call of Legends', 'col', 'Chamado das Lendas'],

  // ===== BW =====
  ['BLW', 'bw', 'bw1',  'bw1',  'Black & White',         'bw', 'Black & White'],
  ['EPO', 'bw', 'bw2',  'bw2',  'Emerging Powers',       'bw', 'Poderes Emergentes'],
  ['NVI', 'bw', 'bw3',  'bw3',  'Noble Victories',       'bw', 'Vitórias Nobres'],
  ['NXD', 'bw', 'bw4',  'bw4',  'Next Destinies',        'bw', 'Próximos Destinos'],
  ['DEX', 'bw', 'bw5',  'bw5',  'Dark Explorers',        'bw', 'Exploradores da Escuridão'],
  ['DRX', 'bw', 'bw6',  'bw6',  'Dragons Exalted',       'bw', 'Dragões Enaltecidos'],
  ['DRV', 'bw', 'dv1',  'dv1',  'Dragon Vault',          'bw', 'Cofre do Dragão'],
  ['BCR', 'bw', 'bw7',  'bw7',  'Boundaries Crossed',    'bw', 'Fronteiras Cruzadas'],
  ['PLS', 'bw', 'bw8',  'bw8',  'Plasma Storm',          'bw', 'Tempestade de Plasma'],
  ['PLF', 'bw', 'bw9',  'bw9',  'Plasma Freeze',         'bw', 'Congelamento de Plasma'],
  ['PLB', 'bw', 'bw10', 'bw10', 'Plasma Blast',          'bw', 'Explosão de Plasma'],
  ['LTR', 'bw', 'bw11', 'bw11', 'Legendary Treasures',   'bw', 'Tesouros Lendários'],

  // ===== XY =====
  ['KSS', 'xy', 'xy0',  'xy0',  'Kalos Starter Set', 'xy', 'Conjunto para Iniciantes Kalos'],
  ['XY',  'xy', 'xy1',  'xy1',  'XY',                'xy', 'XY'],
  ['FLF', 'xy', 'xy2',  'xy2',  'Flashfire',         'xy', 'Flash de Fogo'],
  ['FFI', 'xy', 'xy3',  'xy3',  'Furious Fists',     'xy', 'Punhos Furiosos'],
  ['PHF', 'xy', 'xy4',  'xy4',  'Phantom Forces',    'xy', 'Força Fantasma'],
  ['PRC', 'xy', 'xy5',  'xy5',  'Primal Clash',      'xy', 'Conflito Primitivo'],
  ['DCR', 'xy', 'dc1',  'dc1',  'Double Crisis',     'xy', 'Crise Dupla'],
  ['ROS', 'xy', 'xy6',  'xy6',  'Roaring Skies',     'xy', 'Céus Estrondosos'],
  ['AOR', 'xy', 'xy7',  'xy7',  'Ancient Origins',   'xy', 'Origens Ancestrais'],
  ['BKT', 'xy', 'xy8',  'xy8',  'BREAKthrough',      'xy', 'Turbo Revolução'],
  ['BKP', 'xy', 'xy9',  'xy9',  'BREAKpoint',        'xy', 'Turbo Colisão'],
  ['GEN', 'xy', 'g1',   'g1',   'Generations',       'xy', 'Gerações'],
  ['FCO', 'xy', 'xy10', 'xy10', 'Fates Collide',     'xy', 'Fusão de Destinos'],
  ['STS', 'xy', 'xy11', 'xy11', 'Steam Siege',       'xy', 'Cerco de Vapor'],
  ['EVO', 'xy', 'xy12', 'xy12', 'Evolutions',        'xy', 'Evoluções'],

  // ===== SM =====
  ['SUM',    'sm', 'sm1',   'sm1',   'Sun & Moon',            'sm', 'Sol e Lua'],
  ['PR-SM',  'sm', 'smp',   'smp',   'Sun & Moon Promos',     'sm', 'Sol e Lua Promos'],
  ['GRI',    'sm', 'sm2',   'sm2',   'Guardians Rising',      'sm', 'Guardiões Ascendentes'],
  ['BUS',    'sm', 'sm3',   'sm3',   'Burning Shadows',       'sm', 'Sombras Ardentes'],
  ['SLG',    'sm', 'sm3.5', 'sm35',  'Shining Legends',       'sm', 'Lendas Luminescentes'],
  ['CIN',    'sm', 'sm4',   'sm4',   'Crimson Invasion',      'sm', 'Invasão Carmim'],
  ['UPR',    'sm', 'sm5',   'sm5',   'Ultra Prism',           'sm', 'Ultra Prisma'],
  ['FLI',    'sm', 'sm6',   'sm6',   'Forbidden Light',       'sm', 'Luz Proibida'],
  ['CES',    'sm', 'sm7',   'sm7',   'Celestial Storm',       'sm', 'Tempestade Celestial'],
  ['DRM',    'sm', 'sm7.5', 'sm75',  'Dragon Majesty',        'sm', 'Dragões Soberanos'],
  ['LOT',    'sm', 'sm8',   'sm8',   'Lost Thunder',          'sm', 'Trovões Perdidos'],
  ['TEU',    'sm', 'sm9',   'sm9',   'Team Up',               'sm', 'União de Aliados'],
  ['DET',    'sm', 'det1',  'det1',  'Detective Pikachu',     'sm', 'Detetive Pikachu'],
  ['UNB',    'sm', 'sm10',  'sm10',  'Unbroken Bonds',        'sm', 'Elos Inquebráveis'],
  ['UNM',    'sm', 'sm11',  'sm11',  'Unified Minds',         'sm', 'Sintonia Mental'],
  ['HIF-SV', 'sm', 'sma',   'sma',   'Hidden Fates Shiny Vault','sm','Destinos Ocultos Cofre Brilhante'],
  ['HIF',    'sm', 'sm115', 'sm115', 'Hidden Fates',          'sm', 'Destinos Ocultos'],
  ['CEC',    'sm', 'sm12',  'sm12',  'Cosmic Eclipse',        'sm', 'Eclipse Cósmico'],

  // ===== SWSH =====
  ['PR-SW',  'swsh', 'swshp',      'swshp',      'SWSH Black Star Promos',           'swsh', 'ESES Promos'],
  ['SSH',    'swsh', 'swsh1',      'swsh1',      'Sword & Shield',                   'swsh', 'Espada e Escudo'],
  ['RCL',    'swsh', 'swsh2',      'swsh2',      'Rebel Clash',                      'swsh', 'Rixa Rebelde'],
  ['DAA',    'swsh', 'swsh3',      'swsh3',      'Darkness Ablaze',                  'swsh', 'Escuridão Incandescente'],
  ['CPA',    'swsh', 'swsh3.5',    'swsh35',     "Champion's Path",                  'swsh', 'Caminho do Campeão'],
  ['VIV',    'swsh', 'swsh4',      'swsh4',      'Vivid Voltage',                    'swsh', 'Voltagem Vívida'],
  ['SHF',    'swsh', 'swsh4.5',    'swsh45',     'Shining Fates',                    'swsh', 'Destinos Brilhantes'],
  ['SHF-SV', 'swsh', 'swsh4.5sv',  'swsh45sv',   'Shining Fates Shiny Vault',        'swsh', undefined, true],
  ['BST',    'swsh', 'swsh5',      'swsh5',      'Battle Styles',                    'swsh', 'Estilos de Batalha'],
  ['CRE',    'swsh', 'swsh6',      'swsh6',      'Chilling Reign',                   'swsh', 'Reinado Arrepiante'],
  ['EVS',    'swsh', 'swsh7',      'swsh7',      'Evolving Skies',                   'swsh', 'Céus em Evolução'],
  ['CEL-CC', 'swsh', 'cel25cc',    'cel25cc',    'Celebrations Classic Collection',  'swsh', 'Celebrações Coleção Clássica', true],
  ['CEL',    'swsh', 'cel25',      'cel25',      'Celebrations',                     'swsh', 'Celebrações'],
  ['FST',    'swsh', 'swsh8',      'swsh8',      'Fusion Strike',                    'swsh', 'Golpe Fusão'],
  ['BRS-TG', 'swsh', 'swsh9tg',    'swsh9tg',    'Brilliant Stars Trainer Gallery',  'swsh', 'Astros Cintilantes Galeria de Treinador', true],
  ['BRS',    'swsh', 'swsh9',      'swsh9',      'Brilliant Stars',                  'swsh', 'Astros Cintilantes'],
  ['ASR',    'swsh', 'swsh10',     'swsh10',     'Astral Radiance',                  'swsh', 'Estrelas Radiantes'],
  ['ASR-TG', 'swsh', 'swsh10tg',   'swsh10tg',   'Astral Radiance Trainer Gallery',  'swsh', 'Estrelas Radiantes Galeria de Treinador', true],
  ['PGO',    'swsh', 'swsh10.5',   'pgo',        'Pokémon GO',                       'swsh', 'Pokémon GO'],
  ['LOR',    'swsh', 'swsh11',     'swsh11',     'Lost Origin',                      'swsh', 'Origem Perdida'],
  ['LOR-TG', 'swsh', 'swsh11tg',   'swsh11tg',   'Lost Origin Trainer Gallery',      'swsh', 'Origem Perdida Galeria de Treinador', true],
  ['SIT',    'swsh', 'swsh12',     'swsh12',     'Silver Tempest',                   'swsh', 'Tempestade Prateada'],
  ['SIT-TG', 'swsh', 'swsh12tg',   'swsh12tg',   'Silver Tempest Trainer Gallery',   'swsh', 'Tempestade Prateada Galeria de Treinador', true],
  ['CRZ',    'swsh', 'swsh12.5',   'swsh12pt5',  'Crown Zenith',                     'swsh', 'Realeza Absoluta'],
  ['CRZ-GG', 'swsh', 'swsh12.5gg', 'swsh12pt5gg','Crown Zenith Galarian Gallery',    'swsh', 'Realeza Absoluta Galeria de Galar', true],

  // ===== SV (Scarlet & Violet era) =====
  ['SVI', 'sv', 'sv01',    'sv1',    'Scarlet & Violet',       'sv', 'Escarlate e Violeta'],
  ['SVE', 'sv', 'sve',     'sve',    'SV Energies',            'sv', 'Escarlate e Violeta Energia'],
  ['SVP', 'sv', 'svp',     'svp',    'SV Black Star Promos',   'sv', 'SVP Black Star Promos'],
  ['PAL', 'sv', 'sv02',    'sv2',    'Paldea Evolved',         'sv', 'Evoluções em Paldea'],
  ['OBF', 'sv', 'sv03',    'sv3',    'Obsidian Flames',        'sv', 'Obsidiana em Chamas'],
  ['MEW', 'sv', 'sv03.5',  'sv3pt5', '151',                    'sv', '151'],
  ['PAR', 'sv', 'sv04',    'sv4',    'Paradox Rift',           'sv', 'Fenda Paradoxal'],
  ['PAF', 'sv', 'sv04.5',  'sv4pt5', 'Paldean Fates',          'sv', 'Destinos de Paldea'],
  ['TEF', 'sv', 'sv05',    'sv5',    'Temporal Forces',        'sv', 'Forças Temporais'],
  ['TWM', 'sv', 'sv06',    'sv6',    'Twilight Masquerade',    'sv', 'Máscaras do Crepúsculo'],
  ['SFA', 'sv', 'sv06.5',  'sv6pt5', 'Shrouded Fable',         'sv', 'Fábulas Nebulosas'],
  ['SCR', 'sv', 'sv07',    'sv7',    'Stellar Crown',          'sv', 'Coroa Estelar'],
  ['SSP', 'sv', 'sv08',    'sv8',    'Surging Sparks',         'sv', 'Fagulhas Impetuosas'],
  ['PRE', 'sv', 'sv08.5',  'sv8pt5', 'Prismatic Evolutions',   'sv', 'Evoluções Prismáticas'],
  ['JTG', 'sv', 'sv09',    'sv9',    'Journey Together',       'sv', 'Amigos de Jornada'],
  ['DRI', 'sv', 'sv10',    'sv10',   'Destined Rivals',        'sv', 'Rivais Predestinados'],
  ['BLK', 'sv', 'sv10.5b', 'sv10pt5b','Black Bolt',            'sv', 'Raio Preto'],
  ['WHT', 'sv', 'sv10.5w', 'sv10pt5w','White Flare',           'sv', 'Fogo Branco'],

  // ===== ME (Mega Evolution era) =====
  ['MEE',   'me', 'mee',    null,   'Mega Evolution Energy',  'me', 'Megaevolução Energia'],
  ['MEG',   'me', 'me01',   'me1',  'Mega Evolution',         'me', 'Megaevolução'],
  ['PR-ME', 'me', 'mep',    'mep',  'MEP Black Star Promos',  'me', 'MEP Black Star Promos'],
  ['PFL',   'me', 'me02',   'me2',  'Phantasmal Flames',      'me', 'Fogo Fantasmagórico'],
  ['ASC',   'me', 'me02.5', 'me2pt5','Ascended Heroes',       'me', 'Heróis Excelsos'],
  ['POR',   'me', 'me03',   'me3',  'Perfect Order',          'me', 'Equilíbrio Perfeito'],
  ['CRI',   'me', 'me04',   'me4',  'Chaos Rising',           'me', 'Caos Ascendente'],
  ['PBL',   'me', 'me05',   'me5',  'Pitch Black',            'me', 'Escuridão Absoluta'],

  // ===== Pokémon TCG Pocket (jogo separado, sem PTCGL) =====
  ['TCGP-A1',  'tcgp', 'A1',  null, 'Genetic Apex',          'tcgp', 'Dominação Genética'],
  ['TCGP-A1a', 'tcgp', 'A1a', null, 'Mythical Island',       'tcgp', 'Ilha Mítica'],
  ['TCGP-A2',  'tcgp', 'A2',  null, 'Space-Time Smackdown',  'tcgp', 'Embate do Tempo e Espaço'],
  ['TCGP-A2a', 'tcgp', 'A2a', null, 'Triumphant Light',      'tcgp', 'Luz Triunfante'],
  ['TCGP-A2b', 'tcgp', 'A2b', null, 'Shining Revelry',       'tcgp', 'Festival Brilhante'],
  ['TCGP-A3',  'tcgp', 'A3',  null, 'Celestial Guardians',   'tcgp', 'Guardiões Celestiais'],
  ['TCGP-A4a', 'tcgp', 'A4a', null, 'Secluded Springs',      'tcgp', 'Nascentes Reclusas'],
  ['TCGP-B1a', 'tcgp', 'B1a', null, 'Crimson Blaze',         'tcgp', 'Chama Carmesim'],
  ['TCGP-B2',  'tcgp', 'B2',  null, 'Dream Parade',          'tcgp', 'Desfile Onírico'],
  ['TCGP-B2a', 'tcgp', 'B2a', null, 'Paldean Wonders',       'tcgp', 'Paldean Wonders'],

  // ===== 30º Aniversário =====
  ['30TH',   'anniv', '30th',   '30th',   '30th Anniversary',                    'anniv', 'Celebração de 30 Anos'],
  ['30TH-C', 'anniv', '30th-c', '30th-c', '30th Anniversary Classic Collection', 'anniv', 'Coleção Clássica de 30 Anos', true],
];

// ============================================================================
// LOOKUP MAPS
// ============================================================================

export const SET_SYNC_TABLE: SetSyncEntry[] = SET_SYNC_RAW.map(r => ({
  tpci: r[0],
  tcgdexSeries: r[1],
  tcgdexSet: r[2],
  ptcgIo: r[3],
  name: r[4],
  era: r[5],
  namePt: r[6],
  isSubset: r[7],
}));

const BY_TPCI = new Map<string, SetSyncEntry>();
const BY_TCGDEX = new Map<string, SetSyncEntry>();
const BY_PTCGIO = new Map<string, SetSyncEntry>();

for (const e of SET_SYNC_TABLE) {
  BY_TPCI.set(e.tpci.toUpperCase(), e);
  if (e.tcgdexSet) {
    BY_TCGDEX.set(e.tcgdexSet.toLowerCase(), e);
    if (e.tcgdexSeries) BY_TCGDEX.set(`${e.tcgdexSeries}/${e.tcgdexSet}`.toLowerCase(), e);
  }
  if (e.ptcgIo) BY_PTCGIO.set(e.ptcgIo.toLowerCase(), e);
}

export function findSet(query: string): SetSyncEntry | null {
  if (!query) return null;
  const q = String(query).trim();
  return (
    BY_TPCI.get(q.toUpperCase()) ||
    BY_TCGDEX.get(q.toLowerCase()) ||
    BY_PTCGIO.get(q.toLowerCase()) ||
    null
  );
}

export function getTpciCode(query: string): string | null {
  return findSet(query)?.tpci ?? null;
}

// ============================================================================
// URL BUILDERS
// ============================================================================
// URL BUILDERS
// ============================================================================

const CARD_BACK = 'https://images.pokemontcg.io/card-back.png';

export function formatCardNumberForTcgdex(
  entry: SetSyncEntry | null, 
  num: string | number
): { primaryNum: string; secondaryNum: string; cleanNum: string } {
  const raw = String(num ?? '').trim().replace(/^#/, '');
  if (!raw) return { primaryNum: '1', secondaryNum: '001', cleanNum: '1' };

  // If number has alphanumeric prefix/suffix (e.g. TG01, GG05, SV01, 1a, etc.), keep exactly as-is
  if (!/^\d+$/.test(raw)) {
    return { primaryNum: raw, secondaryNum: raw, cleanNum: raw };
  }

  const cleanNum = raw.replace(/^0+/, '') || '1';
  const paddedNum = cleanNum.padStart(3, '0');

  // Scarlet & Violet (sv) and Mega Evolution (me) sets on TCGdex CDN strictly use 3-digit zero-padded numbers (001..252)
  if (entry?.era === 'sv' || entry?.era === 'me') {
    return { primaryNum: paddedNum, secondaryNum: cleanNum, cleanNum };
  }

  // Older eras (SWSH, SM, XY, BW, DP, EX, Base) use unpadded numbers (1..200)
  return { primaryNum: cleanNum, secondaryNum: paddedNum, cleanNum };
}

export function tcgdexUrl(
  setQuery: string,
  num: string | number,
  lang: 'pt' | 'en' = 'pt'
): string | null {
  const entry = findSet(setQuery);
  if (!entry?.tcgdexSeries || !entry.tcgdexSet || num === undefined || num === null) return null;
  const { primaryNum } = formatCardNumberForTcgdex(entry, num);
  return `https://assets.tcgdex.net/${lang}/${entry.tcgdexSeries}/${entry.tcgdexSet}/${primaryNum}/high.webp`;
}

export function ptcgIoUrl(setQuery: string, num: string | number): string | null {
  const entry = findSet(setQuery);
  if (!entry?.ptcgIo || num === undefined || num === null) return null;
  const { cleanNum } = formatCardNumberForTcgdex(entry, num);
  return `https://images.pokemontcg.io/${entry.ptcgIo}/${cleanNum}.png`;
}

// ============================================================================
// HIERARQUIA UNIFICADA
// ============================================================================

export interface ImageHierarchy {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  fallback: string;
}

export function buildImageHierarchy(
  setQuery: string,
  num: string | number,
  preferredLang: 'pt' | 'en' = 'pt'
): ImageHierarchy {
  const entry = findSet(setQuery);
  const otherLang: 'pt' | 'en' = preferredLang === 'pt' ? 'en' : 'pt';
  const { primaryNum, secondaryNum, cleanNum } = formatCardNumberForTcgdex(entry, num);

  const primaryLangMain = entry?.tcgdexSet ? `https://assets.tcgdex.net/${preferredLang}/${entry.tcgdexSeries}/${entry.tcgdexSet}/${primaryNum}/high.webp` : null;
  const secondaryLangMain = entry?.tcgdexSet ? `https://assets.tcgdex.net/${otherLang}/${entry.tcgdexSeries}/${entry.tcgdexSet}/${primaryNum}/high.webp` : null;
  const primaryLangAlt = (entry?.tcgdexSet && secondaryNum !== primaryNum) ? `https://assets.tcgdex.net/${preferredLang}/${entry.tcgdexSeries}/${entry.tcgdexSet}/${secondaryNum}/high.webp` : null;
  const secondaryLangAlt = (entry?.tcgdexSet && secondaryNum !== primaryNum) ? `https://assets.tcgdex.net/${otherLang}/${entry.tcgdexSeries}/${entry.tcgdexSet}/${secondaryNum}/high.webp` : null;
  const ptIo = entry?.ptcgIo ? `https://images.pokemontcg.io/${entry.ptcgIo}/${cleanNum}.png` : null;

  const candidates = [
    primaryLangMain,
    secondaryLangMain,
    primaryLangAlt,
    secondaryLangAlt,
    ptIo
  ].filter(Boolean) as string[];

  return {
    primary:    candidates[0] || CARD_BACK,
    secondary:  candidates[1] || candidates[0] || CARD_BACK,
    tertiary:   candidates[2] || candidates[1] || CARD_BACK,
    quaternary: candidates[3] || candidates[2] || CARD_BACK,
    fallback:   CARD_BACK,
  };
}

export const CARD_BACK_URL = CARD_BACK;
