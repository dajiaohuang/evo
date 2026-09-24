import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-core-flagship-enrichment-2026-09-24.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const UPDATE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-core-flagship-enrichment-2026-09-24.update-manifest.json')
const EXPECTED_SOURCE_SHA256 = '807ff3d360b9aa9d6566ac7553325078fea479773c8e4ab3c75f1bca4e1f0149'
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
      const normalizedName = normalize(record.scientificName)
      const nameIds = idsByNormalizedName.get(normalizedName) ?? []
      nameIds.push(record.colId)
      idsByNormalizedName.set(normalizedName, nameIds)
      for (const source of record.sources ?? []) if (source.stableId) stableSourceIds.add(source.stableId)
    }
  }
  assert.equal(recordCount, index.recordCount, 'Dossier index aggregate count mismatch')
  for (const [name, ids] of idsByNormalizedName) assert.equal(ids.length, 1, `Duplicate normalized dossier name ${name}: ${ids.join(', ')}`)
  return { locations, recordsById, idsByNormalizedName, stableSourceIds, recordCount }
}

function metadataPathFor(shardPath) {
  const path = shardPath.replace(/\.jsonl\.br$/u, '.metadata.json')
  if (existsSync(join(ROOT, path))) return path
  const batchManifestPath = shardPath.replace(/\.jsonl\.br$/u, '.batch-manifest.json')
  assert.ok(existsSync(join(ROOT, batchManifestPath)), `No shard metadata or batch manifest found for ${shardPath}`)
  return batchManifestPath
}

