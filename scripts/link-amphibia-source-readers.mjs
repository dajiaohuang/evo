import fs from 'node:fs'
import path from 'node:path'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'
const base = 'docs/amphibia-content'
const coverage = JSON.parse(fs.readFileSync(`${base}/species-coverage.json`))
const sources = [
  ['amphibio-source-coverage', 'AmphiBIO v1', 'amphibio-source-reader'],
  ['caecilian-traits-coverage', 'CaecilianTraits v4', 'caecilian-traits-reader'],
  ['tadpole-traits-coverage', 'TadpoleTraits v4', 'tadpole-traits-reader'],
  ['morphology-coverage', 'Amphibian morphology v3', 'amphibian-morphology-reader'],
  ['amphitherm-source-coverage', 'AmphiTherm curated snapshot', 'amphitherm-source-reader']
]
const candidates = new Map()
const sourceKeyByFile = new Map(sources.map(([file, , key]) => [file, key]))
const referencesById = new Map(JSON.parse(fs.readFileSync('data/references.json')).map(x => [x.id, x]))
const currentTaxa = JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json'))
const currentByName = new Map(currentTaxa.map(x => [x.scientificName, x]))
for (const [file, label, key] of sources) for (const row of JSON.parse(fs.readFileSync(`${base}/${file}.json`))) {
  for (const colId of row.candidateColIds) {
    if (!candidates.has(colId)) candidates.set(colId, [])
    candidates.get(colId).push({ label, key, path: row.path ?? row.readerPath, sourceScientificName: row.scientificName })
  }
  // A historical family placement can differ without hiding the source reader.
  // This creates an explicitly unresolved reading lead, never concept equivalence.
  const current = currentByName.get(row.scientificName)
  const readerPath = row.path ?? row.readerPath
  const sourceOrder = file === 'caecilian-traits-coverage' ? 'Gymnophiona' : file === 'tadpole-traits-coverage' ? 'Anura' : ['Anura', 'Caudata', 'Gymnophiona'].find(x => readerPath.includes(`/${x}/`))
  if (current && !row.candidateColIds.includes(current.colId) && current.classification.some(x => x.rank === 'order' && x.scientificName === sourceOrder)) {
    if (!candidates.has(current.colId)) candidates.set(current.colId, [])
    candidates.get(current.colId).push({ label, key, path: readerPath, sourceScientificName: row.scientificName, matchKind: 'same-name-and-order-with-classification-difference; identity-unresolved' })
  }
}
const synonymFile = `${base}/synonym-source-leads.json`
if (fs.existsSync(synonymFile)) for (const lead of JSON.parse(fs.readFileSync(synonymFile)).leads) {
  const currentOrder = ['Anura', 'Caudata', 'Gymnophiona'].find(x => lead.currentPath.includes(`/Amphibia/${x}/`))
  for (const source of lead.candidateSourceReaders) {
    const sourceOrder = source.dataset === 'caecilian-traits-coverage' ? 'Gymnophiona' : source.dataset === 'tadpole-traits-coverage' ? 'Anura' : ['Anura', 'Caudata', 'Gymnophiona'].find(x => source.path.includes(`/${x}/`))
    if (currentOrder !== sourceOrder) continue
    if (!candidates.has(lead.colId)) candidates.set(lead.colId, [])
    const list = candidates.get(lead.colId)
    if (list.some(x => x.path === source.path)) continue
    list.push({ label: sources.find(x => x[0] === source.dataset)[1], key: sourceKeyByFile.get(source.dataset), path: source.path, sourceScientificName: lead.originalNameRow.fields.scientificName, matchKind: 'archived-ITIS-synonym-name-candidate', sourceSynonymLocator: lead.originalSynonymRow.locator })
  }
}
let linked = 0
for (const species of coverage) {
  const related = candidates.get(species.colId) ?? []
  species.sourceReaderCandidates = related
  if (!related.length) continue
  const indexBytes = fs.readFileSync(`${species.path}/index.yaml`)
  const node = readNodeContent(species.path)
  const before = semanticJson(node.records)
  const record = node.records['catalogue-profile']
  if (!record) throw new Error(`Missing current species profile ${species.path}`)
  record.sections = record.sections.filter(x => !x.sourceIds?.includes('source-reading-route'))
  const bindings = []
  const sourceUrls = new Map()
  for (const candidate of related) {
    const source = readNodeContent(candidate.path).records[candidate.key]
    const reference = referencesById.get(source.sources.referenceBindings[0].referenceId)
    sourceUrls.set(candidate.path, reference.importedSourceMetadata?.[0]?.datasetUrl ?? reference.url)
    for (const binding of source.sources.referenceBindings) if (!bindings.some(x => x.referenceId === binding.referenceId && x.metadataVariant === binding.metadataVariant)) bindings.push(binding)
  }
  for (const binding of bindings) if (!record.sources.referenceBindings.some(x => x.referenceId === binding.referenceId && x.metadataVariant === binding.metadataVariant)) record.sources.referenceBindings.push(binding)
  const list = related.map(x => `- [${x.label}: ${x.sourceScientificName}](${path.posix.relative(species.path, x.path)}/page.LOCALE.md)`)
  record.sections.push({ topic: 'overview', title: { en: 'Related source readers', zh: '相关来源读本' }, sourceIds: bindings.map(x => x.sourceKey), readingRouteKind: 'source-reading-route', text: { en: `The following deposited records were selected through recorded accepted names or archived ITIS synonym links within the same amphibian order. They are candidates for comparison; this link does not assign their biological claims to the current species concept. Historical splits, merges, source authorship and concept scope remain to be checked. Read the source scope, sex or life stage and original bibliography before using a trait.\n\n${list.join('\n').replaceAll('LOCALE', 'en')}`, zh: `以下存档记录依据所记接受名称或存档 ITIS 异名链接，在相同两栖动物目内选出，可供进一步比较；此链接不将其生物学结论归入当前物种概念。历史拆分、合并、来源命名作者和概念范围仍待核对。使用性状前，请查看来源范围、性别或发育阶段及原书目。\n\n${list.join('\n').replaceAll('LOCALE', 'zh')}` } })
  // Keep this authoring operation repeatable without changing inherited identity metadata.
  record.sections = record.sections.filter((x, i, a) => x.readingRouteKind !== 'source-reading-route' || i === a.findLastIndex(y => y.readingRouteKind === 'source-reading-route'))
  const route = record.sections.find(x => x.readingRouteKind === 'source-reading-route')
  route.title = { en: 'Related source records and datasets', zh: '相关来源记录与数据集' }
  route.readingLinks = related.map(x => ({ kind: 'source', url: sourceUrls.get(x.path), targetPath: x.path, label: { en: `${x.label} — original dataset`, zh: `${x.label} — 原始数据集` } }))
  route.readingLinks = [...new Map(route.readingLinks.map(x => [x.url, x])).values()]
  if (semanticJson(node.records) === before) { linked++; continue }
  writeNodeContent(species.path, node.index, node.records)
  fs.writeFileSync(`${species.path}/index.yaml`, indexBytes)
  for (const locale of ['en', 'zh']) {
    const file = `${species.path}/page.${locale}.md`
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
  }
  linked++
}
fs.writeFileSync(`${base}/species-coverage.json`, JSON.stringify(coverage, null, 2) + '\n')
const gaps = coverage.map(x => ({ colId: x.colId, path: x.path, sourceCoverage: x.sourceCoverage, distributionReaderStatus: x.distributionReaderStatus ?? 'no-source-distribution-row', candidateSources: (x.sourceReaderCandidates ?? []).map(y => y.label), missingWork: ['review-current-source-concept-equivalence', 'complete-species-specific-seven-facet-evidence', 'external-expert-review'], biologicalReaderComplete: false }))
fs.writeFileSync(`${base}/remaining-biological-work.json`, JSON.stringify(gaps, null, 2) + '\n')
console.log(JSON.stringify({ currentSpecies: coverage.length, linkedSpecies: linked, noTraitSourceCandidate: coverage.length - linked, completeBiologicalSpecies: 0 }))
