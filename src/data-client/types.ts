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
  definition: { en: string; zh: string }
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

/** A published, source-bounded interval used to place an existing research scene in time. */
export interface RuntimeRangeEvidence {
  id: string
  entityId: string
  taxonomicConcept: string
  geographicScope: string
  olderMa: number
  youngerMa: number
  status: 'available' | 'withheld-pending-provenance'
  confidence: 'low' | 'medium' | 'high' | 'contested'
  claimIds: string[]
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
  file?: RuntimeFile
  canonicalFileInventory: Array<Omit<RuntimeFile, 'url'>>
  delivery: {
    profile: 'web-light' | 'native-full'
    completeRows: boolean
    publishedFileCount: number
    canonicalFileCount: 1
  }
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
  canonicalFileInventory: Array<Omit<CatalogueResourcePackPayloadFile, 'url'> & { role: 'col-partition' | 'upstream-only' }>
}

export type AviListMappingStatus = 'accepted' | 'official-current-name-redirect' | 'ambiguous' | 'unmatched' | 'non-applicable'

export interface AviListBirdRecord {
  colId: string
  colSourceDatasetId: string
  colScientificName: string
  status: AviListMappingStatus
  mappingBasis?: string
  avibaseId?: string
  officialScientificName?: string
  officialAuthority?: string
  officialEnglishName?: string
  officialOrder?: string
  officialFamily?: string
  officialProtonym?: string
  sourceRow?: number
}

export interface RuntimeAviListNomenclatureCollection {
  schemaVersion: 1
  id: 'avilist-v2025b-avibase-concepts'
  recordType: 'release-pinned-exact-avian-authority-crosswalk'
  provider: 'AviList Core Team'
  packageId: 'crocodylomorphs-birds'
  source: Record<string, string | number>
  scope: Record<string, string>
  counts: {
    packageAcceptedSpecies: number
    colAcceptedAves: number
    colAcceptedCrocodylia: number
    avilistAcceptedSpecies: number
    accepted: number
    officialCurrentNameRedirect: number
    ambiguous: number
    unmatched: number
    nonApplicable: number
    uniqueMatchedAviListSpecies: number
    manyToOneColLinks: number
    upstreamOnly: number
  }
  files: CatalogueResourcePackPayloadFile[]
  upstreamOnlyFiles: CatalogueResourcePackPayloadFile[]
  totalCompressedBytes: number
  totalSourceBytes: number
  descriptorSha256: string
  delivery: {
    profile: 'web-light' | 'native-full'
    completeRows: boolean
    publishedFileCount: number
    canonicalFileCount: number
  }
  limitations: string[]
}

export type ItisMappingStatus = 'accepted' | 'synonym-current-name-redirect' | 'ambiguous' | 'unmatched' | 'non-applicable'

export interface ItisNomenclatureName {
  tsn: string
  scientificName: string
  usage: string
  credibilityRating?: string | null
  completenessRating?: string | null
  currencyRating?: string | null
  updateDate?: string | null
}

export interface ItisNomenclatureCandidate {
  /** Current runtime rows use nested currentName; older sidecars used flat fields. */
  currentName?: Pick<ItisNomenclatureName, 'tsn' | 'scientificName'>
  tsn?: string
  scientificName?: string
  evidence?: unknown[]
}

export interface ItisNomenclatureRecord {
  status: ItisMappingStatus
  colUsageId: string
  colScientificName: string
  colAuthorship?: string | null
  exactMatchName?: string
  currentName?: ItisNomenclatureName | null
  candidates?: ItisNomenclatureCandidate[]
}

