import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const root = resolve(import.meta.dirname, '..')
const sourcePath = resolve(root, 'data/sources/primates-cercopithecoidea-batch-8.json')
const rawPath = resolve(root, 'data/knowledge/raw-dossiers/primates-cercopithecoidea-batch-8.jsonl')
const shardPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-cercopithecoidea-batch-8.jsonl.br')
const manifestPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-cercopithecoidea-batch-8.batch-manifest.json')
const registryRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const facets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const expectedChain = [
  ['5HYC', 'Macaca', 'Lacépède, 1799', 'genus'], ['L4C', 'Papionini', null, 'tribe'], ['JB3', 'Cercopithecinae', 'Gray, 1821', 'subfamily'],
  ['7X9', 'Cercopithecidae', 'Gray, 1821', 'family'], ['4X9', 'Cercopithecoidea', 'Gray, 1821', 'superfamily'],
  ['4PM', 'Simiiformes', 'Haeckel, 1866', 'infraorder'], ['4DT', 'Haplorrhini', 'Pocock, 1918', 'suborder'],
  ['3W7', 'Primates', 'Linnaeus, 1758', 'order'],
]
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const registryManifestBytes = readFileSync(resolve(registryRoot, 'manifest.json'))
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
const sourceBytes = readFileSync(sourcePath)
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.checklistBankDatasetKey, 316115)
assert.equal(source.records.length, 1)
const dossier = source.records[0]
assert.equal(dossier.colId, '3WWND')
assert.equal(dossier.scientificName, 'Macaca fascicularis (Raffles, 1821)')
assert.equal(dossier.rank, 'species')
assert.equal(dossier.sourceDatasetId, '2144')
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...facets].sort())
assert.deepEqual(dossier.identity.parentChain.map(({ id, name, authorship, rank }) => [id, name, authorship, rank]), expectedChain)
assert.ok(dossier.identity.parentChain.every(parent => parent.status === 'accepted'))

const routeKey = dossier.scientificName.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim().slice(0, 2)
const routeFiles = registryManifest.search.routes[routeKey] ?? []
const matches = []
for (const relativePath of routeFiles) {
  const path = resolve(registryRoot, relativePath)
  const text = (await import('node:zlib')).gunzipSync(readFileSync(path)).toString('utf8')
  for (const line of text.split('\n')) {
    if (!line) continue
    const record = JSON.parse(line)
    if (record.id === dossier.colId) matches.push(record)
  }
}
assert.equal(matches.length, 1, 'Expected one pinned COL registry record')
const record = matches[0]
assert.equal(record.scientificName, dossier.scientificName)
assert.equal(record.rank, 'species')
assert.equal(record.status, 'accepted')
assert.equal(String(record.sourceDatasetId), dossier.sourceDatasetId)
assert.equal(record.parentId, '5HYC')
assert.ok(record.classification.includes('Cercopithecoidea') && record.classification.includes('Primates'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
const hierarchyRows = [['3WWND', dossier.scientificName, 'species'], ...expectedChain.map(([id, name, authorship, rank]) => [id, authorship ? `${name} ${authorship}` : name, rank])]
const hierarchyRecords = []
for (let i = 0; i < hierarchyRows.length; i++) {
  const [id, name, rank] = hierarchyRows[i]
  const route = createHash('sha256').update(id).digest('hex').slice(0, 2)
  const path = resolve(registryRoot, 'hierarchy', 'nodes', `id-${route}.jsonl.gz`)
  const lines = gunzipSync(readFileSync(path)).toString('utf8').split('\n')
  const found = lines.filter(Boolean).map(line => JSON.parse(line)).filter(node => node.id === id)
  assert.equal(found.length, 1, `Expected one hierarchy record for ${id}`)
  const node = found[0]
  assert.equal(node.scientificName, name)
  assert.equal(node.rank, rank)
  assert.equal(node.status, 'accepted')
  assert.equal(String(node.sourceDatasetId), '2144')
  if (i < hierarchyRows.length - 1) assert.equal(node.parentId, hierarchyRows[i + 1][0], `Parent edge mismatch at ${id}`)
  hierarchyRecords.push(node)
}
assert.equal(hierarchyRecords[0].sourceDatasetId, '2144')

assert.ok(dossier.sources.find(sourceItem => sourceItem.id === 'bailey2023')?.licenseAssessment === 'item-level-verified')
for (const [facet, assessment] of Object.entries(dossier.facets)) {
  assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status))
  if (assessment.status === 'not-assessed') assert.equal(assessment.claims?.length ?? 0, 0)
  for (const claim of assessment.claims ?? []) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus)
    assert.equal(claim.translationStatus, 'untranslated')
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => dossier.sources.some(item => item.id === id)))
  }
}

const index = JSON.parse(readFileSync(resolve(root, 'data/knowledge/catalogue-dossier-shards.json'), 'utf8'))
for (const shard of index.shards) {
  const existing = brotliDecompressSync(readFileSync(resolve(root, shard.path))).toString('utf8')
  for (const line of existing.split('\n')) {
    if (!line) continue
    assert.notEqual(JSON.parse(line).colId, dossier.colId, `COL ID already indexed in ${shard.path}`)
  }
}

const rawBytes = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF only')
const compressed = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decoded = brotliDecompressSync(compressed)
assert.deepEqual(decoded, rawBytes, 'Brotli round-trip must preserve exact raw JSONL bytes')
const manifest = {
  schemaVersion: 1,
  shardType: 'independent-col26.8-species-dossiers',
  releaseAlias: source.releaseAlias,
  datasetKey: source.checklistBankDatasetKey,
  datasetDoi: source.checklistBankDoi,
  recordCount: 1,
  ids: [dossier.colId],
  path: 'data/knowledge/catalogue-dossiers-primates-cercopithecoidea-batch-8.jsonl.br',
  rawPath: 'data/knowledge/raw-dossiers/primates-cercopithecoidea-batch-8.jsonl',
  rawSha256: sha256(rawBytes),
  decodedSha256: sha256(decoded),
  compressedSha256: sha256(compressed),
  decodedBytes: decoded.length,
  compressedBytes: compressed.length,
  checkedAt: source.checkedAt,
  generationSource: 'data/sources/primates-cercopithecoidea-batch-8.json',
  generationSourceSha256: sha256(sourceBytes),
  registryManifestSha256: sha256(registryManifestBytes),
}
mkdirSync(resolve(root, 'data/knowledge/raw-dossiers'), { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(shardPath, compressed)
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ ...manifest, roundTrip: decoded.equals(rawBytes) }, null, 2))
