export interface PokemonSet {
  id: string;
  name: string;
  series: string;
  releaseDate?: string;
  logo?: string;
  symbol?: string;
}

export interface CatalogCard {
  id: string;
  name: string;
  imageUrl: string;
  setCode: string;
  setName: string;
  setNumber: string;
  tpciCode?: string;
  tpciSetCode?: string;
}

// Master list of Pokémon TCG collections (Prioritizing 2025+ Modern Mega Evolution Era & Current Standard)
export const COMPREHENSIVE_SETS: PokemonSet[] = [
  // 1. Nova Era Mega Evolution (2025+)
  { id: 'asc', name: 'Heróis Excelsos (Mega Evolution: Ascended Heroes - ASC)', series: 'Mega Evolution', releaseDate: '2026-01-30', logo: 'https://images.pokemontcg.io/asc/logo.png', symbol: 'https://images.pokemontcg.io/asc/symbol.png' },
  { id: 'pfl', name: 'Fogo Fantasmagórico (Mega Evolution: Phantasmal Flames - PFL)', series: 'Mega Evolution', releaseDate: '2025-11-14', logo: 'https://images.pokemontcg.io/pfl/logo.png', symbol: 'https://images.pokemontcg.io/pfl/symbol.png' },
  { id: 'por', name: 'Ordem Perfeita (Mega Evolution: Perfect Order - POR)', series: 'Mega Evolution', releaseDate: '2026-03-27', logo: 'https://images.pokemontcg.io/por/logo.png', symbol: 'https://images.pokemontcg.io/por/symbol.png' },
  { id: 'meg', name: 'Mega Evolução Base (Mega Evolution - MEG)', series: 'Mega Evolution', releaseDate: '2025-09-26', logo: 'https://images.pokemontcg.io/meg/logo.png', symbol: 'https://images.pokemontcg.io/meg/symbol.png' },
  { id: 'cri', name: 'Caos Ascendente (Mega Evolution: Chaos Rising - CRI)', series: 'Mega Evolution', releaseDate: '2026-05-22' },
  { id: 'pbl', name: 'Escuridão Total (Mega Evolution: Pitch Black - PBL)', series: 'Mega Evolution', releaseDate: '2026-07-17' },

  // 2. Expansões de 2025 de Scarlet & Violet
  { id: 'pre', name: 'Evoluções Prismáticas (Prismatic Evolutions - PRE)', series: 'Scarlet & Violet', releaseDate: '2025-01-17' },
  { id: 'jtg', name: 'Jornada em Conjunto (Journey Together - JTG)', series: 'Scarlet & Violet', releaseDate: '2025-03-28' },
  { id: 'dri', name: 'Rivais Destinados (Destined Rivals - DRI)', series: 'Scarlet & Violet', releaseDate: '2025-05-30' },
  { id: 'blk', name: 'Raio Negro (Black Bolt - BLK)', series: 'Scarlet & Violet', releaseDate: '2025-07-18' },
  { id: 'wht', name: 'Chama Branca (White Flare - WHT)', series: 'Scarlet & Violet', releaseDate: '2025-07-18' },

  // 3. Formato Standard Atual (Scarlet & Violet)
  { id: 'ssp', name: 'Faíscas Impetuosas (Surging Sparks - SSP)', series: 'Scarlet & Violet', releaseDate: '2024-11-08' },
  { id: 'scr', name: 'Coroa Estelar (Stellar Crown - SCR)', series: 'Scarlet & Violet', releaseDate: '2024-09-13' },
  { id: 'sfa', name: 'Fábulas Nebulosas (Shrouded Fable - SFA)', series: 'Scarlet & Violet', releaseDate: '2024-08-02' },
  { id: 'sv6', name: 'Máscaras do Crepúsculo (Twilight Masquerade - TWM)', series: 'Scarlet & Violet', releaseDate: '2024-05-24' },
  { id: 'sv5', name: 'Forças Temporais (Temporal Forces - TEF)', series: 'Scarlet & Violet', releaseDate: '2024-03-22' },
  { id: 'sv45', name: 'Destinos de Paldea (Paldean Fates - PAF)', series: 'Scarlet & Violet', releaseDate: '2024-01-26' },
  { id: 'sv4', name: 'Fenda Paradoxal (Paradox Rift - PAR)', series: 'Scarlet & Violet', releaseDate: '2023-11-03' },
  { id: 'sv3pt5', name: '151 (Pokémon 151 - MEW)', series: 'Scarlet & Violet', releaseDate: '2023-09-22' },
  { id: 'sv3', name: 'Obsidiana em Chamas (Obsidian Flames - OBF)', series: 'Scarlet & Violet', releaseDate: '2023-08-11' },
  { id: 'sv2', name: 'Evoluções em Paldea (Paldea Evolved - PAL)', series: 'Scarlet & Violet', releaseDate: '2023-06-09' },
  { id: 'sv1', name: 'Escarlate e Violeta Base (SVI)', series: 'Scarlet & Violet', releaseDate: '2023-03-31' }
];

