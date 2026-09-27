import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'species-evidence-batch52-chelonia-ecology-2026-09-27.json')
const EXPECTED_INPUT_SHA256 = '473250ebead54f584541ed4ebc50a9b6a0ec73ed713f86931ed1aacd03b7818c'
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-species-evidence-batch38-2026-09-25.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'chelonia-ecology-batch52-2026-09-27.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SIBLINGS = ['3GF5W', '4KF7P']

const inputBytes = readFileSync(SOURCE_PATH)
assert.equal(sha(inputBytes), EXPECTED_INPUT_SHA256, 'Reviewed source input changed')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, 'species-evidence-batch52-chelonia-ecology-2026-09-27')
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.target.colId, 'TVGD')
assert.equal(input.audit.sourceStableId, input.source.stableId)

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha(registryManifestBytes), input.registry.manifestSha256)
const registry = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registry.releaseAlias, input.releaseAlias)
assert.equal(registry.releaseDate, input.registry.releaseDate)
assert.equal(registry.checklistBankDatasetKey, input.registry.checklistBankDatasetKey)
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const route = normalize(input.target.scientificName).slice(0, 2)
const registryRows = (registry.search.routes[route] ?? []).flatMap(path => gunzipSync(readFileSync(join(REGISTRY_ROOT, path)))
  .toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse))
const accepted = registryRows.filter(row => row.id === input.target.colId)
assert.equal(accepted.length, 1)
for (const key of ['scientificName', 'rank', 'sourceDatasetId']) assert.equal(String(accepted[0][key]), String(input.target[key]))
assert.equal(accepted[0].authorship, '(Linnaeus, 1758)')
assert.equal(accepted[0].status, 'accepted')
assert.deepEqual(accepted[0].classification, input.target.classification)

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
assert.equal(index.shards.length, input.audit.indexedShardCount)
assert.equal(index.recordCount, input.audit.indexedRecordCount)
const indexedRows = new Map()
const sourceMatches = []
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha(compressed), shard.compressedSha256, 'Compressed hash mismatch: ' + shard.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), shard.decodedSha256, 'Decoded hash mismatch: ' + shard.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.equal(rows.length, shard.recordCount)
  for (const row of rows) {
    assert.ok(!indexedRows.has(row.colId), 'Duplicate indexed COL usage ' + row.colId)
    indexedRows.set(row.colId, row)
    for (const source of row.sources ?? []) {
      if (source.stableId === input.source.stableId) sourceMatches.push({ colId: row.colId, scientificName: row.scientificName })
    }
  }
}
assert.equal(indexedRows.size, index.recordCount)
assert.equal(sourceMatches.length, input.audit.sourceOccurrencesBeforeUpdate)
assert.deepEqual(sourceMatches, [])

const shardEntry = index.shards.find(item => item.path === relative(SHARD_PATH))
assert.ok(shardEntry)
const previousCompressed = readFileSync(SHARD_PATH)
const previousRaw = brotliDecompressSync(previousCompressed)
assert.equal(sha(previousRaw), input.audit.previousRawSha256)
assert.equal(sha(previousCompressed), input.audit.previousCompressedSha256)
const rows = previousRaw.toString('utf8').trimEnd().split('\n').map(JSON.parse)
const targetMatches = rows.filter(row => row.colId === input.target.colId)
assert.equal(targetMatches.length, input.audit.targetRecordCountBeforeUpdate)
const target = targetMatches[0]
assert.equal(target.scientificName, input.target.scientificName)
assert.equal(target.rank, input.target.rank)
assert.equal(String(target.sourceDatasetId), input.target.sourceDatasetId)
assert.equal(sha(Buffer.from(JSON.stringify(target))), input.audit.previousTargetRecordSha256)
assert.deepEqual(rows.filter(row => row.colId !== target.colId).map(row => row.colId).sort(), EXPECTED_SIBLINGS)
assert.deepEqual([...input.audit.siblingColIds].sort(), EXPECTED_SIBLINGS)
assert.equal(target.facets.ecology.status, 'not-assessed')
assert.equal(target.facets.ecology.claims.length, 0)
assert.ok(!target.sources.some(source => source.stableId === input.source.stableId))

const source = input.source
assert.equal(source.licenseAssessment, 'item-level-verified')
assert.equal(source.licenseVersion, 'CC BY 4.0')
for (const key of ['rightsHolder', 'licenseAppliesTo', 'rightsEvidenceUrl', 'rightsEvidenceLocator', 'attribution', 'stableId', 'publishedAt', 'accessedAt']) {
  assert.ok(source[key], 'Missing source rights or provenance field ' + key)
}
assert.equal(input.claim.translationStatus, 'translated')
assert.deepEqual(input.claim.sourceIds, [source.id])
assert.ok(input.claim.locator && input.claim.placeTimeScope && input.claim.lifeStatus)

