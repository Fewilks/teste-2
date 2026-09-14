// Utility to resolve authentic Pokemon TCG Card Images, Artworks, and Types
// Supports English, Portuguese, and PTCGL log naming variations

export const POKEMON_CARD_BACK = 'https://images.pokemontcg.io/card-back.png';
export const POKEMON_CARD_BACK_FALLBACK = 'https://archives.bulbagarden.net/media/upload/1/17/Cardback.jpg';

export interface CardMetadata {
  id: string;
  name: string;
  category: 'pokemon' | 'supporter' | 'item' | 'tool' | 'stadium' | 'energy';
  energyType?: 'fire' | 'water' | 'grass' | 'lightning' | 'psychic' | 'fighting' | 'darkness' | 'metal' | 'dragon' | 'colorless';
  stage?: 'BÁSICO' | 'ESTÁGIO 1' | 'ESTÁGIO 2' | 'VSTAR' | 'VMAX' | 'EX' | 'TREINADOR' | 'ENERGIA';
  hp?: number;
  imageUrl: string;
  setCode?: string;
  setNumber?: string;
}

// Canonical database of modern standard cards (Scarlet & Violet & Sword & Shield staples)
export const CARD_IMAGE_DATABASE: Record<string, CardMetadata> = {
  // --- POKEMON ---
  'charizard ex': {
    id: 'sv3-125',
    name: 'Charizard ex',
    category: 'pokemon',
    energyType: 'darkness',
    stage: 'ESTÁGIO 2',
    hp: 330,
    imageUrl: 'https://images.pokemontcg.io/sv3/125.png',
    setCode: 'OBF',
    setNumber: '125'
  },
  'charmander': {
    id: 'sv3-26',
    name: 'Charmander',
    category: 'pokemon',
    energyType: 'fire',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv3/26.png',
    setCode: 'OBF',
    setNumber: '26'
  },
  'charmeleon': {
    id: 'sv3-124',
    name: 'Charmeleon',
    category: 'pokemon',
    energyType: 'fire',
    stage: 'ESTÁGIO 1',
    hp: 100,
    imageUrl: 'https://images.pokemontcg.io/sv3/124.png',
    setCode: 'OBF',
    setNumber: '124'
  },
  'radiant charizard': {
    id: 'pgo-11',
    name: 'Radiant Charizard',
    category: 'pokemon',
    energyType: 'fire',
    stage: 'BÁSICO',
    hp: 160,
    imageUrl: 'https://images.pokemontcg.io/pgo/11.png',
    setCode: 'PGO',
    setNumber: '11'
  },
  'pidgeot ex': {
    id: 'sv3-164',
    name: 'Pidgeot ex',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'ESTÁGIO 2',
    hp: 280,
    imageUrl: 'https://images.pokemontcg.io/sv3/164.png',
    setCode: 'OBF',
    setNumber: '164'
  },
  'absol ex': {
    id: 'sv3-135',
    name: 'Absol ex',
    category: 'pokemon',
    energyType: 'darkness',
    stage: 'BÁSICO',
    hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv3/135.png',
    setCode: 'OBF',
    setNumber: '135'
  },
  'budew': {
    id: 'me2-5-221',
    name: 'Budew',
    category: 'pokemon',
    energyType: 'grass',
    stage: 'BÁSICO',
    hp: 30,
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png',
    setCode: 'ME2',
    setNumber: '221'
  },
  'budew me2-5-221': {
    id: 'me2-5-221',
    name: 'Budew',
    category: 'pokemon',
    energyType: 'grass',
    stage: 'BÁSICO',
    hp: 30,
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png',
    setCode: 'ME2',
    setNumber: '221'
  },
  'budew me2 221': {
    id: 'me2-5-221',
    name: 'Budew',
    category: 'pokemon',
    energyType: 'grass',
    stage: 'BÁSICO',
    hp: 30,
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png',
    setCode: 'ME2',
    setNumber: '221'
  },
  'pidgey': {
    id: 'sv3-162',
    name: 'Pidgey',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 60,
    imageUrl: 'https://images.pokemontcg.io/sv3/162.png',
    setCode: 'OBF',
    setNumber: '162'
  },
  'pidgeotto': {
    id: 'sv3-163',
    name: 'Pidgeotto',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'ESTÁGIO 1',
    hp: 80,
    imageUrl: 'https://images.pokemontcg.io/sv3/163.png',
    setCode: 'OBF',
    setNumber: '163'
  },
  'duskull': {
    id: 'sv6pt5-18',
    name: 'Duskull',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 60,
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/18.png',
    setCode: 'SFA',
    setNumber: '18'
  },
  'dusclops': {
    id: 'sv6pt5-19',
    name: 'Dusclops',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'ESTÁGIO 1',
    hp: 90,
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/19.png',
    setCode: 'SFA',
    setNumber: '19'
  },
  'dusknoir': {
    id: 'sv6pt5-20',
    name: 'Dusknoir',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'ESTÁGIO 2',
    hp: 160,
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/20.png',
    setCode: 'SFA',
    setNumber: '20'
  },
  'dragapult ex': {
    id: 'sv6-130',
    name: 'Dragapult ex',
    category: 'pokemon',
    energyType: 'dragon',
    stage: 'ESTÁGIO 2',
    hp: 320,
    imageUrl: 'https://images.pokemontcg.io/sv6/130.png',
    setCode: 'TWM',
    setNumber: '130'
  },
  'dreepy': {
    id: 'sv6-128',
    name: 'Dreepy',
    category: 'pokemon',
    energyType: 'dragon',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv6/128.png',
    setCode: 'TWM',
    setNumber: '128'
  },
  'drakloak': {
    id: 'sv6-129',
    name: 'Drakloak',
    category: 'pokemon',
    energyType: 'dragon',
    stage: 'ESTÁGIO 1',
    hp: 90,
    imageUrl: 'https://images.pokemontcg.io/sv6/129.png',
    setCode: 'TWM',
    setNumber: '129'
  },
  'rotom v': {
    id: 'swsh11-58',
    name: 'Rotom V',
    category: 'pokemon',
    energyType: 'lightning',
    stage: 'BÁSICO',
    hp: 190,
    imageUrl: 'https://images.pokemontcg.io/swsh11/58.png',
    setCode: 'LOR',
    setNumber: '58'
  },
  'fezandipiti ex': {
    id: 'sv6pt5-38',
    name: 'Fezandipiti ex',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/38.png',
    setCode: 'SFA',
    setNumber: '38'
  },
  'manaphy': {
    id: 'swsh9-41',
    name: 'Manaphy',
    category: 'pokemon',
    energyType: 'water',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/swsh9/41.png',
    setCode: 'BRS',
    setNumber: '41'
  },
  'radiant alakazam': {
    id: 'swsh12-59',
    name: 'Radiant Alakazam',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 130,
    imageUrl: 'https://images.pokemontcg.io/swsh12/59.png',
    setCode: 'SIT',
    setNumber: '59'
  },
  'lugia vstar': {
    id: 'swsh12-139',
    name: 'Lugia VSTAR',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'VSTAR',
    hp: 280,
    imageUrl: 'https://images.pokemontcg.io/swsh12/139.png',
    setCode: 'SIT',
    setNumber: '139'
  },
  'lugia v': {
    id: 'swsh12-138',
    name: 'Lugia V',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 220,
    imageUrl: 'https://images.pokemontcg.io/swsh12/138.png',
    setCode: 'SIT',
    setNumber: '138'
  },
  'archeops': {
    id: 'swsh12-147',
    name: 'Archeops',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'ESTÁGIO 2',
    hp: 150,
    imageUrl: 'https://images.pokemontcg.io/swsh12/147.png',
    setCode: 'SIT',
    setNumber: '147'
  },
  'cinccino': {
    id: 'sv5-137',
    name: 'Cinccino',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'ESTÁGIO 1',
    hp: 110,
    imageUrl: 'https://images.pokemontcg.io/sv5/137.png',
    setCode: 'TEF',
    setNumber: '137'
  },
  'minccino': {
    id: 'sv5-136',
    name: 'Minccino',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv5/136.png',
    setCode: 'TEF',
    setNumber: '136'
  },
  'gardevoir ex': {
    id: 'sv1-86',
    name: 'Gardevoir ex',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'ESTÁGIO 2',
    hp: 310,
    imageUrl: 'https://images.pokemontcg.io/sv1/86.png',
    setCode: 'SVI',
    setNumber: '86'
  },
  'kirlia': {
    id: 'sv1-68',
    name: 'Kirlia',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'ESTÁGIO 1',
    hp: 80,
    imageUrl: 'https://images.pokemontcg.io/sv1/68.png',
    setCode: 'SVI',
    setNumber: '68'
  },
  'ralts': {
    id: 'sv1-67',
    name: 'Ralts',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv1/67.png',
    setCode: 'SVI',
    setNumber: '67'
  },
  'scream tail': {
    id: 'sv4-86',
    name: 'Scream Tail',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 90,
    imageUrl: 'https://images.pokemontcg.io/sv4/86.png',
    setCode: 'PAR',
    setNumber: '86'
  },
  'drifloon': {
    id: 'sv1-89',
    name: 'Drifloon',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv1/89.png',
    setCode: 'SVI',
    setNumber: '89'
  },
  'munkidori': {
    id: 'sv6-95',
    name: 'Munkidori',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 110,
    imageUrl: 'https://images.pokemontcg.io/sv6/95.png',
    setCode: 'TWM',
    setNumber: '95'
  },
  'raging bolt ex': {
    id: 'sv5-123',
    name: 'Raging Bolt ex',
    category: 'pokemon',
    energyType: 'dragon',
    stage: 'BÁSICO',
    hp: 240,
    imageUrl: 'https://images.pokemontcg.io/sv5/123.png',
    setCode: 'TEF',
    setNumber: '123'
  },
  'teal mask ogerpon ex': {
    id: 'sv6-25',
    name: 'Teal Mask Ogerpon ex',
    category: 'pokemon',
    energyType: 'grass',
    stage: 'BÁSICO',
    hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv6/25.png',
    setCode: 'TWM',
    setNumber: '25'
  },
  'ogerpon': {
    id: 'sv6-25',
    name: 'Teal Mask Ogerpon ex',
    category: 'pokemon',
    energyType: 'grass',
    stage: 'BÁSICO',
    hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv6/25.png',
    setCode: 'TWM',
    setNumber: '25'
  },
  'sandy shocks ex': {
    id: 'sv4-108',
    name: 'Sandy Shocks ex',
    category: 'pokemon',
    energyType: 'fighting',
    stage: 'BÁSICO',
    hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv4/108.png',
    setCode: 'PAR',
    setNumber: '108'
  },
  'miraidon ex': {
    id: 'sv1-81',
    name: 'Miraidon ex',
    category: 'pokemon',
    energyType: 'lightning',
    stage: 'BÁSICO',
    hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv1/81.png',
    setCode: 'SVI',
    setNumber: '81'
  },
  'iron hands ex': {
    id: 'sv4-70',
    name: 'Iron Hands ex',
    category: 'pokemon',
    energyType: 'lightning',
    stage: 'BÁSICO',
    hp: 230,
    imageUrl: 'https://images.pokemontcg.io/sv4/70.png',
    setCode: 'PAR',
    setNumber: '70'
  },
  'iron thorns ex': {
    id: 'sv6-77',
    name: 'Iron Thorns ex',
    category: 'pokemon',
    energyType: 'lightning',
    stage: 'BÁSICO',
    hp: 230,
    imageUrl: 'https://images.pokemontcg.io/sv6/77.png',
    setCode: 'TWM',
    setNumber: '77'
  },
  'iron crown ex': {
    id: 'sv5-81',
    name: 'Iron Crown ex',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv5/81.png',
    setCode: 'TEF',
    setNumber: '81'
  },
  'iron valiant ex': {
    id: 'sv4-89',
    name: 'Iron Valiant ex',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv4/89.png',
    setCode: 'PAR',
    setNumber: '89'
  },
  'raikou v': {
    id: 'swsh9-48',
    name: 'Raikou V',
    category: 'pokemon',
    energyType: 'lightning',
    stage: 'BÁSICO',
    hp: 200,
    imageUrl: 'https://images.pokemontcg.io/swsh9/48.png',
    setCode: 'BRS',
    setNumber: '48'
  },
  'roaring moon ex': {
    id: 'sv4-124',
    name: 'Roaring Moon ex',
    category: 'pokemon',
    energyType: 'darkness',
    stage: 'BÁSICO',
    hp: 230,
    imageUrl: 'https://images.pokemontcg.io/sv4/124.png',
    setCode: 'PAR',
    setNumber: '124'
  },
  'roaring moon': {
    id: 'sv5-109',
    name: 'Roaring Moon',
    category: 'pokemon',
    energyType: 'darkness',
    stage: 'BÁSICO',
    hp: 140,
    imageUrl: 'https://images.pokemontcg.io/sv5/109.png',
    setCode: 'TEF',
    setNumber: '109'
  },
  'flutter mane': {
    id: 'sv5-78',
    name: 'Flutter Mane',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 90,
    imageUrl: 'https://images.pokemontcg.io/sv5/78.png',
    setCode: 'TEF',
    setNumber: '78'
  },
  'koraidon': {
    id: 'sv5-119',
    name: 'Koraidon',
    category: 'pokemon',
    energyType: 'fighting',
    stage: 'BÁSICO',
    hp: 140,
    imageUrl: 'https://images.pokemontcg.io/sv5/119.png',
    setCode: 'TEF',
    setNumber: '119'
  },
  'terapagos ex': {
    id: 'sv7-128',
    name: 'Terapagos ex',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 230,
    imageUrl: 'https://images.pokemontcg.io/sv7/128.png',
    setCode: 'SCR',
    setNumber: '128'
  },
  'noctowl': {
    id: 'sv7-115',
    name: 'Noctowl',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'ESTÁGIO 1',
    hp: 100,
    imageUrl: 'https://images.pokemontcg.io/sv7/115.png',
    setCode: 'SCR',
    setNumber: '115'
  },
  'hoothoot': {
    id: 'sv7-114',
    name: 'Hoothoot',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv7/114.png',
    setCode: 'SCR',
    setNumber: '114'
  },
  'bouffalant': {
    id: 'sv7-119',
    name: 'Bouffalant',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 100,
    imageUrl: 'https://images.pokemontcg.io/sv7/119.png',
    setCode: 'SCR',
    setNumber: '119'
  },
  'fan rotom': {
    id: 'sv7-118',
    name: 'Fan Rotom',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv7/118.png',
    setCode: 'SCR',
    setNumber: '118'
  },
  'gholdengo ex': {
    id: 'sv4-139',
    name: 'Gholdengo ex',
    category: 'pokemon',
    energyType: 'metal',
    stage: 'ESTÁGIO 1',
    hp: 260,
    imageUrl: 'https://images.pokemontcg.io/sv4/139.png',
    setCode: 'PAR',
    setNumber: '139'
  },
  'gimmighoul': {
    id: 'sv4-98',
    name: 'Gimmighoul',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 50,
    imageUrl: 'https://images.pokemontcg.io/sv4/98.png',
    setCode: 'PAR',
    setNumber: '98'
  },
  'scizor': {
    id: 'sv3-141',
    name: 'Scizor',
    category: 'pokemon',
    energyType: 'metal',
    stage: 'ESTÁGIO 1',
    hp: 140,
    imageUrl: 'https://images.pokemontcg.io/sv3/141.png',
    setCode: 'OBF',
    setNumber: '141'
  },
  'scyther': {
    id: 'sv3-4',
    name: 'Scyther',
    category: 'pokemon',
    energyType: 'grass',
    stage: 'BÁSICO',
    hp: 80,
    imageUrl: 'https://images.pokemontcg.io/sv3/4.png',
    setCode: 'OBF',
    setNumber: '4'
  },
  'pikachu ex': {
    id: 'sv8-54',
    name: 'Pikachu ex',
    category: 'pokemon',
    energyType: 'lightning',
    stage: 'BÁSICO',
    hp: 200,
    imageUrl: 'https://images.pokemontcg.io/sv8/54.png',
    setCode: 'SSP',
    setNumber: '54'
  },
  'ceruledge ex': {
    id: 'sv8-34',
    name: 'Ceruledge ex',
    category: 'pokemon',
    energyType: 'fire',
    stage: 'ESTÁGIO 1',
    hp: 270,
    imageUrl: 'https://images.pokemontcg.io/sv8/34.png',
    setCode: 'SSP',
    setNumber: '34'
  },
  'comfey': {
    id: 'swsh11-79',
    name: 'Comfey',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/swsh11/79.png',
    setCode: 'LOR',
    setNumber: '79'
  },
  'sableye': {
    id: 'swsh11-70',
    name: 'Sableye',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 80,
    imageUrl: 'https://images.pokemontcg.io/swsh11/70.png',
    setCode: 'LOR',
    setNumber: '70'
  },
  'cramorant': {
    id: 'swsh11-50',
    name: 'Cramorant',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 110,
    imageUrl: 'https://images.pokemontcg.io/swsh11/50.png',
    setCode: 'LOR',
    setNumber: '50'
  },
  'radiant greninja': {
    id: 'swsh10-46',
    name: 'Radiant Greninja',
    category: 'pokemon',
    energyType: 'water',
    stage: 'BÁSICO',
    hp: 130,
    imageUrl: 'https://images.pokemontcg.io/swsh10/46.png',
    setCode: 'ASR',
    setNumber: '46'
  },
  'mew ex': {
    id: 'sv3pt5-151',
    name: 'Mew ex',
    category: 'pokemon',
    energyType: 'psychic',
    stage: 'BÁSICO',
    hp: 180,
    imageUrl: 'https://images.pokemontcg.io/sv3pt5/151.png',
    setCode: 'MEW',
    setNumber: '151'
  },
  'snorlax': {
    id: 'pgo-55',
    name: 'Snorlax',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 150,
    imageUrl: 'https://images.pokemontcg.io/pgo/55.png',
    setCode: 'PGO',
    setNumber: '55'
  },
  'origin forme palkia vstar': {
    id: 'swsh10-40',
    name: 'Origin Forme Palkia VSTAR',
    category: 'pokemon',
    energyType: 'water',
    stage: 'VSTAR',
    hp: 280,
    imageUrl: 'https://images.pokemontcg.io/swsh10/40.png',
    setCode: 'ASR',
    setNumber: '40'
  },
  'palkia vstar': {
    id: 'swsh10-40',
    name: 'Origin Forme Palkia VSTAR',
    category: 'pokemon',
    energyType: 'water',
    stage: 'VSTAR',
    hp: 280,
    imageUrl: 'https://images.pokemontcg.io/swsh10/40.png',
    setCode: 'ASR',
    setNumber: '40'
  },
  'regidrago vstar': {
    id: 'swsh12-136',
    name: 'Regidrago VSTAR',
    category: 'pokemon',
    energyType: 'dragon',
    stage: 'VSTAR',
    hp: 280,
    imageUrl: 'https://images.pokemontcg.io/swsh12/136.png',
    setCode: 'SIT',
    setNumber: '136'
  },
  'chien-pao ex': {
    id: 'sv2-61',
    name: 'Chien-Pao ex',
    category: 'pokemon',
    energyType: 'water',
    stage: 'BÁSICO',
    hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv2/61.png',
    setCode: 'PAL',
    setNumber: '61'
  },
  'baxcalibur': {
    id: 'sv2-60',
    name: 'Baxcalibur',
    category: 'pokemon',
    energyType: 'water',
    stage: 'ESTÁGIO 2',
    hp: 160,
    imageUrl: 'https://images.pokemontcg.io/sv2/60.png',
    setCode: 'PAL',
    setNumber: '60'
  },
  'bibarel': {
    id: 'swsh9-121',
    name: 'Bibarel',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'ESTÁGIO 1',
    hp: 120,
    imageUrl: 'https://images.pokemontcg.io/swsh9/121.png',
    setCode: 'BRS',
    setNumber: '121'
  },
  'bidoof': {
    id: 'swsh9-120',
    name: 'Bidoof',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 70,
    imageUrl: 'https://images.pokemontcg.io/swsh9/120.png',
    setCode: 'BRS',
    setNumber: '120'
  },
  'squawkabilly ex': {
    id: 'sv2-169',
    name: 'Squawkabilly ex',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 160,
    imageUrl: 'https://images.pokemontcg.io/sv2/169.png',
    setCode: 'PAL',
    setNumber: '169'
  },
  'bloodmoon ursaluna ex': {
    id: 'sv6-141',
    name: 'Bloodmoon Ursaluna ex',
    category: 'pokemon',
    energyType: 'colorless',
    stage: 'BÁSICO',
    hp: 260,
    imageUrl: 'https://images.pokemontcg.io/sv6/141.png',
    setCode: 'TWM',
    setNumber: '141'
  },

  // --- TRAINERS (ITEMS, SUPPORTERS, TOOLS, STADIUMS) ---
  'buddy-buddy poffin': {
    id: 'sv5-144',
    name: 'Buddy-Buddy Poffin',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv5/144.png',
    setCode: 'TEF',
    setNumber: '144'
  },
  'poffin de companheiro': {
    id: 'sv5-144',
    name: 'Buddy-Buddy Poffin',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv5/144.png',
    setCode: 'TEF',
    setNumber: '144'
  },
  'pedaco de poffin de companheiro': {
    id: 'sv5-144',
    name: 'Buddy-Buddy Poffin',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv5/144.png',
    setCode: 'TEF',
    setNumber: '144'
  },
  'ultra ball': {
    id: 'sv1-196',
    name: 'Ultra Ball',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/196.png',
    setCode: 'SVI',
    setNumber: '196'
  },
  'ultra bola': {
    id: 'sv1-196',
    name: 'Ultra Ball',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/196.png',
    setCode: 'SVI',
    setNumber: '196'
  },
  'nest ball': {
    id: 'sv1-181',
    name: 'Nest Ball',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/181.png',
    setCode: 'SVI',
    setNumber: '181'
  },
  'bola ninho': {
    id: 'sv1-181',
    name: 'Nest Ball',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/181.png',
    setCode: 'SVI',
    setNumber: '181'
  },
  'rare candy': {
    id: 'sv1-191',
    name: 'Rare Candy',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/191.png',
    setCode: 'SVI',
    setNumber: '191'
  },
  'doce raro': {
    id: 'sv1-191',
    name: 'Rare Candy',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/191.png',
    setCode: 'SVI',
    setNumber: '191'
  },
  'arven': {
    id: 'sv1-166',
    name: 'Arven',
    category: 'supporter',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/166.png',
    setCode: 'SVI',
    setNumber: '166'
  },
  'iono': {
    id: 'sv2-185',
    name: 'Iono',
    category: 'supporter',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv2/185.png',
    setCode: 'PAL',
    setNumber: '185'
  },
  'boss\'s orders': {
    id: 'sv1-172',
    name: "Boss's Orders",
    category: 'supporter',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/172.png',
    setCode: 'SVI',
    setNumber: '172'
  },
  'ordens da chefia': {
    id: 'sv1-172',
    name: "Boss's Orders",
    category: 'supporter',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/172.png',
    setCode: 'SVI',
    setNumber: '172'
  },
  'professor\'s research': {
    id: 'sv1-190',
    name: "Professor's Research",
    category: 'supporter',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/190.png',
    setCode: 'SVI',
    setNumber: '190'
  },
  'pesquisa de professores': {
    id: 'sv1-190',
    name: "Professor's Research",
    category: 'supporter',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv1/190.png',
    setCode: 'SVI',
    setNumber: '190'
  },
  'super rod': {
    id: 'sv2-188',
    name: 'Super Rod',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv2/188.png',
    setCode: 'PAL',
    setNumber: '188'
  },
  'supervara': {
    id: 'sv2-188',
    name: 'Super Rod',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv2/188.png',
    setCode: 'PAL',
    setNumber: '188'
  },
  'prime catcher': {
    id: 'sv5-157',
    name: 'Prime Catcher',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv5/157.png',
    setCode: 'TEF',
    setNumber: '157'
  },
  'pegador primordial': {
    id: 'sv5-157',
    name: 'Prime Catcher',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv5/157.png',
    setCode: 'TEF',
    setNumber: '157'
  },
  'counter catcher': {
    id: 'sv4-160',
    name: 'Counter Catcher',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv4/160.png',
    setCode: 'PAR',
    setNumber: '160'
  },
  'pegador de revanche': {
    id: 'sv4-160',
    name: 'Counter Catcher',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv4/160.png',
    setCode: 'PAR',
    setNumber: '160'
  },
  'night stretcher': {
    id: 'sv6pt5-61',
    name: 'Night Stretcher',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/61.png',
    setCode: 'SFA',
    setNumber: '61'
  },
  'maca noturna': {
    id: 'sv6pt5-61',
    name: 'Night Stretcher',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/61.png',
    setCode: 'SFA',
    setNumber: '61'
  },
  'earthen vessel': {
    id: 'sv4-163',
    name: 'Earthen Vessel',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv4/163.png',
    setCode: 'PAR',
    setNumber: '163'
  },
  'recipiente terrestre': {
    id: 'sv4-163',
    name: 'Earthen Vessel',
    category: 'item',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv4/163.png',
    setCode: 'PAR',
    setNumber: '163'
  },
  'area zero underdepths': {
    id: 'sv7-131',
    name: 'Area Zero Underdepths',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv7/131.png',
    setCode: 'SCR',
    setNumber: '131'
  },
  'subterraneo da area zero': {
    id: 'sv7-131',
    name: 'Area Zero Underdepths',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv7/131.png',
    setCode: 'SCR',
    setNumber: '131'
  },
  'artazon': {
    id: 'sv2-171',
    name: 'Artazon',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv2/171.png',
    setCode: 'PAL',
    setNumber: '171'
  },
  'pokestop': {
    id: 'pgo-68',
    name: 'PokéStop',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/pgo/68.png',
    setCode: 'PGO',
    setNumber: '68'
  },
  'pokeparada': {
    id: 'pgo-68',
    name: 'PokéStop',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/pgo/68.png',
    setCode: 'PGO',
    setNumber: '68'
  },
  'jamming tower': {
    id: 'sv6-153',
    name: 'Jamming Tower',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv6/153.png',
    setCode: 'TWM',
    setNumber: '153'
  },
  'torre interferente': {
    id: 'sv6-153',
    name: 'Jamming Tower',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv6/153.png',
    setCode: 'TWM',
    setNumber: '153'
  },
  'neutral center': {
    id: 'sv7-133',
    name: 'Neutral Center',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv7/133.png',
    setCode: 'SCR',
    setNumber: '133'
  },
  'centro neutro': {
    id: 'sv7-133',
    name: 'Neutral Center',
    category: 'stadium',
    stage: 'TREINADOR',
    imageUrl: 'https://images.pokemontcg.io/sv7/133.png',
    setCode: 'SCR',
    setNumber: '133'
  },

  // --- ENERGIES ---
  'basic fire energy': {
    id: 'sve-2',
    name: 'Basic Fire Energy',
    category: 'energy',
    energyType: 'fire',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/2.png',
    setCode: 'SVE',
    setNumber: '2'
  },
  'energia de fogo basica': {
    id: 'sve-2',
    name: 'Basic Fire Energy',
    category: 'energy',
    energyType: 'fire',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/2.png',
    setCode: 'SVE',
    setNumber: '2'
  },
  'energia de fogo': {
    id: 'sve-2',
    name: 'Basic Fire Energy',
    category: 'energy',
    energyType: 'fire',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/2.png',
    setCode: 'SVE',
    setNumber: '2'
  },
  'basic psychic energy': {
    id: 'sve-5',
    name: 'Basic Psychic Energy',
    category: 'energy',
    energyType: 'psychic',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/5.png',
    setCode: 'SVE',
    setNumber: '5'
  },
  'energia psiquica basica': {
    id: 'sve-5',
    name: 'Basic Psychic Energy',
    category: 'energy',
    energyType: 'psychic',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/5.png',
    setCode: 'SVE',
    setNumber: '5'
  },
  'energia psiquica': {
    id: 'sve-5',
    name: 'Basic Psychic Energy',
    category: 'energy',
    energyType: 'psychic',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/5.png',
    setCode: 'SVE',
    setNumber: '5'
  },
  'basic water energy': {
    id: 'sve-3',
    name: 'Basic Water Energy',
    category: 'energy',
    energyType: 'water',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/3.png',
    setCode: 'SVE',
    setNumber: '3'
  },
  'energia de agua basica': {
    id: 'sve-3',
    name: 'Basic Water Energy',
    category: 'energy',
    energyType: 'water',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/3.png',
    setCode: 'SVE',
    setNumber: '3'
  },
  'basic lightning energy': {
    id: 'sve-4',
    name: 'Basic Lightning Energy',
    category: 'energy',
    energyType: 'lightning',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/4.png',
    setCode: 'SVE',
    setNumber: '4'
  },
  'energia de raios basica': {
    id: 'sve-4',
    name: 'Basic Lightning Energy',
    category: 'energy',
    energyType: 'lightning',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/4.png',
    setCode: 'SVE',
    setNumber: '4'
  },
  'basic fighting energy': {
    id: 'sve-6',
    name: 'Basic Fighting Energy',
    category: 'energy',
    energyType: 'fighting',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/6.png',
    setCode: 'SVE',
    setNumber: '6'
  },
  'energia de luta basica': {
    id: 'sve-6',
    name: 'Basic Fighting Energy',
    category: 'energy',
    energyType: 'fighting',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/6.png',
    setCode: 'SVE',
    setNumber: '6'
  },
  'basic darkness energy': {
    id: 'sve-7',
    name: 'Basic Darkness Energy',
    category: 'energy',
    energyType: 'darkness',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/7.png',
    setCode: 'SVE',
    setNumber: '7'
  },
  'energia de escuridao basica': {
    id: 'sve-7',
    name: 'Basic Darkness Energy',
    category: 'energy',
    energyType: 'darkness',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/7.png',
    setCode: 'SVE',
    setNumber: '7'
  },
  'basic metal energy': {
    id: 'sve-8',
    name: 'Basic Metal Energy',
    category: 'energy',
    energyType: 'metal',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/8.png',
    setCode: 'SVE',
    setNumber: '8'
  },
  'basic grass energy': {
    id: 'sve-1',
    name: 'Basic Grass Energy',
    category: 'energy',
    energyType: 'grass',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/1.png',
    setCode: 'SVE',
    setNumber: '1'
  },
  'energia de planta basica': {
    id: 'sve-1',
    name: 'Basic Grass Energy',
    category: 'energy',
    energyType: 'grass',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/1.png',
    setCode: 'SVE',
    setNumber: '1'
  },
  'double turbo energy': {
    id: 'swsh9-151',
    name: 'Double Turbo Energy',
    category: 'energy',
    energyType: 'colorless',
    stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/swsh9/151.png',
    setCode: 'BRS',
    setNumber: '151'
  }
};

