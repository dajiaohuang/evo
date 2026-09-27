import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const BATCH_ID = 'plazi-rio-fish-dossier-batch-2026-09-27'
const INPUT = 'data/sources/plazi-rio-fish-dossier-batch-2026-09-27.json'
const EXPECTED_INPUT_SHA256 = 'b0c789613ceb274cdd76bc6bb396f68aef0d052c99b7f1412d8268c0b8760464'
const PROJECTION = 'data/sources/plazi-descriptions.jsonl.gz'
const LEDGER = 'data/sources/plazi-descriptions-import-ledger.json'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const INDEX = 'data/knowledge/catalogue-dossier-shards.json'
const MANIFEST = 'data/knowledge/catalogue-dossiers-plazi-rio-fish-batch-2026-09-27.batch-manifest.json'
const RAW = 'data/knowledge/raw-dossiers/plazi-rio-fish-batch-2026-09-27.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-plazi-rio-fish-batch-2026-09-27.jsonl.br'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const registryCache = new Map()

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Reviewed Rio fish dossier input changed')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, BATCH_ID)
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.records.length, 2)
assert.equal(input.sourceLedger.archiveZipAvailableInCheckout, false)
assert.equal(input.sourceProjection.sha256, '466773ce5eca7e77627dd13903e074c6446eb2d91ba3eaaa53c79f10ebd3cda0')

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
  assert.equal(normalize(usage.scientificName), normalize(`${item.scientificName} ${item.authorship}`), `COL name/authorship changed for ${item.colId}`)
  assert.equal(String(usage.sourceDatasetId), '1010', `COL source dataset changed for ${item.colId}`)
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
assert.equal(sha256(projectionBytes), input.sourceProjection.sha256, 'Pinned Plazi projection changed')
assert.equal(sha256(projectionBytes), sourceLedger.outputSha256, 'Plazi projection no longer matches its import ledger')
assert.equal(sourceLedger.inputs[input.sourceLedger.archiveInputKey], input.sourceLedger.archiveInputSha256)
assert.equal(sourceLedger.license, 'CC0 1.0')
const projection = gunzipSync(projectionBytes).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)

function findSourceRecord(item) {
  const matches = projection.filter(record => record.colId === item.colId)
  assert.equal(matches.length, 1, `Expected one direct Plazi COL usage for ${item.colId}`)
  const record = matches[0]
  assert.equal(normalize(record.scientificName), normalize(`${item.scientificName} ${item.authorship}`), `Plazi name/authorship changed for ${item.colId}`)
  assert.equal(record.descriptions.length, item.reviewedRows.length, `Expected all retained rows for ${item.colId}`)
  assert.ok(record.descriptions.every(row => !Object.hasOwn(row, 'sourceColUsageId')), `Unexpected synonym/source usage redirect for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.mappingBasis === item.mappingBasis), `Mapping basis changed for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.archiveSha256 === item.archiveSha256), `A Plazi row has a different archive hash for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.sourceArchive === item.sourceArchive), `A Plazi row has a different archive id for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.treatmentUrl === `https://treatment.plazi.org/id/${item.treatmentId}`), `Treatment ID changed for ${item.colId}`)
  for (const rowNumber of item.reviewedRows) assert.equal(record.descriptions.filter(row => row.rowNumber === rowNumber).length, 1, `Expected Plazi row ${rowNumber} for ${item.colId}`)
  assert.deepEqual(record.descriptions.map(row => row.rowNumber).sort((a, b) => a - b), item.reviewedRows.slice().sort((a, b) => a - b))
  return record
}

