import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'

if (!process.argv[2]) throw new Error('Provide reviewed export path')
const root = resolve(process.argv[2])
const manifest = JSON.parse(readFileSync(join(root, 'manifest.json'), 'utf8'))
assert.equal(manifest.contentMode, 'links-only')
const cases = [
  { id: 'CB2WY', item: 'Q96196038', label: /synonym or basionym/, url: 'https://en.wikipedia.org/wiki/Proterochaete' },
  { id: 'V93W3', item: 'Q77849175', label: /species-group page, not a species article/, url: 'https://sv.wikipedia.org/wiki/Drosophila_bromeliae_(artgrupp)' },
  { id: 'V99Q5', item: 'Q77849175', label: /species-group page, not a species article/, url: 'https://sv.wikipedia.org/wiki/Drosophila_bromeliae_(artgrupp)' },
  { id: '94RK2', item: 'Q13363491', label: /subspecies.*different tree node/, url: 'https://en.wikipedia.org/wiki/Chiasmia_simplicilinea' },
]
const holds = [
  { id: 'T9VN', item: 'Q15120819', urls: ['https://en.wikipedia.org/wiki/Calicium_tigillare', 'https://en.wikipedia.org/wiki/Cyphelium_tigillare'] },
  { id: '95V7D', item: 'Q4749563', urls: ['https://en.wikipedia.org/wiki/Amyna_apicalis'] },
  { id: 'C2FXR', item: 'Q3775270', urls: ['https://en.wikipedia.org/wiki/Rubus_macropetalus', 'https://ru.wikipedia.org/wiki/Rubus_macropetalus', 'https://en.wikipedia.org/wiki/Rubus_ursinus'] },
]
const cache = new Map()
function entry(id) {
  const prefix = createHash('sha256').update(id).digest('hex').slice(0, 2)
  if (!cache.has(prefix)) {
    const file = manifest.shards[prefix], data = readFileSync(join(root, file.path))
    assert.equal(createHash('sha256').update(data).digest('hex'), file.sha256)
    cache.set(prefix, JSON.parse(gunzipSync(data)).entries)
  }
  const result = cache.get(prefix)[id]
  assert.ok(result, `Missing ${id}`)
  return result
}
for (const row of cases) {
  const value = entry(row.id)
  assert.equal(value.status, 'candidate')
  const found = value.options?.find(option => option.url === row.url && option.item?.endsWith('/' + row.item))
  assert.ok(found, `Missing reviewed option for ${row.id}`)
  assert.match(found.parentNames.join(' '), row.label)
  assert.match(found.parentNames.join(' '), /identity unverified/)
  assert.deepEqual(found.abstracts, [])
}
for (const row of holds) {
  const value = entry(row.id), options = [value, ...(value.options ?? [])]
  assert.ok(options.every(option => !option.item?.endsWith('/' + row.item) && !row.urls.includes(option.url)), `Held identity exposed for ${row.id}`)
}
console.log(JSON.stringify({ status: 'passed', candidateNodes: cases.map(row => row.id), heldNodes: holds.map(row => row.id), abstracts: 0 }))
