export interface RuntimeFile {
  url: string
  bytes?: number
  sourceBytes?: number
  sha256?: string
  sourceSha256?: string
  encoding?: 'gzip'
  mediaType?: 'application/json' | 'application/x-ndjson'
}

export interface RuntimeEntity {
  id: string
  entityKind: 'taxon' | 'navigation-group' | 'historical-grade' | 'informal-group' | 'hypothesis-node'
  contentLevel: 'registry-only' | 'dossier' | 'full-profile'
  externalResolutionStatus: 'resolved-exact' | 'resolved-synonym' | 'resolved-rank-variant' | 'resolved-broader' | 'resolved-narrower' | 'ambiguous' | 'not-found' | 'not-applicable'
  packageId: string
  parentId: string | null
  parentRelationshipKind: 'taxonomic-parent' | 'navigation-parent' | 'display-grouping' | 'historical-grade-membership' | 'cross-package-reference' | null
  names: { scientific: string; en: string; zh: string }
  synonyms: string[]
  rank: string
  evidenceStatus: 'strong' | 'moderate' | 'contextual' | 'contested'
}

export interface RuntimeEntityLinkageCoverage {
  sourceTotal: number
  linkedOccurrenceTotal: number
  linkedOccurrenceRate: number
  broadLinkTotal: number
  broadLinkRate: number
  directLinkTotal: number
  directLinkRate: number
  precisionStatement: string
  unmatchedOccurrenceTotal: number
  linkageMethods: { exactExternalId: number; acceptedName: number; higherClassification: number }
  indexedEntityCount: number
  resolutionSummary: { resolved: number; unresolved: number; needsConceptReview: number; conceptResolved: number; humanCuratorDecisions: number }
  packageCoverage: Record<string, { sourceTotal: number; linkedTotal: number; linkedRate: number | null; coverageStatus: 'sampled' | 'no-sampled-rows' }>
}

export interface RuntimePackageRegistryEntry {
  id: string
  title: string
  titleZh: string
  wave: string
  platformMaturity: 'generated' | 'validated' | 'published'
  scientificMaturity: 'generated-scaffold' | 'structured' | 'source-linked' | 'curated-draft' | 'published'
  automatedReviewStatus: 'pending' | 'passed' | 'failed'
  reviewStatus: 'not-reviewed' | 'in-review' | 'reviewed-with-caveats' | 'reviewed'
  entityCount: number
  runtimePath: string
}

export interface RuntimePackageRegistry {
  schemaVersion: number
  version: string
  schemaStatus: 'candidate' | 'frozen'
  packageCount: number
  entityCount: number
  packages: RuntimePackageRegistryEntry[]
  entityToPackage: Record<string, string>
}

export interface RuntimeSearchEntry {
  id: string
  kind: string
  title: string
  titleEn?: string
  titleZh?: string
  packageId?: string
  route?: string
  terms: Array<string | number | null | undefined>
}

export interface RuntimePackageManifest {
  schemaVersion: number
  packageId: string
  version: string
  title: string
  titleZh: string
  platformMaturity: RuntimePackageRegistryEntry['platformMaturity']
  scientificMaturity: RuntimePackageRegistryEntry['scientificMaturity']
  automatedReviewStatus: RuntimePackageRegistryEntry['automatedReviewStatus']
  reviewStatus: RuntimePackageRegistryEntry['reviewStatus']
  effectiveReviewStatus: RuntimePackageRegistryEntry['reviewStatus'] | 'stale'
  reviewFreshness: 'not-applicable' | 'current' | 'stale'
  reviewedBy: string | null
  reviewedAt: string | null
  reviewedCommit: string | null
  reviewedContentDigest: string | null
  currentContentDigest: string
  chatgptAssisted: boolean
  reviewScope: string[]
  reviewOpenIssues: string[]
  entityCount: number
  profileCount: number
  claimCount: number
  occurrenceCount: number
  queryCoverage: {
    completeness: 'complete' | 'bounded' | 'unknown'
    upstreamReportedTotal: number | null
    rowsFetched: number
    rowsAccepted: number
    rowsRejected: number
    rowsOutsidePackage: number
    pagesFetched: number
  }
  metrics: {
    canonicalRawBytes: number
    runtimeKnowledgeCompressedBytes: number
    numberOfShards: number
    largestShardBytes: number
    initialLoadImpactBytes: number
    packageLoadTime: string
    offlineCacheSizeBytes: number
  }
  files: Record<string, RuntimeFile>
  occurrences: Array<RuntimeFile & { records: number; period: string; packageId: string }>
}

