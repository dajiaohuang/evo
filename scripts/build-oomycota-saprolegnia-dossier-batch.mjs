import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, constants as zlibConstants, gunzipSync, brotliDecompressSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/oomycota-saprolegnia-parasitica-2026-09-24.json'
const OUTPUT = 'data/knowledge/catalogue-dossiers-oomycota-saprolegnia-parasitica-2026-09-24.jsonl.br'
const MANIFEST = 'data/knowledge/catalogue-dossiers-oomycota-saprolegnia-parasitica-2026-09-24.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const CROSSWALK = 'data/sources/oomycota-species-fungorum-crosswalk-col26.8.json.gz'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const inputBytes = readFileSync(join(ROOT, INPUT))
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.records.length, 1)
const registryManifestBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
assert.equal(registryManifest.releaseDate, '2026-08-20')
const crosswalkBytes = readFileSync(join(ROOT, CROSSWALK))
const crosswalk = JSON.parse(gunzipSync(crosswalkBytes).toString('utf8'))
assert.equal(crosswalk.source.catalogueRelease, 'COL26.8')
assert.equal(crosswalk.source.sourceDatasetKey, '2073')
assert.equal(crosswalk.source.checklistBankDatasetKey, 316115)
const shardIndex = readJson('data/knowledge/catalogue-dossier-shards.json')
const records = [...input.records].sort((a, b) => a.colId.localeCompare(b.colId))
assert.equal(new Set(records.map(record => record.colId)).size, records.length)

const priorIds = new Set()
for (const shard of shardIndex.shards) {
  const bytes = readFileSync(join(ROOT, shard.path))
  const decoded = brotliDecompressSync(bytes).toString('utf8')
  assert.equal(sha256(Buffer.from(decoded)), shard.decodedSha256, `Existing shard digest mismatch: ${shard.path}`)
  for (const line of decoded.split('\n')) if (line) priorIds.add(JSON.parse(line).colId)
}

for (const dossier of records) {
  assert.ok(!priorIds.has(dossier.colId), `Duplicate existing dossier: ${dossier.colId}`)
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
    for (const line of lines) if (line) {
      const row = JSON.parse(line)
      if (row.id === dossier.colId) accepted.push(row)
    }
  }
  assert.equal(accepted.length, 1, `Expected one registry usage for ${dossier.colId}`)
  assert.equal(accepted[0].scientificName, dossier.scientificName)
  assert.equal(accepted[0].rank, dossier.rank)
  assert.equal(accepted[0].status, 'accepted')
  assert.equal(String(accepted[0].sourceDatasetId), dossier.sourceDatasetId)
  assert.ok(accepted[0].classification.includes('Oomycota'))
  const crosswalkRows = crosswalk.records.filter(row => row.colId === dossier.colId)
  assert.equal(crosswalkRows.length, 1)
  assert.equal(crosswalkRows[0].scientificName, dossier.scientificName)
  assert.equal(crosswalkRows[0].sourceDatasetId, dossier.sourceDatasetId)
  assert.equal(crosswalkRows[0].indexFungorumId, '273605')
  assert.equal(crosswalkRows[0].indexFungorumName, 'Saprolegnia parasitica')
  assert.equal(crosswalkRows[0].rank, dossier.rank)
  assert.equal(crosswalkRows[0].status, 'accepted')
  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length)
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status))
    if (assessment.status === 'partially-supported') assert.ok(assessment.claims?.length && assessment.gaps?.length)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.locator && claim.text && claim.placeTimeScope && claim.lifeStatus)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        assert.equal(source.licenseVersion, 'CC BY 4.0')
        assert.equal(source.licenseAppliesTo.startsWith('Article text under CC BY 4.0'), true)
      }
    }
  }
}

const decoded = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compressed = brotliCompressSync(decoded, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
writeFileSync(join(ROOT, OUTPUT), compressed)
const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: 'COL26.8',
  recordCount: records.length,
  colIds: records.map(record => record.colId),
  files: {
    source: { path: INPUT, sha256: sha256(inputBytes) },
    shard: { path: OUTPUT, decodedSha256: sha256(decoded), compressedSha256: sha256(compressed), decodedBytes: decoded.length, compressedBytes: compressed.length },
    registryManifestSha256: sha256(registryManifestBytes),
    crosswalkSha256: sha256(crosswalkBytes),
  },
}
writeFileSync(join(ROOT, MANIFEST), `${JSON.stringify(manifest, null, 2)}\n`)
console.log(JSON.stringify(manifest, null, 2))
