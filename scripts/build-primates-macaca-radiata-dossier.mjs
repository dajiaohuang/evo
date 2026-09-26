import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const root = resolve(import.meta.dirname, '..')
const sourceRelativePath = 'data/sources/primates-macaca-radiata-dossier.json'
const sourcePath = resolve(root, sourceRelativePath)
const rawRelativePath = 'data/knowledge/raw-dossiers/primates-macaca-radiata-core-2026-09-26.jsonl'
const shardRelativePath = 'data/knowledge/catalogue-dossiers-primates-macaca-radiata-core-2026-09-26.jsonl.br'
const manifestRelativePath = 'data/knowledge/catalogue-dossiers-primates-macaca-radiata-core-2026-09-26.batch-manifest.json'
const indexPath = resolve(root, 'data/knowledge/catalogue-dossier-shards.json')
const registryRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = name => name.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()

const sourceBytes = readFileSync(sourcePath)
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.checklistBankDatasetKey, 316115)
assert.equal(source.records.length, 1)
const dossier = source.records[0]
assert.equal(dossier.colId, '3WWP2')
assert.equal(dossier.checkedAt, source.checkedAt)
assert.equal(dossier.scientificName, 'Macaca radiata (É. Geoffroy Saint-Hilaire, 1812)')
assert.equal(dossier.sourceDatasetId, '2144')
assert.equal(dossier.rank, 'species')
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), ['conservation', 'distribution', 'ecology', 'evolution', 'fossil', 'lifeHistory', 'morphology'])
assert.equal(dossier.facets.ecology.claims.length, 1)
assert.equal(dossier.facets.ecology.claims[0].sourceIds[0], 'erinjery2017')
assert.ok(dossier.facets.ecology.claims[0].text.includes('not a species-wide abundance estimate or a causal test'))
assert.ok(dossier.identity.parentChain.every(parent => parent.status === 'accepted'))

const registryManifest = JSON.parse(readFileSync(resolve(registryRoot, 'manifest.json'), 'utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
const hierarchy = [
  { id: dossier.colId, scientificName: dossier.scientificName, rank: dossier.rank, parentId: '5HYC' },
  ...dossier.identity.parentChain.map((parent, index) => ({
    id: parent.id,
    scientificName: parent.authorship ? `${parent.name} ${parent.authorship}` : parent.name,
    rank: parent.rank,
    parentId: dossier.identity.parentChain[index + 1]?.id,
  })),
]
for (const expected of hierarchy) {
  const route = sha256(Buffer.from(expected.id)).slice(0, 2)
  const path = resolve(registryRoot, 'hierarchy', 'nodes', `id-${route}.jsonl.gz`)
  const lines = gunzipSync(readFileSync(path)).toString('utf8').split(/\r?\n/u).filter(Boolean)
  const matches = lines.map(line => JSON.parse(line)).filter(node => node.id === expected.id)
  assert.equal(matches.length, 1, `Expected one pinned COL hierarchy record for ${expected.id}`)
  const node = matches[0]
  assert.equal(node.scientificName, expected.scientificName)
  assert.equal(node.rank, expected.rank)
  assert.equal(node.status, 'accepted')
  assert.equal(String(node.sourceDatasetId), dossier.sourceDatasetId)
  if (expected.parentId) assert.equal(node.parentId, expected.parentId)
}

const index = JSON.parse(readFileSync(indexPath, 'utf8'))
assert.equal(index.releaseAlias, 'COL26.8')
assert.equal(index.encoding, 'brotli-jsonl')
const existing = readCatalogueDossiers().records
const matchingIds = existing.filter(record => record.colId === dossier.colId)
const matchingNames = existing.filter(record => normalize(record.scientificName) === normalize(dossier.scientificName))
const existingShard = index.shards.find(shard => shard.path === shardRelativePath)
const rawBytes = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decodedBytes = brotliDecompressSync(compressedBytes)
assert.deepEqual(decodedBytes, rawBytes, 'Brotli round-trip must preserve exact dossier JSONL bytes')
assert.ok(!rawBytes.includes(0x0d), 'Dossier JSONL must use LF only')

let updateMode
if (existingShard) {
  assert.equal(matchingIds.length, 1, 'Existing target shard must be the only dossier with this COL ID')
  assert.equal(matchingNames.length, 1, 'Existing target shard must be the only dossier with this normalized name')
  const currentCompressed = readFileSync(resolve(root, shardRelativePath))
  const currentDecoded = brotliDecompressSync(currentCompressed)
  assert.equal(sha256(currentCompressed), existingShard.compressedSha256)
  assert.equal(sha256(currentDecoded), existingShard.decodedSha256)
  const currentLines = currentDecoded.toString('utf8').split(/\r?\n/u).filter(Boolean)
  assert.equal(currentLines.length, 1, 'The target shard must contain only this curated species record')
  const priorRecord = JSON.parse(currentLines[0])
  assert.equal(priorRecord.colId, dossier.colId)
  assert.equal(priorRecord.scientificName, dossier.scientificName)
  const currentRaw = readFileSync(resolve(root, rawRelativePath))
  assert.deepEqual(currentRaw, currentDecoded, 'Existing raw dossier and indexed shard must match before update')
  existingShard.decodedSha256 = sha256(decodedBytes)
  existingShard.compressedSha256 = sha256(compressedBytes)
  updateMode = currentDecoded.equals(rawBytes) ? 'already-current' : 'refresh-one-existing-record-shard'
} else {
  assert.equal(matchingIds.length, 0, `COL ID ${dossier.colId} already exists in the dossier index`)
  assert.equal(matchingNames.length, 0, `Scientific name ${dossier.scientificName} already exists in the dossier index`)
  index.shards.push({
    path: shardRelativePath,
    recordCount: 1,
    decodedSha256: sha256(decodedBytes),
    compressedSha256: sha256(compressedBytes),
  })
  index.recordCount += 1
  updateMode = 'append-one-independent-species-record-shard'
}

const manifest = {
  schemaVersion: 1,
  shardType: 'independent-col26.8-species-dossiers',
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  datasetKey: source.checklistBankDatasetKey,
  datasetDoi: source.checklistBankDoi,
  recordCount: 1,
  ids: [dossier.colId],
  path: shardRelativePath,
  rawPath: rawRelativePath,
  rawSha256: sha256(rawBytes),
  decodedSha256: sha256(decodedBytes),
  compressedSha256: sha256(compressedBytes),
  decodedBytes: decodedBytes.length,
  compressedBytes: compressedBytes.length,
  checkedAt: source.checkedAt,
  generationSource: sourceRelativePath,
  generationSourceSha256: sha256(sourceBytes),
  registryManifestSha256: sha256(readFileSync(resolve(registryRoot, 'manifest.json'))),
  duplicateCheck: {
    mode: existingShard ? 'in-place-update' : 'new-record',
    indexedRecordCount: index.recordCount,
    existingColIdCount: matchingIds.length,
    existingNormalizedNameCount: matchingNames.length,
    colId: dossier.colId,
    scientificName: dossier.scientificName,
  },
  updateMode,
}
mkdirSync(resolve(root, 'data/knowledge/raw-dossiers'), { recursive: true })
writeFileSync(resolve(root, rawRelativePath), rawBytes)
writeFileSync(resolve(root, shardRelativePath), compressedBytes)
writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(resolve(root, manifestRelativePath), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
if (!existsSync(resolve(root, shardRelativePath))) throw new Error('Generated dossier shard was not written')
console.log(JSON.stringify({ ...manifest, roundTrip: decodedBytes.equals(rawBytes), indexedShardCount: index.recordCount }, null, 2))
