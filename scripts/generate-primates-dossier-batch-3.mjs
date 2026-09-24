import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const root = resolve(import.meta.dirname, '..')
const sourcePath = resolve(root, 'data/sources/primates-dossiers-batch-3.json')
const rawPath = resolve(root, 'data/knowledge/raw-dossiers/primates-dossiers-batch-3.jsonl')
const shardPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-batch-3.jsonl.br')
const manifestPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-batch-3.metadata.json')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const expectedGenerationSourceSha256 = 'f950f3d0af0905f136be4356a6b33a62daec577b1be271ae8578a4aa32c41905'
const excludedIds = new Set(['6MB3T', '4C92G', '3H3C9', '4LTSY'])
const expected = new Map([
  ['3WWNQ', {
    scientificName: 'Macaca mulatta (Zimmermann, 1780)', sourceDatasetId: '2144',
    parentChain: [
      ['5HYC', 'Macaca', 'Lacépède, 1799', 'genus'], ['JB3', 'Cercopithecinae', 'Gray, 1821', 'subfamily'], ['7X9', 'Cercopithecidae', 'Gray, 1821', 'family'], ['4X9', 'Cercopithecoidea', 'Gray, 1821', 'superfamily'], ['4PM', 'Simiiformes', 'Haeckel, 1866', 'infraorder'], ['4DT', 'Haplorrhini', 'Pocock, 1918', 'suborder'], ['3W7', 'Primates', 'Linnaeus, 1758', 'order'],
    ],
  }],
  ['3WWP6', {
    scientificName: 'Macaca silenus (Linnaeus, 1758)', sourceDatasetId: '2144',
    parentChain: [
      ['5HYC', 'Macaca', 'Lacépède, 1799', 'genus'], ['JB3', 'Cercopithecinae', 'Gray, 1821', 'subfamily'], ['7X9', 'Cercopithecidae', 'Gray, 1821', 'family'], ['4X9', 'Cercopithecoidea', 'Gray, 1821', 'superfamily'], ['4PM', 'Simiiformes', 'Haeckel, 1866', 'infraorder'], ['4DT', 'Haplorrhini', 'Pocock, 1918', 'suborder'], ['3W7', 'Primates', 'Linnaeus, 1758', 'order'],
    ],
  }],
  ['6TM9B', {
    scientificName: 'Papio anubis (Lesson, 1827)', sourceDatasetId: '2144',
    parentChain: [
      ['6DGR', 'Papio', 'Erxleben, 1777', 'genus'], ['JB3', 'Cercopithecinae', 'Gray, 1821', 'subfamily'], ['7X9', 'Cercopithecidae', 'Gray, 1821', 'family'], ['4X9', 'Cercopithecoidea', 'Gray, 1821', 'superfamily'], ['4PM', 'Simiiformes', 'Haeckel, 1866', 'infraorder'], ['4DT', 'Haplorrhini', 'Pocock, 1918', 'suborder'], ['3W7', 'Primates', 'Linnaeus, 1758', 'order'],
    ],
  }],
])
const facets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const allowedStatuses = new Set(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'])
const sourceBytes = readFileSync(sourcePath)
const generationSourceSha256 = sha256(sourceBytes)
assert.equal(generationSourceSha256, expectedGenerationSourceSha256, 'Generation source JSON bytes changed; review provenance and update the pinned source digest deliberately')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.checklistBankDatasetKey, 316115)
assert.equal(source.checklistBankDoi, '10.48580/dgywk')
assert.equal(source.releaseDate, '2026-08-20')
assert.equal(source.checkedAt, '2026-09-24')
assert.equal(source.batchId, 'primates-dossiers-batch-3-2026-09-24')
assert.equal(source.records.length, 3, 'This batch is limited to three species')

