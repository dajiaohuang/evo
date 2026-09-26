import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/primates-macaca-fascicularis-morphology-b47-2026-09-26.json')
const RAW_PATH = join(ROOT, 'data/knowledge/raw-dossiers/primates-cercopithecoidea-batch-8.jsonl')
const SHARD_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-cercopithecoidea-batch-8.jsonl.br')
const INDEX_PATH = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const BATCH_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-cercopithecoidea-batch-8.batch-manifest.json')
const UPDATE_PATH = join(ROOT, 'data/knowledge/primates-macaca-fascicularis-morphology-b47-2026-09-26.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const EXPECTED_SOURCE_SHA256 = '7fb2d4adcb21a6f5d974351c8f7619609365cfb71daf4f40ac37cb0e705e59da'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B47 evidence source changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-macaca-fascicularis-morphology-batch47-2026-09-26')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.appAndPagesPreviewManifestChanged, false)
assert.deepEqual(source.target, { colId: '3WWND', scientificName: 'Macaca fascicularis (Raffles, 1821)', rank: 'species', sourceDatasetId: '2144' })

function readRegistryRows(path) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedIdentity(registryManifest, dossier) {
  const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
  const route = normalize(dossier.scientificName).slice(0, 2)
  const rows = (registryManifest.search.routes[route] ?? []).flatMap(path => readRegistryRows(path)).filter(row => row.id === dossier.colId)
  assert.equal(rows.length, 1, 'Expected one pinned COL26.8 usage for ' + dossier.colId)
  const usage = rows[0]
  assert.equal(usage.scientificName, dossier.scientificName)
  assert.equal(usage.rank, 'species')
  assert.equal(usage.status, 'accepted')
  assert.equal(String(usage.sourceDatasetId), String(dossier.sourceDatasetId))

  const cache = new Map()
  function getNode(id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    for (const path of registryManifest.hierarchy.nodes.routes[routeKey] ?? []) {
      if (!cache.has(path)) cache.set(path, readRegistryRows(path))
      const node = cache.get(path).find(item => item.id === id)
      if (node) return node
    }
    return undefined
  }
  const target = getNode(dossier.colId)
  assert.ok(target, 'Missing pinned hierarchy node ' + dossier.colId)
  assert.equal(target.scientificName, dossier.scientificName)
  assert.equal(target.status, 'accepted')
  assert.equal(String(target.sourceDatasetId), String(dossier.sourceDatasetId))
  assert.equal(target.parentId, dossier.identity.parentChain[0]?.id)
  for (const expected of dossier.identity.parentChain) {
    const node = getNode(expected.id)
    assert.ok(node, 'Missing pinned hierarchy ancestor ' + expected.id)
    const scientificName = expected.authorship ? expected.name + ' ' + expected.authorship : expected.name
    for (const [key, value] of Object.entries({ id: expected.id, scientificName, authorship: expected.authorship, rank: expected.rank, status: expected.status })) {
      assert.equal(node[key], value, 'Pinned COL26.8 hierarchy mismatch for ' + expected.id + '.' + key)
    }
    assert.equal(node.status, 'accepted')
  }
}

function readIndexedRecords(index) {
  const recordsById = new Map()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, 'Indexed compressed hash mismatch: ' + shard.path)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, 'Indexed decoded hash mismatch: ' + shard.path)
    const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
    assert.equal(rows.length, shard.recordCount, 'Indexed row count mismatch: ' + shard.path)
    count += rows.length
    for (const row of rows) {
      assert.ok(!recordsById.has(row.colId), 'Duplicate indexed COL id: ' + row.colId)
      recordsById.set(row.colId, row)
    }
  }
  assert.equal(count, index.recordCount, 'Dossier index record count mismatch')
  return { recordsById, count }
}

function filesBelow(path) {
  return readdirSync(path).flatMap(name => {
    const next = join(path, name)
    return statSync(next).isDirectory() ? filesBelow(next) : [next]
  })
}

