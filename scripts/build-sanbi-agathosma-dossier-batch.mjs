import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, brotliDecompressSync, constants } from 'node:zlib'

const rawPath = 'data/knowledge/catalogue-dossiers-sanbi-agathosma-batch.json'
const seedPath = 'data/knowledge/catalogue-dossiers-sanbi-cyclopia-batch.json'
const archivePath = 'data/sources/sanbi-descriptions.jsonl.br'
const crosswalkPath = 'data/sources/wfo-plant-crosswalk-col26.8.json.br'
const shardPath = 'data/knowledge/catalogue-dossiers-sanbi-agathosma.jsonl.br'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')

const species = [
  {
    id: '5TQVG', name: 'Agathosma cordifolia Pillans', wfo: 'wfo-0000523391', page: 709,
    morphRow: 11460, habitatRow: 31988,
    morphology: 'The account describes a tangled shrub to 1 m with broad, reflexed leaves; flowers occur in small, dense heads and are white to purple, and the fruits are five-chambered.',
    flowering: 'The account gives September to October as the flowering period.',
    habitat: 'The account records stream banks as habitat.',
    range: 'The account associates the species with Skurweberg.',
    rangeScope: 'Printed range line gives NW (Skurweberg); NW is retained as the source abbreviation and not expanded here.',
  },
  {
    id: '5TQVN', name: 'Agathosma florida Sond.', wfo: 'wfo-0000523434', page: 711,
    morphRow: 7030, habitatRow: 32002,
    morphology: 'The account describes a slender shrublet to 30 cm with white flowers in terminal clusters and three-chambered fruits.',
    flowering: 'The account gives September as the flowering month.',
    habitat: 'The account records coastal hills as habitat.',
    range: 'The account associates the species with Swellendam.',
    rangeScope: 'Printed range line gives LB (Swellendam); LB is retained as the source abbreviation and not expanded here.',
  },
  {
    id: '5TQVQ', name: 'Agathosma longicornu Pillans', wfo: 'wfo-0000523507', page: 716,
    morphRow: 11470, habitatRow: 32024,
    morphology: 'The account describes a single-stemmed, harsh, twiggy shrublet to 25 cm, scarcely aromatic, with white flowers in dense terminal clusters and two-chambered, long-horned fruits.',
    flowering: 'The account gives September as the flowering month.',
    habitat: 'The account records stony upper sandstone slopes as habitat.',
    range: 'The account associates the species with the Cederberg.',
    rangeScope: 'Printed range line gives NW (Cederberg); NW is retained as the source abbreviation and not expanded here.',
  },
  {
    id: '5TQVR', name: 'Agathosma gonaquensis Eckl. & Zeyh.', wfo: 'wfo-0000523460', page: 712,
    morphRow: 7039, habitatRow: 32009,
    morphology: 'The account describes a single-stemmed, leafy shrub over 1 m with an herb scent; flowers form dense white heads and the fruits are three-chambered.',
    flowering: 'The account gives January to December as the flowering period.',
    habitat: 'The account records mainly coastal grasslands as habitat.',
    range: 'The account associates the species with Uitenhage to Port Elizabeth.',
    rangeScope: 'Printed range line gives SE (Uitenhage to Port Elizabeth); SE is retained as the source abbreviation and not expanded here.',
  },
  {
    id: '5TQVS', name: 'Agathosma insignis (Compton) Pillans', wfo: 'wfo-0000523482', page: 709,
    morphRow: 7044, habitatRow: 32014,
    morphology: 'The account describes a sturdy shrub to 1.4 m with relatively large leaves; its large axillary flowers are white with pink dots, and it has five carpels.',
    flowering: 'The account gives September to November as the flowering period.',
    habitat: 'The account records stream banks as habitat.',
    range: 'The account associates the species with the Olifants River Valley.',
    rangeScope: 'Printed range line gives NW (Olifants River Valley); NW is retained as the source abbreviation and not expanded here.',
  },
]

const crosswalk = JSON.parse(brotliDecompressSync(readFileSync(crosswalkPath)))
const archive = brotliDecompressSync(readFileSync(archivePath)).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
const template = JSON.parse(readFileSync(seedPath, 'utf8'))[0]
const generated = []