function updateShardMetadata(path, updateDetails, shardOutput, rawPath) {
  const fullPath = join(ROOT, path)
  const metadata = JSON.parse(readFileSync(fullPath, 'utf8'))
  const shardIds = updateDetails.map(item => item.colId)
  const audit = {
    batchId: 'primates-core-flagship-enrichment-2026-09-24',
    sourcePath: 'data/sources/primates-core-flagship-enrichment-2026-09-24.json',
    sourceSha256: SOURCE_SHA256,
    generator: 'scripts/update-primates-core-flagship-enrichment.mjs',
    baseHead: SOURCE.updateAudit.baseHead,
    indexedRecordCountAtAudit: SOURCE.updateAudit.indexedRecordCountAtAudit,
    targetColIds: shardIds,
    previousDecodedSha256: updateDetails[0].previousDecodedSha256,
    previousCompressedSha256: updateDetails[0].previousCompressedSha256,
    decodedSha256: shardOutput.decodedSha256,
    compressedSha256: shardOutput.compressedSha256,
    mode: 'in-place-enrichment-of-existing-records',
  }

  if (metadata.raw && metadata.shard) {
    metadata.raw = { ...metadata.raw, path: rawPath, recordCount: shardOutput.recordCount, bytes: shardOutput.decodedBytes, sha256: shardOutput.decodedSha256 }
    metadata.shard = { ...metadata.shard, path: shardOutput.path, recordCount: shardOutput.recordCount, decodedBytes: shardOutput.decodedBytes, decodedSha256: shardOutput.decodedSha256, compressedBytes: shardOutput.compressedBytes, compressedSha256: shardOutput.compressedSha256, roundTrip: 'exact-byte-match' }
    metadata.supplementalUpdates = [...(metadata.supplementalUpdates ?? []), audit]
  } else {
    metadata.rawPath = rawPath
    metadata.rawSha256 = shardOutput.decodedSha256
    metadata.decodedSha256 = shardOutput.decodedSha256
    metadata.compressedSha256 = shardOutput.compressedSha256
    metadata.decodedBytes = shardOutput.decodedBytes
    metadata.compressedBytes = shardOutput.compressedBytes
    metadata.updatedIds = [...new Set([...(metadata.updatedIds ?? []), ...shardIds])]
    metadata.updatedRecordCount = metadata.updatedIds.length
    metadata.supplementalUpdates = [...(metadata.supplementalUpdates ?? []), audit]
  }
  writeFileSync(fullPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
}

const sourceBytes = readFileSync(SOURCE_PATH)
const SOURCE_SHA256 = sha256(sourceBytes)
assert.equal(SOURCE_SHA256, EXPECTED_SOURCE_SHA256, 'Source bundle SHA-256 is not pinned in the generator')
const SOURCE = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(SOURCE.releaseAlias, 'COL26.8')
assert.equal(SOURCE.updateAudit.mode, 'in-place-enrichment-of-four-existing-accepted-species-dossiers')
assert.equal(SOURCE.updateAudit.openPullRequests.length, 0)
assert.equal(SOURCE.updates.length, 4)
assert.deepEqual(SOURCE.updates.map(update => update.colId).sort(), SOURCE.updateAudit.targets.map(target => target.colId).sort())

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
const baselineTargets = new Map(SOURCE.updateAudit.targets.map(target => [target.colId, target]))
const updatesById = new Map(SOURCE.updates.map(update => [update.colId, update]))
const alreadyApplied = SOURCE.updates.every(update => {
  const current = existing.recordsById.get(update.colId)
  const source = current?.sources.find(item => item.id === update.source.id)
  const claim = current?.facets?.[update.facet]?.claims?.find(item => item.sourceIds?.includes(update.source.id))
  return source && JSON.stringify(source) === JSON.stringify(update.source) && claim && JSON.stringify(claim) === JSON.stringify(update.claim)
})

if (alreadyApplied) {
  const audit = JSON.parse(readFileSync(UPDATE_MANIFEST_PATH, 'utf8'))
  assert.equal(audit.input?.sha256, SOURCE_SHA256)
  assert.equal(audit.indexedRecordCount, existing.recordCount)
  assert.equal(audit.targets.length, SOURCE.updates.length)
  for (const update of SOURCE.updates) {
    const record = existing.recordsById.get(update.colId)
    validateDossier(record)
    verifyAcceptedIdentity(registry, record)
    const targetAudit = audit.targets.find(item => item.colId === update.colId)
    assert.equal(targetAudit?.updatedRecordSha256, sha256(Buffer.from(JSON.stringify(record), 'utf8')))
  }
  console.log(JSON.stringify({ mode: 'already-applied-and-verified', targetCount: SOURCE.updates.length, indexedRecordCount: existing.recordCount, inputSha256: SOURCE_SHA256 }, null, 2))
  process.exit(0)
}

for (const target of SOURCE.updateAudit.targets) {
  const current = existing.recordsById.get(target.colId)
  assert.ok(current, `In-place target is missing from the index: ${target.colId}`)
  assert.equal(current.scientificName, target.scientificName, `Target identity changed: ${target.colId}`)
  assert.equal(existing.idsByNormalizedName.get(normalize(target.scientificName))?.length, 1, `Target name is not unique: ${target.scientificName}`)
  const location = existing.locations.get(target.targetShardPath)
  assert.ok(location, `Target shard is not indexed: ${target.targetShardPath}`)
  assert.equal(sha256(location.decoded), target.previousDecodedSha256, `Target raw baseline changed: ${target.targetShardPath}`)
  assert.equal(sha256(location.compressed), target.previousCompressedSha256, `Target compressed baseline changed: ${target.targetShardPath}`)
  assert.equal(sha256(Buffer.from(JSON.stringify(current), 'utf8')), target.previousTargetRecordSha256, `Target record baseline changed: ${target.colId}`)
  assert.equal(location.records.filter(record => record.colId === target.colId).length, 1, `Target must occur exactly once in its shard: ${target.colId}`)
}

const usedSourceIds = new Set()
for (const update of SOURCE.updates) {
  const target = baselineTargets.get(update.colId)
  const dossier = existing.recordsById.get(update.colId)
  assert.equal(update.scientificName, target.scientificName)
  assert.equal(dossier.scientificName, update.scientificName)
  assert.equal(update.claim.translationStatus, 'translated')
  assert.ok(update.claim.textZh)
  assert.deepEqual(update.claim.sourceIds, [update.source.id])
  assert.ok(!usedSourceIds.has(update.source.id), `Duplicate batch source id: ${update.source.id}`)
  usedSourceIds.add(update.source.id)
  assert.ok(!dossier.sources.some(source => source.id === update.source.id), `Source already exists in target record: ${update.source.id}`)
  assert.ok(!existing.stableSourceIds.has(update.source.stableId), `Source stable ID already occurs in the dossier index: ${update.source.stableId}`)
  assert.equal(update.source.licenseAssessment, 'item-level-verified')
  assert.equal(update.source.accessedAt, '2026-09-24')
  assert.ok(update.source.rightsEvidenceLocator && update.source.licenseAppliesTo && update.source.attribution)
  verifyAcceptedIdentity(registry, dossier)
}

const updatedRecords = new Map()
for (const update of SOURCE.updates) {
  const dossier = JSON.parse(JSON.stringify(existing.recordsById.get(update.colId)))
  dossier.sources.push(update.source)
  if (update.identityScope !== undefined) {
    assert.equal(typeof update.identityScope, 'string')
    assert.ok(update.identityScope.trim(), `Identity scope cannot be empty: ${update.colId}`)
    dossier.identity.scope = update.identityScope
  }
  const facet = dossier.facets[update.facet]
  facet.claims ??= []
  facet.claims.push(update.claim)
  facet.status = 'partially-supported'
  facet.gaps = update.replaceExistingFacetGaps ? [update.remainingGap] : [...new Set([...(facet.gaps ?? []), update.remainingGap])]
  dossier.completeness = { status: 'incomplete', reasons: [update.completenessReason, update.residualReviewGap] }
  dossier.expertReview ??= { status: 'not-reviewed' }
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  validateDossier(dossier)
  verifyAcceptedIdentity(registry, dossier)
  updatedRecords.set(update.colId, dossier)
}

const updateDetailsByShard = new Map()
for (const target of SOURCE.updateAudit.targets) {
  const details = updateDetailsByShard.get(target.targetShardPath) ?? []
  details.push(target)
  updateDetailsByShard.set(target.targetShardPath, details)
}

const resultingShardAudit = []
const resultingTargets = []
for (const [shardPath, targetDetails] of updateDetailsByShard) {
  const location = existing.locations.get(shardPath)
  const targetIds = new Set(targetDetails.map(target => target.colId))
  const replacedLines = location.lines.map(line => {
    const row = JSON.parse(line)
    if (!targetIds.has(row.colId)) return line
    return JSON.stringify(updatedRecords.get(row.colId))
  })
  assert.equal(replacedLines.filter(line => targetIds.has(JSON.parse(line).colId)).length, targetIds.size)
  const rawBytes = Buffer.from(`${replacedLines.join('\n')}\n`, 'utf8')
  assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
  const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
  const roundTrip = brotliDecompressSync(compressedBytes)
  assert.ok(roundTrip.equals(rawBytes), `Brotli round-trip mismatch: ${shardPath}`)
  const rows = roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, location.records.length, `Shard record count changed: ${shardPath}`)
  for (const original of location.records) {
    const revised = rows.find(record => record.colId === original.colId)
    assert.ok(revised, `Sibling record disappeared from ${shardPath}: ${original.colId}`)
    if (targetIds.has(original.colId)) assert.deepEqual(revised, updatedRecords.get(original.colId))
    else assert.deepEqual(revised, original, `Untargeted sibling changed: ${original.colId}`)
  }
  const indexItem = location.shard
  indexItem.decodedSha256 = sha256(roundTrip)
  indexItem.compressedSha256 = sha256(compressedBytes)
  writeFileSync(join(ROOT, shardPath), compressedBytes)

  const metadataPath = metadataPathFor(shardPath)
  const metadata = JSON.parse(readFileSync(join(ROOT, metadataPath), 'utf8'))
  const rawPath = metadata.rawPath ?? metadata.raw?.path
  assert.ok(rawPath, `Raw dossier path missing from metadata: ${metadataPath}`)
  writeFileSync(join(ROOT, rawPath), rawBytes)
  const shardOutput = {
    path: shardPath,
    recordCount: rows.length,
    decodedBytes: roundTrip.length,
    decodedSha256: sha256(roundTrip),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha256(compressedBytes),
  }
  updateShardMetadata(metadataPath, targetDetails, shardOutput, rawPath)
  resultingShardAudit.push({ path: shardPath, rawPath, metadataPath, ...shardOutput })
  for (const id of targetIds) resultingTargets.push({ colId: id, scientificName: updatedRecords.get(id).scientificName, targetShardPath: shardPath, updatedRecordSha256: sha256(Buffer.from(JSON.stringify(updatedRecords.get(id)), 'utf8')) })
}

