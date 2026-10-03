import fs from 'node:fs'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'

const base = 'docs/amphibia-content'
const coverage = JSON.parse(fs.readFileSync(`${base}/species-coverage.json`))
const current = new Map(coverage.map(entry => [entry.colId, entry]))
const datasets = [
  { ledger: 'caecilian-traits', key: 'caecilian-traits-reader', label: 'CaecilianTraits' },
  { ledger: 'tadpole-traits', key: 'tadpole-traits-reader', label: 'TadpoleTraits' },
  { ledger: 'morphology', key: 'amphibian-morphology-reader', label: 'Amphibian morphology' },
  { ledger: 'amphitherm-source', key: 'amphitherm-source-reader', label: 'AmphiTherm' },
]
const materials = new Map()
for (const dataset of datasets) {
  const entries = JSON.parse(fs.readFileSync(`${base}/${dataset.ledger}-coverage.json`))
  for (const sourceEntry of entries) {
    if (!sourceEntry.candidateColIds.length) continue
    const sourceRecord = readNodeContent(sourceEntry.path).records[dataset.key]
    const sections = sourceRecord.sections.filter(section => !['overview', 'taxonomy'].includes(section.topic))
    if (!sections.length) continue
    for (const colId of sourceEntry.candidateColIds) {
      if (!current.has(colId)) throw new Error(`Missing current candidate ${colId}`)
      if (!materials.has(colId)) materials.set(colId, [])
      materials.get(colId).push({ dataset, sourceEntry, sourceRecord, sections })
    }
  }
}
const receipt = []
for (const [colId, inputs] of materials) {
  const entry = current.get(colId)
  const node = readNodeContent(entry.path)
  const profile = node.records['catalogue-profile']
  const before = semanticJson(node.records)
  const index = fs.readFileSync(`${entry.path}/index.yaml`)
  profile.sections = profile.sections.filter(section => section.sourceReaderKind !== 'additional-deposited-traits')
  profile.additionalTraitSources = []
  for (const { dataset, sourceEntry, sourceRecord, sections } of inputs) {
    for (const section of sections) profile.sections.push({
      ...structuredClone(section),
      sourceReaderKind: 'additional-deposited-traits',
      sourceConceptStatus: 'unresolved-current-equivalence',
      title: { en: `${section.title.en} — ${dataset.label} source`, zh: `${section.title.zh}——${dataset.label} 来源` },
      text: {
        en: `Deposited source concept: ${sourceRecord.scientificName}, in ${dataset.label}. Matching names provide a reading lead; equivalence with this current species concept remains unverified. ${section.text.en}`,
        zh: `存档来源概念：${dataset.label} 中的 ${sourceRecord.scientificName}。同名匹配提供阅读线索；与此当前物种概念的等同性仍未核定。${section.text.zh}`,
      },
    })
    for (const binding of sourceRecord.sources.referenceBindings) if (!profile.sources.referenceBindings.some(existing => existing.referenceId === binding.referenceId && existing.metadataVariant === binding.metadataVariant)) profile.sources.referenceBindings.push(structuredClone(binding))
    profile.additionalTraitSources.push({ kind: dataset.key, path: sourceEntry.path, scientificName: sourceRecord.scientificName, identityStatus: 'same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved', biologicalSections: sections.length })
  }
  if (semanticJson(node.records) !== before) {
    writeNodeContent(entry.path, node.index, node.records)
    fs.writeFileSync(`${entry.path}/index.yaml`, index)
    for (const locale of ['en', 'zh']) {
      const file = `${entry.path}/page.${locale}.md`
      fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
    }
  }
  entry.additionalDepositedBiologicalSections = inputs.reduce((count, input) => count + input.sections.length, 0)
  entry.biologicalReaderComplete = false
  receipt.push({ colId, path: entry.path, sources: profile.additionalTraitSources, biologicalSections: entry.additionalDepositedBiologicalSections, currentConceptEquivalenceCertified: false })
}
fs.writeFileSync(`${base}/species-coverage.json`, JSON.stringify(coverage, null, 2) + '\n')
fs.writeFileSync(`${base}/additional-trait-section-coverage.json`, JSON.stringify(receipt, null, 2) + '\n')
console.log(JSON.stringify({ currentReadersWithAdditionalDepositedSections: receipt.length, additionalBiologicalSections: receipt.reduce((count, entry) => count + entry.biologicalSections, 0), completeBiologicalSpecies: 0, testsRun: false }))
