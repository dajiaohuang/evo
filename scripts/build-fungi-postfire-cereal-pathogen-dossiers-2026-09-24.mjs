import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/fungi-postfire-cereal-pathogen-dossiers-2026-09-24.json'
const RAW = 'data/knowledge/raw-dossiers/fungi-postfire-cereal-pathogen-dossiers-2026-09-24.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-fungi-postfire-cereal-pathogen-dossiers-2026-09-24.jsonl.br'
const MANIFEST = 'data/knowledge/catalogue-dossiers-fungi-postfire-cereal-pathogen-dossiers-2026-09-24.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const PR_REF = 'origin/pr-357'
const PR_INDEX_PATH = 'data/knowledge/catalogue-dossier-shards.json'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const gitShow = (ref, path) => execFileSync('git', ['show', ref + ':' + path], { maxBuffer: 100 * 1024 * 1024 })
const inputBytes = readFileSync(join(ROOT, INPUT))
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.batchId, 'fungi-postfire-cereal-pathogen-2026-09-24')
assert.equal(input.records.length, 2)
assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(), input.duplicateAudit.mainCommit)
assert.equal(execFileSync('git', ['rev-parse', 'origin/main'], { encoding: 'utf8' }).trim(), input.duplicateAudit.mainCommit)
assert.equal(input.duplicateAudit.openPullRequestsAtAudit.length, 1)
assert.equal(input.duplicateAudit.openPullRequestsAtAudit[0].number, 357)
const expectedPrHead = input.duplicateAudit.openPullRequestsAtAudit[0].headSha
assert.equal(execFileSync('git', ['rev-parse', PR_REF], { encoding: 'utf8' }).trim(), expectedPrHead)
assert.deepEqual(input.duplicateAudit.previousFungiBatchIds, ['4TWCR', '4VCRL'])
assert.deepEqual(input.duplicateAudit.candidateIdsChecked, ['47BC7', '6JSTK'])

const registryManifestBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
assert.equal(registryManifest.releaseDate, '2026-08-20')
const mainIndexBytes = readFileSync(join(ROOT, PR_INDEX_PATH))
const mainIndex = JSON.parse(mainIndexBytes.toString('utf8'))
const prIndexBytes = gitShow(PR_REF, PR_INDEX_PATH)
const prIndex = JSON.parse(prIndexBytes.toString('utf8'))
assert.equal(mainIndex.releaseAlias, 'COL26.8')
assert.equal(prIndex.releaseAlias, 'COL26.8')

function collectIndexedIds(index, readShard, label) {
  const ids = new Set()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readShard(shard.path)
    assert.equal(sha256(compressed), shard.compressedSha256, label + ' compressed digest mismatch: ' + shard.path)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, label + ' decoded digest mismatch: ' + shard.path)
    const lines = decoded.toString('utf8').split('\n')
    let shardCount = 0
    for (const line of lines) {
      if (!line) continue
      const row = JSON.parse(line)
      assert.ok(row.colId, label + ' row missing colId in ' + shard.path)
      assert.ok(!ids.has(row.colId), label + ' index contains duplicate COL ID ' + row.colId)
      ids.add(row.colId)
      count += 1
      shardCount += 1
    }
    assert.equal(shardCount, shard.recordCount, label + ' recordCount mismatch: ' + shard.path)
  }
  assert.equal(count, index.recordCount, label + ' index recordCount mismatch')
  return ids
}
const mainIds = collectIndexedIds(mainIndex, path => readFileSync(join(ROOT, path)), 'main')
const prIds = collectIndexedIds(prIndex, path => gitShow(PR_REF, path), 'PR #357')
for (const id of input.duplicateAudit.previousFungiBatchIds) assert.ok(prIds.has(id), 'PR #357 index should retain previous fungi dossier ' + id)
const records = [...input.records].sort((a, b) => a.colId.localeCompare(b.colId))
assert.equal(new Set(records.map(record => record.colId)).size, records.length)

for (const dossier of records) {
  assert.ok(!mainIds.has(dossier.colId), 'Duplicate existing main dossier: ' + dossier.colId)
  assert.ok(!prIds.has(dossier.colId), 'Duplicate dossier in open PR #357: ' + dossier.colId)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.sourceDatasetId, '2073')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const routeKey = dossier.scientificName.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').slice(0, 2)
  const routes = registryManifest.search.routes[routeKey] ?? []
  const accepted = []
  for (const route of routes) {
    const lines = gunzipSync(readFileSync(join(ROOT, REGISTRY, route))).toString('utf8').split('\n')
    for (const line of lines) {
      if (!line) continue
      const row = JSON.parse(line)
      if (row.id === dossier.colId) accepted.push(row)
    }
  }
  assert.equal(accepted.length, 1, 'Expected one registry usage for ' + dossier.colId)
  assert.equal(accepted[0].scientificName, dossier.scientificName)
  assert.equal(accepted[0].rank, 'species')
  assert.equal(accepted[0].status, 'accepted')
  assert.equal(String(accepted[0].sourceDatasetId), dossier.sourceDatasetId)
  assert.ok(accepted[0].classification.includes('Fungi'), 'Expected Fungi classification for ' + dossier.colId)

  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length)
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), 'Invalid facet status: ' + facet)
    if (assessment.status === 'not-assessed') assert.equal((assessment.claims ?? []).length, 0)
    if (assessment.status === 'partially-supported') assert.ok(assessment.claims?.length && assessment.gaps?.length)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.locator && claim.text && claim.placeTimeScope && claim.lifeStatus, 'Incomplete claim in ' + facet)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        assert.ok(source.license && source.licenseVersion && source.licenseAppliesTo && source.attribution)
      }
    }
  }
}

const rawBytes = Buffer.from(records.map(record => JSON.stringify(record)).join('\n') + '\n', 'utf8')
assert.equal(rawBytes.includes(Buffer.from('\r')), false, 'Canonical JSONL must use LF bytes only')
assert.equal(rawBytes[rawBytes.length - 1], 0x0a, 'Canonical JSONL must end with LF')
writeFileSync(join(ROOT, RAW), rawBytes)
const writtenRawBytes = readFileSync(join(ROOT, RAW))
assert.deepEqual(writtenRawBytes, rawBytes, 'Raw JSONL bytes differ from canonical serialization')
const compressed = brotliCompressSync(writtenRawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressed), writtenRawBytes, 'Brotli round-trip must be byte-for-byte exact')
writeFileSync(join(ROOT, SHARD), compressed)

const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: 'COL26.8',
  recordCount: records.length,
  colIds: records.map(record => record.colId),
  duplicateAudit: input.duplicateAudit,
  files: {
    source: { path: INPUT, sha256: sha256(inputBytes) },
    rawJsonl: { path: RAW, sha256: sha256(writtenRawBytes), bytes: writtenRawBytes.length, lineEnding: 'LF' },
    shard: { path: SHARD, decodedSha256: sha256(writtenRawBytes), compressedSha256: sha256(compressed), decodedBytes: writtenRawBytes.length, compressedBytes: compressed.length },
    registryManifestSha256: sha256(registryManifestBytes),
    mainShardIndexSha256: sha256(mainIndexBytes),
    auditedOpenPrs: [{ number: 357, headSha: expectedPrHead, shardIndexSha256: sha256(prIndexBytes) }]
  }
}
writeFileSync(join(ROOT, MANIFEST), JSON.stringify(manifest, null, 2) + '\n')
console.log(JSON.stringify(manifest, null, 2))
