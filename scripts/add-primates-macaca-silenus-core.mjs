import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'

const today = '2026-09-27'
const entityId = 'macaca_silenus'
const colId = '3WWP6'
const colReferenceId = 'col-2026-checklistbank-316115'
const ramReferenceId = 'ram-2015-lion-tailed-macaque-western-ghats'
const dhawaleReferenceId = 'dhawale-2020-lion-tailed-macaque-habitat-behaviour'

const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8')

function appendUnique(items, value, key = item => item.id ?? item) {
  const existing = items.find(item => key(item) === key(value))
  if (existing) assert.deepEqual(existing, value, `Conflicting ${key(value)}`)
  else items.push(value)
}

function appendArrayRecords(path, key, values, identity = value => value.id ?? value) {
  let source = readFileSync(path, 'utf8')
  const data = JSON.parse(source)
  const target = key ? key.split('.').reduce((value, part) => value[part], data) : data
  for (const value of values) {
    const existing = target.find(item => identity(item) === identity(value))
    if (existing) assert.deepEqual(existing, value, `${path} has a different entry for ${identity(value)}`)
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

function appendObjectEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const object = JSON.parse(source)
  const missing = Object.entries(entries).filter(([key, value]) => {
    if (!Object.hasOwn(object, key)) return true
    assert.equal(object[key], value, `Conflicting ${path} entry ${key}`)
    return false
  })
  if (!missing.length) return
  const closingIndex = source.lastIndexOf('}')
  assert.ok(closingIndex >= 0, `Missing object close in ${path}`)
  const closeLineStart = source.lastIndexOf('\n', closingIndex) + 1
  const closingIndent = source.slice(closeLineStart, closingIndex).match(/^\s*/u)?.[0] ?? ''
  const itemIndent = `${closingIndent}  `
  const newline = source.includes('\r\n') ? '\r\n' : '\n'
  const inner = source.slice(source.indexOf('{') + 1, closingIndex)
  const nonWhitespace = inner.trimEnd()
  const rendered = missing.map(([key, value]) => {
    const serialized = JSON.stringify(value, null, 2).replaceAll('\n', `${newline}${itemIndent}`)
    return `${itemIndent}${JSON.stringify(key)}: ${serialized}`
  }).join(`,${newline}`)
  source = `${source.slice(0, closingIndex).trimEnd()}${nonWhitespace ? ',' : ''}${newline}${rendered}${newline}${closingIndent}${source.slice(closingIndex)}`
  JSON.parse(source)
  writeFileSync(path, source, 'utf8')
}

function appendNestedObjectEntries(path, objectKey, entries) {
  let source = readFileSync(path, 'utf8')
  const root = JSON.parse(source)
  const target = root[objectKey]
  assert.ok(target && typeof target === 'object' && !Array.isArray(target), `Missing object ${objectKey} in ${path}`)
  const missing = Object.entries(entries).filter(([key, value]) => {
    if (!Object.hasOwn(target, key)) return true
    assert.deepEqual(target[key], value, `Conflicting ${path} entry ${key}`)
    return false
  })
  if (!missing.length) return
  const propertyIndex = source.indexOf(JSON.stringify(objectKey))
  assert.ok(propertyIndex >= 0, `Missing ${objectKey} in ${path}`)
  const objectStart = source.indexOf('{', propertyIndex)
  assert.ok(objectStart > propertyIndex, `Missing object ${objectKey} in ${path}`)
  const objectEnd = closingDelimiter(source, objectStart, '{', '}')
  const closeLineStart = source.lastIndexOf('\n', objectEnd) + 1
  const closingIndent = source.slice(closeLineStart, objectEnd).match(/^\s*/u)?.[0] ?? ''
  const itemIndent = `${closingIndent}  `
  const newline = source.includes('\r\n') ? '\r\n' : '\n'
  const inner = source.slice(objectStart + 1, objectEnd)
  const nonWhitespace = inner.trimEnd()
  const rendered = missing.map(([key, value]) => {
    const serialized = JSON.stringify(value, null, 2).replaceAll('\n', `${newline}${itemIndent}`)
    return `${itemIndent}${JSON.stringify(key)}: ${serialized}`
  }).join(`,${newline}`)
  source = `${source.slice(0, objectEnd).trimEnd()}${nonWhitespace ? ',' : ''}${newline}${rendered}${newline}${closingIndent}${source.slice(objectEnd)}`
  JSON.parse(source)
  writeFileSync(path, source, 'utf8')
}

function appendTsDictionaryEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const missing = Object.entries(entries).filter(([key, value]) => {
    const existing = source.split('\n').find(line => line.trim().startsWith(`'${key}':`) || line.trim().startsWith(`"${key}":`))
    if (!existing) return true
    assert.equal(existing.trim(), `'${key}': '${value}',`, `Conflicting translation ${key}`)
    return false
  })
  if (!missing.length) return
  const objectEnd = source.lastIndexOf('\n}')
  assert.ok(objectEnd >= 0, `Missing dictionary close in ${path}`)
  const rendered = missing.map(([key, value]) => `  '${key}': '${value}',`).join('\n')
  source = `${source.slice(0, objectEnd)}\n${rendered}${source.slice(objectEnd)}`
  writeFileSync(path, source, 'utf8')
}

function appendTsSetEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const missing = entries.filter(key => !source.split('\n').some(line => line.trim() === `${JSON.stringify(key)},`))
  if (!missing.length) return
  const setEnd = source.lastIndexOf('])')
  assert.ok(setEnd >= 0, `Missing set close in ${path}`)
  const rendered = missing.map(key => `  ${JSON.stringify(key)},`).join('\n')
  source = `${source.slice(0, setEnd)}${rendered}\n${source.slice(setEnd)}`
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

const colReference = readJson('data/references.json').find(reference => reference.id === colReferenceId)
assert.ok(colReference, `Missing pinned COL26.8 reference ${colReferenceId}`)
const sourceRow = readJson('data/sources/primates-dossiers-batch-3.json').records.find(record => record.colId === colId)
assert.ok(sourceRow, `Missing existing COL26.8 dossier source row ${colId}`)
assert.equal(sourceRow.scientificName, 'Macaca silenus (Linnaeus, 1758)')
assert.equal(String(sourceRow.sourceDatasetId), '2144')
const ramAudit = sourceRow.sources.find(source => source.id === 'ram2015')
assert.equal(ramAudit?.licenseAssessment, 'item-level-verified')
assert.equal(ramAudit?.licenseVersion, 'CC BY 4.0')
const dhawaleAudit = readJson('data/sources/primates-macaca-silenus-ecology-b49-2026-09-27.json')
assert.equal(dhawaleAudit.target.colId, colId)
assert.equal(dhawaleAudit.sources.find(source => source.id === 'dhawale2020')?.licenseAssessment, 'item-level-verified')
assert.equal(dhawaleAudit.sources.find(source => source.id === 'dhawale2020')?.licenseVersion, 'CC BY 4.0')

const identityStatement = 'COL26.8 dataset 316115 records accepted species usage 3WWP6 as Macaca silenus (Linnaeus, 1758), with Macaca usage 5HYC as its immediate parent. This records checklist identity and classification only.'
const geographyStatement = 'The selected studies sampled wild lion-tailed macaques at 15 named Western Ghats sites across Karnataka, Kerala and Tamil Nadu during 2010–2012, and observed one troop at Puthuthottam, Tamil Nadu, in 2016. These are study locations, not a complete current range inventory.'
const ecologyStatement = 'From February to May 2016, researchers followed one habituated, free-ranging troop at Puthuthottam for over 480 hours across forest interior, forest edge, an open forest patch and human settlement. In this troop, active foraging was higher in the open patch and forest edge, and lower in the settlement than the forest interior; the activity budget differed between the interior and settlement. This single-troop dry-season study does not establish species-wide ecology or a causal effect of habitat modification.'
const divergenceStatement = 'Ram et al. recovered north- and south-of-Palghat-gap mitochondrial clades among sampled lion-tailed macaques. A fossil-calibrated analysis of 893 mitochondrial bases estimated a mean time to their most recent common ancestor of 2.11 Ma; this is a regional marker-based model estimate, not a genome-wide species split date.'
const rangeStatement = 'The selected COL26.8 identity record and the cited living-population studies do not establish a numerical temporal fossil range or complete current geographic range for Macaca silenus; numerical range endpoints remain withheld.'

