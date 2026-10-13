import type { CatalogueKnowledgeProfile, CatalogueRuntimeFile, CatalogueSpeciesDossier, RuntimeFile, RuntimeRangeEvidence } from './types'
import type { TaxonProfile } from '../types/catalog'

export interface PbdbReaderIdentity {
  kind?: string
  scientificName?: string
  displayName?: string
  rank?: string
  placementStatus?: string
  conceptsMerged?: false
  classification: {
    authority: 'Paleobiology Database' | 'Paleobiology Database snapshot'
    release?: string
    status?: string
    sourceUrl: string
    parentSourceIdentifier?: string
    placement?: string
    sourceSnapshot?: string
  }
}

/** Delivery identity is source-qualified; it does not assert COL equivalence. */
export interface PbdbReaderIndexEntry {
  pbdbTaxonId: `txn:${number}`
  identity: PbdbReaderIdentity
  scopedIdentities?: Array<{ context: string; identity: PbdbReaderIdentity }>
  sourceContexts?: PbdbReaderIdentity[]
}

export interface PbdbReaderRecord extends PbdbReaderIndexEntry {
  profile?: Omit<CatalogueKnowledgeProfile, 'colId'>
  dossier?: CatalogueSpeciesDossier
  atlasProfile?: Pick<TaxonProfile, 'readerSections' | 'readerSources' | 'readerLimitations' | 'treeNodeId'>
  ranges?: Array<Omit<RuntimeRangeEvidence, 'id'> & { evidenceBasis?: string; uncertainty?: { note?: string } }>
  contexts?: PbdbReaderRecord[]
}

export interface PbdbReaderManifest {
  schemaVersion: 1
  datasetVersion: string
  records: number
  index: RuntimeFile
  routes: Record<string, string[]>
  files: CatalogueRuntimeFile[]
}
