import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { gzipSync } from 'node:zlib'
import { strToU8, zipSync } from 'fflate'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { evaluatePackageReview } from './check-review-freshness.mjs'

const args = process.argv.slice(2)
const outputIndex = args.indexOf('--out')
const requestedOutput = outputIndex >= 0 ? args[outputIndex + 1] : 'dist/data'
if (!requestedOutput) throw new Error('--out requires a path')
const outputRoot = resolve(rootDir, requestedOutput)
const allowedRoots = [resolve(rootDir, 'dist/data'), resolve(rootDir, 'public/data')]
if (!allowedRoots.some((allowed) => outputRoot === allowed || outputRoot.startsWith(`${allowed}${sep}`))) {
  throw new Error(`Refusing to write runtime data outside dist/data or public/data: ${outputRoot}`)
}

const sourceManifest = readJson('data/manifest.json')
if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(sourceManifest.datasetVersion)) {
  throw new Error(`datasetVersion is not safe for a release path: ${sourceManifest.datasetVersion}`)
}
const startedAt = Date.now()
mkdirSync(outputRoot, { recursive: true })
const releaseHistoryPath = join(outputRoot, 'releases.json')
let previousReleaseHistory = { releases: [] }
try { previousReleaseHistory = JSON.parse(readFileSync(releaseHistoryPath, 'utf8')) } catch { /* first build */ }
const currentReleaseRoot = resolve(outputRoot, 'releases', sourceManifest.datasetVersion)
if (!currentReleaseRoot.startsWith(`${outputRoot}${sep}`)) throw new Error(`Unsafe current release path: ${currentReleaseRoot}`)
rmSync(currentReleaseRoot, { recursive: true, force: true })
const releasePrefix = `releases/${sourceManifest.datasetVersion}`
const registry = readJson('data/registry/package-registry.json')
const entities = readJson('data/registry/entities/entities.json')
const ontology = readJson('data/navigation/atlas-ontology.json')
const timeScale = readJson('data/time-scale.json')
const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
const claims = readJson('data/evidence/claims.json')
const references = readJson('data/references.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json')
const publishedStories = stories.filter((story) => story.evidenceStatus === 'available-with-limitations')
const places = readJson('data/places.json')
const media = readJson('data/media.json')
const calibrations = readJson('data/packages/mammalia/perissodactyla/phylogeny/calibrations.json')
const perissodactylPhylogeny = readJson('data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json')
const periodMetadata = readJson('data/period-map-metadata.json')
const paleogeographyProvenance = readJson('data/paleogeography/provenance.json')
const occurrenceSource = readJson('data/sources/pbdb-occurrence-bundle.json')
const treeEvidence = readJson('data/tree/evidence.json')
const canonicalRanges = readJson('data/ranges/range-evidence.json')
const linkageCoverage = readJson('data/indexes/entity-linkage-coverage.json')
const perissodactylaOccurrenceSnapshot = readJson('data/sources/perissodactyla-occurrence-snapshot-v2.json')
const claimsById = new Map(claims.map((claim) => [claim.id, claim]))
const packageById = new Map(registry.packages.map((entry) => [entry.id, entry]))
const entityById = new Map(entities.map((entry) => [entry.id, entry]))
const packageForPbdbTaxon = new Map(entities.flatMap((entry) => entry.externalIds.pbdb ? [[entry.externalIds.pbdb, entry.packageId]] : []))
const files = new Map()

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function jsonBytes(value, pretty = false) {
  return Buffer.from(`${JSON.stringify(value, null, pretty ? 2 : 0)}\n`, 'utf8')
}

function write(relativePath, bytes) {
  const normalized = `${releasePrefix}/${relativePath.replaceAll('\\', '/').replace(/^\/+/, '')}`
  const absolutePath = join(outputRoot, normalized)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, bytes)
  const record = { url: normalized, bytes: bytes.byteLength, sha256: sha256(bytes) }
  files.set(normalized, record)
  return record
}

function writeJson(relativePath, value, pretty = false) {
  return write(relativePath, jsonBytes(value, pretty))
}

function writeBootstrapJson(relativePath, value, pretty = false) {
  const normalized = relativePath.replaceAll('\\', '/').replace(/^\/+/, '')
  const bytes = jsonBytes(value, pretty)
  const absolutePath = join(outputRoot, normalized)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, bytes)
  return { url: normalized, bytes: bytes.byteLength, sha256: sha256(bytes) }
}

