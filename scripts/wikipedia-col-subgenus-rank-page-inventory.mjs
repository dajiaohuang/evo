import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec(`PRAGMA busy_timeout=15000;
 CREATE TABLE IF NOT EXISTS subgenus_rank_page_targets(node_id TEXT PRIMARY KEY,locale TEXT NOT NULL,title TEXT NOT NULL,url TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS subgenus_rank_page_jobs(locale TEXT NOT NULL,title TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',item TEXT,canonical_title TEXT,checked_at TEXT,PRIMARY KEY(locale,title));
 CREATE INDEX IF NOT EXISTS subgenus_rank_page_jobs_status ON subgenus_rank_page_jobs(status,locale);`)
const source=db.prepare("SELECT value FROM meta WHERE key='subgenus_rank_source_sha256'").get()?.value;assert.ok(source)
assert.equal(db.prepare('SELECT COUNT(*) n FROM subgenus_rank_title_done').get().n,364)
const previous=db.prepare("SELECT value FROM meta WHERE key='subgenus_rank_page_source_sha256'").get()?.value;assert.ok(!previous||previous===source)
if(!previous){
 const priority=['zh','en','de','fr','es','pt','nl','sv','ceb','war']
 const best=new Map()
 for(const row of db.prepare('SELECT s.node_id,s.kind,t.locale,t.title FROM subgenus_rank_names s JOIN subgenus_rank_title_matches t ON t.name=s.name JOIN subgenus_rank_title_done d ON d.locale=t.locale AND d.source_sha256=t.source_sha256').iterate()){
  const p=priority.indexOf(row.locale),score=(row.kind==='rank-title'?0:1000)+(p<0?999:p), prev=best.get(row.node_id)
  if(!prev||score<prev.score||score===prev.score&&row.title.localeCompare(prev.title)<0)best.set(row.node_id,{...row,score})
 }
 const addTarget=db.prepare('INSERT INTO subgenus_rank_page_targets VALUES(?,?,?,?)'),addJob=db.prepare('INSERT OR IGNORE INTO subgenus_rank_page_jobs(locale,title) VALUES(?,?)')
 db.exec('BEGIN IMMEDIATE')
 try{
  for(const row of best.values()){
   const title=row.title.replaceAll('_',' ');assert.ok(!title.includes('|'));const url=`https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.title)}`
   addTarget.run(row.node_id,row.locale,title,url);addJob.run(row.locale,title)
  }
  db.prepare("INSERT INTO meta(key,value) VALUES('subgenus_rank_page_source_sha256',?)").run(source);db.exec('COMMIT')
 }catch(error){db.exec('ROLLBACK');throw error}
}
console.log(JSON.stringify({status:'complete',targets:db.prepare('SELECT COUNT(*) n FROM subgenus_rank_page_targets').get().n,jobs:db.prepare('SELECT COUNT(*) n FROM subgenus_rank_page_jobs').get().n,locales:db.prepare('SELECT locale,COUNT(*) n FROM subgenus_rank_page_jobs GROUP BY locale ORDER BY n DESC LIMIT 5').all()}));db.close()
