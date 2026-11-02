import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root='.git/evo-wikipedia-col26-8/', sources='C:/Users/dajiaohuang/.codex/evo-link-sources/'
const cases=[['Appias_aegis','Q4411063','Q930239']]
const inventory=new DatabaseSync(root+'inventory.sqlite'), audit=new DatabaseSync(sources+'full-page-audit.sqlite'), live=new DatabaseSync(root+'live-snapshot-page-audit.sqlite',{readOnly:true})
for(const db of [inventory,audit,live]) db.exec('PRAGMA busy_timeout=15000')
try {
 const exclusions=readFileSync(sources+'page-audit-exclusions.json'); checkPageAudit(audit,inventory,exclusions)
 const records=[]
 for(const [title,expected,actual] of cases) {
  const url=`https://en.wikipedia.org/wiki/${title}`, item=`https://www.wikidata.org/entity/${expected}`
  const result=live.prepare("SELECT * FROM results WHERE kind='keyed' AND url=? AND item=?").get(url,item)
  const original=audit.prepare('SELECT rowid,* FROM jobs WHERE url=? AND item=?').get(url,item)
  assert.equal(result?.status,'identity-conflict'); assert.equal(result.actual_item,actual); assert.equal(original?.status,'snapshot-matched'); assert.equal(original.rowid,result.source_rowid)
  const api=new URL('https://en.wikipedia.org/w/api.php'); for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops',ppprop:'wikibase_item|disambiguation',redirects:'1',titles:title})) api.searchParams.set(k,v)
  const response=await fetch(api,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; identity audit)'},signal:AbortSignal.timeout(30000)}); assert.ok(response.ok)
  const data=await response.json(); assert.ok(!data.error); const page=data.query.pages[0]; assert.equal(page.pageprops?.wikibase_item,actual); assert.equal(page.pageprops?.disambiguation,undefined)
  records.push({url,item,original,result,page:data.query})
 }
 const proof=Buffer.from(JSON.stringify({records,previousExclusionsSha256:createHash('sha256').update(exclusions).digest('hex'),checkedAt:new Date().toISOString()}))
 writeFileSync(root+'live-keyed-conflicts-appias-aegis-20261031.json',proof,{flag:'wx'})
 audit.exec('BEGIN IMMEDIATE'); try { for(const r of records) assert.equal(audit.prepare("UPDATE jobs SET status='identity-conflict',actual_item=?,target_title=?,checked_at=? WHERE rowid=? AND status='snapshot-matched'").run(r.result.actual_item,r.page.pages[0].title,new Date().toISOString(),r.original.rowid).changes,1); audit.exec('COMMIT') } catch(e) { audit.exec('ROLLBACK'); throw e }
} finally {inventory.close();audit.close();live.close()}
const reconciliation=spawnSync(process.execPath,[sources+'reconcile-audit-exclusions.mjs'],{encoding:'utf8'});process.stdout.write(reconciliation.stdout);process.stderr.write(reconciliation.stderr);assert.equal(reconciliation.status,0)
console.log(JSON.stringify({status:'held',count:cases.length}))
