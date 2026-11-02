import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { isAbsolute,join,relative,resolve,sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
const root=resolve('.git/evo-wikipedia-col26-8'),snapshot=resolve(process.argv[2]??'')
const child=relative(root,snapshot);assert.ok(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep))
const bytes=readFileSync(join(snapshot,'manifest.json')),manifest=JSON.parse(bytes)
assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only');assert.equal(manifest.stats.pendingNodes,0)
const digest=createHash('sha256').update(bytes).digest('hex')
const db=new DatabaseSync(join(root,'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS abbreviated_wikidata_targets(id TEXT PRIMARY KEY); CREATE TABLE IF NOT EXISTS abbreviated_wikidata_lookup(name TEXT PRIMARY KEY,status TEXT NOT NULL DEFAULT 'pending',candidates_json TEXT,checked_at TEXT); CREATE INDEX IF NOT EXISTS abbreviated_wikidata_lookup_status ON abbreviated_wikidata_lookup(status);`)
const previous=db.prepare("SELECT value FROM meta WHERE key='abbreviated_wikidata_source_sha256'").get()?.value;assert.ok(!previous||previous===digest)
if(!previous){
 const add=db.prepare('INSERT OR IGNORE INTO abbreviated_wikidata_targets(id) VALUES(?)');db.exec('BEGIN IMMEDIATE')
 try{
  for(const file of Object.values(manifest.shards)){
   const data=readFileSync(join(snapshot,file.path));assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256)
   for(const [id,entry] of Object.entries(JSON.parse(gunzipSync(data)).entries))if(['unresolved','ambiguous'].includes(entry.status))add.run(id)
  }
  db.exec('INSERT OR IGNORE INTO abbreviated_wikidata_lookup(name) SELECT s.name FROM abbreviated_wikidata_targets t JOIN subgenus_names s ON s.node_id=t.id')
  db.exec("UPDATE abbreviated_wikidata_lookup SET status='queried',candidates_json=(SELECT n.candidates_json FROM names n WHERE n.name=abbreviated_wikidata_lookup.name),checked_at=(SELECT n.checked_at FROM names n WHERE n.name=abbreviated_wikidata_lookup.name) WHERE EXISTS (SELECT 1 FROM names n WHERE n.name=abbreviated_wikidata_lookup.name AND n.status='queried')")
  db.exec("UPDATE abbreviated_wikidata_lookup SET status='queried',candidates_json=(SELECT n.candidates_json FROM synonym_wikidata_lookup n WHERE n.name=abbreviated_wikidata_lookup.name),checked_at=(SELECT n.checked_at FROM synonym_wikidata_lookup n WHERE n.name=abbreviated_wikidata_lookup.name) WHERE status='pending' AND EXISTS (SELECT 1 FROM synonym_wikidata_lookup n WHERE n.name=abbreviated_wikidata_lookup.name AND n.status='queried')")
  db.prepare("INSERT INTO meta(key,value) VALUES('abbreviated_wikidata_source_sha256',?)").run(digest);db.exec('COMMIT')
 }catch(error){db.exec('ROLLBACK');throw error}
}
console.log(JSON.stringify({status:'complete',sourceSha256:digest,targets:db.prepare('SELECT COUNT(*) n FROM abbreviated_wikidata_targets').get().n,counts:db.prepare('SELECT status,COUNT(*) n FROM abbreviated_wikidata_lookup GROUP BY status').all()}));db.close()
