export interface GeoInterval {
  oid: string;
  nam: string;
  itp: 'eon' | 'era' | 'period' | 'epoch' | 'age';
  lag: number;
  eag: number;
  col: string;
  pid: string | null;
  abr?: string;
}

export interface PeriodInfo {
  name: string;
  abr: string;
  era: string;
  eon: string;
  lag: number;
  eag: number;
  color: string;
  keyContinentalConfig: string;
  geoJsonFile: string;
  description: string;
}

export const PHANEROZOIC_START = 538.8;
export const PRESENT = 0;
