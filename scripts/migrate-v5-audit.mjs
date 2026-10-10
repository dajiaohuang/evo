import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { DATASET_PACKAGE_VERSION } from './package-definitions.mjs'

function writeJson(relativePath, value) {
  writeFileSync(join(rootDir, relativePath), `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

function findNode(root, id) {
  return flattenTree(root).find((node) => node.id === id)
}

const ontology = readJson('data/navigation/atlas-ontology.json')
const arthropoda = findNode(ontology, 'arthropoda')
if (!findNode(ontology, 'myriapoda')) arthropoda.children.push({
  id: 'myriapoda', name: 'Myriapoda', commonName: 'Myriapods', commonNameZh: '多足类', rank: 'subphylum', taxonId: '',
  firstAppearance: 443, lastAppearance: 0, extinct: false, entityKind: 'taxon', contentLevel: 'dossier',
  children: [
    { id: 'chilopoda', name: 'Chilopoda', commonName: 'Centipedes', commonNameZh: '唇足类', rank: 'class', taxonId: '', firstAppearance: 430, lastAppearance: 0, extinct: false, entityKind: 'taxon', contentLevel: 'dossier', children: [] },
    { id: 'diplopoda', name: 'Diplopoda', commonName: 'Millipedes', commonNameZh: '倍足类', rank: 'class', taxonId: '', firstAppearance: 425, lastAppearance: 0, extinct: false, entityKind: 'taxon', contentLevel: 'dossier', children: [] },
  ],
})

function annotateRelationships(node, parent = null) {
  if (!parent) delete node.parentRelationshipKind
  else if (node.entityKind === 'historical-grade') node.parentRelationshipKind = 'historical-grade-membership'
  else if (node.entityKind === 'informal-group') node.parentRelationshipKind = 'display-grouping'
  else if (parent.entityKind === 'navigation-group' || parent.entityKind === 'informal-group' || ['life', 'invertebrata'].includes(parent.id)) node.parentRelationshipKind = 'navigation-parent'
  else delete node.parentRelationshipKind
  for (const child of node.children ?? []) annotateRelationships(child, node)
}
annotateRelationships(ontology)
writeJson('data/navigation/atlas-ontology.json', ontology)

const ranges = readJson('data/ranges/range-evidence.json')
for (const node of [findNode(ontology, 'myriapoda'), findNode(ontology, 'chilopoda'), findNode(ontology, 'diplopoda')]) {
  if (ranges.some((range) => range.entityId === node.id && range.rangeKind === 'global-composite')) continue
  ranges.push({
    id: `range:${node.id}:global`, entityId: node.id, rangeKind: 'global-composite', taxonomicConcept: node.name,
    geographicScope: 'Global legacy atlas display', olderMa: node.firstAppearance, youngerMa: node.lastAppearance,
    status: 'available', uncertainty: { olderMa: null, youngerMa: null, note: 'Rounded display values; not a literature-synthesized taxon range.' },
    evidenceBasis: 'Legacy rounded display range retained for navigation pending dedicated literature synthesis.',
    evidenceLevel: 'legacy-display', confidence: 'medium', claimIds: [],
    referenceLocators: [{ referenceId: 'open-tree', locator: 'taxonomic context only; range locator pending' }],

  })
}

const references = readJson('data/references.json')
const referencesById = new Map(references.map((reference) => [reference.id, reference]))

const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
if (!existsSync(join(rootDir, 'data/packages/mammalia/perissodactyla/profiles.source.json'))) {
  const sources = profiles.map((profile) => {
    const { firstAppearance, lastAppearance, rangeEvidenceLevel, rangeReviewStatus, rangeProvisional, ...source } = profile
    if (source.regionalRanges) source.regionalRanges = source.regionalRanges.map((regional) => {
      const canonical = ranges.find((range) => range.entityId === profile.treeNodeId && range.rangeKind === regional.rangeKind && range.geographicScope === regional.region)
      if (!canonical) throw new Error(`Missing canonical range for ${profile.id}/${regional.label}`)
      return { canonicalRangeId: canonical.id, label: regional.label }
    })
    return source
  })
  writeJson('data/packages/mammalia/perissodactyla/profiles.source.json', sources)
}

if (!existsSync(join(rootDir, 'data/packages/mammalia/perissodactyla/phylogeny/hypothesis.source.json'))) {
  const hypothesis = readJson('data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json')
  const removeProjectedRanges = (node) => {
    delete node.firstAppearance
    delete node.lastAppearance
    for (const child of node.children ?? []) removeProjectedRanges(child)
  }
  removeProjectedRanges(hypothesis.root)
  writeJson('data/packages/mammalia/perissodactyla/phylogeny/hypothesis.source.json', hypothesis)
}

const claims = readJson('data/evidence/claims.json')
const rationalesZh = readJson('data/evidence/claim-rationales.zh.json')
const claimStatementsZh = existsSync(join(rootDir, 'data/evidence/claim-statements.zh.json')) ? readJson('data/evidence/claim-statements.zh.json') : {}
const profileById = new Map(profiles.map((profile) => [profile.id, profile]))
const claimTypes = ['taxonomy', 'fossil-range', 'morphology', 'ecology', 'biogeography']
const fitnessForClaimType = { taxonomy: 'taxonomy', 'fossil-range': 'range', morphology: 'morphology', ecology: 'ecology', biogeography: 'biogeography' }

function supportLink(profile, claimType, existingClaim) {
  const fitness = fitnessForClaimType[claimType]
  const candidates = profile.referenceIds.map((id) => referencesById.get(id)).filter(Boolean)
  const selected = candidates.find((reference) => ['primary-study', 'systematic-review'].includes(reference.sourceRole) && reference.fitnessFor.includes(fitness))
    ?? candidates.find((reference) => reference.fitnessFor.includes(fitness))
    ?? candidates[0]
  if (!selected) throw new Error(`No reference inventory for ${profile.id}/${claimType}`)
  const existingLink = existingClaim?.referenceLinks.find((link) => link.referenceId === selected.id)
  return {
    relation: 'supports', referenceId: selected.id,
    ...(existingLink?.pages ? { pages: existingLink.pages } : {}),
    ...(existingLink?.figure ? { figure: existingLink.figure } : {}),
    ...(!existingLink?.pages && !existingLink?.figure ? { quoteLocator: existingLink?.quoteLocator ?? 'Source scope; precise page or figure locator unavailable.' } : {}),
  }
}

function claimStatement(profile, claimType, range) {
  if (claimType === 'taxonomy') return `${profile.scientificName} is represented in this curated draft as a ${profile.rank} associated with ${profile.parentName}; the concept remains subject to the pinned external-resolution ledger.`
  if (claimType === 'fossil-range') return `The atlas displays a provisional ${range.olderMa}–${range.youngerMa} Ma global range for ${profile.scientificName}.`
  if (claimType === 'morphology') return `The ${profile.scientificName} draft profile records the following morphological context: ${profile.traits.slice(0, 3).join('; ')}.`
  if (claimType === 'ecology') return `The ${profile.scientificName} draft profile describes ${profile.ecology.diet} feeding in ${profile.ecology.habitat}, with ${profile.ecology.locomotion} locomotor context.`
  return `The ${profile.scientificName} draft profile places its represented geographic context in ${profile.geography.join(', ')}; this is a sourced synthesis rather than a complete occurrence distribution.`
}

for (const profile of profiles) {
  const subjectId = `taxon:${profile.id}`
  const subjectClaims = claims.filter((claim) => claim.subjectId === subjectId)
  const globalRange = ranges.find((range) => range.entityId === profile.treeNodeId && range.rangeKind === 'global-composite')
  for (const claimType of claimTypes) {
    if (subjectClaims.some((claim) => claim.claimType === claimType)) continue
    const id = `claim:taxon:${profile.id}:${claimType}`
    const link = supportLink(profile, claimType, subjectClaims[0])
    claims.push({
      id, subjectId, claimKind: 'scientific', claimType,
      statement: claimStatement(profile, claimType, globalRange),
      confidence: claimType === 'fossil-range' ? 'low' : 'medium',
      confidenceRationale: `This is an automated curator-draft decomposition of the visible ${claimType} field. It records the current source inventory but remains pending claim-specific locator review by a human specialist.`,

       referenceLinks: [link],
    })
    rationalesZh[id] = `该条${claimType}主张由自动化流程从可见字段拆分而来，已连接当前来源清单，但仍需领域专家逐条核对具体页码、图表或标本定位信息。`
  }
}

const claimBySubjectAndType = new Map(claims.map((claim) => [`${claim.subjectId}|${claim.claimType}`, claim]))
for (const range of ranges) {
  const profile = [...profileById.values()].find((candidate) => candidate.treeNodeId === range.entityId)
  if (profile) {
    const rangeClaim = claimBySubjectAndType.get(`taxon:${profile.id}|fossil-range`)
    if (rangeClaim && !range.claimIds.includes(rangeClaim.id)) range.claimIds.push(rangeClaim.id)
    if (range.referenceLocators.every((locator) => !locator.locator) && rangeClaim) range.referenceLocators = rangeClaim.referenceLinks.filter((link) => link.relation === 'supports').map((link) => ({ referenceId: link.referenceId, locator: link.pages ?? link.figure ?? link.quoteLocator }))
  }
  const hasRangeLiterature = range.claimIds.length > 0 && range.referenceLocators.some((locator) => {
    const reference = referencesById.get(locator.referenceId)
    return ['primary-study', 'systematic-review'].includes(reference?.sourceRole) && reference?.fitnessFor.includes('range') && locator.locator
  })
  if (hasRangeLiterature) range.evidenceLevel = 'literature-synthesized'
  else if (/database|occurrence|PBDB/i.test(range.evidenceBasis) && !/rounded display/i.test(range.evidenceBasis)) range.evidenceLevel = 'database-derived'
  else range.evidenceLevel = 'legacy-display'
  if (['legacy-display', 'database-derived'].includes(range.evidenceLevel) && range.confidence === 'high') range.confidence = 'medium'
}

const resolutionLedger = readJson('data/sources/pbdb-taxon-resolution.json')
const resolutionById = new Map(resolutionLedger.resolutions.map((entry) => [entry.entityId, entry]))
for (const node of flattenTree(ontology)) {
  let entry = resolutionById.get(node.id)
  if (!entry) {
    entry = {
      entityId: node.id, localName: node.name, localRank: node.rank || null, previousPbdbId: null,
      resolutionStatus: 'unresolved', resolutionReason: 'not-reconciled-after-ontology-expansion', externalResolutionStatus: 'not-found',
      pbdbId: null, acceptedName: null, acceptedRank: null, matchedTaxonName: null, pbdbParentName: null, pbdbClassification: null,
      resolvedName: null, resolvedRank: null, resolvedImmediateParent: null, resolvedClassification: null,
      localExpectedParentConcept: null, lineageCompatibility: 'indeterminate',
      occurrenceCount: null, referenceNo: null, snapshotModifiedAt: null,
    }
    resolutionLedger.resolutions.push(entry)
    resolutionById.set(node.id, entry)
  }
  const parent = flattenTree(ontology).find((candidate) => (candidate.children ?? []).some((child) => child.id === node.id))
  const parentRelationshipKind = node.parentRelationshipKind ?? (parent ? 'taxonomic-parent' : null)
  entry.parentRelationshipKind = parentRelationshipKind
  entry.resolvedAncestorChain ??= []
  entry.resolvedAncestorChain = entry.resolvedAncestorChain.filter((ancestor) => ancestor.pbdbId !== 'txn:0' && ancestor.name)
  entry.localExpectedParentConcept = parent?.name ?? null






  delete entry.curatorDecision
}
resolutionLedger.schemaVersion = 3
resolutionLedger.policy = 'PBDB name/rank resolution and recorded lineage compatibility remain separate. Only taxonomic-parent edges participate in lineage compatibility; navigation and display edges do not assert taxonomic parentage.'
resolutionLedger.summary = {
  ontologyNodes: resolutionLedger.resolutions.length,
  resolved: resolutionLedger.resolutions.filter((entry) => entry.resolutionStatus === 'resolved').length,
  unresolved: resolutionLedger.resolutions.filter((entry) => entry.resolutionStatus !== 'resolved').length,


}

writeJson('data/ranges/range-evidence.json', ranges)
writeJson('data/references.json', references)
writeJson('data/evidence/claims.json', claims)
writeJson('data/evidence/claim-rationales.zh.json', rationalesZh)
writeJson('data/evidence/claim-statements.zh.json', claimStatementsZh)
writeJson('data/sources/pbdb-taxon-resolution.json', resolutionLedger)
console.log(`Migrated ${flattenTree(ontology).length} ontology entities, ${ranges.length} ranges and ${claims.length} claims.`)
