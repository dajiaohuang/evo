import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { gunzipSync, brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const sourcePath = 'data/sources/primates-papionini-parent-chain-correction-batch26-2026-09-25.json'
const rawPath = 'data/knowledge/raw-dossiers/primates-dossiers-batch-3.jsonl'
const shardPath = 'data/knowledge/catalogue-dossiers-primates-batch-3.jsonl.br'
const metadataPath = 'data/knowledge/catalogue-dossiers-primates-batch-3.metadata.json'
const indexPath = 'data/knowledge/catalogue-dossier-shards.json'
const auditPath = 'data/knowledge/primates-papionini-parent-chain-correction-batch26-2026-09-25.update-manifest.json'
const registryManifestPath = 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json'
const nodeDirectory = 'data/catalogue-of-life/releases/2026-08-20/registry/hierarchy/nodes'
const expectedBaseRawSha256 = '9162d45243902613b95744f9ee1cf01e41626815ea159d1c50076789676dcd48'
const expectedBaseCompressedSha256 = '3c0a1d22a2246d8e7f6907b6c093f92d49bf309a992f32b450b5b36f39d8dcbb'
const expectedBaseRecordCount = 6935
const indexTargetShardPath = 'data/knowledge/catalogue-dossiers-primates-batch-3.jsonl.br'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const sourceBytes = readFileSync(sourcePath)
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.checklistBankDatasetKey, 316115)
assert.equal(source.releaseDate, '2026-08-20')
assert.equal(source.correction.insertedNodeId, 'L4C')
assert.equal(source.correction.insertedNodeName, 'Papionini')
assert.deepEqual(source.records.map(record => record.colId), ['3WWNQ', '3WWP6', '6TM9B'])

const registryManifestBytes = readFileSync(registryManifestPath)
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, source.releaseAlias)
assert.equal(registryManifest.releaseDate, source.releaseDate)
assert.equal(registryManifest.checklistBankDatasetKey, source.checklistBankDatasetKey)
assert.equal(registryManifest.doi, source.checklistBankDoi)
assert.equal(registryManifest.license.spdx, 'CC-BY-4.0')

