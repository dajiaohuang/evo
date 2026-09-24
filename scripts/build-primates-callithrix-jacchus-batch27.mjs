import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = 'data/sources/primates-callithrix-jacchus-batch27-2026-09-25.json'
const RAW = 'data/knowledge/raw-dossiers/primates-callithrix-jacchus-batch27-2026-09-25.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-primates-callithrix-jacchus-batch27-2026-09-25.jsonl.br'
const MANIFEST = 'data/knowledge/catalogue-dossiers-primates-callithrix-jacchus-batch27-2026-09-25.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const INDEX = 'data/knowledge/catalogue-dossier-shards.json'
const EXPECTED_SOURCE_SHA256 = 'ae67d9144d140d3157632533d8becdcde909ba28ac644b0adeee2b274ac85946'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const EXPECTED_BASE_HEAD = '8f531922a08dc6d46a1334202e66c05c73016bc4'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

function readRegistryRows(path) {
  return gunzipSync(readFileSync(join(ROOT, REGISTRY, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function acceptedClassification(registry, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(readRegistryRows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1, 'Expected exactly one accepted COL search usage')
  const usage = matches[0]
  for (const [key, value] of Object.entries({
    scientificName: dossier.scientificName,
    authorship: dossier.authorship,
    rank: 'species',
    status: 'accepted',
    sourceDatasetId: dossier.sourceDatasetId,
  })) {
    assert.equal(String(usage[key]), String(value), 'Pinned COL usage ' + key + ' mismatch')
  }

  const chain = []
  let id = dossier.colId
  while (id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of registry.hierarchy.nodes.routes[routeKey] ?? []) {
      node = readRegistryRows(path).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, 'Missing pinned hierarchy node ' + id)
    assert.equal(node.status, 'accepted', 'Unaccepted hierarchy node ' + id)
    chain.unshift(node)
    id = node.parentId
  }
  const expected = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.deepEqual(dossier.classificationPath, expected, 'Source classification path differs from pinned COL chain')
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
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), 'Invalid facet status: ' + facet)
    if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, 'Missing explicit gap for ' + facet)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, 'Claim missing evidence bounds in ' + facet)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.equal(claim.originalLanguage, 'en')
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)), 'Unknown claim source in ' + facet)
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], 'Missing ' + key + ' for ' + id)
        assert.match(source.licenseUrl ?? '', /^https:\/\//u)
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
      }
    }
  }
}

const sourceBytes = readFileSync(join(ROOT, SOURCE))
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Pinned source JSON hash mismatch')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-callithrix-jacchus-batch27-2026-09-25')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.duplicateAudit.baseHead, EXPECTED_BASE_HEAD)
assert.equal(source.duplicateAudit.checkedIndexRecords, 6935)
assert.deepEqual(source.duplicateAudit.openPullRequests, [])
assert.equal(source.records.length, 1)
const records = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId))
const registryBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
assert.equal(sha256(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned COL registry manifest hash mismatch')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.deepEqual(source.registry, {
  path: REGISTRY + '/manifest.json',
  releaseDate: registry.releaseDate,
  checklistBankDatasetKey: registry.checklistBankDatasetKey,
  manifestSha256: EXPECTED_REGISTRY_SHA256,
})
for (const dossier of records) {
  assert.equal(dossier.colId, '697NS')
  assert.equal(dossier.scientificName, 'Callithrix jacchus (Linnaeus, 1758)')
  assert.equal(dossier.sourceDatasetId, '2144')
  acceptedClassification(registry, dossier)
  validateDossier(dossier)
}

