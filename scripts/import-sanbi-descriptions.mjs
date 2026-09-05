import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { brotliCompressSync, constants } from 'node:zlib'
import { decodeWfoSource } from './wfo-source-codec.mjs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// Explicit offline import of the reviewed regional source export; normal builds
// read its committed projection and never fetch a moving upstream archive.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const input = process.argv[2]
if (!input) throw new Error('Usage: node scripts/import-sanbi-descriptions.mjs <import-candidate.jsonl>')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const bytes = readFileSync(input)
const expected = '6253ac740b9ba4e6a53f520460c63acf44dcac2fa2c454029d945ea096b92a32'
if (sha256(bytes) !== expected) throw new Error('Input differs from reviewed SANBI candidate')
const crosswalk = JSON.parse(decodeWfoSource(readFileSync(resolve(root, 'data/sources/wfo-plant-crosswalk-col26.8.json.br'))))
const accepted = new Map(crosswalk.colRecords.filter(row => row.status === 'accepted').map(row => [row.colId, row]))
const species = new Map()
for (const row of bytes.toString('utf8').trim().split(/\r?\n/).map(line => JSON.parse(line))) {
  const match = accepted.get(row.colId)
  if (!match || match.wfoId !== row.wfoId) throw new Error(`Changed crosswalk for ${row.colId}`)
  if (!species.has(row.colId)) species.set(row.colId, { colId: row.colId, wfoId: row.wfoId, packageId: match.packageId, descriptions: [] })
  species.get(row.colId).descriptions.push({ type: row.type, text: row.description, sourceId: row.source, citation: row.citation, rowNumber: row.rowNumber })
}
const records = [...species.values()].sort((a, b) => a.colId < b.colId ? -1 : a.colId > b.colId ? 1 : 0)
const output = resolve(root, 'data/sources/sanbi-descriptions.jsonl.br')
const decoded = Buffer.from(records.map(row => JSON.stringify(row)).join('\n') + '\n')
const compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 5 } })
mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, compressed)
const ledger = {
  provider: 'South African National Biodiversity Institute (SANBI)',
  title: 'e-Flora of South Africa', sourceVersion: '1.36', issued: '2022-06-06', retrievedAt: '2026-09-05',
  license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  sourceUrl: 'https://files.worldfloraonline.org/Files/South_Africa/dwca-flora_descriptions.zip',
  archiveSha256: '2f9b6784d8bdd4b427f10bddec14f41eb42e3cac0e26c5225b7b17eff3064465',
  inputSha256: expected, output: 'data/sources/sanbi-descriptions.jsonl.br', outputBytes: compressed.length, outputSha256: sha256(compressed),
  storageEncoding: 'br', decodedBytes: decoded.length, decodedSha256: sha256(decoded),
  species: records.length, descriptions: records.reduce((n, row) => n + row.descriptions.length, 0),
  method: 'Exact unambiguous WFO-to-accepted-COL crosswalk. Description citations joined by (core ID, source identifier). Only exact duplicate records removed; original text retained.',
  limitations: ['Regional South African source, not a global census or distribution boundary.', 'A unique identifier link does not prove species-concept equivalence across source dates.', 'Source descriptions are not newly authored Evo claims or expert-reviewed dossiers.', 'No missing biological traits, translations, ranges or fossils are inferred.'],
}
writeFileSync(resolve(root, 'data/sources/sanbi-descriptions-import-ledger.json'), JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify({ species: ledger.species, descriptions: ledger.descriptions, bytes: compressed.length, sha256: ledger.outputSha256 }))
