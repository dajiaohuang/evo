import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { brotliDecompressSync, gunzipSync } from 'node:zlib'
import { ContentReferenceCatalogue } from './content-references.mjs'
import { CONTENT_PROJECTION_MAP, digest, jsonText, scientificNameSegment, semanticJson, writeNodeContent, writeUtf8, writeYaml } from './tree-path-content.mjs'

// One-time import. Subsequent builds read Markdown; they never re-import these projections.
if (existsSync(CONTENT_PROJECTION_MAP)) throw new Error('Content has already been migrated. Edit content/ and run npm run content:build.')
const root = process.cwd()
const json = path => JSON.parse(readFileSync(path, 'utf8'))
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name).replaceAll('\\', '/')])
const catalogueRoot = 'data/catalogue-of-life/releases/2026-08-20/registry'
const catalogueManifest = json(`${catalogueRoot}/manifest.json`)
const catalogueProfiles = json('data/knowledge/catalogue-profiles.json')
const dossierBase = json('data/knowledge/catalogue-dossiers.json')
const dossierIndex = json('data/knowledge/catalogue-dossier-shards.json')
const dossierSources = [{ path: 'data/knowledge/catalogue-dossiers.json', encoding: 'json', data: dossierBase }]
for (const shard of dossierIndex.shards) {
  const records = brotliDecompressSync(readFileSync(shard.path)).toString('utf8').split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line))
  dossierSources.push({ path: shard.path, encoding: 'brotli-jsonl', records })
}
const targets = new Set([...catalogueProfiles.records, ...dossierSources.flatMap(source => source.records ?? source.data.records)].map(record => record.colId))
const ontology = json('data/navigation/atlas-ontology.json')
const atlasNodes = [], atlasParents = new Map()
function collectAtlas(node, parent = null) {
  atlasNodes.push(node)
  atlasParents.set(node.id, parent)
  if (node.colUsageId) targets.add(node.colUsageId)
  for (const child of node.children ?? []) collectAtlas(child, node)
}
collectAtlas(ontology)
const atlasNames = new Set(atlasNodes.map(node => node.name))
const resolutions = json('data/sources/pbdb-taxon-resolution.json')
const resolutionById = new Map(resolutions.resolutions.map(record => [record.entityId, record]))
for (const resolution of resolutions.resolutions) {
  for (const ancestor of resolution.resolvedAncestorChain ?? []) atlasNames.add(ancestor.name)
  for (const name of Object.values(resolution.resolvedClassification ?? {})) if (name) atlasNames.add(name)
  if (resolution.resolvedImmediateParent) atlasNames.add(resolution.resolvedImmediateParent)
}

const nodes = new Map(), colNames = new Map()
const bareName = node => node.authorship && node.scientificName.endsWith(node.authorship) ? node.scientificName.slice(0, -node.authorship.length).trim() : node.scientificName
for (const file of catalogueManifest.hierarchy.nodes.files) {
  for (const line of gunzipSync(readFileSync(`${catalogueRoot}/${file.path}`)).toString('utf8').split(/\r?\n/)) {
    if (!line) continue
    const node = JSON.parse(line)
    const name = bareName(node)
    if (node.rank !== 'species' || targets.has(node.id) || atlasNames.has(name)) nodes.set(node.id, node)
    if (atlasNames.has(name)) {
      const candidates = colNames.get(name) ?? []
      candidates.push(node)
      colNames.set(name, candidates)
    }
  }
}

const colPaths = new Map(), content = new Map(), pathOwners = new Map()
function ownPath(path, owner) {
  const folded = path.normalize('NFC').toLowerCase()
  if (pathOwners.has(folded) && pathOwners.get(folded) !== owner) throw new Error(`Ambiguous tree path ${path}: ${pathOwners.get(folded)} / ${owner}`)
  pathOwners.set(folded, owner)
}
function colPath(id, seen = new Set()) {
  if (colPaths.has(id)) return colPaths.get(id)
  const node = nodes.get(id)
  if (!node) throw new Error(`Missing pinned COL node ${id}`)
  if (seen.has(id)) throw new Error(`COL ancestry cycle ${id}`)
  seen.add(id)
  const path = `${node.parentId ? colPath(node.parentId, seen) : 'content/taxa'}/${scientificNameSegment(bareName(node))}`
  ownPath(path, `col:${id}`)
  colPaths.set(id, path)
  content.set(path, {
    index: {
      kind: 'taxon',
      scientificName: node.scientificName,
      displayName: bareName(node),
      rank: node.rank,
      classification: { authority: 'Catalogue of Life', release: catalogueProfiles.releaseAlias, publishedAt: '2026-08-20', status: node.status, sourceDatasetId: node.sourceDatasetId ?? null, sourceUrl: `https://www.checklistbank.org/dataset/316115/taxon/${node.id}` },
    },
    records: {},
  })
  return path
}
for (const id of targets) colPath(id)

