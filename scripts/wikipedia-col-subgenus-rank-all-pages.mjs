import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec('PRAGMA busy_timeout=15000')
const source=db.prepare("SELECT value FROM meta WHERE key='subgenus_rank_source_sha256'").get()?.value
assert.ok(source);assert.equal(db.prepare('SELECT COUNT(*) n FROM subgenus_rank_title_done').get().n,364)
const previous=db.prepare("SELECT value FROM meta WHERE key='subgenus_rank_all_pages_source_sha256'").get()?.value
assert.ok(!previous||previous===source)
if(!previous){
 db.exec('BEGIN IMMEDIATE')
 try{
  const invalid=db.prepare("SELECT COUNT(*) n FROM subgenus_rank_title_matches WHERE instr(title,'|')>0").get().n;assert.equal(invalid,0)
  db.exec("INSERT OR IGNORE INTO subgenus_rank_page_jobs(locale,title) SELECT locale,replace(title,'_',' ') FROM subgenus_rank_title_matches")
  db.prepare("INSERT INTO meta(key,value) VALUES('subgenus_rank_all_pages_source_sha256',?)").run(source)
  db.exec('COMMIT')
 }catch(error){db.exec('ROLLBACK');throw error}
}
console.log(JSON.stringify({status:'complete',counts:db.prepare('SELECT status,COUNT(*) n FROM subgenus_rank_page_jobs GROUP BY status').all(),locales:db.prepare('SELECT COUNT(DISTINCT locale) n FROM subgenus_rank_page_jobs').get().n}));db.close()
