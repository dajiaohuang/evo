import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/', published = join(root, 'published-data-reviewed-20261031')
const checks = JSON.parse(readFileSync(join(root, 'uncovered-synonym-title-checks.json'), 'utf8')).values
const items = JSON.parse(readFileSync(join(root, 'uncovered-synonym-title-items.json'), 'utf8')).items
const manifest = JSON.parse(readFileSync(join(published, 'manifest.json'), 'utf8'))
const db = new DatabaseSync(join(root, 'inventory.sqlite'), { readOnly: true })
const known = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?'), cache = new Map(), rows = new Map(), reasons = {}
const normalize = value => value.normalize('NFKD').replaceAll(/\p{M}/gu, '').toLocaleLowerCase('en-US').replaceAll(/[^a-z0-9]+/g, ' ').trim()
try {
  for (const row of checks) {
    if (!row.page?.available || !row.page.item) continue
    const claims = items[row.page.item], node = known.get(row.node)
    const expectedRank = node?.rank === 'species' ? 'Q7432' : node?.rank === 'genus' ? 'Q34740' : null
    const other = (claims?.P10585 ?? []).filter(id => id !== row.node && known.get(id))
    let reason
    if (!claims || !node || !expectedRank) reason = 'missing-or-unsupported-rank'
    else if (!(claims.P105 ?? []).includes(expectedRank)) reason = 'rank-mismatch'
    else if (!(claims.P225 ?? []).some(name => normalize(name) === normalize(row.synonym))) reason = 'synonym-name-mismatch'
    else if (other.length) reason = 'other-tree-identity'
    else reason = 'eligible-for-review'
    reasons[reason] = (reasons[reason] ?? 0) + 1
    if (reason !== 'eligible-for-review') continue
    const prefix = createHash('sha256').update(row.node).digest('hex').slice(0, 2)
    if (!cache.has(prefix)) {
      const descriptor = manifest.shards[prefix], bytes = readFileSync(join(published, descriptor.path))
      if (createHash('sha256').update(bytes).digest('hex') !== descriptor.sha256) throw new Error(`Bad shard ${prefix}`)
      cache.set(prefix, JSON.parse(gunzipSync(bytes)).entries)
    }
    const entry = cache.get(prefix)[row.node]
    if (!entry) throw new Error(`Missing ${row.node}`)
    if (entry.url || entry.options?.some(option => option.url)) continue
    const key = `${row.node}\0${row.page.item}`
    if (!rows.has(key)) rows.set(key, { node: row.node, name: node.name, rank: node.rank, synonym: row.synonym, item: row.page.item, claims, urls: [] })
    rows.get(key).urls.push(row.url)
  }
  console.log(JSON.stringify({ reasons, groups: rows.size, nodes: new Set([...rows.values()].map(row => row.node)).size, values: [...rows.values()] }))
} finally { db.close() }
