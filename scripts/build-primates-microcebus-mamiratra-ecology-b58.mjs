import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/primates-microcebus-mamiratra-ecology-b58-2026-09-28.json'
const RAW = 'data/knowledge/raw-dossiers/primates-microcebus-mamiratra-ecology-b58-2026-09-28.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-primates-microcebus-mamiratra-2026-09-28.jsonl.br'
const BATCH_MANIFEST = 'data/knowledge/primates-microcebus-mamiratra-ecology-b58-2026-09-28.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const QUEUE = 'data/knowledge/species-evidence-queue'
const TARGET = {
  colId: '42SBS',
  scientificName: 'Microcebus mamiratra Andriantompohavana, Zaonarivelo, Engberg, Randriamampionona, McGuire, Shore et al., 2006',
  authorship: 'Andriantompohavana, Zaonarivelo, Engberg, Randriamampionona, McGuire, Shore et al., 2006',
  sourceDatasetId: '2144',
}
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const readGzipRows = path => gunzipSync(readFileSync(join(ROOT, REGISTRY, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))

const sourceBytes = readFileSync(join(ROOT, INPUT))
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.batchId, 'primates-microcebus-mamiratra-ecology-b58-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.dossier.colId, TARGET.colId)
assert.deepEqual(source.duplicateAudit.openPullRequests, [])
assert.deepEqual(source.duplicateAudit.matchedColIds, [])
assert.deepEqual(source.duplicateAudit.matchedNames, [])
const dossier = source.dossier
for (const [key, value] of Object.entries(TARGET)) assert.equal(String(dossier[key]), String(value), `Dossier identity mismatch for ${key}`)

const queueLine = brotliDecompressSync(readFileSync(join(ROOT, QUEUE, 'c.jsonl.br'))).toString('utf8').split(/\r?\n/).find(line => line && JSON.parse(line).colId === TARGET.colId)
assert.ok(queueLine, `Baseline queue row missing for ${TARGET.colId}`)
const queueRow = JSON.parse(queueLine)
assert.equal(queueRow.scientificName, TARGET.scientificName)
assert.equal(queueRow.sourceDatasetId, TARGET.sourceDatasetId)
if (queueRow.dossier.status === 'missing') {
  assert.equal(queueRow.introductorySummary.status, 'absent')
  assert.equal(sha256(Buffer.from(queueLine, 'utf8')), source.duplicateAudit.queueRowSha256BeforeDossier)
} else {
  const priorBatchManifest = readJson(BATCH_MANIFEST)
  assert.equal(queueRow.dossier.status, dossier.completeness.status)
  assert.equal(priorBatchManifest.duplicateCheck.baselineQueueRow.sha256, source.duplicateAudit.queueRowSha256BeforeDossier)
}

const registryBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
const usageRoute = normalize(TARGET.scientificName).slice(0, 2)
const usageMatches = (registry.search.routes[usageRoute] ?? []).flatMap(readGzipRows).filter(row => row.id === TARGET.colId)
assert.equal(usageMatches.length, 1, `Expected one pinned COL26.8 usage for ${TARGET.colId}`)
const usage = usageMatches[0]
for (const [key, value] of Object.entries({
  scientificName: TARGET.scientificName,
  authorship: TARGET.authorship,
  rank: 'species',
  status: 'accepted',
  sourceDatasetId: TARGET.sourceDatasetId,
})) {
  assert.equal(String(usage[key]), String(value), `Pinned COL usage mismatch for ${key}`)
}

const nodeCache = new Map()
function hierarchyNode(id) {
  if (nodeCache.has(id)) return nodeCache.get(id)
  const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
  let node
  for (const path of registry.hierarchy.nodes.routes[routeKey] ?? []) {
    node = readGzipRows(path).find(item => item.id === id)
    if (node) break
  }
  assert.ok(node, `Missing pinned hierarchy node ${id}`)
  assert.equal(node.status, 'accepted', `Unaccepted hierarchy node ${id}`)
  nodeCache.set(id, node)
  return node
}
const chain = []
let id = TARGET.colId
while (id) {
  const node = hierarchyNode(id)
  chain.unshift(node)
  id = node.parentId
}
dossier.classificationPath = chain.map(({ id: nodeId, scientificName, authorship, rank, status, sourceDatasetId }) => ({
  id: nodeId, scientificName, authorship, rank, status, sourceDatasetId,
}))

assert.equal(dossier.checkedAt, '2026-09-28')
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.deepEqual(dossier.identity.sourceIds, ['col'])
assert.equal(dossier.facets.ecology.status, 'partially-supported')
assert.ok(dossier.facets.ecology.claims.length > 0)
assert.ok(FACETS.filter(facet => facet !== 'ecology').every(facet => dossier.facets[facet].status === 'not-assessed'))
const sources = new Map(dossier.sources.map(item => [item.id, item]))
assert.equal(sources.size, dossier.sources.length, 'Duplicate source IDs')
assert.equal(sources.get('col')?.licenseAssessment, 'identity-only')
const article = sources.get('martin2025')
assert.equal(article?.licenseAssessment, 'item-level-verified')
assert.equal(article?.licenseVersion, 'CC BY 4.0')
assert.equal(article?.stableId, 'doi:10.1017/S0030605324000772')
for (const claim of dossier.facets.ecology.claims) {
  assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus)
  assert.equal(claim.originalLanguage, 'en')
  assert.equal(claim.translationStatus, 'untranslated')
  assert.ok(claim.sourceIds.length && claim.sourceIds.every(sourceId => sources.has(sourceId)))
  for (const sourceId of claim.sourceIds) assert.equal(sources.get(sourceId).licenseAssessment, 'item-level-verified')
}

