import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {DatabaseSync} from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite');db.exec('PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS ictv_shared_items(item TEXT PRIMARY KEY,node_count INTEGER NOT NULL)')
const items=new Map(),add=(item,id)=>{if(!item)return;if(!items.has(item))items.set(item,new Set());items.get(item).add(id)}
for(const [targets,pages,join] of [['ictv_exemplar_targets','ictv_exemplar_pages','p.title=t.title'],['ictv_multi_targets','ictv_multi_pages','p.title=t.title AND p.locale=t.locale'],['ictv_split_targets','ictv_split_pages','p.title=t.title AND p.locale=t.locale']])for(const r of db.prepare(`SELECT t.node_id,p.item FROM ${targets} t JOIN ${pages} p ON ${join} WHERE p.status='available' AND p.item IS NOT NULL`).iterate())add(`https://www.wikidata.org/entity/${r.item}`,r.node_id)
for(const r of db.prepare("SELECT t.node_id,p.item,e.type_ids FROM ictv_norm_targets t JOIN ictv_norm_pages p ON p.locale=t.locale AND p.title=t.title JOIN ictv_norm_entities e ON e.item=p.item WHERE p.status='available' AND e.status='queried'").iterate())if(JSON.parse(r.type_ids??'[]').some(t=>['Q16521','Q808','Q855769','Q87756246'].includes(t)))add(`https://www.wikidata.org/entity/${r.item}`,r.node_id)
for(const r of db.prepare("SELECT t.node_id,l.candidates_json FROM ictv_name_targets t JOIN ictv_name_lookup l ON l.name=t.name WHERE l.status='queried'").iterate())for(const c of JSON.parse(r.candidates_json))if(c.articles.length)add(c.item,r.node_id)
const shared=[...items].filter(([,nodes])=>nodes.size>1).map(([item,nodes])=>({item,count:nodes.size})).sort((a,b)=>a.item.localeCompare(b.item)),hash=createHash('sha256').update(JSON.stringify(shared)).digest('hex'),prior=db.prepare("SELECT value FROM meta WHERE key='ictv_shared_source_sha256'").get()?.value
assert.ok(!prior||prior===hash,'ICTV shared-item evidence changed')
if(!prior){const insert=db.prepare('INSERT INTO ictv_shared_items VALUES(?,?)');db.exec('BEGIN IMMEDIATE');try{for(const row of shared)insert.run(row.item,row.count);db.prepare("INSERT INTO meta(key,value) VALUES('ictv_shared_source_sha256',?)").run(hash);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}}
console.log(JSON.stringify({status:'complete',items:items.size,shared:shared.length,sha256:hash}));db.close()
