import assert from 'node:assert/strict'
import { readFileSync,writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex'),db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',{readOnly:true})
for(const d of [db,audit])d.exec('PRAGMA busy_timeout=15000')
try{const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
 const after=Number(process.argv[2]??0);assert.ok(Number.isSafeInteger(after)&&after>=0)
 const locale=process.argv[3]??'sv';assert.match(locale,/^[a-z0-9-]+$/);const suffix=locale==='sv'?'':locale+'-'
 const mode=process.argv.includes('--redirects')?'redirect':'same',modeSuffix=mode==='same'?'':mode+'-'
 const extra=process.argv.includes('--additional')?'-additional':''
 const bytes=readFileSync(root+`nontaxa-other-locales-check-${modeSuffix}${suffix}after-${after}${extra}.json`),data=JSON.parse(bytes),prior=readFileSync(root+`live-${mode}-title-nontaxa-holds-${suffix}after-${after}${extra}.json`);assert.equal(data.after,after);assert.equal(data.sourceSha256,sha(prior));const original=JSON.parse(prior).holds,holds=[]
 for(const r of data.rows){if(r.missing||r.disambiguation||!r.actualItem||!r.item.endsWith('/'+r.actualItem))continue;assert.ok(original.some(h=>h.node===r.node&&h.item===r.item));assert.ok(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(r.node,r.item));const page=audit.prepare('SELECT status,title,locale FROM unkeyed_pages WHERE url=?').get(r.url);assert.ok(page&&['available','snapshot-available'].includes(page.status));assert.equal(page.locale,r.locale);assert.equal(page.title,r.title);holds.push({node:r.node,url:r.url,item:r.item})}
 assert.ok(holds.length);const key='candidate_identity_held_urls_sha256',meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=meta.get(key).value;assert.match(previous,/^[0-9a-f]{64}$/);const proof=Buffer.from(JSON.stringify({previous,evidenceSha256:sha(bytes),exclusionsSha256:sha(exclusions),holds,checkedAt:new Date().toISOString()}));writeFileSync(root+`nontaxa-other-locales-holds-${modeSuffix}${suffix}after-${after}${extra}.json`,proof,{flag:'wx'})
 db.exec('BEGIN IMMEDIATE');try{assert.equal(meta.get(key).value,previous);const add=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)');for(const h of holds)add.run(h.node,h.url);db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),key);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}console.log(JSON.stringify({status:'held',count:holds.length,nodes:new Set(holds.map(h=>h.node)).size}))
}finally{db.close();audit.close()}
