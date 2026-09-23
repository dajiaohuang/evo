import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const root = resolve(import.meta.dirname, '..')
const rawPath = 'data/knowledge/raw-dossiers/chiroptera-molossus-2025.jsonl'
const shardPath = 'data/knowledge/catalogue-dossiers-chiroptera-molossus-2025.jsonl.br'
const batchPath = 'data/knowledge/catalogue-dossiers-chiroptera-molossus-2025.batch-manifest.json'
const colRoot = 'data/catalogue-of-life/releases/2026-08-20/registry'
const colManifestPath = `${colRoot}/manifest.json`
const itisCrosswalkPath = 'data/sources/itis-mammal-authority-crosswalk-col26.8.json.gz'
const dossierIndexPath = 'data/knowledge/catalogue-dossier-shards.json'
const releaseAlias = 'COL26.8'
const checkedAt = '2026-09-24'
const datasetId = '2144'
const facets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const bytesAt = path => readFileSync(resolve(root, path))

const taxa = [
  { id: '43YHH', name: 'Molossus aztecus Saussure, 1860', authorship: 'Saussure, 1860', itisName: 'Molossus aztecus', tsn: '946101', sampleN: 12, forearmMm: '39.74', sizeClass: 'medium', phylogeny: 'The mitochondrial COI + cyt b tree places M. aztecus in the paper’s strongly supported clade with M. fluminensis, M. bondae, M. sinaloae, M. rufus, M. pretiosus, and M. currentium.' },
  { id: '43YHQ', name: 'Molossus currentium Thomas, 1901', authorship: 'Thomas, 1901', itisName: 'Molossus currentium', tsn: '946104', sampleN: 2, forearmMm: '45.5', sizeClass: 'large', phylogeny: 'The mitochondrial COI + cyt b tree places M. currentium in the paper’s strongly supported clade with M. fluminensis, M. bondae, M. aztecus, M. sinaloae, M. rufus, and M. pretiosus.' },
  { id: '8P9GS', name: 'Molossus milleri Johnson, 1952', authorship: 'Johnson, 1952', itisName: 'Molossus milleri', tsn: '947108', sampleN: 3, forearmMm: '36.76', sizeClass: 'small', phylogeny: 'The mitochondrial COI + cyt b tree recovered M. milleri as sister to M. verrilli, with low branch support; the authors estimate that divergence in the Pliocene.' },
  { id: '8QF9S', name: 'Molossus fluminensis Lataste, 1891', authorship: 'Lataste, 1891', itisName: 'Molossus fluminensis', tsn: '1159237', sampleN: 6, forearmMm: '50.66', sizeClass: 'large', phylogeny: 'The mitochondrial COI + cyt b tree places M. fluminensis in the paper’s strongly supported clade with M. bondae, M. aztecus, M. sinaloae, M. rufus, M. pretiosus, and M. currentium. The authors also infer an increase in skull centroid size along a clade including M. rufus, M. pretiosus, and M. fluminensis.' },
  { id: '8QFLX', name: 'Molossus melini Montani, Tomasco, Barberis, Romano, Barquez & Díaz, 2021', authorship: 'Montani, Tomasco, Barberis, Romano, Barquez & Díaz, 2021', itisName: 'Molossus melini', tsn: '1159244', sampleN: 3, forearmMm: '39.93', sizeClass: 'medium', phylogeny: 'The mitochondrial COI + cyt b tree places M. melini with M. molossus and M. paranaensis in a clade that the authors report as having low support.' },
]

const colManifest = JSON.parse(bytesAt(colManifestPath).toString('utf8'))
assert.equal(colManifest.releaseAlias, releaseAlias)
assert.equal(String(colManifest.checklistBankDatasetKey), '316115')
const itisBytes = bytesAt(itisCrosswalkPath)
const itis = JSON.parse(gunzipSync(itisBytes).toString('utf8'))
assert.equal(itis.crosswalkType, 'release-pinned-exact-itis-mammalia-authority-crosswalk')
assert.equal(itis.sources.col.releaseAlias, releaseAlias)
assert.equal(itis.sources.col.strictPredicate, 'rank=species AND status=accepted')
assert.equal(itis.sources.itis.datasetId, 'itis-2026-08-26')
assert.equal(itis.sources.itis.license, 'CC0-1.0')

const nodeCache = new Map()
const colNodeFor = id => {
  const shard = createHash('sha256').update(id).digest('hex').slice(0, 2)
  if (!nodeCache.has(shard)) {
    const path = `${colRoot}/hierarchy/nodes/id-${shard}.jsonl.gz`
    const rows = gunzipSync(bytesAt(path)).toString('utf8').trimEnd().split(/\r?\n/).map(JSON.parse)
    nodeCache.set(shard, new Map(rows.map(row => [row.id, row])))
  }
  return nodeCache.get(shard).get(id)
}

