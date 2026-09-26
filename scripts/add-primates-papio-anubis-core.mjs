import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const today = '2026-09-27'
const genusId = 'papio'
const speciesId = 'papio_anubis'
const colId = '6TM9B'
const genusColId = '6DGR'
const colDatasetId = '2144'
const colReferenceId = 'col-2026-checklistbank-316115'
const kiffnerReferenceId = 'kiffner-2022-lake-manyara-baboon-distance'
const druelleReferenceId = 'druelle-2017-olive-baboon-growth'
const baileyReferenceId = 'bailey-2021-gombe-baboon-reproduction'

const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
function appendUnique(items, value, key = item => item.id ?? item) {
  const existing = items.find(item => key(item) === key(value))
  if (existing) assert.deepEqual(existing, value, `Conflicting record for ${key(value)}`)
  else items.push(value)
}
function appendObjectEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const object = JSON.parse(source)
  const missing = Object.entries(entries).filter(([key, value]) => {
    if (!(key in object)) return true
    assert.equal(object[key], value, `Conflicting ${path} entry ${key}`)
    return false
  })
  if (!missing.length) return
  const objectEnd = source.lastIndexOf('}')
  assert.notEqual(objectEnd, -1, `Missing object close in ${path}`)
  const beforeEnd = source.slice(0, objectEnd).trimEnd()
  const rendered = missing.map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)},`).join('\n')
  source = `${beforeEnd},\n${rendered}\n${source.slice(objectEnd)}`
  source = source.replace(/,\n(\s*\})\s*$/u, '\n$1\n')
  JSON.parse(source)
  writeFileSync(path, source, 'utf8')
}
function findNode(node, id) {
  if (node.id === id) return node
  for (const child of node.children ?? []) {
    const found = findNode(child, id)
    if (found) return found
  }
  return null
}

const dossierStore = readCatalogueDossiers()
const dossier = dossierStore.records.find(record => record.colId === colId)
assert.ok(dossier, `Missing source dossier for COL usage ${colId}`)
assert.equal(dossier.scientificName, 'Papio anubis (Lesson, 1827)')
assert.equal(dossier.rank, 'species')
assert.equal(String(dossier.sourceDatasetId), colDatasetId)
assert.deepEqual(dossier.identity.parentChain.map(node => node.id), [genusColId, 'L4C', 'JB3', '7X9', '4X9', '4PM', '4DT', '3W7'])
assert.equal(dossier.completeness.status, 'incomplete', 'Selected core evidence must not imply a complete dossier')
const sourceById = new Map(dossier.sources.map(source => [source.id, source]))
for (const sourceId of ['kiffner2022', 'druelle2017', 'bailey2021']) {
  const source = sourceById.get(sourceId)
  assert.ok(source, `Missing audited source ${sourceId}`)
  assert.equal(source.licenseAssessment, 'item-level-verified')
  assert.equal(source.licenseVersion, 'CC BY 4.0')
  assert.ok(source.attribution && source.stableId && source.licenseAppliesTo)
}
assert.ok(dossier.facets.ecology.claims.some(claim => claim.sourceIds.includes('kiffner2022')))
assert.ok(dossier.facets.morphology.claims.some(claim => claim.sourceIds.includes('druelle2017')))
assert.ok(dossier.facets.lifeHistory.claims.some(claim => claim.sourceIds.includes('bailey2021')))

const ontology = readJson('data/navigation/atlas-ontology.json')
const papionini = findNode(ontology, 'papionini')
assert.ok(papionini, 'Missing the accepted Papionini route')
const genusNode = {
  id: genusId,
  name: 'Papio',
  commonName: 'Baboons',
  commonNameZh: '狒狒属',
  rank: 'genus',
  taxonId: '',
  colUsageId: genusColId,
  colDatasetId,
  firstAppearance: 0,
  lastAppearance: 0,
  rangeEvidenceLevel: 'withheld-no-range-evidence',
  extinct: false,
  children: [{
    id: speciesId,
    name: 'Papio anubis',
    commonName: 'Olive Baboon',
    commonNameZh: '橄榄狒狒',
    rank: 'species',
    taxonId: '',
    colUsageId: colId,
    colDatasetId,
    firstAppearance: 0,
    lastAppearance: 0,
    rangeEvidenceLevel: 'withheld-no-range-evidence',
    extinct: false,
    children: [],
    parentRelationshipKind: 'taxonomic-parent',
    entityKind: 'taxon',
    contentLevel: 'dossier',
  }],
  parentRelationshipKind: 'taxonomic-parent',
  entityKind: 'taxon',
  contentLevel: 'registry-only',
}
const existingGenus = papionini.children.find(child => child.id === genusId)
if (existingGenus) assert.deepEqual(existingGenus, genusNode, `Conflicting ontology node ${genusId}`)
else papionini.children.push(genusNode)
writeJson('data/navigation/atlas-ontology.json', ontology)

const taxonomyGenusStatement = 'COL26.8 accepted species usage 6TM9B places Papio (genus usage 6DGR) immediately above the species and below Papionini (tribe usage L4C). This records checklist classification only.'
const taxonomySpeciesStatement = 'COL26.8 dataset 316115 records accepted species usage 6TM9B as Papio anubis (Lesson, 1827), with Papio usage 6DGR as its immediate parent. This records checklist identity and classification only.'
const geographyStatement = 'The selected studies sampled a captive cohort at the CNRS Primatology Station in Rousset-sur-Arc, France, wild baboons at Gombe National Park, Tanzania, and road-transect populations at Lake Manyara National Park, Tanzania. These study locations do not define the species’ geographic range.'
const morphologyStatement = 'In a seven-year longitudinal study of 14 female and 16 male captive olive baboons at the CNRS Primatology Station in Rousset-sur-Arc, France, measured size and shape were similar at birth; later differences in growth rate and duration produced substantial size differences while measured body shape remained similar. This result is limited to that cohort, not wild populations.'
const ecologyStatement = 'At Lake Manyara National Park, Tanzania, road-transect distance sampling from 2011–2019 produced an abundance estimate more than three times the upper-limit estimate derived from sleeping-site counts and average group size. The authors identify baboons’ use of roads as a possible source of bias and caution against inferring density from constrained road transects; this is a site- and method-specific result, not a species-wide density estimate.'
const reproductionStatement = 'In Gombe National Park, Tanzania, records from 1972–2002 covered 732 pregnancies among 175 females of known rank, including 65 miscarriages. In a time-dependent analysis, higher-ranking pregnant females exposed to immigrant males that reached top rank within a year had higher miscarriage hazards outside drought conditions; the rank pattern largely disappeared when two-year mean rainfall was below about 1,100 mm. Exposure to new immigrants overall did not show the same association. This conditional result from one wild population is not a species-wide rate or proof of deliberate male-caused pregnancy loss.'
const rangeStatement = 'The selected COL26.8 checklist and the cited living-population studies do not estimate geographic-range limits or temporal fossil-range endpoints for Papio anubis; numerical ranges remain withheld.'

const references = [
  {
    id: kiffnerReferenceId,
    title: 'Road-based line distance surveys overestimate densities of olive baboons',
    authors: 'Kiffner, C.; Paciência, F.M.D.; Henrich, G.; Kaitila, R.; Chuma, I.S.; Mbaryo, P.; Knauf, S.; Kioko, J.; Zinner, D.',
    publishedYear: 2022,
    type: 'paper',
    url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0263314',
    doi: '10.1371/journal.pone.0263314',
    publisher: 'PLOS ONE',
    pages: '17(2):e0263314',
    version: 'Published 2022-02-02',
    sourceRole: 'primary-study',
    fitnessFor: ['ecology', 'methods'],
    metadataAssignment: 'curator-reviewed',
    note: 'Primary study of road-transect surveys and sleeping-site comparison for wild olive baboons at Lake Manyara National Park, Tanzania, from 2011 to 2019. The authors report poor fit for detection models and caution that road use may bias density estimates. The article states CC BY 4.0; the summary is paraphrased.',
  },
  {
    id: druelleReferenceId,
    title: 'Segmental morphometrics of the olive baboon (Papio anubis): a longitudinal study from birth to adulthood',
    authors: 'Druelle, F.; Aerts, P.; D’Août, K.; Moulin, V.; Berillon, G.',
    publishedYear: 2017,
    type: 'paper',
    url: 'https://doi.org/10.1111/joa.12602',
    doi: '10.1111/joa.12602',
    publisher: 'Journal of Anatomy',
    pages: '230(6):805–819',
    version: 'First published 2017-03-14',
    sourceRole: 'primary-study',
    fitnessFor: ['morphology', 'ecology', 'methods'],
    metadataAssignment: 'curator-reviewed',
    note: 'Longitudinal body-morphometry study of 14 female and 16 male captive olive baboons at the CNRS Primatology Station in Rousset-sur-Arc, France. The source record identifies CC BY 4.0; the summary is paraphrased and does not reproduce figures or tables.',
  },
  {
    id: baileyReferenceId,
    title: 'Contrasting effects of male immigration and rainfall on rank-related patterns of miscarriage in female olive baboons',
    authors: 'Bailey, A.; Eberly, L.E.; Packer, C.',
    publishedYear: 2021,
    type: 'paper',
    url: 'https://www.nature.com/articles/s41598-021-83175-3',
    doi: '10.1038/s41598-021-83175-3',
    publisher: 'Scientific Reports',
    pages: '11:4042',
    version: 'Published 2021-02-17',
    sourceRole: 'primary-study',
    fitnessFor: ['ecology', 'methods'],
    metadataAssignment: 'curator-reviewed',
    note: 'Primary observational study of wild olive baboons in Gombe National Park, Tanzania, using reproductive and miscarriage records from 1972 to 2002. The article states CC BY 4.0; its conditional associations are not evidence of a species-wide rate or deliberate causation.',
  },
]
const globalReferences = readJson('data/references.json')
for (const reference of references) appendUnique(globalReferences, reference)
writeJson('data/references.json', globalReferences)

const profiles = readJson('data/packages/mammalia/primates/profiles.source.json')
appendUnique(profiles, {
  id: speciesId,
  treeNodeId: speciesId,
  pbdbTaxonId: null,
  scientificName: 'Papio anubis',
  commonName: 'Olive Baboon',
  commonNameZh: '橄榄狒狒',
  rank: 'species',
  parentName: 'Papio',
  extinct: false,
  geography: [
    'Lake Manyara National Park, Tanzania (wild road-transect study, 2011–2019)',
    'Gombe National Park, Tanzania (wild reproductive records, 1972–2002)',
    'CNRS Primatology Station, Rousset-sur-Arc, France (captive longitudinal cohort)',
  ],
  overview: 'COL26.8 accepted usage 6TM9B identifies Papio anubis. Selected primary studies describe captive growth, wild Gombe reproductive records, and a Lake Manyara population-monitoring method. These distinct samples do not form a species-wide synthesis.',
  ecology: {
    diet: 'Not assessed in the selected core studies.',
    habitat: 'The Lake Manyara paper compares road-transect estimates with a sleeping-site-based upper limit; roads are a possible source of sampling bias, not a full habitat account.',
    locomotion: 'Not assessed in the selected core studies.',
    bodySize: 'A seven-year captive cohort study measured segmental morphometrics from infancy to adulthood; its growth pattern is not a species-wide body-size estimate.',
    guild: 'Not assessed in the selected core studies.',
  },
  traits: ['In one seven-year captive cohort, measured size and shape were similar at birth; later differences in growth rate and duration produced substantial size differences while measured body shape remained similar.'],
  traitsAssessmentStatus: 'assessed',
  evidenceSummary: 'The selected profile links primary evidence for morphology, reproduction, and a site-specific population-monitoring bias. Global distribution, fossil record, formal conservation status, and species-wide evolutionary synthesis remain unassessed; this dossier is incomplete and has not received independent expert review.',
  confidence: 'medium',
  referenceIds: [colReferenceId, kiffnerReferenceId, druelleReferenceId, baileyReferenceId],
}, profile => profile.id)
writeJson('data/packages/mammalia/primates/profiles.source.json', profiles)

const claimRecords = [
  {
    id: `claim:taxon:${genusId}:taxonomy-col26-8-papio-path`,
    subjectId: `taxon:${genusId}`,
    claimType: 'taxonomy',
    claimKind: 'scientific',
    statement: taxonomyGenusStatement,
    confidence: 'medium',
    confidenceRationale: 'The pinned COL26.8 accepted parent chain explicitly records Papio usage 6DGR below Papionini usage L4C. This is checklist classification, not a phylogenetic result.',
    reviewedBy: 'Evo Atlas source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 ChecklistBank dataset 316115; accepted usage 6TM9B and parent chain checked 2026-09-27',
    referenceLinks: [{ referenceId: colReferenceId, relation: 'supports', pages: 'Accepted species usage 6TM9B; immediate genus usage 6DGR and Papionini tribe usage L4C' }],
  },
  {
    id: `claim:taxon:${speciesId}:taxonomy`,
    subjectId: `taxon:${speciesId}`,
    claimType: 'taxonomy',
    claimKind: 'scientific',
    statement: taxonomySpeciesStatement,
    confidence: 'medium',
    confidenceRationale: 'The pinned accepted usage and immediate parent are explicitly recorded in COL26.8. This statement is limited to checklist identity and classification.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 ChecklistBank dataset 316115; accepted usage 6TM9B, source dataset 2144, and parent chain checked 2026-09-27',
    referenceLinks: [{ referenceId: colReferenceId, relation: 'supports', pages: 'Accepted species usage 6TM9B; immediate parent Papio usage 6DGR; parent chain through Papionini L4C and Primates 3W7' }],
  },
  {
    id: `claim:taxon:${speciesId}:biogeography`,
    subjectId: `taxon:${speciesId}`,
    claimType: 'biogeography',
    claimKind: 'scientific',
    statement: geographyStatement,
    confidence: 'high',
    confidenceRationale: 'Each cited primary study directly identifies its sampled location and captive or wild study status. The statement explicitly does not infer a geographic range.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Druelle et al. 2017 DOI 10.1111/joa.12602; Bailey et al. 2021 DOI 10.1038/s41598-021-83175-3; Kiffner et al. 2022 DOI 10.1371/journal.pone.0263314; study locations checked 2026-09-27',
    referenceLinks: [
      { referenceId: druelleReferenceId, relation: 'supports', quoteLocator: 'Materials and methods, Study site and subjects' },
      { referenceId: baileyReferenceId, relation: 'supports', quoteLocator: 'Methods, Study area and population' },
      { referenceId: kiffnerReferenceId, relation: 'supports', quoteLocator: 'Methods, Study site' },
    ],
  },
  {
    id: `claim:taxon:${speciesId}:morphology`,
    subjectId: `taxon:${speciesId}`,
    claimType: 'morphology',
    claimKind: 'scientific',
    statement: morphologyStatement,
    confidence: 'medium',
    confidenceRationale: 'The source describes its captive cohort, seven-year longitudinal design, measured segment morphometrics, and age- and sex-related results directly. The conclusion is restricted to that cohort.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Druelle et al. 2017 DOI 10.1111/joa.12602; Abstract; Materials and methods; Results and Discussion checked against the source-linked article record 2026-09-27',
    referenceLinks: [{ referenceId: druelleReferenceId, relation: 'supports', pages: 'Abstract; Materials and methods, Study site and subjects; Results, Changes in morphotypes with age; Discussion, Sex-related differences' }],
  },
  {
    id: `claim:taxon:${speciesId}:ecology`,
    subjectId: `taxon:${speciesId}`,
    claimType: 'ecology',
    claimKind: 'scientific',
    statement: ecologyStatement,
    confidence: 'medium',
    confidenceRationale: 'The paper reports the survey years, constrained road design, sleeping-site comparison, and possible road-use bias. It reports poor detection-model fit, so this selected result remains method- and site-specific.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Kiffner et al. 2022 DOI 10.1371/journal.pone.0263314; Abstract; Methods; Results and Discussion checked against the CC BY 4.0 version of record on 2026-09-27',
    referenceLinks: [{ referenceId: kiffnerReferenceId, relation: 'supports', pages: 'Abstract; Methods, Line distance surveys and abundance maximum; Results and Discussion; Tables 1–3' }],
  },
  {
    id: `claim:taxon:${speciesId}:reproductive-ecology`,
    subjectId: `taxon:${speciesId}`,
    claimType: 'ecology',
    claimKind: 'scientific',
    statement: reproductionStatement,
    confidence: 'medium',
    confidenceRationale: 'The primary study reports the Gombe observation period, pregnancy sample, rank and rainfall interaction, and difference between rapid-rising males and immigrant males overall. It is observational and conditional; it does not show a species-wide rate or prove deliberate causation.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Bailey et al. 2021 DOI 10.1038/s41598-021-83175-3; Abstract; Results; Methods, Study area and population and Miscarriage analyses checked against the CC BY 4.0 version of record on 2026-09-27',
    referenceLinks: [{ referenceId: baileyReferenceId, relation: 'supports', pages: 'Abstract; Results, rank, rainfall and miscarriage interaction; Methods, Study area and population and Miscarriage data and analyses' }],
  },
  {
    id: `claim:taxon:${speciesId}:fossil-range`,
    subjectId: `taxon:${speciesId}`,
    claimType: 'fossil-range',
    claimKind: 'scientific',
    statement: rangeStatement,
    confidence: 'medium',
    confidenceRationale: 'The checklist establishes identity and classification, while the selected biological papers concern living populations and do not estimate a complete geographic range or temporal fossil endpoints. Those ranges therefore remain withheld.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 dataset 316115 usage 6TM9B; Druelle et al. 2017, Bailey et al. 2021, and Kiffner et al. 2022 study scopes checked 2026-09-27',
    referenceLinks: [
      { referenceId: colReferenceId, relation: 'supports', pages: 'Accepted species usage 6TM9B; identity and classification only' },
      { referenceId: druelleReferenceId, relation: 'contextualizes', quoteLocator: 'Captive living-cohort morphometry study; no range endpoint estimate' },
      { referenceId: baileyReferenceId, relation: 'contextualizes', quoteLocator: 'Wild Gombe reproductive study; no range endpoint estimate' },
      { referenceId: kiffnerReferenceId, relation: 'contextualizes', quoteLocator: 'Wild Lake Manyara monitoring study; no range endpoint estimate' },
    ],
  },
]
const claims = readJson('data/evidence/claims.json')
for (const claim of claimRecords) appendUnique(claims, claim)
writeJson('data/evidence/claims.json', claims)

appendObjectEntries('data/evidence/claim-statements.zh.json', {
  [taxonomyGenusStatement]: 'COL26.8 接受的种级用名 6TM9B 将 Papio（属用名 6DGR）列为直接属级父项，其上级为 Papionini（族用名 L4C）。这只记录清单分类位置。',
  [taxonomySpeciesStatement]: 'COL26.8 数据集 316115 将接受的种级用名 6TM9B 记录为 Papio anubis（Lesson, 1827），其直接父级为 Papio 用名 6DGR。此陈述仅记录清单身份和分类位置。',
  [geographyStatement]: '所选研究分别采样了法国鲁塞特-苏尔-阿克 CNRS 灵长类研究站的圈养群体、坦桑尼亚贡贝国家公园的野生狒狒，以及坦桑尼亚曼雅拉湖国家公园道路样线上的种群。这些研究地点不能界定该物种的地理分布。',
  [morphologyStatement]: '在法国鲁塞特-苏尔-阿克 CNRS 灵长类研究站开展的一项为期七年的纵向研究中，14 只雌性和 16 只雄性圈养橄榄狒狒出生时的测量体型与身体形状相近；此后生长速度和持续时间不同，形成明显体型差异，而测量的身体形状仍相近。该结果仅适用于该研究群体，不代表野外种群。',
  [ecologyStatement]: '在坦桑尼亚曼雅拉湖国家公园，2011 至 2019 年道路样线距离抽样所得数量估计值，超过按夜宿地点计数和平均群体规模推得的数量上限三倍。作者指出，狒狒使用道路可能造成偏差，并提醒不要直接用受道路约束的样线推断密度；这是特定地点和方法的结果，不是物种层面的密度估计。',
  [reproductionStatement]: '在坦桑尼亚贡贝国家公园，1972—2002 年的记录涵盖 175 只已知等级雌性的 732 次妊娠，其中 65 次以流产告终。时变分析显示，在非干旱条件下，接触到移入后一年内升至群体最高等级雄性的高等级孕雌，其流产风险较高；两年平均降雨量低于约 1,100 毫米时，这种等级相关模式基本消失。一般移入雄性的接触未显示相同关联。这是单一野生种群中的条件性结果，不代表全物种流产率，也不能证明雄性有意造成妊娠损失。',
  [rangeStatement]: '所选 COL26.8 清单和所引现生种群研究均未估计 Papio anubis 的地理分布边界或化石年代范围端点；数值范围继续隐藏。',
})
appendObjectEntries('data/evidence/claim-rationales.zh.json', {
  [`claim:taxon:${genusId}:taxonomy-col26-8-papio-path`]: '固定版 COL26.8 已接受父级链明确记录 Papio 用名 6DGR 位于 Papionini 用名 L4C 之下。此处只描述清单分类，不作系统发育推断。',
  [`claim:taxon:${speciesId}:taxonomy`]: '固定版 COL26.8 明确记录该接受用名及直接父级。此陈述仅限清单身份与分类。',
  [`claim:taxon:${speciesId}:biogeography`]: '所引一手研究均直接列出其取样地点与圈养或野生研究状态；陈述明确不推断完整地理分布。',
  [`claim:taxon:${speciesId}:morphology`]: '来源直接说明圈养群体、七年纵向设计、测量的身体分段形态及年龄和性别相关结果。结论限定于该研究群体。',
  [`claim:taxon:${speciesId}:ecology`]: '论文报告调查年份、受道路限制的设计、夜宿地点比较及道路使用可能造成的偏差。检测模型拟合较差，因此该结果保留地点和方法范围。',
  [`claim:taxon:${speciesId}:reproductive-ecology`]: '一手研究报告贡贝观察时段、妊娠样本、等级与降雨交互，以及快速升至最高等级的移入雄性与一般移入雄性的差异。研究为观察性且有条件，不能证明全物种流产率或故意因果。',
  [`claim:taxon:${speciesId}:fossil-range`]: '清单仅支持身份和分类；所选生物学论文研究现生种群，没有估计完整地理分布或化石年代端点，因此数值范围保持隐藏。',
})

const ranges = readJson('data/ranges/range-evidence.json')
for (const [entityId, label, usageId, parentName] of [
  [genusId, 'Papio', genusColId, 'Papionini'],
  [speciesId, 'Papio anubis', colId, 'Papio'],
]) appendUnique(ranges, {
  id: `range:${entityId}:global`,
  entityId,
  rangeKind: 'global-composite',
  taxonomicConcept: `${label} accepted COL26.8 usage ${usageId}; numerical temporal and geographic range withheld`,
  geographicScope: 'No numerical geographic-temporal range exposed; selected study sites do not define the taxon range',
  olderMa: 0,
  youngerMa: 0,
  status: 'withheld-pending-provenance',
  uncertainty: { olderMa: null, youngerMa: null, note: 'Zero values are non-display placeholders; the pinned checklist and selected population studies do not establish fossil endpoints or a complete wild-distribution inventory.' },
  evidenceBasis: `COL26.8 supports accepted identity and classification of ${label}; selected living-population studies do not estimate a temporal fossil range or complete geographic range.`,
  evidenceLevel: 'withheld-no-range-evidence',
  confidence: 'low',
  claimIds: [],
  referenceLocators: [{ referenceId: colReferenceId, locator: `COL26.8 dataset 316115; accepted usage ${usageId}, with ${parentName} parent classification (identity and classification only)` }],
  reviewStatus: 'automated-audit-passed',
}, range => range.id)
writeJson('data/ranges/range-evidence.json', ranges)

const previewPath = 'data/pages-preview.json'
let previewSource = readFileSync(previewPath, 'utf8')
const preview = JSON.parse(previewSource)
const missingPreviewIds = [genusId, speciesId].filter(id => !preview.taxonIds.includes(id))
if (missingPreviewIds.length) {
  assert.ok(preview.taxonIds.includes('papionini'), 'Missing the selected Papionini preview route')
  const anchor = '    "papionini",\n'
  assert.ok(previewSource.includes(anchor), 'Could not find the Papionini selector in data/pages-preview.json')
  previewSource = previewSource.replace(anchor, `${anchor}${missingPreviewIds.map(id => `    ${JSON.stringify(id)},\n`).join('')}`)
  const updatedPreview = JSON.parse(previewSource)
  assert.ok(missingPreviewIds.every(id => updatedPreview.taxonIds.includes(id)))
  writeFileSync(previewPath, previewSource, 'utf8')
}

const localePath = 'data/packages/mammalia/primates/locales/zh.json'
const locale = readJson(localePath)
for (const [key, value] of [
  [`entity.${genusId}.name`, '狒狒属'],
  [`entity.${speciesId}.name`, '橄榄狒狒'],
  [`profile.${speciesId}.name`, '橄榄狒狒'],
]) {
  if (key in locale.strings) assert.equal(locale.strings[key], value, `Conflicting translation ${key}`)
  else locale.strings[key] = value
}
writeJson(localePath, locale)

const pbdbPath = 'data/sources/pbdb-taxon-resolution.json'
const pbdb = readJson(pbdbPath)
for (const [entityId, localName, localRank, localExpectedParentConcept] of [
  [genusId, 'Papio', 'genus', 'Papionini'],
  [speciesId, 'Papio anubis', 'species', 'Papio'],
]) appendUnique(pbdb.resolutions, {
  entityId,
  localName,
  localRank,
  previousPbdbId: null,
  resolutionStatus: 'unresolved',
  resolutionReason: 'not-reconciled-against-pinned-PBDB-snapshot',
  externalResolutionStatus: 'not-applicable',
  pbdbId: null,
  acceptedName: null,
  acceptedRank: null,
  matchedTaxonName: null,
  pbdbParentName: null,
  pbdbClassification: null,
  resolvedName: null,
  resolvedRank: null,
  resolvedImmediateParent: null,
  resolvedClassification: null,
  resolvedAncestorChain: [],
  localExpectedParentConcept,
  parentRelationshipKind: 'taxonomic-parent',
  lineageCompatibility: 'indeterminate',
  conceptReviewStatus: 'unresolved',
  automatedRecommendation: 'withhold-external-mapping',
  humanCuratorDecision: null,
  curatorRationale: null,
  curatorReviewedAt: null,
  curatorReviewer: null,
  occurrenceCount: null,
  referenceNo: null,
  snapshotModifiedAt: null,
}, item => item.entityId)
pbdb.summary.ontologyNodes = pbdb.resolutions.length
pbdb.summary.unresolved = pbdb.resolutions.filter(item => item.resolutionStatus !== 'resolved').length
pbdb.summary.resolved = pbdb.resolutions.filter(item => item.resolutionStatus === 'resolved').length
pbdb.summary.needsConceptReview = pbdb.resolutions.filter(item => item.conceptReviewStatus === 'needs-concept-review').length
pbdb.summary.humanCuratorDecisions = pbdb.resolutions.filter(item => item.humanCuratorDecision).length
pbdb.generatedAt = today
writeJson(pbdbPath, pbdb)

const linkagePath = 'data/indexes/entity-linkage-baseline.json'
const linkage = readJson(linkagePath)
linkage.unresolvedEntityIds = [...new Set([...linkage.unresolvedEntityIds, genusId, speciesId])].sort()
writeJson(linkagePath, linkage)

console.log(JSON.stringify({
  sourceColId: colId,
  scientificName: dossier.scientificName,
  speciesId,
  parentGenusId: genusId,
  selectedClaims: claimRecords.map(claim => claim.id),
  previewTaxaAdded: [genusId, speciesId],
  rawDossierBundled: false,
  dossierStatus: dossier.completeness.status,
}, null, 2))
