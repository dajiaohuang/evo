import { readFileSync } from 'node:fs'
const inventory = JSON.parse(readFileSync('.git/evo-wikipedia-col26-8/reptiledb-archive-synonym-inventory-20261031.json'))
for (const row of inventory.values) {
  const url = new URL('https://www.wikidata.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'wbsearchentities', format: 'json', language: 'en', search: row.name, type: 'item', limit: '20', maxlag: '10' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; scientific-name metadata lookup)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Wikidata HTTP ${response.status}`)
  const data = await response.json(); if (data.error) throw new Error(JSON.stringify(data.error))
  console.log(JSON.stringify({ node: row.node, name: row.name, candidates: (data.search ?? []).map(item => ({ id: item.id, label: item.label, match: item.match })) }))
}
