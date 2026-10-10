// Run only after the bulk authoring phase has finished. This edits compatibility
// wiring; the ordinary content builder generates the actual projections.
import fs from 'node:fs'
import { readYaml, readNodeContent, writeYaml } from './tree-path-content.mjs'
const base = 'docs/amphibia-content'
const progress = JSON.parse(fs.readFileSync(`${base}/progress.json`))
const collection = JSON.parse(fs.readFileSync(`${base}/collection-phase-progress.json`))
const placeholders = JSON.parse(fs.readFileSync(`${base}/collection-placeholder-coverage.json`))
const collectionReady = collection.referenceIndexPhaseComplete && placeholders.coveredNodes === placeholders.totalNodes && !placeholders.failures.length
if (!progress.contentPhaseComplete && !collectionReady) throw new Error('Amphibia reference-index/placeholder phase remains incomplete; projection wiring is deferred')
const map = readYaml('content/projection-map.yaml')
const profileInput = map.generatedInputs['data/knowledge/catalogue-profiles.json.gz'] ? 'data/knowledge/catalogue-profiles.json.gz' : 'data/knowledge/catalogue-profiles.json'
const records = map.generatedInputs[profileInput].template.records
const existingIds = new Set(records.map(x => x.contentRecord?.inject?.colId).filter(Boolean))
const pending = JSON.parse(fs.readFileSync(`${base}/pending-profile-mappings.json`))
const species = JSON.parse(fs.readFileSync(`${base}/species-coverage.json`))
const all = new Map([...pending, ...species].map(x => [x.colId, x]))
const identityReceipt = fs.existsSync(`${base}/profile-identity-reconciliation.json`) ? JSON.parse(fs.readFileSync(`${base}/profile-identity-reconciliation.json`)) : null
const excludedProfileIds = new Set(identityReceipt?.excludedFromAcceptedProfileProjection.map(x => x.colId) ?? [])
for (const [colId, entry] of all) {
  if (excludedProfileIds.has(colId)) continue
  if (existingIds.has(colId)) {
    const profile = readNodeContent(entry.path).records['catalogue-profile']
    const mapping = records.find(x => x.contentRecord?.inject?.colId === colId)?.contentRecord
    if (profile?.readingLinks && mapping?.originalFields && !mapping.originalFields.includes('readingLinks')) mapping.originalFields.push('readingLinks')
    continue
  }
  if (!readNodeContent(entry.path).records['catalogue-profile']) throw new Error(`Missing canonical catalogue profile ${entry.path}`)
  const profile = readNodeContent(entry.path).records['catalogue-profile']
  records.push({ contentRecord: { path: entry.path, key: 'catalogue-profile', inject: { colId }, originalFields: ['colId', 'scientificName', 'rank', 'sourceDatasetId', 'name', 'checkedAt', 'sections', 'sources', 'limitations', ...(profile.readingLinks ? ['readingLinks'] : [])] } })
  existingIds.add(colId)
}
const sourceReaders = [
  ['amphibio-source-coverage', 'amphibio', 'amphibio-source-reader'],
  ['caecilian-traits-coverage', 'caecilian-traits', 'caecilian-traits-reader'],
  ['tadpole-traits-coverage', 'tadpole-traits', 'tadpole-traits-reader'],
  ['morphology-coverage', 'morphology', 'amphibian-morphology-reader'],
  ['amphitherm-source-coverage', 'amphitherm', 'amphitherm-source-reader'],
  ['fossil-coverage', 'pbdb-fossils', 'pbdb-fossil-reader'],
  ['fossil-group-reader-coverage', 'pbdb-fossil-groups', 'pbdb-fossil-reader']
]
for (const [file, name, key] of sourceReaders) {
  const ledger = JSON.parse(fs.readFileSync(`${base}/${file}.json`))
  map.generatedInputs[`data/research/amphibia/${name}.source.json`] = { encoding: 'json', template: { schemaVersion: 1, scope: 'Source-concept readers; unresolved current-species equivalence; independent of App delivery', records: ledger.map(x => ({ contentRecord: { path: x.path ?? x.readerPath, key } })) } }
}
map.generatedInputs['data/research/amphibia/collection-placeholders.source.json'] = { encoding: 'json', template: { schemaVersion: 1, scope: 'Reference-index discovery and bilingual placeholders; biological synthesis is deferred', records: placeholders.rows.map(x => ({ contentRecord: { path: x.path, key: 'amphibia-collection-placeholder' } })) } }
if (identityReceipt?.excludedFromAcceptedProfileProjection.length) map.generatedInputs['data/research/amphibia/provisional-profiles.source.json'] = { encoding: 'json', template: { schemaVersion: 1, scope: 'Pinned source concepts outside the accepted-profile runtime contract; canonical readers retained, current accepted status not asserted', records: identityReceipt.excludedFromAcceptedProfileProjection.map(x => ({ contentRecord: { path: x.path, key: 'catalogue-profile', inject: { colId: x.colId, sourceConceptStatus: x.status } } })) } }
writeYaml('content/projection-map.yaml', map)
fs.writeFileSync(`${base}/projection-wiring-receipt.json`, JSON.stringify({ catalogueMappings: all.size, independentSourceReaderInputs: sourceReaders.map(x => x[1]), placeholderMappings: placeholders.totalNodes, collectionReady, biologicalSynthesisComplete: false, newTaxonIdsMinted: 0, projectionsBuilt: false }, null, 2) + '\n')
console.log('Amphibia canonical mappings are wired; run the content builder for projections')