writeFileSync(INDEX_PATH, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
const outputManifest = {
  schemaVersion: 1,
  batchId: SOURCE.batchId,
  releaseAlias: SOURCE.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: SOURCE_SHA256 },
  updateAudit: SOURCE.updateAudit,
  indexedRecordCount: existing.recordCount,
  targetCount: updatedRecords.size,
  targets: resultingTargets.sort((a, b) => a.colId.localeCompare(b.colId)),
  shards: resultingShardAudit.sort((a, b) => a.path.localeCompare(b.path)),
  registry: { path: relative(join(REGISTRY_ROOT, 'manifest.json')), releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/update-primates-core-flagship-enrichment.mjs',
  updateMode: 'rebuild-four-existing-dossier-records-in-place-with-exact-sibling-preservation',
}
writeFileSync(UPDATE_MANIFEST_PATH, `${JSON.stringify(outputManifest, null, 2)}\n`, 'utf8')

const verifiedIndex = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
const verified = readAndValidateIndex(verifiedIndex)
assert.equal(verified.recordCount, existing.recordCount, 'In-place update changed the global dossier count')
for (const update of SOURCE.updates) {
  const revised = verified.recordsById.get(update.colId)
  validateDossier(revised)
  verifyAcceptedIdentity(registry, revised)
  assert.ok(revised.facets[update.facet].claims.some(claim => claim.sourceIds.includes(update.source.id)))
}
console.log(JSON.stringify({ mode: 'updated-existing-records-in-place', targetCount: updatedRecords.size, indexedRecordCount: verified.recordCount, targetIds: SOURCE.updates.map(update => update.colId), inputSha256: SOURCE_SHA256, shards: resultingShardAudit.map(({ path, decodedSha256, compressedSha256 }) => ({ path, decodedSha256, compressedSha256 })) }, null, 2))
