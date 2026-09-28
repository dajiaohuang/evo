import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-callithrix-jacchus-conservation-c60-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-callithrix-jacchus-batch27-2026-09-25.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-callithrix-jacchus-batch27-2026-09-25.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const METADATA_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-callithrix-jacchus-batch27-2026-09-25.batch-manifest.json')
const QUEUE_PATH = join(ROOT, 'data', 'knowledge', 'species-evidence-queue', '8.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-callithrix-jacchus-conservation-c60-2026-09-28.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const lines = bytes => bytes.toString('utf8').split('\n').filter(Boolean)
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()

const sourceBytes = readFileSync(SOURCE_PATH)
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.batchId, 'primates-callithrix-jacchus-conservation-batch60-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.deepEqual(source.target, {
  colId: '697NS',
  scientificName: 'Callithrix jacchus (Linnaeus, 1758)',
  rank: 'species',
  sourceDatasetId: '2144',
})

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.audit.registryManifestSha256, 'Pinned COL26.8 registry changed')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, source.releaseAlias)
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)

const registryRowsCache = new Map()
function registryRows(path) {
  if (!registryRowsCache.has(path)) {
    const bytes = readFileSync(join(REGISTRY_ROOT, path))
    const rows = gunzipSync(bytes).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
    registryRowsCache.set(path, rows)
  }
  return registryRowsCache.get(path)
}

