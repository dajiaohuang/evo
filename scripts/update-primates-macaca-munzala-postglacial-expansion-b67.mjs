import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-macaca-munzala-postglacial-expansion-b67-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primate-evidence-batch-2026-09-28-g.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primate-evidence-2026-09-28-g.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const BATCH_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primate-evidence-2026-09-28-g.batch-manifest.json')
const UPDATE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-macaca-munzala-postglacial-expansion-b67-2026-09-28.update-manifest.json')
const REGISTRY_MANIFEST_PATH = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry', 'manifest.json')
const QUEUE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'species-evidence-queue', 'manifest.json')
const PAGES_PREVIEW_PATH = join(ROOT, 'data', 'pages-preview.json')
const EXPECTED_SOURCE_SHA256 = '6ecd12c8cf91f2fa40f3214b640d121f7a4d3a5be3c3b0ff5865a2a8cacd4e0e'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B67 evidence input changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-macaca-munzala-postglacial-expansion-b67-2026-09-28')
assert.equal(source.target.colId, '3WWNS')
assert.equal(source.sourceReuse.licenseAssessment, 'item-level-verified')
assert.equal(source.sourceReuse.licenseVersion, 'CC BY 4.0')

const indexBytesBefore = readFileSync(INDEX_PATH)
const dossierIndex = JSON.parse(indexBytesBefore.toString('utf8'))
assert.equal(dossierIndex.recordCount, source.audit.indexedRecordCount)
const indexMatches = dossierIndex.shards.filter(item => item.path === relative(SHARD_PATH))
assert.equal(indexMatches.length, 1, 'Target shard must occur exactly once in the dossier index')
const targetShard = indexMatches[0]
const originalCompressed = readFileSync(SHARD_PATH)
const originalDecoded = brotliDecompressSync(originalCompressed)
assert.equal(sha256(originalCompressed), targetShard.compressedSha256)
assert.equal(sha256(originalDecoded), targetShard.decodedSha256)
const rawBytesBefore = readFileSync(RAW_PATH)
assert.deepEqual(rawBytesBefore, originalDecoded, 'Raw batch JSONL must match the indexed shard')
const originalLines = rawBytesBefore.toString('utf8').trimEnd().split('\n')
const originalRows = originalLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, targetShard.recordCount)
const targets = originalRows.filter(item => item.colId === source.target.colId)
assert.equal(targets.length, source.audit.targetRecordCount)
const dossier = targets[0]
assert.equal(dossier.scientificName, source.target.scientificName)
assert.equal(dossier.rank, source.target.rank)
assert.equal(String(dossier.sourceDatasetId), source.target.sourceDatasetId)
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
const existingSource = dossier.sources.find(item => item.id === source.sourceReuse.id)
assert.ok(existingSource, 'Referenced PLOS source must already exist in the target dossier')
assert.equal(existingSource.stableId, source.sourceReuse.stableId)
assert.equal(existingSource.url, source.sourceReuse.url)
assert.equal(existingSource.licenseAssessment, source.sourceReuse.licenseAssessment)
assert.equal(existingSource.licenseVersion, source.sourceReuse.licenseVersion)
assert.ok(existingSource.licenseEvidenceLocator.includes('CC BY 4.0'), 'Existing source rights evidence must name CC BY 4.0')
const existingClaims = dossier.facets.evolution.claims ?? []
assert.ok(existingClaims.every(claim => claim.sourceIds.includes(source.sourceReuse.id)))

const sourceOccurrences = []
let indexedCount = 0
const allDossiers = new Map()
for (const entry of dossierIndex.shards) {
  const compressed = readFileSync(join(ROOT, entry.path))
  assert.equal(sha256(compressed), entry.compressedSha256, 'Indexed compressed hash mismatch: ' + entry.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), entry.decodedSha256, 'Indexed decoded hash mismatch: ' + entry.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, entry.recordCount, 'Indexed row count mismatch: ' + entry.path)
  indexedCount += rows.length
  for (const row of rows) {
    assert.ok(!allDossiers.has(row.colId), 'Duplicate indexed COL id: ' + row.colId)
    allDossiers.set(row.colId, row)
    for (const item of row.sources ?? []) {
      if (item.stableId === source.sourceReuse.stableId) sourceOccurrences.push(row.colId)
    }
  }
}
assert.equal(indexedCount, dossierIndex.recordCount)
assert.deepEqual(sourceOccurrences, [source.target.colId], 'PLOS DOI must have one existing dossier occurrence')

