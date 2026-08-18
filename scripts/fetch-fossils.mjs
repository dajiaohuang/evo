import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

function argument(name, fallback = null) {
  const index = process.argv.indexOf(`--${name}`)
  return index >= 0 ? process.argv[index + 1] : fallback
}

const period = argument('period')
const requestedLimit = Number(argument('limit', '1000'))
const output = resolve(argument('output', period ? `staging/${period.toLowerCase()}.json` : 'staging/fossils.json'))
const replace = process.argv.includes('--replace')

if (!period || !Number.isInteger(requestedLimit) || requestedLimit < 1 || requestedLimit > 100000) {
  console.error('Usage: node scripts/fetch-fossils.mjs --period Cretaceous [--limit 1000] [--output staging/cretaceous.json] [--replace]')
  process.exit(1)
}
if (existsSync(output) && !replace) {
  console.error(`Refusing to overwrite ${output}. Pass --replace after reviewing the target.`)
  process.exit(1)
}

const records = []
let offset = 0
while (records.length < requestedLimit) {
  const pageSize = Math.min(5000, requestedLimit - records.length)
  const query = new URLSearchParams({
    interval: period,
    limit: String(pageSize),
    offset: String(offset),
    show: 'full',
    order: 'id',
  })
  const response = await fetch(`https://paleobiodb.org/data1.2/occs/list.json?${query}`, {
    headers: { 'user-agent': 'EvoAtlasDataPipeline/2026.08 (static educational snapshot)' },
  })
  if (!response.ok) throw new Error(`PBDB returned ${response.status} ${response.statusText}`)
  const payload = await response.json()
  const page = payload.records ?? []
  records.push(...page)
  if (page.length < pageSize) break
  offset += page.length
}

const normalized = records.slice(0, requestedLimit).map((record) => ({
  oid: record.oid ?? '',
  tna: record.tna ?? '',
  idn: [record.idg, record.ids].filter(Boolean).join(' '),
  tid: record.tid ?? '',
  rnk: record.rnk ?? 0,
  lng: String(record.lng ?? ''),
  lat: String(record.lat ?? ''),
  eag: record.eag,
  lag: record.lag,
  ...(Number.isFinite(record.pln) && Number.isFinite(record.pla) ? { paleolng: record.pln, paleolat: record.pla } : {}),
  ...(record.pm1 ? { paleoModelId: `pbdb:${record.pm1}` } : {}),
  ...(record.gpl ? { plateId: String(record.gpl) } : {}),
  ...(record.prc ? { coordinatePrecision: record.prc } : {}),
  ...(record.gsc ? { geographicScale: record.gsc } : {}),
  ...(record.rid ? { referenceId: record.rid } : {}),
  ...(record.aut ? { referenceAuthor: record.aut } : {}),
  ...(record.pby && Number.isFinite(Number(record.pby)) ? { referenceYear: Number(record.pby) } : {}),
  ...(record.sfm ? { formation: record.sfm } : {}),
  ...(record.smb ? { member: record.smb } : {}),
  ...([record.lt1, record.la1, record.lt2, record.la2].filter(Boolean).length ? { lithology: [record.lt1, record.la1, record.lt2, record.la2].filter(Boolean).join('; ') } : {}),
  ...(record.env ? { paleoenvironment: record.env } : {}),
  ...(record.tpm ? { specimenBasis: record.tpm } : {}),
  cid: record.cid ?? '',
  oei: record.oei ?? '',
  ...(record.cc2 ? { cc2: record.cc2 } : {}),
  ...(record.stp ? { stp: record.stp } : {}),
}))

mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, `${JSON.stringify(normalized, null, 2)}\n`)
console.log(`Fetched ${normalized.length.toLocaleString()} ${period} occurrences to ${output}.`)
console.log('Review sampling, licenses, field coverage and diffs before replacing a bundled period file.')
