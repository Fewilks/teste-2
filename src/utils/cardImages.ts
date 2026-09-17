// ============================================================================
// cardImages.ts — Resolver de cartas Pokémon TCG (PTCGL-first)
//
// Fonte canônica: TPCi (SVI, OBF, TWM, JTG, MEG, ...) — é o que o log do
// Pokémon TCG Live traz.
//
// Imagens em cascata (via setSync.buildImageHierarchy):
//   1. TCGdex PT (assets.tcgdex.net)     ← CDN livre, alta resolução
//   2. TCGdex EN
//   3. pokemontcg.io (images.pokemontcg.io)
//   4. Card back
// ============================================================================

import {
  findSet,
  buildImageHierarchy,
  tcgdexUrl,
  ptcgIoUrl,
  CARD_BACK_URL,
} from './setSync';

export const POKEMON_CARD_BACK = 'https://images.pokemontcg.io/card-back.png';
export const POKEMON_CARD_BACK_FALLBACK = 'https://archives.bulbagarden.net/media/upload/1/17/Cardback.jpg';

// Re-exporta para quem importa daqui
export { findSet, buildImageHierarchy, tcgdexUrl, ptcgIoUrl } from './setSync';

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
  localSetId?: string;
}

// ============================================================================
// HELPERS QUE DELEGAM PARA setSync
// ============================================================================

export function normalizeTPCiSetCode(setCode: string): string {
  if (!setCode) return 'SVI';
  const entry = findSet(setCode);
  if (entry) return entry.tpci;
  return setCode.toUpperCase().trim();
}

export function mapTPCiToLocalSetId(tpciCode: string): string {
  const entry = findSet(tpciCode);
  return entry?.ptcgIo || tpciCode.toLowerCase().trim();
}

export function isKnownTPCiCode(token: string): boolean {
  if (!token) return false;
  const entry = findSet(token);
  return !!entry && entry.tpci.toUpperCase() === token.toUpperCase().trim();
}

export function getTCGdexImageUrl(
  setCode: string,
  setNumber: string | number,
  lang: 'pt' | 'en' = 'en'
): string | null {
  return tcgdexUrl(setCode, setNumber, lang);
}

export function getPokemonTcgIoImageUrl(
  setCode: string,
  setNumber: string | number
): string | null {
  return ptcgIoUrl(setCode, setNumber);
}

// ============================================================================
// CANONICAL CARD DATABASE (setCode sempre TPCi)
// ============================================================================

