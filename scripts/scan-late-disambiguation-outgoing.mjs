import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'

const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex')
const inventory=JSON.parse(readFileSync(root+'late-uncovered-title-inventory.json')),pageBytes=readFileSync(root+'late-uncovered-title-page-checks.json'),checks=JSON.parse(pageBytes).checks
const db=new DatabaseSync(root+'inventory.sqlite',{readOnly:true})
try {
  const linked=db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=? UNION SELECT 1 FROM primary_related_candidates WHERE node_id=? UNION SELECT 1 FROM qualified_unkeyed_species_links WHERE node_id=?')
  const ids=[...new Set(inventory.values.map(r=>r.node))].filter(id=>!linked.get(id,id,id)&&!checks.some(r=>r.node===id&&r.status==='available'))
  const candidates=checks.filter(r=>ids.includes(r.node)&&r.status==='disambiguation'),results=[]
  let done=0
  for(const row of candidates){
    assert.match(row.locale,/^[a-z0-9-]+$/);let continuation,rounds=0
    do {
      const u=new URL(`https://${row.locale}.wikipedia.org/w/api.php`)
      for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'links',plnamespace:'0',pllimit:'500',titles:row.canonicalTitle,maxlag:'10',...(continuation??{})}))u.searchParams.set(k,v)
      let data
      for(let attempt=0;attempt<4;attempt++){
        try {const response=await fetch(u,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; disambiguation link verification)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);data=await response.json();assert.ok(!data.error,JSON.stringify(data.error));break}
        catch(error){if(attempt===3)throw error;await new Promise(resolve=>setTimeout(resolve,(attempt+1)*2500))}
      }
      const page=data.query.pages.find(p=>p.title===row.canonicalTitle);assert.ok(page&&!page.missing)
      for(const link of page.links??[])results.push({node:row.node,name:row.name,kind:row.kind,locale:row.locale,sourceTitle:row.canonicalTitle,matchedTitle:link.title,url:`https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(link.title.replaceAll(' ','_'))}`})
      continuation=data.continue;assert.ok(++rounds<=20,'Disambiguation page has too many link pages')
    }while(continuation)
    if(++done%10===0)console.log(JSON.stringify({pagesChecked:done,pages:candidates.length,links:results.length}))
  }
  const output={pageChecksSha256:sha(pageBytes),eligibleNodes:ids.length,pages:candidates.length,checkedAt:new Date().toISOString(),matches:results}
  writeFileSync(root+'late-disambiguation-outgoing.json',JSON.stringify(output),{flag:'wx'})
  console.log(JSON.stringify({status:'scanned',eligibleNodes:ids.length,pages:candidates.length,links:results.length,nodes:new Set(results.map(r=>r.node)).size}))
}finally{db.close()}
