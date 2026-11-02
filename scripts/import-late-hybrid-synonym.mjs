import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'
const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex'),source=readFileSync(root+'late-hybrid-title-items.json'),proofRows=JSON.parse(source).rows
const db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try{
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
  const get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),node=get.get('7G2FW'),parent=get.get(node.parent_id)
  assert.equal(node.name,'Verbascum × divaricatum');assert.equal(parent.name,'Verbascum');assert.ok(db.prepare('SELECT 1 FROM synonym_names WHERE node_id=? AND name=?').get(node.id,'Verbascum × pseudophoeniceum'))
  const candidates=proofRows.filter(r=>r.node===node.id&&r.kind==='synonym'&&r.item==='Q17748898'&&r.status==='available')
  const urls=candidates.map(r=>`https://${r.locale}.wikipedia.org/wiki/${encodeURIComponent(r.canonicalTitle.replaceAll(' ','_'))}`),chosen=preferredUrls(urls)[0],c=candidates.find(r=>`https://${r.locale}.wikipedia.org/wiki/${encodeURIComponent(r.canonicalTitle.replaceAll(' ','_'))}`===chosen);assert.ok(c)
  const headers={'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; hybrid synonym verification)'},itemUrl=new URL('https://www.wikidata.org/w/api.php'),pageUrl=new URL(`https://${c.locale}.wikipedia.org/w/api.php`)
  for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'claims',ids:'Q17748898|Q57051',maxlag:'10'}))itemUrl.searchParams.set(k,v)
  for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops',ppprop:'wikibase_item|disambiguation',redirects:'1',titles:c.matchedTitle,maxlag:'10'}))pageUrl.searchParams.set(k,v)
  const [ir,pr]=await Promise.all([fetch(itemUrl,{headers,signal:AbortSignal.timeout(30000)}),fetch(pageUrl,{headers,signal:AbortSignal.timeout(30000)})]);assert.ok(ir.ok&&pr.ok);const [items,pageData]=await Promise.all([ir.json(),pr.json()]);assert.ok(!items.error&&!pageData.error)
  const values=(id,prop)=>(items.entities[id]?.claims?.[prop]??[]).filter(v=>v.rank!=='deprecated'&&v.mainsnak?.snaktype==='value').map(v=>v.mainsnak.datavalue.value?.id??v.mainsnak.datavalue.value).filter(Boolean)
  assert.ok(values('Q17748898','P225').includes('Verbascum pseudophoeniceum'));assert.ok(values('Q17748898','P105').includes('Q7432'));assert.ok(values('Q17748898','P171').includes('Q57051'));assert.ok(values('Q57051','P225').includes(parent.name));assert.ok(values('Q17748898','P10585').every(id=>!get.get(id)))
  const page=pageData.query.pages.find(p=>p.title===c.canonicalTitle);assert.ok(page&&!page.missing&&page.pageprops?.wikibase_item===c.item&&!Object.hasOwn(page.pageprops??{},'disambiguation'))
  const item='https://www.wikidata.org/entity/Q17748898';assert.ok(!db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?').get(node.id));assert.ok(!db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(node.id,item,chosen));assert.ok(!db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(node.id,chosen));assert.ok(!db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(node.id,item));assert.ok(!db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(chosen));assert.ok(!db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(chosen,item))
  const previous=db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,checkedAt=new Date().toISOString(),proof=Buffer.from(JSON.stringify({previous,sourceSha256:sha(source),exclusionsSha256:sha(exclusions),node,parent,c,page:pageData.query,checkedAt}))
  writeFileSync(root+'late-hybrid-synonym-proof.json',proof,{flag:'wx'})
  audit.exec('BEGIN IMMEDIATE');try{const old=audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(chosen,item);if(old){assert.ok(['matched','snapshot-matched'].includes(old.status));assert.equal(old.actual_item,c.item)}else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(chosen,item,c.locale,c.canonicalTitle,'matched',c.canonicalTitle,c.item,checkedAt);audit.exec('COMMIT')}catch(error){audit.exec('ROLLBACK');throw error}
  db.exec('BEGIN IMMEDIATE');try{assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,previous);db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(node.id,`Wikipedia:${c.locale}:${c.name}`,c.url,item,chosen,'Verbascum pseudophoeniceum',JSON.stringify(['source-synonym-hybrid-variant']),JSON.stringify(values('Q17748898','P10585')));db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'primary_related_source_sha256');db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'imported',node:node.id,proofSha256:sha(proof)}))
}finally{audit.close();db.close()}
