export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'contested'

export interface ReferenceRecord {
  id: string
  title: string
  authors: string[] | string
  authorsComplete?: boolean
  authorsStatus?: 'recorded' | 'incomplete-verbatim' | 'unresolved'
  authorsVerbatim?: string
  titleTranslations?: { en?: string; zh?: string }
  publishedYear?: number
  type: 'paper' | 'database' | 'dataset' | 'standard' | 'museum' | 'documentation' | 'publication' | 'web-resource' | 'bibliographic-record'
  sourceRole: 'primary-study' | 'systematic-review' | 'taxonomic-database' | 'occurrence-database' | 'museum-overview' | 'documentation' | 'standard' | 'unclassified'
  fitnessFor?: Array<'taxonomy' | 'evolution' | 'topology' | 'range' | 'morphology' | 'ecology' | 'biogeography' | 'event-mechanism' | 'occurrence' | 'paleogeography' | 'geochronology' | 'methods' | 'reproduction' | 'conservation'>
  url?: string
  doi?: string
  accessedAt?: string
  version?: string
  publisher?: string
  pages?: string
  readingUrl?: string
  readingLocator?: string
  containerTitle?: string
  license?: string
  licenseUrl?: string
  licenseVersion?: string
  licenseAppliesTo?: string
  licenseAssessment?: string
  rights?: string
  rightsHolder?: string
  attribution?: string
  rightsEvidenceUrl?: string
  rightsEvidenceLocator?: string
  datasetSnapshot?: string
  note?: string
}

export interface TaxonProfileReaderSection {
  id: string
  topic?: string
  claimIds?: string[]
  title: { en: string; zh: string }
  text: { en: string; zh: string }
  sourceIds?: string[]
  confidence?: ConfidenceLevel
}

export interface TaxonProfileReaderSource {
  id: string
  title: string | { en: string; zh: string }
  url: string
  scope?: string | { en: string; zh: string }
  referenceId?: string
  doi?: string
  locator?: string
  readingUrl?: string
  version?: string
  publishedAt?: string
  accessedAt?: string
  license?: string
  licenseVersion?: string
  licenseUrl?: string
  licenseAppliesTo?: string
  rights?: string
  rightsHolder?: string
  attribution?: string
  sourceFileSha256?: string
}

export interface TaxonProfileReaderPageLink {
  targetId: string
  label: { en: string; zh: string }
  context: { en: string; zh: string }
}

export interface TaxonProfile {
  id: string
  treeNodeId?: string
  pbdbTaxonId?: string | null
  scientificName: string
  commonName: string
  commonNameZh: string
  rank: string
  parentName: string
  extinct: boolean
  firstAppearance: number
  lastAppearance: number
  rangeEvidenceLevel: 'legacy-display' | 'database-derived' | 'literature-synthesized' | 'withheld-no-range-evidence'
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
    evidenceLevel: 'legacy-display' | 'database-derived' | 'literature-synthesized'
    provisional: boolean
    referenceIds: string[]
  }>
  overview: string
  overviewZh?: string
  ecology: {
    diet?: string
    dietZh?: string
    habitat?: string
    habitatZh?: string
    locomotion?: string
    locomotionZh?: string
    bodySize?: string
    bodySizeZh?: string
    guild?: string
    guildZh?: string
  }
  traits: string[]
  traitsZh?: string[]
  traitsAssessmentStatus?: 'assessed' | 'not-assessed'
  evidenceSummary: string
  evidenceSummaryZh?: string
  readerSections?: TaxonProfileReaderSection[]
  readerSources?: TaxonProfileReaderSource[]
  readerRelatedPages?: TaxonProfileReaderPageLink[]
  readerLimitations?: { en: string; zh: string }
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
  summaryZh?: string
  readerSections?: TaxonProfileReaderSection[]
  readerSources?: TaxonProfileReaderSource[]
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
  titleZh?: string
  text: string
  textZh?: string
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
  dekZh?: string
  overviewZh?: string
  summaryZh?: string
  theme: string
  durationMinutes: number
  featured: boolean
  evidenceStatus: 'available-with-limitations' | 'blocked-pending-step-evidence'
  steps: StoryStep[]
}

export interface SearchResult {
  id: string
  kind: 'taxon' | 'event' | 'story' | 'tree' | 'interval' | 'place' | 'occurrence'
  title: string
  titleZh?: string
  subtitle: string
  subtitleZh?: string
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
  nodeId: string | null
  mappingStatus: 'mapped' | 'unmapped'
  displayOnTree: boolean
  topologyHypothesisId: string
  cladePackageId: string
  locator?: { pages?: string; table?: string; figure?: string }
  compatibilityGroup: string
  note: string
}

export type EvidenceClaimType = 'taxonomy' | 'evolution' | 'topology' | 'divergence-time' | 'fossil-range' | 'morphology' | 'ecology' | 'biogeography' | 'event-mechanism'

export interface EvidenceClaim {
  id: string
  subjectId: string
  claimType: EvidenceClaimType
  claimKind: 'scientific' | 'editorial'
  statement: string
  confidence: ConfidenceLevel
  confidenceRationale: string
  confidenceRationaleZh: string
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
  titleZh?: string
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
  licenseNote: string
  contentOrigin?: 'external-source' | 'ai-assisted-interpretive-reconstruction'
  interpretiveNotice?: string
  interpretiveNoticeZh?: string
  uncertainty?: string
  uncertaintyZh?: string
  evidenceReferenceIds?: string[]
  provenancePath?: string
  asset?: {
    path: string
    url?: string
    bytes: number
    sha256: string
    width: 1280
    height: 800
    mediaType: 'image/webp'
  }
}
