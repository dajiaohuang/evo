import { createHash } from 'node:crypto'
import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, brotliDecompressSync } from 'node:zlib'

const accessedAt = '2026-09-24'
const articleUrl = 'https://doi.org/10.3897/mycokeys.102.112565'
const species = [
  {
    colId: 'CC6RS',
    scientificName: 'Tatraea clepsydriformis C.J.Y. Li & Q. Zhao',
    indexFungorumId: '901178',
    scope: 'The article reports a type collection from Jingdong County, Puer City, Yunnan, China (2455 m; 2022-08-23) and three other dated collections in Yunnan from 2021–2022. This is the study’s collection scope, not a global range.',
    morphology: 'In the species description, fresh apothecia were 1.3–3.5 mm wide (mean 2.5 ± 0.7 mm, n=13); dry apothecia were 0.9–1.3 × 0.6–0.9 mm (mean 1.1 ± 0.15 × 0.7 ± 0.12 mm, n=13). The sampled apothecia were gregarious, superficial, hourglass-shaped or cupulate, glabrous, and had a wide stipe.',
    morphologyLocator: 'Species treatment T. clepsydriformis, Description; Figure 5; holotype HKAS 128275',
    ecology: 'The authors describe this fungus as saprobic on decayed oak branches; listed specimens were collected on decayed oak twigs or other decayed wood, including two records with ant nests.',
    ecologyLocator: 'Species treatment T. clepsydriformis, Description and Material examined; holotype HKAS 128275',
    evolution: 'In the combined LSU and ITS phylogeny, the study collections of T. clepsydriformis clustered with T. griseoturcoisina (85% maximum-likelihood bootstrap, 0.96 Bayesian posterior probability). This is a placement in that study’s sampled tree, not a divergence-time estimate.',
    evolutionLocator: 'Results, Phylogenetic analyses; Figure 2; Figure 3C; discussion of provisional genus placement',
    distribution: 'The treatment lists the type at Jingdong County, Puer City (2455 m, 2022-08-23), plus collections at Panlong District, Kunming (1920 m, 2022-05-29), Yeya Lake (1900 m, 2021-07-03), and Sanjian Mountain (1950 m, 2021-12-18). These are the documented study localities.',
    distributionLocator: 'Species treatment T. clepsydriformis, Holotype and Material examined; vouchers HKAS 128275, 128266, 128264, 128267',
  },
  {
    colId: 'CC6RW',
    scientificName: 'Tatraea griseoturcoisina C.J.Y. Li & Q. Zhao',
    indexFungorumId: '901179',
    scope: 'The paper reports two collections from Menghai County, Xishuangbanna, Yunnan, China, at 1660 m and 1500 m on 2022-09-08. The article’s study localities are not a global range.',
    morphology: 'In the species description, fresh apothecia were 2.5–4.0 mm wide (mean 3.1 ± 0.4 mm, n=27); dry apothecia were 1.0–2.1 × 0.6–0.8 mm (mean 1.6 ± 0.3 × 0.7 ± 0.1 mm, n=20). The authors describe scattered or gregarious, superficial discoid apothecia with a short stipe and greyish-turquoise discs when fresh in wet habitat, changing with drying conditions.',
    morphologyLocator: 'Species treatment T. griseoturcoisina, Description; Figure 6; holotype HKAS 128276',
    ecology: 'The authors describe T. griseoturcoisina as saprobic on decayed branches; both listed collections came from decayed oak branches in a managed plantation.',
    ecologyLocator: 'Species treatment T. griseoturcoisina, Description and Material examined; vouchers HKAS 128276 and 128277',
    evolution: 'In the combined LSU and ITS phylogeny, T. griseoturcoisina grouped with T. clepsydriformis (85% maximum-likelihood bootstrap, 0.96 Bayesian posterior probability). The five-locus PHI comparison found no significant recombination between the sampled groups (Φw=0.4185).',
    evolutionLocator: 'Results, Phylogenetic analyses; Figure 2; Figure 3C; species treatment Notes',
    distribution: 'The treatment lists the type and one paratype from Menghai County, Xishuangbanna, Yunnan, collected on 2022-09-08 at 1660 m and 1500 m, respectively. These are the documented study localities.',
    distributionLocator: 'Species treatment T. griseoturcoisina, Holotype and Material examined; vouchers HKAS 128276 and 128277',
  },
  {
    colId: 'CC6RZ',
    scientificName: 'Tatraea yunnanensis C.J.Y. Li & Q. Zhao',
    indexFungorumId: '901180',
    scope: 'The article reports two collections from Yunnan, China: Jingdong County, Puer City (1455 m, 2022-08-23) and Tengchong City (1714 m, 2022-08-16). The study’s localities do not establish a global range.',
    morphology: 'The species description reports dry apothecia 3.8–5.0 mm wide × 2.5–4.1 mm high (mean 4.8 ± 0.8 × 3.7 ± 0.8 mm, n=10); the sampled fruiting bodies were scattered, superficial when fresh, short-stipitate and glabrous. The description records brown receptacles and pastel-green to light-green discs.',
    morphologyLocator: 'Species treatment T. yunnanensis, Description and Notes; Figure 7; holotype HKAS 128273',
    ecology: 'The authors describe T. yunnanensis as saprobic on decayed wood; the two listed collections were made from decayed wood.',
    ecologyLocator: 'Species treatment T. yunnanensis, Description and Material examined; vouchers HKAS 128273 and 128272',
    evolution: 'In the combined LSU and ITS phylogeny, T. yunnanensis was sister to T. macrospora (98% maximum-likelihood bootstrap, 1.0 Bayesian posterior probability). The reported PHI value was Φw=1.0 for that pair.',
    evolutionLocator: 'Results, Phylogenetic analyses; Figure 2; Figure 3A; species treatment Notes',
    distribution: 'The article lists the type from Jingdong County, Puer City, Yunnan (1455 m, 2022-08-23) and a paratype from Tengchong City, Yunnan (1714 m, 2022-08-16). These are the documented study localities.',
    distributionLocator: 'Species treatment T. yunnanensis, Holotype and Material examined; vouchers HKAS 128273 and 128272',
  },
  {
    colId: 'CC6S2',
    scientificName: 'Tatraea yuxiensis C.J.Y. Li & Q. Zhao',
    indexFungorumId: '901187',
    scope: 'The article reports two collections from Xinping County, Yuxi City, Yunnan, China: the type at 2090 m on 2022-06-05 and a paratype at 2340 m on 2022-06-06. The article’s localities do not establish a global range.',
    morphology: 'The species description reports fresh apothecia 2.3–4.2 mm wide (mean 3.0 ± 0.6 mm, n=15); dry apothecia were 1.2–2.0 (–2.5) × 0.47–0.72 mm (mean 1.6 ± 0.3 × 0.58 ± 0.09 mm, n=18). Sampled apothecia were scattered or gregarious, disk-like, short-stipitate, and orange-grey to brownish-grey when fresh.',
    morphologyLocator: 'Species treatment T. yuxiensis, Description and Notes; Figure 8; holotype HKAS 128268',
    ecology: 'The authors describe T. yuxiensis as saprobic on decayed wood; the type was collected from soft decayed unknown wood in a managed plantation, and the paratype from decayed unknown wood.',
    ecologyLocator: 'Species treatment T. yuxiensis, Description and Material examined; vouchers HKAS 128268 and 128270',
    evolution: 'In the combined LSU and ITS phylogeny, T. yuxiensis was sister to T. aseptata (100% maximum-likelihood bootstrap, 1.0 Bayesian posterior probability). The reported PHI value for that pair was Φw=1.0.',
    evolutionLocator: 'Results, Phylogenetic analyses; Figure 2; Figure 3B; species treatment Notes',
    distribution: 'The treatment lists the type and one paratype from Xinping County, Yuxi City, Yunnan, at 2090 m (2022-06-05) and 2340 m (2022-06-06), respectively. These are the documented study localities.',
    distributionLocator: 'Species treatment T. yuxiensis, Holotype and Material examined; vouchers HKAS 128268 and 128270',
  },
]

