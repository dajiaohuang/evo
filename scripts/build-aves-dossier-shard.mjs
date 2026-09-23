import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, constants as zlibConstants } from 'node:zlib'

const inputPath = new URL('../data/knowledge/catalogue-dossiers-aves-batch-1.json', import.meta.url)
const rawPath = new URL('../data/knowledge/catalogue-dossiers-aves-batch-1.jsonl', import.meta.url)
const shardPath = new URL('../data/knowledge/catalogue-dossiers-aves-batch-1.jsonl.br', import.meta.url)
const facets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const statuses = new Set(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'])
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')

const records = JSON.parse(readFileSync(inputPath, 'utf8'))
assert.ok(Array.isArray(records) && records.length > 0 && records.length <= 5, 'Expected one to five raw dossier records')
records.sort((a, b) => a.colId.localeCompare(b.colId))
const ids = new Set()
for (const record of records) {
  assert.ok(record.colId && !ids.has(record.colId), `Missing or duplicate COL ID: ${record.colId}`)
  ids.add(record.colId)
  assert.equal(record.rank, 'species', `Non-species record: ${record.colId}`)
  assert.equal(record.sourceDatasetId, '2144', `Unexpected source dataset: ${record.colId}`)
  assert.ok(record.identity?.method && record.identity?.scope, `Identity provenance required: ${record.colId}`)
  assert.ok(record.lifeStatusScope?.wild && record.lifeStatusScope?.domesticated && record.lifeStatusScope?.fossil, `Life-status scope required: ${record.colId}`)
  assert.deepEqual(Object.keys(record.facets).sort(), [...facets].sort(), `All seven facets required: ${record.colId}`)
  const sourceIds = new Set(record.sources.map(source => source.id))
  assert.equal(sourceIds.size, record.sources.length, `Duplicate source ID: ${record.colId}`)
  for (const source of record.sources) {
    assert.match(source.url, /^https:\/\//, `HTTPS source URL required: ${record.colId}/${source.id}`)
    assert.ok(source.title && source.version && source.locator && source.license && source.scope, `Source provenance incomplete: ${record.colId}/${source.id}`)
  }
  for (const [facet, assessment] of Object.entries(record.facets)) {
    assert.ok(statuses.has(assessment.status), `Invalid facet status: ${record.colId}/${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus && claim.translationStatus, `Claim scope/translation incomplete: ${record.colId}/${facet}`)
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(sourceId => sourceIds.has(sourceId)), `Unknown source reference: ${record.colId}/${facet}`)
    }
    if (assessment.status === 'partially-supported') assert.ok(assessment.claims?.length && assessment.gaps?.length, `Partial facet needs evidence and gaps: ${record.colId}/${facet}`)
    if (assessment.status === 'not-assessed') assert.ok(!(assessment.claims?.length), `Unassessed facet cannot carry claims: ${record.colId}/${facet}`)
  }
  assert.equal(record.completeness?.status, 'incomplete', `This batch does not assert dossier completeness: ${record.colId}`)
  assert.equal(record.expertReview?.status, 'not-reviewed', `This batch does not assert external review: ${record.colId}`)
}

const decoded = Buffer.from(records.map(record => JSON.stringify(record)).join('\n') + '\n', 'utf8')
const compressed = brotliCompressSync(decoded, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  },
})
writeFileSync(rawPath, decoded)
writeFileSync(shardPath, compressed)
process.stdout.write(`${JSON.stringify({
  path: 'data/knowledge/catalogue-dossiers-aves-batch-1.jsonl.br',
  recordCount: records.length,
  compressedSha256: sha256(compressed),
  decodedSha256: sha256(decoded),
})}\n`)
