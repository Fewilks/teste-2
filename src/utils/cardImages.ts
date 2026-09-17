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

// ===========================================================================
// 1) SET CODE MAPS
// ===========================================================================

export const SET_LOCAL_TO_TPCI_MAP: Record<string, { tpciCode: string; name: string; localId: string }> = {
  // Scarlet & Violet
  'sv1':    { tpciCode: 'SVI', name: 'Scarlet & Violet',          localId: 'sv1' },
  'svi':    { tpciCode: 'SVI', name: 'Scarlet & Violet',          localId: 'sv1' },
  'sv2':    { tpciCode: 'PAL', name: 'Paldea Evolved',            localId: 'sv2' },
  'pal':    { tpciCode: 'PAL', name: 'Paldea Evolved',            localId: 'sv2' },
  'sv3':    { tpciCode: 'OBF', name: 'Obsidian Flames',           localId: 'sv3' },
  'obf':    { tpciCode: 'OBF', name: 'Obsidian Flames',           localId: 'sv3' },
  'sv3pt5': { tpciCode: 'MEW', name: '151',                       localId: 'sv3pt5' },
  'sv3.5':  { tpciCode: 'MEW', name: '151',                       localId: 'sv3pt5' },
  'mew':    { tpciCode: 'MEW', name: '151',                       localId: 'sv3pt5' },
  '151':    { tpciCode: 'MEW', name: '151',                       localId: 'sv3pt5' },
  'sv4':    { tpciCode: 'PAR', name: 'Paradox Rift',              localId: 'sv4' },
  'par':    { tpciCode: 'PAR', name: 'Paradox Rift',              localId: 'sv4' },
  'sv4pt5': { tpciCode: 'PAF', name: 'Paldean Fates',             localId: 'sv4pt5' },
  'sv4.5':  { tpciCode: 'PAF', name: 'Paldean Fates',             localId: 'sv4pt5' },
  'paf':    { tpciCode: 'PAF', name: 'Paldean Fates',             localId: 'sv4pt5' },
  'sv5':    { tpciCode: 'TEF', name: 'Temporal Forces',           localId: 'sv5' },
  'tef':    { tpciCode: 'TEF', name: 'Temporal Forces',           localId: 'sv5' },
  'sv6':    { tpciCode: 'TWM', name: 'Twilight Masquerade',       localId: 'sv6' },
  'twm':    { tpciCode: 'TWM', name: 'Twilight Masquerade',       localId: 'sv6' },
  'sv6pt5': { tpciCode: 'SFA', name: 'Shrouded Fable',            localId: 'sv6pt5' },
  'sv6.5':  { tpciCode: 'SFA', name: 'Shrouded Fable',            localId: 'sv6pt5' },
  'sfa':    { tpciCode: 'SFA', name: 'Shrouded Fable',            localId: 'sv6pt5' },
  'sv7':    { tpciCode: 'SCR', name: 'Stellar Crown',             localId: 'sv7' },
  'scr':    { tpciCode: 'SCR', name: 'Stellar Crown',             localId: 'sv7' },
  'sv8':    { tpciCode: 'SSP', name: 'Surging Sparks',            localId: 'sv8' },
  'ssp':    { tpciCode: 'SSP', name: 'Surging Sparks',            localId: 'sv8' },
  'sv8pt5': { tpciCode: 'PRE', name: 'Prismatic Evolutions',      localId: 'sv8pt5' },
  'sv8.5':  { tpciCode: 'PRE', name: 'Prismatic Evolutions',      localId: 'sv8pt5' },
  'pre':    { tpciCode: 'PRE', name: 'Prismatic Evolutions',      localId: 'sv8pt5' },
  'sve':    { tpciCode: 'SVE', name: 'Scarlet & Violet Energies', localId: 'sve' },
  'svp':    { tpciCode: 'SVP', name: 'Scarlet & Violet Promos',   localId: 'svp' },

  // Mega Evolution era (2025+)
  'me1':    { tpciCode: 'MEG', name: 'Mega Evolution',            localId: 'me1' },
  'meg':    { tpciCode: 'MEG', name: 'Mega Evolution',            localId: 'me1' },
  'me2':    { tpciCode: 'PFL', name: 'Phantasmal Flames',         localId: 'me2' },
  'pfl':    { tpciCode: 'PFL', name: 'Phantasmal Flames',         localId: 'me2' },
  'me2pt5': { tpciCode: 'ASC', name: 'Ascended Heroes',           localId: 'me2pt5' },
  'me2.5':  { tpciCode: 'ASC', name: 'Ascended Heroes',           localId: 'me2pt5' },
  'asc':    { tpciCode: 'ASC', name: 'Ascended Heroes',           localId: 'me2pt5' },
  'me3':    { tpciCode: 'POR', name: 'Perfect Order',             localId: 'me3' },
  'por':    { tpciCode: 'POR', name: 'Perfect Order',             localId: 'me3' },
  'me4':    { tpciCode: 'CRI', name: 'Chaos Rising',              localId: 'me4' },
  'cri':    { tpciCode: 'CRI', name: 'Chaos Rising',              localId: 'me4' },
  'me5':    { tpciCode: 'PBL', name: 'Pitch Black',               localId: 'me5' },
  'pbl':    { tpciCode: 'PBL', name: 'Pitch Black',               localId: 'me5' },
  'jtg':    { tpciCode: 'JTG', name: 'Journey Together',          localId: 'jtg' },
  'dri':    { tpciCode: 'DRI', name: 'Destined Rivals',           localId: 'dri' },
  'blk':    { tpciCode: 'BLK', name: 'Black Bolt',                localId: 'blk' },
  'wht':    { tpciCode: 'WHT', name: 'White Flare',               localId: 'wht' },

  // Sword & Shield
  'swsh1':     { tpciCode: 'SSH', name: 'Sword & Shield',         localId: 'swsh1' },
  'ssh':       { tpciCode: 'SSH', name: 'Sword & Shield',         localId: 'swsh1' },
  'swsh2':     { tpciCode: 'RCL', name: 'Rebel Clash',            localId: 'swsh2' },
  'rcl':       { tpciCode: 'RCL', name: 'Rebel Clash',            localId: 'swsh2' },
  'swsh3':     { tpciCode: 'DAA', name: 'Darkness Ablaze',        localId: 'swsh3' },
  'daa':       { tpciCode: 'DAA', name: 'Darkness Ablaze',        localId: 'swsh3' },
  'swsh35':    { tpciCode: 'CPA', name: "Champion's Path",        localId: 'swsh3.5' },
  'swsh3.5':   { tpciCode: 'CPA', name: "Champion's Path",        localId: 'swsh3.5' },
  'cpa':       { tpciCode: 'CPA', name: "Champion's Path",        localId: 'swsh3.5' },
  'swsh4':     { tpciCode: 'VIV', name: 'Vivid Voltage',          localId: 'swsh4' },
  'viv':       { tpciCode: 'VIV', name: 'Vivid Voltage',          localId: 'swsh4' },
  'swsh45':    { tpciCode: 'SHF', name: 'Shining Fates',          localId: 'swsh4.5' },
  'swsh4.5':   { tpciCode: 'SHF', name: 'Shining Fates',          localId: 'swsh4.5' },
  'shf':       { tpciCode: 'SHF', name: 'Shining Fates',          localId: 'swsh4.5' },
  'swsh5':     { tpciCode: 'BST', name: 'Battle Styles',          localId: 'swsh5' },
  'bst':       { tpciCode: 'BST', name: 'Battle Styles',          localId: 'swsh5' },
  'swsh6':     { tpciCode: 'CRE', name: 'Chilling Reign',         localId: 'swsh6' },
  'cre':       { tpciCode: 'CRE', name: 'Chilling Reign',         localId: 'swsh6' },
  'swsh7':     { tpciCode: 'EVS', name: 'Evolving Skies',         localId: 'swsh7' },
  'evs':       { tpciCode: 'EVS', name: 'Evolving Skies',         localId: 'swsh7' },
  'swsh8':     { tpciCode: 'FST', name: 'Fusion Strike',          localId: 'swsh8' },
  'fst':       { tpciCode: 'FST', name: 'Fusion Strike',          localId: 'swsh8' },
  'swsh9':     { tpciCode: 'BRS', name: 'Brilliant Stars',        localId: 'swsh9' },
  'brs':       { tpciCode: 'BRS', name: 'Brilliant Stars',        localId: 'swsh9' },
  'swsh10':    { tpciCode: 'ASR', name: 'Astral Radiance',        localId: 'swsh10' },
  'asr':       { tpciCode: 'ASR', name: 'Astral Radiance',        localId: 'swsh10' },
  'pgo':       { tpciCode: 'PGO', name: 'Pokémon GO',             localId: 'pgo' },
  'swsh11':    { tpciCode: 'LOR', name: 'Lost Origin',            localId: 'swsh11' },
  'lor':       { tpciCode: 'LOR', name: 'Lost Origin',            localId: 'swsh11' },
  'cel':       { tpciCode: 'CEL', name: 'Celebrations',           localId: 'cel' },
  'swsh12':    { tpciCode: 'SIT', name: 'Silver Tempest',         localId: 'swsh12' },
  'sit':       { tpciCode: 'SIT', name: 'Silver Tempest',         localId: 'swsh12' },
  'swsh12pt5': { tpciCode: 'CRZ', name: 'Crown Zenith',           localId: 'swsh12.5' },
  'swsh12.5':  { tpciCode: 'CRZ', name: 'Crown Zenith',           localId: 'swsh12.5' },
  'crz':       { tpciCode: 'CRZ', name: 'Crown Zenith',           localId: 'swsh12.5' },

  // XY
  'xy1':  { tpciCode: 'XY',  name: 'XY Base Set',         localId: 'xy1'  },
  'xy':   { tpciCode: 'XY',  name: 'XY Base Set',         localId: 'xy1'  },
  'xy2':  { tpciCode: 'FLF', name: 'XY - Flashfire',      localId: 'xy2'  },
  'flf':  { tpciCode: 'FLF', name: 'XY - Flashfire',      localId: 'xy2'  },
  'xy3':  { tpciCode: 'FFI', name: 'XY - Furious Fists',  localId: 'xy3'  },
  'ffi':  { tpciCode: 'FFI', name: 'XY - Furious Fists',  localId: 'xy3'  },
  'xy4':  { tpciCode: 'PHF', name: 'XY - Phantom Forces', localId: 'xy4'  },
  'phf':  { tpciCode: 'PHF', name: 'XY - Phantom Forces', localId: 'xy4'  },
  'xy5':  { tpciCode: 'PRC', name: 'XY - Primal Clash',   localId: 'xy5'  },
  'prc':  { tpciCode: 'PRC', name: 'XY - Primal Clash',   localId: 'xy5'  },
  'xy6':  { tpciCode: 'ROS', name: 'XY - Roaring Skies',  localId: 'xy6'  },
  'ros':  { tpciCode: 'ROS', name: 'XY - Roaring Skies',  localId: 'xy6'  },
  'xy7':  { tpciCode: 'AOR', name: 'XY - Ancient Origins',localId: 'xy7'  },
  'aor':  { tpciCode: 'AOR', name: 'XY - Ancient Origins',localId: 'xy7'  },
  'xy8':  { tpciCode: 'BKT', name: 'XY - BREAKthrough',   localId: 'xy8'  },
  'bkt':  { tpciCode: 'BKT', name: 'XY - BREAKthrough',   localId: 'xy8'  },
  'xy9':  { tpciCode: 'BKP', name: 'XY - BREAKpoint',     localId: 'xy9'  },
  'bkp':  { tpciCode: 'BKP', name: 'XY - BREAKpoint',     localId: 'xy9'  },
  'xy10': { tpciCode: 'FCO', name: 'XY - Fates Collide',  localId: 'xy10' },
  'fco':  { tpciCode: 'FCO', name: 'XY - Fates Collide',  localId: 'xy10' },
  'xy11': { tpciCode: 'STS', name: 'XY - Steam Siege',    localId: 'xy11' },
  'sts':  { tpciCode: 'STS', name: 'XY - Steam Siege',    localId: 'xy11' },
  'xy12': { tpciCode: 'EVO', name: 'XY - Evolutions',     localId: 'xy12' },
  'evo':  { tpciCode: 'EVO', name: 'XY - Evolutions',     localId: 'xy12' },
};

