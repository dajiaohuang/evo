import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = 'data/sources/primates-cebus-capucinus-batch16-2026-09-24.json'
const RAW = 'data/knowledge/raw-dossiers/primates-cebus-capucinus-batch16-2026-09-24.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-primates-cebus-capucinus-batch16-2026-09-24.jsonl.br'
const MANIFEST = 'data/knowledge/catalogue-dossiers-primates-cebus-capucinus-batch16-2026-09-24.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const INDEX = 'data/knowledge/catalogue-dossier-shards.json'
const EXPECTED_SOURCE_SHA256 = '607668ae23fcb455cb538ab774ab4f278a1cc04e15778978a2efe4b7ad109045'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))

function readRegistryRows(path) {
  return gunzipSync(readFileSync(join(ROOT, REGISTRY, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedIdentity(manifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (manifest.search.routes[route] ?? []).flatMap(readRegistryRows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1, `Expected one pinned search usage for ${dossier.colId}`)
  const usage = matches[0]
  for (const [key, value] of Object.entries({ scientificName: dossier.scientificName, authorship: dossier.authorship, rank: 'species', status: 'accepted', sourceDatasetId: dossier.sourceDatasetId })) {
    assert.equal(String(usage[key]), String(value), `Accepted usage ${key} mismatch for ${dossier.colId}`)
  }

  const chain = []
  let id = dossier.colId
  while (id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of manifest.hierarchy.nodes.routes[routeKey] ?? []) {
      node = readRegistryRows(path).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, `Missing hierarchy node ${id}`)
    assert.equal(node.status, 'accepted', `Hierarchy node ${id} is not accepted`)
    chain.unshift(node)
    id = node.parentId
  }
  const expected = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.deepEqual(dossier.classificationPath, expected, `Accepted parent chain mismatch for ${dossier.colId}`)
  assert.equal(expected.at(-1).id, dossier.colId)
  assert.ok(expected.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
}

function validateDossier(dossier) {
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  assert.deepEqual(dossier.identity.sourceIds, ['col'])
  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length, 'Duplicate source IDs')
  assert.equal(dossier.sources.find(source => source.id === 'col')?.licenseAssessment, 'identity-only')
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid ${facet} status`)
    if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, `Missing explicit ${facet} gap`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim missing bounds in ${facet}`)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.equal(claim.originalLanguage, 'en')
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)), `Unknown source in ${facet}`)
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], `Missing ${key} for ${id}`)
        assert.match(source.licenseUrl ?? '', /^https:\/\//u)
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
      }
    }
  }
}

const sourceBytes = readFileSync(join(ROOT, SOURCE))
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Pinned source JSON hash mismatch')
const source = JSON.parse(sourceBytes.toString('utf8'))
const registryBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
assert.equal(sha256(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned registry manifest hash mismatch')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.deepEqual(source.registry, { path: `${REGISTRY}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: EXPECTED_REGISTRY_SHA256 })
assert.equal(source.duplicateAudit.baseHead, 'e0f5dee96fe4652c1af9dd854b8fe92c62f4379a')
assert.equal(source.records.length, 1)

const index = readJson(INDEX)
const indexedIds = new Set()
const indexedNames = new Set()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, `Existing compressed hash mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, `Existing decoded hash mismatch: ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, shard.recordCount, `Existing record count mismatch: ${shard.path}`)
  indexedCount += rows.length
  for (const row of rows) {
    const name = normalize(row.scientificName)
    assert.ok(!indexedIds.has(row.colId), `Duplicate indexed COL id: ${row.colId}`)
    assert.ok(!indexedNames.has(name), `Duplicate indexed scientific name: ${row.scientificName}`)
    indexedIds.add(row.colId)
    indexedNames.add(name)
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, 6922)
assert.equal(indexedCount, source.duplicateAudit.checkedIndexRecords)
const records = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId))
assert.equal(new Set(records.map(record => record.colId)).size, records.length)
for (const dossier of records) {
  assert.ok(!indexedIds.has(dossier.colId), `COL id already indexed: ${dossier.colId}`)
  assert.ok(!indexedNames.has(normalize(dossier.scientificName)), `Scientific name already indexed: ${dossier.scientificName}`)
  assert.ok(!source.duplicateAudit.matchedColIds.includes(dossier.colId))
  assert.ok(!source.duplicateAudit.matchedNames.includes(normalize(dossier.scientificName)))
  verifyAcceptedIdentity(registry, dossier)
  validateDossier(dossier)
}

const rawBytes = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTripBytes = brotliDecompressSync(compressedBytes)
assert.ok(roundTripBytes.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.equal(sha256(roundTripBytes), sha256(rawBytes), 'Brotli roundtrip SHA-256 mismatch')
assert.deepEqual(roundTripBytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)

mkdirSync(dirname(join(ROOT, RAW)), { recursive: true })
writeFileSync(join(ROOT, RAW), rawBytes)
writeFileSync(join(ROOT, SHARD), compressedBytes)
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: SOURCE, sha256: sha256(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, indexedRecordCount: indexedCount, matchedColIds: source.duplicateAudit.matchedColIds, matchedNames: source.duplicateAudit.matchedNames },
  raw: { path: RAW, encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: SHARD, encoding: 'brotli-jsonl', recordCount: records.length, decodedBytes: roundTripBytes.length, decodedSha256: sha256(roundTripBytes), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: `${REGISTRY}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/build-primates-cebus-capucinus-batch16.mjs',
}
writeFileSync(join(ROOT, MANIFEST), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ recordCount: records.length, colIds: records.map(record => record.colId), indexedRecordCount: indexedCount, inputSha256: sha256(sourceBytes), registryManifestSha256: sha256(registryBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), roundTrip: 'exact-byte-match' }, null, 2))