const taxonomyClaimId = `claim:taxon:${entityId}:taxonomy`
const geographyClaimId = `claim:taxon:${entityId}:biogeography-study-sites`
const ecologyClaimId = `claim:taxon:${entityId}:ecology`
const divergenceClaimId = `claim:taxon:${entityId}:divergence-time-mitochondrial-model`
const rangeClaimId = `claim:taxon:${entityId}:fossil-range`

const references = [
  {
    id: ramReferenceId,
    title: 'Pre-Historic and Recent Vicariance Events Shape Genetic Structure and Diversity in Endangered Lion-Tailed Macaque in the Western Ghats: Implications for Conservation',
    authors: 'Ram, M.S.; Marne, M.; Gaur, A.; Kumara, H.N.; Singh, M.; Kumar, A.; Umapathy, G.; et al.',
    publishedYear: 2015,
    type: 'paper',
    url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0142597',
    doi: '10.1371/journal.pone.0142597',
    publisher: 'PLOS ONE',
    pages: '10(11):e0142597',
    version: 'Published 2015-11-11',
    sourceRole: 'primary-study',
    fitnessFor: ['biogeography', 'geochronology', 'ecology'],
    metadataAssignment: 'curator-reviewed',
    note: 'Primary mitochondrial-DNA study using wild Western Ghats samples, with separately identified captive samples in some analyses. Claims are bounded to sampled sites and markers; the article states CC BY 4.0.',
  },
  {
    id: dhawaleReferenceId,
    title: 'Changing ecologies, shifting behaviours: Behavioural responses of a rainforest primate, the lion-tailed macaque Macaca silenus, to a matrix of anthropogenic habitats in southern India',
    authors: 'Dhawale, A.K.; Kumar, M.A.; Sinha, A.',
    publishedYear: 2020,
    type: 'paper',
    url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0238695',
    doi: '10.1371/journal.pone.0238695',
    publisher: 'PLOS ONE',
    pages: '15(9):e0238695',
    version: 'Published 2020-09-23',
    sourceRole: 'primary-study',
    fitnessFor: ['ecology', 'biogeography', 'methods'],
    metadataAssignment: 'curator-reviewed',
    note: 'Primary field study of one habituated, free-ranging troop in Puthuthottam, Valparai plateau, Tamil Nadu, during February–May 2016. Findings are bounded to one troop, one forest fragment and the dry season; the article states CC BY 4.0.',
  },
]
appendArrayRecords('data/references.json', null, references)

const profile = {
  id: entityId,
  treeNodeId: entityId,
  pbdbTaxonId: null,
  scientificName: 'Macaca silenus',
  commonName: 'Lion-tailed Macaque',
  commonNameZh: '狮尾猕猴',
  rank: 'species',
  parentName: 'Macaca',
  extinct: false,
  geography: [
    'Western Ghats, Karnataka, Kerala and Tamil Nadu, India (15 named sampling sites, 2010–2012; wild fecal samples)',
    'Puthuthottam forest fragment, Valparai plateau, Tamil Nadu, India (one troop; February–May 2016 study site)',
  ],
  overview: 'COL26.8 accepted species usage 3WWP6 identifies Macaca silenus (Linnaeus, 1758).',
  ecology: {
    diet: 'At Puthuthottam, the studied troop consumed plant parts from 19 plant species and other non-plant foods; plant feeding was greater in the forest interior than at the forest edge, while invertebrate feeding was greater in the open patch than in the interior. This is a single-troop dry-season result.',
    habitat: 'During over 480 follow-hours in one habituated troop, active foraging was higher in the open forest patch and forest edge, and lower in the human settlement than in the forest interior; the activity budget differed between interior and settlement. One troop was observed from February to May 2016.',
    locomotion: 'Not assessed in the selected studies.',
    bodySize: 'Not assessed in the selected studies.',
    guild: 'Not assessed as a broader species-level ecological guild.',
  },
  traits: [],
  traitsAssessmentStatus: 'not-assessed',
  evidenceSummary: 'The ecological profile is based on one habituated troop observed during the 2016 dry season. These local observations are incomplete species evidence, not a range-wide or annual ecological synthesis.',
  confidence: 'medium',
  referenceIds: [colReferenceId, ramReferenceId, dhawaleReferenceId],
}
appendArrayRecords('data/packages/mammalia/primates/profiles.source.json', null, [profile])