const nodeShardBytes = new Map()
function readNode(id) {
  const route = createHash('sha256').update(id).digest('hex').slice(0, 2)
  const path = `${nodeDirectory}/id-${route}.jsonl.gz`
  if (!nodeShardBytes.has(path)) nodeShardBytes.set(path, readFileSync(path))
  const matches = gunzipSync(nodeShardBytes.get(path)).toString('utf8').trimEnd().split('\n')
    .filter(Boolean).map(line => JSON.parse(line)).filter(node => node.id === id)
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 node ${id}; found ${matches.length}`)
  return matches[0]
}

const nameOf = node => {
  const authorship = node.authorship
  const scientificName = node.scientificName
  if (authorship && scientificName.endsWith(` ${authorship}`)) return scientificName.slice(0, -(authorship.length + 1))
  return scientificName
}
const parentRecord = node => ({
  id: node.id,
  name: nameOf(node),
  authorship: node.authorship ?? null,
  rank: node.rank,
  status: node.status,
})

const papionini = readNode(source.correction.insertedNodeId)
assert.equal(nameOf(papionini), source.correction.insertedNodeName)
assert.equal(papionini.rank, source.correction.insertedNodeRank)
assert.equal(papionini.status, 'accepted')
assert.equal(String(papionini.sourceDatasetId), '2144')

function pinnedParentChain(record) {
  const species = readNode(record.colId)
  for (const [field, actual, expected] of [
    ['scientificName', species.scientificName, record.scientificName],
    ['rank', species.rank, 'species'],
    ['status', species.status, 'accepted'],
    ['sourceDatasetId', String(species.sourceDatasetId), record.sourceDatasetId],
  ]) assert.equal(actual, expected, `Pinned COL26.8 ${field} mismatch for ${record.colId}`)

  const chain = []
  let current = species
  const seen = new Set([species.id])
  while (current.parentId) {
    assert.ok(!seen.has(current.parentId), `Cycle in pinned COL26.8 parent path at ${current.parentId}`)
    seen.add(current.parentId)
    current = readNode(current.parentId)
    assert.equal(current.status, 'accepted', `Parent ${current.id} is not accepted`)
    chain.push(parentRecord(current))
    if (current.id === '3W7') break
  }
  assert.equal(chain.at(-1)?.id, '3W7', `Pinned path for ${record.colId} did not reach Primates`)
  return chain
}

const sourceIds = new Set(source.records.map(record => record.colId))
const rawBefore = readFileSync(rawPath)
const compressedBefore = readFileSync(shardPath)
const rawBeforeSha256 = sha256(rawBefore)
const compressedBeforeSha256 = sha256(compressedBefore)
const metadata = readJson(metadataPath)
const indexBytesBefore = readFileSync(indexPath)
const index = JSON.parse(indexBytesBefore.toString('utf8'))
const appliedUpdate = metadata.supplementalUpdates?.find(update => update.batchId === source.batchId)
const alreadyApplied = Boolean(appliedUpdate)

if (!alreadyApplied) {
  assert.equal(rawBeforeSha256, expectedBaseRawSha256, 'Current raw shard differs from the reviewed COL26.8 base')
  assert.equal(compressedBeforeSha256, expectedBaseCompressedSha256, 'Current compressed shard differs from the reviewed base')
  assert.equal(index.recordCount, expectedBaseRecordCount)
  assert.equal(metadata.recordCount, 3)
  assert.equal(metadata.rawSha256, rawBeforeSha256)
  assert.equal(metadata.decodedSha256, rawBeforeSha256)
  assert.equal(metadata.compressedSha256, compressedBeforeSha256)
}
assert.equal(metadata.path, shardPath)
assert.equal(metadata.rawPath, rawPath)
assert.equal(index.releaseAlias, source.releaseAlias)

let decodedRecordCount = 0
const allIds = new Set()
for (const indexedShard of index.shards) {
  const bytes = readFileSync(indexedShard.path)
  assert.equal(sha256(bytes), indexedShard.compressedSha256, `Compressed checksum mismatch for ${indexedShard.path}`)
  const decoded = brotliDecompressSync(bytes)
  assert.equal(sha256(decoded), indexedShard.decodedSha256, `Decoded checksum mismatch for ${indexedShard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(line => JSON.parse(line))
  assert.equal(rows.length, indexedShard.recordCount, `Record count mismatch for ${indexedShard.path}`)
  decodedRecordCount += rows.length
  for (const row of rows) {
    assert.ok(!allIds.has(row.colId), `Duplicate indexed COL ID ${row.colId}`)
    allIds.add(row.colId)
  }
}
assert.equal(decodedRecordCount, index.recordCount, 'Shard record counts do not sum to the indexed record count')
for (const id of sourceIds) assert.equal([...allIds].filter(candidate => candidate === id).length, 1, `Expected one indexed record for ${id}`)

const rawLines = rawBefore.toString('utf8').trimEnd().split('\n')
const rawRows = rawLines.map(line => JSON.parse(line))
const targetRows = rawRows.filter(row => sourceIds.has(row.colId))
assert.equal(targetRows.length, source.records.length, 'Expected exactly one raw record for each correction target')
assert.deepEqual(targetRows.map(row => row.colId), ['3WWNQ', '3WWP6', '6TM9B'])
const beforeRecordHashes = Object.fromEntries(targetRows.map(row => [row.colId, sha256(Buffer.from(JSON.stringify(row), 'utf8'))]))
const parentPaths = {}

for (const correction of source.records) {
  const record = targetRows.find(row => row.colId === correction.colId)
  assert.equal(record.scientificName, correction.scientificName)
  assert.equal(String(record.sourceDatasetId), correction.sourceDatasetId)
  const actualChain = pinnedParentChain(correction)
  assert.deepEqual(actualChain.map(node => node.id), correction.pinnedParentPathIds, `Pinned parent IDs mismatch for ${record.colId}`)
  const recordedIds = record.identity.parentChain.map(node => node.id)
  const correctedAlready = recordedIds.includes(source.correction.insertedNodeId)
  if (correctedAlready) {
    assert.deepEqual(recordedIds, correction.pinnedParentPathIds, `Already-corrected parent path diverges for ${record.colId}`)
    assert.deepEqual(record.identity.parentChain, actualChain, `Already-corrected parent metadata diverges for ${record.colId}`)
  } else {
    assert.deepEqual(recordedIds, correction.recordedParentPathIds, `Unexpected prior parent path for ${record.colId}`)
    assert.deepEqual(record.identity.parentChain, actualChain.filter(node => node.id !== source.correction.insertedNodeId), `Only Papionini may be absent for ${record.colId}`)
    record.identity.parentChain = actualChain
  }
  const identitySource = record.sources.find(item => item.id === 'col')
  assert.ok(identitySource, `Missing COL26.8 identity source for ${record.colId}`)
  const parentDescription = ` Pinned COL26.8 parent path through accepted Papionini (L4C) reaches Primates (3W7).`
  if (!identitySource.locator.includes('Papionini (L4C)')) identitySource.locator += parentDescription
  if (!record.identity.method.includes('complete accepted parent path')) record.identity.method += ' The complete accepted parent path through Primates was verified from the immutable COL26.8 hierarchy archive.'
  parentPaths[record.colId] = actualChain
}

const targetLineById = new Map(targetRows.map(row => [row.colId, JSON.stringify(row)]))
const rawAfter = Buffer.from(`${rawRows.map((row, indexInRaw) => {
  const lineRecord = row
  return sourceIds.has(lineRecord.colId) ? targetLineById.get(lineRecord.colId) : rawLines[indexInRaw]
}).join('\n')}\n`, 'utf8')
const compressedAfter = brotliCompressSync(rawAfter, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressedAfter).equals(rawAfter), 'Brotli round-trip changed raw dossier bytes')

