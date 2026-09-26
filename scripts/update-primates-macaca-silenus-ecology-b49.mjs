import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/primates-macaca-silenus-ecology-b49-2026-09-27.json')
const RAW_PATH = join(ROOT, 'data/knowledge/raw-dossiers/primates-dossiers-batch-3.jsonl')
const SHARD_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-batch-3.jsonl.br')
const INDEX_PATH = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const METADATA_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-batch-3.metadata.json')
const MANIFEST_PATH = join(ROOT, 'data/knowledge/primates-macaca-silenus-ecology-b49-2026-09-27.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const EXPECTED_SOURCE_SHA256 = 'e9457a12f242908de2f5828bdc0e844fd3496eb9f83fddf726ecd5c77ff9c852'
const BATCH_ID = 'primates-macaca-silenus-ecology-batch49-2026-09-27'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B49 evidence source changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, BATCH_ID)
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.appAndPagesPreviewManifestChanged, false)
assert.deepEqual(source.target, { colId: '3WWP6', scientificName: 'Macaca silenus (Linnaeus, 1758)', rank: 'species', sourceDatasetId: '2144' })

function readJson(path) { return JSON.parse(readFileSync(path, 'utf8')) }
function readRegistryRows(path) { return gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split(/\r?\n/u).filter(Boolean).map(JSON.parse) }
function readRecords(index) {
  const records = new Map()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, 'Indexed compressed checksum mismatch: ' + shard.path)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, 'Indexed decoded checksum mismatch: ' + shard.path)
    const rows = decoded.toString('utf8').trimEnd().split(/\r?\n/u).map(JSON.parse)
    assert.equal(rows.length, shard.recordCount, 'Indexed count mismatch: ' + shard.path)
    count += rows.length
    for (const row of rows) {
      assert.ok(!records.has(row.colId), 'Duplicate indexed COL ID: ' + row.colId)
      records.set(row.colId, row)
    }
  }
  assert.equal(count, index.recordCount)
  return { records, count }
}
function verifyIdentity(registry, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(readRegistryRows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1)
  assert.deepEqual([matches[0].scientificName, matches[0].rank, matches[0].status, String(matches[0].sourceDatasetId)], [dossier.scientificName, 'species', 'accepted', '2144'])
  const byId = new Map()
  const nodeFor = id => {
    for (const path of registry.hierarchy.nodes.routes[sha256(Buffer.from(id, 'utf8')).slice(0, 2)] ?? []) {
      if (!byId.has(path)) byId.set(path, readRegistryRows(path))
      const found = byId.get(path).find(row => row.id === id)
      if (found) return found
    }
  }
  const leaf = nodeFor(dossier.colId)
  assert.equal(leaf?.parentId, dossier.identity.parentChain[0].id)
  for (const parent of dossier.identity.parentChain) {
    const node = nodeFor(parent.id)
    assert.ok(node && node.status === 'accepted')
    assert.equal(node.scientificName, parent.authorship ? `${parent.name} ${parent.authorship}` : parent.name)
    assert.equal(node.rank, parent.rank)
  }
}

const existingManifest = existsSync(MANIFEST_PATH) ? readJson(MANIFEST_PATH) : undefined
if (existingManifest?.batchId === BATCH_ID) {
  const raw = readFileSync(RAW_PATH)
  const compressed = readFileSync(SHARD_PATH)
  const metadata = readJson(METADATA_PATH)
  assert.equal(sha256(raw), existingManifest.raw.sha256)
  assert.equal(sha256(compressed), existingManifest.shard.compressedSha256)
  assert.ok(metadata.supplementalUpdates.some(item => item.batchId === BATCH_ID))
  console.log(JSON.stringify({ batchId: BATCH_ID, status: 'already-applied' }, null, 2))
  process.exit(0)
}

assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).trim(), source.audit.baseHead, 'B49 base changed; re-audit before updating')
const registryBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryBytes), source.registry.manifestSha256)
const registry = JSON.parse(registryBytes.toString('utf8'))
const index = readJson(INDEX_PATH)
const indexed = readRecords(index)
assert.equal(indexed.count, source.audit.indexedRecordCount)
const target = indexed.records.get(source.target.colId)
assert.ok(target)
assert.equal(target.scientificName, source.target.scientificName)
assert.equal(target.facets.ecology.status, 'not-assessed')
assert.equal(target.completeness.status, 'incomplete')
assert.equal(target.expertReview.status, 'not-reviewed')
const sourceItem = source.sources[0]
assert.equal(sourceItem.licenseAssessment, 'item-level-verified')
assert.equal(sourceItem.licenseVersion, 'CC BY 4.0')
assert.equal(sourceItem.stableId, 'doi:10.1371/journal.pone.0238695')
assert.equal(source.audit.sourceOccurrenceCountBeforeUpdate, 0)
assert.equal([...indexed.records.values()].flatMap(row => row.sources ?? []).filter(item => item.stableId === sourceItem.stableId).length, 0, 'B49 source already indexed')
assert.equal(target.sources.some(item => item.id === sourceItem.id), false)
assert.equal(target.sources.some(item => item.stableId === sourceItem.stableId), false)
verifyIdentity(registry, target)

const rawBefore = readFileSync(RAW_PATH)
const compressedBefore = readFileSync(SHARD_PATH)
assert.equal(sha256(rawBefore), source.audit.previousRawSha256)
assert.equal(sha256(compressedBefore), source.audit.previousShardCompressedSha256)
assert.equal(sha256(brotliDecompressSync(compressedBefore)), source.audit.previousShardDecodedSha256)
const originalRows = rawBefore.toString('utf8').trimEnd().split(/\r?\n/u).map(JSON.parse)
assert.deepEqual(originalRows.filter(row => row.colId !== source.target.colId).map(row => row.colId).sort(), [...source.audit.siblingColIds].sort())
const baseline = originalRows.find(row => row.colId === source.target.colId)
assert.equal(sha256(Buffer.from(JSON.stringify(baseline))), source.audit.previousTargetRecordSha256)

const dossier = structuredClone(baseline)
dossier.checkedAt = source.checkedAt
dossier.sources.push(...structuredClone(source.sources))
dossier.facets.ecology = { status: 'partially-supported', claims: [structuredClone(source.claims.ecology)], gaps: structuredClone(source.gaps.ecology) }
dossier.identity.scope = 'COL26.8 usage 3WWP6 only. Existing mitochondrial evidence is regional to sampled Western Ghats populations. New ecology evidence concerns one free-ranging troop at Puthuthottam during the dry season of 2016 and does not establish species-wide habitat use or response.'
dossier.lifeStatusScope.wild = 'Existing population-genetic evidence uses wild Western Ghats samples. The new behavioural ecology evidence follows one free-ranging Puthuthottam troop in February–May 2016; it is a bounded dry-season, single-troop study.'
dossier.completeness = { status: 'incomplete', reasons: ['Evidence remains geographically and methodologically bounded: regional mitochondrial data and one dry-season behavioural study of one troop; broader ecology and population coverage are incomplete.', 'Morphology, life history, and fossil evidence remain unassessed; independent expert review has not been completed.'] }
assert.equal(dossier.facets.ecology.claims[0].sourceIds[0], sourceItem.id)
assert.ok(dossier.facets.ecology.claims[0].textZh && dossier.facets.ecology.claims[0].placeTimeScope)

const rawLines = originalRows.map(row => {
  if (row.colId === dossier.colId) return JSON.stringify(dossier)
  assert.deepEqual(indexed.records.get(row.colId), row, 'B49 sibling changed: ' + row.colId)
  return JSON.stringify(row)
})
const raw = Buffer.from(rawLines.join('\n') + '\n', 'utf8')
const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressed), raw)
const shard = index.shards.find(item => item.path === source.audit.targetShardPath)
assert.ok(shard)
shard.decodedSha256 = sha256(raw)
shard.compressedSha256 = sha256(compressed)