const claims = [
  {
    id: taxonomyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'taxonomy',
    claimKind: 'scientific',
    statement: identityStatement,
    confidence: 'medium',
      confidenceRationale: 'COL26.8 explicitly records accepted usage 3WWP6 and immediate parent usage 5HYC. The claim reports this checklist placement alone and makes no biological or phylogenetic inference.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 ChecklistBank dataset 316115; accepted usage 3WWP6, source dataset 2144 and immediate parent checked 2026-09-27',
    referenceLinks: [{ referenceId: colReferenceId, relation: 'supports', pages: 'Accepted species usage 3WWP6; immediate parent usage 5HYC Macaca; accepted classification through Primates usage 3W7' }],
  },
  {
    id: geographyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'biogeography',
    claimKind: 'scientific',
    statement: geographyStatement,
    confidence: 'high',
    confidenceRationale: 'Both primary studies identify their sampled locations directly. The statement retains study-site scope and makes no full-range inference.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Ram et al. 2015 DOI 10.1371/journal.pone.0142597; Dhawale et al. 2020 DOI 10.1371/journal.pone.0238695; methods checked 2026-09-27',
    referenceLinks: [
      { referenceId: ramReferenceId, relation: 'supports', pages: 'Methods, Study area and Sample collection; Figure 1' },
      { referenceId: dhawaleReferenceId, relation: 'supports', pages: 'Methods, Study area and Study troop and individuals; Figure 1' },
    ],
  },
  {
    id: ecologyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'ecology',
    claimKind: 'scientific',
    statement: ecologyStatement,
    confidence: 'medium',
    confidenceRationale: 'The article reports the study troop, dates, follow-hours, habitat classes and modelled behaviour comparisons directly. The observations concern one troop in one dry-season study and do not establish species-wide ecology or causal effects.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Dhawale et al. 2020 DOI 10.1371/journal.pone.0238695; Methods—Study area, Study troop and individuals, Field methods; Results—Ecological and behavioural responses, Figure 3 checked 2026-09-27',
    referenceLinks: [{ referenceId: dhawaleReferenceId, relation: 'supports', pages: 'Methods—Study area, Study troop and individuals, Field methods; Results—Ecological and behavioural responses; Figure 3' }],
  },
  {
    id: divergenceClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'divergence-time',
    claimKind: 'scientific',
    statement: divergenceStatement,
    confidence: 'medium',
    confidenceRationale: 'The sampled clades and model estimate are reported directly, but the date comes from a fossil-calibrated analysis of 893 mitochondrial bases and is not a genome-wide species split estimate.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Ram et al. 2015 DOI 10.1371/journal.pone.0142597; Results, Figure 4 and Table 2 checked 2026-09-27',
    referenceLinks: [{ referenceId: ramReferenceId, relation: 'supports', pages: 'Results, Genetic structure and diversity; Figure 4; Table 2' }],
  },
  {
    id: rangeClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'fossil-range',
    claimKind: 'scientific',
    statement: rangeStatement,
    confidence: 'low',
    confidenceRationale: 'The checklist establishes accepted identity and the selected sources study living populations or regional genetic history; none provides a reviewed temporal fossil-range endpoint or complete distribution inventory.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 usage 3WWP6; Ram et al. 2015 DOI 10.1371/journal.pone.0142597; Dhawale et al. 2020 DOI 10.1371/journal.pone.0238695; scope checked 2026-09-27',
    referenceLinks: [
      { referenceId: colReferenceId, relation: 'supports', pages: 'Accepted usage 3WWP6; identity and classification only' },
      { referenceId: ramReferenceId, relation: 'supports', quoteLocator: 'Regional mitochondrial study; no species fossil-range inventory' },
      { referenceId: dhawaleReferenceId, relation: 'supports', quoteLocator: 'Living-troop field study; no temporal fossil-range estimate' },
    ],
  },
]
appendArrayRecords('data/evidence/claims.json', null, claims)

