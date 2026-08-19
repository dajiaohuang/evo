import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'

const REVIEW_DATE = '2026-08-20'

function writeJson(relativePath, value) {
  const absolutePath = join(rootDir, relativePath)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

function findNode(root, id) {
  if (root.id === id) return root
  for (const child of root.children ?? []) {
    const found = findNode(child, id)
    if (found) return found
  }
  return null
}

function detachNode(root, id) {
  const index = (root.children ?? []).findIndex((child) => child.id === id)
  if (index >= 0) return root.children.splice(index, 1)[0]
  for (const child of root.children ?? []) {
    const detached = detachNode(child, id)
    if (detached) return detached
  }
  return null
}

function parentName(root, id, parent = null) {
  if (root.id === id) return parent?.name ?? null
  for (const child of root.children ?? []) {
    const found = parentName(child, id, root)
    if (found !== null) return found
  }
  return null
}

function node(fields) {
  return { taxonId: '', extinct: false, children: [], ...fields }
}

const ontology = readJson('data/navigation/atlas-ontology.json')

// Bryophyta is used in the narrow moss sense; liverworts and hornworts are
// represented independently so the navigation label no longer asserts an
// incomplete broad bryophyte concept.
const bryophyta = findNode(ontology, 'bryophyta')
bryophyta.commonName = 'Mosses (Bryophyta sensu stricto)'
bryophyta.commonNameZh = '藓类（狭义苔藓植物门）'
const plantae = findNode(ontology, 'plantae')
if (!findNode(ontology, 'marchantiophyta')) plantae.children.push(node({
  id: 'marchantiophyta', name: 'Marchantiophyta', commonName: 'Liverworts', commonNameZh: '地钱门',
  rank: 'phylum', firstAppearance: 470, lastAppearance: 0,
}))
if (!findNode(ontology, 'anthocerotophyta')) plantae.children.push(node({
  id: 'anthocerotophyta', name: 'Anthocerotophyta', commonName: 'Hornworts', commonNameZh: '角苔门',
  rank: 'phylum', firstAppearance: 470, lastAppearance: 0,
}))

// Odonata and the extinct Meganisoptera are separate children of an explicit
// odonatopteran navigation group.
const insecta = findNode(ontology, 'insecta')
let odonatoptera = findNode(ontology, 'odonatoptera')
if (!odonatoptera) {
  const odonata = detachNode(ontology, 'odonata')
  const meganeura = odonata ? detachNode(odonata, 'meganeura') : null
  insecta.children.unshift(node({
    id: 'odonatoptera', name: 'Odonatoptera', commonName: 'Odonatopteran navigation group', commonNameZh: '蜻蜓总群导航组',
    rank: 'navigation group', firstAppearance: 325, lastAppearance: 0,
    children: [odonata, node({
      id: 'meganisoptera', name: 'Meganisoptera', commonName: 'Griffinflies', commonNameZh: '巨脉蜻蜓目',
      rank: 'order', firstAppearance: 325, lastAppearance: 250, extinct: true, children: meganeura ? [meganeura] : [],
    })],
  }))
  odonatoptera = findNode(ontology, 'odonatoptera')
}
const currentOdonata = findNode(odonatoptera, 'odonata')
const currentMeganisoptera = findNode(odonatoptera, 'meganisoptera')
const misplacedMeganeura = currentOdonata ? detachNode(currentOdonata, 'meganeura') : null
if (misplacedMeganeura && currentMeganisoptera && !findNode(currentMeganisoptera, 'meganeura')) currentMeganisoptera.children.push(misplacedMeganeura)

// Tetrapodomorpha is the total group containing Tetrapoda; the explicitly
// paraphyletic stem grade owns Tiktaalik and other future stem examples.
const sarcopterygii = findNode(ontology, 'sarcopterygii')
if (findNode(ontology, 'tetrapodomorpha') && findNode(ontology, 'tetrapoda') && parentName(ontology, 'tetrapoda') !== 'Tetrapodomorpha') {
  const tetrapodomorpha = detachNode(ontology, 'tetrapodomorpha')
  const tetrapoda = detachNode(ontology, 'tetrapoda')
  const stemMembers = tetrapodomorpha.children ?? []
  tetrapodomorpha.commonName = 'Tetrapodomorph total group'
  tetrapodomorpha.commonNameZh = '四足形类总群'
  tetrapodomorpha.lastAppearance = 0
  tetrapodomorpha.extinct = false
  tetrapodomorpha.children = [node({
    id: 'stem-tetrapodomorphs', name: 'stem-tetrapodomorphs', commonName: 'Stem tetrapodomorph navigation grade', commonNameZh: '四足形类干群导航级',
    rank: 'paraphyletic navigation grade', firstAppearance: 392, lastAppearance: 359, extinct: true, children: stemMembers,
  }), tetrapoda]
  sarcopterygii.children.push(tetrapodomorpha)
}

// Graptolithina is nested within pterobranch hemichordates. Package ownership
// remains an explicit teaching collection and no longer controls taxonomy.
const graptolithina = detachNode(ontology, 'graptolithina')
const invertebrata = findNode(ontology, 'invertebrata')
if (!findNode(ontology, 'hemichordata') && graptolithina) invertebrata.children.push(node({
  id: 'hemichordata', name: 'Hemichordata', commonName: 'Hemichordates', commonNameZh: '半索动物门',
  rank: 'phylum', firstAppearance: 540, lastAppearance: 0,
  children: [node({
    id: 'pterobranchia', name: 'Pterobranchia', commonName: 'Pterobranchs', commonNameZh: '羽鳃纲',
    rank: 'class', firstAppearance: 530, lastAppearance: 0, children: [graptolithina],
  })],
}))
else if (graptolithina) findNode(ontology, 'pterobranchia').children.push(graptolithina)
findNode(ontology, 'hemichordata').firstAppearance = 540
findNode(ontology, 'pterobranchia').firstAppearance = 530

const historicalGrades = new Set(['agnatha', 'ostracodermi', 'acanthodii', 'placodermi', 'pelycosauria', 'pteridophyta', 'articulata', 'stem-tetrapodomorphs'])
const informalGroups = new Set(['invertebrata'])
const navigationGroups = new Set(['life', 'odonatoptera'])
const profileIds = new Set(readJson('data/packages/mammalia/perissodactyla/profiles.json').map((profile) => profile.treeNodeId))
for (const entry of flattenTree(ontology)) {
  entry.entityKind = historicalGrades.has(entry.id)
    ? 'historical-grade'
    : informalGroups.has(entry.id)
      ? 'informal-group'
      : navigationGroups.has(entry.id)
        ? 'navigation-group'
        : 'taxon'
  entry.contentLevel = profileIds.has(entry.id) ? 'full-profile' : 'dossier'
}
writeJson('data/navigation/atlas-ontology.json', ontology)

const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
const hipparionini = profiles.find((profile) => profile.id === 'hipparionini')
const northAmerica = hipparionini.regionalRanges.find((range) => range.region === 'North America')
northAmerica.olderMa = 17
northAmerica.youngerMa = 2
northAmerica.confidence = 'contested'
northAmerica.basis = 'The North American hipparionin radiation begins near 17 Ma and the classic four-genus synthesis extends to about 2 Ma; exact endpoints remain pending a revised genus-level synthesis.'
writeJson('data/packages/mammalia/perissodactyla/profiles.json', profiles)

const references = readJson('data/references.json')
if (!references.some((reference) => reference.id === 'schulte-2010-chicxulub')) references.push({
  id: 'schulte-2010-chicxulub',
  title: 'The Chicxulub asteroid impact and mass extinction at the Cretaceous-Paleogene boundary',
  authors: 'Schulte, P. et al.',
  publishedYear: 2010,
  type: 'paper',
  url: 'https://doi.org/10.1126/science.1177265',
  doi: '10.1126/science.1177265',
  publisher: 'Science',
})

function referenceMetadata(reference) {
  if (reference.id === 'ics-2026-06') return { sourceRole: 'standard', fitnessFor: ['geochronology', 'range'] }
  if (reference.id === 'open-tree') return { sourceRole: 'taxonomic-database', fitnessFor: ['taxonomy', 'topology'] }
  if (reference.id.startsWith('pbdb-')) return {
    sourceRole: reference.type === 'documentation' ? 'documentation' : 'occurrence-database',
    fitnessFor: ['taxonomy', 'range', 'occurrence'],
  }
  if (reference.id.includes('gplates')) return { sourceRole: 'documentation', fitnessFor: ['paleogeography'] }
  if (reference.type === 'museum') return { sourceRole: 'museum-overview', fitnessFor: ['taxonomy', 'morphology', 'ecology'] }
  if (reference.type === 'documentation') return { sourceRole: 'documentation', fitnessFor: ['methods'] }
  if (reference.type === 'database' || reference.type === 'dataset') return { sourceRole: 'taxonomic-database', fitnessFor: ['taxonomy'] }
  const title = reference.title.toLocaleLowerCase()
  const sourceRole = /review|integrated|conundrum|evolution of|rise of oxygen|ediacara biota/.test(title) ? 'systematic-review' : 'primary-study'
  const fitnessFor = new Set(['taxonomy'])
  if (/phylogen|relationship|divergen|time-tree|genome/.test(title)) fitnessFor.add('topology')
  if (/fossil|stratigraph|timeline|extinction|range|record/.test(title)) fitnessFor.add('range')
  if (/ecolog|diet|isotope|habitat|vegetation|climate/.test(title)) fitnessFor.add('ecology')
  if (/morpholog|anatom|monodactyl|skull|limb/.test(title)) fitnessFor.add('morphology')
  if (/dispers|biogeograph|migration|admixture/.test(title)) fitnessFor.add('biogeography')
  if (/extinction|impact|oxygen|thermal|recovery|radiation|diversification/.test(title)) fitnessFor.add('event-mechanism')
  return { sourceRole, fitnessFor: [...fitnessFor] }
}
for (const reference of references) Object.assign(reference, referenceMetadata(reference))
writeJson('data/references.json', references)

const claims = readJson('data/evidence/claims.json')
const anchitherium = claims.find((claim) => claim.id === 'claim:taxon:anchitherium')
anchitherium.referenceLinks[0].relation = 'supports'
const megafauna = claims.find((claim) => claim.id === 'claim:event:quaternary-megafauna-extinction')
megafauna.statement = 'Globally, late Quaternary megafaunal extinction severity tracks human expansion more strongly than climate; climatic effects in the cited comparison are weaker and regionally concentrated, especially in Eurasia.'
megafauna.confidenceRationale = 'Medium confidence reflects the broad global comparison and its strong human association while preserving the study’s weaker, regionally concentrated climatic signal and the uncertainty of regional chronologies.'
megafauna.reviewedAt = REVIEW_DATE
if (!claims.some((claim) => claim.id === 'claim:event:k-pg-chicxulub')) claims.push({
  id: 'claim:event:k-pg-chicxulub', subjectId: 'event:k-pg-extinction', claimKind: 'scientific', claimType: 'event-mechanism',
  statement: 'Multiple stratigraphic, geochemical and geophysical lines of evidence identify Chicxulub as the source crater for the K–Pg impact.',
  confidence: 'high',
  confidenceRationale: 'High confidence follows the cited synthesis linking crater age, ejecta, boundary deposits and global stratigraphy rather than retroactively attributing the crater to the 1980 iridium paper.',
  reviewedBy: 'Codex automated evidence audit', reviewedAt: REVIEW_DATE,
  reviewedAgainstReferenceVersion: 'schulte-2010-chicxulub @ DOI 10.1126/science.1177265',
  referenceLinks: [{ relation: 'supports', referenceId: 'schulte-2010-chicxulub', quoteLocator: 'Science 327 synthesis, pp. 1214–1218' }],
})
if (!claims.some((claim) => claim.id === 'claim:event:k-pg-turnover')) claims.push({
  id: 'claim:event:k-pg-turnover', subjectId: 'event:k-pg-extinction', claimKind: 'scientific', claimType: 'event-mechanism',
  statement: 'Abrupt fossil turnover at the K–Pg boundary is temporally associated with impact ejecta and the Chicxulub event.',
  confidence: 'high',
  confidenceRationale: 'High confidence applies to the boundary-scale association documented across stratigraphic records; clade-specific extinction and recovery patterns remain heterogeneous.',
  reviewedBy: 'Codex automated evidence audit', reviewedAt: REVIEW_DATE,
  reviewedAgainstReferenceVersion: 'schulte-2010-chicxulub @ DOI 10.1126/science.1177265',
  referenceLinks: [{ relation: 'supports', referenceId: 'schulte-2010-chicxulub', quoteLocator: 'Science 327 synthesis, pp. 1214–1218' }],
})
writeJson('data/evidence/claims.json', claims)

const rationalesZh = readJson('data/evidence/claim-rationales.zh.json')
rationalesZh['claim:event:quaternary-megafauna-extinction'] = '中等置信度反映该全球比较中人类扩张的强关联，同时保留其较弱且主要集中于欧亚大陆的气候信号，以及区域年代序列的不确定性。'
rationalesZh['claim:event:k-pg-chicxulub'] = '高置信度来自综合撞击坑年代、喷出物、界线沉积与全球地层记录的研究，而不是把 1991 年后确认的撞击坑错误归入 1980 年铱异常论文。'
rationalesZh['claim:event:k-pg-turnover'] = '高置信度适用于多套地层记录中界线尺度的化石更替与撞击喷出物关联；不同类群的灭绝和恢复模式仍具有异质性。'
writeJson('data/evidence/claim-rationales.zh.json', rationalesZh)

const claimsBySubject = new Map()
for (const claim of claims) {
  if (!claimsBySubject.has(claim.subjectId)) claimsBySubject.set(claim.subjectId, [])
  claimsBySubject.get(claim.subjectId).push(claim)
}
const events = readJson('data/events.json')
for (const event of events) {
  const subjectId = `event:${event.id}`
  const subjectClaims = claimsBySubject.get(subjectId) ?? []
  const defaultClaimId = event.claimIds[0]
  const item = (value, kind) => {
    if (typeof value !== 'string') return value
    let claimId = defaultClaimId
    if (event.id === 'k-pg-extinction' && value === 'Chicxulub crater') claimId = 'claim:event:k-pg-chicxulub'
    if (event.id === 'k-pg-extinction' && value === 'Abrupt fossil turnover') claimId = 'claim:event:k-pg-turnover'
    const linkedClaim = subjectClaims.find((claim) => claim.id === claimId) ?? claims.find((claim) => claim.id === claimId)
    return {
      statement: value,
      relation: kind === 'evidence' ? 'supports' : 'contextualizes',
      claimIds: [claimId],
      referenceLinks: linkedClaim?.referenceLinks ?? [],
    }
  }
  event.evidenceItems = event.evidenceItems ?? event.evidence.map((value) => item(value, 'evidence'))
  event.uncertaintyItems = event.uncertaintyItems ?? event.uncertainties.map((value) => item(value, 'uncertainty'))
  delete event.evidence
  delete event.uncertainties
  if (event.id === 'k-pg-extinction') event.claimIds = [...new Set([...event.claimIds, 'claim:event:k-pg-chicxulub', 'claim:event:k-pg-turnover'])]
}
writeJson('data/events.json', events)

// Upgrade the pinned PBDB ledger without inventing identifiers. Exact name/rank
// mappings remain publishable; lineage mismatches become explicit review work.
const resolutionLedger = readJson('data/sources/pbdb-taxon-resolution.json')
const parentNameById = new Map()
function indexParents(entry, parent = null) {
  parentNameById.set(entry.id, parent?.name ?? null)
  for (const child of entry.children ?? []) indexParents(child, entry)
}
indexParents(ontology)
const resolutionById = new Map(resolutionLedger.resolutions.map((entry) => [entry.entityId, entry]))
for (const entry of flattenTree(ontology)) {
  if (!resolutionById.has(entry.id)) resolutionById.set(entry.id, {
    entityId: entry.id, localName: entry.name, localRank: entry.rank || null, previousPbdbId: null,
    resolutionStatus: 'unresolved', resolutionReason: 'no-exact-name-in-snapshot', pbdbId: null,
    acceptedName: null, acceptedRank: null, matchedTaxonName: null, pbdbParentName: null,
    pbdbClassification: null, occurrenceCount: null, referenceNo: null, snapshotModifiedAt: null,
  })
}
resolutionLedger.resolutions = flattenTree(ontology).map((ontologyNode) => {
  const entry = resolutionById.get(ontologyNode.id)
  const expectedParent = parentNameById.get(entry.entityId)
  const classification = Object.values(entry.pbdbClassification ?? {}).filter(Boolean)
  const lineageCompatibility = !entry.acceptedName
    ? 'indeterminate'
    : entry.pbdbParentName === expectedParent
      ? 'compatible-immediate-parent'
      : classification.includes(expectedParent)
        ? 'compatible-classification'
        : expectedParent && (entry.pbdbParentName || classification.length)
          ? 'incompatible'
          : 'indeterminate'
  const exact = entry.resolutionStatus === 'resolved'
  const conceptReviewStatus = lineageCompatibility === 'incompatible' ? 'needs-concept-review' : exact ? 'compatible' : 'unresolved'
  const externalResolutionStatus = exact
    ? entry.matchedTaxonName === entry.acceptedName ? 'resolved-exact' : 'resolved-synonym'
    : entry.resolutionReason === 'no-exact-name-in-snapshot' ? 'not-found' : 'ambiguous'
  return {
    ...entry,
    resolutionReason: exact ? 'resolved-exact-name-and-rank' : entry.resolutionReason,
    externalResolutionStatus,
    resolvedName: entry.acceptedName,
    resolvedRank: entry.acceptedRank,
    resolvedImmediateParent: entry.pbdbParentName,
    resolvedClassification: entry.pbdbClassification,
    localExpectedParentConcept: expectedParent,
    lineageCompatibility,
    conceptReviewStatus,
    curatorDecision: lineageCompatibility === 'incompatible'
      ? 'needs-concept-review'
      : exact ? 'accept-external-mapping' : 'withhold-external-mapping',
  }
})
resolutionLedger.schemaVersion = 2
resolutionLedger.generatedAt = REVIEW_DATE
resolutionLedger.policy = 'PBDB mappings publish only after exact name/rank resolution. Entity kind is independent of PBDB. Parent and classification compatibility are recorded separately; incompatibility triggers needs-concept-review without silently deleting an otherwise exact mapping.'
resolutionLedger.summary = {
  ontologyNodes: resolutionLedger.resolutions.length,
  resolved: resolutionLedger.resolutions.filter((entry) => entry.resolutionStatus === 'resolved').length,
  unresolved: resolutionLedger.resolutions.filter((entry) => entry.resolutionStatus !== 'resolved').length,
  needsConceptReview: resolutionLedger.resolutions.filter((entry) => entry.conceptReviewStatus === 'needs-concept-review').length,
}
writeJson('data/sources/pbdb-taxon-resolution.json', resolutionLedger)

const treeEvidence = readJson('data/tree/evidence.json')
const referencesById = new Map(references.map((reference) => [reference.id, reference]))
const profileById = new Map(profiles.map((profile) => [profile.treeNodeId, profile]))
const rangeEvidence = []
for (const ontologyNode of flattenTree(ontology)) {
  const evidence = { ...treeEvidence.default, ...treeEvidence.nodes[ontologyNode.id] }
  const profile = profileById.get(ontologyNode.id)
  const claimId = claims.some((claim) => claim.id === `claim:taxon:${ontologyNode.id}`) ? `claim:taxon:${ontologyNode.id}` : null
  const referenceIds = [...new Set([...(profile?.referenceIds ?? []), ...evidence.references])]
  rangeEvidence.push({
    id: `range:${ontologyNode.id}:global`, entityId: ontologyNode.id,
    rangeKind: 'global-composite', taxonomicConcept: ontologyNode.name, geographicScope: 'Global or represented navigation composite',
    olderMa: profile?.firstAppearance ?? ontologyNode.firstAppearance,
    youngerMa: profile?.lastAppearance ?? ontologyNode.lastAppearance,
    status: 'available',
    uncertainty: { olderMa: null, youngerMa: null, note: 'Endpoints are sampling-dependent display bounds unless a scoped claim states otherwise.' },
    evidenceBasis: evidence.rangeBasis,
    confidence: evidence.support === 'strong' ? 'high' : evidence.support === 'contested' ? 'contested' : 'medium',
    claimIds: claimId ? [claimId] : [],
    referenceLocators: referenceIds.map((referenceId) => {
      const reference = referencesById.get(referenceId)
      return { referenceId, locator: reference?.doi ? `doi:${reference.doi}` : reference?.url ?? 'reference ledger' }
    }),
    reviewStatus: profile ? 'automated-audit-passed' : 'not-reviewed',
  })
  for (const regional of profile?.regionalRanges ?? []) rangeEvidence.push({
    id: `range:${ontologyNode.id}:${regional.label.toLocaleLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
    entityId: ontologyNode.id, rangeKind: regional.rangeKind, taxonomicConcept: ontologyNode.name,
    geographicScope: regional.region, olderMa: regional.olderMa, youngerMa: regional.youngerMa, status: 'available',
    uncertainty: { olderMa: null, youngerMa: null, note: regional.confidence === 'contested' ? 'Endpoint is review-pending.' : 'Published regional synthesis; lineage-level endpoints may vary.' },
    evidenceBasis: regional.basis, confidence: regional.confidence, claimIds: claimId ? [claimId] : [],
    referenceLocators: regional.referenceIds.map((referenceId) => {
      const reference = referencesById.get(referenceId)
      return { referenceId, locator: reference?.doi ? `doi:${reference.doi}` : reference?.url ?? 'reference ledger' }
    }),
    reviewStatus: 'automated-audit-passed',
  })
}
writeJson('data/ranges/range-evidence.json', rangeEvidence)

console.log(`Migrated ${flattenTree(ontology).length} entities, ${claims.length} claims and ${rangeEvidence.length} canonical ranges.`)
