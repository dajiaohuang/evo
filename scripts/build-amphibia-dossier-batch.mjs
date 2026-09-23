import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT_PATH = join(ROOT, 'data', 'sources', 'amphibia-dossier-batch-2026-09-24.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const OUTPUT_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-amphibia-batch-2026-09-24.jsonl.br')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()

function readAcceptedRecord(manifest, dossier) {
  const normalizedName = normalize(dossier.scientificName)
  const firstTwo = normalizedName.slice(0, 2)
  const routeFiles = manifest.search.routes[firstTwo] ?? []
  assert.ok(routeFiles.length > 0, `No pinned registry search route for ${dossier.scientificName}`)
  const matches = []
  for (const relativePath of routeFiles) {
    const compressed = readFileSync(join(REGISTRY_ROOT, relativePath))
    for (const line of gunzipSync(compressed).toString('utf8').split('\n')) {
      if (!line) continue
      const record = JSON.parse(line)
      if (record.id === dossier.colId) matches.push(record)
    }
  }
  assert.equal(matches.length, 1, `Expected one COL26.8 registry row for ${dossier.colId}`)
  const record = matches[0]
  assert.equal(record.scientificName, dossier.scientificName, `COL scientific-name mismatch: ${dossier.colId}`)
  assert.equal(record.rank, dossier.rank, `COL rank mismatch: ${dossier.colId}`)
  assert.equal(record.status, 'accepted', `COL status is not accepted: ${dossier.colId}`)
  assert.equal(String(record.sourceDatasetId), String(dossier.sourceDatasetId), `COL sourceDatasetId mismatch: ${dossier.colId}`)
  assert.ok(record.classification?.includes('Amphibia'), `COL record is outside Amphibia: ${dossier.colId}`)
  return record
}

function validateDossier(dossier, registryManifest) {
  assert.equal(dossier.rank, 'species', `Non-species dossier: ${dossier.colId}`)
  assert.equal(dossier.completeness?.status, 'incomplete', `Dossier must remain incomplete: ${dossier.colId}`)
  assert.equal(dossier.expertReview?.status, 'not-reviewed', `Do not invent review state: ${dossier.colId}`)
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort(), `Dossier must carry all seven facets: ${dossier.colId}`)
  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length, `Duplicate sources: ${dossier.colId}`)
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid status ${dossier.colId}/${facet}`)
    if (assessment.status === 'partially-supported') {
      assert.ok(assessment.claims?.length && assessment.gaps?.length, `Partial facet needs claims and gaps: ${dossier.colId}/${facet}`)
    }
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim scope/locator missing: ${dossier.colId}/${facet}`)
      assert.equal(claim.translationStatus, 'untranslated', `This batch does not contain reviewed translations: ${dossier.colId}/${facet}`)
      assert.ok(Array.isArray(claim.sourceIds) && claim.sourceIds.length > 0 && claim.sourceIds.every(id => sourceIds.has(id)), `Claim source missing: ${dossier.colId}/${facet}`)
      for (const sourceId of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === sourceId)
        assert.equal(source.licenseAssessment, 'item-level-verified', `Claim source license is not item-verified: ${dossier.colId}/${sourceId}`)
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], `Claim source missing ${key}: ${dossier.colId}/${sourceId}`)
        assert.match(source.licenseUrl ?? '', /^https:\/\//u, `Claim source license URL missing: ${dossier.colId}/${sourceId}`)
        assert.ok(source.publishedAt === 'undated' || /^\d{4}-\d{2}-\d{2}$/u.test(source.publishedAt ?? ''), `Invalid publication date: ${dossier.colId}/${sourceId}`)
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u, `Source access date missing: ${dossier.colId}/${sourceId}`)
      }
    }
  }
  assert.equal(registryManifest.releaseAlias, 'COL26.8')
  assert.equal(registryManifest.checklistBankDatasetKey, 316115)
}

const input = JSON.parse(readFileSync(INPUT_PATH, 'utf8'))
const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.ok(Array.isArray(input.records) && input.records.length > 0 && input.records.length <= 5, 'Batch must contain one to five dossiers')

const sortedDossiers = [...input.records].sort((left, right) => left.colId < right.colId ? -1 : left.colId > right.colId ? 1 : 0)
assert.equal(new Set(sortedDossiers.map(dossier => dossier.colId)).size, sortedDossiers.length, 'Duplicate COL usage IDs')
for (const dossier of sortedDossiers) {
  readAcceptedRecord(registryManifest, dossier)
  validateDossier(dossier, registryManifest)
}

const decodedBytes = Buffer.from(`${sortedDossiers.map(dossier => JSON.stringify(dossier)).join('\n')}\n`, 'utf8')
const compressedBytes = brotliCompressSync(decodedBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
mkdirSync(dirname(OUTPUT_PATH), { recursive: true })
writeFileSync(OUTPUT_PATH, compressedBytes)
console.log(JSON.stringify({
  input: INPUT_PATH.replace(`${ROOT}\\`, ''),
  registryManifestSha256: sha256(registryManifestBytes),
  count: sortedDossiers.length,
  colIds: sortedDossiers.map(dossier => dossier.colId),
  output: OUTPUT_PATH.replace(`${ROOT}\\`, ''),
  decodedBytes: decodedBytes.length,
  compressedBytes: compressedBytes.length,
  decodedSha256: sha256(decodedBytes),
  compressedSha256: sha256(compressedBytes),
}, null, 2))