// National Dex numbers for high-res PokeAPI official artwork fallbacks
export const POKEMON_DEX_MAP: Record<string, number> = {
  'charizard': 6,
  'charmander': 4,
  'charmeleon': 5,
  'pidgeot': 18,
  'pidgey': 16,
  'pidgeotto': 17,
  'duskull': 355,
  'dusclops': 356,
  'dusknoir': 477,
  'dreepy': 885,
  'drakloak': 886,
  'dragapult': 887,
  'rotom': 479,
  'fezandipiti': 1016,
  'manaphy': 490,
  'alakazam': 65,
  'lugia': 249,
  'archeops': 567,
  'cinccino': 573,
  'minccino': 572,
  'gardevoir': 282,
  'kirlia': 281,
  'ralts': 280,
  'drifloon': 425,
  'munkidori': 1015,
  'miraidon': 1008,
  'koraidon': 1007,
  'snorlax': 143,
  'pikachu': 25,
  'ceruledge': 937,
  'charcadet': 935,
  'comfey': 764,
  'sableye': 302,
  'cramorant': 845,
  'greninja': 658,
  'mew': 151,
  'palkia': 484,
  'giratina': 487,
  'regidrago': 895,
  'scizor': 212,
  'scyther': 123,
  'gholdengo': 1000,
  'gimmighoul': 999,
  'bibarel': 400,
  'bidoof': 399,
  'noctowl': 164,
  'hoothoot': 163,
  'bouffalant': 626,
  'budew': 406,
  'absol': 359
};

