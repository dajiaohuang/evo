import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { readFileSync,writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sourcePath='C:/Users/dajiaohuang/.codex/evo-link-sources/',url='https://sv.wikipedia.org/wiki/Salta',sha=b=>createHash('sha256').update(b).digest('hex')
const db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync(sourcePath+'full-page-audit.sqlite'),live=new DatabaseSync(root+'live-snapshot-page-audit.sqlite',{readOnly:true})
for(const connection of [db,audit,live])connection.exec('PRAGMA busy_timeout=15000')
try{
 const exclusions=readFileSync(sourcePath+'page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
 const result=live.prepare("SELECT * FROM results WHERE kind='unkeyed' AND url=?").get(url),original=audit.prepare('SELECT rowid,* FROM unkeyed_pages WHERE url=?').get(url)
 assert.equal(result.status,'disambiguation');assert.equal(result.actual_item,'Q293040');assert.equal(original.status,'snapshot-available');assert.equal(original.rowid,result.source_rowid)
 const api='https://sv.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageprops&ppprop=wikibase_item%7Cdisambiguation&redirects=1&titles=Salta',response=await fetch(api,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; link identity check)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const data=await response.json();assert.ok(!data.error);const page=data.query.pages[0];assert.equal(page.title,'Salta');assert.equal(page.pageprops.wikibase_item,'Q293040');assert.ok(Object.hasOwn(page.pageprops,'disambiguation'))
 const proof=Buffer.from(JSON.stringify({url,previousExclusionsSha256:sha(exclusions),previous:original,live:result,query:data.query,checkedAt:new Date().toISOString()}));writeFileSync(root+'live-salta-disambiguation-proof.json',proof,{flag:'wx'})
 const update=audit.prepare("UPDATE unkeyed_pages SET status='disambiguation',actual_item=?,target_title=?,checked_at=? WHERE rowid=? AND status='snapshot-available'");assert.equal(update.run('Q293040','Salta',new Date().toISOString(),original.rowid).changes,1)
}finally{db.close();audit.close();live.close()}
const reconciliation=spawnSync(process.execPath,['C:/Users/dajiaohuang/.codex/evo-link-sources/reconcile-audit-exclusions.mjs'],{encoding:'utf8'});process.stdout.write(reconciliation.stdout);process.stderr.write(reconciliation.stderr);assert.equal(reconciliation.status,0,'Audit status changed but exclusion reconciliation failed; retry reconciliation before export')
