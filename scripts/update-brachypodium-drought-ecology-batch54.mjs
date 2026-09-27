import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'brachypodium-drought-ecology-batch54-2026-09-27.json')
const EXPECTED_INPUT_SHA256 = '568f554005a78aa2914f3bbb81790118cb28a8c01d198cf0c2db9e3b3aba8c95'
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-all.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'brachypodium-drought-ecology-batch54-2026-09-27.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha(sourceBytes), EXPECTED_INPUT_SHA256, 'Reviewed Brachypodium source input changed')
const input = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(input.batchId, 'brachypodium-drought-ecology-batch54-2026-09-27')
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.target.colId, '5WQ6Q')
assert.equal(input.target.sourceDatasetId, '2232')
assert.equal(input.source.stableId, input.audit.sourceStableId)
assert.equal(input.appAndPagesPreviewManifestChanged, false)

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha(registryManifestBytes), input.registry.manifestSha256)
const registry = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registry.releaseAlias, input.releaseAlias)
assert.equal(registry.releaseDate, input.registry.releaseDate)
assert.equal(registry.checklistBankDatasetKey, input.registry.checklistBankDatasetKey)
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const route = normalize(input.target.scientificName).slice(0, 2)
const acceptedRows = (registry.search.routes[route] ?? []).flatMap(path => gunzipSync(readFileSync(join(REGISTRY_ROOT, path)))
  .toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)).filter(row => row.id === input.target.colId)
assert.equal(acceptedRows.length, 1, 'Expected exactly one accepted-usage row for the COL26.8 target')
const accepted = acceptedRows[0]
for (const key of ['scientificName', 'rank', 'status', 'sourceDatasetId']) assert.equal(String(accepted[key]), String(input.target[key]))
assert.deepEqual(accepted.classification, input.target.classification)

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
assert.equal(index.releaseAlias, input.releaseAlias)
assert.equal(index.shards.length, input.audit.indexedShardCount)
assert.equal(index.recordCount, input.audit.indexedRecordCount)
const indexedRows = new Map()
const sourceMatches = []
for (const item of index.shards) {
  const compressed = readFileSync(join(ROOT, item.path))
  assert.equal(sha(compressed), item.compressedSha256, 'Compressed hash mismatch: ' + item.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), item.decodedSha256, 'Decoded hash mismatch: ' + item.path)
  const shardRows = decoded.toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
  assert.equal(shardRows.length, item.recordCount, 'Record count mismatch: ' + item.path)
  for (const row of shardRows) {
    assert.ok(!indexedRows.has(row.colId), 'Duplicate indexed COL ID: ' + row.colId)
    indexedRows.set(row.colId, row)
    for (const existingSource of row.sources ?? []) {
      if (existingSource.stableId === input.source.stableId) sourceMatches.push({ colId: row.colId, scientificName: row.scientificName })
    }
  }
}
assert.equal(indexedRows.size, index.recordCount)
assert.equal(sourceMatches.length, input.audit.sourceOccurrencesBeforeUpdate, 'Source DOI duplicate check changed')
assert.deepEqual(sourceMatches, [])
const shardEntry = index.shards.find(item => item.path === input.audit.targetShardPath)
assert.ok(shardEntry, 'Target dossier shard is absent from the index')
assert.equal(shardEntry.path, relative(SHARD_PATH))
const previousCompressed = readFileSync(SHARD_PATH)
const previousRaw = brotliDecompressSync(previousCompressed)
assert.equal(sha(previousRaw), input.audit.previousRawSha256)
assert.equal(sha(previousCompressed), input.audit.previousCompressedSha256)
const rows = previousRaw.toString('utf8').trimEnd().split('\n').map(JSON.parse)
assert.equal(rows.length, shardEntry.recordCount)
const targetRows = rows.filter(row => row.colId === input.target.colId)
assert.equal(targetRows.length, input.audit.targetRecordCountBeforeUpdate)
const target = targetRows[0]
assert.equal(target.scientificName, input.target.scientificName)
assert.equal(target.rank, input.target.rank)
assert.equal(target.sourceDatasetId, input.target.sourceDatasetId)
assert.equal(sha(Buffer.from(JSON.stringify(target))), input.audit.previousTargetRecordSha256)
const otherRowsBytes = Buffer.from(rows.filter(row => row.colId !== target.colId).map(JSON.stringify).join('\n') + '\n', 'utf8')
assert.equal(sha(otherRowsBytes), input.audit.otherRowsSha256, 'Unrelated dossier rows changed since review')
assert.equal(target.facets.ecology.status, 'partially-supported')
assert.ok(!target.sources.some(item => item.stableId === input.source.stableId))
assert.ok(!target.facets.ecology.claims.some(claim => claim.sourceIds?.includes(input.source.id)))

const sourceRecord = input.source
assert.equal(sourceRecord.licenseAssessment, 'item-level-verified')
assert.equal(sourceRecord.licenseVersion, 'CC BY 4.0')
for (const key of ['rightsHolder', 'licenseAppliesTo', 'rightsEvidenceUrl', 'rightsEvidenceLocator', 'attribution', 'stableId', 'publishedAt', 'accessedAt']) {
  assert.ok(sourceRecord[key], 'Missing source rights or provenance field ' + key)
}
assert.equal(input.claim.translationStatus, 'translated')
assert.deepEqual(input.claim.sourceIds, [sourceRecord.id])
assert.ok(input.claim.locator && input.claim.placeTimeScope && input.claim.lifeStatus)

