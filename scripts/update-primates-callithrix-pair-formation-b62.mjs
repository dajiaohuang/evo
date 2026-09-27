import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-callithrix-jacchus-pair-formation-b62-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-callithrix-jacchus-batch27-2026-09-25.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-callithrix-jacchus-batch27-2026-09-25.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const METADATA_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-callithrix-jacchus-batch27-2026-09-25.batch-manifest.json')
const QUEUE_PATH = join(ROOT, 'data', 'knowledge', 'species-evidence-queue', '8.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-callithrix-jacchus-pair-formation-b62-2026-09-28.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const readLines = bytes => bytes.toString('utf8').trimEnd().split('\n').filter(Boolean)

const sourceBytes = readFileSync(SOURCE_PATH)
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.batchId, 'primates-callithrix-jacchus-pair-formation-batch62-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.deepEqual(source.target, {
  colId: '697NS',
  scientificName: 'Callithrix jacchus (Linnaeus, 1758)',
  rank: 'species',
  sourceDatasetId: '2144',
})

function readRegistryRows(path) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, path)))
    .toString('utf8')
    .split('\n')
    .filter(Boolean)
    .map(line => JSON.parse(line))
}

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.audit.registryManifestSha256, 'Pinned COL26.8 registry changed')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, source.releaseAlias)
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)

const hierarchyCache = new Map()
function getHierarchyNode(id) {
  const prefix = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
  for (const path of registryManifest.hierarchy.nodes.routes[prefix] ?? []) {
    if (!hierarchyCache.has(path)) hierarchyCache.set(path, readRegistryRows(path))
    const node = hierarchyCache.get(path).find(row => row.id === id)
    if (node) return node
  }
  return undefined
}

const searchRoute = normalize(source.target.scientificName).slice(0, 2)
const searchMatches = (registryManifest.search.routes[searchRoute] ?? [])
  .flatMap(readRegistryRows)
  .filter(row => row.id === source.target.colId)
assert.equal(searchMatches.length, 1, 'Expected one exact COL26.8 species usage')
assert.equal(searchMatches[0].scientificName, source.target.scientificName)
assert.equal(searchMatches[0].rank, source.target.rank)
assert.equal(searchMatches[0].status, 'accepted')
assert.equal(String(searchMatches[0].sourceDatasetId), source.target.sourceDatasetId)

let cursor = getHierarchyNode(source.target.colId)
assert.ok(cursor, 'Missing accepted COL26.8 target node')
assert.equal(cursor.status, 'accepted')
assert.equal(cursor.scientificName, source.target.scientificName)
const actualPathIds = [cursor.id]
while (cursor.parentId) {
  cursor = getHierarchyNode(cursor.parentId)
  assert.ok(cursor, 'Missing a node in the accepted COL26.8 parent chain')
  assert.equal(cursor.status, 'accepted')
  actualPathIds.push(cursor.id)
  assert.ok(actualPathIds.length <= 64, 'COL parent chain exceeded the safety bound')
}
assert.deepEqual(actualPathIds.slice().reverse(), source.audit.classificationPathIds, 'Accepted COL26.8 classification path changed')

