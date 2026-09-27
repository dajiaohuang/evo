import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'

const today = '2026-09-27'
const entityId = 'callithrix_jacchus'
const colId = '697NS'
const colReferenceId = 'col-2026-checklistbank-316115'
const zieglerReferenceId = 'ziegler-sosa-colman-2017-common-marmoset-fathering'
const benavidesReferenceId = 'benavides-2022-common-marmoset-rabies-brazil'
const malukiewiczReferenceId = 'malukiewicz-2021-callithrix-mitogenomic-phylogeny'

const readJson = path => JSON.parse(readFileSync(path, 'utf8'))

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
  throw new Error(`Unclosed ${opening}`)
}

function appendArrayRecords(path, values, identity = value => value.id ?? value) {
  let source = readFileSync(path, 'utf8')
  const target = JSON.parse(source)
  assert.ok(Array.isArray(target), `${path} must contain an array`)
  for (const value of values) {
    const existing = target.find(item => identity(item) === identity(value))
    if (existing) assert.deepEqual(existing, value, `${path} has a different entry for ${identity(value)}`)
  }
  const missing = values.filter(value => !target.some(existing => identity(existing) === identity(value)))
  if (!missing.length) return
  const arrayStart = source.indexOf('[')
  const arrayEnd = closingDelimiter(source, arrayStart, '[', ']')
  const inner = source.slice(arrayStart + 1, arrayEnd)
  const nonWhitespace = inner.trimEnd()
  const closeLineStart = source.lastIndexOf('\n', arrayEnd) + 1
  const closingIndent = source.slice(closeLineStart, arrayEnd).match(/^\s*/u)?.[0] ?? ''
  const itemIndent = `${closingIndent}  `
  const newline = source.includes('\r\n') ? '\r\n' : '\n'
  const rendered = missing.map(value => JSON.stringify(value, null, 2)
    .replaceAll('\n', `${newline}${itemIndent}`)
    .replace(/^/u, itemIndent)).join(`,${newline}`)
  const insertion = `${nonWhitespace ? ',' : ''}${newline}${rendered}${newline}${closingIndent}`
  source = `${source.slice(0, arrayStart + 1)}${inner.trimEnd()}${insertion}${source.slice(arrayEnd)}`
  JSON.parse(source)
  writeFileSync(path, source, 'utf8')
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

const expansion = readJson('data/sources/primates-callithrix-jacchus-evidence-expansion-b40-2026-09-25.json')
assert.equal(expansion.target.colId, colId)
assert.equal(expansion.target.scientificName, 'Callithrix jacchus (Linnaeus, 1758)')
for (const sourceId of ['benavides2022', 'malukiewicz2021']) {
  const source = expansion.sources.find(item => item.id === sourceId)
  assert.equal(source?.licenseAssessment, 'item-level-verified')
  assert.equal(source?.licenseVersion, '4.0')
}
const benavidesAudit = expansion.claims.find(item => item.sourceId === 'benavides2022' && item.facet === 'ecology')
const benavidesRangeAudit = expansion.claims.find(item => item.sourceId === 'benavides2022' && item.facet === 'distribution')
const evolutionAudit = expansion.claims.find(item => item.sourceId === 'malukiewicz2021' && item.facet === 'evolution')
assert.ok(benavidesAudit?.locator && benavidesRangeAudit?.locator && evolutionAudit?.locator)

const references = [
  {
    id: benavidesReferenceId,
    title: 'Spatio-temporal dynamics of rabies and habitat suitability of the common marmoset Callithrix jacchus in Brazil',
    authors: 'Benavides, J.A.; Raghavan, R.K.; Boere, V.; et al.',
    publishedYear: 2022,
    type: 'paper',
    url: 'https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0010254',
    doi: '10.1371/journal.pntd.0010254',
    publisher: 'PLOS Neglected Tropical Diseases',
    pages: '16(3):e0010254',
    version: 'Published 2022-03-31',
    sourceRole: 'primary-study',
    fitnessFor: ['ecology', 'biogeography', 'methods'],
    metadataAssignment: 'curator-reviewed',
    note: 'Primary analysis of Brazilian Ministry of Health passive surveillance from 2008 to 2020 and a presence-based habitat-suitability model. Reported cases, observed localities and modeled suitability are distinct evidence; none is a species-wide census or complete range inventory. Article text is item-level verified CC BY 4.0.',
  },
  {
    id: malukiewiczReferenceId,
    title: 'Mitogenomic phylogeny of Callithrix with special focus on human transferred taxa',
    authors: 'Malukiewicz, J.; Cartwright, R.A.; Curi, N.H.A.; et al.',
    publishedYear: 2021,
    type: 'paper',
    url: 'https://link.springer.com/article/10.1186/s12864-021-07533-1',
    doi: '10.1186/s12864-021-07533-1',
    publisher: 'BMC Genomics',
    pages: '22:239',
    version: 'Published 2021-04-06',
    sourceRole: 'primary-study',
    fitnessFor: ['topology', 'geochronology', 'biogeography'],
    metadataAssignment: 'curator-reviewed',
    note: 'Primary Callithrix mitogenomic study combining 49 newly sequenced mitogenomes with published sequences. The approximately 0.51 Ma estimate concerns sampled mitochondrial lineages under the study model, not a nuclear-genome species tree or definitive species-origin date. Article text is item-level verified CC BY 4.0.',
  },
]
appendArrayRecords('data/references.json', references)
appendArrayRecords('data/packages/mammalia/primates/references.json', references)

const taxonomyStatement = 'COL26.8 dataset 316115 records accepted species usage 697NS as Callithrix jacchus (Linnaeus, 1758), within the Callithrix classification path. This statement records checklist identity only.'
const geographyStatement = 'A presence-only occurrence synthesis for Brazil described northeastern coastal and inland records of Callithrix jacchus as native and records from São Paulo, Paraná, Rio de Janeiro and Minas Gerais as introduction areas. This bounded compilation does not establish exhaustive range limits or absence elsewhere; modeled suitability is separate from observed presence.'
const surveillanceStatement = 'Brazilian Ministry of Health passive surveillance reported 67 rabies outbreaks affecting Callithrix jacchus (91 cases) in 41 municipalities from January 2008 through October 2020. These are reported surveillance counts, not a census of infection prevalence, abundance or population trend across the species range.'
const divergenceStatement = 'A Callithrix mitogenomic study combining 49 newly sequenced marmoset mitogenomes with published sequences estimated that Callithrix jacchus and the Callithrix penicillata Caatinga clade were the most recently diverged sampled sister lineages, at about 0.51 Ma. This is a mitochondrial-lineage estimate under the study sampling and model, not a nuclear species-tree date or definitive species-origin date.'

const taxonomyClaimId = `claim:taxon:${entityId}:taxonomy-col26-8-identity`
const geographyClaimId = `claim:taxon:${entityId}:distribution-presence-only-records`
const surveillanceClaimId = `claim:taxon:${entityId}:rabies-surveillance-2008-2020`
const divergenceClaimId = `claim:taxon:${entityId}:mitochondrial-lineage-estimate`
const claims = [
  {
    id: taxonomyClaimId,
    subjectId: `taxon:${entityId}`,
    claimKind: 'scientific',
    claimType: 'taxonomy',
    statement: taxonomyStatement,
    confidence: 'medium',
    confidenceRationale: 'The pinned COL26.8 source explicitly records accepted usage 697NS and its classification path. The claim reproduces checklist identity and does not use it as an evolutionary hypothesis.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 dataset 316115; accepted usage 697NS, source dataset 2144 checked 2026-09-27',
    referenceLinks: [{ referenceId: colReferenceId, relation: 'supports', pages: 'Accepted species usage 697NS; classification path only' }],
  },
  {
    id: geographyClaimId,
    subjectId: `taxon:${entityId}`,
    claimKind: 'scientific',
    claimType: 'biogeography',
    statement: geographyStatement,
    confidence: 'medium',
    confidenceRationale: 'The article describes a bounded presence-only occurrence compilation and keeps modeled suitability separate from records. Native and introduction labels follow the authors and do not define complete range limits.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Benavides et al. 2022 DOI 10.1371/journal.pntd.0010254; occurrence results checked 2026-09-27',
    referenceLinks: [{ referenceId: benavidesReferenceId, relation: 'supports', quoteLocator: benavidesRangeAudit.locator }],
  },
  {
    id: surveillanceClaimId,
    subjectId: `taxon:${entityId}`,
    claimKind: 'scientific',
    claimType: 'ecology',
    statement: surveillanceStatement,
    confidence: 'high',
    confidenceRationale: 'The authors report official passive-surveillance totals and municipality counts. These values describe reported outbreaks through October 2020, not infection prevalence, abundance or a range-wide population trend.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Benavides et al. 2022 DOI 10.1371/journal.pntd.0010254; abstract and results checked 2026-09-27',
    referenceLinks: [{ referenceId: benavidesReferenceId, relation: 'supports', quoteLocator: benavidesAudit.locator }],
  },
  {
    id: divergenceClaimId,
    subjectId: `taxon:${entityId}`,
    claimKind: 'scientific',
    claimType: 'divergence-time',
    statement: divergenceStatement,
    confidence: 'medium',
    confidenceRationale: 'The paper estimates divergence between sampled mitochondrial lineages under a stated sampling design and model. This cannot establish a nuclear species-tree date or a definitive species-origin date.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Malukiewicz et al. 2021 DOI 10.1186/s12864-021-07533-1; abstract and results checked 2026-09-27',
    referenceLinks: [{ referenceId: malukiewiczReferenceId, relation: 'supports', quoteLocator: evolutionAudit.locator }],
  },
]
appendArrayRecords('data/evidence/claims.json', claims)

appendObjectEntries('data/evidence/claim-statements.zh.json', {
  [taxonomyStatement]: 'COL26.8 数据集 316115 将用名 697NS 记录为 Callithrix jacchus（Linnaeus, 1758）接受种，并置于 Callithrix 分类路径中。此陈述仅记录清单身份。',
  [geographyStatement]: '巴西一项仅含出现记录的汇编将东北部沿海与内陆的 Callithrix jacchus 记录描述为原生区域，将圣保罗、巴拉那、里约热内卢和米纳斯吉拉斯的记录描述为引入区域。该有限记录集不能确立完整分布边界或证明其他地区不存在；模型适宜性与实际出现记录分开处理。',
  [surveillanceStatement]: '巴西卫生部被动监测在 2008 年 1 月至 2020 年 10 月间报告 41 个市镇发生影响 Callithrix jacchus 的 67 起狂犬病疫情（91 例）。这些是报告的监测数量，不是对全物种分布区感染率、数量或种群趋势的普查。',
  [divergenceStatement]: '一项柽柳猴属线粒体基因组研究结合 49 个新测狨猴线粒体基因组与已发表序列，估计 Callithrix jacchus 与 Callithrix penicillata 的卡廷加支系是该研究样本中最近分化的一对姐妹谱系，时间约为 0.51 Ma。这是受该研究样本与模型限制的线粒体谱系估计，不是核基因组物种树定年或确定的物种起源日期。',
})

appendObjectEntries('data/evidence/claim-rationales.zh.json', {
  [taxonomyClaimId]: '固定版 COL26.8 明确记录了接受用名 697NS 及其分类路径。本主张仅复述清单身份，不把分类路径解释为演化假说。',
  [geographyClaimId]: '论文给出有界的仅含出现记录汇编，并将模型适宜性与实际记录分开。原生区和引入区标签沿用作者表述，不等同于完整分布边界。',
  [surveillanceClaimId]: '论文报告官方被动监测的疫情总数和市镇数量。本主张仅描述截至 2020 年 10 月的报告记录，不推断全分布区流行率、数量或种群趋势。',
  [divergenceClaimId]: '论文按其取样设计与模型估计受采样线粒体谱系的分化时间。这不能确立核基因组物种树日期或确定的物种起源时间。',
})

const profile = {
  id: entityId,
  treeNodeId: entityId,
  pbdbTaxonId: null,
  scientificName: 'Callithrix jacchus',
  commonName: 'Common Marmoset',
  commonNameZh: '普通狨',
  rank: 'species',
  parentName: 'Callithrix',
  extinct: false,
  geography: ['Brazil: northeastern coastal and inland records described by the selected study as native; southern records in São Paulo, Paraná, Rio de Janeiro and Minas Gerais described as introductions. Presence-only study compilation, not exhaustive range limits.'],
  overview: 'COL26.8 accepted usage 697NS identifies Callithrix jacchus (Linnaeus, 1758). Selected evidence covers one captive-colony offspring study, Brazilian passive rabies surveillance and sampled mitochondrial lineages; this is not a complete species review.',
  ecology: {
    diet: 'Not assessed in the selected core evidence.',
    habitat: 'The selected studies do not establish a species-wide habitat profile. Observed localities and modeled habitat suitability in the rabies study are distinct evidence.',
    locomotion: 'Not assessed in the selected core evidence.',
    bodySize: 'Not assessed in the selected core evidence.',
    guild: 'Not assessed in the selected core evidence.',
  },
  traits: [],
  traitsAssessmentStatus: 'not-assessed',
  evidenceSummary: 'The core profile links a captive-colony association between paternal responsiveness and infant outcomes, Brazilian passive rabies reports, and a model-based mitochondrial-lineage estimate. These sources do not establish wild life history, species-wide ecology, complete distribution, a nuclear-genome divergence date or formal conservation status.',
  confidence: 'medium',
  referenceIds: [colReferenceId, zieglerReferenceId, benavidesReferenceId, malukiewiczReferenceId],
}
appendArrayRecords('data/packages/mammalia/primates/profiles.source.json', [profile])

appendNestedObjectEntries('data/packages/mammalia/primates/evidence/field-claim-overrides.source.json', 'profiles', {
  [entityId]: {
    firstAppearance: { status: 'not-assessed' },
    lastAppearance: { status: 'not-assessed' },
    geography: { claimId: geographyClaimId },
    overview: { claimId: taxonomyClaimId },
    evidenceSummary: { claimId: surveillanceClaimId },
    confidence: { claimId: surveillanceClaimId },
    'ecology.diet': { status: 'not-assessed' },
    'ecology.habitat': { status: 'not-assessed' },
    'ecology.locomotion': { status: 'not-assessed' },
    'ecology.bodySize': { status: 'not-assessed' },
    'ecology.guild': { status: 'not-assessed' },
  },
})

const profileTranslations = {
  [profile.geography[0]]: '巴西：所选研究将东北部沿海与内陆记录描述为原生区域，将南部圣保罗、巴拉那、里约热内卢和米纳斯吉拉斯的记录描述为引入区域。该研究仅汇编出现记录，不构成完整分布边界。',
  [profile.overview]: 'COL26.8 接受用名 697NS 标识 Callithrix jacchus（Linnaeus, 1758）。所选证据涵盖一项圈养猴群幼仔研究、巴西被动狂犬病监测和受采样的线粒体谱系；这不是完整物种综述。',
  [profile.ecology.diet]: '所选核心证据未评估食性。',
  [profile.ecology.habitat]: '所选研究未确立全物种栖息地概况。狂犬病研究中的局地出现记录与模型预测的栖地适宜性是不同证据。',
  [profile.ecology.locomotion]: '所选核心证据未评估运动方式。',
  [profile.ecology.bodySize]: '所选核心证据未评估体型。',
  [profile.ecology.guild]: '所选核心证据未评估生态功能群。',
  [profile.evidenceSummary]: '核心档案链接了一项圈养猴群中父亲响应性与幼仔结果的相关研究、巴西被动狂犬病报告，以及基于模型的线粒体谱系估值。这些来源不能确立野外生活史、全物种生态规律、完整分布、核基因组分化日期或正式保育状态。',
}
appendTsDictionaryEntries('src/i18n/primatesZh.ts', profileTranslations)
appendTsSetEntries('src/i18n/primatesZhKeys.ts', Object.keys(profileTranslations))

console.log(JSON.stringify({
  entityId,
  colUsage: colId,
  profile: 'existing-shared-core-and-pages-preview-selection',
  sourceClaims: [taxonomyClaimId, geographyClaimId, surveillanceClaimId, divergenceClaimId],
  referenceIds: profile.referenceIds,
  allowlistChanged: false,
}, null, 2))
