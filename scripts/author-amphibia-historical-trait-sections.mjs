import fs from 'node:fs'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'
const base = 'docs/amphibia-content'
const coverage = JSON.parse(fs.readFileSync(`${base}/species-coverage.json`))
const current = new Map(coverage.map(x => [x.colId, x]))
const sourceCoverage = JSON.parse(fs.readFileSync(`${base}/amphibio-source-coverage.json`))
const ledger = []
for (const sourceEntry of sourceCoverage) {
  if (!sourceEntry.biologicalSections) continue
  const sourceNode = readNodeContent(sourceEntry.readerPath)
  const sourceRecord = sourceNode.records['amphibio-source-reader']
  const biological = sourceRecord.sections.filter(x => x.topic !== 'overview' && x.topic !== 'taxonomy')
  if (!biological.length) continue
  for (const colId of sourceEntry.candidateColIds) {
    const entry = current.get(colId)
    if (!entry) throw new Error(`Missing current catalogue candidate ${colId}`)
    const index = fs.readFileSync(`${entry.path}/index.yaml`)
    const node = readNodeContent(entry.path), profile = node.records['catalogue-profile']
    const before = semanticJson(node.records)
    profile.sections = profile.sections.filter(x => x.sourceReaderKind !== 'historical-amphibio-traits')
    for (const section of biological) profile.sections.push({ ...structuredClone(section), sourceReaderKind: 'historical-amphibio-traits', sourceConceptStatus: 'unresolved-current-equivalence', title: { en: `${section.title.en} — AmphiBIO source`, zh: `${section.title.zh}——AmphiBIO 来源` }, text: { en: `Historical source concept: ${sourceRecord.scientificName}, under the compilation's Frost 2011 classification. Equivalence with the current species concept remains unverified. ${section.text.en}`, zh: `历史来源概念：${sourceRecord.scientificName}，采用汇编的 Frost 2011 分类；与当前物种概念的等同性仍未核定。${section.text.zh}` } })
    for (const binding of sourceRecord.sources.referenceBindings) if (!profile.sources.referenceBindings.some(x => x.referenceId === binding.referenceId && x.metadataVariant === binding.metadataVariant)) profile.sources.referenceBindings.push(structuredClone(binding))
    profile.historicalTraitSource = { path: sourceEntry.readerPath, sourceRowId: sourceEntry.sourceRowId, identityStatus: 'same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved', bibliographyAlignment: sourceEntry.bibliographyAlignment, readerScope: 'The paragraphs explicitly describe the historical deposited source concept. They are not generalized to every member of the current species.' }
    profile.limitations = { en: 'Taxonomic reader with explicitly historical trait material. Current concept equivalence, underlying primary works and remaining biological facets require review. This is not a complete species dossier and is.', zh: '分类读本包含明确限定为历史来源概念的性状材料；当前概念等同性、底层原始文献及其余生物学主题仍需核对。本页不是完整物种档案。' }
    if (semanticJson(node.records) !== before) {
      writeNodeContent(entry.path, node.index, node.records)
      fs.writeFileSync(`${entry.path}/index.yaml`, index)
      for (const locale of ['en', 'zh']) {
        const file = `${entry.path}/page.${locale}.md`
        fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
      }
    }
    entry.historicalBiologicalSections = biological.length
    entry.historicalSourceConceptStatus = 'unresolved-current-equivalence'
    entry.biologicalReaderComplete = false
    ledger.push({ colId, path: entry.path, historicalSourcePath: sourceEntry.readerPath, sourceRowId: sourceEntry.sourceRowId, biologicalSections: biological.length, currentConceptEquivalenceCertified: false })
  }
}
fs.writeFileSync(`${base}/species-coverage.json`, JSON.stringify(coverage, null, 2) + '\n')
fs.writeFileSync(`${base}/historical-trait-section-coverage.json`, JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify({ currentReadersWithHistoricalBiologicalSections: ledger.length, historicalBiologicalSections: ledger.reduce((n, x) => n + x.biologicalSections, 0), completeBiologicalSpecies: 0 }))
