import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex'),source=readFileSync(root+'unresolved-same-parent-gbif-checks.json'),rows=JSON.parse(source).rows.filter(r=>r.outcome==='distinct-accepted-key'),db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try{
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
  const current=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),existing=db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=?'),holds=[]
  for(const r of rows){const s=current.get(r.source.id),t=current.get(r.target.id);assert.ok(s&&t&&s.name===r.source.name&&t.name===r.target.name&&s.parent_id===t.parent_id&&s.rank==='species'&&t.rank==='species');assert.ok(!existing.get(s.id,r.item));assert.ok(r.evidence.every(x=>x.acceptable&&x.matchType==='EXACT'&&x.status==='ACCEPTED'));assert.notEqual(r.evidence[0].effectiveKey,r.evidence[1].effectiveKey);holds.push({node:s.id,item:r.item,urls:r.articles,source:s,target:t,evidence:r.evidence,reason:'GBIF exact matches identify distinct accepted species'})}
  assert.equal(holds.length,4)
  const keys=['ncbi_candidate_identity_holds_sha256','candidate_identity_held_urls_sha256'],meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=Object.fromEntries(keys.map(k=>[k,meta.get(k)?.value]));for(const v of Object.values(previous))assert.match(v,/^[0-9a-f]{64}$/)
  const proof=Buffer.from(JSON.stringify({previous,sourceSha256:sha(source),exclusionsSha256:sha(exclusions),holds,checkedAt:new Date().toISOString()}));writeFileSync(root+'unresolved-gbif-distinct-peer-holds.json',proof,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE');try{for(const k of keys)assert.equal(meta.get(k).value,previous[k]);const item=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'),url=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)');for(const h of holds){item.run(h.node,h.item,h.reason);for(const u of h.urls)url.run(h.node,u)}const update=db.prepare('UPDATE meta SET value=? WHERE key=?');for(const k of keys)update.run(sha(proof),k);db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'held',nodes:holds.map(h=>h.node),proofSha256:sha(proof)}))
}finally{audit.close();db.close()}
