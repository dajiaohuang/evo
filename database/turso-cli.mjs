import assert from 'node:assert/strict'
import {readFile,writeFile,mkdir,realpath} from 'node:fs/promises'
import {resolve,relative,isAbsolute,dirname,sep} from 'node:path'
import {TURSO_DIRECTORY} from './turso-store.mjs'
import {LOCAL_DIRECTORY} from './local-client.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const command=process.argv[2],actorId=arg('--actor')
assert.ok(actorId,'--actor is required')
const config=JSON.parse(await readFile(arg('--config')??new URL('service.json',TURSO_DIRECTORY),'utf8'))
const endpoint=new URL(config.endpoint);assert.equal(endpoint.protocol,'http:');assert.equal(endpoint.hostname,'127.0.0.1');assert.equal(endpoint.pathname,'/')
const body={actorId};let route=command,content=false
if(command==='checkout'){body.key=arg('--key');body.nodeId=arg('--node');body.source=arg('--source');content=true}
else if(command==='submit')body.request=JSON.parse(await readFile(resolve(arg('--file')),'utf8'))
else if(command==='reference')body.metadata=JSON.parse(await readFile(resolve(arg('--file')),'utf8'))
else if(command==='references'){body.versions=JSON.parse(await readFile(resolve(arg('--file')),'utf8')).referenceVersions;content=true}
else if(command==='read'){body.nodeId=arg('--node');content=true}
else if(command==='receipt')body.requestId=arg('--request')
else if(command==='nodes'){body.source=arg('--source');body.after=arg('--after')??'';body.limit=Number(arg('--limit')??48);content=true}
else assert.equal(command,'status','Use status, nodes, checkout, references, reference, submit, read or receipt')
if(content)assert.ok(arg('--out'),'--out is required for content and source material')
// No automatic replay: a network failure after submit must be reconciled by receipt.
const response=await fetch(new URL('/'+route,endpoint),{method:'POST',headers:{authorization:'Bearer '+config.token,'x-evo-local':'authoring-v1','content-type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(120000)})
const result=await response.json()
if(!response.ok||!result.ok){console.error(JSON.stringify({status:'failed',code:result.code,error:result.error}));process.exitCode=1}
else if(arg('--out')){
  const target=resolve(arg('--out')),root=await realpath(LOCAL_DIRECTORY),rel=relative(root,target)
  assert.ok(rel&&!isAbsolute(rel)&&rel!=='..'&&!rel.startsWith('..'+sep),'Output must stay in ignored local authoring directory')
  await mkdir(dirname(target),{recursive:true});const actual=relative(root,await realpath(dirname(target)))
  assert.ok(!isAbsolute(actual)&&actual!=='..'&&!actual.startsWith('..'+sep),'Output parent escapes local authoring directory')
  await writeFile(target,JSON.stringify(result.result,null,2)+'\n',{flag:'wx'})
  console.log(JSON.stringify({status:'written',path:target}))
}else console.log(JSON.stringify(result.result))
