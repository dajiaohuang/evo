import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex'),source=readFileSync(root+'unresolved-same-parent-author-mismatch-inventory.json'),rows=JSON.parse(source).rows,db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try{
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
  const get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),existing=db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=?'),holds=[]
  for(const r of rows){const s=get.get(r.source.id),t=get.get(r.target.id);assert.ok(s&&t&&s.name===r.source.name&&t.name===r.target.name&&s.rank==='species'&&t.rank==='species'&&s.parent_id===t.parent_id);assert.ok(!existing.get(s.id,r.item));assert.ok(r.sourceRecord.authorship&&r.targetRecord.authorship);holds.push({node:s.id,item:r.item,urls:r.articles,source:r.sourceRecord,target:r.targetRecord,reason:'Catalogue source and linked target have different authorship; identity is unverified'})}
  assert.equal(holds.length,3)
  const keys=['ncbi_candidate_identity_holds_sha256','candidate_identity_held_urls_sha256'],meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=Object.fromEntries(keys.map(k=>[k,meta.get(k)?.value]));for(const v of Object.values(previous))assert.match(v,/^[0-9a-f]{64}$/)
  const proof=Buffer.from(JSON.stringify({previous,sourceSha256:sha(source),exclusionsSha256:sha(exclusions),holds,checkedAt:new Date().toISOString()}));writeFileSync(root+'unresolved-author-mismatch-holds.json',proof,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE');try{for(const k of keys)assert.equal(meta.get(k).value,previous[k]);const item=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'),url=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)');for(const h of holds){item.run(h.node,h.item,h.reason);for(const u of h.urls)url.run(h.node,u)}const update=db.prepare('UPDATE meta SET value=? WHERE key=?');for(const k of keys)update.run(sha(proof),k);db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'held',nodes:holds.map(h=>h.node),proofSha256:sha(proof)}))
}finally{audit.close();db.close()}
