import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'

const today = '2026-09-27'
const entityId = 'macaca_mulatta'
const colId = '3WWNQ'
const colDatasetId = '2144'
const colReferenceId = 'col-2026-checklistbank-316115'
const ecologyReferenceId = 'sengupta-2015-buxa-provisioning-rhesus'
const morphologyReferenceId = 'kimock-2019-cayo-rhesus-morphology'

const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
const appendUnique = (items, value, id = item => item.id ?? item) => {
  const existing = items.find(item => id(item) === id(value))
  if (existing) assert.deepEqual(existing, value, `Conflicting record for ${id(value)}`)
  else items.push(value)
}
function closingDelimiter(source, openingIndex, opening, closing) {
  let depth = 0
  let quoted = false
  let escaped = false
  for (let index = openingIndex; index < source.length; index += 1) {
    const character = source[index]
    if (quoted) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === '"') quoted = false
      continue
    }
    if (character === '"') quoted = true
    else if (character === opening) depth += 1
    else if (character === closing && --depth === 0) return index
  }
  throw new Error(`Unclosed ${opening} in JSON source`)
}
function appendArrayRecords(path, key, values, identity = value => value.id ?? value) {
  let source = readFileSync(path, 'utf8')
  const data = JSON.parse(source)
  const target = key ? key.split('.').reduce((value, part) => value[part], data) : data
  for (const value of values) {
    const existing = target.find(item => identity(item) === identity(value))
    if (existing) assert.deepEqual(existing, value, `${path} has a different existing entry for ${identity(value)}`)
  }
  const missing = values.filter(value => !target.some(existing => identity(existing) === identity(value)))
  if (!missing.length) return
  const parts = key ? key.split('.') : []
  const property = parts.at(-1) ?? '(root array)'
  let contextStart = 0
  let contextEnd = source.length
  for (const parent of parts.slice(0, -1)) {
    const parentIndex = source.indexOf(`"${parent}"`, contextStart)
    assert.ok(parentIndex >= 0 && parentIndex < contextEnd, `Missing ${parent} in ${path}`)
    const objectStart = source.indexOf('{', parentIndex)
    assert.ok(objectStart >= parentIndex && objectStart < contextEnd, `Missing object ${parent} in ${path}`)
    contextStart = objectStart
    contextEnd = closingDelimiter(source, objectStart, '{', '}')
  }
  const propertyIndex = key ? source.indexOf(`"${property}"`, contextStart) : 0
  assert.ok(!key || propertyIndex < contextEnd, `Missing ${property} in ${path}`)
  const arrayStart = key ? source.indexOf('[', propertyIndex) : source.indexOf('[')
  const arrayEnd = closingDelimiter(source, arrayStart, '[', ']')
  const inner = source.slice(arrayStart + 1, arrayEnd)
  const nonWhitespace = inner.trimEnd()
  const lineStart = source.lastIndexOf('\n', arrayStart) + 1
  const baseIndent = source.slice(lineStart, arrayStart).match(/^\s*/u)?.[0] ?? ''
  const itemIndent = `${baseIndent}  `
  const newline = source.includes('\r\n') ? '\r\n' : '\n'
  const multiline = inner.includes('\n')
  const rendered = missing.map(value => {
    const json = JSON.stringify(value, null, 2)
    return multiline ? json.replaceAll('\n', `${newline}${itemIndent}`).replace(/^/u, itemIndent) : json
  }).join(multiline ? `,${newline}` : ', ')
  const insertion = multiline
    ? `${nonWhitespace ? ',' : ''}${newline}${rendered}${newline}${baseIndent}`
    : `${nonWhitespace ? ', ' : ''}${rendered}`
  source = `${source.slice(0, arrayStart + 1)}${inner.trimEnd()}${insertion}${source.slice(arrayEnd)}`
  JSON.parse(source)
  writeFileSync(path, source, 'utf8')
}
function appendObjectEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const target = JSON.parse(source)
  const missing = Object.entries(entries).filter(([key, value]) => {
    if (!(key in target)) return true
    assert.equal(target[key], value, `${path} has a different existing entry for ${key}`)
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
function setObjectNumber(path, objectKey, property, value) {
  let source = readFileSync(path, 'utf8')
  const objectIndex = source.indexOf(`"${objectKey}"`)
  assert.ok(objectIndex >= 0, `Missing ${objectKey} in ${path}`)
  const objectStart = source.indexOf('{', objectIndex)
  const objectEnd = closingDelimiter(source, objectStart, '{', '}')
  const expression = new RegExp(`("${property}"\\s*:\\s*)(\\d+)`, 'u')
  const match = expression.exec(source.slice(objectStart, objectEnd))
  assert.ok(match, `Missing numeric ${property} in ${objectKey}`)
  source = `${source.slice(0, objectStart)}${source.slice(objectStart, objectEnd).replace(expression, `$1${value}`)}${source.slice(objectEnd)}`
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

const source = readJson('data/sources/primates-dossiers-batch-3.json')
const record = source.records?.find(item => item.colId === colId)
assert.ok(record, `Missing source record for COL usage ${colId}`)
assert.equal(record.scientificName, 'Macaca mulatta (Zimmermann, 1780)')
assert.equal(record.rank, 'species')
assert.equal(String(record.sourceDatasetId), colDatasetId)
assert.deepEqual(record.identity.parentChain.map(item => item.id), ['5HYC', 'JB3', '7X9', '4X9', '4PM', '4DT', '3W7'])
const ecologySource = record.sources.find(candidate => candidate.id === 'sengupta2015')
assert.ok(ecologySource, 'Missing audited Sengupta 2015 source')
assert.equal(ecologySource.licenseAssessment, 'item-level-verified')
assert.equal(ecologySource.licenseVersion, 'CC BY 4.0')
assert.ok(ecologySource.licenseUrl && ecologySource.rightsEvidenceUrl && ecologySource.attribution)
const morphologyAudit = readJson('data/sources/primates-macaca-mulatta-morphology-b46-2026-09-26.json')
assert.equal(morphologyAudit.target.colId, colId)
const morphologySource = morphologyAudit.sources.find(candidate => candidate.id === 'kimock2019')
assert.ok(morphologySource, 'Missing audited Kimock 2019 source')
assert.equal(morphologySource.licenseAssessment, 'item-level-verified')
assert.equal(morphologySource.licenseVersion, 'CC BY 4.0')
assert.ok(morphologySource.licenseUrl && morphologySource.rightsEvidenceUrl && morphologySource.attribution)

const ontology = readJson('data/navigation/atlas-ontology.json')
const macaca = findNode(ontology, 'macaca')
assert.ok(macaca, 'Missing Macaca parent in the primate ontology')
const taxonNode = {
  id: entityId,
  name: 'Macaca mulatta',
  commonName: 'Rhesus Macaque',
  commonNameZh: '恒河猴',
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
}
const existingTaxonNode = macaca.children.find(item => item.id === entityId)
if (existingTaxonNode) {
  existingTaxonNode.firstAppearance = 0
  assert.deepEqual(existingTaxonNode, taxonNode, `Conflicting ontology node for ${entityId}`)
}
else macaca.children.push(taxonNode)
writeJson('data/navigation/atlas-ontology.json', ontology)

const ecologyClaimId = `claim:taxon:${entityId}:ecology`
const morphologyClaimId = `claim:taxon:${entityId}:morphology`
const taxonomyClaimId = `claim:taxon:${entityId}:taxonomy`
const geographyClaimId = `claim:taxon:${entityId}:biogeography`
const rangeClaimId = `claim:taxon:${entityId}:fossil-range`
const taxonomyStatement = 'COL26.8 dataset 316115 records accepted species usage 3WWNQ as Macaca mulatta (Zimmermann, 1780), with Macaca usage 5HYC as its immediate parent. This records checklist identity and classification only.'
const geographyStatement = 'Buxa Tiger Reserve, West Bengal, India, is the site of the selected ecology study; Cayo Santiago, Puerto Rico, is the study population for the selected morphology analysis. These are study locations, not a species-wide distribution estimate.'
const ecologyStatement = 'At Buxa Tiger Reserve, West Bengal, one 64-individual troop was observed from October 2013 to September 2014; its home range included patches of natural forest, mixed-species plantations and residential settlements. Fruit accounted for 70.8% of recorded diet in the study-defined non-provisioning period (May–September) and 28.8% in the provisioning period (October–April); mean daily range was 4.72 km and 2.58 km respectively. These observational comparisons describe one troop and do not isolate provisioning as a controlled cause or estimate species-wide ecology.'
const morphologyStatement = 'On Cayo Santiago, researchers measured 125 adult males and 21 related females captured in 2015. In the study pedigree models, most measured male morphometric traits showed heritable variation, but the measured traits did not predict the study’s relative annual reproductive-success proxy. This managed free-ranging cohort and model do not establish species-wide heritability or absence of selection.'
const rangeStatement = 'The selected COL26.8 checklist and the Buxa ecology and Cayo Santiago morphology studies do not estimate temporal fossil-range endpoints for Macaca mulatta; a numerical interval remains withheld.'

const ecologyReference = {
  id: ecologyReferenceId,
  title: 'Primates, Provisioning and Plants: Impacts of Human Cultural Behaviours on Primate Ecological Functions',
  authors: 'Sengupta, A.; McConkey, K.R.; Radhakrishna, S.',
  publishedYear: 2015,
  type: 'paper',
  url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0140961',
  doi: '10.1371/journal.pone.0140961',
  publisher: 'PLOS ONE',
  pages: '10(11):e0140961',
  version: 'Published 2015-11-04',
  sourceRole: 'primary-study',
  fitnessFor: ['ecology', 'biogeography'],
  metadataAssignment: 'curator-reviewed',
  note: 'Primary study of one 64-individual rhesus macaque troop at Buxa Tiger Reserve, India, from October 2013 to September 2014. Ecological comparisons are limited to that troop and study-defined seasonal provisioning periods; the article states CC BY 4.0.',
}
const morphologyReference = {
  id: morphologyReferenceId,
  title: 'Male morphological traits are heritable but do not predict reproductive success in a sexually-dimorphic primate',
  authors: 'Kimock, C.M.; Dubuc, C.; Brent, L.J.N.; Higham, J.P.',
  publishedYear: 2019,
  type: 'paper',
  url: 'https://www.nature.com/articles/s41598-019-52633-4',
  doi: '10.1038/s41598-019-52633-4',
  publisher: 'Scientific Reports',
  pages: '9:19794',
  version: 'Published 2019-12-24',
  sourceRole: 'primary-study',
  fitnessFor: ['morphology'],
  metadataAssignment: 'curator-reviewed',
  note: 'Primary study measuring a selected Cayo Santiago free-ranging cohort in 2015. Heritability and reproductive-success conclusions are bounded to the sampled pedigree, traits and models; the article states CC BY 4.0.',
}
appendArrayRecords('data/references.json', '', [ecologyReference, morphologyReference])

const profile = {
  id: entityId,
  treeNodeId: entityId,
  pbdbTaxonId: null,
  scientificName: 'Macaca mulatta',
  commonName: 'Rhesus Macaque',
  commonNameZh: '恒河猴',
  rank: 'species',
  parentName: 'Macaca',
  extinct: false,
  geography: ['Buxa Tiger Reserve, West Bengal, India (one troop study site)', 'Cayo Santiago, Puerto Rico (managed free-ranging morphology study population)'],
  overview: 'COL26.8 usage 3WWNQ is the accepted species record for Macaca mulatta. The selected ecological and morphology findings describe one Indian troop and one Cayo Santiago cohort; neither is a species-wide synthesis.',
  ecology: {
    diet: 'At Buxa, fruit accounted for 70.8% of recorded diet in the study-defined May–September non-provisioning period and 28.8% in the October–April provisioning period for one 64-individual troop.',
    habitat: 'The selected Buxa troop home range included patches of natural forest, mixed-species plantations and residential settlements; this is one local study setting, not a full habitat account.',
    locomotion: 'Not assessed in the selected studies.',
    bodySize: 'The Buxa ecology study did not estimate species-wide body size; see the separate Cayo Santiago morphology claim for its measured cohort.',
    guild: 'Not assessed in the selected studies.',
  },
  traits: ['In one 2015 Cayo Santiago pedigree sample, most measured male morphometric traits were heritable under the study’s pooled models; this cohort result is not species-wide.'],
  traitsAssessmentStatus: 'assessed',
  evidenceSummary: 'The core profile links one source-bounded ecology study and one source-bounded morphology analysis. Life history, conservation and global distribution remain unassessed; no temporal range is exposed.',
  confidence: 'medium',
  referenceIds: [colReferenceId, ecologyReferenceId, morphologyReferenceId],
}
appendArrayRecords('data/packages/mammalia/primates/profiles.source.json', '', [profile])

const claims = readJson('data/evidence/claims.json')
for (const claim of [
  {
    id: taxonomyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'taxonomy',
    claimKind: 'scientific',
    statement: taxonomyStatement,
    confidence: 'medium',
    confidenceRationale: 'The pinned accepted usage and immediate parent are explicit in COL26.8. This statement is limited to checklist identity and does not infer biology or phylogeny.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 ChecklistBank dataset 316115; accepted usage 3WWNQ, source dataset 2144 and parent chain checked 2026-09-27',
    referenceLinks: [{ referenceId: colReferenceId, relation: 'supports', pages: 'Accepted species usage 3WWNQ; immediate parent usage 5HYC Macaca; accepted parent chain through Primates usage 3W7' }],
  },
  {
    id: geographyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'biogeography',
    claimKind: 'scientific',
    statement: geographyStatement,
    confidence: 'high',
    confidenceRationale: 'Both primary studies identify their sampled location directly. The statement retains study-site scope and makes no full-range inference.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Sengupta et al. 2015 DOI 10.1371/journal.pone.0140961; Kimock et al. 2019 DOI 10.1038/s41598-019-52633-4; methods checked 2026-09-27',
    referenceLinks: [
      { referenceId: ecologyReferenceId, relation: 'supports', quoteLocator: 'Methods, Study Area and Study Troop' },
      { referenceId: morphologyReferenceId, relation: 'supports', quoteLocator: 'Methods, Study Population and Morphometric Data Collection' },
    ],
  },
  {
    id: ecologyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'ecology',
    claimKind: 'scientific',
    statement: ecologyStatement,
    confidence: 'medium',
    confidenceRationale: 'The paper directly reports the troop size, study period, diet percentages and mean daily ranges. It is an observational one-troop study and does not establish a controlled causal effect or species-wide ecology.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Sengupta et al. 2015 DOI 10.1371/journal.pone.0140961; Methods, Results and Tables 1–3 checked against the CC BY 4.0 article on 2026-09-27',
    referenceLinks: [{ referenceId: ecologyReferenceId, relation: 'supports', pages: 'Methods, Study Area and Study Troop; Results, Fruit availability, degree of provisioning and degree of frugivory; Sites of seed deposition; Table 3' }],
  },
  {
    id: morphologyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'morphology',
    claimKind: 'scientific',
    statement: morphologyStatement,
    confidence: 'medium',
    confidenceRationale: 'The source directly states its 2015 Cayo Santiago capture cohort, measured traits and model results. The conclusion is bounded to the sampled population, pedigree, measured traits and annual offspring-count proxy.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Kimock et al. 2019 DOI 10.1038/s41598-019-52633-4; Abstract, Morphometric Data Collection and Results checked against the CC BY 4.0 article on 2026-09-27',
    referenceLinks: [{ referenceId: morphologyReferenceId, relation: 'supports', pages: 'Abstract; Methods, Morphometric Data Collection, Genetic Parentage Information and Dominance Rank; Results' }],
  },
  {
    id: rangeClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'fossil-range',
    claimKind: 'scientific',
    statement: rangeStatement,
    confidence: 'medium',
    confidenceRationale: 'The checklist establishes classification and the cited papers study living populations; none supplies a temporal fossil-range endpoint. The numerical interval therefore remains withheld.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 dataset 316115, usage 3WWNQ; Sengupta et al. 2015 DOI 10.1371/journal.pone.0140961; Kimock et al. 2019 DOI 10.1038/s41598-019-52633-4; source scopes checked 2026-09-27',
    referenceLinks: [
      { referenceId: colReferenceId, relation: 'supports', pages: 'Accepted usage 3WWNQ; identity and classification only' },
      { referenceId: ecologyReferenceId, relation: 'supports', quoteLocator: 'Living-troop ecology study; no temporal fossil-range estimate' },
      { referenceId: morphologyReferenceId, relation: 'supports', quoteLocator: 'Living-cohort morphology study; no temporal fossil-range estimate' },
    ],
  },
]) appendUnique(claims, claim)
writeJson('data/evidence/claims.json', claims)

appendObjectEntries('data/evidence/claim-statements.zh.json', {
  [taxonomyStatement]: 'COL26.8 数据集 316115 将 3WWNQ 记录为接受的 Macaca mulatta（Zimmermann, 1780）种级用名，其直接父级为 Macaca 用名 5HYC。此陈述仅记录清单身份和分类位置。',
  [geographyStatement]: '所选生态研究的地点是印度西孟加拉邦的布克萨虎保护区；所选形态分析的研究群体位于波多黎各的卡约圣地亚哥。这些是研究取样地点，不是全物种分布估计。',
  [ecologyStatement]: '2013 年 10 月至 2014 年 9 月，研究者在印度西孟加拉邦布克萨虎保护区观察了一个由 64 只猕猴组成的群体；其家域包括天然森林、混合树种种植林和居民点。研究记录的食物中，水果在研究划定的非投喂期（5–9 月）占 70.8%，在投喂期（10 月–次年 4 月）占 28.8%；群体平均日移动距离分别为 4.72 公里和 2.58 公里。这些观察比较仅描述一个群体，不能分离出投喂的受控因果效应，也不代表全物种生态。',
  [morphologyStatement]: '研究者在卡约圣地亚哥对 2015 年捕获的 125 只成年雄性和 21 只相关雌性进行了测量。在研究采用的谱系模型中，多数已测雄性形态性状表现出可遗传变异，但这些性状未能预测研究使用的相对年度繁殖成功指标。该人工管理的自由活动群体及模型结果不能证明全物种的遗传率或不存在选择。',
  [rangeStatement]: '所选 COL26.8 清单以及布克萨生态研究和卡约圣地亚哥形态研究均未估计 Macaca mulatta 的化石年代范围端点；数值区间继续隐藏。',
})
appendObjectEntries('data/evidence/claim-rationales.zh.json', {
  [taxonomyClaimId]: '固定版接受用名及直接父级由 COL26.8 明确记录。本陈述仅限清单身份，不推断生物学特征或系统发育。',
  [geographyClaimId]: '两篇一手研究均直接列出其取样地点；陈述保留研究地点范围，不扩展为全物种分布。',
  [ecologyClaimId]: '论文直接报告群体规模、研究时段、食物比例和平均日移动距离。研究仅观察一个群体，不能证明受控因果效应或全物种生态。',
  [morphologyClaimId]: '来源直接说明 2015 年卡约圣地亚哥取样群体、测量性状和模型结果。结论仅适用于取样群体、谱系、测量性状及年度后代数指标。',
  [rangeClaimId]: '清单用于身份分类，所引论文研究现生群体，均未提供化石年代范围端点，因此数值区间保持隐藏。',
})

appendArrayRecords('data/ranges/range-evidence.json', '', [{
  id: `range:${entityId}:global`,
  entityId,
  rangeKind: 'global-composite',
  taxonomicConcept: 'Macaca mulatta accepted COL26.8 usage 3WWNQ; numerical temporal and geographic range withheld',
  geographicScope: 'No numerical geographic-temporal range exposed; selected study sites do not define the species range',
  olderMa: 0,
  youngerMa: 0,
  status: 'withheld-pending-provenance',
  uncertainty: { olderMa: null, youngerMa: null, note: 'Zero values are non-display placeholders; the selected checklist and studies do not establish fossil endpoints or a complete wild-distribution inventory.' },
  evidenceBasis: 'COL26.8 supports accepted identity and classification; the selected Buxa ecology and Cayo Santiago morphology papers study living populations and do not estimate a temporal fossil range.',
  evidenceLevel: 'withheld-no-range-evidence',
  confidence: 'low',
  claimIds: [],
  referenceLocators: [{ referenceId: colReferenceId, locator: 'COL26.8 dataset 316115; accepted usage 3WWNQ and parent chain (identity/classification only)' }],
  reviewStatus: 'automated-audit-passed',
}])

const storyId = 'primates-evidence-without-an-ancestor-ladder'
const preview = readJson('data/pages-preview.json')
assert.ok(preview.storyTaxonIds[storyId], `Missing preview story ${storyId}`)
appendArrayRecords('data/pages-preview.json', 'taxonIds', [entityId], value => value)
appendArrayRecords('data/pages-preview.json', `storyTaxonIds.${storyId}`, [entityId], value => value)

const pbdbPath = 'data/sources/pbdb-taxon-resolution.json'
appendArrayRecords(pbdbPath, 'resolutions', [{
  entityId,
  localName: 'Macaca mulatta',
  localRank: 'species',
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
  localExpectedParentConcept: 'Macaca',
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
}], item => item.entityId)
const pbdb = readJson(pbdbPath)
setObjectNumber(pbdbPath, 'summary', 'ontologyNodes', pbdb.resolutions.length)
setObjectNumber(pbdbPath, 'summary', 'unresolved', pbdb.resolutions.filter(item => item.resolutionStatus !== 'resolved').length)
setObjectNumber(pbdbPath, 'summary', 'resolved', pbdb.resolutions.filter(item => item.resolutionStatus === 'resolved').length)
setObjectNumber(pbdbPath, 'summary', 'needsConceptReview', pbdb.resolutions.filter(item => item.conceptReviewStatus === 'needs-concept-review').length)
setObjectNumber(pbdbPath, 'summary', 'humanCuratorDecisions', pbdb.resolutions.filter(item => item.humanCuratorDecision).length)
let pbdbSource = readFileSync(pbdbPath, 'utf8')
pbdbSource = pbdbSource.replace(/("generatedAt"\s*:\s*")\d{4}-\d{2}-\d{2}(")/u, `$1${today}$2`)
writeFileSync(pbdbPath, pbdbSource, 'utf8')

const linkagePath = 'data/indexes/entity-linkage-baseline.json'
const linkage = readJson(linkagePath)
linkage.unresolvedEntityIds = [...new Set([...linkage.unresolvedEntityIds, entityId])].sort()
writeJson(linkagePath, linkage)

console.log(JSON.stringify({ entityId, colId, claims: [taxonomyClaimId, geographyClaimId, ecologyClaimId, morphologyClaimId, rangeClaimId], rawDossierBundled: false }, null, 2))
