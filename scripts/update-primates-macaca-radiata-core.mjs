import { readFileSync, writeFileSync } from 'node:fs'

const paperRef = 'erinjery-kumar-kumara-2017-bonnet-macaque-roadside'
const colRef = 'col-2026-checklistbank-316115'
const ecologyStatement = 'Along the surveyed roadsides connecting Mysore, India, reported total counts fell from 889 bonnet macaques in 2003 to 407 in 2015 (46% of the earlier count). The January–February 2015 resurvey covered 464 km, and roadside strips were defined within 15 m from the road centre on each side. These local roadside counts are not a species-wide abundance estimate or a causal test.'
const reviewedAgainstCol = 'COL26.8 ChecklistBank dataset 316115; accepted usage 3WWP2 and parent chain checked 2026-09-26'
const taxonomyNodes = [
  { id: 'cercopithecoidea', name: 'Cercopithecoidea', rank: 'superfamily', colUsageId: '4X9', parentName: 'Simiiformes', parentRank: 'infraorder', parentUsageId: '4PM', childLabel: 'immediately below' },
  { id: 'cercopithecidae', name: 'Cercopithecidae', rank: 'family', colUsageId: '7X9', parentName: 'Cercopithecoidea', parentRank: 'superfamily', parentUsageId: '4X9', childLabel: 'immediately below' },
  { id: 'cercopithecinae', name: 'Cercopithecinae', rank: 'subfamily', colUsageId: 'JB3', parentName: 'Cercopithecidae', parentRank: 'family', parentUsageId: '7X9', childLabel: 'immediately below' },
  { id: 'papionini', name: 'Papionini', rank: 'tribe', colUsageId: 'L4C', parentName: 'Cercopithecinae', parentRank: 'subfamily', parentUsageId: 'JB3', childLabel: 'immediately below' },
  { id: 'macaca', name: 'Macaca', rank: 'genus', colUsageId: '5HYC', parentName: 'Papionini', parentRank: 'tribe', parentUsageId: 'L4C', childLabel: 'immediately below' },
]
const ecologyClaim = {
  id: 'claim:taxon:macaca_radiata:ecology',
  subjectId: 'taxon:macaca_radiata',
  claimKind: 'scientific',
  claimType: 'ecology',
  statement: ecologyStatement,
  confidence: 'medium',
  confidenceRationale: 'The primary paper reports the roadside counts, survey interval and route distance directly. The sample is local and habitat-specific, so it does not estimate the full species population or independently establish why counts changed.',
  reviewedBy: 'Evo Atlas primary-source audit',
  reviewedAt: '2026-09-26',
  reviewedAgainstReferenceVersion: 'Erinjery et al. 2017 DOI 10.1371/journal.pone.0182140; PLOS full text inspected 2026-09-26',
  referenceLinks: [{ referenceId: paperRef, relation: 'supports', quoteLocator: 'Methods §2.6 Roadside survey; Results §3.5.1 Population dynamics.' }],
}
const taxonomyClaims = taxonomyNodes.map(node => {
  const statement = `The COL26.8 accepted parent chain for Macaca radiata usage 3WWP2 places ${node.name} (${node.rank} usage ${node.colUsageId}) ${node.childLabel} ${node.parentName} (${node.parentRank} usage ${node.parentUsageId}); this records checklist placement, not a phylogenetic result.`
  return {
    id: `claim:taxon:${node.id}:taxonomy-col26-8-bonnet-macaque-path`,
    subjectId: `taxon:${node.id}`,
    claimKind: 'scientific',
    claimType: 'taxonomy',
    statement,
    confidence: 'medium',
    confidenceRationale: `Pinned COL26.8 usage ${node.colUsageId} directly establishes ${node.name} (${node.rank}) at this point in the accepted checklist path. This claim describes that dataset's classification and does not assert universal consensus or phylogenetic relationships.`,
    reviewedBy: 'Evo Atlas source audit',
    reviewedAt: '2026-09-26',
    reviewedAgainstReferenceVersion: reviewedAgainstCol,
    referenceLinks: [{ referenceId: colRef, relation: 'supports', quoteLocator: `Accepted parent chain for species usage 3WWP2; ${node.rank} usage ${node.colUsageId} immediately follows ${node.parentRank} usage ${node.parentUsageId}.` }],
  }
})
const taxonomyStatementsZh = [
  'COL26.8 对邦内猕猴用名 3WWP2 的已接受父级链，将 Cercopithecoidea（总科用名 4X9）置于 Simiiformes（下目用名 4PM）之下；这记录的是清单分类位置，不是系统发育结果。',
  'COL26.8 对邦内猕猴用名 3WWP2 的已接受父级链，将 Cercopithecidae（科用名 7X9）置于 Cercopithecoidea（总科用名 4X9）之下；这记录的是清单分类位置，不是系统发育结果。',
  'COL26.8 对邦内猕猴用名 3WWP2 的已接受父级链，将 Cercopithecinae（亚科用名 JB3）置于 Cercopithecidae（科用名 7X9）之下；这记录的是清单分类位置，不是系统发育结果。',
  'COL26.8 对邦内猕猴用名 3WWP2 的已接受父级链，将 Papionini（族用名 L4C）置于 Cercopithecinae（亚科用名 JB3）之下；这记录的是清单分类位置，不是系统发育结果。',
  'COL26.8 对邦内猕猴用名 3WWP2 的已接受父级链，将 Macaca（属用名 5HYC）置于 Papionini（族用名 L4C）之下；这记录的是清单分类位置，不是系统发育结果。',
]
const references = [{
  id: paperRef,
  title: 'Losing its ground: A case study of fast declining populations of a ‘least-concern’ species, the bonnet macaque (Macaca radiata)',
  authors: 'Erinjery, J.J.; Kumar, S.; Kumara, H.N.; Mohan, K.; Dhananjaya, T.; Sundararaj, P.; Kent, R.; Singh, M.',
  publishedYear: 2017,
  type: 'paper',
  url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0182140',
  doi: '10.1371/journal.pone.0182140',
  publisher: 'PLOS ONE',
  pages: '12(8):e0182140',
  sourceRole: 'primary-study',
  fitnessFor: ['ecology', 'methods'],
  metadataAssignment: 'curator-reviewed',
  note: 'Primary study reporting roadside counts on surveyed roads connected to Mysore, India. Only the bounded 2003–2015 roadside count comparison and survey scope are summarized; it is not a species-wide abundance estimate or a causal test. Article states CC BY 4.0.',
}]
const rangeEntities = [
  ['cercopithecoidea', 'Cercopithecoidea accepted usage 4X9'],
  ['cercopithecidae', 'Cercopithecidae accepted usage 7X9'],
  ['cercopithecinae', 'Cercopithecinae accepted usage JB3'],
  ['papionini', 'Papionini accepted usage L4C'],
  ['macaca', 'Macaca accepted usage 5HYC'],
  ['macaca_radiata', 'Macaca radiata accepted usage 3WWP2'],
]
const ranges = rangeEntities.map(([entityId, concept]) => ({
  id: `range:${entityId}:global`,
  entityId,
  rangeKind: 'global-composite',
  taxonomicConcept: `${concept}; numerical temporal range withheld`,
  geographicScope: 'No numerical geographic-temporal range exposed',
  olderMa: 0,
  youngerMa: 0,
  status: 'withheld-pending-provenance',
  uncertainty: { olderMa: null, youngerMa: null, note: 'Zero values are non-display placeholders; no audited fossil-range endpoint is asserted for this selected living-taxon route.' },
  evidenceBasis: 'The pinned COL26.8 checklist supports accepted identity and classification only; the selected local roadside study does not establish a fossil range or a wild-distribution inventory.',
  evidenceLevel: 'withheld-no-range-evidence',
  confidence: 'low',
  claimIds: [],
  referenceLocators: [{ referenceId: colRef, locator: `COL26.8 dataset 316115; accepted usage ${entityId === 'macaca_radiata' ? '3WWP2' : taxonomyNodes.find(node => node.id === entityId)?.colUsageId ?? ''} and parent classification (identity/classification only)` }],
  reviewStatus: 'automated-audit-passed',
}))
const resolutionSpecs = [
  ['cercopithecoidea', 'Cercopithecoidea', 'superfamily', 'Simiiformes'],
  ['cercopithecidae', 'Cercopithecidae', 'family', 'Cercopithecoidea'],
  ['cercopithecinae', 'Cercopithecinae', 'subfamily', 'Cercopithecidae'],
  ['papionini', 'Papionini', 'tribe', 'Cercopithecinae'],
  ['macaca', 'Macaca', 'genus', 'Papionini'],
  ['macaca_radiata', 'Macaca radiata', 'species', 'Macaca'],
]
const resolutions = resolutionSpecs.map(([entityId, localName, localRank, parent]) => ({
  entityId, localName, localRank, previousPbdbId: null,
  resolutionStatus: 'unresolved', resolutionReason: 'not-reconciled-against-pinned-PBDB-snapshot',
  externalResolutionStatus: 'not-applicable', pbdbId: null, acceptedName: null, acceptedRank: null, matchedTaxonName: null,
  pbdbParentName: null, pbdbClassification: null, resolvedName: null, resolvedRank: null, resolvedImmediateParent: null,
  resolvedClassification: null, resolvedAncestorChain: [], localExpectedParentConcept: parent,
  parentRelationshipKind: 'taxonomic-parent', lineageCompatibility: 'indeterminate', conceptReviewStatus: 'unresolved',
  automatedRecommendation: 'withhold-external-mapping', humanCuratorDecision: null, curatorRationale: null,
  curatorReviewedAt: null, curatorReviewer: null, occurrenceCount: null, referenceNo: null, snapshotModifiedAt: null,
}))
const rationales = Object.fromEntries([
  ...taxonomyClaims.map((claim, index) => {
    const node = taxonomyNodes[index]
    return [claim.id, `固定版 COL26.8 用名 ${node.colUsageId} 直接支持 ${node.name}（${node.rank}）在该已接受清单路径中的位置；此声明只描述该数据集的分类，不推断普遍共识或系统发育关系。`]
  }),
  [ecologyClaim.id, '论文直接报告了特定道路路段的局地计数与复查距离；该范围受地点和栖息环境限制，不能作为全物种种群估计或单独的因果检验。'],
])
const translations = Object.fromEntries([
  ...taxonomyClaims.map((claim, index) => [claim.statement, taxonomyStatementsZh[index]]),
  [ecologyStatement, '在印度迈索尔相连道路的调查路段，路旁总计数从 2003 年的 889 只降至 2015 年的 407 只（为早期计数的 46%）。2015 年 1 月至 2 月的复查覆盖 464 公里；路旁调查带按道路中心线两侧各 15 米界定。这些局地计数不是全物种丰度估计，也不能单独检验下降原因。'],
])

