import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/octopus-vulgaris-evolution-b50-2026-09-26.json')
const INDEX_PATH = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const UPDATE_MANIFEST_PATH = join(ROOT, 'data/knowledge/octopus-vulgaris-evolution-b50-2026-09-26.update-manifest.json')
const SOURCE_BATCH_MANIFEST_PATH = join(ROOT, 'data/knowledge/species-evidence-batch36-2026-09-25.batch-manifest.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const sourceBytes = readFileSync(SOURCE_PATH)
const source = JSON.parse(sourceBytes.toString('utf8'))
const target = source.target
const sourceItem = source.sources[0]
const rawPath = join(ROOT, source.audit.rawPath)
const shardPath = join(ROOT, source.audit.targetShardPath)

assert.equal(source.batchId, 'octopus-vulgaris-evolution-b50-2026-09-26')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.appAndPagesPreviewManifestChanged, false)
assert.equal(target.colId, '48KQY')
assert.equal(target.scientificName, 'Octopus vulgaris Cuvier, 1797')
assert.equal(target.rank, 'species')
assert.equal(String(target.sourceDatasetId), '1130')
assert.equal(sourceItem.licenseAssessment, 'item-level-verified')
assert.equal(sourceItem.licenseVersion, 'CC BY 4.0')
assert.equal(sourceItem.stableId, 'doi:10.1371/journal.pone.0149496')
assert.equal(source.claims.evolution.translationStatus, 'translated')

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.registry.manifestSha256, 'Pinned COL26.8 manifest changed')
const registry = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
const readGzipRows = relativePath => gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
const nameRoute = normalize(target.scientificName).slice(0, 2)
const acceptedMatches = (registry.search.routes[nameRoute] ?? []).flatMap(readGzipRows).filter(row => row.id === target.colId)
assert.equal(acceptedMatches.length, 1, 'Expected one pinned accepted-usage search row')
const accepted = acceptedMatches[0]
assert.equal(accepted.scientificName, target.scientificName)
assert.equal(accepted.rank, 'species')
assert.equal(accepted.status, 'accepted')
assert.equal(String(accepted.sourceDatasetId), String(target.sourceDatasetId))

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
const indexedRows = new Map()
let indexedCount = 0
for (const entry of index.shards) {
  const compressed = readFileSync(join(ROOT, entry.path))
  assert.equal(sha256(compressed), entry.compressedSha256, 'Compressed shard hash mismatch: ' + entry.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), entry.decodedSha256, 'Decoded shard hash mismatch: ' + entry.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(line => JSON.parse(line))
  assert.equal(rows.length, entry.recordCount, 'Shard count mismatch: ' + entry.path)
  indexedCount += rows.length
  for (const row of rows) {
    assert.ok(!indexedRows.has(row.colId), 'Duplicate indexed COL ID: ' + row.colId)
    indexedRows.set(row.colId, row)
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(index.shards.length, source.audit.indexedShardCount)
assert.equal(indexedCount, source.audit.indexedRecordCount)
const baseline = indexedRows.get(target.colId)
assert.ok(baseline, 'Target is absent from the current dossier index')
assert.equal(baseline.scientificName, target.scientificName)
for (let i = 0; i < baseline.classificationPath.length; i++) {
  const item = baseline.classificationPath[i]
  const route = createHash('sha256').update(item.id).digest('hex').slice(0, 2)
  const nodes = (registry.hierarchy.nodes.routes[route] ?? []).flatMap(readGzipRows).filter(row => row.id === item.id)
  assert.equal(nodes.length, 1, 'Expected one pinned hierarchy node for ' + item.id)
  const node = nodes[0]
  assert.equal(node.scientificName, item.scientificName)
  assert.equal(node.rank, item.rank)
  assert.equal(node.status, 'accepted')
  assert.equal(item.status, 'accepted')
  assert.equal(String(node.sourceDatasetId ?? ''), String(item.sourceDatasetId ?? ''))
  assert.equal(node.parentId ?? null, i === 0 ? null : baseline.classificationPath[i - 1].id, 'Accepted parent chain mismatch at ' + item.id)
}
assert.equal(baseline.classificationPath.at(-1).id, target.colId)
assert.equal(baseline.classificationPath.at(-1).sourceDatasetId, target.sourceDatasetId)
assert.equal(baseline.facets.evolution.status, 'not-assessed')
assert.equal(baseline.facets.evolution.claims.length, 0)
assert.equal(sha256(Buffer.from(JSON.stringify(baseline))), source.audit.previousTargetRecordSha256)
assert.ok(!baseline.sources.some(item => item.stableId === sourceItem.stableId), 'Selected article already occurs on target dossier')
for (const row of indexedRows.values()) {
  assert.ok(!row.sources?.some(item => item.stableId === sourceItem.stableId), 'Selected source already occurs in indexed dossiers: ' + row.colId)
}
const rawBefore = readFileSync(rawPath)
assert.equal(sha256(rawBefore), source.audit.previousRawSha256)
const compressedBefore = readFileSync(shardPath)
assert.equal(sha256(compressedBefore), source.audit.previousShardCompressedSha256)
const rawRows = rawBefore.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
assert.equal(rawRows.length, 3)
assert.deepEqual(rawRows.map(row => row.colId).sort(), ['48KQY', '5944Q', '699T3'])
assert.deepEqual(rawRows.find(row => row.colId === target.colId), baseline)

const claim = {
  ...source.claims.evolution,
  sourceIds: [sourceItem.id],
}
for (const key of ['text', 'textZh', 'locator', 'placeTimeScope', 'lifeStatus']) assert.ok(claim[key], 'Claim is missing ' + key)
const dossier = structuredClone(baseline)
dossier.checkedAt = source.checkedAt
dossier.sources.push(sourceItem)
dossier.facets.evolution = { status: 'partially-supported', claims: [claim], gaps: source.gaps.evolution }
dossier.completeness = {
  ...dossier.completeness,
  status: 'incomplete',
  reasons: [
    'Two focused primary sources support bounded claims in lifeHistory and evolution only.',
    'The other five scientific facets remain explicitly not assessed.',
    'No independent external expert review has been completed.',
  ],
}
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.expertReview.status, 'not-reviewed')
rawRows[rawRows.findIndex(row => row.colId === target.colId)] = dossier
const rawAfter = Buffer.from(rawRows.map(row => JSON.stringify(row)).join('\n') + '\n', 'utf8')
assert.ok(!rawAfter.includes(0x0d), 'Updated raw JSONL must use LF line endings')
const compressedAfter = brotliCompressSync(rawAfter, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressedAfter), rawAfter, 'Brotli round trip must preserve exact updated bytes')

