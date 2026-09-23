import { readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, constants } from 'node:zlib'

const input = 'data/knowledge/catalogue-dossiers-aves-north-pacific-batch.json'
const jsonlPath = 'data/knowledge/catalogue-dossiers-aves-north-pacific.jsonl'
const compressedPath = `${jsonlPath}.br`
const expected = new Map([
  ['4GK9K', { name: 'Phoebastria immutabilis (Rothschild, 1893)', dataset: '2144' }],
  ['4GK9M', { name: 'Phoebastria nigripes (Audubon, 1839)', dataset: '2144' }],
])
const requiredFacets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']

const records = JSON.parse(readFileSync(input, 'utf8'))
if (records.length !== expected.size) throw new Error(`Expected ${expected.size} dossier records`)
const seen = new Set()
for (const record of records) {
  const identity = expected.get(record.colId)
  if (!identity || seen.has(record.colId)) throw new Error(`Unexpected or duplicate COL ID: ${record.colId}`)
  seen.add(record.colId)
  if (record.scientificName !== identity.name || record.rank !== 'species' || record.sourceDatasetId !== identity.dataset) {
    throw new Error(`COL26.8 identity mismatch for ${record.colId}`)
  }
  if (record.completeness?.status !== 'incomplete' || record.expertReview?.status !== 'not-reviewed') {
    throw new Error(`${record.colId} must remain incomplete and not reviewed`)
  }
  if (requiredFacets.some((facet) => !record.facets?.[facet]?.status)) {
    throw new Error(`${record.colId} is missing a facet status`)
  }
  const sourceIds = new Set(record.sources.map((source) => source.id))
  if (record.identity.sourceIds.some((id) => !sourceIds.has(id))) {
    throw new Error(`${record.colId} identity references an absent source`)
  }
  for (const facet of requiredFacets) {
    for (const claim of record.facets[facet].claims ?? []) {
      if (claim.sourceIds.some((id) => !sourceIds.has(id))) throw new Error(`${record.colId}/${facet} references an absent source`)
    }
  }
}

const jsonl = `${records.map((record) => JSON.stringify(record)).join('\n')}\n`
writeFileSync(jsonlPath, jsonl)
writeFileSync(compressedPath, brotliCompressSync(Buffer.from(jsonl), {
  params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
}))
console.log(`Wrote ${records.length} incomplete dossiers to ${jsonlPath} and ${compressedPath}`)