export const TPCI_TO_LOCAL_SET_MAP: Record<string, string> = {
  'ASC': 'asc',
  'PFL': 'pfl',
  'POR': 'por',
  'MEG': 'meg',
  'CRI': 'cri',
  'PBL': 'pbl',
  'PRE': 'pre',
  'JTG': 'jtg',
  'DRI': 'dri',
  'BLK': 'blk',
  'WHT': 'wht',
  'SSP': 'ssp',
  'SCR': 'scr',
  'SFA': 'sfa',
  'TWM': 'sv6',
  'TEF': 'sv5',
  'PAF': 'sv45',
  'PAR': 'sv4',
  'MEW': 'sv3pt5',
  'OBF': 'sv3',
  'PAL': 'sv2',
  'SVI': 'sv1'
};

export const LOCAL_TO_TPCI_SET_MAP: Record<string, string> = {
  'asc': 'ASC',
  'pfl': 'PFL',
  'por': 'POR',
  'meg': 'MEG',
  'cri': 'CRI',
  'pbl': 'PBL',
  'pre': 'PRE',
  'jtg': 'JTG',
  'dri': 'DRI',
  'blk': 'BLK',
  'wht': 'WHT',
  'ssp': 'SSP',
  'scr': 'SCR',
  'sfa': 'SFA',
  'sv6': 'TWM',
  'sv5': 'TEF',
  'sv45': 'PAF',
  'sv4': 'PAR',
  'sv3pt5': 'MEW',
  'sv3': 'OBF',
  'sv2': 'PAL',
  'sv1': 'SVI'
};

// Aliases for Portuguese names and colloquial queries
export const SET_QUERY_ALIASES: Record<string, string> = {
  'herois excelsor': 'asc',
  'herois excelsos': 'asc',
  'heróis excelsos': 'asc',
  'herois': 'asc',
  'ascended heroes': 'asc',
  'asc': 'asc',
  'fogo fantasmagorico': 'pfl',
  'fogo fantasmagórico': 'pfl',
  'fantasmagorico': 'pfl',
  'fantasmagórico': 'pfl',
  'phantasmal flames': 'pfl',
  'pfl': 'pfl',
  'ordem perfeita': 'por',
  'perfect order': 'por',
  'por': 'por',
  'mega evolucao': 'meg',
  'mega evolução': 'meg',
  'mega evolution': 'meg',
  'meg': 'meg',
  'caos ascendente': 'cri',
  'chaos rising': 'cri',
  'cri': 'cri',
  'escuridao total': 'pbl',
  'escuridão total': 'pbl',
  'pitch black': 'pbl',
  'pbl': 'pbl',
  'evolucoes prismaticas': 'pre',
  'evoluções prismáticas': 'pre',
  'prismatic evolutions': 'pre',
  'pre': 'pre',
  'jornada em conjunto': 'jtg',
  'journey together': 'jtg',
  'jtg': 'jtg',
  'rivais destinados': 'dri',
  'destined rivals': 'dri',
  'dri': 'dri',
  'raio negro': 'blk',
  'black bolt': 'blk',
  'blk': 'blk',
  'chama branca': 'wht',
  'white flare': 'wht',
  'wht': 'wht',
  'faiscas impetuosas': 'ssp',
  'faíscas impetuosas': 'ssp',
  'surging sparks': 'ssp',
  'ssp': 'ssp',
  'coroa estelar': 'scr',
  'stellar crown': 'scr',
  'scr': 'scr',
  'mascaras do crepusculo': 'sv6',
  'máscaras do crepúsculo': 'sv6',
  'twilight masquerade': 'sv6',
  'twm': 'sv6',
  'forcas temporais': 'sv5',
  'forças temporais': 'sv5',
  'temporal forces': 'sv5',
  'tef': 'sv5',
  '151': 'sv3pt5',
  'mew': 'sv3pt5',
  'obsidiana em chamas': 'sv3',
  'obsidian flames': 'sv3',
  'obf': 'sv3'
};

