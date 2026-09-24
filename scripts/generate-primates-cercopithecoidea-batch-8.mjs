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
const indexPath = resolve(root, 'data/knowledge/catalogue-dossier-shards.json')
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
assert.equal(source.updateAudit.baseHead, '16fa64a21645a79551d6be678bdb474d2c7f6dca')
assert.equal(source.updateAudit.indexedRecordCountAtAudit, 6934)
assert.equal(source.updateAudit.targetColId, '3WWND')
assert.equal(source.updateAudit.targetScientificName, 'Macaca fascicularis (Raffles, 1821)')
assert.equal(source.updateAudit.targetRecordCountBeforeUpdate, 1)
assert.deepEqual(source.updateAudit.openPullRequests, [])
assert.equal(source.updateAudit.mode, 'in-place-enrichment-of-existing-record')
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
assert.equal(sha256(registryManifestBytes), '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151')
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
const foragingSource = dossier.sources.find(sourceItem => sourceItem.id === 'reinegger2023')
assert.equal(foragingSource?.stableId, 'doi:10.1007/s10764-022-00324-9')
assert.equal(foragingSource?.licenseAssessment, 'item-level-verified')
assert.equal(foragingSource?.licenseVersion, 'CC BY 4.0')
assert.equal(foragingSource?.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
assert.ok(foragingSource?.rightsEvidenceUrl && foragingSource?.rightsEvidenceLocator)
assert.equal(dossier.facets.ecology.status, 'partially-supported')
assert.equal(dossier.facets.ecology.claims.length, 2)
assert.ok(dossier.facets.ecology.claims.every(claim => claim.sourceIds.length === 1 && claim.sourceIds[0] === 'reinegger2023'))
assert.ok(dossier.facets.ecology.claims[0].text.includes('one-group, one-site seasonal result'))
assert.ok(dossier.facets.ecology.claims[1].text.includes('do not measure germination, seedling recruitment, or realized plant-invasion rates'))
assert.equal(dossier.facets.distribution.status, 'not-assessed', 'A single introduced study site is not a species-range inventory')
for (const [facet, assessment] of Object.entries(dossier.facets)) {
  assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status))
  if (assessment.status === 'not-assessed') assert.equal(assessment.claims?.length ?? 0, 0)
  for (const claim of assessment.claims ?? []) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus)
    assert.equal(claim.translationStatus, 'untranslated')
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => dossier.sources.some(item => item.id === id)))
  }
}

const index = JSON.parse(readFileSync(indexPath, 'utf8'))
assert.equal(index.recordCount, source.updateAudit.indexedRecordCountAtAudit, 'In-place enrichment must preserve the audited dossier count')
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
    assert.ok(row.colId && row.scientificName, `Missing identity in ${shard.path}`)
    assert.ok(!indexedIds.has(row.colId), `Duplicate indexed COL ID ${row.colId}`)
    const normalizedName = row.scientificName.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
    assert.ok(!indexedNames.has(normalizedName), `Duplicate indexed scientific name ${row.scientificName}`)
    indexedIds.add(row.colId)
    indexedNames.add(normalizedName)
    if (row.colId === dossier.colId) targetRows.push({ shard, row, decodedShard })
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, source.updateAudit.indexedRecordCountAtAudit)
assert.equal(targetRows.length, source.updateAudit.targetRecordCountBeforeUpdate, 'In-place enrichment must resolve exactly one existing record')
assert.equal(targetRows[0].shard.path, source.updateAudit.targetShardPath, 'The record must remain in its original shard')
assert.equal(targetRows[0].row.scientificName, dossier.scientificName)

const rawBytes = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF only')
const compressed = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decoded = brotliDecompressSync(compressed)
assert.deepEqual(decoded, rawBytes, 'Brotli round-trip must preserve exact raw JSONL bytes')
const currentRawBytes = readFileSync(rawPath)
const currentCompressedBytes = readFileSync(shardPath)
const currentDecodedBytes = brotliDecompressSync(currentCompressedBytes)
assert.deepEqual(currentDecodedBytes, currentRawBytes, 'Existing raw record and indexed shard must match before update')
const currentRawSha256 = sha256(currentRawBytes)
const currentShardSha256 = sha256(currentCompressedBytes)
assert.ok(currentRawSha256 === source.updateAudit.previousRawSha256 || currentRawBytes.equals(rawBytes), 'Existing raw record differs from the audited baseline and deterministic update')
assert.ok(currentShardSha256 === source.updateAudit.previousShardSha256 || currentCompressedBytes.equals(compressed), 'Existing shard differs from the audited baseline and deterministic update')
assert.ok(targetRows[0].decodedShard.equals(currentRawBytes), 'Indexed target shard must be exactly the existing target record')

const indexShard = index.shards.find(item => item.path === source.updateAudit.targetShardPath)
assert.ok(indexShard, 'The original target shard must remain in the catalogue index')
indexShard.decodedSha256 = sha256(decoded)
indexShard.compressedSha256 = sha256(compressed)
const manifest = {
  schemaVersion: 1,
  shardType: 'independent-col26.8-species-dossiers',
  batchId: source.batchId,
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
  duplicateCheck: {
    mode: 'in-place-update',
    baseHead: source.updateAudit.baseHead,
    openPullRequests: source.updateAudit.openPullRequests,
    indexedRecordCount: indexedCount,
    colId: dossier.colId,
    scientificName: dossier.scientificName,
    existingRecordCount: targetRows.length,
  },
  updateAudit: { ...source.updateAudit, indexedRecordCountAfterUpdate: index.recordCount },
  updateMode: 'rebuild-one-existing-record-in-place',
}
mkdirSync(resolve(root, 'data/knowledge/raw-dossiers'), { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(shardPath, compressed)
writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ ...manifest, roundTrip: decoded.equals(rawBytes), indexedCount }, null, 2))