export interface OccurrenceRuntimeManifest {
  schemaVersion: number
  version: string
  totalRecords: number
  unresolvedPackageAssignmentCount: number
  assignmentMethod: string
  periods: Record<string, Array<RuntimeFile & { records: number; period: string; packageId: string }>>
  packages: Record<string, Array<RuntimeFile & { records: number; period: string; packageId: string }>>
}

export interface RuntimeMapSnapshot {
  period: string
  status: 'available' | 'withheld-pending-provenance'
  description: string
  descriptionZh: string
  reconstructionAgeMa: number | null
  model: string | null
  layers: Partial<Record<import('../types').PaleogeographyLayerId, RuntimeFile>> | null
}

export interface RuntimeMapCadenceBand {
  youngestMa: number
  oldestMa: number
  cadenceMa: number
}

export interface RuntimeMapFrame extends RuntimeFile {
  ageMa: number
  featureCount: number
}

export interface RuntimeMapLayer {
  role: string
  cadenceBands: RuntimeMapCadenceBand[]
  frames: RuntimeMapFrame[]
}

export interface RuntimeMapFrameSelection {
  layerId: import('../types').PaleogeographyLayerId
  requestedAgeMa: number
  selectedAgeMa: number
  deltaMa: number
  frame: RuntimeMapFrame
}

export interface RuntimeMapManifest {
  schemaVersion: number
  version: string
  source: {
    title: string
    version: string
    doi: string
    url: string
    license: string
    attribution: string
    retrievedAt: string
  }
  scientificLimitations: string[]
  ageRangeMa?: { youngest: number; oldest: number }
  selectionPolicy?: {
    method: 'nearest'
    tieBreak: 'younger'
    outsideRange: 'unavailable'
  }
  layers?: Record<import('../types').PaleogeographyLayerId, RuntimeMapLayer>
  /** Compatibility metadata for period descriptions and older releases. */
  snapshots: RuntimeMapSnapshot[]
}

export interface CatalogueRecord {
  normalizedName: string
  id: string
  scientificName: string
  authorship: string | null
  rank: 'species'
  status: 'accepted' | 'synonym' | 'ambiguous-synonym' | 'misapplied'
  acceptedId: string | null
  parentId: string | null
  sourceDatasetId: string | null
  classification: Array<string | null>
}

export interface CatalogueTargetRecord {
  id: string
  scientificName: string
  authorship: string | null
  rank: string
  status: 'accepted' | 'provisionally accepted'
  parentId: string | null
  sourceDatasetId: string | null
  classification: Array<string | null>
}

export interface CatalogueSourceChecklist {
  datasetId: string
  title: string | null
  shortName: string | null
  version: string | null
  publicationDate: string | null
  doi: string | null
  citation: string | null
  licenseLabel: string | null
  licenseUrl: string | null
  informationUrl: string | null
}

export interface CatalogueHierarchyNodeRecord {
  id: string
  parentId: string | null
  scientificName: string
  authorship: string | null
  rank: string
  status: 'accepted' | 'provisionally accepted'
  sourceDatasetId: string | null
  childCount: number
}

export interface CatalogueHierarchyChildRecord {
  parentId: string
  id: string
  scientificName: string
  authorship: string | null
  rank: string
  status: 'accepted' | 'provisionally accepted'
  sourceDatasetId: string | null
  childCount: number
}