const packageProfilePaths = walk('data/packages').filter(path => path.endsWith('/profiles.source.json'))
const profileByNode = new Map(packageProfilePaths.flatMap(path => json(path).map(profile => [profile.treeNodeId, profile])))
const atlasPaths = new Map(), atlasMappings = []
function uniqueCol(name, rank = null) {
  const candidates = (colNames.get(name) ?? []).filter(candidate => !rank || candidate.rank === rank)
  return candidates.length === 1 ? candidates[0] : null
}
function compatibleCol(name, rank, resolution) {
  const candidate = uniqueCol(name, rank)
  if (!candidate) return null
  if (!rank && ['genus', 'species', 'subgenus', 'subspecies'].includes(candidate.rank)) return null
  const phylum = resolution?.resolvedClassification?.phylum
  if (!phylum) return null
  let ancestor = candidate
  while (ancestor) {
    if (ancestor.rank === 'phylum') return bareName(ancestor) === phylum ? candidate : null
    ancestor = nodes.get(ancestor.parentId)
  }
  return candidate.rank === 'kingdom' && candidate.scientificName === 'Animalia' ? candidate : null
}
// Materialize every possible authoritative anchor before adding supplementary paths.
// A PBDB context can then share a storage location without replacing a COL node.
for (const candidates of colNames.values()) for (const candidate of candidates) colPath(candidate.id)
function atlasPath(node) {
  if (atlasPaths.has(node.id)) return atlasPaths.get(node.id)
  const resolution = resolutionById.get(node.id)
  const explicitCol = node.colUsageId ? nodes.get(node.colUsageId) : null
  const exactResolved = resolution?.externalResolutionStatus === 'resolved-exact' && resolution.resolvedName === node.name && resolution.resolvedRank === node.rank
  const nameAnchor = exactResolved ? compatibleCol(node.name, node.rank, resolution) : null
  const anchor = explicitCol ?? nameAnchor
  let path, placement
  if (anchor) {
    path = colPath(anchor.id)
    placement = explicitCol ? 'explicit-COL-source-link' : 'recorded-name-and-rank-storage-anchor-not-concept-equivalence'
  } else if (exactResolved) {
    const ancestors = resolution.resolvedAncestorChain ?? []
    let anchorAt = -1, ancestorAnchor = null
    for (let i = 0; i < ancestors.length; i++) {
      const candidate = compatibleCol(ancestors[i].name, null, resolution)
      if (candidate) { ancestorAnchor = candidate; anchorAt = i; break }
    }
    if (ancestorAnchor) {
      path = colPath(ancestorAnchor.id)
      for (const ancestor of ancestors.slice(0, anchorAt).reverse()) path += `/${scientificNameSegment(ancestor.name)}`
      path += `/${scientificNameSegment(node.name)}`
      placement = 'PBDB-recorded-ancestor-chain-supplement'
    } else {
      const hierarchy = ['phylum', 'class', 'order', 'family'].map(rank => ({ rank, name: resolution.resolvedClassification?.[rank] })).filter(entry => entry.name)
      let level = -1
      for (let i = hierarchy.length - 1; i >= 0; i--) if (compatibleCol(hierarchy[i].name, hierarchy[i].rank, resolution)) { level = i; break }
      if (level >= 0) {
        path = colPath(uniqueCol(hierarchy[level].name, hierarchy[level].rank).id)
        for (const entry of hierarchy.slice(level + 1)) if (entry.name !== node.name) path += `/${scientificNameSegment(entry.name)}`
        if (resolution.resolvedImmediateParent && !path.endsWith(`/${scientificNameSegment(resolution.resolvedImmediateParent)}`) && resolution.resolvedImmediateParent !== node.name) path += `/${scientificNameSegment(resolution.resolvedImmediateParent)}`
        if (!path.endsWith(`/${scientificNameSegment(node.name)}`)) path += `/${scientificNameSegment(node.name)}`
        placement = 'PBDB-recorded-classification-supplement-with-unrepresented-ranks-omitted'
      }
    }
  }
  if (!path) {
    // A navigation or unresolved concept is a topic, never a guessed COL placement.
    const parent = atlasParents.get(node.id)
    const parentTopic = parent && atlasPaths.get(parent.id)?.startsWith('content/topics/atlas/') ? atlasPaths.get(parent.id) : 'content/topics/atlas'
    path = `${parentTopic}/${scientificNameSegment(node.name)}`
    placement = 'independent-navigation-or-unresolved-concept'
  }
  const existing = content.get(path)
  if (!existing) {
    ownPath(path, `atlas:${node.id}`)
    content.set(path, {
      index: {
        kind: path.startsWith('content/taxa/') ? 'supplementary-taxon' : 'navigation-topic',
        scientificName: node.name,
        displayName: node.name,
        rank: node.rank || null,
        classification: { authority: path.startsWith('content/taxa/') ? 'Paleobiology Database snapshot' : 'Evo navigation concept', sourcePath: 'data/sources/pbdb-taxon-resolution.json', sourceUrl: resolution?.pbdbId ? `https://paleobiodb.org/data1.2/taxa/single.json?id=${resolution.pbdbId.replace(/^txn:/, '')}` : null, placement, conceptReviewStatus: resolution?.conceptReviewStatus ?? null },
      },
      records: {},
    })
  }
  atlasPaths.set(node.id, path)
  atlasMappings.push({ runtimeKey: node.id, path, placement, ...(anchor ? { anchorSourceUrl: `https://www.checklistbank.org/dataset/316115/taxon/${anchor.id}` } : {}) })
  return path
}
for (const node of atlasNodes) atlasPath(node)