export const CARD_IMAGE_DATABASE: Record<string, CardMetadata> = {
  // ---------- POKEMON ----------
  'charizard ex':      { id: 'OBF-125', name: 'Charizard ex', category: 'pokemon', energyType: 'darkness', stage: 'ESTÁGIO 2', hp: 330, imageUrl: '', setCode: 'OBF', setNumber: '125', localSetId: 'sv3' },
  'charmander':        { id: 'OBF-26',  name: 'Charmander',   category: 'pokemon', energyType: 'fire',     stage: 'BÁSICO',    hp: 70,  imageUrl: '', setCode: 'OBF', setNumber: '26',  localSetId: 'sv3' },
  'charmeleon':        { id: 'OBF-27',  name: 'Charmeleon',   category: 'pokemon', energyType: 'fire',     stage: 'ESTÁGIO 1', hp: 90,  imageUrl: '', setCode: 'OBF', setNumber: '27',  localSetId: 'sv3' },
  'radiant charizard': { id: 'PGO-11',  name: 'Radiant Charizard', category: 'pokemon', energyType: 'fire', stage: 'BÁSICO', hp: 160, imageUrl: '', setCode: 'PGO', setNumber: '11', localSetId: 'pgo' },
  'pidgeot ex':        { id: 'OBF-164', name: 'Pidgeot ex',   category: 'pokemon', energyType: 'colorless', stage: 'ESTÁGIO 2', hp: 280, imageUrl: '', setCode: 'OBF', setNumber: '164', localSetId: 'sv3' },
  'pidgeot':           { id: 'OBF-164', name: 'Pidgeot ex',   category: 'pokemon', energyType: 'colorless', stage: 'ESTÁGIO 2', hp: 280, imageUrl: '', setCode: 'OBF', setNumber: '164', localSetId: 'sv3' },
  'pidgey':            { id: 'OBF-162', name: 'Pidgey',       category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 60,  imageUrl: '', setCode: 'OBF', setNumber: '162', localSetId: 'sv3' },
  'pidgeotto':         { id: 'OBF-163', name: 'Pidgeotto',    category: 'pokemon', energyType: 'colorless', stage: 'ESTÁGIO 1', hp: 80,  imageUrl: '', setCode: 'OBF', setNumber: '163', localSetId: 'sv3' },
  'absol ex':          { id: 'OBF-135', name: 'Absol ex',     category: 'pokemon', energyType: 'darkness',  stage: 'BÁSICO',    hp: 210, imageUrl: '', setCode: 'OBF', setNumber: '135', localSetId: 'sv3' },
  'absol':             { id: 'OBF-135', name: 'Absol ex',     category: 'pokemon', energyType: 'darkness',  stage: 'BÁSICO',    hp: 210, imageUrl: '', setCode: 'OBF', setNumber: '135', localSetId: 'sv3' },
  'budew':             { id: 'SVI-9',   name: 'Budew',        category: 'pokemon', energyType: 'grass',     stage: 'BÁSICO',    hp: 30,  imageUrl: '', setCode: 'SVI', setNumber: '9',   localSetId: 'sv1' },
  'dragapult ex':      { id: 'TWM-130', name: 'Dragapult ex', category: 'pokemon', energyType: 'dragon',    stage: 'ESTÁGIO 2', hp: 320, imageUrl: '', setCode: 'TWM', setNumber: '130', localSetId: 'sv6' },
  'dreepy':            { id: 'TWM-128', name: 'Dreepy',       category: 'pokemon', energyType: 'dragon',    stage: 'BÁSICO',    hp: 70,  imageUrl: '', setCode: 'TWM', setNumber: '128', localSetId: 'sv6' },
  'drakloak':          { id: 'TWM-129', name: 'Drakloak',     category: 'pokemon', energyType: 'dragon',    stage: 'ESTÁGIO 1', hp: 90,  imageUrl: '', setCode: 'TWM', setNumber: '129', localSetId: 'sv6' },
  'duskull':           { id: 'SFA-18',  name: 'Duskull',      category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',    hp: 60,  imageUrl: '', setCode: 'SFA', setNumber: '18', localSetId: 'sv6pt5' },
  'dusclops':          { id: 'SFA-19',  name: 'Dusclops',     category: 'pokemon', energyType: 'psychic',   stage: 'ESTÁGIO 1', hp: 90,  imageUrl: '', setCode: 'SFA', setNumber: '19', localSetId: 'sv6pt5' },
  'dusknoir':          { id: 'SFA-20',  name: 'Dusknoir',     category: 'pokemon', energyType: 'psychic',   stage: 'ESTÁGIO 2', hp: 160, imageUrl: '', setCode: 'SFA', setNumber: '20', localSetId: 'sv6pt5' },
  'rotom v':           { id: 'LOR-58',  name: 'Rotom V',      category: 'pokemon', energyType: 'lightning', stage: 'BÁSICO',    hp: 190, imageUrl: '', setCode: 'LOR', setNumber: '58', localSetId: 'swsh11' },
  'fezandipiti ex':    { id: 'SFA-38',  name: 'Fezandipiti ex', category: 'pokemon', energyType: 'psychic', stage: 'BÁSICO',  hp: 210, imageUrl: '', setCode: 'SFA', setNumber: '38', localSetId: 'sv6pt5' },
  'manaphy':           { id: 'BRS-41',  name: 'Manaphy',      category: 'pokemon', energyType: 'water',     stage: 'BÁSICO',    hp: 70,  imageUrl: '', setCode: 'BRS', setNumber: '41', localSetId: 'swsh9' },
  'radiant alakazam':  { id: 'SIT-59',  name: 'Radiant Alakazam', category: 'pokemon', energyType: 'psychic', stage: 'BÁSICO', hp: 130, imageUrl: '', setCode: 'SIT', setNumber: '59', localSetId: 'swsh12' },
  'lugia vstar':       { id: 'SIT-139', name: 'Lugia VSTAR',  category: 'pokemon', energyType: 'colorless', stage: 'VSTAR',     hp: 280, imageUrl: '', setCode: 'SIT', setNumber: '139', localSetId: 'swsh12' },
  'lugia v':           { id: 'SIT-138', name: 'Lugia V',      category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 220, imageUrl: '', setCode: 'SIT', setNumber: '138', localSetId: 'swsh12' },
  'archeops':          { id: 'SIT-147', name: 'Archeops',     category: 'pokemon', energyType: 'colorless', stage: 'ESTÁGIO 2', hp: 150, imageUrl: '', setCode: 'SIT', setNumber: '147', localSetId: 'swsh12' },
  'gardevoir ex':      { id: 'SVI-86',  name: 'Gardevoir ex', category: 'pokemon', energyType: 'psychic',   stage: 'ESTÁGIO 2', hp: 310, imageUrl: '', setCode: 'SVI', setNumber: '86', localSetId: 'sv1' },
  'kirlia':            { id: 'SVI-85',  name: 'Kirlia',       category: 'pokemon', energyType: 'psychic',   stage: 'ESTÁGIO 1', hp: 80,  imageUrl: '', setCode: 'SVI', setNumber: '85', localSetId: 'sv1' },
  'ralts':             { id: 'SVI-84',  name: 'Ralts',        category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',    hp: 70,  imageUrl: '', setCode: 'SVI', setNumber: '84', localSetId: 'sv1' },
  'munkidori':         { id: 'TWM-95',  name: 'Munkidori',    category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',    hp: 110, imageUrl: '', setCode: 'TWM', setNumber: '95', localSetId: 'sv6' },
  'raging bolt ex':    { id: 'TEF-123', name: 'Raging Bolt ex', category: 'pokemon', energyType: 'dragon', stage: 'BÁSICO',    hp: 240, imageUrl: '', setCode: 'TEF', setNumber: '123', localSetId: 'sv5' },
  'teal mask ogerpon ex': { id: 'TWM-25', name: 'Teal Mask Ogerpon ex', category: 'pokemon', energyType: 'grass', stage: 'BÁSICO', hp: 210, imageUrl: '', setCode: 'TWM', setNumber: '25', localSetId: 'sv6' },
  'ogerpon':           { id: 'TWM-25',  name: 'Teal Mask Ogerpon ex', category: 'pokemon', energyType: 'grass', stage: 'BÁSICO', hp: 210, imageUrl: '', setCode: 'TWM', setNumber: '25', localSetId: 'sv6' },
  'miraidon ex':       { id: 'SVI-81',  name: 'Miraidon ex',  category: 'pokemon', energyType: 'lightning', stage: 'BÁSICO',    hp: 220, imageUrl: '', setCode: 'SVI', setNumber: '81', localSetId: 'sv1' },
  'iron hands ex':     { id: 'PAR-70',  name: 'Iron Hands ex', category: 'pokemon', energyType: 'lightning', stage: 'BÁSICO',   hp: 230, imageUrl: '', setCode: 'PAR', setNumber: '70', localSetId: 'sv4' },
  'iron thorns ex':    { id: 'TWM-77',  name: 'Iron Thorns ex', category: 'pokemon', energyType: 'lightning', stage: 'BÁSICO', hp: 230, imageUrl: '', setCode: 'TWM', setNumber: '77', localSetId: 'sv6' },
  'iron crown ex':     { id: 'TEF-81',  name: 'Iron Crown ex', category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',   hp: 220, imageUrl: '', setCode: 'TEF', setNumber: '81', localSetId: 'sv5' },
  'iron valiant ex':   { id: 'PAR-89',  name: 'Iron Valiant ex', category: 'pokemon', energyType: 'psychic', stage: 'BÁSICO',   hp: 220, imageUrl: '', setCode: 'PAR', setNumber: '89', localSetId: 'sv4' },
  'iron bundle':       { id: 'PAR-56',  name: 'Iron Bundle',  category: 'pokemon', energyType: 'water',     stage: 'BÁSICO',    hp: 100, imageUrl: '', setCode: 'PAR', setNumber: '56', localSetId: 'sv4' },
  'raikou v':          { id: 'BRS-48',  name: 'Raikou V',     category: 'pokemon', energyType: 'lightning', stage: 'BÁSICO',    hp: 200, imageUrl: '', setCode: 'BRS', setNumber: '48', localSetId: 'swsh9' },
  'roaring moon ex':   { id: 'PAR-124', name: 'Roaring Moon ex', category: 'pokemon', energyType: 'darkness', stage: 'BÁSICO', hp: 230, imageUrl: '', setCode: 'PAR', setNumber: '124', localSetId: 'sv4' },
  'roaring moon':      { id: 'TEF-109', name: 'Roaring Moon', category: 'pokemon', energyType: 'darkness',  stage: 'BÁSICO',    hp: 140, imageUrl: '', setCode: 'TEF', setNumber: '109', localSetId: 'sv5' },
  'flutter mane':      { id: 'TEF-78',  name: 'Flutter Mane', category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',    hp: 90,  imageUrl: '', setCode: 'TEF', setNumber: '78', localSetId: 'sv5' },
  'koraidon':          { id: 'TEF-119', name: 'Koraidon',     category: 'pokemon', energyType: 'fighting',  stage: 'BÁSICO',    hp: 140, imageUrl: '', setCode: 'TEF', setNumber: '119', localSetId: 'sv5' },
  'terapagos ex':      { id: 'SCR-128', name: 'Terapagos ex', category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 230, imageUrl: '', setCode: 'SCR', setNumber: '128', localSetId: 'sv7' },
  'noctowl':           { id: 'SCR-115', name: 'Noctowl',      category: 'pokemon', energyType: 'colorless', stage: 'ESTÁGIO 1', hp: 100, imageUrl: '', setCode: 'SCR', setNumber: '115', localSetId: 'sv7' },
  'hoothoot':          { id: 'SCR-114', name: 'Hoothoot',     category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 70,  imageUrl: '', setCode: 'SCR', setNumber: '114', localSetId: 'sv7' },
  'bouffalant':        { id: 'SCR-119', name: 'Bouffalant',   category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 100, imageUrl: '', setCode: 'SCR', setNumber: '119', localSetId: 'sv7' },
  'fan rotom':         { id: 'SCR-118', name: 'Fan Rotom',    category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 70,  imageUrl: '', setCode: 'SCR', setNumber: '118', localSetId: 'sv7' },
  'gholdengo ex':      { id: 'PAR-139', name: 'Gholdengo ex', category: 'pokemon', energyType: 'metal',     stage: 'ESTÁGIO 1', hp: 260, imageUrl: '', setCode: 'PAR', setNumber: '139', localSetId: 'sv4' },
  'gimmighoul':        { id: 'PAR-87',  name: 'Gimmighoul',   category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',    hp: 50,  imageUrl: '', setCode: 'PAR', setNumber: '87', localSetId: 'sv4' },
  'scizor':            { id: 'OBF-141', name: 'Scizor',       category: 'pokemon', energyType: 'metal',     stage: 'ESTÁGIO 1', hp: 140, imageUrl: '', setCode: 'OBF', setNumber: '141', localSetId: 'sv3' },
  'scyther':           { id: 'OBF-4',   name: 'Scyther',      category: 'pokemon', energyType: 'grass',     stage: 'BÁSICO',    hp: 80,  imageUrl: '', setCode: 'OBF', setNumber: '4',   localSetId: 'sv3' },
  'pikachu ex':        { id: 'SSP-57',  name: 'Pikachu ex',   category: 'pokemon', energyType: 'lightning', stage: 'BÁSICO',    hp: 200, imageUrl: '', setCode: 'SSP', setNumber: '57', localSetId: 'sv8' },
  'ceruledge ex':      { id: 'SSP-36',  name: 'Ceruledge ex', category: 'pokemon', energyType: 'fire',      stage: 'ESTÁGIO 1', hp: 270, imageUrl: '', setCode: 'SSP', setNumber: '36', localSetId: 'sv8' },
  'comfey':            { id: 'LOR-79',  name: 'Comfey',       category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',    hp: 70,  imageUrl: '', setCode: 'LOR', setNumber: '79', localSetId: 'swsh11' },
  'sableye':           { id: 'LOR-70',  name: 'Sableye',      category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',    hp: 80,  imageUrl: '', setCode: 'LOR', setNumber: '70', localSetId: 'swsh11' },
  'cramorant':         { id: 'LOR-50',  name: 'Cramorant',    category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 110, imageUrl: '', setCode: 'LOR', setNumber: '50', localSetId: 'swsh11' },
  'radiant greninja':  { id: 'ASR-46',  name: 'Radiant Greninja', category: 'pokemon', energyType: 'water', stage: 'BÁSICO',   hp: 130, imageUrl: '', setCode: 'ASR', setNumber: '46', localSetId: 'swsh10' },
  'mew ex':            { id: 'MEW-151', name: 'Mew ex',       category: 'pokemon', energyType: 'psychic',   stage: 'BÁSICO',    hp: 180, imageUrl: '', setCode: 'MEW', setNumber: '151', localSetId: 'sv3pt5' },
  'snorlax':           { id: 'PGO-55',  name: 'Snorlax',      category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 150, imageUrl: '', setCode: 'PGO', setNumber: '55', localSetId: 'pgo' },
  'origin forme palkia vstar': { id: 'ASR-40', name: 'Origin Forme Palkia VSTAR', category: 'pokemon', energyType: 'water', stage: 'VSTAR', hp: 280, imageUrl: '', setCode: 'ASR', setNumber: '40', localSetId: 'swsh10' },
  'palkia vstar':      { id: 'ASR-40',  name: 'Origin Forme Palkia VSTAR', category: 'pokemon', energyType: 'water', stage: 'VSTAR', hp: 280, imageUrl: '', setCode: 'ASR', setNumber: '40', localSetId: 'swsh10' },
  'regidrago vstar':   { id: 'SIT-136', name: 'Regidrago VSTAR', category: 'pokemon', energyType: 'dragon', stage: 'VSTAR',    hp: 280, imageUrl: '', setCode: 'SIT', setNumber: '136', localSetId: 'swsh12' },
  'chien-pao ex':      { id: 'PAL-61',  name: 'Chien-Pao ex', category: 'pokemon', energyType: 'water',     stage: 'BÁSICO',    hp: 220, imageUrl: '', setCode: 'PAL', setNumber: '61', localSetId: 'sv2' },
  'baxcalibur':        { id: 'PAL-60',  name: 'Baxcalibur',   category: 'pokemon', energyType: 'water',     stage: 'ESTÁGIO 2', hp: 160, imageUrl: '', setCode: 'PAL', setNumber: '60', localSetId: 'sv2' },
  'bibarel':           { id: 'BRS-121', name: 'Bibarel',      category: 'pokemon', energyType: 'colorless', stage: 'ESTÁGIO 1', hp: 120, imageUrl: '', setCode: 'BRS', setNumber: '121', localSetId: 'swsh9' },
  'bidoof':            { id: 'BRS-120', name: 'Bidoof',       category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO',    hp: 70,  imageUrl: '', setCode: 'BRS', setNumber: '120', localSetId: 'swsh9' },
  'squawkabilly ex':   { id: 'PAL-169', name: 'Squawkabilly ex', category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO', hp: 160, imageUrl: '', setCode: 'PAL', setNumber: '169', localSetId: 'sv2' },
  'bloodmoon ursaluna ex': { id: 'TWM-141', name: 'Bloodmoon Ursaluna ex', category: 'pokemon', energyType: 'colorless', stage: 'BÁSICO', hp: 260, imageUrl: '', setCode: 'TWM', setNumber: '141', localSetId: 'sv6' },
  'lumineon v':        { id: 'BRS-40',  name: 'Lumineon V',   category: 'pokemon', energyType: 'water',     stage: 'BÁSICO',    hp: 170, imageUrl: '', setCode: 'BRS', setNumber: '40', localSetId: 'swsh9' },
  'crobat v':          { id: 'DAA-104', name: 'Crobat V',     category: 'pokemon', energyType: 'darkness',  stage: 'BÁSICO',    hp: 180, imageUrl: '', setCode: 'DAA', setNumber: '104', localSetId: 'swsh3' },

  // --- XY Mega Evolutions ---
  'mega lucario ex':       { id: 'FFI-55',  name: 'Mega Lucario ex',      category: 'pokemon', energyType: 'fighting', stage: 'EX', hp: 220, imageUrl: '', setCode: 'FFI', setNumber: '55',  localSetId: 'xy3' },
  'mega lucario ex (ilustracao especial rara)': { id: 'FFI-113', name: 'Mega Lucario ex (Ilustração Especial Rara)', category: 'pokemon', energyType: 'fighting', stage: 'EX', hp: 220, imageUrl: '', setCode: 'FFI', setNumber: '113', localSetId: 'xy3' },
  'mega gardevoir ex':     { id: 'STS-112', name: 'Mega Gardevoir ex',    category: 'pokemon', energyType: 'psychic',  stage: 'EX', hp: 210, imageUrl: '', setCode: 'STS', setNumber: '112', localSetId: 'xy11' },
  'mega charizard x ex':   { id: 'FLF-13',  name: 'Mega Charizard X ex',  category: 'pokemon', energyType: 'fire',     stage: 'EX', hp: 220, imageUrl: '', setCode: 'FLF', setNumber: '13',  localSetId: 'xy2' },
  'mega charizard x ex (ilustracao rara)': { id: 'FLF-107', name: 'Mega Charizard X ex (Ilustração Rara)', category: 'pokemon', energyType: 'fire', stage: 'EX', hp: 220, imageUrl: '', setCode: 'FLF', setNumber: '107', localSetId: 'xy2' },
  'mega charizard y ex':   { id: 'FLF-108', name: 'Mega Charizard Y ex',  category: 'pokemon', energyType: 'fire',     stage: 'EX', hp: 220, imageUrl: '', setCode: 'FLF', setNumber: '108', localSetId: 'xy2' },
  'mega venusaur ex':      { id: 'XY-2',    name: 'Mega Venusaur ex',     category: 'pokemon', energyType: 'grass',    stage: 'EX', hp: 230, imageUrl: '', setCode: 'XY',  setNumber: '2',   localSetId: 'xy1' },
  'mega blastoise ex':     { id: 'XY-30',   name: 'Mega Blastoise ex',    category: 'pokemon', energyType: 'water',    stage: 'EX', hp: 220, imageUrl: '', setCode: 'XY',  setNumber: '30',  localSetId: 'xy1' },
  'mega gengar ex':        { id: 'PHF-35',  name: 'Mega Gengar ex',       category: 'pokemon', energyType: 'psychic',  stage: 'EX', hp: 220, imageUrl: '', setCode: 'PHF', setNumber: '35',  localSetId: 'xy4' },
  'mega rayquaza ex':      { id: 'ROS-61',  name: 'Mega Rayquaza ex',     category: 'pokemon', energyType: 'colorless',stage: 'EX', hp: 220, imageUrl: '', setCode: 'ROS', setNumber: '61',  localSetId: 'xy6' },
  'mega mewtwo x ex':      { id: 'BKT-63',  name: 'Mega Mewtwo X ex',     category: 'pokemon', energyType: 'psychic',  stage: 'EX', hp: 230, imageUrl: '', setCode: 'BKT', setNumber: '63',  localSetId: 'xy8' },
  'mega mewtwo y ex':      { id: 'BKT-64',  name: 'Mega Mewtwo Y ex',     category: 'pokemon', energyType: 'psychic',  stage: 'EX', hp: 210, imageUrl: '', setCode: 'BKT', setNumber: '64',  localSetId: 'xy8' },
  'mega kangaskhan ex':    { id: 'FLF-79',  name: 'Mega Kangaskhan ex',   category: 'pokemon', energyType: 'colorless',stage: 'EX', hp: 230, imageUrl: '', setCode: 'FLF', setNumber: '79',  localSetId: 'xy2' },
  'mega tyranitar ex':     { id: 'AOR-43',  name: 'Mega Tyranitar ex',    category: 'pokemon', energyType: 'darkness', stage: 'EX', hp: 240, imageUrl: '', setCode: 'AOR', setNumber: '43',  localSetId: 'xy7' },
  'mega scizor ex':        { id: 'BKP-77',  name: 'Mega Scizor ex',       category: 'pokemon', energyType: 'metal',    stage: 'EX', hp: 220, imageUrl: '', setCode: 'BKP', setNumber: '77',  localSetId: 'xy9' },
  'mega gallade ex':       { id: 'ROS-35',  name: 'Mega Gallade ex',      category: 'pokemon', energyType: 'psychic',  stage: 'EX', hp: 220, imageUrl: '', setCode: 'ROS', setNumber: '35',  localSetId: 'xy6' },
  'mega steelix ex':       { id: 'STS-68',  name: 'Mega Steelix ex',      category: 'pokemon', energyType: 'metal',    stage: 'EX', hp: 240, imageUrl: '', setCode: 'STS', setNumber: '68',  localSetId: 'xy11' },
  'mega latias ex':        { id: 'ROS-59',  name: 'Mega Latias ex',       category: 'pokemon', energyType: 'dragon',   stage: 'EX', hp: 190, imageUrl: '', setCode: 'ROS', setNumber: '59',  localSetId: 'xy6' },
  'mega darkrai ex':       { id: 'BKP-74',  name: 'Mega Darkrai ex',      category: 'pokemon', energyType: 'darkness', stage: 'EX', hp: 180, imageUrl: '', setCode: 'BKP', setNumber: '74',  localSetId: 'xy9' },
  'zygarde ex':            { id: 'FCO-54',  name: 'Zygarde ex',           category: 'pokemon', energyType: 'fighting', stage: 'EX', hp: 190, imageUrl: '', setCode: 'FCO', setNumber: '54',  localSetId: 'xy10' },
  'xerneas ex':            { id: 'XY-96',   name: 'Xerneas ex',           category: 'pokemon', energyType: 'psychic',  stage: 'EX', hp: 170, imageUrl: '', setCode: 'XY',  setNumber: '96',  localSetId: 'xy1' },
  'yveltal ex':            { id: 'XY-78',   name: 'Yveltal ex',           category: 'pokemon', energyType: 'darkness', stage: 'EX', hp: 170, imageUrl: '', setCode: 'XY',  setNumber: '78',  localSetId: 'xy1' },

  // ---------- TRAINERS ----------
  'buddy-buddy poffin':      { id: 'TEF-144', name: 'Buddy-Buddy Poffin', category: 'item',      stage: 'TREINADOR', imageUrl: '', setCode: 'TEF', setNumber: '144', localSetId: 'sv5' },
  'poffin de companheiro':   { id: 'TEF-144', name: 'Buddy-Buddy Poffin', category: 'item',      stage: 'TREINADOR', imageUrl: '', setCode: 'TEF', setNumber: '144', localSetId: 'sv5' },
  'pedaco de poffin de companheiro': { id: 'TEF-144', name: 'Buddy-Buddy Poffin', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'TEF', setNumber: '144', localSetId: 'sv5' },
  'ultra ball':              { id: 'SVI-196', name: 'Ultra Ball', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '196', localSetId: 'sv1' },
  'ultra bola':              { id: 'SVI-196', name: 'Ultra Ball', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '196', localSetId: 'sv1' },
  'nest ball':               { id: 'SVI-181', name: 'Nest Ball',  category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '181', localSetId: 'sv1' },
  'bola ninho':              { id: 'SVI-181', name: 'Nest Ball',  category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '181', localSetId: 'sv1' },
  'rare candy':              { id: 'SVI-191', name: 'Rare Candy', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '191', localSetId: 'sv1' },
  'doce raro':               { id: 'SVI-191', name: 'Rare Candy', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '191', localSetId: 'sv1' },
  'super rod':               { id: 'PAL-188', name: 'Super Rod',  category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'PAL', setNumber: '188', localSetId: 'sv2' },
  'supervara':               { id: 'PAL-188', name: 'Super Rod',  category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'PAL', setNumber: '188', localSetId: 'sv2' },
  'prime catcher':           { id: 'TEF-157', name: 'Prime Catcher', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'TEF', setNumber: '157', localSetId: 'sv5' },
  'pegador primordial':      { id: 'TEF-157', name: 'Prime Catcher', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'TEF', setNumber: '157', localSetId: 'sv5' },
  'counter catcher':         { id: 'PAR-160', name: 'Counter Catcher', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'PAR', setNumber: '160', localSetId: 'sv4' },
  'pegador de revanche':     { id: 'PAR-160', name: 'Counter Catcher', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'PAR', setNumber: '160', localSetId: 'sv4' },
  'night stretcher':         { id: 'SFA-61',  name: 'Night Stretcher', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'SFA', setNumber: '61', localSetId: 'sv6pt5' },
  'maca noturna':            { id: 'SFA-61',  name: 'Night Stretcher', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'SFA', setNumber: '61', localSetId: 'sv6pt5' },
  'earthen vessel':          { id: 'PAR-163', name: 'Earthen Vessel', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'PAR', setNumber: '163', localSetId: 'sv4' },
  'recipiente terrestre':    { id: 'PAR-163', name: 'Earthen Vessel', category: 'item', stage: 'TREINADOR', imageUrl: '', setCode: 'PAR', setNumber: '163', localSetId: 'sv4' },
  'forest seal stone':       { id: 'SIT-156', name: 'Forest Seal Stone', category: 'tool', stage: 'TREINADOR', imageUrl: '', setCode: 'SIT', setNumber: '156', localSetId: 'swsh12' },
  'arven':                   { id: 'SVI-166', name: 'Arven', category: 'supporter', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '166', localSetId: 'sv1' },
  'iono':                    { id: 'PAL-185', name: 'Iono',  category: 'supporter', stage: 'TREINADOR', imageUrl: '', setCode: 'PAL', setNumber: '185', localSetId: 'sv2' },
  "boss's orders":           { id: 'SVI-172', name: "Boss's Orders", category: 'supporter', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '172', localSetId: 'sv1' },
  'ordens da chefia':        { id: 'SVI-172', name: "Boss's Orders", category: 'supporter', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '172', localSetId: 'sv1' },
  "professor's research":    { id: 'SVI-189', name: "Professor's Research", category: 'supporter', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '189', localSetId: 'sv1' },
  'pesquisa de professores': { id: 'SVI-189', name: "Professor's Research", category: 'supporter', stage: 'TREINADOR', imageUrl: '', setCode: 'SVI', setNumber: '189', localSetId: 'sv1' },
  'artazon':                 { id: 'PAL-171', name: 'Artazon', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'PAL', setNumber: '171', localSetId: 'sv2' },
  'pokestop':                { id: 'PGO-68',  name: 'PokéStop', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'PGO', setNumber: '68', localSetId: 'pgo' },
  'pokeparada':              { id: 'PGO-68',  name: 'PokéStop', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'PGO', setNumber: '68', localSetId: 'pgo' },
  'jamming tower':           { id: 'TWM-153', name: 'Jamming Tower', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'TWM', setNumber: '153', localSetId: 'sv6' },
  'torre interferente':      { id: 'TWM-153', name: 'Jamming Tower', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'TWM', setNumber: '153', localSetId: 'sv6' },
  'area zero underdepths':   { id: 'SCR-131', name: 'Area Zero Underdepths', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'SCR', setNumber: '131', localSetId: 'sv7' },
  'subterraneo da area zero':{ id: 'SCR-131', name: 'Area Zero Underdepths', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'SCR', setNumber: '131', localSetId: 'sv7' },
  'neutral center':          { id: 'SCR-133', name: 'Neutral Center', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'SCR', setNumber: '133', localSetId: 'sv7' },
  'centro neutro':           { id: 'SCR-133', name: 'Neutral Center', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'SCR', setNumber: '133', localSetId: 'sv7' },
  'path to the peak':        { id: 'CRE-148', name: 'Path to the Peak', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'CRE', setNumber: '148', localSetId: 'swsh6' },
  'lost city':               { id: 'LOR-161', name: 'Lost City', category: 'stadium', stage: 'TREINADOR', imageUrl: '', setCode: 'LOR', setNumber: '161', localSetId: 'swsh11' },

  // ---------- ENERGIES ----------
  'basic fire energy':      { id: 'SVE-2', name: 'Basic Fire Energy',      category: 'energy', energyType: 'fire',      stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '2', localSetId: 'sve' },
  'energia de fogo basica': { id: 'SVE-2', name: 'Basic Fire Energy',      category: 'energy', energyType: 'fire',      stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '2', localSetId: 'sve' },
  'energia de fogo':        { id: 'SVE-2', name: 'Basic Fire Energy',      category: 'energy', energyType: 'fire',      stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '2', localSetId: 'sve' },
  'basic psychic energy':   { id: 'SVE-5', name: 'Basic Psychic Energy',   category: 'energy', energyType: 'psychic',   stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '5', localSetId: 'sve' },
  'energia psiquica basica':{ id: 'SVE-5', name: 'Basic Psychic Energy',   category: 'energy', energyType: 'psychic',   stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '5', localSetId: 'sve' },
  'energia psiquica':       { id: 'SVE-5', name: 'Basic Psychic Energy',   category: 'energy', energyType: 'psychic',   stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '5', localSetId: 'sve' },
  'basic water energy':     { id: 'SVE-3', name: 'Basic Water Energy',     category: 'energy', energyType: 'water',     stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '3', localSetId: 'sve' },
  'energia de agua basica': { id: 'SVE-3', name: 'Basic Water Energy',     category: 'energy', energyType: 'water',     stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '3', localSetId: 'sve' },
  'basic lightning energy': { id: 'SVE-4', name: 'Basic Lightning Energy', category: 'energy', energyType: 'lightning', stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '4', localSetId: 'sve' },
  'energia de raios basica':{ id: 'SVE-4', name: 'Basic Lightning Energy', category: 'energy', energyType: 'lightning', stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '4', localSetId: 'sve' },
  'basic fighting energy':  { id: 'SVE-6', name: 'Basic Fighting Energy',  category: 'energy', energyType: 'fighting',  stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '6', localSetId: 'sve' },
  'energia de luta basica': { id: 'SVE-6', name: 'Basic Fighting Energy',  category: 'energy', energyType: 'fighting',  stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '6', localSetId: 'sve' },
  'basic darkness energy':  { id: 'SVE-7', name: 'Basic Darkness Energy',  category: 'energy', energyType: 'darkness',  stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '7', localSetId: 'sve' },
  'energia de escuridao basica': { id: 'SVE-7', name: 'Basic Darkness Energy', category: 'energy', energyType: 'darkness', stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '7', localSetId: 'sve' },
  'basic metal energy':     { id: 'SVE-8', name: 'Basic Metal Energy',     category: 'energy', energyType: 'metal',     stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '8', localSetId: 'sve' },
  'basic grass energy':     { id: 'SVE-1', name: 'Basic Grass Energy',     category: 'energy', energyType: 'grass',     stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '1', localSetId: 'sve' },
  'energia de planta basica': { id: 'SVE-1', name: 'Basic Grass Energy',   category: 'energy', energyType: 'grass',     stage: 'ENERGIA', imageUrl: '', setCode: 'SVE', setNumber: '1', localSetId: 'sve' },
  'double turbo energy':    { id: 'BRS-151', name: 'Double Turbo Energy',  category: 'energy', energyType: 'colorless', stage: 'ENERGIA', imageUrl: '', setCode: 'BRS', setNumber: '151', localSetId: 'swsh9' },
};

// Popula imageUrl de todas as cartas via TCGdex
Object.values(CARD_IMAGE_DATABASE).forEach(card => {
  if (card.setCode && card.setNumber) {
    const url = tcgdexUrl(card.setCode, card.setNumber, 'en') || ptcgIoUrl(card.setCode, card.setNumber);
    if (url) card.imageUrl = url;
  }
});

// ============================================================================
// POKEMON DEX MAP
// ============================================================================

export const POKEMON_DEX_MAP: Record<string, number> = {
  'charizard': 6, 'charmander': 4, 'charmeleon': 5,
  'pidgeot': 18, 'pidgey': 16, 'pidgeotto': 17,
  'duskull': 355, 'dusclops': 356, 'dusknoir': 477,
  'dreepy': 885, 'drakloak': 886, 'dragapult': 887,
  'rotom': 479, 'fezandipiti': 1016, 'manaphy': 490,
  'alakazam': 65, 'lugia': 249, 'archeops': 567,
  'cinccino': 573, 'minccino': 572,
  'gardevoir': 282, 'kirlia': 281, 'ralts': 280,
  'drifloon': 425, 'munkidori': 1015,
  'miraidon': 1008, 'koraidon': 1007,
  'snorlax': 143, 'pikachu': 25, 'ceruledge': 937, 'charcadet': 935,
  'comfey': 764, 'sableye': 302, 'cramorant': 845,
  'greninja': 658, 'mew': 151, 'palkia': 484, 'giratina': 487,
  'regidrago': 895, 'scizor': 212, 'scyther': 123,
  'gholdengo': 1000, 'gimmighoul': 999,
  'bibarel': 400, 'bidoof': 399,
  'noctowl': 164, 'hoothoot': 163, 'bouffalant': 626,
  'budew': 406, 'absol': 359,
  'lumineon': 457, 'crobat': 169,
};

// ============================================================================
// NAME NORMALIZATION
// ============================================================================

export function normalizeCardName(name: string): string {
  if (!name) return '';
  let cleaned = name.toLowerCase().trim();
  cleaned = cleaned.replace(/\s+(?:de|do|da|of)\s+[a-z0-9\s]+$/i, '');
  cleaned = cleaned.replace(/^(?:jogou|colocou|comprou|ligou|anexou|evoluiu|played|put|attached|drew|evolved)\s+/i, '');
  cleaned = cleaned.replace(/\s+(?:no campo ativo|no banco|to the active spot|to the bench|in the active spot).*/i, '');
  cleaned = cleaned.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  cleaned = cleaned.replace(/[^a-z0-9\s-]/g, '').trim();
  return cleaned;
}

export function getBasePokemonName(name: string): string {
  const norm = normalizeCardName(name);
  const words = norm.split(/[\s-]+/);
  const ignored = ['ex','vstar','vmax','v','radiant','radiante','origin','forme','forma','origem','teal','mask','deck'];
  const candidates = words.filter(w => !ignored.includes(w));
  return candidates[0] || 'substitute';
}

// ============================================================================
// PTCGL CARD ID REGISTRY
// ============================================================================

export const PTCGL_CARD_ID_MAP: Record<string, CardMetadata> = {};

function registerCardId(key: string, card: CardMetadata | undefined) {
  if (!key || !card) return;
  const k = key.toLowerCase().trim();
  PTCGL_CARD_ID_MAP[k] = card;
  PTCGL_CARD_ID_MAP[k.replace(/\s+/g, '-')] = card;
  PTCGL_CARD_ID_MAP[k.replace(/-/g, ' ')] = card;
  PTCGL_CARD_ID_MAP[k.replace(/[^a-z0-9]/g, '')] = card;
}

Object.values(CARD_IMAGE_DATABASE).forEach(card => {
  if (!card) return;
  if (card.setCode && card.setNumber) {
    const tpci = normalizeTPCiSetCode(card.setCode);
    const num = String(card.setNumber).replace(/^#/, '').trim();
    card.id = `${tpci}-${num}`;
    registerCardId(`${tpci}-${num}`, card);
    registerCardId(`${tpci} ${num}`, card);
    registerCardId(`${tpci} #${num}`, card);
    const local = card.localSetId || mapTPCiToLocalSetId(tpci);
    if (local) registerCardId(`${local}-${num}`, card);
    if (local) registerCardId(`${local} ${num}`, card);
  } else if (card.id) {
    registerCardId(card.id, card);
  }
});

// ============================================================================
// PTCGL FORMAT
// ============================================================================

export interface FormattedPTCGLCard {
  canonicalCode: string;
  setCode: string;
  tpciSetCode: string;
  setNumber: string;
  displayName: string;
  ptcglIdentifier: string;
  localSetId?: string;
  rawLocalId?: string;
}

export function convertLocalIdToPTCGL(
  localCardOrId: string | { id?: string; setCode?: string; setNumber?: string | number; name?: string; setName?: string },
  fallbackName?: string
): FormattedPTCGLCard {
  if (typeof localCardOrId === 'object' && localCardOrId !== null) {
    const rawSet = localCardOrId.setCode || 'SVI';
    const tpciSetCode = normalizeTPCiSetCode(rawSet);
    const localSetId = mapTPCiToLocalSetId(tpciSetCode);
    const rawNum = String(localCardOrId.setNumber || '1').replace(/^#/, '').trim();
    const displayName = localCardOrId.name || fallbackName || 'Carta Pokémon';
    const canonicalCode = `${tpciSetCode} ${rawNum}`;
    return {
      canonicalCode, setCode: tpciSetCode, tpciSetCode, setNumber: rawNum,
      displayName, ptcglIdentifier: `${displayName} ${canonicalCode}`,
      localSetId, rawLocalId: localCardOrId.id
    };
  }

  const rawStr = String(localCardOrId || '').trim();
  if (!rawStr) {
    return {
      canonicalCode: 'SVI 1', setCode: 'SVI', tpciSetCode: 'SVI', setNumber: '1',
      displayName: fallbackName || 'Pokémon',
      ptcglIdentifier: `${fallbackName || 'Pokémon'} SVI 1`,
      localSetId: 'sv1', rawLocalId: ''
    };
  }

  let cleanId = rawStr;
  if (rawStr.includes('_')) {
    const parts = rawStr.split('_');
    if (/^[a-z0-9]{15,}$/i.test(parts[0])) cleanId = parts.slice(1).join('_');
  }

  const ptcglExportMatch = cleanId.match(/^(?:(.+?)\s+)?([A-Za-z0-9.]{2,7})\s+(\d+|promo)$/i);
  if (ptcglExportMatch && isKnownTPCiCode(ptcglExportMatch[2])) {
    const detectedName = ptcglExportMatch[1]?.trim();
    const rawSet = ptcglExportMatch[2];
    const rawNum = ptcglExportMatch[3];
    const tpciSetCode = normalizeTPCiSetCode(rawSet);
    const localSetId = mapTPCiToLocalSetId(tpciSetCode);
    const mapped = PTCGL_CARD_ID_MAP[`${tpciSetCode.toLowerCase()} ${rawNum}`]
      || PTCGL_CARD_ID_MAP[`${rawSet.toLowerCase()} ${rawNum}`];
    const displayName = detectedName || mapped?.name || fallbackName || 'Pokémon';
    const canonicalCode = `${tpciSetCode} ${rawNum}`;
    return {
      canonicalCode, setCode: tpciSetCode, tpciSetCode, setNumber: rawNum,
      displayName, ptcglIdentifier: `${displayName} ${canonicalCode}`,
      localSetId, rawLocalId: rawStr
    };
  }

  const hyphenMatch = cleanId.match(/^([a-z0-9.]+)[-_](\d+|promo)$/i);
  if (hyphenMatch) {
    const rawSet = hyphenMatch[1];
    const rawNum = hyphenMatch[2];
    const tpciSetCode = normalizeTPCiSetCode(rawSet);
    const localSetId = mapTPCiToLocalSetId(tpciSetCode);
    const mapped = PTCGL_CARD_ID_MAP[`${rawSet.toLowerCase()}-${rawNum}`]
      || PTCGL_CARD_ID_MAP[`${tpciSetCode.toLowerCase()} ${rawNum}`];
    const displayName = mapped?.name || fallbackName || 'Pokémon';
    const canonicalCode = `${tpciSetCode} ${rawNum}`;
    return {
      canonicalCode, setCode: tpciSetCode, tpciSetCode, setNumber: rawNum,
      displayName, ptcglIdentifier: `${displayName} ${canonicalCode}`,
      localSetId, rawLocalId: rawStr
    };
  }

  const resolved = resolvePTCGLCard(rawStr);
  const tpciSetCode = normalizeTPCiSetCode(resolved.setCode || 'SVI');
  const localSetId = resolved.localSetId || mapTPCiToLocalSetId(tpciSetCode);
  const setNumber = resolved.setNumber || '1';
  const canonicalCode = `${tpciSetCode} ${setNumber}`;
  return {
    canonicalCode, setCode: tpciSetCode, tpciSetCode, setNumber,
    displayName: resolved.name,
    ptcglIdentifier: `${resolved.name} ${canonicalCode}`,
    localSetId, rawLocalId: rawStr
  };
}

export function formatPTCGLCardCode(cardOrName: CardMetadata | string): FormattedPTCGLCard {
  return convertLocalIdToPTCGL(cardOrName);
}

// ============================================================================
// PTCGL LOG LINE PARSER
// ============================================================================

export function parsePTCGLLogLine(line: string): FormattedPTCGLCard | null {
  if (!line) return null;
  let text = line.trim();

  text = text.replace(
    /^(?:o\s+)?(?:jogador\s+\S+\s+)?(?:jogou|colocou|comprou|ligou|anexou|evoluiu|descarte|procurou|embaralhou|usou|jogador|jogadora|player)\s+/i,
    ''
  );
  text = text.replace(
    /^(?:played|put|attached|drew|evolved|discarded|searched|shuffled|used)\s+/i,
    ''
  );
  text = text.replace(
    /\s+(?:no campo ativo|no banco|para o campo ativo|para o banco|to the active spot|to the bench|in the active spot|to the bench).*$/i,
    ''
  );
  text = text.replace(/\s+(?:a|ao|à|para)\s+[A-Za-zÀ-ÿ0-9 .'-]{2,}$/i, '');
  text = text.replace(/\s+(?:de|do|da|of)\s+[A-Za-zÀ-ÿ0-9 .'-]{2,}$/i, '');
  text = text.trim();

  const compound = text.match(/^(?:(.+?)\s+)?([A-Za-z]{2,5})[-\s#]+(\d{1,4})$/);
  if (compound) {
    const maybeSet = compound[2];
    if (isKnownTPCiCode(maybeSet)) {
      const tpciSetCode = normalizeTPCiSetCode(maybeSet);
      const setNumber = compound[3];
      const detectedName = compound[1]?.trim();
      const mapped = PTCGL_CARD_ID_MAP[`${tpciSetCode.toLowerCase()} ${setNumber}`]
        || PTCGL_CARD_ID_MAP[`${maybeSet.toLowerCase()} ${setNumber}`];
      const displayName = detectedName || mapped?.name || 'Pokémon';
      const canonicalCode = `${tpciSetCode} ${setNumber}`;
      return {
        canonicalCode, setCode: tpciSetCode, tpciSetCode, setNumber,
        displayName, ptcglIdentifier: `${displayName} ${canonicalCode}`,
        localSetId: mapped?.localSetId || mapTPCiToLocalSetId(tpciSetCode),
        rawLocalId: line
      };
    }
  }

  const hyphen = text.match(/([a-z0-9.]+)[-_](\d{1,4})$/i);
  if (hyphen) {
    const rawSet = hyphen[1];
    const rawNum = hyphen[2];
    const entry = findSet(rawSet);
    if (entry) {
      const tpciSetCode = entry.tpci;
      const mapped = PTCGL_CARD_ID_MAP[`${rawSet.toLowerCase()}-${rawNum}`]
        || PTCGL_CARD_ID_MAP[`${tpciSetCode.toLowerCase()} ${rawNum}`];
      const displayName = mapped?.name || 'Pokémon';
      const canonicalCode = `${tpciSetCode} ${rawNum}`;
      return {
        canonicalCode, setCode: tpciSetCode, tpciSetCode, setNumber: rawNum,
        displayName, ptcglIdentifier: `${displayName} ${canonicalCode}`,
        localSetId: mapped?.localSetId || mapTPCiToLocalSetId(tpciSetCode),
        rawLocalId: line
      };
    }
  }

  const resolved = resolvePTCGLCard(text);
  if (resolved.setCode && resolved.setNumber) {
    const tpci = normalizeTPCiSetCode(resolved.setCode);
    const canonicalCode = `${tpci} ${resolved.setNumber}`;
    return {
      canonicalCode, setCode: tpci, tpciSetCode: tpci, setNumber: resolved.setNumber,
      displayName: resolved.name, ptcglIdentifier: `${resolved.name} ${canonicalCode}`,
      localSetId: resolved.localSetId || mapTPCiToLocalSetId(tpci),
      rawLocalId: line
    };
  }
  return null;
}

// ============================================================================
// MAIN RESOLVER (PTCGL-first)
// ============================================================================

export function resolvePTCGLCard(name: string): CardMetadata {
  if (!name) {
    return {
      id: 'SVI-1', name: 'Pokémon', category: 'pokemon',
      stage: 'BÁSICO', hp: 70, imageUrl: POKEMON_CARD_BACK,
      setCode: 'SVI', setNumber: '1', localSetId: 'sv1'
    };
  }

  const cleanId = name.toLowerCase().trim().replace(/[^a-z0-9.-]/g, '');
  if (PTCGL_CARD_ID_MAP[cleanId]) return PTCGL_CARD_ID_MAP[cleanId];
  const cleanSpaced = name.toLowerCase().trim();
  if (PTCGL_CARD_ID_MAP[cleanSpaced]) return PTCGL_CARD_ID_MAP[cleanSpaced];

  const parsed = parsePTCGLLogLine(name);
  if (parsed) {
    const key = `${parsed.tpciSetCode.toLowerCase()} ${parsed.setNumber}`;
    const direct = PTCGL_CARD_ID_MAP[key] || PTCGL_CARD_ID_MAP[parsed.canonicalCode.toLowerCase()];
    if (direct) return direct;
  }

  const compound = name.match(/^(.+?)\s+(?:\[|\()?([a-z0-9.]+)[-# ]+(\d+)(?:\]|\))?$/i);
  if (compound && isKnownTPCiCode(compound[2])) {
    const rawSet = compound[2].toLowerCase();
    const num = compound[3];
    const tpci = normalizeTPCiSetCode(compound[2]);
    if (PTCGL_CARD_ID_MAP[`${rawSet}-${num}`]) return PTCGL_CARD_ID_MAP[`${rawSet}-${num}`];
    if (PTCGL_CARD_ID_MAP[`${tpci.toLowerCase()} ${num}`]) return PTCGL_CARD_ID_MAP[`${tpci.toLowerCase()} ${num}`];
    const normMon = normalizeCardName(compound[1]);
    if (CARD_IMAGE_DATABASE[normMon]) return CARD_IMAGE_DATABASE[normMon];
  }

  const norm = normalizeCardName(name);
  if (CARD_IMAGE_DATABASE[norm]) return CARD_IMAGE_DATABASE[norm];

  if (norm.includes('pidgeotto')) return CARD_IMAGE_DATABASE['pidgeotto'];
  if (norm.includes('pidgeot')) return CARD_IMAGE_DATABASE['pidgeot ex'];
  if (norm.includes('pidgey')) return CARD_IMAGE_DATABASE['pidgey'];
  if (/\bbudew\b/.test(norm)) return CARD_IMAGE_DATABASE['budew'];
  if (/\babsol\b/.test(norm) && !norm.includes('pidgeot') && !norm.includes('charizard') && !norm.includes('dragapult')) {
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
  if (norm.includes('raging bolt') || norm.includes('bolt')) return CARD_IMAGE_DATABASE['raging bolt ex'];
  if (norm.includes('ogerpon')) return CARD_IMAGE_DATABASE['teal mask ogerpon ex'];
  if (norm.includes('miraidon')) return CARD_IMAGE_DATABASE['miraidon ex'];
  if (norm.includes('roaring moon') || norm.includes('moon')) return CARD_IMAGE_DATABASE['roaring moon ex'];
  if (norm.includes('terapagos')) return CARD_IMAGE_DATABASE['terapagos ex'];
  if (norm.includes('gholdengo')) return CARD_IMAGE_DATABASE['gholdengo ex'];
  if (norm.includes('iron thorns')) return CARD_IMAGE_DATABASE['iron thorns ex'];
  if (norm.includes('iron hands')) return CARD_IMAGE_DATABASE['iron hands ex'];
  if (norm.includes('iron bundle')) return CARD_IMAGE_DATABASE['iron bundle'];
  if (norm.includes('comfey')) return CARD_IMAGE_DATABASE['comfey'];
  if (norm.includes('palkia')) return CARD_IMAGE_DATABASE['origin forme palkia vstar'];
  if (norm.includes('snorlax')) return CARD_IMAGE_DATABASE['snorlax'];
  if (norm.includes('fogo') || norm.includes('fire energy')) return CARD_IMAGE_DATABASE['basic fire energy'];
  if (norm.includes('psiquica') || norm.includes('psychic energy')) return CARD_IMAGE_DATABASE['basic psychic energy'];
  if (norm.includes('agua') || norm.includes('water energy')) return CARD_IMAGE_DATABASE['basic water energy'];
  if (norm.includes('raio') || norm.includes('lightning energy')) return CARD_IMAGE_DATABASE['basic lightning energy'];
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

  const keys = Object.keys(CARD_IMAGE_DATABASE).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (key.length >= 4 && norm.includes(key)) return CARD_IMAGE_DATABASE[key];
  }

  return {
    id: 'SVI-1',
    name: name || 'Pokémon',
    category: 'pokemon',
    stage: norm.includes('ex') ? 'EX' : 'BÁSICO',
    hp: norm.includes('ex') ? 280 : 70,
    imageUrl: POKEMON_CARD_BACK,
    setCode: 'SVI', setNumber: '1', localSetId: 'sv1'
  };
}

export const resolveCard = resolvePTCGLCard;

// ============================================================================
// SPRITE DETECTION
// ============================================================================

export function isSpriteUrl(url?: string): boolean {
  if (!url) return true;
  const lower = url.toLowerCase();
  return (
    lower.includes('/sprites/') ||
    lower.includes('official-artwork') ||
    lower.includes('pokemonshowdown.com') ||
    lower.endsWith('poke-ball.png') ||
    lower.endsWith('ultra-ball.png') ||
    lower.endsWith('nest-ball.png') ||
    lower.endsWith('rare-candy.png') ||
    lower.endsWith('poffin-case.png') ||
    lower.endsWith('master-ball.png') ||
    (lower.includes('/items/') && lower.includes('pokeapi'))
  );
}

// ============================================================================
// AUTHENTIC CARD IMAGE
// ============================================================================

export interface SpriteSources {
  primary: string;
  artwork: string;
  battleSprite: string;
  dexSprite: string;
  fallback: string;
}

export function getAuthenticCardImageUrl(cardOrName: any): string {
  if (!cardOrName) return POKEMON_CARD_BACK;

  if (typeof cardOrName === 'string') {
    const card = resolvePTCGLCard(cardOrName);
    if (card?.imageUrl && !isSpriteUrl(card.imageUrl)) return card.imageUrl;
    return POKEMON_CARD_BACK;
  }

  const setCode = String(cardOrName.setCode || cardOrName.set || '').trim();
  const setNumber = cardOrName.setNumber ?? cardOrName.number;

  if (setCode && setNumber !== undefined && setNumber !== null) {
    const tcgdex = tcgdexUrl(setCode, setNumber, 'en');
    if (tcgdex) return tcgdex;
    const tcgIo = ptcgIoUrl(setCode, setNumber);
    if (tcgIo) return tcgIo;
  }

  if (cardOrName.imageUrl && !isSpriteUrl(cardOrName.imageUrl)) return cardOrName.imageUrl;

  if (cardOrName.name) {
    const norm = normalizeCardName(cardOrName.name);
    const db = CARD_IMAGE_DATABASE[norm];
    if (db?.imageUrl && !isSpriteUrl(db.imageUrl)) return db.imageUrl;
    const resolved = resolvePTCGLCard(cardOrName.name);
    if (resolved?.imageUrl && !isSpriteUrl(resolved.imageUrl)) return resolved.imageUrl;
  }
  return POKEMON_CARD_BACK;
}

export function getCardScanHierarchy(cardOrName: any): {
  primary: string; secondary: string; tertiary: string; quaternary: string; fallback: string;
} {
  if (typeof cardOrName === 'object' && cardOrName !== null) {
    const set = String(cardOrName.setCode || cardOrName.set || '').trim();
    const num = cardOrName.setNumber ?? cardOrName.number;
    if (set && num !== undefined && num !== null) {
      return buildImageHierarchy(set, num, 'pt');
    }
  }
  const url = getAuthenticCardImageUrl(cardOrName);
  return {
    primary: url, secondary: url, tertiary: url, quaternary: url,
    fallback: POKEMON_CARD_BACK,
  };
}

export function getPokemonSpriteHierarchy(cardOrName: CardMetadata | string): SpriteSources {
  const card = typeof cardOrName === 'string' ? resolvePTCGLCard(cardOrName) : cardOrName;
  const h = getCardScanHierarchy(card);
  return {
    primary: h.primary,
    artwork: h.secondary,
    battleSprite: h.tertiary,
    dexSprite: h.secondary,
    fallback: POKEMON_CARD_BACK,
  };
}

// ============================================================================
// VERIFICATION
// ============================================================================

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
    const fallbackCard = resolvePTCGLCard('');
    return {
      input: '', isValid: false, isPTCGLMapped: false, card: fallbackCard,
      resolvedName: 'Pokémon', verificationStatus: 'generated_fallback'
    };
  }
  const clean = cardNameOrId.toLowerCase().trim();
  const cleanId = clean.replace(/[^a-z0-9.-]/g, '');
  if (PTCGL_CARD_ID_MAP[cleanId] || PTCGL_CARD_ID_MAP[clean]) {
    const card = PTCGL_CARD_ID_MAP[cleanId] || PTCGL_CARD_ID_MAP[clean];
    return {
      input: cardNameOrId, isValid: true, isPTCGLMapped: true, card,
      setCode: card.setCode, setNumber: card.setNumber, resolvedName: card.name,
      verificationStatus: 'verified_ptcgl'
    };
  }
  const norm = normalizeCardName(cardNameOrId);
  if (CARD_IMAGE_DATABASE[norm]) {
    const card = CARD_IMAGE_DATABASE[norm];
    return {
      input: cardNameOrId, isValid: true, isPTCGLMapped: !!card.setCode, card,
      setCode: card.setCode, setNumber: card.setNumber, resolvedName: card.name,
      verificationStatus: 'verified_ptcgl'
    };
  }
  const resolved = resolvePTCGLCard(cardNameOrId);
  const isFallback = resolved.id === 'SVI-1' && resolved.imageUrl === POKEMON_CARD_BACK;
  return {
    input: cardNameOrId, isValid: !isFallback,
    isPTCGLMapped: !isFallback && !!resolved.setCode,
    card: resolved, setCode: resolved.setCode, setNumber: resolved.setNumber,
    resolvedName: resolved.name,
    verificationStatus: isFallback ? 'generated_fallback' : 'fuzzy_matched'
  };
}

export function getCardImageUrl(name: string): string {
  return getAuthenticCardImageUrl(name);
}
