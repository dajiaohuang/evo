export const PBDB_BASE_URL = 'https://paleobiodb.org/data1.2';

export const DEFAULT_MAP_CENTER: [number, number] = [0, 0];
export const DEFAULT_MAP_ZOOM = 2;
export const MIN_MAP_ZOOM = 1;
export const MAX_MAP_ZOOM = 6;

export const FOSSIL_PAGE_SIZE = 500;
export const MAX_QUEUED_REQUESTS = 50;
export const MIN_REQUEST_GAP_MS = 200;

export const CACHE_TTL = {
  intervals: Infinity,
  taxonomy: 60 * 60 * 1000,
  occurrences: 30 * 60 * 1000,
};

export const PHANEROZOIC_TOTAL_MA = 538.8;

export const PERIOD_COLORS: Record<string, string> = {
  Quaternary: '#F9F080',
  Neogene: '#FFE619',
  Paleogene: '#FD9A52',
  Cretaceous: '#8CC55E',
  Jurassic: '#4DB6AC',
  Triassic: '#B388C9',
  Permian: '#F05548',
  Carboniferous: '#67B29C',
  Devonian: '#C9853B',
  Silurian: '#B2DFB0',
  Ordovician: '#41B6C4',
  Cambrian: '#9AD9DD',
};

export const ERA_COLORS: Record<string, string> = {
  Cenozoic: '#F2F281',
  Mesozoic: '#8CC55E',
  Paleozoic: '#7AC5CD',
};
