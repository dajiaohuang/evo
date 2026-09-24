import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = 'data/sources/multi-clade-evidence-batch30-2026-09-25.json'
const RAW = 'data/knowledge/raw-dossiers/multi-clade-evidence-batch30-2026-09-25.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-multi-clade-evidence-batch30-2026-09-25.jsonl.br'
const BATCH_MANIFEST = 'data/knowledge/multi-clade-evidence-batch30-2026-09-25.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const EXPECTED_BASE_HEAD = '47b27496c893d6e3f2f342dd471e2f7623c288ff'
const EXPECTED_BASE_RECORDS = 6938
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const TARGETS = new Map([
  ['3FCKT', { scientificName: 'Gasterosteus aculeatus Linnaeus, 1758', authorship: 'Linnaeus, 1758', sourceDatasetId: '1010' }],
  ['4TZJS', { scientificName: 'Saimiri boliviensis (I. Geoffroy Saint-Hilaire & de Blainville, 1834)', authorship: '(I. Geoffroy Saint-Hilaire & de Blainville, 1834)', sourceDatasetId: '2144' }],
  ['6WR99', { scientificName: 'Rana temporaria Linnaeus, 1758', authorship: 'Linnaeus, 1758', sourceDatasetId: '2144' }],
])

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const readRows = path => gunzipSync(readFileSync(join(ROOT, REGISTRY, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))

function acceptedClassification(registry, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(readRows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1, 'Expected exactly one accepted COL26.8 search usage for ' + dossier.colId)
  const usage = matches[0]
  const target = TARGETS.get(dossier.colId)
  assert.ok(target, 'Unexpected dossier target ' + dossier.colId)
  for (const [key, value] of Object.entries({
    scientificName: target.scientificName,
    authorship: target.authorship,
    rank: 'species',
    status: 'accepted',
    sourceDatasetId: target.sourceDatasetId,
  })) {
    assert.equal(String(usage[key]), String(value), 'Pinned COL usage ' + key + ' mismatch for ' + dossier.colId)
    if (key !== 'status') assert.equal(String(dossier[key]), String(value), 'Source input ' + key + ' mismatch for ' + dossier.colId)
  }

  const chain = []
  let id = dossier.colId
  while (id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of registry.hierarchy.nodes.routes[routeKey] ?? []) {
      node = readRows(path).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, 'Missing pinned hierarchy node ' + id)
    assert.equal(node.status, 'accepted', 'Unaccepted hierarchy node ' + id)
    chain.unshift(node)
    id = node.parentId
  }
  const path = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  if (dossier.classificationPath) assert.deepEqual(dossier.classificationPath, path, 'Stored classification path differs from pinned COL chain for ' + dossier.colId)
  dossier.classificationPath = path
}

function validateDossier(dossier) {
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.checkedAt, '2026-09-25')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  assert.deepEqual(dossier.identity.sourceIds, ['col'])
  assert.ok(dossier.systematicSearch.date && dossier.systematicSearch.scope && dossier.systematicSearch.method && dossier.systematicSearch.queryOrPath && dossier.systematicSearch.inclusionCriteria && dossier.systematicSearch.exclusionCriteria && dossier.systematicSearch.searcher)
  const sources = new Map(dossier.sources.map(source => [source.id, source]))
  assert.equal(sources.size, dossier.sources.length, 'Duplicate source IDs for ' + dossier.colId)
  assert.equal(sources.get('col')?.licenseAssessment, 'identity-only')
  for (const source of dossier.sources.filter(item => item.id !== 'col')) {
    assert.equal(source.licenseAssessment, 'item-level-verified')
    for (const key of ['stableId', 'version', 'publishedAt', 'accessedAt', 'rightsHolder', 'licenseVersion', 'licenseUrl', 'licenseAppliesTo', 'attribution']) {
      assert.ok(source[key], 'Missing source rights/version field ' + key + ' for ' + dossier.colId)
    }
  }
  let partialFacets = 0
  let notAssessedFacets = 0
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), 'Invalid facet status: ' + facet)
    if (assessment.status === 'partially-supported') partialFacets++
    if (assessment.status === 'not-assessed') {
      notAssessedFacets++
      assert.ok(assessment.gaps?.length, 'Missing explicit gap for ' + facet)
    }
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, 'Claim missing evidence bounds in ' + facet + ' for ' + dossier.colId)
      assert.equal(claim.originalLanguage, 'en')
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sources.has(id)), 'Unknown claim source in ' + facet)
      for (const id of claim.sourceIds) assert.equal(sources.get(id).licenseAssessment, 'item-level-verified')
    }
  }
  assert.ok(partialFacets > 0 && notAssessedFacets > 0, 'New source slices must retain supported gaps for ' + dossier.colId)
}