const indexPath = 'data/knowledge/catalogue-dossier-shards.json'
const index = readJson(indexPath)
assert.equal(index.releaseAlias, 'COL26.8')
const indexedIds = new Set()
const indexedNames = new Set()
const existingRowsById = new Map()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, `Existing compressed shard hash mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, `Existing decoded shard hash mismatch: ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, shard.recordCount, `Existing record count mismatch: ${shard.path}`)
  indexedCount += rows.length
  for (const row of rows) {
    const name = normalize(row.scientificName)
    assert.ok(!indexedIds.has(row.colId), `Duplicate indexed COL ID: ${row.colId}`)
    assert.ok(!indexedNames.has(name), `Duplicate indexed scientific name: ${row.scientificName}`)
    indexedIds.add(row.colId)
    indexedNames.add(name)
    existingRowsById.set(row.colId, row)
  }
}
assert.equal(indexedCount, index.recordCount)
const alreadyIndexed = indexedIds.has(TARGET.colId)
const targetShard = index.shards.find(shard => shard.path === SHARD)
if (alreadyIndexed) {
  assert.deepEqual(existingRowsById.get(TARGET.colId), dossier, `Indexed record differs from source for ${TARGET.colId}`)
  assert.ok(targetShard, 'Existing Microcebus record is not in its expected shard')
} else {
  assert.ok(!indexedNames.has(normalize(TARGET.scientificName)), `Scientific name already indexed: ${TARGET.scientificName}`)
  assert.equal(targetShard, undefined, 'Target shard exists without the target record')
}
const indexedCountBeforeAdd = indexedCount - (alreadyIndexed ? 1 : 0)
const rawBytes = Buffer.from(JSON.stringify(dossier) + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings only')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressedBytes).equals(rawBytes), 'Brotli round-trip mismatch')
const rawPath = join(ROOT, RAW)
const shardPath = join(ROOT, SHARD)
mkdirSync(dirname(rawPath), { recursive: true })
if (alreadyIndexed) {
  assert.equal(targetShard.recordCount, 1)
  assert.equal(targetShard.decodedSha256, sha256(rawBytes))
  assert.equal(targetShard.compressedSha256, sha256(compressedBytes))
  assert.ok(readFileSync(shardPath).equals(compressedBytes), 'Indexed target shard differs from deterministic output')
} else {
  writeFileSync(rawPath, rawBytes)
  writeFileSync(shardPath, compressedBytes)
  index.shards.push({ path: SHARD, recordCount: 1, decodedSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes) })
  index.recordCount = indexedCount + 1
  writeFileSync(join(ROOT, indexPath), JSON.stringify(index, null, 2) + '\n', 'utf8')
}

const batchManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: INPUT, sha256: sha256(sourceBytes) },
  duplicateCheck: {
    baseHead: source.preparedAgainst.head,
    checkedAt: source.preparedAgainst.checkedAt,
    openPullRequests: source.duplicateAudit.openPullRequests,
    indexedRecordCountBeforeAdd: indexedCountBeforeAdd,
    matchedColIds: source.duplicateAudit.matchedColIds,
    matchedNames: source.duplicateAudit.matchedNames,
    baselineQueueRow: {
      path: source.duplicateAudit.queueShard,
      colId: source.duplicateAudit.colId,
      sha256: source.duplicateAudit.queueRowSha256BeforeDossier,
      statusBeforeAdd: 'missing',
    },
  },
  raw: { path: RAW, encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: {
    path: SHARD,
    encoding: 'brotli-jsonl',
    recordCount: 1,
    decodedBytes: rawBytes.length,
    decodedSha256: sha256(rawBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha256(compressedBytes),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: {
    path: `${REGISTRY}/manifest.json`,
    releaseDate: registry.releaseDate,
    checklistBankDatasetKey: registry.checklistBankDatasetKey,
    manifestSha256: sha256(registryBytes),
  },
  generator: 'scripts/build-primates-microcebus-mamiratra-ecology-b58.mjs',
}
writeFileSync(join(ROOT, BATCH_MANIFEST), JSON.stringify(batchManifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({
  colId: TARGET.colId,
  indexedRecordsBeforeAdd: indexedCountBeforeAdd,
  indexedRecordsAfterAdd: index.recordCount,
  rawSha256: sha256(rawBytes),
  compressedSha256: sha256(compressedBytes),
  queueRowSha256BeforeDossier: source.duplicateAudit.queueRowSha256BeforeDossier,
  result: 'added-one-source-bounded-incomplete-dossier',
}, null, 2))
