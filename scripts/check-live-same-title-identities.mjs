import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fetchWikidata } from './wikidata-identity-fetch.mjs'
import { matchesIdentityReviewMode, selectContiguousLivePages } from './wikipedia-live-contiguous-pages.mjs'
const root='.git/evo-wikipedia-col26-8/',live=new DatabaseSync(root+'live-snapshot-page-audit.sqlite',{readOnly:true}),inventory=new DatabaseSync(root+'inventory.sqlite',{readOnly:true})
for(const connection of [live,inventory]) connection.exec('PRAGMA busy_timeout=15000')
const get=inventory.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?')
const after=Number(process.argv[2]??0);assert.ok(Number.isSafeInteger(after)&&after>=0)
const locale=process.argv[3]??'sv';assert.match(locale,/^[a-z0-9-]+$/)
const redirects=process.argv.includes('--redirects')
const { ceiling,pages }=selectContiguousLivePages(live,locale,after),rows=[]
for(const page of pages){if(!matchesIdentityReviewMode(page,redirects))continue;const nodes=get.all(page.title);if(nodes.length!==1)continue;rows.push({...page,node:nodes[0]})}
const ids=[...new Set(rows.map(r=>r.actual_item))],entities={}
for(let i=0;i<ids.length;i+=40){const u=new URL('https://www.wikidata.org/w/api.php');for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'claims|labels',languages:'en',ids:ids.slice(i,i+40).join('|'),maxlag:'5'}))u.searchParams.set(k,v);const data=await fetchWikidata(u);Object.assign(entities,data.entities);if((i+40)%400===0)console.log(JSON.stringify({status:'identity-checking',locale,after,checked:Math.min(i+40,ids.length),total:ids.length}));await new Promise(resolve=>setTimeout(resolve,2000))}
const values=(entity,p)=>(entity?.claims?.[p]??[]).filter(c=>c.rank!=='deprecated'&&c.mainsnak?.snaktype==='value').map(c=>c.mainsnak.datavalue.value?.id??c.mainsnak.datavalue.value)
const results=rows.map(row=>({...row,label:entities[row.actual_item]?.labels?.en?.value??null,instances:values(entities[row.actual_item],'P31'),names:values(entities[row.actual_item],'P225'),colIds:values(entities[row.actual_item],'P10585')}))
const proof=Buffer.from(JSON.stringify({locale,redirects,after,ceiling,through:pages.at(-1)?.source_rowid??after,checkedAt:new Date().toISOString(),rows:results}));writeFileSync(root+`live-${redirects?'redirect':'same'}-title-identities-${locale==='sv'?'':locale+'-'}after-${after}.json`,proof,{flag:'wx'})
const classCounts={};for(const row of results)for(const id of row.instances)classCounts[id]=(classCounts[id]??0)+1
console.log(JSON.stringify({pages:pages.length,rows:rows.length,items:ids.length,after,through:pages.at(-1)?.source_rowid??after,nonTaxonCandidates:results.filter(r=>r.instances.length&&!r.instances.includes('Q16521')&&!r.names.length).length,classes:classCounts,sha256:createHash('sha256').update(proof).digest('hex')}));live.close();inventory.close()
