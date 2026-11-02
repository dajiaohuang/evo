import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
const root = '.git/evo-wikipedia-col26-8/'
const bytes = readFileSync(root + 'late-no-col-instance-checks.json')
const data = JSON.parse(bytes)
const wanted = new Set(['XVSH','77V5','BY65Q','B3PKJ','3WHVW','CPS5N','94WB7','S2B'])
const pairs = new Map()
for (const row of data.rows) if (wanted.has(row.node) && row.taxonNames.length) pairs.set(row.node, { node: row.node, source: row.name, target: row.taxonNames[0], item: row.item, url: row.url })
const names = [...new Set([...pairs.values()].flatMap(row => [row.source, row.target]))]
const matches = {}
for (const name of names) {
  const url = new URL('https://api.gbif.org/v1/species/match'); url.searchParams.set('name', name); url.searchParams.set('strict', 'true'); url.searchParams.set('verbose', 'true')
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon identity checks)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`GBIF HTTP ${response.status} for ${name}`)
  matches[name] = await response.json()
}
const proof = { sourceSha256: createHash('sha256').update(bytes).digest('hex'), checkedAt: new Date().toISOString(), pairs: [...pairs.values()].map(row => ({ ...row, sourceMatch: matches[row.source], targetMatch: matches[row.target] })) }
writeFileSync(root + 'late-taxon-gbif-checks.json', JSON.stringify(proof), { flag: 'wx' })
for (const row of proof.pairs) console.log(JSON.stringify({ node: row.node, source: row.source, sourceMatch: [row.sourceMatch.matchType,row.sourceMatch.status,row.sourceMatch.usageKey,row.sourceMatch.acceptedUsageKey,row.sourceMatch.scientificName], target: row.target, targetMatch: [row.targetMatch.matchType,row.targetMatch.status,row.targetMatch.usageKey,row.targetMatch.acceptedUsageKey,row.targetMatch.scientificName] }))
