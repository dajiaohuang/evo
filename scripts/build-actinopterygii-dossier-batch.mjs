import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, constants, gunzipSync } from 'node:zlib'

const root = 'data/catalogue-of-life/releases/2026-08-20/registry'
const rawPath = 'data/sources/actinopterygii-dossier-batch-2026-09-24.json'
const shardPath = 'data/knowledge/catalogue-dossiers-actinopterygii-batch-2026-09-24.jsonl.br'
const checksumPath = 'data/sources/actinopterygii-dossier-batch-2026-09-24.checksums.json'
const sha256 = value => createHash('sha256').update(value).digest('hex')
const manifestBytes = readFileSync(`${root}/manifest.json`)
const manifest = JSON.parse(manifestBytes)
assert.equal(manifest.releaseAlias, 'COL26.8')
assert.equal(manifest.checklistBankDatasetKey, 316115)
assert.equal(manifest.releaseDate, '2026-08-20')

const rawBytes = readFileSync(rawPath)
const batch = JSON.parse(rawBytes)
assert.equal(batch.releaseAlias, 'COL26.8')
assert.ok(batch.records.length > 0 && batch.records.length <= 5)
const expectedFacets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const seen = new Set()
for (const dossier of batch.records) {
  assert.ok(!seen.has(dossier.colId), `Duplicate COL ID ${dossier.colId}`)
  seen.add(dossier.colId)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.sourceDatasetId, '1010')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...expectedFacets].sort())
  const name = dossier.scientificName.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/g, ' ').trim()
  const route = name.slice(0, 2)
  const routePaths = manifest.search.routes[route]
  assert.ok(routePaths?.length, `Missing COL search route ${route}`)
  const matches = routePaths.flatMap(path => gunzipSync(readFileSync(`${root}/${path}`)).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))).filter(record => record.id === dossier.colId)
  assert.equal(matches.length, 1, `Expected one pinned COL record for ${dossier.colId}`)
  const record = matches[0]
  assert.equal(record.scientificName, dossier.scientificName)
  assert.equal(record.rank, 'species')
  assert.equal(record.status, 'accepted')
  assert.equal(String(record.sourceDatasetId), dossier.sourceDatasetId)
  assert.ok(record.classification.includes('Teleostei'))
  const source = dossier.sources.find(item => item.id === 'kai_fricke_2018')
  assert.ok(source)
  assert.equal(source.licenseAssessment, 'item-level-verified')
  assert.equal(source.licenseVersion, 'CC BY 4.0')
  assert.equal(source.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
  assert.equal(source.stableId, 'doi:10.3897/zookeys.740.21729')
  for (const facet of expectedFacets) {
    const section = dossier.facets[facet]
    if (section.status === 'partially-supported') {
      assert.ok(section.claims?.length, `${dossier.colId} ${facet} needs claims`)
      assert.ok(section.gaps?.length, `${dossier.colId} ${facet} needs gaps`)
      for (const claim of section.claims) assert.ok(claim.sourceIds.includes(source.id))
    } else assert.equal(section.status, 'not-assessed')
  }
}

const records = [...batch.records].sort((a, b) => a.colId.localeCompare(b.colId, 'en'))
const decoded = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`)
const compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } })
writeFileSync(shardPath, compressed)
writeFileSync(checksumPath, `${JSON.stringify({
  batchId: batch.batchId,
  releaseAlias: manifest.releaseAlias,
  registryManifest: { path: `${root}/manifest.json`, sha256: sha256(manifestBytes) },
  rawInput: { path: rawPath, sha256: sha256(rawBytes) },
  shard: { path: shardPath, records: records.length, ids: records.map(record => record.colId), decodedBytes: decoded.length, decodedSha256: sha256(decoded), compressedBytes: compressed.length, compressedSha256: sha256(compressed) },
}, null, 2)}\n`)
process.stdout.write(`${JSON.stringify({ shardPath, checksumPath, ids: records.map(record => record.colId), decodedSha256: sha256(decoded), compressedSha256: sha256(compressed) })}\n`)