function writeGzipJson(relativePath, value) {
  const source = jsonBytes(value)
  const compressed = gzipSync(source, { level: 9, mtime: 0 })
  return { ...write(relativePath, compressed), sourceBytes: source.byteLength, sourceSha256: sha256(source), encoding: 'gzip', mediaType: 'application/json' }
}

function filesBelow(directory) {
  if (!statSafe(directory)?.isDirectory()) return []
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

function statSafe(path) {
  try { return statSync(path) } catch { return null }
}

function canonicalPackageBytes(packageEntry) {
  const directory = join(rootDir, packageEntry.canonicalPath)
  return filesBelow(directory).reduce((sum, path) => sum + statSync(path).size, 0)
}

function chunkRecords(records, targetSourceBytes = 6 * 1024 * 1024) {
  const chunks = []
  let current = []
  let currentBytes = 2
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (current.length && currentBytes + bytes > targetSourceBytes) {
      chunks.push(current)
      current = []
      currentBytes = 2
    }
    current.push(record)
    currentBytes += bytes
  }
  if (current.length) chunks.push(current)
  return chunks
}

function ownerForClaim(claim) {
  const [kind, subjectId] = claim.subjectId.split(':')
  if (kind === 'taxon') return entityById.get(subjectId)?.packageId ?? 'atlas-core'
  const explicit = {
    'plants-on-land': 'early-land-plants',
    'angiosperm-expansion': 'angiospermae',
    'c4-grassland-expansion': 'angiospermae',
    'tetrapods-on-land': 'tetrapod-transition',
    'dinosaur-radiation': 'dinosauria',
    'perissodactyl-radiation': 'perissodactyla',
    'eocene-oligocene-transition': 'perissodactyla',
    'early-homo-dispersal': 'primates',
    'homo-sapiens-admixture': 'primates',
  }
  return explicit[subjectId] ?? 'atlas-core'
}

function ownerForStory(story) {
  for (const step of story.steps) {
    for (const entityId of step.taxonIds ?? []) {
      const packageId = entityById.get(entityId)?.packageId
      if (packageId && packageId !== 'atlas-core') return packageId
    }
  }
  return 'atlas-core'
}

function coreSearchEntries() {
  const entityEntries = entities.map((entity) => ({
    id: entity.id,
    kind: entity.entityKind,
    title: entity.names.scientific,
    titleEn: entity.names.en,
    titleZh: entity.names.zh,
    packageId: entity.packageId,
    route: `#/explore?taxon=${encodeURIComponent(entity.id)}&view=tree`,
    terms: [entity.names.scientific, entity.names.en, entity.names.zh, entity.rank, ...entity.synonyms, ...Object.values(entity.externalIds)],
  }))
  const eventEntries = events.map((event) => ({ id: event.id, kind: 'event', title: event.title, titleZh: event.titleZh, route: `#/events?id=${event.id}`, terms: [event.title, event.titleZh, ...event.clades, ...event.regions] }))
  const storyEntries = publishedStories.map((story) => ({ id: story.id, kind: 'story', title: story.title, titleZh: story.titleZh, route: `#/stories?id=${story.id}`, terms: [story.title, story.titleZh, story.dek] }))
  const placeEntries = places.map((place) => ({ id: place.code, kind: 'place', title: place.name, titleZh: place.nameZh, route: `#/lab?country=${place.code}`, terms: [place.code, place.name, place.nameZh] }))
  const intervalEntries = timeScale.units.map((unit) => ({ id: unit.oid, kind: 'interval', title: unit.nam, titleZh: unit.namZh, route: `#/explore?age=${((unit.eag + unit.lag) / 2).toFixed(3)}&view=diversity`, terms: [unit.nam, unit.namZh, unit.itp, unit.abr] }))
  return [...entityEntries, ...eventEntries, ...storyEntries, ...placeEntries, ...intervalEntries]
}

const core = {}
core.entities = writeGzipJson('core/entity-index.json.gz', entities)
core.packages = writeGzipJson('core/package-registry.json.gz', registry)
core.navigation = writeGzipJson('core/navigation-tree.json.gz', ontology)
core.geologicalTime = writeGzipJson('core/geological-time.json.gz', timeScale)
core.search = writeGzipJson('core/search-index.json.gz', coreSearchEntries())
core.references = writeGzipJson('core/references.json.gz', references)
core.linkageCoverage = writeGzipJson('core/entity-linkage-coverage.json.gz', linkageCoverage)
core.localeZh = writeGzipJson('core/locale-zh.json.gz', {
  entities: Object.fromEntries(entities.map((entity) => [entity.id, entity.names.zh])),
  packages: Object.fromEntries(registry.packages.map((entry) => [entry.id, entry.titleZh])),
})

