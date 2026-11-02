import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fetchWikidata } from './wikidata-identity-fetch.mjs'
const root='.git/evo-wikipedia-col26-8/',after=Number(process.argv[2]),through=Number(process.argv[3]);if(!Number.isSafeInteger(after)||!Number.isSafeInteger(through)||after<0||through<after)throw Error('Invalid range')
const locale=process.argv[4]??'sv';if(!/^[a-z0-9-]+$/.test(locale))throw Error('Invalid locale');const suffix=locale==='sv'?'':locale+'-'
const bytes=readFileSync(root+`live-redirect-distinct-gbif-${suffix}${after}-${through}.json`)
const rows=JSON.parse(bytes).rows.filter(r=>{const a=r.sourceMatch,b=r.targetMatch,ak=a.acceptedUsageKey??a.usageKey,bk=b.acceptedUsageKey??b.usageKey;return a.matchType==='EXACT'&&b.matchType==='EXACT'&&ak&&ak===bk})
const ids=[...new Set(rows.map(r=>r.item).filter(id=>/^Q[1-9]\d*$/.test(id??'')))];if(!ids.length){console.log(JSON.stringify({total:0}));process.exit(0)}const data={entities:{}}
for(let i=0;i<ids.length;i+=40){const u=new URL('https://www.wikidata.org/w/api.php');for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'claims',ids:ids.slice(i,i+40).join('|'),maxlag:'5'}))u.searchParams.set(k,v);Object.assign(data.entities,(await fetchWikidata(u)).entities);if(i+40<ids.length)await new Promise(resolve=>setTimeout(resolve,2000))}
const values=(entity,p)=>(entity?.claims?.[p]??[]).filter(c=>c.rank!=='deprecated'&&c.mainsnak?.snaktype==='value').map(c=>c.mainsnak.datavalue.value?.id??c.mainsnak.datavalue.value)
const checks=rows.map(r=>({...r,names:values(data.entities[r.item],'P225'),colIds:values(data.entities[r.item],'P10585'),ranks:values(data.entities[r.item],'P105')}))
const proof={locale,after,through,sourceSha256:createHash('sha256').update(bytes).digest('hex'),checkedAt:new Date().toISOString(),rows:checks};writeFileSync(root+`live-redirect-same-gbif-items-${suffix}${after}-${through}.json`,JSON.stringify(proof),{flag:'wx'});console.log(JSON.stringify({total:checks.length,explicitTarget:checks.filter(r=>r.names.includes(r.target.name)&&r.colIds.includes(r.target.id)&&r.ranks.includes('Q7432')).map(r=>({source:r.source.id,target:r.target.id,item:r.item}))}))
