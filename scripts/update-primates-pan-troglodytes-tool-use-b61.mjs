import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-pan-troglodytes-tool-use-b61-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-batch-2.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-batch-2.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const METADATA_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-batch-2.metadata.json')
const QUEUE_PATH = join(ROOT, 'data', 'knowledge', 'species-evidence-queue', 'b.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-pan-troglodytes-tool-use-b61-2026-09-28.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const readLines = bytes => bytes.toString('utf8').trimEnd().split('\n')

const sourceBytes = readFileSync(SOURCE_PATH)
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.batchId, 'primates-pan-troglodytes-tool-use-batch61-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.deepEqual(source.target, {
  colId: '4C92G',
  scientificName: 'Pan troglodytes (Blumenbach, 1775)',
  rank: 'species',
  sourceDatasetId: '2144',
})

function readRegistryRows(relativePath) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath)))
    .toString('utf8')
    .split('\n')
    .filter(Boolean)
    .map(line => JSON.parse(line))
}

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.registry.manifestSha256, 'Pinned COL26.8 manifest changed')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, source.releaseAlias)
assert.equal(registryManifest.releaseDate, source.registry.releaseDate)
assert.equal(registryManifest.checklistBankDatasetKey, source.registry.checklistBankDatasetKey)

const hierarchyCache = new Map()
function getHierarchyNode(id) {
  const prefix = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
  for (const path of registryManifest.hierarchy.nodes.routes[prefix] ?? []) {
    if (!hierarchyCache.has(path)) hierarchyCache.set(path, readRegistryRows(path))
    const node = hierarchyCache.get(path).find(row => row.id === id)
    if (node) return node
  }
  return undefined
}

const searchRoute = normalize(source.target.scientificName).slice(0, 2)
const searchMatches = (registryManifest.search.routes[searchRoute] ?? [])
  .flatMap(readRegistryRows)
  .filter(row => row.id === source.target.colId)
assert.equal(searchMatches.length, 1, 'Expected one exact COL26.8 search row')
assert.equal(searchMatches[0].scientificName, source.target.scientificName)
assert.equal(searchMatches[0].rank, source.target.rank)
assert.equal(searchMatches[0].status, 'accepted')
assert.equal(String(searchMatches[0].sourceDatasetId), source.target.sourceDatasetId)

const targetNode = getHierarchyNode(source.target.colId)
assert.ok(targetNode, 'Missing accepted COL26.8 target node')
assert.equal(targetNode.parentId, source.audit.acceptedParentChain[0]?.id)
assert.equal(targetNode.status, 'accepted')
assert.equal(targetNode.scientificName, source.target.scientificName)
let cursor = targetNode
const actualParentChain = []
while (cursor.parentId) {
  const parent = getHierarchyNode(cursor.parentId)
  assert.ok(parent, `Missing COL26.8 parent ${cursor.parentId}`)
  assert.equal(parent.status, 'accepted')
  actualParentChain.push(parent)
  cursor = parent
  assert.ok(actualParentChain.length <= 64, 'COL parent chain exceeded the safety bound')
}
assert.equal(cursor.id, source.audit.acceptedParentChain.at(-1)?.id, 'Expected the audited chain to end at the same COL root')
assert.deepEqual(actualParentChain.map(({ id, scientificName, authorship, rank, status, parentId }) => ({
  id,
  name: authorship ? scientificName.slice(0, -(authorship.length + 1)) : scientificName,
  authorship,
  rank,
  status,
  parentId,
})), source.audit.acceptedParentChain, 'Complete accepted parent chain changed')

function readIndexedRecords(index) {
  const recordsById = new Map()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, `Indexed compressed hash mismatch: ${shard.path}`)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, `Indexed decoded hash mismatch: ${shard.path}`)
    const rows = readLines(decoded).map(line => JSON.parse(line))
    assert.equal(rows.length, shard.recordCount, `Indexed row count mismatch: ${shard.path}`)
    count += rows.length
    for (const row of rows) {
      assert.ok(!recordsById.has(row.colId), `Duplicate indexed COL id: ${row.colId}`)
      recordsById.set(row.colId, row)
    }
  }
  assert.equal(count, index.recordCount)
  return { recordsById, count }
}

