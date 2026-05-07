export interface FossilOccurrence {
  oid: string;
  tna: string;
  idn: string;
  tid: string;
  rnk: number;
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
}

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
