import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'

const indexRoot = '.git/evo-wikipedia-col26-8/higher-search-review-2'
const linksRoot = '.git/evo-wikipedia-col26-8/published-data-reviewed-20261031'
const index = JSON.parse(readFileSync(join(indexRoot, 'manifest.json'), 'utf8'))
const links = JSON.parse(readFileSync(join(linksRoot, 'manifest.json'), 'utf8'))
const cache = new Map()
const rows = []
for (const file of Object.values(index.files)) {
  const shard = JSON.parse(gunzipSync(readFileSync(join(indexRoot, file.path))))
  for (const node of shard.records) {
    if (node.normalizedBare.replaceAll(' ', '').length >= 3) continue
    const prefix = createHash('sha256').update(node.id).digest('hex').slice(0, 2)
    if (!cache.has(prefix)) cache.set(prefix, JSON.parse(gunzipSync(readFileSync(join(linksRoot, links.shards[prefix].path)))).entries)
    const entry = cache.get(prefix)[node.id]
    if (!entry) throw new Error(`Missing link entry for ${node.id}`)
    rows.push({ id: node.id, name: node.scientificName, status: entry.status, options: entry.options?.length ?? 0, hasLink: Boolean(entry.url || entry.options?.length) })
  }
}
console.log(JSON.stringify({ total: rows.length, withLinks: rows.filter(row => row.hasLink).length, rows }))
