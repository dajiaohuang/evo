import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'amphibia-staurois-morphology-b50-2026-09-26.json')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-amphibia-batch-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'amphibia-staurois-morphology-b50-2026-09-26.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const source = JSON.parse(readFileSync(SOURCE_PATH, 'utf8'))
assert.equal(source.batchId, 'amphibia-staurois-morphology-batch50-2026-09-26')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.target.colId, '4ZMCC')
assert.equal(source.source.stableId, source.audit.sourceStableId)

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha(registryManifestBytes), source.registry.manifestSha256)
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, source.registry.releaseDate)
assert.equal(registryManifest.checklistBankDatasetKey, source.registry.checklistBankDatasetKey)
const route = registryManifest.search.routes.st ?? []
const registryRows = route.flatMap(path => gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse))
const accepted = registryRows.filter(row => row.id === source.target.colId)
assert.equal(accepted.length, 1)
assert.equal(accepted[0].scientificName, source.target.scientificName)
assert.equal(accepted[0].rank, 'species')
assert.equal(accepted[0].status, 'accepted')
assert.equal(String(accepted[0].sourceDatasetId), source.target.sourceDatasetId)
assert.equal(accepted[0].parentId, source.target.parentId)
assert.deepEqual(accepted[0].classification, source.target.classification)
assert.ok(accepted[0].classification.includes('Amphibia'))

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
assert.equal(index.shards.length, source.audit.indexedShardCount)
assert.equal(index.recordCount, source.audit.indexedRecordCount)
const indexedRows = new Map()
for (const item of index.shards) {
  const compressed = readFileSync(join(ROOT, item.path))
  assert.equal(sha(compressed), item.compressedSha256, 'Compressed hash mismatch: ' + item.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), item.decodedSha256, 'Decoded hash mismatch: ' + item.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, item.recordCount)
  for (const row of rows) {
    assert.ok(!indexedRows.has(row.colId), 'Duplicate indexed COL usage ' + row.colId)
    indexedRows.set(row.colId, row)
  }
}
assert.equal(indexedRows.size, index.recordCount)
const doiMatches = [...indexedRows.values()].flatMap(row => row.sources ?? []).filter(item => item.stableId === source.source.stableId)
assert.equal(doiMatches.length, source.audit.sourceOccurrencesBeforeUpdate)
const shardEntry = index.shards.find(item => item.path === relative(SHARD_PATH))
assert.ok(shardEntry)
const previousCompressed = readFileSync(SHARD_PATH)
const previousRaw = brotliDecompressSync(previousCompressed)
assert.equal(sha(previousRaw), source.audit.previousRawSha256)
assert.equal(sha(previousCompressed), source.audit.previousCompressedSha256)
const rawLines = previousRaw.toString('utf8').trimEnd().split('\n')
const rows = rawLines.map(JSON.parse)
const targetMatches = rows.filter(row => row.colId === source.target.colId)
assert.equal(targetMatches.length, 1)
const target = targetMatches[0]
assert.equal(target.scientificName, source.target.scientificName)
assert.equal(sha(Buffer.from(JSON.stringify(target))), source.audit.previousTargetRecordSha256)
assert.deepEqual(rows.filter(row => row.colId !== source.target.colId).map(row => row.colId).sort(), [...source.audit.siblingColIds].sort())
assert.equal(target.facets.morphology.status, 'not-assessed', 'Morphology facet has already been assessed')
assert.ok(!target.sources.some(item => item.stableId === source.source.stableId))

