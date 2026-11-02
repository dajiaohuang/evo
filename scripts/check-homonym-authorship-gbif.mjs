import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
const root = '.git/evo-wikipedia-col26-8/'
const group = process.argv[2] ?? 'homonym'
assert.ok(['homonym', 'plant-order', 'other-order'].includes(group))
const input = readFileSync(root + (group === 'homonym' ? 'cross-authorship-unkeyed-candidates-evidence.json' : `cross-${group}-authorship-evidence.json`))
const source = JSON.parse(input), results = [], cached = new Map()
for (const row of source.rows) {
  const values = []
  for (const taxon of [row.sourceNode, ...row.targetNodes]) {
    if (cached.has(taxon.id)) { values.push(cached.get(taxon.id)); continue }
    const url = new URL('https://api.gbif.org/v1/species/match')
    url.searchParams.set('name', taxon.scientificName)
    url.searchParams.set('rank', taxon.rank.toUpperCase())
    url.searchParams.set('strict', 'true')
    const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon authorship verification)' }, signal: AbortSignal.timeout(30000) })
    assert.ok(response.ok, `GBIF HTTP ${response.status}`)
    const data = await response.json()
    const value = { node: taxon.id, requested: taxon.scientificName, matchType: data.matchType, scientificName: data.scientificName ?? null, canonicalName: data.canonicalName ?? null, status: data.status ?? null, usageKey: data.usageKey ?? null, acceptedUsageKey: data.acceptedUsageKey ?? null, confidence: data.confidence ?? null }
    cached.set(taxon.id, value); values.push(value)
  }
  results.push({ node: row.node, item: row.item, values })
}
const proof = { sourceSha256: createHash('sha256').update(input).digest('hex'), checkedAt: new Date().toISOString(), results }
writeFileSync(root + (group === 'homonym' ? 'homonym-authorship-gbif-checks.json' : `${group}-authorship-gbif-checks.json`), JSON.stringify(proof), { flag: 'wx' })
console.log(JSON.stringify({ rows: results.length, taxonomyRecords: cached.size, exact: [...cached.values()].filter(row => row.matchType === 'EXACT').length, results: results.slice(0, 3) }))
