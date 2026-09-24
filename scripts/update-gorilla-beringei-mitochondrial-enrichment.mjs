import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/gorilla-beringei-mitochondrial-enrichment-2026-09-24.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const INDEX_PATH = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const UPDATE_MANIFEST_PATH = join(ROOT, 'data/knowledge/gorilla-beringei-mitochondrial-enrichment-2026-09-24.update-manifest.json')
const EXPECTED_SOURCE_SHA256 = '2f2ec3e8618b0ae721286be70b94d6e1491c6d7f02cc30cd58f9596391de56ea'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

function registryRows(path) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedIdentity(registry, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(registryRows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 record for ${dossier.colId}`)
  const usage = matches[0]
  for (const key of ['scientificName', 'rank']) assert.equal(usage[key], dossier[key], `COL ${key} mismatch for ${dossier.colId}`)
  if (dossier.authorship !== undefined) assert.equal(usage.authorship, dossier.authorship, `COL authorship mismatch for ${dossier.colId}`)
  assert.equal(usage.status, 'accepted')
  assert.equal(String(usage.sourceDatasetId), String(dossier.sourceDatasetId))

  const hierarchy = []
  let currentId = dossier.colId
  while (currentId) {
    const prefix = sha256(Buffer.from(currentId, 'utf8')).slice(0, 2)
    let current
    for (const path of registry.hierarchy.nodes.routes[prefix] ?? []) {
      current = registryRows(path).find(node => node.id === currentId)
      if (current) break
    }
    assert.ok(current, `Missing pinned accepted hierarchy node ${currentId}`)
    assert.equal(current.status, 'accepted')
    hierarchy.push(current)
    currentId = current.parentId
  }
  const expected = hierarchy.reverse().map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  if (dossier.classificationPath) {
    assert.deepEqual(dossier.classificationPath, expected, `COL26.8 hierarchy mismatch for ${dossier.colId}`)
  } else {
    const parentChain = dossier.identity?.parentChain
    assert.ok(Array.isArray(parentChain), `Missing stored COL parent chain for ${dossier.colId}`)
    const storedParents = [...parentChain].reverse().map(({ id, name, rank, status }) => ({ id, name, rank, status }))
    const registryParents = expected.slice(0, -1)
    let previousPosition = -1
    for (const stored of storedParents) {
      const position = registryParents.findIndex(parent => parent.id === stored.id)
      assert.ok(position > previousPosition, `Stored COL parent chain is out of order at ${stored.id}`)
      const parent = registryParents[position]
      const plainName = parent.authorship ? parent.scientificName.slice(0, -parent.authorship.length).trim().replace(/\($/u, '').trim() : parent.scientificName
      assert.deepEqual({ id: stored.id, name: stored.name, rank: stored.rank, status: stored.status }, { id: parent.id, name: plainName, rank: parent.rank, status: parent.status }, `COL26.8 parent mismatch at ${stored.id}`)
      previousPosition = position
    }
    assert.ok(storedParents.some(parent => parent.id === '3W7' && parent.rank === 'order'), `Stored parent chain omits Primates for ${dossier.colId}`)
  }
  assert.ok(expected.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'), `${dossier.colId} is not under Primates`)
  assert.equal(expected.at(-1).id, dossier.colId)
}

function validateDossier(dossier) {
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness?.status, 'incomplete', 'Selected claims cannot imply whole-species completeness')
  assert.equal(dossier.expertReview?.status, 'not-reviewed', 'No expert review was performed by this update')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length, `Duplicate source IDs in ${dossier.colId}`)
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid facet status ${facet}`)
    if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, `Unassessed facet needs an explicit gap: ${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Incomplete claim scope for ${dossier.colId}/${facet}`)
      assert.ok(Array.isArray(claim.sourceIds) && claim.sourceIds.length > 0 && claim.sourceIds.every(id => sourceIds.has(id)), `Missing claim source for ${dossier.colId}/${facet}`)
      if (claim.translationStatus === 'translated') assert.ok(claim.textZh, `Translated claim needs Chinese text: ${dossier.colId}/${facet}`)
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified', `License is not verified for ${id}`)
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], `Source ${id} is missing ${key}`)
        assert.match(source.licenseUrl ?? '', /^https:\/\//u, `Source ${id} needs a license or rights-evidence URL`)
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u, `Source ${id} needs an access date`)
      }
    }
  }
  const identitySource = dossier.sources.find(source => ['col', 'col268'].includes(source.id))
  assert.ok(identitySource, `Taxonomic identity source missing for ${dossier.colId}`)
  if (dossier.identity.sourceIds) assert.ok(dossier.identity.sourceIds.includes(identitySource.id))
  if (identitySource.licenseAssessment) assert.equal(identitySource.licenseAssessment, 'identity-only')
}

