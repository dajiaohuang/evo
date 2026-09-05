import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { gzipSync } from 'node:zlib'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const input = process.argv[2]
if (!input) throw new Error('Usage: node scripts/import-plazi-descriptions.mjs <retained-intake-directory>')
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const inputs = {
  wittmackia: '4ea8ddb374fa2a1622f8baf9d3d99940bcecd85a6877e446ab2e462edbaa130a',
  mixed: 'dcf8f09cb0ef96055df932b89f79ee33ed8f68c3198f53c09324b241ac36e4fc',
  fish: '78dea6e79bcd40ae8528d73e431e5c39624bc64a67e50c70d7d4d5831fb98491',
  plant: '992bbf943121da325c517ea3a6fb733eed10aeb99e99f657f9c8e9b1d7d6d7df',
  syspira: '9a42abf9927f8e55c787a46edcae955e06a447c8ba55fc1ce4cca8774d9af623',
}
const species = new Map()
for (const [name, expected] of Object.entries(inputs)) {
  const bytes = readFileSync(resolve(input, `${name}-candidate.jsonl`))
  if (hash(bytes) !== expected) throw new Error(`Changed reviewed ${name} input`)
  for (const row of bytes.toString('utf8').trim().split(/\r?\n/).map(JSON.parse)) {
    if (!species.has(row.colId)) species.set(row.colId, { colId: row.colId, scientificName: row.scientificName, descriptions: [] })
    species.get(row.colId).descriptions.push({
      type: row.type, text: row.text, language: row.language, citation: row.citation,
      sourceAuthorship: row.sourceAuthorship, sourceLanguage: row.sourceLanguage,
      sourceScientificName: row.sourceScientificName, sourceColUsageId: row.sourceColUsageId,
      treatmentUrl: row.treatmentUrl, rowNumber: row.rowNumber,
      archiveSha256: row.archiveSha256, sourceArchive: row.sourceArchive,
      mappingBasis: row.mappingBasis ?? 'individually-reviewed-name-authorship-and-lineage',
      limitations: name === 'syspira'
        ? 'Publication sample and regional scope; diagnostic and descriptive wording differs for some S. tigrina palp traits. Original text is not silently reconciled.'
        : 'Publication specimen/sample scope. Original extracted text may contain typographic or encoding defects. Not a current conservation assessment.',
    })
  }
}
const records = [...species.values()].sort((a, b) => a.colId < b.colId ? -1 : a.colId > b.colId ? 1 : 0)
const compressed = gzipSync(records.map(JSON.stringify).join('\n') + '\n', { level: 9 })
compressed[9] = 255
const output = 'data/sources/plazi-descriptions.jsonl.gz'
writeFileSync(resolve(root, output), compressed)
const ledger = {
  provider: 'Plazi TreatmentBank', title: 'Selected original taxonomic descriptions',
  retrievedAt: '2026-09-05', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  sourceUrl: 'https://plazi.org/treatmentbank/treatment-data-access/', inputs,
  output, outputBytes: compressed.length, outputSha256: hash(compressed),
  species: records.length, descriptions: records.reduce((sum, row) => sum + row.descriptions.length, 0),
  limitations: ['Article-scoped extracted text, not global species dossiers.', 'Archive CC0 declarations do not license linked publication PDFs or images.', 'Author-variant mappings are individually reviewed bibliographic inferences; strict WFO crosswalk is unchanged.', 'Source wording, language and specimen qualifiers retained; no synthetic traits or current conservation status inferred.'],
}
writeFileSync(resolve(root, 'data/sources/plazi-descriptions-import-ledger.json'), JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify({ species: ledger.species, descriptions: ledger.descriptions, bytes: compressed.length, sha256: ledger.outputSha256 }))
