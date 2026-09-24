import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = 'data/sources/primates-colobus-guereza-batch18-2026-09-24.json'
const RAW = 'data/knowledge/raw-dossiers/primates-colobus-guereza-batch18-2026-09-24.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-primates-colobus-guereza-batch18-2026-09-24.jsonl.br'
const MANIFEST = 'data/knowledge/catalogue-dossiers-primates-colobus-guereza-batch18-2026-09-24.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const INDEX = 'data/knowledge/catalogue-dossier-shards.json'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const readRows = path => gunzipSync(readFileSync(join(ROOT, REGISTRY, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))

const sourceBytes = readFileSync(join(ROOT, SOURCE))
const source = JSON.parse(sourceBytes.toString('utf8'))
const registryBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.equal(sha256(registryBytes), source.registry.manifestSha256)
assert.equal(source.duplicateAudit.baseHead, '3dc13fe070b0af8b88d2d38249edcd5c8cbd339b')

const index = readJson(INDEX)
const indexedIds = new Set()
const indexedNames = new Set()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, `Compressed checksum mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, `Decoded checksum mismatch: ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, shard.recordCount, `Record count mismatch: ${shard.path}`)
  indexedCount += rows.length
  for (const row of rows) {
    const name = normalize(row.scientificName)
    assert.ok(!indexedIds.has(row.colId), `Duplicate indexed COL id ${row.colId}`)
    assert.ok(!indexedNames.has(name), `Duplicate indexed name ${name}`)
    indexedIds.add(row.colId)
    indexedNames.add(name)
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, source.duplicateAudit.checkedIndexRecords)

for (const dossier of source.records) {
  assert.ok(!indexedIds.has(dossier.colId), `COL ID already indexed: ${dossier.colId}`)
  assert.ok(!indexedNames.has(normalize(dossier.scientificName)), `Scientific name already indexed: ${dossier.scientificName}`)
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(readRows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1)
  const usage = matches[0]
  for (const [key, value] of Object.entries({ scientificName: dossier.scientificName, authorship: dossier.authorship, rank: 'species', status: 'accepted', sourceDatasetId: dossier.sourceDatasetId })) assert.equal(String(usage[key]), String(value), `Usage ${key} mismatch`)
  const chain = []
  let id = dossier.colId
  while (id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of registry.hierarchy.nodes.routes[routeKey] ?? []) {
      node = readRows(path).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, `Missing hierarchy node ${id}`)
    assert.equal(node.status, 'accepted')
    chain.unshift(node)
    id = node.parentId
  }
  dossier.classificationPath = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.equal(dossier.classificationPath.at(-1).id, dossier.colId)
  assert.ok(dossier.classificationPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
  assert.equal(dossier.identity.sourceIds.join(','), 'col')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  const sourceIds = new Set(dossier.sources.map(item => item.id))
  assert.equal(sourceIds.size, dossier.sources.length)
  assert.equal(dossier.sources.find(item => item.id === 'matsuda2022')?.licenseAssessment, 'item-level-verified')
  for (const assessment of Object.values(dossier.facets)) {
    if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(sourceId => sourceIds.has(sourceId)))
    }
  }
}

const records = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId))
const rawBytes = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d))
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTrip = brotliDecompressSync(compressedBytes)
assert.deepEqual(roundTrip, rawBytes)
assert.deepEqual(roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)
mkdirSync(dirname(join(ROOT, RAW)), { recursive: true })
writeFileSync(join(ROOT, RAW), rawBytes)
writeFileSync(join(ROOT, SHARD), compressedBytes)
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: SOURCE, sha256: sha256(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, indexedRecordCount: indexedCount, matchedColIds: [], matchedNames: [] },
  raw: { path: RAW, encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: SHARD, encoding: 'brotli-jsonl', recordCount: records.length, decodedBytes: roundTrip.length, decodedSha256: sha256(roundTrip), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: `${REGISTRY}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/build-primates-colobus-guereza-batch18.mjs'
}
writeFileSync(join(ROOT, MANIFEST), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ recordCount: records.length, colIds: records.map(record => record.colId), indexedRecordCount: indexedCount, inputSha256: sha256(sourceBytes), registryManifestSha256: sha256(registryBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), roundTrip: 'exact-byte-match' }, null, 2))
