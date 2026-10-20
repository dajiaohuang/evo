import assert from 'node:assert/strict'
import {randomUUID} from 'node:crypto'
import {mkdir,writeFile} from 'node:fs/promises'
import {connect,PROJECT_ID,safeError} from './client.mjs'
import {connectLocal} from './local-client.mjs'
import {dependencySpec,putDependency} from './page-dependencies.mjs'
import {sha256,stableJson} from './model.mjs'

const local=process.argv.includes('--local')
const client=await (local?connectLocal():connect()),checks=[],suite='native-fixture/'+randomUUID()
async function pass(name,work){await work();checks.push({check:name,passed:true})}
async function rejects(name,code,work){
  await client.query('SAVEPOINT negative_case');let actual
  try{await work()}catch(error){actual=error.code}
  await client.query('ROLLBACK TO SAVEPOINT negative_case')
  assert.equal(actual,code,name);checks.push({check:name,passed:true,sqlState:actual})
}
const actor='native-test-only'
const spec=(kind,key,descriptor,native={},edges=[])=>dependencySpec(kind,suite+'/'+key,{fixtureOnly:true},descriptor,native,edges)
async function put(value){await putDependency(client,value,actor);return value}
async function rawVersion(value){
  await client.query('INSERT INTO evo_v2.dependency_entity(id,kind,entity_key,identity) VALUES($1,$2,$3,$4)',[value.entityId,value.kind,value.key,value.identity])
  await client.query('INSERT INTO evo_v2.dependency_version(id,entity_id,kind,descriptor,created_by) VALUES($1,$2,$3,$4,$5)',[value.id,value.entityId,value.kind,value.descriptor,actor])
}
function page(key,content,renderer,extra=[],edition=1){return spec('page',key,{route:'test-only:'+key,locale:'zh',pageType:'fixture',dependencyCoverage:'complete',edition},{},[{to:content.id,role:'content'},{to:renderer.id,role:'renderer'},...extra])}
async function publication(root,{approve=true,validate=true}={}){
  const id=randomUUID(),candidate=randomUUID()
  const roots=Array.isArray(root)?root:[root],pages=[]
  for(const page of roots)pages.push({pageEntityId:page.entityId,pageVersionId:page.id,manifestSha256:(await client.query('SELECT manifest_sha256 FROM evo_v2.dependency_seal WHERE version_id=$1',[page.id])).rows[0].manifest_sha256})
  pages.sort((a,b)=>a.pageEntityId.localeCompare(b.pageEntityId))
  const manifest={model:'page-dependency-v1',pages}
  const hash=(await client.query("SELECT encode(sha256(convert_to($1::jsonb::text,'UTF8')),'hex') AS hash",[manifest])).rows[0].hash
  await client.query('INSERT INTO evo_v2.release(id,manifest_sha256,manifest) VALUES($1,$2,$3)',[id,hash,manifest])
  for(const page of roots)await client.query('INSERT INTO evo_v2.release_page(release_id,page_entity_id,page_version_id) VALUES($1,$2,$3)',[id,page.entityId,page.id])
  await client.query("INSERT INTO evo_v2.change_set(id,candidate_sha256,actor_id,actor_kind,idempotency_key,changes) VALUES($1,$2,$3,'human',$4,$5)",[candidate,hash,actor,randomUUID(),{publication:manifest}])
  if(approve)await client.query('INSERT INTO evo_v2.publication_approval(change_set_id,candidate_sha256,approved_by) VALUES($1,$2,$3)',[candidate,hash,actor])
  if(validate)await client.query("INSERT INTO evo_v2.validation_run(id,change_set_id,candidate_sha256,validator_version,passed,receipt) VALUES($1,$2,$3,'native-test-only',true,'{}')",[randomUUID(),candidate,hash])
  return {id,candidate,hash}
}
try{
  await client.query('BEGIN')
  const code=await put(spec('resource','code',{storage:'inline',retention:'rebuildable',value:'synthetic renderer fixture only'}))
  const renderer=await put(spec('renderer','renderer',{buildStatus:'verified'},{},[{to:code.id,role:'payload'}]))
  const missing=await put(spec('resource','missing',{storage:'unavailable',retention:'full-file',expectedSha256:'f'.repeat(64)}))
  await pass('Unavailable optional material is recorded explicitly',async()=>assert.equal((await client.query('SELECT ready FROM evo_v2.dependency_seal WHERE version_id=$1',[missing.id])).rows[0].ready,false))
  await rejects('Missing page locale cannot pass NULL-valued CHECK','23514',()=>put(spec('page','bad-page',{route:'test',pageType:'fixture'})))
  await rejects('Missing resource storage cannot pass NULL-valued CHECK','23514',()=>put(spec('resource','bad-resource',{retention:'citation'})))
  await rejects('Blob descriptor requires a registered artifact','23514',()=>put(spec('resource','fake-blob',{storage:'blob',retention:'full-file'})))
  await rejects('External URL cannot replace retained runtime data','23514',()=>put(spec('resource','external-data',{storage:'external',retention:'full-file',url:'https://example.invalid/data'})))
  await pass('A citation can retain just its external locator',async()=>{
    const locator=await put(spec('resource','external-citation',{storage:'external',retention:'citation',url:'https://example.invalid/citation'}))
    assert.equal((await client.query('SELECT ready FROM evo_v2.dependency_seal WHERE version_id=$1',[locator.id])).rows[0].ready,true)
  })
  await rejects('Declared hash must be an actual SHA-256 identifier','23514',()=>put(spec('resource','invalid-hash',{storage:'unavailable',retention:'full-file',expectedSha256:'unknown'})))
  await rejects('A non-native dataset cannot omit its data dependencies','P0001',()=>put(spec('dataset','empty-dataset',{})))
  await rejects('Citation role requires a reference target','P0001',async()=>{
    const value=spec('renderer','bad-role',{buildStatus:'unbuilt'},{},[{to:code.id,role:'citation'}]);await put(value)
  })
  await rejects('Unsealed dependency prevents parent sealing','P0001',async()=>{
    const child=spec('resource','unsealed',{storage:'inline',retention:'rebuildable',value:0});await rawVersion(child)
    await put(spec('dataset','unsealed-parent',{},{},[{to:child.id,role:'data'}]))
  })
  await rejects('Cyclic dependency cannot acquire a seal','P0001',async()=>{
    const a=spec('dataset','cycle-a',{}),b=spec('dataset','cycle-b',{});await rawVersion(a);await rawVersion(b)
    await client.query("INSERT INTO evo_v2.dependency_edge(from_version_id,to_version_id,role) VALUES($1,$2,'data'),($2,$1,'data')",[a.id,b.id])
    await client.query('SELECT evo_v2.seal_dependency_version($1)',[a.id])
  })
  const referenceId=suite+'/reference',metadata={id:referenceId,title:'Native fixture only',url:'https://example.invalid/fixture'}
  const ref=(await client.query('INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata) VALUES($1,$2,$3) RETURNING version_id::text',[referenceId,sha256(stableJson(metadata)),metadata])).rows[0]
  const reference=await put(spec('reference','reference-v1',{},{reference_version_id:ref.version_id}))
  const nodeId=randomUUID(),revisionId=randomUUID(),document={node:{identity:{kind:'fixture'},structure:{sections:{en:[],zh:[]}}},evidence:null,pages:{}}
  await client.query("INSERT INTO evo_v2.content_node(id,kind) VALUES($1,'native-fixture')",[nodeId])
  await client.query('INSERT INTO evo_v2.node_revision(id,node_id,content_sha256,document,created_by) VALUES($1,$2,$3,$4,$5)',[revisionId,nodeId,sha256(stableJson({document,sourceFiles:{},deliveryBindings:[]})),document,actor])
  await client.query('INSERT INTO evo_v2.revision_dependency(revision_id,reference_version_id) VALUES($1,$2)',[revisionId,ref.version_id])
  await rejects('Node cannot omit a native bibliographic dependency','P0001',()=>put(spec('node','missing-citation',{extractionCoverage:'complete'},{node_revision_id:revisionId})))
  const node=await put(spec('node','node',{extractionCoverage:'complete'},{node_revision_id:revisionId},[{to:reference.id,role:'citation',selectors:[{pointer:'/evidence/records/fixture/sources/0'}]}]))
  await rejects('Recorded COL identity cannot be dropped from dependency closure','P0001',async()=>{
    const classifiedId=randomUUID(),classifiedRevision=randomUUID(),classified={...document,node:{...document.node,identity:{kind:'taxon',classification:{authority:'Catalogue of Life',release:'fixture-only',id:'fixture-only'}}}}
    await client.query("INSERT INTO evo_v2.content_node(id,kind) VALUES($1,'native-fixture')",[classifiedId])
    await client.query('INSERT INTO evo_v2.node_revision(id,node_id,content_sha256,document,created_by) VALUES($1,$2,$3,$4,$5)',[classifiedRevision,classifiedId,sha256(stableJson({document:classified,sourceFiles:{},deliveryBindings:[]})),classified,actor])
    await put(spec('node','missing-classification',{extractionCoverage:'complete'},{node_revision_id:classifiedRevision}))
  })
  await pass('Content and reference revisions can originate outside Git',async()=>{
    assert.equal((await client.query('SELECT origin_commit FROM evo_v2.node_revision WHERE id=$1',[revisionId])).rows[0].origin_commit,null)
  })
  await rejects('Sealed graph version is immutable','P0001',()=>client.query("UPDATE evo_v2.dependency_version SET descriptor='{}' WHERE id=$1",[node.id]))
  await rejects('Dependency cannot be appended behind sealed hash','P0001',()=>client.query("INSERT INTO evo_v2.dependency_edge(from_version_id,to_version_id,role) VALUES($1,$2,'data')",[node.id,code.id]))
  const ref2=(await client.query('INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata) VALUES($1,$2,$3) RETURNING version_id::text',[referenceId,sha256(stableJson({...metadata,title:'New fixture edition'})),{...metadata,title:'New fixture edition'}])).rows[0]
  await rejects('Native citation set cannot change behind graph seal','P0001',()=>client.query('INSERT INTO evo_v2.revision_dependency(revision_id,reference_version_id) VALUES($1,$2)',[revisionId,ref2.version_id]))
  const source=randomUUID()
  await client.query("INSERT INTO evo_v2.source_release(id,authority,release_key,metadata) VALUES($1,'test-only',$2,'{}')",[source,suite])
  await put(spec('dataset','dataset',{},{source_release_id:source}))
  await rejects('Frozen taxonomy cannot gain hidden native rows','P0001',()=>client.query("INSERT INTO evo_v2.taxon_usage(release_id,usage_id,scientific_name,rank,status) VALUES($1,'new','Fixture','species','accepted')",[source]))
  await rejects('Frozen source checklists cannot gain hidden rows','P0001',()=>client.query("INSERT INTO evo_v2.source_checklist(release_id,source_dataset_id,metadata) VALUES($1,'new','{}')",[source]))
  await pass('Unknown taxon concept bridge remains a dataset context, without a fabricated taxon ID',async()=>{
    const releaseKey=local?'local-fixture-only':'COL26.8'
    if(local)await client.query("INSERT INTO evo_v2.source_release(id,authority,release_key,metadata) VALUES($1,'Catalogue of Life',$2,'{\"fixtureOnly\":true}')",[randomUUID(),releaseKey])
    const sourceRelease=(await client.query("SELECT id FROM evo_v2.source_release WHERE authority='Catalogue of Life' AND release_key=$1",[releaseKey])).rows[0]
    assert.ok(sourceRelease,'This native fixture requires the existing frozen COL baseline')
    const dataset=await put(spec('dataset','source-context-dataset',{},{source_release_id:sourceRelease.id}))
    const scopedNode=randomUUID(),scopedRevision=randomUUID(),scoped={...document,node:{...document.node,identity:{kind:'fixture',classification:{authority:'Catalogue of Life',release:releaseKey},sourceIdentity:{conceptBridgeToCOL:'unknown'}}}}
    await client.query("INSERT INTO evo_v2.content_node(id,kind) VALUES($1,'native-fixture')",[scopedNode])
    await client.query('INSERT INTO evo_v2.node_revision(id,node_id,content_sha256,document,created_by) VALUES($1,$2,$3,$4,$5)',[scopedRevision,scopedNode,sha256(stableJson({document:scoped,sourceFiles:{},deliveryBindings:[]})),scoped,actor])
    const context=await put(spec('node','source-context-node',{extractionCoverage:'complete'},{node_revision_id:scopedRevision},[{to:dataset.id,role:'classification'}]))
    const closure=(await client.query('SELECT kind FROM evo_v2.dependency_closure($1,true)',[context.id])).rows
    assert.ok(closure.some(row=>row.kind==='dataset'));assert.ok(!closure.some(row=>row.kind==='taxon'))
  })
  const root=await put(page('page',node,renderer,[{to:missing.id,role:'source-original',required:false}]))
  const incomplete=await put(page('incomplete',node,renderer,[{to:missing.id,role:'media'}]))
  await pass('Optional original file does not block citation-only publication',async()=>assert.equal((await client.query('SELECT ready FROM evo_v2.dependency_seal WHERE version_id=$1',[root.id])).rows[0].ready,true))
  await pass('Required missing media blocks the entire page',async()=>assert.equal((await client.query('SELECT ready FROM evo_v2.dependency_seal WHERE version_id=$1',[incomplete.id])).rows[0].ready,false))
  await pass('Required-only closure and full provenance closure differ',async()=>{
    const all=(await client.query('SELECT version_id FROM evo_v2.dependency_closure($1,true)',[root.id])).rows
    const required=(await client.query('SELECT version_id FROM evo_v2.dependency_closure($1,false)',[root.id])).rows
    assert.ok(all.some(x=>x.version_id===missing.id));assert.ok(!required.some(x=>x.version_id===missing.id))
  })
  const bad=await publication(incomplete)
  await rejects('Approved incomplete page still cannot publish','P0001',()=>client.query('SELECT evo_v2.seal_page_release($1,$2)',[bad.id,bad.candidate]))
  const pub=await publication(root,{approve:false,validate:false})
  await rejects('Exact candidate approval is mandatory','P0001',()=>client.query('SELECT evo_v2.seal_page_release($1,$2)',[pub.id,pub.candidate]))
  await client.query('INSERT INTO evo_v2.publication_approval(change_set_id,candidate_sha256,approved_by) VALUES($1,$2,$3)',[pub.candidate,pub.hash,actor])
  await rejects('Approval cannot replace validation','P0001',()=>client.query('SELECT evo_v2.seal_page_release($1,$2)',[pub.id,pub.candidate]))
  await client.query("INSERT INTO evo_v2.validation_run(id,change_set_id,candidate_sha256,validator_version,passed,receipt) VALUES($1,$2,$3,'native-test-only',true,'{}')",[randomUUID(),pub.candidate,pub.hash])
  await client.query('SELECT evo_v2.seal_page_release($1,$2)',[pub.id,pub.candidate])
  await rejects('Cannot append pages to an approved snapshot','P0001',()=>client.query('INSERT INTO evo_v2.release_page(release_id,page_entity_id,page_version_id) VALUES($1,$2,$3)',[pub.id,incomplete.entityId,incomplete.id]))
  await rejects('Direct channel writes reject unsealed publications','P0001',()=>client.query('INSERT INTO evo_v2.channel(name,release_id) VALUES($1,$2)',[suite+'/bad-channel',bad.id]))
  const channel=suite+'/channel',request=randomUUID()
  const advance=async(target,generation,key=request)=>(await client.query('SELECT evo_v2.advance_page_channel($1,$2,$3,$4,$5) AS result',[channel,target,generation,key,actor])).rows[0].result
  const first=await advance(pub.id,0)
  await pass('Channel write has a stable idempotent receipt',async()=>assert.deepEqual(await advance(pub.id,0),first))
  await rejects('Stale channel generation is rejected','40001',()=>advance(pub.id,0,randomUUID()))
  await rejects('Same request cannot carry a different operation','P0001',()=>advance(pub.id,1))
  const root2=await put(page('page',node,renderer,[],2)),pub2=await publication(root2)
  await client.query('SELECT evo_v2.seal_page_release($1,$2)',[pub2.id,pub2.candidate])
  await advance(pub2.id,1,randomUUID())
  await pass('Rollback advances generation while restoring old exact release',async()=>assert.equal((await advance(pub.id,2,randomUUID())).generation,3))
  const workspace=randomUUID()
  await client.query('INSERT INTO evo_v2.authoring_workspace(id,owner_id,label) VALUES($1,$2,$3)',[workspace,actor,suite])
  const draftRequest=randomUUID()
  const save=async(pageEntity,version,generation,expected,key=draftRequest,who=actor)=>(await client.query('SELECT evo_v2.save_page_draft($1,$2,$3,$4,$5,$6,$7) AS result',[workspace,pageEntity,generation,expected,version,key,who])).rows[0].result
  const draft=await save(root.entityId,root.id,0,null)
  await pass('Draft submission survives receipt reconciliation',async()=>assert.deepEqual(await save(root.entityId,root.id,0,null),draft))
  await rejects('Competing worker cannot overwrite a stale page base','40001',()=>save(root.entityId,root2.id,0,null,randomUUID(),'second-worker-fixture'))
  await rejects('Matching generation with wrong revision still conflicts','40001',()=>save(root.entityId,root2.id,1,root2.id,randomUUID()))
  await pass('Different pages can advance independently',async()=>assert.equal((await save(incomplete.entityId,incomplete.id,0,null,randomUUID(),'second-worker-fixture')).generation,1))
  async function revisedNode(edition,key='node'){
    const id=randomUUID(),body={...document,fixtureEdition:edition}
    await client.query('INSERT INTO evo_v2.node_revision(id,node_id,parent_revision_id,content_sha256,document,created_by) VALUES($1,$2,$3,$4,$5,$6)',[id,nodeId,revisionId,sha256(stableJson({document:body,sourceFiles:{},deliveryBindings:[]})),body,actor])
    await client.query('INSERT INTO evo_v2.revision_dependency(revision_id,reference_version_id) VALUES($1,$2)',[id,ref.version_id])
    return put(spec('node',key,{extractionCoverage:'complete'},{node_revision_id:id},[{to:reference.id,role:'citation'}]))
  }
  const changedNode=await revisedNode(2),english=await put(spec('page','english',{route:'fixture:en',locale:'en',pageType:'fixture',dependencyCoverage:'complete'},{},[{to:changedNode.id,role:'content'},{to:renderer.id,role:'renderer'}]))
  await pass('A locale edit advances the shared scientific node head',async()=>{
    await save(english.entityId,english.id,0,null,randomUUID(),'english-worker-fixture')
    assert.equal((await client.query('SELECT node_revision_id FROM evo_v2.node_draft_head WHERE workspace_id=$1 AND node_id=$2',[workspace,nodeId])).rows[0].node_revision_id,changedNode.native.node_revision_id)
  })
  const staleNode=await revisedNode(3),stalePage=await put(page('page',staleNode,renderer,[],3))
  await rejects('Another locale cannot overwrite shared facts using its old page base','40001',()=>save(root.entityId,stalePage.id,1,root.id,randomUUID(),'chinese-worker-fixture'))
  const mixed=await publication([root,english])
  await rejects('One publication cannot mix two revisions of the shared node','P0001',()=>client.query('SELECT evo_v2.seal_page_release($1,$2)',[mixed.id,mixed.candidate]))
  const aliasNode=await revisedNode(4,'alternate-node-key'),aliasPage=await put(page('alias-page',aliasNode,renderer)),aliased=await publication([root,aliasPage])
  await rejects('Different graph keys cannot bypass native node version consistency','P0001',()=>client.query('SELECT evo_v2.seal_page_release($1,$2)',[aliased.id,aliased.candidate]))
  await pass('Shared source can be traced back to page, publication and workspace',async()=>{
    const refs=(await client.query('SELECT * FROM evo_v2.dependency_referrers($1)',[reference.id])).rows
    assert.ok(refs.some(row=>row.page_version_id===root.id&&row.release_id===pub.id&&row.workspace_id===workspace))
  })
  await client.query('ROLLBACK')
  const report={status:'passed',projectId:local?'local':PROJECT_ID,recordedAt:new Date().toISOString(),layer:'Native PostgreSQL transactions, constraints and functions; all synthetic rows rolled back',checks,productionCutover:false,limits:'No worker authentication, hosted API, real multi-computer network concurrency, browser publication or production acceptance claim.'}
  await mkdir(new URL('../.git/platform-v2/',import.meta.url),{recursive:true})
  await writeFile(new URL(local?'../.git/platform-v2/local/page-model-native.json':'../.git/platform-v2/page-model-native.json',import.meta.url),JSON.stringify(report,null,2)+'\n')
  console.log(JSON.stringify(report))
}catch(error){await client.query('ROLLBACK').catch(()=>{});console.error(safeError(error));process.exitCode=1}finally{await client.end()}
