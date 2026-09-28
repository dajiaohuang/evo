import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-priority-core-b60-2026-09-28.json')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const QUEUE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'species-evidence-queue', 'manifest.json')
const PREVIEW_PATH = join(ROOT, 'data', 'pages-preview.json')
const OUTPUT_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-priority-core-b60-2026-09-28.batch-manifest.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SOURCE_SHA256 = '0be3f516719d4a939af33df0020ec558483dd33ccc5d27a4ebd631e93edbc027'
const sha256 = value => createHash('sha256').update(value).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const serialize = value => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B60 evidence bundle changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-priority-core-b60-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.deepEqual(source.updates.map(update => update.target.colId), ['4LTT2', '3H3C3'])

const indexBytesBefore = readFileSync(INDEX_PATH)
const index = JSON.parse(indexBytesBefore.toString('utf8'))
assert.equal(index.recordCount, source.audit.dossierIndexRecordCount)
assert.equal(sha256(indexBytesBefore), source.audit.dossierIndexSha256, 'Dossier index changed since the B60 audit')
const queueManifestBytes = readFileSync(QUEUE_MANIFEST_PATH)
const queueManifest = JSON.parse(queueManifestBytes.toString('utf8'))
assert.equal(sha256(queueManifestBytes), source.audit.queueManifestSha256, 'Species evidence queue changed since the B60 audit')
assert.equal(queueManifest.inputs.dossierIndexSha256, sha256(indexBytesBefore))
assert.equal(queueManifest.notIncludedInRuntime, true)
assert.equal(sha256(readFileSync(PREVIEW_PATH)), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages selection changed since the B60 audit')
assert.ok(JSON.parse(readFileSync(PREVIEW_PATH, 'utf8')).packageIds.includes('primates'))
const registryManifest = JSON.parse(readFileSync(join(ROOT, source.registry.path), 'utf8'))
assert.equal(sha256(readFileSync(join(ROOT, source.registry.path))), source.registry.manifestSha256)
assert.equal(registryManifest.releaseAlias, 'COL26.8')

const sourceOccurrences = new Map(source.updates.map(update => [update.source.stableId, []]))
const allDossiers = new Map()
let indexedRecordCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, `Indexed shard checksum mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, `Indexed decoded checksum mismatch: ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, shard.recordCount, `Indexed row count mismatch: ${shard.path}`)
  indexedRecordCount += rows.length
  for (const row of rows) {
    assert.ok(!allDossiers.has(row.colId), `Duplicate indexed COL id: ${row.colId}`)
    allDossiers.set(row.colId, row)
    for (const item of row.sources ?? []) {
      const matches = sourceOccurrences.get(item.stableId)
      if (matches) matches.push(row.colId)
    }
  }
}
assert.equal(indexedRecordCount, index.recordCount)

function readQueueEvidence(queueAudit, targetId) {
  const entries = queueManifest.shards.filter(item => item.path === queueAudit.path && item.prefix === queueAudit.prefix)
  assert.equal(entries.length, 1, `Expected one queue shard for ${targetId}`)
  const entry = entries[0]
  const compressed = readFileSync(join(ROOT, entry.path))
  assert.equal(sha256(compressed), queueAudit.compressedSha256)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), queueAudit.decodedSha256)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  const matches = rows.filter(row => row.colId === targetId)
  assert.equal(matches.length, 1, `Expected one queue row for ${targetId}`)
  assert.equal(sha256(Buffer.from(JSON.stringify(matches[0]), 'utf8')), queueAudit.rowSha256)
  return matches[0]
}

