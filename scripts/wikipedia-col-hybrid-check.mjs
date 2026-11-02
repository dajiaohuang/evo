import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec(`PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS hybrid_page_checks(locale TEXT NOT NULL,title TEXT NOT NULL,status TEXT NOT NULL,item TEXT,col_ids TEXT,checked_at TEXT,PRIMARY KEY(locale,title));`)
assert.equal(db.prepare('SELECT COUNT(*) n FROM hybrid_title_done').get().n,364)
const rows=db.prepare('SELECT DISTINCT t.locale,t.title FROM hybrid_title_matches t JOIN hybrid_title_done d ON d.locale=t.locale AND d.source_sha256=t.source_sha256').all()
const done=db.prepare('SELECT 1 FROM hybrid_page_checks WHERE locale=? AND title=?'),add=db.prepare('INSERT INTO hybrid_page_checks VALUES(?,?,?,?,?,?)')
let checked=0
for(const row of rows){
 if(done.get(row.locale,row.title))continue
 assert.match(row.locale,/^[a-z0-9-]+$/)
 const requested=row.title.replaceAll('_',' '),query=new URLSearchParams({action:'query',format:'json',formatversion:'2',redirects:'1',titles:requested,prop:'pageprops',maxlag:'5'})
 const response=await fetch(`https://${row.locale}.wikipedia.org/w/api.php?${query}`,{signal:AbortSignal.timeout(30000),headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; hybrid title verification)'}})
 assert.equal(response.status,200);const data=await response.json();assert.ok(!data.error&&!data.continue&&data.query?.pages?.length===1)
 const page=data.query.pages[0],status=page.missing||page.ns!==0?'unavailable':Object.hasOwn(page.pageprops??{},'disambiguation')?'disambiguation':'available',item=page.pageprops?.wikibase_item??null
 assert.ok(item===null||/^Q\d+$/.test(item));let colIds=[]
 if(status==='available'&&item){
  const q=new URLSearchParams({action:'wbgetentities',format:'json',ids:item,props:'claims',maxlag:'5'})
  const res=await fetch('https://www.wikidata.org/w/api.php?'+q,{signal:AbortSignal.timeout(30000),headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy identifier verification)'}})
  assert.equal(res.status,200);const entityData=await res.json();assert.ok(!entityData.error&&entityData.entities?.[item]);colIds=[...new Set((entityData.entities[item].claims?.P10585??[]).filter(x=>x.rank!=='deprecated').map(x=>x.mainsnak?.datavalue?.value).filter(x=>typeof x==='string'))]
 }
 add.run(row.locale,row.title,status,item,JSON.stringify(colIds),new Date().toISOString());checked++
 console.log(JSON.stringify({locale:row.locale,title:row.title,status,item,colIds}))
 await new Promise(resolve=>setTimeout(resolve,1500))
}
console.log(JSON.stringify({status:'complete',checked,total:rows.length}));db.close()