// Clean card or string name to search key
export function normalizeCardName(name: string): string {
  if (!name) return '';
  let cleaned = name.toLowerCase().trim();

  // Strip player possession (e.g. "Charizard ex de Felipe Wilks" -> "Charizard ex")
  cleaned = cleaned.replace(/\s+(?:de|do|da|of)\s+[a-z0-9\s]+$/i, '');
  // Strip log action phrases
  cleaned = cleaned.replace(/^(?:jogou|colocou|comprou|ligou|anexou|evoluiu|played|put|attached|drew|evolved)\s+/i, '');
  // Strip board destinations
  cleaned = cleaned.replace(/\s+(?:no campo ativo|no banco|to the active spot|to the bench|in the active spot).*/i, '');
  // Strip punctuation & accents
  cleaned = cleaned.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  cleaned = cleaned.replace(/[^a-z0-9\s-]/g, '').trim();

  return cleaned;
}

// Extract base pokemon name for dex/sprite lookups
export function getBasePokemonName(name: string): string {
  const norm = normalizeCardName(name);
  const words = norm.split(/[\s-]+/);
  // filter out "ex", "vstar", "vmax", "v", "radiant", "radiação", "forma", "origem", "teal", "mask"
  const ignored = ['ex', 'vstar', 'vmax', 'v', 'radiant', 'radiante', 'origin', 'forme', 'forma', 'origem', 'teal', 'mask', 'deck'];
  const candidates = words.filter(w => !ignored.includes(w));
  return candidates[0] || 'substitute';
}

