import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { enrichSpecies } from './enrich-wikipedia-species.mjs'

const sources = ['data/navigation/atlas-ontology.json', 'data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json']
const overrides = JSON.parse(readFileSync('data/wikipedia-overrides.json', 'utf8'))
const nodes = []
function visit(node, source) {
  nodes.push({ id: node.id, name: node.name, rank: node.rank, source })
  for (const child of node.children ?? []) visit(child, source)
}
for (const source of sources) {
  const tree = JSON.parse(readFileSync(source, 'utf8'))
  visit(tree.root ?? tree, source)
}
const names = [...new Set(nodes.map(node => node.name))]
const entries = {}
for (let offset = 0; offset < names.length; offset += 25) {
  const batch = names.slice(offset, offset + 25)
  const query = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', redirects: '1',
    titles: batch.map(name => overrides[name]?.title ?? name).join('|'), prop: 'info|pageprops|langlinks', inprop: 'url', lllimit: 'max', lllang: 'zh',
  })
  let data
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch('https://en.wikipedia.org/w/api.php?' + query, {
        headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; Wikipedia link mapping)' },
        signal: AbortSignal.timeout(30000),
      })
      if (!response.ok) throw new Error('Wikipedia HTTP ' + response.status)
      data = await response.json()
      if (!data.query?.pages) throw new Error(JSON.stringify(data.error ?? 'Invalid Wikipedia response'))
      break
    } catch (error) { if (attempt === 2) throw error }
  }
  const aliases = new Map([...(data.query.normalized ?? []), ...(data.query.redirects ?? [])].map(entry => [entry.from, entry.to]))
  const pages = new Map(data.query.pages.map(page => [page.title, page]))
  for (const name of batch) {
    let title = overrides[name]?.title ?? name
    const visited = new Set()
    while (aliases.has(title) && !visited.has(title)) { visited.add(title); title = aliases.get(title) }
    const page = pages.get(title)
    const base = { queriedName: name, checkedAt: new Date().toISOString(), ...(overrides[name] ? { identityOverride: overrides[name] } : {}) }
    const nonTaxon = nodes.filter(node => node.name === name).every(node => ['navigation group', 'research dataset', 'research sample', 'specimen'].includes(node.rank))
    if (nonTaxon) entries[name] = { ...base, status: 'not-applicable' }
    else if (!page || page.missing || page.invalid) entries[name] = { ...base, status: 'missing' }
    else if (page.ns !== 0 || Object.hasOwn(page.pageprops ?? {}, 'disambiguation')) entries[name] = { ...base, status: 'ambiguous', title }
    else entries[name] = { ...base, status: 'matched', title: page.title, pageId: page.pageid, url: page.fullurl,
      zhTitle: page.langlinks?.find(link => link.lang === 'zh')?.title }
  }
  console.log('Wikipedia checked ' + Object.keys(entries).length + '/' + names.length)
}
// A species may be described within its genus article without a binomial
// redirect. Accept this only when the article's lead explicitly names it.
await enrichSpecies(entries, nodes)
mkdirSync('public/wikipedia', { recursive: true })
const counts = { matched: 0, missing: 0, ambiguous: 0, 'not-applicable': 0 }
for (const entry of Object.values(entries)) counts[entry.status]++
const result = { schemaVersion: 1, generatedAt: new Date().toISOString(),
  sources: [...sources, 'data/wikipedia-overrides.json'].map(path => ({ path, sha256: createHash('sha256').update(readFileSync(path)).digest('hex') })),
  representedNodes: nodes.length, uniqueNames: names.length, checkedNames: Object.keys(entries).length, counts, nodes, entries }
writeFileSync('public/wikipedia/mapping.json', JSON.stringify(result, null, 2) + '\n')
console.log(JSON.stringify({ representedNodes: nodes.length, uniqueNames: names.length, counts }))
