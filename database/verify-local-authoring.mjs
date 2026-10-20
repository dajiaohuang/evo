import assert from 'node:assert/strict'
import {randomUUID} from 'node:crypto'
import {mkdir,writeFile} from 'node:fs/promises'
import pg from 'pg'
import {localConfig,LOCAL_DIRECTORY} from './local-client.mjs'
import {applyMigrations} from './migrations.mjs'
import {saveNodeDraft,readNodeDraft,registerReferenceVersion} from './authoring.mjs'
import {prepareNodeRevision} from './content-document.mjs'
import {sha256,stableJson} from './model.mjs'
import {readNodeDocument,readNodeContent,readReferences,collectNodeReferenceBindings} from '../scripts/node-content.mjs'

const config=await localConfig(),name='evo_verify_'+randomUUID().replaceAll('-',''),ownerId='local-test-owner',context={ownerId,actorId:'worker-fixture'}
const admin=new pg.Client(config);await admin.connect()
const checks=[],clients=[];let created=false,report
async function pass(check,work){await work();checks.push({check,passed:true})}
async function connect(){const client=new pg.Client({...config,database:name});await client.connect();clients.push(client);return client}
const workspaceId=randomUUID(),nodeId=randomUUID(),referenceId='local-fixture-'+randomUUID()
const reference={id:referenceId,title:'Synthetic verification fixture',url:'https://example.invalid/test'}
const document={node:{schemaVersion:1,identity:{kind:'test-only'},relationships:[],structure:{sections:{en:['material'],zh:['material']}}},evidence:{schemaVersion:1,records:{'catalogue-profile':{sources:[{id:'study',referenceId,fields:['id','title','url','locator'],usage:{locator:'Fixture table 1'}}],sections:[{text:{en:{page:'en',section:'material',part:'body'},zh:{page:'zh',section:'material',part:'body'}},sourceIds:['study']}]}}},pages:{en:'## Material {#material}\n\nSynthetic fixture only.\n\n',zh:'## 材料 {#material}\n\n仅为合成验证数据。\n\n'}}
const request=(base=null,generation=0)=>({requestId:randomUUID(),workspaceId,nodeId,baseRevisionId:base,expectedGeneration:generation,document:structuredClone(document),referenceVersions:[{referenceId,sha256:sha256(stableJson(reference))}]})
try{
  assert.match(name,/^evo_verify_[a-f0-9]{32}$/)
  await admin.query('CREATE DATABASE '+name);created=true
  const a=await connect(),b=await connect(),c=await connect()
  const migrations=await applyMigrations(a)
  await a.query('INSERT INTO evo_v2.authoring_workspace(id,owner_id,label) VALUES($1,$2,$3)',[workspaceId,ownerId,'Synthetic local verification only'])
  await a.query('INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata) VALUES($1,$2,$3)',[referenceId,sha256(stableJson(reference)),reference])
  await pass('New bibliography versions append without a Git commit and replay by content hash',async()=>{
    const metadata={id:'new-fixture-reference',title:'Explicit new fixture',doi:'10.0000/synthetic-fixture-only'}
    const version=await registerReferenceVersion(a,{workspaceId,metadata},context)
    assert.deepEqual(await registerReferenceVersion(b,{workspaceId,metadata},context),version)
    await assert.rejects(registerReferenceVersion(a,{workspaceId,metadata},{ownerId:'other-owner',actorId:'untrusted'}),/owned/)
  })
  const firstRequest=request(),first=await saveNodeDraft(a,firstRequest,context)
  await pass('A new source-bound bilingual draft saves and projects without Git or Blob',async()=>{
    const read=await readNodeDraft(a,{workspaceId,nodeId,ownerId});assert.deepEqual(read.document,document)
    assert.equal(read.projection.records['catalogue-profile'].sources[0].locator,'Fixture table 1')
    assert.equal(read.projection.records['catalogue-profile'].sections[0].text.zh,'\n仅为合成验证数据。')
    const row=(await a.query('SELECT origin_commit,source_files,delivery_bindings FROM evo_v2.node_revision WHERE id=$1',[first.revisionId])).rows[0]
    assert.equal(row.origin_commit,null);assert.deepEqual(row.source_files,{});assert.deepEqual(row.delivery_bindings,[])
  })
  await pass('A lost response is reconciled by the same request receipt without another revision',async()=>{
    assert.deepEqual(await saveNodeDraft(b,firstRequest,context),first)
    assert.equal((await a.query('SELECT count(*)::integer n FROM evo_v2.node_revision')).rows[0].n,1)
  })
  await pass('The same request ID cannot be used with changed input',async()=>{
    const changed=structuredClone(firstRequest);changed.document.pages.zh+='changed'
    await assert.rejects(saveNodeDraft(a,changed,context),/Idempotency/)
  })
  let winner
  await pass('Two independent PostgreSQL sessions racing on one base have exactly one winner',async()=>{
    const en=request(first.revisionId,1),zh=request(first.revisionId,1)
    en.document.pages.en=en.document.pages.en.replace('Synthetic fixture only.','English worker fixture.')
    zh.document.pages.zh=zh.document.pages.zh.replace('仅为合成验证数据。','中文 worker 验证。')
    const results=await Promise.allSettled([saveNodeDraft(a,en,context),saveNodeDraft(b,zh,context)])
    assert.equal(results.filter(row=>row.status==='fulfilled').length,1)
    assert.equal(results.find(row=>row.status==='rejected').reason.code,'40001')
    winner=results.find(row=>row.status==='fulfilled').value
    assert.equal((await readNodeDraft(c,{workspaceId,nodeId,ownerId})).generation,2)
  })
  await pass('Independent topics can save concurrently',async()=>{
    const x=request(),y=request();x.nodeId=randomUUID();y.nodeId=randomUUID()
    const values=await Promise.all([saveNodeDraft(a,x,context),saveNodeDraft(b,y,context)])
    assert.equal(values.length,2)
  })
  await pass('Dangling page pointers roll back without orphan revisions or receipts',async()=>{
    const bad=request(winner.revisionId,2);bad.document.evidence.records['catalogue-profile'].sections[0].text.zh.section='missing'
    const before=(await a.query('SELECT count(*)::integer n FROM evo_v2.node_revision')).rows[0].n
    await assert.rejects(saveNodeDraft(a,bad,context),/section/)
    assert.equal((await a.query('SELECT count(*)::integer n FROM evo_v2.node_revision')).rows[0].n,before)
    assert.equal((await a.query('SELECT 1 FROM evo_v2.page_write_receipt WHERE request_id=$1',[bad.requestId])).rowCount,0)
  })
  await pass('Unowned workspaces cannot be read or written',async()=>{
    assert.equal(await readNodeDraft(a,{workspaceId,nodeId,ownerId:'other-owner'}),null)
    await assert.rejects(saveNodeDraft(a,request(winner.revisionId,2),{ownerId:'other-owner',actorId:'untrusted'}),/owned/)
  })
  await pass('Reference metadata revisions stay exact even when prose is identical',async()=>{
    const next={...reference,title:'Revised synthetic fixture metadata'}
    await a.query('INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata) VALUES($1,$2,$3)',[referenceId,sha256(stableJson(next)),next])
    const value=await readNodeDraft(a,{workspaceId,nodeId,ownerId}),updated=request(value.revisionId,value.generation)
    updated.document=value.document;updated.referenceVersions=[{referenceId,sha256:sha256(stableJson(next))}]
    const result=await saveNodeDraft(a,updated,context)
    assert.notEqual(result.revisionId,value.revisionId)
    assert.equal((await readNodeDraft(a,{workspaceId,nodeId,ownerId})).references[0].title,next.title)
    assert.equal(result.contentSha256,winner.contentSha256)
    winner=result
  })
  await pass('Only adopted reference versions are accepted, not unused bibliography pools',async()=>{
    const unused={id:'unused-fixture',title:'Unused fixture'}
    await a.query('INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata) VALUES($1,$2,$3)',[unused.id,sha256(stableJson(unused)),unused])
    const bad=request(winner.revisionId,winner.generation)
    bad.referenceVersions.push({referenceId:unused.id,sha256:sha256(stableJson(unused))})
    await assert.rejects(saveNodeDraft(a,bad,context),/actually used/)
  })
  await pass('Nested records and typed relationships contribute bibliography dependencies',async()=>{
    const value=structuredClone(document)
    value.node.relationships=[{type:'fixture',referenceId}]
    value.evidence.records['classification-support']={nested:{referenceIds:[referenceId]}}
    assert.equal(collectNodeReferenceBindings(value,new Map([[referenceId,reference]])).get(referenceId).length,3)
  })
  await pass('An explicit same-node base is required before editing an existing node',async()=>{
    const bad=request();await assert.rejects(saveNodeDraft(a,bad,context),error=>error.code==='40001')
    const badBase=request(randomUUID(),0);badBase.nodeId=randomUUID()
    await assert.rejects(saveNodeDraft(a,badBase,context),/different or missing/)
  })
  await pass('Five real node documents produce the same reader records through PostgreSQL',async()=>{
    const all=readReferences().references,refs=new Map(all.map(row=>[row.id,row]))
    for(const key of ['COL%3AN6S2','COL%3A8GNQF','COL%3AHY5','COL%3A3KTM2','COL%3A6G5JP']){
      const doc=readNodeDocument(key),references=[...collectNodeReferenceBindings(doc,refs).keys()].map(id=>refs.get(id)),id=randomUUID()
      prepareNodeRevision({nodeId:id,document:doc,references})
      for(const ref of references)await a.query('INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata) VALUES($1,$2,$3) ON CONFLICT DO NOTHING',[ref.id,sha256(stableJson(ref)),ref])
      const input={requestId:randomUUID(),workspaceId,nodeId:id,baseRevisionId:null,expectedGeneration:0,document:doc,referenceVersions:references.map(ref=>({referenceId:ref.id,sha256:sha256(stableJson(ref))}))}
      await saveNodeDraft(a,input,context)
      assert.deepEqual((await readNodeDraft(a,{workspaceId,nodeId:id,ownerId})).projection,readNodeContent(key))
    }
  })
  const size=(await a.query('SELECT pg_database_size(current_database())::text bytes')).rows[0].bytes
  assert.ok(Number(size)<64*1024**2,'Verification database exceeds 64 MiB bound')
  report={status:'passed',recordedAt:new Date().toISOString(),engine:(await a.query('SELECT version()')).rows[0].version,migrations:migrations.length,checks,databaseBytes:Number(size),cloudAccessed:false,multiComputerAcceptance:false}
}finally{
  await Promise.all(clients.map(client=>client.end()))
  if(created){assert.match(name,/^evo_verify_[a-f0-9]{32}$/);await admin.query('DROP DATABASE '+name)}
  await admin.end()
}
report.syntheticDatabaseRemoved=true
await mkdir(LOCAL_DIRECTORY,{recursive:true});await writeFile(new URL('authoring-verification.json',LOCAL_DIRECTORY),JSON.stringify(report,null,2)+'\n')
console.log(JSON.stringify(report))