// Dedicated PTCGL Card ID Registry to guarantee exact sprite and card injection
export const PTCGL_CARD_ID_MAP: Record<string, CardMetadata> = {};

// Helper to register IDs in map
function registerCardId(key: string, card: CardMetadata) {
  if (!key) return;
  const normalizedKey = key.toLowerCase().trim();
  PTCGL_CARD_ID_MAP[normalizedKey] = card;
  // Also register with dashes replaced by spaces and vice versa
  PTCGL_CARD_ID_MAP[normalizedKey.replace(/\s+/g, '-')] = card;
  PTCGL_CARD_ID_MAP[normalizedKey.replace(/-/g, ' ')] = card;
  PTCGL_CARD_ID_MAP[normalizedKey.replace(/[^a-z0-9]/g, '')] = card;
}

// Auto-register canonical database cards by ID and Set+Number
Object.values(CARD_IMAGE_DATABASE).forEach(card => {
  if (card.id) registerCardId(card.id, card);
  if (card.setCode && card.setNumber) {
    registerCardId(`${card.setCode} ${card.setNumber}`, card);
    registerCardId(`${card.setCode}-${card.setNumber}`, card);
    registerCardId(`${card.setCode} #${card.setNumber}`, card);
  }
});

// Explicit PTCGL Card ID mappings for key staples & requested edge cases
// Pidgeot ex (Obsidian Flames / Paldean Fates)
registerCardId('sv3-164', CARD_IMAGE_DATABASE['pidgeot ex']);
registerCardId('obf-164', CARD_IMAGE_DATABASE['pidgeot ex']);
registerCardId('obf 164', CARD_IMAGE_DATABASE['pidgeot ex']);
registerCardId('sv3-225', CARD_IMAGE_DATABASE['pidgeot ex']);
registerCardId('obf-225', CARD_IMAGE_DATABASE['pidgeot ex']);
registerCardId('obf 225', CARD_IMAGE_DATABASE['pidgeot ex']);

// Absol ex (Obsidian Flames #135 / #214)
registerCardId('sv3-135', CARD_IMAGE_DATABASE['absol ex']);
registerCardId('obf-135', CARD_IMAGE_DATABASE['absol ex']);
registerCardId('obf 135', CARD_IMAGE_DATABASE['absol ex']);
registerCardId('sv3-214', CARD_IMAGE_DATABASE['absol ex']);
registerCardId('obf-214', CARD_IMAGE_DATABASE['absol ex']);
registerCardId('obf 214', CARD_IMAGE_DATABASE['absol ex']);

