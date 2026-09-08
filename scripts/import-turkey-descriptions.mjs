import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { brotliCompressSync, constants } from 'node:zlib'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const input = process.argv[2]
if (!input) throw new Error('Provide the reviewed Turkey candidate JSONL path')
const hash = b => createHash('sha256').update(b).digest('hex')
const bytes = readFileSync(input)
const expected = '6088ec869d38d5c6e4afb4ae916a827b43102412e56f809c52bdaf5226310055'
if (hash(bytes) !== expected) throw new Error('Turkey candidate changed')
const rows = bytes.toString('utf8').trim().split(/\r?\n/).map(JSON.parse)
const records = rows.map(row => ({
  colId: row.colId, wfoId: row.wfoId, scientificName: row.scientificName,
  sourceScientificName: row.sourceScientificName, sourceAuthorship: row.sourceAuthorship, sourceFamily: row.sourceFamily,
  descriptions: [{ type: row.type, language: row.language, sourceLanguage: row.sourceLanguage, text: row.text, descriptionRecordNumber: row.descriptionRecordNumber, citationScope: row.citationScope, datasetCitation: row.datasetCitation, rights: row.rights, license: row.license }],
})).sort((a, b) => a.colId < b.colId ? -1 : a.colId > b.colId ? 1 : 0)
if (records.length !== 262 || new Set(records.map(r => r.colId)).size !== 262) throw new Error('Changed reviewed identity count')
const decoded = Buffer.from(records.map(r => JSON.stringify(r)).join('\n') + '\n')
const compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 5 } })
const output = 'data/sources/turkey-descriptions.jsonl.br'
writeFileSync(resolve(root, output), compressed)
const ledger = {
  provider: 'Resimli Türkiye Florası', title: 'Illustrated Flora of Turkey', sourceVersion: 'TurkeyIllustratedFlora_20240220', retrievedAt: '2026-09-06',
  sourceUrl: 'https://files.worldfloraonline.org/Files/Flora%20of%20Turkey/archive/TurkeyIllustratedFlora_20240220.zip',
  license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  archiveSha256: '0cc993307de9e7b776117b12bc1f603aa18ec8ab6e9ce3c9457a4c3b19216f22', inputSha256: expected,
  output, outputBytes: compressed.length, outputSha256: hash(compressed), storageEncoding: 'br', decodedBytes: decoded.length, decodedSha256: hash(decoded), species: records.length, descriptions: rows.length,
  limitations: ['Regional historical source, not a complete dossier or current inventory.', 'Type morphology and language TR are explicit archive defaults; original Turkish text is retained.', 'No reference extension is supplied; attribution is dataset-level, not a fabricated paragraph citation.', 'Description locators are one-based parsed record numbers, not physical line numbers.', 'Source names and authorship are retained separately from the pinned accepted COL name.'],
}
writeFileSync(resolve(root, 'data/sources/turkey-descriptions-import-ledger.json'), JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify(ledger))
