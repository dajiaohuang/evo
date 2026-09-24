import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = 'data/sources/primates-gorilla-beringei-batch12-2026-09-24.json'
const RAW = 'data/knowledge/raw-dossiers/primates-gorilla-beringei-batch12-2026-09-24.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-primates-gorilla-beringei-batch12-2026-09-24.jsonl.br'
const MANIFEST = 'data/knowledge/catalogue-dossiers-primates-gorilla-beringei-batch12-2026-09-24.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const INDEX = 'data/knowledge/catalogue-dossier-shards.json'
const EXPECTED_SOURCE_SHA256 = '9c7393e0fcc4d7298c2922773ca74383b2d1172ac665a2ecae5a1381deab7f48'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))

function readRows(path) {
  return gunzipSync(readFileSync(join(ROOT, REGISTRY, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function acceptedUsage(manifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (manifest.search.routes[route] ?? []).flatMap(readRows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1, `Expected one COL26.8 search usage for ${dossier.colId}`)
  const row = matches[0]
  for (const [key, value] of Object.entries({ scientificName: dossier.scientificName, authorship: dossier.authorship, rank: 'species', status: 'accepted', sourceDatasetId: dossier.sourceDatasetId })) {
    assert.equal(String(row[key]), String(value), `COL usage ${key} mismatch for ${dossier.colId}`)
  }

  const hierarchy = []
  let id = dossier.colId
  while (id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of manifest.hierarchy.nodes.routes[routeKey] ?? []) {
      node = readRows(path).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, `Missing hierarchy node ${id}`)
    assert.equal(node.status, 'accepted', `Parent ${id} is not accepted`)
    hierarchy.unshift(node)
    id = node.parentId
  }
  const chain = hierarchy.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.deepEqual(dossier.classificationPath, chain, `Parent chain mismatch for ${dossier.colId}`)
  assert.equal(chain.at(-1).id, dossier.colId)
  assert.ok(chain.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
}

function validate(dossier) {
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  assert.deepEqual(dossier.identity.sourceIds, ['col'])
  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length)
  assert.equal(dossier.sources.find(source => source.id === 'col')?.licenseAssessment, 'identity-only')
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid ${facet} status`)
    if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, `Missing explicit gap for ${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim missing bounds in ${facet}`)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.equal(claim.originalLanguage, 'en')
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
      for (const id of claim.sourceIds) assert.equal(dossier.sources.find(source => source.id === id).licenseAssessment, 'item-level-verified')
    }
  }
}

const sourceBytes = readFileSync(join(ROOT, SOURCE))
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Input source hash changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
const registryBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
assert.equal(sha256(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned COL26.8 registry manifest changed')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.deepEqual(source.registry, { path: `${REGISTRY}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: EXPECTED_REGISTRY_SHA256 })
assert.equal(source.duplicateAudit.baseHead, 'a4c20d0130fe043a84623d59bca3f7a5bd69151b')
assert.equal(source.records.length, 1)
const index = readJson(INDEX)
const existing = new Set()
let indexedCount = 0
for (const shard of index.shards) {
  const bytes = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(bytes), shard.compressedSha256, `Compressed hash mismatch in ${shard.path}`)
  const decoded = brotliDecompressSync(bytes)
  assert.equal(sha256(decoded), shard.decodedSha256, `Decoded hash mismatch in ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, shard.recordCount, `Record count mismatch in ${shard.path}`)
  indexedCount += rows.length
  for (const row of rows) {
    existing.add(row.colId)
    existing.add(normalize(row.scientificName))
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, 6919)
assert.equal(indexedCount, source.duplicateAudit.checkedIndexRecords)
const records = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId))
assert.equal(new Set(records.map(row => row.colId)).size, records.length)
for (const dossier of records) {
  assert.ok(!existing.has(dossier.colId), `COL id already indexed: ${dossier.colId}`)
  assert.ok(!existing.has(normalize(dossier.scientificName)), `Name already indexed: ${dossier.scientificName}`)
  assert.ok(!source.duplicateAudit.matchedColIds.includes(dossier.colId))
  assert.ok(!source.duplicateAudit.matchedNames.includes(normalize(dossier.scientificName)))
  acceptedUsage(registry, dossier)
  validate(dossier)
}

const rawBytes = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTrip = brotliDecompressSync(compressedBytes)
assert.ok(roundTrip.equals(rawBytes), 'Brotli roundtrip must exactly reproduce raw JSONL bytes')
assert.deepEqual(roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)
writeFileSync(join(ROOT, RAW), rawBytes)
writeFileSync(join(ROOT, SHARD), compressedBytes)
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: SOURCE, sha256: sha256(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, indexedRecordCount: indexedCount, matchedColIds: source.duplicateAudit.matchedColIds, matchedNames: source.duplicateAudit.matchedNames },
  raw: { path: RAW, encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: SHARD, encoding: 'brotli-jsonl', recordCount: records.length, decodedBytes: roundTrip.length, decodedSha256: sha256(roundTrip), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: `${REGISTRY}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/build-primates-gorilla-beringei-batch12.mjs',
}
writeFileSync(join(ROOT, MANIFEST), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ recordCount: records.length, colIds: records.map(record => record.colId), indexedRecordCount: indexedCount, inputSha256: sha256(sourceBytes), registryManifestSha256: sha256(registryBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), roundTrip: 'exact-byte-match' }, null, 2))
