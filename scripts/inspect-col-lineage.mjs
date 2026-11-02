import { DatabaseSync } from 'node:sqlite'
const ids = process.argv.slice(2)
if (!ids.length) throw new Error('Provide catalogue IDs')
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
for (const id of ids) {
  const path = [], seen = new Set()
  let current = node.get(id)
  while (current && !seen.has(current.id)) { seen.add(current.id); path.push(current); current = current.parent_id ? node.get(current.parent_id) : null }
  console.log(JSON.stringify({ id, path }))
}
db.close()
