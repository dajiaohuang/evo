import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'

const timeScale = readJson('data/time-scale.json')
const periodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam)

for (const periodName of periodNames) {
  const relativePath = `data/fossils/${periodName.toLowerCase()}.json`
  const records = readJson(relativePath).map((source) => {
    const record = { ...source }
    const paleoLng = typeof record.paleolng === 'number' ? record.paleolng : Number(record.paleolng)
    const paleoLat = typeof record.paleolat === 'number' ? record.paleolat : Number(record.paleolat)
    if (record.paleolng === null || record.paleolat === null || !Number.isFinite(paleoLng) || !Number.isFinite(paleoLat)) {
      delete record.paleolng
      delete record.paleolat
    } else {
      record.paleolng = paleoLng
      record.paleolat = paleoLat
    }
    if (!Number.isInteger(record.referenceYear) || record.referenceYear < 1600 || record.referenceYear > 2026) delete record.referenceYear
    return record
  })
  writeFileSync(join(rootDir, relativePath), `${JSON.stringify(records)}\n`)
  console.log(`${periodName}: normalized ${records.length.toLocaleString()} records.`)
}
