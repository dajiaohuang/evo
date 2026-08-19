import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { collectDataSummary, readJson, rootDir } from './data-lib.mjs'

const manifest = readJson('data/manifest.json')
const summary = collectDataSummary()
const next = {
  ...manifest,
  schemaVersion: 5,
  generatedAt: new Date().toISOString().slice(0, 10),
  records: summary.records,
  checksums: summary.checksums,
}

writeFileSync(join(rootDir, 'data/manifest.json'), `${JSON.stringify(next, null, 2)}\n`)
console.log(`Updated data/manifest.json with ${Object.keys(summary.checksums).length} SHA-256 checksums.`)
