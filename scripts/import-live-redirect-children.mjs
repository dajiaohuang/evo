import assert from 'node:assert/strict'
import { readFileSync,writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex'),db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite'),live=new DatabaseSync(root+'live-snapshot-page-audit.sqlite',{readOnly:true})
for(const connection of [db,audit,live])connection.exec('PRAGMA busy_timeout=15000')
try{
 const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
 const after=Number(process.argv[2]??0);assert.ok(Number.isSafeInteger(after)&&after>=0)
 const locale=process.argv[3]??'sv';assert.match(locale,/^[a-z0-9-]+$/);const suffix=locale==='sv'?'':locale+'-'
 const bytes=readFileSync(root+`live-redirect-children-items-${suffix}after-${after}.json`),data=JSON.parse(bytes),get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),page=live.prepare("SELECT actual_item,target_title,status,checked_at FROM results WHERE kind='unkeyed' AND url=?"),accepted=[],skipped=[]
 assert.equal(data.after,after)
 if(data.locale)assert.equal(data.locale,locale)
 assert.ok(data.rows.every(r=>new URL(r.url).hostname===`${locale}.wikipedia.org`))
 for(const r of data.rows){if(!r.names.includes(r.target.name)||!r.colIds.includes(r.target.id))continue;assert.deepEqual({...get.get(r.source.id)},r.source);assert.deepEqual({...get.get(r.target.id)},r.target);assert.equal(r.target.parent_id,r.source.id);const p=page.get(r.url);assert.equal(p.status,'available');assert.equal(p.actual_item,r.actual_item);assert.equal(p.target_title,r.target.name);const item=`https://www.wikidata.org/entity/${r.actual_item}`;if(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(r.source.id,item)||db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(r.source.id,r.url)||db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(r.url)||db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(r.url,item)||db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(r.source.id,item,r.url)){skipped.push(r.source.id);continue}accepted.push({...r,itemUrl:item,page:p})}
 assert.ok(accepted.length);const meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=meta.get('primary_related_source_sha256').value;assert.match(previous,/^[0-9a-f]{64}$/)
 const proof=Buffer.from(JSON.stringify({previous,evidenceSha256:sha(bytes),exclusionsSha256:sha(exclusions),accepted,skipped,checkedAt:new Date().toISOString()}));writeFileSync(root+`live-redirect-children-import-${suffix}after-${after}.json`,proof,{flag:'wx'})
 audit.exec('BEGIN IMMEDIATE');try{const find=audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?'),insert=audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)');for(const r of accepted){const old=find.get(r.url,r.itemUrl);if(old){assert.ok(['matched','snapshot-matched'].includes(old.status));assert.equal(old.actual_item,r.actual_item)}else insert.run(r.url,r.itemUrl,locale,r.source.name,'matched',r.target.name,r.actual_item,r.page.checked_at)}audit.exec('COMMIT')}catch(e){audit.exec('ROLLBACK');throw e}
 db.exec('BEGIN IMMEDIATE');try{assert.equal(meta.get('primary_related_source_sha256').value,previous);const insert=db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)');for(const r of accepted)insert.run(r.source.id,`Wikipedia:${locale}:${r.source.name}`,r.url,r.itemUrl,r.url,r.target.name,JSON.stringify(['tree-descendant-page']),JSON.stringify(r.colIds));db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'primary_related_source_sha256');db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}
 console.log(JSON.stringify({status:'imported',count:accepted.length,skipped:skipped.length}))
}finally{db.close();audit.close();live.close()}