function readAndValidateIndex(index) {
  const locations = new Map()
  const recordsById = new Map()
  const idsByNormalizedName = new Map()
  const stableSourceIds = new Set()
  let recordCount = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, `Compressed index checksum mismatch: ${shard.path}`)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, `Decoded index checksum mismatch: ${shard.path}`)
    const lines = decoded.toString('utf8').trimEnd().split('\n')
    const records = lines.map(line => JSON.parse(line))
    assert.equal(records.length, shard.recordCount, `Record count mismatch: ${shard.path}`)
    recordCount += records.length
    locations.set(shard.path, { shard, compressed, decoded, lines, records })
    for (const record of records) {
      assert.ok(!recordsById.has(record.colId), `Duplicate indexed COL id: ${record.colId}`)
      recordsById.set(record.colId, record)
      const name = normalize(record.scientificName)
      const ids = idsByNormalizedName.get(name) ?? []
      ids.push(record.colId)
      idsByNormalizedName.set(name, ids)
      for (const source of record.sources ?? []) if (source.stableId) stableSourceIds.add(source.stableId)
    }
  }
  assert.equal(recordCount, index.recordCount, 'Dossier index aggregate count mismatch')
  for (const [name, ids] of idsByNormalizedName) assert.equal(ids.length, 1, `Duplicate normalized dossier name ${name}: ${ids.join(', ')}`)
  return { locations, recordsById, idsByNormalizedName, stableSourceIds, recordCount }
}

const sourceBytes = readFileSync(SOURCE_PATH)
const SOURCE_SHA256 = sha256(sourceBytes)
assert.equal(SOURCE_SHA256, EXPECTED_SOURCE_SHA256, 'Source bundle SHA-256 is not pinned in the generator')
const SOURCE = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(SOURCE.releaseAlias, 'COL26.8')
assert.equal(SOURCE.updateAudit.mode, 'in-place-enrichment-of-one-existing-accepted-species-dossier')
assert.equal(SOURCE.updateAudit.openPullRequests.length, 0)
assert.equal(SOURCE.updateAudit.indexedRecordCountAtAudit, 6934)
assert.deepEqual(SOURCE.updateAudit.targets.map(target => target.colId), [SOURCE.update.colId])
assert.equal(SOURCE.update.claims.length, 3)

const registryBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned COL26.8 registry manifest changed')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.deepEqual(SOURCE.registry, { path: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: EXPECTED_REGISTRY_SHA256 })

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
const existing = readAndValidateIndex(index)
assert.equal(existing.recordCount, SOURCE.updateAudit.indexedRecordCountAtAudit, 'Pinned dossier count differs from audit')
const update = SOURCE.update
const current = existing.recordsById.get(update.colId)
assert.ok(current, `In-place target is missing from the index: ${update.colId}`)
assert.equal(current.scientificName, update.scientificName)
assert.equal(existing.idsByNormalizedName.get(normalize(update.scientificName))?.length, 1)
const sourcePresent = current.sources.find(source => source.id === update.source.id)
const allClaimsPresent = update.claims.every(item => current.facets[item.facet]?.claims?.some(claim => JSON.stringify(claim) === JSON.stringify(item.claim)))
if (sourcePresent && JSON.stringify(sourcePresent) === JSON.stringify(update.source) && allClaimsPresent) {
  validateDossier(current)
  verifyAcceptedIdentity(registry, current)
  console.log(JSON.stringify({ mode: 'already-applied-and-verified', targetCount: 1, indexedRecordCount: existing.recordCount, targetId: update.colId, inputSha256: SOURCE_SHA256 }, null, 2))
  process.exit(0)
}
assert.ok(!sourcePresent, `Source already exists but differs from this pinned update: ${update.source.id}`)
assert.ok(!existing.stableSourceIds.has(update.source.stableId), `Source stable ID already occurs in the dossier index: ${update.source.stableId}`)
for (const item of update.claims) {
  assert.ok(current.facets[item.facet], `Unknown dossier facet ${item.facet}`)
  assert.ok(item.claim.text && item.claim.textZh && item.claim.locator && item.claim.placeTimeScope && item.claim.lifeStatus)
  assert.deepEqual(item.claim.sourceIds, [update.source.id])
  assert.equal(item.claim.translationStatus, 'translated')
  assert.ok(item.remainingGap)
}
assert.equal(update.source.licenseAssessment, 'item-level-verified')
assert.equal(update.source.accessedAt, '2026-09-24')
assert.ok(update.source.rightsEvidenceLocator && update.source.licenseAppliesTo && update.source.attribution)
verifyAcceptedIdentity(registry, current)

const target = SOURCE.updateAudit.targets[0]
assert.equal(target.scientificName, current.scientificName)
assert.equal(target.targetShardPath, existing.locations.get(target.targetShardPath)?.shard.path)
const location = existing.locations.get(target.targetShardPath)
assert.equal(sha256(location.decoded), target.previousDecodedSha256, `Target raw baseline changed: ${target.targetShardPath}`)
assert.equal(sha256(location.compressed), target.previousCompressedSha256, `Target compressed baseline changed: ${target.targetShardPath}`)
assert.equal(sha256(Buffer.from(JSON.stringify(current), 'utf8')), target.previousTargetRecordSha256, `Target record baseline changed: ${target.colId}`)
assert.equal(location.records.filter(record => record.colId === target.colId).length, 1)

const dossier = JSON.parse(JSON.stringify(current))
dossier.sources.push(update.source)
for (const item of update.claims) {
  const facet = dossier.facets[item.facet]
  facet.claims ??= []
  facet.claims.push(item.claim)
  facet.status = 'partially-supported'
  facet.gaps = item.replaceExistingFacetGaps ? [item.remainingGap] : [...new Set([...(facet.gaps ?? []), item.remainingGap])]
}
dossier.completeness = { status: 'incomplete', reasons: [...new Set([...(dossier.completeness?.reasons ?? []), ...update.completenessReasons])] }
dossier.expertReview ??= { status: 'not-reviewed' }
assert.equal(dossier.expertReview.status, 'not-reviewed')
validateDossier(dossier)
verifyAcceptedIdentity(registry, dossier)

