import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/primates-callithrix-jacchus-evidence-expansion-b40-2026-09-25.json'
const OUTPUT = 'data/knowledge/primates-callithrix-jacchus-evidence-expansion-b40-2026-09-25.batch-manifest.json'
const EXPECTED_INPUT_SHA256 = 'eada223ab3b03fecc1178d936571be00490330a6ad8b6f442ba8a8cf0bffe09c'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const json = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Pinned evidence input SHA-256 mismatch')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, 'primates-callithrix-jacchus-evidence-expansion-b40-2026-09-25')
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.target.colId, '697NS')
assert.equal(input.target.scientificName, 'Callithrix jacchus (Linnaeus, 1758)')
assert.equal(input.target.sourceDatasetId, '2144')
assert.equal(input.baseAudit.indexedRecordCount, 6969)
assert.equal(input.baseAudit.indexedShardCount, 63)
assert.deepEqual(input.baseAudit.openPullRequests, [])

const registryManifest = json('data/catalogue-of-life/releases/2026-08-20/registry/manifest.json')
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
assert.equal(sha256(readFileSync(join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json'))), input.baseAudit.registryManifestSha256)

const indexPath = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const index = JSON.parse(readFileSync(indexPath, 'utf8'))
assert.equal(index.releaseAlias, input.releaseAlias)
assert.equal(index.recordCount, input.baseAudit.indexedRecordCount)
assert.equal(index.shards.length, input.baseAudit.indexedShardCount)
const shardEntry = index.shards.find(shard => shard.path === input.target.shardPath)
assert.ok(shardEntry, 'Expected Callithrix dossier shard in the canonical index')

const metadataPath = join(ROOT, input.target.metadataPath)
const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'))
const existingSupplement = (metadata.supplementalUpdates ?? []).find(item => item.batchId === input.batchId)
const rawPath = join(ROOT, input.target.rawPath)
const shardPath = join(ROOT, input.target.shardPath)
const rawBefore = readFileSync(rawPath)
const compressedBefore = readFileSync(shardPath)

if (existingSupplement) {
  assert.equal(existingSupplement.inputSha256, sha256(inputBytes), 'Existing supplement was built from different evidence input')
  assert.equal(sha256(rawBefore), existingSupplement.decodedSha256)
  assert.equal(sha256(compressedBefore), existingSupplement.compressedSha256)
  const row = JSON.parse(rawBefore.toString('utf8').trimEnd())
  assert.equal(sha256(Buffer.from(JSON.stringify(row))), existingSupplement.targetRecordSha256)
  assert.equal(shardEntry.decodedSha256, existingSupplement.decodedSha256)
  assert.equal(shardEntry.compressedSha256, existingSupplement.compressedSha256)
  console.log(JSON.stringify({ batchId: input.batchId, target: input.target.colId, facets: Object.fromEntries(input.facetUpdates.map(item => [item.facet, item.status])), rebuild: 'verified-idempotent-rebuild', indexedRecords: index.recordCount }, null, 2))
  process.exit(0)
}

assert.equal(sha256(rawBefore), input.target.baseline.rawSha256, 'Pinned raw JSONL baseline changed')
assert.equal(sha256(compressedBefore), input.target.baseline.compressedSha256, 'Pinned Brotli shard baseline changed')
assert.equal(shardEntry.decodedSha256, input.target.baseline.rawSha256, 'Indexed decoded shard baseline changed')
assert.equal(shardEntry.compressedSha256, input.target.baseline.compressedSha256, 'Indexed compressed shard baseline changed')
const decodedBefore = brotliDecompressSync(compressedBefore)
assert.ok(decodedBefore.equals(rawBefore), 'Raw JSONL and existing Brotli shard do not match byte-for-byte')
const rows = rawBefore.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
assert.equal(rows.length, 1)
const target = rows[0]
assert.equal(target.colId, input.target.colId)
assert.equal(target.scientificName, input.target.scientificName)
assert.equal(String(target.sourceDatasetId), input.target.sourceDatasetId)
assert.equal(target.rank, 'species')
assert.equal(target.completeness.status, 'incomplete')
assert.equal(target.expertReview.status, 'not-reviewed')
assert.equal(sha256(Buffer.from(JSON.stringify(target))), input.target.baseline.targetRecordSha256, 'Pinned target record baseline changed')
assert.deepEqual(Object.keys(target.facets).sort(), [...FACETS].sort())

const sourceMap = new Map(target.sources.map(source => [source.id, source]))
assert.equal(sourceMap.size, target.sources.length, 'Existing dossier has duplicate source IDs')
for (const source of input.sources) {
  for (const key of ['id', 'title', 'url', 'locator', 'stableId', 'version', 'publishedAt', 'license', 'rightsHolder', 'licenseEvidenceUrl', 'licenseEvidenceLocator', 'licenseAppliesTo', 'attribution', 'licenseVersion', 'licenseUrl', 'licenseAssessment', 'scope']) {
    assert.ok(source[key], 'Missing item-level source metadata ' + key + ' for ' + source.id)
  }
  assert.equal(source.licenseAssessment, 'item-level-verified')
  assert.ok(!sourceMap.has(source.id), 'Supplemental source ID already exists: ' + source.id)
  sourceMap.set(source.id, { ...source, accessedAt: input.checkedAt })
}

const updateMap = new Map(input.facetUpdates.map(update => [update.facet, update]))
assert.equal(updateMap.size, input.facetUpdates.length, 'Duplicate facet update')
for (const claim of input.claims) {
  assert.ok(FACETS.includes(claim.facet), 'Invalid claim facet ' + claim.facet)
  assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus && claim.originalLanguage, 'Claim missing source, translation, scope, or locator')
  assert.equal(claim.translationStatus, 'verified')
  assert.ok(sourceMap.has(claim.sourceId), 'Claim references an unknown source ' + claim.sourceId)
  assert.equal(sourceMap.get(claim.sourceId).licenseAssessment, 'item-level-verified')
  assert.ok(updateMap.has(claim.facet), 'Claim has no facet update: ' + claim.facet)
}

for (const [id, source] of sourceMap) {
  if (target.sources.some(existing => existing.id === id)) continue
  target.sources.push({ ...source, accessedAt: input.checkedAt })
}
for (const update of input.facetUpdates) {
  const assessment = target.facets[update.facet]
  assert.equal(assessment.status, update.expectedStatus, 'Unexpected starting status for ' + update.facet)
  assessment.status = update.status
  assessment.gaps = [...update.gaps]
  if (update.search) assessment.search = { ...update.search }
}
for (const claim of input.claims) {
  const { facet, sourceId, ...claimData } = claim
  target.facets[facet].claims.push({ ...claimData, sourceIds: [sourceId] })
}

target.checkedAt = input.checkedAt
target.systematicSearch = input.systematicSearch
target.lifeStatusScope = input.lifeStatusScope
target.completeness = input.completeness
assert.equal(target.completeness.status, 'incomplete')
assert.equal(target.expertReview.status, 'not-reviewed')
assert.equal(target.facets.fossil.status, 'searched-no-evidence')
assert.equal(target.facets.fossil.claims.length, 0, 'No positive fossil claim should be generated from a no-evidence search')
for (const [facet, assessment] of Object.entries(target.facets)) {
  assert.ok(FACETS.includes(facet))
  assert.ok(assessment.gaps?.length, 'Every facet must retain explicit scope/gaps: ' + facet)
  if (assessment.status === 'searched-no-evidence') {
    for (const key of ['date', 'scope', 'method', 'queryOrPath', 'inclusionCriteria', 'exclusionCriteria', 'searcher']) {
      assert.ok(assessment.search?.[key], 'No-evidence facet is missing reproducibility field ' + facet + '/' + key)
    }
  }
  for (const claim of assessment.claims ?? []) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus && claim.originalLanguage)
    if (claim.translationStatus === 'verified') assert.ok(claim.textZh, 'Verified claim is missing its reviewed Chinese text')
    else assert.equal(claim.translationStatus, 'untranslated', 'Claim translation state must be explicit')
    assert.ok(claim.sourceIds?.length && claim.sourceIds.every(id => sourceMap.has(id)), 'Claim references an unknown source in ' + facet)
  }
}
for (const key of ['date', 'scope', 'method', 'queryOrPath', 'inclusionCriteria', 'exclusionCriteria', 'searcher']) {
  assert.ok(target.systematicSearch[key], 'No-evidence search is missing reproducibility field ' + key)
}

