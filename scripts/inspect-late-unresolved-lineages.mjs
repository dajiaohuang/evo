import { DatabaseSync } from 'node:sqlite'
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const get = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
const find = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=? LIMIT 20')
for (const [id, target] of [['S2B','Ageniella'],['77V5','Enteridium'],['BY65Q','Trichinella spiralis'],['CPS5N','Epharmottomena eremophila'],['94WB7','Afroracotis argillacea']]) {
  const lineage = id => { const result=[]; let row=get.get(id); while(row && result.length < 20) { result.push({ id:row.id,name:row.name,rank:row.rank }); row=row.parent_id && get.get(row.parent_id) } return result }
  const targets=find.all(target)
  console.log(JSON.stringify({ id, source:lineage(id), target, targets:targets.map(row=>lineage(row.id)) }))
}
db.close()