export type RuntimeItisNomenclatureCollectionId =
  | 'itis-2026-08-26-tsn-crosswalk'
  | 'itis-nematoda-tsn-crosswalk'
  | 'itis-annelida-tsn-crosswalk'
  | 'itis-mollusca-brachiopoda-tsn-crosswalk'
  | 'itis-porifera-cnidaria-tsn-crosswalk'
  | 'itis-echinodermata-tsn-crosswalk'
  | 'itis-crustacea-tsn-crosswalk'
  | 'itis-insecta-tsn-crosswalk'
  | 'itis-myriapoda-tsn-crosswalk'
  | 'itis-chelicerata-tsn-crosswalk'
  | 'itis-reptilia-tsn-crosswalk'
  | 'itis-crocodylia-tsn-crosswalk'
  | 'itis-perissodactyla-tsn-crosswalk'
  | 'itis-cetartiodactyla-tsn-crosswalk'
  | 'itis-primates-tsn-crosswalk'
  | 'itis-carnivora-tsn-crosswalk'
  | 'itis-other-mammals-tsn-crosswalk'
  | 'itis-actinopterygii-tsn-crosswalk'
  | 'itis-chondrichthyes-tsn-crosswalk'
  | 'itis-agnatha-myxini-tsn-crosswalk'
  | 'itis-sarcopterygii-tsn-crosswalk'
  | 'itis-collembola-protura-tsn-crosswalk'

export type RuntimeItisPackageScope =
  | 'mollusca-brachiopoda'
  | 'porifera-cnidaria'
  | 'echinodermata'
  | 'crustacea'
  | 'insecta'
  | 'myriapoda'
  | 'chelicerata'
  | 'reptilia-non-crocodylia'
  | 'crocodylia'
  | 'perissodactyla'
  | 'cetartiodactyla'
  | 'primates'
  | 'carnivora'
  | 'other-mammals'
  | 'actinopterygii'
  | 'chondrichthyes'
  | 'agnatha-myxini'
  | 'sarcopterygii'
  | 'amphibia'
  | 'collembola-protura'

export interface RuntimeItisNomenclatureCollection {
  schemaVersion: 1
  id: RuntimeItisNomenclatureCollectionId
  recordType: 'release-pinned-exact-nomenclatural-crosswalk'
  provider: 'Integrated Taxonomic Information System'
  packageId: string
  source: Record<string, unknown>
  matching: Record<string, unknown>
  counts: {
    total: number
    accepted: number
    synonymCurrentNameRedirect: number
    ambiguous: number
    unmatched: number
    itisCurrentSpecies?: number
    itisSpeciesSynonymLinks?: number
    itisApplicableCurrentSpecies?: number
    itisApplicableSpeciesSynonymLinks?: number
    itisUpstreamOnly: number
  }
  files: CatalogueResourcePackPayloadFile[]
  upstreamOnlyFiles: CatalogueResourcePackPayloadFile[]
  canonicalFileInventory: Array<Omit<CatalogueResourcePackPayloadFile, 'url'> & { role: 'col-partition' | 'upstream-only' }>
  descriptorSha256: string
  delivery: {
    profile: 'web-light' | 'native-full'
    completeRows: boolean
    publishedFileCount: number
    canonicalFileCount: number
  }
  evidenceBoundary: { en: string; zh: string }
  limitations: string[]
}

export type AuthorityArchiveCollectionId =
  | 'mdd-mammalia-perissodactyla-archive-crosswalk'
  | 'mdd-mammalia-cetartiodactyla-archive-crosswalk'
  | 'mdd-mammalia-primates-archive-crosswalk'
  | 'mdd-mammalia-carnivora-archive-crosswalk'
  | 'mdd-mammalia-other-mammals-archive-crosswalk'
  | 'ioc-aves-archive-crosswalk'
  | 'worms-mollusca-archive-crosswalk'
  | 'worms-porifera-archive-crosswalk'
  | 'worms-cnidaria-archive-crosswalk'
  | 'worms-hydrozoa-archive-crosswalk'
  | 'worms-annelida-archive-crosswalk'
  | 'worms-nematoda-archive-crosswalk'
  | 'worms-crustacea-archive-crosswalk'
  | 'worms-radiozoa-archive-crosswalk'
  | 'worms-chaetognatha-archive-crosswalk'
  | 'worms-rhombozoa-archive-crosswalk'
  | 'worms-loricifera-archive-crosswalk'
  | 'worms-gnathostomulida-archive-crosswalk'
  | 'worms-priapulida-archive-crosswalk'
  | 'osf-orthoptera-archive-crosswalk'
  | 'chilobase-archive-crosswalk'
  | 'scorpion-files-archive-crosswalk'
  | 'wsc-spiders-archive-crosswalk'
  | 'systema-dipterorum-archive-crosswalk'
  | 'trichomycetes-archive-crosswalk'
  | 'cilcat-1113-archive-crosswalk'
  | 'eumycetozoa-archive-crosswalk'
  | 'gymnodinium-archive-crosswalk'
  | 'reptiledb-turtles-lepidosaurs-extension'
  | 'reptiledb-crocodylia-extension'

