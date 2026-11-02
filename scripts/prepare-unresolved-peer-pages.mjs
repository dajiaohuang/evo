import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'
const root='.git/evo-wikipedia-col26-8/',input=readFileSync(root+'unresolved-same-parent-gbif-checks.json'),proof=JSON.parse(input),db=new DatabaseSync(root+'inventory.sqlite',{readOnly:true})
try{
  const existing=db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? UNION SELECT 1 FROM exact_source_synonym_links WHERE node_id=? UNION SELECT 1 FROM qualified_unkeyed_species_links WHERE node_id=?'),held=db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?'),bad=db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'),heldUrl=db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'),matches=[]
  for(const row of proof.rows){if(row.outcome!=='same-accepted-key'||existing.get(row.source.id,row.source.id,row.source.id)||held.get(row.source.id,row.item))continue
    const urls=preferredUrls(row.articles.filter(url=>!bad.get(url)&&!heldUrl.get(row.source.id,url)));if(!urls.length)continue
    const url=urls[0],parsed=new URL(url);assert.ok(parsed.pathname.startsWith('/wiki/'));const title=decodeURIComponent(parsed.pathname.slice(6)).replaceAll('_',' ')
    matches.push({node:row.source.id,name:row.source.name,kind:'accepted',matchedTitle:title,url,targetId:row.target.id,expectedItem:row.item})
  }
  const output={sourceSha256:createHash('sha256').update(input).digest('hex'),createdAt:new Date().toISOString(),matches};writeFileSync(root+'unresolved-peer-page-candidates.json',JSON.stringify(output),{flag:'wx'});console.log(JSON.stringify({status:'prepared',nodes:matches.length}))
}finally{db.close()}