function findArrayClose(text, key) {
  let open
  if (key) {
    const keyAt = text.indexOf(JSON.stringify(key))
    if (keyAt < 0) throw new Error(`Missing array property ${key}`)
    open = text.indexOf('[', keyAt)
  } else open = text.indexOf('[')
  if (open < 0) throw new Error(`Missing array opener ${key ?? '<root>'}`)
  let depth = 0
  let quoted = false
  let escaped = false
  for (let index = open; index < text.length; index++) {
    const char = text[index]
    if (quoted) {
      if (escaped) escaped = false
      else if (char === '\\') escaped = true
      else if (char === '"') quoted = false
      continue
    }
    if (char === '"') quoted = true
    else if (char === '[') depth++
    else if (char === ']' && --depth === 0) return index
  }
  throw new Error(`Missing array closer ${key ?? '<root>'}`)
}

function appendArrayRecords(path, records, key, identity, mutableFields = []) {
  let original = readFileSync(path, 'utf8')
  const parsed = JSON.parse(original)
  const items = key ? parsed[key] : parsed
  if (!Array.isArray(items)) throw new Error(`${path} does not contain the expected array`)
  const existing = new Map(items.map(item => [identity(item), item]))
  const missing = records.filter(item => !existing.has(identity(item)))
  const updates = []
  for (const item of records) {
    const current = existing.get(identity(item))
    if (!current) continue
    const stableCurrent = Object.fromEntries(Object.entries(current).filter(([field]) => !mutableFields.includes(field)))
    const stableIncoming = Object.fromEntries(Object.entries(item).filter(([field]) => !mutableFields.includes(field)))
    if (JSON.stringify(stableCurrent) !== JSON.stringify(stableIncoming)) throw new Error(`Conflicting existing ${identity(item)} in ${path}`)
    if (mutableFields.some(field => current[field] !== item[field])) updates.push({ id: identity(item), current, item })
  }
  for (const { id, current, item } of updates) {
    const marker = `"id": ${JSON.stringify(id)}`
    const markerAt = original.indexOf(marker)
    if (markerAt < 0) throw new Error(`Cannot locate existing ${id} in ${path}`)
    const start = original.lastIndexOf('\n  {', markerAt)
    const end = original.indexOf('\n  }', markerAt)
    if (start < 0 || end < 0) throw new Error(`Cannot locate record bounds for ${id} in ${path}`)
    let record = original.slice(start, end)
    for (const field of mutableFields) {
      if (current[field] === item[field]) continue
      const before = `${JSON.stringify(field)}: ${JSON.stringify(current[field])}`
      if (!record.includes(before)) throw new Error(`Cannot locate ${field} for ${id} in ${path}`)
      record = record.replace(before, `${JSON.stringify(field)}: ${JSON.stringify(item[field])}`)
    }
    original = `${original.slice(0, start)}${record}${original.slice(end)}`
  }
  if (!missing.length) {
    if (updates.length) writeFileSync(path, original, 'utf8')
    return
  }
  const close = findArrayClose(original, key)
  const lineStart = original.lastIndexOf('\n', close) + 1
  const closeIndent = original.slice(lineStart, close)
  const base = original.slice(0, lineStart).replace(/\r?\n$/, '')
  const unit = '  '
  const itemIndent = closeIndent + unit
  const formatted = missing.map(item => JSON.stringify(item, null, 2).split('\n').map(line => itemIndent + line).join('\n')).join(',\n')
  const newline = original.includes('\r\n') ? '\r\n' : '\n'
  const text = `${base}${items.length ? ',' : ''}${newline}${formatted}${newline}${closeIndent}${original.slice(close)}`
  JSON.parse(text)
  writeFileSync(path, text, 'utf8')
}