const ids = new Set()
for (const dossier of source.records) {
  assert.ok(expected.has(dossier.colId), `Unapproved or unverified COL ID: ${dossier.colId}`)
  assert.ok(!excludedIds.has(dossier.colId), `Excluded by open PR #356: ${dossier.colId}`)
  assert.ok(!ids.has(dossier.colId), `Duplicate COL ID ${dossier.colId}`)
  ids.add(dossier.colId)
  const identity = expected.get(dossier.colId)
  for (const key of ['scientificName', 'sourceDatasetId']) assert.equal(dossier[key], identity[key], `Pinned COL ${key} mismatch for ${dossier.colId}`)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.checkedAt, source.checkedAt)
  assert.ok(dossier.identity.method.includes('COL26.8') && dossier.identity.scope)
  assert.deepEqual(dossier.identity.parentChain.map(({ id, name, authorship, rank }) => [id, name, authorship, rank]), identity.parentChain, `Pinned COL parent chain mismatch for ${dossier.colId}`)
  assert.ok(dossier.identity.parentChain.every(parent => parent.status === 'accepted'))
  assert.ok(dossier.lifeStatusScope?.wild && dossier.lifeStatusScope?.domesticated && dossier.lifeStatusScope?.fossil)
  assert.ok(dossier.sources.length >= 2)
  const sourceIds = new Set(dossier.sources.map(item => item.id))
  assert.equal(sourceIds.size, dossier.sources.length)
  for (const item of dossier.sources) {
    assert.match(item.url, /^https:\/\//)
    assert.ok(item.title && item.version && item.locator && item.license && item.scope, `Incomplete source provenance in ${dossier.colId}/${item.id}`)
  }
  const biologicalSources = dossier.sources.filter(item => item.licenseAssessment === 'item-level-verified')
  assert.equal(biologicalSources.length, dossier.colId === '3WWNQ' ? 2 : 1, `Unexpected item-level verified biological source count for ${dossier.colId}`)
  for (const biologicalSource of biologicalSources) {
    assert.equal(biologicalSource.licenseVersion, 'CC BY 4.0')
    assert.equal(biologicalSource.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
    assert.ok(biologicalSource.rightsEvidenceUrl)
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

const indexPath = resolve(root, 'data/knowledge/catalogue-dossier-shards.json')
const shardIndex = JSON.parse(readFileSync(indexPath, 'utf8'))
assert.equal(shardIndex.releaseAlias, source.releaseAlias)
for (const item of shardIndex.shards) {
  const existing = brotliDecompressSync(readFileSync(resolve(root, item.path))).toString('utf8')
  const existingRecords = existing.split('\n').filter(Boolean).map(line => JSON.parse(line))
  if (item.path === 'data/knowledge/catalogue-dossiers-primates-batch-3.jsonl.br') {
    assert.deepEqual(existingRecords.map(record => record.colId).sort(), [...ids].sort(), 'Target shard identity set differs from the source batch')
    continue
  }
  for (const record of existingRecords) {
    assert.ok(!ids.has(record.colId), `COL ID ${record.colId} already exists in indexed shard ${item.path}`)
  }
}

const ordered = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId, 'en'))
const rawBytes = Buffer.from(`${ordered.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings only')
const compressed = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decoded = brotliDecompressSync(compressed)
assert.deepEqual(decoded, rawBytes, 'Brotli round-trip must preserve exact raw JSONL bytes')

const manifest = {
  schemaVersion: 1,
  shardType: 'independent-col26.8-species-dossiers',
  releaseAlias: source.releaseAlias,
  datasetKey: source.checklistBankDatasetKey,
  datasetDoi: source.checklistBankDoi,
  recordCount: ordered.length,
  ids: ordered.map(record => record.colId),
  path: 'data/knowledge/catalogue-dossiers-primates-batch-3.jsonl.br',
  rawPath: 'data/knowledge/raw-dossiers/primates-dossiers-batch-3.jsonl',
  rawSha256: sha256(rawBytes),
  decodedSha256: sha256(decoded),
  compressedSha256: sha256(compressed),
  decodedBytes: decoded.length,
  compressedBytes: compressed.length,
  checkedAt: source.checkedAt,
  generationSource: 'data/sources/primates-dossiers-batch-3.json',
  generationSourceSha256,
}
assert.equal(manifest.generationSourceSha256, sha256(sourceBytes), 'Manifest must record the exact source JSON byte digest')

mkdirSync(resolve(root, 'data/knowledge/raw-dossiers'), { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(shardPath, compressed)
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
process.stdout.write(`${JSON.stringify({ recordCount: manifest.recordCount, ids: manifest.ids, rawPath: manifest.rawPath, path: manifest.path, generationSourceSha256: manifest.generationSourceSha256, rawSha256: manifest.rawSha256, decodedSha256: manifest.decodedSha256, compressedSha256: manifest.compressedSha256, byteRoundTrip: decoded.equals(rawBytes) })}\n`)