const rawAfter = Buffer.from(JSON.stringify(target) + '\n', 'utf8')
assert.ok(!rawAfter.includes(0x0d), 'Raw JSONL must use LF only')
const compressedAfter = brotliCompressSync(rawAfter, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressedAfter).equals(rawAfter), 'Updated shard Brotli round-trip mismatch')

writeFileSync(rawPath, rawAfter)
writeFileSync(shardPath, compressedAfter)
shardEntry.decodedSha256 = sha256(rawAfter)
shardEntry.compressedSha256 = sha256(compressedAfter)
shardEntry.recordCount = 1
writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n', 'utf8')

const priorRaw = metadata.raw ?? {}
metadata.raw = { ...priorRaw, bytes: rawAfter.length, sha256: sha256(rawAfter), recordCount: 1 }
const priorShard = metadata.shard ?? {}
metadata.shard = {
  ...priorShard,
  decodedBytes: rawAfter.length,
  decodedSha256: sha256(rawAfter),
  compressedBytes: compressedAfter.length,
  compressedSha256: sha256(compressedAfter),
  roundTrip: 'exact-byte-match',
}
metadata.checkedAt = input.checkedAt
metadata.supplementalUpdates = [...(metadata.supplementalUpdates ?? []), {
  batchId: input.batchId,
  sourcePath: INPUT,
  inputSha256: sha256(inputBytes),
  generator: 'scripts/build-primates-callithrix-jacchus-evidence-expansion-b40.mjs',
  baseHead: input.baseAudit.baseHead,
  indexedRecordCountAtAudit: input.baseAudit.indexedRecordCount,
  targetColId: input.target.colId,
  previousDecodedSha256: sha256(rawBefore),
  previousCompressedSha256: sha256(compressedBefore),
  previousTargetRecordSha256: input.target.baseline.targetRecordSha256,
  decodedSha256: sha256(rawAfter),
  compressedSha256: sha256(compressedAfter),
  targetRecordSha256: sha256(Buffer.from(JSON.stringify(target))),
  changedFacets: input.facetUpdates.map(({ facet, status }) => ({ facet, status })),
  mode: 'in-place-expand-one-primates-dossier-with-item-level-licensed-evidence-and-bounded-fossil-search',
}]
writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + '\n', 'utf8')

