import fs from 'node:fs'

const names = ['author-amphibia-fossil-readers', 'author-amphibio-source-readers', 'author-amphibia-itis-distribution-readers', 'author-caecilian-trait-readers', 'author-tadpole-trait-readers', 'author-amphibia-morphology-readers', 'author-amphibia-primary-reproduction-readers', 'author-pelobates-vespertinus-reader']
for (const name of names) {
  const file = `scripts/${name}.mjs`
  let source = fs.readFileSync(file, 'utf8')
  const importLine = "import { amphibianReferenceForSchema } from './amphibia-source-reference.mjs'\n"
  if (!source.includes(importLine)) source = importLine + source
  source = source.replace(/JSON\.stringify\((reference|ref), null, 2\)/g, (_, value) => `JSON.stringify(amphibianReferenceForSchema(${value}), null, 2)`)
  source = source.replace(/JSON\.stringify\((\{ id: (?:referenceId|work\.id),[^\n]*?importedSourceMetadata: \[(?:sourceRecord|source)\] \}), null, 2\)/g, (_, value) => `JSON.stringify(amphibianReferenceForSchema(${value}), null, 2)`)
  fs.writeFileSync(file, source)
}
console.log(JSON.stringify({ updatedReferenceProducers: names.length, referencesRewritten: false, testsRun: false }))