export const SET_TPCI_TO_LOCAL_MAP: Record<string, string> = Object.entries(SET_LOCAL_TO_TPCI_MAP)
  .reduce((acc, [, v]) => { acc[v.tpciCode] = v.localId; return acc; }, {} as Record<string, string>);

export function normalizeTPCiSetCode(setCode: string): string {
  if (!setCode) return 'SVI';
  const clean = setCode.toLowerCase().trim().replace(/[\s_-]/g, '');
  if (SET_LOCAL_TO_TPCI_MAP[clean]) return SET_LOCAL_TO_TPCI_MAP[clean].tpciCode;
  const upper = setCode.toUpperCase().trim();
  if (SET_TPCI_TO_LOCAL_MAP[upper]) return upper;
  return upper;
}

export function mapTPCiToLocalSetId(tpciCode: string): string {
  if (!tpciCode) return 'sv1';
  const clean = tpciCode.toUpperCase().trim();
  return SET_TPCI_TO_LOCAL_MAP[clean] || tpciCode.toLowerCase().trim();
}

// ===========================================================================
// 2) TCGDEX MAP
// ===========================================================================

function buildTcgdexMap(): Record<string, { series: string; set: string }> {
  const map: Record<string, { series: string; set: string }> = {};
  const put = (key: string, series: string, set: string) => {
    map[key] = { series, set };
    map[key.toLowerCase()] = { series, set };
    map[key.toUpperCase()] = { series, set };
  };
  // SV era
  put('sv1', 'sv', 'sv01');
  put('sv2', 'sv', 'sv02');
  put('sv3', 'sv', 'sv03');
  put('sv3pt5', 'sv', 'sv03.5'); put('sv3.5', 'sv', 'sv03.5');
  put('sv4', 'sv', 'sv04');
  put('sv4pt5', 'sv', 'sv04.5'); put('sv4.5', 'sv', 'sv04.5');
  put('sv5', 'sv', 'sv05');
  put('sv6', 'sv', 'sv06');
  put('sv6pt5', 'sv', 'sv06.5'); put('sv6.5', 'sv', 'sv06.5');
  put('sv7', 'sv', 'sv07');
  put('sv8', 'sv', 'sv08');
  put('sv8pt5', 'sv', 'sv08.5'); put('sv8.5', 'sv', 'sv08.5');
  put('sve', 'sv', 'sve');
  put('svp', 'sv', 'svp');
  // Mega Evolution era
  put('me1', 'me', 'me01'); put('meg', 'me', 'me01');
  put('me2', 'me', 'me02'); put('pfl', 'me', 'me02');
  put('me2pt5', 'me', 'me02.5'); put('me2.5', 'me', 'me02.5'); put('asc', 'me', 'me02.5');
  put('me3', 'me', 'me03'); put('por', 'me', 'me03');
  put('me4', 'me', 'me04'); put('cri', 'me', 'me04');
  put('me5', 'me', 'me05'); put('pbl', 'me', 'me05');
  // SWSH
  put('swsh1', 'swsh', 'swsh1');
  put('swsh2', 'swsh', 'swsh2');
  put('swsh3', 'swsh', 'swsh3');
  put('swsh3.5', 'swsh', 'swsh3.5'); put('swsh35', 'swsh', 'swsh3.5');
  put('swsh4', 'swsh', 'swsh4');
  put('swsh4.5', 'swsh', 'swsh4.5'); put('swsh45', 'swsh', 'swsh4.5');
  put('swsh5', 'swsh', 'swsh5');
  put('swsh6', 'swsh', 'swsh6');
  put('swsh7', 'swsh', 'swsh7');
  put('swsh8', 'swsh', 'swsh8');
  put('swsh9', 'swsh', 'swsh9');
  put('swsh10', 'swsh', 'swsh10');
  put('swsh11', 'swsh', 'swsh11');
  put('swsh12', 'swsh', 'swsh12');
  put('swsh12.5', 'swsh', 'swsh12.5'); put('swsh12pt5', 'swsh', 'swsh12.5');
  put('pgo', 'swsh', 'swsh9.5');
  put('cel', 'swsh', 'cel25');
  // XY
  put('xy1', 'xy', 'xy1'); put('xy', 'xy', 'xy1');
  put('xy2', 'xy', 'xy2'); put('flf', 'xy', 'xy2');
  put('xy3', 'xy', 'xy3'); put('ffi', 'xy', 'xy3');
  put('xy4', 'xy', 'xy4'); put('phf', 'xy', 'xy4');
  put('xy5', 'xy', 'xy5'); put('prc', 'xy', 'xy5');
  put('xy6', 'xy', 'xy6'); put('ros', 'xy', 'xy6');
  put('xy7', 'xy', 'xy7'); put('aor', 'xy', 'xy7');
  put('xy8', 'xy', 'xy8'); put('bkt', 'xy', 'xy8');
  put('xy9', 'xy', 'xy9'); put('bkp', 'xy', 'xy9');
  put('xy10', 'xy', 'xy10'); put('fco', 'xy', 'xy10');
  put('xy11', 'xy', 'xy11'); put('sts', 'xy', 'xy11');
  put('xy12', 'xy', 'xy12'); put('evo', 'xy', 'xy12');
  return map;
}