const index = readJson(INDEX_PATH)
assert.equal(index.releaseAlias, source.releaseAlias)
assert.equal(index.recordCount, source.audit.indexedRecordCount)
const targetShard = index.shards.find(shard => shard.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Target Callithrix shard is absent from the dossier index')
assert.equal(targetShard.recordCount, source.audit.targetRecordCount)

const rawBefore = readFileSync(RAW_PATH)
const compressedBefore = readFileSync(SHARD_PATH)
assert.equal(relative(RAW_PATH), source.audit.targetRawPath)
assert.equal(sha256(rawBefore), source.audit.previousRawSha256, 'Callithrix raw baseline changed')
assert.equal(sha256(compressedBefore), source.audit.previousShardCompressedSha256, 'Callithrix compressed baseline changed')
assert.equal(targetShard.decodedSha256, source.audit.previousRawSha256)
assert.equal(targetShard.compressedSha256, source.audit.previousShardCompressedSha256)
assert.deepEqual(brotliDecompressSync(compressedBefore), rawBefore, 'Raw Callithrix dossier and indexed Brotli shard differ')

const originalRows = readLines(rawBefore).map(line => JSON.parse(line))
assert.equal(originalRows.length, 1)
const dossier = originalRows[0]
assert.equal(dossier.colId, source.target.colId)
assert.equal(dossier.scientificName, source.target.scientificName)
assert.equal(String(dossier.sourceDatasetId), source.target.sourceDatasetId)
assert.equal(sha256(Buffer.from(JSON.stringify(dossier))), source.audit.previousTargetRecordSha256, 'Callithrix target record changed')
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(dossier.classificationPath.map(item => item.id), source.audit.classificationPathIds)
assert.equal(dossier.facets.ecology.status, source.audit.queueBaseline.ecologyStatus)

const queueBytes = readFileSync(QUEUE_PATH)
const queueRows = readLines(brotliDecompressSync(queueBytes)).map(line => JSON.parse(line))
const queueRow = queueRows.find(row => row.colId === source.target.colId)
assert.ok(queueRow, 'Callithrix row is absent from its audited evidence-queue shard')
assert.equal(sha256(Buffer.from(JSON.stringify(queueRow))), source.audit.queueRowSha256, 'Callithrix evidence-queue baseline changed')
assert.equal(queueRow.dossier.status, source.audit.queueBaseline.dossierStatus)
assert.equal(queueRow.dossier.identityStatus, source.audit.queueBaseline.identityStatus)
assert.deepEqual(queueRow.dossier.identitySourceIds, source.audit.queueBaseline.identitySourceIds)
assert.equal(queueRow.dossier.claimCount, source.audit.queueBaseline.claimCount)
assert.equal(queueRow.dossier.rightsStatus, source.audit.queueBaseline.rightsStatus)
assert.equal(queueRow.dossier.systematicSearchRecorded, source.audit.queueBaseline.systematicSearchRecorded)
assert.equal(queueRow.dossier.expertReviewStatus, source.audit.queueBaseline.expertReviewStatus)

const previewBytes = readFileSync(join(ROOT, 'data', 'pages-preview.json'))
assert.equal(sha256(previewBytes), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages core scope changed')
assert.ok(JSON.parse(previewBytes.toString('utf8')).packageIds.includes('primates'), 'The shared App/Pages core no longer includes its primate package')

const sourceMap = new Map(dossier.sources.map(item => [item.id, item]))
assert.equal(sourceMap.size, dossier.sources.length, 'Existing dossier has duplicate source IDs')
assert.ok(!sourceMap.has(source.source.id), 'Supplemental source ID already exists')
assert.ok(!dossier.sources.some(item => item.stableId === source.source.stableId), 'Supplemental DOI already exists')
for (const key of ['id', 'title', 'url', 'locator', 'stableId', 'version', 'publishedAt', 'license', 'rightsEvidenceUrl', 'rightsEvidenceLocator', 'licenseAppliesTo', 'attribution', 'scope']) {
  assert.ok(source.source[key], `Missing source field ${key}`)
}
assert.equal(source.source.licenseAssessment, 'item-level-verified')
assert.equal(source.source.licenseVersion, 'CC BY 4.0')
assert.equal(source.source.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
assert.equal(source.source.accessedAt, source.checkedAt)

const sourceIds = new Set(dossier.sources.map(item => item.id))
dossier.sources.push(structuredClone(source.source))
sourceIds.add(source.source.id)
assert.equal(source.claims.length, 2)
for (const claim of source.claims) {
  assert.equal(claim.facet, 'ecology')
  assert.equal(claim.sourceId, source.source.id)
  assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus)
  assert.equal(claim.originalLanguage, 'en')
  assert.equal(claim.translationStatus, 'verified')
  assert.ok(sourceIds.has(claim.sourceId))
  const { sourceId, ...claimData } = structuredClone(claim)
  dossier.facets.ecology.claims.push({ ...claimData, sourceIds: [sourceId] })
}
dossier.facets.ecology.gaps.push(...structuredClone(source.gaps.ecology))
dossier.identity.scope = 'This dossier combines source-bounded captive social and reproductive studies with Brazilian field, occurrence, and surveillance records. Each claim retains its own place, period, population, and life-status limits; the combined sources are not a range-wide synthesis.'
dossier.lifeStatusScope.captive = 'Captive evidence includes research-colony and assisted-reproduction studies in Wisconsin and Japan, plus assigned-pair social-behavior observations from six adults at the UZH Primate Station in Switzerland in 2022. These studies do not estimate wild reproductive rates or mate choice.'
dossier.checkedAt = source.checkedAt
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.equal(dossier.facets.ecology.status, 'partially-supported', 'B62 must not claim full ecology coverage')
assert.equal(dossier.facets.fossil.status, 'searched-no-evidence')

const rawAfter = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
assert.ok(!rawAfter.includes(0x0d), 'Raw JSONL must use LF only')
const compressedAfter = brotliCompressSync(rawAfter, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  },
})
assert.deepEqual(brotliDecompressSync(compressedAfter), rawAfter, 'B62 Brotli round trip must preserve exact bytes')

targetShard.decodedSha256 = sha256(rawAfter)
targetShard.compressedSha256 = sha256(compressedAfter)
assert.equal(index.shards.reduce((sum, shard) => sum + shard.recordCount, 0), index.recordCount)