function upsertObjectFields(path, entries, replaceableExistingValues = []) {
  let original = readFileSync(path, 'utf8')
  const parsed = JSON.parse(original)
  const missing = []
  let changed = false
  for (const [key, value] of Object.entries(entries)) {
    if (Object.hasOwn(parsed, key)) {
      if (parsed[key] === value) continue
      if (!replaceableExistingValues.includes(parsed[key])) throw new Error(`Conflicting translation or rationale key ${key} in ${path}`)
      const before = `${JSON.stringify(key)}: ${JSON.stringify(parsed[key])}`
      if (!original.includes(before)) throw new Error(`Cannot locate existing field ${key} in ${path}`)
      original = original.replace(before, `${JSON.stringify(key)}: ${JSON.stringify(value)}`)
      changed = true
    } else missing.push([key, value])
  }
  if (!missing.length) {
    if (changed) writeFileSync(path, original, 'utf8')
    return
  }
  const close = original.lastIndexOf('}')
  const lineStart = original.lastIndexOf('\n', close) + 1
  const closeIndent = original.slice(lineStart, close)
  const base = original.slice(0, lineStart).replace(/\r?\n$/, '')
  const newline = original.includes('\r\n') ? '\r\n' : '\n'
  const formatted = missing.map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)}`).join(`,${newline}`)
  const text = `${base},${newline}${formatted}${newline}${closeIndent}${original.slice(close)}`
  JSON.parse(text)
  writeFileSync(path, text, 'utf8')
}

function updateNestedObjectFields(path, objectKey, entries) {
  let original = readFileSync(path, 'utf8')
  const parsed = JSON.parse(original)
  const values = parsed[objectKey]
  if (!values || typeof values !== 'object' || Array.isArray(values)) throw new Error(`${path} is missing object ${objectKey}`)
  const objectMarker = `${JSON.stringify(objectKey)}:`
  const objectKeyAt = original.indexOf(objectMarker)
  const open = original.indexOf('{', objectKeyAt + objectMarker.length)
  let depth = 0
  let quoted = false
  let escaped = false
  let close = -1
  for (let index = open; index < original.length; index++) {
    const char = original[index]
    if (quoted) {
      if (escaped) escaped = false
      else if (char === '\\') escaped = true
      else if (char === '"') quoted = false
      continue
    }
    if (char === '"') quoted = true
    else if (char === '{') depth++
    else if (char === '}' && --depth === 0) { close = index; break }
  }
  if (close < 0) throw new Error(`Cannot locate object ${objectKey} in ${path}`)
  let section = original.slice(open, close + 1)
  for (const [key, value] of Object.entries(entries)) {
    if (values[key] === value) continue
    const before = `${JSON.stringify(key)}: ${JSON.stringify(values[key])}`
    if (!section.includes(before)) throw new Error(`Cannot locate ${objectKey}.${key} in ${path}`)
    section = section.replace(before, `${JSON.stringify(key)}: ${JSON.stringify(value)}`)
  }
  original = `${original.slice(0, open)}${section}${original.slice(close + 1)}`
  writeFileSync(path, original, 'utf8')
}

function upsertSortedArray(path, key, values) {
  const original = readFileSync(path, 'utf8')
  const parsed = JSON.parse(original)
  if (!Array.isArray(parsed[key])) throw new Error(`${path} is missing array ${key}`)
  const merged = [...new Set([...parsed[key], ...values])].sort()
  if (JSON.stringify(merged) === JSON.stringify(parsed[key])) return
  const close = findArrayClose(original, key)
  const keyAt = original.indexOf(JSON.stringify(key))
  const open = original.indexOf('[', keyAt)
  const closeLineStart = original.lastIndexOf('\n', close) + 1
  const closeIndent = original.slice(closeLineStart, close)
  const itemIndent = `${closeIndent}  `
  const newline = original.includes('\r\n') ? '\r\n' : '\n'
  const body = merged.map(item => `${itemIndent}${JSON.stringify(item)}`).join(`,${newline}`)
  const text = `${original.slice(0, open + 1)}${newline}${body}${newline}${closeIndent}${original.slice(close)}`
  JSON.parse(text)
  writeFileSync(path, text, 'utf8')
}

appendArrayRecords('data/evidence/claims.json', [...taxonomyClaims, ecologyClaim], null, item => item.id, ['confidenceRationale'])
appendArrayRecords('data/references.json', references, null, item => item.id)
appendArrayRecords('data/ranges/range-evidence.json', ranges, null, item => item.id)
appendArrayRecords('data/sources/pbdb-taxon-resolution.json', resolutions, 'resolutions', item => item.entityId)
upsertObjectFields('data/evidence/claim-statements.zh.json', translations)
upsertObjectFields('data/evidence/claim-rationales.zh.json', rationales, ['固定版 COL26.8 直接给出这条已接受清单路径；该声明仅描述本数据集的分类，不推断普遍共识或系统发育关系。'])
updateNestedObjectFields('data/sources/pbdb-taxon-resolution.json', 'summary', {
  ontologyNodes: JSON.parse(readFileSync('data/sources/pbdb-taxon-resolution.json', 'utf8')).resolutions.length,
  unresolved: JSON.parse(readFileSync('data/sources/pbdb-taxon-resolution.json', 'utf8')).resolutions.filter(item => item.resolutionStatus !== 'resolved').length,
  resolved: JSON.parse(readFileSync('data/sources/pbdb-taxon-resolution.json', 'utf8')).resolutions.filter(item => item.resolutionStatus === 'resolved').length,
  needsConceptReview: JSON.parse(readFileSync('data/sources/pbdb-taxon-resolution.json', 'utf8')).resolutions.filter(item => item.conceptReviewStatus === 'needs-concept-review').length,
  humanCuratorDecisions: JSON.parse(readFileSync('data/sources/pbdb-taxon-resolution.json', 'utf8')).resolutions.filter(item => item.humanCuratorDecision).length,
})
upsertSortedArray('data/indexes/entity-linkage-baseline.json', 'unresolvedEntityIds', resolutions.map(item => item.entityId))

appendArrayRecords('data/pages-preview.json', rangeEntities.map(([entityId]) => entityId), 'taxonIds', id => id)
console.log(JSON.stringify({ taxonomyClaims: taxonomyClaims.length, ecologyClaims: 1, ranges: ranges.length, withheldPbdbMappings: resolutions.length }, null, 2))