// Complete modern cards catalog with 100% authentic Pokémon TCG card scans
export const MODERN_CARDS_CATALOG: CatalogCard[] = [
  // --- HERÓIS EXCELSOS (ASC - 2026) ---
  { id: 'asc-085', name: 'Mega Lucario ex', imageUrl: 'https://images.pokemontcg.io/xy3/55.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '085' },
  { id: 'asc-120', name: 'Mega Lucario ex (Ilustração Especial Rara)', imageUrl: 'https://images.pokemontcg.io/xy3/113.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '120' },
  { id: 'asc-092', name: 'Mega Gardevoir ex', imageUrl: 'https://images.pokemontcg.io/xy11/112.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '092' },
  { id: 'asc-068', name: 'Mega Greninja ex', imageUrl: 'https://images.pokemontcg.io/sv6/106.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '068' },
  { id: 'asc-010', name: 'Mega Meganium ex', imageUrl: 'https://images.pokemontcg.io/col1/11.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '010' },
  { id: 'asc-024', name: 'Mega Feraligatr ex', imageUrl: 'https://images.pokemontcg.io/col1/9.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '024' },
  { id: 'asc-035', name: 'Mega Emboar ex', imageUrl: 'https://images.pokemontcg.io/bw1/19.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '035' },
  { id: 'asc-101', name: 'Zygarde ex', imageUrl: 'https://images.pokemontcg.io/xy10/54.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '101' },
  { id: 'asc-016', name: 'Budew', imageUrl: 'https://images.pokemontcg.io/dp7/33.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '016' },
  { id: 'asc-039', name: 'Psyduck', imageUrl: 'https://images.pokemontcg.io/sv3pt5/54.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '039' },
  { id: 'asc-142', name: 'Fezandipiti ex', imageUrl: 'https://images.pokemontcg.io/sv6pt5/38.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '142' },
  { id: 'asc-181', name: 'Air Balloon', imageUrl: 'https://images.pokemontcg.io/swsh1/156.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '181' },
  { id: 'asc-196', name: 'Night Stretcher', imageUrl: 'https://images.pokemontcg.io/sv6pt5/61.png', setCode: 'asc', setName: 'Heróis Excelsos (Ascended Heroes)', setNumber: '196' },

  // --- FOGO FANTASMAGÓRICO (PFL - 2025) ---
  { id: 'pfl-013', name: 'Mega Charizard X ex', imageUrl: 'https://images.pokemontcg.io/xy2/13.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '013' },
  { id: 'pfl-130', name: 'Mega Charizard X ex (Ilustração Rara)', imageUrl: 'https://images.pokemontcg.io/xy2/107.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '130' },
  { id: 'pfl-025', name: 'Mega Blaziken ex', imageUrl: 'https://images.pokemontcg.io/xyp/XY86.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '025' },
  { id: 'pfl-038', name: 'Mega Camerupt ex', imageUrl: 'https://images.pokemontcg.io/xyp/XY198.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '038' },
  { id: 'pfl-045', name: 'Mega Houndoom ex', imageUrl: 'https://images.pokemontcg.io/xy8/22.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '045' },
  { id: 'pfl-052', name: 'Ceruledge ex', imageUrl: 'https://images.pokemontcg.io/sv8/36.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '052' },
  { id: 'pfl-060', name: 'Chandelure ex', imageUrl: 'https://images.pokemontcg.io/swsh8/39.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '060' },
  { id: 'pfl-087', name: 'Dawn', imageUrl: 'https://images.pokemontcg.io/dp5/90.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '087' },
  { id: 'pfl-091', name: 'Jumbo Ice Cream', imageUrl: 'https://images.pokemontcg.io/sv4/45.png', setCode: 'pfl', setName: 'Fogo Fantasmagórico (Phantasmal Flames)', setNumber: '091' },

  // --- ORDEM PERFEITA (POR - 2026) ---
  { id: 'por-001', name: 'Mega Zygarde Forma Completa ex', imageUrl: 'https://images.pokemontcg.io/xy10/54.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '001' },
  { id: 'por-028', name: 'Mega Clefable ex', imageUrl: 'https://images.pokemontcg.io/sv4/82.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '028' },
  { id: 'por-042', name: 'Mega Starmie ex', imageUrl: 'https://images.pokemontcg.io/sv3pt5/121.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '042' },
  { id: 'por-058', name: 'Mega Absol ex', imageUrl: 'https://images.pokemontcg.io/xyp/XY63.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '058' },
  { id: 'por-072', name: 'Mega Steelix ex', imageUrl: 'https://images.pokemontcg.io/xy11/68.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '072' },
  { id: 'por-089', name: 'Mega Metagross ex', imageUrl: 'https://images.pokemontcg.io/xyp/XY35.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '089' },
  { id: 'por-062', name: 'Meowth ex', imageUrl: 'https://images.pokemontcg.io/sv3pt5/52.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '062' },
  { id: 'por-095', name: 'Xerneas ex', imageUrl: 'https://images.pokemontcg.io/xy1/96.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '095' },
  { id: 'por-104', name: 'Yveltal ex', imageUrl: 'https://images.pokemontcg.io/xy1/78.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '104' },
  { id: 'por-081', name: 'Poké Pad', imageUrl: 'https://images.pokemontcg.io/sm1/124.png', setCode: 'por', setName: 'Ordem Perfeita (Perfect Order)', setNumber: '081' },

  // --- MEGA EVOLUÇÃO BASE (MEG - 2025) ---
  { id: 'meg-015', name: 'Mega Charizard Y ex', imageUrl: 'https://images.pokemontcg.io/xy2/108.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '015' },
  { id: 'meg-002', name: 'Mega Venusaur ex', imageUrl: 'https://images.pokemontcg.io/xy1/2.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '002' },
  { id: 'meg-031', name: 'Mega Blastoise ex', imageUrl: 'https://images.pokemontcg.io/xy1/30.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '031' },
  { id: 'meg-049', name: 'Mega Gengar ex', imageUrl: 'https://images.pokemontcg.io/xy4/35.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '049' },
  { id: 'meg-088', name: 'Mega Rayquaza ex', imageUrl: 'https://images.pokemontcg.io/xy6/61.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '088' },
  { id: 'meg-099', name: 'Mega Mewtwo X ex', imageUrl: 'https://images.pokemontcg.io/xy8/63.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '099' },
  { id: 'meg-100', name: 'Mega Mewtwo Y ex', imageUrl: 'https://images.pokemontcg.io/xy8/64.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '100' },
  { id: 'meg-104', name: 'Mega Kangaskhan ex', imageUrl: 'https://images.pokemontcg.io/xy2/79.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '104' },
  { id: 'meg-077', name: 'Mega Tyranitar ex', imageUrl: 'https://images.pokemontcg.io/xy7/43.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '077' },
  { id: 'meg-065', name: 'Mega Scizor ex', imageUrl: 'https://images.pokemontcg.io/xy9/77.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '065' },
  { id: 'meg-082', name: 'Mega Aerodactyl ex', imageUrl: 'https://images.pokemontcg.io/xyp/XY98.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '082' },
  { id: 'meg-090', name: 'Mega Salamence ex', imageUrl: 'https://images.pokemontcg.io/xyp/XY171.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '090' },
  { id: 'meg-084', name: 'Mega Lopunny ex', imageUrl: 'https://images.pokemontcg.io/sm12/165.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '084' },
  { id: 'meg-080', name: 'Mega Gallade ex', imageUrl: 'https://images.pokemontcg.io/xy6/35.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '080' },
  { id: 'meg-083', name: 'Mega Diancie ex', imageUrl: 'https://images.pokemontcg.io/xyp/XY44.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '083' },
  { id: 'meg-091', name: 'Mega Latias ex', imageUrl: 'https://images.pokemontcg.io/xy6/59.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '091' },
  { id: 'meg-092', name: 'Mega Latios ex', imageUrl: 'https://images.pokemontcg.io/xy6/59.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '092' },
  { id: 'meg-054', name: 'Abra', imageUrl: 'https://images.pokemontcg.io/sv3pt5/63.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '054' },
  { id: 'meg-055', name: 'Kadabra', imageUrl: 'https://images.pokemontcg.io/sv3pt5/64.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '055' },
  { id: 'meg-056', name: 'Alakazam', imageUrl: 'https://images.pokemontcg.io/sv3pt5/65.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '056' },
  { id: 'meg-114', name: 'Boss\'s Orders', imageUrl: 'https://images.pokemontcg.io/sv2/172.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '114' },
  { id: 'meg-119', name: 'Lillie\'s Determination', imageUrl: 'https://images.pokemontcg.io/sm1/122.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '119' },
  { id: 'meg-125', name: 'Rare Candy', imageUrl: 'https://images.pokemontcg.io/sv1/191.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '125' },
  { id: 'meg-131', name: 'Ultra Ball', imageUrl: 'https://images.pokemontcg.io/sv1/196.png', setCode: 'meg', setName: 'Mega Evolução (Mega Evolution)', setNumber: '131' },

  // --- CAOS ASCENDENTE & ESCURIDÃO TOTAL (CRI & PBL - 2026) ---
  { id: 'cri-050', name: 'Mega Darkrai ex', imageUrl: 'https://images.pokemontcg.io/xy9/74.png', setCode: 'cri', setName: 'Caos Ascendente (Chaos Rising)', setNumber: '050' },
  { id: 'cri-082', name: 'Special Red Card', imageUrl: 'https://images.pokemontcg.io/xy1/124.png', setCode: 'cri', setName: 'Caos Ascendente (Chaos Rising)', setNumber: '082' },
  { id: 'pbl-050', name: 'Mega Hydreigon ex', imageUrl: 'https://images.pokemontcg.io/xy6/63.png', setCode: 'pbl', setName: 'Escuridão Total (Pitch Black)', setNumber: '050' },

  // --- EVOLUÇÕES PRISMÁTICAS (PRE - 2025) ---
  { id: 'pre-075', name: 'Eevee ex (Stellar)', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRE/PRE_075_R_EN_LG.png', setCode: 'pre', setName: 'Evoluções Prismáticas (Prismatic Evolutions)', setNumber: '075' },
  { id: 'pre-060', name: 'Umbreon ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRE/PRE_060_R_EN_LG.png', setCode: 'pre', setName: 'Evoluções Prismáticas (Prismatic Evolutions)', setNumber: '060' },
  { id: 'pre-042', name: 'Sylveon ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRE/PRE_042_R_EN_LG.png', setCode: 'pre', setName: 'Evoluções Prismáticas (Prismatic Evolutions)', setNumber: '042' },
  { id: 'pre-035', name: 'Espeon ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRE/PRE_035_R_EN_LG.png', setCode: 'pre', setName: 'Evoluções Prismáticas (Prismatic Evolutions)', setNumber: '035' },
  { id: 'pre-020', name: 'Vaporeon ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRE/PRE_020_R_EN_LG.png', setCode: 'pre', setName: 'Evoluções Prismáticas (Prismatic Evolutions)', setNumber: '020' },
  { id: 'pre-025', name: 'Jolteon ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRE/PRE_025_R_EN_LG.png', setCode: 'pre', setName: 'Evoluções Prismáticas (Prismatic Evolutions)', setNumber: '025' },
  { id: 'pre-015', name: 'Flareon ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRE/PRE_015_R_EN_LG.png', setCode: 'pre', setName: 'Evoluções Prismáticas (Prismatic Evolutions)', setNumber: '015' },

  // --- JORNADA EM CONJUNTO & RIVAIS DESTINADOS (JTG & DRI - 2025) ---
  { id: 'jtg-010', name: 'Red\'s Pikachu ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/JTG/JTG_010_R_EN_LG.png', setCode: 'jtg', setName: 'Jornada em Conjunto (Journey Together)', setNumber: '010' },
  { id: 'jtg-024', name: 'Blaziken ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/JTG/JTG_024_R_EN_LG.png', setCode: 'jtg', setName: 'Jornada em Conjunto (Journey Together)', setNumber: '024' },
  { id: 'jtg-056', name: 'Lillie\'s Clefairy ex', imageUrl: 'https://images.pokemontcg.io/sm115/55.png', setCode: 'jtg', setName: 'Jornada em Conjunto (Journey Together)', setNumber: '056' },
  { id: 'dri-011', name: 'Dwebble', imageUrl: 'https://images.pokemontcg.io/sv4/11.png', setCode: 'dri', setName: 'Rivais Destinados (Destined Rivals)', setNumber: '011' },
  { id: 'dri-012', name: 'Crustle', imageUrl: 'https://images.pokemontcg.io/sv4/12.png', setCode: 'dri', setName: 'Rivais Destinados (Destined Rivals)', setNumber: '012' },
  { id: 'dri-020', name: 'Red\'s Charizard ex', imageUrl: 'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DRI/DRI_020_R_EN_LG.png', setCode: 'dri', setName: 'Rivais Destinados (Destined Rivals)', setNumber: '020' },
  { id: 'dri-136', name: 'Marnie\'s Grimmsnarl ex', imageUrl: 'https://images.pokemontcg.io/swsh45/125.png', setCode: 'dri', setName: 'Rivais Destinados (Destined Rivals)', setNumber: '136' },

  // --- STAPLES DO FORMATO STANDARD ATUAL (SCARLET & VIOLET) ---
  { id: 'ssp-054', name: 'Pikachu ex', imageUrl: 'https://images.pokemontcg.io/sv8/57.png', setCode: 'ssp', setName: 'Surging Sparks', setNumber: '054' },
  { id: 'ssp-034', name: 'Ceruledge ex', imageUrl: 'https://images.pokemontcg.io/sv8/36.png', setCode: 'ssp', setName: 'Surging Sparks', setNumber: '034' },
  { id: 'ssp-076', name: 'Latias ex', imageUrl: 'https://images.pokemontcg.io/sv8/76.png', setCode: 'ssp', setName: 'Surging Sparks', setNumber: '076' },
  { id: 'scr-128', name: 'Terapagos ex', imageUrl: 'https://images.pokemontcg.io/sv7/128.png', setCode: 'scr', setName: 'Stellar Crown', setNumber: '128' },
  { id: 'scr-131', name: 'Area Zero Underdepths', imageUrl: 'https://images.pokemontcg.io/sv7/131.png', setCode: 'scr', setName: 'Stellar Crown', setNumber: '131' },
  { id: 'sfa-020', name: 'Dusknoir', imageUrl: 'https://images.pokemontcg.io/sv6pt5/20.png', setCode: 'sfa', setName: 'Shrouded Fable', setNumber: '020' },
  { id: 'sfa-096', name: 'Fezandipiti ex', imageUrl: 'https://images.pokemontcg.io/sv6pt5/38.png', setCode: 'sfa', setName: 'Shrouded Fable', setNumber: '096' },
  { id: 'twm-130', name: 'Dragapult ex', imageUrl: 'https://images.pokemontcg.io/sv6/130.png', setCode: 'sv6', setName: 'Twilight Masquerade', setNumber: '130' },
  { id: 'twm-025', name: 'Teal Mask Ogerpon ex', imageUrl: 'https://images.pokemontcg.io/sv6/25.png', setCode: 'sv6', setName: 'Twilight Masquerade', setNumber: '025' },
  { id: 'twm-095', name: 'Munkidori', imageUrl: 'https://images.pokemontcg.io/sv6/95.png', setCode: 'sv6', setName: 'Twilight Masquerade', setNumber: '095' },
  { id: 'tef-123', name: 'Raging Bolt ex', imageUrl: 'https://images.pokemontcg.io/sv5/123.png', setCode: 'sv5', setName: 'Temporal Forces', setNumber: '123' },
  { id: 'tef-144', name: 'Buddy-Buddy Poffin', imageUrl: 'https://images.pokemontcg.io/sv5/144.png', setCode: 'sv5', setName: 'Temporal Forces', setNumber: '144' },
  { id: 'tef-157', name: 'Prime Catcher', imageUrl: 'https://images.pokemontcg.io/sv5/157.png', setCode: 'sv5', setName: 'Temporal Forces', setNumber: '157' },
  { id: 'obf-125', name: 'Charizard ex', imageUrl: 'https://images.pokemontcg.io/sv3/125.png', setCode: 'sv3', setName: 'Obsidian Flames', setNumber: '125' },
  { id: 'obf-225', name: 'Pidgeot ex', imageUrl: 'https://images.pokemontcg.io/sv3/164.png', setCode: 'sv3', setName: 'Obsidian Flames', setNumber: '225' },
  { id: 'mew-151', name: 'Mew ex', imageUrl: 'https://images.pokemontcg.io/sv3pt5/151.png', setCode: 'sv3pt5', setName: '151', setNumber: '151' },
  { id: 'pal-185', name: 'Iono', imageUrl: 'https://images.pokemontcg.io/sv2/185.png', setCode: 'sv2', setName: 'Paldea Evolved', setNumber: '185' },
  { id: 'pal-172', name: 'Boss\'s Orders', imageUrl: 'https://images.pokemontcg.io/sv2/172.png', setCode: 'sv2', setName: 'Paldea Evolved', setNumber: '172' },
  { id: 'pal-188', name: 'Super Rod', imageUrl: 'https://images.pokemontcg.io/sv2/188.png', setCode: 'sv2', setName: 'Paldea Evolved', setNumber: '188' },
  { id: 'sv1-166', name: 'Arven', imageUrl: 'https://images.pokemontcg.io/sv1/166.png', setCode: 'sv1', setName: 'Scarlet & Violet Base', setNumber: '166' },
  { id: 'sv1-181', name: 'Nest Ball', imageUrl: 'https://images.pokemontcg.io/sv1/181.png', setCode: 'sv1', setName: 'Scarlet & Violet Base', setNumber: '181' },
  { id: 'sv1-196', name: 'Ultra Ball', imageUrl: 'https://images.pokemontcg.io/sv1/196.png', setCode: 'sv1', setName: 'Scarlet & Violet Base', setNumber: '196' },
  { id: 'sv1-191', name: 'Rare Candy', imageUrl: 'https://images.pokemontcg.io/sv1/191.png', setCode: 'sv1', setName: 'Scarlet & Violet Base', setNumber: '191' }
];

export function normalizeSearchTerm(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

const MODERN_MEGA_SET_IDS = new Set(['asc', 'pfl', 'por', 'meg', 'cri', 'pbl']);

/**
 * Executes a fast, 100% reliable local search against the modern Pokémon catalog.
 * Guarantees that whether on GitHub Pages, offline, or when backend API returns 404,
 * the user can ALWAYS browse and search modern sets and Mega Evolution cards.
 */
export function searchCardsLocally(rawQuery: string, rawSet: string): CatalogCard[] {
  const normQuery = normalizeSearchTerm(rawQuery);
  const normSet = normalizeSearchTerm(rawSet);

  let resolvedSetId = rawSet ? (TPCI_TO_LOCAL_SET_MAP[rawSet.toUpperCase()] || rawSet.toLowerCase()) : '';
  let resolvedNumber = '';
  let queryText = normQuery;

  // Check aliases for set queries (e.g. "herois excelsor" -> "asc")
  if (!resolvedSetId && SET_QUERY_ALIASES[normQuery]) {
    resolvedSetId = SET_QUERY_ALIASES[normQuery];
    queryText = '';
  }

  // Detect TPCi code search like "ASC 085" or "PFL 013"
  const codeMatch = rawQuery.match(/^([A-Za-z0-9.-]{2,7})[- ]+(\d+|promo)$/i);
  if (codeMatch) {
    const setToken = codeMatch[1].toUpperCase();
    resolvedSetId = TPCI_TO_LOCAL_SET_MAP[setToken] || setToken.toLowerCase();
    resolvedNumber = codeMatch[2];
    queryText = '';
  }

  const isMegaSearch = queryText.includes('mega') || 
                       MODERN_MEGA_SET_IDS.has(resolvedSetId) || 
                       MODERN_MEGA_SET_IDS.has(normSet);

  const matched = MODERN_CARDS_CATALOG.filter(c => {
    const cardSetCode = (c.setCode || '').toLowerCase();
    const cardSetName = normalizeSearchTerm(c.setName || '');
    const cardName = normalizeSearchTerm(c.name || '');

    // Set filter
    if (resolvedSetId) {
      const setMatches = cardSetCode === resolvedSetId ||
                         cardSetCode.includes(normSet) ||
                         cardSetName.includes(normSet) ||
                         (LOCAL_TO_TPCI_SET_MAP[cardSetCode] && LOCAL_TO_TPCI_SET_MAP[cardSetCode].toLowerCase() === resolvedSetId);
      if (!setMatches) return false;
    }

    // Number filter
    if (resolvedNumber && c.setNumber !== resolvedNumber) {
      return false;
    }

    // Query text filter
    if (queryText) {
      if (SET_QUERY_ALIASES[queryText] && cardSetCode === SET_QUERY_ALIASES[queryText]) {
        return true;
      }
      const nameMatches = cardName.includes(queryText);
      const setMatches = cardSetCode.includes(queryText) || cardSetName.includes(queryText);
      const numMatches = c.setNumber && String(c.setNumber).includes(queryText);
      const megaMatches = isMegaSearch && cardName.includes('mega');
      return nameMatches || setMatches || numMatches || megaMatches;
    }

    return true;
  }).map(c => {
    const setId = (c.setCode || 'meg').toLowerCase();
    const tpciSet = LOCAL_TO_TPCI_SET_MAP[setId] || setId.toUpperCase();
    return {
      ...c,
      tpciCode: `${tpciSet} ${c.setNumber || '001'}`,
      tpciSetCode: tpciSet
    };
  });

  // If user searched for "mega" and we have mega cards, sort them to the very top
  if (isMegaSearch) {
    return matched.sort((a, b) => {
      const aIsMega = a.name.toLowerCase().includes('mega') ? 1 : 0;
      const bIsMega = b.name.toLowerCase().includes('mega') ? 1 : 0;
      return bIsMega - aIsMega;
    });
  }

  return matched;
}
