import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync } from 'node:zlib'

const batch = JSON.parse(readFileSync('data/sources/col26.8-bacteria-archaea-dossiers-batch-1.json', 'utf8'))
const checkedAt = batch.checkedAt
const sourceDatasetId = String(batch.externalCrosswalk.sourceDatasetKey)

function makeRecord(t) {
  const col = {
    id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115',
    version: 'COL26.8 pinned 2026-08-20; accepted usage checked 2026-09-24',
    license: batch.catalogue.license, licenseVersion: batch.catalogue.license,
    licenseUrl: batch.catalogue.licenseUrl, rightsHolder: batch.catalogue.rightsHolder,
    licenseAppliesTo: 'COL26.8 nomenclatural usage only', attribution: 'Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk',
    licenseAssessment: 'identity-only', scope: batch.catalogue.scope,
    url: `https://www.checklistbank.org/dataset/316115/taxon/${t.colId}`, stableId: t.colId,
    locator: `Pinned COL26.8 accepted usage ${t.colId}; API fields name, authorship, species rank, accepted status, and sectorDatasetKey 2015`
  }
  const lpsn = {
    id: 'lpsn', title: 'LPSN release-pinned source-record crosswalk for COL26.8',
    version: 'LPSN source dataset 2015, version 2026-07-26; crosswalk retrieved 2026-08-31',
    license: batch.externalCrosswalk.license, licenseVersion: batch.externalCrosswalk.license,
    licenseUrl: batch.externalCrosswalk.licenseUrl, rightsHolder: 'DSMZ / LPSN; see dataset attribution',
    licenseAppliesTo: 'LPSN nomenclatural source data and pinned crosswalk only', attribution: batch.externalCrosswalk.attribution,
    licenseAssessment: 'identity-only', scope: batch.externalCrosswalk.scope,
    url: `https://lpsn.dsmz.de/taxon/${t.lpsnId}`, stableId: t.lpsnId,
    locator: `Release-pinned exact crosswalk row COL ${t.colId} -> LPSN record ${t.lpsnId}; row response SHA-256 ${t.crosswalkResponseSha256}; linked LPSN item record ${t.lpsnId} supplies matching name usage and nomenclatural status`
  }
  const paper = {
    id: 'paper', title: t.paper.title, url: t.paper.url, stableId: t.paper.doi,
    version: `Peer-reviewed species treatment, published ${t.paper.publishedAt}; accessed ${checkedAt}`,
    publishedAt: t.paper.publishedAt, accessedAt: checkedAt,
    locator: 'Taxon-specific species account and sections named in each facet claim; original article and item-level license metadata linked by DOI/PMCID',
    license: t.paper.license, licenseVersion: 'CC BY 4.0', licenseUrl: t.paper.licenseUrl,
    rightsHolder: t.paper.rightsHolder, licenseAssessment: 'item-level-verified', scope: t.paper.licenseScope,
    attribution: `${t.paper.authors} (${t.paper.publishedAt.slice(0, 4)}), ${t.paper.title}, DOI ${t.paper.doi}`
  }
  const facets = Object.fromEntries(Object.entries(t.facets).map(([facet, evidence]) => [facet, evidence.status === 'not-assessed'
    ? { status: 'not-assessed', claims: [], gaps: [evidence.gap] }
    : {
        status: 'partially-supported',
        claims: [{ text: evidence.text, originalLanguage: 'en', translationStatus: 'untranslated', sourceIds: ['paper'], locator: evidence.locator, placeTimeScope: evidence.scope, lifeStatus: 'Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.' }],
        gaps: [evidence.gap]
      }
  ]))

  return {
    colId: t.colId, scientificName: t.name, rank: 'species', sourceDatasetId, checkedAt,
    identity: {
      method: `Exact COL26.8 accepted usage ${t.colId} was checked by API fields for full scientific name ${t.name}, authorship ${t.authorship}, species rank, accepted status and source dataset 2015. The pinned COL26.8 LPSN source-record crosswalk maps this exact COL ID to LPSN record ${t.lpsnId}; the linked LPSN record was checked for matching name usage and nomenclatural status. No name-only or fuzzy join was used.`,
      scope: 'This establishes a nomenclatural usage crosswalk only; it does not establish full biological species-concept equivalence.',
      sourceIds: ['col', 'lpsn']
    },
    lifeStatusScope: {
      wild: 'Biological observations refer only to the wild-origin type strain and observations reported in the cited species description; no field population generalization is made.',
      domesticated: 'No domesticated or captive populations were studied or inferred.',
      fossil: 'Fossil evidence was not assessed; no fossil-presence or fossil-absence claim is made.'
    },
    sources: [col, lpsn, paper],
    systematicSearch: {
      date: checkedAt,
      scope: `Bounded identity check for COL26.8 usage ${t.colId} and its LPSN source record, plus claim extraction from the single cited peer-reviewed species description.`,
      method: 'Queried the pinned ChecklistBank COL26.8 API for the exact COL ID and compared scientific name, authorship, rank, accepted status and source dataset ID. Checked the release-pinned COL-ID-to-LPSN-ID crosswalk and linked LPSN taxon record. Biological statements are restricted to the item-level species account and its cited section/table locators. No systematic multi-database, fossil, life-history, conservation or global-distribution search was performed.',
      queryOrPath: `ChecklistBank dataset 316115 taxon ${t.colId}; ${batch.externalCrosswalk.file}; LPSN record ${t.lpsnId}; DOI ${t.paper.doi}; PMCID ${t.paper.pmcid}`,
      inclusionCriteria: 'Only exact accepted COL26.8 identity fields, release-pinned LPSN crosswalk identity, and statements expressly reported in this species account.',
      exclusionCriteria: 'Name-only joins; general genus or family claims; observations from other species; inferred global range, fossil, conservation or life-history claims; unsearched facets.',
      searcher: 'Evo source audit'
    },
    facets,
    completeness: {
      status: 'incomplete',
      reasons: ['Only one bounded species description was assessed; several biological facets remain not-assessed or locally scoped.', 'The exact nomenclatural crosswalk does not independently establish full biological species-concept equivalence.', 'No independent expert review or comprehensive multi-source search has been completed.']
    },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null }
  }
}

const records = batch.candidates.map(makeRecord)
const jsonl = `${records.map(record => JSON.stringify(record)).join('\n')}\n`
const rawPath = 'data/knowledge/catalogue-dossiers-col26-bacteria-archaea-batch-1.jsonl'
const compressedPath = `${rawPath}.br`
const compressed = brotliCompressSync(Buffer.from(jsonl))
const sha = value => createHash('sha256').update(value).digest('hex')
mkdirSync('data/knowledge', { recursive: true })
writeFileSync(rawPath, jsonl)
writeFileSync(compressedPath, compressed)
writeFileSync(`${rawPath}.manifest.json`, `${JSON.stringify({
  releaseAlias: batch.releaseAlias,
  recordCount: records.length,
  decodedSha256: sha(jsonl),
  compressedSha256: sha(compressed),
  colIds: records.map(record => record.colId)
}, null, 2)}\n`)
process.stdout.write(JSON.stringify({ rawPath, compressedPath, recordCount: records.length, decodedSha256: sha(jsonl), compressedSha256: sha(compressed) }) + '\n')