const referenceCatalogue = new ContentReferenceCatalogue(json('data/references.json'))
const generatedInputs = {}, migrationInputs = []
const backupRoot = '.git/content-migration/original-inputs'
mkdirSync(backupRoot, { recursive: true })
function capture(path) {
  const bytes = readFileSync(path)
  const destination = join(backupRoot, path)
  mkdirSync(dirname(destination), { recursive: true })
  writeFileSync(destination, bytes)
  migrationInputs.push({ path, bytes: bytes.length, sha256: digest(bytes) })
}
function slot(path, key, value, inject = {}) {
  const entry = content.get(path)
  if (!entry) throw new Error(`No content directory for ${path}`)
  if (key in entry.records) throw new Error(`Duplicate content record ${path}/${key}`)
  const payload = structuredClone(value)
  for (const field of Object.keys(inject)) delete payload[field]
  entry.records[key] = referenceCatalogue.detach(payload)
  return { contentRecord: { path, key, ...(Object.keys(inject).length ? { inject } : {}), ...(!Array.isArray(value) && value && typeof value === 'object' ? { originalFields: Object.keys(value) } : {}) } }
}
function appendSlot(path, key, value) {
  const entry = content.get(path)
  if (!entry) throw new Error(`No content directory for ${path}`)
  entry.records[key] ??= []
  const index = entry.records[key].length
  entry.records[key].push(referenceCatalogue.detach(value))
  return { contentRecord: { path, key, index } }
}
function defineInput(path, data, encoding = 'json') {
  capture(path)
  const original = encoding === 'brotli-jsonl' ? brotliDecompressSync(readFileSync(path)).toString('utf8').split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line)) : json(path)
  generatedInputs[path] = { encoding, importSemanticSha256: digest(semanticJson(original)), template: data }
}
defineInput('data/knowledge/catalogue-profiles.json', {
  ...catalogueProfiles,
  records: catalogueProfiles.records.map(profile => slot(colPath(profile.colId), 'catalogue-profile', profile, { colId: profile.colId })),
})
for (const source of dossierSources) {
  const records = source.records ?? source.data.records
  const mapped = records.map(dossier => slot(colPath(dossier.colId), 'catalogue-dossier', dossier, { colId: dossier.colId }))
  defineInput(source.path, source.encoding === 'json' ? { ...source.data, records: mapped } : mapped, source.encoding)
}

const atlasProfilePaths = new Map()
for (const inputPath of packageProfilePaths) {
  const records = json(inputPath)
  const mapped = records.map(profile => {
    const nodePath = atlasPaths.get(profile.treeNodeId)
    if (!nodePath) throw new Error(`Profile targets an unknown navigation node: ${profile.treeNodeId}`)
    // Keep a study/sample account separate from the taxon's general catalogue page.
    const path = `${nodePath}/research/${scientificNameSegment(profile.scientificName)}`
    ownPath(path, `profile:${profile.treeNodeId}`)
    content.set(path, {
      index: { kind: 'research-account', scientificName: profile.scientificName, displayName: profile.scientificName, subjectPath: nodePath, rank: profile.rank, scopeRecord: 'atlas-profile', packagePath: inputPath.replace(/\/profiles\.source\.json$/, '') },
      records: {},
    })
    atlasProfilePaths.set(profile.treeNodeId, path)
    return slot(path, 'atlas-profile', profile, { id: profile.id, treeNodeId: profile.treeNodeId })
  })
  defineInput(inputPath, mapped)
}

