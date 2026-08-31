export interface RuntimeFile {
  url: string
  bytes?: number
  sourceBytes?: number
  sha256?: string
  sourceSha256?: string
  encoding?: 'gzip'
  mediaType?: 'application/json' | 'application/x-ndjson' | 'image/webp'
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

export interface RuntimeResearchExample {
  id: string
  type: 'explorer-preset' | 'comparison'
  title: { en: string; zh: string }
  description: { en: string; zh: string }
  route: string
  entityIds: string[]
  claimIds: string[]
  evidenceStatus: 'available-with-limitations'
  limitations: string[]
}

export interface RuntimeResearchExamples {
  schemaVersion: 1
  packageId: string
  examples: RuntimeResearchExample[]
}

export interface RuntimeWormsNomenclatureCollection {
  id: 'worms-aphiaid-crosswalk'
  recordType: 'external-name-identifier-crosswalk'
  provider: 'WoRMS'
  snapshotBoundary: 'date-pinned-continuously-updated-service'
  source: {
    catalogueRelease: string
    catalogueReleaseDate: string
    wormsDatasetId: string
    retrievedAt: string
    license: 'CC-BY-4.0'
    citationDoi: string
    sourceLedgerPath: string
    sourceLedgerSha256: string
  }
  matching: string
  counts: {
    total: number
    accepted: number
    acceptedNameRedirect: number
    ambiguous: number
    unmatched: number
    withheld: number
  }
  fields: string[]
  file: RuntimeFile
  evidenceBoundary: { en: string; zh: string }
}

export interface RuntimeNomenclaturalSidecar {
  schemaVersion: 1
  sidecarType: 'date-pinned-exact-nomenclatural-crosswalk'
  packageId: string
  counts: RuntimeWormsNomenclatureCollection['counts']
  records: Record<'accepted' | 'acceptedNameRedirect' | 'ambiguous' | 'unmatched' | 'withheld', unknown[]>
}

export type WfoPlantMappingStatus = 'accepted' | 'redirect' | 'ambiguous' | 'unmatched' | 'withheld' | 'upstream-only'

export interface WfoPlantRecord {
  colId?: string
  packageId?: 'angiospermae' | 'gymnosperms' | 'early-land-plants' | 'other-plants'
  colScientificName?: string
  colAuthorship?: string
  colSourceDatasetId?: string
  status: WfoPlantMappingStatus
  mappingBasis?: string
  reason?: string
  wfoId?: string
  wfoUrl?: string
  wfoSnapshotId?: string
  wfoSnapshotUrl?: string
  wfoScientificName?: string
  wfoAuthorship?: string
  wfoParentId?: string
  wfoExtinct?: boolean
  candidateWfoIds?: string[]
}

export interface WfoPlantCounts {
  total: number
  accepted: number
  redirect: number
  ambiguous: number
  unmatched: number
  withheld: number
}

export interface WfoPlantSource {
  catalogueRelease: string
  catalogueReleaseDate: string
  checklistBankDatasetKey: number
  wfoVersion: string
  wfoIssued: string
  versionDoi: string
  conceptDoi: string
  license: 'CC0-1.0'
  canonicalCrosswalkPath: string
  canonicalCrosswalkSha256: string
  canonicalCrosswalkBytes: number
  canonicalCrosswalkSourceSha256: string
  canonicalCrosswalkSourceBytes: number
  sourceLedgerPath: string
  sourceLedgerSha256: string
  archiveSha256: string
  wfoAcceptedSpecies: number
  upstreamOnly: number
}

export interface RuntimeWfoPlantNomenclatureCollection {
  schemaVersion: 1
  id: 'wfo-plant-list-crosswalk'
  recordType: 'release-pinned-exact-plant-name-crosswalk'
  provider: 'World Flora Online Plant List'
  packageId: 'angiospermae' | 'gymnosperms' | 'early-land-plants'
  source: WfoPlantSource
  matching: Record<string, string | string[]>
  counts: WfoPlantCounts
  fields: string[]
  files: CatalogueResourcePackPayloadFile[]
  totalCompressedBytes: number
  totalSourceBytes: number
  evidenceBoundary: string
  descriptorSha256: string
}

export type RuntimePackageNomenclatureCollection = RuntimeWormsNomenclatureCollection | RuntimeWfoPlantNomenclatureCollection

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
  researchExampleCount: number
  researchClaimLinkCount: number
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
  catalogueCoverage: {
    releaseAlias: string
    strictPredicate: string
    acceptedSpeciesCount: number
    browseRootIds: string[]
    ownershipManifestSha256: string
    ownershipRuntimePath: string
    evidenceBoundary: string
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
  files: Record<string, RuntimeFile> & { researchExamples: RuntimeFile }
  assets?: RuntimeFile[]
  nomenclatureCollections?: RuntimePackageNomenclatureCollection[]
  occurrences: Array<RuntimeFile & { records: number; period: string; packageId: string }>
}

export type RuntimeMediaAsset = Omit<import('../types').MediaAsset, 'asset'> & {
  asset?: NonNullable<import('../types').MediaAsset['asset']> & RuntimeFile
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

export interface RuntimeMapObservationDataset {
  id: import('../types').CaoObservationDatasetId
  title: string
  titleZh: string
  role: import('../types').CaoObservationRole
  sourceFile: string
  records: number
  reconstructableRecords: number
  rawOnlyRecords: number
  files: Array<RuntimeFile & { records: number; bucket?: string }>
}

export interface RuntimeMapObservations {
  ageFilter: string
  coordinatePolicy: string
  totalRecords: number
  reconstructedRecords: number
  rawOnlyRecords: number
  datasets: Record<import('../types').CaoObservationDatasetId, RuntimeMapObservationDataset>
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
  observations?: RuntimeMapObservations
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

export type CatalogueTaxonRecord =
  | (CatalogueHierarchyNodeRecord & { projection: 'accepted-species-hierarchy' })
  | (CatalogueTargetRecord & { projection: 'resolution-target' })

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

export interface CatalogueSpeciesCoverageEntry {
  id: string
  kind: 'static-package' | 'nomenclatural-resource-pack' | 'catalogue-only'
  title: string
  titleZh: string
  scope?: string
  scopeZh?: string
  disclaimer?: string
  disclaimerZh?: string
  acceptedSpeciesCount: number
  browseRootIds: string[]
  zeroAssignmentReason?: string
  resourcePackManifestPath?: string
}

export interface CatalogueNomenclaturalRecord {
  id: string
  parentId: string
  scientificName: string
  authorship: string | null
  rank: 'species'
  status: 'accepted'
  sourceDatasetId: string | null
}

export interface CatalogueLpsnIdentifierRecord {
  colId: string
  lpsnId: string
  lpsnUrl: string
  mappingBasis: 'checklistbank-source-record'
  status: 'resolved'
}

export interface CatalogueIctvVirusIsolate {
  isolateId: string
  isolateUrl: string
  role: 'exemplar' | 'additional'
  virusNames: string | null
  abbreviations: string | null
  isolateDesignation: string | null
  genbankAccessions: string | null
  accessionsUrl: string | null
  genomeCoverage: string
  genome: string
  hostSource: string
}

export interface CatalogueIctvVirusRecord {
  colId: string | null
  scientificName: string
  mappingStatus: 'accepted' | 'upstream-only'
  mappingBasis: 'exact-unique-current-species-name-and-ictv-id' | 'no-col26.8-accepted-species-record'
  ictvTaxonId: string
  ictvTaxonUrl: string
  taxonomy: Record<'realm' | 'subrealm' | 'kingdom' | 'subkingdom' | 'phylum' | 'subphylum' | 'class' | 'subclass' | 'order' | 'suborder' | 'family' | 'subfamily' | 'genus' | 'subgenus', string | null>
  genome: string
  lastChange: string
  mslOfLastChange: number
  proposalForLastChange: string | null
  isolates: CatalogueIctvVirusIsolate[]
}

export interface CatalogueResourcePackPayloadFile extends RuntimeFile {
  path: string
  records: number
  bytes: number
  sourceBytes: number
  sha256: string
  sourceSha256: string
  minColId?: string
  maxColId?: string
  minWfoId?: string
  maxWfoId?: string
}

export interface CatalogueLpsnResourcePackExtension {
  id: 'lpsn-identifiers'
  recordType: 'external-name-identifier-crosswalk'
  provider: 'LPSN'
  source: {
    catalogueRelease: string
    catalogueReleaseDate: string
    checklistBankDatasetKey: number
    sourceDatasetKey: number
    sourceDatasetVersion: string
    retrievedAt: string
    endpointTemplate: string
    lpsnUrlTemplate: string
    informationUrl: string
    license: 'CC-BY-SA-4.0'
    licenseUrl: string
    citation: string
    canonicalCrosswalkPath: string
    canonicalCrosswalkSha256: string
    requestIntegrity: {
      algorithm: 'sha256'
      responseHashBasis: string
      requestCount: number
      requestLedgerSha256: string
    }
  }
  eligibility: string
  counts: { eligible: number; resolved: number; withheld: number }
  fields: string[]
  files: CatalogueResourcePackPayloadFile[]
  totalCompressedBytes: number
  totalSourceBytes: number
  limitations: string[]
}

export interface CatalogueIctvResourcePackExtension {
  id: 'ictv-virus-metadata'
  recordType: 'official-taxonomy-and-virus-metadata-crosswalk'
  provider: 'ICTV'
  source: {
    catalogueRelease: string
    catalogueReleaseDate: string
    checklistBankDatasetKey: number
    sourceDatasetKey: number
    retrievedAt: string
    informationUrl: string
    citationUrl: string
    license: 'CC-BY-4.0'
    licenseUrl: string
    citation: string
    files: Array<{
      role: string
      fileName: string
      version: string
      releaseDate: string
      url: string
      landingPage: string
      doi: string
      bytes: number
      sha256: string
      zenodoMd5: string
      lastModified: string
      etag: string
    }>
    canonicalCrosswalkPath: string
    canonicalCrosswalkSha256: string
    canonicalCrosswalkBytes: number
    canonicalCrosswalkSourceSha256: string
    canonicalCrosswalkSourceBytes: number
    fileIntegrity: {
      algorithm: 'sha256'
      officialFileLedgerBytes: number
      officialFileLedgerSha256: string
    }
  }
  eligibility: string
  matching: Record<string, string>
  counts: {
    acceptedSpecies: number
    eligible: number
    accepted: number
    redirect: number
    ambiguous: number
    unmatched: number
    withheld: number
    officialSpecies: number
    upstreamOnly: number
    vmrIsolates: number
    exemplarIsolates: number
    additionalIsolates: number
  }
  upstreamOnlySpecies: string[]
  fields: string[]
  files: CatalogueResourcePackPayloadFile[]
  totalCompressedBytes: number
  totalSourceBytes: number
  limitations: string[]
}

export interface CatalogueWfoPlantResourcePackExtension {
  id: 'wfo-plant-list-crosswalk'
  recordType: 'release-pinned-exact-plant-name-crosswalk'
  provider: 'World Flora Online Plant List'
  source: WfoPlantSource
  eligibility: string
  matching: Record<string, string | string[]>
  counts: WfoPlantCounts & {
    colAcceptedPlantSpecies: number
    packageColRecords: number
    wfoAcceptedSpecies: number
    upstreamOnly: number
    records: number
  }
  fields: string[]
  partitions: Array<{ id: string; colOwnership: string | null; records: number; files: CatalogueResourcePackPayloadFile[] }>
  files: CatalogueResourcePackPayloadFile[]
  totalCompressedBytes: number
  totalSourceBytes: number
  limitations: string[]
}

export type CatalogueResourcePackExtension = CatalogueLpsnResourcePackExtension | CatalogueIctvResourcePackExtension | CatalogueWfoPlantResourcePackExtension

export interface CatalogueResourcePackManifest {
  schemaVersion: 1
  packageType: 'static-nomenclatural-resource-pack'
  packageId: string
  version: string
  title: string
  titleZh: string
  source: {
    releaseAlias: string
    releaseDate: string
    checklistBankDatasetKey: number
    strictPredicate: string
    sharedSourcesPath: string
    sharedSourcesCount: number
    sharedSourcesSha256: string
  }
  scope: string
  scopeZh: string
  disclaimer: string
  disclaimerZh: string
  browseRootIds: string[]
  acceptedSpeciesCount: number
  missingSourceDatasetId: number
  fields: string[]
  files: CatalogueResourcePackPayloadFile[]
  extensions?: CatalogueResourcePackExtension[]
  totalCompressedBytes: number
  totalSourceBytes: number
  evidenceBoundary: string
  download: string
}

export interface CatalogueOwnershipRoute {
  priority: number
  packageId: string
  kind: CatalogueSpeciesCoverageEntry['kind']
  ancestorIds: string[]
  browseRoots: Array<Pick<CatalogueHierarchyNodeRecord, 'id' | 'scientificName' | 'rank' | 'status'>>
  matchedSpecies: number
}

export interface CatalogueSpeciesOwnership {
  schemaVersion: number
  projectionType: 'exclusive-package-ownership-for-strictly-accepted-species'
  source: {
    releaseAlias: string
    releaseDate: string
    checklistBankDatasetKey: number
    acceptedSpecies: number
    strictPredicate: string
    manifestPath: string
    manifestSha256: string
  }
  packageRegistry: {
    schemaVersion: number
    datasetPackageVersion: string
    definitionsPath: string
    definitionsSha256: string
    packageCount: number
  }
  ownershipPolicy: Record<string, string>
  entries: CatalogueSpeciesCoverageEntry[]
  routes: CatalogueOwnershipRoute[]
  packageCounts: Record<string, number>
  proof: {
    expectedAcceptedSpecies: number
    visitedAcceptedSpecies: number
    assignedSpecies: number
    unmatchedSpecies: number
    ambiguousAfterPriority: number
    overlappingCandidatesBeforePriority: number
    brokenLineages: number
    packageCountSum: number
    uniqueOwnersByConstruction: number
  }
}

export interface CatalogueSpeciesOwner {
  entry: CatalogueSpeciesCoverageEntry
  route: CatalogueOwnershipRoute
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
  ownership: RuntimeFile & {
    schemaVersion: number
    projectionType: CatalogueSpeciesOwnership['projectionType']
    packageCount: number
    staticPackageCount: number
    nomenclaturalResourcePackCount: number
    catalogueOnlyPackageCount: number
    acceptedSpecies: number
    assignedSpecies: number
    unmatchedSpecies: number
  }
  resourcePacks: {
    schemaVersion: number
    packageType: CatalogueResourcePackManifest['packageType']
    packageCount: number
    acceptedSpeciesCount: number
    manifests: Record<string, RuntimeFile & { acceptedSpeciesCount: number; fileCount: number; extensionCount?: number; extensionFileCount?: number }>
    sharedSources: RuntimeFile & { count: number }
    downloadTemplate: string
  }
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
  maps: {
    manifest: RuntimeFile
    availableSnapshots: number
    frameCount?: number | null
    geometryFrameCount?: number | null
    observationDatasetCount?: number
    observationRecordCount?: number
  }
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
    ownershipPackages: number
    assignedAcceptedSpecies: number
    unmatchedAcceptedSpecies: number
    nomenclaturalResourcePacks?: number
    nomenclaturalResourcePackSpecies?: number
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

export interface RuntimeReleaseFile extends RuntimeFile {
  bytes: number
  sha256: string
}

export interface RuntimeReleaseFilesIndex {
  schemaVersion: number
  datasetVersion: string
  files: RuntimeReleaseFile[]
}

export interface RuntimeReleaseSummary {
  datasetVersion: string
  releaseBase: string
  filesIndex: string
  generatedAt: string
  bytes: number
}

export interface RuntimeReleasesIndex {
  schemaVersion: number
  retentionLimit: number
  retentionByteLimit: number
  retainedBytes: number
  releases: RuntimeReleaseSummary[]
}