function sourceList(item, usage) {
  const archiveId = `plazi_archive_${item.colId.toLowerCase()}`
  const articleId = item.article.sourceId
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
      id: archiveId,
      title: `Plazi TreatmentBank extracted description records for ${item.scientificName}`,
      url: `https://treatment.plazi.org/id/${item.treatmentId}`,
      stableId: `PlaziArchiveSha256:${item.archiveSha256}`,
      version: `Plazi archive ${item.sourceArchive}; SHA-256 ${item.archiveSha256}; imported under fish input ${input.sourceLedger.archiveInputSha256}`,
      accessedAt: input.checkedAt,
      locator: `Description-extension rows ${item.reviewedRows.join(', ')} for direct COL26.8 usage ${item.colId}; source ZIP is absent and embedded EML was not rechecked.`,
      license: input.sourceLedger.license,
      licenseVersion: 'CC0 1.0',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      licenseAppliesTo: 'Extracted Plazi archive description records only; not the cited journal article, DOI page, PDF, or figures.',
      licenseAssessment: input.sourceLedger.licenseAssessment,
      attribution: 'Plazi TreatmentBank, selected fish treatment rows; archive declaration and import hashes are retained in data/sources/plazi-descriptions-import-ledger.json.',
      scope: 'Article-scoped extracted treatment records; not a complete species dossier.',
    },
    {
      id: articleId,
      title: item.article.title,
      url: item.article.url,
      stableId: `doi:${item.article.doi}`,
      version: item.article.citation,
      publishedAt: item.article.publishedAt,
      locator: item.article.locator,
      license: item.article.license,
      licenseAssessment: item.article.licenseAssessment,
      licenseAppliesTo: 'Bibliographic citation only; no article prose, PDF, or figures are redistributed.',
      attribution: item.article.citation,
      scope: 'Cited taxonomic article; item-level reuse rights remain unknown.',
    },
  ]
}

function makeDossier(item) {
  const usage = findUsage(item)
  const sourceRecord = findSourceRecord(item)
  const sources = sourceList(item, usage)
  const archiveSourceId = `plazi_archive_${item.colId.toLowerCase()}`
  const claims = {}
  for (const [facet, authoredClaim] of Object.entries(item.claims)) {
    assert.ok(['morphology', 'ecology'].includes(facet))
    const rows = authoredClaim.rows.map(rowNumber => {
      const matches = sourceRecord.descriptions.filter(row => row.rowNumber === rowNumber)
      assert.equal(matches.length, 1, `Expected one Plazi row ${rowNumber} for ${item.colId}`)
      const [row] = matches
      assert.equal(row.archiveSha256, item.archiveSha256)
      assert.equal(row.sourceArchive, item.sourceArchive)
      assert.equal(row.treatmentUrl, `https://treatment.plazi.org/id/${item.treatmentId}`)
      assert.ok(row.citation.includes(item.article.doi), `Expected article DOI at ${item.colId} row ${rowNumber}`)
      assert.ok(row.text.trim().length > 0)
      return row
    })
    assert.ok(rows.every(row => item.reviewedRows.includes(row.rowNumber)))
    const locator = `Plazi description-extension ${rows.map(row => `row ${row.rowNumber} (${row.type})`).join(', ')}; treatment ${rows[0].treatmentUrl}; original article ${authoredClaim.pages}; DOI ${item.article.doi}; source archive ${item.sourceArchive}; archive SHA-256 ${item.archiveSha256}. Source ZIP absent from checkout; embedded EML not rechecked. Article item-level reuse rights unknown.`
    claims[facet] = {
      text: authoredClaim.text,
      originalLanguage: 'en',
      translationStatus: 'untranslated',
      sourceIds: [item.article.sourceId, archiveSourceId],
      locator,
      placeTimeScope: authoredClaim.placeTimeScope,
      lifeStatus: authoredClaim.lifeStatus,
    }
  }

  const facets = Object.fromEntries(FACETS.map(facet => {
    const claim = claims[facet]
    const gap = input.facetGaps[facet]
    assert.ok(gap, `Missing explicit facet boundary for ${facet}`)
    return [facet, claim
      ? { status: 'partially-supported', claims: [claim], gaps: [gap] }
      : { status: 'not-assessed', claims: [], gaps: [gap] }]
  }))
  assert.deepEqual(Object.keys(claims).sort(), ['ecology', 'morphology'])
  assert.equal(Object.values(facets).filter(facet => facet.status === 'not-assessed').length, 5)
  const dossier = {
    colId: item.colId,
    scientificName: usage.scientificName,
    authorship: usage.authorship,
    rank: usage.rank,
    sourceDatasetId: String(usage.sourceDatasetId),
    checkedAt: input.checkedAt,
    classificationPath: attachClassification(usage),
    identity: {
      method: `The Plazi projection's direct COL identifier ${item.colId} was matched to exactly one accepted COL26.8 species usage and checked against its exact name, authorship, source dataset, and accepted parent chain. The projection has no sourceColUsageId or synonym redirect for this record; no fuzzy match was used.`,
      scope: `Accepted COL26.8 identity ${item.colId}; source article treatment ${item.treatmentId}; this linkage does not establish full scientific-concept equivalence across all literature.`,
      sourceIds: ['col', archiveSourceId, item.article.sourceId],
    },
    lifeStatusScope: {
      wild: 'Claims concern taxonomic specimens, collection records, or habitat observations described in the cited treatment; broader population status and coverage are not assessed.',
      domesticated: 'Captive, domesticated, and escaped occurrences were not assessed by this source slice.',
      fossil: 'Fossil occurrence and geological age were not assessed by this source slice.',
    },
    sources,
    facets,
    completeness: {
      status: 'incomplete',
      reasons: [
        'Only morphology and ecology are partially supported by one taxonomic treatment; five facets remain not assessed.',
        'Claims are limited to the treatment rows, stated comparative samples, examined specimens, collection localities, and label-derived observations.',
        'The article-level text reuse license is unknown; the ledger CC0 declaration applies only to extracted Plazi rows.',
        'The source ZIP is absent from this checkout and its embedded EML was not rechecked; no independent external review has been completed.',
      ],
    },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
  }
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.equal(dossier.sources.find(source => source.id === archiveSourceId)?.licenseAssessment, 'aggregate-declaration-only')
  assert.equal(dossier.sources.find(source => source.id === item.article.sourceId)?.licenseAssessment, 'unknown')
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
assert.deepEqual([...batchIds].sort(), ['3M86Z', '6RGPT'])
const existingBatchRecords = current.records.filter(record => batchIds.has(record.colId))
assert.equal(existingBatchRecords.length, existingShard ? input.records.length : 0, 'Candidate dossier exists outside this batch shard')
const priorManifest = existingShard ? readJson(MANIFEST) : null
if (priorManifest) {
  assert.equal(priorManifest.batchId, BATCH_ID, 'Existing dossier shard manifest belongs to another batch')
  assert.equal(priorManifest.input.path, INPUT, 'Existing dossier shard manifest has a different input path')
}
for (const item of input.records) {
  assert.equal(existsSync(join(ROOT, 'data/sources', item.sourceArchive)), false, `Unexpected source ZIP in checkout: ${item.sourceArchive}`)
  assert.equal(existsSync(join(ROOT, 'data/sources/archives', item.sourceArchive)), false, `Unexpected source ZIP in archive directory: ${item.sourceArchive}`)
}
const baseIndexSha256 = priorManifest?.baseIndexSha256 ?? sha256(indexBytes)

const records = input.records.map(makeDossier).sort((a, b) => a.colId.localeCompare(b.colId, 'en'))
assert.deepEqual(records.map(record => record.colId), ['3M86Z', '6RGPT'])
const rawBytes = Buffer.from(`${records.map(JSON.stringify).join('\n')}\n`, 'utf8')
const compressed = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressed).equals(rawBytes), 'Brotli round-trip mismatch')