const itisById = new Map(itis.records.map(row => [row.colUsageId, row]))
const identityAudit = []
for (const taxon of taxa) {
  const node = colNodeFor(taxon.id)
  assert.ok(node, `COL26.8 usage not found: ${taxon.id}`)
  assert.equal(node.scientificName, taxon.name)
  assert.equal(node.authorship, taxon.authorship)
  assert.equal(node.rank, 'species')
  assert.equal(node.status, 'accepted')
  assert.equal(node.sourceDatasetId, datasetId)
  const crosswalk = itisById.get(taxon.id)
  assert.ok(crosswalk, `ITIS exact crosswalk missing: ${taxon.id}`)
  assert.equal(crosswalk.status, 'accepted')
  assert.equal(crosswalk.packageId, 'other-mammals')
  assert.equal(crosswalk.exactMatchName, taxon.itisName)
  assert.equal(crosswalk.currentName.scientificName, taxon.itisName)
  assert.equal(crosswalk.currentName.usage, 'valid')
  assert.equal(crosswalk.currentName.tsn, taxon.tsn)
  identityAudit.push({ colId: taxon.id, scientificName: node.scientificName, rank: node.rank, status: node.status, sourceDatasetId: node.sourceDatasetId, parentId: node.parentId, itisScientificName: crosswalk.currentName.scientificName, itisUsage: crosswalk.currentName.usage, itisTsn: crosswalk.currentName.tsn, mappingBasis: 'pinned COL-ID crosswalk row with exact normalized binomial and valid ITIS usage; no fuzzy match' })
}

const dossierIndex = JSON.parse(bytesAt(dossierIndexPath).toString('utf8'))
const existingIds = new Set(JSON.parse(bytesAt('data/knowledge/catalogue-dossiers.json').toString('utf8')).records.map(row => row.colId))
for (const shard of dossierIndex.shards) {
  const rows = brotliDecompressSync(bytesAt(shard.path)).toString('utf8').trimEnd().split(/\r?\n/).map(JSON.parse)
  assert.equal(rows.length, shard.recordCount, `Indexed dossier count changed: ${shard.path}`)
  for (const row of rows) {
    assert.ok(!existingIds.has(row.colId), `Existing duplicate in dossier index: ${row.colId}`)
    existingIds.add(row.colId)
  }
}
for (const taxon of taxa) assert.ok(!existingIds.has(taxon.id), `Duplicate dossier COL ID: ${taxon.id}`)

const baseSources = [
  {
    id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115',
    version: 'COL26.8; ChecklistBank dataset 316115, pinned 2026-08-20', publishedAt: '2026-08-20', accessedAt: checkedAt,
    license: 'CC BY 4.0 for the pinned COL release; record used for identity only', licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    rightsHolder: 'Catalogue of Life Foundation', licenseAppliesTo: 'COL26.8 release record', attribution: 'Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk',
    licenseAssessment: 'identity-only', scope: 'Accepted COL26.8 name, authorship, rank, status, source dataset and COL identifier only; no biological claims.',
    url: 'https://www.checklistbank.org/dataset/316115/taxon/', stableId: 'COL26.8', locator: 'Pinned registry row identified by each listed COL usage ID; accepted species and sourceDatasetId 2144.'
  },
  {
    id: 'itis', title: 'Integrated Taxonomic Information System (ITIS), via pinned mammal authority crosswalk',
    version: 'ITIS ChecklistBank export 2026-08-26; mammal exact-match crosswalk pinned to COL26.8; accessed 2026-09-24', publishedAt: '2026-08-26', accessedAt: checkedAt,
    license: 'CC0 1.0 for the source ITIS data', licenseVersion: 'CC0-1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    rightsHolder: 'Integrated Taxonomic Information System (ITIS)', licenseAppliesTo: 'ITIS nomenclatural authority data only', attribution: 'ITIS (2026-08-26 export), DOI 10.5066/F7KH0KBK; crosswalk exact-matches the COL usage ID and valid ITIS TSN.',
    licenseAssessment: 'identity-only', scope: 'Nomenclatural crosswalk for identity corroboration only; it does not establish full biological species-concept equivalence.',
    url: 'https://www.itis.gov/', stableId: 'ITIS dataset itis-2026-08-26', locator: 'Exact crosswalk record for the dossier COL ID; ITIS valid usage and TSN recorded separately in identity.'
  },
  {
    id: 'plos-molossus-2025',
    title: 'Olímpio et al. 2025. Cranial morphology reveals a lack of phylogenetic signal and rapid adaptive radiation in the bat genus Molossus (Chiroptera: Molossidae). PLOS ONE 20(4): e0320117.',
    url: 'https://doi.org/10.1371/journal.pone.0320117', stableId: 'doi:10.1371/journal.pone.0320117',
    version: 'Version of record; published 2025-04-02; DOI 10.1371/journal.pone.0320117; accessed 2026-09-24', publishedAt: '2025-04-02', accessedAt: checkedAt,
    license: 'Creative Commons Attribution 4.0 International (CC BY 4.0), linked from the article copyright notice', licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    rightsHolder: 'Olímpio et al. (2025)', licenseAppliesTo: 'Article text and author-generated material; this dossier paraphrases text and does not redistribute figures or third-party assets.',
    attribution: 'Olímpio APM et al. (2025), PLOS ONE 20(4): e0320117, https://doi.org/10.1371/journal.pone.0320117; paraphrased and scope-limited.',
    licenseAssessment: 'item-level-verified',
    scope: 'Peer-reviewed study of 299 adult specimens from ten Molossus species, cranial geometric morphometrics, mitochondrial COI and cyt b phylogeny, and comparative analyses. Species-level observations are limited to the paper’s reported sample, measurements, and tree; it is not a complete species monograph.',
    locator: 'Version of record, Methods > Taxonomic sampling and Molecular analyses; Results > Variability of sizes and shapes in Molossus and Phylogeny and phylogenetic signal; Fig. 6 and Discussion > Phylogenetic implications.'
  }
]

