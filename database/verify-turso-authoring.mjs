import assert from 'node:assert/strict'
import {randomUUID} from 'node:crypto'
import {writeFile,readFile} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import {spawn} from 'node:child_process'
import {openTurso,TURSO_DIRECTORY,SCHEMA} from './turso-store.mjs'
import {saveTursoDraft,readTursoDraft,registerTursoReference} from './turso-authoring.mjs'
import {startTursoService} from './turso-service.mjs'
import {sha256,stableJson} from './model.mjs'
import {readNodeDocument,readNodeContent,readReferences,collectNodeReferenceBindings} from '../scripts/node-content.mjs'

const database=fileURLToPath(new URL('synthetic-'+randomUUID()+'.db',TURSO_DIRECTORY)),workspaceId=randomUUID(),ownerId='synthetic-owner',context={ownerId,actorId:'fixture-worker'}
const checks=[];let db=await openTurso(database,{create:true}),service
const pass=async(check,fn)=>{await fn();checks.push({check,passed:true});console.log(JSON.stringify({check,passed:true}))}
const reference={id:'synthetic-reference',title:'Synthetic verification only',url:'https://example.invalid/test'}
const document={node:{schemaVersion:1,identity:{kind:'test-only'},relationships:[],structure:{sections:{en:['material'],zh:['material']}}},evidence:{schemaVersion:1,records:{'catalogue-profile':{sources:[{id:'study',referenceId:reference.id,fields:['id','title','url','locator'],usage:{locator:'Fixture table 1'}}],sections:[{text:{en:{page:'en',section:'material',part:'body'},zh:{page:'zh',section:'material',part:'body'}},sourceIds:['study']}]}}},pages:{en:'## Material {#material}\n\nSynthetic fixture only.\n\n',zh:'## 材料 {#material}\n\n仅为合成验证数据。\n\n'}}
const request=(nodeId=randomUUID(),baseRevisionId=null,expectedGeneration=0)=>({requestId:randomUUID(),workspaceId,nodeId,baseRevisionId,expectedGeneration,document:structuredClone(document),referenceVersions:[{referenceId:reference.id,sha256:sha256(stableJson(reference))}]})
try{
  await db.exec(SCHEMA)
  await db.prepare('INSERT INTO authoring_workspace(id,owner_id,label) VALUES(?,?,?)').run(workspaceId,ownerId,'Synthetic tests only')
  await registerTursoReference(db,{workspaceId,metadata:reference},context)
  const input=request();let first
  await pass('Source-bound bilingual draft persists and projects',async()=>{
    first=await saveTursoDraft(db,input,context)
    const read=await readTursoDraft(db,{workspaceId,nodeId:input.nodeId,ownerId})
    assert.deepEqual(read.document,document)
    assert.equal(read.projection.records['catalogue-profile'].sources[0].locator,'Fixture table 1')
    assert.equal(read.projection.records['catalogue-profile'].sections[0].text.zh,'\n仅为合成验证数据。')
  })
  await pass('Exact request replay returns original result',async()=>assert.deepEqual(await saveTursoDraft(db,input,context),first))
  await pass('Changed request reuse is rejected',async()=>{const changed=structuredClone(input);changed.document.pages.zh+='changed';await assert.rejects(saveTursoDraft(db,changed,context),/Idempotency/)})
  await pass('Workspace ownership is checked on read and write',async()=>{
    await assert.rejects(readTursoDraft(db,{workspaceId,nodeId:input.nodeId,ownerId:'another-owner'}),/owned/)
    await assert.rejects(saveTursoDraft(db,request(),{ownerId:'another-owner',actorId:'fixture'}),/owned/)
  })
  await pass('Invalid content leaves no revision or receipt',async()=>{
    const before=(await db.prepare('SELECT count(*) n FROM node_revision').get()).n,bad=request()
    bad.document.evidence.records['catalogue-profile'].sections[0].text.zh.section='missing'
    await assert.rejects(saveTursoDraft(db,bad,context),/section/)
    assert.equal((await db.prepare('SELECT count(*) n FROM node_revision').get()).n,before)
    assert.equal(await db.prepare('SELECT * FROM page_write_receipt WHERE request_id=?').get(bad.requestId),undefined)
  })
  await pass('Missing reference versions are rejected',async()=>{const bad=request();bad.referenceVersions[0].sha256='0'.repeat(64);await assert.rejects(saveTursoDraft(db,bad,context),/unavailable/)})
  await pass('Failure after revision and head writes rolls back the entire transaction',async()=>{
    const bad=request()
    await db.exec("CREATE TRIGGER synthetic_receipt_failure BEFORE INSERT ON page_write_receipt BEGIN SELECT RAISE(ABORT,'synthetic receipt failure'); END;")
    try{await assert.rejects(saveTursoDraft(db,bad,context),/synthetic receipt failure/)}finally{await db.exec('DROP TRIGGER synthetic_receipt_failure')}
    assert.equal(await db.prepare('SELECT * FROM content_node WHERE id=?').get(bad.nodeId),undefined)
    assert.equal(await db.prepare('SELECT * FROM node_revision WHERE node_id=?').get(bad.nodeId),undefined)
    assert.equal(await db.prepare('SELECT * FROM node_draft_head WHERE node_id=?').get(bad.nodeId),undefined)
    assert.equal(await db.prepare('SELECT * FROM page_write_receipt WHERE request_id=?').get(bad.requestId),undefined)
  })
  await pass('Unused bibliography is rejected',async()=>{
    const metadata={id:'unused-fixture',title:'Unused fixture'},version=await registerTursoReference(db,{workspaceId,metadata},context),bad=request();bad.referenceVersions.push(version)
    await assert.rejects(saveTursoDraft(db,bad,context),/actually used/)
  })
  await pass('Exact bibliography revision can change without changing prose',async()=>{
    const metadata={...reference,title:'Revised fixture'},version=await registerTursoReference(db,{workspaceId,metadata},context),next=request(input.nodeId,first.revisionId,1);next.referenceVersions=[version]
    const saved=await saveTursoDraft(db,next,context);assert.notEqual(saved.revisionId,first.revisionId);assert.equal(saved.contentSha256,first.contentSha256);first=saved
  })
  await pass('Wrong node base and stale generation are rejected',async()=>{
    await assert.rejects(saveTursoDraft(db,request(randomUUID(),first.revisionId,0),context),/different or missing/)
    await assert.rejects(saveTursoDraft(db,request(input.nodeId,first.revisionId,1),context),e=>e.code==='40001')
  })
  await pass('Database enforces foreign keys and immutable rows',async()=>{
    await assert.rejects(db.prepare('INSERT INTO revision_dependency VALUES(?,?)').run(randomUUID(),1),/FOREIGN KEY/i)
    await assert.rejects(db.prepare('UPDATE node_revision SET created_by=? WHERE id=?').run('changed',first.revisionId),/immutable/)
    await assert.rejects(db.prepare('DELETE FROM page_write_receipt WHERE request_id=?').run(input.requestId),/immutable/)
    await assert.rejects(db.prepare('INSERT INTO channel(name,release_id,generation) VALUES(?,?,?)').run('public',randomUUID(),1),/disabled/)
  })
  await pass('Five real nodes retain their actual reader projection',async()=>{
    const refs=new Map(readReferences().references.map(r=>[r.id,r]))
    for(const key of ['COL%3AN6S2','COL%3A8GNQF','COL%3AHY5','COL%3A3KTM2','COL%3A6G5JP']){
      const doc=readNodeDocument(key),metadata=[...collectNodeReferenceBindings(doc,refs).keys()].map(id=>refs.get(id)),versions=[]
      for(const value of metadata)versions.push(await registerTursoReference(db,{workspaceId,metadata:value},context))
      const r={...request(),document:doc,referenceVersions:versions};await saveTursoDraft(db,r,context)
      assert.deepEqual((await readTursoDraft(db,{workspaceId,nodeId:r.nodeId,ownerId})).projection,readNodeContent(key))
    }
  })
  await db.close();db=null
  const configFile=database+'.service.json'
  service=await startTursoService({database,workspaceId,ownerId,configFile,allowSynthetic:true})
  async function call(route,body={}){const response=await fetch(service.config.endpoint+'/'+route,{method:'POST',headers:{authorization:'Bearer '+service.config.token,'x-evo-local':'authoring-v1'},body:JSON.stringify({actorId:context.actorId,...body})});return {status:response.status,...await response.json()}}
  await pass('Sixteen independent CLI processes submit different nodes concurrently',async()=>{
    const jobs=[]
    for(let i=0;i<16;i++){
      const file=database+'.worker-'+i+'.json';await writeFile(file,JSON.stringify(request()))
      jobs.push(new Promise((ok,no)=>{
        const child=spawn(process.execPath,[fileURLToPath(new URL('turso-cli.mjs',import.meta.url)),'submit','--actor','fixture-worker','--config',configFile,'--file',file],{windowsHide:true,stdio:['ignore','pipe','pipe']});let out='',err=''
        child.stdout.on('data',x=>out+=x);child.stderr.on('data',x=>err+=x);child.on('error',no);child.on('exit',code=>code===0?ok(JSON.parse(out)):no(Error(err)))
      }))
    }
    const results=await Promise.all(jobs);assert.equal(new Set(results.map(r=>r.nodeId)).size,16);assert.ok(results.every(r=>r.generation===1))
  })
  await pass('Competing bilingual edits to one base have exactly one winner',async()=>{
    const a=request(input.nodeId,first.revisionId,first.generation),b=structuredClone(a);b.requestId=randomUUID();a.document.pages.en+='\nEnglish edit';b.document.pages.zh+='\n中文编辑'
    const results=await Promise.all([call('submit',{request:a}),call('submit',{request:b})]);assert.equal(results.filter(r=>r.ok).length,1);assert.equal(results.find(r=>!r.ok).status,409)
  })
  await pass('A lost response is reconciled using the original request ID',async()=>{
    const r=request(),saved=await call('submit',{request:r}),receipt=await call('receipt',{requestId:r.requestId}),replay=await call('submit',{request:r})
    assert.deepEqual(receipt.result,saved.result);assert.deepEqual(replay.result,saved.result)
  })
  await pass('Loopback API rejects browser origins and missing credentials',async()=>{
    assert.equal((await fetch(service.config.endpoint+'/status',{method:'POST',body:'{}'})).status,403)
    assert.equal((await fetch(service.config.endpoint+'/status',{method:'POST',headers:{authorization:'Bearer '+service.config.token,'x-evo-local':'authoring-v1',origin:'https://example.invalid'},body:'{}'})).status,403)
  })
  await pass('Second service owner cannot open the active file',async()=>{await assert.rejects(startTursoService({database,workspaceId,ownerId,allowSynthetic:true}),e=>e.code==='EEXIST')})
  await service.close();service=null
  await pass('Restart preserves committed draft and original request receipt',async()=>{
    db=await openTurso(database);assert.ok(await readTursoDraft(db,{workspaceId,nodeId:input.nodeId,ownerId}));assert.equal(JSON.parse((await db.prepare('SELECT result FROM page_write_receipt WHERE request_id=?').get(input.requestId)).result).generation,1)
    assert.deepEqual(await db.prepare('PRAGMA foreign_key_check').all(),[])
  })
  await db.close();db=null
  await pass('Abrupt writer termination rolls back an uncommitted transaction',async()=>{
    const crashedId=randomUUID()
    const child=spawn(process.execPath,[fileURLToPath(new URL('verify-turso-crash-child.mjs',import.meta.url)),database,crashedId],{windowsHide:true,stdio:['ignore','pipe','pipe']})
    const exited=new Promise((ok,no)=>{child.on('error',no);child.on('exit',(code,signal)=>ok({code,signal}))})
    await new Promise((ok,no)=>{let output='';const timer=setTimeout(()=>no(Error('Synthetic crash writer did not become ready')),10000);child.stdout.on('data',chunk=>{output+=chunk;if(output.includes('uncommitted-ready')){clearTimeout(timer);ok()}});child.on('exit',()=>{clearTimeout(timer);no(Error('Synthetic crash writer exited before mutation'))});child.on('error',no)})
    child.kill('SIGKILL');await exited
    db=await openTurso(database)
    assert.equal(await db.prepare('SELECT * FROM content_node WHERE id=?').get(crashedId),undefined)
    assert.ok(await readTursoDraft(db,{workspaceId,nodeId:input.nodeId,ownerId}))
  })
  const report={status:'passed',at:new Date().toISOString(),engine:'@tursodatabase/database@0.8.3',platform:process.platform,database,checks,publicationEnabled:false,multiComputerAcceptance:false}
  await writeFile(new URL('authoring-verification.json',TURSO_DIRECTORY),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report))
}finally{if(service)await service.close();if(db)await db.close()}
