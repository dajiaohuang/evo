import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const root = resolve(import.meta.dirname, '..')
const rawPath = 'data/knowledge/raw-dossiers/chiroptera-histiotus-alienus-2023.jsonl'
const shardPath = 'data/knowledge/catalogue-dossiers-chiroptera-histiotus-alienus-2023.jsonl.br'
const batchPath = 'data/knowledge/catalogue-dossiers-chiroptera-histiotus-alienus-2023.batch-manifest.json'
const colRoot = 'data/catalogue-of-life/releases/2026-08-20/registry'
const colManifestPath = `${colRoot}/manifest.json`
const itisCrosswalkPath = 'data/sources/itis-mammal-authority-crosswalk-col26.8.json.gz'
const dossierIndexPath = 'data/knowledge/catalogue-dossier-shards.json'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const bytesAt = path => readFileSync(resolve(root, path))
const id = '3M5GD'
const name = 'Histiotus alienus Thomas, 1916'
const datasetId = '2144'
const tsn = '631982'
const checkedAt = '2026-09-24'
const facets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']

const colManifest = JSON.parse(bytesAt(colManifestPath).toString('utf8'))
assert.equal(colManifest.releaseAlias, 'COL26.8')
assert.equal(String(colManifest.checklistBankDatasetKey), '316115')
const nodeShard = createHash('sha256').update(id).digest('hex').slice(0, 2)
const nodePath = `${colRoot}/hierarchy/nodes/id-${nodeShard}.jsonl.gz`
const nodeRows = gunzipSync(bytesAt(nodePath)).toString('utf8').trimEnd().split(/\r?\n/).map(JSON.parse)
const node = nodeRows.find(row => row.id === id)
assert.ok(node, `COL26.8 usage not found: ${id}`)
assert.deepEqual({ scientificName: node.scientificName, authorship: node.authorship, rank: node.rank, status: node.status, sourceDatasetId: node.sourceDatasetId }, { scientificName: name, authorship: 'Thomas, 1916', rank: 'species', status: 'accepted', sourceDatasetId: datasetId })

const itisBytes = bytesAt(itisCrosswalkPath)
const itis = JSON.parse(gunzipSync(itisBytes).toString('utf8'))
assert.equal(itis.crosswalkType, 'release-pinned-exact-itis-mammalia-authority-crosswalk')
assert.equal(itis.sources.col.releaseAlias, 'COL26.8')
assert.equal(itis.sources.itis.datasetId, 'itis-2026-08-26')
const crosswalk = itis.records.find(row => row.colUsageId === id)
assert.ok(crosswalk, `ITIS exact crosswalk row missing: ${id}`)
assert.equal(crosswalk.status, 'accepted')
assert.equal(crosswalk.exactMatchName, 'Histiotus alienus')
assert.equal(crosswalk.currentName.scientificName, 'Histiotus alienus')
assert.equal(crosswalk.currentName.usage, 'valid')
assert.equal(crosswalk.currentName.tsn, tsn)

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
assert.ok(!existingIds.has(id), `Duplicate dossier COL ID: ${id}`)

const sources = [
  {
    id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115',
    version: 'COL26.8; ChecklistBank dataset 316115, pinned 2026-08-20', publishedAt: '2026-08-20', accessedAt: checkedAt,
    license: 'CC BY 4.0 for the pinned COL release; record used for identity only', licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    rightsHolder: 'Catalogue of Life Foundation', licenseAppliesTo: 'COL26.8 release record', attribution: 'Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk',
    licenseAssessment: 'identity-only', scope: 'Accepted COL26.8 name, authorship, rank, status, source dataset and COL identifier only; no biological claims.',
    url: `https://www.checklistbank.org/dataset/316115/taxon/${id}`, stableId: id, locator: `COL26.8 accepted species usage ${id}`
  },
  {
    id: 'itis', title: 'Integrated Taxonomic Information System (ITIS), via pinned mammal authority crosswalk',
    version: 'ITIS ChecklistBank export 2026-08-26; mammal exact-match crosswalk pinned to COL26.8; accessed 2026-09-24', publishedAt: '2026-08-26', accessedAt: checkedAt,
    license: 'CC0 1.0 for the source ITIS data', licenseVersion: 'CC0-1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    rightsHolder: 'Integrated Taxonomic Information System (ITIS)', licenseAppliesTo: 'ITIS nomenclatural authority data only', attribution: 'ITIS (2026-08-26 export), DOI 10.5066/F7KH0KBK; exact normalized binomial maps to valid TSN 631982.',
    licenseAssessment: 'identity-only', scope: 'Nomenclatural crosswalk for identity corroboration only; it does not establish full biological species-concept equivalence.',
    url: `https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=${tsn}`, stableId: `ITIS TSN ${tsn}`, locator: `Pinned exact crosswalk row ${id}; valid ITIS usage TSN ${tsn}`
  },
  {
    id: 'zookeys-treatment',
    title: 'Cláudio et al. 2023. Rediscovery of Histiotus alienus Thomas, 1916 a century after its description (Chiroptera, Vespertilionidae): distribution extension and redescription. ZooKeys 1174:273–287.',
    url: 'https://doi.org/10.3897/zookeys.1174.108553', stableId: 'doi:10.3897/zookeys.1174.108553',
    version: 'Version of record; published 2023-08-14; DOI 10.3897/zookeys.1174.108553; accessed 2026-09-24', publishedAt: '2023-08-14', accessedAt: checkedAt,
    license: 'Creative Commons Attribution 4.0 International (CC BY 4.0), stated on the article record', licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    rightsHolder: 'Cláudio, Almeida, Novaes, Navarro, Tiepolo, and Moratelli (2023)', licenseAppliesTo: 'Article text and author-generated material; this dossier paraphrases the text and does not redistribute figures or third-party assets.',
    attribution: 'Cláudio VC, Almeida B, Novaes RLM, Navarro MA, Tiepolo LM, Moratelli R (2023), ZooKeys 1174:273–287, https://doi.org/10.3897/zookeys.1174.108553; paraphrased and scope-limited.',
    licenseAssessment: 'item-level-verified',
    scope: 'Peer-reviewed taxonomic redescription of Histiotus alienus based on the holotype and one newly captured adult male; includes comparative morphology, one foraging/capture observation, habitat and two known localities. It is not a complete life-history, phylogenetic, fossil, or conservation survey.',
    locator: 'Species account and comparative treatment, pp. 280–284; Methods, pp. 275–276; Results, pp. 276–277; Figs. 1–3; Appendix I.'
  }
]

