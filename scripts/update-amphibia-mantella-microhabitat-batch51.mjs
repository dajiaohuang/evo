import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'amphibia-mantella-microhabitat-b51-2026-09-27.json')
const EXPECTED_INPUT_SHA256 = '23a3ce5a9f17b63b95e13359a921a8ec67262c794f196b8569c563d5916b5e6c'
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-amphibia-batch-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'amphibia-mantella-microhabitat-b51-2026-09-27.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SIBLINGS = ['3SLRG', '4ZMCC', 'CQ4M', 'J8YL']

const inputBytes = readFileSync(SOURCE_PATH)
assert.equal(sha(inputBytes), EXPECTED_INPUT_SHA256, 'Reviewed Mantella source input changed')
const source = JSON.parse(inputBytes.toString('utf8'))
assert.equal(source.batchId, 'amphibia-mantella-microhabitat-batch51-2026-09-27')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.target.colId, '736LN')
assert.equal(source.source.stableId, source.audit.sourceStableId)

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha(registryManifestBytes), source.registry.manifestSha256)
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, source.registry.releaseDate)
assert.equal(registryManifest.checklistBankDatasetKey, source.registry.checklistBankDatasetKey)
const registryRows = (registryManifest.search.routes.ma ?? []).flatMap(path => gunzipSync(readFileSync(join(REGISTRY_ROOT, path)))
  .toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse))
const accepted = registryRows.filter(row => row.id === source.target.colId)
assert.equal(accepted.length, 1)
assert.equal(accepted[0].scientificName, source.target.scientificName)
assert.equal(accepted[0].rank, 'species')
assert.equal(accepted[0].status, 'accepted')
assert.equal(String(accepted[0].sourceDatasetId), source.target.sourceDatasetId)
assert.deepEqual(accepted[0].classification, source.target.classification)
assert.ok(accepted[0].classification.includes('Amphibia'))

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
assert.equal(index.shards.length, source.audit.indexedShardCount)
assert.equal(index.recordCount, source.audit.indexedRecordCount)
const indexedRows = new Map()
for (const item of index.shards) {
  const compressed = readFileSync(join(ROOT, item.path))
  assert.equal(sha(compressed), item.compressedSha256, `Compressed hash mismatch: ${item.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), item.decodedSha256, `Decoded hash mismatch: ${item.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, item.recordCount)
  for (const row of rows) {
    assert.ok(!indexedRows.has(row.colId), `Duplicate indexed COL usage ${row.colId}`)
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
const rows = previousRaw.toString('utf8').trimEnd().split('\n').map(JSON.parse)
const targetMatches = rows.filter(row => row.colId === source.target.colId)
assert.equal(targetMatches.length, source.audit.targetRecordCountBeforeUpdate)
const target = targetMatches[0]
assert.equal(target.scientificName, source.target.scientificName)
assert.equal(target.rank, 'species')
assert.equal(sha(Buffer.from(JSON.stringify(target))), source.audit.previousTargetRecordSha256)
assert.deepEqual(rows.filter(row => row.colId !== target.colId).map(row => row.colId).sort(), EXPECTED_SIBLINGS)
assert.deepEqual([...source.audit.siblingColIds].sort(), EXPECTED_SIBLINGS)
assert.equal(target.facets.ecology.status, 'partially-supported')
assert.ok(!target.sources.some(item => item.stableId === source.source.stableId))
assert.ok(!target.facets.ecology.claims.some(claim => claim.sourceIds?.includes(source.source.id)))

const sourceRecord = source.source
assert.equal(sourceRecord.licenseAssessment, 'item-level-verified')
assert.equal(sourceRecord.licenseVersion, 'CC BY 4.0')
for (const key of ['rightsHolder', 'licenseAppliesTo', 'rightsEvidenceUrl', 'rightsEvidenceLocator', 'attribution', 'stableId', 'publishedAt', 'accessedAt']) {
  assert.ok(sourceRecord[key], `Missing source rights or provenance field ${key}`)
}
assert.equal(source.claim.translationStatus, 'untranslated')
assert.deepEqual(source.claim.sourceIds, [sourceRecord.id])
assert.ok(source.claim.locator && source.claim.placeTimeScope && source.claim.lifeStatus)

const dossier = structuredClone(target)
dossier.checkedAt = source.checkedAt
dossier.sources.push(sourceRecord)
dossier.facets.ecology = {
  status: 'partially-supported',
  claims: [...target.facets.ecology.claims, source.claim],
  gaps: [...new Set([...target.facets.ecology.gaps, ...source.gaps])],
}
dossier.completeness = {
  status: 'incomplete',
  reasons: [
    'Ecology now includes one captive/wild-male playback experiment and one ten-site microhabitat field survey; neither establishes species-wide behavior or habitat use.',
    'Morphology, life history, evolution, distribution, fossil evidence and conservation remain unassessed; the selected sources are not a systematic review of the accepted COL26.8 concept.',
    'The field study reports root-count patterns at multiple analysis levels without a single monotonic direction; no population-wide habitat preference is inferred.',
    'Independent external expert review has not been completed.',
  ],
}
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.facets.ecology.claims.length, target.facets.ecology.claims.length + 1)
assert.ok(dossier.facets.ecology.claims.every(claim => claim.sourceIds?.every(id => dossier.sources.some(item => item.id === id))))

const rawBytes = Buffer.from(rows.map(row => JSON.stringify(row.colId === dossier.colId ? dossier : row)).join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d))
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes)
const outputRows = rawBytes.toString('utf8').trimEnd().split('\n').map(JSON.parse)
assert.equal(outputRows.length, shardEntry.recordCount)
assert.deepEqual(outputRows.filter(row => row.colId !== dossier.colId).map(row => row.colId).sort(), EXPECTED_SIBLINGS)
shardEntry.decodedSha256 = sha(rawBytes)
shardEntry.compressedSha256 = sha(compressedBytes)

