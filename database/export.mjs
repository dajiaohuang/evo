import {spawn,execFileSync} from 'node:child_process'
import {mkdir,readFile,writeFile,unlink} from 'node:fs/promises'
import {createWriteStream} from 'node:fs'
import {pipeline} from 'node:stream/promises'
import {createGzip,gzipSync} from 'node:zlib'
import {resolve,join,dirname} from 'node:path'
import {once} from 'node:events'
import tar from 'tar-stream'
import {parse} from 'yaml'
import {sha256,stableJson,internalId} from './model.mjs'
import {collectNodeReferenceBindings,validateNodeAggregate} from '../scripts/node-content.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const commit=arg('--commit')
if(!/^[0-9a-f]{40}$/.test(commit??''))throw new Error('--commit requires the exact committed source SHA')
const root=resolve(import.meta.dirname,'..')
if(execFileSync('git',['rev-parse',commit],{cwd:root,encoding:'utf8'}).trim()!==commit)throw new Error('Unknown commit')
const out=resolve(arg('--out')??join(root,'.git/platform-v2/export',commit))
await mkdir(dirname(out),{recursive:true})
const resume=process.argv.includes('--resume')
if(!resume)await mkdir(out,{recursive:false})
const map=parse(execFileSync('git',['show',`${commit}:content/projection-map.yaml`],{cwd:root,maxBuffer:50*1024**2,encoding:'utf8'}))
const bindings=new Map()
function collect(value,outputPath=''){
  if(!value||typeof value!=='object')return
  if(value.contentRecord){
    const row=value.contentRecord
    const list=bindings.get(row.path)??[];list.push({outputPath,recordKey:row.key,inject:row.inject??{}});bindings.set(row.path,list)
  }
  if(Array.isArray(value)){for(const child of value)collect(child,outputPath)}
  else for(const [key,child] of Object.entries(value))collect(child,outputPath||key)
}
for(const [path,descriptor] of Object.entries(map.generatedInputs??{}))collect(descriptor,path)
const referenceDocument=parse(execFileSync('git',['show',`${commit}:content/references.yaml`],{cwd:root,maxBuffer:15*1024**2,encoding:'utf8'}))
const references=referenceDocument.references
const referenceHashes=new Map(references.map(row=>[row.id,sha256(stableJson(row))]))
if(referenceHashes.size!==references.length)throw new Error('Duplicate canonical reference ID')
const manifest={schemaVersion:3,revisionIdentity:'content-and-reference-versions-v3',sourceCommit:commit,sourceFiles:0,sourceBytes:0,nodes:0,references:references.length,batches:[],completed:false}
const referenceMap=new Map(references.map(row=>[row.id,row]))
const covered=new Set()
if(resume){
  const previous=JSON.parse(await readFile(join(out,'progress.json'),'utf8'))
  if(previous.sourceCommit!==commit||previous.completed||previous.references!==references.length)throw new Error('Invalid export resume state')
  manifest.revisionIdentity=previous.revisionIdentity??'content-v1'
  manifest.schemaVersion=previous.schemaVersion
  for(const file of previous.batches){
    if(!/^nodes-\d{4}\.ndjson\.gz$/.test(file.path))throw new Error('Unexpected resume artifact')
    const bytes=await readFile(join(out,file.path));if(sha256(bytes)!==file.sha256)throw new Error('Resume batch hash differs')
    const {gunzipSync}=await import('node:zlib');const decoded=gunzipSync(bytes)
    if(sha256(decoded)!==file.decodedSha256)throw new Error('Resume decoded batch hash differs')
    const rows=decoded.toString('utf8').trimEnd().split('\n').map(line=>JSON.parse(line));if(rows.length!==file.records)throw new Error('Resume count differs')
    for(const row of rows){if(covered.has(row.physicalKey))throw new Error('Duplicate resume node');covered.add(row.physicalKey)}
    manifest.batches.push(file);manifest.nodes+=file.records
  }
  if(manifest.nodes!==previous.nodes)throw new Error('Resume checkpoint count differs')
  await unlink(join(out,'canonical-content.tar.gz'))
}
let currentKey=null,currentFiles={},batch=[]
async function saveBatch(){
  if(!batch.length)return
  const decoded=Buffer.from(batch.map(stableJson).join('\n')+'\n'),bytes=gzipSync(decoded,{level:9})
  const name=`nodes-${String(manifest.batches.length).padStart(4,'0')}.ndjson.gz`
  await writeFile(join(out,name),bytes,{flag:'wx'})
  manifest.batches.push({path:name,records:batch.length,bytes:bytes.length,sha256:sha256(bytes),decodedSha256:sha256(decoded)})
  batch=[];await writeFile(join(out,'progress.json'),JSON.stringify(manifest,null,2)+'\n')
}
async function flushNode(){
  if(!currentKey)return
  if(!currentFiles['node.yaml'])throw new Error('Node source missing: '+currentKey)
  const node=parse(currentFiles['node.yaml']),evidence=currentFiles['evidence.yaml']?parse(currentFiles['evidence.yaml']):null
  const pages={};for(const locale of ['en','zh'])if(currentFiles[`page.${locale}.md`]!==undefined)pages[locale]=currentFiles[`page.${locale}.md`]
  const document={node,evidence,pages}
  if(manifest.schemaVersion>=3)validateNodeAggregate(document)
  if(!node.identity||typeof node.identity!=='object')throw new Error('Missing recorded identity: '+currentKey)
  const dependencies=new Map()
  function addReference(id,binding){
    if(!referenceHashes.has(id))throw new Error('Unregistered source binding '+id+' in '+currentKey)
    const list=dependencies.get(id)??[];list.push(binding);dependencies.set(id,list)
  }
  if(manifest.schemaVersion>=3){
    for(const [id,selectors] of collectNodeReferenceBindings(document,referenceMap))dependencies.set(id,selectors)
  }else{
    // Byte/identity-compatible resume of an existing v1/v2 export only.
    for(const [recordKey,record] of Object.entries(evidence?.records??{})){
      for(const field of ['sources','readerSources'])for(const source of record[field]??[]){
        if(source.referenceId)addReference(source.referenceId,{recordKey,field,...source})
      }
      for(const id of record.referenceIds??[])addReference(id,{recordKey,field:'referenceIds'})
    }
  }
  const sourceFiles=Object.fromEntries(Object.entries(currentFiles).map(([name,text])=>[name,sha256(Buffer.from(text))]))
  const deliveryBindings=bindings.get('content/nodes/'+currentKey)??[]
  const hash=sha256(stableJson({document,sourceFiles,deliveryBindings})),nodeId=internalId('node/'+currentKey)
  const referenceVersions=[...dependencies.keys()].sort().map(referenceId=>[referenceId,referenceHashes.get(referenceId)])
  const revisionStamp=manifest.revisionIdentity==='content-v1'?hash:hash+'/references/'+sha256(stableJson(referenceVersions))
  batch.push({nodeId,revisionId:internalId('revision/'+nodeId+'/'+revisionStamp),physicalKey:currentKey,kind:node.identity.kind??null,contentSha256:hash,document,sourceFiles,deliveryBindings,dependencies:[...dependencies].map(([referenceId,rows])=>({referenceId,referenceSha256:referenceHashes.get(referenceId),bindings:rows}))})
  manifest.nodes++;if(batch.length>=250)await saveBatch()
}
const extract=tar.extract(),child=spawn('git',['archive','--format=tar',commit,'content'],{cwd:root,stdio:['ignore','pipe','pipe']})
let gitError='';child.stderr.setEncoding('utf8');child.stderr.on('data',text=>gitError+=text)
const exit=once(child,'close')
extract.on('entry',(header,stream,next)=>{
  const run=async()=>{
    if(header.type!=='file'){stream.resume();await once(stream,'end');return}
    if(header.size>64*1024**2)throw new Error('Unexpected oversized canonical source '+header.name)
    manifest.sourceFiles++;manifest.sourceBytes+=header.size
    const match=/^content\/nodes\/([^/]+)\/(node\.yaml|evidence\.yaml|page\.(?:en|zh)\.md)$/.exec(header.name)
    if(match&&covered.has(match[1])){stream.resume();await once(stream,'end');return}
    const chunks=[];for await(const chunk of stream)chunks.push(chunk)
    const bytes=Buffer.concat(chunks)
    if(!match){if(header.name.startsWith('content/nodes/'))throw new Error('Unexpected canonical source '+header.name);return}
    if(currentKey!==match[1]){await flushNode();currentKey=match[1];currentFiles={}}
    if(Object.hasOwn(currentFiles,match[2]))throw new Error('Duplicate canonical source '+header.name)
    currentFiles[match[2]]=bytes.toString('utf8')
  }
  run().then(()=>next(),error=>extract.destroy(error))
})
const archive=pipeline(child.stdout,createGzip({level:6}),createWriteStream(join(out,'canonical-content.tar.gz'),{flags:'wx'}))
child.stdout.pipe(extract)
try{
  await Promise.all([archive,once(extract,'finish')])
  const [code]=await exit;if(code!==0)throw new Error('git archive failed: '+gitError)
  await flushNode();await saveBatch()
  const refRows=references.map(metadata=>({referenceId:metadata.id,contentSha256:referenceHashes.get(metadata.id),metadata}))
  const refs=gzipSync(Buffer.from(refRows.map(stableJson).join('\n')+'\n'),{level:9})
  await writeFile(join(out,'references.ndjson.gz'),refs,{flag:'wx'})
  const archiveBytes=await readFile(join(out,'canonical-content.tar.gz'))
  manifest.referenceFile={path:'references.ndjson.gz',records:references.length,bytes:refs.length,sha256:sha256(refs)}
  manifest.originalSourceArchive={path:'canonical-content.tar.gz',bytes:archiveBytes.length,sha256:sha256(archiveBytes)}
  manifest.completed=true
  await writeFile(join(out,'manifest.json'),JSON.stringify(manifest,null,2)+'\n',{flag:'wx'})
  console.log(JSON.stringify({status:'passed',out,nodes:manifest.nodes,references:manifest.references,batches:manifest.batches.length,sourceFiles:manifest.sourceFiles,sourceBytes:manifest.sourceBytes,archiveBytes:archiveBytes.length}))
}catch(error){child.kill();await archive.catch(()=>{});throw error}