const dossier = structuredClone(target)
dossier.checkedAt = input.checkedAt
dossier.sources.push(sourceRecord)
dossier.facets.ecology = {
  status: 'partially-supported',
  claims: [...target.facets.ecology.claims, input.claim],
  gaps: [...new Set([...target.facets.ecology.gaps, ...input.gaps])],
}
dossier.completeness = {
  status: 'incomplete',
  reasons: [
    'Ecology now combines a regional habitat note with one controlled drought-response experiment on selected ecotypes; neither establishes ecological response across the full species range or all populations.',
    'Life history, evolution, full distribution, fossil evidence and conservation remain unassessed; morphology is limited to the regional flora account.',
    'A systematic literature review and complete comparison of source circumscriptions with the COL26.8 accepted species concept remain incomplete.',
    'Independent external expert review has not been completed.',
  ],
}
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.facets.ecology.claims.length, target.facets.ecology.claims.length + 1)
assert.ok(dossier.facets.ecology.claims.every(claim => claim.sourceIds?.every(id => dossier.sources.some(item => item.id === id))))

const outputRows = rows.map(row => row.colId === dossier.colId ? dossier : row)
const rawBytes = Buffer.from(outputRows.map(row => JSON.stringify(row)).join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Updated shard JSONL must use LF only')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes, 'Brotli round-trip must be byte-for-byte exact')
const serializedRows = rawBytes.toString('utf8').trimEnd().split('\n').map(JSON.parse)
assert.equal(serializedRows.length, shardEntry.recordCount)
const outputOthersBytes = Buffer.from(serializedRows.filter(row => row.colId !== dossier.colId).map(JSON.stringify).join('\n') + '\n', 'utf8')
assert.equal(sha(outputOthersBytes), input.audit.otherRowsSha256, 'Unrelated dossier rows must remain unchanged')
shardEntry.decodedSha256 = sha(rawBytes)
shardEntry.compressedSha256 = sha(compressedBytes)

const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha(sourceBytes) },
  duplicateCheck: {
    mode: 'in-place-update',
    indexedShardCount: index.shards.length,
    indexedRecordCount: index.recordCount,
    sourceStableIds: [sourceRecord.stableId],
    sourceOccurrencesBeforeUpdate: sourceMatches.length,
    matchedColIds: [dossier.colId],
    matchedNames: [dossier.scientificName.toLocaleLowerCase('en-US')],
    openPullRequestSearch: input.audit.openPullRequestSearch,
  },
  updateAudit: {
    baseHead: input.audit.baseHead,
    indexedShardCountAtAudit: input.audit.indexedShardCount,
    indexedRecordCountAtAudit: input.audit.indexedRecordCount,
    targetColId: dossier.colId,
    targetScientificName: dossier.scientificName,
    targetRecordCountBeforeUpdate: targetRows.length,
    targetShardPath: relative(SHARD_PATH),
    previousRawSha256: sha(previousRaw),
    previousCompressedSha256: sha(previousCompressed),
    previousTargetRecordSha256: input.audit.previousTargetRecordSha256,
    preservedOtherRowCount: rows.length - targetRows.length,
    preservedOtherRowsSha256: input.audit.otherRowsSha256,
    sourceOccurrencesBeforeUpdate: sourceMatches.length,
    openPullRequestSearch: input.audit.openPullRequestSearch,
    mode: 'in-place-add-selected-accession-controlled-drought-ecology-claim',
    indexedRecordCountAfterUpdate: index.recordCount,
    outputRawSha256: sha(rawBytes),
    outputCompressedSha256: sha(compressedBytes),
  },
  sources: [{
    id: sourceRecord.id,
    stableId: sourceRecord.stableId,
    licenseAssessment: sourceRecord.licenseAssessment,
    licenseVersion: sourceRecord.licenseVersion,
    rightsHolder: sourceRecord.rightsHolder,
  }],
  shard: {
    path: relative(SHARD_PATH),
    encoding: 'brotli-jsonl',
    recordCount: serializedRows.length,
    decodedBytes: rawBytes.length,
    decodedSha256: sha(rawBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha(compressedBytes),
    brotliParameters: { quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: input.registry,
  generator: 'scripts/update-brachypodium-drought-ecology-batch54.mjs',
  updateMode: 'in-place-enrichment-of-one-existing-record',
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(SHARD_PATH, compressedBytes)
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + '\n', 'utf8')
writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({
  batchId: input.batchId,
  targetColId: dossier.colId,
  ecologyClaims: dossier.facets.ecology.claims.length,
  statuses: Object.fromEntries(FACETS.map(key => [key, dossier.facets[key].status])),
  indexedRecordCount: index.recordCount,
  preservedOtherRows: rows.length - targetRows.length,
  sourceOccurrencesBeforeUpdate: sourceMatches.length,
  outputRawSha256: sha(rawBytes),
  outputCompressedSha256: sha(compressedBytes),
  exactRoundTrip: brotliDecompressSync(compressedBytes).equals(rawBytes),
  appAndPagesPreviewManifestChanged: false,
}, null, 2))
