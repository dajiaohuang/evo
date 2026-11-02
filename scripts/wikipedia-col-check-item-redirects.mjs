import assert from 'node:assert/strict'
import {DatabaseSync} from 'node:sqlite'

const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
const candidate=JSON.parse(db.prepare('SELECT candidates_json FROM names WHERE name=?').get('Trogoniformes').candidates_json).find(row=>row.colIds.includes('49P'))
assert.equal(candidate.item,'https://www.wikidata.org/entity/Q14566629')
const expected=candidate.item.split('/').at(-1),checks=[]
for(const original of candidate.articles){
 const u=new URL(original),title=decodeURIComponent(u.pathname.slice(6)).replaceAll('_',' '),api=new URL(`https://${u.hostname}/w/api.php`)
 api.search=new URLSearchParams({action:'query',prop:'pageprops',ppprop:'wikibase_item',titles:title,redirects:'1',format:'json',formatversion:'2',maxlag:'5'})
 const response=await fetch(api,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; link identity verification)'},signal:AbortSignal.timeout(30000)})
 if(!response.ok)throw Error(`${u.hostname}: HTTP ${response.status}`)
 const data=await response.json();if(data.error)throw Error(JSON.stringify(data.error))
 const page=data.query?.pages?.[0],actual=page?.pageprops?.wikibase_item
 assert.ok(actual,`Missing target identity for ${original}`)
 checks.push({original,actual,title:page.title})
}
const get=db.prepare('SELECT item_id,status FROM article_jobs WHERE url=?')
const update=db.prepare("UPDATE article_jobs SET status='identity-conflict' WHERE url=? AND item_id=? AND status='pending'")
const insert=db.prepare("INSERT INTO article_jobs(url,item_id,locale,status,checked_at) VALUES(?,?,?,'identity-conflict',?)")
db.exec('BEGIN IMMEDIATE')
try{
 for(const row of checks.filter(x=>x.actual!==expected)){
  const current=get.get(row.original)
  if(!current){insert.run(row.original,candidate.item,new URL(row.original).hostname.split('.')[0],new Date().toISOString());continue}
  assert.equal(current?.item_id,candidate.item)
  if(current.status==='identity-conflict')continue
  assert.equal(current.status,'pending')
  assert.equal(update.run(row.original,candidate.item).changes,1)
 }
 db.exec('COMMIT')
}catch(error){db.exec('ROLLBACK');throw error}
console.log(JSON.stringify({checked:checks.length,valid:checks.filter(x=>x.actual===expected).length,conflicts:checks.filter(x=>x.actual!==expected)}))
