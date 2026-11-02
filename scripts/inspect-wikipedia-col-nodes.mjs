import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'

if (process.argv.length < 3) throw new Error('Provide one or more catalogue node IDs')
const root = '.git/evo-wikipedia-col26-8/published-data-reviewed-20261031'
const manifest = JSON.parse(readFileSync(join(root, 'manifest.json'), 'utf8'))
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const getNode = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
const getRelated = db.prepare('SELECT * FROM primary_related_candidates WHERE node_id=?')
const cache = new Map()
for (const id of process.argv.slice(2)) {
  const prefix = createHash('sha256').update(id).digest('hex').slice(0, 2)
  const descriptor = manifest.shards[prefix]
  if (!cache.has(prefix)) {
    const bytes = readFileSync(join(root, descriptor.path))
    if (createHash('sha256').update(bytes).digest('hex') !== descriptor.sha256) throw new Error(`Shard checksum mismatch: ${prefix}`)
    cache.set(prefix, JSON.parse(gunzipSync(bytes)).entries)
  }
  console.log(JSON.stringify({ node: getNode.get(id), entry: cache.get(prefix)[id] ?? null, related: getRelated.all(id) }))
}
db.close()
