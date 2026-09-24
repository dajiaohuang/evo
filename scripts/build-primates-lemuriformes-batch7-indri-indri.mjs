import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const BATCH_ID = 'primates-lemuriformes-batch7-indri-indri-2026-09-24'
const SOURCE_PATH = join(ROOT, 'data', 'sources', `${BATCH_ID}.json`)
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', `${BATCH_ID}.jsonl`)
const SHARD_PATH = join(ROOT, 'data', 'knowledge', `catalogue-dossiers-${BATCH_ID}.jsonl.br`)
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', `catalogue-dossiers-${BATCH_ID}.batch-manifest.json`)
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SOURCE_SHA256 = 'dbab92065eaaf2080ac40fbb3d5cf4447329a1c0a3388ef31b90c8f48da6d64c'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

function readGzipJsonl(path) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function readBrotliJsonl(path) {
  return brotliDecompressSync(readFileSync(path)).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyIdentity(registry, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const rows = (registry.search.routes[route] ?? []).flatMap(readGzipJsonl).filter(row => row.id === dossier.colId)
  assert.equal(rows.length, 1, `Expected one search row for ${dossier.colId}`)
  const row = rows[0]
  assert.equal(row.scientificName, dossier.scientificName)
  assert.equal(row.authorship, dossier.authorship)
  assert.equal(row.rank, dossier.rank)
  assert.equal(row.status, 'accepted')
  assert.equal(String(row.sourceDatasetId), String(dossier.sourceDatasetId))

  const path = []
  let id = dossier.colId
  while (id) {
    const prefix = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const shard of registry.hierarchy.nodes.routes[prefix] ?? []) {
      node = readGzipJsonl(shard).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, `Missing hierarchy node ${id}`)
    assert.equal(node.status, 'accepted', `Unaccepted hierarchy node ${id}`)
    path.push(node)
    id = node.parentId
  }
  path.reverse()
  const exactPath = path.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.deepEqual(dossier.classificationPath, exactPath, 'Full COL parent path mismatch')
  assert.ok(exactPath.some(node => node.id === '3W7' && node.rank === 'order'), 'Taxon is not under Primates')
  assert.ok(exactPath.some(node => node.id === '4LN' && node.rank === 'infraorder'), 'Taxon is not under Lemuriformes')
  assert.equal(exactPath.at(-1).id, dossier.colId)
}

function validateRecord(record) {
  assert.equal(record.colId, '3PNXK')
  assert.equal(record.scientificName, 'Indri indri (Gmelin, 1788)')
  assert.equal(record.sourceDatasetId, '2144')
  assert.equal(record.rank, 'species')
  assert.equal(record.completeness?.status, 'incomplete')
  assert.equal(record.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(record.facets).sort(), [...FACETS].sort())
  const sources = new Map(record.sources.map(source => [source.id, source]))
  assert.equal(sources.size, record.sources.length, 'Duplicate source ids')
  assert.deepEqual(record.identity.sourceIds, ['col'])
  assert.equal(sources.get('col')?.licenseAssessment, 'identity-only')
  for (const [facet, assessment] of Object.entries(record.facets)) {
    if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, `Unassessed facet needs explicit gap: ${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim evidence scope missing: ${facet}`)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.equal(claim.originalLanguage, 'en')
      assert.ok(claim.sourceIds?.length && claim.sourceIds.every(id => sources.has(id)))
      for (const id of claim.sourceIds) {
        const source = sources.get(id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], `Missing license/provenance field ${key}`)
        assert.match(source.licenseUrl ?? '', /^https:\/\//u)
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
      }
    }
  }
  assert.equal(sources.get('brunod2025')?.licenseVersion, 'CC BY 4.0')
  assert.equal(record.facets.lifeHistory.status, 'partially-supported')
  assert.equal(record.facets.ecology.status, 'partially-supported')
}

function checkExistingIndex(index) {
  const indexed = new Set()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, `Compressed hash mismatch: ${shard.path}`)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, `Decoded hash mismatch: ${shard.path}`)
    const records = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
    assert.equal(records.length, shard.recordCount, `Record count mismatch: ${shard.path}`)
    count += records.length
    for (const record of records) {
      indexed.add(record.colId)
      indexed.add(normalize(record.scientificName))
    }
  }
  assert.equal(count, index.recordCount)
  return { indexed, count }
}

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Source JSON SHA-256 is not pinned')
const source = JSON.parse(sourceBytes.toString('utf8'))
const registryBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned registry manifest SHA-256 mismatch')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.deepEqual(source.registry, { path: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', releaseDate: '2026-08-20', checklistBankDatasetKey: 316115, manifestSha256: EXPECTED_REGISTRY_SHA256 })
assert.equal(source.batchId, BATCH_ID)
assert.equal(source.records.length, 1, 'This focused batch must contain one species')
const records = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId))
const index = JSON.parse(readFileSync(join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json'), 'utf8'))
const duplicateCheck = checkExistingIndex(index)
assert.equal(duplicateCheck.count, source.duplicateAudit.checkedIndexRecords)
for (const record of records) {
  assert.ok(!duplicateCheck.indexed.has(record.colId), `COL ID already indexed: ${record.colId}`)
  assert.ok(!duplicateCheck.indexed.has(normalize(record.scientificName)), `Scientific name already indexed: ${record.scientificName}`)
  assert.ok(!source.duplicateAudit.matchedColIds.includes(record.colId))
  assert.ok(!source.duplicateAudit.matchedNames.includes(normalize(record.scientificName)))
  verifyIdentity(registry, record)
  validateRecord(record)
}

const rawBytes = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must contain LF line endings only')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decodedBytes = brotliDecompressSync(compressedBytes)
assert.ok(decodedBytes.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.equal(sha256(decodedBytes), sha256(rawBytes))
assert.deepEqual(decodedBytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)

mkdirSync(dirname(RAW_PATH), { recursive: true })
writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, openPullRequests: source.duplicateAudit.openPullRequests, indexedRecordCount: duplicateCheck.count, matchedColIds: source.duplicateAudit.matchedColIds, matchedNames: source.duplicateAudit.matchedNames },
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: records.length, decodedBytes: decodedBytes.length, decodedSha256: sha256(decodedBytes), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: source.registry.path, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: `scripts/build-primates-lemuriformes-batch7-indri-indri.mjs`,
}
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ count: records.length, colIds: records.map(record => record.colId), checkedExistingRecords: duplicateCheck.count, sourceSha256: sha256(sourceBytes), registryManifestSha256: sha256(registryBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), roundTrip: 'exact-byte-match' }, null, 2))
