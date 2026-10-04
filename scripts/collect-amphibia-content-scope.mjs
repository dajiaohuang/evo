import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const date = '2026-10-02'
const target = path.join(root, 'data/sources/snapshots/amphibia-content-scope-2026-10-02')
fs.mkdirSync(target, { recursive: true })
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex')
const queries = []
async function capture(url, name) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  const json = JSON.parse(bytes)
  fs.writeFileSync(path.join(target, name), bytes)
  queries.push({ url, file: name, sha256: sha(bytes), retrievedAt: new Date().toISOString() })
  return json
}
const species = new Map()
let total
for (let offset = 0; total === undefined || offset < total; offset += 1000) {
  const url = `https://api.checklistbank.org/dataset/316115/nameusage/search?taxonID=PH&rank=species&status=accepted&limit=1000&offset=${offset}`
  const result = await capture(url, `col26.8-species-${offset}.json`)
  if (!Array.isArray(result.result) || !Number.isInteger(result.total)) throw new Error('Invalid COL page')
  if (total !== undefined && total !== result.total) throw new Error('COL total changed between pages')
  total = result.total
  for (const item of result.result) {
    if (item.usage.status !== 'accepted' || item.usage.name.rank !== 'species' || !item.classification.some(x => x.id === 'PH')) throw new Error(`Out-of-scope COL ${item.id}`)
    if (species.has(item.id)) throw new Error(`Duplicate COL ${item.id}`)
    species.set(item.id, {
      colId: item.id, scientificName: item.usage.name.scientificName,
      authorship: item.usage.name.authorship ?? null,
      sourceDatasetId: String(item.sectorDatasetKey),
      extinct: item.usage.extinct ?? null,
      classification: item.classification.map(x => ({ id: x.id, scientificName: x.name, rank: x.rank })),
      sourceUrl: `https://www.checklistbank.org/dataset/316115/taxon/${item.id}`,
    })
  }
  console.log(`COL species ${species.size}/${total}`)
}
if (species.size !== total) throw new Error('Incomplete COL pagination')
const fossilUrl = 'https://paleobiodb.org/data1.2/taxa/list.json?base_id=36319&rank=species&status=accepted&extant=no&pres=regular&limit=all'
const fossils = await capture(fossilUrl, 'pbdb-amphibia-accepted-fossil-species.json')
if (!Array.isArray(fossils.records) || fossils.errors?.length || fossils.warnings?.length) throw new Error('PBDB query incomplete or has errors/warnings')
const fossilIds = new Set(fossils.records.map(x => x.oid))
if (fossilIds.size !== fossils.records.length) throw new Error('Duplicate PBDB OIDs')
const byOrder = {}
for (const item of species.values()) {
  const order = item.classification.find(x => x.rank === 'order')?.scientificName ?? 'unresolved-order'
  byOrder[order] = (byOrder[order] ?? 0) + 1
}
fs.writeFileSync(path.join(target, 'col26.8-accepted-species.json'), JSON.stringify([...species.values()], null, 2) + '\n')
fs.writeFileSync(path.join(target, 'manifest.json'), JSON.stringify({
  schemaVersion: 1, date, classificationRelease: 'COL26.8', colDatasetId: 316115,
  colRootId: 'PH', colAcceptedSpeciesCount: species.size, colSpeciesByOrder: byOrder,
  pbdbRootId: 'txn:36319', pbdbAcceptedFossilSpeciesCount: fossilIds.size,
  scopeNote: 'Separate dated catalogue record lists. No biological species union or name-based COL/PBDB equivalence. COL extinct metadata is retained when supplied; absence is null.',
  queries,
}, null, 2) + '\n')
console.log(JSON.stringify({ colAcceptedSpeciesCount: species.size, byOrder, pbdbAcceptedFossilSpeciesCount: fossilIds.size }))
