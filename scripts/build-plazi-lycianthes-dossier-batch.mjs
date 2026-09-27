import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const BATCH_ID = 'plazi-lycianthes-dossier-batch-2026-09-27'
const INPUT = 'data/sources/plazi-lycianthes-dossier-batch-2026-09-27.json'
const EXPECTED_INPUT_SHA256 = '914572347021c9f2857e5c03249d0d1254a68254255978e69d802bce21ef4511'
const PROJECTION = 'data/sources/plazi-descriptions.jsonl.gz'
const LEDGER = 'data/sources/plazi-descriptions-import-ledger.json'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const INDEX = 'data/knowledge/catalogue-dossier-shards.json'
const MANIFEST = 'data/knowledge/catalogue-dossiers-plazi-lycianthes-batch-2026-09-27.batch-manifest.json'
const RAW = 'data/knowledge/raw-dossiers/plazi-lycianthes-batch-2026-09-27.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-plazi-lycianthes-batch-2026-09-27.jsonl.br'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const registryCache = new Map()

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Reviewed Plazi dossier input changed')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, BATCH_ID)
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.records.length, 3)
assert.equal(input.source.archiveZipAvailableInCheckout, false)
assert.equal(input.article.licenseAssessment, 'unknown')

function registryRows(path) {
  if (!registryCache.has(path)) {
    const bytes = gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path)))
    registryCache.set(path, bytes.toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse))
  }
  return registryCache.get(path)
}

const registryManifestBytes = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
const registry = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registry.releaseAlias, input.releaseAlias)
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.equal(registry.releaseDate, '2026-08-20')

function findUsage(item) {
  const route = normalize(item.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(registryRows).filter(row => row.id === item.colId)
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 usage for ${item.colId}`)
  const usage = matches[0]
  assert.equal(usage.status, 'accepted', `COL usage is not accepted for ${item.colId}`)
  assert.equal(usage.rank, 'species', `COL usage is not species rank for ${item.colId}`)
  assert.equal(normalize(usage.scientificName).startsWith(normalize(item.scientificName)), true, `COL name changed for ${item.colId}`)
  assert.equal(String(usage.sourceDatasetId), '1141', `COL source dataset changed for ${item.colId}`)
  return usage
}

function attachClassification(registryRecord) {
  const chain = []
  let id = registryRecord.id
  while (id) {
    const route = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of registry.hierarchy.nodes.routes[route] ?? []) {
      node = registryRows(path).find(row => row.id === id)
      if (node) break
    }
    assert.ok(node, `Missing pinned COL26.8 node ${id}`)
    assert.equal(node.status, 'accepted', `Unaccepted parent node ${id}`)
    chain.unshift(node)
    id = node.parentId
  }
  return chain.map(({ id: nodeId, scientificName, authorship, rank, status, sourceDatasetId }) => ({
    id: nodeId, scientificName, authorship, rank, status, sourceDatasetId,
  }))
}

const ledgerBytes = readFileSync(join(ROOT, LEDGER))
const sourceLedger = JSON.parse(ledgerBytes.toString('utf8'))
const projectionBytes = readFileSync(join(ROOT, PROJECTION))
assert.equal(sha256(projectionBytes), input.source.projectionSha256, 'Pinned Plazi projection changed')
assert.equal(sha256(projectionBytes), sourceLedger.outputSha256, 'Plazi projection no longer matches its import ledger')
assert.equal(sourceLedger.inputs[input.source.archiveInputKey], input.source.archiveInputSha256)
assert.equal(sourceLedger.license, 'CC0 1.0')
const projection = gunzipSync(projectionBytes).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)

function findSourceRecord(item) {
  const matches = projection.filter(record => record.colId === item.colId)
  assert.equal(matches.length, 1, `Expected one exact Plazi taxon projection for ${item.colId}`)
  const record = matches[0]
  assert.equal(normalize(record.scientificName).startsWith(normalize(item.scientificName)), true, `Plazi name changed for ${item.colId}`)
  assert.equal(record.descriptions.length, 8, `Expected eight retained rows for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.wfoId === item.wfoId), `A Plazi row has a different WFO crosswalk for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.sourceColUsageId === item.colId), `A Plazi row has a different COL usage for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.archiveSha256 === input.source.archiveSha256), `A Plazi row has a different archive hash for ${item.colId}`)
  return record
}

