import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/'
const nameParent = process.argv.includes('--name-parent')
const input = readFileSync(root + (nameParent ? 'unlinked-name-parent-scan-page-checks.json' : 'unlinked-live-scan-page-checks.json')), checks = JSON.parse(input)
const rows = checks.checks.filter(row => row.status === 'identity-review' && /^Q\d+$/.test(row.actualItem ?? ''))
const ids = [...new Set(rows.flatMap(row => [row.item, row.actualItem]))], entities = {}
for (let offset = 0; offset < ids.length; offset += 40) {
  const url = new URL('https://www.wikidata.org/w/api.php')
  for (const [k, v] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: ids.slice(offset, offset + 40).join('|'), maxlag: '10' })) url.searchParams.set(k, v)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; redirect relationship checks)' }, signal: AbortSignal.timeout(30000) })
  assert.ok(response.ok); const data = await response.json(); assert.ok(!data.error, JSON.stringify(data.error)); Object.assign(entities, data.entities)
}
const values = (id, property) => (entities[id]?.claims?.[property] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value).filter(Boolean)
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true }), node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
try {
  const analyzed = rows.map(row => {
    const source = node.get(row.node), sourceParents = values(row.item, 'P171'), targetParents = values(row.actualItem, 'P171'), targetCols = values(row.actualItem, 'P10585')
    const sourceRanks = values(row.item, 'P105'), targetRanks = values(row.actualItem, 'P105')
    const targetIsTreeParent = Boolean(source?.parent_id && targetCols.includes(source.parent_id))
    const sameParentAndRank = sourceParents.some(id => targetParents.includes(id)) && sourceRanks.some(id => targetRanks.includes(id))
    return { ...row, source, sourceNames: values(row.item, 'P225'), targetNames: values(row.actualItem, 'P225'), sourceParents, targetParents, sourceRanks, targetRanks, targetCols, relationship: targetIsTreeParent ? 'tree-parent' : sameParentAndRank ? 'same-parent-rank-review' : 'unresolved' }
  })
  const proof = { pageChecksSha256: createHash('sha256').update(input).digest('hex'), checkedAt: new Date().toISOString(), rows: analyzed }
  writeFileSync(root + (nameParent ? 'unlinked-name-parent-scan-redirect-analysis.json' : 'unlinked-live-scan-redirect-analysis.json'), JSON.stringify(proof), { flag: 'wx' })
  const counts = {}; for (const row of analyzed) counts[row.relationship] = (counts[row.relationship] ?? 0) + 1
  console.log(JSON.stringify({ status: 'analyzed', pages: analyzed.length, counts }))
} finally { db.close() }
