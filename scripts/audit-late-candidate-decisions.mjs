import { DatabaseSync } from 'node:sqlite'
import { readFileSync } from 'node:fs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true })
const rows = JSON.parse(readFileSync(root + 'late-uncovered-title-item-checks.json')).rows
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map(x => x.name).filter(x => /candidate|hold/.test(x))
for (const table of tables) console.log(JSON.stringify({ table, columns: db.prepare(`PRAGMA table_info(${table})`).all().map(x => x.name) }))
const unkeyed = rows.filter(r => r.status === 'available' && !r.item)
console.log(JSON.stringify({ rows: rows.length, unkeyed: unkeyed.length, sample: unkeyed.slice(0, 5) }))
const known = db.prepare('SELECT 1 FROM nodes WHERE id=?')
const categories = new Map()
for (const row of rows) {
  const ids = row.claims?.colIds ?? []
  const category = row.status !== 'available' ? 'unavailable' : !row.item ? 'no-item' : ids.includes(row.node) ? 'same-col-id' : ids.some(id => known.get(id)) ? 'different-tree-id' : ids.length ? 'other-col-id' : 'no-col-id'
  if (!categories.has(category)) categories.set(category, { rows: 0, nodes: new Set(), examples: [] })
  const group = categories.get(category); group.rows++; group.nodes.add(row.node)
  if (group.examples.length < 5) group.examples.push({ node: row.node, name: row.name, item: row.item, colIds: ids, url: row.url })
}
console.log(JSON.stringify(Object.fromEntries([...categories].map(([key, value]) => [key, { ...value, nodes: value.nodes.size }]))))
db.close()