export interface CatalogueRuntimeFile extends RuntimeFile {
  prefix: string
  path: string
  records: number
  url: string
}

export interface CatalogueRuntimeManifest {
  schemaVersion: number
  registryType: string
  releaseAlias: string
  releaseDate: string
  checklistBankDatasetKey: number
  doi: string
  citation: string
  scope: string
  limitations: string[]
  counts: {
    nameUsages: number
    speciesNameUsages: number
    includedNameUsages: number
    acceptedSpecies: number
    provisionallyAcceptedSpecies: number
    resolvingNameUsages: Record<'synonym' | 'ambiguous-synonym' | 'misapplied', number>
    missingSourceDatasetId: number
  }
  classificationFields: string[]
  sourceChecklists: RuntimeFile & { count: number; url: string }
  search: {
    minimumQueryLength: number
    normalization: string
    routes: Record<string, string[]>
    files: CatalogueRuntimeFile[]
    totalCompressedBytes: number
    totalSourceBytes: number
    largestShardBytes: number
  }
  acceptedTargets: {
    uniqueReferencedIds: number
    records: number
    unresolvedIds: number
    statuses: Record<string, number>
    ranks: Record<string, number>
    routing: string
    routes: Record<string, string[]>
    files: CatalogueRuntimeFile[]
    totalCompressedBytes: number
    totalSourceBytes: number
    largestShardBytes: number
    relationshipToAcceptedSpeciesCount: string
  }
  hierarchy: {
    scope: string
    routing: string
    counts: {
      nodes: number
      higherTaxonNodes: number
      acceptedSpeciesNodes: number
      roots: number
      directChildEdges: number
      acceptedSpeciesEdges: number
      statuses: Record<string, number>
      ranks: Record<string, number>
    }
    roots: Array<Pick<CatalogueHierarchyNodeRecord, 'id' | 'scientificName' | 'rank' | 'status'>>
    nodes: {
      routes: Record<string, string[]>
      files: CatalogueRuntimeFile[]
      totalCompressedBytes: number
      totalSourceBytes: number
      largestShardBytes: number
    }
    children: {
      routes: Record<string, string[]>
      files: CatalogueRuntimeFile[]
      totalCompressedBytes: number
      totalSourceBytes: number
      largestShardBytes: number
    }
    nodeRecordSchema: Record<string, string>
    childRecordSchema: Record<string, string>
  }
  relationshipToAtlas: string
  taxonIdScope: string
  curieTemplate: string
  upstreamTaxonUrlTemplate: string
}

export interface CurrentRuntimeManifest {
  schemaVersion: number
  datasetVersion: string
  appVersion: string
  publication: string
  scopeStatement: string
  includedMajorGroups: string[]
  excludedMajorGroups: string[]
  wholeLifeCoverageClaim: false
  releaseBase: string
  core: Record<string, RuntimeFile>
  packages: {
    count: number
    registry: RuntimeFile
    manifestTemplate: string
    manifests: Record<string, RuntimeFile>
  }
  occurrences: {
    manifest: RuntimeFile
    totalRecords: number
    unresolvedPackageAssignmentCount: number
  }
  maps: { manifest: RuntimeFile; availableSnapshots: number }
  catalogue: {
    manifest: RuntimeFile
    releaseAlias: string
    releaseDate: string
    acceptedSpecies: number
    resolvingNameUsages: number
    acceptedTargetRecords: number
    hierarchyNodes: number
    higherTaxonNodes: number
    hierarchyChildEdges: number
    relationshipToAtlas: string
  }
  downloads: { template: string }
  budgets: {
    coreCompressedBytes: number
    coreLimitBytes: number
    shardLimitBytes: number
    catalogueCompressedBytes: number
    pagesLimitBytes: number
  }
  evidenceBoundary: Record<string, string | Record<string, number>>
}