const source = readJson(SOURCE)
assert.equal(source.batchId, 'multi-clade-evidence-batch30-2026-09-25')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.duplicateAudit.baseHead, EXPECTED_BASE_HEAD)
assert.equal(source.duplicateAudit.checkedIndexRecords, EXPECTED_BASE_RECORDS)
assert.deepEqual(source.duplicateAudit.openPullRequests, [])
assert.deepEqual(source.duplicateAudit.matchedColIds, [])
assert.deepEqual(source.duplicateAudit.matchedNames, [])
assert.equal(source.records.length, TARGETS.size)
const records = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId))
assert.deepEqual(records.map(record => record.colId), [...TARGETS.keys()].sort())

const registryBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
assert.equal(sha256(registryBytes), REGISTRY_SHA256, 'Pinned COL registry manifest hash mismatch')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.deepEqual(source.registry, {
  path: REGISTRY + '/manifest.json',
  releaseDate: registry.releaseDate,
  checklistBankDatasetKey: registry.checklistBankDatasetKey,
  manifestSha256: REGISTRY_SHA256,
})
for (const dossier of records) {
  acceptedClassification(registry, dossier)
  validateDossier(dossier)
}

const index = readJson('data/knowledge/catalogue-dossier-shards.json')
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
const targetShard = index.shards.find(shard => shard.path === SHARD)
for (const record of records) {
  assert.ok(!indexedIds.has(record.colId) || targetShard, 'COL ID already indexed before this batch: ' + record.colId)
  assert.ok(!indexedNames.has(normalize(record.scientificName)) || targetShard, 'Scientific name already indexed before this batch: ' + record.scientificName)
}

const sourceBytes = Buffer.from(JSON.stringify(source, null, 2) + '\n', 'utf8')
writeFileSync(join(ROOT, SOURCE), sourceBytes)
const rawBytes = Buffer.from(records.map(record => JSON.stringify(record)).join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings only')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decodedBytes = brotliDecompressSync(compressedBytes)
assert.ok(decodedBytes.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.deepEqual(decodedBytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)

const rawPath = join(ROOT, RAW)
const shardPath = join(ROOT, SHARD)
const batchManifestPath = join(ROOT, BATCH_MANIFEST)
mkdirSync(dirname(rawPath), { recursive: true })
if (targetShard) {
  assert.equal(indexedCount, EXPECTED_BASE_RECORDS + records.length, 'Unexpected indexed count during idempotent rebuild')
  for (const dossier of records) assert.deepEqual(existingRowsById.get(dossier.colId), dossier, 'Indexed record differs from source for ' + dossier.colId)
  const rowCount = targetShard.recordCount
  assert.equal(rowCount, records.length, 'Existing target shard row count mismatch')
  assert.equal(targetShard.decodedSha256, sha256(rawBytes))
  assert.equal(targetShard.compressedSha256, sha256(compressedBytes))
  assert.ok(readFileSync(shardPath).equals(compressedBytes), 'Indexed target shard differs from deterministic output')
} else {
  assert.equal(indexedCount, EXPECTED_BASE_RECORDS, 'Stale duplicate audit baseline')
  writeFileSync(rawPath, rawBytes)
  writeFileSync(shardPath, compressedBytes)
  index.shards.push({
    path: SHARD,
    recordCount: records.length,
    decodedSha256: sha256(decodedBytes),
    compressedSha256: sha256(compressedBytes),
  })
  index.recordCount = indexedCount + records.length
  writeFileSync(join(ROOT, 'data/knowledge/catalogue-dossier-shards.json'), JSON.stringify(index, null, 2) + '\n', 'utf8')
}

const batchManifest = {
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
  generator: 'scripts/build-multi-clade-evidence-batch30.mjs',
}
writeFileSync(batchManifestPath, JSON.stringify(batchManifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({
  records: records.map(({ colId, scientificName }) => ({ colId, scientificName })),
  indexedRecordsBeforeAdd: EXPECTED_BASE_RECORDS,
  indexedRecordsAfterAdd: index.recordCount,
  rawSha256: sha256(rawBytes),
  compressedSha256: sha256(compressedBytes),
  roundTrip: 'exact-byte-match',
  rebuild: targetShard ? 'verified-idempotent-rebuild' : 'added-new-record-shard',
}, null, 2))