const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  input: { path: INPUT, sha256: sha256(inputBytes) },
  baseAudit: input.baseAudit,
  target: { colId: target.colId, scientificName: target.scientificName, sourceDatasetId: target.sourceDatasetId },
  addedSources: input.sources.map(({ id, stableId, licenseAssessment }) => ({ id, stableId, licenseAssessment })),
  updatedFacets: input.facetUpdates.map(({ facet, expectedStatus, status }) => ({ facet, expectedStatus, status })),
  indexedRecordCount: index.recordCount,
  updatedShard: {
    path: input.target.shardPath,
    rawPath: input.target.rawPath,
    encoding: 'brotli-jsonl',
    recordCount: 1,
    decodedBytes: rawAfter.length,
    decodedSha256: sha256(rawAfter),
    compressedBytes: compressedAfter.length,
    compressedSha256: sha256(compressedAfter),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { releaseDate: registryManifest.releaseDate, checklistBankDatasetKey: registryManifest.checklistBankDatasetKey, manifestSha256: input.baseAudit.registryManifestSha256 },
  generator: 'scripts/build-primates-callithrix-jacchus-evidence-expansion-b40.mjs',
}
writeFileSync(join(ROOT, OUTPUT), JSON.stringify(manifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({ batchId: input.batchId, target: target.colId, updatedFacets: manifest.updatedFacets, indexedRecords: index.recordCount, decodedSha256: sha256(rawAfter), compressedSha256: sha256(compressedAfter), rebuild: 'applied-evidence-expansion' }, null, 2))