const source = 'zookeys-treatment'
const claim = (text, locator, placeTimeScope, lifeStatus) => ({ text, originalLanguage: 'en', translationStatus: 'untranslated', sourceIds: [source], locator, placeTimeScope, lifeStatus })
const dossier = {
  colId: id, scientificName: name, rank: 'species', sourceDatasetId: datasetId, checkedAt,
  identity: {
    method: `The pinned COL26.8 registry row ${id} was verified as accepted rank=species with this full name and authorship and sourceDatasetId 2144. Its COL-ID row in the pinned ITIS 2026-08-26 mammal crosswalk has accepted status and an exact normalized binomial match to valid ITIS TSN ${tsn}; no fuzzy or name-only join was used.`,
    scope: 'This confirms the versioned nomenclatural usage link between COL26.8 and the ITIS authority record. The treatment itself notes historical uncertainty over whether this taxon was treated as a species or within H. montanus/H. macrotus; this dossier preserves the paper’s scope and does not claim a full biological-concept consensus.',
    sourceIds: ['col', 'itis']
  },
  lifeStatusScope: {
    wild: 'Biological observations are restricted to the type specimen and the adult male collected in a mist net at one Brazilian locality in 2018; no complete population or range assessment was performed.',
    domesticated: 'The treatment concerns museum and field specimens and gives no domestication or captive-status assessment. No domestic biology is asserted.',
    fossil: 'No species-level fossil occurrence is asserted; no fossil search was performed.'
  },
  sources,
  facets: {
    morphology: {
      status: 'partially-supported',
      claims: [claim('The authors provide an amended diagnosis from two known specimens (the female holotype and an adult male collected in 2018) and compare it with congeners. Reported diagnostic measurements include forearm length 43.3–44.5 mm, ear length about 27.5 mm, and medial ear-lobe width about 4.5 mm; the authors describe dark bicolored dorsal fur and a low interaural skin band that fades toward the centre. These are account-level characters, not estimates of within-population variation.', 'Species account > Diagnosis and Description, pp. 280–281; Materials examined; Tables 1–2. Measurements are reported by the authors.', 'Nominal species diagnosis based on two known specimens from southern Brazil; measurements include adult specimens, with the second record an adult male. Sex-specific and population-level variation is not established.', 'Wild-caught and historical museum specimens only; no captive or domesticated biology is included.')],
      gaps: ['Diagnosis and measurements are limited to two known specimens; sex, age, seasonal, geographic, and within-population variation are not established.']
    },
    lifeHistory: {
      status: 'partially-supported',
      claims: [claim('The adult male collected in November 2018 was captured about four hours after sunset, at approximately 23:00, and the authors report it had been foraging along a forest-fragment edge beside grassland. This is one event and does not describe the species’ life cycle or reproductive behavior.', 'Results, paragraph beginning “On 21 November 2018, we captured an adult male”; Fig. 1; specimen MN 91624.', 'Single adult male observation at Cerro Chato Farm, Palmas, Paraná, Brazil, 21 November 2018; captured at ca. 23:00. No seasonal or population-level behavior is inferred.', 'One field observation of a wild adult male; no captive observations.')],
      gaps: ['No reproductive cycle, mating, parental care, development, lifespan, seasonality, or repeated behavior observations were assessed.']
    },
    ecology: {
      status: 'partially-supported',
      claims: [claim('The 2018 specimen was captured at the edge of a forest fragment adjacent to grassland within a protected area containing natural grasslands and small, isolated moist Araucaria-forest fragments. Across the two known records, the authors describe the species as associated with dense rainforest, Araucaria and riparian forests, and grasslands; this is a two-locality account, not a complete habitat inventory or interaction network.', 'Methods > field survey setting; Results, paragraph describing Cerro Chato Farm; species account > Distribution; Fig. 2.', 'Cerro Chato Farm, Palmas Grasslands Wildlife Refuge, Paraná, Brazil; observation date 21 November 2018; 1208 m elevation. The broader habitat summary is limited to the two localities known to the authors.', 'One field record from a wild adult male plus the type locality; no generalization to unsampled populations.')],
      gaps: ['Host, prey, predator, parasite, symbiont, roost, and habitat-selection evidence were not comprehensively reviewed; the capture setting is one locality only.']
    },
    evolution: { status: 'not-assessed', claims: [], gaps: ['The paper does not present a species-level phylogeny, divergence-time estimate, or character-evolution analysis for H. alienus; no separate phylogenetic search was performed.'] },
    distribution: {
      status: 'partially-supported',
      claims: [claim('As reported in 2023, H. alienus was known from two localities in southern Brazil: the female holotype from Joinville, Santa Catarina, at sea level, and the adult male collected at Palmas, Paraná, at 1208 m. The authors report the new locality as extending the documented distribution about 280 km west at the same latitude.', 'Species account > Materials examined and Distribution, p. 280; Results; Fig. 3; Appendix I.', 'The treatment’s literature and specimen records available through 2023; Joinville, Santa Catarina, and Palmas, Paraná, Brazil. The two points do not establish a complete global or national range.', 'Wild locality and museum-voucher records; no native/introduced range classification was undertaken.')],
      gaps: ['Only two historical/documented localities were known to the authors; no global database search, range-boundary modelling, native/introduced classification, or sampling-completeness analysis was performed.']
    },
    fossil: { status: 'not-assessed', claims: [], gaps: ['No fossil database or paleontological literature search was performed; no absence-of-fossils conclusion is drawn.'] },
    conservation: { status: 'not-assessed', claims: [], gaps: ['No current IUCN or national conservation registry search was performed. The article cites an older Data Deficient assessment, but it is not independently checked or used as a current status here.'] }
  },
  completeness: {
    status: 'incomplete',
    reasons: [
      'The treatment is limited to two known specimens and one 2018 field observation; it does not establish full life-history, ecological, or geographic coverage.',
      'Evolution, fossil occurrence, and current conservation assessment remain not-assessed.',
      'The article notes historical taxonomic uncertainty for H. alienus; the exact accepted COL-to-ITIS record link does not resolve every biological species-concept question.',
      'No external domain expert review was completed.'
    ]
  },
  expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null }
}