const index = readJson(INDEX_PATH)
assert.equal(index.releaseAlias, source.releaseAlias)
assert.equal(index.recordCount, source.audit.indexedRecordCount)
const targetShard = index.shards.find(item => item.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Target dossier shard is absent from the index')
assert.equal(targetShard.recordCount, source.audit.targetRecordCount)

const rawBefore = readFileSync(RAW_PATH)
const compressedBefore = readFileSync(SHARD_PATH)
assert.equal(relative(RAW_PATH), source.audit.targetRawPath)
assert.equal(sha256(rawBefore), source.audit.previousRawSha256, 'Callithrix raw dossier baseline changed')
assert.equal(sha256(compressedBefore), source.audit.previousShardCompressedSha256, 'Callithrix Brotli shard baseline changed')
assert.deepEqual(brotliDecompressSync(compressedBefore), rawBefore, 'Raw dossier and compressed shard differ')

const originalRows = lines(rawBefore).map(JSON.parse)
assert.equal(originalRows.length, source.audit.targetRecordCount)
const dossier = originalRows[0]
assert.equal(dossier.colId, source.target.colId)
assert.equal(dossier.scientificName, source.target.scientificName)
assert.equal(String(dossier.sourceDatasetId), source.target.sourceDatasetId)
assert.equal(sha256(Buffer.from(JSON.stringify(dossier))), source.audit.previousTargetRecordSha256, 'Callithrix target record baseline changed')
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.equal(dossier.facets.conservation.status, source.audit.queueBaseline.conservationStatus)
assert.deepEqual(dossier.classificationPath.map(item => item.id), source.audit.classificationPathIds)

const hierarchyManifest = JSON.parse(readFileSync(join(REGISTRY_ROOT, 'manifest.json'), 'utf8'))
const searchRoute = normalize(source.target.scientificName).slice(0, 2)
const searchMatches = (registryManifest.search.routes[searchRoute] ?? [])
  .flatMap(registryRows)
  .filter(row => row.id === source.target.colId)
assert.equal(searchMatches.length, 1, 'Expected exactly one accepted COL26.8 species usage')
assert.equal(searchMatches[0].scientificName, source.target.scientificName)
assert.equal(searchMatches[0].rank, source.target.rank)
assert.equal(searchMatches[0].status, 'accepted')
assert.equal(String(searchMatches[0].sourceDatasetId), source.target.sourceDatasetId)
const hierarchyNode = id => {
  const prefix = createHash('sha256').update(id).digest('hex').slice(0, 2)
  const paths = hierarchyManifest.hierarchy.nodes.routes[prefix] ?? []
  for (const path of paths) {
    const match = registryRows(path).find(row => row.id === id)
    if (match) return match
  }
  return undefined
}
let cursor = hierarchyNode(source.target.colId)
assert.ok(cursor, 'COL26.8 accepted target node is missing')
assert.equal(cursor.status, 'accepted')
assert.equal(cursor.scientificName, source.target.scientificName)
const actualPathIds = [cursor.id]
while (cursor.parentId) {
  cursor = hierarchyNode(cursor.parentId)
  assert.ok(cursor, 'COL26.8 accepted parent node is missing')
  assert.equal(cursor.status, 'accepted')
  actualPathIds.push(cursor.id)
  assert.ok(actualPathIds.length <= 64, 'COL parent chain exceeded the safety bound')
}
assert.deepEqual(actualPathIds.reverse(), source.audit.classificationPathIds, 'COL26.8 accepted parent path changed')

const pagesPreviewBytes = readFileSync(join(ROOT, 'data', 'pages-preview.json'))
assert.equal(sha256(pagesPreviewBytes), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages core changed')
const pagesPreview = JSON.parse(pagesPreviewBytes.toString('utf8'))
assert.ok(pagesPreview.packageIds.includes('primates'), 'Shared App/Pages core no longer includes primates')
assert.ok(pagesPreview.taxonIds.includes('callithrix_jacchus'), 'Callithrix is no longer selected in the shared core preview')

const queueRows = lines(brotliDecompressSync(readFileSync(QUEUE_PATH))).map(JSON.parse)
const queueRow = queueRows.find(row => row.colId === source.target.colId)
assert.ok(queueRow, 'Callithrix queue row is missing')
assert.equal(sha256(Buffer.from(JSON.stringify(queueRow))), source.audit.queueRowSha256, 'Callithrix queue baseline changed')
const queueBaseline = queueRow.dossier
assert.equal(queueBaseline.status, source.audit.queueBaseline.dossierStatus)
assert.equal(queueBaseline.identityStatus, source.audit.queueBaseline.identityStatus)
assert.deepEqual(queueBaseline.identitySourceIds, source.audit.queueBaseline.identitySourceIds)
assert.deepEqual(queueBaseline.sourceIds, source.audit.queueBaseline.sourceIds)
assert.equal(queueBaseline.claimCount, source.audit.queueBaseline.claimCount)
assert.equal(queueBaseline.rightsStatus, source.audit.queueBaseline.rightsStatus)
assert.equal(queueBaseline.systematicSearchRecorded, source.audit.queueBaseline.systematicSearchRecorded)
assert.equal(queueBaseline.facetStatuses.conservation, source.audit.queueBaseline.conservationStatus)
assert.equal(queueBaseline.expertReviewStatus, source.audit.queueBaseline.expertReviewStatus)

const sourceMap = new Map(dossier.sources.map(item => [item.id, item]))
assert.equal(sourceMap.size, dossier.sources.length, 'Existing dossier has duplicate source IDs')
assert.ok(!sourceMap.has(source.source.id), 'New source ID already exists')
assert.ok(!dossier.sources.some(item => item.stableId === source.source.stableId), 'New DOI already exists in the dossier')
for (const key of ['id', 'title', 'url', 'stableId', 'version', 'publishedAt', 'locator', 'license', 'rightsEvidenceUrl', 'rightsEvidenceLocator', 'licenseAppliesTo', 'attribution', 'scope']) {
  assert.ok(source.source[key], `Missing source field ${key}`)
}
assert.equal(source.source.licenseAssessment, 'item-level-verified')
assert.equal(source.source.licenseVersion, 'CC BY 4.0')
assert.equal(source.source.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
assert.equal(source.source.accessedAt, source.checkedAt)
assert.equal(source.claims.length, 1)

dossier.sources.push(structuredClone(source.source))
for (const claim of source.claims) {
  assert.equal(claim.facet, 'conservation')
  assert.equal(claim.sourceId, source.source.id)
  assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus)
  assert.equal(claim.originalLanguage, 'en')
  assert.equal(claim.translationStatus, 'verified')
  const { sourceId, ...claimData } = structuredClone(claim)
  dossier.facets.conservation.claims.push({ ...claimData, sourceIds: [sourceId] })
}
dossier.facets.conservation.status = 'partially-supported'
dossier.facets.conservation.gaps = structuredClone(source.gaps.conservation)
dossier.checkedAt = source.checkedAt
dossier.completeness.reasons = [
  'Morphology, life history, ecology, evolution and distribution remain partially supported; fossil remains searched-no-evidence; conservation now contains one bounded hybridization-interaction claim, while current status, population trend and measured impact remain unassessed.',
  'No independent external expert review has been completed.',
]
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')

const rawAfter = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
assert.ok(!rawAfter.includes(0x0d), 'Raw JSONL must use LF only')
const compressedAfter = brotliCompressSync(rawAfter, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  },
})
assert.deepEqual(brotliDecompressSync(compressedAfter), rawAfter, 'Brotli round trip must preserve exact bytes')