for (const item of species) {
  const matches = crosswalk.colRecords.filter(row => row.colId === item.id)
  assert.equal(matches.length, 1, `Expected one COL crosswalk row for ${item.id}`)
  const col = matches[0]
  assert.equal(col.status, 'accepted')
  assert.equal(col.mappingBasis, 'exact-wfo-accepted-name-and-authorship')
  assert.equal(col.wfoId, item.wfo)
  assert.equal(col.colScientificName, item.name)
  const entry = archive.find(row => row.colId === item.id && row.wfoId === item.wfo)
  assert.ok(entry, `Expected SANBI e-Flora identity row for ${item.id}`)
  const morphologyRow = entry.descriptions.find(row => row.sourceId === '14398.0' && row.type === 'Morphology')
  const habitatRow = entry.descriptions.find(row => row.sourceId === '14398.0' && row.type === 'Habitat')
  assert.ok(morphologyRow && habitatRow, `Expected both source description types for ${item.id}`)
  assert.equal(morphologyRow.rowNumber, item.morphRow)
  assert.equal(habitatRow.rowNumber, item.habitatRow)

  const dossier = structuredClone(template)
  const account = item.name.replace(/^Agathosma\s+/, '').replace(/\s+(?:Pillans|Sond\.|Eckl\. & Zeyh\.|\(Compton\) Pillans)$/, '')
  dossier.colId = item.id
  dossier.scientificName = item.name
  dossier.sourceDatasetId = col.colSourceDatasetId
  dossier.identity.method = `COL26.8 ID ${item.id} is accepted species ${item.name} (source dataset ${col.colSourceDatasetId}). The pinned WFO 2026-06 crosswalk maps this exact accepted COL name and authorship to exactly one accepted WFO species, ${item.wfo}. The SANBI e-Flora row carries the same WFO identifier; the individual Strelitzia 29 account uses the same binomial and authorship.`
  dossier.identity.scope = `COL26.8 nominal accepted species concept. SANBI evidence is the individual account printed under Agathosma ${account} on p. ${item.page} of Strelitzia 29 (2012), scoped to that regional flora account; no equivalence to all populations or later concepts is asserted.`
  dossier.lifeStatusScope = {
    wild: 'The printed account concerns the South African regional flora; each claim retains the account’s stated regional scope.',
    domesticated: 'Not assessed; no cultivated or managed material is inferred.',
    fossil: 'Not assessed; no fossil conclusion is inferred from this extant flora account.',
  }
  dossier.sources[0].title = `Catalogue of Life COL26.8, ChecklistBank dataset 316115; underlying source dataset ${col.colSourceDatasetId}`
  dossier.sources[0].url = `https://www.checklistbank.org/dataset/316115/taxon/${item.id}`
  dossier.sources[0].stableId = `COL26.8:${item.id}`
  dossier.sources[0].locator = `Accepted taxon usage ${item.id}; rank species; source dataset ${col.colSourceDatasetId}`
  dossier.sources[1].url = `https://list.worldfloraonline.org/${item.wfo}-2026-06`
  dossier.sources[1].stableId = `wfo:${item.wfo}-2026-06`
  dossier.sources[1].locator = `Accepted species record ${item.wfo} and exact accepted-name/authorship mapping from COL ${item.id}`
  dossier.sources[2].stableId = `SANBI e-Flora 1.36 source identifier 14398.0; morphology row ${item.morphRow}; WFO ${item.wfo}`
  dossier.sources[2].title = 'SANBI e-Flora of South Africa archive, version 1.36'
  dossier.sources[2].locator = `Description row ${item.morphRow}, type Morphology, source identifier 14398.0; row ${item.habitatRow}, type Habitat, same source identifier`
  dossier.sources[3] = {
    ...dossier.sources[3],
    title: 'Bean, P.A. & Trinder-Smith, T.H. 2012. Rutaceae: Agathosma Willd. In Manning & Goldblatt (eds), Plants of the Greater Cape Floristic Region 1: The Core Cape Flora, Strelitzia 29, pp. 708–717.',
    url: 'https://opus.sanbi.org/items/be012e11-a0da-4861-822f-65a129f6652f/full',
    stableId: 'SANBI Opus handle 20.500.12143/5609; PDF Manning_et_al_2012_Strelitzia_29.pdf',
    version: '2012, Strelitzia 29, Agathosma treatment pp. 708–717; item license recorded in SANBI Opus',
    locator: `Printed p. ${item.page}, individual Agathosma ${account} account; morphology, flowering period, habitat and regional range lines`,
    attribution: `Bean, P.A. & Trinder-Smith, T.H. 2012. Rutaceae: Agathosma Willd. In Manning & Goldblatt (eds), Strelitzia 29, p. ${item.page}. SANBI. Item license CC BY-SA 4.0.`,
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
    licenseVersion: '4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    rightsHolder: 'South African National Biodiversity Institute (SANBI), as stated on the SANBI Opus item',
    licenseAppliesTo: 'The Strelitzia 29 book item and its PDF as stated on the item-specific SANBI Opus record',
    licenseAssessment: 'item-level-verified',
    scope: 'Direct species account in a SANBI-published regional flora; claims below are paraphrased and retain this account’s regional scope.',
  }
  dossier.facets.morphology.claims[0].text = item.morphology
  dossier.facets.morphology.claims[0].locator = `Printed p. ${item.page}, individual Agathosma ${account} account; SANBI e-Flora v1.36 Morphology row ${item.morphRow} (source identifier 14398.0)`
  dossier.facets.morphology.claims[0].sourceIds = ['strelitzia29']
  dossier.facets.morphology.claims[0].placeTimeScope = `Morphology as summarized in the 2012 regional flora account; no sex-specific or population sample is given.`
  dossier.facets.morphology.claims[0].lifeStatus = 'Extant regional flora account; cultivation status not specified.'
  dossier.facets.lifeHistory.claims[0] = {
    text: item.flowering,
    originalLanguage: 'en', translationStatus: 'untranslated', sourceIds: ['strelitzia29'],
    locator: `Printed p. ${item.page}, flowering period in the individual Agathosma ${account} account`,
    placeTimeScope: 'Phenology stated in the 2012 South African regional account; observation locations and annual sampling are not specified.',
    lifeStatus: 'Wild-status observations are not separately described.',
  }
  dossier.facets.ecology.claims[0].text = item.habitat
  dossier.facets.ecology.claims[0].locator = `Printed p. ${item.page}, habitat line in the individual Agathosma ${account} account; SANBI e-Flora v1.36 Habitat row ${item.habitatRow} (source identifier 14398.0)`
  dossier.facets.ecology.claims[0].sourceIds = ['strelitzia29']
  dossier.facets.ecology.claims[0].placeTimeScope = 'Habitat as reported by the 2012 South African regional flora; not a complete environmental envelope.'
  dossier.facets.ecology.claims[0].lifeStatus = 'Regional habitat account; management status not specified.'
  dossier.facets.distribution.claims[0].text = item.range
  dossier.facets.distribution.claims[0].locator = `Printed p. ${item.page}, distribution line in the individual Agathosma ${account} account`
  dossier.facets.distribution.claims[0].placeTimeScope = item.rangeScope
  dossier.facets.distribution.claims[0].lifeStatus = 'Native, introduced, cultivated and escaped status are not distinguished in this short range summary.'
  dossier.facets.evolution.status = 'not-assessed'
  dossier.facets.evolution.gaps = ['No species-level phylogenetic or comparative study was assessed.']
  dossier.facets.fossil.status = 'not-assessed'
  dossier.facets.fossil.gaps = ['No fossil search was conducted.']
  dossier.facets.conservation.status = 'not-assessed'
  dossier.facets.conservation.gaps = ['No qualifying conservation assessment was reviewed.']
  dossier.completeness.status = 'incomplete'
  dossier.completeness.reasons = [
    'Only four regional account topics have preliminary evidence; required scientific coverage checks across all seven facets are incomplete.',
    'Claims have not received verified translations or independent expert review.',
    'No systematic evidence search across literature and databases has been completed.',
  ]
  generated.push(dossier)
}

assert.equal(new Set(generated.map(record => record.colId)).size, 5)
const raw = `${JSON.stringify(generated, null, 2)}\n`
writeFileSync(rawPath, raw)
const decoded = Buffer.from(`${generated.map(record => JSON.stringify(record)).join('\n')}\n`)
const compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } })
writeFileSync(shardPath, compressed)
process.stdout.write(`${JSON.stringify({ rawPath, shardPath, count: generated.length, decodedSha256: sha256(decoded), compressedSha256: sha256(compressed) })}\n`)
