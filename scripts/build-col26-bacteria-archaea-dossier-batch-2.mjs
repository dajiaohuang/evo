import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, brotliDecompressSync, constants } from 'node:zlib'

const batch = JSON.parse(readFileSync('data/sources/col26.8-bacteria-archaea-dossiers-batch-2.json', 'utf8'))
const hash = bytes => createHash('sha256').update(bytes).digest('hex')

for (const candidate of batch.candidates) {
  const morphology = candidate.claims?.morphology
  if (morphology && (!morphology.text || !morphology.locator || !/\b(Gram|motile|cells|colony|colonies|spore|hyphae|filament)/i.test(morphology.text))) {
    throw new Error(`Morphology claim needs a concrete observation and locator: ${candidate.colId}`)
  }
}

function makeRecord(t) {
  const sources = [
    { id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115', version: 'COL26.8 pinned 2026-08-20; accepted usage checked 2026-09-24', license: batch.catalogue.license, licenseVersion: batch.catalogue.license, licenseUrl: batch.catalogue.licenseUrl, rightsHolder: batch.catalogue.rightsHolder, licenseAppliesTo: 'COL26.8 nomenclatural usage only', attribution: 'Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk', licenseAssessment: 'identity-only', scope: batch.catalogue.scope, url: `https://www.checklistbank.org/dataset/316115/taxon/${t.colId}`, stableId: t.colId, locator: `Pinned COL26.8 API usage ${t.colId}: exact name, authorship, species rank, accepted status and sourceDatasetId 2015` },
    { id: 'lpsn', title: 'LPSN release-pinned COL source-record crosswalk', version: 'LPSN source dataset 2015, version 2026-07-26; crosswalk retrieved 2026-08-31', license: batch.externalCrosswalk.license, licenseVersion: batch.externalCrosswalk.license, licenseUrl: batch.externalCrosswalk.licenseUrl, rightsHolder: 'DSMZ / LPSN; see dataset attribution', licenseAppliesTo: 'Nomenclatural source data and pinned crosswalk only', attribution: batch.externalCrosswalk.attribution, licenseAssessment: 'identity-only', scope: batch.externalCrosswalk.scope, url: `https://lpsn.dsmz.de/taxon/${t.lpsnId}`, stableId: t.lpsnId, locator: `Exact release-pinned row COL ${t.colId} -> LPSN ${t.lpsnId}; row response SHA-256 ${t.crosswalkResponseSha256}` },
    { id: 'paper', title: t.paper.title, url: t.paper.url, stableId: t.paper.doi, version: `Peer-reviewed species description published ${t.paper.publishedAt}; accessed ${batch.checkedAt}`, publishedAt: t.paper.publishedAt, accessedAt: batch.checkedAt, locator: 'Taxon-specific species account and cited item sections; linked journal/PMC article and item-level open-access metadata', license: t.paper.license, licenseVersion: 'CC BY 4.0', licenseUrl: t.paper.licenseUrl, rightsHolder: t.paper.rightsHolder, licenseAssessment: 'item-level-verified', scope: t.paper.licenseScope, attribution: `${t.paper.authors} (${t.paper.publishedAt.slice(0, 4)}), ${t.paper.title}, DOI ${t.paper.doi}` }
  ]
  const facets = {}
  for (const [key, claim] of Object.entries(t.claims)) facets[key] = { status: 'partially-supported', claims: [{ text: claim.text, originalLanguage: 'en', translationStatus: 'untranslated', sourceIds: ['paper'], locator: claim.locator, placeTimeScope: claim.scope, lifeStatus: 'Wild-origin cultured type strain or isolates; claim limited to the stated observations.' }], gaps: ['Evidence is limited to the named strain(s), sites, methods and conditions in the cited paper; population-wide generalization was not assessed.'] }
  for (const [key, gap] of Object.entries({ lifeHistory: 'No systematic life-history study/search was performed; reproductive, developmental, behavioral and lifespan claims are not assessed.', fossil: 'No fossil or paleontological search was performed; no fossil presence or absence is claimed.', conservation: 'No conservation assessment or current formal Red List record was assessed.' })) facets[key] = { status: 'not-assessed', claims: [], gaps: [gap] }
  return {
    colId: t.colId, scientificName: t.scientificName ?? t.name, rank: 'species', sourceDatasetId: t.sourceDatasetId, checkedAt: batch.checkedAt,
    identity: { method: `Exact COL26.8 usage ${t.colId} checked for full name ${t.scientificName ?? t.name}, authorship ${t.authorship}, species rank, accepted status and sourceDatasetId ${t.sourceDatasetId}; pinned LPSN crosswalk maps this COL ID to record ${t.lpsnId}.`, scope: 'Nomenclatural usage crosswalk only; no complete biological species-concept equivalence inferred.', sourceIds: ['col', 'lpsn'] },
    lifeStatusScope: { wild: 'Biological statements refer only to wild-origin cultured type strain(s) and observations reported in the cited paper.', domesticated: 'No domesticated or captive populations were studied or inferred.', fossil: 'Fossil evidence was not assessed.' },
    sources,
    systematicSearch: { date: batch.checkedAt, scope: `Bounded COL26.8 identity and LPSN crosswalk check for ${t.colId}, plus evidence extraction from one peer-reviewed species description.`, method: 'Compared exact COL ID, scientific name, authorship, rank, accepted status and sourceDatasetId; checked the release-pinned COL-to-LPSN row; extracted only item-level species-account observations. No systematic multi-database, life-history, fossil, conservation or global-distribution search was performed.', queryOrPath: `ChecklistBank dataset 316115 usage ${t.colId}; LPSN record ${t.lpsnId}; DOI ${t.paper.doi}; ${t.paper.pmcid}`, inclusionCriteria: 'Exact accepted COL identity, exact pinned crosswalk and claims explicitly reported in the cited species treatment.', exclusionCriteria: 'Name-only joins, unbounded genus claims, unsupported ecological function, global range, life history, fossils and conservation.', searcher: 'Evo source audit' },
    facets,
    completeness: { status: 'incomplete', reasons: ['Only one peer-reviewed species treatment was assessed per record.', 'Several facets remain not assessed and supported claims are limited to specified strains, samples, sites and methods.', 'Independent expert review and comprehensive multi-source review are incomplete.'] },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null }
  }
}

const records = batch.candidates.map(makeRecord)
const jsonl = `${records.map(record => JSON.stringify(record)).join('\n')}\n`
const rawBytes = Buffer.from(jsonl, 'utf8')
const compressed = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } })
if (!brotliDecompressSync(compressed).equals(rawBytes)) throw new Error('Brotli round-trip mismatch')
const rawPath = 'data/knowledge/catalogue-dossiers-col26-bacteria-archaea-batch-2.jsonl'
const compressedPath = `${rawPath}.br`
const manifestPath = `${rawPath}.manifest.json`
mkdirSync('data/knowledge', { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(compressedPath, compressed)
writeFileSync(manifestPath, `${JSON.stringify({ releaseAlias: batch.releaseAlias, recordCount: records.length, decodedSha256: hash(rawBytes), compressedSha256: hash(compressed), colIds: records.map(r => r.colId) }, null, 2)}\n`, 'utf8')
process.stdout.write(`${JSON.stringify({ rawPath, compressedPath, recordCount: records.length, decodedSha256: hash(rawBytes), compressedSha256: hash(compressed) })}\n`)
