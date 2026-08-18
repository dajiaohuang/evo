export type ConfidenceLevel = 'high' | 'medium' | 'low'

export interface ReferenceRecord {
  id: string
  title: string
  authors: string
  publishedYear?: number
  type: 'paper' | 'database' | 'standard' | 'museum' | 'documentation'
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
  geography: string[]
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
  evidence: string[]
  uncertainties: string[]
  confidence: ConfidenceLevel
  referenceIds: string[]
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
  referenceIds: string[]
}

export interface EvolutionStory {
  id: string
  title: string
  titleZh: string
  dek: string
  theme: string
  durationMinutes: number
  featured: boolean
  steps: StoryStep[]
}

export interface SearchResult {
  id: string
  kind: 'taxon' | 'event' | 'story' | 'tree' | 'interval' | 'place'
  title: string
  subtitle: string
  keywords: string
  route: string
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
  nodeId: string
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
  statement: string
  confidence: ConfidenceLevel | 'contested'
  referenceLinks: Array<{
    referenceId: string
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
  licenseNote: string
}