function countExistingTextOccurrences(value) {
  let count = 0
  for (const directory of ['data/knowledge', 'data/sources']) {
    for (const path of filesBelow(join(ROOT, directory))) {
      if (path === SOURCE_PATH || path.endsWith('.br')) continue
      const text = readFileSync(path, 'utf8')
      count += text.split(value).length - 1
    }
  }
  return count
}

function writeAtomically(path, bytes) {
  const temporary = path + '.b47.tmp'
  writeFileSync(temporary, bytes)
  renameSync(temporary, path)
}

const existingUpdate = existsSync(UPDATE_PATH) ? readJson(UPDATE_PATH) : undefined
if (existingUpdate?.batchId === source.batchId && existingUpdate.input?.sha256 === EXPECTED_SOURCE_SHA256) {
  const raw = readFileSync(RAW_PATH)
  const compressed = readFileSync(SHARD_PATH)
  const index = readJson(INDEX_PATH)
  const shard = index.shards.find(item => item.path === source.audit.targetShardPath)
  assert.equal(sha256(raw), existingUpdate.raw.sha256, 'B47 raw output differs from its recorded update')
  assert.equal(sha256(compressed), existingUpdate.shard.compressedSha256, 'B47 compressed output differs from its recorded update')
  assert.equal(shard?.decodedSha256, existingUpdate.shard.decodedSha256, 'B47 decoded index hash differs from its recorded update')
  console.log(JSON.stringify({ batchId: source.batchId, status: 'already-applied', rawSha256: sha256(raw), compressedSha256: sha256(compressed) }, null, 2))
  process.exit(0)
}

assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).trim(), source.audit.baseHead, 'B47 base commit changed; re-audit before updating')
const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.registry.manifestSha256, 'Pinned COL26.8 registry manifest mismatch')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')

const rawBefore = readFileSync(RAW_PATH)
const compressedBefore = readFileSync(SHARD_PATH)
assert.equal(sha256(rawBefore), source.audit.previousRawSha256, 'B47 raw dossier baseline changed')
assert.equal(sha256(compressedBefore), source.audit.previousShardCompressedSha256, 'B47 compressed shard baseline changed')
const decodedBefore = brotliDecompressSync(compressedBefore)
assert.equal(sha256(decodedBefore), source.audit.previousShardDecodedSha256, 'B47 decoded shard baseline changed')
assert.deepEqual(decodedBefore, rawBefore, 'B47 raw dossier and indexed shard baseline differ')

const index = readJson(INDEX_PATH)
assert.equal(index.releaseAlias, 'COL26.8')
const indexed = readIndexedRecords(index)
assert.equal(indexed.count, source.audit.indexedRecordCount)
const dossier = indexed.recordsById.get(source.target.colId)
assert.ok(dossier, 'Target dossier is absent from COL26.8 index')
assert.equal(dossier.scientificName, source.target.scientificName)
assert.equal(dossier.rank, source.target.rank)
assert.equal(String(dossier.sourceDatasetId), source.target.sourceDatasetId)
assert.equal(dossier.facets.morphology.status, 'not-assessed')
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.equal(sha256(Buffer.from(JSON.stringify(dossier), 'utf8')), source.audit.previousTargetRecordSha256)
verifyAcceptedIdentity(registryManifest, dossier)

const targetRows = rawBefore.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
assert.equal(targetRows.filter(row => row.colId === source.target.colId).length, 1)
assert.deepEqual(targetRows.map(row => row.colId), [source.target.colId])
const { sources, claims, gaps } = source
assert.equal(sources.length, 1)
const sourceItem = sources[0]
assert.equal(sourceItem.id, 'chapple2024patterning')
assert.equal(sourceItem.stableId, 'doi:10.1016/j.archoralbio.2024.106067')
assert.equal(sourceItem.licenseAssessment, 'item-level-verified')
assert.equal(sourceItem.licenseVersion, 'CC BY 4.0')
for (const key of ['rightsEvidenceUrl', 'rightsEvidenceLocator', 'scope', 'rightsHolder', 'licenseAppliesTo', 'attribution']) assert.ok(sourceItem[key], 'B47 source is missing ' + key)
for (const value of [sourceItem.id, sourceItem.stableId, '10.1016/j.archoralbio.2024.106067']) {
  const shardOccurrences = [...indexed.recordsById.values()].reduce((n, row) => n + (JSON.stringify(row).split(value).length - 1), 0)
  const textOccurrences = countExistingTextOccurrences(value)
  assert.equal(shardOccurrences + textOccurrences, 0, 'B47 source identifier already occurs in current knowledge/source files: ' + value)
}
assert.equal(source.audit.sourceOccurrenceCountBeforeUpdate, 0)
assert.equal(source.audit.openPullRequests.length, 0)
assert.equal(source.audit.openPullRequestSearch.returned, 0)
assert.equal(countExistingTextOccurrences(sourceItem.id), 0)
assert.equal(countExistingTextOccurrences(sourceItem.stableId), 0)