const nodeTemplates = new Map()
for (const node of atlasNodes) {
  const { children, ...metadata } = node
  nodeTemplates.set(node.id, slot(atlasPaths.get(node.id), 'atlas-node', metadata, { id: node.id }))
}
function navigationTemplate(node) {
  const template = nodeTemplates.get(node.id)
  return { ...template, ...(Object.hasOwn(node, 'children') ? { children: node.children.map(navigationTemplate) } : {}) }
}
defineInput('data/navigation/atlas-ontology.json', navigationTemplate(ontology))
writeYaml('content/navigation/atlas.yaml', {
  schemaVersion: 1,
  kind: 'navigation-outline',
  classificationBasis: 'COL26.8 for storage; supplementary and unresolved contexts retain their recorded scope',
  root: (function outline(node) { return { path: atlasPaths.get(node.id), ...(node.children?.length ? { children: node.children.map(outline) } : {}) } })(ontology),
})

function titleDirectory(title, parent) {
  const path = `${parent}/${scientificNameSegment(title)}`
  if (content.has(path)) throw new Error(`Duplicate topic title at ${path}`)
  content.set(path, { index: { kind: parent.endsWith('/events') ? 'event' : 'topic', displayName: title }, records: {} })
  return path
}
const eventPaths = new Map(), storyPaths = new Map()
defineInput('data/events.json', json('data/events.json').map(event => {
  const path = titleDirectory(event.title, 'content/events')
  eventPaths.set(event.id, path)
  return slot(path, 'event', event, { id: event.id })
}))
defineInput('data/stories.json', json('data/stories.json').map(story => {
  const path = titleDirectory(story.title, 'content/topics/stories')
  storyPaths.set(story.id, path)
  return slot(path, 'story', story, { id: story.id })
}))

function subjectPath(subjectId) {
  const separator = subjectId.indexOf(':')
  const kind = subjectId.slice(0, separator), key = subjectId.slice(separator + 1)
  return kind === 'taxon' ? atlasProfilePaths.get(key) ?? atlasPaths.get(key) : kind === 'event' ? eventPaths.get(key) : kind === 'story' ? storyPaths.get(key) : null
}
const fallbackEvidencePath = 'content/topics/research/Unassigned_evidence'
function evidencePath(path) {
  if (path) return path
  if (!content.has(fallbackEvidencePath)) content.set(fallbackEvidencePath, { index: { kind: 'research-topic', displayName: 'Evidence with an unrepresented subject', placementStatus: 'unresolved-preserved' }, records: {} })
  return fallbackEvidencePath
}
const claims = json('data/evidence/claims.json'), claimsById = new Map(claims.map(claim => [claim.id, claim])), claimsByStatement = new Map(claims.map(claim => [claim.statement, claim]))
defineInput('data/evidence/claims.json', claims.map(claim => appendSlot(evidencePath(subjectPath(claim.subjectId)), 'claims', claim)))
for (const inputPath of ['data/evidence/claim-rationales.zh.json', 'data/evidence/claim-statements.zh.json']) {
  const values = json(inputPath)
  defineInput(inputPath, Object.fromEntries(Object.entries(values).map(([id, value]) => [id, appendSlot(evidencePath(subjectPath((inputPath.includes('rationales') ? claimsById.get(id) : claimsByStatement.get(id))?.subjectId ?? '')), inputPath.includes('rationales') ? 'claim-rationales.zh' : 'claim-statements.zh', value)])))
}
defineInput('data/evidence/editorial-decisions.json', json('data/evidence/editorial-decisions.json').map(decision => appendSlot(evidencePath(subjectPath(decision.subjectId)), 'editorial-decisions', decision)))
defineInput('data/ranges/range-evidence.json', json('data/ranges/range-evidence.json').map(range => appendSlot(evidencePath(atlasProfilePaths.get(range.entityId) ?? atlasPaths.get(range.entityId)), 'ranges', range)))
const treeEvidence = json('data/tree/evidence.json')
defineInput('data/tree/evidence.json', { ...treeEvidence, nodes: Object.fromEntries(Object.entries(treeEvidence.nodes).map(([key, value]) => [key, appendSlot(evidencePath(atlasPaths.get(key)), 'classification-support', value)])) })

