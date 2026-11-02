import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fetchWikidata } from './wikidata-identity-fetch.mjs'
import { selectContiguousLivePages } from './wikipedia-live-contiguous-pages.mjs'
const root='.git/evo-wikipedia-col26-8/',db=new DatabaseSync(root+'inventory.sqlite',{readOnly:true}),live=new DatabaseSync(root+'live-snapshot-page-audit.sqlite',{readOnly:true}),rows=[]
for(const connection of [db,live]) connection.exec('PRAGMA busy_timeout=15000')
const lookup=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?')
const after=Number(process.argv[2]??0);assert.ok(Number.isSafeInteger(after)&&after>=0)
const locale=process.argv[3]??'sv';assert.match(locale,/^[a-z0-9-]+$/);const suffix=locale==='sv'?'':locale+'-'
const { ceiling,pages }=selectContiguousLivePages(live,locale,after)
for(const page of pages){
 if(page.title===page.target_title||!page.actual_item)continue
 const parents=lookup.all(page.title),children=lookup.all(page.target_title);if(parents.length!==1||children.length!==1||children[0].parent_id!==parents[0].id)continue
 rows.push({source:parents[0],target:children[0],...page})
}
const ids=[...new Set(rows.map(r=>r.actual_item))],entities={}
for(let i=0;i<ids.length;i+=40){const url=new URL('https://www.wikidata.org/w/api.php');for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'claims',ids:ids.slice(i,i+40).join('|'),maxlag:'5'}))url.searchParams.set(k,v);const data=await fetchWikidata(url);Object.assign(entities,data.entities);await new Promise(resolve=>setTimeout(resolve,2000))}
const values=(entity,p)=>(entity?.claims?.[p]??[]).filter(c=>c.rank!=='deprecated'&&c.mainsnak?.snaktype==='value').map(c=>c.mainsnak.datavalue.value?.id??c.mainsnak.datavalue.value)
const checked=rows.map(row=>({...row,names:values(entities[row.actual_item],'P225'),colIds:values(entities[row.actual_item],'P10585'),ranks:values(entities[row.actual_item],'P105')}))
const proof=Buffer.from(JSON.stringify({locale,after,ceiling,through:pages.at(-1)?.source_rowid??after,checkedAt:new Date().toISOString(),rows:checked}));writeFileSync(root+`live-redirect-children-items-${suffix}after-${after}.json`,proof,{flag:'wx'})
const verified=checked.filter(r=>r.names.includes(r.target.name)&&r.colIds.includes(r.target.id));console.log(JSON.stringify({pages:pages.length,after,through:pages.at(-1)?.source_rowid??after,rows:checked.length,verified:verified.length,nodes:new Set(verified.map(r=>r.source.id)).size,sha256:createHash('sha256').update(proof).digest('hex')}));db.close();live.close()
