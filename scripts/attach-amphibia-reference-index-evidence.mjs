import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
import {parse,stringify} from 'yaml'
const base='docs/amphibia-content',root='data/sources/snapshots/amphibia-reference-index-2026-10-03',manifestPath=`root/manifest.json`.replace('root',root),manifestBytes=fs.readFileSync(manifestPath),manifest=JSON.parse(manifestBytes),coverage=JSON.parse(fs.readFileSync(`${base}/collection-placeholder-coverage.json`))
const nodes=new Map(coverage.rows.map(r=>[r.path,{...r,bindings:[]}])),byConcept=new Map()
const identity=c=>c.id?`${c.authority.startsWith('PBDB')?'PBDB':'COL'}:${c.id}`:null
for(const n of nodes.values())for(const c of n.concepts){const k=identity(c);if(k){if(!byConcept.has(k))byConcept.set(k,new Set());byConcept.get(k).add(n.path)}}
let queryBindings=0
for(const shard of manifest.bindingShards){const bytes=fs.readFileSync(shard.path);if(crypto.createHash('sha256').update(bytes).digest('hex')!==shard.sha256)throw Error(`Changed binding shard ${shard.path}`)
 for(const [i,b]of JSON.parse(shard.encoding==='gzip-json'?zlib.gunzipSync(bytes):bytes).records.entries()){
  const paths=new Set()
  for(const c of b.conceptLeads){if(c.path&&nodes.has(c.path))paths.add(c.path);const k=c.colId?`COL:${c.colId}`:identity(c);for(const path of byConcept.get(k)??[])paths.add(path)}
  const locator={file:shard.path,field:`/records/${i}`,queryName:b.queryName,queryKind:b.queryKind,queryComplete:b.queryComplete,referenceCount:b.referenceIds.length,biologicalClaimsAssigned:false}
  for(const path of paths)nodes.get(path).bindings.push(locator);queryBindings++
 }
}
const manifestSha256=crypto.createHash('sha256').update(manifestBytes).digest('hex'),failures=[],retryOnly=process.argv.includes('--retry-failures'),prior=retryOnly?JSON.parse(fs.readFileSync(`${base}/reference-index-evidence-coverage.json`)):null,retryPaths=new Set(prior?.failures.map(f=>f.path));let attached=prior?.attachedNodes??0,withoutBindings=prior?.withoutBindings??0
for(const n of nodes.values()){
 if(retryOnly&&!retryPaths.has(n.path))continue
 try{const file=`${n.path}/evidence.md`,text=fs.readFileSync(file,'utf8'),match=/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);if(!match)throw Error('Missing evidence front matter');const head=parse(match[1],{uniqueKeys:true,maxAliasCount:0}),placeholder=head.records?.['amphibia-collection-placeholder'];if(!placeholder)throw Error('Missing collection placeholder record')
  placeholder.referenceDiscovery={manifestPath,manifestSha256,documentationPath:`${base}/reference-index.md`,queryBindings:n.bindings,additionalReferenceIndexes:fs.existsSync(`${base}/cited-reference-index-coverage.json`)?['data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json']:[],indexPhaseComplete:manifest.referenceIndexPhaseComplete,biologicalClaimsAssigned:false,conceptEquivalenceCertified:false}
  placeholder.sourceCollectionComplete=Boolean(n.bindings.length&&n.bindings.every(b=>b.queryComplete))
  const next=`---\n${stringify(head,{lineWidth:0,aliasDuplicateObjects:false})}---\n${text.slice(match[0].length)}`
  if(next!==text){const staged=`${file}.reference-index.tmp`;fs.writeFileSync(staged,next);for(let attempt=0;attempt<3;attempt++){if(fs.readFileSync(file,'utf8')!==text)throw Error(`Concurrent evidence edit; staged file retained ${staged}`);try{fs.renameSync(staged,file);break}catch(e){if(!['EPERM','EACCES','EBUSY'].includes(e.code)||attempt===2)throw e;Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,500)}}}attached++;if(!n.bindings.length)withoutBindings++
 }catch(e){failures.push({path:n.path,error:String(e)})}
 if((attached+failures.length)%500===0)console.log(JSON.stringify({attached,failures:failures.length,total:nodes.size}))
}
const result={manifestPath,manifestSha256,totalNodes:nodes.size,attachedNodes:attached,withoutBindings,queryBindings,failures,biologicalClaimsAssigned:false,existingProsePreserved:true,testsRun:false,projectionsGenerated:false}
fs.writeFileSync(`${base}/reference-index-evidence-coverage.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));if(failures.length)process.exitCode=1
