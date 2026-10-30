import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { gunzipSync, gzipSync } from 'node:zlib'
import { normalizeScientificName } from './col-registry-lib.mjs'

const registry=resolve('data/catalogue-of-life/releases/2026-08-20/registry'),bytes=readFileSync(join(registry,'manifest.json')),manifest=JSON.parse(bytes),arg=process.argv.indexOf('--out')
assert.ok(arg>=0&&process.argv[arg+1],'--out is required')
const workspace=resolve('.git/evo-wikipedia-col26-8'),out=resolve(process.argv[arg+1]),child=relative(workspace,out)
assert.ok(out===resolve('dist/higher-search')||(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep)),'Output must be in the local matching workspace or the disposable site build')
assert.ok(!existsSync(out),'Choose a new empty output path')
assert.equal(manifest.releaseAlias,'COL26.8')
const buckets=new Map(),ids=new Set();let unsearchable=0
for(const file of manifest.hierarchy.nodes.files){
 const input=readFileSync(join(registry,file.path));assert.equal(createHash('sha256').update(input).digest('hex'),file.sha256,file.path)
 for(const line of gunzipSync(input).toString('utf8').split('\n')){
  if(!line)continue;const row=JSON.parse(line);if(row.rank==='species')continue
  assert.ok(row.id&&row.scientificName);assert.ok(!ids.has(row.id),`Duplicate hierarchy ID ${row.id}`);ids.add(row.id)
  const bare=row.authorship&&row.scientificName.endsWith(row.authorship)?row.scientificName.slice(0,-row.authorship.length).trim():row.scientificName
  const normalizedName=normalizeScientificName(row.scientificName),normalizedBare=normalizeScientificName(bare),compact=normalizedBare.replaceAll(' ','')
  if(!compact)unsearchable++
  const prefix=compact.slice(0,2).padEnd(2,'_')||'__';if(!buckets.has(prefix))buckets.set(prefix,[])
  buckets.get(prefix).push({id:row.id,scientificName:row.scientificName,authorship:row.authorship??null,rank:row.rank??null,status:row.status,parentId:row.parentId??null,sourceDatasetId:row.sourceDatasetId??null,normalizedName,normalizedBare})
 }
}
assert.equal(ids.size,manifest.hierarchy.counts.higherTaxonNodes)
mkdirSync(out,{recursive:true});const files={}
for(const [prefix,records] of [...buckets].sort(([a],[b])=>a.localeCompare(b))){
 records.sort((a,b)=>a.normalizedBare.localeCompare(b.normalizedBare)||a.id.localeCompare(b.id))
 const raw=Buffer.from(JSON.stringify({schemaVersion:1,releaseAlias:'COL26.8',prefix,records})),compressed=gzipSync(raw,{level:9,mtime:0}),hash=createHash('sha256').update(compressed).digest('hex'),path=`${prefix}-${hash.slice(0,16)}.json.gz`
 writeFileSync(join(out,path),compressed,{flag:'wx'});files[prefix]={path,sha256:hash,bytes:compressed.length,sourceSha256:createHash('sha256').update(raw).digest('hex'),sourceBytes:raw.length,records:records.length}
}
const hierarchyNodeHashes=Object.fromEntries(manifest.hierarchy.nodes.files.map(file=>[file.prefix,file.sha256]))
const output={schemaVersion:1,releaseAlias:'COL26.8',registryManifestSha256:createHash('sha256').update(bytes).digest('hex'),hierarchyNodeHashes,nodes:ids.size,unsearchable,files};writeFileSync(join(out,'manifest.json'),JSON.stringify(output,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({status:'generated',out,nodes:ids.size,unsearchable,shards:Object.keys(files).length,bytes:Object.values(files).reduce((n,x)=>n+x.bytes,0)}))