const shardEntry = index.shards.find(entry => entry.path === source.audit.targetShardPath)
assert.ok(shardEntry)
shardEntry.decodedSha256 = sha256(rawAfter)
shardEntry.compressedSha256 = sha256(compressedAfter)
shardEntry.recordCount = rawRows.length
const sourceBatchManifest = JSON.parse(readFileSync(SOURCE_BATCH_MANIFEST_PATH, 'utf8'))
const priorUpdate = (sourceBatchManifest.supplementalUpdates ?? []).find(item => item.batchId === source.batchId)
assert.ok(!priorUpdate, 'Update manifest already exists; refusing mixed baseline')
sourceBatchManifest.supplementalUpdates = [...(sourceBatchManifest.supplementalUpdates ?? []), {
  batchId: source.batchId,
  sourcePath: 'data/sources/octopus-vulgaris-evolution-b50-2026-09-26.json',
  sourceSha256: sha256(sourceBytes),
  generator: 'scripts/update-octopus-vulgaris-evolution-b50.mjs',
  baseHead: source.audit.baseHead,
  indexedRecordCountAtAudit: source.audit.indexedRecordCount,
  targetColIds: [target.colId],
  previousDecodedSha256: source.audit.previousRawSha256,
  previousCompressedSha256: source.audit.previousShardCompressedSha256,
  previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
  decodedSha256: sha256(rawAfter),
  compressedSha256: sha256(compressedAfter),
  mode: 'in-place-add-one-source-bounded-evolution-claim',
}]
sourceBatchManifest.newShard.decodedBytes = rawAfter.length
sourceBatchManifest.newShard.decodedSha256 = sha256(rawAfter)
sourceBatchManifest.newShard.compressedBytes = compressedAfter.length
sourceBatchManifest.newShard.compressedSha256 = sha256(compressedAfter)

const updateManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: 'data/sources/octopus-vulgaris-evolution-b50-2026-09-26.json', sha256: sha256(sourceBytes) },
  baseHead: source.audit.baseHead,
  duplicateCheck: { indexedShardCount: index.shards.length, indexedRecordCount: indexedCount, stableId: sourceItem.stableId, sourceOccurrencesBeforeUpdate: 0, targetColIds: [target.colId], openPullRequests: source.audit.openPullRequests },
  target: { colId: target.colId, scientificName: target.scientificName, facet: 'evolution', priorStatus: 'not-assessed', newStatus: dossier.facets.evolution.status },
  previous: { rawSha256: source.audit.previousRawSha256, compressedSha256: source.audit.previousShardCompressedSha256, targetRecordSha256: source.audit.previousTargetRecordSha256 },
  output: { rawSha256: sha256(rawAfter), compressedSha256: sha256(compressedAfter), recordCount: rawRows.length, brotli: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  preservedSiblingColIds: source.audit.siblingColIds,
  registry: source.registry,
  appAndPagesPreviewManifestChanged: false,
  generator: 'scripts/update-octopus-vulgaris-evolution-b50.mjs',
}

writeFileSync(rawPath, rawAfter)
writeFileSync(shardPath, compressedAfter)
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + '\n', 'utf8')
writeFileSync(SOURCE_BATCH_MANIFEST_PATH, JSON.stringify(sourceBatchManifest, null, 2) + '\n', 'utf8')
writeFileSync(UPDATE_MANIFEST_PATH, JSON.stringify(updateManifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({ target: target.colId, facet: 'evolution', status: dossier.facets.evolution.status, indexedShardCount: index.shards.length, indexedRecordCount: indexedCount, preservedSiblingColIds: source.audit.siblingColIds, rawSha256: sha256(rawAfter), compressedSha256: sha256(compressedAfter), appAndPagesPreviewManifestChanged: false }, null, 2))
