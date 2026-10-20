import assert from 'node:assert/strict'
import {readFile,writeFile,mkdir} from 'node:fs/promises'
import {resolve,join} from 'node:path'
import {readExportBatch} from './export-batches.mjs'
import {validateNodeAggregate,collectNodeReferenceBindings,resolveNodeDocument,createContentReferenceCatalogue} from '../scripts/node-content.mjs'
import {sha256,stableJson} from './model.mjs'
import {LOCAL_DIRECTORY} from './local-client.mjs'

const i=process.argv.indexOf('--from');assert.ok(i>=0,'--from requires a completed local export')
const directory=resolve(process.argv[i+1]),manifest=JSON.parse(await readFile(join(directory,'manifest.json'),'utf8'))
assert.ok(manifest.completed,'Incomplete export')
const batch=file=>readExportBatch(directory,file)
const referenceRows=await batch(manifest.referenceFile)
for(const row of referenceRows){assert.equal(row.referenceId,row.metadata.id);assert.equal(sha256(stableJson(row.metadata)),row.contentSha256)}
const references=new Map(referenceRows.map(row=>[row.referenceId,row.metadata]));createContentReferenceCatalogue([...references.values()])
const report={contract:'node-aggregate-v1',sourceCommit:manifest.sourceCommit,recordedAt:new Date().toISOString(),nodes:0,authoredNodes:0,pages:0,referenceBindings:0,legacyMissingEdges:0,legacyExtraEdges:0,dependencyDifferenceExamples:[],bodyBytes:0,pageBytes:0,evidenceBytes:0,recordKinds:{},issues:0,examples:[],cloudAccessed:false,filesRemoved:false}
const used=new Set(),bodies=new Set(),seen=new Set()
for(const file of manifest.batches){
  for(const row of await batch(file)){
    assert.ok(!seen.has(row.nodeId),'Duplicate node in export');seen.add(row.nodeId)
    assert.equal(sha256(stableJson({document:row.document,sourceFiles:row.sourceFiles,deliveryBindings:row.deliveryBindings})),row.contentSha256)
    try{
      validateNodeAggregate(row.document)
      const bindings=collectNodeReferenceBindings(row.document,references)
      resolveNodeDocument(row.document,references)
      report.referenceBindings+=bindings.size
      const previous=new Set(row.dependencies.map(dependency=>dependency.referenceId))
      const missing=[...bindings.keys()].filter(id=>!previous.has(id)),extra=[...previous].filter(id=>!bindings.has(id))
      report.legacyMissingEdges+=missing.length;report.legacyExtraEdges+=extra.length
      if((missing.length||extra.length)&&report.dependencyDifferenceExamples.length<10)report.dependencyDifferenceExamples.push({physicalKey:row.physicalKey,missing,extra})
      for(const id of bindings.keys())used.add(id)
      const kinds=Object.keys(row.document.evidence?.records??{})
      for(const kind of kinds)report.recordKinds[kind]=(report.recordKinds[kind]??0)+1
      const pages=Object.values(row.document.pages)
      if(pages.length)report.authoredNodes++
      report.pages+=pages.length
      report.pageBytes+=pages.reduce((n,value)=>n+Buffer.byteLength(value),0)
      report.evidenceBytes+=Buffer.byteLength(stableJson(row.document.evidence))
      report.bodyBytes+=Buffer.byteLength(stableJson(row.document))
      bodies.add(sha256(stableJson(row.document)))
    }catch(error){report.issues++;if(report.examples.length<30)report.examples.push({physicalKey:row.physicalKey,error:error.message})}
    report.nodes++
  }
}
assert.equal(report.nodes,manifest.nodes)
report.references=references.size;report.usedReferences=used.size;report.uniqueBodies=bodies.size
report.status=report.issues?'blocked':'passed'
await mkdir(LOCAL_DIRECTORY,{recursive:true});await writeFile(new URL('content-audit.json',LOCAL_DIRECTORY),JSON.stringify(report,null,2)+'\n')
console.log(JSON.stringify(report));if(report.issues)process.exitCode=1
