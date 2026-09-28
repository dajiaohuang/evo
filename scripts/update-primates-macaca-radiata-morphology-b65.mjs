import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/primates-macaca-radiata-morphology-b65-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data/knowledge/raw-dossiers/primates-macaca-radiata-core-2026-09-26.jsonl')
const SHARD_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-macaca-radiata-core-2026-09-26.jsonl.br')
const SHARD_MANIFEST_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-macaca-radiata-core-2026-09-26.batch-manifest.json')
const INDEX_PATH = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const QUEUE_PATH = join(ROOT, 'data/knowledge/species-evidence-queue/8.jsonl.br')
const QUEUE_MANIFEST_PATH = join(ROOT, 'data/knowledge/species-evidence-queue/manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const UPDATE_MANIFEST_PATH = join(ROOT, 'data/knowledge/primates-macaca-radiata-morphology-b65-2026-09-28.update-manifest.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const readLines = bytes => bytes.toString('utf8').trimEnd().split('\n')

const sourceBytes = readFileSync(SOURCE_PATH)
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.batchId, 'primates-macaca-radiata-morphology-batch65-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.appAndPagesPreviewManifestChanged, false)
assert.deepEqual(source.target, {
  colId: '3WWP2',
  scientificName: 'Macaca radiata (É. Geoffroy Saint-Hilaire, 1812)',
  rank: 'species',
  sourceDatasetId: '2144',
  previewPackageId: 'primates',
  previewTaxonId: 'macaca_radiata',
})
assert.equal(source.sourceRef.stableId, source.audit.stableId)
assert.equal(source.sourceRef.licenseAssessment, 'item-level-verified')
assert.equal(source.sourceRef.licenseVersion, 'CC BY 4.0')
assert.equal(source.sourceRef.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
assert.equal(source.claim.sourceIds.length, 1)
assert.equal(source.claim.sourceIds[0], source.sourceRef.id)
assert.equal(source.claim.translationStatus, 'translated')
assert.equal(source.claim.originalLanguage, 'en')
assert.equal(source.claim.locator, source.sourceRef.locator)

if (existsSync(UPDATE_MANIFEST_PATH)) {
  const applied = readJson(UPDATE_MANIFEST_PATH)
  assert.equal(applied.batchId, source.batchId)
  assert.equal(applied.input.sha256, sha256(sourceBytes), 'Applied batch source changed; re-audit before replaying')
  const raw = readFileSync(RAW_PATH)
  const compressed = readFileSync(SHARD_PATH)
  assert.equal(sha256(raw), applied.output.rawSha256)
  assert.equal(sha256(compressed), applied.output.compressedSha256)
  assert.deepEqual(brotliDecompressSync(compressed), raw)
  const record = JSON.parse(raw.toString('utf8').trim())
  assert.ok(record.sources.some(item => item.stableId === source.sourceRef.stableId))
  assert.ok(record.facets.morphology.claims.some(claim => claim.sourceIds.includes(source.sourceRef.id)))
  console.log(JSON.stringify({ batchId: source.batchId, status: 'already-applied', targetColId: source.target.colId }, null, 2))
  process.exit(0)
}

const currentHead = (await import('node:child_process')).execFileSync('git', ['rev-parse', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).trim()
assert.equal(currentHead, source.audit.baseHead, 'Base commit changed; re-audit this update before applying')

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.audit.registryManifestSha256, 'Pinned COL26.8 registry changed')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
const searchRoute = normalize(source.target.scientificName).slice(0, 2)
const searchRecords = (registryManifest.search.routes[searchRoute] ?? []).flatMap(path =>
  gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse),
).filter(row => row.id === source.target.colId)
assert.equal(searchRecords.length, 1, 'Expected exactly one pinned COL26.8 search record')
const accepted = searchRecords[0]
assert.equal(accepted.scientificName, source.target.scientificName)
assert.equal(accepted.authorship, '(É. Geoffroy Saint-Hilaire, 1812)')
assert.equal(accepted.rank, source.target.rank)
assert.equal(accepted.status, 'accepted')
assert.equal(String(accepted.sourceDatasetId), source.target.sourceDatasetId)

const hierarchyCache = new Map()
function getHierarchyNode(id) {
  const route = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
  for (const path of registryManifest.hierarchy.nodes.routes[route] ?? []) {
    if (!hierarchyCache.has(path)) {
      hierarchyCache.set(path, gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse))
    }
    const node = hierarchyCache.get(path).find(row => row.id === id)
    if (node) return node
  }
  return undefined
}
const actualPathIds = []
let cursor = getHierarchyNode(source.target.colId)
assert.ok(cursor, 'Pinned COL hierarchy node is missing')
while (cursor) {
  assert.equal(cursor.status, 'accepted', `Unaccepted COL hierarchy node ${cursor.id}`)
  actualPathIds.push(cursor.id)
  if (!cursor.parentId) break
  cursor = getHierarchyNode(cursor.parentId)
  assert.ok(cursor, 'Pinned COL parent node is missing')
  assert.ok(actualPathIds.length <= 64, 'COL parent chain exceeded the safety bound')
}
assert.deepEqual(actualPathIds.slice(0, source.audit.classificationPathIds.length), source.audit.classificationPathIds)

