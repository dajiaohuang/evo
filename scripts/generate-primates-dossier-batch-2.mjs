import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliCompressSync, constants as zlibConstants } from 'node:zlib'

const root = resolve(import.meta.dirname, '..')
const inputPath = resolve(root, 'data/sources/primates-dossiers-batch-2.json')
const outputPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-batch-2.jsonl.br')
const metadataPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-batch-2.metadata.json')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
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

const decoded = Buffer.from(input.records.map(record => JSON.stringify(record)).join('\n') + '\n', 'utf8')
const compressed = brotliCompressSync(decoded, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const metadata = {
  schemaVersion: 1,
  shardType: 'independent-col26.8-species-dossiers',
  releaseAlias: input.releaseAlias,
  datasetKey: input.checklistBankDatasetKey,
  datasetDoi: input.checklistBankDoi,
  recordCount: input.records.length,
  path: 'data/knowledge/catalogue-dossiers-primates-batch-2.jsonl.br',
  decodedSha256: sha256(decoded),
  compressedSha256: sha256(compressed),
  checkedAt: input.checkedAt,
  generationSource: 'data/sources/primates-dossiers-batch-2.json',
}
mkdirSync(resolve(root, 'data/knowledge'), { recursive: true })
writeFileSync(outputPath, compressed)
writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ recordCount: metadata.recordCount, path: metadata.path, decodedSha256: metadata.decodedSha256, compressedSha256: metadata.compressedSha256 }, null, 2))
