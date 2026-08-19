import { createReadStream, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { join } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'

const SNAPSHOT = {
  referenceId: 'pbdb-taxa-2026-07-19',
  doi: '10.5281/zenodo.21620933',
  downloadedAt: '2026-07-19',
  archiveFile: 'pbdb_taxa_csv.zip',
  archiveMd5: 'fca5fde5e8d5922d06fe332a42b955f9',
  sourceUrl: 'https://zenodo.org/records/21620933',
}

const args = process.argv.slice(2)
const sourceIndex = args.indexOf('--source')
const sourcePath = sourceIndex >= 0 ? args[sourceIndex + 1] : ''
const shouldWrite = args.includes('--write')

if (!sourcePath) {
  console.error('Usage: node scripts/reconcile-pbdb-taxa.mjs --source <pbdb_taxa.csv> [--write]')
  process.exit(2)
}

function parseCsvLine(line) {
  const values = []
  let value = ''
  let quoted = false
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index]
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"'
        index += 1
      } else {
        quoted = !quoted
      }
    } else if (character === ',' && !quoted) {
      values.push(value)
      value = ''
    } else {
      value += character
    }
  }
  values.push(value)
  return values
}

function normalizedRank(rank) {
  const value = String(rank ?? '').trim().toLocaleLowerCase()
  return value === 'clade' ? 'unranked clade' : value
}

function numberOrNull(value) {
  const result = Number(value)
  return Number.isFinite(result) ? result : null
}

const ontology = readJson('data/navigation/atlas-ontology.json')
const nodes = flattenTree(ontology)
const parentByEntityId = new Map()
function indexParents(node, parent = null) {
  parentByEntityId.set(node.id, parent)
  for (const child of node.children ?? []) indexParents(child, node)
}
indexParents(ontology)
const names = new Set(nodes.map((node) => node.name))
const candidatesByName = new Map(nodes.map((node) => [node.name, []]))
const conceptsByAcceptedNo = new Map()
const input = createInterface({ input: createReadStream(sourcePath, { encoding: 'utf8' }), crlfDelay: Infinity })
let headers
let indexes

for await (const line of input) {
  const values = parseCsvLine(line)
  if (!headers) {
    headers = values
    const indexOf = (name) => headers.indexOf(name)
    indexes = Object.fromEntries([
      'orig_no', 'taxon_no', 'taxon_rank', 'taxon_name', 'accepted_no', 'accepted_rank',
      'accepted_name', 'parent_no', 'parent_name', 'reference_no', 'n_occs', 'phylum',
      'class', 'order', 'family', 'lft', 'rgt', 'modified',
    ].map((name) => [name, indexOf(name)]))
    const missing = Object.entries(indexes).filter(([, index]) => index < 0).map(([name]) => name)
    if (missing.length) throw new Error(`PBDB taxon snapshot is missing columns: ${missing.join(', ')}`)
    continue
  }

  const name = values[indexes.taxon_name]
  const acceptedNo = values[indexes.accepted_no]
  const concept = {
    acceptedNo,
    name: values[indexes.accepted_name] || name,
    parentNo: values[indexes.parent_no] || null,
    parentName: values[indexes.parent_name] || null,
  }
  if (acceptedNo && (!conceptsByAcceptedNo.has(acceptedNo) || values[indexes.taxon_no] === acceptedNo)) conceptsByAcceptedNo.set(acceptedNo, concept)
  if (!names.has(name)) continue
  candidatesByName.get(name).push(Object.fromEntries(
    Object.entries(indexes).map(([key, index]) => [key, values[index]]),
  ))
}

function ancestorChain(acceptedNo) {
  const chain = []
  const seen = new Set()
  let cursor = conceptsByAcceptedNo.get(acceptedNo)
  while (cursor?.parentNo && cursor.parentNo !== '0' && !seen.has(cursor.parentNo)) {
    seen.add(cursor.parentNo)
    const parent = conceptsByAcceptedNo.get(cursor.parentNo) ?? { acceptedNo: cursor.parentNo, name: cursor.parentName, parentNo: null, parentName: null }
    chain.push({ pbdbId: `txn:${parent.acceptedNo}`, name: parent.name || cursor.parentName || null })
    cursor = conceptsByAcceptedNo.get(cursor.parentNo)
  }
  return chain
}