const updatesByShard = new Map()
for (const update of source.updates) {
  const { target, facet, source: item, claim, gaps } = update
  assert.ok(FACETS.includes(facet), `Unsupported facet ${facet}`)
  assert.equal(item.licenseAssessment, 'item-level-verified')
  assert.equal(item.licenseVersion, 'CC BY 4.0')
  assert.equal(claim.sourceIds.length, 1)
  assert.deepEqual(claim.sourceIds, [item.id])
  assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus)
  assert.ok(Array.isArray(gaps) && gaps.length > 0)
  const audit = source.audit.targets[target.colId]
  assert.ok(audit, `No frozen audit for ${target.colId}`)
  assert.deepEqual(sourceOccurrences.get(item.stableId), audit.existingSourceStableIdOccurrences, `DOI occurrence changed for ${target.colId}`)

  const shardMatches = index.shards.filter(shard => shard.path === audit.shardPath)
  assert.equal(shardMatches.length, 1, `Expected indexed shard for ${target.colId}`)
  const shard = shardMatches[0]
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), audit.shardCompressedSha256, `Target shard changed for ${target.colId}`)
  const decoded = brotliDecompressSync(compressed)
  const raw = readFileSync(join(ROOT, audit.rawPath))
  assert.ok(decoded.equals(raw), `Indexed/raw byte mismatch for ${target.colId}`)
  assert.equal(sha256(raw), audit.rawSha256, `Raw dossier shard changed for ${target.colId}`)
  const lines = raw.toString('utf8').trimEnd().split('\n')
  const rows = lines.map(line => JSON.parse(line))
  const targets = rows.filter(row => row.colId === target.colId)
  assert.equal(targets.length, 1)
  const dossier = targets[0]
  assert.equal(sha256(Buffer.from(JSON.stringify(dossier), 'utf8')), audit.targetRecordSha256)
  for (const field of ['scientificName', 'authorship', 'rank']) assert.equal(dossier[field], target[field])
  assert.equal(String(dossier.sourceDatasetId), target.sourceDatasetId)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  assert.ok(dossier.classificationPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
  assert.ok(registryManifest.hierarchy?.counts?.acceptedSpeciesNodes > 0)
  assert.ok(!dossier.sources.some(existing => existing.id === item.id || existing.stableId === item.stableId), `Source already exists in target dossier ${target.colId}`)

  const queueRow = readQueueEvidence(audit.queue, target.colId)
  assert.equal(queueRow.dossier.status, 'incomplete')
  assert.equal(queueRow.dossier.facetStatuses[facet], 'not-assessed')
  assert.equal(queueRow.dossier.claimCount, FACETS.reduce((sum, name) => sum + (dossier.facets[name].claims?.length ?? 0), 0))

  const updated = structuredClone(dossier)
  updated.checkedAt = source.checkedAt
  updated.identity.scope = update.identityScope
  updated.lifeStatusScope.wild = update.wildScope
  updated.sources.push(structuredClone(item))
  updated.facets[facet] = { status: 'partially-supported', claims: [structuredClone(claim)], gaps: structuredClone(gaps) }
  updated.completeness = { status: 'incomplete', reasons: structuredClone(update.completenessReasons) }

  const updatedLines = lines.map(line => {
    const row = JSON.parse(line)
    if (row.colId === target.colId) return JSON.stringify(updated)
    assert.deepEqual(allDossiers.get(row.colId), row, `Sibling dossier changed: ${row.colId}`)
    return line
  })
  const rawAfter = Buffer.from(`${updatedLines.join('\n')}\n`, 'utf8')
  assert.ok(!rawAfter.includes(0x0d), 'Updated JSONL must use LF line endings')
  const compressedAfter = brotliCompressSync(rawAfter, {
    params: {
      [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
      [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
    },
  })
  assert.deepEqual(brotliDecompressSync(compressedAfter), rawAfter, `Brotli round trip failed for ${target.colId}`)
  const baseManifestBytes = readFileSync(join(ROOT, audit.batchManifestPath))
  assert.equal(sha256(baseManifestBytes), audit.batchManifestSha256, `Target batch manifest changed for ${target.colId}`)
  const baseManifest = JSON.parse(baseManifestBytes.toString('utf8'))
  assert.equal(baseManifest.releaseAlias, 'COL26.8')
  assert.equal(baseManifest.shard.path, audit.shardPath)
  assert.equal(baseManifest.raw.path, audit.rawPath)
  updatesByShard.set(target.colId, { update, audit, indexEntry: shard, raw, compressed, rawAfter, compressedAfter, lines, updated, baseManifest })
}

assert.equal(indexedRecordCount, source.audit.dossierIndexRecordCount)
const outputRows = []
for (const [targetId, data] of updatesByShard) {
  data.indexEntry.decodedSha256 = sha256(data.rawAfter)
  data.indexEntry.compressedSha256 = sha256(data.compressedAfter)
  data.indexEntry.recordCount = data.rawAfter.toString('utf8').trimEnd().split('\n').length
  const rawEntry = {
    path: data.audit.rawPath,
    encoding: 'utf-8-jsonl-lf',
    recordCount: data.indexEntry.recordCount,
    bytes: data.rawAfter.length,
    sha256: sha256(data.rawAfter),
  }
  const shardEntry = {
    path: data.audit.shardPath,
    encoding: 'brotli-jsonl',
    recordCount: data.indexEntry.recordCount,
    decodedBytes: data.rawAfter.length,
    decodedSha256: sha256(data.rawAfter),
    compressedBytes: data.compressedAfter.length,
    compressedSha256: sha256(data.compressedAfter),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  }
  data.baseManifest.raw = rawEntry
  data.baseManifest.shard = shardEntry
  const previousUpdate = (data.baseManifest.supplementalUpdates ?? []).find(entry => entry.batchId === source.batchId)
  assert.equal(previousUpdate, undefined, `B60 is already recorded in base manifest for ${targetId}`)
  data.baseManifest.supplementalUpdates ??= []
  data.baseManifest.supplementalUpdates.push({
    batchId: source.batchId,
    sourcePath: relative(SOURCE_PATH),
    sourceSha256: EXPECTED_SOURCE_SHA256,
    generator: relative(join(ROOT, 'scripts', 'update-primate-priority-core-b60.mjs')),
    targetColIds: [targetId],
    sourceIds: [data.update.source.id],
    facets: [data.update.facet],
    previousRawSha256: sha256(data.raw),
    previousCompressedSha256: sha256(data.compressed),
    rawSha256: sha256(data.rawAfter),
    compressedSha256: sha256(data.compressedAfter),
    dossierIndexSha256: null,
    appAndPagesPreviewManifestChanged: false,
    fullEvidenceQueueIncludedInRuntime: false,
  })
  outputRows.push({
    colId: targetId,
    scientificName: data.update.target.scientificName,
    facet: data.update.facet,
    claimCount: data.updated.facets[data.update.facet].claims.length,
    previousRawSha256: sha256(data.raw),
    outputRawSha256: sha256(data.rawAfter),
    previousCompressedSha256: sha256(data.compressed),
    outputCompressedSha256: sha256(data.compressedAfter),
    raw: rawEntry,
    shard: shardEntry,
    batchManifest: data.baseManifest,
  })
}

const indexBytesAfter = serialize(index)
const indexShaAfter = sha256(indexBytesAfter)
for (const [targetId, data] of updatesByShard) {
  const supplemental = data.baseManifest.supplementalUpdates.find(entry => entry.batchId === source.batchId)
  supplemental.dossierIndexSha256 = indexShaAfter
  data.baseManifest.finalDossierIndexSha256 = indexShaAfter
}
const batchManifestOutputs = outputRows.map((row, index) => {
  const update = source.updates[index]
  const targetData = updatesByShard.get(row.colId)
  const batchBytes = serialize(targetData.baseManifest)
  return {
    colId: row.colId,
    path: targetData.audit.batchManifestPath,
    sha256: sha256(batchBytes),
    bytes: batchBytes,
  }
})
const outputManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: EXPECTED_SOURCE_SHA256 },
  preparedAgainst: source.preparedAgainst,
  audit: source.audit,
  outputs: outputRows.map((row, index) => ({
    colId: row.colId,
    scientificName: row.scientificName,
    facet: row.facet,
    claimCount: row.claimCount,
    previousRawSha256: row.previousRawSha256,
    outputRawSha256: row.outputRawSha256,
    previousCompressedSha256: row.previousCompressedSha256,
    outputCompressedSha256: row.outputCompressedSha256,
    raw: row.raw,
    shard: row.shard,
    batchManifest: { path: batchManifestOutputs[index].path, sha256: batchManifestOutputs[index].sha256 },
  })),
  dossierIndex: { path: relative(INDEX_PATH), recordCount: index.recordCount, sha256: indexShaAfter },
  appAndPagesPreviewManifestChanged: false,
  appCorePackageIds: JSON.parse(readFileSync(PREVIEW_PATH, 'utf8')).packageIds,
  fullEvidenceQueueIncludedInRuntime: false,
  queueRebuildRequired: true,
}

for (let index = 0; index < outputRows.length; index++) {
  const row = outputRows[index]
  const data = updatesByShard.get(row.colId)
  writeFileSync(join(ROOT, data.audit.rawPath), data.rawAfter)
  writeFileSync(join(ROOT, data.audit.shardPath), data.compressedAfter)
  writeFileSync(join(ROOT, data.audit.batchManifestPath), batchManifestOutputs[index].bytes)
}
writeFileSync(INDEX_PATH, indexBytesAfter)
writeFileSync(OUTPUT_MANIFEST_PATH, serialize(outputManifest))
console.log(JSON.stringify({
  batchId: source.batchId,
  outputs: outputManifest.outputs.map(({ colId, scientificName, facet, claimCount }) => ({ colId, scientificName, facet, claimCount })),
  dossierIndexRecordCount: index.recordCount,
  dossierIndexSha256: indexShaAfter,
  queueRebuildRequired: true,
  appAndPagesPreviewManifestChanged: false,
  fullEvidenceQueueIncludedInRuntime: false,
}, null, 2))