export const TCGDEX_MAP = buildTcgdexMap();

export function getTCGdexImageUrl(
  setCode: string,
  setNumber: string | number,
  lang: 'pt' | 'en' = 'en'
): string | null {
  if (!setCode || setNumber === undefined || setNumber === null) return null;
  const cleanSet = String(setCode).trim();
  const mapping =
    TCGDEX_MAP[cleanSet] ||
    TCGDEX_MAP[cleanSet.toLowerCase()] ||
    TCGDEX_MAP[cleanSet.toUpperCase()];
  if (!mapping) return null;
  const numStr = String(setNumber).trim().replace(/^#/, '').replace(/^0+/, '');
  const cleanNum = numStr || '1';
  return `https://assets.tcgdex.net/${lang}/${mapping.series}/${mapping.set}/${cleanNum}/high.webp`;
}

export function getTCGdexImageUrlPadded(
  setCode: string,
  setNumber: string | number,
  lang: 'pt' | 'en' = 'en'
): string | null {
  if (!setCode || setNumber === undefined || setNumber === null) return null;
  const cleanSet = String(setCode).trim();
  const mapping =
    TCGDEX_MAP[cleanSet] ||
    TCGDEX_MAP[cleanSet.toLowerCase()] ||
    TCGDEX_MAP[cleanSet.toUpperCase()];
  if (!mapping) return null;
  const numStr = String(setNumber).replace(/^#/, '');
  const padded = numStr.replace(/^0+/, '').padStart(3, '0');
  return `https://assets.tcgdex.net/${lang}/${mapping.series}/${mapping.set}/${padded}/high.webp`;
}

export function getPokemonTcgIoImageUrl(setCode: string, setNumber: string | number): string | null {
  if (!setCode || setNumber === undefined || setNumber === null) return null;
  const local = mapTPCiToLocalSetId(String(setCode));
  if (!local) return null;
  const num = String(setNumber).replace(/^#/, '').replace(/^0+/, '') || '1';
  return `https://images.pokemontcg.io/${local}/${num}.png`;
}

// ===========================================================================
// 3) CANONICAL CARD DATABASE
// ===========================================================================

export const CARD_IMAGE_DATABASE: Record<string, CardMetadata> = {
  // ---------- POKEMON ----------
  'charizard ex': {
    id: 'OBF-125', name: 'Charizard ex', category: 'pokemon',
    energyType: 'darkness', stage: 'ESTÁGIO 2', hp: 330,
    imageUrl: 'https://images.pokemontcg.io/sv3/125.png',
    setCode: 'OBF', setNumber: '125'
  },
  'charmander': {
    id: 'OBF-26', name: 'Charmander', category: 'pokemon',
    energyType: 'fire', stage: 'BÁSICO', hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv3/26.png',
    setCode: 'OBF', setNumber: '26'
  },
  'charmeleon': {
    id: 'OBF-27', name: 'Charmeleon', category: 'pokemon',
    energyType: 'fire', stage: 'ESTÁGIO 1', hp: 90,
    imageUrl: 'https://images.pokemontcg.io/sv3/27.png',
    setCode: 'OBF', setNumber: '27'
  },
  'radiant charizard': {
    id: 'PGO-11', name: 'Radiant Charizard', category: 'pokemon',
    energyType: 'fire', stage: 'BÁSICO', hp: 160,
    imageUrl: 'https://images.pokemontcg.io/pgo/11.png',
    setCode: 'PGO', setNumber: '11'
  },
  'pidgeot ex': {
    id: 'OBF-164', name: 'Pidgeot ex', category: 'pokemon',
    energyType: 'colorless', stage: 'ESTÁGIO 2', hp: 280,
    imageUrl: 'https://images.pokemontcg.io/sv3/164.png',
    setCode: 'OBF', setNumber: '164'
  },
  'pidgeot': {
    id: 'OBF-164', name: 'Pidgeot ex', category: 'pokemon',
    energyType: 'colorless', stage: 'ESTÁGIO 2', hp: 280,
    imageUrl: 'https://images.pokemontcg.io/sv3/164.png',
    setCode: 'OBF', setNumber: '164'
  },
  'pidgey': {
    id: 'OBF-162', name: 'Pidgey', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 60,
    imageUrl: 'https://images.pokemontcg.io/sv3/162.png',
    setCode: 'OBF', setNumber: '162'
  },
  'pidgeotto': {
    id: 'OBF-163', name: 'Pidgeotto', category: 'pokemon',
    energyType: 'colorless', stage: 'ESTÁGIO 1', hp: 80,
    imageUrl: 'https://images.pokemontcg.io/sv3/163.png',
    setCode: 'OBF', setNumber: '163'
  },
  'absol ex': {
    id: 'OBF-135', name: 'Absol ex', category: 'pokemon',
    energyType: 'darkness', stage: 'BÁSICO', hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv3/135.png',
    setCode: 'OBF', setNumber: '135'
  },
  'absol': {
    id: 'OBF-135', name: 'Absol ex', category: 'pokemon',
    energyType: 'darkness', stage: 'BÁSICO', hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv3/135.png',
    setCode: 'OBF', setNumber: '135'
  },
  'budew': {
    id: 'SVI-9', name: 'Budew', category: 'pokemon',
    energyType: 'grass', stage: 'BÁSICO', hp: 30,
    imageUrl: 'https://images.pokemontcg.io/sv1/9.png',
    setCode: 'SVI', setNumber: '9'
  },
  'budew me2-5-221': { id: 'SVI-9', name: 'Budew', category: 'pokemon',
    energyType: 'grass', stage: 'BÁSICO', hp: 30,
    imageUrl: 'https://images.pokemontcg.io/sv1/9.png', setCode: 'SVI', setNumber: '9' },
  'budew me2 221': { id: 'SVI-9', name: 'Budew', category: 'pokemon',
    energyType: 'grass', stage: 'BÁSICO', hp: 30,
    imageUrl: 'https://images.pokemontcg.io/sv1/9.png', setCode: 'SVI', setNumber: '9' },

  'dragapult ex': {
    id: 'TWM-130', name: 'Dragapult ex', category: 'pokemon',
    energyType: 'dragon', stage: 'ESTÁGIO 2', hp: 320,
    imageUrl: 'https://images.pokemontcg.io/sv6/130.png',
    setCode: 'TWM', setNumber: '130'
  },
  'dreepy': {
    id: 'TWM-128', name: 'Dreepy', category: 'pokemon',
    energyType: 'dragon', stage: 'BÁSICO', hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv6/128.png',
    setCode: 'TWM', setNumber: '128'
  },
  'drakloak': {
    id: 'TWM-129', name: 'Drakloak', category: 'pokemon',
    energyType: 'dragon', stage: 'ESTÁGIO 1', hp: 90,
    imageUrl: 'https://images.pokemontcg.io/sv6/129.png',
    setCode: 'TWM', setNumber: '129'
  },
  'duskull': {
    id: 'SFA-18', name: 'Duskull', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 60,
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/18.png',
    setCode: 'SFA', setNumber: '18'
  },
  'dusclops': {
    id: 'SFA-19', name: 'Dusclops', category: 'pokemon',
    energyType: 'psychic', stage: 'ESTÁGIO 1', hp: 90,
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/19.png',
    setCode: 'SFA', setNumber: '19'
  },
  'dusknoir': {
    id: 'SFA-20', name: 'Dusknoir', category: 'pokemon',
    energyType: 'psychic', stage: 'ESTÁGIO 2', hp: 160,
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/20.png',
    setCode: 'SFA', setNumber: '20'
  },
  'rotom v': {
    id: 'LOR-58', name: 'Rotom V', category: 'pokemon',
    energyType: 'lightning', stage: 'BÁSICO', hp: 190,
    imageUrl: 'https://images.pokemontcg.io/swsh11/58.png',
    setCode: 'LOR', setNumber: '58'
  },
  'fezandipiti ex': {
    id: 'SFA-38', name: 'Fezandipiti ex', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv6pt5/38.png',
    setCode: 'SFA', setNumber: '38'
  },
  'manaphy': {
    id: 'BRS-41', name: 'Manaphy', category: 'pokemon',
    energyType: 'water', stage: 'BÁSICO', hp: 70,
    imageUrl: 'https://images.pokemontcg.io/swsh9/41.png',
    setCode: 'BRS', setNumber: '41'
  },
  'radiant alakazam': {
    id: 'SIT-59', name: 'Radiant Alakazam', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 130,
    imageUrl: 'https://images.pokemontcg.io/swsh12/59.png',
    setCode: 'SIT', setNumber: '59'
  },
  'lugia vstar': {
    id: 'SIT-139', name: 'Lugia VSTAR', category: 'pokemon',
    energyType: 'colorless', stage: 'VSTAR', hp: 280,
    imageUrl: 'https://images.pokemontcg.io/swsh12/139.png',
    setCode: 'SIT', setNumber: '139'
  },
  'lugia v': {
    id: 'SIT-138', name: 'Lugia V', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/swsh12/138.png',
    setCode: 'SIT', setNumber: '138'
  },
  'archeops': {
    id: 'SIT-147', name: 'Archeops', category: 'pokemon',
    energyType: 'colorless', stage: 'ESTÁGIO 2', hp: 150,
    imageUrl: 'https://images.pokemontcg.io/swsh12/147.png',
    setCode: 'SIT', setNumber: '147'
  },
  'gardevoir ex': {
    id: 'SVI-86', name: 'Gardevoir ex', category: 'pokemon',
    energyType: 'psychic', stage: 'ESTÁGIO 2', hp: 310,
    imageUrl: 'https://images.pokemontcg.io/sv1/86.png',
    setCode: 'SVI', setNumber: '86'
  },
  'kirlia': {
    id: 'SVI-85', name: 'Kirlia', category: 'pokemon',
    energyType: 'psychic', stage: 'ESTÁGIO 1', hp: 80,
    imageUrl: 'https://images.pokemontcg.io/sv1/85.png',
    setCode: 'SVI', setNumber: '85'
  },
  'ralts': {
    id: 'SVI-84', name: 'Ralts', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv1/84.png',
    setCode: 'SVI', setNumber: '84'
  },
  'munkidori': {
    id: 'TWM-95', name: 'Munkidori', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 110,
    imageUrl: 'https://images.pokemontcg.io/sv6/95.png',
    setCode: 'TWM', setNumber: '95'
  },
  'raging bolt ex': {
    id: 'TEF-123', name: 'Raging Bolt ex', category: 'pokemon',
    energyType: 'dragon', stage: 'BÁSICO', hp: 240,
    imageUrl: 'https://images.pokemontcg.io/sv5/123.png',
    setCode: 'TEF', setNumber: '123'
  },
  'teal mask ogerpon ex': {
    id: 'TWM-25', name: 'Teal Mask Ogerpon ex', category: 'pokemon',
    energyType: 'grass', stage: 'BÁSICO', hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv6/25.png',
    setCode: 'TWM', setNumber: '25'
  },
  'ogerpon': {
    id: 'TWM-25', name: 'Teal Mask Ogerpon ex', category: 'pokemon',
    energyType: 'grass', stage: 'BÁSICO', hp: 210,
    imageUrl: 'https://images.pokemontcg.io/sv6/25.png',
    setCode: 'TWM', setNumber: '25'
  },
  'miraidon ex': {
    id: 'SVI-81', name: 'Miraidon ex', category: 'pokemon',
    energyType: 'lightning', stage: 'BÁSICO', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv1/81.png',
    setCode: 'SVI', setNumber: '81'
  },
  'iron hands ex': {
    id: 'PAR-70', name: 'Iron Hands ex', category: 'pokemon',
    energyType: 'lightning', stage: 'BÁSICO', hp: 230,
    imageUrl: 'https://images.pokemontcg.io/sv4/70.png',
    setCode: 'PAR', setNumber: '70'
  },
  'iron thorns ex': {
    id: 'TWM-77', name: 'Iron Thorns ex', category: 'pokemon',
    energyType: 'lightning', stage: 'BÁSICO', hp: 230,
    imageUrl: 'https://images.pokemontcg.io/sv6/77.png',
    setCode: 'TWM', setNumber: '77'
  },
  'iron crown ex': {
    id: 'TEF-81', name: 'Iron Crown ex', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv5/81.png',
    setCode: 'TEF', setNumber: '81'
  },
  'iron valiant ex': {
    id: 'PAR-89', name: 'Iron Valiant ex', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv4/89.png',
    setCode: 'PAR', setNumber: '89'
  },
  'iron bundle': {
    id: 'PAR-56', name: 'Iron Bundle', category: 'pokemon',
    energyType: 'water', stage: 'BÁSICO', hp: 100,
    imageUrl: 'https://images.pokemontcg.io/sv4/56.png',
    setCode: 'PAR', setNumber: '56'
  },
  'raikou v': {
    id: 'BRS-48', name: 'Raikou V', category: 'pokemon',
    energyType: 'lightning', stage: 'BÁSICO', hp: 200,
    imageUrl: 'https://images.pokemontcg.io/swsh9/48.png',
    setCode: 'BRS', setNumber: '48'
  },
  'roaring moon ex': {
    id: 'PAR-124', name: 'Roaring Moon ex', category: 'pokemon',
    energyType: 'darkness', stage: 'BÁSICO', hp: 230,
    imageUrl: 'https://images.pokemontcg.io/sv4/124.png',
    setCode: 'PAR', setNumber: '124'
  },
  'roaring moon': {
    id: 'TEF-109', name: 'Roaring Moon', category: 'pokemon',
    energyType: 'darkness', stage: 'BÁSICO', hp: 140,
    imageUrl: 'https://images.pokemontcg.io/sv5/109.png',
    setCode: 'TEF', setNumber: '109'
  },
  'flutter mane': {
    id: 'TEF-78', name: 'Flutter Mane', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 90,
    imageUrl: 'https://images.pokemontcg.io/sv5/78.png',
    setCode: 'TEF', setNumber: '78'
  },
  'koraidon': {
    id: 'TEF-119', name: 'Koraidon', category: 'pokemon',
    energyType: 'fighting', stage: 'BÁSICO', hp: 140,
    imageUrl: 'https://images.pokemontcg.io/sv5/119.png',
    setCode: 'TEF', setNumber: '119'
  },
  'terapagos ex': {
    id: 'SCR-128', name: 'Terapagos ex', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 230,
    imageUrl: 'https://images.pokemontcg.io/sv7/128.png',
    setCode: 'SCR', setNumber: '128'
  },
  'noctowl': {
    id: 'SCR-115', name: 'Noctowl', category: 'pokemon',
    energyType: 'colorless', stage: 'ESTÁGIO 1', hp: 100,
    imageUrl: 'https://images.pokemontcg.io/sv7/115.png',
    setCode: 'SCR', setNumber: '115'
  },
  'hoothoot': {
    id: 'SCR-114', name: 'Hoothoot', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv7/114.png',
    setCode: 'SCR', setNumber: '114'
  },
  'bouffalant': {
    id: 'SCR-119', name: 'Bouffalant', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 100,
    imageUrl: 'https://images.pokemontcg.io/sv7/119.png',
    setCode: 'SCR', setNumber: '119'
  },
  'fan rotom': {
    id: 'SCR-118', name: 'Fan Rotom', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 70,
    imageUrl: 'https://images.pokemontcg.io/sv7/118.png',
    setCode: 'SCR', setNumber: '118'
  },
  'gholdengo ex': {
    id: 'PAR-139', name: 'Gholdengo ex', category: 'pokemon',
    energyType: 'metal', stage: 'ESTÁGIO 1', hp: 260,
    imageUrl: 'https://images.pokemontcg.io/sv4/139.png',
    setCode: 'PAR', setNumber: '139'
  },
  'gimmighoul': {
    id: 'PAR-87', name: 'Gimmighoul', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 50,
    imageUrl: 'https://images.pokemontcg.io/sv4/87.png',
    setCode: 'PAR', setNumber: '87'
  },
  'scizor': {
    id: 'OBF-141', name: 'Scizor', category: 'pokemon',
    energyType: 'metal', stage: 'ESTÁGIO 1', hp: 140,
    imageUrl: 'https://images.pokemontcg.io/sv3/141.png',
    setCode: 'OBF', setNumber: '141'
  },
  'scyther': {
    id: 'OBF-4', name: 'Scyther', category: 'pokemon',
    energyType: 'grass', stage: 'BÁSICO', hp: 80,
    imageUrl: 'https://images.pokemontcg.io/sv3/4.png',
    setCode: 'OBF', setNumber: '4'
  },
  'pikachu ex': {
    id: 'SSP-57', name: 'Pikachu ex', category: 'pokemon',
    energyType: 'lightning', stage: 'BÁSICO', hp: 200,
    imageUrl: 'https://images.pokemontcg.io/sv8/57.png',
    setCode: 'SSP', setNumber: '57'
  },
  'ceruledge ex': {
    id: 'SSP-36', name: 'Ceruledge ex', category: 'pokemon',
    energyType: 'fire', stage: 'ESTÁGIO 1', hp: 270,
    imageUrl: 'https://images.pokemontcg.io/sv8/36.png',
    setCode: 'SSP', setNumber: '36'
  },
  'comfey': {
    id: 'LOR-79', name: 'Comfey', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 70,
    imageUrl: 'https://images.pokemontcg.io/swsh11/79.png',
    setCode: 'LOR', setNumber: '79'
  },
  'sableye': {
    id: 'LOR-70', name: 'Sableye', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 80,
    imageUrl: 'https://images.pokemontcg.io/swsh11/70.png',
    setCode: 'LOR', setNumber: '70'
  },
  'cramorant': {
    id: 'LOR-50', name: 'Cramorant', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 110,
    imageUrl: 'https://images.pokemontcg.io/swsh11/50.png',
    setCode: 'LOR', setNumber: '50'
  },
  'radiant greninja': {
    id: 'ASR-46', name: 'Radiant Greninja', category: 'pokemon',
    energyType: 'water', stage: 'BÁSICO', hp: 130,
    imageUrl: 'https://images.pokemontcg.io/swsh10/46.png',
    setCode: 'ASR', setNumber: '46'
  },
  'mew ex': {
    id: 'MEW-151', name: 'Mew ex', category: 'pokemon',
    energyType: 'psychic', stage: 'BÁSICO', hp: 180,
    imageUrl: 'https://images.pokemontcg.io/sv3pt5/151.png',
    setCode: 'MEW', setNumber: '151'
  },
  'snorlax': {
    id: 'PGO-55', name: 'Snorlax', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 150,
    imageUrl: 'https://images.pokemontcg.io/pgo/55.png',
    setCode: 'PGO', setNumber: '55'
  },
  'origin forme palkia vstar': {
    id: 'ASR-40', name: 'Origin Forme Palkia VSTAR', category: 'pokemon',
    energyType: 'water', stage: 'VSTAR', hp: 280,
    imageUrl: 'https://images.pokemontcg.io/swsh10/40.png',
    setCode: 'ASR', setNumber: '40'
  },
  'palkia vstar': {
    id: 'ASR-40', name: 'Origin Forme Palkia VSTAR', category: 'pokemon',
    energyType: 'water', stage: 'VSTAR', hp: 280,
    imageUrl: 'https://images.pokemontcg.io/swsh10/40.png',
    setCode: 'ASR', setNumber: '40'
  },
  'regidrago vstar': {
    id: 'SIT-136', name: 'Regidrago VSTAR', category: 'pokemon',
    energyType: 'dragon', stage: 'VSTAR', hp: 280,
    imageUrl: 'https://images.pokemontcg.io/swsh12/136.png',
    setCode: 'SIT', setNumber: '136'
  },
  'chien-pao ex': {
    id: 'PAL-61', name: 'Chien-Pao ex', category: 'pokemon',
    energyType: 'water', stage: 'BÁSICO', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/sv2/61.png',
    setCode: 'PAL', setNumber: '61'
  },
  'baxcalibur': {
    id: 'PAL-60', name: 'Baxcalibur', category: 'pokemon',
    energyType: 'water', stage: 'ESTÁGIO 2', hp: 160,
    imageUrl: 'https://images.pokemontcg.io/sv2/60.png',
    setCode: 'PAL', setNumber: '60'
  },
  'bibarel': {
    id: 'BRS-121', name: 'Bibarel', category: 'pokemon',
    energyType: 'colorless', stage: 'ESTÁGIO 1', hp: 120,
    imageUrl: 'https://images.pokemontcg.io/swsh9/121.png',
    setCode: 'BRS', setNumber: '121'
  },
  'bidoof': {
    id: 'BRS-120', name: 'Bidoof', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 70,
    imageUrl: 'https://images.pokemontcg.io/swsh9/120.png',
    setCode: 'BRS', setNumber: '120'
  },
  'squawkabilly ex': {
    id: 'PAL-169', name: 'Squawkabilly ex', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 160,
    imageUrl: 'https://images.pokemontcg.io/sv2/169.png',
    setCode: 'PAL', setNumber: '169'
  },
  'bloodmoon ursaluna ex': {
    id: 'TWM-141', name: 'Bloodmoon Ursaluna ex', category: 'pokemon',
    energyType: 'colorless', stage: 'BÁSICO', hp: 260,
    imageUrl: 'https://images.pokemontcg.io/sv6/141.png',
    setCode: 'TWM', setNumber: '141'
  },
  'lumineon v': {
    id: 'BRS-40', name: 'Lumineon V', category: 'pokemon',
    energyType: 'water', stage: 'BÁSICO', hp: 170,
    imageUrl: 'https://images.pokemontcg.io/swsh9/40.png',
    setCode: 'BRS', setNumber: '40'
  },
  'crobat v': {
    id: 'DAA-104', name: 'Crobat V', category: 'pokemon',
    energyType: 'darkness', stage: 'BÁSICO', hp: 180,
    imageUrl: 'https://images.pokemontcg.io/swsh3/104.png',
    setCode: 'DAA', setNumber: '104'
  },

  // --- MEGA EVOLUTION era (mantidas — imagens reais dos sets XY originais) ---
  'mega lucario ex': {
    id: 'FFI-55', name: 'Mega Lucario ex', category: 'pokemon',
    energyType: 'fighting', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy3/55.png',
    setCode: 'FFI', setNumber: '55'
  },
  'mega lucario ex (ilustracao especial rara)': {
    id: 'FFI-113', name: 'Mega Lucario ex (Ilustração Especial Rara)', category: 'pokemon',
    energyType: 'fighting', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy3/113.png',
    setCode: 'FFI', setNumber: '113'
  },
  'mega gardevoir ex': {
    id: 'STS-112', name: 'Mega Gardevoir ex', category: 'pokemon',
    energyType: 'psychic', stage: 'EX', hp: 210,
    imageUrl: 'https://images.pokemontcg.io/xy11/112.png',
    setCode: 'STS', setNumber: '112'
  },
  'mega charizard x ex': {
    id: 'FLF-13', name: 'Mega Charizard X ex', category: 'pokemon',
    energyType: 'fire', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy2/13.png',
    setCode: 'FLF', setNumber: '13'
  },
  'mega charizard x ex (ilustracao rara)': {
    id: 'FLF-107', name: 'Mega Charizard X ex (Ilustração Rara)', category: 'pokemon',
    energyType: 'fire', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy2/107.png',
    setCode: 'FLF', setNumber: '107'
  },
  'mega charizard y ex': {
    id: 'FLF-108', name: 'Mega Charizard Y ex', category: 'pokemon',
    energyType: 'fire', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy2/108.png',
    setCode: 'FLF', setNumber: '108'
  },
  'mega venusaur ex': {
    id: 'XY-2', name: 'Mega Venusaur ex', category: 'pokemon',
    energyType: 'grass', stage: 'EX', hp: 230,
    imageUrl: 'https://images.pokemontcg.io/xy1/2.png',
    setCode: 'XY', setNumber: '2'
  },
  'mega blastoise ex': {
    id: 'XY-30', name: 'Mega Blastoise ex', category: 'pokemon',
    energyType: 'water', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy1/30.png',
    setCode: 'XY', setNumber: '30'
  },
  'mega gengar ex': {
    id: 'PHF-35', name: 'Mega Gengar ex', category: 'pokemon',
    energyType: 'psychic', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy4/35.png',
    setCode: 'PHF', setNumber: '35'
  },
  'mega rayquaza ex': {
    id: 'ROS-61', name: 'Mega Rayquaza ex', category: 'pokemon',
    energyType: 'colorless', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy6/61.png',
    setCode: 'ROS', setNumber: '61'
  },
  'mega mewtwo x ex': {
    id: 'BKT-63', name: 'Mega Mewtwo X ex', category: 'pokemon',
    energyType: 'psychic', stage: 'EX', hp: 230,
    imageUrl: 'https://images.pokemontcg.io/xy8/63.png',
    setCode: 'BKT', setNumber: '63'
  },
  'mega mewtwo y ex': {
    id: 'BKT-64', name: 'Mega Mewtwo Y ex', category: 'pokemon',
    energyType: 'psychic', stage: 'EX', hp: 210,
    imageUrl: 'https://images.pokemontcg.io/xy8/64.png',
    setCode: 'BKT', setNumber: '64'
  },
  'mega kangaskhan ex': {
    id: 'FLF-79', name: 'Mega Kangaskhan ex', category: 'pokemon',
    energyType: 'colorless', stage: 'EX', hp: 230,
    imageUrl: 'https://images.pokemontcg.io/xy2/79.png',
    setCode: 'FLF', setNumber: '79'
  },
  'mega tyranitar ex': {
    id: 'AOR-43', name: 'Mega Tyranitar ex', category: 'pokemon',
    energyType: 'darkness', stage: 'EX', hp: 240,
    imageUrl: 'https://images.pokemontcg.io/xy7/43.png',
    setCode: 'AOR', setNumber: '43'
  },
  'mega scizor ex': {
    id: 'BKP-77', name: 'Mega Scizor ex', category: 'pokemon',
    energyType: 'metal', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy9/77.png',
    setCode: 'BKP', setNumber: '77'
  },
  'mega gallade ex': {
    id: 'ROS-35', name: 'Mega Gallade ex', category: 'pokemon',
    energyType: 'psychic', stage: 'EX', hp: 220,
    imageUrl: 'https://images.pokemontcg.io/xy6/35.png',
    setCode: 'ROS', setNumber: '35'
  },
  'mega steelix ex': {
    id: 'STS-68', name: 'Mega Steelix ex', category: 'pokemon',
    energyType: 'metal', stage: 'EX', hp: 240,
    imageUrl: 'https://images.pokemontcg.io/xy11/68.png',
    setCode: 'STS', setNumber: '68'
  },
  'mega latias ex': {
    id: 'ROS-59', name: 'Mega Latias ex', category: 'pokemon',
    energyType: 'dragon', stage: 'EX', hp: 190,
    imageUrl: 'https://images.pokemontcg.io/xy6/59.png',
    setCode: 'ROS', setNumber: '59'
  },
  'mega darkrai ex': {
    id: 'BKP-74', name: 'Mega Darkrai ex', category: 'pokemon',
    energyType: 'darkness', stage: 'EX', hp: 180,
    imageUrl: 'https://images.pokemontcg.io/xy9/74.png',
    setCode: 'BKP', setNumber: '74'
  },
  'zygarde ex': {
    id: 'FCO-54', name: 'Zygarde ex', category: 'pokemon',
    energyType: 'fighting', stage: 'EX', hp: 190,
    imageUrl: 'https://images.pokemontcg.io/xy10/54.png',
    setCode: 'FCO', setNumber: '54'
  },
  'xerneas ex': {
    id: 'XY-96', name: 'Xerneas ex', category: 'pokemon',
    energyType: 'psychic', stage: 'EX', hp: 170,
    imageUrl: 'https://images.pokemontcg.io/xy1/96.png',
    setCode: 'XY', setNumber: '96'
  },
  'yveltal ex': {
    id: 'XY-78', name: 'Yveltal ex', category: 'pokemon',
    energyType: 'darkness', stage: 'EX', hp: 170,
    imageUrl: 'https://images.pokemontcg.io/xy1/78.png',
    setCode: 'XY', setNumber: '78'
  },

  // ---------- TRAINERS ----------
  'buddy-buddy poffin': {
    id: 'TEF-144', name: 'Buddy-Buddy Poffin', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv5/144.png',
    setCode: 'TEF', setNumber: '144'
  },
  'poffin de companheiro': {
    id: 'TEF-144', name: 'Buddy-Buddy Poffin', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv5/144.png',
    setCode: 'TEF', setNumber: '144'
  },
  'pedaco de poffin de companheiro': {
    id: 'TEF-144', name: 'Buddy-Buddy Poffin', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv5/144.png',
    setCode: 'TEF', setNumber: '144'
  },
  'ultra ball': {
    id: 'SVI-196', name: 'Ultra Ball', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/196.png',
    setCode: 'SVI', setNumber: '196'
  },
  'ultra bola': {
    id: 'SVI-196', name: 'Ultra Ball', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/196.png',
    setCode: 'SVI', setNumber: '196'
  },
  'nest ball': {
    id: 'SVI-181', name: 'Nest Ball', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/181.png',
    setCode: 'SVI', setNumber: '181'
  },
  'bola ninho': {
    id: 'SVI-181', name: 'Nest Ball', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/181.png',
    setCode: 'SVI', setNumber: '181'
  },
  'rare candy': {
    id: 'SVI-191', name: 'Rare Candy', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/191.png',
    setCode: 'SVI', setNumber: '191'
  },
  'doce raro': {
    id: 'SVI-191', name: 'Rare Candy', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/191.png',
    setCode: 'SVI', setNumber: '191'
  },
  'super rod': {
    id: 'PAL-188', name: 'Super Rod', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv2/188.png',
    setCode: 'PAL', setNumber: '188'
  },
  'supervara': {
    id: 'PAL-188', name: 'Super Rod', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv2/188.png',
    setCode: 'PAL', setNumber: '188'
  },
  'prime catcher': {
    id: 'TEF-157', name: 'Prime Catcher', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv5/157.png',
    setCode: 'TEF', setNumber: '157'
  },
  'pegador primordial': {
    id: 'TEF-157', name: 'Prime Catcher', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv5/157.png',
    setCode: 'TEF', setNumber: '157'
  },
  'counter catcher': {
    id: 'PAR-160', name: 'Counter Catcher', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv4/160.png',
    setCode: 'PAR', setNumber: '160'
  },
  'pegador de revanche': {
    id: 'PAR-160', name: 'Counter Catcher', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv4/160.png',
    setCode: 'PAR', setNumber: '160'
  },
  'night stretcher': {
    id: 'SFA-61', name: 'Night Stretcher', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv6pt5/61.png',
    setCode: 'SFA', setNumber: '61'
  },
  'maca noturna': {
    id: 'SFA-61', name: 'Night Stretcher', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv6pt5/61.png',
    setCode: 'SFA', setNumber: '61'
  },
  'earthen vessel': {
    id: 'PAR-163', name: 'Earthen Vessel', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv4/163.png',
    setCode: 'PAR', setNumber: '163'
  },
  'recipiente terrestre': {
    id: 'PAR-163', name: 'Earthen Vessel', category: 'item',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv4/163.png',
    setCode: 'PAR', setNumber: '163'
  },
  'forest seal stone': {
    id: 'SIT-156', name: 'Forest Seal Stone', category: 'tool',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/swsh12/156.png',
    setCode: 'SIT', setNumber: '156'
  },
  'arven': {
    id: 'SVI-166', name: 'Arven', category: 'supporter',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/166.png',
    setCode: 'SVI', setNumber: '166'
  },
  'iono': {
    id: 'PAL-185', name: 'Iono', category: 'supporter',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv2/185.png',
    setCode: 'PAL', setNumber: '185'
  },
  "boss's orders": {
    id: 'SVI-172', name: "Boss's Orders", category: 'supporter',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/172.png',
    setCode: 'SVI', setNumber: '172'
  },
  'ordens da chefia': {
    id: 'SVI-172', name: "Boss's Orders", category: 'supporter',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/172.png',
    setCode: 'SVI', setNumber: '172'
  },
  "professor's research": {
    id: 'SVI-189', name: "Professor's Research", category: 'supporter',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/189.png',
    setCode: 'SVI', setNumber: '189'
  },
  'pesquisa de professores': {
    id: 'SVI-189', name: "Professor's Research", category: 'supporter',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv1/189.png',
    setCode: 'SVI', setNumber: '189'
  },
  'artazon': {
    id: 'PAL-171', name: 'Artazon', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv2/171.png',
    setCode: 'PAL', setNumber: '171'
  },
  'pokestop': {
    id: 'PGO-68', name: 'PokéStop', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/pgo/68.png',
    setCode: 'PGO', setNumber: '68'
  },
  'pokeparada': {
    id: 'PGO-68', name: 'PokéStop', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/pgo/68.png',
    setCode: 'PGO', setNumber: '68'
  },
  'jamming tower': {
    id: 'TWM-153', name: 'Jamming Tower', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv6/153.png',
    setCode: 'TWM', setNumber: '153'
  },
  'torre interferente': {
    id: 'TWM-153', name: 'Jamming Tower', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv6/153.png',
    setCode: 'TWM', setNumber: '153'
  },
  'area zero underdepths': {
    id: 'SCR-131', name: 'Area Zero Underdepths', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv7/131.png',
    setCode: 'SCR', setNumber: '131'
  },
  'subterraneo da area zero': {
    id: 'SCR-131', name: 'Area Zero Underdepths', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv7/131.png',
    setCode: 'SCR', setNumber: '131'
  },
  'neutral center': {
    id: 'SCR-133', name: 'Neutral Center', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv7/133.png',
    setCode: 'SCR', setNumber: '133'
  },
  'centro neutro': {
    id: 'SCR-133', name: 'Neutral Center', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/sv7/133.png',
    setCode: 'SCR', setNumber: '133'
  },
  'path to the peak': {
    id: 'CRE-148', name: 'Path to the Peak', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/swsh6/148.png',
    setCode: 'CRE', setNumber: '148'
  },
  'lost city': {
    id: 'LOR-161', name: 'Lost City', category: 'stadium',
    stage: 'TREINADOR', imageUrl: 'https://images.pokemontcg.io/swsh11/161.png',
    setCode: 'LOR', setNumber: '161'
  },

  // ---------- ENERGIES ----------
  'basic fire energy': {
    id: 'SVE-2', name: 'Basic Fire Energy', category: 'energy',
    energyType: 'fire', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/2.png',
    setCode: 'SVE', setNumber: '2'
  },
  'energia de fogo basica': {
    id: 'SVE-2', name: 'Basic Fire Energy', category: 'energy',
    energyType: 'fire', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/2.png',
    setCode: 'SVE', setNumber: '2'
  },
  'energia de fogo': {
    id: 'SVE-2', name: 'Basic Fire Energy', category: 'energy',
    energyType: 'fire', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/2.png',
    setCode: 'SVE', setNumber: '2'
  },
  'basic psychic energy': {
    id: 'SVE-5', name: 'Basic Psychic Energy', category: 'energy',
    energyType: 'psychic', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/5.png',
    setCode: 'SVE', setNumber: '5'
  },
  'energia psiquica basica': {
    id: 'SVE-5', name: 'Basic Psychic Energy', category: 'energy',
    energyType: 'psychic', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/5.png',
    setCode: 'SVE', setNumber: '5'
  },
  'energia psiquica': {
    id: 'SVE-5', name: 'Basic Psychic Energy', category: 'energy',
    energyType: 'psychic', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/5.png',
    setCode: 'SVE', setNumber: '5'
  },
  'basic water energy': {
    id: 'SVE-3', name: 'Basic Water Energy', category: 'energy',
    energyType: 'water', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/3.png',
    setCode: 'SVE', setNumber: '3'
  },
  'energia de agua basica': {
    id: 'SVE-3', name: 'Basic Water Energy', category: 'energy',
    energyType: 'water', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/3.png',
    setCode: 'SVE', setNumber: '3'
  },
  'basic lightning energy': {
    id: 'SVE-4', name: 'Basic Lightning Energy', category: 'energy',
    energyType: 'lightning', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/4.png',
    setCode: 'SVE', setNumber: '4'
  },
  'energia de raios basica': {
    id: 'SVE-4', name: 'Basic Lightning Energy', category: 'energy',
    energyType: 'lightning', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/4.png',
    setCode: 'SVE', setNumber: '4'
  },
  'basic fighting energy': {
    id: 'SVE-6', name: 'Basic Fighting Energy', category: 'energy',
    energyType: 'fighting', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/6.png',
    setCode: 'SVE', setNumber: '6'
  },
  'energia de luta basica': {
    id: 'SVE-6', name: 'Basic Fighting Energy', category: 'energy',
    energyType: 'fighting', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/6.png',
    setCode: 'SVE', setNumber: '6'
  },
  'basic darkness energy': {
    id: 'SVE-7', name: 'Basic Darkness Energy', category: 'energy',
    energyType: 'darkness', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/7.png',
    setCode: 'SVE', setNumber: '7'
  },
  'energia de escuridao basica': {
    id: 'SVE-7', name: 'Basic Darkness Energy', category: 'energy',
    energyType: 'darkness', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/7.png',
    setCode: 'SVE', setNumber: '7'
  },
  'basic metal energy': {
    id: 'SVE-8', name: 'Basic Metal Energy', category: 'energy',
    energyType: 'metal', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/8.png',
    setCode: 'SVE', setNumber: '8'
  },
  'basic grass energy': {
    id: 'SVE-1', name: 'Basic Grass Energy', category: 'energy',
    energyType: 'grass', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/1.png',
    setCode: 'SVE', setNumber: '1'
  },
  'energia de planta basica': {
    id: 'SVE-1', name: 'Basic Grass Energy', category: 'energy',
    energyType: 'grass', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/sve/1.png',
    setCode: 'SVE', setNumber: '1'
  },
  'double turbo energy': {
    id: 'BRS-151', name: 'Double Turbo Energy', category: 'energy',
    energyType: 'colorless', stage: 'ENERGIA',
    imageUrl: 'https://images.pokemontcg.io/swsh9/151.png',
    setCode: 'BRS', setNumber: '151'
  },
};

// ===========================================================================
// 4) POKEMON DEX MAP
// ===========================================================================

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

// ===========================================================================
// 5) NAME NORMALIZATION
// ===========================================================================

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

// ===========================================================================
// 6) PTCGL CARD ID REGISTRY
// ===========================================================================

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
    registerCardId(card.id, card);
    registerCardId(`${tpci} ${num}`, card);
    registerCardId(`${tpci} #${num}`, card);
    registerCardId(`${card.setCode}-${num}`, card);
    registerCardId(`${card.setCode} ${num}`, card);
    const local = mapTPCiToLocalSetId(tpci);
    if (local) registerCardId(`${local}-${num}`, card);
  } else if (card.id) {
    registerCardId(card.id, card);
  }
});

