import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { isAbsolute,join,relative,resolve,sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
const root=resolve('.git/evo-wikipedia-col26-8'),snapshot=resolve(process.argv[2]??'')
const child=relative(root,snapshot);assert.ok(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep))
const bytes=readFileSync(join(snapshot,'manifest.json')),manifest=JSON.parse(bytes)
assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only');assert.equal(manifest.stats.pendingNodes,0);assert.equal(manifest.labelWikidata.pendingNames,0)
const digest=createHash('sha256').update(bytes).digest('hex')
const db=new DatabaseSync(join(root,'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS alias_wikidata_targets(id TEXT PRIMARY KEY); CREATE TABLE IF NOT EXISTS alias_wikidata_lookup(name TEXT PRIMARY KEY,status TEXT NOT NULL DEFAULT 'pending',candidates_json TEXT,checked_at TEXT); CREATE INDEX IF NOT EXISTS alias_wikidata_lookup_status ON alias_wikidata_lookup(status);`)
const previous=db.prepare("SELECT value FROM meta WHERE key='alias_wikidata_source_sha256'").get()?.value;assert.ok(!previous||previous===digest,'Alias inventory already uses another snapshot')
if(!previous){
 const add=db.prepare('INSERT OR IGNORE INTO alias_wikidata_targets(id) VALUES(?)');db.exec('BEGIN IMMEDIATE')
 try{
  for(const file of Object.values(manifest.shards)){
   const compressed=readFileSync(join(snapshot,file.path));assert.equal(createHash('sha256').update(compressed).digest('hex'),file.sha256)
   for(const [id,entry] of Object.entries(JSON.parse(gunzipSync(compressed)).entries))if(['unresolved','ambiguous'].includes(entry.status))add.run(id)
  }
  db.exec('INSERT OR IGNORE INTO alias_wikidata_lookup(name) SELECT n.name FROM alias_wikidata_targets t JOIN nodes n ON n.id=t.id')
  db.exec('INSERT OR IGNORE INTO alias_wikidata_lookup(name) SELECT s.name FROM alias_wikidata_targets t JOIN synonym_names s ON s.node_id=t.id')
  db.prepare("INSERT INTO meta(key,value) VALUES('alias_wikidata_source_sha256',?)").run(digest);db.exec('COMMIT')
 }catch(error){db.exec('ROLLBACK');throw error}
}
console.log(JSON.stringify({status:'complete',sourceSha256:digest,targets:db.prepare('SELECT COUNT(*) n FROM alias_wikidata_targets').get().n,counts:db.prepare('SELECT status,COUNT(*) n FROM alias_wikidata_lookup GROUP BY status').all()}));db.close()
