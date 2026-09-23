import { createHash } from 'node:crypto'
import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, brotliDecompressSync } from 'node:zlib'

const date = '2026-09-24'
const article = 'https://doi.org/10.3390/jof9080862'
const species = [
  {
    id: 'C8SM7', name: 'Amanita circulata Y.Y. Cui, Q. Cai & Zhu L. Yang', fn: '571585',
    scope: 'Type from Puer, Lancang Lahu Autonomous County, Yunnan, China, collected 2016-08-20; the paper also lists dated vouchers from Anhui and Yunnan. The stated eastern and southwestern China range is the authors’ 2023 account, not a global range.',
    morph: 'The species account diagnoses this taxon by filamentous hyphae dominating the inner stipe-base volval remnants and describes the holotype basidioma and microscopic characters.',
    eco: 'The authors report solitary-to-scattered fruiting on soil in subtropical mixed forests with Fagaceae and Pinaceae.',
    evo: 'In the combined multilocus phylogeny, A. circulata is in a monophyletic clade with A. flavidocerea, A. pekeoides, A. verrucosivolva, and three unnamed or provisionally identified taxa.',
    dist: 'The authors state that A. circulata is known from eastern and southwestern China and enumerate type and additional dated collections in Anhui and Yunnan.',
  },
  {
    id: 'C8SP8', name: 'Amanita multicingulata Y.Y. Cui, Q. Cai & Zhu L. Yang', fn: '571586',
    scope: 'Type from Huangshan, Anhui, China, collected 2018-07-13; the article lists additional July 2018 Huangshan vouchers. The stated eastern China range is the authors’ account, not a global range.',
    morph: 'The species account diagnoses A. multicingulata against A. liquii by longer pileal-margin striations, lamellae color and drying response, smaller basidiospores, and subtropical Fagaceae-dominated forest occurrence; microscopic type characters are described.',
    eco: 'The authors report solitary-to-scattered fruiting on soil in subtropical broad-leaved forests dominated by Fagaceae, sometimes mixed with Pinus.',
    evo: 'The combined multilocus phylogeny places A. multicingulata as sister to A. liquii.',
    dist: 'The authors report A. multicingulata as known from eastern China and list the type and additional collections from Huangshan, Anhui, in July 2018.',
  },
  {
    id: 'C8SP9', name: 'Amanita orientalis Q. Cai, Y.Y. Cui & Zhu L. Yang', fn: '571587',
    scope: 'Type EFHAAU 1367 from Huangshan, Anhui, China, collected 2018-09-15; the paper lists one additional Huangshan specimen from 2018-07-14. The stated eastern China range is the authors’ account, not a global range.',
    morph: 'The species account describes the type basidioma and microscopic characters and distinguishes A. orientalis by its spore shape and dimensions from related taxa.',
    eco: 'The authors report solitary-to-scattered fruiting on soil in subtropical forests with Fagaceae and Pinaceae.',
    evo: 'The combined multilocus analysis groups A. orientalis with A. griseofolia and two South Korean collections identified in the paper as A. ceciliae; the article flags those identifications as erroneous.',
    dist: 'The authors report A. orientalis as known from eastern China and list type and additional Huangshan collections from 2018.',
  },
  {
    id: 'C8SPF', name: 'Amanita sinofulva Q. Cai, Y.Y. Cui & Zhu L. Yang', fn: '571588',
    scope: 'Type from Nanjian, Dali, Yunnan, China, collected 2015-06-27; the article lists additional Anhui and Yunnan collections from 2017 and cites broader eastern, central, and southwestern China occurrence. Tibet and Hunan are not asserted here because the paper presents those from an ITS-tree inference.',
    morph: 'The species account describes the type basidioma and microscopic characters and compares its spores and pileus with A. orientifulva and A. suborientifulva.',
    eco: 'The authors report solitary-to-scattered fruiting on soil in subtropical forests dominated by Fagaceae, sometimes mixed with Pinus.',
    evo: 'The authors’ multilocus analysis places A. sinofulva close to A. orientifulva and A. suborientifulva; their ITS analysis also includes additional provisionally or previously misidentified collections.',
    dist: 'The authors report A. sinofulva from eastern, central, and southwestern China and list dated collections from Anhui and Yunnan; the paper separately attributes Tibet and Hunan to ITS-tree inference, which is excluded from this direct occurrence claim.',
  },
]

