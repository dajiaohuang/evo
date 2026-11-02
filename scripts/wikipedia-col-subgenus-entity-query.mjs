import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec(`PRAGMA busy_timeout=15000;
 CREATE TABLE IF NOT EXISTS subgenus_entity_jobs(item TEXT PRIMARY KEY,status TEXT NOT NULL DEFAULT 'pending',col_ids TEXT,checked_at TEXT);
 CREATE INDEX IF NOT EXISTS subgenus_entity_jobs_status ON subgenus_entity_jobs(status);`)
assert.ok(db.prepare("SELECT value FROM meta WHERE key='subgenus_page_source_sha256'").get()?.value)
const blockedUntil=db.prepare("SELECT value FROM meta WHERE key='subgenus_entity_not_before'").get()?.value
if(blockedUntil&&Date.parse(blockedUntil)>Date.now())throw new Error(`Wikidata requested retry after ${blockedUntil}; batch remains pending`)
db.exec("INSERT OR IGNORE INTO subgenus_entity_jobs(item) SELECT DISTINCT item FROM subgenus_page_jobs WHERE status='available' AND item IS NOT NULL")
const arg=process.argv.indexOf('--batches'),limit=arg<0?100:Number(process.argv[arg+1]);assert.ok(Number.isInteger(limit)&&limit>0&&limit<=1000)
const next=db.prepare("SELECT item FROM subgenus_entity_jobs WHERE status='pending' ORDER BY rowid LIMIT 50")
const update=db.prepare("UPDATE subgenus_entity_jobs SET status='queried',col_ids=?,checked_at=? WHERE item=? AND status='pending'")
let last=0,batches=0,checked=0
while(batches<limit){
 const ids=next.all().map(x=>x.item);if(!ids.length)break
 const delay=Math.max(0,2000-(Date.now()-last));if(delay)await new Promise(resolve=>setTimeout(resolve,delay));last=Date.now()
 const query=new URLSearchParams({action:'wbgetentities',format:'json',ids:ids.join('|'),props:'claims',maxlag:'5'})
 const response=await fetch('https://www.wikidata.org/w/api.php?'+query,{signal:AbortSignal.timeout(45000),headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy identifier verification)'}})
 if(!response.ok){const seconds=Number(response.headers.get('retry-after'));if(seconds>0)db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('subgenus_entity_not_before',?)").run(new Date(Date.now()+seconds*1000).toISOString());throw new Error(`Wikidata API HTTP ${response.status}; batch remains pending`)}
 const data=await response.json()
 if(data.error){if(data.error.code==='maxlag')db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('subgenus_entity_not_before',?)").run(new Date(Date.now()+60000).toISOString());throw new Error(`Wikidata API ${JSON.stringify(data.error)}; batch remains pending`)}
 assert.ok(data.entities)
 const at=new Date().toISOString()
 db.exec('BEGIN IMMEDIATE')
 try{
  for(const id of ids){
   const entity=data.entities[id];assert.ok(entity&&!Object.hasOwn(entity,'missing'),id)
   const values=[...new Set((entity.claims?.P10585??[]).filter(x=>x.rank!=='deprecated').map(x=>x.mainsnak?.datavalue?.value).filter(x=>typeof x==='string'))]
   assert.equal(update.run(JSON.stringify(values),at,id).changes,1)
  }
  db.exec('COMMIT')
 }catch(error){db.exec('ROLLBACK');throw error}
 batches++;checked+=ids.length
 if(batches%10===0)console.log(JSON.stringify({batches,checked,pending:db.prepare("SELECT COUNT(*) n FROM subgenus_entity_jobs WHERE status='pending'").get().n}))
}
console.log(JSON.stringify({status:'checkpoint',batches,checked,counts:db.prepare('SELECT status,COUNT(*) n FROM subgenus_entity_jobs GROUP BY status').all()}))
db.close()
