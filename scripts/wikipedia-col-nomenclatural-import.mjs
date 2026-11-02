import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync} from 'node:fs'
import {gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',bytes=readFileSync(root+'wikidata-nomenclatural-checked.json'),data=JSON.parse(bytes)
for(const [file,key] of [['wikidata-nomenclatural-combined-pairs.json','pairSha256'],['wikidata-nomenclatural-details.json','detailsSha256']])assert.equal(createHash('sha256').update(readFileSync(root+file)).digest('hex'),data[key])
const pairs=JSON.parse(readFileSync(root+'wikidata-nomenclatural-combined-pairs.json'))
for(const source of pairs.sourceHashes)assert.equal(createHash('sha256').update(readFileSync(root+source.file)).digest('hex'),source.sha256)
const allowed=new Map(pairs.hits.map(p=>[p.id+'\0'+p.source+'\0'+p.target,p]))
const dir=root+'c-scratch/snapshot-contextual-inverse-1/',manifest=JSON.parse(readFileSync(dir+'manifest.json')),shards=new Map()
const db=new DatabaseSync(root+'inventory.sqlite'),node=db.prepare('SELECT name,rank FROM nodes WHERE id=?')
const columns=db.prepare('PRAGMA table_info(wikidata_synonym_edge_targets)').all();assert.ok(columns.some(x=>x.name==='source_match'))
if(!columns.some(x=>x.name==='relationship_kind'))db.exec("ALTER TABLE wikidata_synonym_edge_targets ADD COLUMN relationship_kind TEXT NOT NULL DEFAULT 'synonym'")
const add=db.prepare('INSERT OR REPLACE INTO wikidata_synonym_edge_targets (node_id,target_item,source_item,source_name,source_rank,target_names,target_ranks,target_cols,pages,source_match,relationship_kind) VALUES(?,?,?,?,?,?,?,?,?,?,?)')
let count=0
db.exec('BEGIN IMMEDIATE')
try{for(const row of data.results){
 const source=allowed.get(row.id+'\0'+row.source+'\0'+row.target);assert.ok(source);assert.ok(source.kinds.every(k=>['P12766','P566-inverse','P12764','P694-inverse'].includes(k)))
 assert.match(row.source,/^http:\/\/www\.wikidata\.org\/entity\/Q\d+$/);assert.match(row.target,/^http:\/\/www\.wikidata\.org\/entity\/Q\d+$/)
 const prefix=createHash('sha256').update(row.id).digest('hex').slice(0,2);if(!shards.has(prefix))shards.set(prefix,JSON.parse(gunzipSync(readFileSync(dir+manifest.shards[prefix].path))).entries)
 const entry=shards.get(prefix)[row.id];assert.equal(entry?.status,'unresolved');assert.equal(entry.matchKind,source.sourceMatch);assert.equal(entry.item,row.source.replace('http://','https://'))
 const n=node.get(row.id);assert.ok(n)
 for(const p of row.pages){assert.equal(p.item,row.target.split('/').at(-1));assert.equal(p.available,true);assert.ok(row.urls.includes(p.url))}
 assert.ok(row.pages.length)
 add.run(row.id,row.target.replace('http://','https://'),entry.item,n.name,n.rank,JSON.stringify(row.names),JSON.stringify(row.ranks),JSON.stringify(row.targetCols),JSON.stringify(row.pages),source.sourceMatch,'nomenclatural');count++
}assert.ok(count>0);db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('wikidata_nomenclatural_source_sha256',?)").run(createHash('sha256').update(bytes).digest('hex'));db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}
console.log(JSON.stringify({status:'imported',edges:count}));db.close()
