import assert from 'node:assert/strict'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/c-scratch/',audit=new DatabaseSync(root+'live-identity-audit.sqlite')
audit.prepare('ATTACH DATABASE ? AS dump').run(root+'en-metadata/en-snapshot-results.sqlite')
const next=audit.prepare("SELECT j.url,j.item,j.title FROM jobs j JOIN dump.results d ON d.url=j.url AND d.item=j.item WHERE j.locale='en' AND j.status='pending' AND d.status IN ('conflict','unresolved') LIMIT 50")
const update=audit.prepare("UPDATE jobs SET status=?,target_title=?,actual_item=?,checked_at=? WHERE url=? AND item=? AND status='pending'")
let batches=0
while(true){
 const rows=next.all();if(!rows.length)break
 const url=new URL('https://en.wikipedia.org/w/api.php')
 url.search=new URLSearchParams({action:'query',prop:'pageprops',ppprop:'wikibase_item|disambiguation',titles:rows.map(r=>r.title).join('|'),redirects:'1',format:'json',formatversion:'2',maxlag:'5'})
 const response=await fetch(url,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; suspect link verification)'},signal:AbortSignal.timeout(60000)})
 if(!response.ok)throw Error(`Wikipedia HTTP ${response.status}; checkpoint preserved`)
 const data=await response.json();if(data.error)throw Error(`Wikipedia ${JSON.stringify(data.error)}; checkpoint preserved`)
 const aliases=new Map([...(data.query.normalized??[]),...(data.query.redirects??[])].map(r=>[r.from,r.to])),pages=new Map(data.query.pages.map(p=>[p.title,p]))
 audit.exec('BEGIN IMMEDIATE')
 try{for(const row of rows){let title=row.title;const seen=new Set();while(aliases.has(title)&&!seen.has(title)){seen.add(title);title=aliases.get(title)}const page=pages.get(title),actual=page?.pageprops?.wikibase_item??null,status=!page||page.missing?'missing':Object.hasOwn(page.pageprops??{},'disambiguation')?'disambiguation':!actual?'no-item':row.item.endsWith('/'+actual)?'matched':'identity-conflict';assert.equal(update.run(status,title,actual,new Date().toISOString(),row.url,row.item).changes,1)}audit.exec('COMMIT')}catch(e){audit.exec('ROLLBACK');throw e}
 if(++batches%5===0)console.log(JSON.stringify({batches,counts:audit.prepare("SELECT status,COUNT(*) n FROM jobs WHERE locale='en' AND status!='pending' GROUP BY status").all()}))
 await new Promise(resolve=>setTimeout(resolve,1200))
}
console.log(JSON.stringify({status:'complete',counts:audit.prepare("SELECT status,COUNT(*) n FROM jobs WHERE locale='en' AND status!='pending' GROUP BY status").all()}))
audit.close()
