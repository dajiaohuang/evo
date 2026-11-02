import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { isAbsolute,join,relative,resolve,sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
const root=resolve('.git/evo-wikipedia-col26-8'), snapshot=resolve(process.argv[2]??'')
const child=relative(root,snapshot)
assert.ok(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep))
const bytes=readFileSync(join(snapshot,'manifest.json')), manifest=JSON.parse(bytes)
assert.equal(manifest.contentMode,'links-only')
assert.equal(manifest.releaseAlias,'COL26.8')
const digest=createHash('sha256').update(bytes).digest('hex')
const db=new DatabaseSync(join(root,'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000;
 CREATE TABLE IF NOT EXISTS subgenus_page_targets(node_id TEXT NOT NULL,locale TEXT NOT NULL,title TEXT NOT NULL,url TEXT NOT NULL,PRIMARY KEY(node_id,locale,title));
 CREATE TABLE IF NOT EXISTS subgenus_page_jobs(locale TEXT NOT NULL,title TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',item TEXT,canonical_title TEXT,checked_at TEXT,PRIMARY KEY(locale,title));
 CREATE INDEX IF NOT EXISTS subgenus_page_jobs_status ON subgenus_page_jobs(status,locale);`)
const previous=db.prepare("SELECT value FROM meta WHERE key='subgenus_page_source_sha256'").get()?.value
assert.ok(!previous||previous===digest,'Page inventory is already pinned to another snapshot')
if(!previous){
 const addTarget=db.prepare('INSERT OR IGNORE INTO subgenus_page_targets VALUES(?,?,?,?)')
 const addJob=db.prepare('INSERT OR IGNORE INTO subgenus_page_jobs(locale,title) VALUES(?,?)')
 const priority=['zh','en','de','fr','es','pt','nl','sv','ceb','war']
 db.exec('BEGIN IMMEDIATE')
 try{
  for(const file of Object.values(manifest.shards)){
   const data=readFileSync(join(snapshot,file.path)); assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256)
   for(const [id,entry] of Object.entries(JSON.parse(gunzipSync(data)).entries)){
    if(entry.status!=='candidate')continue
    const opts=(entry.options??[]).filter(x=>x.parentNames?.some(v=>v.startsWith('省略亚属候选 / Abbreviated subgenus:'))).map(x=>{
     const url=new URL(x.url); assert.equal(url.protocol,'https:'); assert.match(url.hostname,/^[a-z0-9-]+\.wikipedia\.org$/); assert.ok(url.pathname.startsWith('/wiki/'))
     return {url:x.url,locale:url.hostname.split('.')[0],title:decodeURIComponent(url.pathname.slice(6)).replaceAll('_',' ')}
    }).sort((a,b)=>{const ai=priority.indexOf(a.locale),bi=priority.indexOf(b.locale); return (ai<0?999:ai)-(bi<0?999:bi)||a.locale.localeCompare(b.locale)||a.title.localeCompare(b.title)})
    if(!opts.length)continue
    const best=opts[0]; assert.ok(!best.title.includes('|')); addTarget.run(id,best.locale,best.title,best.url); addJob.run(best.locale,best.title)
   }
  }
  db.prepare("INSERT INTO meta(key,value) VALUES('subgenus_page_source_sha256',?)").run(digest)
  db.exec('COMMIT')
 }catch(error){db.exec('ROLLBACK');throw error}
}
console.log(JSON.stringify({status:'complete',sourceSha256:digest,targets:db.prepare('SELECT COUNT(*) n FROM subgenus_page_targets').get().n,jobs:db.prepare('SELECT COUNT(*) n FROM subgenus_page_jobs').get().n,locales:db.prepare('SELECT locale,COUNT(*) n FROM subgenus_page_jobs GROUP BY locale ORDER BY n DESC LIMIT 12').all()}))
db.close()