appendObjectEntries('data/evidence/claim-statements.zh.json', {
  [identityStatement]: 'COL26.8 数据集 316115 将 3WWP6 记录为接受的 Macaca silenus（Linnaeus, 1758）种级用名，直接父级为 Macaca 用名 5HYC。此陈述仅记录清单身份与分类位置。',
  [geographyStatement]: '所选研究于 2010—2012 年在卡纳塔克邦、喀拉拉邦和泰米尔纳德邦的西高止山脉 15 个具名地点采集野生狮尾猕猴样本，并于 2016 年在泰米尔纳德邦普图托坦观察一个猴群。这些是研究地点，不是完整的当前分布区名录。',
  [ecologyStatement]: '2016 年 2 月至 5 月，研究者在普图托坦跟踪一群已习惯观察者、自由活动的狮尾猕猴，累计超过 480 小时，覆盖林内、林缘、开阔林地斑块和人类居住地。在该猴群中，开阔斑块和林缘的主动觅食高于林内，人类居住地低于林内；林内与居住地的活动时间预算也有差异。这项单群体旱季研究不能确立全物种生态规律或栖息地改变的因果效应。',
  [divergenceStatement]: 'Ram 等人在受采样的狮尾猕猴中识别出帕尔加特山口以北和以南的线粒体分支。基于 893 个线粒体碱基的化石校准分析，将其最近共同祖先的平均时间估为 2.11 Ma；这是区域性、基于标记的模型估计，不是全基因组物种分化日期。',
  [rangeStatement]: '所选 COL26.8 身份记录和现生种群研究未确立 Macaca silenus 的数值化年代范围或完整当前地理分布；年代范围端点继续保留未定。',
})

appendObjectEntries('data/evidence/claim-rationales.zh.json', {
  [taxonomyClaimId]: '固定版 COL26.8 明确记录了接受用名与直接父级。本主张仅限于清单身份，不推断生物学特征或系统发育关系。',
  [geographyClaimId]: '两篇一手研究都直接列出了各自的取样地点；陈述保留研究地点范围，不扩展为完整分布区。',
  [ecologyClaimId]: '论文直接报告猴群、时间、跟踪时长、栖息地分类和行为模型比较。观察仅来自一个猴群和一次旱季研究，不能确立全物种生态规律或因果效应。',
  [divergenceClaimId]: '受采样的分支及模型估值由论文直接报告，但年代来自 893 个线粒体碱基的化石校准分析，并非全基因组物种分化日期。',
  [rangeClaimId]: '清单支持接受身份；所选来源研究现生种群或区域遗传史，均未提供经审查的化石年代端点或完整分布名录。',
})

const ontology = readJson('data/navigation/atlas-ontology.json')
const macacaNode = findNode(ontology, 'macaca')
assert.ok(macacaNode, 'Missing Macaca parent in the primate ontology')
appendUnique(macacaNode.children, {
  id: entityId,
  name: 'Macaca silenus',
  commonName: 'Lion-tailed Macaque',
  commonNameZh: '狮尾猕猴',
  rank: 'species',
  taxonId: '',
  colUsageId: colId,
  colDatasetId: '2144',
  firstAppearance: 0,
  lastAppearance: 0,
  rangeEvidenceLevel: 'withheld-no-range-evidence',
  extinct: false,
  children: [],
  parentRelationshipKind: 'taxonomic-parent',
  entityKind: 'taxon',
  contentLevel: 'dossier',
}, node => node.id)
writeJson('data/navigation/atlas-ontology.json', ontology)