function sourceList(item, usage) {
  const articleId = 'dean_poore_kang_2020'
  return [
    {
      id: 'col',
      title: `Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset ${usage.sourceDatasetId}`,
      url: `https://www.checklistbank.org/dataset/316115/taxon/${item.colId}`,
      stableId: `col:${item.colId}@COL26.8`,
      version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
      publishedAt: '2026-08-20',
      accessedAt: input.checkedAt,
      locator: `Accepted species usage ${item.colId}; exact name, authorship, rank, status, sourceDatasetId, and complete accepted parent chain.`,
      license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
      licenseAssessment: 'identity-only',
      rightsHolder: 'Catalogue of Life Foundation',
      licenseVersion: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
      attribution: `Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ${item.colId}. https://doi.org/10.48580/dgywk.`,
      scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
    },
    {
      id: 'wfo_2026_06',
      title: 'World Flora Online Plant List 2026-06 identity crosswalk',
      url: `https://www.worldfloraonline.org/taxon/${item.wfoId}`,
      stableId: item.wfoId,
      version: 'World Flora Online Plant List crosswalk 2026-06',
      accessedAt: input.checkedAt,
      locator: `The pinned Plazi projection retains ${item.wfoId}; only this identifier and exact accepted-name link are used for identity cross-checking.`,
      license: 'Identifier and nomenclatural identity only; no descriptive text reused or license asserted.',
      licenseAssessment: 'identity-only',
      scope: 'Exact accepted-name identity cross-check only.',
    },
    {
      id: 'plazi_lycianthes_archive',
      title: 'Plazi TreatmentBank Lycianthes extracted description records',
      url: 'https://treatment.plazi.org/',
      stableId: `PlaziArchiveSha256:${input.source.archiveSha256}`,
      version: `Plazi import retrieved 2026-09-08; projected archive SHA-256 ${input.source.archiveSha256}`,
      accessedAt: input.checkedAt,
      locator: `TreatmentBank description-extension rows 2-25 across three exact COL taxon usages. The source ZIP is absent from this checkout; its EML was not independently rechecked for this dossier batch.`,
      license: input.source.license,
      licenseVersion: 'CC0 1.0',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      licenseAppliesTo: 'Extracted Plazi archive description records only; this does not apply to the cited journal article, PDF, or figures.',
      licenseAssessment: input.source.licenseAssessment,
      attribution: 'Plazi TreatmentBank, selected Lycianthes treatment records; archive declaration and import hashes are retained in data/sources/plazi-descriptions-import-ledger.json.',
      scope: 'Article-scoped extracted treatment records; not a complete species dossier.',
    },
    {
      id: articleId,
      title: input.article.title,
      url: input.article.url,
      stableId: `doi:${input.article.doi}`,
      version: 'Phytotaxa 471 (2): 113-126 (2020)',
      publishedAt: input.article.publishedAt,
      locator: `Taxon-specific discussion and collection summaries; article pages vary by COL taxon. Each claim gives its page range and Plazi row locator.`,
      license: input.article.license,
      licenseAssessment: input.article.licenseAssessment,
      licenseAppliesTo: 'Bibliographic citation only; no article PDF, article prose, or figures are redistributed.',
      attribution: input.article.citation,
      scope: 'Cited taxonomic article; item-level reuse rights remain unknown.',
    },
  ]
}