// ===========================================================================
// 7) PTCGL FORMAT
// ===========================================================================

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

  // Strip prefixo Firestore "userId_..." apenas se o prefixo for hash longo
  let cleanId = rawStr;
  if (rawStr.includes('_')) {
    const parts = rawStr.split('_');
    if (/^[a-z0-9]{15,}$/i.test(parts[0])) cleanId = parts.slice(1).join('_');
  }

  // Formato PTCGL: "Nome TWM 130" ou "TWM 130"
  const ptcglExportMatch = cleanId.match(/^(?:(.+?)\s+)?([A-Za-z0-9.]{2,7})\s+(\d+|promo)$/i);
  if (ptcglExportMatch) {
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

  // Formato com hífen: "sv6-130", "obf-125", "me2.5-221", "sv8pt5-221"
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

  // Fallback: lookup por nome
  const resolved = resolveCard(rawStr);
  const tpciSetCode = normalizeTPCiSetCode(resolved.setCode || 'SVI');
  const localSetId = mapTPCiToLocalSetId(tpciSetCode);
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

// ===========================================================================
// 8) SPRITE / CARD SCAN DETECTION
// ===========================================================================

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

// ===========================================================================
// 9) AUTHENTIC CARD IMAGE HIERARCHY
// ===========================================================================

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
    const card = resolveCard(cardOrName);
    if (card?.imageUrl && !isSpriteUrl(card.imageUrl)) return card.imageUrl;
    return POKEMON_CARD_BACK;
  }

  const setCode = String(cardOrName.setCode || cardOrName.set || '').trim();
  const setNumber = cardOrName.setNumber ?? cardOrName.number;

  // 1) pokemontcg.io — mais confiável
  if (setCode && setNumber !== undefined && setNumber !== null) {
    const tcgIo = getPokemonTcgIoImageUrl(setCode, setNumber);
    if (tcgIo) return tcgIo;
  }
  // 2) TCGdex
  if (setCode && setNumber !== undefined && setNumber !== null) {
    const tcgdex = getTCGdexImageUrl(setCode, setNumber, 'en');
    if (tcgdex) return tcgdex;
  }
  // 3) URL existente que não seja sprite
  if (cardOrName.imageUrl && !isSpriteUrl(cardOrName.imageUrl)) return cardOrName.imageUrl;

  // 4) Lookup por nome
  if (cardOrName.name) {
    const norm = normalizeCardName(cardOrName.name);
    const db = CARD_IMAGE_DATABASE[norm];
    if (db?.imageUrl && !isSpriteUrl(db.imageUrl)) return db.imageUrl;
    const resolved = resolveCard(cardOrName.name);
    if (resolved?.imageUrl && !isSpriteUrl(resolved.imageUrl)) return resolved.imageUrl;
  }
  return POKEMON_CARD_BACK;
}

