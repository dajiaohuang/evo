import { DatabaseSync } from 'node:sqlite'
import { readFileSync } from 'node:fs'
const root = '.git/evo-wikipedia-col26-8/'
const rows = JSON.parse(readFileSync(root + 'late-no-col-instance-checks.json')).rows.filter(row => row.taxonNames.length)
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true })
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map(row => row.name)
const candidateTables = tables.filter(name => /candidate|link/.test(name)).map(name => ({ name, columns: db.prepare(`PRAGMA table_info(${name})`).all().map(row => row.name) })).filter(table => table.columns.includes('node_id') && (table.columns.includes('item') || table.columns.includes('target_item')))
const checks = candidateTables.map(table => ({ name: table.name, get: db.prepare(`SELECT 1 FROM ${table.name} WHERE node_id=? AND ${table.columns.includes('item') ? 'item' : 'target_item'}=? LIMIT 1`) }))
const holds = db.prepare('SELECT reason FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
for (const row of rows) {
  const item = `https://www.wikidata.org/entity/${row.item}`
  const found = checks.filter(table => table.get.get(row.node, item)).map(table => table.name)
  console.log(JSON.stringify({ node: row.node, name: row.name, item: row.item, target: row.taxonNames, held: holds.get(row.node, item)?.reason ?? null, found }))
}
db.close()
