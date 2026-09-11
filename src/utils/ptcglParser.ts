import { BattleTurnAction, BattleTurnSnapshot, TrainerLogMatch } from '../types';

// Meta archetype definitions with signature cards & sprites
export interface ArchetypeDefinition {
  name: string;
  keywords: string[];
  sprites: [string, string];
}

export const KNOWN_ARCHETYPES: ArchetypeDefinition[] = [
  {
    name: 'Charizard ex',
    keywords: ['charizard ex', 'charmander', 'charmeleon', 'pidgeot ex', 'dusknoir', 'dusclops', 'duskull'],
    sprites: ['charizard', 'pidgeot']
  },
  {
    name: 'Dragapult ex',
    keywords: ['dragapult ex', 'drakloak', 'dreepy'],
    sprites: ['dragapult', 'pidgeot']
  },
  {
    name: 'Lugia VSTAR',
    keywords: ['lugia vstar', 'lugia v', 'archeops', 'cinccino', 'minccino'],
    sprites: ['lugia', 'archeops']
  },
  {
    name: 'Gardevoir ex',
    keywords: ['gardevoir ex', 'kirlia', 'ralts', 'scream tail', 'drifloon', 'munkidori'],
    sprites: ['gardevoir', 'scream-tail']
  },
  {
    name: 'Raging Bolt ex',
    keywords: ['raging bolt ex', 'ogerpon', 'teal mask ogerpon', 'sandy shocks'],
    sprites: ['raging-bolt', 'ogerpon']
  },
  {
    name: 'Miraidon ex',
    keywords: ['miraidon ex', 'iron hands ex', 'raikou v', 'zapdos', 'electric generator'],
    sprites: ['miraidon', 'iron-hands']
  },
  {
    name: 'Roaring Moon',
    keywords: ['roaring moon ex', 'roaring moon', 'dark patch', 'remendo escuro'],
    sprites: ['roaring-moon', 'darkrai']
  },
  {
    name: 'Terapagos ex',
    keywords: ['terapagos ex', 'noctowl', 'hoothoot', 'bouffalant', 'fan rotom', 'area zero'],
    sprites: ['terapagos', 'noctowl']
  },
  {
    name: 'Iron Thorns ex',
    keywords: ['iron thorns ex', 'espinho ferroso ex', 'crushing hammer'],
    sprites: ['iron-thorns', 'substitute']
  },
  {
    name: 'Gholdengo ex',
    keywords: ['gholdengo ex', 'gimmighoul', 'scizor', 'scyther'],
    sprites: ['gholdengo', 'scizor']
  },
  {
    name: 'Ancient Box',
    keywords: ['flutter mane', 'koraidon', 'ancient booster', 'cápsula de energia do passado'],
    sprites: ['flutter-mane', 'koraidon']
  },
  {
    name: 'Lost Zone Box',
    keywords: ['comfey', 'sableye', 'cramorant', 'colress', 'mirage gate'],
    sprites: ['comfey', 'sableye']
  },
  {
    name: 'Origin Forme Palkia VSTAR',
    keywords: ['palkia vstar', 'palkia v', 'origin forme palkia', 'forma origem'],
    sprites: ['palkia-origin', 'greninja']
  },
  {
    name: 'Snorlax Stall',
    keywords: ['snorlax', 'rotom v', 'penny', 'miss fortune sisters'],
    sprites: ['snorlax', 'rotom']
  }
];

export function detectArchetypeFromCards(cardNames: string[]): { name: string; sprites: [string, string] } {
  const normalizedText = cardNames.join(' ').toLowerCase();

  for (const arch of KNOWN_ARCHETYPES) {
    const matched = arch.keywords.some(kw => normalizedText.includes(kw));
    if (matched) {
      return { name: arch.name, sprites: arch.sprites };
    }
  }

  // Fallbacks based on generic matches
  if (normalizedText.includes('charizard')) return { name: 'Charizard ex', sprites: ['charizard', 'pidgeot'] };
  if (normalizedText.includes('dragapult')) return { name: 'Dragapult ex', sprites: ['dragapult', 'pidgeot'] };
  if (normalizedText.includes('gardevoir')) return { name: 'Gardevoir ex', sprites: ['gardevoir', 'scream-tail'] };
  if (normalizedText.includes('lugia')) return { name: 'Lugia VSTAR', sprites: ['lugia', 'archeops'] };
  if (normalizedText.includes('bolt')) return { name: 'Raging Bolt ex', sprites: ['raging-bolt', 'ogerpon'] };
  if (normalizedText.includes('miraidon')) return { name: 'Miraidon ex', sprites: ['miraidon', 'iron-hands'] };
  if (normalizedText.includes('moon')) return { name: 'Roaring Moon', sprites: ['roaring-moon', 'darkrai'] };
  if (normalizedText.includes('terapagos')) return { name: 'Terapagos ex', sprites: ['terapagos', 'noctowl'] };

  // If we can extract the first Pokémon named
  const firstMon = cardNames.find(c => !c.toLowerCase().includes('ball') && !c.toLowerCase().includes('energy') && !c.toLowerCase().includes('research') && !c.toLowerCase().includes('iono'));
  if (firstMon) {
    const cleanMon = firstMon.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    return { name: `${firstMon} Deck`, sprites: [cleanMon || 'substitute', 'substitute'] };
  }

  return { name: 'Deck Personalizado', sprites: ['substitute', 'substitute'] };
}

