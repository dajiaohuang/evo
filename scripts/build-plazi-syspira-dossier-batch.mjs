import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const BATCH_ID = 'plazi-syspira-dossier-batch-2026-09-27'
const INPUT = 'data/sources/plazi-syspira-dossier-batch-2026-09-27.json'
const EXPECTED_INPUT_SHA256 = 'de87aff463284ddcf8f69d9a82bd23d890388c26e2cbca061da4bbffdac9e2ff'
const PROJECTION = 'data/sources/plazi-descriptions.jsonl.gz'
const LEDGER = 'data/sources/plazi-descriptions-import-ledger.json'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const INDEX = 'data/knowledge/catalogue-dossier-shards.json'
const MANIFEST = 'data/knowledge/catalogue-dossiers-plazi-syspira-batch-2026-09-27.batch-manifest.json'
const RAW = 'data/knowledge/raw-dossiers/plazi-syspira-batch-2026-09-27.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-plazi-syspira-batch-2026-09-27.jsonl.br'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const registryCache = new Map()

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Reviewed Syspira dossier input changed')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, BATCH_ID)
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.records.length, 2)
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
  assert.equal(String(usage.sourceDatasetId), '56185', `COL source dataset changed for ${item.colId}`)
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
  assert.equal(matches.length, 1, `Expected one exact Plazi COL usage for ${item.colId}`)
  const record = matches[0]
  assert.equal(normalize(record.scientificName).startsWith(normalize(item.scientificName)), true, `Plazi name changed for ${item.colId}`)
  assert.equal(record.descriptions.length, 3, `Expected three retained rows for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.archiveSha256 === input.source.archiveSha256), `A Plazi row has a different archive hash for ${item.colId}`)
  assert.ok(record.descriptions.every(row => row.sourceArchive === input.source.sourceArchive), `A Plazi row has a different archive id for ${item.colId}`)
  for (const rowNumber of item.reviewedRows) assert.equal(record.descriptions.filter(row => row.rowNumber === rowNumber).length, 1, `Expected reviewed Plazi row ${rowNumber} for ${item.colId}`)
  if (item.colId === '5448K') {
    const description = record.descriptions.find(row => row.rowNumber === 15)
    assert.equal(description.type, 'description')
    assert.match(description.text, /Embolus \(E\) long/)
    assert.match(description.text, /Cymbial groove \(CbGv\) conspicuous/)
  }
  return record
}

function sourceList(item, usage) {
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
      id: 'plazi_syspira_archive',
      title: 'Plazi TreatmentBank Syspira extracted description records',
      url: 'https://treatment.plazi.org/',
      stableId: `PlaziArchiveSha256:${input.source.archiveSha256}`,
      version: `Plazi import retrieved 2026-09-08; projected archive SHA-256 ${input.source.archiveSha256}`,
      accessedAt: input.checkedAt,
      locator: `TreatmentBank description-extension rows for exact COL usages 5448F and 5448K; source ZIP is absent from this checkout, and its EML was not independently rechecked for this batch.`,
      license: input.source.license,
      licenseVersion: 'CC0 1.0',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      licenseAppliesTo: 'Extracted Plazi archive description records only; this does not apply to the cited journal article, PDF, or figures.',
      licenseAssessment: input.source.licenseAssessment,
      attribution: 'Plazi TreatmentBank, selected Syspira treatment records; archive declaration and import hashes are retained in data/sources/plazi-descriptions-import-ledger.json.',
      scope: 'Article-scoped extracted treatment records; not a complete species dossier.',
    },
    {
      id: 'valdez_jimenez_palacios_cardiel_2025',
      title: input.article.title,
      url: input.article.url,
      stableId: `doi:${input.article.doi}`,
      version: 'Zootaxa 5722 (3): 301–325 (2025)',
      publishedAt: input.article.publishedAt,
      locator: input.article.locator,
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
  const claims = {}
  for (const [facet, authoredClaim] of Object.entries(item.claims)) {
    assert.ok(['morphology', 'ecology'].includes(facet))
    const rows = authoredClaim.rows.map(rowNumber => {
      const matches = sourceRecord.descriptions.filter(row => row.rowNumber === rowNumber)
      assert.equal(matches.length, 1, `Expected one Plazi row ${rowNumber} for ${item.colId}`)
      const row = matches[0]
      assert.equal(row.archiveSha256, input.source.archiveSha256)
      assert.equal(row.sourceArchive, input.source.sourceArchive)
      assert.equal(row.treatmentUrl, `https://treatment.plazi.org/id/${item.treatmentId}`)
      assert.ok(row.citation.includes(input.article.doi), `Expected article DOI at ${item.colId} row ${rowNumber}`)
      assert.ok(row.text.trim().length > 0)
      return row
    })
    const pages = item.colId === '5448F' ? 'p. 303; figures 1–30 and 65–66' : 'p. 311; figures 31–64 and 67–68'
    const conflictCheck = item.colId === '5448K' && facet === 'morphology'
      ? ' Diagnosis/description conflict was checked against Plazi row 15 (description); conflicting embolus and cymbial-groove wording is excluded.'
      : ''
    const locator = `Plazi description-extension ${rows.map(row => `row ${row.rowNumber} (${row.type})`).join(', ')}; treatment ${rows[0].treatmentUrl}; original article ${pages}, DOI ${input.article.doi}; archive SHA-256 ${input.source.archiveSha256}.${conflictCheck}`
    claims[facet] = {
      text: authoredClaim.text,
      originalLanguage: 'en',
      translationStatus: 'untranslated',
      sourceIds: ['valdez_jimenez_palacios_cardiel_2025', 'plazi_syspira_archive'],
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
      method: 'Matched the exact Plazi COL usage ID to one accepted COL26.8 species usage and checked its name, authorship, source dataset and pinned accepted parent chain; no fuzzy name match was used.',
      scope: `Accepted COL26.8 identity ${item.colId}; source article treatment ${item.treatmentId}; this routing does not establish full scientific-concept equivalence across all literature.`,
      sourceIds: ['col', 'plazi_syspira_archive', 'valdez_jimenez_palacios_cardiel_2025'],
    },
    lifeStatusScope: {
      wild: 'The ecology claims concern wild habitat reports or pitfall-trap samples as described in the cited treatment; broader population coverage is not assessed.',
      domesticated: 'Captive, domesticated, and escaped occurrences were not assessed by this source slice.',
      fossil: 'Fossil occurrence and geological age were not assessed by this source slice.',
    },
    sources,
    facets,
    completeness: {
      status: 'incomplete',
      reasons: [
        'Only two bounded facets are represented from one taxonomic article; five facets remain not assessed.',
        'Ecology and morphology claims are limited to the cited treatment, its specimens, locations, and sampling methods.',
        'For S. tigrina, conflicting embolus and cymbial-groove wording is excluded from any unqualified synthesis.',
        'The article-level text reuse license is unknown; the retained CC0 declaration applies only to extracted Plazi records.',
        'The source ZIP is absent from this checkout and its embedded EML was not rechecked; no independent external review has been completed.',
      ],
    },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
  }
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.equal(dossier.sources.find(source => source.id === 'plazi_syspira_archive')?.licenseAssessment, 'aggregate-declaration-only')
  assert.equal(dossier.sources.find(source => source.id === 'valdez_jimenez_palacios_cardiel_2025')?.licenseAssessment, 'unknown')
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
assert.equal(duplicateExistingIds.length, existingShard ? 2 : 0, 'Candidate dossiers already exist outside this batch shard')
const priorManifest = existingShard ? readJson(MANIFEST) : null
if (priorManifest) {
  assert.equal(priorManifest.batchId, BATCH_ID, 'Existing shard manifest belongs to another batch')
  assert.equal(priorManifest.input.path, INPUT, 'Existing shard manifest has a different input path')
}
const baseIndexSha256 = priorManifest ? priorManifest.baseIndexSha256 : sha256(indexBytes)