const claims = taxon => {
  const phrase = taxon.name.replace(/\s+.*$/, '')
  const sampleName = phrase
  return {
    morphology: {
      status: 'partially-supported',
      claims: [{
        text: `The study examined ${taxon.sampleN} adult ${sampleName} specimens and reports a mean forearm length of ${taxon.forearmMm} mm, classified as ${taxon.sizeClass} under its stated length bands. The sample is restricted to adults and this single quantitative size indicator; it does not establish the species’ full morphology or sex- and age-related variation.`,
        originalLanguage: 'en', translationStatus: 'untranslated', sourceIds: ['plos-molossus-2025'],
        locator: 'Methods > Taxonomic sampling (adult sampling criteria and species sample sizes); Results > Variability of sizes and shapes in Molossus, paragraph beginning “The species also differ in forearm measurements”.',
        placeTimeScope: `Adult specimens included in the 2025 study’s Neotropical sample; species-level specimen localities were not abstracted here. Forearm length is reported in millimetres as a proxy for body size, using the authors’ size categories.`,
        lifeStatus: 'Study specimens only; the paper does not provide a complete wild, captive, or domesticated status audit for every specimen.'
      }],
      gaps: ['Sex-specific values, age beyond the adult-only criterion, geographic variation, diagnostic characters, and a complete species-level character account were not assessed.']
    },
    lifeHistory: { status: 'not-assessed', claims: [], gaps: ['The study does not investigate life cycle, reproduction, development, seasonal timing, or behavior for this species.'] },
    ecology: { status: 'not-assessed', claims: [], gaps: ['The article gives genus-level context about insectivory and possible ecological drivers; species-specific diet, habitat, and interaction evidence for this taxon was not abstracted or assessed.'] },
    evolution: {
      status: 'partially-supported',
      claims: [{
        text: taxon.phylogeny,
        originalLanguage: 'en', translationStatus: 'untranslated', sourceIds: ['plos-molossus-2025'],
        locator: 'Results > Phylogeny and phylogenetic signal; Fig. 6 (Bayesian tree inferred from mitochondrial COI and cytochrome b sequences).',
        placeTimeScope: 'The study’s sampled Molossus tree, based on mitochondrial COI and cytochrome b; clade support and sampling are as reported by the authors. This is one study’s phylogenetic result, not a synthesis of all available evidence.',
        lifeStatus: 'Evolutionary inference for the nominal species in the study’s sampled tree; no population-level or fossil-specimen claim is made.'
      }],
      gaps: ['Nuclear-genome, population-level, and broader comparative phylogenies were not reviewed; no independent replication or conflict search was performed.']
    },
    distribution: { status: 'not-assessed', claims: [], gaps: ['The paper’s Neotropical sample is not a species-level range treatment. Specimen localities, native or introduced status, range boundaries, and sampling completeness were not abstracted.'] },
    fossil: { status: 'not-assessed', claims: [], gaps: ['No species-level fossil record search was performed. The paper uses a fossilized birth-death calibration in its genus-level phylogeny, which is not evidence of fossils assigned to this species.'] },
    conservation: { status: 'not-assessed', claims: [], gaps: ['No current global or national conservation assessment search was performed; no risk category is inferred.'] }
  }
}