const sourceRecord = source.source
assert.equal(sourceRecord.licenseAssessment, 'item-level-verified')
assert.equal(sourceRecord.licenseVersion, 'CC BY 4.0')
for (const key of ['rightsHolder', 'licenseAppliesTo', 'attribution', 'stableId', 'publishedAt', 'accessedAt']) assert.ok(sourceRecord[key])
assert.equal(source.claim.translationStatus, 'untranslated')
assert.ok(source.claim.locator && source.claim.placeTimeScope && source.claim.lifeStatus)
const dossier = structuredClone(target)
dossier.checkedAt = source.checkedAt
dossier.sources.push(sourceRecord)
dossier.facets.morphology = {
  status: 'partially-supported',
  claims: [source.claim],
  gaps: source.gaps,
}
dossier.completeness = {
  status: 'incomplete',
  reasons: [
    'Larval chondrocranial morphology is represented by one developmental series from a single zoo breeding facility; life history, evolution, distribution, fossil evidence and conservation remain unassessed.',
    'The series does not establish variation among wild populations or the taxonomic diagnostic value of the observed feature; broader literature coverage remains incomplete.',
    'Independent external expert review has not been completed.',
  ],
}
assert.equal(dossier.rank, 'species')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.facets.morphology.status, 'partially-supported')
assert.ok(dossier.facets.morphology.claims.every(claim => claim.sourceIds?.includes(sourceRecord.id)))

const outputLines = rows.map(row => row.colId === dossier.colId ? JSON.stringify(dossier) : JSON.stringify(row))
const rawBytes = Buffer.from(outputLines.join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d))
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes)
const outputRows = rawBytes.toString('utf8').trimEnd().split('\n').map(JSON.parse)
assert.equal(outputRows.length, shardEntry.recordCount)
assert.deepEqual(outputRows.filter(row => row.colId !== dossier.colId).map(row => row.colId).sort(), [...source.audit.siblingColIds].sort())
shardEntry.decodedSha256 = sha(rawBytes)
shardEntry.compressedSha256 = sha(compressedBytes)

const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha(readFileSync(SOURCE_PATH)) },
  duplicateCheck: {
    mode: 'in-place-update', indexedShardCount: index.shards.length, indexedRecordCount: index.recordCount,
    sourceStableIds: [source.source.stableId], sourceOccurrencesBeforeUpdate: doiMatches.length,
    matchedColIds: [dossier.colId], matchedNames: [dossier.scientificName.toLocaleLowerCase('en-US')],
    openPullRequests: [],
  },
  updateAudit: {
    baseHead: source.audit.baseHead, indexedShardCountAtAudit: source.audit.indexedShardCount,
    indexedRecordCountAtAudit: index.recordCount, targetColId: dossier.colId,
    targetScientificName: dossier.scientificName, targetRecordCountBeforeUpdate: 1,
    targetShardPath: relative(SHARD_PATH), previousRawSha256: sha(previousRaw),
    previousCompressedSha256: sha(previousCompressed), previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
    sourceOccurrencesBeforeUpdate: doiMatches.length, openPullRequests: [],
    openPullRequestSearch: source.audit.openPullRequestSearch,
    mode: 'in-place-add-captive-development-series-bounded-larval-morphology-source',
    indexedRecordCountAfterUpdate: index.recordCount, outputRawSha256: sha(rawBytes), outputCompressedSha256: sha(compressedBytes),
  },
  sources: [{ id: sourceRecord.id, stableId: sourceRecord.stableId, licenseAssessment: sourceRecord.licenseAssessment, licenseVersion: sourceRecord.licenseVersion, rightsHolder: sourceRecord.rightsHolder }],
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: outputRows.length, decodedBytes: rawBytes.length, decodedSha256: sha(rawBytes), compressedBytes: compressedBytes.length, compressedSha256: sha(compressedBytes), brotliParameters: { quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: source.registry,
  preservedSiblingColIds: source.audit.siblingColIds,
  generator: 'scripts/update-amphibia-staurois-morphology-batch50.mjs',
  updateMode: 'in-place-enrichment-of-one-existing-record',
  appAndPagesPreviewManifestChanged: false,
}
writeFileSync(SHARD_PATH, compressedBytes)
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + '\n', 'utf8')
writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({ batchId: source.batchId, targetColId: dossier.colId, status: dossier.facets.morphology.status, indexedRecordCount: index.recordCount, preservedSiblingColIds: source.audit.siblingColIds, sourceOccurrencesBeforeUpdate: doiMatches.length, outputRawSha256: sha(rawBytes), outputCompressedSha256: sha(compressedBytes), roundTrip: brotliDecompressSync(compressedBytes).equals(rawBytes) }, null, 2))