const queueManifestBytesBefore = readFileSync(QUEUE_MANIFEST_PATH)
const previewBytes = readFileSync(PAGES_PREVIEW_PATH)
const registryBytes = readFileSync(REGISTRY_MANIFEST_PATH)
assert.equal(sha256(previewBytes), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages package selection changed since audit')
assert.equal(sha256(registryBytes), source.audit.registryManifestSha256, 'Pinned COL26.8 registry changed since audit')
const preview = JSON.parse(previewBytes.toString('utf8'))
assert.ok(preview.packageIds.includes('primates'), 'Primates must remain in the shared App/Pages core')
assert.ok(preview.taxonIds.includes('primates'), 'Primates must remain in the shared App/Pages core')

const batchManifestBytesBefore = readFileSync(BATCH_MANIFEST_PATH)
const batchManifest = JSON.parse(batchManifestBytesBefore.toString('utf8'))
assert.equal(batchManifest.batchId, 'primate-evidence-batch-2026-09-28-g')
const applied = (batchManifest.supplementalUpdates ?? []).find(item => item.batchId === source.batchId)

if (applied) {
  assert.equal(applied.sourceSha256, EXPECTED_SOURCE_SHA256, 'B67 source digest differs from prior application')
  assert.equal(sha256(rawBytesBefore), applied.rawSha256, 'B67 updated raw JSONL changed after application')
  assert.equal(sha256(originalCompressed), applied.compressedSha256, 'B67 compressed shard changed after application')
  assert.equal(sha256(indexBytesBefore), applied.dossierIndexSha256, 'B67 dossier index changed after application')
  assert.equal((dossier.facets.evolution.claims ?? []).filter(item => item.text === source.claim.text).length, 1)
  const queueManifest = JSON.parse(queueManifestBytesBefore.toString('utf8'))
  assert.equal(queueManifest.inputs.dossierIndexSha256, sha256(indexBytesBefore), 'Rebuild the species evidence queue after applying B67')
  const queueMatches = []
  for (const entry of queueManifest.shards) {
    const compressed = readFileSync(join(ROOT, entry.path))
    assert.equal(sha256(compressed), entry.compressedSha256, 'Queue shard checksum mismatch: ' + entry.path)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), entry.decodedSha256, 'Queue decoded checksum mismatch: ' + entry.path)
    const row = decoded.toString('utf8').trimEnd().split('\n').map(JSON.parse).find(item => item.colId === source.target.colId)
    if (row) queueMatches.push({ entry, row })
  }
  assert.equal(queueMatches.length, 1, 'Target species must occur in exactly one queue shard')
  const { entry, row } = queueMatches[0]
  assert.equal(row.dossier.status, 'incomplete')
  assert.equal(row.dossier.claimCount, 2)
  assert.deepEqual(row.dossier.facetStatuses, Object.fromEntries(FACETS.map(facet => [facet, dossier.facets[facet].status])))
  const updateManifest = JSON.parse(readFileSync(UPDATE_MANIFEST_PATH, 'utf8'))
  updateManifest.queueProjection = {
    inputManifestSha256BeforeUpdate: source.audit.queueManifestSha256,
    outputManifestPath: relative(QUEUE_MANIFEST_PATH),
    outputManifestSha256: sha256(queueManifestBytesBefore),
    inputDossierIndexSha256: sha256(indexBytesBefore),
    notIncludedInRuntime: queueManifest.notIncludedInRuntime,
    affectedShard: {
      prefix: entry.prefix,
      path: entry.path,
      recordCount: entry.recordCount,
      compressedSha256: entry.compressedSha256,
      decodedSha256: entry.decodedSha256,
    },
    projectedTargetRow: {
      colId: row.colId,
      dossierStatus: row.dossier.status,
      claimCount: row.dossier.claimCount,
      facetStatuses: row.dossier.facetStatuses,
    },
  }
  writeFileSync(UPDATE_MANIFEST_PATH, JSON.stringify(updateManifest, null, 2) + '\n', 'utf8')
  console.log(JSON.stringify({ batchId: source.batchId, targetColId: source.target.colId, alreadyApplied: true, queueProjectionRecorded: true }, null, 2))
} else {
  assert.equal(existingClaims.some(claim => claim.text === source.claim.text), false, 'B67 claim already exists')
  assert.equal(sha256(indexBytesBefore), source.audit.dossierIndexSha256, 'Dossier index changed since B67 audit')
  assert.equal(sha256(queueManifestBytesBefore), source.audit.queueManifestSha256, 'Species evidence queue changed since B67 audit')
  assert.equal(sha256(rawBytesBefore), source.audit.targetRawSha256, 'Target raw JSONL changed since B67 audit')
  assert.equal(sha256(Buffer.from(JSON.stringify(dossier), 'utf8')), source.audit.targetRecordSha256, 'Target dossier changed since B67 audit')
  assert.equal(existingClaims.length, source.audit.evolutionClaimCount)
  assert.equal(sourceOccurrences.length, source.audit.sourceOccurrenceCount)
  assert.equal(dossier.facets.evolution.status, 'partially-supported')

  const updatedDossier = structuredClone(dossier)
  updatedDossier.checkedAt = source.checkedAt
  updatedDossier.facets.evolution.claims.push(structuredClone(source.claim))
  updatedDossier.completeness.reasons = structuredClone(source.completenessReasons)
  const updatedLines = originalLines.map(line => {
    const row = JSON.parse(line)
    if (row.colId === updatedDossier.colId) return JSON.stringify(updatedDossier)
    assert.deepEqual(allDossiers.get(row.colId), row, 'Sibling dossier changed: ' + row.colId)
    return line
  })
  const rawBytes = Buffer.from(updatedLines.join('\n') + '\n', 'utf8')
  assert.ok(!rawBytes.includes(0x0d), 'B67 raw JSONL must use LF line endings')
  const compressedBytes = brotliCompressSync(rawBytes, {
    params: {
      [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
      [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
    },
  })
  assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes, 'B67 Brotli round trip must preserve exact raw bytes')
  targetShard.decodedSha256 = sha256(rawBytes)
  targetShard.compressedSha256 = sha256(compressedBytes)
  const indexBytes = Buffer.from(JSON.stringify(dossierIndex, null, 2) + '\n', 'utf8')
  const rawEntry = {
    path: relative(RAW_PATH),
    encoding: 'utf-8-jsonl-lf',
    recordCount: originalRows.length,
    bytes: rawBytes.length,
    sha256: sha256(rawBytes),
  }
  const shardEntry = {
    path: relative(SHARD_PATH),
    encoding: 'brotli-jsonl',
    recordCount: originalRows.length,
    decodedBytes: rawBytes.length,
    decodedSha256: sha256(rawBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha256(compressedBytes),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  }
  batchManifest.raw = rawEntry
  batchManifest.shard = shardEntry
  batchManifest.finalDossierIndexSha256 = sha256(indexBytes)
  batchManifest.supplementalUpdates ??= []
  batchManifest.supplementalUpdates.push({
    batchId: source.batchId,
    sourcePath: relative(SOURCE_PATH),
    sourceSha256: EXPECTED_SOURCE_SHA256,
    generator: relative(join(ROOT, 'scripts', 'update-primates-macaca-munzala-postglacial-expansion-b67.mjs')),
    targetColIds: [source.target.colId],
    sourceStableId: source.sourceReuse.stableId,
    sourceReuse: true,
    previousRawSha256: sha256(rawBytesBefore),
    previousCompressedSha256: sha256(originalCompressed),
    rawSha256: sha256(rawBytes),
    compressedSha256: sha256(compressedBytes),
    dossierIndexSha256: sha256(indexBytes),
    claimCountForTarget: updatedDossier.facets.evolution.claims.length,
    appAndPagesPreviewManifestChanged: false,
  })
  const updateManifest = {
    schemaVersion: 1,
    batchId: source.batchId,
    releaseAlias: source.releaseAlias,
    input: { path: relative(SOURCE_PATH), sha256: EXPECTED_SOURCE_SHA256 },
    target: {
      colId: source.target.colId,
      scientificName: source.target.scientificName,
      sourceDatasetId: source.target.sourceDatasetId,
      targetShardPath: relative(SHARD_PATH),
      sourceStableIdReused: source.sourceReuse.stableId,
      sourceOccurrenceCountBeforeUpdate: sourceOccurrences.length,
      evolutionClaimCountBeforeUpdate: existingClaims.length,
      evolutionClaimCountAfterUpdate: updatedDossier.facets.evolution.claims.length,
    },
    audit: source.audit,
    output: {
      raw: rawEntry,
      shard: shardEntry,
      dossierIndex: { path: relative(INDEX_PATH), recordCount: dossierIndex.recordCount, sha256: sha256(indexBytes) },
      batchManifest: { path: relative(BATCH_MANIFEST_PATH), sha256: sha256(Buffer.from(JSON.stringify(batchManifest, null, 2) + '\n', 'utf8')) },
    },
    appAndPagesPreviewManifestChanged: false,
    notIncludedInRuntime: true,
    queueProjection: null,
  }
  writeFileSync(RAW_PATH, rawBytes)
  writeFileSync(SHARD_PATH, compressedBytes)
  writeFileSync(INDEX_PATH, indexBytes)
  writeFileSync(BATCH_MANIFEST_PATH, JSON.stringify(batchManifest, null, 2) + '\n', 'utf8')
  writeFileSync(UPDATE_MANIFEST_PATH, JSON.stringify(updateManifest, null, 2) + '\n', 'utf8')
  console.log(JSON.stringify({
    batchId: source.batchId,
    targetColId: source.target.colId,
    targetName: source.target.scientificName,
    evolutionClaimCount: updatedDossier.facets.evolution.claims.length,
    dossierRecordCount: dossierIndex.recordCount,
    appAndPagesPreviewManifestChanged: false,
    shardBytesBefore: originalCompressed.length,
    shardBytesAfter: compressedBytes.length,
  }, null, 2))
}