const dossiers = taxa.map(taxon => ({
  colId: taxon.id, scientificName: taxon.name, rank: 'species', sourceDatasetId: datasetId, checkedAt,
  identity: {
    method: `The pinned COL26.8 registry row for ${taxon.id} was verified as accepted rank=species, full scientific name and authorship, and sourceDatasetId 2144. The COL-ID row in the pinned ITIS 2026-08-26 mammal crosswalk was then checked for an accepted exact normalized binomial match, valid ITIS usage, and TSN ${taxon.tsn}; no name-only fuzzy match was used.`,
    scope: 'This confirms the versioned nomenclatural usage link between COL26.8 and the ITIS authority record. It does not independently establish full biological species-concept equivalence across studies.',
    sourceIds: ['col', 'itis']
  },
  lifeStatusScope: {
    wild: 'Biological claims refer only to adult specimens and the sampled populations represented in Olímpio et al. 2025; a full wild-range assessment was not performed.',
    domesticated: 'The study does not provide a domestication or captive-status assessment. No domestic or captive biology is asserted.',
    fossil: 'No fossil occurrence is asserted. The study’s fossilized birth-death model calibration is not treated as a species fossil record.'
  },
  sources: baseSources.map(source => ({ ...source, url: source.id === 'col' ? `${source.url}${taxon.id}` : source.id === 'itis' ? `https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=${taxon.tsn}` : source.url, stableId: source.id === 'col' ? taxon.id : source.id === 'itis' ? `ITIS TSN ${taxon.tsn}` : source.stableId, locator: source.id === 'col' ? `COL26.8 accepted species usage ${taxon.id}` : source.id === 'itis' ? `Pinned exact crosswalk row ${taxon.id}; valid ITIS usage TSN ${taxon.tsn}` : source.locator })),
  facets: claims(taxon),
  completeness: {
    status: 'incomplete',
    reasons: [
      'This is a single-study evidence slice; life history, species-specific ecology, full distribution, fossil occurrence, and conservation assessment remain not-assessed.',
      'Morphological evidence is limited to adult-sample forearm measurements and does not provide a complete diagnostic or variation account.',
      'Evolutionary evidence is limited to one mitochondrial phylogenetic analysis and has study-specific sampling and support limits.',
      'The exact COL-to-ITIS nomenclatural link does not by itself establish full biological species-concept equivalence; no external expert review was completed.'
    ]
  },
  expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null }
}))

const raw = Buffer.from(`${dossiers.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const parsed = raw.toString('utf8').trimEnd().split(/\r?\n/).map(JSON.parse)
assert.equal(parsed.length, taxa.length)
assert.deepEqual(parsed.map(record => record.colId), taxa.map(taxon => taxon.id))
for (const dossier of parsed) {
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...facets].sort())
  assert.ok(Object.values(dossier.facets).every(value => ['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(value.status)))
  assert.ok(dossier.facets.morphology.claims.every(claim => claim.sourceIds.every(id => dossier.sources.find(source => source.id === id)?.licenseAssessment === 'item-level-verified')))
}

const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const manifest = {
  schemaVersion: 1, batchId: 'chiroptera-molossus-2025', releaseAlias,
  input: { path: rawPath, bytes: raw.length, sha256: sha256(raw) },
  shard: { path: shardPath, encoding: 'brotli-jsonl', recordCount: parsed.length, decodedBytes: raw.length, decodedSha256: sha256(raw), compressedBytes: compressed.length, compressedSha256: sha256(compressed), brotliParameters: { mode: 'text', quality: 11 } },
  identityAudit,
  sourceChecksums: { colRegistryManifestSha256: sha256(bytesAt(colManifestPath)), itisCrosswalkCompressedSha256: sha256(itisBytes) },
  generator: 'scripts/build-chiroptera-molossus-2025-batch.mjs',
  generatedBy: { predicate: 'COL26.8 rank=species AND status=accepted AND sourceDatasetId=2144; ITIS exact crosswalk status=accepted and currentName.usage=valid', duplicateCheck: 'All base and indexed dossier shards were read and candidate COL IDs were absent before generation.' }
}

writeFileSync(resolve(root, rawPath), raw)
writeFileSync(resolve(root, shardPath), compressed)
writeFileSync(resolve(root, batchPath), `${JSON.stringify(manifest, null, 2)}\n`)
process.stdout.write(`${JSON.stringify({ recordCount: parsed.length, ids: parsed.map(record => record.colId), rawSha256: manifest.input.sha256, shardSha256: manifest.shard.compressedSha256, batchManifest: batchPath })}\n`)
