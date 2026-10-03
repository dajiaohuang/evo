import fs from 'node:fs'
import { amphibianReferenceForSchema, topLevelReferenceSpans } from './amphibia-source-reference.mjs'
import { semanticJson } from './tree-path-content.mjs'
const ids = new Set([
  ...JSON.parse(fs.readFileSync('docs/amphibia-content/primary-reader-authoring-input.json')).map(entry => entry.referenceId),
  'ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23', 'ref-f1e3d50c-c9eb-48f1-8ba8-098589af8953',
  'ref-6db7bceb-2df2-46ef-90e7-a43ed817725b', 'ref-49e06cbd-4c4a-4a7e-9b4c-07e576ee72c8',
  'ref-17b8da76-8a56-4930-9b21-125661453de0', 'ref-e5d27423-2f5f-44dd-a167-538d5a5e4e0d',
  'ref-fd9084a2-752b-4a3e-b904-e62d665705df', 'ref-e3c15d28-03f7-45cf-87de-b028f5032267',
  'ref-506a9ed9-29b8-4e1b-a0b9-c4f72db13408', 'ref-ddf547da-64dd-4958-95d1-89bcf87150f0',
  'ref-6778d646-8dca-4e63-a5b2-9983d8f20715',
  'ref-a9cf3397-9b36-4f89-8a88-a16bfcb71030',
  'ref-b166b4d8-6e5a-4441-9e79-0b1afb15e5ba',
  'ref-d4c49f33-d905-46a0-8a88-cff8d472232d',
  'ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d',
  'ref-d59976ab-8987-4cb1-abaa-41dbe4459a67',
  'ref-2bb2f382-d56e-4657-8b03-ec5075630a2a',
  'ref-88776e20-0bbb-4e63-a26d-bbdfe68c0433',
  'ref-43a3957d-31b8-4c37-b2ad-03b1575649c2',
  'ref-77242ef2-5f3f-44e2-a734-1a0b1708ab17',
  'ref-39b9d96a-574c-4a33-8437-c4c4e1c34965',
  'ref-8bc63bc6-3d4f-4f21-9c6e-c13d078582b4',
  'ref-417ea5f9-2113-4d23-8c3c-402c57423f49',
])
const file = 'data/references.json'
let text = fs.readFileSync(file, 'utf8')
const owned = topLevelReferenceSpans(text).filter(x => ids.has(x.reference.id))
if (owned.length !== ids.size) throw new Error(`Expected ${ids.size} owned citations; found ${owned.length}`)
const receipt = []
for (const span of owned.reverse()) {
  const normalized = amphibianReferenceForSchema(span.reference)
  if (semanticJson(normalized) === semanticJson(span.reference)) continue
  text = text.slice(0, span.start) + JSON.stringify(normalized, null, 2) + text.slice(span.end)
  receipt.push({ referenceId: span.reference.id, sourceRole: normalized.sourceRole, fitnessFor: normalized.fitnessFor, authorStatus: normalized.authorsStatus, metadataAssignment: normalized.metadataAssignment, originalSourceVariantCount: normalized.importedSourceMetadata.length, rightsPreservedInSourceMetadata: true })
}
fs.writeFileSync(file, text)
fs.writeFileSync('docs/amphibia-content/reference-authoring-receipt.json', JSON.stringify({ ownedReferences: ids.size, changedReferences: receipt, inheritedReferenceObjectsModified: 0, testsRun: false }, null, 2) + '\n')
console.log(JSON.stringify({ ownedReferences: ids.size, normalizedReferences: receipt.length, inheritedReferenceObjectsModified: 0 }))
