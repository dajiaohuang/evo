import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'

const root = '.git/evo-wikipedia-col26-8/'
const published = join(root, 'published-data-reviewed-20261031')
const manifest = JSON.parse(readFileSync(join(published, 'manifest.json'), 'utf8'))
const checks = JSON.parse(readFileSync(join(root, 'uncovered-synonym-title-checks.json'), 'utf8')).values
const cache = new Map(), missing = [], counts = { available: 0, included: 0, coveredByOther: 0, noLink: 0 }
for (const row of checks) {
  if (!row.page?.available) continue
  counts.available++
  const prefix = createHash('sha256').update(row.node).digest('hex').slice(0, 2)
  if (!cache.has(prefix)) {
    const descriptor = manifest.shards[prefix], bytes = readFileSync(join(published, descriptor.path))
    if (createHash('sha256').update(bytes).digest('hex') !== descriptor.sha256) throw new Error(`Shard checksum mismatch: ${prefix}`)
    cache.set(prefix, JSON.parse(gunzipSync(bytes)).entries)
  }
  const entry = cache.get(prefix)[row.node]
  if (!entry) throw new Error(`Missing node ${row.node}`)
  const options = [entry, ...(entry.options ?? [])]
  if (options.some(option => option.url === row.url)) { counts.included++; continue }
  if (options.some(option => option.url)) counts.coveredByOther++
  else counts.noLink++
  missing.push({ node: row.node, name: row.sourceName, rank: row.rank, synonym: row.synonym, url: row.url, page: row.page, currentStatus: entry.status, otherLinks: options.filter(option => option.url).length })
}
console.log(JSON.stringify({ counts, missing }))