const replacedLines = location.lines.map(line => {
  const row = JSON.parse(line)
  return row.colId === update.colId ? JSON.stringify(dossier) : line
})
const rawBytes = Buffer.from(`${replacedLines.join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTrip = brotliDecompressSync(compressedBytes)
assert.ok(roundTrip.equals(rawBytes), 'Brotli round-trip mismatch')
const rows = roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
assert.equal(rows.length, location.records.length, 'Shard record count changed')
for (const original of location.records) {
  const revised = rows.find(record => record.colId === original.colId)
  assert.ok(revised, `Sibling record disappeared: ${original.colId}`)
  if (original.colId === update.colId) assert.deepEqual(revised, dossier)
  else assert.deepEqual(revised, original, `Untargeted sibling changed: ${original.colId}`)
}

const shardOutput = {
  path: target.targetShardPath,
  recordCount: rows.length,
  decodedBytes: roundTrip.length,
  decodedSha256: sha256(roundTrip),
  compressedBytes: compressedBytes.length,
  compressedSha256: sha256(compressedBytes),
}
const indexItem = location.shard
indexItem.decodedSha256 = shardOutput.decodedSha256
indexItem.compressedSha256 = shardOutput.compressedSha256

const metadataPath = target.targetShardPath.replace(/\.jsonl\.br$/u, '.batch-manifest.json')
assert.ok(existsSync(join(ROOT, metadataPath)), `Missing original batch manifest: ${metadataPath}`)
const metadata = JSON.parse(readFileSync(join(ROOT, metadataPath), 'utf8'))
const rawPath = metadata.raw?.path
assert.ok(rawPath, 'Raw dossier path missing from batch manifest')
const updateAudit = {
  batchId: SOURCE.batchId,
  sourcePath: relative(SOURCE_PATH),
  sourceSha256: SOURCE_SHA256,
  generator: 'scripts/update-gorilla-beringei-mitochondrial-enrichment.mjs',
  baseHead: SOURCE.updateAudit.baseHead,
  indexedRecordCountAtAudit: SOURCE.updateAudit.indexedRecordCountAtAudit,
  targetColIds: [update.colId],
  sourceIds: [update.source.id],
  facets: update.claims.map(item => item.facet),
  previousDecodedSha256: target.previousDecodedSha256,
  previousCompressedSha256: target.previousCompressedSha256,
  decodedSha256: shardOutput.decodedSha256,
  compressedSha256: shardOutput.compressedSha256,
  mode: 'in-place-enrichment-of-existing-record',
}
metadata.raw = { ...metadata.raw, recordCount: shardOutput.recordCount, bytes: shardOutput.decodedBytes, sha256: shardOutput.decodedSha256 }
metadata.shard = { ...metadata.shard, recordCount: shardOutput.recordCount, decodedBytes: shardOutput.decodedBytes, decodedSha256: shardOutput.decodedSha256, compressedBytes: shardOutput.compressedBytes, compressedSha256: shardOutput.compressedSha256, roundTrip: 'exact-byte-match' }
metadata.supplementalUpdates = [...(metadata.supplementalUpdates ?? []), updateAudit]

writeFileSync(join(ROOT, rawPath), rawBytes)
writeFileSync(join(ROOT, target.targetShardPath), compressedBytes)
writeFileSync(INDEX_PATH, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(join(ROOT, metadataPath), `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
const outputManifest = {
  schemaVersion: 1,
  batchId: SOURCE.batchId,
  releaseAlias: SOURCE.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: SOURCE_SHA256 },
  updateAudit: SOURCE.updateAudit,
  indexedRecordCount: existing.recordCount,
  targetCount: 1,
  claimCount: update.claims.length,
  targets: [{ colId: update.colId, scientificName: update.scientificName, targetShardPath: target.targetShardPath, updatedRecordSha256: sha256(Buffer.from(JSON.stringify(dossier), 'utf8')) }],
  shards: [{ ...shardOutput, rawPath, metadataPath }],
  registry: { path: relative(join(REGISTRY_ROOT, 'manifest.json')), releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/update-gorilla-beringei-mitochondrial-enrichment.mjs',
  updateMode: 'rebuild-one-existing-dossier-in-place-with-exact-sibling-preservation',
}
writeFileSync(UPDATE_MANIFEST_PATH, `${JSON.stringify(outputManifest, null, 2)}\n`, 'utf8')

const verifiedIndex = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
const verified = readAndValidateIndex(verifiedIndex)
assert.equal(verified.recordCount, existing.recordCount, 'In-place update changed the global dossier count')
const revised = verified.recordsById.get(update.colId)
validateDossier(revised)
verifyAcceptedIdentity(registry, revised)
assert.ok(update.claims.every(item => revised.facets[item.facet].claims.some(claim => claim.sourceIds.includes(update.source.id))))
console.log(JSON.stringify({ mode: 'updated-existing-record-in-place', targetCount: 1, claimCount: update.claims.length, indexedRecordCount: verified.recordCount, targetId: update.colId, inputSha256: SOURCE_SHA256, shard: shardOutput }, null, 2))
