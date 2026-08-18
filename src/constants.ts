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

export const EARTH_HISTORY_TOTAL_MA = timeScaleData.earthAgeMa;
export const PHANEROZOIC_TOTAL_MA = timeScaleData.units.find((unit) => unit.oid === 'eon:phanerozoic')?.eag ?? 538.8;
import timeScaleData from '../data/time-scale.json'