export function getCardScanHierarchy(cardOrName: any): {
  primary: string;
  secondary: string;
  tertiary: string;
  fallback: string;
} {
  let primary = getAuthenticCardImageUrl(cardOrName);
  let secondary = POKEMON_CARD_BACK;
  let tertiary = POKEMON_CARD_BACK;

  if (typeof cardOrName === 'object' && cardOrName !== null) {
    const set = String(cardOrName.setCode || cardOrName.set || '').trim();
    const num = cardOrName.setNumber ?? cardOrName.number;
    if (set && num !== undefined && num !== null) {
      const candidates = [
        getPokemonTcgIoImageUrl(set, num),
        getTCGdexImageUrl(set, num, 'en'),
        getTCGdexImageUrl(set, num, 'pt'),
        getTCGdexImageUrlPadded(set, num, 'en'),
      ].filter(Boolean) as string[];
      if (candidates[0]) primary = candidates[0];
      if (candidates[1]) secondary = candidates[1];
      if (candidates[2]) tertiary = candidates[2];
    }
  }

  return { primary, secondary, tertiary, fallback: POKEMON_CARD_BACK };
}

export function getPokemonSpriteHierarchy(cardOrName: CardMetadata | string): SpriteSources {
  const card = typeof cardOrName === 'string' ? resolveCard(cardOrName) : cardOrName;
  const h = getCardScanHierarchy(card);
  return {
    primary: h.primary,
    artwork: h.secondary,
    battleSprite: h.tertiary,
    dexSprite: h.secondary,
    fallback: POKEMON_CARD_BACK,
  };
}

