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
const nodes = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
const wanted = new Set(checks.filter(row => row.page?.available && row.page.item).map(row => row.node))
const synonyms = new Map(), normalized = value => value.normalize('NFKD').replaceAll(/\p{M}/gu, '').toLocaleLowerCase('en-US').replaceAll(/[^a-z0-9]+/g, ' ').trim()
for (const row of db.prepare('SELECT node_id,name FROM synonym_names').iterate()) if (wanted.has(row.node_id)) {
  if (!synonyms.has(row.node_id)) synonyms.set(row.node_id, new Set())
  synonyms.get(row.node_id).add(normalized(row.name))
}
const cache = new Map(), groups = new Map(), counts = { examined: 0, sameAcceptedOrSynonym: 0, otherTreeIdentity: 0, uncovered: 0 }
try {
  for (const row of checks) {
    if (!row.page?.available || !row.page.item) continue
    counts.examined++
    const source = nodes.get(row.node), claims = items[row.page.item]
    if (!source || !claims) continue
    const expectedRank = source.rank === 'species' ? 'Q7432' : source.rank === 'genus' ? 'Q34740' : null
    if (!expectedRank || !(claims.P105 ?? []).includes(expectedRank)) continue
    const accepted = normalized(source.name), names = (claims.P225 ?? []).map(normalized)
    const matched = names.find(name => name === accepted || synonyms.get(row.node)?.has(name))
    if (!matched) continue
    counts.sameAcceptedOrSynonym++
    const conflicts = (claims.P10585 ?? []).filter(id => id !== row.node && nodes.get(id))
    if (conflicts.length) { counts.otherTreeIdentity++; continue }
    const prefix = createHash('sha256').update(row.node).digest('hex').slice(0, 2)
    if (!cache.has(prefix)) {
      const descriptor = manifest.shards[prefix], bytes = readFileSync(join(published, descriptor.path))
      if (createHash('sha256').update(bytes).digest('hex') !== descriptor.sha256) throw new Error(`Shard checksum mismatch: ${prefix}`)
      cache.set(prefix, JSON.parse(gunzipSync(bytes)).entries)
    }
    const entry = cache.get(prefix)[row.node]
    if (!entry || entry.url || entry.options?.some(option => option.url)) continue
    counts.uncovered++
    const key = `${row.node}\0${row.page.item}`
    if (!groups.has(key)) groups.set(key, { node: row.node, name: source.name, synonym: row.synonym, targetNames: claims.P225, item: row.page.item, urls: [] })
    groups.get(key).urls.push(row.url)
  }
  console.log(JSON.stringify({ counts, groups: groups.size, values: [...groups.values()] }))
} finally { db.close() }