function resolveNode(node) {
  const candidates = candidatesByName.get(node.name) ?? []
  const acceptedNameMatches = candidates.filter((row) => row.accepted_name === node.name)
  const rankMatches = acceptedNameMatches.filter((row) => normalizedRank(row.accepted_rank) === normalizedRank(node.rank))
  const acceptedConcepts = new Map(rankMatches.map((row) => [row.accepted_no, row]))
  const ranked = [...acceptedConcepts.values()].sort((left, right) => {
    const leftAccepted = left.taxon_no === left.accepted_no ? 1 : 0
    const rightAccepted = right.taxon_no === right.accepted_no ? 1 : 0
    return rightAccepted - leftAccepted || Number(right.n_occs || 0) - Number(left.n_occs || 0) || Number(left.accepted_no) - Number(right.accepted_no)
  })

  let reason = 'resolved-exact-name-and-rank'
  if (!candidates.length) reason = 'no-exact-name-in-snapshot'
  else if (!acceptedNameMatches.length) reason = 'accepted-name-mismatch'
  else if (!rankMatches.length) reason = 'accepted-rank-mismatch'
  else if (acceptedConcepts.size > 1) reason = 'ambiguous-accepted-concept'

  const resolved = reason === 'resolved-exact-name-and-rank' ? ranked[0] : null
  const diagnostic = resolved ?? acceptedNameMatches[0] ?? candidates[0] ?? null
  const localExpectedParentConcept = parentByEntityId.get(node.id)?.name ?? null
  const parentRelationshipKind = node.parentRelationshipKind ?? (localExpectedParentConcept ? 'taxonomic-parent' : null)
  const resolvedClassification = diagnostic ? {
    phylum: diagnostic.phylum || null,
    class: diagnostic.class || null,
    order: diagnostic.order || null,
    family: diagnostic.family || null,
  } : null
  const classificationNames = Object.values(resolvedClassification ?? {}).filter(Boolean)
  const resolvedAncestorChain = diagnostic ? ancestorChain(diagnostic.accepted_no) : []
  const lineageCompatibility = parentRelationshipKind !== 'taxonomic-parent'
    ? 'not-applicable-non-taxonomic-edge'
    : !diagnostic
    ? 'indeterminate'
    : diagnostic.parent_name === localExpectedParentConcept
      ? 'compatible-immediate-parent'
      : classificationNames.includes(localExpectedParentConcept)
        ? 'compatible-classification'
        : resolvedAncestorChain.some((ancestor) => ancestor.name === localExpectedParentConcept)
          ? 'compatible-ancestor-chain'
        : localExpectedParentConcept && (diagnostic.parent_name || classificationNames.length)
          ? 'incompatible'
          : 'indeterminate'
  const conceptReviewStatus = parentRelationshipKind !== 'taxonomic-parent' && resolved
    ? 'not-required-navigation-edge'
    : lineageCompatibility === 'incompatible' ? 'needs-concept-review' : resolved ? 'compatible' : 'unresolved'
  return {
    entityId: node.id,
    localName: node.name,
    localRank: node.rank || null,
    previousPbdbId: node.taxonId || null,
    resolutionStatus: resolved ? 'resolved' : 'unresolved',
    resolutionReason: reason,
    externalResolutionStatus: resolved
      ? diagnostic.taxon_name === diagnostic.accepted_name ? 'resolved-exact' : 'resolved-synonym'
      : reason === 'no-exact-name-in-snapshot' ? 'not-found' : 'ambiguous',
    pbdbId: resolved ? `txn:${resolved.accepted_no}` : null,
    acceptedName: diagnostic?.accepted_name || null,
    acceptedRank: diagnostic?.accepted_rank || null,
    matchedTaxonName: diagnostic?.taxon_name || null,
    pbdbParentName: diagnostic?.parent_name || null,
    pbdbClassification: resolvedClassification,
    resolvedName: diagnostic?.accepted_name || null,
    resolvedRank: diagnostic?.accepted_rank || null,
    resolvedImmediateParent: diagnostic?.parent_name || null,
    resolvedClassification,
    resolvedAncestorChain,
    localExpectedParentConcept,
    parentRelationshipKind,
    lineageCompatibility,
    conceptReviewStatus,
    automatedRecommendation: lineageCompatibility === 'incompatible'
      ? 'needs-concept-review'
      : resolved ? 'accept-external-mapping' : 'withhold-external-mapping',
    humanCuratorDecision: null,
    curatorRationale: null,
    curatorReviewedAt: null,
    curatorReviewer: null,
    occurrenceCount: diagnostic ? numberOrNull(diagnostic.n_occs) : null,
    referenceNo: diagnostic?.reference_no ? `ref:${diagnostic.reference_no}` : null,
    snapshotModifiedAt: diagnostic?.modified || null,
  }
}

const resolutions = nodes.map(resolveNode)
const byEntityId = new Map(resolutions.map((entry) => [entry.entityId, entry]))
const resolvedCount = resolutions.filter((entry) => entry.resolutionStatus === 'resolved').length
const output = {
  schemaVersion: 3,
  generatedAt: new Date().toISOString().slice(0, 10),
  policy: 'PBDB name/rank resolution, automated lineage recommendations and human curator decisions are separate. Only taxonomic-parent edges use the complete pinned PBDB ancestor chain for compatibility; navigation and display edges do not assert taxonomic parentage.',
  rankNormalization: { clade: 'unranked clade' },
  source: SNAPSHOT,
  summary: {
    ontologyNodes: resolutions.length,
    resolved: resolvedCount,
    unresolved: resolutions.length - resolvedCount,
    needsConceptReview: resolutions.filter((entry) => entry.conceptReviewStatus === 'needs-concept-review').length,
    humanCuratorDecisions: resolutions.filter((entry) => entry.humanCuratorDecision).length,
  },
  resolutions,
}

function applyResolution(node) {
  node.taxonId = byEntityId.get(node.id)?.pbdbId ?? ''
  for (const child of node.children ?? []) applyResolution(child)
}

if (shouldWrite) {
  applyResolution(ontology)
  writeFileSync(join(rootDir, 'data/navigation/atlas-ontology.json'), `${JSON.stringify(ontology, null, 2)}\n`)
  writeFileSync(join(rootDir, 'data/sources/pbdb-taxon-resolution.json'), `${JSON.stringify(output, null, 2)}\n`)
  console.log(`Wrote ${resolvedCount} resolved and ${resolutions.length - resolvedCount} unresolved PBDB taxon mappings.`)
} else {
  console.log(JSON.stringify(output.summary, null, 2))
  for (const entry of resolutions.filter((candidate) => candidate.resolutionStatus === 'unresolved')) {
    console.log(`${entry.entityId}: ${entry.resolutionReason} (${entry.localName}; local ${entry.localRank ?? 'unranked'}; PBDB ${entry.acceptedRank ?? 'none'})`)
  }
}