const metadata = readJson(METADATA_PATH)
assert.equal(metadata.raw.path, relative(RAW_PATH))
assert.equal(metadata.shard.path, relative(SHARD_PATH))
const previousSupplementalUpdates = metadata.supplementalUpdates ?? []
assert.ok(!previousSupplementalUpdates.some(item => item.batchId === source.batchId), 'B62 metadata audit already exists')
const updateAudit = {
  baseHead: source.audit.baseHead,
  indexedRecordCountAtAudit: index.recordCount,
  targetColId: dossier.colId,
  targetScientificName: dossier.scientificName,
  targetRecordCountBeforeUpdate: originalRows.length,
  targetShardPath: relative(SHARD_PATH),
  previousRawSha256: source.audit.previousRawSha256,
  previousShardCompressedSha256: source.audit.previousShardCompressedSha256,
  previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
  queueRowSha256BeforeUpdate: source.audit.queueRowSha256,
  pagesPreviewManifestSha256: source.audit.pagesPreviewManifestSha256,
  openPullRequests: source.audit.openPullRequests,
  mode: 'in-place-add-two-bounded-captive-pair-formation-ecology-claims',
  changedFacets: [{ facet: 'ecology', status: dossier.facets.ecology.status }],
  indexedRecordCountAfterUpdate: index.recordCount,
  outputRawSha256: sha256(rawAfter),
  outputCompressedSha256: sha256(compressedAfter),
  outputTargetRecordSha256: sha256(Buffer.from(JSON.stringify(dossier))),
  appAndPagesPreviewManifestChanged: false,
}
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
metadata.supplementalUpdates = [...previousSupplementalUpdates, {
  batchId: source.batchId,
  sourcePath: relative(SOURCE_PATH),
  inputSha256: sha256(sourceBytes),
  generator: relative(join(ROOT, 'scripts', 'update-primates-callithrix-pair-formation-b62.mjs')),
  baseHead: source.audit.baseHead,
  indexedRecordCountAtAudit: index.recordCount,
  targetColId: dossier.colId,
  previousDecodedSha256: source.audit.previousRawSha256,
  previousCompressedSha256: source.audit.previousShardCompressedSha256,
  previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
  queueRowSha256BeforeUpdate: source.audit.queueRowSha256,
  decodedSha256: sha256(rawAfter),
  compressedSha256: sha256(compressedAfter),
  targetRecordSha256: sha256(Buffer.from(JSON.stringify(dossier))),
  changedFacets: updateAudit.changedFacets,
  mode: updateAudit.mode,
}]

const batchManifest = {
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
  },
  target: { colId: dossier.colId, scientificName: dossier.scientificName, sourceDatasetId: dossier.sourceDatasetId },
  addedSources: [{ id: source.source.id, stableId: source.source.stableId, licenseAssessment: source.source.licenseAssessment }],
  addedClaims: source.claims.map(({ facet, sourceId, locator }) => ({ facet, sourceId, locator })),
  updatedFacets: updateAudit.changedFacets,
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
  registry: { path: relative(join(REGISTRY_ROOT, 'manifest.json')), releaseDate: registryManifest.releaseDate, checklistBankDatasetKey: registryManifest.checklistBankDatasetKey, manifestSha256: source.audit.registryManifestSha256 },
  classificationPathIds: actualPathIds.slice().reverse(),
  queueBaseline: { path: relative(QUEUE_PATH), rowSha256: source.audit.queueRowSha256, dossier: source.audit.queueBaseline },
  generator: relative(join(ROOT, 'scripts', 'update-primates-callithrix-pair-formation-b62.mjs')),
  updateMode: updateAudit.mode,
  appAndPagesPreviewManifestSha256: source.audit.pagesPreviewManifestSha256,
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(RAW_PATH, rawAfter)
writeFileSync(SHARD_PATH, compressedAfter)
writeFileSync(INDEX_PATH, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(METADATA_PATH, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
writeFileSync(MANIFEST_PATH, `${JSON.stringify(batchManifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({
  batchId: source.batchId,
  targetColId: dossier.colId,
  targetName: dossier.scientificName,
  addedClaims: source.claims.length,
  ecologyStatus: dossier.facets.ecology.status,
  dossierStatus: dossier.completeness.status,
  expertReviewStatus: dossier.expertReview.status,
  indexedRecordCount: index.recordCount,
  rawSha256: sha256(rawAfter),
  compressedSha256: sha256(compressedAfter),
  byteRoundTrip: brotliDecompressSync(compressedAfter).equals(rawAfter),
  appAndPagesPreviewManifestChanged: false,
}, null, 2))
