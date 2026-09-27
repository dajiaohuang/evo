import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'

const today = '2026-09-27'
const entityId = 'homo_sapiens'
const colUsageId = '6MB3T'
const colReferenceId = 'col-2026-checklistbank-316115'
const jakobssonReferenceId = 'jakobsson-2026-southern-african-ancient-genomes'

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

const dossierPath = 'data/knowledge/raw-dossiers/primates-homo-sapiens-south-african-genomes-2026-09-24.jsonl'
const dossier = JSON.parse(readFileSync(dossierPath, 'utf8').split(/\r?\n/u)[0])
assert.equal(dossier.colId, colUsageId)
assert.equal(dossier.sourceDatasetId, '2144')
const studySource = dossier.sources.find(source => source.id === 'jakobsson2025')
assert.equal(studySource?.licenseAssessment, 'item-level-verified')
assert.equal(studySource?.licenseVersion, 'CC BY 4.0')
assert.ok(dossier.facets.evolution.claims[0].locator)
assert.ok(dossier.facets.distribution.claims[0].locator)
assert.ok(readJson('data/pages-preview.json').taxonIds.includes(entityId), 'Homo sapiens must remain in the shared App/Pages selection')

const jakobssonReference = {
  id: jakobssonReferenceId,
  title: 'Homo sapiens-specific evolution unveiled by ancient southern African genomes',
  authors: 'Jakobsson, M.; Bernhardsson, C.; McKenna, J.; et al.',
  publishedYear: 2026,
  type: 'paper',
  url: 'https://www.nature.com/articles/s41586-025-09811-4',
  doi: '10.1038/s41586-025-09811-4',
  publisher: 'Nature',
  pages: '650(8100):156–163',
  version: 'Published online 2025-12-03; issue date 2026',
  sourceRole: 'primary-study',
  fitnessFor: ['biogeography', 'evolution', 'methods'],
  metadataAssignment: 'curator-reviewed',
  note: 'Primary whole-genome study of 28 ancient southern African individuals dated 10,200–150 calibrated years before present. Genetic comparisons are bounded to the study samples and comparison panel, not a species-wide survey. Article text is item-level verified CC BY 4.0; summaries are paraphrased and figures, third-party content and data files are not reused.',
}
appendArrayRecords('data/references.json', [jakobssonReference])
appendArrayRecords('data/packages/mammalia/primates/references.json', [jakobssonReference])

const taxonomyStatement = 'COL26.8 dataset 316115 records accepted species usage 6MB3T as Homo sapiens (Linnaeus, 1758), with sourceDatasetId 2144 in the Primates classification. This statement records the pinned checklist identity only.'
const evolutionStatement = 'In the study comparison, ancient southern African individuals dated to more than 1,400 calibrated years before present fell outside the range of genetic variation in the modern-day human comparison sample and carried many variants the authors classify as Homo sapiens-specific. This finding is limited to the sampled individuals, comparison panel and the authors’ operational variant classification; it does not describe all human populations or a separate taxonomic unit.'
const localitiesStatement = 'The study sequenced 28 ancient individuals from archaeological sites south of the Limpopo River across central and southern South Africa. These sample localities cover individuals dated 10,200–150 calibrated years before present and do not delimit the current range of Homo sapiens.'