const index = readJson(INDEX_PATH)
const indexed = readIndexedRecords(index)
assert.equal(indexed.count, source.audit.indexedRecordCount, 'Indexed archive changed since the identity audit')
const targetRecordCount = [...indexed.recordsById.values()].filter(row => row.colId === source.target.colId).length
assert.equal(targetRecordCount, source.audit.targetRecordCount)
const targetShard = index.shards.find(shard => shard.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Audited Pan dossier shard is absent from the index')
const originalCompressed = readFileSync(SHARD_PATH)
const originalDecoded = brotliDecompressSync(originalCompressed)
const originalRaw = readFileSync(RAW_PATH)
assert.deepEqual(originalDecoded, originalRaw, 'Raw Pan archive does not match its indexed Brotli shard')
assert.equal(sha256(originalRaw), source.audit.previousRawSha256)
assert.equal(sha256(originalDecoded), source.audit.previousShardDecodedSha256)
assert.equal(sha256(originalCompressed), source.audit.previousShardCompressedSha256)
assert.equal(sha256(readFileSync(join(ROOT, 'data', 'pages-preview.json'))), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages core scope changed')

const originalLines = readLines(originalRaw)
const originalRows = originalLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, targetShard.recordCount)
const baseline = originalRows.find(row => row.colId === source.target.colId)
assert.ok(baseline, 'Audited Pan target is absent from its raw dossier shard')
assert.equal(baseline.scientificName, source.target.scientificName)
assert.equal(sha256(Buffer.from(JSON.stringify(baseline), 'utf8')), source.audit.previousTargetRecordSha256)
assert.deepEqual(originalRows.filter(row => row.colId !== source.target.colId).map(row => row.colId).sort(), source.audit.siblingColIds)
for (const row of originalRows.filter(item => item.colId !== source.target.colId)) {
  assert.deepEqual(indexed.recordsById.get(row.colId), row, `A sibling record changed: ${row.colId}`)
}

const queueBytes = brotliDecompressSync(readFileSync(QUEUE_PATH))
const queueLines = readLines(queueBytes)
const queueLine = queueLines.find(line => JSON.parse(line).colId === source.target.colId)
assert.ok(queueLine, 'Audited Pan queue row is missing')
const queueRow = JSON.parse(queueLine)
assert.equal(sha256(Buffer.from(queueLine, 'utf8')), source.audit.queueBaseline.rowSha256)
assert.equal(queueRow.dossier.status, source.audit.queueBaseline.dossierStatus)
assert.equal(queueRow.dossier.claimCount, source.audit.queueBaseline.claimCount)
assert.equal(queueRow.dossier.identityStatus, source.audit.queueBaseline.identityStatus)
assert.equal(queueRow.dossier.rightsStatus, source.audit.queueBaseline.rightsStatus)
assert.equal(queueRow.dossier.systematicSearchRecorded, source.audit.queueBaseline.systematicSearchRecorded)
assert.equal(queueRow.dossier.expertReviewStatus, source.audit.queueBaseline.expertReviewStatus)

const stableIds = source.sources.map(item => item.stableId)
assert.equal(new Set(stableIds).size, stableIds.length, 'Duplicate B61 stable source ids')
const allSources = [...indexed.recordsById.values()].flatMap(record => (record.sources ?? []).map(item => ({ colId: record.colId, source: item })))
for (const item of source.sources) {
  assert.equal(allSources.filter(entry => entry.source.stableId === item.stableId).length, source.audit.sourceOccurrenceCount, `B61 DOI already occurs in indexed dossiers: ${item.stableId}`)
  assert.equal(item.licenseAssessment, 'item-level-verified')
  for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution', 'scope']) {
    assert.ok(item[key], `B61 source ${item.id} is missing ${key}`)
  }
  assert.match(item.licenseUrl ?? '', /^https:\/\//u)
  assert.match(item.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
}

const sourceIds = new Set([...baseline.sources, ...source.sources].map(item => item.id))
for (const [facet, claim] of Object.entries(source.claims)) {
  assert.ok(FACETS.includes(facet), `Unknown dossier facet: ${facet}`)
  assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Incomplete B61 ${facet} claim`)
  assert.equal(claim.translationStatus, 'translated')
  assert.equal(claim.originalLanguage, 'en')
  assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)), `B61 ${facet} claim source missing`)
  assert.ok(source.gaps[facet]?.length, `B61 ${facet} boundary gap missing`)
}
for (const id of source.audit.identitySourceIds) {
  assert.ok(baseline.sources.some(item => item.id === id), `Missing existing identity source ${id}`)
}

const dossier = structuredClone(baseline)
dossier.checkedAt = source.checkedAt
dossier.sources.push(...structuredClone(source.sources))
dossier.identity.parentChain = source.audit.acceptedParentChain.map(({ id, name, authorship, rank, status }) => ({ id, name, authorship, rank, status }))
dossier.identity.sourceIds = [...new Set([...(dossier.identity.sourceIds ?? []), ...source.audit.identitySourceIds])].sort()
dossier.identity.scope = 'COL26.8 usage 4C92G only. The full accepted parent chain to Eukaryota is pinned to release 2026-08-20. Evidence includes population-genomic models, one Bossou community, captive growth cohorts, one Gombe female life-history sample, a dated Red List range/status assessment, and cross-sectional Taï tool-use observations of P. t. verus. These do not form a current range-wide synthesis.'
dossier.lifeStatusScope.wild = 'Wild ecology evidence includes one P. t. verus community at Bossou and stick-based extractive foraging in three neighboring P. t. verus communities at Taï; life-history estimates concern Gombe females; genomic and historical conservation claims retain their original sample/version scopes. No claim is generalized to every population.'
for (const [facet, claim] of Object.entries(source.claims)) {
  const current = dossier.facets[facet]
  assert.equal(current.status, 'partially-supported', `B61 does not upgrade ${facet} beyond partial support`)
  current.claims ??= []
  current.gaps ??= []
  current.claims.push(structuredClone(claim))
  current.gaps.push(...structuredClone(source.gaps[facet]))
}
dossier.completeness = {
  status: 'incomplete',
  reasons: [
    'The record contains bounded captive growth, Gombe female maturation, Bossou and Taï behavior, model-based Pan population history, a dated species-level range/category assessment, and regional conservation evidence; these do not constitute a range-wide species synthesis.',
    'Wild morphological variation, broader life-history coverage, current distribution and conservation status, species-assigned fossil evidence, and systematic literature coverage remain incomplete or unassessed.',
    'The Taï tool-use age pattern is cross-sectional and limited to selected stick-foraging tasks in three neighboring communities.',
    'Independent external expert review has not been completed.',
  ],
}
dossier.expertReview = { status: 'not-reviewed' }

assert.equal(dossier.colId, source.target.colId)
assert.equal(dossier.scientificName, source.target.scientificName)
assert.equal(dossier.rank, 'species')
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())

const rawLines = originalLines.map(line => {
  const row = JSON.parse(line)
  if (row.colId === dossier.colId) return JSON.stringify(dossier)
  assert.deepEqual(indexed.recordsById.get(row.colId), row, `Indexed sibling changed: ${row.colId}`)
  return line
})
const rawBytes = Buffer.from(`${rawLines.join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'B61 raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  },
})
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes, 'B61 Brotli round trip must preserve exact bytes')

targetShard.decodedSha256 = sha256(rawBytes)
targetShard.compressedSha256 = sha256(compressedBytes)
assert.equal(index.shards.reduce((sum, shard) => sum + shard.recordCount, 0), index.recordCount)

const metadata = readJson(METADATA_PATH)
assert.equal(metadata.path, relative(SHARD_PATH))
assert.equal(metadata.rawPath, relative(RAW_PATH))
const previousUpdateAudit = metadata.updateAudit
const updateAudit = {
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
  queueRowSha256BeforeUpdate: source.audit.queueBaseline.rowSha256,
  openPullRequests: source.audit.openPullRequests,
  mode: 'in-place-add-two-bounded-behavior-claims-and-full-accepted-parent-chain',
  indexedRecordCountAfterUpdate: indexed.count,
  outputRawSha256: sha256(rawBytes),
  outputDecodedSha256: sha256(rawBytes),
  outputCompressedSha256: sha256(compressedBytes),
  appAndPagesPreviewManifestChanged: false,
}
const supplementalUpdate = {
  batchId: source.batchId,
  sourcePath: relative(SOURCE_PATH),
  sourceSha256: sha256(sourceBytes),
  generator: relative(join(ROOT, 'scripts', 'update-primates-pan-troglodytes-tool-use-b61.mjs')),
  baseHead: source.audit.baseHead,
  indexedRecordCountAtAudit: indexed.count,
  targetColIds: [dossier.colId],
  previousDecodedSha256: source.audit.previousShardDecodedSha256,
  previousCompressedSha256: source.audit.previousShardCompressedSha256,
  decodedSha256: sha256(rawBytes),
  compressedSha256: sha256(compressedBytes),
  mode: updateAudit.mode,
}
metadata.supplementalUpdates ??= []
assert.ok(!metadata.supplementalUpdates.some(item => item.batchId === source.batchId), 'B61 metadata audit already exists')
metadata.supplementalUpdates.push(supplementalUpdate)
metadata.checkedAt = source.checkedAt
metadata.rawSha256 = sha256(rawBytes)
metadata.decodedSha256 = sha256(rawBytes)
metadata.compressedSha256 = sha256(compressedBytes)
metadata.decodedBytes = rawBytes.length
metadata.compressedBytes = compressedBytes.length
metadata.updateAudit = updateAudit

const batchManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  duplicateCheck: {
    mode: 'in-place-update',
    indexedRecordCount: indexed.count,
    sourceStableIds: stableIds,
    sourceOccurrencesBeforeUpdate: source.audit.sourceOccurrenceCount,
    matchedColIds: [dossier.colId],
    matchedNames: [normalize(dossier.scientificName)],
  },
  previousUpdateAudit,
  updateAudit,
  sources: source.sources.map(({ id, stableId, licenseAssessment, licenseVersion, rightsHolder }) => ({ id, stableId, licenseAssessment, licenseVersion, rightsHolder })),
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: originalRows.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: originalRows.length, decodedBytes: rawBytes.length, decodedSha256: sha256(rawBytes), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: source.registry,
  acceptedParentChain: source.audit.acceptedParentChain,
  queueBaseline: source.audit.queueBaseline,
  preservedSiblingColIds: source.audit.siblingColIds,
  generator: relative(join(ROOT, 'scripts', 'update-primates-pan-troglodytes-tool-use-b61.mjs')),
  updateMode: 'in-place-enrichment-of-one-existing-record',
  appAndPagesPreviewManifestSha256: source.audit.pagesPreviewManifestSha256,
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
writeFileSync(INDEX_PATH, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(METADATA_PATH, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
writeFileSync(MANIFEST_PATH, `${JSON.stringify(batchManifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({
  batchId: source.batchId,
  targetColId: dossier.colId,
  targetName: dossier.scientificName,
  identityAncestors: dossier.identity.parentChain.length,
  identitySources: dossier.identity.sourceIds,
  newClaims: Object.fromEntries(Object.entries(source.claims).map(([facet, claim]) => [facet, claim.sourceIds[0]])),
  facetStatuses: Object.fromEntries(FACETS.map(facet => [facet, dossier.facets[facet].status])),
  indexedRecordCount: indexed.count,
  preservedSiblingColIds: source.audit.siblingColIds,
  rawSha256: sha256(rawBytes),
  compressedSha256: sha256(compressedBytes),
  byteRoundTrip: brotliDecompressSync(compressedBytes).equals(rawBytes),
  appAndPagesPreviewManifestChanged: false,
}, null, 2))
