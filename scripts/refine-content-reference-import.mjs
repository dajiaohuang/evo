import { readFileSync } from 'node:fs'
import { parse, stringify } from 'yaml'
import { attachContentReferences, ContentReferenceCatalogue } from './content-references.mjs'
import { CONTENT_PROJECTION_MAP, jsonText, readYaml, semanticJson, writeUtf8 } from './tree-path-content.mjs'

// Finish the one-time import before normal authoring begins. Sources are reconstructed
// from the saved bibliography and rebound without changing page or evidence prose.
const references = JSON.parse(readFileSync('data/references.json', 'utf8'))
const originals = JSON.parse(readFileSync('.git/content-migration/original-inputs/data/references.json', 'utf8'))
const catalogue = new ContentReferenceCatalogue(originals)
const byId = new Map(references.map(reference => [reference.id, reference]))
const map = readYaml(CONTENT_PROJECTION_MAP)
const paths = new Set()
function collect(value) {
  if (!value || typeof value !== 'object') return
  if (value.contentRecord?.path) paths.add(value.contentRecord.path)
  for (const child of Object.values(value)) collect(child)
}
collect(map.generatedInputs)
const updates = []
let bindings = 0
function rewrite(value) {
  if (Array.isArray(value)) return value.map(rewrite)
  if (!value || typeof value !== 'object') return value
  if (Array.isArray(value.referenceBindings) && Object.keys(value).length === 1) {
    return { referenceBindings: value.referenceBindings.map(binding => {
      const metadata = byId.get(binding.referenceId)?.importedSourceMetadata?.[binding.metadataVariant]
      if (!metadata) throw new Error(`Unresolved source metadata: ${binding.referenceId}`)
      const source = attachContentReferences({ id: binding.sourceKey, ...metadata, ...binding.usage }, byId)
      const revised = catalogue.bind(source)
      const restored = attachContentReferences({ id: revised.sourceKey, ...catalogue.byId.get(revised.referenceId).importedSourceMetadata[revised.metadataVariant], ...revised.usage }, catalogue.byId)
      if (semanticJson(restored) !== semanticJson(source)) throw new Error(`Reference import changed original source fields: ${binding.referenceId}`)
      bindings++
      return { ...revised, originalFields: binding.originalFields }
    }) }
  }
  return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, rewrite(child)]))
}
let done = 0
for (const path of paths) {
  const file = `${path}/evidence.md`
  const text = readFileSync(file, 'utf8')
  const match = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(text)
  if (!match) throw new Error(`Missing evidence front matter: ${file}`)
  const metadata = parse(match[1], { uniqueKeys: true, maxAliasCount: 0 })
  const revised = rewrite(metadata)
  const next = `---\n${stringify(revised, { lineWidth: 0, aliasDuplicateObjects: false })}---\n${text.slice(match[0].length)}`
  if (next !== text) updates.push([file, next])
  done++
  if (done % 5000 === 0) console.log(`Consolidated sources in ${done} content directories`)
}
// Publish the bibliography before the bindings. Old imported IDs are retained as
// temporary aliases until every updated evidence file has been written.
const complete = [...catalogue.records, ...references.filter(reference => !catalogue.byId.has(reference.id))]
writeUtf8('data/references.json', jsonText(complete))
for (const [path, text] of updates) writeUtf8(path, text)
writeUtf8('data/references.json', jsonText(catalogue.records))
const receipt = JSON.parse(readFileSync('docs/content-migration-receipt.json', 'utf8'))
receipt.migrated.referenceRecords = catalogue.records.length
receipt.referenceConsolidation = { originalSharedReferences: originals.length, importedSourceBindings: bindings, canonicalReferenceRecords: catalogue.records.length, policy: 'Database version is shared; individual taxon URLs, archive hashes and record locators remain in evidence usages. DOI suffixes containing explicit archive/record annotations are not DOI identifiers.' }
writeUtf8('docs/content-migration-receipt.json', jsonText(receipt))
console.log(`Consolidated ${references.length} provisional references into ${catalogue.records.length} shared records; preserved ${bindings} source usages.`)