// Research structures retain typed YAML records; their shared scope is not forced into one taxon.
const auxiliaryInputs = walk('data/packages').filter(path => path.endsWith('.source.json') && !path.endsWith('/profiles.source.json'))
for (const inputPath of auxiliaryInputs) {
  const source = json(inputPath)
  if (inputPath.includes('/field-claim-overrides.source.json')) {
    defineInput(inputPath, { ...source, profiles: Object.fromEntries(Object.entries(source.profiles).map(([key, value]) => [key, appendSlot(evidencePath(atlasProfilePaths.get(key) ?? atlasPaths.get(key)), 'field-claim-overrides', value)])) })
  } else {
    const packageName = inputPath.split('/').at(-2) === 'phylogeny' ? inputPath.split('/').at(-3) : inputPath.split('/').at(-2)
    const role = inputPath.includes('/phylogeny/') ? 'Phylogeny_hypotheses' : 'Research_examples'
    const path = titleDirectory(`${packageName}_${role}`, 'content/topics/research')
    defineInput(inputPath, slot(path, role, source))
  }
}
const calibrationInputs = walk('data/packages').filter(path => path.endsWith('/phylogeny/calibrations.json'))
for (const inputPath of calibrationInputs) {
  const packageName = inputPath.split('/').at(-3)
  const path = titleDirectory(`${packageName}_Divergence_calibrations`, 'content/topics/research')
  defineInput(inputPath, slot(path, 'calibrations', json(inputPath)))
}

let writtenFiles = 0, writtenNodes = 0, readerLocales = 0
for (const [path, entry] of [...content].sort(([left], [right]) => left.localeCompare(right))) {
  if (!Object.keys(entry.records).length) {
    writtenFiles += Number(writeYaml(`${path}/index.yaml`, { schemaVersion: 1, ...entry.index }))
    continue
  }
  writtenFiles += writeNodeContent(path, entry.index, entry.records)
  writtenNodes++
  readerLocales += Number(readFileSync(`${path}/page.zh.md`, 'utf8').includes('<!-- evo:text ')) + Number(readFileSync(`${path}/page.en.md`, 'utf8').includes('<!-- evo:text '))
  if (writtenNodes % 5000 === 0) console.log(`Migrated ${writtenNodes} content directories`)
}
capture('data/references.json')
writeUtf8('data/references.json', jsonText(referenceCatalogue.records))
const projectionMap = {
  schemaVersion: 1,
  classification: { authority: 'Catalogue of Life', release: catalogueProfiles.releaseAlias },
  authoringIdentity: 'Tree-relative paths; no newly minted taxon IDs',
  purpose: 'Legacy runtime projection compatibility and original import ordering, not a second taxonomy',
  generatedInputs,
  dossierShardIndex: { path: 'data/knowledge/catalogue-dossier-shards.json', metadata: dossierIndex },
  navigationAliases: atlasMappings,
  profileAliases: [...atlasProfilePaths].map(([runtimeKey, path]) => ({ runtimeKey, path })),
  topicAliases: [...eventPaths, ...storyPaths].map(([runtimeKey, path]) => ({ runtimeKey, path })),
}
writeYaml(CONTENT_PROJECTION_MAP, projectionMap)
const receipt = {
  schemaVersion: 1,
  classification: 'COL26.8',
  directoryRule: 'Recorded scientific name; whitespace becomes underscores; Windows-forbidden characters are percent-escaped',
  migrated: { catalogueProfiles: catalogueProfiles.records.length, catalogueDossiers: dossierSources.reduce((sum, source) => sum + (source.records ?? source.data.records).length, 0), packageProfiles: profileByNode.size, navigationNodes: atlasNodes.length, claims: claims.length, events: eventPaths.size, stories: storyPaths.size, contentDirectories: writtenNodes, treeDirectories: colPaths.size, filesWritten: writtenFiles, authoredReaderLocales: readerLocales, referenceRecords: referenceCatalogue.records.length, sharedResearchInputs: auxiliaryInputs.length + calibrationInputs.length },
  nonColPlacements: atlasMappings.filter(mapping => !mapping.placement.includes('COL') && !mapping.placement.includes('storage-anchor')),
  independentData: ['data/sources', 'data/fossils', 'data/paleogeography', 'data/paleotopography', 'data/places.json', 'data/time-scale.json', 'data/media', 'data/media.json'],
  originalInputs: migrationInputs,
  sourceMetadataEnrichment: 'Not performed; missing and truncated author metadata remains explicitly unresolved',
  manualTestsAndValidators: 'Not run',
}
writeUtf8('docs/content-migration-receipt.json', jsonText(receipt))
console.log(JSON.stringify(receipt.migrated, null, 2))
