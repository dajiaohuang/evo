import { DatabaseSync } from 'node:sqlite'
import { resolve } from 'node:path'
import { classifyCachedPage } from './wikipedia-live-page-result.mjs'
const auditArg=process.argv.indexOf('--audit-db')
if(auditArg>=0&&!process.argv[auditArg+1])throw new Error('--audit-db requires a path')
const source=new DatabaseSync(auditArg>=0?resolve(process.argv[auditArg+1]):'C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',{readOnly:true})
const live=new DatabaseSync('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite',{readOnly:true})
const inventory=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite',{readOnly:true})
for(const db of [source,live,inventory]) db.exec('PRAGMA busy_timeout=15000')
const excluded=inventory.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?')
const excludedItem=inventory.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?')
const keyed=source.prepare('SELECT url,item,locale,title,status FROM jobs WHERE rowid=?')
const unkeyed=source.prepare('SELECT url,locale,title,status FROM unkeyed_pages WHERE rowid=?')
const counts={checked:0,reconciled:0,sourceChanged:0,unmatched:0},examples=[]
for(const row of live.prepare('SELECT * FROM results').iterate()){
  const original=(row.kind==='keyed'?keyed:unkeyed).get(row.source_rowid)
  const resolved=Boolean(original&&original.status===row.status&&(['missing','disambiguation'].includes(row.status)&&excluded.get(row.url)||['identity-conflict','no-item'].includes(row.status)&&row.kind==='keyed'&&excludedItem.get(row.url,row.item)))
  const changed=!original||original.url!==row.url||original.locale!==row.locale||original.title!==row.title||(row.kind==='keyed'&&original.item!==row.item)||(!resolved&&original.status!==(row.kind==='keyed'?'snapshot-matched':'snapshot-available'))
  const unmatched=!resolved&&!['matched','available'].includes(row.status)
  if(resolved)counts.reconciled++
  counts.checked++;if(changed)counts.sourceChanged++;if(unmatched)counts.unmatched++
  if((changed||unmatched)&&examples.length<20)examples.push({kind:row.kind,url:row.url,expectedItem:row.item,actualItem:row.actual_item,targetTitle:row.target_title,status:row.status,sourceChanged:changed,checkedAt:row.checked_at})
}
const provenance={checked:0,inconsistent:0},getLive=live.prepare('SELECT * FROM results WHERE kind=? AND source_rowid=?')
if(live.prepare("SELECT 1 FROM sqlite_master WHERE type='table' AND name='reuse_provenance'").get()){
  for(const p of live.prepare('SELECT * FROM reuse_provenance').iterate()){
    const target=getLive.get(p.kind,p.source_rowid),base=getLive.get(p.cached_kind,p.cached_rowid)
    const expected=target&&base?classifyCachedPage(base,target.item):null
    const bad=!target||!base||p.kind===p.cached_kind||target.url!==base.url||target.locale!==base.locale||target.title!==base.title||target.checked_at!==base.checked_at||p.cached_checked_at!==base.checked_at||!expected||target.status!==expected.status||target.target_title!==expected.title||target.actual_item!==expected.item
    provenance.checked++;if(bad){provenance.inconsistent++;if(examples.length<20)examples.push({kind:p.kind,sourceRowid:p.source_rowid,provenanceInconsistent:true})}
  }
}
console.log(JSON.stringify({counts,provenance,examples}));source.close();live.close();inventory.close()
if(counts.sourceChanged||counts.unmatched||provenance.inconsistent)process.exitCode=1
