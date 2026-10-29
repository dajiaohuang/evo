import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
const map = JSON.parse(readFileSync('public/wikipedia/mapping.json', 'utf8'))
assert.equal(map.schemaVersion, 1)
for (const source of map.sources) assert.equal(createHash('sha256').update(readFileSync(source.path)).digest('hex'), source.sha256, source.path)
const nodes = []
function visit(n) { nodes.push(n); for (const c of n.children ?? []) visit(c) }
visit(JSON.parse(readFileSync('data/navigation/atlas-ontology.json')))
visit(JSON.parse(readFileSync('data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json')).root)
assert.equal(nodes.length, map.representedNodes)
assert.equal(new Set(nodes.map(n => n.name)).size, map.uniqueNames)
assert.equal(Object.keys(map.entries).length, map.checkedNames)
assert.equal(map.checkedNames, map.uniqueNames)
const counts = { matched: 0, missing: 0, ambiguous: 0, 'not-applicable': 0 }
for (const node of nodes) assert.ok(Object.hasOwn(map.entries, node.name), node.name)
for (const [name, entry] of Object.entries(map.entries)) {
  assert.equal(entry.queriedName, name)
  assert.ok(Object.hasOwn(counts, entry.status))
  counts[entry.status]++
  if (entry.status === 'matched') {
    const url = new URL(entry.url)
    assert.equal(url.origin, 'https://en.wikipedia.org')
    assert.ok(url.pathname.startsWith('/wiki/'))
    assert.ok(entry.title && Number.isSafeInteger(entry.pageId))
  }
}
assert.deepEqual(counts, map.counts)
assert.equal(map.entries.Pan.title, 'Pan (genus)')
assert.equal(map.entries.Wightia.identityOverride.title, 'Wightia (pterosaur)')
assert.equal(map.entries.Articulata.identityOverride.title, 'Articulata (Brachiopoda)')
console.log(JSON.stringify({ status: 'passed', representedNodes: nodes.length, names: map.uniqueNames, counts }))
