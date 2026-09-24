import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const root = resolve(import.meta.dirname, '..')
const inputPath = resolve(root, 'data/sources/primates-dossiers-batch-2.json')
const outputPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-batch-2.jsonl.br')
const metadataPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-batch-2.metadata.json')
const indexPath = resolve(root, 'data/knowledge/catalogue-dossier-shards.json')
const rawPath = resolve(root, 'data/knowledge/raw-dossiers/primates-batch-2.jsonl')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalizeName = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const expected = new Map([
  ['4C92G', { scientificName: 'Pan troglodytes (Blumenbach, 1775)', sourceDatasetId: '2144', parentChain: [
    ['6D2G', 'Pan', 'Oken, 1816', 'genus'], ['JPH', 'Homininae', 'Gray, 1825', 'subfamily'], ['6256T', 'Hominidae', 'Gray, 1825', 'family'], ['58L', 'Hominoidea', 'Gray, 1825', 'superfamily'], ['4PM', 'Simiiformes', 'Haeckel, 1866', 'infraorder'], ['4DT', 'Haplorrhini', 'Pocock, 1918', 'suborder'], ['3W7', 'Primates', 'Linnaeus, 1758', 'order'],
  ] }],
  ['3H3C9', { scientificName: 'Gorilla gorilla (Savage & Wyman, 1847)', sourceDatasetId: '2144', parentChain: [
    ['62SMC', 'Gorilla', 'I. Geoffroy Saint-Hilaire, 1852', 'genus'], ['JPH', 'Homininae', 'Gray, 1825', 'subfamily'], ['6256T', 'Hominidae', 'Gray, 1825', 'family'], ['58L', 'Hominoidea', 'Gray, 1825', 'superfamily'], ['4PM', 'Simiiformes', 'Haeckel, 1866', 'infraorder'], ['4DT', 'Haplorrhini', 'Pocock, 1918', 'suborder'], ['3W7', 'Primates', 'Linnaeus, 1758', 'order'],
  ] }],
  ['4LTSY', { scientificName: 'Pongo abelii Lesson, 1827', sourceDatasetId: '2144', parentChain: [
    ['63NZX', 'Pongo', 'Lacépède, 1799', 'genus'], ['K72', 'Ponginae', 'Elliot, 1913', 'subfamily'], ['6256T', 'Hominidae', 'Gray, 1825', 'family'], ['58L', 'Hominoidea', 'Gray, 1825', 'superfamily'], ['4PM', 'Simiiformes', 'Haeckel, 1866', 'infraorder'], ['4DT', 'Haplorrhini', 'Pocock, 1918', 'suborder'], ['3W7', 'Primates', 'Linnaeus, 1758', 'order'],
  ] }],
])
const facets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const allowedStatuses = new Set(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'])
const input = JSON.parse(readFileSync(inputPath, 'utf8'))
assert.equal(input.schemaVersion, 1)
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.checklistBankDatasetKey, 316115)
assert.equal(input.checklistBankDoi, '10.48580/dgywk')
assert.equal(input.releaseDate, '2026-08-20')
assert.equal(input.checkedAt, '2026-09-24')
assert.equal(input.batchId, 'primates-gorilla-gorilla-enrichment-2026-09-24')
assert.equal(input.updateAudit.baseHead, 'e7dc9569f8042c2baab7126645e04857cb43fc75')
assert.equal(input.updateAudit.indexedRecordCountAtAudit, 6934)
assert.equal(input.updateAudit.targetColId, '3H3C9')
assert.equal(input.updateAudit.targetScientificName, 'Gorilla gorilla (Savage & Wyman, 1847)')
assert.equal(input.updateAudit.targetRecordCountBeforeUpdate, 1)
assert.equal(input.updateAudit.targetShardPath, 'data/knowledge/catalogue-dossiers-primates-batch-2.jsonl.br')
assert.equal(input.updateAudit.previousDecodedSha256, '42df0d9e92fe70b821724597a97fcbc6d2b8d74a0d09cf616ff7ef4a1701875f')
assert.equal(input.updateAudit.previousCompressedSha256, '0cdcf4faf3756de07b37e872e51358a0f6798e08c58ca0582ffd1cb1799b8752')
assert.equal(input.updateAudit.previousTargetRecordSha256, '8460a0bd5840abb5791b2135a3749090f08b17f454df8007ea2e3e4f2852fb54')
assert.deepEqual(input.updateAudit.openPullRequests, [])
assert.equal(input.updateAudit.mode, 'in-place-enrichment-of-existing-record')
assert.equal(input.records.length, 3, 'This shard is limited to three primate species')

