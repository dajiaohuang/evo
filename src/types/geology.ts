export interface ChronostratigraphicBoundary {
  id: string;
  officialVersion: string;
  valueMa: number;
  uncertaintyMa: number | null;
  approximate: boolean;
  definitionType: 'GSSP' | 'GSSA' | 'chronometric boundary' | 'Earth-age reference' | 'present';
  sourceLocator: string;
}

export interface GeoInterval {
  oid: string;
  nam: string;
  namZh?: string;
  itp: 'eon' | 'era' | 'period' | 'epoch' | 'age';
  lag: number;
  eag: number;
  col: string;
  pid: string | null;
  abr?: string;
  sourceId?: string;
  sourceParentId?: string;
  eagUncertaintyMa?: number | null;
  lagUncertaintyMa?: number | null;
  eagApproximate?: boolean;
  lagApproximate?: boolean;
  ratifiedGssp?: boolean;
  sourceNote?: string;
}

export interface PeriodInfo {
  name: string;
  nameZh: string;
  abr: string;
  era: string;
  eraZh: string;
  eon: string;
  eonZh: string;
  lag: number;
  eag: number;
  olderBoundary: ChronostratigraphicBoundary;
  youngerBoundary: ChronostratigraphicBoundary;
  officialVersion: string;
  color: string;
  keyContinentalConfig: string;
  mapLayerStatus: 'available' | 'withheld-pending-provenance';
  description: string;
  descriptionZh: string;
}

export const PHANEROZOIC_START = 538.8;
export const PRESENT = 0;
