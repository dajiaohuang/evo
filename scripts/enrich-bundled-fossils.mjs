import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'

const outputDirectory = resolve(process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]
  : 'staging/enriched-exact')
const replace = process.argv.includes('--replace')
const requestedPeriod = process.argv.includes('--period')
  ? process.argv[process.argv.indexOf('--period') + 1]
  : null
const metadata = readJson('data/period-map-metadata.json')
const periods = requestedPeriod
  ? metadata.filter((period) => period.name.toLowerCase() === requestedPeriod.toLowerCase())
  : metadata

if (!periods.length) throw new Error(`Unknown period: ${requestedPeriod}`)

function chunks(values, size) {
  return Array.from({ length: Math.ceil(values.length / size) }, (_, index) => values.slice(index * size, (index + 1) * size))
}

async function fetchChunk(ids, attempt = 1) {
  const query = new URLSearchParams({ id: ids.join(','), show: 'full' })
  const response = await fetch(`https://paleobiodb.org/data1.2/occs/list.json?${query}`, {
    headers: { 'user-agent': 'EvoAtlasDataPipeline/2026.08 (static educational snapshot)' },
  })
  if (!response.ok) {
    if (attempt < 4) return fetchChunk(ids, attempt + 1)
    throw new Error(`PBDB returned ${response.status} ${response.statusText}`)
  }
  const payload = await response.json()
  return payload.records ?? []
}

function optionalFields(record) {
  return {
    ...(record.pm1 ? { paleoModelId: `pbdb:${record.pm1}` } : {}),
    ...(record.gpl ? { plateId: String(record.gpl) } : {}),
    ...(record.prc ? { coordinatePrecision: record.prc } : {}),
    ...(record.gsc ? { geographicScale: record.gsc } : {}),
    ...(record.rid ? { referenceId: record.rid } : {}),
    ...(record.aut ? { referenceAuthor: record.aut } : {}),
    ...(record.pby && Number.isInteger(Number(record.pby)) && Number(record.pby) >= 1600 && Number(record.pby) <= 2026 ? { referenceYear: Number(record.pby) } : {}),
    ...(record.sfm ? { formation: record.sfm } : {}),
    ...(record.smb ? { member: record.smb } : {}),
    ...([record.lt1, record.la1, record.lt2, record.la2].filter(Boolean).length
      ? { lithology: [record.lt1, record.la1, record.lt2, record.la2].filter(Boolean).join('; ') }
      : {}),
    ...(record.env ? { paleoenvironment: record.env } : {}),
    ...(record.tpm ? { specimenBasis: record.tpm } : {}),
  }
}

for (const period of periods) {
  const input = readJson(`data/fossils/${period.name.toLowerCase()}.json`)
  const outputPath = join(outputDirectory, `${period.name.toLowerCase()}.json`)
  if (existsSync(outputPath) && !replace) throw new Error(`Refusing to overwrite ${outputPath}; pass --replace.`)
  const batches = chunks(input.map((record) => record.oid), 100)
  const fetched = []
  for (let index = 0; index < batches.length; index += 6) {
    fetched.push(...(await Promise.all(batches.slice(index, index + 6).map((batch) => fetchChunk(batch)))).flat())
  }
  const byId = new Map(fetched.map((record) => [record.oid, record]))
  const missing = input.filter((record) => !byId.has(record.oid))
  if (missing.length) throw new Error(`${period.name}: ${missing.length} source occurrence IDs were not returned`)
  const enriched = input.map((record) => {
    const result = { ...record, ...optionalFields(byId.get(record.oid)) }
    if (!Number.isFinite(result.paleolng) || !Number.isFinite(result.paleolat)) {
      delete result.paleolng
      delete result.paleolat
    }
    if (!Number.isInteger(result.referenceYear) || result.referenceYear < 1600 || result.referenceYear > 2026) delete result.referenceYear
    return result
  })
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, `${JSON.stringify(enriched)}\n`)
  console.log(`${period.name}: enriched ${enriched.length.toLocaleString()} existing rows without changing membership or order.`)
}

console.log(`Review staged files under ${outputDirectory.replace(rootDir, '.')} before replacing bundled data.`)