const crosswalk = JSON.parse(brotliDecompressSync(readFileSync('data/sources/fungi-species-fungorum-crosswalk-col26.8.json.br')))
const speciesNodes = []
const speciesDir = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/fungi'
for (const filename of ['species-000.jsonl.gz', 'species-001.jsonl.gz', 'species-002.jsonl.gz', 'species-003.jsonl.gz', 'species-004.jsonl.gz']) {
  const text = (await import('node:zlib')).gunzipSync(readFileSync(`${speciesDir}/${filename}`)).toString('utf8')
  speciesNodes.push(...text.trim().split('\n').map(line => JSON.parse(line)))
}
const existingDossiers = (await import('../scripts/catalogue-dossier-store.mjs')).readCatalogueDossiers().records
const dossierIds = new Set(existingDossiers.map(record => record.colId))
for (const item of species) {
  const col = speciesNodes.find(record => record.id === item.colId)
  const authority = crosswalk.records.find(record => record.colId === item.colId)
  assert.deepEqual(
    { id: col?.id, name: col?.scientificName, rank: col?.rank, status: col?.status, sourceDatasetId: col?.sourceDatasetId },
    { id: item.colId, name: item.scientificName, rank: 'species', status: 'accepted', sourceDatasetId: '2073' },
    `Pinned COL26.8 species identity mismatch: ${item.colId}`,
  )
  assert.equal(authority?.sourceDatasetId, '2073')
  assert.equal(authority?.scientificName, item.scientificName)
  assert.equal(authority?.indexFungorumId, item.indexFungorumId)
  assert.equal(authority?.status, 'accepted')
  assert.equal(authority?.mappingBasis, 'exact-source-dataset-and-verbatim-label')
  assert.ok(!dossierIds.has(item.colId), `Dossier already exists for ${item.colId}`)
}

