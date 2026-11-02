import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/'
const input = readFileSync(root + 'reptiledb-vernacular-page-checks-20261031.json'), checks = JSON.parse(input).checks
const ids = [...new Set(checks.filter(row => row.status === 'available' && row.item).map(row => row.item))].sort()
assert.ok(ids.every(id => /^Q\d+$/.test(id)))
const url = new URL('https://www.wikidata.org/w/api.php')
for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: ids.join('|'), maxlag: '5' })) url.searchParams.set(key, value)
const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; reptile vernacular identity verification)' }, signal: AbortSignal.timeout(30000) })
if (!response.ok) throw new Error(`Wikidata HTTP ${response.status}`)
const data = await response.json(); if (data.error) throw new Error(JSON.stringify(data.error))
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true }), node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), items = {}
try {
  for (const id of ids) {
    const entity = data.entities?.[id]
    if (!entity || entity.missing !== undefined) { items[id] = { missing: true }; continue }
    const values = property => (entity.claims?.[property] ?? []).filter(claim => claim.rank !== 'deprecated' && claim.mainsnak?.snaktype === 'value').map(claim => claim.mainsnak.datavalue?.value?.id ?? claim.mainsnak.datavalue?.value).filter(Boolean)
    items[id] = { names: values('P225'), ranks: values('P105'), colIds: values('P10585'), parents: values('P171'), synonyms: values('P1420'), basionyms: values('P566') }
  }
  const rows = checks.map(row => ({ ...row, nodeInfo: node.get(row.node), claims: row.item ? items[row.item] : null }))
  const proof = { sourceSha256: createHash('sha256').update(input).digest('hex'), checkedAt: new Date().toISOString(), rows }
  writeFileSync(root + 'reptiledb-vernacular-item-checks-20261031.json', JSON.stringify(proof), { flag: 'wx' })
  const direct = rows.filter(row => row.status === 'available' && row.claims?.colIds?.includes(row.node))
  const conflicting = rows.filter(row => row.status === 'available' && row.claims?.colIds?.some(id => id !== row.node && node.get(id)))
  console.log(JSON.stringify({ status: 'checked', rows: rows.length, items: ids.length, direct: direct.length, directNodes: new Set(direct.map(row => row.node)).size, conflicting: conflicting.length, directExamples: direct.slice(0, 10).map(row => ({ node: row.node, name: row.nodeInfo?.name, title: row.matchedTitle, item: row.item, url: row.url })) }))
} finally { db.close() }