const rawAfterSha256 = sha256(rawAfter)
const compressedAfterSha256 = sha256(compressedAfter)
const sourceSha256 = sha256(sourceBytes)
const registryManifestSha256 = sha256(registryManifestBytes)
const nodeShards = [...nodeShardBytes.entries()].map(([path, bytes]) => ({ path, sha256: sha256(bytes) })).sort((a, b) => a.path.localeCompare(b.path))
const afterRecordHashes = Object.fromEntries(targetRows.map(row => [row.colId, sha256(Buffer.from(JSON.stringify(row), 'utf8'))]))

if (alreadyApplied) {
  assert.equal(rawBeforeSha256, rawAfterSha256, 'Idempotent rebuild would alter already-corrected raw bytes')
  assert.equal(compressedBeforeSha256, compressedAfterSha256, 'Idempotent rebuild would alter already-corrected compressed bytes')
  assert.equal(appliedUpdate.sourceSha256, sourceSha256)
  assert.deepEqual(appliedUpdate.targetColIds, [...sourceIds])
  const audit = readJson(auditPath)
  assert.equal(audit.rawSha256, rawAfterSha256)
  assert.equal(audit.compressedSha256, compressedAfterSha256)
  process.stdout.write(`${JSON.stringify({ status: 'verified-idempotent-rebuild', recordCount: index.recordCount, targetColIds: [...sourceIds], rawSha256: rawAfterSha256, compressedSha256: compressedAfterSha256 })}\n`)
} else {
  const indexedTarget = index.shards.find(shard => shard.path === indexTargetShardPath)
  assert.ok(indexedTarget, 'Primates batch-3 shard is absent from the global index')
  const previousIndexSha256 = sha256(indexBytesBefore)
  const update = {
    batchId: source.batchId,
    sourcePath,
    sourceSha256,
    generator: 'scripts/build-primates-papionini-parent-chain-correction-batch26.mjs',
    checkedAt: source.checkedAt,
    indexedRecordCountAtAudit: index.recordCount,
    targetColIds: [...sourceIds],
    previousDecodedSha256: rawBeforeSha256,
    previousCompressedSha256: compressedBeforeSha256,
    decodedSha256: rawAfterSha256,
    compressedSha256: compressedAfterSha256,
    mode: 'in-place-correction-of-accepted-parent-chains',
  }
  metadata.supplementalUpdates ??= []
  metadata.supplementalUpdates.push(update)
  Object.assign(metadata, { rawSha256: rawAfterSha256, decodedSha256: rawAfterSha256, compressedSha256: compressedAfterSha256, decodedBytes: rawAfter.length, compressedBytes: compressedAfter.length })
  Object.assign(indexedTarget, { recordCount: rawRows.length, decodedSha256: rawAfterSha256, compressedSha256: compressedAfterSha256 })
  assert.equal(index.shards.reduce((sum, shard) => sum + shard.recordCount, 0), index.recordCount)
  const nextIndexSha256 = sha256(Buffer.from(JSON.stringify(index, null, 2) + '\n', 'utf8'))
  const audit = {
    schemaVersion: 1,
    ...source,
    sourceSha256,
    baseHead: '185991b70b4d14634df756676bc744f4e6f59aa5',
    indexedRecordCountBefore: index.recordCount,
    totalIndexedRecordsBeforeAndAfter: index.recordCount,
    previousRawSha256: rawBeforeSha256,
    rawSha256: rawAfterSha256,
    previousCompressedSha256: compressedBeforeSha256,
    compressedSha256: compressedAfterSha256,
    registryManifestSha256,
    registryNodeShards: nodeShards,
    targetRecordHashesBefore: beforeRecordHashes,
    targetRecordHashesAfter: afterRecordHashes,
    parentPaths,
    previousIndexSha256,
    indexSha256: nextIndexSha256,
    updatedIds: [...sourceIds],
    shardRecordCountBeforeAndAfter: rawRows.length,
  }
  writeFileSync(rawPath, rawAfter)
  writeFileSync(shardPath, compressedAfter)
  writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8')
  writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
  writeFileSync(auditPath, `${JSON.stringify(audit, null, 2)}\n`, 'utf8')
  process.stdout.write(`${JSON.stringify({ status: 'updated', recordCount: index.recordCount, targetColIds: [...sourceIds], rawSha256: rawAfterSha256, compressedSha256: compressedAfterSha256, nodeShards })}\n`)
}