const taxonomyClaimId = `claim:taxon:${entityId}:taxonomy-col26-8-identity`
const evolutionClaimId = `claim:taxon:${entityId}:ancient-south-african-genomes`
const localitiesClaimId = `claim:taxon:${entityId}:sampled-archaeological-localities`
const claims = [
  {
    id: taxonomyClaimId,
    subjectId: `taxon:${entityId}`,
    claimKind: 'scientific',
    claimType: 'taxonomy',
    statement: taxonomyStatement,
    confidence: 'medium',
    confidenceRationale: 'The pinned COL26.8 checklist records accepted species usage 6MB3T, its authorship, rank, sourceDatasetId and Primates classification. This is a nomenclatural identity claim only.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'COL26.8 dataset 316115; accepted usage 6MB3T, source dataset 2144 checked 2026-09-27',
    referenceLinks: [{ referenceId: colReferenceId, relation: 'supports', pages: 'Accepted species usage 6MB3T; sourceDatasetId 2144; Primates classification' }],
  },
  {
    id: evolutionClaimId,
    subjectId: `taxon:${entityId}`,
    claimKind: 'scientific',
    claimType: 'evolution',
    statement: evolutionStatement,
    confidence: 'medium',
    confidenceRationale: 'The peer-reviewed whole-genome study reports the sample dates, comparison result and operational variant classification. The result is bounded to the 28 ancient southern African individuals and specified comparison panel, not a species-wide sample.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Jakobsson et al., Nature 650(8100):156–163; DOI 10.1038/s41586-025-09811-4; abstract and Results checked 2026-09-27',
    referenceLinks: [{ referenceId: jakobssonReferenceId, relation: 'supports', quoteLocator: 'Abstract; Results, Unique ancient southern African ancestry' }],
  },
  {
    id: localitiesClaimId,
    subjectId: `taxon:${entityId}`,
    claimKind: 'scientific',
    claimType: 'biogeography',
    statement: localitiesStatement,
    confidence: 'medium',
    confidenceRationale: 'The article explicitly describes its archaeological sampling south of the Limpopo River and across central and southern South Africa. These are study localities and cannot define a modern or complete species range.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: 'Jakobsson et al., Nature 650(8100):156–163; DOI 10.1038/s41586-025-09811-4; sampling description and Figure 1 checked 2026-09-27',
    referenceLinks: [{ referenceId: jakobssonReferenceId, relation: 'supports', quoteLocator: 'Main, sampling description; Figure 1' }],
  },
]
appendArrayRecords('data/evidence/claims.json', claims)

appendObjectEntries('data/evidence/claim-statements.zh.json', {
  [taxonomyStatement]: 'COL26.8 数据集 316115 将接受用名 6MB3T 记录为 Homo sapiens（Linnaeus, 1758），来源清单 sourceDatasetId 为 2144，分类路径归入 Primates。本主张仅记录固定版清单身份。',
  [evolutionStatement]: '在该研究的比较中，距今超过 1,400 个校准年的南部非洲古代个体，其遗传组成落在该研究现生人类比较样本的变异范围之外，并携带多种作者归类为 Homo sapiens-specific 的变异。该结果仅适用于所采样个体、比较组和作者的操作性变异分类；它不代表所有人群，也不指向独立分类单元。',
  [localitiesStatement]: '该研究对来自林波波河以南、南非中部和南部考古地点的 28 名古代个体进行了测序。样本年代为距今 10,200–150 个校准年；这些采样地点不能界定 Homo sapiens 的现今分布范围。',
})

appendObjectEntries('data/evidence/claim-rationales.zh.json', {
  [taxonomyClaimId]: '固定版 COL26.8 清单直接记录了接受用名 6MB3T、作者、种级等级、sourceDatasetId 和 Primates 分类。本主张仅记录命名身份。',
  [evolutionClaimId]: '同行评审的全基因组研究报告了样本年代、比较结果及作者的操作性变异分类。结论严格限于 28 名南部非洲古代个体和论文指定的比较组，不外推至整个物种。',
  [localitiesClaimId]: '论文明确描述了林波波河以南、南非中部和南部的考古采样地点。它们是研究采样位置，不能界定现代或完整物种分布。',
})

