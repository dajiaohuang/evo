import { readdirSync, readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'

// An external COL identifier can be from another release. Only report it as
// a tree conflict if it identifies a different node in this inventory.
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true })
db.exec('PRAGMA busy_timeout=15000')
const lookup = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
const counts = { files: 0, exactNamesWithOtherIds: 0, externalOnly: 0, treeConflicts: 0 }
const examples = []
for (const file of readdirSync(root).filter(name => /^live-same-title-identities-(?:[a-z0-9-]+-)?after-\d+\.json$/.test(name))) {
  const proof = JSON.parse(readFileSync(root + file))
  counts.files++
  for (const row of proof.rows) {
    if (!row.instances.includes('Q16521') || !row.names.includes(row.node.name) || !row.colIds.length || row.colIds.includes(row.node.id)) continue
    counts.exactNamesWithOtherIds++
    const targets = row.colIds.map(id => lookup.get(id)).filter(Boolean)
    if (!targets.length) { counts.externalOnly++; continue }
    counts.treeConflicts++
    if (examples.length < 20) examples.push({ file, node: row.node, item: row.actual_item, url: row.url, targets })
  }
}
console.log(JSON.stringify({ ...counts, examples }))
db.close()
