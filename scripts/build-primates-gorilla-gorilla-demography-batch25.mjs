import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const root = resolve(join(fileURLToPath(new URL('.', import.meta.url)), '..'))
const sourcePath = join(root, 'data/sources/primates-gorilla-gorilla-demography-batch25-2026-09-25.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const indexPath = join(root, 'data/knowledge/catalogue-dossier-shards.json')
const relative = path => path.slice(root.length + 1).replaceAll('\\', '/')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const registryJsonl = path => gunzipSync(readFileSync(join(registryRoot, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
const source = JSON.parse(readFileSync(sourcePath, 'utf8'))
const sourceBytes = readFileSync(sourcePath)
const sourceSha256 = sha(sourceBytes)
const registryBytes = readFileSync(join(registryRoot, 'manifest.json'))
const registry = JSON.parse(registryBytes)
const index = JSON.parse(readFileSync(indexPath, 'utf8'))
const target = source.target
const article = source.article
const evidenceClaim = source.claim
const audit = source.updateAudit
const shardPath = join(root, audit.targetShardPath)
const rawPath = join(root, audit.rawPath)
const metadataPath = join(root, audit.metadataPath)
const outputManifestPath = join(root, 'data/knowledge/catalogue-dossiers-primates-gorilla-gorilla-demography-batch25-2026-09-25.update-manifest.json')

assert.equal(source.schemaVersion, 1)
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(sourceSha256, '3abfc3493319f47316bf362908b8febf409b41b8049a6f0006579c50c35a62aa', 'Pinned update-input SHA-256 mismatch')
assert.equal(sha(registryBytes), source.registry.manifestSha256, 'Pinned registry manifest changed')
assert.equal(sha(registryBytes), '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151')
assert.equal(registry.releaseAlias, source.releaseAlias)
assert.equal(index.releaseAlias, source.releaseAlias)
assert.equal(index.recordCount, audit.indexedRecordCountAtAudit)
assert.equal(index.shards.length, audit.indexedShardCountAtAudit)

const hierarchy = []
let currentId = target.colId
while (currentId) {
  const route = sha(Buffer.from(currentId)).slice(0, 2)
  const nodes = (registry.hierarchy.nodes.routes[route] ?? []).flatMap(registryJsonl).filter(node => node.id === currentId)
  assert.equal(nodes.length, 1, `Expected exactly one accepted hierarchy node for ${currentId}`)
  assert.equal(nodes[0].status, 'accepted', `Unaccepted hierarchy node ${currentId}`)
  hierarchy.unshift(nodes[0])
  currentId = nodes[0].parentId
}
const acceptedTarget = hierarchy.at(-1)
assert.equal(acceptedTarget.id, target.colId)
assert.equal(acceptedTarget.scientificName, target.scientificName)
assert.equal(acceptedTarget.authorship, target.authorship)
assert.equal(acceptedTarget.rank, target.rank)
assert.equal(String(acceptedTarget.sourceDatasetId), target.sourceDatasetId)
assert.equal(acceptedTarget.parentId, target.parentId)
assert.ok(hierarchy.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))

const shardEntries = index.shards.filter(shard => shard.path === audit.targetShardPath)
assert.equal(shardEntries.length, 1, 'Target shard must be indexed exactly once')
const indexedShard = shardEntries[0]
const previousCompressed = readFileSync(shardPath)
assert.equal(sha(previousCompressed), indexedShard.compressedSha256, 'Indexed target shard compressed digest mismatch')
const previousDecoded = brotliDecompressSync(previousCompressed)
assert.equal(sha(previousDecoded), indexedShard.decodedSha256, 'Indexed target shard decoded digest mismatch')
const previousRaw = readFileSync(rawPath)
assert.ok(previousDecoded.equals(previousRaw), 'Indexed target shard must exactly match its raw JSONL')
const previousRows = previousRaw.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
assert.equal(previousRows.length, indexedShard.recordCount)
const shardMetadataBefore = JSON.parse(readFileSync(metadataPath, 'utf8'))
const existingOwnUpdates = shardMetadataBefore.supplementalUpdates ?? []
const ownUpdate = existingOwnUpdates.filter(item => item.batchId === source.batchId)
assert.ok(ownUpdate.length <= 1, 'Update batch is listed more than once in shard metadata')
const alreadyApplied = ownUpdate.length === 1
if (alreadyApplied) {
  assert.equal(ownUpdate[0].sourceSha256, sourceSha256, 'Previously generated update used a different source input')
  assert.equal(sha(previousRaw), ownUpdate[0].decodedSha256, 'Previously generated raw shard digest changed')
  assert.equal(sha(previousCompressed), ownUpdate[0].compressedSha256, 'Previously generated compressed shard digest changed')
} else {
  assert.equal(sha(previousRaw), audit.previousRawSha256, 'Pinned raw shard baseline changed')
  assert.equal(sha(previousCompressed), audit.previousCompressedSha256, 'Pinned compressed shard baseline changed')
}

const allIds = new Set()
const allNames = new Set()
let totalRows = 0
for (const shard of index.shards) {
  const bytes = readFileSync(join(root, shard.path))
  assert.equal(sha(bytes), shard.compressedSha256, `Indexed shard compressed digest mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(bytes)
  assert.equal(sha(decoded), shard.decodedSha256, `Indexed shard decoded digest mismatch: ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.equal(rows.length, shard.recordCount, `Indexed shard row count mismatch: ${shard.path}`)
  totalRows += rows.length
  for (const row of rows) {
    assert.ok(!allIds.has(row.colId), `Duplicate indexed COL usage: ${row.colId}`)
    assert.ok(!allNames.has(normalize(row.scientificName)), `Duplicate indexed scientific name: ${row.scientificName}`)
    allIds.add(row.colId)
    allNames.add(normalize(row.scientificName))
  }
}
assert.equal(totalRows, index.recordCount)
assert.equal(totalRows, audit.indexedRecordCountAtAudit)
assert.equal([...allIds].filter(id => id === target.colId).length, audit.targetRecordCountBeforeUpdate)

const targetRows = previousRows.filter(row => row.colId === target.colId)
assert.equal(targetRows.length, 1, 'Target dossier must occur exactly once in its shard')
const dossier = targetRows[0]
assert.equal(dossier.scientificName, target.scientificName)
assert.equal(dossier.rank, target.rank)
assert.equal(String(dossier.sourceDatasetId), target.sourceDatasetId)
const previousTargetRecordSha256 = sha(Buffer.from(JSON.stringify(dossier)))
if (!alreadyApplied) assert.equal(previousTargetRecordSha256, audit.previousTargetRecordSha256, 'Pinned target dossier baseline changed')
const claim = {
  text: evidenceClaim.text,
  textZh: evidenceClaim.textZh,
  translationStatus: 'translated',
  originalLanguage: 'en',
  sourceIds: [article.id],
  locator: evidenceClaim.locator,
  placeTimeScope: evidenceClaim.placeTimeScope,
  lifeStatus: evidenceClaim.lifeStatus,
}
const sourceEntry = {
  id: article.id,
  title: article.title,
  url: article.url,
  stableId: `doi:${article.doi}`,
  version: article.version,
  publishedAt: article.publishedAt,
  accessedAt: article.accessedAt,
  locator: evidenceClaim.locator,
  license: article.license,
  licenseVersion: article.licenseVersion,
  licenseUrl: article.licenseUrl,
  rightsHolder: article.rightsHolder,
  licenseAssessment: article.licenseAssessment,
  rightsEvidenceUrl: article.url,
  rightsEvidenceLocator: article.rightsEvidenceLocator,
  licenseAppliesTo: article.licenseAppliesTo,
  attribution: article.attribution,
  scope: article.scope,
}

if (alreadyApplied) {
  assert.equal(ownUpdate[0].sourceSha256, sourceSha256, 'Previously generated update used a different source input')
  assert.ok(dossier.sources.some(item => item.id === article.id && JSON.stringify(item) === JSON.stringify(sourceEntry)), 'Existing source entry differs from the pinned source input')
  assert.equal(dossier.facets.evolution.status, 'partially-supported')
  const existingClaims = dossier.facets.evolution.claims.filter(item => item.sourceIds?.includes(article.id))
  assert.equal(existingClaims.length, 1)
  assert.deepEqual(existingClaims[0], claim)
} else {
  assert.equal(sha(previousRaw), audit.previousRawSha256, 'Cannot add the dossier claim to a non-baseline shard')
  assert.equal(previousTargetRecordSha256, audit.previousTargetRecordSha256)
  assert.equal(dossier.facets.evolution.status, 'not-assessed')
  assert.equal((dossier.facets.evolution.claims ?? []).length, 0)
  assert.ok(!dossier.sources.some(item => item.id === article.id), 'Source already exists in the target dossier')
  dossier.sources.push(sourceEntry)
  dossier.identity.scope = 'COL26.8 usage 3H3C9 only. The ecology evidence combines one Loango diet study and two Mbeli Bai tool-use observations. The evolutionary evidence is one model-based demographic history using 14 western lowland gorilla genomes; the study samples were mostly from wild-caught zoo specimens and do not represent every Gorilla gorilla subspecies.'
  dossier.lifeStatusScope.wild = 'The ecology observations are from free-ranging gorillas at Loango and Mbeli Bai. The McManus et al. genomic analysis used samples mostly obtained as blood from wild-caught zoo specimens; origins were diverse and some were not precisely confirmed, so this is not treated as contemporary wild-field sampling.'
  dossier.lifeStatusScope.domesticated = 'Domestication was not examined. The genomic study used mostly zoo-held, wild-caught specimens; individual origins are not all resolved, and no domesticated biology is asserted.'
  dossier.facets.evolution = {
    status: 'partially-supported',
    claims: [claim],
    gaps: ['The demographic estimate is limited to one model of 14 western lowland gorilla genomes. This dossier has not synthesized broader population-structure and introgression evidence or independently reviewed demographic histories across all accepted subspecies.'],
  }
  dossier.completeness.reasons = [
    'The record now contains site-specific ecology evidence and one model-based demographic inference for mostly zoo-held western lowland gorillas; morphology, life history, distribution, fossil evidence, and conservation remain unassessed.',
    'Systematic literature coverage across the accepted species concept and independent expert review remain incomplete.',
  ]
  dossier.checkedAt = source.checkedAt
}

const nextRows = previousRows.map(row => row.colId === target.colId ? dossier : row)
for (let index = 0; index < previousRows.length; index++) {
  if (previousRows[index].colId !== target.colId) assert.deepEqual(nextRows[index], previousRows[index], 'Untargeted sibling dossier changed')
}
const rawBytes = Buffer.from(`${nextRows.map(row => JSON.stringify(row)).join('\n')}\n`, 'utf8')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressedBytes).equals(rawBytes), 'Brotli round-trip must be exact')
const rawSha256 = sha(rawBytes)
const compressedSha256 = sha(compressedBytes)
const targetRecordSha256 = sha(Buffer.from(JSON.stringify(dossier)))

if (!alreadyApplied) {
  const nextAudit = {
    batchId: source.batchId,
    sourcePath: relative(sourcePath),
    sourceSha256,
    generator: relative(fileURLToPath(import.meta.url)),
    baseHead: audit.baseHead,
    indexedRecordCountAtAudit: totalRows,
    targetColIds: [target.colId],
    previousDecodedSha256: sha(previousDecoded),
    previousCompressedSha256: sha(previousCompressed),
    previousTargetRecordSha256,
    decodedSha256: rawSha256,
    compressedSha256,
    mode: 'in-place-add-one-evolution-claim-with-exact-sibling-preservation',
  }
  const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'))
  metadata.rawSha256 = rawSha256
  metadata.decodedSha256 = rawSha256
  metadata.compressedSha256 = compressedSha256
  metadata.decodedBytes = rawBytes.length
  metadata.compressedBytes = compressedBytes.length
  metadata.checkedAt = source.checkedAt
  metadata.updatedIds = [...new Set([...(metadata.updatedIds ?? []), target.colId])]
  metadata.updatedRecordCount = metadata.updatedIds.length
  metadata.supplementalUpdates = [...(metadata.supplementalUpdates ?? []).filter(item => item.batchId !== source.batchId), nextAudit]
  writeFileSync(rawPath, rawBytes)
  writeFileSync(shardPath, compressedBytes)
  writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
  indexedShard.decodedSha256 = rawSha256
  indexedShard.compressedSha256 = compressedSha256
  writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
}

const outputManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(sourcePath), sha256: sourceSha256 },
  updateAudit: source.updateAudit,
  indexedRecordCount: totalRows,
  targetCount: 1,
  targets: [{ colId: target.colId, scientificName: target.scientificName, targetShardPath: audit.targetShardPath, updatedRecordSha256: targetRecordSha256 }],
  shard: { path: audit.targetShardPath, rawPath: audit.rawPath, metadataPath: audit.metadataPath, recordCount: previousRows.length, decodedBytes: rawBytes.length, decodedSha256: rawSha256, compressedBytes: compressedBytes.length, compressedSha256 },
  registry: { path: source.registry.path, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha(registryBytes) },
  generator: relative(fileURLToPath(import.meta.url)),
  updateMode: 'rebuild-one-existing-species-record-in-place-with-exact-sibling-preservation',
}
writeFileSync(outputManifestPath, `${JSON.stringify(outputManifest, null, 2)}\n`, 'utf8')

const verifiedRaw = readFileSync(rawPath)
const verifiedCompressed = readFileSync(shardPath)
assert.equal(sha(verifiedRaw), rawSha256)
assert.ok(brotliDecompressSync(verifiedCompressed).equals(verifiedRaw))
const verifiedRows = verifiedRaw.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
assert.equal(verifiedRows.length, previousRows.length)
const verifiedTarget = verifiedRows.find(row => row.colId === target.colId)
assert.equal(sha(Buffer.from(JSON.stringify(verifiedTarget))), targetRecordSha256)
assert.equal(verifiedTarget.facets.evolution.claims.filter(item => item.sourceIds.includes(article.id)).length, 1)
assert.equal(JSON.parse(readFileSync(indexPath, 'utf8')).recordCount, totalRows, 'In-place update changed the global dossier record count')
console.log(JSON.stringify({ mode: alreadyApplied ? 'verified-idempotent-rebuild' : 'updated-existing-record-in-place', colId: target.colId, scientificName: target.scientificName, indexedRecordCount: totalRows, sourceId: article.id, rawSha256, compressedSha256, targetRecordSha256, roundTrip: 'exact-byte-match' }, null, 2))