export interface AuthorityArchiveName {
  id: string
  nameId?: string
  scientificName: string
  authorship: string
  status: string
  url: string
  parentId?: string | null
  sourceScope?: 'orphan-exception'
  sourceScopeReason?: string
}

export interface AuthorityArchiveRecord {
  colId: string | null
  colScientificName: string | null
  colAuthorship: string | null
  status: 'accepted' | 'redirect' | 'ambiguous' | 'unmatched' | 'withheld' | 'upstream-only' | 'source-only'
  matchedName: AuthorityArchiveName | null
  acceptedName: AuthorityArchiveName | null
  candidates: AuthorityArchiveName[]
  mappingBasis: string
  sourceRows: Array<{ member: string; row: number }>
}

export interface RuntimeAuthorityArchiveCollection {
  schemaVersion: 1
  id: AuthorityArchiveCollectionId
  recordType: 'release-pinned-authority-archive-crosswalk'
  provider: string
  packageId: string
  source: { license: 'CC-BY-4.0' | 'CC-BY' | 'CC0-1.0' | 'cc by'; [key: string]: unknown }
  scope: Record<string, unknown>
  matching: Record<string, unknown>
  counts: { total: number; accepted: number; redirect: number; ambiguous: number; unmatched: number; withheld: number; upstreamOnly: number }
  files: CatalogueResourcePackPayloadFile[]
  upstreamOnlyFiles: CatalogueResourcePackPayloadFile[]
  canonicalFileInventory: Array<Omit<CatalogueResourcePackPayloadFile, 'url'> & { role: 'col-partition' | 'upstream-only' }>
  descriptorSha256: string
  delivery: { profile: 'web-light' | 'native-full'; completeRows: boolean; publishedFileCount: number; canonicalFileCount: number }
  evidenceBoundary: { en: string; zh: string }
  limitations: string[]
}

export type RuntimePackageNomenclatureCollection = RuntimeWormsNomenclatureCollection | RuntimeWfoPlantNomenclatureCollection | RuntimeAviListNomenclatureCollection | RuntimeItisNomenclatureCollection | RuntimeAuthorityArchiveCollection

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
  paleotopography?: RuntimePaleotopographyCollection
  /** Compatibility metadata for period descriptions and older releases. */
  snapshots: RuntimeMapSnapshot[]
}

export interface RuntimePaleotopographyFrame {
  id: string
  archiveNominalAgeMa: number
  memberPath: string
  memberBytes: number
  memberCompressedBytes: number
  memberSha256: string
  format: 'NETCDF4_CLASSIC'
  internalDescriptionAgeMa: number | null
  internalDescription: string
  ageDisclosure: string
  displayAgeRangeMa: { youngest: number; oldest: number }
  elevation: {
    variable: string
    unit: 'm'
    minimum: number
    maximum: number
    maskedCells: number
    nanCells: number
    integerMetreCells: number
  }
  sourceFullGrid: {
    bytes: number
    sha256: string
    decodedBytes: number
    decodedSha256: string
    width: 3601
    height: 1801
    cellCount: 6485401
    resolutionDegrees: 0.1
  }
  grid: Omit<RuntimeFile, 'encoding' | 'mediaType'> & {
    url: string
    bytes: number
    sha256: string
    sourceBytes: number
    sourceSha256: string
    width: number
    height: number
    cellCount: number
    resolutionDegrees: 0.1 | 0.3
    derivation: 'lossless-full-source-grid' | 'exact-decimation-every-third-source-row-and-column'
    gridEncoding: 'gzip-signed-int16-little-endian-row-major'
    mediaType: 'application/octet-stream'
  }
}