const gap = {
  morphology: 'The account describes measured collection material, but a genus-wide diagnosis, additional populations, developmental stages, and within-species variation were not systematically assessed.',
  ecology: 'The source describes substrate and saprobic habit, but interaction mechanisms, host identity for unidentified wood, seasonality, and population ecology remain unassessed.',
  evolution: 'The placements are specific to one study’s sampled taxa and loci; broader phylogenomic evidence, alternative topologies, and divergence times were not reviewed. The authors also note that genus placement remains provisional because the type species lacks genetic data.',
  distribution: 'Only the named Yunnan study collections were reviewed; no global occurrence search, georeferenced range boundary, or native/introduced assessment was completed.',
}

const makeClaim = (text, locator, placeTimeScope, lifeStatus) => ({
  text,
  originalLanguage: 'en',
  translationStatus: 'untranslated',
  sourceIds: ['li2024'],
  locator,
  placeTimeScope,
  lifeStatus,
})
const partial = (item, facet) => ({
  status: 'partially-supported',
  claims: [makeClaim(item[facet], item[`${facet}Locator`], item.scope, 'Claims apply to the field collections and taxonomic account identified by the cited voucher; do not infer beyond those specimens.')],
  gaps: [gap[facet]],
})

const records = species.map(item => ({
  colId: item.colId,
  scientificName: item.scientificName,
  rank: 'species',
  sourceDatasetId: '2073',
  checkedAt: accessedAt,
  identity: {
    method: `Exact COL26.8 ID, accepted name, authorship, rank, status, and sourceDatasetId were verified against the pinned Fungi resource pack. The COL26.8 Species Fungorum Plus crosswalk maps this COL ID and exact accepted label to Index Fungorum record ${item.indexFungorumId}; the original article names the same species and prints the same Index Fungorum identifier.`,
    scope: 'The accepted COL26.8 species usage and the linked source-owned Index Fungorum name usage. Biological claims retain the named species treatment, vouchers, collection localities, and study limitations.',
    sourceIds: ['col', 'fungalNames', 'li2024'],
  },
  lifeStatusScope: {
    wild: 'Claims concern field-collected fungal specimens from decayed wood in the named Yunnan collection settings; some type localities are managed plantations. The paper does not characterize all management or population contexts.',
    domesticated: 'No domestication or cultivation claim is made; managed plantation collections are identified as such in the source.',
    fossil: 'Not assessed; no fossil occurrence claim is made.',
  },
  sources: [
    {
      id: 'col',
      title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; underlying fungal source dataset 2073',
      url: `https://www.checklistbank.org/dataset/316115/taxon/${item.colId}`,
      stableId: `COL26.8 usage ${item.colId}`,
      version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
      publishedAt: '2026-08-20',
      accessedAt,
      locator: `Accepted species usage ${item.colId}`,
      license: 'Not independently verified; identity-only use',
      licenseAppliesTo: 'Pinned checklist identity metadata only',
      licenseAssessment: 'identity-only',
      scope: 'Accepted name, authorship, rank, status, and sourceDatasetId only; no biological evidence copied.',
    },
    {
      id: 'fungalNames',
      title: 'Species Fungorum Plus / Index Fungorum, Royal Botanic Gardens, Kew',
      url: `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${item.indexFungorumId}`,
      stableId: `Index Fungorum RecordID ${item.indexFungorumId}`,
      version: 'Species Fungorum Plus, version Apr 2024; ChecklistBank dataset 2073',
      publishedAt: '2024-04-28',
      accessedAt,
      locator: `COL26.8 crosswalk row ${item.colId}; Index Fungorum record ${item.indexFungorumId}`,
      license: 'CC BY 4.0 (dataset metadata declaration)',
      licenseVersion: '4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      rightsHolder: 'Royal Botanic Gardens, Kew / Species Fungorum Plus contributors',
      licenseAppliesTo: 'Species Fungorum Plus checklist taxonomic metadata; used for identity only',
      attribution: `Royal Botanic Gardens, Kew (2023), Species Fungorum Plus, DOI 10.15468/ts7wsb; Index Fungorum record ${item.indexFungorumId}`,
      licenseAssessment: 'identity-only',
      scope: 'Exact name-usage identity link only; not a source of biological claims.',
    },
    {
      id: 'li2024',
      title: 'Li et al. 2024. Additional four species of Tatraea (Leotiomycetes, Helotiales) in Yunnan Province, China. MycoKeys 102:127–154',
      url: articleUrl,
      stableId: `doi:10.3897/mycokeys.102.112565; Index Fungorum IF${item.indexFungorumId}`,
      version: 'Version of record, MycoKeys 102, pp. 127–154',
      publishedAt: '2024-02-14',
      accessedAt,
      locator: `Species treatment ${item.scientificName}; Index Fungorum IF${item.indexFungorumId}`,
      license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
      licenseVersion: '4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      rightsHolder: '© 2024 the individual article authors',
      licenseAppliesTo: 'Published article text; dossier statements are paraphrases and do not redistribute full text or figures',
      attribution: 'Li C.-J.-Y., Chethana K.W.T., Eungwanichayapant P.D., Zhou D.-Q., Zhao Q. (2024). MycoKeys 102:127–154. https://doi.org/10.3897/mycokeys.102.112565',
      licenseAssessment: 'item-level-verified',
      scope: 'Original taxonomic study; claims cite only the species-specific treatment, material examined, or study phylogeny.',
    },
  ],
  facets: {
    morphology: partial(item, 'morphology'),
    lifeHistory: { status: 'not-assessed' },
    ecology: partial(item, 'ecology'),
    evolution: partial(item, 'evolution'),
    distribution: partial(item, 'distribution'),
    fossil: { status: 'not-assessed' },
    conservation: { status: 'not-assessed' },
  },
  completeness: {
    status: 'incomplete',
    reasons: [
      'Only one original taxonomic paper was reviewed; four facets have limited species-treatment claims and remain partial.',
      'Life history, fossils, and conservation remain not-assessed; no facet has a systematic literature and database search log.',
      'The linked Index Fungorum identity is exact for this COL usage, but broad species-concept reconciliation and external expert review have not been completed.',
    ],
  },
  expertReview: { status: 'not-reviewed', reviewers: [] },
}))

const raw = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`)
const compressed = brotliCompressSync(raw)
const rawPath = 'data/knowledge/catalogue-dossiers-tatraea-2024.jsonl'
const compressedPath = `${rawPath}.br`
const manifestPath = `${rawPath}.manifest.json`
const sha = value => createHash('sha256').update(value).digest('hex')
writeFileSync(rawPath, raw)
writeFileSync(compressedPath, compressed)
writeFileSync(manifestPath, `${JSON.stringify({ releaseAlias: 'COL26.8', recordCount: records.length, decodedSha256: sha(raw), compressedSha256: sha(compressed), colIds: records.map(record => record.colId) }, null, 2)}\n`)
console.log(JSON.stringify({ rawPath, compressedPath, manifestPath, recordCount: records.length, decodedSha256: sha(raw), compressedSha256: sha(compressed) }))