function makeDossier(item) {
  const usage = findUsage(item)
  const sourceRecord = findSourceRecord(item)
  const sources = sourceList(item, usage)
  const sourceIds = new Set(sources.map(source => source.id))
  const claims = {}
  for (const [facet, authoredClaim] of Object.entries(item.claims)) {
    assert.ok(['morphology', 'lifeHistory', 'ecology', 'distribution'].includes(facet))
    const rowMatches = sourceRecord.descriptions.filter(row => row.rowNumber === authoredClaim.rowNumber)
    assert.equal(rowMatches.length, 1, `Expected one Plazi row ${authoredClaim.rowNumber} for ${item.colId}`)
    const row = rowMatches[0]
    assert.equal(row.sourceType, authoredClaim.sourceType, `Plazi source type changed at ${item.colId} row ${row.rowNumber}`)
    assert.equal(row.sourceColUsageId, item.colId, `Plazi COL identity changed at ${item.colId} row ${row.rowNumber}`)
    assert.equal(row.wfoId, item.wfoId, `Plazi WFO identity changed at ${item.colId} row ${row.rowNumber}`)
    assert.equal(row.treatmentUrl, `https://treatment.plazi.org/id/${item.treatmentId}`)
    assert.equal(row.archiveSha256, input.source.archiveSha256)
    assert.equal(row.referenceDoi, input.article.doi)
    assert.equal(row.sourceScientificName, item.sourceName)
    assert.ok(row.text.trim().length > 0)
    const locator = `Plazi description-extension row ${row.rowNumber}; original sourceType=${row.sourceType}; treatment ${row.treatmentUrl}; ${input.article.citation} pages ${row.referencePageStart}-${row.referencePageEnd}; archive SHA-256 ${row.archiveSha256}.`
    const claim = {
      text: authoredClaim.text,
      originalLanguage: 'en',
      translationStatus: 'untranslated',
      sourceIds: ['dean_poore_kang_2020', 'plazi_lycianthes_archive'],
      locator,
      placeTimeScope: authoredClaim.placeTimeScope,
      lifeStatus: authoredClaim.lifeStatus,
    }
    assert.ok(claim.sourceIds.every(id => sourceIds.has(id)))
    claims[facet] = claim
  }

  const facets = Object.fromEntries(FACETS.map(facet => {
    const claim = claims[facet]
    const gap = input.facetGaps[facet]
    assert.ok(gap, `Missing explicit facet boundary for ${facet}`)
    return [facet, claim
      ? { status: 'partially-supported', claims: [claim], gaps: [gap] }
      : { status: 'not-assessed', claims: [], gaps: [gap] }]
  }))
  assert.equal(Object.keys(claims).length, 4)
  assert.equal(Object.values(facets).filter(facet => facet.status === 'not-assessed').length, 3)

  const dossier = {
    colId: item.colId,
    scientificName: usage.scientificName,
    authorship: usage.authorship,
    rank: usage.rank,
    sourceDatasetId: String(usage.sourceDatasetId),
    checkedAt: input.checkedAt,
    classificationPath: attachClassification(usage),
    identity: {
      method: 'Matched exact Plazi sourceColUsageId to one accepted COL26.8 species usage, cross-checked exact taxon name/authorship and the pinned WFO 2026-06 identifier; no fuzzy name match was used.',
      scope: `Accepted COL26.8 identity ${item.colId}; source article treatment ${item.treatmentId}; this routing does not claim full scientific-concept equivalence across all literature.`,
      sourceIds: ['col', 'wfo_2026_06', 'plazi_lycianthes_archive', 'dean_poore_kang_2020'],
    },
    lifeStatusScope: {
      wild: 'Claims are bounded to the field-collection and forest-habitat material reported in the cited treatment; the status and coverage of all populations are not assessed.',
      domesticated: 'Cultivated, domesticated, and escaped occurrences were not assessed by this source slice.',
      fossil: 'Fossil occurrence and geological age were not assessed by this source slice.',
    },
    sources,
    facets,
    completeness: {
      status: 'incomplete',
      reasons: [
        'One 2020 taxonomic treatment supports only bounded comparative morphology, specimen-month, habitat, and reported-locality statements.',
        'The other three facets remain not assessed, and all four partially supported facets retain explicit scope gaps.',
        'The article-level text reuse license is unknown; the archive-level CC0 declaration applies only to extracted Plazi records.',
        'No independent external expert review has been completed.',
      ],
    },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
  }
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.equal(dossier.sources.find(source => source.id === 'plazi_lycianthes_archive')?.licenseAssessment, 'aggregate-declaration-only')
  assert.equal(dossier.sources.find(source => source.id === 'dean_poore_kang_2020')?.licenseAssessment, 'unknown')
  assert.ok(Object.values(claims).every(claim => claim.sourceIds.includes('dean_poore_kang_2020')))
  return dossier
}

const indexBytes = readFileSync(join(ROOT, INDEX))
const index = JSON.parse(indexBytes.toString('utf8'))
const current = readCatalogueDossiers()
assert.equal(index.releaseAlias, input.releaseAlias)
assert.equal(current.records.length, index.recordCount)
const existingShard = index.shards.find(shard => shard.path === SHARD)
const batchIds = new Set(input.records.map(item => item.colId))
assert.equal(batchIds.size, input.records.length)
const duplicateExistingIds = current.records.filter(record => batchIds.has(record.colId))
assert.equal(duplicateExistingIds.length, existingShard ? 3 : 0, 'Candidate dossiers already exist outside this batch shard')
const baseIndexSha256 = existingShard ? readJson(MANIFEST).baseIndexSha256 : sha256(indexBytes)

const records = input.records.map(makeDossier).sort((a, b) => a.colId.localeCompare(b.colId, 'en'))
assert.equal(new Set(records.map(record => record.colId)).size, 3)
const rawBytes = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compressed = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressed).equals(rawBytes), 'Brotli round-trip mismatch')

if (existingShard) {
  assert.equal(existingShard.recordCount, 3)
  assert.ok(readFileSync(join(ROOT, RAW)).equals(rawBytes), 'Existing raw dossier batch differs from deterministic input')
  assert.ok(readFileSync(join(ROOT, SHARD)).equals(compressed), 'Existing compressed dossier batch differs from deterministic input')
} else {
  for (const path of [RAW, SHARD, MANIFEST]) assert.equal(existsSync(join(ROOT, path)), false, `Output already exists outside dossier index: ${path}`)
  mkdirSync(dirname(join(ROOT, RAW)), { recursive: true })
  writeFileSync(join(ROOT, RAW), rawBytes)
  writeFileSync(join(ROOT, SHARD), compressed)
  index.shards.push({ path: SHARD, recordCount: records.length, decodedSha256: sha256(rawBytes), compressedSha256: sha256(compressed) })
  index.recordCount += records.length
  writeFileSync(join(ROOT, INDEX), `${JSON.stringify(index, null, 2)}\n`, 'utf8')
}

