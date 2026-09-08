import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { brotliCompressSync, brotliDecompressSync, constants } from 'node:zlib'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const input = process.argv[2]
if (!input) throw new Error('Provide the reviewed Brazilian Flora candidate JSONL path')
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const expected = '40bf88e3d74c5636b97dc1614e17e4e1244bf5d26a87e5f5d7c03613798f42aa'
const bytes = readFileSync(input)
if (hash(bytes) !== expected) throw new Error('Brazilian Flora candidate changed')
const crosswalkBytes = readFileSync(resolve(root, 'data/sources/wfo-plant-crosswalk-col26.8.json.br'))
const crosswalkDecoded = brotliDecompressSync(crosswalkBytes)
// Identity is pinned independently of a lossless build-time storage re-encoding.
if (hash(crosswalkDecoded) !== '980144add135db3fa709392552534e19e33bc45605a97f5bafeb4d239d1621af') throw new Error('Crosswalk content changed')
const crosswalk = JSON.parse(crosswalkDecoded)
const matches = new Map()
for (const row of crosswalk.colRecords) {
  if (!row.wfoId) continue
  if (!matches.has(row.wfoId)) matches.set(row.wfoId, [])
  matches.get(row.wfoId).push(row)
}
const species = new Map()
const types = {}, languages = {}
for (const line of bytes.toString('utf8').trim().split(/\r?\n/)) {
  const row = JSON.parse(line)
  const matched = matches.get(row.wfoId)
  if (matched?.length !== 1 || matched[0].status !== 'accepted' || matched[0].colId !== row.colId || matched[0].colScientificName !== row.scientificName) throw new Error(`Invalid identity: ${row.colId}`)
  if (!['morphology', 'habit', 'habitat'].includes(row.type) || !['pt', 'es', 'en'].includes(row.language)) throw new Error('Unreviewed type or language')
  if (row.sourceId ? row.citations.length !== 1 || row.referenceRowNumbers.length !== 1 || row.citationScope !== 'description-source' : row.citations.length !== 0 || row.referenceRowNumbers.length !== 0 || row.citationScope !== 'dataset') throw new Error('Invalid citation scope')
  if (!species.has(row.colId)) species.set(row.colId, { colId: row.colId, wfoId: row.wfoId, scientificName: row.scientificName, descriptions: [] })
  const description = {}
  for (const key of ['type', 'language', 'rowNumber', 'sourceId', 'citations', 'referenceRowNumbers', 'citationScope', 'datasetCitation', 'rightsHolder', 'rights', 'license', 'sourceExcerpt']) description[key] = row[key]
  description.text = row.sourceText
  species.get(row.colId).descriptions.push(description)
  types[row.type] = (types[row.type] ?? 0) + 1
  languages[row.language] = (languages[row.language] ?? 0) + 1
}
const records = [...species.values()].sort((a, b) => a.colId < b.colId ? -1 : a.colId > b.colId ? 1 : 0)
const decoded = Buffer.from(records.map(row => JSON.stringify(row)).join('\n') + '\n')
const compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } })
const output = 'data/sources/brazil-flora-descriptions.jsonl.br'
writeFileSync(resolve(root, output), compressed)
const ledger = {
  provider: 'Group Brazil Flora, REFLORA Program', title: 'Brazilian Flora 2020 project - Projeto Flora do Brasil 2020',
  sourceVersion: 'WFO Brazilian Flora 2020 archive; embedded EML v393.147', retrievedAt: '2026-09-06',
  sourceUrl: 'https://files.worldfloraonline.org/Files/Brazilian%20Flora%202020/dwca-lista_especies_flora_brasil.zip',
  license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  archiveSha256: '79455efc837678d0812c4f83247c9f024ab4d8dae43fe72f5c40b2302d50c923',
  inputSha256: expected, output, outputBytes: compressed.length, outputSha256: hash(compressed),
  storageEncoding: 'br', decodedBytes: decoded.length, decodedSha256: hash(decoded),
  species: records.length, descriptions: Object.values(types).reduce((a, b) => a + b, 0), types, languages,
  limitations: [
    'Regional historical source, not a current or global inventory or complete species dossier.',
    'Morphology is source-provided structured descriptive text; habit and habitat remain separate fields.',
    'All languages and source wording are preserved without authored translations or inferred traits.',
    'Morphology citations use exact source identifiers; source-less habit and habitat use only dataset-level attribution.',
    'Core archive provides WFO IDs only; accepted species identities and names come from the pinned COL crosswalk.',
    'Archive metadata does not automatically license linked images or PDFs.',
  ],
}
writeFileSync(resolve(root, 'data/sources/brazil-flora-descriptions-import-ledger.json'), JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify(ledger))
