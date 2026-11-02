import assert from 'node:assert/strict'
import { writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const path='C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',db=new DatabaseSync(path,{readOnly:true}),results=[]
try{
  const keyed=db.prepare("SELECT url,item,title,locale,actual_item FROM jobs WHERE status='snapshot-matched' AND locale='en' ORDER BY rowid LIMIT 200").all().map(r=>({...r,kind:'keyed'}))
  const unkeyed=db.prepare("SELECT url,title,locale,actual_item FROM unkeyed_pages WHERE status='snapshot-available' AND locale='en' ORDER BY rowid LIMIT 200").all().map(r=>({...r,kind:'unkeyed'}))
  for(const group of [keyed,unkeyed]) for(let offset=0;offset<group.length;offset+=50){
    const selected=group.slice(offset,offset+50),u=new URL('https://en.wikipedia.org/w/api.php')
    for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops',ppprop:'wikibase_item|disambiguation',redirects:'1',titles:[...new Set(selected.map(r=>r.title))].join('|'),maxlag:'10'}))u.searchParams.set(k,v)
    const response=await fetch(u,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; snapshot page identity sample)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const data=await response.json();assert.ok(!data.error,JSON.stringify(data.error))
    const aliases=new Map([...(data.query.normalized??[]),...(data.query.redirects??[])].map(r=>[r.from,r.to])),pages=new Map(data.query.pages.map(p=>[p.title,p]))
    for(const row of selected){let title=row.title,seen=new Set;while(aliases.has(title)&&!seen.has(title)){seen.add(title);title=aliases.get(title)}const page=pages.get(title),actual=page?.pageprops?.wikibase_item??null,status=!page||page.missing?'missing':Object.hasOwn(page.pageprops??{},'disambiguation')?'disambiguation':row.kind==='keyed'&&row.item!==`https://www.wikidata.org/entity/${actual}`?'identity-conflict':'available';results.push({...row,targetTitle:title,actualItem:actual,liveStatus:status})}
  }
  const proof={checkedAt:new Date().toISOString(),method:'first 200 English snapshot rows of each kind; not a representative global sample',results};writeFileSync('.git/evo-wikipedia-col26-8/snapshot-page-identity-sample.json',JSON.stringify(proof),{flag:'wx'})
  const counts={};for(const r of results){const k=`${r.kind}:${r.liveStatus}`;counts[k]=(counts[k]??0)+1}console.log(JSON.stringify({status:'checked',counts,issues:results.filter(r=>r.liveStatus!=='available').map(r=>({kind:r.kind,url:r.url,item:r.item,actual:r.actualItem,status:r.liveStatus}))}))
}finally{db.close()}
