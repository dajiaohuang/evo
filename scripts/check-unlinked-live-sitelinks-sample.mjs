import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
const root = '.git/evo-wikipedia-col26-8/', published = root + 'published-data-reviewed-20261031/'
const manifestBytes = readFileSync(published + 'manifest.json'), manifest = JSON.parse(manifestBytes)
assert.equal(manifest.contentMode, 'links-only')
const wikipediaSites = new Set(JSON.parse(readFileSync(root + 'sources/wikipedia-projects.json')).projects.map(project => project.dbname))
const wanted = []
const spread = process.argv.includes('--spread')
for (const shard of Object.values(manifest.shards)) {
  const compressed = readFileSync(published + shard.path)
  assert.equal(createHash('sha256').update(compressed).digest('hex'), shard.sha256)
  const entries = JSON.parse(gunzipSync(compressed)).entries
  let selectedInShard = 0
  for (const [node, entry] of Object.entries(entries)) {
    const item = /^https:\/\/www\.wikidata\.org\/entity\/(Q\d+)$/.exec(entry.item ?? '')?.[1]
    if (entry.status === 'unresolved' && entry.matchKind === 'matched-col-id' && item) { wanted.push({ node, item }); selectedInShard++ }
    if (spread ? selectedInShard >= 4 : wanted.length >= 200) break
  }
  if (!spread && wanted.length >= 200) break
}
const values = []
for (let offset = 0; offset < wanted.length; offset += 40) {
  const batch = wanted.slice(offset, offset + 40), url = new URL('https://www.wikidata.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'sitelinks|claims', ids: [...new Set(batch.map(row => row.item))].join('|'), maxlag: '10' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; current sitelink checks)' }, signal: AbortSignal.timeout(30000) })
  assert.ok(response.ok); const data = await response.json(); assert.ok(!data.error, JSON.stringify(data.error))
  for (const row of batch) {
    const entity = data.entities[row.item], colIds = (entity?.claims?.P10585 ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value)
    const links = Object.entries(entity?.sitelinks ?? {}).filter(([site]) => wikipediaSites.has(site)).map(([site, value]) => ({ site, title: value.title }))
    if (links.length && colIds.includes(row.node)) values.push({ ...row, colIds, links })
  }
}
const proof = { manifestSha256: createHash('sha256').update(manifestBytes).digest('hex'), checkedAt: new Date().toISOString(), sampled: wanted.length, values }
writeFileSync(root + (spread ? 'unlinked-live-wikipedia-sitelinks-spread-sample.json' : 'unlinked-live-wikipedia-sitelinks-sample.json'), JSON.stringify(proof), { flag: 'wx' })
console.log(JSON.stringify({ sampled: wanted.length, newlyLinked: values.length, examples: values.slice(0, 5) }))
