export interface RuntimeFile {
  url: string
  bytes?: number
  sourceBytes?: number
  sha256?: string
  sourceSha256?: string
  encoding?: 'gzip'
  mediaType?: 'application/json'
}

export interface RuntimeEntity {
  id: string
  entityType: 'taxon-profile' | 'navigation-dossier' | 'informal-group-dossier' | 'phylogeny-node'
  packageId: string
  parentId: string | null
  names: { scientific: string; en: string; zh: string }
  synonyms: string[]
  rank: string
  evidenceStatus: 'strong' | 'moderate' | 'contextual' | 'contested'
  review: { status: string; scientificPeerReview: boolean }
}

export interface RuntimePackageRegistryEntry {
  id: string
  title: string
  titleZh: string
  wave: string
  platformMaturity: 'generated' | 'validated' | 'published'
  scientificMaturity: 'core' | 'generated-scaffold' | 'source-inventory-complete' | 'curated-draft' | 'expert-reviewed' | 'gold-v2'
  automatedReviewStatus: 'pending' | 'passed' | 'failed'
  scientificReviewStatus: 'not-reviewed' | 'in-review' | 'expert-reviewed'
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
  scientificReviewStatus: RuntimePackageRegistryEntry['scientificReviewStatus']
  entityCount: number
  profileCount: number
  claimCount: number
  occurrenceCount: number
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

export interface CurrentRuntimeManifest {
  schemaVersion: number
  datasetVersion: string
  appVersion: string
  publication: string
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
  maps: { manifest: RuntimeFile }
  downloads: { template: string }
  budgets: {
    coreCompressedBytes: number
    coreLimitBytes: number
    shardLimitBytes: number
    pagesLimitBytes: number
  }
  evidenceBoundary: Record<string, string | Record<string, number>>
}