const records = input.records.map(makeDossier).sort((a, b) => a.colId.localeCompare(b.colId, 'en'))
assert.equal(new Set(records.map(record => record.colId)).size, 2)
const rawBytes = Buffer.from(`${records.map(JSON.stringify).join('\n')}\n`, 'utf8')
const compressed = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressed).equals(rawBytes), 'Brotli round-trip mismatch')

if (existingShard) {
  assert.equal(existingShard.recordCount, 2)
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
  sourceRows: input.records.map(item => ({ colId: item.colId, treatmentId: item.treatmentId, reviewedRows: item.reviewedRows, claimRows: Object.values(item.claims).flatMap(claim => claim.rows) })),
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
  generator: 'scripts/build-plazi-syspira-dossier-batch.mjs',
}
const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
if (existingShard && priorManifest.input.sha256 === sha256(inputBytes)) {
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
  sourceRows: input.records.map(item => ({ colId: item.colId, rows: Object.values(item.claims).flatMap(claim => claim.rows.map(String)), reviewedRows: item.reviewedRows.map(String) })),
  claimPolicy: 'Two bounded partial facets per species; five facets not assessed; S. tigrina palp conflict excluded; article item-level rights unknown; CC0 applies only to extracted Plazi records.',
  completeDossiersAdded: 0,
  externallyReviewedDossiersAdded: 0,
})
writeFileSync(join(ROOT, LEDGER), `${JSON.stringify(sourceLedger, null, 2)}\n`, 'utf8')

console.log(JSON.stringify({
  batchId: BATCH_ID,
  dossiers: records.map(record => ({ colId: record.colId, scientificName: record.scientificName, partialFacets: Object.entries(record.facets).filter(([, value]) => value.status === 'partially-supported').map(([name]) => name) })),
  projectionSha256: sha256(projectionBytes),
  inputSha256: sha256(inputBytes),
  rawSha256: sha256(storedRaw),
  compressedSha256: sha256(storedCompressed),
  indexedRecordsAfter: index.recordCount,
  deterministicRoundTrip: true,
}, null, 2))
