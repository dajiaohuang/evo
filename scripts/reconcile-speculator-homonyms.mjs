import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { classifyPage } from './wikipedia-live-page-result.mjs'
import { fetchWikidata } from './wikidata-identity-fetch.mjs'

const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex')
const db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',{readOnly:true})
for(const connection of [db,audit])connection.exec('PRAGMA busy_timeout=15000')
try {
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
  const node=db.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get('7PH5F')
  assert.deepEqual({...node},{id:'7PH5F',name:'Speculator',rank:'genus'})
  const url=new URL('https://www.wikidata.org/w/api.php')
  for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'labels|claims',languages:'en',ids:'Q107885|Q2314719|Q951712|Q18591975',maxlag:'5'}))url.searchParams.set(k,v)
  const entities=(await fetchWikidata(url)).entities
  const values=(e,p)=>(e?.claims?.[p]??[]).filter(c=>c.rank!=='deprecated'&&c.mainsnak?.snaktype==='value').map(c=>c.mainsnak.datavalue.value?.id??c.mainsnak.datavalue.value)
  assert.ok(values(entities.Q18591975,'P31').includes('Q16521'));assert.ok(values(entities.Q18591975,'P225').includes('Speculator'))
  const pages=[{locale:'en',title:'Speculation',item:'Q107885',type:'Q64513524',description:'financial speculation'},
    {locale:'de',title:'Speculator',item:'Q2314719',type:'Q6857706',description:'army scout'},
    {locale:'pl',title:'Speculator',item:'Q951712',type:'Q55237813',description:'village of New York'}]
  for(const page of pages){assert.ok(values(entities[page.item],'P31').includes(page.type));assert.ok(!values(entities[page.item],'P31').includes('Q16521'));assert.equal(values(entities[page.item],'P225').length,0)
    const api=new URL(`https://${page.locale}.wikipedia.org/w/api.php`);api.search=new URLSearchParams({action:'query',format:'json',formatversion:'2',prop:'pageprops',ppprop:'wikibase_item|disambiguation',redirects:'1',titles:page.title,maxlag:'5'})
    const response=await fetch(api,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; link identity checks)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok,`${page.locale} HTTP ${response.status}`);const data=await response.json();assert.ok(!data.error,JSON.stringify(data.error))
    const result=classifyPage(data.query,page.title,`https://www.wikidata.org/entity/${page.item}`);assert.equal(result.status,'matched');page.url=`https://${page.locale}.wikipedia.org/wiki/${encodeURIComponent(page.title)}`;page.result=result
    await new Promise(resolve=>setTimeout(resolve,2000))
  }
  const meta=db.prepare('SELECT value FROM meta WHERE key=?'),keys=['ncbi_candidate_identity_holds_sha256','candidate_identity_held_urls_sha256'],previous=Object.fromEntries(keys.map(key=>[key,meta.get(key).value]));for(const value of Object.values(previous))assert.match(value,/^[0-9a-f]{64}$/)
  const evidence=Buffer.from(JSON.stringify({node:{...node},previous,exclusionsSha256:sha(exclusions),entityFacts:Object.fromEntries(Object.entries(entities).map(([id,e])=>[id,{label:e.labels?.en?.value??null,instances:values(e,'P31'),names:values(e,'P225')}])),pages,checkedAt:new Date().toISOString()}))
  writeFileSync(root+'speculator-homonyms-proof.json',evidence,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE');try{for(const key of keys)assert.equal(meta.get(key).value,previous[key]);const hold=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'),heldUrl=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)');for(const page of pages){hold.run(node.id,`https://www.wikidata.org/entity/${page.item}`,`Page identifies ${page.description}, not a taxon`);heldUrl.run(node.id,page.url)}const update=db.prepare('UPDATE meta SET value=? WHERE key=?');for(const key of keys)update.run(sha(evidence),key);db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'held',node:node.id,pages:pages.map(({url,item})=>({url,item})),evidenceSha256:sha(evidence)}))
} finally { db.close();audit.close() }