const metadata = readJson(METADATA_PATH)
metadata.supplementalUpdates ??= []
assert.ok(!metadata.supplementalUpdates.some(item => item.batchId === BATCH_ID))
const updateAudit = { batchId: BATCH_ID, baseHead: source.audit.baseHead, indexedRecordCountAtAudit: indexed.count, targetColId: dossier.colId, targetScientificName: dossier.scientificName, targetRecordCountBeforeUpdate: 1, targetShardPath: relative(SHARD_PATH), previousRawSha256: source.audit.previousRawSha256, previousDecodedSha256: source.audit.previousShardDecodedSha256, previousCompressedSha256: source.audit.previousShardCompressedSha256, previousTargetRecordSha256: source.audit.previousTargetRecordSha256, sourceStableId: sourceItem.stableId, sourceOccurrenceCountBeforeUpdate: 0, openPullRequests: [], mode: 'in-place-add-bounded-wild-habitat-use-and-foraging-evidence', indexedRecordCountAfterUpdate: indexed.count, outputRawSha256: sha256(raw), outputDecodedSha256: sha256(raw), outputCompressedSha256: sha256(compressed) }
metadata.supplementalUpdates.push({ batchId: BATCH_ID, sourcePath: relative(SOURCE_PATH), sourceSha256: EXPECTED_SOURCE_SHA256, generator: relative(join(ROOT, 'scripts/update-primates-macaca-silenus-ecology-b49.mjs')), baseHead: source.audit.baseHead, indexedRecordCountAtAudit: indexed.count, targetColIds: [dossier.colId], previousDecodedSha256: source.audit.previousShardDecodedSha256, previousCompressedSha256: source.audit.previousShardCompressedSha256, decodedSha256: sha256(raw), compressedSha256: sha256(compressed), mode: updateAudit.mode })
metadata.checkedAt = source.checkedAt
metadata.rawSha256 = sha256(raw)
metadata.decodedSha256 = sha256(raw)
metadata.compressedSha256 = sha256(compressed)
metadata.decodedBytes = raw.length
metadata.compressedBytes = compressed.length
metadata.updateAudit = updateAudit

const updateManifest = { schemaVersion: 1, batchId: BATCH_ID, releaseAlias: source.releaseAlias, input: { path: relative(SOURCE_PATH), sha256: EXPECTED_SOURCE_SHA256 }, duplicateCheck: { mode: 'in-place-update', indexedRecordCount: indexed.count, sourceStableIds: [sourceItem.stableId], sourceOccurrencesBeforeUpdate: 0, matchedColIds: [dossier.colId], matchedNames: [normalize(dossier.scientificName)], openPullRequests: source.audit.openPullRequestSearch }, updateAudit, sources: [{ id: sourceItem.id, stableId: sourceItem.stableId, licenseAssessment: sourceItem.licenseAssessment, licenseVersion: sourceItem.licenseVersion, rightsHolder: sourceItem.rightsHolder }], raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: originalRows.length, bytes: raw.length, sha256: sha256(raw) }, shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: originalRows.length, decodedBytes: raw.length, decodedSha256: sha256(raw), compressedBytes: compressed.length, compressedSha256: sha256(compressed), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' }, registry: source.registry, preservedSiblingColIds: source.audit.siblingColIds, generator: relative(join(ROOT, 'scripts/update-primates-macaca-silenus-ecology-b49.mjs')), updateMode: 'in-place-enrichment-of-one-existing-record', appAndPagesPreviewManifestChanged: false }
writeFileSync(RAW_PATH, raw)
writeFileSync(SHARD_PATH, compressed)
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + '\n')
writeFileSync(METADATA_PATH, JSON.stringify(metadata, null, 2) + '\n')
writeFileSync(MANIFEST_PATH, JSON.stringify(updateManifest, null, 2) + '\n')
console.log(JSON.stringify({ batchId: BATCH_ID, targetColId: dossier.colId, ecologyStatus: dossier.facets.ecology.status, indexedRecordCount: indexed.count, preservedSiblingColIds: source.audit.siblingColIds, rawSha256: sha256(raw), compressedSha256: sha256(compressed), byteRoundTrip: brotliDecompressSync(compressed).equals(raw), appAndPagesPreviewManifestChanged: false }, null, 2))
