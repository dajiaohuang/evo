import fs from 'node:fs'
import crypto from 'node:crypto'
const dir = 'data/sources/snapshots/amphibia-content-scope-2026-10-02'
const taxa = JSON.parse(fs.readFileSync(`${dir}/pbdb-amphibia-accepted-fossil-species.json`)).records
const manifest = []
const records = new Map()
for (let start = 0; start < taxa.length; start += 100) {
  const ids = taxa.slice(start, start + 100).map(x => x.oid.replace('txn:', '')).join(',')
  const url = `https://paleobiodb.org/data1.2/occs/list.json?taxon_id=${ids}&show=ref,loc,coords,strat,time&limit=all`
  const response = await fetch(url, { signal: AbortSignal.timeout(60000) })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  const json = JSON.parse(bytes)
  if (!json.records || json.errors?.length || json.warnings?.length) throw new Error(JSON.stringify(json))
  const file = `pbdb-fossil-occurrences-${start}.json`
  fs.writeFileSync(`${dir}/${file}`, bytes)
  manifest.push({ url, file, retrievedAt: new Date().toISOString(), sha256: crypto.createHash('sha256').update(bytes).digest('hex'), count: json.records.length })
  for (const row of json.records) {
    const previous = records.get(row.oid)
    if (previous && JSON.stringify(previous) !== JSON.stringify(row)) throw new Error(`Conflicting occurrence ${row.oid}`)
    records.set(row.oid, row)
  }
  console.log(`Fossil source concepts ${Math.min(start + 100, taxa.length)}/${taxa.length}: ${records.size} unique occurrences`)
}
fs.writeFileSync(`${dir}/pbdb-fossil-occurrences.json`, JSON.stringify([...records.values()], null, 2) + '\n')
fs.writeFileSync(`${dir}/pbdb-fossil-occurrences.manifest.json`, JSON.stringify({ entries: manifest, count: records.size, note: 'Each query selects the specified PBDB IDs. Reader claims only use exact returned tid; subordinate or synonym concepts retain the original identifiers.' }, null, 2) + '\n')