const fungiCrosswalk = JSON.parse(brotliDecompressSync(readFileSync('data/sources/fungi-species-fungorum-crosswalk-col26.8.json.br')))
for (const item of species) {
  const row = fungiCrosswalk.records.find(record => record.colId === item.id)
  assert.ok(row, `Missing pinned fungi crosswalk row for ${item.id}`)
  assert.equal(row.sourceDatasetId, '2073')
  assert.equal(row.scientificName, item.name)
  assert.equal(row.indexFungorumId, item.fn)
  assert.equal(row.status, 'accepted')
  assert.equal(row.mappingBasis, 'exact-source-dataset-and-verbatim-label')
}

const claim = (text, locator, placeTimeScope, lifeStatus) => ({
  text,
  originalLanguage: 'en',
  translationStatus: 'untranslated',
  sourceIds: ['cui2023'],
  locator,
  placeTimeScope,
  lifeStatus,
})

const partial = (text, locator, scope, lifeStatus, gap) => ({
  status: 'partially-supported',
  claims: [claim(text, locator, scope, lifeStatus)],
  gaps: [gap],
})

const records = species.map((item) => {
  const scope = item.scope
  const identitySourceIds = ['col', 'fungalNames', 'cui2023']
  return {
    colId: item.id,
    scientificName: item.name,
    rank: 'species',
    sourceDatasetId: '2073',
    checkedAt: date,
    identity: {
      method: `COL26.8 accepted usage was checked by COL ID and exact accepted label against the pinned COL hierarchy; Species Fungorum Plus dataset 2073 crosswalk maps this COL ID by exact source-dataset-and-verbatim-label to Index Fungorum record / Fungal Names FN ${item.fn}. The 2023 paper independently names the same species and cites that FN identifier.`,
      scope: 'The accepted COL26.8 species usage and its explicitly linked Species Fungorum / Fungal Names name usage. Biological claims retain the paper’s species treatment, collection, place, and study limits.',
      sourceIds: identitySourceIds,
    },
    lifeStatusScope: {
      wild: 'Claims concern the authors’ field-collected fungal basidiomata and herbarium vouchers in natural forest settings as described in the paper.',
      domesticated: 'Not assessed; no domestication or cultivation claim is made.',
      fossil: 'Not assessed; no fossil occurrence claim is made.',
    },
    sources: [
      {
        id: 'col',
        title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; underlying fungal source dataset 2073',
        url: `https://www.checklistbank.org/dataset/316115/taxon/${item.id}`,
        stableId: `COL26.8 usage ${item.id}`,
        version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
        publishedAt: '2026-08-20',
        accessedAt: date,
        locator: `Accepted species usage ${item.id}`,
        license: 'Not independently verified; identity-only use',
        licenseAppliesTo: 'Checklist taxon identity metadata only',
        licenseAssessment: 'identity-only',
        scope: 'Accepted-name identity, authorship, rank, status and sourceDatasetId only; no biological evidence copied.',
      },
      {
        id: 'fungalNames',
        title: 'Species Fungorum Plus (Royal Botanic Gardens, Kew), Index Fungorum / Fungal Names taxon record',
        url: `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${item.fn}`,
        stableId: `Index Fungorum RecordID ${item.fn}; Fungal Names FN ${item.fn}`,
        version: 'Species Fungorum Plus, version Apr 2024; ChecklistBank dataset 2073',
        publishedAt: '2024-04-28',
        accessedAt: date,
        locator: `COL26.8 crosswalk row ${item.id}; Index Fungorum record ${item.fn}`,
        license: 'CC BY 4.0',
        licenseVersion: '4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
        rightsHolder: 'Royal Botanic Gardens, Kew / Species Fungorum Plus contributors',
        licenseAppliesTo: 'Species Fungorum Plus taxonomic checklist record used to verify name identity',
        attribution: `Royal Botanic Gardens, Kew (2023), Species Fungorum Plus, DOI 10.15468/ts7wsb; Index Fungorum record ${item.fn}`,
        licenseAssessment: 'identity-only',
        scope: 'Identity link only; not a biological evidence source.',
      },
      {
        id: 'cui2023',
        title: 'Cui et al. 2023. Species Diversity of Amanita Section Vaginatae in Eastern China, with a Description of Four New Species. Journal of Fungi 9(8):862',
        url: article,
        stableId: `doi:10.3390/jof9080862; Fungal Names FN ${item.fn}`,
        version: 'Version of record, Journal of Fungi 9(8), article 862',
        publishedAt: '2023-08-19',
        accessedAt: date,
        locator: `${item.name}, Fungal Names FN ${item.fn}; section 3.2`,
        license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
        licenseVersion: '4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
        rightsHolder: '© 2023 the authors',
        licenseAppliesTo: 'Published article text; this dossier paraphrases scientific claims and does not redistribute article figures or full text',
        attribution: 'Cui, Y.-Y.; Hao, Y.-J.; Guo, T.; Yang, Z.L.; Cai, Q. (2023), Journal of Fungi 9(8):862. https://doi.org/10.3390/jof9080862',
        licenseAssessment: 'item-level-verified',
        scope: 'Original taxonomic study of Amanita sect. Vaginatae in China; each cited passage is a named species account or paper phylogeny.',
      },
    ],
    facets: {
      morphology: partial(item.morph, `Section 3.2, ${item.name}, Diagnosis and Description; Type`, scope, 'Wild fungal type collection described by the authors.', 'One taxonomic paper and its sampled material do not cover developmental variation, broad population variation, or a complete diagnostic synthesis.'),
      lifeHistory: { status: 'not-assessed' },
      ecology: partial(item.eco, `Section 3.2, ${item.name}, Habitat`, scope, 'Wild field collections; the stated forest association does not establish a physiological host relationship.', 'The account does not establish interaction mechanisms, resource dependence, seasonality, or population-level ecology.'),
      evolution: partial(item.evo, 'Results, phylogenetic relationships; Figure 1 and Figures S1–S4', scope, 'Modern herbarium collections analyzed in the cited study.', 'Placement is limited to the study taxa, loci, sampling, and analyses; no divergence-time or broader phylogenomic synthesis was assessed.'),
      distribution: partial(item.dist, `Section 3.2, ${item.name}, Type, Additional specimens examined, and Distribution`, scope, 'Reported field-collected specimens; cultivated, introduced, and global range status not assessed.', 'The paper reports its known range and examined collections; no exhaustive global occurrence search or native/introduced assessment was completed.'),
      fossil: { status: 'not-assessed' },
      conservation: { status: 'not-assessed' },
    },
    completeness: {
      status: 'incomplete',
      reasons: [
        'One original taxonomic study supplies direct evidence for only the cited morphology, field habitat, sampled regional distribution, and study-specific multilocus placement; these facets remain partial.',
        'Life history, fossils, and conservation have not been assessed; no facet has a reproducible systematic search and screening log.',
        'The species concept is linked by the source-owned Fungal Names / Index Fungorum identifier, but broader taxonomic concept reconciliation and external expert review have not been completed.',
      ],
    },
    expertReview: { status: 'not-reviewed', reviewers: [] },
  }
})

const decoded = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`)
const compressed = brotliCompressSync(decoded)
const path = 'data/knowledge/catalogue-dossiers-amanita-vaginatae-2023.jsonl.br'
writeFileSync(path, compressed)
const indexPath = 'data/knowledge/catalogue-dossier-shards.json'
const index = JSON.parse(readFileSync(indexPath, 'utf8'))
const existingShard = index.shards.findIndex(shard => shard.path === path)
if (existingShard >= 0) {
  index.recordCount -= index.shards[existingShard].recordCount
  index.shards.splice(existingShard, 1)
}
index.recordCount += records.length
index.shards.push({
  path,
  recordCount: records.length,
  decodedSha256: createHash('sha256').update(decoded).digest('hex'),
  compressedSha256: createHash('sha256').update(compressed).digest('hex'),
})
writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`)
console.log(JSON.stringify({ added: records.map(record => record.colId), recordCount: index.recordCount }))
