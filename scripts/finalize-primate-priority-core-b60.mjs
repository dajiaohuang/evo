import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliDecompressSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-priority-core-b60-2026-09-28.json')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const QUEUE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'species-evidence-queue', 'manifest.json')
const OUTPUT_PATH = join(ROOT, 'data', 'knowledge', 'primates-priority-core-b60-2026-09-28.batch-manifest.json')
const sha256 = value => createHash('sha256').update(value).digest('hex')
const serialize = value => `${JSON.stringify(value, null, 2)}\n`
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))

const source = readJson(SOURCE_PATH)
const output = readJson(OUTPUT_PATH)
const indexBytes = readFileSync(INDEX_PATH)
const index = JSON.parse(indexBytes.toString('utf8'))
const queueManifestBytes = readFileSync(QUEUE_MANIFEST_PATH)
const queueManifest = JSON.parse(queueManifestBytes.toString('utf8'))
assert.equal(queueManifest.generatedBy, 'scripts/build-species-evidence-queue.mjs')
assert.equal(queueManifest.notIncludedInRuntime, true)
assert.equal(queueManifest.inputs.dossierIndexSha256, sha256(indexBytes), 'Queue must be rebuilt after the B60 dossier update')
assert.equal(index.recordCount, source.audit.dossierIndexRecordCount)
assert.equal(sha256(indexBytes), output.dossierIndex.sha256)

const targets = []
for (const update of source.updates) {
  const id = update.target.colId
  const prefix = createHash('sha256').update(id).digest('hex')[0]
  const shard = queueManifest.shards.find(entry => entry.prefix === prefix)
  assert.ok(shard, `Missing regenerated queue shard for ${id}`)
  const decoded = brotliDecompressSync(readFileSync(join(ROOT, shard.path)))
  assert.equal(sha256(decoded), shard.decodedSha256)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  const matches = rows.filter(row => row.colId === id)
  assert.equal(matches.length, 1)
  const row = matches[0]
  assert.equal(row.dossier.facetStatuses[update.facet], 'partially-supported')
  assert.ok(row.dossier.sourceIds.includes(update.source.id))
  assert.equal(row.dossier.status, 'incomplete')
  targets.push({
    colId: id,
    prefix,
    path: shard.path,
    recordCount: shard.recordCount,
    compressedSha256: shard.compressedSha256,
    decodedSha256: shard.decodedSha256,
    dossierStatus: row.dossier.status,
    claimCount: row.dossier.claimCount,
    rightsStatus: row.dossier.rightsStatus,
    facetStatuses: row.dossier.facetStatuses,
    sourceIds: row.dossier.sourceIds,
  })
}

output.queueRebuildRequired = false
output.queueProjection = {
  manifestPath: 'data/knowledge/species-evidence-queue/manifest.json',
  manifestSha256: sha256(queueManifestBytes),
  dossierIndexSha256: queueManifest.inputs.dossierIndexSha256,
  acceptedSpecies: queueManifest.counts.acceptedSpecies,
  dossierSpecies: queueManifest.counts.dossierSpecies,
  notIncludedInRuntime: queueManifest.notIncludedInRuntime,
  targets,
}
writeFileSync(OUTPUT_PATH, serialize(output), 'utf8')
console.log(JSON.stringify({
  batchId: output.batchId,
  queueManifestSha256: output.queueProjection.manifestSha256,
  acceptedSpecies: output.queueProjection.acceptedSpecies,
  dossierSpecies: output.queueProjection.dossierSpecies,
  targets: targets.map(({ colId, prefix, facetStatuses, claimCount }) => ({ colId, prefix, claimCount, facetStatuses })),
  notIncludedInRuntime: output.queueProjection.notIncludedInRuntime,
}, null, 2))
