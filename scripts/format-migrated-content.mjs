import { readFileSync } from 'node:fs'
import { CONTENT_PROJECTION_MAP, jsonText, readNodeContent, readYaml, semanticJson, writeNodeContent, writeUtf8 } from './tree-path-content.mjs'

const map = readYaml(CONTENT_PROJECTION_MAP)
const paths = new Set()
function collect(value) {
  if (!value || typeof value !== 'object') return
  if (value.contentRecord?.path) paths.add(value.contentRecord.path)
  for (const child of Object.values(value)) collect(child)
}
collect(map.generatedInputs)
let files = 0, done = 0
for (const path of paths) {
  const node = readNodeContent(path)
  const original = semanticJson(node.records)
  files += writeNodeContent(path, node.index, node.records)
  // Serialization is part of the migration: a formatting change must be lossless.
  if (semanticJson(readNodeContent(path).records) !== original) throw new Error(`Markdown formatting changed data in ${path}`)
  done++
  if (done % 5000 === 0) console.log(`Formatted ${done} canonical content directories`)
}
const receipt = JSON.parse(readFileSync('docs/content-migration-receipt.json', 'utf8'))
receipt.markdownFormat = { readerCopy: 'Page Markdown includes section headings, narrative copy, ecology/traits and reader limitations. Evidence Markdown contains evidence, source usages and original excerpts.', formattingChangedFiles: files, semanticPreservation: 'Every formatted directory round-tripped during migration.' }
writeUtf8('docs/content-migration-receipt.json', jsonText(receipt))
console.log(`Formatted ${done} directories (${files} changed files), retaining all original records.`)