const claim = claims.morphology
assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus)
assert.equal(claim.translationStatus, 'translated')
assert.equal(claim.originalLanguage, 'en')
assert.deepEqual(claim.sourceIds, [sourceItem.id])
assert.equal(gaps.morphology.length, 1)

dossier.checkedAt = source.checkedAt
dossier.identity.scope += ' The added morphology evidence analyzes 13 selected mandibular second molars from one research collection and does not represent all populations, ages, or the species-wide range.'
dossier.lifeStatusScope.wild += ' The added morphology evidence is specimen-based rather than a field-population sample; individual wild or captive histories are not inferred.'
dossier.sources.push(sourceItem)
dossier.facets.morphology = { status: 'partially-supported', claims: [claim], gaps: gaps.morphology }
dossier.completeness.status = 'incomplete'
dossier.completeness.reasons = [
  'Three studies support bounded claims in morphology, ecology, and evolution; the new morphology evidence is limited to 13 selected mandibular second molars from one research collection.',
  'Life history, species-wide distribution, fossil evidence, conservation status, and systematic coverage of the accepted species concept remain incomplete or unassessed.',
  'Independent external expert review has not been completed.',
]
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())

const rawLines = targetRows.map(row => row.colId === dossier.colId ? JSON.stringify(dossier) : JSON.stringify(row))
const rawBytes = Buffer.from(rawLines.join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'B47 raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTrip = brotliDecompressSync(compressedBytes)
assert.deepEqual(roundTrip, rawBytes, 'B47 Brotli round trip must preserve exact raw bytes')
assert.deepEqual(roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), [dossier])