const dossier = structuredClone(target)
dossier.checkedAt = input.checkedAt
dossier.sources.push(source)
dossier.facets.ecology = {
  status: 'partially-supported',
  claims: [...target.facets.ecology.claims, input.claim],
  gaps: [...new Set([...target.facets.ecology.gaps, ...input.gaps])],
}
dossier.completeness = {
  status: 'incomplete',
  reasons: [
    'Life history remains supported by one rookery-specific nesting source; ecology now adds one bounded study of green-turtle grazing effects in a single seagrass meadow.',
    'Morphology, evolution, distribution, fossil evidence and conservation remain not assessed; life history and ecology are not complete reviews.',
    'The ecological source combines simulated clipping with local natural-grazing comparisons and does not directly measure long-term sediment carbon stocks or range-wide population effects.',
    'Independent external expert review has not been completed.',
  ],
}
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.facets.ecology.claims.length, 1)
assert.ok(dossier.facets.ecology.claims.every(claim => claim.sourceIds?.every(id => dossier.sources.some(item => item.id === id))))

const rawBytes = Buffer.from(rows.map(row => JSON.stringify(row.colId === dossier.colId ? dossier : row)).join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Updated shard JSONL must use LF only')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes)
const outputRows = rawBytes.toString('utf8').trimEnd().split('\n').map(JSON.parse)
assert.equal(outputRows.length, shardEntry.recordCount)
assert.deepEqual(outputRows.filter(row => row.colId !== dossier.colId).map(row => row.colId).sort(), EXPECTED_SIBLINGS)
shardEntry.decodedSha256 = sha(rawBytes)
shardEntry.compressedSha256 = sha(compressedBytes)

const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha(inputBytes) },
  duplicateCheck: {
    mode: 'in-place-update',
    indexedShardCount: index.shards.length,
    indexedRecordCount: index.recordCount,
    sourceStableIds: [source.stableId],
    sourceOccurrencesBeforeUpdate: sourceMatches.length,
    matchedColIds: [dossier.colId],
    matchedNames: [dossier.scientificName.toLocaleLowerCase('en-US')],
    openPullRequests: [],
  },
  updateAudit: {
    baseHead: input.audit.baseHead,
    indexedShardCountAtAudit: input.audit.indexedShardCount,
    indexedRecordCountAtAudit: input.audit.indexedRecordCount,
    targetColId: dossier.colId,
    targetScientificName: dossier.scientificName,
    targetRecordCountBeforeUpdate: targetMatches.length,
    targetShardPath: relative(SHARD_PATH),
    previousRawSha256: sha(previousRaw),
    previousCompressedSha256: sha(previousCompressed),
    previousTargetRecordSha256: input.audit.previousTargetRecordSha256,
    sourceOccurrencesBeforeUpdate: sourceMatches.length,
    openPullRequests: [],
    openPullRequestSearch: input.audit.openPullRequestSearch,
    mode: 'in-place-add-one-site-bounded-green-turtle-grazing-ecology-claim',
    indexedRecordCountAfterUpdate: index.recordCount,
    outputRawSha256: sha(rawBytes),
    outputCompressedSha256: sha(compressedBytes),
  },
  sources: [{ id: source.id, stableId: source.stableId, licenseAssessment: source.licenseAssessment, licenseVersion: source.licenseVersion, rightsHolder: source.rightsHolder }],
  shard: {
    path: relative(SHARD_PATH),
    encoding: 'brotli-jsonl',
    recordCount: outputRows.length,
    decodedBytes: rawBytes.length,
    decodedSha256: sha(rawBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha(compressedBytes),
    brotliParameters: { quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: input.registry,
  preservedSiblingColIds: EXPECTED_SIBLINGS,
  generator: 'scripts/update-chelonia-ecology-batch52.mjs',
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
  indexedRecordCount: index.recordCount,
  preservedSiblingColIds: EXPECTED_SIBLINGS,
  sourceOccurrencesBeforeUpdate: sourceMatches.length,
  outputRawSha256: sha(rawBytes),
  outputCompressedSha256: sha(compressedBytes),
  roundTrip: brotliDecompressSync(compressedBytes).equals(rawBytes),
}, null, 2))