const previewBytes = readFileSync(join(ROOT, 'data/pages-preview.json'))
assert.equal(sha256(previewBytes), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages selector changed; review selection before applying')
const preview = JSON.parse(previewBytes.toString('utf8'))
assert.ok(preview.packageIds.includes(source.target.previewPackageId), 'Target is not in the selected App/Pages package')
assert.ok(preview.taxonIds.includes(source.target.previewTaxonId), 'Target is not in the selected App/Pages taxa')

const index = readJson(INDEX_PATH)
assert.equal(index.releaseAlias, 'COL26.8')
assert.equal(index.encoding, 'brotli-jsonl')
assert.equal(index.recordCount, source.audit.indexedRecordCount)
const indexed = new Map()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, `Compressed checksum mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, `Decoded checksum mismatch: ${shard.path}`)
  const lines = readLines(decoded)
  assert.equal(lines.length, shard.recordCount, `Record count mismatch: ${shard.path}`)
  indexedCount += lines.length
  for (const line of lines) {
    const row = JSON.parse(line)
    assert.ok(!indexed.has(row.colId), `Duplicate indexed COL id: ${row.colId}`)
    indexed.set(row.colId, row)
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexed.size, index.recordCount)
assert.equal([...indexed.values()].reduce((count, record) => count + (record.sources ?? []).filter(item => item.stableId === source.sourceRef.stableId).length, 0), source.audit.sourceOccurrenceCount, 'Source DOI already occurs in indexed dossiers')

const targetShard = index.shards.find(shard => shard.path === relative(SHARD_PATH))
assert.ok(targetShard, 'Target dossier shard is missing from index')
const rawBefore = readFileSync(RAW_PATH)
const compressedBefore = readFileSync(SHARD_PATH)
assert.equal(sha256(rawBefore), source.audit.previousRawSha256)
assert.equal(sha256(compressedBefore), source.audit.previousShardCompressedSha256)
assert.deepEqual(brotliDecompressSync(compressedBefore), rawBefore)
const originalLines = readLines(rawBefore)
assert.equal(originalLines.length, 1, 'The target independent dossier shard must contain one row')
const baseline = JSON.parse(originalLines[0])
assert.equal(sha256(Buffer.from(JSON.stringify(baseline), 'utf8')), source.audit.previousTargetRecordSha256)
assert.equal(baseline.colId, source.target.colId)
assert.equal(baseline.scientificName, source.target.scientificName)
assert.equal(baseline.rank, 'species')
assert.equal(String(baseline.sourceDatasetId), source.target.sourceDatasetId)
assert.equal(indexed.get(baseline.colId)?.scientificName, baseline.scientificName)
assert.deepEqual(Object.keys(baseline.facets).sort(), [...FACETS].sort())
assert.equal(baseline.facets.morphology.status, 'not-assessed')
assert.ok(!baseline.sources.some(item => item.stableId === source.sourceRef.stableId))
assert.deepEqual(baseline.facets.morphology.claims ?? [], [])

const queueManifest = readJson(QUEUE_MANIFEST_PATH)
const queueShard = queueManifest.shards.find(shard => shard.path === relative(QUEUE_PATH))
assert.ok(queueShard, 'Audited queue shard is not registered')
const queueCompressed = readFileSync(QUEUE_PATH)
assert.equal(sha256(queueCompressed), source.audit.queueBaseline.shardCompressedSha256)
assert.equal(sha256(queueCompressed), queueShard.compressedSha256)
const queueDecoded = brotliDecompressSync(queueCompressed)
assert.equal(sha256(queueDecoded), queueShard.decodedSha256)
const queueLines = readLines(queueDecoded)
const queueMatches = queueLines.filter(line => JSON.parse(line).colId === source.target.colId)
assert.equal(queueMatches.length, 1)
const queueLine = queueMatches[0]
assert.equal(sha256(Buffer.from(queueLine, 'utf8')), source.audit.queueBaseline.rowSha256)
const queueRow = JSON.parse(queueLine)
assert.equal(queueRow.dossier.status, source.audit.queueBaseline.dossierStatus)
assert.equal(queueRow.dossier.claimCount, source.audit.queueBaseline.claimCount)
assert.equal(queueRow.dossier.identityStatus, source.audit.queueBaseline.identityStatus)
assert.equal(queueRow.dossier.rightsStatus, source.audit.queueBaseline.rightsStatus)
assert.equal(queueRow.dossier.systematicSearchRecorded, source.audit.queueBaseline.systematicSearchRecorded)
assert.equal(queueRow.dossier.expertReviewStatus, source.audit.queueBaseline.expertReviewStatus)
assert.equal(queueRow.dossier.facetStatuses.morphology, source.audit.queueBaseline.morphologyStatus)

const dossier = structuredClone(baseline)
dossier.checkedAt = source.checkedAt
dossier.sources.push(structuredClone(source.sourceRef))
dossier.identity.scope = source.identityScope
dossier.lifeStatusScope.wild = source.wildScope
dossier.lifeStatusScope.domesticated = source.domesticatedScope
dossier.facets.morphology = {
  status: 'partially-supported',
  claims: [structuredClone(source.claim)],
  gaps: structuredClone(source.morphologyGaps),
}
dossier.completeness = { status: 'incomplete', reasons: structuredClone(source.completenessReasons) }
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.facets.morphology.claims[0].sourceIds[0], source.sourceRef.id)

const rawBytes = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Updated dossier JSONL must use LF only')
const compressedBytes = brotliCompressSync(rawBytes, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  },
})
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes, 'Brotli round trip must preserve exact updated JSONL bytes')
targetShard.decodedSha256 = sha256(rawBytes)
targetShard.compressedSha256 = sha256(compressedBytes)
assert.equal(index.shards.reduce((sum, shard) => sum + shard.recordCount, 0), index.recordCount)

const shardManifest = readJson(SHARD_MANIFEST_PATH)
assert.equal(shardManifest.batchId, 'primates-macaca-radiata-core-2026-09-26')
shardManifest.rawSha256 = sha256(rawBytes)
shardManifest.decodedSha256 = sha256(rawBytes)
shardManifest.compressedSha256 = sha256(compressedBytes)
shardManifest.decodedBytes = rawBytes.length
shardManifest.compressedBytes = compressedBytes.length
shardManifest.checkedAt = source.checkedAt
shardManifest.duplicateCheck.mode = 'in-place-update'
shardManifest.duplicateCheck.indexedRecordCount = indexedCount
shardManifest.supplementalUpdates ??= []
assert.ok(!shardManifest.supplementalUpdates.some(item => item.batchId === source.batchId))
shardManifest.supplementalUpdates.push({
  batchId: source.batchId,
  sourcePath: relative(SOURCE_PATH),
  sourceSha256: sha256(sourceBytes),
  generator: 'scripts/update-primates-macaca-radiata-morphology-b65.mjs',
  baseHead: source.audit.baseHead,
  previousRawSha256: source.audit.previousRawSha256,
  previousCompressedSha256: source.audit.previousShardCompressedSha256,
  rawSha256: sha256(rawBytes),
  compressedSha256: sha256(compressedBytes),
  stableId: source.sourceRef.stableId,
  facet: 'morphology',
  appAndPagesPreviewManifestChanged: false,
})

const updateManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  audit: source.audit,
  target: source.target,
  source: { id: source.sourceRef.id, stableId: source.sourceRef.stableId, licenseAssessment: source.sourceRef.licenseAssessment, licenseVersion: source.sourceRef.licenseVersion, rightsHolder: source.sourceRef.rightsHolder },
  previous: { rawSha256: source.audit.previousRawSha256, compressedSha256: source.audit.previousShardCompressedSha256, targetRecordSha256: source.audit.previousTargetRecordSha256 },
  output: { rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), recordCount: 1, roundTrip: 'exact-byte-match' },
  updateMode: 'in-place-add-one-bounded-morphology-claim-to-existing-record',
  appAndPagesPreviewManifestSha256: source.audit.pagesPreviewManifestSha256,
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
writeFileSync(INDEX_PATH, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(SHARD_MANIFEST_PATH, `${JSON.stringify(shardManifest, null, 2)}\n`, 'utf8')
writeFileSync(UPDATE_MANIFEST_PATH, `${JSON.stringify(updateManifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({
  batchId: source.batchId,
  targetColId: dossier.colId,
  targetName: dossier.scientificName,
  sourceId: source.sourceRef.id,
  facet: 'morphology',
  facetStatus: dossier.facets.morphology.status,
  dossierStatus: dossier.completeness.status,
  indexedRecordCount: indexedCount,
  newRawSha256: sha256(rawBytes),
  newCompressedSha256: sha256(compressedBytes),
  exactBrotliRoundTrip: brotliDecompressSync(compressedBytes).equals(rawBytes),
  appAndPagesPreviewManifestChanged: false,
}, null, 2))
