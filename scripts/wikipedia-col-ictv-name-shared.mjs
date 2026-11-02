import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {DatabaseSync} from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite');db.exec('PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS ictv_name_shared(item TEXT PRIMARY KEY,node_count INTEGER NOT NULL)')
assert.equal(db.prepare("SELECT COUNT(*) n FROM ictv_name_lookup WHERE status='pending'").get().n,0)
const rows=db.prepare("SELECT t.node_id,l.candidates_json FROM ictv_name_targets t JOIN ictv_name_lookup l ON l.name=t.name WHERE l.status='queried'"),items=new Map()
for(const row of rows.iterate())for(const c of JSON.parse(row.candidates_json))if(c.articles.length){if(!items.has(c.item))items.set(c.item,new Set());items.get(c.item).add(row.node_id)}
const shared=[...items].filter(([,nodes])=>nodes.size>1).map(([item,nodes])=>({item,count:nodes.size})).sort((a,b)=>a.item.localeCompare(b.item)),hash=createHash('sha256').update(JSON.stringify(shared)).digest('hex')
const prior=db.prepare("SELECT value FROM meta WHERE key='ictv_name_shared_sha256'").get()?.value;assert.ok(!prior||prior===hash,'Shared-item evidence changed')
if(!prior){const add=db.prepare('INSERT INTO ictv_name_shared VALUES(?,?)');db.exec('BEGIN IMMEDIATE');try{for(const row of shared)add.run(row.item,row.count);db.prepare("INSERT INTO meta(key,value) VALUES('ictv_name_shared_sha256',?)").run(hash);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}}
console.log(JSON.stringify({status:'complete',items:items.size,shared:shared.length,sha256:hash}));db.close()
