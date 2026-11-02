import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { gbifExactRelationship } from './gbif-identity-match.mjs'
const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex')
const db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',{readOnly:true}),live=new DatabaseSync(root+'live-snapshot-page-audit.sqlite',{readOnly:true})
for(const connection of [db,audit,live])connection.exec('PRAGMA busy_timeout=15000')
try{
 const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
 const after=Number(process.argv[2]),through=Number(process.argv[3]);assert.ok(Number.isSafeInteger(after)&&Number.isSafeInteger(through)&&after>=0&&through>=after)
 const locale=process.argv[4]??'sv';assert.match(locale,/^[a-z0-9-]+$/);const suffix=locale==='sv'?'':locale+'-'
 const evidence=readFileSync(root+`live-redirect-distinct-gbif-${suffix}${after}-${through}.json`),data=JSON.parse(evidence),rows=data.rows,get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),page=live.prepare("SELECT actual_item,target_title,status FROM results WHERE kind='unkeyed' AND url=?");assert.equal(data.after,after);assert.equal(data.through,through);if(data.locale)assert.equal(data.locale,locale);assert.ok(rows.every(r=>new URL(r.url).hostname===`${locale}.wikipedia.org`))
 const holds=[]
 for(const row of rows){if(!/^Q[1-9]\d*$/.test(row.item??'')||gbifExactRelationship(row.sourceMatch,row.targetMatch)!=='distinct')continue;assert.deepEqual({...get.get(row.source.id)},row.source);assert.deepEqual({...get.get(row.target.id)},row.target);const current=page.get(row.url);assert.equal(current.status,'available');assert.equal(current.actual_item,row.item);assert.equal(current.target_title,row.target.name);holds.push({node:row.source.id,item:`https://www.wikidata.org/entity/${row.item}`,url:row.url,source:row.source.name,target:row.target.name,reason:'GBIF exact name matches resolve to distinct accepted taxa; identity unverified'})}
 assert.ok(holds.length)
 const key='ncbi_candidate_identity_holds_sha256',urlKey='candidate_identity_held_urls_sha256',meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=meta.get(key).value,previousUrl=meta.get(urlKey).value;assert.match(previous,/^[0-9a-f]{64}$/);assert.match(previousUrl,/^[0-9a-f]{64}$/)
 const proof=Buffer.from(JSON.stringify({previous,previousUrl,evidenceSha256:sha(evidence),exclusionsSha256:sha(exclusions),holds,checkedAt:new Date().toISOString()}));writeFileSync(root+`live-redirect-distinct-gbif-holds-${suffix}${after}-${through}.json`,proof,{flag:'wx'})
 db.exec('BEGIN IMMEDIATE');try{assert.equal(meta.get(key).value,previous);assert.equal(meta.get(urlKey).value,previousUrl);const item=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'),url=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)');for(const h of holds){item.run(h.node,h.item,h.reason);url.run(h.node,h.url)}db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),key);db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),urlKey);db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
 console.log(JSON.stringify({status:'held',count:holds.length,nodes:[...new Set(holds.map(h=>h.node))]}))
}finally{db.close();audit.close();live.close()}
