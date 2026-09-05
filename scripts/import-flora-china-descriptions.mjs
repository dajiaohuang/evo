import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const input = process.argv[2]
if (!input) throw new Error('Provide the pinned, reviewed Flora of China candidate JSONL')
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const source = readFileSync(input)
const expected = '2ecd4df59916b5b0073724f6b32ac04f5df9297e484d3975bacc34b55eda99a7'
if (hash(source) !== expected) throw new Error('Flora of China candidate changed')
const records = source.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
if (records.length !== 20049 || new Set(records.map(r => r.colId)).size !== 20049) throw new Error('Flora of China identity count changed')
if (records.some(r => !r.text || !r.citation || r.type !== 'general' || r.language !== 'en' || r.citationScope !== 'description-source')) throw new Error('Flora of China source contract changed')
const compressed = brotliCompressSync(source, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } })
if (!brotliDecompressSync(compressed).equals(source)) throw new Error('Source storage round-trip mismatch')
const output = 'data/sources/flora-china-descriptions.jsonl.br'
writeFileSync(resolve(root, output), compressed)
const ledger = {
  provider: 'Missouri Botanical Garden', title: 'Flora of China', retrievedAt: '2026-09-05', reviewedAt: '2026-09-06',
  sourceVersion: 'WFO Flora of China retained archive, 2026-09-05',
  sourceUrl: 'https://files.worldfloraonline.org/files/eFloras/Flora_Of_China/Flora_Of_China.zip',
  license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  archiveSha256: '4c0b89280efdcfd0ef8dc753cca5d63566ddf8c34542b0bb4a78cdce799b63a9',
  inputSha256: expected, output, outputBytes: compressed.length, outputSha256: hash(compressed),
  storageEncoding: 'br', decodedBytes: source.length, decodedSha256: expected,
  species: records.length, descriptions: records.length,
  limitations: ['Historical regional English source text, not a complete dossier or current inventory.', 'Links require an exact unique accepted species in the pinned WFO/COL crosswalk.', 'Citations join the source taxon ID and reference identifier; source record numbers are parsed records, not physical lines.', 'Markup is converted to readable text; subscript digits are retained. No figures or PDFs are copied.'],
}
writeFileSync(resolve(root, 'data/sources/flora-china-descriptions-import-ledger.json'), JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify(ledger))