if (existingShard) {
  assert.equal(existingShard.recordCount, records.length)
  if (priorManifest.input.sha256 === sha256(inputBytes)) {
    assert.ok(readFileSync(join(ROOT, RAW)).equals(rawBytes), 'Existing raw dossier batch differs from deterministic input')
    assert.ok(readFileSync(join(ROOT, SHARD)).equals(compressed), 'Existing compressed dossier batch differs from deterministic input')
  } else {
    writeFileSync(join(ROOT, RAW), rawBytes)
    writeFileSync(join(ROOT, SHARD), compressed)
    Object.assign(existingShard, { decodedSha256: sha256(rawBytes), compressedSha256: sha256(compressed) })
    writeFileSync(join(ROOT, INDEX), `${JSON.stringify(index, null, 2)}\n`, 'utf8')
  }
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
  sourceProjection: { path: PROJECTION, sha256: sha256(projectionBytes), rowsReviewed: input.records.reduce((sum, item) => sum + item.reviewedRows.length, 0), claimRowReferences: input.records.reduce((sum, item) => sum + Object.values(item.claims).reduce((count, claim) => count + claim.rows.length, 0), 0) },
  sourceLedger: { path: input.sourceLedger.path, archiveInputKey: input.sourceLedger.archiveInputKey, archiveInputSha256: input.sourceLedger.archiveInputSha256, license: input.sourceLedger.license, licenseAssessment: input.sourceLedger.licenseAssessment },
  sourceArchives: input.records.map(item => ({ colId: item.colId, treatmentId: item.treatmentId, sourceArchive: item.sourceArchive, archiveSha256: item.archiveSha256, zipAvailableInCheckout: false, emlRechecked: false })),
  articles: input.records.map(item => ({ colId: item.colId, doi: item.article.doi, license: item.article.license, licenseAssessment: item.article.licenseAssessment })),
  baseIndexSha256,
  finalIndexSha256: sha256(finalIndexBytes),
  newRecords: records.map(({ colId, scientificName, authorship, facets }) => ({
    colId,
    scientificName,
    authorship,
    partialFacets: Object.entries(facets).filter(([, facet]) => facet.status === 'partially-supported').map(([name]) => name),
    notAssessedFacets: Object.entries(facets).filter(([, facet]) => facet.status === 'not-assessed').map(([name]) => name),
  })),
  sourceRows: input.records.map(item => ({ colId: item.colId, sourceArchive: item.sourceArchive, archiveSha256: item.archiveSha256, treatmentId: item.treatmentId, reviewedRows: item.reviewedRows, claimRows: Object.values(item.claims).flatMap(claim => claim.rows) })),
  rights: { claimSourceRightsUnresolved: 2, completeDossiersAdded: 0, externallyReviewedDossiersAdded: 0 },
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
  generator: 'scripts/build-plazi-rio-fish-dossier-batch.mjs',
}
const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
if (priorManifest && priorManifest.input.sha256 === sha256(inputBytes)) assert.ok(readFileSync(join(ROOT, MANIFEST)).equals(manifestBytes), 'Existing batch manifest differs from deterministic output')
else writeFileSync(join(ROOT, MANIFEST), manifestBytes)

