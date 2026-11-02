import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/'
const bytes = readFileSync(root + 'cross-inexact-unkeyed-live-checks.json'), data = JSON.parse(bytes)
const entities = {}
async function fetchEntities(ids) {
  for (let offset = 0; offset < ids.length; offset += 40) {
    const url = new URL('https://www.wikidata.org/w/api.php')
    for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: ids.slice(offset, offset + 40).join('|'), maxlag: '10' })) url.searchParams.set(key, value)
    const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; parent taxon checks)' }, signal: AbortSignal.timeout(30000) })
    assert.ok(response.ok, `Wikidata HTTP ${response.status}`)
    const result = await response.json(); assert.ok(!result.error, JSON.stringify(result.error)); Object.assign(entities, result.entities)
  }
}
const values = (id, property) => (entities[id]?.claims?.[property] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value).filter(Boolean)
const ids = [...new Set(data.rows.map(row => row.item))]
await fetchEntities(ids)
const parents = [...new Set(ids.flatMap(id => values(id, 'P171')).filter(id => /^Q\d+$/.test(id)))]
await fetchEntities(parents)
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true }), get = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
function ancestors(id) { const result = [], seen = new Set(); while (id && !seen.has(id)) { seen.add(id); const row = get.get(id); if (!row) break; result.push(row); id = row.parent_id } return result }
try {
  const rows = data.rows.map(row => {
    const sourceAncestors = ancestors(row.node), targetAncestors = row.others.map(ancestors)
    const parentNames = values(row.item, 'P171').flatMap(id => values(id, 'P225').map(name => ({ id, name })))
    const supported = parentNames.filter(parent => targetAncestors.some(path => path.some(node => node.name === parent.name)) && !sourceAncestors.some(node => node.name === parent.name))
    return { ...row, parentNames, supported, sourceAncestors, targetAncestors }
  })
  const proof = { sourceSha256: createHash('sha256').update(bytes).digest('hex'), checkedAt: new Date().toISOString(), rows }
  writeFileSync(root + 'cross-inexact-parentage-checks.json', JSON.stringify(proof), { flag: 'wx' })
  console.log(JSON.stringify({ rows: rows.length, supported: rows.filter(row => row.supported.length && row.actualPage?.item === row.item).length, nodes: new Set(rows.filter(row => row.supported.length && row.actualPage?.item === row.item).map(row => row.node)).size, examples: rows.filter(row => row.supported.length).slice(0, 5).map(row => ({ node: row.node, item: row.item, supported: row.supported })) }))
} finally { db.close() }
