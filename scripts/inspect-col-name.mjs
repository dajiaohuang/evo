import { DatabaseSync } from 'node:sqlite'
const names = process.argv.slice(2)
if (!names.length) throw new Error('Provide exact catalogue names')
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const query = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?')
for (const name of names) console.log(JSON.stringify({ name, nodes: query.all(name) }))
db.close()
