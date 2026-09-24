import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/primates-chlorocebus-sabaeus-batch15-2026-09-24.json')
const RAW_PATH = join(ROOT, 'data/knowledge/raw-dossiers/primates-chlorocebus-sabaeus-batch15-2026-09-24.jsonl')
const SHARD_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-chlorocebus-sabaeus-batch15-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-chlorocebus-sabaeus-batch15-2026-09-24.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const INDEX_PATH = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const EXPECTED_SOURCE_SHA256 = 'a4a7b274af0b7a803b8601d1aa564f058d9e3fd1186c255dad384b43126c12fe'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

function readRegistryRows(path) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
}

function readExistingDossierKeys(index) {
  const keys = new Set()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, `Existing compressed shard hash mismatch: ${shard.path}`)
    const raw = brotliDecompressSync(compressed)
    assert.equal(sha256(raw), shard.decodedSha256, `Existing decoded shard hash mismatch: ${shard.path}`)
    const rows = raw.toString('utf8').trimEnd().split('\n').map(JSON.parse)
    assert.equal(rows.length, shard.recordCount, `Existing shard record count mismatch: ${shard.path}`)
    count += rows.length
    for (const row of rows) {
      keys.add(`id:${row.colId}`)
      keys.add(`name:${normalize(row.scientificName)}`)
    }
  }
  assert.equal(count, index.recordCount, 'Existing index total differs from its shards')
  return { keys, count }
}

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Source JSON hash is not pinned in this builder')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-chlorocebus-sabaeus-batch15-2026-09-24')
assert.equal(source.releaseAlias, 'COL26.8')
assert.deepEqual(source.duplicateAudit, {
  baseHead: 'e0f5dee96fe4652c1af9dd854b8fe92c62f4379a',
  checkedIndexRecords: 6922,
  matchedColIds: [],
  matchedNames: [],
})

const registryBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned COL registry manifest hash mismatch')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.deepEqual(source.registry, {
  path: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json',
  releaseDate: '2026-08-20',
  checklistBankDatasetKey: 316115,
  manifestSha256: EXPECTED_REGISTRY_SHA256,
})
assert.equal(source.records.length, 1, 'This batch must contain only one species')
const dossier = source.records[0]
assert.deepEqual([dossier.colId, dossier.scientificName, dossier.authorship, dossier.rank, dossier.sourceDatasetId], [
  '5XW96', 'Chlorocebus sabaeus (Linnaeus, 1766)', '(Linnaeus, 1766)', 'species', '2144',
])

const searchPrefix = normalize(dossier.scientificName).slice(0, 2)
const usage = (registry.search.routes[searchPrefix] ?? []).flatMap(readRegistryRows).filter(row => row.id === dossier.colId)
assert.equal(usage.length, 1, 'Expected exactly one COL26.8 search row for 5XW96')
assert.deepEqual(
  [usage[0].scientificName, usage[0].authorship, usage[0].rank, usage[0].status, String(usage[0].sourceDatasetId)],
  [dossier.scientificName, dossier.authorship, 'species', 'accepted', '2144'],
)

const chain = []
let currentId = dossier.colId
while (currentId) {
  const prefix = sha256(Buffer.from(currentId, 'utf8')).slice(0, 2)
  const candidates = (registry.hierarchy.nodes.routes[prefix] ?? []).flatMap(readRegistryRows).filter(node => node.id === currentId)
  assert.equal(candidates.length, 1, `Expected exactly one hierarchy node for ${currentId}`)
  assert.equal(candidates[0].status, 'accepted', `Unaccepted hierarchy node ${currentId}`)
  chain.unshift(candidates[0])
  currentId = candidates[0].parentId
}
const classificationPath = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
assert.deepEqual(dossier.classificationPath, classificationPath, 'Dossier parent chain differs from pinned COL26.8 hierarchy')
assert.equal(classificationPath.at(-1).id, dossier.colId)
assert.ok(classificationPath.some(node => node.id === '3W7' && node.rank === 'order'), 'Species parent chain does not include Primates')

const indexed = readExistingDossierKeys(JSON.parse(readFileSync(INDEX_PATH, 'utf8')))
assert.equal(indexed.count, source.duplicateAudit.checkedIndexRecords, 'Index total differs from duplicate audit')
assert.ok(!indexed.keys.has(`id:${dossier.colId}`), `COL ID already indexed: ${dossier.colId}`)
assert.ok(!indexed.keys.has(`name:${normalize(dossier.scientificName)}`), `Scientific name already indexed: ${dossier.scientificName}`)
assert.deepEqual(source.duplicateAudit.matchedColIds, [])
assert.deepEqual(source.duplicateAudit.matchedNames, [])

assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.identity.sourceIds.join(','), 'col')
assert.equal(dossier.sources.find(item => item.id === 'col').licenseAssessment, 'identity-only')
for (const [facet, assessment] of Object.entries(dossier.facets)) {
  assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid facet status: ${facet}`)
  if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, `Not-assessed facet needs a gap: ${facet}`)
  for (const claim of assessment.claims ?? []) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim requires text, locator, bounded scope and life status: ${facet}`)
    assert.equal(claim.translationStatus, 'untranslated')
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => dossier.sources.some(item => item.id === id)))
    for (const id of claim.sourceIds) {
      const item = dossier.sources.find(candidate => candidate.id === id)
      assert.equal(item.licenseAssessment, 'item-level-verified')
      for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(item[key], `Source ${id} missing ${key}`)
      assert.match(item.licenseUrl ?? '', /^https:\/\//u)
      assert.match(item.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
    }
  }
}
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')

const rawBytes = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTripBytes = brotliDecompressSync(compressedBytes)
assert.ok(roundTripBytes.equals(rawBytes), 'Brotli round-trip must exactly reproduce raw JSONL bytes')
assert.deepEqual(JSON.parse(roundTripBytes.toString('utf8')), dossier)

mkdirSync(dirname(RAW_PATH), { recursive: true })
writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, indexedRecordCount: indexed.count, matchedColIds: [], matchedNames: [] },
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: roundTripBytes.length, decodedSha256: sha256(roundTripBytes), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: source.registry.path, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/build-primates-chlorocebus-sabaeus-batch15.mjs',
}
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ colId: dossier.colId, scientificName: dossier.scientificName, indexedRecords: indexed.count, acceptedParentChain: classificationPath.map(node => node.id), sourceSha256: sha256(sourceBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), roundTrip: 'exact-byte-match' }, null, 2))