const index = readJson(INDEX)
assert.equal(index.releaseAlias, 'COL26.8')
const indexedIds = new Set()
const indexedNames = new Set()
const existingRowsById = new Map()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, 'Existing compressed shard hash mismatch: ' + shard.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, 'Existing decoded shard hash mismatch: ' + shard.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, shard.recordCount, 'Existing record count mismatch: ' + shard.path)
  indexedCount += rows.length
  for (const row of rows) {
    const name = normalize(row.scientificName)
    assert.ok(!indexedIds.has(row.colId), 'Duplicate indexed COL ID: ' + row.colId)
    assert.ok(!indexedNames.has(name), 'Duplicate indexed scientific name: ' + row.scientificName)
    indexedIds.add(row.colId)
    indexedNames.add(name)
    existingRowsById.set(row.colId, row)
  }
}
assert.equal(indexedCount, index.recordCount)
const targetAlreadyIndexed = index.shards.some(shard => shard.path === SHARD)
const existingTargetRecord = existingRowsById.get('697NS')
const existingNameRecord = [...existingRowsById.values()].find(row => normalize(row.scientificName) === normalize(records[0].scientificName))
const rawBytes = Buffer.from(records.map(record => JSON.stringify(record)).join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings only')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decodedBytes = brotliDecompressSync(compressedBytes)
assert.ok(decodedBytes.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.equal(sha256(decodedBytes), sha256(rawBytes))
assert.deepEqual(decodedBytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)
const rawPath = join(ROOT, RAW)
const shardPath = join(ROOT, SHARD)
const manifestPath = join(ROOT, MANIFEST)
mkdirSync(dirname(rawPath), { recursive: true })
if (targetAlreadyIndexed) {
  assert.equal(indexedCount, source.duplicateAudit.checkedIndexRecords + 1, 'Unexpected indexed count during idempotent rebuild')
  assert.equal(existingTargetRecord?.colId, records[0].colId, 'Indexed Callithrix usage is missing from its expected shard')
  assert.equal(existingNameRecord?.colId, records[0].colId, 'Indexed scientific name resolves to a different COL ID')
  assert.deepEqual(existingTargetRecord, records[0], 'Indexed target record differs from the source dossier')
  const targetShard = index.shards.find(shard => shard.path === SHARD)
  assert.equal(targetShard.recordCount, 1)
  assert.equal(targetShard.decodedSha256, sha256(rawBytes))
  assert.equal(targetShard.compressedSha256, sha256(compressedBytes))
  assert.ok(readFileSync(shardPath).equals(compressedBytes), 'Indexed target shard bytes differ from deterministic output')
} else {
  assert.equal(indexedCount, source.duplicateAudit.checkedIndexRecords, 'Stale duplicate audit baseline')
  assert.ok(!existingTargetRecord, 'COL ID already indexed outside the expected shard')
  assert.ok(!existingNameRecord, 'Scientific name already indexed')
  for (const dossier of records) {
    assert.ok(!source.duplicateAudit.matchedColIds.includes(dossier.colId))
    assert.ok(!source.duplicateAudit.matchedNames.includes(normalize(dossier.scientificName)))
  }
  writeFileSync(rawPath, rawBytes)
  writeFileSync(shardPath, compressedBytes)
  const generatedEntry = {
    path: SHARD,
    recordCount: records.length,
    decodedSha256: sha256(decodedBytes),
    compressedSha256: sha256(compressedBytes),
  }
  index.shards.push(generatedEntry)
  index.recordCount = indexedCount + records.length
  writeFileSync(join(ROOT, INDEX), JSON.stringify(index, null, 2) + '\n', 'utf8')
}

const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: SOURCE, sha256: sha256(sourceBytes) },
  duplicateCheck: {
    baseHead: source.duplicateAudit.baseHead,
    openPullRequests: source.duplicateAudit.openPullRequests,
    indexedRecordCount: source.duplicateAudit.checkedIndexRecords,
    matchedColIds: source.duplicateAudit.matchedColIds,
    matchedNames: source.duplicateAudit.matchedNames,
  },
  raw: { path: RAW, encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: {
    path: SHARD,
    encoding: 'brotli-jsonl',
    recordCount: records.length,
    decodedBytes: decodedBytes.length,
    decodedSha256: sha256(decodedBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha256(compressedBytes),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { path: REGISTRY + '/manifest.json', releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/build-primates-callithrix-jacchus-batch27.mjs',
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({
  colId: records[0].colId,
  scientificName: records[0].scientificName,
  indexedRecordsBeforeAdd: source.duplicateAudit.checkedIndexRecords,
  indexedRecordsAfterAdd: index.recordCount,
  rawSha256: sha256(rawBytes),
  compressedSha256: sha256(compressedBytes),
  roundTrip: 'exact-byte-match',
  rebuild: targetAlreadyIndexed ? 'verified-idempotent-rebuild' : 'added-new-record-shard',
}, null, 2))
