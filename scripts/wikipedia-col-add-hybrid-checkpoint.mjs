import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { copyFileSync,existsSync,mkdirSync,readFileSync,writeFileSync } from 'node:fs'
import { isAbsolute,join,relative,resolve,sep } from 'node:path'
import { gzipSync,gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { hybridOptions } from './wikipedia-col-hybrid-options.mjs'
const root=resolve('.git/evo-wikipedia-col26-8')
function local(value){const path=resolve(value??''),child=relative(root,path);assert.ok(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep));return path}
const source=local(process.argv[2]),out=local(process.argv[3]);assert.ok(!existsSync(out));mkdirSync(out)
const manifest=JSON.parse(readFileSync(join(source,'manifest.json')))
assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only');assert.equal(manifest.labelWikidata.pendingNames,0)
const db=new DatabaseSync(join(root,'inventory.sqlite'),{readOnly:true})
const sourceSha256=db.prepare("SELECT value FROM meta WHERE key='hybrid_inventory_source_sha256'").get()?.value;assert.ok(sourceSha256)
const done=db.prepare('SELECT locale,source_sha256 FROM hybrid_title_done ORDER BY locale').all();assert.equal(done.length,364)
const rows=db.prepare('SELECT s.node_id,t.locale,t.title,s.original_name,p.status,p.col_ids FROM hybrid_names s JOIN hybrid_title_matches t ON t.name=s.name JOIN hybrid_title_done d ON d.locale=t.locale AND d.source_sha256=t.source_sha256 JOIN hybrid_page_checks p ON p.locale=t.locale AND p.title=t.title ORDER BY s.node_id').all()
assert.equal(rows.length,2)
const conflict=db.prepare("SELECT status FROM article_jobs WHERE url=?")
const grouped=new Map()
for(const row of rows){const options=hybridOptions([row],url=>!['identity-conflict','unavailable'].includes(conflict.get(url)?.status),row.node_id);assert.equal(options.length,1)
 const prefix=createHash('sha256').update(row.node_id).digest('hex').slice(0,2);if(!grouped.has(prefix))grouped.set(prefix,[]);grouped.get(prefix).push({id:row.node_id,option:options[0]})}
db.close()
let added=0
for(const [prefix,file] of Object.entries(manifest.shards)){
 const data=readFileSync(join(source,file.path));assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256)
 if(!grouped.has(prefix)){copyFileSync(join(source,file.path),join(out,file.path));continue}
 const shard=JSON.parse(gunzipSync(data))
 for(const row of grouped.get(prefix)){
  const entry=shard.entries[row.id];assert.ok(entry);assert.equal(entry.status,'unresolved');assert.ok(!entry.item)
  shard.entries[row.id]={status:'candidate',options:[row.option]};manifest.stats.unresolved--;manifest.stats.candidatesAwaitingAbstract++;added++
 }
 const raw=Buffer.from(JSON.stringify(shard)),compressed=gzipSync(raw,{level:1,mtime:0}),hash=createHash('sha256').update(compressed).digest('hex')
 const filename=`id-${prefix}-${hash.slice(0,16)}.json.gz`;writeFileSync(join(out,filename),compressed)
 manifest.shards[prefix]={path:filename,sha256:hash,bytes:compressed.length,sourceSha256:createHash('sha256').update(raw).digest('hex'),sourceBytes:raw.length,entries:Object.keys(shard.entries).length}
}
assert.equal(added,2);manifest.hybrid={sourceSha256,locales:Object.fromEntries(done.map(row=>[row.locale,row.source_sha256]))};manifest.generatedAt=new Date().toISOString()
writeFileSync(join(out,'manifest.json'),JSON.stringify(manifest,null,2)+'\n')
console.log(JSON.stringify({status:'complete',out,added}))