const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha(inputBytes) },
  duplicateCheck: {
    mode: 'in-place-update', indexedShardCount: index.shards.length, indexedRecordCount: index.recordCount,
    sourceStableIds: [source.source.stableId], sourceOccurrencesBeforeUpdate: doiMatches.length,
    matchedColIds: [dossier.colId], matchedNames: [dossier.scientificName.toLocaleLowerCase('en-US')],
    openPullRequests: [],
  },
  updateAudit: {
    baseHead: source.audit.baseHead, indexedShardCountAtAudit: source.audit.indexedShardCount,
    indexedRecordCountAtAudit: source.audit.indexedRecordCount, targetColId: dossier.colId,
    targetScientificName: dossier.scientificName, targetRecordCountBeforeUpdate: targetMatches.length,
    targetShardPath: relative(SHARD_PATH), previousRawSha256: sha(previousRaw),
    previousCompressedSha256: sha(previousCompressed), previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
    sourceOccurrencesBeforeUpdate: doiMatches.length, openPullRequests: [],
    openPullRequestSearch: source.audit.openPullRequestSearch,
    mode: 'in-place-add-sample-bounded-wild-microhabitat-ecology-source',
    indexedRecordCountAfterUpdate: index.recordCount, outputRawSha256: sha(rawBytes), outputCompressedSha256: sha(compressedBytes),
  },
  sources: [{ id: sourceRecord.id, stableId: sourceRecord.stableId, licenseAssessment: sourceRecord.licenseAssessment, licenseVersion: sourceRecord.licenseVersion, rightsHolder: sourceRecord.rightsHolder }],
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: outputRows.length, decodedBytes: rawBytes.length, decodedSha256: sha(rawBytes), compressedBytes: compressedBytes.length, compressedSha256: sha(compressedBytes), brotliParameters: { quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: source.registry,
  preservedSiblingColIds: EXPECTED_SIBLINGS,
  generator: 'scripts/update-amphibia-mantella-microhabitat-batch51.mjs',
  updateMode: 'in-place-enrichment-of-one-existing-record',
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(SHARD_PATH, compressedBytes)
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + '\n', 'utf8')
writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({ batchId: source.batchId, targetColId: dossier.colId, ecologyClaims: dossier.facets.ecology.claims.length, indexedRecordCount: index.recordCount, preservedSiblingColIds: EXPECTED_SIBLINGS, sourceOccurrencesBeforeUpdate: doiMatches.length, outputRawSha256: sha(rawBytes), outputCompressedSha256: sha(compressedBytes), roundTrip: brotliDecompressSync(compressedBytes).equals(rawBytes) }, null, 2))