const ids = new Set()
for (const dossier of input.records) {
  assert.ok(expected.has(dossier.colId), `Unapproved or unverified COL ID: ${dossier.colId}`)
  assert.ok(dossier.colId !== '6MB3T' && dossier.scientificName !== 'Homo sapiens', 'Homo sapiens is excluded from this batch')
  assert.ok(!ids.has(dossier.colId), `Duplicate COL ID ${dossier.colId}`)
  ids.add(dossier.colId)
  const identity = expected.get(dossier.colId)
  for (const key of ['scientificName', 'sourceDatasetId']) assert.equal(dossier[key], identity[key], `Pinned COL ${key} mismatch for ${dossier.colId}`)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.checkedAt, input.checkedAt)
  assert.ok(dossier.identity.method.includes('COL26.8') && dossier.identity.scope)
  assert.ok(Array.isArray(dossier.identity.parentChain) && dossier.identity.parentChain.length === 7)
  assert.deepEqual(dossier.identity.parentChain.map(({ id, name, authorship, rank }) => [id, name, authorship, rank]), identity.parentChain, `Pinned COL parent chain mismatch for ${dossier.colId}`)
  assert.ok(dossier.identity.parentChain.every(parent => parent.status === 'accepted'))
  assert.ok(dossier.lifeStatusScope?.wild && dossier.lifeStatusScope?.domesticated && dossier.lifeStatusScope?.fossil)
  assert.ok(dossier.sources.length >= 2)
  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length)
  for (const source of dossier.sources) {
    assert.match(source.url, /^https:\/\//)
    assert.ok(source.title && source.version && source.locator && source.license && source.scope, `Incomplete source provenance in ${dossier.colId}/${source.id}`)
  }
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...facets].sort())
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(allowedStatuses.has(assessment.status), `Invalid status ${dossier.colId}/${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus)
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
    }
    if (assessment.status === 'not-assessed') assert.equal(assessment.claims?.length ?? 0, 0, `Do not attach inferred claims to ${dossier.colId}/${facet}`)
    if (assessment.status === 'partially-supported') assert.ok(assessment.claims?.length && assessment.gaps?.length)
    if (assessment.status === 'supported' || assessment.status === 'conflicted') assert.ok(assessment.claims?.length)
  }
  assert.equal(dossier.completeness.status, 'incomplete', `Batch dossiers must remain incomplete: ${dossier.colId}`)
  assert.equal(dossier.expertReview.status, 'not-reviewed', `Batch dossiers must not be marked reviewed: ${dossier.colId}`)
  assert.equal(dossier.systematicSearch, undefined, `No systematic search is claimed for ${dossier.colId}`)
}
for (const id of expected.keys()) assert.ok(ids.has(id), `Missing expected species ${id}`)

const dossier = input.records.find(record => record.colId === input.updateAudit.targetColId)
assert.equal(dossier.scientificName, input.updateAudit.targetScientificName)
const dietSource = dossier.sources.find(source => source.id === 'ortmann2022')
assert.equal(dietSource?.stableId, 'doi:10.1371/journal.pone.0271576')
assert.equal(dietSource?.licenseAssessment, 'item-level-verified')
assert.equal(dietSource?.licenseVersion, 'CC BY 4.0')
assert.equal(dietSource?.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
assert.ok(dietSource?.rightsEvidenceUrl && dietSource?.rightsEvidenceLocator && dietSource?.attribution)
assert.equal(dossier.facets.ecology.status, 'partially-supported')
assert.equal(dossier.facets.ecology.claims.length, 2)
assert.ok(dossier.facets.ecology.claims.every(claim => claim.sourceIds.length === 1 && claim.sourceIds[0] === 'ortmann2022'))
assert.ok(dossier.facets.ecology.claims[0].text.includes('two complete years'))
assert.ok(dossier.facets.ecology.claims[1].text.includes('one group at one site'))

const registryRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const registryBytes = readFileSync(resolve(registryRoot, 'manifest.json'))
const registryManifest = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(sha256(registryBytes), '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151')
const routeKey = normalizeName(dossier.scientificName).slice(0, 2)
const acceptedMatches = []
for (const route of registryManifest.search.routes[routeKey] ?? []) {
  const rows = gunzipSync(readFileSync(resolve(registryRoot, route))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
  acceptedMatches.push(...rows.filter(row => row.id === dossier.colId))
}
assert.equal(acceptedMatches.length, 1, 'Expected one exact accepted COL26.8 usage')
for (const [key, expectedValue] of Object.entries({
  scientificName: dossier.scientificName, authorship: '(Savage & Wyman, 1847)', rank: 'species', status: 'accepted', sourceDatasetId: '2144', parentId: '62SMC',
})) assert.equal(String(acceptedMatches[0][key]), String(expectedValue), `Pinned COL ${key} mismatch`)

const index = JSON.parse(readFileSync(indexPath, 'utf8'))
assert.equal(index.recordCount, input.updateAudit.indexedRecordCountAtAudit, 'In-place enrichment must preserve the audited total dossier count')
const indexedIds = new Set()
const indexedNames = new Set()
const targetRows = []
let indexedCount = 0
for (const shard of index.shards) {
  const compressedShard = readFileSync(resolve(root, shard.path))
  assert.equal(sha256(compressedShard), shard.compressedSha256, `Compressed hash mismatch: ${shard.path}`)
  const decodedShard = brotliDecompressSync(compressedShard)
  assert.equal(sha256(decodedShard), shard.decodedSha256, `Decoded hash mismatch: ${shard.path}`)
  const rows = decodedShard.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, shard.recordCount, `Record count mismatch: ${shard.path}`)
  indexedCount += rows.length
  for (const row of rows) {
    assert.ok(row.colId && row.scientificName, `Missing dossier identity in ${shard.path}`)
    assert.ok(!indexedIds.has(row.colId), `Duplicate indexed COL ID ${row.colId}`)
    const nameKey = normalizeName(row.scientificName)
    assert.ok(!indexedNames.has(nameKey), `Duplicate indexed scientific name ${row.scientificName}`)
    indexedIds.add(row.colId)
    indexedNames.add(nameKey)
    if (row.colId === dossier.colId) targetRows.push({ shard, row, decodedShard, rows })
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, input.updateAudit.indexedRecordCountAtAudit)
assert.equal(targetRows.length, input.updateAudit.targetRecordCountBeforeUpdate, 'In-place enrichment must find exactly one existing dossier')
assert.equal(targetRows[0].shard.path, input.updateAudit.targetShardPath, 'The target must remain in its existing shard')
assert.equal(targetRows[0].row.scientificName, dossier.scientificName)

const existingRows = targetRows[0].rows
assert.equal(existingRows.length, 3, 'The source shard must retain its three existing dossiers')
for (const existing of existingRows.filter(row => row.colId !== dossier.colId)) {
  const sourceRecord = input.records.find(record => record.colId === existing.colId)
  assert.ok(sourceRecord, `Existing non-target dossier ${existing.colId} must remain in its generation source`)
  assert.deepEqual(existing, sourceRecord, `In-place enrichment must not modify ${existing.colId}`)
}
const outputRows = existingRows.map(row => row.colId === dossier.colId ? dossier : row)
const decoded = Buffer.from(`${outputRows.map(row => JSON.stringify(row)).join('\n')}\n`, 'utf8')
assert.ok(!decoded.includes(0x0d), 'Raw dossier JSONL must use LF only')
const compressed = brotliCompressSync(decoded, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressed), decoded, 'Brotli round-trip must preserve exact shard bytes')
const currentDecoded = targetRows[0].decodedShard
const currentCompressed = readFileSync(outputPath)
const currentDecodedSha256 = sha256(currentDecoded)
const currentCompressedSha256 = sha256(currentCompressed)
const currentTargetLine = currentDecoded.toString('utf8').split('\n').find(line => line && JSON.parse(line).colId === dossier.colId)
assert.ok(currentTargetLine, 'The original target record must be present in its shard')
const currentTargetSha256 = sha256(Buffer.from(`${currentTargetLine}\n`, 'utf8'))
assert.ok(
  (currentDecodedSha256 === input.updateAudit.previousDecodedSha256 &&
    currentCompressedSha256 === input.updateAudit.previousCompressedSha256 &&
    currentTargetSha256 === input.updateAudit.previousTargetRecordSha256) ||
  (currentDecoded.equals(decoded) && currentCompressed.equals(compressed)),
  'Existing target shard differs from the audited baseline and deterministic updated output',
)
if (existsSync(rawPath)) {
  const existingRaw = readFileSync(rawPath)
  assert.ok(existingRaw.equals(currentDecoded) || existingRaw.equals(decoded), 'Existing raw archive differs from the audited baseline and deterministic update')
}

const indexShard = index.shards.find(shard => shard.path === input.updateAudit.targetShardPath)
assert.ok(indexShard, 'The original target shard must remain in the catalogue index')
indexShard.decodedSha256 = sha256(decoded)
indexShard.compressedSha256 = sha256(compressed)
const sourceBytes = readFileSync(inputPath)
const metadata = {
  schemaVersion: 1,
  shardType: 'independent-col26.8-species-dossiers',
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  datasetKey: input.checklistBankDatasetKey,
  datasetDoi: input.checklistBankDoi,
  recordCount: outputRows.length,
  updatedRecordCount: 1,
  updatedIds: [dossier.colId],
  path: 'data/knowledge/catalogue-dossiers-primates-batch-2.jsonl.br',
  rawPath: 'data/knowledge/raw-dossiers/primates-batch-2.jsonl',
  rawSha256: sha256(decoded),
  decodedSha256: sha256(decoded),
  compressedSha256: sha256(compressed),
  checkedAt: input.checkedAt,
  generationSource: 'data/sources/primates-dossiers-batch-2.json',
  generationSourceSha256: sha256(sourceBytes),
  registryManifestSha256: sha256(registryBytes),
  duplicateCheck: {
    mode: 'in-place-update',
    baseHead: input.updateAudit.baseHead,
    openPullRequests: input.updateAudit.openPullRequests,
    indexedRecordCount: indexedCount,
    colId: dossier.colId,
    scientificName: dossier.scientificName,
    existingRecordCount: targetRows.length,
  },
  updateAudit: { ...input.updateAudit, indexedRecordCountAfterUpdate: index.recordCount },
  updateMode: 'rebuild-one-existing-record-in-place',
}
mkdirSync(resolve(root, 'data/knowledge'), { recursive: true })
mkdirSync(resolve(root, 'data/knowledge/raw-dossiers'), { recursive: true })
writeFileSync(rawPath, decoded)
writeFileSync(outputPath, compressed)
writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ recordCount: metadata.recordCount, updatedRecordCount: metadata.updatedRecordCount, indexedCount, path: metadata.path, decodedSha256: metadata.decodedSha256, compressedSha256: metadata.compressedSha256, roundTrip: brotliDecompressSync(compressed).equals(decoded) }, null, 2))
