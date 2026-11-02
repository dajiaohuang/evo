import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',published=root+'published-data-reviewed-20261031/',manifestBytes=readFileSync(published+'manifest.json'),manifest=JSON.parse(manifestBytes),sha=b=>createHash('sha256').update(b).digest('hex')
const db=new DatabaseSync(root+'inventory.sqlite',{readOnly:true}),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',{readOnly:true})
try{
  const byName=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?'),get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),existing=db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? UNION SELECT 1 FROM exact_source_synonym_links WHERE node_id=? UNION SELECT 1 FROM qualified_unkeyed_species_links WHERE node_id=?'),held=db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'),bad=db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'),shards=new Map(),candidates=new Map()
  const entry=id=>{const prefix=createHash('sha256').update(id).digest('hex').slice(0,2);if(!shards.has(prefix)){const meta=manifest.shards[prefix],bytes=readFileSync(published+meta.path);assert.equal(sha(bytes),meta.sha256);shards.set(prefix,JSON.parse(gunzipSync(bytes)).entries)}return shards.get(prefix)[id]}
  for(const page of audit.prepare("SELECT url,locale,title,target_title FROM unkeyed_pages WHERE status='available' AND actual_item IS NULL AND locale='ceb'").iterate()){
    const title=page.title.replaceAll('_',' '),target=page.target_title?.replaceAll('_',' ');if(title!==target)continue
    const parsed=new URL(page.url);if(parsed.hostname!=='ceb.wikipedia.org'||!parsed.pathname.startsWith('/wiki/'))continue
    const matches=byName.all(title).filter(n=>n.rank==='species');if(matches.length!==1)continue
    const current=matches[0],parent=get.get(current.parent_id),family=parent?.parent_id?get.get(parent.parent_id):null,old=entry(current.id)
    if(!parent||parent.rank!=='genus'||!current.name.startsWith(parent.name+' ')||!['unresolved','ambiguous'].includes(old?.status)||existing.get(current.id,current.id,current.id)||held.get(current.id,page.url)||bad.get(page.url))continue
    candidates.set(current.id,{node:current,parent,family,page})
  }
  const rows=[...candidates.values()],accepted=[]
  for(let offset=0;offset<rows.length;offset+=10){
    const selected=rows.slice(offset,offset+10),url=new URL('https://ceb.wikipedia.org/w/api.php');for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops|categories',ppprop:'wikibase_item|disambiguation',cllimit:'500',titles:selected.map(x=>x.node.name).join('|'),maxlag:'10'}))url.searchParams.set(k,v)
    const response=await fetch(url,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; unkeyed species category verification)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const data=await response.json();assert.ok(!data.error&&!data.continue,JSON.stringify(data.error??data.continue))
    for(const r of selected){const page=data.query.pages.find(p=>p.title===r.node.name);if(!page||page.missing||page.pageprops?.wikibase_item||Object.hasOwn(page.pageprops??{},'disambiguation'))continue
      const expected=[`Kategoriya:${r.parent.name}`];if(r.family?.rank==='family')expected.push(`Kategoriya:${r.parent.name} (${r.family.name})`)
      const category=page.categories?.find(c=>expected.includes(c.title))?.title;if(category)accepted.push({...r,category})
    }
    console.log(JSON.stringify({checked:Math.min(offset+10,rows.length),total:rows.length,accepted:accepted.length}))
  }
  const proof={publishedManifestSha256:sha(manifestBytes),checkedAt:new Date().toISOString(),considered:rows.length,accepted};writeFileSync(root+'unkeyed-species-category-checks.json',JSON.stringify(proof),{flag:'wx'});console.log(JSON.stringify({status:'checked',considered:rows.length,accepted:accepted.length}))
}finally{audit.close();db.close()}
