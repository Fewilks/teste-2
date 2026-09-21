// ============================================================================
// POKÉMON CREATURE SPRITES & AVATARS
// Exclusivo para avatares de usuários, ícones de arquétipo e telas de loading.
// NÃO altera o banco ou a resolução de cartas TCG.
// ============================================================================

export interface PokemonAvatarOption {
  id: string;
  name: string;
  category: 'Popular' | 'Fantasma & Sombrio' | 'Elétrico' | 'Fogo & Dragão' | 'Psíquico' | 'Água & Grama' | 'Lendários & Ex';
}

export const POPULAR_POKEMON_AVATARS: PokemonAvatarOption[] = [
  // Populares / Mascotes
  { id: 'pikachu', name: 'Pikachu', category: 'Popular' },
  { id: 'gengar', name: 'Gengar', category: 'Popular' },
  { id: 'charizard', name: 'Charizard', category: 'Popular' },
  { id: 'lucario', name: 'Lucario', category: 'Popular' },
  { id: 'mew', name: 'Mew', category: 'Popular' },
  { id: 'eevee', name: 'Eevee', category: 'Popular' },
  { id: 'snorlax', name: 'Snorlax', category: 'Popular' },

  // Fantasma & Sombrio (Temática Spirits)
  { id: 'gengar-gmax', name: 'Gengar Gigantamax', category: 'Fantasma & Sombrio' },
  { id: 'umbreon', name: 'Umbreon', category: 'Fantasma & Sombrio' },
  { id: 'sableye', name: 'Sableye', category: 'Fantasma & Sombrio' },
  { id: 'dusclops', name: 'Dusclops', category: 'Fantasma & Sombrio' },
  { id: 'dusknoir', name: 'Dusknoir', category: 'Fantasma & Sombrio' },
  { id: 'absol', name: 'Absol', category: 'Fantasma & Sombrio' },
  { id: 'roaringmoon', name: 'Roaring Moon', category: 'Fantasma & Sombrio' },

  // Elétrico
  { id: 'raichu', name: 'Raichu', category: 'Elétrico' },
  { id: 'miraidon', name: 'Miraidon', category: 'Elétrico' },
  { id: 'ironhands', name: 'Iron Hands', category: 'Elétrico' },
  { id: 'rotom', name: 'Rotom', category: 'Elétrico' },
  { id: 'rotom-wash', name: 'Rotom Wash', category: 'Elétrico' },
  { id: 'raikou', name: 'Raikou', category: 'Elétrico' },

  // Fogo & Dragão
  { id: 'dragapult', name: 'Dragapult', category: 'Fogo & Dragão' },
  { id: 'rayquaza', name: 'Rayquaza', category: 'Fogo & Dragão' },
  { id: 'garchomp', name: 'Garchomp', category: 'Fogo & Dragão' },
  { id: 'dragonite', name: 'Dragonite', category: 'Fogo & Dragão' },
  { id: 'ceruledge', name: 'Ceruledge', category: 'Fogo & Dragão' },
  { id: 'moltres', name: 'Moltres', category: 'Fogo & Dragão' },
  { id: 'koraidon', name: 'Koraidon', category: 'Fogo & Dragão' },
  { id: 'ragingbolt', name: 'Raging Bolt', category: 'Fogo & Dragão' },

  // Psíquico
  { id: 'mewtwo', name: 'Mewtwo', category: 'Psíquico' },
  { id: 'gardevoir', name: 'Gardevoir', category: 'Psíquico' },
  { id: 'alakazam', name: 'Alakazam', category: 'Psíquico' },
  { id: 'espeon', name: 'Espeon', category: 'Psíquico' },
  { id: 'sylveon', name: 'Sylveon', category: 'Psíquico' },
  { id: 'fezandipiti', name: 'Fezandipiti', category: 'Psíquico' },

  // Água & Grama
  { id: 'greninja', name: 'Greninja', category: 'Água & Grama' },
  { id: 'blastoise', name: 'Blastoise', category: 'Água & Grama' },
  { id: 'venusaur', name: 'Venusaur', category: 'Água & Grama' },
  { id: 'palkia', name: 'Palkia', category: 'Água & Grama' },
  { id: 'chienpao', name: 'Chien-Pao', category: 'Água & Grama' },
  { id: 'ogerpon', name: 'Ogerpon', category: 'Água & Grama' },

  // Outros Destaques
  { id: 'terapagos', name: 'Terapagos', category: 'Lendários & Ex' },
  { id: 'lugia', name: 'Lugia', category: 'Lendários & Ex' },
  { id: 'scizor', name: 'Scizor', category: 'Lendários & Ex' },
  { id: 'dudunsparce', name: 'Dudunsparce', category: 'Lendários & Ex' },
  { id: 'substitute', name: 'Substituto (Mascote)', category: 'Lendários & Ex' }
];

