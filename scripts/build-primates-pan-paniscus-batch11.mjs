import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-pan-paniscus-batch11-2026-09-24.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-pan-paniscus-batch11-2026-09-24.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-pan-paniscus-batch11-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-pan-paniscus-batch11-2026-09-24.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

function rows(path) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedHierarchy(manifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (manifest.search.routes[route] ?? []).flatMap(rows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1, `Expected one COL26.8 search row for ${dossier.colId}`)
  const usage = matches[0]
  for (const key of ['scientificName', 'authorship', 'rank']) assert.equal(usage[key], dossier[key], `COL ${key} mismatch`)
  assert.equal(usage.status, 'accepted')
  assert.equal(String(usage.sourceDatasetId), String(dossier.sourceDatasetId))
  const chain = []
  let id = dossier.colId
  while (id) {
    const prefix = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const file of manifest.hierarchy.nodes.routes[prefix] ?? []) {
      node = rows(file).find(candidate => candidate.id === id)
      if (node) break
    }
    assert.ok(node, `Missing accepted hierarchy node ${id}`)
    assert.equal(node.status, 'accepted', `Unaccepted hierarchy node ${id}`)
    chain.push(node)
    id = node.parentId
  }
  const expected = chain.reverse().map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.deepEqual(dossier.classificationPath, expected, 'Full accepted COL parent chain mismatch')
  assert.ok(expected.some(node => node.id === '3W7' && node.rank === 'order'), 'Usage is not below Primates')
  assert.equal(expected.at(-1).id, dossier.colId)
}

function readIndex(index) {
  let count = 0
  const ids = new Set()
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, `Compressed index hash mismatch: ${shard.path}`)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, `Decoded index hash mismatch: ${shard.path}`)
    const records = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
    assert.equal(records.length, shard.recordCount)
    count += records.length
    for (const record of records) {
      ids.add(record.colId)
      ids.add(normalize(record.scientificName))
    }
  }
  assert.equal(count, index.recordCount)
  return { count, ids }
}

const sourceBytes = readFileSync(SOURCE_PATH)
const source = JSON.parse(sourceBytes.toString('utf8'))
const registryBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryBytes), REGISTRY_SHA256, 'Pinned COL26.8 registry manifest changed')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.deepEqual(source.registry, { path: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: REGISTRY_SHA256 })
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.records.length, 1, 'This focused batch must contain exactly one record')
const [dossier] = source.records
assert.equal(dossier.colId, '4C92F')
assert.equal(dossier.rank, 'species')
assert.equal(dossier.completeness?.status, 'incomplete')
assert.equal(dossier.expertReview?.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
verifyAcceptedHierarchy(registry, dossier)

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
const existing = readIndex(index)
assert.equal(existing.count, source.duplicateAudit.checkedIndexRecords)
assert.equal(existing.count, 6919)
assert.equal(source.duplicateAudit.baseHead, 'a4c20d0130fe043a84623d59bca3f7a5bd69151b')
assert.deepEqual(source.duplicateAudit.matchedColIds, [])
assert.deepEqual(source.duplicateAudit.matchedNames, [])
assert.ok(!existing.ids.has(dossier.colId), 'COL ID already indexed')
assert.ok(!existing.ids.has(normalize(dossier.scientificName)), 'Normalized name already indexed')

const sourceIds = new Set(dossier.sources.map(source => source.id))
assert.equal(sourceIds.size, dossier.sources.length)
assert.deepEqual(dossier.identity.sourceIds, ['col'])
assert.equal(dossier.sources.find(source => source.id === 'col')?.licenseAssessment, 'identity-only')
for (const [facet, assessment] of Object.entries(dossier.facets)) {
  if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, `${facet} needs an explicit gap`)
  for (const claim of assessment.claims ?? []) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Incomplete ${facet} claim scope`)
    assert.equal(claim.translationStatus, 'untranslated')
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
    for (const id of claim.sourceIds) {
      const item = dossier.sources.find(source => source.id === id)
      assert.equal(item.licenseAssessment, 'item-level-verified')
      for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(item[key], `${id} missing ${key}`)
      assert.match(item.licenseUrl ?? '', /^https:\/\//u)
      assert.match(item.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
    }
  }
}

const rawBytes = Buffer.from(`${source.records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTrip = brotliDecompressSync(compressedBytes)
assert.ok(roundTrip.equals(rawBytes), 'Brotli must reproduce the exact raw JSONL bytes')
assert.deepEqual(roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), source.records)
mkdirSync(dirname(RAW_PATH), { recursive: true })
writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, openPullRequests: source.duplicateAudit.openPullRequests, indexedRecordCount: existing.count, matchedColIds: source.duplicateAudit.matchedColIds, matchedNames: source.duplicateAudit.matchedNames },
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: roundTrip.length, decodedSha256: sha256(roundTrip), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: source.registry.path, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/build-primates-pan-paniscus-batch11.mjs',
}
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ colId: dossier.colId, scientificName: dossier.scientificName, checkedIndexRecords: existing.count, sourceSha256: sha256(sourceBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), roundTrip: 'exact-byte-match' }, null, 2))