const storedRaw = readFileSync(join(ROOT, RAW))
const storedCompressed = readFileSync(join(ROOT, SHARD))
const finalIndexBytes = readFileSync(join(ROOT, INDEX))
const manifest = {
  schemaVersion: 1,
  batchId: BATCH_ID,
  releaseAlias: input.releaseAlias,
  input: { path: INPUT, sha256: sha256(inputBytes) },
  sourceProjection: { path: PROJECTION, sha256: sha256(projectionBytes), rowsReviewed: 24, claimRowReferences: 12 },
  sourceArchive: {
    inputKey: input.source.archiveInputKey,
    inputSha256: input.source.archiveInputSha256,
    archiveSha256: input.source.archiveSha256,
    license: input.source.license,
    licenseAssessment: input.source.licenseAssessment,
    originalZipAvailableInCheckout: input.source.archiveZipAvailableInCheckout,
    limitation: input.source.rightsBoundary,
  },
  article: { doi: input.article.doi, license: input.article.license, licenseAssessment: input.article.licenseAssessment },
  baseIndexSha256,
  finalIndexSha256: sha256(finalIndexBytes),
  newRecords: records.map(({ colId, scientificName, authorship, facets }) => ({
    colId,
    scientificName,
    authorship,
    partialFacets: Object.entries(facets).filter(([, facet]) => facet.status === 'partially-supported').map(([name]) => name),
    notAssessedFacets: Object.entries(facets).filter(([, facet]) => facet.status === 'not-assessed').map(([name]) => name),
  })),
  sourceMappingNotes: input.records.filter(record => record.sourceMappingNote).map(record => ({ colId: record.colId, note: record.sourceMappingNote })),
  rights: { claimSourceRightsUnresolved: 3, completeDossiersAdded: 0, externallyReviewedDossiersAdded: 0 },
  newShard: {
    path: SHARD,
    rawPath: RAW,
    encoding: 'brotli-jsonl',
    recordCount: records.length,
    decodedBytes: storedRaw.length,
    decodedSha256: sha256(storedRaw),
    compressedBytes: storedCompressed.length,
    compressedSha256: sha256(storedCompressed),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { path: `${REGISTRY_ROOT}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryManifestBytes) },
  generator: 'scripts/build-plazi-lycianthes-dossier-batch.mjs',
}
const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
if (existingShard) {
  assert.ok(readFileSync(join(ROOT, MANIFEST)).equals(manifestBytes), 'Existing batch manifest differs from deterministic output')
} else {
  writeFileSync(join(ROOT, MANIFEST), manifestBytes)
}

sourceLedger.auditedDossierBatches = (sourceLedger.auditedDossierBatches ?? []).filter(batch => batch.batchId !== BATCH_ID)
sourceLedger.auditedDossierBatches.push({
  batchId: BATCH_ID,
  input: INPUT,
  inputSha256: sha256(inputBytes),
  generator: manifest.generator,
  manifest: MANIFEST,
  authoredDossiers: records.length,
  sourceRows: records.map(record => ({ colId: record.colId, rows: Object.values(record.facets).flatMap(facet => facet.claims ?? []).map(claim => claim.locator.match(/row (\d+)/)?.[1]) })),
  claimPolicy: 'Four bounded partial facets per species; three facets not assessed; cited article item-level rights unknown; CC0 applies only to the extracted Plazi record declaration.',
  completeDossiersAdded: 0,
  externallyReviewedDossiersAdded: 0,
})
writeFileSync(join(ROOT, LEDGER), `${JSON.stringify(sourceLedger, null, 2)}\n`, 'utf8')

const rebuilt = readCatalogueDossiers()
assert.equal(rebuilt.records.length, index.recordCount)
assert.equal(rebuilt.records.filter(record => batchIds.has(record.colId)).length, 3)
console.log(JSON.stringify({
  batchId: BATCH_ID,
  records: records.map(record => record.colId),
  indexedRecordCount: index.recordCount,
  indexedShardCount: index.shards.length,
  partialFacetsPerDossier: 4,
  claimSourceRightsUnresolved: 3,
  completeDossiersAdded: 0,
  externallyReviewedDossiersAdded: 0,
  inputSha256: sha256(inputBytes),
  rawSha256: sha256(storedRaw),
  compressedSha256: sha256(storedCompressed),
  output: existingShard ? 'verified-idempotent-rebuild' : 'applied',
}, null, 2))
