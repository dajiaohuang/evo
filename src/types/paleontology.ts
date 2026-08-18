export interface FossilOccurrence {
  oid: string;
  tna?: string;
  idn: string;
  tid?: string;
  rnk?: number;
  lng: string;
  lat: string;
  eag: number;
  lag: number;
  paleolng?: number;
  paleolat?: number;
  cid: string;
  oei: string;
  nmn?: string;
  srs?: string;
  cc2?: string;
  stp?: string;
  referenceId?: string;
  referenceAuthor?: string;
  referenceYear?: number;
  formation?: string;
  member?: string;
  lithology?: string;
  paleoenvironment?: string;
  coordinatePrecision?: string;
  geographicScale?: string;
  specimenBasis?: string;
  paleoModelId?: string;
  plateId?: string;
}

export type TaxonQueryScope = 'exact' | 'descendants'

export interface TaxonOccurrenceQueryResult {
  taxonId: string
  scope: TaxonQueryScope
  sourceTotal: number
  matchedTotal: number
  rowsLoaded: number
  truncated: boolean
  samplingMethod: string
  loadedPeriods: string[]
  records: FossilOccurrence[]
}

export type LoadStatus = 'idle' | 'loading' | 'ready' | 'empty' | 'error'

export interface TaxonInfo {
  tna: string;
  tid: string;
  rnk: number;
  fid: string;
  fna: string;
  eag: number;
  lag: number;
  ext: boolean;
  img?: string;
  com?: string;
}

export interface PBDBResponse<T> {
  records: T[];
  total: number;
}

export interface OccurrenceFilter {
  intervalName?: string;
  taxonId?: string;
  limit?: number;
  offset?: number;
}
