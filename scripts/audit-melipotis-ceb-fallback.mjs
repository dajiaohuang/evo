import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { readFileSync,writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sources='C:/Users/dajiaohuang/.codex/evo-link-sources/'
const url='https://ceb.wikipedia.org/wiki/Melipotis_tenella',item='https://www.wikidata.org/entity/Q5305912'
const inventory=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync(sources+'full-page-audit.sqlite');for(const db of [inventory,audit])db.exec('PRAGMA busy_timeout=15000')
try{
 const exclusions=readFileSync(sources+'page-audit-exclusions.json');checkPageAudit(audit,inventory,exclusions)
 const node=inventory.prepare('SELECT id,name FROM nodes WHERE id=?').get('3ZJDB');assert.equal(node?.name,'Melipotis tenella')
 assert.equal(audit.prepare('SELECT COUNT(*) n FROM jobs WHERE url=? AND item=?').get(url,item).n,0)
 const api=new URL('https://ceb.wikipedia.org/w/api.php');for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops',ppprop:'wikibase_item|disambiguation',redirects:'1',titles:'Melipotis tenella'}))api.searchParams.set(k,v)
 const response=await fetch(api,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; link identity audit)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const data=await response.json();assert.ok(!data.error);const page=data.query.pages[0];assert.equal(page.pageprops?.wikibase_item,'Q5305912');assert.equal(page.pageprops?.disambiguation,undefined)
 const proof=Buffer.from(JSON.stringify({node,url,item,page:data.query,exclusionsSha256:createHash('sha256').update(exclusions).digest('hex'),checkedAt:new Date().toISOString()}));writeFileSync(root+'melipotis-ceb-fallback.json',proof,{flag:'wx'})
 audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(url,item,'ceb','Melipotis tenella','matched',page.title,'Q5305912',new Date().toISOString())
 console.log(JSON.stringify({status:'confirmed',node:node.id,url}))
}finally{inventory.close();audit.close()}