export interface RuntimePaleotopographyCollection {
  id: string
  source: {
    authors: string[]
    publishedYear: number
    recordVersion: string
    doi: string
    recordUrl: string
    earthByteResourceUrl: string
    license: 'CC-BY-4.0'
    licenseUrl: string
    licenseEvidenceUrl: string
    retrievedAt: string
  }
  archive: {
    fileName: string
    contentUrl: string
    bytes: number
    officialMd5: string
    sha256: string
    netcdfMemberCount: number
    redistributed: false
  }
  grid: {
    coordinateReferenceSystem: 'geographic longitude/latitude'
    width: 3601
    height: 1801
    cellCount: 6485401
    decodedBytesPerFrame: 12970802
    encoding: 'gzip-signed-int16-little-endian-row-major'
    transformation: string
    webPreview: {
      resolutionDegrees: 0.3
      stride: 3
      width: 1201
      height: 601
      cellCount: 721801
      decodedBytesPerFrame: 1443602
      derivation: string
    }
  }
  selection: {
    ageRangeMa: { youngest: 0; oldest: 540 }
    cadenceMa: 5
    method: 'nearest-nominal-age'
    tieBreak: 'younger'
    outsideRange: 'unavailable'
    temporalInterpolation: 'none'
  }
  visualization: {
    renderer: 'client-worker-canvas-grid-layer'
    projection: 'EPSG:3857'
    tileSize: 256
    maximumNativeZoom: 4
    maximumZoomGroundSampling: string
    resampling: string
    mercatorLatitudeLimitDegrees: number
    preGeneratedTiles: 0
  }
  delivery: {
    profile: 'web-preview' | 'native-full'
    resolutionDegrees: 0.3 | 0.1
    gridBytes: number
    fullResolutionAvailableInNativeApps: true
  }
  totals: {
    frames: 109
    sourceMemberBytes: number
    independentGridGzipBytes: number
    webPreviewGridGzipBytes: number
    decodedGridBytes: number
    webPreviewDecodedGridBytes: number
  }
  scientificLimitations: string[]
  frames: RuntimePaleotopographyFrame[]
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

export interface CatalogueIndexFungorumIdentifierRecord {
  colId: string
  sourceDatasetId: '2073' | '1148'
  indexFungorumId: string
  indexFungorumUrl: string
  mappingBasis: 'exact-source-dataset-and-verbatim-label' | 'checklistbank-source-record'
  status: 'accepted'
}

export interface CatalogueIndexFungorumResourcePackExtension {
  id: 'index-fungorum-identifiers'
  recordType: 'external-name-identifier-crosswalk'
  provider: 'Species Fungorum / Index Fungorum'
  source: {
    catalogueRelease: 'COL26.8'
    catalogueReleaseDate: string
    checklistBankDatasetKey: number
    sourceDatasets: Array<{
      datasetId: '2073' | '1148'
      title: string
      version: string
      issued: string
      doi: string
      versionDoi: string
      license: 'CC-BY-4.0'
      licenseUrl: string
      citation: string
    }>
    retrievedAt: string
    indexFungorumUrlTemplate: string
    canonicalCrosswalkPath: string
    canonicalCrosswalkBytes: number
    canonicalCrosswalkSha256: string
    canonicalCrosswalkSourceBytes: number
    canonicalCrosswalkSourceSha256: string
    requestIntegrity: Record<string, string | number>
    rightsBoundary: string
  }
  eligibility: string
  counts: {
    acceptedSpecies: number
    eligible: number
    accepted: number
    redirect: 0
    ambiguous: 0
    unmatched: 0
    withheld: 0
    upstreamOnly: number
  }
  sourceComposition: { '2073': number; '1148': number }
  fields: string[]
  files: CatalogueResourcePackPayloadFile[]
  totalCompressedBytes: number
  totalSourceBytes: number
  limitations: string[]
  integration: {
    targetManifestPath: string
    clientParityRequirement: string
    lookup: {
      strategy: 'lexicographic-colId-range-v1'
      ordering: string
      requestPolicy: string
      forbiddenBehavior: string
    }
  }
}

export interface CatalogueForaminiferaAuthorityRecord {
  colId: string
  sourceDatasetId: '1157'
  colScientificName: string
  colAuthorship?: string | null
  sourceId: string
  sourceAphiaId: string
  sourceUrl: string
  scientificName: string
  authorship?: string | null
  rank: 'species'
  status: 'accepted'
  acceptedSourceId: null
  acceptedScientificName: null
  acceptedSourceUrl: null
  mappingBasis: 'checklistbank-source-record'
  sourceResponseSha256: string
}

export interface CatalogueForaminiferaResourcePackExtension {
  id: 'foraminifera-wfd-identifiers'
  recordType: 'external-name-identifier-crosswalk'
  provider: 'World Foraminifera Database (WoRMS) through ChecklistBank'
  source: Record<string, unknown> & { license: 'CC-BY-4.0' }
  eligibility: string
  counts: {
    eligible: 47975
    resolved: 47975
    acceptedSpecies: 47975
    accepted: 47975
    redirects: 0
    ambiguous: 0
    unmatched: 0
    withheld: 0
    upstreamOnly: null
  }
  files: CatalogueResourcePackPayloadFile[]
  canonicalFileInventory: CatalogueResourcePackPayloadFile[]
  delivery: {
    profile: 'web-light' | 'native-full'
    completeRows: boolean
    publishedFileCount: number
    canonicalFileCount: number
  }
  totalCompressedBytes: number
  totalSourceBytes: number
  limitations: string[]
  integration: {
    clientParityRequirement: string
    lookup: {
      strategy: 'lexicographic-colId-range-v1'
      ordering: string
      requestPolicy: string
    }
  }
}

export type CatalogueItisOtherAnimalsScope =
  | 'nematoda'
  | 'annelida'
  | 'platyhelminthes'
  | 'rotifera'
  | 'bryozoa'
  | 'nemertea'
  | 'tunicata-cephalochordata'
  | 'acanthocephala'
  | 'entoprocta'
  | 'tardigrada'
  | 'chaetognatha'
  | 'ctenophora'
  | 'kinorhyncha'
  | 'gastrotricha'
  | 'priapulida'
  | 'onychophora'
  | 'hemichordata'
  | 'sipuncula'
  | 'nematomorpha'
  | 'phoronida'
  | 'gnathostomulida'
  | 'loricifera'
  | 'micrognathozoa'
  | 'cycliophora'
  | 'placozoa'
  | 'xenacoelomorpha'
  | 'orthonectida'
  | 'dicyemida'

export interface CatalogueItisOtherAnimalsResourcePackExtension {
  id: `itis-${CatalogueItisOtherAnimalsScope}-tsn-crosswalk`
  recordType: 'release-pinned-exact-nomenclatural-crosswalk'
  provider: 'Integrated Taxonomic Information System'
  source: Record<string, unknown> & { license: 'CC0-1.0' }
  scope: Record<string, unknown>
  matching: Record<string, unknown>
  counts: {
    eligible: number
    records: number
    accepted: number
    redirects: number
    ambiguous: number
    unmatched: number
    withheld: 0
    upstreamOnly: number
    nonApplicable: number
  }
  files: CatalogueResourcePackPayloadFile[]
  canonicalFileInventory: Array<CatalogueResourcePackPayloadFile & { role: 'col-partition' | 'upstream-only' }>
  delivery: {
    profile: 'web-light' | 'native-full'
    completeRows: boolean
    publishedFileCount: number
    canonicalFileCount: number
  }
  totalCompressedBytes: number
  totalSourceBytes: number
  limitations: string[]
  integration: {
    clientParityRequirement: string
    lookup: {
      strategy: 'lexicographic-colId-range-v1'
      ordering: string
      requestPolicy: string
    }
  }
}

export type CatalogueItisProtistsScope =
  | 'ciliophora'
  | 'apicomplexa'
  | 'dinoflagellata'
  | 'euglenozoa'
  | 'cercozoa'
  | 'haptophyta'
  | 'ochrophyta'
  | 'amoebozoa'
  | 'rhodophyta'
  | 'oomycota'
  | 'cryptophyta'
  | 'choanoflagellatea'
  | 'bigyra'
  | 'perkinsozoa'
  | 'labyrinthulomycetes'
  | 'opalozoa'
  | 'radiolaria'
  | 'metamonada'
  | 'chlorophyta'
  | 'glaucophyta'
  | 'picozoa'
  | 'telonemia'
  | 'centrohelida'
  | 'katablepharidota'
  | 'hemimastigophora'

export interface CatalogueItisProtistsResourcePackExtension extends Omit<CatalogueItisOtherAnimalsResourcePackExtension, 'id'> {
  id: `itis-${CatalogueItisProtistsScope}-tsn-crosswalk`
}

export interface CatalogueAuthorityArchiveResourcePackExtension {
  schemaVersion: 1
  id: AuthorityArchiveCollectionId
  recordType: 'release-pinned-authority-archive-crosswalk'
  provider: string
  packageId: string
  source: { license: 'CC-BY-4.0'; [key: string]: unknown }
  scope: Record<string, unknown>
  matching: Record<string, unknown>
  counts: { total: number; accepted: number; redirect: number; ambiguous: number; unmatched: number; withheld: number; upstreamOnly: number }
  files: CatalogueResourcePackPayloadFile[]
  upstreamOnlyFiles: CatalogueResourcePackPayloadFile[]
  canonicalFileInventory: Array<CatalogueResourcePackPayloadFile & { role: 'col-partition' | 'upstream-only' }>
  descriptorSha256: string
  totalCompressedBytes: number
  totalSourceBytes: number
  delivery: { profile: 'web-light' | 'native-full'; completeRows: boolean; publishedFileCount: number; canonicalFileCount: number }
  evidenceBoundary: { en: string; zh: string }
  limitations: string[]
  integration: { clientParityRequirement: string; lookup: { strategy: 'lexicographic-colId-range-v1'; ordering: string; requestPolicy: string } }
}

export type CatalogueResourcePackExtension = CatalogueLpsnResourcePackExtension | CatalogueIctvResourcePackExtension | CatalogueWfoPlantResourcePackExtension | CatalogueIndexFungorumResourcePackExtension | CatalogueForaminiferaResourcePackExtension | CatalogueItisOtherAnimalsResourcePackExtension | CatalogueItisProtistsResourcePackExtension | CatalogueAuthorityArchiveResourcePackExtension

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

export interface CatalogueSanbiDescriptionRecord {
  colId: string
  wfoId: string
  packageId: string
  descriptions: Array<{
    type: 'Morphology' | 'Diagnostic' | 'Habitat'
    text: string
    sourceId: string
    citation: string
    rowNumber: number
  }>
}

export interface CataloguePlaziDescriptionRecord {
  colId: string
  scientificName: string
  descriptions: Array<{
    type: 'diagnosis' | 'description' | 'biology_ecology'
    text: string
    language: string
    citation: string
    sourceAuthorship?: string
    sourceLanguage?: string
    treatmentUrl: string
    rowNumber: number
    archiveSha256: string
    sourceArchive: string
    mappingBasis: string
    limitations: string
  }>
}

export interface CatalogueRuntimeManifest {
  plaziDescriptions?: {
    source: { provider: string; title: string; retrievedAt: string; license: string; licenseUrl: string; sourceUrl: string; limitations: string[] }
    routes: Record<string, string[]>
    files: CatalogueRuntimeFile[]
  }
  sanbiDescriptions?: {
    source: { provider: string; title: string; sourceVersion: string; issued: string; license: string; licenseUrl: string; sourceUrl: string; limitations: string[] }
    routes: Record<string, string[]>
    files: CatalogueRuntimeFile[]
  }
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
    downloadTemplate?: string
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
  edition?: 'full-web' | 'github-pages-preview'
  previewScope?: {
    packageIds: string[]
    taxonIds: string[]
    storyIds: string[]
    eventIds: string[]
    catalogue: 'omitted'
    paleotopography: string
  }
  deliveryProfile: 'web-light' | 'native-full'
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
    paleotopographyFrameCount?: number
    paleotopographyGridCount?: number
    paleotopographyGridBytes?: number
    paleotopographyDeliveryProfile?: 'web-preview' | 'native-full'
    paleotopographyTileCount?: number
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
  downloads: { available: boolean; template?: string }
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
