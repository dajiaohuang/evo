import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
try{
  assert.ok(db.prepare("SELECT value FROM meta WHERE key='unlinked_qualified_higher_page_source_sha256'").get()?.value)
  const until=db.prepare("SELECT value FROM meta WHERE key='unlinked_qualified_higher_item_not_before'").get()?.value;assert.ok(!until||Date.parse(until)<=Date.now(),'Wikidata retry window remains active')
  const rows=db.prepare("SELECT item FROM unlinked_qualified_higher_entity_jobs WHERE status='pending' ORDER BY item").all();if(!rows.length){console.log(JSON.stringify({status:'complete',checked:0}));process.exit(0)}
  assert.ok(rows.length<=40&&rows.every(r=>/^Q\d+$/.test(r.item)))
  const url=new URL('https://www.wikidata.org/w/api.php');for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'claims',ids:rows.map(r=>r.item).join('|'),maxlag:'10'}))url.searchParams.set(k,v)
  const response=await fetch(url,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; higher taxon identity verification)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const data=await response.json();assert.ok(!data.error,JSON.stringify(data.error))
  const update=db.prepare("UPDATE unlinked_qualified_higher_entity_jobs SET status='queried',claims_json=?,checked_at=? WHERE item=? AND status='pending'"),checkedAt=new Date().toISOString(),summaries=[]
  db.exec('BEGIN IMMEDIATE');try{for(const row of rows){const entity=data.entities[row.item];assert.ok(entity&&!Object.hasOwn(entity,'missing'),row.item);const value=prop=>(entity.claims?.[prop]??[]).filter(c=>c.rank!=='deprecated'&&c.mainsnak?.snaktype==='value').map(c=>c.mainsnak.datavalue.value?.id??c.mainsnak.datavalue.value).filter(Boolean),claims={names:value('P225'),ranks:value('P105'),colIds:value('P10585'),parents:value('P171'),instances:value('P31')};assert.equal(update.run(JSON.stringify(claims),checkedAt,row.item).changes,1);summaries.push({item:row.item,...claims})}db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'complete',checked:rows.length,items:summaries}))
}finally{db.close()}
