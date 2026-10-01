import { readFileSync } from 'node:fs'
import { parse, stringify } from 'yaml'
import { canonicalizeContentLinks, createContentLinkMaps, restoreRuntimeContentLinks } from './content-path-links.mjs'
import { CONTENT_PROJECTION_MAP, jsonText, readYaml, semanticJson, writeUtf8, writeYaml } from './tree-path-content.mjs'

const map = readYaml(CONTENT_PROJECTION_MAP)
if (map.canonicalLinks === 'tree-paths') throw new Error('Path links are already canonical.')
const files = new Map(), pointers = []
function collect(value) {
  if (!value || typeof value !== 'object') return
  if (value.contentRecord) {
    pointers.push(value.contentRecord)
    const path = value.contentRecord.path
    if (!files.has(path)) {
      const text = readFileSync(`${path}/evidence.md`, 'utf8')
      const match = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(text)
      if (!match) throw new Error(`Missing evidence front matter: ${path}`)
      files.set(path, { text, match, metadata: parse(match[1], { uniqueKeys: true, maxAliasCount: 0 }) })
    }
  }
  for (const child of Object.values(value)) collect(child)
}
collect(map.generatedInputs)
map.recordAliases = []
for (const pointer of pointers) {
  const record = files.get(pointer.path).metadata.records[pointer.key]
  const value = pointer.index === undefined ? record : record[pointer.index]
  if (value && typeof value === 'object' && !Array.isArray(value) && typeof value.id === 'string' && /^(claim:|range:|editorial:)/.test(value.id)) {
    map.recordAliases.push({ runtimeKey: value.id, path: `${pointer.path}/evidence.md#/records/${pointer.key}${pointer.index === undefined ? '' : `/${pointer.index}`}` })
    pointer.inject = { ...(pointer.inject ?? {}), id: value.id }
    pointer.originalFields ??= Object.keys(value)
    delete value.id
  }
}
const maps = createContentLinkMaps(map)
let modified = 0
for (const [path, file] of files) {
  const next = canonicalizeContentLinks(file.metadata, maps)
  const restored = restoreRuntimeContentLinks(next, maps)
  if (semanticJson(restored) !== semanticJson(file.metadata)) throw new Error(`Path conversion changed data in ${path}`)
  const text = `---\n${stringify(next, { lineWidth: 0, aliasDuplicateObjects: false })}---\n${file.text.slice(file.match[0].length)}`
  modified += Number(writeUtf8(`${path}/evidence.md`, text))
}
map.canonicalLinks = 'tree-paths'
writeYaml(CONTENT_PROJECTION_MAP, map)
const receipt = JSON.parse(readFileSync('docs/content-migration-receipt.json', 'utf8'))
receipt.pathLinks = { canonicalIdentity: 'Tree paths', normalizedDocuments: modified, compatibilityRecordAliases: map.recordAliases.length, compatibilityTaxonAliases: map.navigationAliases.length, purpose: 'Existing front-end/API keys are reconstructed only in generated projections.' }
writeUtf8('docs/content-migration-receipt.json', jsonText(receipt))
console.log(`Replaced classification and claim associations with paths in ${modified} canonical documents.`)