// Budew (Mega Evolution series ME2.5 / ME2 #221 / #016)
registerCardId('me2-5-221', CARD_IMAGE_DATABASE['budew']);
registerCardId('me2.5-221', CARD_IMAGE_DATABASE['budew']);
registerCardId('me2-5 221', CARD_IMAGE_DATABASE['budew']);
registerCardId('me2-221', CARD_IMAGE_DATABASE['budew']);
registerCardId('me2 221', CARD_IMAGE_DATABASE['budew']);
registerCardId('me2-016', CARD_IMAGE_DATABASE['budew']);
registerCardId('me2 016', CARD_IMAGE_DATABASE['budew']);
registerCardId('me2-16', CARD_IMAGE_DATABASE['budew']);

// Charizard ex (Obsidian Flames / Paldean Fates)
registerCardId('sv3-125', CARD_IMAGE_DATABASE['charizard ex']);
registerCardId('obf-125', CARD_IMAGE_DATABASE['charizard ex']);
registerCardId('obf 125', CARD_IMAGE_DATABASE['charizard ex']);
registerCardId('paf-54', CARD_IMAGE_DATABASE['charizard ex']);
registerCardId('paf 54', CARD_IMAGE_DATABASE['charizard ex']);

// Dragapult ex (Twilight Masquerade #130)
registerCardId('sv6-130', CARD_IMAGE_DATABASE['dragapult ex']);
registerCardId('twm-130', CARD_IMAGE_DATABASE['dragapult ex']);
registerCardId('twm 130', CARD_IMAGE_DATABASE['dragapult ex']);

// Dusknoir (Shrouded Fable #20)
registerCardId('sv6pt5-20', CARD_IMAGE_DATABASE['dusknoir']);
registerCardId('sfa-20', CARD_IMAGE_DATABASE['dusknoir']);
registerCardId('sfa 20', CARD_IMAGE_DATABASE['dusknoir']);

// Dreepy (Twilight Masquerade #128)
registerCardId('sv6-128', CARD_IMAGE_DATABASE['dreepy']);
registerCardId('twm-128', CARD_IMAGE_DATABASE['dreepy']);
registerCardId('twm 128', CARD_IMAGE_DATABASE['dreepy']);

// Drakloak (Twilight Masquerade #129)
registerCardId('sv6-129', CARD_IMAGE_DATABASE['drakloak']);
registerCardId('twm-129', CARD_IMAGE_DATABASE['drakloak']);
registerCardId('twm 129', CARD_IMAGE_DATABASE['drakloak']);

// Duskull (Shrouded Fable #18)
registerCardId('sv6pt5-18', CARD_IMAGE_DATABASE['duskull']);
registerCardId('sfa-18', CARD_IMAGE_DATABASE['duskull']);
registerCardId('sfa 18', CARD_IMAGE_DATABASE['duskull']);

// Dusclops (Shrouded Fable #19)
registerCardId('sv6pt5-19', CARD_IMAGE_DATABASE['dusclops']);
registerCardId('sfa-19', CARD_IMAGE_DATABASE['dusclops']);
registerCardId('sfa 19', CARD_IMAGE_DATABASE['dusclops']);

// Charmander (Obsidian Flames #26 / MEW #4)
registerCardId('sv3-26', CARD_IMAGE_DATABASE['charmander']);
registerCardId('obf-26', CARD_IMAGE_DATABASE['charmander']);
registerCardId('obf 26', CARD_IMAGE_DATABASE['charmander']);

// Charmeleon (Obsidian Flames #124)
registerCardId('sv3-124', CARD_IMAGE_DATABASE['charmeleon']);
registerCardId('obf-124', CARD_IMAGE_DATABASE['charmeleon']);
registerCardId('obf 124', CARD_IMAGE_DATABASE['charmeleon']);

// Pidgey (Obsidian Flames #162)
registerCardId('sv3-162', CARD_IMAGE_DATABASE['pidgey']);
registerCardId('obf-162', CARD_IMAGE_DATABASE['pidgey']);
registerCardId('obf 162', CARD_IMAGE_DATABASE['pidgey']);

// Pidgeotto (Obsidian Flames #163)
registerCardId('sv3-163', CARD_IMAGE_DATABASE['pidgeotto']);
registerCardId('obf-163', CARD_IMAGE_DATABASE['pidgeotto']);
registerCardId('obf 163', CARD_IMAGE_DATABASE['pidgeotto']);

// Canonical PTCGL Card Format definition and adapter
export interface FormattedPTCGLCard {
  canonicalCode: string;   // e.g. "OBF 164" or "TWM 130"
  setCode: string;         // e.g. "OBF" or "TWM"
  tpciSetCode: string;     // official TPCi 3-4 letter code (e.g. "TWM", "OBF", "SVI")
  setNumber: string;       // e.g. "130" or "164"
  displayName: string;     // e.g. "Pidgeot ex"
  ptcglIdentifier: string; // e.g. "Pidgeot ex OBF 164"
  localSetId?: string;     // e.g. "sv6", "sv3" for pokemontcg.io / API queries
  rawLocalId?: string;     // original input id e.g. "sv6-130"
}