const profile = {
  id: entityId,
  treeNodeId: entityId,
  pbdbTaxonId: 'txn:83088',
  scientificName: 'Homo sapiens',
  commonName: 'Modern Humans',
  commonNameZh: '现代人类',
  rank: 'species',
  parentName: 'Homo',
  extinct: false,
  geography: ['Archaeological sample sites south of the Limpopo River across central and southern South Africa; sampled individuals date to 10,200–150 calibrated years before present. These localities do not delimit the current species range.'],
  overview: 'COL26.8 accepted species usage 6MB3T identifies Homo sapiens (Linnaeus, 1758). The selected evidence concerns 28 ancient southern African individuals and their study-defined genomic comparisons; this is not a complete species review.',
  ecology: {
    diet: 'Not assessed in the selected core evidence.',
    habitat: 'The selected genomic study does not establish a species-wide habitat profile.',
    locomotion: 'Not assessed in the selected core evidence.',
    bodySize: 'Not assessed in the selected core evidence.',
    guild: 'Not assessed in the selected core evidence.',
  },
  traits: [],
  traitsAssessmentStatus: 'not-assessed',
  evidenceSummary: 'A whole-genome study of 28 ancient southern African individuals dated 10,200–150 calibrated years before present found that samples older than 1,400 years fell outside the genetic-variation range of the study’s modern human comparison panel and carried many variants classified by the authors as Homo sapiens-specific. This is a sample-bounded population-genomic result, not a species-wide evolutionary history.',
  confidence: 'medium',
  referenceIds: [colReferenceId, jakobssonReferenceId],
}
appendArrayRecords('data/packages/mammalia/primates/profiles.source.json', [profile])

appendNestedObjectEntries('data/packages/mammalia/primates/evidence/field-claim-overrides.source.json', 'profiles', {
  [entityId]: {
    firstAppearance: { status: 'not-assessed' },
    lastAppearance: { status: 'not-assessed' },
    geography: { claimId: localitiesClaimId },
    overview: { claimId: taxonomyClaimId },
    evidenceSummary: { claimId: evolutionClaimId },
    confidence: { claimId: evolutionClaimId },
    'ecology.diet': { status: 'not-assessed' },
    'ecology.habitat': { status: 'not-assessed' },
    'ecology.locomotion': { status: 'not-assessed' },
    'ecology.bodySize': { status: 'not-assessed' },
    'ecology.guild': { status: 'not-assessed' },
  },
})

const profileTranslations = {
  evolution: '演化',
  [profile.geography[0]]: '林波波河以南、南非中部和南部的考古采样地点；样本个体距今 10,200–150 个校准年。这些地点不能界定该物种的现今分布范围。',
  [profile.overview]: 'COL26.8 接受种用名 6MB3T 标识 Homo sapiens（Linnaeus, 1758）。所选证据涉及 28 名南部非洲古代个体及论文定义的基因组比较；这不是完整的物种综述。',
  [profile.ecology.diet]: '所选核心证据未评估食性。',
  [profile.ecology.habitat]: '所选基因组研究未确立全物种栖息地概况。',
  [profile.ecology.locomotion]: '所选核心证据未评估运动方式。',
  [profile.ecology.bodySize]: '所选核心证据未评估体型。',
  [profile.ecology.guild]: '所选核心证据未评估生态功能群。',
  [profile.evidenceSummary]: '一项全基因组研究分析了 28 名距今 10,200–150 个校准年的南部非洲古代个体。研究报告，超过 1,400 年的样本落在该研究现生人类比较组的遗传变异范围之外，并携带多种作者归类为 Homo sapiens-specific 的变异。这是受样本范围限制的人群基因组结果，不是全物种演化史。',
}
appendTsDictionaryEntries('src/i18n/primatesZh.ts', profileTranslations)
appendTsSetEntries('src/i18n/primatesZhKeys.ts', Object.keys(profileTranslations))

console.log(JSON.stringify({
  entityId,
  colUsage: colUsageId,
  coreSelection: 'existing-shared-app-and-pages-selection',
  claimIds: claims.map(claim => claim.id),
  referenceIds: profile.referenceIds,
  fullDatasetOrDossierArchiveBundled: false,
}, null, 2))
