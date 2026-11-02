import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { isAbsolute,join,relative,resolve,sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
const root=resolve('.git/evo-wikipedia-col26-8'), snapshot=resolve(process.argv[2]??'')
const child=relative(root,snapshot); assert.ok(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep))
const bytes=readFileSync(join(snapshot,'manifest.json')),manifest=JSON.parse(bytes)
assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only');assert.equal(manifest.stats.pendingNodes,0)
const digest=createHash('sha256').update(bytes).digest('hex')
const db=new DatabaseSync(join(root,'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000;
 CREATE TABLE IF NOT EXISTS subgenus_rank_names(name TEXT NOT NULL,node_id TEXT NOT NULL,original_name TEXT NOT NULL,kind TEXT NOT NULL,PRIMARY KEY(name,node_id));
 CREATE INDEX IF NOT EXISTS subgenus_rank_names_node ON subgenus_rank_names(node_id);`)
const previous=db.prepare("SELECT value FROM meta WHERE key='subgenus_rank_source_sha256'").get()?.value
assert.ok(!previous||previous===digest)
if(!previous){
 const get=db.prepare('SELECT name,rank FROM nodes WHERE id=?')
 const add=db.prepare('INSERT OR IGNORE INTO subgenus_rank_names VALUES(?,?,?,?)')
 db.exec('BEGIN IMMEDIATE')
 try{
  for(const file of Object.values(manifest.shards)){
   const data=readFileSync(join(snapshot,file.path));assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256)
   for(const [id,entry] of Object.entries(JSON.parse(gunzipSync(data)).entries)){
    if(!['unresolved','ambiguous'].includes(entry.status))continue
    const row=get.get(id);if(row?.rank!=='subgenus')continue
    const match=/^([A-Z][a-z]+) \(([A-Z][a-z]+)\)$/.exec(row.name);if(!match)continue
    const [,genus,subgenus]=match
    add.run(`${subgenus} (subgenus)`,id,row.name,'rank-title')
    if(genus!==subgenus)add.run(subgenus,id,row.name,'name-title')
   }
  }
  db.prepare("INSERT INTO meta(key,value) VALUES('subgenus_rank_source_sha256',?)").run(digest);db.exec('COMMIT')
 }catch(error){db.exec('ROLLBACK');throw error}
}
console.log(JSON.stringify({status:'complete',sourceSha256:digest,counts:db.prepare('SELECT COUNT(*) rows,COUNT(DISTINCT name) names,COUNT(DISTINCT node_id) nodes FROM subgenus_rank_names').get()}));db.close()
