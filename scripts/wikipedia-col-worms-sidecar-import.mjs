import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync} from 'node:fs'
import {gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',proofBytes=readFileSync(root+'worms-sidecar-checked.json'),proof=JSON.parse(proofBytes),inventoryBytes=readFileSync(root+'worms-sidecar-inventory.json'),inventory=JSON.parse(inventoryBytes)
assert.equal(createHash('sha256').update(inventoryBytes).digest('hex'),proof.inventorySha256);assert.equal(proof.snapshotSha256,inventory.snapshotSha256)
const dir=root+'c-scratch/snapshot-nomenclatural-inverse-1/',manifestBytes=readFileSync(dir+'manifest.json'),manifest=JSON.parse(manifestBytes);assert.equal(createHash('sha256').update(manifestBytes).digest('hex'),proof.snapshotSha256)
const query=new DatabaseSync(root+'c-scratch/worms-sidecar-query.sqlite',{readOnly:true});assert.equal(query.prepare("SELECT COUNT(*) n FROM lookup WHERE status='pending'").get().n,0)
const rows=query.prepare("SELECT id,results_json FROM lookup WHERE status='queried' AND results_json!='[]' ORDER BY id").all();assert.equal(createHash('sha256').update(JSON.stringify(rows)).digest('hex'),proof.queryRowsSha256)
const queryById=new Map(rows.map(r=>[r.id,JSON.parse(r.results_json)])),inventoryByNode=new Map(inventory.values.map(r=>[r.node,r])),shards=new Map()
const db=new DatabaseSync(root+'inventory.sqlite'),node=db.prepare('SELECT name,rank FROM nodes WHERE id=?')
db.exec('CREATE TABLE IF NOT EXISTS worms_sidecar_candidates (node_id TEXT NOT NULL,item TEXT NOT NULL,external_id TEXT NOT NULL,source_name TEXT NOT NULL,target_names TEXT NOT NULL,target_ranks TEXT NOT NULL,target_cols TEXT NOT NULL,pages TEXT NOT NULL,PRIMARY KEY(node_id,item))')
const add=db.prepare('INSERT OR REPLACE INTO worms_sidecar_candidates VALUES(?,?,?,?,?,?,?,?)');let count=0
db.exec('BEGIN IMMEDIATE')
try{for(const row of proof.results){
 const original=inventoryByNode.get(row.id);assert.equal(original?.externalId,row.externalId)
 const prefix=createHash('sha256').update(row.id).digest('hex').slice(0,2);if(!shards.has(prefix))shards.set(prefix,JSON.parse(gunzipSync(readFileSync(dir+manifest.shards[prefix].path))).entries)
 assert.ok(['unresolved','ambiguous'].includes(shards.get(prefix)[row.id]?.status));const n=node.get(row.id);assert.equal(n?.rank,'species')
 const item=row.item.replace('https://','http://'),bindings=(queryById.get(row.externalId)??[]).filter(b=>b.item.value===item);assert.ok(bindings.length)
 const collect=key=>[...new Set(bindings.map(b=>b[key]?.value).filter(Boolean))].sort()
 assert.deepEqual([...row.names].sort(),collect('name'));assert.deepEqual([...row.ranks].sort(),collect('rank'));assert.deepEqual([...row.colIds].sort(),collect('col'));assert.deepEqual([...row.urls].sort(),collect('article'))
 assert.ok(!row.ranks.length||row.ranks.some(x=>x.endsWith('/Q7432')))
 for(const page of row.pages){assert.equal(page.item,row.item.split('/').at(-1));assert.equal(page.available,true);assert.ok(row.urls.includes(page.url))}assert.ok(row.pages.length)
 add.run(row.id,row.item,row.externalId,n.name,JSON.stringify(row.names),JSON.stringify(row.ranks),JSON.stringify(row.colIds),JSON.stringify(row.pages));count++
}assert.ok(count>0);db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('worms_sidecar_source_sha256',?)").run(createHash('sha256').update(proofBytes).digest('hex'));db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}
console.log(JSON.stringify({status:'imported',candidates:count}));db.close();query.close()
