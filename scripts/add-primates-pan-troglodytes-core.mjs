import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'

const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
const appendUnique = (items, value, key = item => item) => {
  if (!items.some(item => key(item) === key(value))) items.push(value)
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
  assert.ok(missing.every(value => !target.some(existing => identity(existing) === identity(value))), `${path} already has a requested entry`)
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
  assert.notEqual(propertyIndex, -1, `Missing ${property} in ${path}`)
  const arrayStart = key ? source.indexOf('[', propertyIndex) : source.indexOf('[')
  const arrayEnd = closingDelimiter(source, arrayStart, '[', ']')
  const inner = source.slice(arrayStart + 1, arrayEnd)
  const nonWhitespace = inner.trimEnd()
  const lineStart = source.lastIndexOf('\n', arrayStart) + 1
  const baseIndent = source.slice(lineStart, arrayStart).match(/^\s*/u)?.[0] ?? ''
  const itemIndent = `${baseIndent}  `
  const multiline = inner.includes('\n')
  const rendered = missing.map(value => {
    const json = JSON.stringify(value, null, 2)
    return multiline ? json.replaceAll('\n', `\n${itemIndent}`).replace(/^/u, itemIndent) : json
  }).join(multiline ? ',\n' : ', ')
  const insertion = multiline
    ? `${nonWhitespace ? ',' : ''}\n${rendered}\n${baseIndent}`
    : `${nonWhitespace ? ', ' : ''}${rendered}`
  source = `${source.slice(0, arrayStart + 1)}${inner.trimEnd()}${insertion}${source.slice(arrayEnd)}`
  writeFileSync(path, source, 'utf8')
}
function appendObjectEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const target = JSON.parse(source)
  const missing = Object.entries(entries).filter(([key, value]) => {
    if (!(key in target)) return true
    assert.deepEqual(target[key], value, `${path} has a different existing entry for ${key}`)
    return false
  })
  if (!missing.length) return
  const objectEnd = source.lastIndexOf('}')
  assert.notEqual(objectEnd, -1, `Missing object close in ${path}`)
  const beforeEnd = source.slice(0, objectEnd).trimEnd()
  const rendered = missing.map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)},`).join('\n')
  source = `${beforeEnd},\n${rendered}\n${source.slice(objectEnd)}`
  // JSON object source files in this repository omit a trailing comma.
  source = source.replace(/,\n(\s*\})\s*$/u, '\n$1\n')
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

const colId = '4C92G'
const sourceDatasetId = '2144'
const entityId = 'pan_troglodytes'
const colReferenceId = 'col-2026-checklistbank-316115'
const ecologyReferenceId = 'bryson-morrison-2017-bossou-habitat'
const ecologyClaimId = `claim:taxon:${entityId}:ecology`
const geographyClaimId = `claim:taxon:${entityId}:biogeography`
const taxonomyClaimId = `claim:taxon:${entityId}:taxonomy`
const rawDossierPath = 'data/knowledge/raw-dossiers/primates-batch-2.jsonl'
const dossier = readFileSync(rawDossierPath, 'utf8').split(/\r?\n/u).filter(Boolean).map(JSON.parse).find(record => record.colId === colId)
assert.ok(dossier, `Missing existing raw dossier for ${colId}`)
assert.equal(dossier.scientificName, 'Pan troglodytes (Blumenbach, 1775)')
assert.equal(dossier.rank, 'species')
assert.equal(String(dossier.sourceDatasetId), sourceDatasetId)
assert.deepEqual(dossier.identity.parentChain.map(node => node.id), ['6D2G', 'JPH', '6256T', '58L', '4PM', '4DT', '3W7'])
const bossouClaim = dossier.facets.ecology.claims.find(claim => claim.sourceIds.includes('brysonMorrison2017'))
assert.ok(bossouClaim, 'Missing Bossou ecology claim')
assert.match(bossouClaim.text, /mature forest was the most selected habitat/u)
const bossouSource = dossier.sources.find(source => source.id === 'brysonMorrison2017')
assert.equal(bossouSource.licenseAssessment, 'item-level-verified')
assert.equal(bossouSource.licenseVersion, 'CC BY 4.0')
assert.ok(bossouSource.licenseUrl && bossouSource.rightsEvidenceUrl && bossouSource.attribution)

// Cross-check the stored dossier against the accepted mammal usage packaged with this release.
const mddBytes = readFileSync('data/packages/mammalia/primates/nomenclature/mdd-mammalia-primates-000.json.gz')
const mddRows = JSON.parse(gunzipSync(mddBytes).toString('utf8'))
const acceptedUsage = mddRows.find(row => row.colId === colId)
assert.equal(acceptedUsage?.colScientificName, dossier.scientificName)
assert.equal(acceptedUsage?.status, 'accepted')
assert.equal(acceptedUsage?.matchedName?.rank, 'species')
assert.equal(String(acceptedUsage?.matchedName?.taxonomy?.order), 'Primates')
assert.equal(acceptedUsage?.matchedName?.taxonomy?.subfamily, 'Homininae')
assert.equal(acceptedUsage?.matchedName?.taxonomy?.genus, 'Pan')

const ontologyPath = 'data/navigation/atlas-ontology.json'
const ontology = readJson(ontologyPath)
function findNode(node, id) {
  if (node.id === id) return node
  for (const child of node.children ?? []) {
    const found = findNode(child, id)
    if (found) return found
  }
  return null
}
const hominidae = findNode(ontology, 'hominidae')
assert.ok(hominidae)
const existingHomininae = findNode(ontology, 'homininae')
for (const id of ['homininae', 'pan', entityId]) {
  const node = findNode(ontology, id)
  if (node) {
    node.firstAppearance = 20
    node.lastAppearance = 0
  }
}
const panTroglodytes = {
  id: entityId,
  name: 'Pan troglodytes',
  commonName: 'Chimpanzee',
  commonNameZh: '黑猩猩',
  rank: 'species',
  taxonId: '',
  colUsageId: colId,
  colDatasetId: sourceDatasetId,
  firstAppearance: 20,
  lastAppearance: 0,
  extinct: false,
  children: [],
  entityKind: 'taxon',
  contentLevel: 'dossier',
}
const pan = {
  id: 'pan',
  name: 'Pan',
  commonName: 'Chimpanzees',
  commonNameZh: '黑猩猩属',
  rank: 'genus',
  taxonId: '',
  colUsageId: '6D2G',
  colDatasetId: sourceDatasetId,
  firstAppearance: 20,
  lastAppearance: 0,
  extinct: false,
  children: [panTroglodytes],
  entityKind: 'taxon',
  contentLevel: 'dossier',
}
const homininae = {
  id: 'homininae',
  name: 'Homininae',
  commonName: 'African Apes',
  commonNameZh: '人亚科',
  rank: 'subfamily',
  taxonId: '',
  colUsageId: 'JPH',
  colDatasetId: sourceDatasetId,
  firstAppearance: 20,
  lastAppearance: 0,
  extinct: false,
  children: [pan],
  entityKind: 'taxon',
  contentLevel: 'dossier',
}
if (existingHomininae) {
  assert.deepEqual(existingHomininae, homininae, 'Existing Homininae path differs from the curated COL26.8 path')
  writeJson(ontologyPath, ontology)
}
else {
  hominidae.children.push(homininae)
  writeJson(ontologyPath, ontology)
}

const profile = {
  id: entityId,
  treeNodeId: entityId,
  pbdbTaxonId: null,
  scientificName: 'Pan troglodytes',
  commonName: 'Chimpanzee',
  commonNameZh: '黑猩猩',
  rank: 'species',
  parentName: 'Pan',
  extinct: false,
  geography: ['Bossou, Guinea (study site)'],
  overview: 'COL26.8 usage 4C92G is the accepted species record for Pan troglodytes; the selected biological evidence is bounded to one wild community at Bossou.',
  ecology: {
    diet: 'The selected study records feeding locations but does not provide a species-wide diet synthesis.',
    habitat: 'At Bossou, mature forest was the most selected habitat overall in the sampled wild community; this is a site-level result.',
    locomotion: 'Not assessed in the selected habitat-use study.',
    bodySize: 'Not assessed in the selected habitat-use study.',
    guild: 'Not established by the selected one-site habitat-use study.',
  },
  traits: [],
  evidenceSummary: 'A year of daily follows at Bossou sampled one local community, including 10 adult focal individuals. These observations do not establish species-wide habitat use or a current range-wide synthesis.',
  confidence: 'medium',
  referenceIds: [colReferenceId, ecologyReferenceId],
}
const profileSourcePath = 'data/packages/mammalia/primates/profiles.source.json'
appendArrayRecords(profileSourcePath, '', [profile])

const noRange = id => ({
  id: `range:${id}:global`,
  entityId: id,
  rangeKind: 'global-composite',
  taxonomicConcept: `${id} accepted COL26.8 usage; numerical temporal and geographic range withheld`,
  geographicScope: 'No numerical geographic-temporal range exposed',
  olderMa: 0,
  youngerMa: 0,
  status: 'withheld-pending-provenance',
  uncertainty: { olderMa: null, youngerMa: null, note: 'Zero values are non-display placeholders; accepted checklist identity and a local ecology study do not establish a fossil range or a current wild-distribution inventory.' },
  evidenceBasis: 'COL26.8 supports accepted identity and classification only; the selected Bossou community study does not establish fossil range or species-wide distribution.',
  evidenceLevel: 'withheld-no-range-evidence',
  confidence: 'low',
  claimIds: [],
  referenceLocators: [{ referenceId: colReferenceId, locator: `COL26.8 release dataset 316115; accepted usage ${id === entityId ? colId : id === 'pan' ? '6D2G' : 'JPH'} (identity/classification only)` }],
  reviewStatus: 'automated-audit-passed',
})
const rangesPath = 'data/ranges/range-evidence.json'
appendArrayRecords(rangesPath, '', ['homininae', 'pan', entityId].map(noRange))

const ecologyStatement = bossouClaim.text
const geographyStatement = 'Bossou, Guinea, is the single locality represented by the selected ecology study; this study location is not a species-wide distribution claim.'
const taxonomyStatement = 'COL26.8 dataset 316115 records accepted species usage 4C92G as Pan troglodytes, with the parent path through Homininae and Pan. This establishes checklist identity and classification only.'
const rangeStatement = 'The selected COL26.8 checklist and Bossou habitat-use study establish checklist identity and one-site ecology, but do not provide a numerical temporal fossil-range estimate for Pan troglodytes.'
const claimsPath = 'data/evidence/claims.json'
appendArrayRecords(claimsPath, '', [
  {
    id: taxonomyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'taxonomy',
    claimKind: 'scientific',
    statement: taxonomyStatement,
    confidence: 'medium',
    confidenceRationale: 'The pinned checklist usage and its accepted parent chain are explicit; this claim is limited to that release and makes no phylogenetic or biological inference.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: '2026-09-27',
    reviewedAgainstReferenceVersion: 'COL26.8 dataset 316115, accepted usage 4C92G; cross-checked against the bundled MDD mammal sidecar and raw dossier on 2026-09-27',
    referenceLinks: [{ referenceId: colReferenceId, relation: 'supports', pages: 'Accepted usage 4C92G; source dataset 2144; parent chain Homininae > Pan > Pan troglodytes' }],
  },
  {
    id: `claim:taxon:${entityId}:fossil-range`,
    subjectId: `taxon:${entityId}`,
    claimType: 'fossil-range',
    claimKind: 'scientific',
    statement: rangeStatement,
    confidence: 'medium',
    confidenceRationale: 'The selected checklist is taxonomic and the cited field study is ecological; neither source estimates a fossil or species-duration range, so the numerical interval remains withheld.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: '2026-09-27',
    reviewedAgainstReferenceVersion: 'COL26.8 dataset 316115, accepted usage 4C92G; Bryson-Morrison et al. 2017 DOI 10.1007/s10764-016-9947-4; source scopes checked 2026-09-27',
    referenceLinks: [
      { referenceId: colReferenceId, relation: 'supports', pages: 'Accepted usage 4C92G; identity and classification only' },
      { referenceId: ecologyReferenceId, relation: 'supports', quoteLocator: 'Methods, Behavioral Observations; single study site and focal community' },
    ],
  },
  {
    id: geographyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'biogeography',
    claimKind: 'scientific',
    statement: geographyStatement,
    confidence: 'high',
    confidenceRationale: 'The primary field study identifies Bossou as its site; the claim deliberately records only a sampled locality and not the species range.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: '2026-09-27',
    reviewedAgainstReferenceVersion: 'Bryson-Morrison et al. 2017 DOI 10.1007/s10764-016-9947-4; source dossier license and study-scope record checked 2026-09-27',
    referenceLinks: [{ referenceId: ecologyReferenceId, relation: 'supports', quoteLocator: 'Methods, Behavioral Observations; study site and focal community' }],
  },
  {
    id: ecologyClaimId,
    subjectId: `taxon:${entityId}`,
    claimType: 'ecology',
    claimKind: 'scientific',
    statement: ecologyStatement,
    confidence: 'medium',
    confidenceRationale: 'The study directly reports habitat selection and feeding-event distances for one Bossou community. The observations do not represent other sites or establish species-wide habitat use.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: '2026-09-27',
    reviewedAgainstReferenceVersion: 'Bryson-Morrison et al. 2017 DOI 10.1007/s10764-016-9947-4; Methods, Results and Table II checked against the item-level CC BY 4.0 dossier record on 2026-09-27',
    referenceLinks: [{ referenceId: ecologyReferenceId, relation: 'supports', pages: 'Methods, Behavioral Observations and Feeding Event Locations; Results, Habitat Use and Preferences and Distance of Feeding Events in Noncultivated Habitat Relative to Cultivated Fields and Routes; Table II' }],
  },
])

const claimStatementsZhPath = 'data/evidence/claim-statements.zh.json'
appendObjectEntries(claimStatementsZhPath, {
  [taxonomyStatement]: 'COL26.8 数据集 316115 将用名 4C92G 记录为接受的 Pan troglodytes 种级用名，其父级路径经过 Homininae 和 Pan。此记录只支持该清单版本中的分类身份与分类路径。',
  [rangeStatement]: '所选 COL26.8 清单和 Bossou 栖地利用研究分别支持清单身份和单一地点的生态证据，但没有提供 Pan troglodytes 的数值化地质时间范围。',
  [geographyStatement]: 'Bossou（几内亚）是所选生态研究唯一覆盖的地点；研究地点不等于该物种的完整分布。',
  [ecologyStatement]: '在几内亚 Bossou 对当地野生西部黑猩猩群体的每日行为跟踪（每天至多 6 小时，2012 年 4 月至 2013 年 3 月）发现，成熟森林在总体活动中是选择比例最高的栖地类型。在非耕地栖地记录的取食事件中，距耕地超过 200 米的次数高于随机预期，0–100 米和 101–200 米范围内的次数低于预期。作者提出，与耕地相关的风险可能影响取食地点。这些结果描述的是单一地点和群体，不能代表全物种的栖地利用。',
})

const rationalesZhPath = 'data/evidence/claim-rationales.zh.json'
appendObjectEntries(rationalesZhPath, {
  [taxonomyClaimId]: '固定清单中的接受用名和父级链记录明确；本主张仅限于该版本的分类身份，不推断系统发育或生物学特征。',
  [`claim:taxon:${entityId}:fossil-range`]: '所选清单用于分类，野外研究用于生态观察；两者均未估算化石或物种持续时间，因此数值范围继续隐藏。',
  [geographyClaimId]: '一手野外研究明确列出 Bossou 研究地点；本主张只记录取样地点，不将其扩展为全物种分布。',
  [ecologyClaimId]: '研究直接报告了 Bossou 一个群体的栖地选择和取食事件距离；这些观察不代表其他地点，也不建立全物种栖地利用。',
})

const referencesPath = 'data/references.json'
const ecologyReference = {
  id: ecologyReferenceId,
  title: 'Activity and Habitat Use of Chimpanzees (Pan troglodytes verus) in the Anthropogenic Landscape of Bossou, Guinea, West Africa',
  authors: 'Bryson-Morrison, N.; Tzanopoulos, J.; Matsuzawa, T.; Humle, T.',
  publishedYear: 2017,
  type: 'paper',
  url: 'https://doi.org/10.1007/s10764-016-9947-4',
  doi: '10.1007/s10764-016-9947-4',
  publisher: 'International Journal of Primatology',
  pages: '38:282–302',
  version: 'Published 2017-01-30; volume 38, pages 282–302',
  sourceRole: 'primary-study',
  fitnessFor: ['ecology', 'biogeography'],
  metadataAssignment: 'curator-reviewed',
  note: 'One-year field study of the wild Pan troglodytes verus community at Bossou, Guinea. Study claims are bounded to the sampled site and focal individuals. Article license and attribution were checked from the University of Kent repository record; the dossier paraphrases findings and reproduces no figures or tables. CC BY 4.0.',
}
appendArrayRecords(referencesPath, '', [ecologyReference])

const pagesPreviewPath = 'data/pages-preview.json'
const preview = readJson(pagesPreviewPath)
appendArrayRecords(pagesPreviewPath, 'taxonIds', ['homininae', 'pan', entityId], value => value)
const storyId = 'primates-evidence-without-an-ancestor-ladder'
assert.ok(preview.storyTaxonIds[storyId], `Missing Pages preview story selection ${storyId}`)
appendArrayRecords(pagesPreviewPath, `storyTaxonIds.${storyId}`, [entityId], value => value)

// New ontology nodes have no reviewed PBDB matches. Record that state explicitly;
// do not claim that a pinned-snapshot reconciliation was performed.
const pbdbPath = 'data/sources/pbdb-taxon-resolution.json'
const pbdbRecords = ['homininae', 'pan', entityId].map((id, index) => ({
  entityId: id,
  localName: ['Homininae', 'Pan', 'Pan troglodytes'][index],
  localRank: ['subfamily', 'genus', 'species'][index],
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
  localExpectedParentConcept: ['Hominidae', 'Homininae', 'Pan'][index],
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
}))
appendArrayRecords(pbdbPath, 'resolutions', pbdbRecords, value => value.entityId)
setObjectNumber(pbdbPath, 'summary', 'ontologyNodes', 416)
setObjectNumber(pbdbPath, 'summary', 'unresolved', 125)
let pbdbSource = readFileSync(pbdbPath, 'utf8')
pbdbSource = pbdbSource.replace('"generatedAt": "2026-09-01"', '"generatedAt": "2026-09-27"')
writeFileSync(pbdbPath, pbdbSource, 'utf8')
const linkageBaselinePath = 'data/indexes/entity-linkage-baseline.json'
const linkageBaseline = readJson(linkageBaselinePath)
linkageBaseline.unresolvedEntityIds = [...new Set([...linkageBaseline.unresolvedEntityIds, 'homininae', 'pan', entityId])].sort()
writeJson(linkageBaselinePath, linkageBaseline)

console.log(JSON.stringify({
  colId,
  scientificName: dossier.scientificName,
  sourceId: 'brysonMorrison2017',
  license: bossouSource.licenseVersion,
  selectedClaims: [taxonomyClaimId, geographyClaimId, ecologyClaimId],
  previewTaxa: ['homininae', 'pan', entityId],
  dossierBundledByThisChange: false,
}, null, 2))