// Map from pokemontcg.io / local set codes to official TPCi / Pokémon TCG Live codes
export const SET_LOCAL_TO_TPCI_MAP: Record<string, { tpciCode: string; name: string; localId: string }> = {
  // Scarlet & Violet era
  'sv1': { tpciCode: 'SVI', name: 'Scarlet & Violet', localId: 'sv1' },
  'sv2': { tpciCode: 'PAL', name: 'Paldea Evolved', localId: 'sv2' },
  'sv3': { tpciCode: 'OBF', name: 'Obsidian Flames', localId: 'sv3' },
  'sv3pt5': { tpciCode: 'MEW', name: '151', localId: 'sv3pt5' },
  'mew': { tpciCode: 'MEW', name: '151', localId: 'sv3pt5' },
  '151': { tpciCode: 'MEW', name: '151', localId: 'sv3pt5' },
  'sv4': { tpciCode: 'PAR', name: 'Paradox Rift', localId: 'sv4' },
  'sv45': { tpciCode: 'PAF', name: 'Paldean Fates', localId: 'sv45' },
  'sv4pt5': { tpciCode: 'PAF', name: 'Paldean Fates', localId: 'sv45' },
  'paf': { tpciCode: 'PAF', name: 'Paldean Fates', localId: 'sv45' },
  'sv5': { tpciCode: 'TEF', name: 'Temporal Forces', localId: 'sv5' },
  'tef': { tpciCode: 'TEF', name: 'Temporal Forces', localId: 'sv5' },
  'sv6': { tpciCode: 'TWM', name: 'Twilight Masquerade', localId: 'sv6' },
  'twm': { tpciCode: 'TWM', name: 'Twilight Masquerade', localId: 'sv6' },
  'sv6pt5': { tpciCode: 'SFA', name: 'Shrouded Fable', localId: 'sv6pt5' },
  'sv65': { tpciCode: 'SFA', name: 'Shrouded Fable', localId: 'sv6pt5' },
  'sfa': { tpciCode: 'SFA', name: 'Shrouded Fable', localId: 'sv6pt5' },
  'sv7': { tpciCode: 'SCR', name: 'Stellar Crown', localId: 'sv7' },
  'scr': { tpciCode: 'SCR', name: 'Stellar Crown', localId: 'sv7' },
  'sv8': { tpciCode: 'SSP', name: 'Surging Sparks', localId: 'sv8' },
  'ssp': { tpciCode: 'SSP', name: 'Surging Sparks', localId: 'sv8' },
  'sv8pt5': { tpciCode: 'PRE', name: 'Prismatic Evolutions', localId: 'sv8pt5' },
  'sv85': { tpciCode: 'PRE', name: 'Prismatic Evolutions', localId: 'sv8pt5' },
  'pre': { tpciCode: 'PRE', name: 'Prismatic Evolutions', localId: 'sv8pt5' },
  'sve': { tpciCode: 'SVE', name: 'Scarlet & Violet Energies', localId: 'sve' },
  'svp': { tpciCode: 'SVP', name: 'Scarlet & Violet Promos', localId: 'svp' },
  'me2': { tpciCode: 'ME2', name: 'Mega Evolution', localId: 'me2' },
  'me2.5': { tpciCode: 'ME2', name: 'Mega Evolution', localId: 'me2' },
  'me2-5': { tpciCode: 'ME2', name: 'Mega Evolution', localId: 'me2' },

  // Sword & Shield era
  'swsh1': { tpciCode: 'SSH', name: 'Sword & Shield', localId: 'swsh1' },
  'ssh': { tpciCode: 'SSH', name: 'Sword & Shield', localId: 'swsh1' },
  'swsh2': { tpciCode: 'RCL', name: 'Rebel Clash', localId: 'swsh2' },
  'rcl': { tpciCode: 'RCL', name: 'Rebel Clash', localId: 'swsh2' },
  'swsh3': { tpciCode: 'DAA', name: 'Darkness Ablaze', localId: 'swsh3' },
  'daa': { tpciCode: 'DAA', name: 'Darkness Ablaze', localId: 'swsh3' },
  'swsh35': { tpciCode: 'CPA', name: "Champion's Path", localId: 'swsh35' },
  'cpa': { tpciCode: 'CPA', name: "Champion's Path", localId: 'swsh35' },
  'swsh4': { tpciCode: 'VIV', name: 'Vivid Voltage', localId: 'swsh4' },
  'viv': { tpciCode: 'VIV', name: 'Vivid Voltage', localId: 'swsh4' },
  'swsh45': { tpciCode: 'SHF', name: 'Shining Fates', localId: 'swsh45' },
  'shf': { tpciCode: 'SHF', name: 'Shining Fates', localId: 'swsh45' },
  'swsh5': { tpciCode: 'BST', name: 'Battle Styles', localId: 'swsh5' },
  'bst': { tpciCode: 'BST', name: 'Battle Styles', localId: 'swsh5' },
  'swsh6': { tpciCode: 'CRE', name: 'Chilling Reign', localId: 'swsh6' },
  'cre': { tpciCode: 'CRE', name: 'Chilling Reign', localId: 'swsh6' },
  'swsh7': { tpciCode: 'EVS', name: 'Evolving Skies', localId: 'swsh7' },
  'evs': { tpciCode: 'EVS', name: 'Evolving Skies', localId: 'swsh7' },
  'swsh8': { tpciCode: 'FST', name: 'Fusion Strike', localId: 'swsh8' },
  'fst': { tpciCode: 'FST', name: 'Fusion Strike', localId: 'swsh8' },
  'fsi': { tpciCode: 'FST', name: 'Fusion Strike', localId: 'swsh8' },
  'swsh9': { tpciCode: 'BRS', name: 'Brilliant Stars', localId: 'swsh9' },
  'brs': { tpciCode: 'BRS', name: 'Brilliant Stars', localId: 'swsh9' },
  'swsh10': { tpciCode: 'ASR', name: 'Astral Radiance', localId: 'swsh10' },
  'asr': { tpciCode: 'ASR', name: 'Astral Radiance', localId: 'swsh10' },
  'pgo': { tpciCode: 'PGO', name: 'Pokémon GO', localId: 'pgo' },
  'swsh11': { tpciCode: 'LOR', name: 'Lost Origin', localId: 'swsh11' },
  'lor': { tpciCode: 'LOR', name: 'Lost Origin', localId: 'swsh11' },
  'cel': { tpciCode: 'CEL', name: 'Celebrations', localId: 'cel' },
  'swsh12': { tpciCode: 'SIT', name: 'Silver Tempest', localId: 'swsh12' },
  'sit': { tpciCode: 'SIT', name: 'Silver Tempest', localId: 'swsh12' },
  'swsh12pt5': { tpciCode: 'CRZ', name: 'Crown Zenith', localId: 'swsh12pt5' },
  'crz': { tpciCode: 'CRZ', name: 'Crown Zenith', localId: 'swsh12pt5' },

  // XY & Mega Evolution Series
  'me1': { tpciCode: 'ME1', name: 'Mega Evolution', localId: 'me1' },
  'xy12': { tpciCode: 'EVO', name: 'XY - Evolutions (Mega Evoluções)', localId: 'xy12' },
  'evo': { tpciCode: 'EVO', name: 'XY - Evolutions (Mega Evoluções)', localId: 'xy12' },
  'xy4': { tpciCode: 'PHF', name: 'XY - Phantom Forces (Mega Gengar)', localId: 'xy4' },
  'phf': { tpciCode: 'PHF', name: 'XY - Phantom Forces (Mega Gengar)', localId: 'xy4' },
  'xy2': { tpciCode: 'FLF', name: 'XY - Flashfire (Mega Charizard)', localId: 'xy2' },
  'flf': { tpciCode: 'FLF', name: 'XY - Flashfire (Mega Charizard)', localId: 'xy2' },
  'xy6': { tpciCode: 'ROS', name: 'XY - Roaring Skies (Mega Rayquaza)', localId: 'xy6' },
  'ros': { tpciCode: 'ROS', name: 'XY - Roaring Skies (Mega Rayquaza)', localId: 'xy6' },
  'xy5': { tpciCode: 'PRC', name: 'XY - Primal Clash (Primal & Mega)', localId: 'xy5' },
  'prc': { tpciCode: 'PRC', name: 'XY - Primal Clash (Primal & Mega)', localId: 'xy5' },
  'xy3': { tpciCode: 'FFI', name: 'XY - Furious Fists (Mega Lucario)', localId: 'xy3' },
  'ffi': { tpciCode: 'FFI', name: 'XY - Furious Fists (Mega Lucario)', localId: 'xy3' },
  'xy7': { tpciCode: 'AOR', name: 'XY - Ancient Origins (Mega Rayquaza)', localId: 'xy7' },
  'aor': { tpciCode: 'AOR', name: 'XY - Ancient Origins (Mega Rayquaza)', localId: 'xy7' },
  'xy8': { tpciCode: 'BKT', name: 'XY - BREAKthrough (Mega Mewtwo)', localId: 'xy8' },
  'bkt': { tpciCode: 'BKT', name: 'XY - BREAKthrough (Mega Mewtwo)', localId: 'xy8' },
  'xy9': { tpciCode: 'BKP', name: 'XY - BREAKpoint (Mega Gyarados)', localId: 'xy9' },
  'bkp': { tpciCode: 'BKP', name: 'XY - BREAKpoint (Mega Gyarados)', localId: 'xy9' },
  'xy10': { tpciCode: 'FCO', name: 'XY - Fates Collide (Mega Alakazam)', localId: 'xy10' },
  'fco': { tpciCode: 'FCO', name: 'XY - Fates Collide (Mega Alakazam)', localId: 'xy10' },
  'xy11': { tpciCode: 'STS', name: 'XY - Steam Siege (Mega Gardevoir)', localId: 'xy11' },
  'sts': { tpciCode: 'STS', name: 'XY - Steam Siege (Mega Gardevoir)', localId: 'xy11' },
  'xy1': { tpciCode: 'XY', name: 'XY Base Set (Mega Blastoise/Venusaur)', localId: 'xy1' },
  'xy': { tpciCode: 'XY', name: 'XY Base Set (Mega Blastoise/Venusaur)', localId: 'xy1' }
};

// Reverse map: TPCi official 3-letter code -> pokemontcg.io local set code
export const SET_TPCI_TO_LOCAL_MAP: Record<string, string> = {
  'SVI': 'sv1',
  'PAL': 'sv2',
  'OBF': 'sv3',
  'MEW': 'sv3pt5',
  'PAR': 'sv4',
  'PAF': 'sv45',
  'TEF': 'sv5',
  'TWM': 'sv6',
  'SFA': 'sv6pt5',
  'SCR': 'sv7',
  'SSP': 'sv8',
  'PRE': 'sv8pt5',
  'SVE': 'sve',
  'SVP': 'svp',
  'ME1': 'me1',
  'ME2': 'me2',
  'SSH': 'swsh1',
  'RCL': 'swsh2',
  'DAA': 'swsh3',
  'CPA': 'swsh35',
  'VIV': 'swsh4',
  'SHF': 'swsh45',
  'BST': 'swsh5',
  'CRE': 'swsh6',
  'EVS': 'swsh7',
  'FST': 'swsh8',
  'BRS': 'swsh9',
  'ASR': 'swsh10',
  'PGO': 'pgo',
  'LOR': 'swsh11',
  'CEL': 'cel',
  'SIT': 'swsh12',
  'CRZ': 'swsh12pt5',
  'EVO': 'xy12',
  'PHF': 'xy4',
  'FLF': 'xy2',
  'ROS': 'xy6',
  'PRC': 'xy5',
  'FFI': 'xy3',
  'AOR': 'xy7',
  'BKT': 'xy8',
  'BKP': 'xy9',
  'FCO': 'xy10',
  'STS': 'xy11',
  'XY': 'xy1'
};

/**
 * Normalizes any set identifier (e.g. 'sv6', 'twm', 'sv3', 'obf') into the official TPCi uppercase 3-letter code.
 */
export function normalizeTPCiSetCode(setCode: string): string {
  if (!setCode) return 'SVI';
  const clean = setCode.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  if (SET_LOCAL_TO_TPCI_MAP[clean]) {
    return SET_LOCAL_TO_TPCI_MAP[clean].tpciCode;
  }
  return clean.toUpperCase();
}

/**
 * Converts a TPCi official set code (e.g. 'TWM', 'OBF') to its local/pokemontcg.io counterpart ('sv6', 'sv3').
 */
export function mapTPCiToLocalSetId(tpciCode: string): string {
  if (!tpciCode) return 'sv1';
  const cleanUpper = tpciCode.toUpperCase().trim();
  return SET_TPCI_TO_LOCAL_MAP[cleanUpper] || tpciCode.toLowerCase().trim();
}

/**
 * Primary utility: converts local card IDs, database items, or PTCGL strings to standardized TPCi formats.
 * Handles:
 * - Local IDs: "sv6-130", "obf-125", "user123_sv6-130", "twm 130"
 * - Objects with setCode and setNumber (from Collection or API responses)
 * - Raw card names with set tags: "Dragapult ex TWM 130", "Charizard ex (OBF #125)"
 */
