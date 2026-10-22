import assert from 'node:assert/strict'
import {readFile,writeFile,mkdir,realpath} from 'node:fs/promises'
import {resolve,relative,isAbsolute,dirname,sep} from 'node:path'
import {randomUUID} from 'node:crypto'
import {connectLocal,LOCAL_DIRECTORY} from './local-client.mjs'
import {readNodeDocument,readReferences,collectNodeReferenceBindings,validateNodeAggregate,createContentReferenceCatalogue} from '../scripts/node-content.mjs'
import {saveNodeDraft,readNodeDraft,registerReferenceVersion} from './authoring.mjs'
import {internalId,sha256,stableJson} from './model.mjs'
import {readRevision} from './read-revision.mjs'
import {readLocalArtifact} from './local-artifacts.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const command=process.argv[2],ownerId=arg('--owner'),actorId=arg('--actor')??ownerId
assert.ok(ownerId,'--owner is required (local trusted operator; not an HTTP authentication mechanism)')
let activeStore
try{activeStore=JSON.parse(await readFile(new URL('active-store.json',LOCAL_DIRECTORY),'utf8'))}catch(error){if(error.code!=='ENOENT')throw error}
assert.ok(activeStore?.engine!=='turso','Local authoring has moved to Turso; use database/turso-cli.mjs. PostgreSQL is retained read-only for recovery.')
const client=await connectLocal()
async function saveOutput(value){
  const output=arg('--out')
  if(!output){console.log(JSON.stringify(value));return}
  const target=resolve(output),base=await realpath(LOCAL_DIRECTORY),rel=relative(base,target)
  assert.ok(rel&&rel!=='..'&&!rel.startsWith('..'+sep)&&!isAbsolute(rel),'Content output must stay in .git/platform-v2/local/')
  await mkdir(dirname(target),{recursive:true})
  const actual=await realpath(dirname(target)),parent=relative(base,actual)
  assert.ok(parent!== '..'&&!parent.startsWith('..'+sep)&&!isAbsolute(parent),'Output parent escapes local directory')
  await writeFile(target,JSON.stringify(value,null,2)+'\n',{flag:'wx'})
  console.log(JSON.stringify({status:'written',path:target}))
}
try{
  if(command==='workspace'){
    const id=arg('--workspace')??randomUUID()
    await client.query('INSERT INTO evo_v2.authoring_workspace(id,owner_id,label) VALUES($1,$2,$3) ON CONFLICT DO NOTHING',[id,ownerId,arg('--label')??'Local authoring'])
    assert.equal((await client.query('SELECT owner_id FROM evo_v2.authoring_workspace WHERE id=$1',[id])).rows[0]?.owner_id,ownerId)
    await saveOutput({workspaceId:id})
  }else if(command==='reference'){
    const metadata=JSON.parse(await readFile(resolve(arg('--file')),'utf8'))
    await saveOutput(await registerReferenceVersion(client,{workspaceId:arg('--workspace'),metadata},{ownerId,actorId}))
  }else if(command==='import-node'){
    const key=arg('--key'),workspaceId=arg('--workspace');assert.ok(key&&workspaceId,'--key and --workspace required')
    assert.equal((await client.query('SELECT owner_id FROM evo_v2.authoring_workspace WHERE id=$1',[workspaceId])).rows[0]?.owner_id,ownerId)
    const document=readNodeDocument(key);validateNodeAggregate(document)
    const all=readReferences().references,refs=new Map(all.map(row=>[row.id,row]))
    const selected=[...collectNodeReferenceBindings(document,refs).keys()].sort().map(id=>refs.get(id))
    createContentReferenceCatalogue(selected)
    await client.query('BEGIN')
    try{
      for(const reference of selected)await client.query('INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata,origin_commit) VALUES($1,$2,$3,NULL) ON CONFLICT DO NOTHING',[reference.id,sha256(stableJson(reference)),reference])
      await client.query('COMMIT')
    }catch(error){await client.query('ROLLBACK');throw error}
    const request={requestId:arg('--request')??randomUUID(),workspaceId,nodeId:internalId('node/'+key),expectedGeneration:0,baseRevisionId:null,document,referenceVersions:selected.map(row=>({referenceId:row.id,sha256:sha256(stableJson(row))}))}
    const result=await saveNodeDraft(client,request,{ownerId,actorId})
    await saveOutput({...result,requestId:request.requestId})
  }else if(command==='checkout'){
    const workspaceId=arg('--workspace'),key=arg('--key'),source=arg('--source')
    assert.ok(workspaceId&&key&&source&&arg('--out'),'--workspace, --key, --source and --out required')
    assert.equal((await client.query('SELECT owner_id FROM evo_v2.authoring_workspace WHERE id=$1',[workspaceId])).rows[0]?.owner_id,ownerId)
    const row=(await client.query('SELECT node_id,revision_id FROM evo_v2.import_node_key WHERE source_commit=$1 AND physical_key=$2',[source,key])).rows[0]
    assert.ok(row,'Baseline node not found')
    const head=await readNodeDraft(client,{workspaceId,nodeId:row.node_id,ownerId},{readArtifact:readLocalArtifact})
    const baseRevisionId=head?.revisionId??row.revision_id
    const document=head?.document??await readRevision(client,baseRevisionId,{readArtifact:readLocalArtifact})
    const versions=(await client.query('SELECT r.reference_id,r.content_sha256 FROM evo_v2.revision_dependency d JOIN evo_v2.reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=$1 ORDER BY r.reference_id',[baseRevisionId])).rows
    await saveOutput({requestId:randomUUID(),workspaceId,nodeId:row.node_id,expectedGeneration:head?.generation??0,baseRevisionId,document,referenceVersions:versions.map(row=>({referenceId:row.reference_id,sha256:row.content_sha256}))})
  }else if(command==='submit'){
    const request=JSON.parse(await readFile(resolve(arg('--file')),'utf8'))
    await saveOutput(await saveNodeDraft(client,request,{ownerId,actorId}))
  }else if(command==='read'){
    const value=await readNodeDraft(client,{workspaceId:arg('--workspace'),nodeId:arg('--node'),ownerId},{readArtifact:readLocalArtifact})
    assert.ok(value,'Owned draft not found');assert.ok(arg('--out'),'--out required for scientific content; credentials and bodies are not logged')
    await saveOutput(value)
  }else if(command==='receipt'){
    const row=(await client.query(`SELECT r.result FROM evo_v2.page_write_receipt r JOIN evo_v2.authoring_workspace w ON w.id=(r.result->>'workspaceId')::uuid WHERE r.request_id=$1 AND r.operation='node-draft' AND w.owner_id=$2`,[arg('--request'),ownerId])).rows[0]
    await saveOutput(row?.result??{status:'not-found'})
  }else throw new Error('Use workspace, reference, import-node, checkout, submit, read or receipt')
}finally{await client.end()}
