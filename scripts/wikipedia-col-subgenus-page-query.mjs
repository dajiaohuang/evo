import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec('PRAGMA busy_timeout=15000')
const rankMode=process.argv.includes('--rank-subgenus')
const table=rankMode?'subgenus_rank_page_jobs':'subgenus_page_jobs'
const sourceKey=rankMode?'subgenus_rank_page_source_sha256':'subgenus_page_source_sha256'
const limitKey=rankMode?'subgenus_rank_page_not_before':'subgenus_page_not_before'
assert.ok(db.prepare('SELECT value FROM meta WHERE key=?').get(sourceKey)?.value)
const blockedUntil=db.prepare('SELECT value FROM meta WHERE key=?').get(limitKey)?.value
if(blockedUntil&&Date.parse(blockedUntil)>Date.now())throw new Error(`Wikipedia requested retry after ${blockedUntil}; batch remains pending`)
const arg=process.argv.indexOf('--batches'), limit=arg<0?200:Number(process.argv[arg+1])
assert.ok(Number.isInteger(limit)&&limit>0&&limit<=1000)
const priority=['en','zh','de','fr','es','pt','nl','sv','ceb','war']
const counts=db.prepare(`SELECT locale,COUNT(*) n FROM ${table} WHERE status='pending' GROUP BY locale`).all()
counts.sort((a,b)=>{const ai=priority.indexOf(a.locale),bi=priority.indexOf(b.locale);return (ai<0?999:ai)-(bi<0?999:bi)||a.locale.localeCompare(b.locale)})
const next=db.prepare(`SELECT title FROM ${table} WHERE status='pending' AND locale=? ORDER BY rowid LIMIT 50`)
const update=db.prepare(`UPDATE ${table} SET status=?,item=?,canonical_title=?,checked_at=? WHERE locale=? AND title=? AND status='pending'`)
let last=0,batches=0,checked=0
for(const group of counts){
 const locale=group.locale; assert.match(locale,/^[a-z0-9-]+$/)
 while(batches<limit){
  const titles=next.all(locale).map(x=>x.title);if(!titles.length)break
  const query=new URLSearchParams({action:'query',format:'json',formatversion:'2',redirects:'1',titles:titles.join('|'),prop:'pageprops',maxlag:'5'})
  const delay=Math.max(0,1500-(Date.now()-last));if(delay)await new Promise(resolve=>setTimeout(resolve,delay));last=Date.now()
  const response=await fetch(`https://${locale}.wikipedia.org/w/api.php?${query}`,{signal:AbortSignal.timeout(45000),headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy title verification)'}})
  if(!response.ok){
   const seconds=Number(response.headers.get('retry-after'))
   if(seconds>0){const until=new Date(Date.now()+seconds*1000).toISOString();db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)').run(limitKey,until)}
   throw new Error(`${locale} Wikipedia HTTP ${response.status}; batch remains pending`)
  }
  const data=await response.json()
  if(data.error){
   if(data.error.code==='maxlag'){const until=new Date(Date.now()+60000).toISOString();db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)').run(limitKey,until)}
   throw new Error(`${locale} Wikipedia API ${JSON.stringify(data.error)}; batch remains pending`)
  }
  assert.ok(!data.continue&&Array.isArray(data.query?.pages),'Incomplete page response')
  const aliases=new Map([...(data.query.normalized??[]),...(data.query.redirects??[])].map(x=>[x.from,x.to]))
  const pages=new Map(data.query.pages.map(x=>[x.title,x]))
  const at=new Date().toISOString()
  db.exec('BEGIN IMMEDIATE')
  try{
   for(const requested of titles){
    let canonical=requested;const seen=new Set()
    while(aliases.has(canonical)&&!seen.has(canonical)){seen.add(canonical);canonical=aliases.get(canonical)}
    const page=pages.get(canonical)
    const status=!page||page.missing||page.ns!==0?'unavailable':Object.hasOwn(page.pageprops??{},'disambiguation')?'disambiguation':'available'
    const item=page?.pageprops?.wikibase_item??null;assert.ok(item===null||/^Q\d+$/.test(item))
    assert.equal(update.run(status,item,canonical,at,locale,requested).changes,1)
   }
   db.exec('COMMIT')
  }catch(error){db.exec('ROLLBACK');throw error}
  batches++;checked+=titles.length
  if(batches%10===0)console.log(JSON.stringify({locale,batches,checked,remaining:db.prepare(`SELECT COUNT(*) n FROM ${table} WHERE status='pending'`).get().n}))
 }
 if(batches>=limit)break
}
console.log(JSON.stringify({status:'checkpoint',batches,checked,counts:db.prepare(`SELECT status,COUNT(*) n FROM ${table} GROUP BY status`).all()}))
db.close()