targetShard.decodedSha256 = sha256(rawAfter)
targetShard.compressedSha256 = sha256(compressedAfter)
const metadata = readJson(METADATA_PATH)
assert.equal(metadata.raw.path, relative(RAW_PATH))
assert.equal(metadata.shard.path, relative(SHARD_PATH))
const priorUpdates = metadata.supplementalUpdates ?? []
assert.ok(!priorUpdates.some(item => item.batchId === source.batchId), 'This update is already recorded')
const changedFacets = [{ facet: 'conservation', status: dossier.facets.conservation.status }]
const updateMode = 'in-place-add-one-bounded-conservation-interaction-claim'
const outputRecordSha = sha256(Buffer.from(JSON.stringify(dossier)))
metadata.checkedAt = source.checkedAt
metadata.raw = { ...metadata.raw, bytes: rawAfter.length, sha256: sha256(rawAfter), recordCount: originalRows.length }
metadata.shard = {
  ...metadata.shard,
  decodedBytes: rawAfter.length,
  decodedSha256: sha256(rawAfter),
  compressedBytes: compressedAfter.length,
  compressedSha256: sha256(compressedAfter),
  brotliParameters: { mode: 'text', quality: 11 },
  roundTrip: 'exact-byte-match',
}
metadata.supplementalUpdates = [...priorUpdates, {
  batchId: source.batchId,
  sourcePath: relative(SOURCE_PATH),
  inputSha256: sha256(sourceBytes),
  generator: relative(join(ROOT, 'scripts', 'update-primates-callithrix-conservation-c60.mjs')),
  baseHead: source.audit.baseHead,
  indexedRecordCountAtAudit: index.recordCount,
  targetColId: dossier.colId,
  previousDecodedSha256: source.audit.previousRawSha256,
  previousCompressedSha256: source.audit.previousShardCompressedSha256,
  previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
  queueRowSha256BeforeUpdate: source.audit.queueRowSha256,
  decodedSha256: sha256(rawAfter),
  compressedSha256: sha256(compressedAfter),
  targetRecordSha256: outputRecordSha,
  changedFacets,
  mode: updateMode,
}]

const updateManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  baseAudit: {
    baseHead: source.audit.baseHead,
    indexedRecordCount: index.recordCount,
    openPullRequests: source.audit.openPullRequests,
    registryManifestSha256: source.audit.registryManifestSha256,
    pagesPreviewManifestSha256: source.audit.pagesPreviewManifestSha256,
    queueRowSha256: source.audit.queueRowSha256,
    duplicateChecks: source.audit.deduplication,
  },
  target: { colId: dossier.colId, scientificName: dossier.scientificName, sourceDatasetId: dossier.sourceDatasetId },
  addedSources: [{ id: source.source.id, stableId: source.source.stableId, licenseAssessment: source.source.licenseAssessment }],
  addedClaims: source.claims.map(({ facet, sourceId, locator }) => ({ facet, sourceId, locator })),
  updatedFacets: changedFacets,
  indexedRecordCount: index.recordCount,
  updatedShard: {
    path: relative(SHARD_PATH),
    rawPath: relative(RAW_PATH),
    encoding: 'brotli-jsonl',
    recordCount: originalRows.length,
    decodedBytes: rawAfter.length,
    decodedSha256: sha256(rawAfter),
    compressedBytes: compressedAfter.length,
    compressedSha256: sha256(compressedAfter),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: {
    path: relative(join(REGISTRY_ROOT, 'manifest.json')),
    releaseDate: registryManifest.releaseDate,
    checklistBankDatasetKey: registryManifest.checklistBankDatasetKey,
    manifestSha256: source.audit.registryManifestSha256,
  },
  classificationPathIds: source.audit.classificationPathIds,
  queueBaseline: { path: relative(QUEUE_PATH), rowSha256: source.audit.queueRowSha256, dossier: source.audit.queueBaseline },
  generator: relative(join(ROOT, 'scripts', 'update-primates-callithrix-conservation-c60.mjs')),
  updateMode,
  appAndPagesPreviewManifestSha256: source.audit.pagesPreviewManifestSha256,
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(RAW_PATH, rawAfter)
writeFileSync(SHARD_PATH, compressedAfter)
writeFileSync(INDEX_PATH, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(METADATA_PATH, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
writeFileSync(MANIFEST_PATH, `${JSON.stringify(updateManifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({
  batchId: source.batchId,
  targetColId: dossier.colId,
  targetName: dossier.scientificName,
  claimsAdded: source.claims.length,
  conservationStatus: dossier.facets.conservation.status,
  dossierStatus: dossier.completeness.status,
  expertReviewStatus: dossier.expertReview.status,
  rawSha256: sha256(rawAfter),
  compressedSha256: sha256(compressedAfter),
  exactBrotliRoundTrip: brotliDecompressSync(compressedAfter).equals(rawAfter),
  appAndPagesPreviewManifestChanged: false,
}, null, 2))