const occurrencesByPackagePeriod = new Map()
let occurrenceTotal = 0
let unresolvedPackageAssignmentCount = 0
for (const period of timeScale.units.filter((unit) => unit.itp === 'period')) {
  const records = readJson(`data/fossils/${period.nam.toLowerCase()}.json`)
  occurrenceTotal += records.length
  for (const record of records) {
    const packageId = record.packageId ?? packageForPbdbTaxon.get(record.tid) ?? 'atlas-core'
    if (record.packageAssignmentStatus === 'unresolved' || (!record.packageId && !packageForPbdbTaxon.has(record.tid))) unresolvedPackageAssignmentCount += 1
    const key = `${packageId}:${period.nam}`
    if (!occurrencesByPackagePeriod.has(key)) occurrencesByPackagePeriod.set(key, [])
    occurrencesByPackagePeriod.get(key).push(record)
  }
}

const occurrenceManifest = {
  schemaVersion: 5,
  version: sourceManifest.datasetVersion,
  source: occurrenceSource,
  totalRecords: occurrenceTotal,
  assignmentMethod: 'exact registry PBDB ID, then explicit PBDB higher-classification rules; unmatched records remain in atlas-core unresolved shards',
  unresolvedPackageAssignmentCount,
  periods: {},
  packages: {},
}

for (const [key, records] of [...occurrencesByPackagePeriod].sort(([left], [right]) => left.localeCompare(right))) {
  const separator = key.indexOf(':')
  const packageId = key.slice(0, separator)
  const period = key.slice(separator + 1)
  const chunks = chunkRecords(records)
  const shardRecords = chunks.map((chunk, index) => {
    const name = `${period.toLowerCase()}-${String(index).padStart(3, '0')}.json.gz`
    const file = writeGzipJson(`occurrences/${packageId}/${name}`, chunk)
    if (file.bytes > 8 * 1024 * 1024) throw new Error(`${file.url} exceeds the 8 MiB shard hard limit`)
    return { ...file, records: chunk.length, period, packageId }
  })
  occurrenceManifest.packages[packageId] ??= []
  occurrenceManifest.packages[packageId].push(...shardRecords)
  occurrenceManifest.periods[period] ??= []
  occurrenceManifest.periods[period].push(...shardRecords)
}

