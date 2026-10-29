// Fetch only the exact self-only taxon identifiers in the frozen snapshot ledger.
// Raw responses are retained as evidence; this does not follow additional parents.
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
const root = process.cwd()
const ledger = JSON.parse(await readFile(join(root, 'public/node-map/ledger.json'), 'utf8'))
const ids = [...new Set(ledger.entries.filter(e => e.reason === 'taxon absent from PBDB reader index; self identity only').map(e => e.id))].sort()
if (ids.some(id => !/^txn:\d+$/.test(id))) throw Error('invalid taxon identifier')
const dest = join(root, 'data/node-map/pbdb-exact-20261029-v2')
await mkdir(dest, { recursive: true })
const chunks = Array.from({ length: Math.ceil(ids.length / 100) }, (_, i) => ids.slice(i * 100, (i + 1) * 100))
const results = Array(chunks.length)
let next = 0
async function worker() {
  while (next < chunks.length) {
    const i = next++, requested = chunks[i]
    const url = 'https://paleobiodb.org/data1.2/taxa/list.json?' + new URLSearchParams({id: requested.join(','), show: 'attr,phylo'})
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(30000) })
      if (!response.ok) throw Error(`HTTP ${response.status}`)
      const raw = Buffer.from(await response.arrayBuffer()), parsed = JSON.parse(raw)
      if (!Array.isArray(parsed.records)) throw Error('missing records')
      const got = new Set(), unexpected = [], duplicates = []
      for (const row of parsed.records) {
        if (!requested.includes(row.oid)) unexpected.push(row.oid)
        else if (got.has(row.oid)) duplicates.push(row.oid)
        else got.add(row.oid)
      }
      const file = `batch-${String(i).padStart(3, '0')}.json`
      await writeFile(join(dest, file), raw, { flag: 'wx' })
      results[i] = {file, url, requested, returned: [...got].sort(), unexpected, duplicates, sha256: createHash('sha256').update(raw).digest('hex')}
    } catch (error) { results[i] = {requested, error: String(error)} }
  }
}
await Promise.all(Array.from({length: 4}, worker))
const manifest = {schemaVersion:1, retrievedAt:new Date().toISOString(), selection:'Exact PBDB taxon IDs absent from frozen reader index; no recursive expansion', requested:ids.length, batches:results}
await writeFile(join(dest, 'manifest.json'), JSON.stringify(manifest, null, 2)+'\n', {flag:'wx'})
console.log(JSON.stringify({requested:ids.length, returned:results.reduce((n,r)=>n+(r.returned?.length||0),0), failedBatches:results.filter(r=>r.error).length}))
