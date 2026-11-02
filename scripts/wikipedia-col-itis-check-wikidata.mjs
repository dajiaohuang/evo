import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'

const root = '.git/evo-wikipedia-col26-8/'
const casefold = process.argv.includes('--casefold')
const mddIoc = process.argv.includes('--mdd-ioc')
assert.ok(!(casefold&&mddIoc))
const checksBytes = readFileSync(root + (mddIoc ? 'mdd-ioc-vernacular-title-checks.json' : `itis-vernacular-title-checks${casefold ? '-casefold' : ''}.json`))
const checks = JSON.parse(checksBytes)
const ids = [...new Set(checks.results.filter(x => x.status === 'available' && x.item).map(x => x.item))]
const results = []
let last = 0
for (let i = 0; i < ids.length; i += 50) {
  const batch = ids.slice(i, i + 50)
  const delay = Math.max(0, 2000 - (Date.now() - last))
  if (delay) await new Promise(resolve => setTimeout(resolve, delay))
  const query = new URLSearchParams({ action: 'wbgetentities', format: 'json', ids: batch.join('|'), props: 'claims', maxlag: '5' })
  last = Date.now()
  const response = await fetch('https://www.wikidata.org/w/api.php?' + query, { signal: AbortSignal.timeout(45000), headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy identifier verification)' } })
  assert.equal(response.status, 200)
  const data = await response.json()
  assert.ok(!data.error && data.entities, JSON.stringify(data.error))
  for (const id of batch) {
    const entity = data.entities[id]
    assert.ok(entity && !Object.hasOwn(entity, 'missing'), id)
    const values = property => (entity.claims?.[property] ?? []).filter(x => x.rank !== 'deprecated').map(x => x.mainsnak?.datavalue?.value).filter(x => typeof x === 'string')
    results.push({ item: id, colIds: [...new Set(values('P10585'))], scientificNames: [...new Set(values('P225'))] })
  }
  console.log(JSON.stringify({ checked: Math.min(i + batch.length, ids.length), total: ids.length }))
}
writeFileSync(root + (mddIoc ? 'mdd-ioc-vernacular-wikidata-checks.json' : `itis-vernacular-wikidata-checks${casefold ? '-casefold' : ''}.json`), JSON.stringify({ titleChecksSha256: createHash('sha256').update(checksBytes).digest('hex'), results }))
console.log(JSON.stringify({ status: 'complete', items: ids.length, withColId: results.filter(x => x.colIds.length).length }))