const packageRuntimeManifests = []
for (const packageEntry of registry.packages) {
  const packageId = packageEntry.id
  const packageReview = evaluatePackageReview(packageId)
  const packageQueryLedger = readJson(`${packageEntry.canonicalPath}/query-ledger.json`)
  const packageEntities = entities.filter((entity) => entity.packageId === packageId)
  const packageProfiles = profiles.filter((profile) => entityById.get(profile.treeNodeId)?.packageId === packageId)
  const packageClaims = claims.filter((claim) => ownerForClaim(claim) === packageId)
  const packageEvents = events.filter((event) => packageClaims.some((claim) => claim.subjectId === `event:${event.id}`))
  const packageStories = publishedStories.filter((story) => ownerForStory(story) === packageId)
  const packageMedia = media.filter((asset) => entityById.get(asset.taxonId)?.packageId === packageId)
  const packageReferenceIds = new Set([
    ...packageEntities.flatMap((entity) => entity.referenceIds),
    ...packageProfiles.flatMap((profile) => profile.referenceIds),
    ...packageClaims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)),
    ...packageStories.flatMap((story) => story.steps.flatMap((step) => step.claimLinks.flatMap((link) => claimsById.get(link.claimId)?.referenceLinks.map((referenceLink) => referenceLink.referenceId) ?? []))),
  ])
  const payloadFiles = {}
  payloadFiles.identity = writeGzipJson(`packages/${packageId}/identity.json.gz`, packageEntities)
  if (packageProfiles.length) payloadFiles.profiles = writeGzipJson(`packages/${packageId}/profiles.json.gz`, packageProfiles)
  if (packageClaims.length) payloadFiles.claims = writeGzipJson(`packages/${packageId}/claims.json.gz`, packageClaims)
  if (packageEvents.length) payloadFiles.events = writeGzipJson(`packages/${packageId}/events.json.gz`, packageEvents)
  if (packageStories.length) payloadFiles.stories = writeGzipJson(`packages/${packageId}/stories.json.gz`, packageStories)
  if (packageMedia.length) payloadFiles.media = writeGzipJson(`packages/${packageId}/media.json.gz`, packageMedia)
  const packageReferences = references.filter((reference) => packageReferenceIds.has(reference.id))
  payloadFiles.ranges = writeGzipJson(`packages/${packageId}/ranges.json.gz`, canonicalRanges.filter((range) => packageEntities.some((entity) => entity.id === range.entityId)))
  payloadFiles.localeZh = writeGzipJson(`packages/${packageId}/locale-zh.json.gz`, {
    language: 'zh',
    version: sourceManifest.datasetVersion,
    strings: Object.fromEntries(packageEntities.map((entity) => [`entity.${entity.id}.name`, entity.names.zh])),
  })
  payloadFiles.queryLedger = writeGzipJson(`packages/${packageId}/query-ledger.json.gz`, packageQueryLedger)
  payloadFiles.search = writeGzipJson(`package-search-index/${packageId}.json.gz`, [
    ...packageEntities.map((entity) => ({ id: entity.id, kind: entity.entityKind, title: entity.names.scientific, titleEn: entity.names.en, titleZh: entity.names.zh, route: `#/explore?taxon=${encodeURIComponent(entity.id)}&view=tree`, terms: [entity.names.scientific, entity.names.en, entity.names.zh, ...entity.synonyms, entity.definition.en, entity.definition.zh] })),
    ...packageProfiles.map((profile) => ({ id: profile.id, kind: 'profile', packageId, title: profile.scientificName, titleEn: profile.commonName, titleZh: profile.commonNameZh, route: `#/taxa?id=${encodeURIComponent(profile.id)}`, terms: [profile.overview, profile.evidenceSummary, ...profile.traits] })),
    ...packageClaims.map((claim) => ({ id: claim.id, kind: 'claim', title: claim.statement, route: '#/data', terms: [claim.statement, claim.confidenceRationale, claim.claimType] })),
    ...packageReferences.map((reference) => ({ id: reference.id, kind: 'reference', title: reference.title, route: '#/data', terms: [reference.title, reference.authors, reference.doi, reference.url].filter(Boolean) })),
  ])
  if (packageId === 'perissodactyla') {
    payloadFiles.phylogeny = writeGzipJson(`packages/${packageId}/phylogeny.json.gz`, perissodactylPhylogeny)
    payloadFiles.calibrations = writeGzipJson(`packages/${packageId}/calibrations.json.gz`, calibrations)
    payloadFiles.occurrenceSnapshot = writeGzipJson(`packages/${packageId}/occurrence-snapshot-v2.json.gz`, perissodactylaOccurrenceSnapshot)
  }
  const occurrenceShards = occurrenceManifest.packages[packageId] ?? []
  const knowledgeBytes = Object.values(payloadFiles).reduce((sum, file) => sum + file.bytes, 0)
  const occurrenceBytes = occurrenceShards.reduce((sum, file) => sum + file.bytes, 0)
  const manifest = {
    schemaVersion: 5,
    packageId,
    version: sourceManifest.datasetVersion,
    title: packageEntry.title,
    titleZh: packageEntry.titleZh,
    platformMaturity: packageEntry.platformMaturity,
    scientificMaturity: packageEntry.scientificMaturity,
    automatedReviewStatus: packageEntry.automatedReviewStatus,
    reviewStatus: packageReview.reviewStatus,
    effectiveReviewStatus: packageReview.effectiveReviewStatus,
    reviewFreshness: packageReview.freshness,
    reviewedBy: packageReview.reviewedBy,
    reviewedAt: packageReview.reviewedAt,
    reviewedCommit: packageReview.reviewedCommit,
    reviewedContentDigest: packageReview.reviewedContentDigest,
    currentContentDigest: packageReview.currentContentDigest,
    chatgptAssisted: packageReview.chatgptAssisted,
    reviewScope: packageReview.scope,
    reviewOpenIssues: packageReview.openIssues,
    entityCount: packageEntities.length,
    profileCount: packageProfiles.length,
    claimCount: packageClaims.length,
    occurrenceCount: occurrenceShards.reduce((sum, file) => sum + file.records, 0),
    queryCoverage: {
      completeness: packageQueryLedger.completeness,
      upstreamReportedTotal: packageQueryLedger.upstreamReportedTotal,
      rowsFetched: packageQueryLedger.rowsFetched,
      rowsAccepted: packageQueryLedger.rowsAccepted,
      rowsRejected: packageQueryLedger.rowsRejected,
      rowsOutsidePackage: packageQueryLedger.rowsOutsidePackage,
      pagesFetched: packageQueryLedger.pagesFetched,
    },
    metrics: {
      canonicalRawBytes: canonicalPackageBytes(packageEntry),
      runtimeKnowledgeCompressedBytes: knowledgeBytes,
      numberOfShards: occurrenceShards.length,
      largestShardBytes: Math.max(0, ...occurrenceShards.map((file) => file.bytes)),
      initialLoadImpactBytes: 0,
      packageLoadTime: 'client-measured',
      offlineCacheSizeBytes: knowledgeBytes + occurrenceBytes,
    },
    files: payloadFiles,
    occurrences: occurrenceShards,
  }
  const manifestFile = writeJson(`packages/${packageId}/manifest.json`, manifest, true)
  packageRuntimeManifests.push({ ...manifest, manifest: manifestFile })

  const zipEntries = {
    'manifest.json': strToU8(`${JSON.stringify(manifest, null, 2)}\n`),
  }
  for (const file of [...Object.values(payloadFiles), ...occurrenceShards]) {
    zipEntries[file.url] = new Uint8Array(readFileSync(join(outputRoot, file.url)))
  }
  const archive = zipSync(zipEntries, { level: 0 })
  write(`downloads/${packageId}-${sourceManifest.datasetVersion}.zip`, archive)
}