/**
 * Normaliza nomes de arquétipos ou apelidos para IDs compatíveis com Pokemon Showdown & PokeAPI
 */
export function sanitizePokemonCreatureName(input: string): string {
  if (!input) return 'substitute';
  let s = input.toLowerCase().trim();

  // Remove sufixos comuns de cartas TCG como "ex", "vstar", "vmax", "v", "radiant", "baby", "deck"
  s = s.replace(/\b(ex|vstar|vmax|v|radiant|radiante|baby|deck|forma|forme|origin|origem|paldea|galar|alola|hisui)\b/gi, '').trim();

  // Mapeamentos específicos
  const aliasMap: Record<string, string> = {
    'roaring moon': 'roaringmoon',
    'iron hands': 'ironhands',
    'iron thorns': 'ironthorns',
    'iron crown': 'ironcrown',
    'iron bundle': 'ironbundle',
    'iron valiant': 'ironvaliant',
    'raging bolt': 'ragingbolt',
    'chien-pao': 'chienpao',
    'chien pao': 'chienpao',
    'origin forme palkia': 'palkia-origin',
    'palkia vstar': 'palkia-origin',
    'origin forme dialga': 'dialga-origin',
    'dialga vstar': 'dialga-origin',
    'teal mask ogerpon': 'ogerpon',
    'ogerpon ex': 'ogerpon',
    'bloodmoon ursaluna': 'ursaluna-bloodmoon',
    'squawkabilly': 'squawkabilly',
    'fan rotom': 'rotom-fan',
    'rotom v': 'rotom',
    'charizard ex': 'charizard',
    'dragapult ex': 'dragapult',
    'gardevoir ex': 'gardevoir',
    'pidgeot ex': 'pidgeot',
    'miraidon ex': 'miraidon',
    'gholdengo ex': 'gholdengo',
    'terapagos ex': 'terapagos',
    'regidrago vstar': 'regidrago',
    'lugia vstar': 'lugia',
    'fezandipiti ex': 'fezandipiti',
    'mega lopunny': 'lopunny-mega',
    'mew ex': 'mew',
    'clefairy ex': 'clefairy',
    "lillie's clefairy": 'clefairy',
  };

  if (aliasMap[s]) return aliasMap[s];

  // Limpa caracteres especiais mantendo hífen se já existir
  s = s.replace(/[^a-z0-9-]/g, '');
  return s || 'substitute';
}

/**
 * Retorna lista ordenada de URLs para renderizar o sprite da criatura Pokémon
 * com múltiplos fallbacks (Showdown animated -> Showdown gen5 -> PokeAPI artwork -> PokeAPI icon -> SVG)
 */
export function getCreatureSpriteHierarchy(nameOrArchetype: string): string[] {
  const clean = sanitizePokemonCreatureName(nameOrArchetype);

  return [
    // 1. Showdown Animated GIF (perfeito para visual dinâmico)
    `https://play.pokemonshowdown.com/sprites/ani/${clean}.gif`,
    // 2. Showdown Gen 5 Pixel Art
    `https://play.pokemonshowdown.com/sprites/gen5/${clean}.png`,
    // 3. Showdown Dex standard
    `https://play.pokemonshowdown.com/sprites/dex/${clean}.png`,
    // 4. PokeAPI Showdown Animated (Mirror)
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${clean}.gif`,
    // 5. Fallback com mascote substituto do Showdown
    `https://play.pokemonshowdown.com/sprites/dex/substitute.png`
  ];
}