// Extract clean card or Pokémon name from log phrase
function extractCardName(text: string): string {
  // Check evolution first: "evoluiu X para Y" / "evolved X into Y"
  const evoMatchPt = text.match(/evoluiu\s+.+?\s+para\s+([^.\n]+?)(?:\s+no\s+(?:Campo Ativo|Banco)|\.|$)/i);
  if (evoMatchPt) return evoMatchPt[1].trim();

  const evoMatchEn = text.match(/evolved\s+.+?\s+into\s+([^.\n]+?)(?:\s+(?:in the Active Spot|on the Bench)|\.|$)/i);
  if (evoMatchEn) return evoMatchEn[1].trim();

  // Check promotion: "promoveu X para o Campo Ativo" / "promoted X to the Active Spot"
  const promoMatchPt = text.match(/promoveu\s+([^.\n]+?)\s+para/i);
  if (promoMatchPt) return promoMatchPt[1].trim();

  const promoMatchEn = text.match(/promoted\s+([^.\n]+?)\s+to/i);
  if (promoMatchEn) return promoMatchEn[1].trim();

  // Check attack / ability user: "X de Player usou..." or "Player's X used..."
  const attackUserPt = text.match(/^[-•*]?\s*([^.\n]+?)\s+de\s+[a-z0-9\s]+\s+usou/i);
  if (attackUserPt) return attackUserPt[1].trim();

  const attackUserEn = text.match(/^[-•*]?\s*[a-z0-9\s]+'s\s+([^.\n]+?)\s+used/i);
  if (attackUserEn) return attackUserEn[1].trim();

  // Check attached energy: "ligou X a Y" / "attached X to Y"
  const energyMatchPt = text.match(/ligou\s+([^.\n]+?)\s+(?:a|ao|do baralho)/i);
  if (energyMatchPt) return energyMatchPt[1].trim();

  const energyMatchEn = text.match(/attached\s+([^.\n]+?)\s+to/i);
  if (energyMatchEn) return energyMatchEn[1].trim();

  // Check placed: "colocou X no Campo Ativo/Banco" / "put X in the Active Spot/Bench"
  const placedMatchPt = text.match(/colocou\s+([^.\n]+?)\s+no\s+(?:Campo Ativo|Banco)/i);
  if (placedMatchPt) return placedMatchPt[1].trim();

  const placedMatchEn = text.match(/put\s+([^.\n]+?)\s+(?:in the Active Spot|onto the Bench)/i);
  if (placedMatchEn) return placedMatchEn[1].trim();

  // Standard cleanup
  let cleaned = text
    .replace(/^[-•*]\s*/, '')
    .replace(/^[a-z0-9\s]+?\s+(?:played|jogou|colocou|drew|comprou|attached|ligou|anexou|evolved|evoluiu|promoveu|promoted)\s+/i, '')
    .replace(/\s+(?:to the Active Spot|to the Bench|no Campo Ativo|no Banco|in the Active Spot).*/i, '')
    .replace(/\s*(?:e descartou|and discarded|procurou|and searched|\.).*$/i, '')
    .trim();

  return cleaned || text;
}

// Helper to test if two card names refer to the same card or family
function isCardMatch(cardA?: string, cardB?: string): boolean {
  if (!cardA || !cardB) return false;
  const a = cardA.toLowerCase().trim();
  const b = cardB.toLowerCase().trim();
  return a === b || a.includes(b) || b.includes(a);
}

export function parsePTCGLLog(rawLog: string, loggedInUserName?: string): TrainerLogMatch {
  const lines = rawLog.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);

  // Extract the real names of the two players directly from the log text
  let detectedPlayer1 = '';
  let detectedPlayer2 = '';

  for (const line of lines) {
    const t1En = line.match(/^Turn\s*#?\s*1\s*-\s*(.+?)(?:'s|\s+)\s*Turn/i);
    const t1Pt = line.match(/^Turno\s*#?\s*1\s*-\s*Turno\s+de\s+(.+)$/i);
    if (t1En) { detectedPlayer1 = t1En[1].trim(); break; }
    if (t1Pt) { detectedPlayer1 = t1Pt[1].trim(); break; }
  }

  for (const line of lines) {
    const t2En = line.match(/^Turn\s*#?\s*2\s*-\s*(.+?)(?:'s|\s+)\s*Turn/i);
    const t2Pt = line.match(/^Turno\s*#?\s*2\s*-\s*Turno\s+de\s+(.+)$/i);
    if (t2En) { detectedPlayer2 = t2En[1].trim(); break; }
    if (t2Pt) { detectedPlayer2 = t2Pt[1].trim(); break; }
  }

  // Fallback to opening hand / coin flip lines if Turn 1 / Turn 2 headers weren't found
  if (!detectedPlayer1 || !detectedPlayer2) {
    for (const line of lines) {
      const coinMatch = line.match(/^(.+?)\s+(?:flipped|jogou)\s+\d+\s+coin/i);
      if (coinMatch && !detectedPlayer1) {
        detectedPlayer1 = coinMatch[1].trim();
      }
      const handPt = line.match(/^(.+?)\s+comprou\s+7\s+cartas\s+para\s+a\s+mão\s+inicial/i);
      const handEn = line.match(/^(.+?)\s+drew\s+7\s+cards\s+for\s+the\s+opening\s+hand/i);
      const handPlayer = (handPt ? handPt[1] : handEn ? handEn[1] : '').trim();
      if (handPlayer) {
        if (!detectedPlayer1) detectedPlayer1 = handPlayer;
        else if (!detectedPlayer2 && handPlayer.toLowerCase() !== detectedPlayer1.toLowerCase()) {
          detectedPlayer2 = handPlayer;
        }
      }
    }
  }

  if (!detectedPlayer1) detectedPlayer1 = 'Jogador 1';
  if (!detectedPlayer2) detectedPlayer2 = 'Jogador 2';

  let p1Name = detectedPlayer1;
  let p2Name = detectedPlayer2;
  let isP1First = true;

  // Only assign perspective to loggedInUserName if it genuinely matches one of the two players in the log!
  if (loggedInUserName) {
    const cleanUser = loggedInUserName.toLowerCase().trim();
    if (detectedPlayer2.toLowerCase().trim() === cleanUser) {
      // The logged-in user is Player 2 (went second)
      p1Name = detectedPlayer2;
      p2Name = detectedPlayer1;
      isP1First = false;
    } else if (detectedPlayer1.toLowerCase().trim() === cleanUser) {
      // The logged-in user is Player 1 (went first)
      p1Name = detectedPlayer1;
      p2Name = detectedPlayer2;
      isP1First = true;
    }
  }

  const p1Cards: string[] = [];
  const p2Cards: string[] = [];

  // Break log into turns
  interface RawTurnBlock {
    turnNumber: number;
    title: string;
    rawLines: string[];
    player: 'player1' | 'player2';
    playerName: string;
  }

  const rawTurns: RawTurnBlock[] = [];
  let currentBlock: RawTurnBlock = {
    turnNumber: 0,
    title: 'Preparação / Setup',
    rawLines: [],
    player: 'player1',
    playerName: p1Name
  };

  for (const line of lines) {
    const turnMatch = line.match(/^(?:Turn|Turno)\s*#?\s*(\d+)\s*-\s*(.+)$/i);
    if (turnMatch) {
      if (currentBlock.rawLines.length > 0 || currentBlock.turnNumber > 0) {
        rawTurns.push(currentBlock);
      }
      const tNum = parseInt(turnMatch[1], 10);
      const remainder = turnMatch[2].toLowerCase();
      const isCurrentP1 = remainder.includes(p1Name.toLowerCase()) || remainder.includes('my turn') || remainder.includes('seu turno');

      currentBlock = {
        turnNumber: tNum,
        title: line,
        rawLines: [],
        player: isCurrentP1 ? 'player1' : 'player2',
        playerName: isCurrentP1 ? p1Name : p2Name
      };
    } else {
      currentBlock.rawLines.push(line);
    }
  }
  if (currentBlock.rawLines.length > 0) {
    rawTurns.push(currentBlock);
  }

  // Board state trackers
  let p1Active: string | undefined = undefined;
  let p1Bench: string[] = [];
  let p1PrizesRemaining = 6;
  let p1ActiveDamage = 0;
  let p1ActiveEnergies: string[] = [];

  let p2Active: string | undefined = undefined;
  let p2Bench: string[] = [];
  let p2PrizesRemaining = 6;
  let p2ActiveDamage = 0;
  let p2ActiveEnergies: string[] = [];

  let stadiumInPlay: string | undefined = undefined;

  let p1PrizesTaken = 0;
  let p2PrizesTaken = 0;
  let matchResult: 'win' | 'loss' | 'draw' = 'win';
  let isGameOver = false;
  let gameOverWinner: 'player1' | 'player2' | undefined = undefined;
  let gameEndReason: string | undefined = undefined;

  const processedTurns: BattleTurnSnapshot[] = [];

  for (const block of rawTurns) {
    const actions: BattleTurnAction[] = [];
    let p1KnockedOutThisTurn: string | undefined = undefined;
    let p2KnockedOutThisTurn: string | undefined = undefined;
    const turnEvolutions: {
      player: 'player1' | 'player2';
      fromCard: string;
      toCard: string;
      isSpotActive: boolean;
    }[] = [];
    const evolvedCardsInTurn: string[] = [];

    for (let i = 0; i < block.rawLines.length; i++) {
      const line = block.rawLines[i];
      const lower = line.toLowerCase();
      const actionId = `turn-${block.turnNumber}-act-${i}`;

      // Determine action performer accurately
      const isLineExplicitP1 = lower.includes(p1Name.toLowerCase());
      const isLineExplicitP2 = lower.includes(p2Name.toLowerCase());

      let actor: 'player1' | 'player2' = block.player;
      if (isLineExplicitP1 && !isLineExplicitP2) {
        actor = 'player1';
      } else if (isLineExplicitP2 && !isLineExplicitP1) {
        actor = 'player2';
      } else {
        actor = block.player;
      }
      const actorName = actor === 'player1' ? p1Name : p2Name;

      // Classify Action Type
      if (lower.includes('drew') || lower.includes('comprou')) {
        actions.push({
          id: actionId,
          type: 'draw',
          player: actor,
          playerName: actorName,
          description: line
        });
      } else if (lower.includes('prize card') || lower.includes('carta de prêmio') || lower.includes('cartas de prêmio') || lower.includes('pegou um prêmio') || lower.includes('took a prize') || lower.includes('todas as cartas de prêmio')) {
        let count = 1;
        if (lower.includes('todas as cartas') || lower.includes('all prize')) {
          count = actor === 'player1' ? p1PrizesRemaining : p2PrizesRemaining;
        } else {
          const prizeCountMatch = line.match(/(\d+)\s*(?:Prize|carta)/i);
          if (prizeCountMatch) {
            count = parseInt(prizeCountMatch[1], 10) || 1;
          }
        }

        if (actor === 'player1') {
          p1PrizesTaken += count;
          p1PrizesRemaining = Math.max(0, p1PrizesRemaining - count);
        } else {
          p2PrizesTaken += count;
          p2PrizesRemaining = Math.max(0, p2PrizesRemaining - count);
        }

        actions.push({
          id: actionId,
          type: 'prize',
          player: actor,
          playerName: actorName,
          prizesTaken: count,
          description: line
        });
      } else if (lower.includes('knocked out') || lower.includes('nocauteado') || lower.includes('nocauteou')) {
        // Find which Pokemon was knocked out
        const isP1Victim = lower.includes(`de ${p1Name.toLowerCase()}`) || (lower.includes(p1Name.toLowerCase()) && !lower.includes('venceu') && !lower.includes('won'));
        const isP2Victim = lower.includes(`de ${p2Name.toLowerCase()}`) || lower.includes(p2Name.toLowerCase());

        let koCard = '';
        const ptMatch = line.match(/^[-•*]?\s*([^.\n!]+?)\s+de\s+/i);
        const enMatch = line.match(/^[-•*]?\s*([^.\n!]+?)\s+was\s+knocked\s+out/i);
        if (ptMatch) koCard = ptMatch[1].trim();
        else if (enMatch) koCard = enMatch[1].trim();

        if (isP2Victim || (!isP1Victim && actor === 'player1')) {
          // P2 victim: check active spot first if it matches
          if (p2Active && isCardMatch(p2Active, koCard)) {
            p2KnockedOutThisTurn = p2Active;
            p2Active = undefined;
            p2ActiveDamage = 0;
            p2ActiveEnergies = [];
          } else if (koCard && p2Bench.some(b => isCardMatch(b, koCard))) {
            p2Bench = p2Bench.filter(b => !isCardMatch(b, koCard));
          } else {
            // If koCard is not found on bench, only clear active if it matches or koCard is empty
            if (p2Active && (!koCard || isCardMatch(p2Active, koCard))) {
              p2KnockedOutThisTurn = p2Active;
              p2Active = undefined;
              p2ActiveDamage = 0;
              p2ActiveEnergies = [];
            } else if (p2Bench.length > 0) {
              p2Bench.pop();
            }
          }
        } else {
          // P1 victim: check active spot first if it matches
          if (p1Active && isCardMatch(p1Active, koCard)) {
            p1KnockedOutThisTurn = p1Active;
            p1Active = undefined;
            p1ActiveDamage = 0;
            p1ActiveEnergies = [];
          } else if (koCard && p1Bench.some(b => isCardMatch(b, koCard) || (koCard.toLowerCase().includes('dusknoir') && b.toLowerCase().includes('dusk')))) {
            p1Bench = p1Bench.filter(b => !isCardMatch(b, koCard) && !(koCard.toLowerCase().includes('dusknoir') && b.toLowerCase().includes('dusk')));
          } else {
            // If koCard is not found on bench, only clear active if it matches or koCard is empty
            if (p1Active && (!koCard || isCardMatch(p1Active, koCard))) {
              p1KnockedOutThisTurn = p1Active;
              p1Active = undefined;
              p1ActiveDamage = 0;
              p1ActiveEnergies = [];
            } else if (p1Bench.length > 0) {
              p1Bench.pop();
            }
          }
        }

        actions.push({
          id: actionId,
          type: 'knockout',
          player: actor,
          playerName: actorName,
          cardName: koCard,
          description: line
        });
      } else if (lower.includes('used') && (lower.includes('dealt') || lower.includes('damage') || lower.includes('causou') || lower.includes('dano') || lower.includes('usou'))) {
        let dmg = 0;
        const dmgMatch = line.match(/(\d+)\s*(?:damage|de dano)/i);
        if (dmgMatch) {
          dmg = parseInt(dmgMatch[1], 10);
        }
        const attackerCard = extractCardName(line);

        // Apply damage to defender active
        if (actor === 'player1') {
          p2ActiveDamage += dmg;
        } else {
          p1ActiveDamage += dmg;
        }

        actions.push({
          id: actionId,
          type: 'attack',
          player: actor,
          playerName: actorName,
          cardName: attackerCard,
          damage: dmg,
          description: line
        });
      } else if (lower.includes('evolved') || lower.includes('evoluiu') || lower.includes('evolve')) {
        const evoPt = line.match(/evoluiu\s+(.+?)\s+para\s+([^.\n!]+?)(?:\s+no\s+(?:Campo Ativo|Banco)|\.|\!|$)/i);
        const evoEn = line.match(/evolv(?:ed|e)\s+(?:Active\s+)?(.+?)\s+(?:in)?to\s+([^.\n!]+?)(?:\s+(?:in the Active Spot|on the Bench|onto the Bench)|\.|\!|$)/i);
        
        const isTargetActive = lower.includes('campo ativo') || lower.includes('active spot');
        let fromMon = '';
        let toMon = '';
        if (evoPt) {
          fromMon = evoPt[1].trim();
          toMon = evoPt[2].trim();
        } else if (evoEn) {
          fromMon = evoEn[1].trim();
          toMon = evoEn[2].trim();
        } else {
          toMon = extractCardName(line);
        }

        toMon = toMon.replace(/\s+(?:no\s+banco|no\s+campo\s+ativo|on\s+the\s+bench|in\s+the\s+active\s+spot).*/i, '').trim();
        fromMon = fromMon.replace(/^(?:active|ativo)\s+/i, '').trim();

        let isSpotActive = false;
        if (actor === 'player1') {
          p1Cards.push(toMon);
          if ((isTargetActive && (!fromMon || isCardMatch(p1Active, fromMon))) || (p1Active && fromMon && isCardMatch(p1Active, fromMon))) {
            p1Active = toMon;
            isSpotActive = true;
          } else {
            const idx = p1Bench.findIndex(b => fromMon ? isCardMatch(b, fromMon) : true);
            if (idx !== -1) {
              p1Bench[idx] = toMon;
            } else {
              p1Bench.push(toMon);
            }
          }
        } else {
          p2Cards.push(toMon);
          if ((isTargetActive && (!fromMon || isCardMatch(p2Active, fromMon))) || (p2Active && fromMon && isCardMatch(p2Active, fromMon))) {
            p2Active = toMon;
            isSpotActive = true;
          } else {
            const idx = p2Bench.findIndex(b => fromMon ? isCardMatch(b, fromMon) : true);
            if (idx !== -1) {
              p2Bench[idx] = toMon;
            } else {
              p2Bench.push(toMon);
            }
          }
        }

        turnEvolutions.push({
          player: actor,
          fromCard: fromMon,
          toCard: toMon,
          isSpotActive
        });
        if (toMon && !evolvedCardsInTurn.includes(toMon)) {
          evolvedCardsInTurn.push(toMon);
        }

        actions.push({
          id: actionId,
          type: 'play',
          player: actor,
          playerName: actorName,
          cardName: toMon,
          description: line
        });
      } else if (lower.includes('promoted') || lower.includes('promoveu')) {
        let promotedCard = extractCardName(line);
        const promoPt = line.match(/promoveu\s+(.+?)\s+para\s+o\s+campo\s+ativo/i);
        const promoEn = line.match(/promoted\s+(.+?)\s+to\s+the\s+active\s+spot/i);
        if (promoPt) promotedCard = promoPt[1].trim();
        else if (promoEn) promotedCard = promoEn[1].trim();

        if (actor === 'player1') {
          p1Active = promotedCard;
          p1ActiveDamage = 0;
          p1ActiveEnergies = [];
          const idx = p1Bench.findIndex(b => isCardMatch(b, promotedCard));
          if (idx !== -1) p1Bench.splice(idx, 1);
        } else {
          p2Active = promotedCard;
          p2ActiveDamage = 0;
          p2ActiveEnergies = [];
          const idx = p2Bench.findIndex(b => isCardMatch(b, promotedCard));
          if (idx !== -1) p2Bench.splice(idx, 1);
        }
        actions.push({
          id: actionId,
          type: 'play',
          player: actor,
          playerName: actorName,
          cardName: promotedCard,
          description: line
        });
      } else if (lower.includes('attached') || lower.includes('ligou') || lower.includes('anexou') || lower.includes('energy') || lower.includes('energia')) {
        const energyCard = extractCardName(line);
        if (actor === 'player1') {
          p1ActiveEnergies.push(energyCard);
        } else {
          p2ActiveEnergies.push(energyCard);
        }
        actions.push({
          id: actionId,
          type: 'energy',
          player: actor,
          playerName: actorName,
          cardName: energyCard,
          description: line
        });
      } else if (lower.includes('ability') || lower.includes('habilidade') || lower.includes('used ability') || lower.includes('ativou')) {
        const abilityCard = extractCardName(line);
        actions.push({
          id: actionId,
          type: 'ability',
          player: actor,
          playerName: actorName,
          cardName: abilityCard,
          description: line
        });
      } else if (lower.includes('retreated') || lower.includes('recuou') || lower.includes('switch') || lower.includes('trocou')) {
        actions.push({
          id: actionId,
          type: 'retreat',
          player: actor,
          playerName: actorName,
          description: line
        });
      } else if (lower.includes('stadium') || lower.includes('estádio')) {
        stadiumInPlay = extractCardName(line);
        actions.push({
          id: actionId,
          type: 'stadium',
          player: actor,
          playerName: actorName,
          cardName: stadiumInPlay,
          description: line
        });
      } else if (lower.includes('played') || lower.includes('jogou') || lower.includes('colocou') || lower.includes('put')) {
        const placedCard = extractCardName(line);
        if (actor === 'player1') {
          p1Cards.push(placedCard);
        } else {
          p2Cards.push(placedCard);
        }

        // Check if placed in active spot or bench
        if (lower.includes('active spot') || lower.includes('campo ativo')) {
          if (actor === 'player1') {
            p1Active = placedCard;
            p1ActiveDamage = 0;
          } else {
            p2Active = placedCard;
            p2ActiveDamage = 0;
          }
        } else if (lower.includes('bench') || lower.includes('banco')) {
          // Handle multi-cards e.g. "Duskull e Charmander"
          const ptMatch = line.match(/colocou\s+(.+?)\s+no\s+Banco/i);
          const enMatch = line.match(/(?:played|put)\s+(.+?)\s+(?:to|onto)\s+the\s+Bench/i);
          if (ptMatch || enMatch) {
            const raw = (ptMatch ? ptMatch[1] : enMatch![1]).trim();
            const splitMons = raw.includes(' e ') 
              ? raw.split(' e ') 
              : raw.includes(' and ') 
              ? raw.split(' and ') 
              : [raw];
            for (const sm of splitMons) {
              const clean = sm.trim();
              if (clean) {
                const countMatch = clean.match(/^(\d+)\s+(.+)$/);
                const count = countMatch ? parseInt(countMatch[1], 10) : 1;
                const mon = countMatch ? countMatch[2].trim() : clean;
                for (let c = 0; c < count; c++) {
                  if (actor === 'player1' && p1Bench.length < 5) p1Bench.push(mon);
                  else if (actor === 'player2' && p2Bench.length < 5) p2Bench.push(mon);
                }
              }
            }
          } else {
            if (actor === 'player1' && p1Bench.length < 5) {
              p1Bench.push(placedCard);
            } else if (actor === 'player2' && p2Bench.length < 5) {
              p2Bench.push(placedCard);
            }
          }
        }

        actions.push({
          id: actionId,
          type: 'play',
          player: actor,
          playerName: actorName,
          cardName: placedCard,
          description: line
        });
      } else {
        actions.push({
          id: actionId,
          type: 'other',
          player: actor,
          playerName: actorName,
          description: line
        });
      }

      // Check win/loss phrases
      if (lower.includes('não tem mais pokémon em jogo') || lower.includes('no more pokémon in play')) {
        isGameOver = true;
        if (lower.includes(p2Name.toLowerCase())) {
          p2Active = undefined;
          p2Bench = [];
          gameOverWinner = 'player1';
          matchResult = 'win';
          gameEndReason = `${p2Name} não tem mais Pokémon em jogo.`;
        } else {
          p1Active = undefined;
          p1Bench = [];
          gameOverWinner = 'player2';
          matchResult = 'loss';
          gameEndReason = `${p1Name} não tem mais Pokémon em jogo.`;
        }
      }

      if (lower.includes('won the game') || lower.includes('venceu a partida') || lower.includes('venceu!')) {
        isGameOver = true;
        if (lower.includes(p1Name.toLowerCase())) {
          matchResult = 'win';
          gameOverWinner = 'player1';
          p1PrizesRemaining = 0;
          p1PrizesTaken = 6;
          gameEndReason = `${p1Name} venceu a partida!`;
        } else {
          matchResult = 'loss';
          gameOverWinner = 'player2';
          p2PrizesRemaining = 0;
          p2PrizesTaken = 6;
          gameEndReason = `${p2Name} venceu a partida!`;
        }
      } else if (lower.includes('conceded') || lower.includes('concedeu')) {
        isGameOver = true;
        if (lower.includes(p2Name.toLowerCase())) {
          matchResult = 'win';
          gameOverWinner = 'player1';
          gameEndReason = `${p2Name} concedeu a partida.`;
        } else {
          matchResult = 'loss';
          gameOverWinner = 'player2';
          gameEndReason = `${p1Name} concedeu a partida.`;
        }
      }
    }

    // In turn 0 (Setup), ensure active Pokémon are set and not duplicated on bench
    if (block.turnNumber === 0) {
      if (!p1Active && p1Cards.length > 0) {
        p1Active = p1Cards[0];
        p1Bench = p1Bench.filter(b => b.toLowerCase() !== p1Active!.toLowerCase());
      }
      if (!p2Active && p2Cards.length > 0) {
        p2Active = p2Cards[0];
        p2Bench = p2Bench.filter(b => b.toLowerCase() !== p2Active!.toLowerCase());
      }
    }

    processedTurns.push({
      turnNumber: block.turnNumber,
      turnTitle: block.title,
      player: block.player,
      playerName: block.playerName,
      actions,
      p1Active,
      p1Bench: [...p1Bench].slice(0, 5),
      p1PrizesRemaining: Math.max(0, p1PrizesRemaining),
      p1ActiveDamage,
      p1ActiveEnergies: [...p1ActiveEnergies],
      p2Active,
      p2Bench: [...p2Bench].slice(0, 5),
      p2PrizesRemaining: Math.max(0, p2PrizesRemaining),
      p2ActiveDamage,
      p2ActiveEnergies: [...p2ActiveEnergies],
      stadiumInPlay,
      isGameOver: isGameOver || p1PrizesRemaining <= 0 || p2PrizesRemaining <= 0,
      winner: gameOverWinner || (matchResult === 'win' ? 'player1' : 'player2'),
      gameEndReason,
      evolvedCards: [...evolvedCardsInTurn],
      evolutions: [...turnEvolutions],
      p1KnockedOutThisTurn,
      p2KnockedOutThisTurn
    });
  }

  // Result conclusion if not explicitly set
  if (p1PrizesTaken >= 6 || p2PrizesRemaining <= 0) {
    matchResult = 'win';
  } else if (p2PrizesTaken >= 6 || p1PrizesRemaining <= 0) {
    matchResult = 'loss';
  }

  const p1Archetype = detectArchetypeFromCards(p1Cards);
  const p2Archetype = detectArchetypeFromCards(p2Cards);

  const totalTurns = processedTurns.filter(t => t.turnNumber > 0).length || 1;

  return {
    id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    userId: '',
    player1Name: p1Name,
    player2Name: p2Name,
    playerDeckArchetype: p1Archetype.name,
    opponentDeckArchetype: p2Archetype.name,
    playerDeckName: p1Archetype.name,
    result: matchResult,
    wentFirst: isP1First,
    totalTurns: totalTurns,
    p1PrizesTaken: Math.min(6, p1PrizesTaken),
    p2PrizesTaken: Math.min(6, p2PrizesTaken),
    finalScore: `${Math.min(6, p1PrizesTaken)} - ${Math.min(6, p2PrizesTaken)}`,
    format: 'Standard',
    date: new Date().toISOString(),
    rawLog: rawLog,
    turns: processedTurns
  };
}

// Built-in realistic sample logs (Portuguese & English) for instant one-click testing
export const SAMPLE_PT_LOG = `Preparação
Felipe Wilks jogou 1 moeda(s), com resultado de 1 cara(s) e 0 coroa(s).
Felipe Wilks comprou 7 cartas para a mão inicial.
- 7 cartas compradas.
Guilherme comprou 7 cartas para a mão inicial.
- 7 cartas compradas.
Felipe Wilks colocou Charmander no Campo Ativo.
Felipe Wilks colocou Pidgey no Banco.
Guilherme colocou Dreepy no Campo Ativo.

Turno # 1 - Turno de Felipe Wilks
Felipe Wilks comprou uma carta.
Felipe Wilks jogou Pedaço de Poffin de Companheiro.
- Felipe Wilks procurou no baralho e colocou Duskull e Charmander no Banco.
Felipe Wilks ligou Energia de Fogo Básica a Charmander no Campo Ativo.
Felipe Wilks encerrou seu turno.

Turno # 2 - Turno de Guilherme
Guilherme comprou uma carta.
Guilherme jogou Pedaço de Poffin de Companheiro.
- Guilherme colocou 2 Dreepy no Banco.
Guilherme jogou Pesquisa de Professores e descartou sua mão.
Guilherme comprou 7 cartas.
Guilherme ligou Energia Psíquica Básica a Dreepy no Campo Ativo.
Guilherme encerrou seu turno.

Turno # 3 - Turno de Felipe Wilks
Felipe Wilks comprou uma carta.
Felipe Wilks jogou Doce Raro.
- Felipe Wilks evoluiu Charmander para Charizard ex no Campo Ativo.
Felipe Wilks ativou a habilidade Reinado Infernal de Charizard ex.
- Felipe Wilks ligou 3 Energias de Fogo Básicas do baralho a seus Pokémon.
Felipe Wilks jogou Ultra Bola e descartou 2 cartas.
- Felipe Wilks procurou Pidgeot ex no baralho.
Felipe Wilks jogou Doce Raro e evoluiu Pidgey para Pidgeot ex no Banco.
Felipe Wilks ativou a habilidade Busca Rápida de Pidgeot ex.
Charizard ex de Felipe Wilks usou Queima Ardente e causou 180 de dano a Dreepy de Guilherme.
Dreepy de Guilherme foi Nocauteado!
Felipe Wilks pegou 1 carta de Prêmio.

Turno # 4 - Turno de Guilherme
Guilherme promoveu Dreepy para o Campo Ativo.
Guilherme comprou uma carta.
Guilherme jogou Doce Raro e evoluiu Dreepy para Dragapult ex.
Guilherme ligou Energia de Fogo Básica a Dragapult ex.
Dragapult ex de Guilherme usou Mergulho Fantasma e causou 200 de dano a Charizard ex de Felipe Wilks e 60 de dano a Pidgeot ex no Banco.

Turno # 5 - Turno de Felipe Wilks
Felipe Wilks comprou uma carta.
Felipe Wilks ativou a habilidade Busca Rápida de Pidgeot ex.
Felipe Wilks jogou Ordens da Chefia (Ghetsis).
- Dragapult ex de Guilherme permaneceu no Campo Ativo.
Felipe Wilks usou a habilidade Explosão Espiritual de Dusknoir e colocou 13 contadores de dano em Dragapult ex!
Dusknoir de Felipe Wilks foi Nocauteado.
Guilherme pegou 1 carta de Prêmio.
Charizard ex de Felipe Wilks usou Queima Ardente e causou 240 de dano a Dragapult ex de Guilherme.
Dragapult ex de Guilherme foi Nocauteado!
Felipe Wilks pegou 2 cartas de Prêmio.

Turno # 6 - Turno de Guilherme
Guilherme promoveu Dreepy para o Campo Ativo.
Guilherme jogou Iono.
Ambos os jogadores embaralharam suas mãos.
Guilherme comprou 5 cartas.
Felipe Wilks comprou 3 cartas.
Guilherme ligou Energia a Dreepy.
Guilherme encerrou seu turno sem atacar.

Turno # 7 - Turno de Felipe Wilks
Felipe Wilks comprou uma carta.
Felipe Wilks usou Queima Ardente em Dreepy de Guilherme e causou 270 de dano.
Dreepy de Guilherme foi Nocauteado!
Felipe Wilks pegou 1 carta de Prêmio.
Guilherme não tem mais Pokémon em jogo.
Felipe Wilks pegou todas as cartas de Prêmio restantes.
Felipe Wilks venceu a partida!`;

export const SAMPLE_EN_LOG = `Setup
Player1 flipped 1 coin(s), resulting in 1 heads and 0 tails.
Player1 drew 7 cards for the opening hand.
Opponent drew 7 cards for the opening hand.
Player1 played Ralts to the Active Spot.
Player1 played Ralts to the Bench.
Opponent played Lugia V to the Active Spot.

Turn # 1 - Player1's Turn
Player1 drew a card.
Player1 played Buddy-Buddy Poffin.
- Player1 drew 2 cards and played them to the Bench.
   • Ralts
   • Scream Tail
Player1 attached Basic Psychic Energy to Ralts in the Active Spot.
Player1 ended their turn.

Turn # 2 - Opponent's Turn
Opponent drew a card.
Opponent played Ultra Ball and discarded 2 Archeops.
- Opponent drew Lumineon V.
Opponent played Lumineon V to the Bench.
Opponent used Lumineon V's Luminous Sign ability.
Opponent played Professor's Research.
Opponent attached Double Turbo Energy to Lugia V.
Opponent ended their turn.

Turn # 3 - Player1's Turn
Player1 drew a card.
Player1 evolved Ralts to Kirlia on the Bench.
Player1 evolved Active Ralts to Kirlia.
Player1 used Refinement ability and discarded Basic Psychic Energy.
Player1 drew 2 cards.
Player1 played Rare Candy to evolve Kirlia to Gardevoir ex!
Player1 activated Psychic Embrace ability and attached 3 Psychic Energies from the discard pile.
Gardevoir ex used Miracle Force and dealt 190 damage to Lugia V.

Turn # 4 - Opponent's Turn
Opponent drew a card.
Opponent evolved Lugia V to Lugia VSTAR.
Opponent activated VSTAR Power: Summoning Star!
Opponent placed 2 Archeops onto the Bench.
Archeops activated Primal Turbo and attached 2 Special Energies to Lugia VSTAR.
Lugia VSTAR used Tempest Dive and dealt 220 damage.
Gardevoir ex was Knocked Out!
Opponent took 2 Prize cards.

Turn # 5 - Player1's Turn
Player1 promoted Scream Tail to the Active Spot.
Player1 drew a card.
Player1 used Psychic Embrace to attach 4 Psychic Energies to Scream Tail.
Player1 played Boss's Orders and switched Opponent's Benched Lumineon V to the Active Spot.
Scream Tail used Roaring Scream and dealt 280 damage to Lumineon V!
Lumineon V was Knocked Out!
Player1 took 2 Prize cards.

Turn # 6 - Opponent's Turn
Opponent conceded the game.
Player1 won the game!`;