appendArrayRecords('data/ranges/range-evidence.json', null, [{
  id: `range:${entityId}:global`,
  entityId,
  rangeKind: 'global-composite',
  taxonomicConcept: 'Macaca silenus accepted COL26.8 usage 3WWP6; numerical temporal and geographic range withheld',
  geographicScope: 'No numerical geographic-temporal range exposed; sampled Western Ghats locations are not a complete current range inventory',
  olderMa: 0,
  youngerMa: 0,
  status: 'withheld-pending-provenance',
  uncertainty: { olderMa: null, youngerMa: null, note: 'Zero values are non-display placeholders; the selected mitochondrial and single-troop studies do not establish temporal fossil endpoints or a complete wild-distribution inventory.' },
  evidenceBasis: 'COL26.8 supports accepted identity and classification; Ram et al. report regional mitochondrial sampling and Dhawale et al. report one living troop, neither a complete fossil-range or current distribution study.',
  evidenceLevel: 'withheld-no-range-evidence',
  confidence: 'low',
  claimIds: [],
  referenceLocators: [{ referenceId: colReferenceId, locator: 'COL26.8 dataset 316115; accepted usage 3WWP6 and parent classification (identity only)' }],
  reviewStatus: 'automated-audit-passed',
}])

const previewPath = 'data/pages-preview.json'
const preview = readJson(previewPath)
const storyId = 'primates-evidence-without-an-ancestor-ladder'
assert.ok(preview.storyTaxonIds[storyId], `Missing preview story ${storyId}`)
appendArrayRecords(previewPath, 'taxonIds', [entityId], value => value)
appendArrayRecords(previewPath, `storyTaxonIds.${storyId}`, [entityId], value => value)

const pbdbPath = 'data/sources/pbdb-taxon-resolution.json'
const pbdb = readJson(pbdbPath)
appendUnique(pbdb.resolutions, {
  entityId,
  localName: 'Macaca silenus',
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
linkage.unresolvedEntityIds = [...new Set([...linkage.unresolvedEntityIds, entityId])].sort()
writeJson(linkagePath, linkage)

const overridePath = 'data/packages/mammalia/primates/evidence/field-claim-overrides.source.json'
appendNestedObjectEntries(overridePath, 'profiles', {
  [entityId]: {
  firstAppearance: { status: 'not-assessed' },
  lastAppearance: { status: 'not-assessed' },
  geography: { claimId: geographyClaimId },
  overview: { claimId: taxonomyClaimId },
  evidenceSummary: { claimId: ecologyClaimId },
  confidence: { claimId: ecologyClaimId },
  'ecology.diet': { claimId: ecologyClaimId },
  'ecology.habitat': { claimId: ecologyClaimId },
  'ecology.locomotion': { status: 'not-assessed' },
  'ecology.bodySize': { status: 'not-assessed' },
  'ecology.guild': { status: 'not-assessed' },
  },
})

const profileTranslations = {
  'Lion-tailed Macaque': '狮尾猕猴',
  [profile.geography[0]]: '印度卡纳塔克邦、喀拉拉邦和泰米尔纳德邦的西高止山脉（2010—2012 年 15 个具名野外取样地点）',
  [profile.geography[1]]: '印度泰米尔纳德邦瓦尔帕赖高原普图托坦森林斑块（单一猴群；2016 年 2—5 月研究地点）',
  [profile.overview]: 'COL26.8 接受用名 3WWP6 标识 Macaca silenus（Linnaeus, 1758）。',
  [profile.ecology.diet]: '在普图托坦，受研究猴群取食了 19 种植物的植物部分及其他非植物食物；林内的植物取食多于林缘，而开阔斑块的无脊椎动物取食多于林内。这是单一猴群旱季的观察结果。',
  [profile.ecology.habitat]: '对一群已习惯观察者的猴群进行超过 480 小时跟踪时，开阔林地斑块和林缘的主动觅食高于林内，人类居住地低于林内；林内与居住地的活动时间预算有差异。研究观察期为 2016 年 2—5 月。',
  [profile.evidenceSummary]: '生态档案依据 2016 年旱季对一个已习惯观察者猴群的研究。这些局地观察是不完整的物种证据，并非全年或全分布区生态综述。',
}
appendTsDictionaryEntries('src/i18n/primatesZh.ts', profileTranslations)
appendTsSetEntries('src/i18n/primatesZhKeys.ts', Object.keys(profileTranslations))

console.log(JSON.stringify({
  entityId,
  colUsage: colId,
  profile: 'selected-core-and-pages-preview',
  sourceClaims: [taxonomyClaimId, geographyClaimId, ecologyClaimId, divergenceClaimId, rangeClaimId],
  dossierArchiveBundled: false,
}, null, 2))