const occurrenceManifestFile = writeJson('occurrences/manifest.json', occurrenceManifest, true)
const paleogeographyByPeriod = new Map(paleogeographyProvenance.snapshots.map((snapshot) => [snapshot.period, snapshot]))
const mapSnapshots = periodMetadata.map((period) => {
  const provenance = paleogeographyByPeriod.get(period.name)
  if (period.mapLayerStatus === 'available' && !provenance) throw new Error(`${period.name}: available map is missing provenance`)
  const layers = provenance
    ? Object.fromEntries(Object.entries(provenance.layers).map(([layerId, layer]) => [
      layerId,
      writeGzipJson(`maps/${period.name.toLowerCase()}-${layerId}.json.gz`, readJson(layer.geometryFile)),
    ]))
    : null
  return {
    period: period.name,
    status: period.mapLayerStatus,
    description: period.description,
    descriptionZh: period.descriptionZh,
    reconstructionAgeMa: provenance?.reconstructionAgeMa ?? null,
    model: provenance?.model ?? null,
    layers,
  }
})
const mapsManifestFile = writeJson('maps/manifest.json', {
  schemaVersion: 5,
  version: sourceManifest.datasetVersion,
  source: {
    title: paleogeographyProvenance.dataset.title,
    version: paleogeographyProvenance.dataset.version,
    doi: paleogeographyProvenance.dataset.doi,
    url: paleogeographyProvenance.dataset.url,
    license: paleogeographyProvenance.dataset.license,
    attribution: paleogeographyProvenance.attribution,
    retrievedAt: paleogeographyProvenance.retrievedAt,
  },
  scientificLimitations: paleogeographyProvenance.scientificLimitations,
  snapshots: mapSnapshots,
}, true)

const coreCompressedBytes = Object.values(core).reduce((sum, file) => sum + file.bytes, 0)
const current = {
  schemaVersion: 5,
  datasetVersion: sourceManifest.datasetVersion,
  appVersion: sourceManifest.appVersion,
  publication: 'GitHub Pages static data platform',
  scopeStatement: sourceManifest.scopeStatement,
  includedMajorGroups: sourceManifest.includedMajorGroups,
  excludedMajorGroups: sourceManifest.excludedMajorGroups,
  wholeLifeCoverageClaim: sourceManifest.wholeLifeCoverageClaim,
  releaseBase: `${releasePrefix}/`,
  core,
  packages: {
    count: packageRuntimeManifests.length,
    registry: core.packages,
    manifestTemplate: `${releasePrefix}/packages/{packageId}/manifest.json`,
    manifests: Object.fromEntries(packageRuntimeManifests.map((manifest) => [manifest.packageId, manifest.manifest])),
  },
  occurrences: {
    manifest: occurrenceManifestFile,
    totalRecords: occurrenceTotal,
    unresolvedPackageAssignmentCount,
  },
  maps: { manifest: mapsManifestFile, availableSnapshots: mapSnapshots.filter((snapshot) => snapshot.status === 'available').length },
  downloads: { template: `${releasePrefix}/downloads/{packageId}-${sourceManifest.datasetVersion}.zip` },
  budgets: {
    coreCompressedBytes,
    coreLimitBytes: 5 * 1024 * 1024,
    shardLimitBytes: 8 * 1024 * 1024,
    pagesLimitBytes: 650 * 1024 * 1024,
  },
  evidenceBoundary: {
    entityRegistry: `${entities.length}/${entities.length}`,
    chineseNamesPresent: `${entities.filter((entity) => entity.names.zh).length}/${entities.length}`,
    packageOwnership: `${entities.filter((entity) => entity.packageId).length}/${entities.length}`,
    scientificMaturitySummary: registry.packages
      .filter((entry) => entry.id !== 'atlas-core')
      .reduce((summary, entry) => {
        summary[entry.scientificMaturity] = (summary[entry.scientificMaturity] ?? 0) + 1
        return summary
      }, {}),
    maintainerReview: 'reviewed and reviewed-with-caveats identify a maintainer decision against an exact content digest; stale is computed and never stored manually.',
    externalExpertReview: 'No package currently claims external domain-expert peer review.',
    wholeLifeCoverageClaim: false,
  },
}
writeBootstrapJson('current.json', current, true)