const targetShard = index.shards.find(item => item.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Target shard is absent from index')
targetShard.recordCount = 1
targetShard.decodedSha256 = sha256(roundTrip)
targetShard.compressedSha256 = sha256(compressedBytes)
assert.equal(index.shards.reduce((n, shard) => n + shard.recordCount, 0), index.recordCount)

const outputHashes = { raw: sha256(rawBytes), decoded: sha256(roundTrip), compressed: sha256(compressedBytes) }
const updateAudit = {
  batchId: source.batchId,
  baseHead: source.audit.baseHead,
  indexedRecordCountAtAudit: indexed.count,
  targetColId: dossier.colId,
  targetScientificName: dossier.scientificName,
  targetRecordCountBeforeUpdate: 1,
  targetShardPath: relative(SHARD_PATH),
  previousRawSha256: source.audit.previousRawSha256,
  previousDecodedSha256: source.audit.previousShardDecodedSha256,
  previousCompressedSha256: source.audit.previousShardCompressedSha256,
  previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
  openPullRequests: source.audit.openPullRequests,
  openPullRequestSearch: source.audit.openPullRequestSearch,
  sourceStableId: sourceItem.stableId,
  sourceOccurrenceCountBeforeUpdate: source.audit.sourceOccurrenceCountBeforeUpdate,
  mode: source.mode,
  indexedRecordCountAfterUpdate: indexed.count,
  outputRawSha256: outputHashes.raw,
  outputDecodedSha256: outputHashes.decoded,
  outputCompressedSha256: outputHashes.compressed,
}

const batchManifest = readJson(BATCH_PATH)
assert.equal(batchManifest.path, relative(SHARD_PATH))
assert.equal(batchManifest.rawPath, relative(RAW_PATH))
assert.equal(batchManifest.recordCount, 1)
assert.equal(batchManifest.rawSha256, source.audit.previousRawSha256)
assert.equal(batchManifest.compressedSha256, source.audit.previousShardCompressedSha256)
batchManifest.checkedAt = source.checkedAt
batchManifest.rawSha256 = outputHashes.raw
batchManifest.decodedSha256 = outputHashes.decoded
batchManifest.compressedSha256 = outputHashes.compressed
batchManifest.decodedBytes = rawBytes.length
batchManifest.compressedBytes = compressedBytes.length
batchManifest.supplementalUpdates ??= []
assert.ok(!batchManifest.supplementalUpdates.some(item => item.batchId === source.batchId), 'B47 supplemental update already exists')
batchManifest.supplementalUpdates.push({
  batchId: source.batchId,
  sourcePath: relative(SOURCE_PATH),
  sourceSha256: EXPECTED_SOURCE_SHA256,
  generator: relative(join(ROOT, 'scripts/update-primates-macaca-fascicularis-morphology-b47.mjs')),
  targetColIds: [dossier.colId],
  sourceStableId: sourceItem.stableId,
  previousRawSha256: source.audit.previousRawSha256,
  previousDecodedSha256: source.audit.previousShardDecodedSha256,
  previousCompressedSha256: source.audit.previousShardCompressedSha256,
  outputRawSha256: outputHashes.raw,
  outputDecodedSha256: outputHashes.decoded,
  outputCompressedSha256: outputHashes.compressed,
})
batchManifest.updateAudit = updateAudit

const updateManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: EXPECTED_SOURCE_SHA256 },
  duplicateCheck: {
    mode: 'in-place-update',
    indexedRecordCount: indexed.count,
    sourceStableIds: [sourceItem.stableId],
    sourceOccurrencesBeforeUpdate: source.audit.sourceOccurrenceCountBeforeUpdate,
    matchedColIds: [dossier.colId],
    matchedNames: ['macaca fascicularis raffles 1821'],
    openPullRequests: source.audit.openPullRequests,
  },
  updateAudit,
  sources: [{ id: sourceItem.id, stableId: sourceItem.stableId, licenseAssessment: sourceItem.licenseAssessment, licenseVersion: sourceItem.licenseVersion, rightsHolder: sourceItem.rightsHolder }],
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: outputHashes.raw },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: roundTrip.length, decodedSha256: outputHashes.decoded, compressedBytes: compressedBytes.length, compressedSha256: outputHashes.compressed, brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: source.registry,
  preservedSiblingColIds: source.audit.siblingColIds,
  generator: relative(join(ROOT, 'scripts/update-primates-macaca-fascicularis-morphology-b47.mjs')),
  updateMode: 'in-place-enrichment-of-one-existing-record',
  appAndPagesPreviewManifestChanged: false,
}

writeAtomically(RAW_PATH, rawBytes)
writeAtomically(SHARD_PATH, compressedBytes)
writeAtomically(INDEX_PATH, Buffer.from(JSON.stringify(index, null, 2) + '\n', 'utf8'))
writeAtomically(BATCH_PATH, Buffer.from(JSON.stringify(batchManifest, null, 2) + '\n', 'utf8'))
writeAtomically(UPDATE_PATH, Buffer.from(JSON.stringify(updateManifest, null, 2) + '\n', 'utf8'))
console.log(JSON.stringify({
  batchId: source.batchId,
  targetColId: dossier.colId,
  targetName: dossier.scientificName,
  morphology: dossier.facets.morphology.status,
  completeness: dossier.completeness.status,
  expertReview: dossier.expertReview.status,
  indexedRecordCount: indexed.count,
  rawSha256: outputHashes.raw,
  compressedSha256: outputHashes.compressed,
  byteRoundTrip: roundTrip.equals(rawBytes),
  appAndPagesPreviewManifestChanged: false,
  updateMode: updateManifest.updateMode,
}, null, 2))