sourceLedger.auditedDossierBatches = (sourceLedger.auditedDossierBatches ?? []).filter(batch => batch.batchId !== BATCH_ID)
sourceLedger.auditedDossierBatches.push({
  batchId: BATCH_ID,
  input: INPUT,
  inputSha256: sha256(inputBytes),
  generator: manifest.generator,
  manifest: MANIFEST,
  authoredDossiers: records.length,
  sourceRows: input.records.map(item => ({ colId: item.colId, sourceArchive: item.sourceArchive, archiveSha256: item.archiveSha256, treatmentId: item.treatmentId, reviewedRows: item.reviewedRows, claimRows: Object.values(item.claims).flatMap(claim => claim.rows) })),
  claimPolicy: 'Two incomplete accepted-species dossiers with comparative morphology and sample-bounded ecology only; each source archive retains its own name and SHA-256; source ZIP EML was not rechecked; article item-level rights unknown; CC0 applies only to extracted Plazi rows.',
  completeDossiersAdded: 0,
  externallyReviewedDossiersAdded: 0,
})
writeFileSync(join(ROOT, LEDGER), `${JSON.stringify(sourceLedger, null, 2)}\n`, 'utf8')

const rebuilt = readCatalogueDossiers()
assert.equal(rebuilt.records.length, index.recordCount)
assert.equal(rebuilt.records.filter(record => batchIds.has(record.colId)).length, records.length)
assert.equal(rebuilt.records.find(record => record.colId === '3M86Z')?.scientificName, 'Hollandichthys taramandahy Bertaco & Malabarba, 2013')
assert.equal(rebuilt.records.find(record => record.colId === '6RGPT')?.scientificName, 'Microglanis lundbergi Jarduli & Shibatta, 2013')
console.log(JSON.stringify({
  batchId: BATCH_ID,
  dossiers: records.map(record => ({ colId: record.colId, scientificName: record.scientificName, partialFacets: Object.entries(record.facets).filter(([, value]) => value.status === 'partially-supported').map(([name]) => name), notAssessedFacets: Object.entries(record.facets).filter(([, value]) => value.status === 'not-assessed').map(([name]) => name) })),
  sourceArchives: input.records.map(item => ({ colId: item.colId, sourceArchive: item.sourceArchive, archiveSha256: item.archiveSha256 })),
  projectionSha256: sha256(projectionBytes),
  inputSha256: sha256(inputBytes),
  rawSha256: sha256(storedRaw),
  compressedSha256: sha256(storedCompressed),
  indexedRecordsAfter: index.recordCount,
  deterministicRoundTrip: true,
}, null, 2))