const releaseFiles = [...files.values()].map((file) => ({ url: file.url, bytes: file.bytes, sha256: file.sha256 })).sort((left, right) => left.url.localeCompare(right.url))
const releaseFilesIndex = writeJson('release-files.json', {
  schemaVersion: 1,
  datasetVersion: sourceManifest.datasetVersion,
  files: releaseFiles,
}, true)
const retentionByteLimit = previousReleaseHistory.retentionByteLimit ?? 400 * 1024 * 1024
const currentReleaseBytes = releaseFiles.reduce((sum, file) => sum + file.bytes, 0) + releaseFilesIndex.bytes
const currentRelease = {
  datasetVersion: sourceManifest.datasetVersion,
  releaseBase: `${releasePrefix}/`,
  filesIndex: releaseFilesIndex.url,
  generatedAt: sourceManifest.generatedAt,
  bytes: currentReleaseBytes,
}
const retainedReleases = [currentRelease]
let retainedBytes = currentReleaseBytes
for (const entry of (previousReleaseHistory.releases ?? []).filter((candidate) => candidate.datasetVersion !== sourceManifest.datasetVersion)) {
  if (retainedReleases.length >= 3) break
  let releaseBytes = entry.bytes
  if (!Number.isFinite(releaseBytes)) {
    try {
      const index = JSON.parse(readFileSync(join(outputRoot, entry.filesIndex), 'utf8'))
      releaseBytes = (index.files ?? []).reduce((sum, file) => sum + (file.bytes ?? 0), 0) + statSync(join(outputRoot, entry.filesIndex)).size
    } catch { continue }
  }
  if (retainedBytes + releaseBytes > retentionByteLimit) continue
  retainedReleases.push({ ...entry, bytes: releaseBytes })
  retainedBytes += releaseBytes
}
writeBootstrapJson('releases.json', { schemaVersion: 1, retentionLimit: 3, retentionByteLimit, retainedBytes, releases: retainedReleases }, true)
const retainedVersions = new Set(retainedReleases.map((entry) => entry.datasetVersion))
const releasesDirectory = join(outputRoot, 'releases')
for (const name of readdirSync(releasesDirectory)) {
  if (retainedVersions.has(name)) continue
  const staleReleaseRoot = resolve(releasesDirectory, name)
  if (!staleReleaseRoot.startsWith(`${releasesDirectory}${sep}`)) throw new Error(`Unsafe stale release path: ${staleReleaseRoot}`)
  rmSync(staleReleaseRoot, { recursive: true, force: true })
}

const duplicateGroups = new Map()
for (const file of files.values()) {
  if (!duplicateGroups.has(file.sha256)) duplicateGroups.set(file.sha256, [])
  duplicateGroups.get(file.sha256).push(file.url)
}
const duplicatedPayloads = [...duplicateGroups.values()].filter((group) => group.length > 1)
if (duplicatedPayloads.length) {
  throw new Error(`Runtime contains duplicate byte-identical files: ${JSON.stringify(duplicatedPayloads.slice(0, 5))}`)
}

const elapsedMs = Date.now() - startedAt
console.log(`Built ${relative(rootDir, outputRoot).replaceAll('\\', '/')} with ${files.size} files, ${occurrenceTotal.toLocaleString()} occurrences and ${packageRuntimeManifests.length} packages in ${(elapsedMs / 1000).toFixed(2)}s.`)
