import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex'),gbifBytes=readFileSync(root+'unresolved-same-parent-gbif-checks.json'),gbif=JSON.parse(gbifBytes),pageBytes=readFileSync(root+'unresolved-peer-items.json'),pages=JSON.parse(pageBytes),db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try{
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
  const preparedBytes=readFileSync(root+'unresolved-peer-page-candidates.json'),prepared=JSON.parse(preparedBytes),pagesSource=readFileSync(root+'unresolved-peer-pages.json')
  assert.equal(prepared.sourceSha256,sha(gbifBytes));assert.equal(pages.sourceSha256,sha(pagesSource));assert.equal(JSON.parse(pagesSource).sourceSha256,sha(preparedBytes))
  const get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),existing=db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? UNION SELECT 1 FROM exact_source_synonym_links WHERE node_id=? UNION SELECT 1 FROM qualified_unkeyed_species_links WHERE node_id=?'),accepted=[],skipped=[]
  for(const page of pages.rows){
    const row=gbif.rows.find(r=>r.source.id===page.node&&r.target.id===page.targetId&&r.item===page.expectedItem&&r.outcome==='same-accepted-key'),source=get.get(page.node),target=get.get(page.targetId)
    if(!row||!source||!target||existing.get(source.id,source.id,source.id)||source.name!==row.source.name||target.name!==row.target.name||source.rank!=='species'||target.rank!=='species'||!source.parent_id||source.parent_id!==target.parent_id){skipped.push({node:page.node,reason:'changed source or existing candidate'});continue}
    const matches=row.evidence.map(e=>e.matchType);if(!matches.includes('EXACT')||!matches.includes('FUZZY')||!row.evidence[0].effectiveKey||row.evidence[0].effectiveKey!==row.evidence[1].effectiveKey){skipped.push({node:page.node,reason:'GBIF match not sufficiently supported'});continue}
    if(page.status!=='available'||`https://www.wikidata.org/entity/${page.item}`!==row.item||!page.claims?.colIds?.includes(target.id)||!page.claims?.ranks?.includes('Q7432')||!page.claims?.names?.some(name=>name===source.name||name===target.name)){skipped.push({node:page.node,reason:'page identity or target classification changed'});continue}
    const url=`https://${page.locale}.wikipedia.org/wiki/${encodeURIComponent(page.canonicalTitle.replaceAll(' ','_'))}`,item=row.item
    if(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(source.id,url)||db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(source.id,item)||db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(url)||db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(url,item)){skipped.push({node:page.node,reason:'page or identity held'});continue}
    const old=audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(url,item)
    if(old&&(!['matched','snapshot-matched'].includes(old.status)||old.actual_item!==page.item)){skipped.push({node:page.node,reason:'existing audit conflict'});continue}
    accepted.push({source,target,item,url,locale:page.locale,title:page.canonicalTitle,actualItem:page.item,originalUrl:page.url,gbifEvidence:row.evidence,targetCols:page.claims.colIds,existingAudit:!!old})
  }
  if(!accepted.length){console.log(JSON.stringify({status:'nothing-to-import',skipped}));process.exit(0)}
  const previous=db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,checkedAt=new Date().toISOString(),proof=Buffer.from(JSON.stringify({previous,gbifSha256:sha(gbifBytes),pageItemsSha256:sha(pageBytes),exclusionsSha256:sha(exclusions),accepted,skipped,checkedAt}));writeFileSync(root+'unresolved-gbif-peer-import-proof.json',proof,{flag:'wx'})
  audit.exec('BEGIN IMMEDIATE');try{const insert=audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)');for(const c of accepted)if(!c.existingAudit)insert.run(c.url,c.item,c.locale,c.title,'matched',c.title,c.actualItem,checkedAt);audit.exec('COMMIT')}catch(error){audit.exec('ROLLBACK');throw error}
  db.exec('BEGIN IMMEDIATE');try{assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,previous);const insert=db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)');for(const c of accepted)insert.run(c.source.id,`Wikipedia:${c.locale}:${c.source.name}`,c.originalUrl,c.item,c.url,c.target.name,JSON.stringify(['same-author-gbif-peer']),JSON.stringify(c.targetCols));db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'primary_related_source_sha256');db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'imported',nodes:accepted.map(c=>c.source.id),skipped,proofSha256:sha(proof)}))
}finally{audit.close();db.close()}