export function convertLocalIdToPTCGL(
  localCardOrId: string | { id?: string; setCode?: string; setNumber?: string | number; name?: string; setName?: string },
  fallbackName?: string
): FormattedPTCGLCard {
  // If input is an object
  if (typeof localCardOrId === 'object' && localCardOrId !== null) {
    const rawSet = localCardOrId.setCode || 'SVI';
    const tpciSetCode = normalizeTPCiSetCode(rawSet);
    const localSetId = mapTPCiToLocalSetId(tpciSetCode);
    const rawNum = String(localCardOrId.setNumber || '001').replace(/^#/, '').trim();
    const displayName = localCardOrId.name || fallbackName || 'Carta Pokémon';
    const canonicalCode = `${tpciSetCode} ${rawNum}`;

    return {
      canonicalCode,
      setCode: tpciSetCode,
      tpciSetCode,
      setNumber: rawNum,
      displayName,
      ptcglIdentifier: `${displayName} ${canonicalCode}`,
      localSetId,
      rawLocalId: localCardOrId.id
    };
  }

  // If input is a string
  const rawStr = String(localCardOrId || '').trim();
  if (!rawStr) {
    return {
      canonicalCode: 'SVI 001',
      setCode: 'SVI',
      tpciSetCode: 'SVI',
      setNumber: '001',
      displayName: fallbackName || 'Pokémon',
      ptcglIdentifier: `${fallbackName || 'Pokémon'} SVI 001`,
      localSetId: 'sv1',
      rawLocalId: ''
    };
  }

  // Strip Firestore user prefix if present (e.g. "userId_sv6-130" -> "sv6-130")
  let cleanId = rawStr;
  const underscoreSplit = rawStr.split('_');
  if (underscoreSplit.length > 1 && !rawStr.toLowerCase().startsWith('me2_')) {
    cleanId = underscoreSplit[underscoreSplit.length - 1];
  }

  // Check 1: Direct PTCGL export format ("Dragapult ex TWM 130" or "TWM 130")
  const ptcglExportMatch = cleanId.match(/^(?:(.+?)\s+)?([A-Za-z0-9.-]{2,7})\s+(\d+|promo)$/i);
  if (ptcglExportMatch) {
    const detectedName = ptcglExportMatch[1]?.trim();
    const rawSet = ptcglExportMatch[2];
    const rawNum = ptcglExportMatch[3];
    const tpciSetCode = normalizeTPCiSetCode(rawSet);
    const localSetId = mapTPCiToLocalSetId(tpciSetCode);
    const displayName = detectedName || fallbackName || (CARD_IMAGE_DATABASE[rawStr.toLowerCase()]?.name) || 'Pokémon';
    const canonicalCode = `${tpciSetCode} ${rawNum}`;

    return {
      canonicalCode,
      setCode: tpciSetCode,
      tpciSetCode,
      setNumber: rawNum,
      displayName,
      ptcglIdentifier: `${displayName} ${canonicalCode}`,
      localSetId,
      rawLocalId: rawStr
    };
  }

  // Check 2: Hyphenated format ("sv6-130", "obf-125", "me2-5-221", "sfa-019")
  const hyphenMatch = cleanId.match(/^([a-z0-9.-]+)[-_](\d+|promo)$/i);
  if (hyphenMatch) {
    const rawSet = hyphenMatch[1];
    const rawNum = hyphenMatch[2];
    const tpciSetCode = normalizeTPCiSetCode(rawSet);
    const localSetId = mapTPCiToLocalSetId(tpciSetCode);
    
    // Look up card by normalized ID in PTCGL map
    const mapped = PTCGL_CARD_ID_MAP[`${rawSet.toLowerCase()}-${rawNum}`] ||
                   PTCGL_CARD_ID_MAP[`${tpciSetCode.toLowerCase()} ${rawNum}`];
    const displayName = mapped?.name || fallbackName || 'Pokémon';
    const canonicalCode = `${tpciSetCode} ${rawNum}`;

    return {
      canonicalCode,
      setCode: tpciSetCode,
      tpciSetCode,
      setNumber: rawNum,
      displayName,
      ptcglIdentifier: `${displayName} ${canonicalCode}`,
      localSetId,
      rawLocalId: rawStr
    };
  }

  // Check 3: Card name lookup in database to get canonical set & number
  const resolved = resolveCard(rawStr);
  const tpciSetCode = normalizeTPCiSetCode(resolved.setCode || 'SVI');
  const localSetId = mapTPCiToLocalSetId(tpciSetCode);
  const setNumber = resolved.setNumber || '001';
  const canonicalCode = `${tpciSetCode} ${setNumber}`;

  return {
    canonicalCode,
    setCode: tpciSetCode,
    tpciSetCode,
    setNumber,
    displayName: resolved.name,
    ptcglIdentifier: `${resolved.name} ${canonicalCode}`,
    localSetId,
    rawLocalId: rawStr
  };
}

/**
 * Formats any card or name into a canonical PTCGL card object.
 */
export function formatPTCGLCardCode(cardOrName: CardMetadata | string): FormattedPTCGLCard {
  return convertLocalIdToPTCGL(cardOrName);
}

// Hierarchical sprite sources organized across external APIs (PokeAPI, Showdown, PokemonTCG.io)
export interface SpriteSources {
  primary: string;       // Authentic high-res TCG card scan or official PokeAPI artwork
  artwork: string;       // Official PokeAPI high-res artwork (Dex ID)
  battleSprite: string;  // Showdown animated/pixel battle sprite
  dexSprite: string;     // Showdown dex sprite
  fallback: string;      // Poke-ball fallback
}

export function getPokemonSpriteHierarchy(cardOrName: CardMetadata | string): SpriteSources {
  const card = typeof cardOrName === 'string' ? resolveCard(cardOrName) : cardOrName;
  const baseName = getBasePokemonName(card.name);
  const dexId = POKEMON_DEX_MAP[baseName];

  const artwork = dexId
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexId}.png`
    : card.imageUrl;

  const battleSprite = `https://play.pokemonshowdown.com/sprites/gen5/${baseName}.png`;
  const dexSprite = `https://play.pokemonshowdown.com/sprites/dex/${baseName}.png`;
  const fallback = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';

  return {
    primary: card.imageUrl || artwork,
    artwork,
    battleSprite,
    dexSprite,
    fallback
  };
}

// Verification interface and method to validate PTCGL ID injection
export interface PTCGLCardVerification {
  input: string;
  isValid: boolean;
  isPTCGLMapped: boolean;
  card: CardMetadata;
  setCode?: string;
  setNumber?: string;
  resolvedName: string;
  verificationStatus: 'verified_ptcgl' | 'fuzzy_matched' | 'generated_fallback';
}

