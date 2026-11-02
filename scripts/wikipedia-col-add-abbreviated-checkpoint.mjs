import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { copyFileSync,existsSync,mkdirSync,readFileSync,writeFileSync } from 'node:fs'
import { isAbsolute,join,relative,resolve,sep } from 'node:path'
import { gzipSync,gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { synonymWikidataOptions } from './wikipedia-col-synonym-options.mjs'
const root=resolve('.git/evo-wikipedia-col26-8')
function local(value){const path=resolve(value??''),child=relative(root,path);assert.ok(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep));return path}
const source=local(process.argv[2]),out=local(process.argv[3]);assert.ok(!existsSync(out))
const manifest=JSON.parse(readFileSync(join(source,'manifest.json')));assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only')
const db=new DatabaseSync(join(root,'inventory.sqlite'),{readOnly:true});db.exec('BEGIN')
const sourceSha256=db.prepare("SELECT value FROM meta WHERE key='abbreviated_wikidata_source_sha256'").get()?.value;assert.ok(sourceSha256);assert.equal(sourceSha256,manifest.abbreviatedWikidata.sourceSha256)
const counts=db.prepare('SELECT status,COUNT(*) n FROM abbreviated_wikidata_lookup GROUP BY status').all(),pending=counts.find(x=>x.status==='pending')?.n??0,queried=counts.find(x=>x.status==='queried')?.n??0
assert.equal(pending,0,'Complete abbreviated name queries before merging')
const conflict=db.prepare('SELECT status FROM article_jobs WHERE url=?')
const usable=url=>!['identity-conflict','unavailable'].includes(conflict.get(url)?.status)
const grouped=new Map()
const sql="SELECT DISTINCT u.id node_id,s.name,l.candidates_json FROM abbreviated_wikidata_targets u JOIN subgenus_names s ON s.node_id=u.id JOIN abbreviated_wikidata_lookup l ON l.name=s.name WHERE l.status='queried'"
for(const row of db.prepare(sql).iterate()){
 const options=synonymWikidataOptions([row],usable,'省略亚属候选 / Abbreviated subgenus',row.node_id)
 if(!options.length)continue
 const prefix=createHash('sha256').update(row.node_id).digest('hex').slice(0,2)
 if(!grouped.has(prefix))grouped.set(prefix,new Map())
 const nodes=grouped.get(prefix);if(!nodes.has(row.node_id))nodes.set(row.node_id,[]);nodes.get(row.node_id).push(...options)
}
db.exec('ROLLBACK');db.close();mkdirSync(out)
let newNodes=0,updatedNodes=0,addedOptions=0
const evidence=[]
for(const [prefix,file] of Object.entries(manifest.shards)){
 const bytes=readFileSync(join(source,file.path));assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sha256)
 if(!grouped.has(prefix)){copyFileSync(join(source,file.path),join(out,file.path));continue}
 const shard=JSON.parse(gunzipSync(bytes));let changed=false
 for(const [id,options] of grouped.get(prefix)){
  const entry=shard.entries[id];assert.ok(entry)
  if(!['unresolved','ambiguous','candidate'].includes(entry.status))continue
  const existing=entry.options??[],urls=new Set(existing.map(x=>x.url)),additions=options.filter(x=>x.url&&!urls.has(x.url)&&urls.add(x.url))
  if(!additions.length)continue
  if(entry.status==='unresolved'){
   if(entry.item)manifest.stats.matchedWithoutSitelink--;else manifest.stats.unresolved--
   manifest.stats.candidatesAwaitingAbstract++;newNodes++
  }else if(entry.status==='ambiguous'){manifest.stats.ambiguous--;manifest.stats.candidatesAwaitingAbstract++;newNodes++}
  shard.entries[id]={status:'candidate',options:[...existing,...additions]};updatedNodes++;addedOptions+=additions.length;changed=true
  evidence.push({id,previousStatus:entry.status,added:additions.map(x=>({item:x.item,url:x.url}))})
 }
 if(!changed){copyFileSync(join(source,file.path),join(out,file.path));continue}
 const raw=Buffer.from(JSON.stringify(shard)),compressed=gzipSync(raw,{level:1,mtime:0}),hash=createHash('sha256').update(compressed).digest('hex'),filename=`id-${prefix}-${hash.slice(0,16)}.json.gz`
 writeFileSync(join(out,filename),compressed);manifest.shards[prefix]={path:filename,sha256:hash,bytes:compressed.length,sourceSha256:createHash('sha256').update(raw).digest('hex'),sourceBytes:raw.length,entries:Object.keys(shard.entries).length}
}
manifest.abbreviatedWikidata={sourceSha256,queriedNames:queried,pendingNames:0};manifest.generatedAt=new Date().toISOString()
writeFileSync(join(out,'manifest.json'),JSON.stringify(manifest,null,2)+'\n')
writeFileSync(join(out,'abbreviated-evidence.json'),JSON.stringify({newNodes,updatedNodes,addedOptions,evidence},null,2)+'\n')
console.log(JSON.stringify({status:'complete',out,queriedNames:queried,newNodes,updatedNodes,addedOptions}))