// ===========================================================================
// 10) VERIFICATION
// ===========================================================================

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
  const resolved = resolveCard(cardNameOrId);
  const isFallback = resolved.id.startsWith('custom-');
  return {
    input: cardNameOrId, isValid: !isFallback,
    isPTCGLMapped: !isFallback && !!resolved.setCode,
    card: resolved, setCode: resolved.setCode, setNumber: resolved.setNumber,
    resolvedName: resolved.name,
    verificationStatus: isFallback ? 'generated_fallback' : 'fuzzy_matched'
  };
}

// ===========================================================================
// 11) RESOLVE
// ===========================================================================

export function resolveCard(name: string): CardMetadata {
  if (!name) {
    return {
      id: 'substitute', name: 'Pokémon', category: 'pokemon',
      stage: 'BÁSICO', hp: 70, imageUrl: POKEMON_CARD_BACK
    };
  }

  // 1) PTCGL registry
  const cleanId = name.toLowerCase().trim().replace(/[^a-z0-9.-]/g, '');
  if (PTCGL_CARD_ID_MAP[cleanId]) return PTCGL_CARD_ID_MAP[cleanId];
  const cleanSpaced = name.toLowerCase().trim();
  if (PTCGL_CARD_ID_MAP[cleanSpaced]) return PTCGL_CARD_ID_MAP[cleanSpaced];

  // 2) Compound "Budew Me2-5-221" / "Pidgeot ex OBF 164"
  const compound = name.match(/^(.+?)\s+(?:\[|\()?([a-z0-9.]+)[-# ]+(\d+)(?:\]|\))?$/i);
  if (compound) {
    const rawMonName = compound[1].trim();
    const setCode = compound[2].toLowerCase();
    const setNum = compound[3];
    if (PTCGL_CARD_ID_MAP[`${setCode}-${setNum}`]) return PTCGL_CARD_ID_MAP[`${setCode}-${setNum}`];
    if (PTCGL_CARD_ID_MAP[`${setCode} ${setNum}`]) return PTCGL_CARD_ID_MAP[`${setCode} ${setNum}`];
    const normMon = normalizeCardName(rawMonName);
    if (CARD_IMAGE_DATABASE[normMon]) return CARD_IMAGE_DATABASE[normMon];
  }

  const norm = normalizeCardName(name);
  if (CARD_IMAGE_DATABASE[norm]) return CARD_IMAGE_DATABASE[norm];

  // Ordem: específico primeiro
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

  // Trainers
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

  // Maior substring (>= 4 chars)
  const keys = Object.keys(CARD_IMAGE_DATABASE).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (key.length >= 4 && norm.includes(key)) return CARD_IMAGE_DATABASE[key];
  }

  // Fallback dinâmico: card back
  return {
    id: `custom-${norm.slice(0, 10)}`,
    name: name || 'Pokémon',
    category: 'pokemon',
    stage: norm.includes('ex') ? 'EX' : 'BÁSICO',
    hp: norm.includes('ex') ? 280 : 70,
    imageUrl: POKEMON_CARD_BACK
  };
}

export function getCardImageUrl(name: string): string {
  return getAuthenticCardImageUrl(name);
}
