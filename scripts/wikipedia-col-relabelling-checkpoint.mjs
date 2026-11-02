import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { copyFileSync,existsSync,mkdirSync,readFileSync,writeFileSync } from 'node:fs'
import { isAbsolute,join,relative,resolve,sep } from 'node:path'
import { gzipSync,gunzipSync } from 'node:zlib'
const root=resolve('.git/evo-wikipedia-col26-8')
function local(value){const path=resolve(value??''),child=relative(root,path);assert.ok(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep));return path}
const source=local(process.argv[2]),out=local(process.argv[3]);assert.ok(!existsSync(out));mkdirSync(out)
const manifest=JSON.parse(readFileSync(join(source,'manifest.json')));assert.equal(manifest.contentMode,'links-only');assert.equal(manifest.colIdentityPolicy,'unresolved-ids-are-candidates')
let changedOptions=0,changedShards=0
for(const [prefix,file] of Object.entries(manifest.shards)){
 const bytes=readFileSync(join(source,file.path));assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sha256)
 const shard=JSON.parse(gunzipSync(bytes));let changed=false
 for(const entry of Object.values(shard.entries))for(const option of entry.options??[]){
  const index=option.parentNames?.indexOf('旧编号待核对 / Earlier identifier unverified')??-1
  if(index>=0){option.parentNames[index]='外部编号未对应 / External identifier unresolved';changedOptions++;changed=true}
 }
 if(!changed){copyFileSync(join(source,file.path),join(out,file.path));continue}
 const raw=Buffer.from(JSON.stringify(shard)),compressed=gzipSync(raw,{level:1,mtime:0}),hash=createHash('sha256').update(compressed).digest('hex'),filename=`id-${prefix}-${hash.slice(0,16)}.json.gz`
 writeFileSync(join(out,filename),compressed);manifest.shards[prefix]={path:filename,sha256:hash,bytes:compressed.length,sourceSha256:createHash('sha256').update(raw).digest('hex'),sourceBytes:raw.length,entries:Object.keys(shard.entries).length};changedShards++
}
assert.ok(changedOptions>200);manifest.generatedAt=new Date().toISOString()
writeFileSync(join(out,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');console.log(JSON.stringify({status:'complete',out,changedOptions,changedShards}))
