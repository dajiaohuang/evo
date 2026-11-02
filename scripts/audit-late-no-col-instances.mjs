import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
const root = '.git/evo-wikipedia-col26-8/'
const source = readFileSync(root + 'late-uncovered-title-item-checks.json')
const rows = JSON.parse(source).rows.filter(r => r.status === 'available' && r.item && !r.claims?.colIds?.length)
const ids = [...new Set(rows.map(r => r.item))]
const entities = {}
for (let i = 0; i < ids.length; i += 40) {
  const url = new URL('https://www.wikidata.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', ids: ids.slice(i, i + 40).join('|'), props: 'claims|labels', languages: 'en', maxlag: '5' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon identity checks)' }, signal: AbortSignal.timeout(30000) })
  assert.ok(response.ok, `Wikidata HTTP ${response.status}`)
  const data = await response.json(); assert.ok(!data.error, JSON.stringify(data.error))
  for (const [id, entity] of Object.entries(data.entities)) entities[id] = { label: entity.labels?.en?.value ?? null, instances: (entity.claims?.P31 ?? []).filter(c => c.rank !== 'deprecated').map(c => c.mainsnak?.datavalue?.value?.id).filter(Boolean), taxonNames: (entity.claims?.P225 ?? []).filter(c => c.rank !== 'deprecated').map(c => c.mainsnak?.datavalue?.value).filter(Boolean) }
}
const report = { sourceSha256: createHash('sha256').update(source).digest('hex'), checkedAt: new Date().toISOString(), rows: rows.map(row => ({ node: row.node, name: row.name, url: row.url, item: row.item, ...entities[row.item] })) }
writeFileSync(root + 'late-no-col-instance-checks.json', JSON.stringify(report), { flag: 'wx' })
console.log(JSON.stringify({ rows: rows.length, nodes: new Set(rows.map(r => r.node)).size, items: ids.length, withoutTaxonName: report.rows.filter(r => !r.taxonNames.length).length }))
