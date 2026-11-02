import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { readFileSync,writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sources='C:/Users/dajiaohuang/.codex/evo-link-sources/'
const url='https://ar.wikipedia.org/wiki/%D8%A3%D9%81%D8%B9%D9%88%D9%8A%D8%A7%D8%AA_%D8%A7%D9%84%D8%B0%D9%8A%D9%84',item='https://www.wikidata.org/entity/Q2745541',title=decodeURIComponent(new URL(url).pathname.slice(6)).replaceAll('_',' ')
const inventory=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync(sources+'full-page-audit.sqlite');for(const db of [inventory,audit])db.exec('PRAGMA busy_timeout=15000')
try{
 const exclusions=readFileSync(sources+'page-audit-exclusions.json');checkPageAudit(audit,inventory,exclusions)
 const node=inventory.prepare('SELECT id,name FROM nodes WHERE id=?').get('369');assert.equal(node?.name,'Echiuroidea');assert.equal(audit.prepare('SELECT COUNT(*) n FROM jobs WHERE url=? AND item=?').get(url,item).n,0)
 const api=new URL('https://ar.wikipedia.org/w/api.php');for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops',ppprop:'wikibase_item|disambiguation',redirects:'1',titles:title}))api.searchParams.set(k,v)
 const response=await fetch(api,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; link identity audit)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const data=await response.json();assert.ok(!data.error);const page=data.query.pages[0];assert.equal(page.pageprops?.wikibase_item,'Q2745541');assert.equal(page.pageprops?.disambiguation,undefined)
 const proof=Buffer.from(JSON.stringify({node,url,item,page:data.query,exclusionsSha256:createHash('sha256').update(exclusions).digest('hex'),checkedAt:new Date().toISOString()}));writeFileSync(root+'echiuroidea-ar-fallback.json',proof,{flag:'wx'})
 audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(url,item,'ar',title,'matched',page.title,'Q2745541',new Date().toISOString());console.log(JSON.stringify({status:'confirmed',node:node.id,url}))
}finally{inventory.close();audit.close()}