export function verifyPTCGLCardMapping(cardNameOrId: string): PTCGLCardVerification {
  if (!cardNameOrId) {
    const fallbackCard = resolveCard('substitute');
    return {
      input: '',
      isValid: false,
      isPTCGLMapped: false,
      card: fallbackCard,
      resolvedName: 'Pokémon',
      verificationStatus: 'generated_fallback'
    };
  }

  const clean = cardNameOrId.toLowerCase().trim();
  const cleanId = clean.replace(/[^a-z0-9.-]/g, '');

  // 1. Direct match in PTCGL ID map
  if (PTCGL_CARD_ID_MAP[cleanId] || PTCGL_CARD_ID_MAP[clean]) {
    const card = PTCGL_CARD_ID_MAP[cleanId] || PTCGL_CARD_ID_MAP[clean];
    return {
      input: cardNameOrId,
      isValid: true,
      isPTCGLMapped: true,
      card,
      setCode: card.setCode,
      setNumber: card.setNumber,
      resolvedName: card.name,
      verificationStatus: 'verified_ptcgl'
    };
  }

  // 2. Direct exact match in CARD_IMAGE_DATABASE
  const norm = normalizeCardName(cardNameOrId);
  if (CARD_IMAGE_DATABASE[norm]) {
    const card = CARD_IMAGE_DATABASE[norm];
    return {
      input: cardNameOrId,
      isValid: true,
      isPTCGLMapped: !!card.setCode,
      card,
      setCode: card.setCode,
      setNumber: card.setNumber,
      resolvedName: card.name,
      verificationStatus: 'verified_ptcgl'
    };
  }

  // 3. Composite check (e.g. "Budew Me2-5-221", "Pidgeot ex OBF 164")
  const compositeMatch = cardNameOrId.match(/^(.+?)\s*(?:\((?:[a-z0-9.-]+)\s*#?(\d+)\)|([a-z0-9.-]{2,6})[- ]+(\d+))$/i);
  if (compositeMatch) {
    const setCode = (compositeMatch[3] || '').toUpperCase();
    const setNum = compositeMatch[2] || compositeMatch[4];
    const key = `${setCode} ${setNum}`.toLowerCase();
    if (PTCGL_CARD_ID_MAP[key]) {
      const card = PTCGL_CARD_ID_MAP[key];
      return {
        input: cardNameOrId,
        isValid: true,
        isPTCGLMapped: true,
        card,
        setCode: card.setCode,
        setNumber: card.setNumber,
        resolvedName: card.name,
        verificationStatus: 'verified_ptcgl'
      };
    }
  }

  // 4. Resolved through full resolver
  const resolved = resolveCard(cardNameOrId);
  const isFallback = resolved.id.startsWith('custom-');

  return {
    input: cardNameOrId,
    isValid: !isFallback,
    isPTCGLMapped: !isFallback && !!resolved.setCode,
    card: resolved,
    setCode: resolved.setCode,
    setNumber: resolved.setNumber,
    resolvedName: resolved.name,
    verificationStatus: isFallback ? 'generated_fallback' : 'fuzzy_matched'
  };
}

// Resolve card info & image
export function resolveCard(name: string): CardMetadata {
  if (!name) {
    return {
      id: 'substitute',
      name: 'Pokémon',
      category: 'pokemon',
      stage: 'BÁSICO',
      hp: 70,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
    };
  }

  // 1. Check PTCGL Card ID Registry first (e.g. "sv3-164", "obf 164", "me2-5-221", "me2 221")
  const cleanId = name.toLowerCase().trim().replace(/[^a-z0-9.-]/g, '');
  if (PTCGL_CARD_ID_MAP[cleanId]) {
    return PTCGL_CARD_ID_MAP[cleanId];
  }
  const cleanSpaced = name.toLowerCase().trim();
  if (PTCGL_CARD_ID_MAP[cleanSpaced]) {
    return PTCGL_CARD_ID_MAP[cleanSpaced];
  }

  // 2. Check compound PTCGL format like "Budew Me2-5-221" or "Pidgeot ex OBF 164"
  const ptcglCompoundMatch = name.match(/^(.+?)\s+(?:\[|\()?([a-z0-9.-]{2,8})[- #]+(\d+)(?:\]|\))?$/i);
  if (ptcglCompoundMatch) {
    const rawMonName = ptcglCompoundMatch[1].trim();
    const setCode = ptcglCompoundMatch[2].toLowerCase();
    const setNum = ptcglCompoundMatch[3];
    const comboKey = `${setCode}-${setNum}`;
    const comboKey2 = `${setCode} ${setNum}`;
    if (PTCGL_CARD_ID_MAP[comboKey]) return PTCGL_CARD_ID_MAP[comboKey];
    if (PTCGL_CARD_ID_MAP[comboKey2]) return PTCGL_CARD_ID_MAP[comboKey2];
    // Check clean name
    const normMon = normalizeCardName(rawMonName);
    if (CARD_IMAGE_DATABASE[normMon]) return CARD_IMAGE_DATABASE[normMon];
  }

  const norm = normalizeCardName(name);

  // Exact match in database
  if (CARD_IMAGE_DATABASE[norm]) {
    return CARD_IMAGE_DATABASE[norm];
  }

  // Targeted archetype & name matches with strict priority:
  // Pidgeot family ALWAYS takes priority and NEVER maps to Absol or other Pokémon
  if (norm.includes('pidgeotto')) return CARD_IMAGE_DATABASE['pidgeotto'];
  if (norm.includes('pidgeot')) return CARD_IMAGE_DATABASE['pidgeot ex'];
  if (norm.includes('pidgey')) return CARD_IMAGE_DATABASE['pidgey'];

  // Budew (ME2.5 / Ascended Heroes #221)
  if (/\bbudew\b/i.test(norm) || norm.includes('budew')) {
    return CARD_IMAGE_DATABASE['budew'];
  }

  // Absol ex: STRICT word-boundary check to prevent false-positive matching
  // and strictly forbid matching if string refers to Pidgeot, Charizard, etc.
  if (/\babsol\b/i.test(norm) && !norm.includes('pidgeot') && !norm.includes('charizard') && !norm.includes('dragapult')) {
    return CARD_IMAGE_DATABASE['absol ex'];
  }

  if (norm.includes('charizard')) return CARD_IMAGE_DATABASE['charizard ex'];
  if (norm.includes('charmeleon')) return CARD_IMAGE_DATABASE['charmeleon'];
  if (norm.includes('charmander')) return CARD_IMAGE_DATABASE['charmander'];
  if (norm.includes('dragapult')) return CARD_IMAGE_DATABASE['dragapult ex'];
  if (norm.includes('drakloak')) return CARD_IMAGE_DATABASE['drakloak'];
  if (norm.includes('dreepy')) return CARD_IMAGE_DATABASE['dreepy'];
  if (norm.includes('dusknoir')) return CARD_IMAGE_DATABASE['dusknoir'];
  if (norm.includes('dusclops')) return CARD_IMAGE_DATABASE['dusclops'];
  if (norm.includes('duskull')) return CARD_IMAGE_DATABASE['duskull'];
  if (norm.includes('lugia vstar')) return CARD_IMAGE_DATABASE['lugia vstar'];
  if (norm.includes('lugia')) return CARD_IMAGE_DATABASE['lugia v'];
  if (norm.includes('gardevoir')) return CARD_IMAGE_DATABASE['gardevoir ex'];
  if (norm.includes('kirlia')) return CARD_IMAGE_DATABASE['kirlia'];
  if (norm.includes('ralts')) return CARD_IMAGE_DATABASE['ralts'];
  if (norm.includes('bolt') || norm.includes('raging bolt')) return CARD_IMAGE_DATABASE['raging bolt ex'];
  if (norm.includes('ogerpon')) return CARD_IMAGE_DATABASE['teal mask ogerpon ex'];
  if (norm.includes('miraidon')) return CARD_IMAGE_DATABASE['miraidon ex'];
  if (norm.includes('roaring moon') || norm.includes('moon')) return CARD_IMAGE_DATABASE['roaring moon ex'];
  if (norm.includes('terapagos')) return CARD_IMAGE_DATABASE['terapagos ex'];
  if (norm.includes('gholdengo')) return CARD_IMAGE_DATABASE['gholdengo ex'];
  if (norm.includes('iron thorns')) return CARD_IMAGE_DATABASE['iron thorns ex'];
  if (norm.includes('iron hands')) return CARD_IMAGE_DATABASE['iron hands ex'];
  if (norm.includes('comfey')) return CARD_IMAGE_DATABASE['comfey'];
  if (norm.includes('palkia')) return CARD_IMAGE_DATABASE['origin forme palkia vstar'];
  if (norm.includes('snorlax')) return CARD_IMAGE_DATABASE['snorlax'];
  if (norm.includes('fogo') || norm.includes('fire energy')) return CARD_IMAGE_DATABASE['basic fire energy'];
  if (norm.includes('psiquica') || norm.includes('psychic energy')) return CARD_IMAGE_DATABASE['basic psychic energy'];
  if (norm.includes('agua') || norm.includes('water energy')) return CARD_IMAGE_DATABASE['basic water energy'];
  if (norm.includes('raio') || norm.includes('lightning energy')) return CARD_IMAGE_DATABASE['basic lightning energy'];

  // Trainer matches
  if (norm.includes('poffin')) return CARD_IMAGE_DATABASE['buddy-buddy poffin'];
  if (norm.includes('ultra')) return CARD_IMAGE_DATABASE['ultra ball'];
  if (norm.includes('ninho') || norm.includes('nest')) return CARD_IMAGE_DATABASE['nest ball'];
  if (norm.includes('doce') || norm.includes('candy')) return CARD_IMAGE_DATABASE['rare candy'];
  if (norm.includes('arven')) return CARD_IMAGE_DATABASE['arven'];
  if (norm.includes('iono')) return CARD_IMAGE_DATABASE['iono'];
  if (norm.includes('ordens') || norm.includes('boss')) return CARD_IMAGE_DATABASE["boss's orders"];
  if (norm.includes('pesquisa') || norm.includes('research')) return CARD_IMAGE_DATABASE["professor's research"];
  if (norm.includes('supervara') || norm.includes('rod')) return CARD_IMAGE_DATABASE['super rod'];
  if (norm.includes('primordial') || norm.includes('prime')) return CARD_IMAGE_DATABASE['prime catcher'];
  if (norm.includes('revanche') || norm.includes('counter')) return CARD_IMAGE_DATABASE['counter catcher'];
  if (norm.includes('maca') || norm.includes('stretcher')) return CARD_IMAGE_DATABASE['night stretcher'];

  // Longest substring match in database (only where key length >= 4)
  const keys = Object.keys(CARD_IMAGE_DATABASE).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (key.length >= 4 && norm.includes(key)) {
      return CARD_IMAGE_DATABASE[key];
    }
  }

  // Dynamic fallback: PokeAPI high-res official artwork
  const baseMon = getBasePokemonName(norm);
  const dexId = POKEMON_DEX_MAP[baseMon];
  const dynamicImageUrl = dexId 
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexId}.png`
    : `https://play.pokemonshowdown.com/sprites/gen5/${baseMon}.png`;

  return {
    id: `custom-${norm.slice(0, 10)}`,
    name: name || 'Pokémon',
    category: 'pokemon',
    stage: norm.includes('ex') ? 'EX' : 'BÁSICO',
    hp: norm.includes('ex') ? 280 : 70,
    imageUrl: dynamicImageUrl
  };
}

export function getCardImageUrl(name: string): string {
  return resolveCard(name).imageUrl;
}
