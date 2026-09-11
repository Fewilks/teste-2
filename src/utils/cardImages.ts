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
  'bouffalant': 626
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

// Resolve card info & image
export function resolveCard(name: string): CardMetadata {
  const norm = normalizeCardName(name);

  // Exact match in database
  if (CARD_IMAGE_DATABASE[norm]) {
    return CARD_IMAGE_DATABASE[norm];
  }

  // Targeted archetype & name matches
  if (norm.includes('pidgeotto')) return CARD_IMAGE_DATABASE['pidgeotto'];
  if (norm.includes('pidgeot')) return CARD_IMAGE_DATABASE['pidgeot ex'];
  if (norm.includes('pidgey')) return CARD_IMAGE_DATABASE['pidgey'];
  if (norm.includes('absol')) return CARD_IMAGE_DATABASE['absol ex'];
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
