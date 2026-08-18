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
  classification?: {
    phylum?: string;
    class?: string;
    order?: string;
    family?: string;
    genus?: string;
  };
  packageId?: string;
  packageAssignmentStatus?: 'mapped' | 'unresolved';
  packageAssignmentBasis?: string;
}

export type TaxonQueryScope = 'exact' | 'descendants'
export type TaxonIndexStatus = 'hit' | 'miss'

export interface TaxonOccurrenceQueryResult {
  taxonId: string
  /** Scope requested by the caller. */
  scope: TaxonQueryScope
  effectiveScope: TaxonQueryScope
  indexStatus: TaxonIndexStatus
  fallbackApplied: boolean
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
