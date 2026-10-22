import assert from 'node:assert/strict'
import {isDeepStrictEqual} from 'node:util'
import {randomUUID} from 'node:crypto'
import {checkRequest} from './authoring.mjs'
import {prepareNodeRevision} from './content-document.mjs'
import {sha256,stableJson} from './model.mjs'
import {readRevisionRow} from './read-revision.mjs'
import {readLocalArtifact} from './local-artifacts.mjs'
import {decodeRow} from './turso-store.mjs'
import {createContentReferenceCatalogue,resolveNodeDocument} from '../scripts/node-content.mjs'

function conflict(message){const error=new Error(message);error.code='40001';throw error}
async function owned(db,workspaceId,ownerId){
  const row=await db.prepare('SELECT owner_id FROM authoring_workspace WHERE id=?').get(workspaceId)
  assert.ok(row&&row.owner_id===ownerId,'Workspace is not owned by this local operator')
}
async function transaction(db,fn){
  await db.exec('BEGIN IMMEDIATE')
  try{const value=await fn();await db.exec('COMMIT');return value}
  catch(error){await db.exec('ROLLBACK').catch(()=>{});throw error}
}
export async function readTursoRevision(db,revisionId){
  const row=await db.prepare('SELECT r.*,a.storage_locator,a.bytes AS artifact_bytes,a.access FROM node_revision r LEFT JOIN artifact a ON a.sha256=r.payload_artifact_sha256 WHERE r.id=?').get(revisionId)
  return readRevisionRow(decodeRow('node_revision',row),revisionId,{readArtifact:readLocalArtifact})
}
export async function readTursoDraft(db,{workspaceId,nodeId,ownerId}){
  await owned(db,workspaceId,ownerId)
  const row=await db.prepare('SELECT node_revision_id,generation FROM node_draft_head WHERE workspace_id=? AND node_id=?').get(workspaceId,nodeId)
  if(!row)return null
  const document=await readTursoRevision(db,row.node_revision_id)
  const references=(await db.prepare('SELECT r.metadata FROM revision_dependency d JOIN reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=? ORDER BY r.reference_id').all(row.node_revision_id)).map(r=>JSON.parse(r.metadata))
  return {revisionId:row.node_revision_id,generation:Number(row.generation),document,references,projection:resolveNodeDocument(document,{references})}
}
export async function registerTursoReference(db,{workspaceId,metadata},{ownerId,actorId}){
  assert.ok(ownerId&&actorId,'Trusted local owner/actor required');createContentReferenceCatalogue([metadata])
  const digest=sha256(stableJson(metadata))
  return transaction(db,async()=>{
    await owned(db,workspaceId,ownerId)
    const existing=await db.prepare('SELECT metadata FROM reference_revision WHERE reference_id=? AND content_sha256=?').get(metadata.id,digest)
    if(existing)assert.deepEqual(JSON.parse(existing.metadata),metadata,'Existing reference differs')
    else await db.prepare('INSERT INTO reference_revision(reference_id,content_sha256,metadata,origin_commit,version_id) SELECT ?,?,?,NULL,COALESCE(MAX(version_id),0)+1 FROM reference_revision').run(metadata.id,digest,stableJson(metadata))
    return {referenceId:metadata.id,sha256:digest}
  })
}
export async function saveTursoDraft(db,request,{ownerId,actorId}){
  checkRequest(request);assert.ok(ownerId&&actorId,'Trusted local owner/actor required')
  const digest=sha256(stableJson({request,ownerId,actorId}))
  return transaction(db,async()=>{
    await owned(db,request.workspaceId,ownerId)
    const prior=await db.prepare('SELECT operation,input_sha256,result FROM page_write_receipt WHERE request_id=?').get(request.requestId)
    if(prior){assert.ok(prior.operation==='node-draft'&&prior.input_sha256===digest,'Idempotency request reused with different input');return JSON.parse(prior.result)}
    const head=await db.prepare('SELECT node_revision_id,generation FROM node_draft_head WHERE workspace_id=? AND node_id=?').get(request.workspaceId,request.nodeId)
    if(head?(Number(head.generation)!==request.expectedGeneration||head.node_revision_id!==request.baseRevisionId):request.expectedGeneration!==0)conflict('Node draft base changed')
    if(request.baseRevisionId!==null){
      const base=await db.prepare('SELECT node_id FROM node_revision WHERE id=?').get(request.baseRevisionId)
      assert.equal(base?.node_id,request.nodeId,'Base revision belongs to a different or missing node')
    }else assert.equal(await db.prepare('SELECT id FROM content_node WHERE id=?').get(request.nodeId),undefined,'Existing node requires an explicit base revision')
    const references=[]
    for(const version of request.referenceVersions){
      const row=await db.prepare('SELECT metadata FROM reference_revision WHERE reference_id=? AND content_sha256=?').get(version.referenceId,version.sha256)
      assert.ok(row,'Exact reference version is unavailable');const metadata=JSON.parse(row.metadata)
      assert.equal(metadata.id,version.referenceId);assert.equal(sha256(stableJson(metadata)),version.sha256,'Reference hash differs');references.push(metadata)
    }
    const revision=prepareNodeRevision({...request,parentRevisionId:request.baseRevisionId,references})
    assert.deepEqual(revision.dependencies.map(d=>d.referenceId).sort(),request.referenceVersions.map(r=>r.referenceId).sort(),'Only actually used references may be attached')
    const kind=request.document.node.identity.kind??null
    await db.prepare('INSERT INTO content_node(id,kind) VALUES(?,?) ON CONFLICT(id) DO NOTHING').run(request.nodeId,kind)
    assert.equal((await db.prepare('SELECT kind FROM content_node WHERE id=?').get(request.nodeId)).kind,kind,'A node cannot change its recorded kind')
    await db.prepare('INSERT INTO node_revision(id,node_id,parent_revision_id,content_sha256,document,identity,source_files,delivery_bindings,origin_commit,created_by) VALUES(?,?,?,?,?,?,?, ?,NULL,?) ON CONFLICT(id) DO NOTHING').run(revision.revisionId,request.nodeId,request.baseRevisionId,revision.contentSha256,stableJson(request.document),stableJson(request.document.node.identity),'{}','[]',actorId)
    const actual=await db.prepare('SELECT node_id,parent_revision_id,content_sha256 FROM node_revision WHERE id=?').get(revision.revisionId)
    assert.ok(actual&&actual.node_id===request.nodeId&&actual.parent_revision_id===request.baseRevisionId&&actual.content_sha256===revision.contentSha256,'Immutable revision differs')
    assert.ok(isDeepStrictEqual(await readTursoRevision(db,revision.revisionId),request.document),'Revision readback differs')
    for(const dependency of revision.dependencies)await db.prepare('INSERT INTO revision_dependency(revision_id,reference_version_id) SELECT ?,version_id FROM reference_revision WHERE reference_id=? AND content_sha256=? ON CONFLICT DO NOTHING').run(revision.revisionId,dependency.referenceId,dependency.referenceSha256)
    const deps=await db.prepare('SELECT r.reference_id,r.content_sha256 FROM revision_dependency d JOIN reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=?').all(revision.revisionId)
    assert.deepEqual(deps.map(r=>[r.reference_id,r.content_sha256]).sort(),revision.dependencies.map(r=>[r.referenceId,r.referenceSha256]).sort(),'Revision bibliography differs')
    const generation=request.expectedGeneration+1
    assert.ok(Number.isSafeInteger(generation),'Generation overflow')
    await db.prepare('INSERT INTO node_draft_head(workspace_id,node_id,node_revision_id,generation,updated_by) VALUES(?,?,?,?,?) ON CONFLICT(workspace_id,node_id) DO UPDATE SET node_revision_id=excluded.node_revision_id,generation=excluded.generation,updated_by=excluded.updated_by,updated_at=CURRENT_TIMESTAMP').run(request.workspaceId,request.nodeId,revision.revisionId,generation,actorId)
    const result={workspaceId:request.workspaceId,nodeId:request.nodeId,revisionId:revision.revisionId,generation,contentSha256:revision.contentSha256}
    await db.prepare("INSERT INTO page_write_receipt(request_id,operation,input_sha256,result) VALUES(?,'node-draft',?,?)").run(request.requestId,digest,stableJson(result))
    return result
  })
}
export async function checkoutTurso(db,{workspaceId,ownerId,source,key,nodeId}){
  await owned(db,workspaceId,ownerId)
  let baseline
  if(key){baseline=await db.prepare('SELECT node_id,revision_id FROM import_node_key WHERE source_commit=? AND physical_key=?').get(source,key);assert.ok(baseline,'Baseline node not found');nodeId=baseline.node_id}
  assert.ok(nodeId,'Node ID or baseline key required')
  const head=await readTursoDraft(db,{workspaceId,nodeId,ownerId})
  const baseRevisionId=head?.revisionId??baseline?.revision_id
  assert.ok(baseRevisionId,'Node has neither a draft nor a selected baseline')
  const document=head?.document??await readTursoRevision(db,baseRevisionId)
  const versions=await db.prepare('SELECT r.reference_id,r.content_sha256 FROM revision_dependency d JOIN reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=? ORDER BY r.reference_id').all(baseRevisionId)
  return {requestId:randomUUID(),workspaceId,nodeId,expectedGeneration:head?.generation??0,baseRevisionId,document,referenceVersions:versions.map(v=>({referenceId:v.reference_id,sha256:v.content_sha256}))}
}
export async function tursoReceipt(db,{requestId,ownerId}){
  const row=await db.prepare("SELECT r.result FROM page_write_receipt r JOIN authoring_workspace w ON w.id=json_extract(r.result,'$.workspaceId') WHERE r.request_id=? AND r.operation='node-draft' AND w.owner_id=?").get(requestId,ownerId)
  return row?JSON.parse(row.result):{status:'not-found'}
}
