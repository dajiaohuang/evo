export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'contested'

export interface ReferenceRecord {
  id: string
  title: string
  authors: string
  publishedYear?: number
  type: 'paper' | 'database' | 'dataset' | 'standard' | 'museum' | 'documentation'
  sourceRole: 'primary-study' | 'systematic-review' | 'taxonomic-database' | 'occurrence-database' | 'museum-overview' | 'documentation' | 'standard'
  fitnessFor: Array<'taxonomy' | 'topology' | 'range' | 'morphology' | 'ecology' | 'biogeography' | 'event-mechanism' | 'occurrence' | 'paleogeography' | 'geochronology' | 'methods'>
  metadataAssignment: 'automated' | 'curator-reviewed'
  url: string
  doi?: string
  accessedAt?: string
  version?: string
  publisher?: string
  pages?: string
  datasetSnapshot?: string
  note?: string
}

export interface TaxonProfile {
  id: string
  treeNodeId?: string
  pbdbTaxonId?: string
  scientificName: string
  commonName: string
  commonNameZh: string
  rank: string
  parentName: string
  extinct: boolean
  firstAppearance: number
  lastAppearance: number
  rangeEvidenceLevel: 'legacy-display' | 'database-derived' | 'literature-synthesized' | 'withheld-no-range-evidence' | 'expert-reviewed'
  rangeReviewStatus: 'not-reviewed' | 'automated-audit-passed' | 'expert-reviewed'
  rangeProvisional: boolean
  geography: string[]
  regionalRanges?: Array<{
    label: string
    region: string
    rangeKind: 'taxon-range' | 'dispersal-window' | 'regional-last-appearance-window'
    olderMa: number
    youngerMa: number
    basis: string
    confidence: ConfidenceLevel
    evidenceLevel: 'legacy-display' | 'database-derived' | 'literature-synthesized' | 'expert-reviewed'
    provisional: boolean
    referenceIds: string[]
  }>
  overview: string
  ecology: {
    diet: string
    habitat: string
    locomotion: string
    bodySize: string
    guild: string
  }
  traits: string[]
  evidenceSummary: string
  confidence: ConfidenceLevel
  referenceIds: string[]
}

export interface EvolutionEvent {
  id: string
  title: string
  titleZh: string
  category: 'origin' | 'radiation' | 'transition' | 'extinction' | 'climate' | 'dispersal'
  startAge: number
  endAge: number
  regions: string[]
  clades: string[]
  summary: string
  evidenceItems: EventEvidenceItem[]
  uncertaintyItems: EventEvidenceItem[]
  claimIds: string[]
  confidence: ConfidenceLevel
  referenceIds: string[]
}

export interface EventEvidenceItem {
  statement: string
  relation: 'supports' | 'contradicts' | 'contextualizes'
  claimIds: string[]
  referenceLinks: Array<{
    referenceId: string
    relation: 'supports' | 'contradicts' | 'contextualizes'
    pages?: string
    figure?: string
    quoteLocator?: string
  }>
}

export type StoryView = 'map' | 'tree' | 'diversity' | 'evidence'

export interface StoryStep {
  id: string
  title: string
  text: string
  age: number
  timeRange: [number, number]
  taxonIds: string[]
  view: StoryView
  eventId?: string
  annotation?: string
  claimLinks: Array<{
    claimId: string
    relation: 'supports' | 'contradicts' | 'contextualizes'
  }>
}

export interface EvolutionStory {
  id: string
  title: string
  titleZh: string
  dek: string
  theme: string
  durationMinutes: number
  featured: boolean
  evidenceStatus: 'available-with-limitations' | 'blocked-pending-step-evidence'
  steps: StoryStep[]
}

export interface SearchResult {
  id: string
  kind: 'taxon' | 'event' | 'story' | 'tree' | 'interval' | 'place'
  title: string
  titleZh?: string
  subtitle: string
  subtitleZh?: string
  keywords: string
  route: string
  scientificMaturity?: 'generated-scaffold' | 'structured' | 'source-linked' | 'curated-draft' | 'published'
}

export interface PlaceRecord {
  code: string
  name: string
  nameZh: string
  occurrences: number
}

export interface DivergenceEstimate {
  id: string
  nodeLabel: string
  medianMa: number
  youngerMa: number | null
  olderMa: number | null
  method: string
  referenceId: string
  nodeId: string | null
  mappingStatus: 'mapped' | 'unmapped'
  displayOnTree: boolean
  topologyHypothesisId: string
  cladePackageId: string
  locator?: { pages?: string; table?: string; figure?: string }
  compatibilityGroup: string
  note: string
}

export type EvidenceClaimType = 'topology' | 'divergence-time' | 'fossil-range' | 'morphology' | 'ecology' | 'biogeography' | 'event-mechanism'

export interface EvidenceClaim {
  id: string
  subjectId: string
  claimType: EvidenceClaimType
  claimKind: 'scientific' | 'editorial'
  statement: string
  confidence: ConfidenceLevel
  confidenceRationale: string
  confidenceRationaleZh: string
  reviewedBy: string
  reviewedAt: string
  reviewedAgainstReferenceVersion: string
  referenceLinks: Array<{
    referenceId: string
    relation: 'supports' | 'contradicts' | 'contextualizes'
    pages?: string
    table?: string
    figure?: string
    quoteLocator?: string
  }>
}

export interface MediaAsset {
  id: string
  taxonId: string
  title: string
  type: 'museum-gallery' | 'specimen-feature' | 'reconstruction' | '3d-model'
  sourceName: string
  sourceUrl: string
  creator: string
  license: string
  rightsStatus: 'external-link-only' | 'cleared-for-reuse'
  caption: string
  captionZh: string
  altText: string
  altTextZh: string
  subjectScope: string
  reviewedAt: string
  licenseNote: string
}
