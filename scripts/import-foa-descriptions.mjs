import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { gzipSync } from 'node:zlib'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const input = process.argv[2]
if (!input) throw new Error('Usage: node scripts/import-foa-descriptions.mjs <reviewed-candidate.jsonl>')
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const bytes = readFileSync(input)
const expected = '70127621b94e50cef7561ad66a71e9376343842d7317e5a658b4e2e48a79a9e9'
if (hash(bytes) !== expected) throw new Error('Changed reviewed Flora of Australia input')
// The pinned input uses escaped HTML paragraphs; output is plain React text.
export function plainText(value) {
  return value.replaceAll('&lt;', '<').replaceAll('&gt;', '>')
    .replace(/<\/(?:p|div)>|<br\s*\/?\s*>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    // Nested source entities must be decoded after stripping markup so a
    // measurement comparison is not mistaken for an HTML tag.
    .replace(/&(?:amp;)+/g, '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>')
    .split('\n').map(line => line.trim()).filter(Boolean).join('\n\n')
}
const species = new Map()
for (const row of bytes.toString('utf8').trim().split(/\r?\n/).map(JSON.parse)) {
  if (!species.has(row.colId)) species.set(row.colId, { colId: row.colId, wfoId: row.wfoId, scientificName: row.scientificName, descriptions: [] })
  species.get(row.colId).descriptions.push({ type: row.type, text: plainText(row.sourceMarkup),
    language: row.language, citation: plainText(row.citationMarkup), sourceUrl: row.sourceUrl,
    sourceId: row.sourceId, rowNumber: row.rowNumber, rightsHolder: row.rightsHolder,
    rights: row.rights, license: row.license })
}
const records = [...species.values()].sort((a, b) => a.colId < b.colId ? -1 : a.colId > b.colId ? 1 : 0)
const compressed = gzipSync(records.map(JSON.stringify).join('\n') + '\n', { level: 9 })
compressed[9] = 255
const output = 'data/sources/foa-descriptions.jsonl.gz'
writeFileSync(resolve(root, output), compressed)
const ledger = {
  provider: 'Australian Biological Resources Study', title: 'Flora of Australia',
  retrievedAt: '2026-09-05', sourceVersion: '2020-12-03 archive',
  license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  sourceUrl: 'https://files.worldfloraonline.org/files/Australia/FoA/WFO_FoA_2020_12_03.zip',
  archiveSha256: '3e90e2f0b3cc34dc3fa0340afc51de3c0d3643bd3929acaf626ee294491e9dd2',
  inputSha256: expected, output, outputBytes: compressed.length, outputSha256: hash(compressed),
  species: records.length, descriptions: records.reduce((sum, row) => sum + row.descriptions.length, 0),
  limitations: ['Regional historical flora; not global species dossiers or current conservation assessments.',
    'Unique WFO/COL name links do not prove identical species concepts across dates.',
    'Markup removed for plain-text display; original words and measurement qualifiers retained.'],
}
writeFileSync(resolve(root, 'data/sources/foa-descriptions-import-ledger.json'), JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify(ledger))