assert.deepEqual(Object.keys(dossier.facets).sort(), [...facets].sort())
assert.equal(dossier.completeness.status, 'incomplete')
assert.ok(Object.values(dossier.facets).every(facet => ['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(facet.status)))
assert.ok(Object.values(dossier.facets).flatMap(facet => facet.claims).every(item => item.sourceIds.every(sourceId => sources.find(row => row.id === sourceId)?.licenseAssessment === 'item-level-verified')))

const raw = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const manifest = {
  schemaVersion: 1, batchId: 'chiroptera-histiotus-alienus-2023', releaseAlias: 'COL26.8',
  input: { path: rawPath, bytes: raw.length, sha256: sha256(raw) },
  shard: { path: shardPath, encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: raw.length, decodedSha256: sha256(raw), compressedBytes: compressed.length, compressedSha256: sha256(compressed), brotliParameters: { mode: 'text', quality: 11 } },
  identityAudit: { colId: id, scientificName: node.scientificName, rank: node.rank, status: node.status, sourceDatasetId: node.sourceDatasetId, parentId: node.parentId, itisScientificName: crosswalk.currentName.scientificName, itisUsage: crosswalk.currentName.usage, itisTsn: crosswalk.currentName.tsn, mappingBasis: 'pinned COL-ID crosswalk row with exact normalized binomial and valid ITIS usage; no fuzzy match' },
  sourceChecksums: { colRegistryManifestSha256: sha256(bytesAt(colManifestPath)), itisCrosswalkCompressedSha256: sha256(itisBytes) },
  generator: 'scripts/build-chiroptera-histiotus-alienus-2023-batch.mjs',
  generatedBy: { predicate: 'COL26.8 rank=species AND status=accepted AND sourceDatasetId=2144; ITIS exact crosswalk status=accepted and currentName.usage=valid', duplicateCheck: 'All base and indexed dossier shards were read and candidate COL ID was absent before generation.' }
}

writeFileSync(resolve(root, rawPath), raw)
writeFileSync(resolve(root, shardPath), compressed)
writeFileSync(resolve(root, batchPath), `${JSON.stringify(manifest, null, 2)}\n`)
process.stdout.write(`${JSON.stringify({ recordCount: 1, colId: id, rawSha256: manifest.input.sha256, shardSha256: manifest.shard.compressedSha256, batchManifest: batchPath })}\n`)
