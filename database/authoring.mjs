import assert from 'node:assert/strict'
import {isDeepStrictEqual} from 'node:util'
import {prepareNodeRevision} from './content-document.mjs'
import {sha256,stableJson} from './model.mjs'
import {readRevision} from './read-revision.mjs'
import {resolveNodeDocument,createContentReferenceCatalogue} from '../scripts/node-content.mjs'

const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
const hash=/^[0-9a-f]{64}$/
function conflict(message){const error=new Error(message);error.code='40001';throw error}
export function checkRequest(request){
  const keys=['requestId','workspaceId','nodeId','expectedGeneration','baseRevisionId','document','referenceVersions']
  assert.deepEqual(Object.keys(request).sort(),keys.sort(),'Draft request must contain only the content contract fields')
  for(const key of ['requestId','workspaceId','nodeId'])assert.match(request[key]??'',uuid,'Invalid '+key)
  if(request.baseRevisionId!==null)assert.match(request.baseRevisionId??'',uuid,'Invalid base revision')
  assert.ok(Number.isSafeInteger(request.expectedGeneration)&&request.expectedGeneration>=0,'Invalid generation')
  assert.ok(Array.isArray(request.referenceVersions),'Exact reference versions required')
  const seen=new Set()
  for(const version of request.referenceVersions){
    assert.deepEqual(Object.keys(version).sort(),['referenceId','sha256'])
    assert.ok(typeof version.referenceId==='string'&&version.referenceId.length&&!seen.has(version.referenceId),'Duplicate or empty reference')
    seen.add(version.referenceId);assert.match(version.sha256??'',hash)
  }
  assert.ok(Buffer.byteLength(stableJson(request))<=16*1024**2,'Draft exceeds 16 MiB local inline limit')
}

/** Trusted service context supplies owner/actor; never accept DB credentials in a worker payload.
 * The caller leases a dedicated client for this complete short transaction.
 */
export async function saveNodeDraft(client,request,{ownerId,actorId}){
  checkRequest(request)
  assert.ok(typeof ownerId==='string'&&ownerId.length&&typeof actorId==='string'&&actorId.length,'Trusted owner and actor required')
  const digest=sha256(stableJson({request,ownerId,actorId}))
  await client.query('BEGIN')
  try{
    // Same request lock namespace as the existing page/channel operations.
    await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',['page-request/'+request.requestId])
    const workspace=(await client.query('SELECT owner_id FROM evo_v2.authoring_workspace WHERE id=$1',[request.workspaceId])).rows[0]
    assert.ok(workspace&&workspace.owner_id===ownerId,'Workspace is not owned by this service principal')
    const prior=(await client.query('SELECT operation,input_sha256,result FROM evo_v2.page_write_receipt WHERE request_id=$1',[request.requestId])).rows[0]
    if(prior){
      assert.ok(prior.operation==='node-draft'&&prior.input_sha256===digest,'Idempotency request reused with different input')
      await client.query('COMMIT');return prior.result
    }
    await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',['node-draft/'+request.workspaceId+'/'+request.nodeId])
    const head=(await client.query('SELECT node_revision_id,generation::text FROM evo_v2.node_draft_head WHERE workspace_id=$1 AND node_id=$2 FOR UPDATE',[request.workspaceId,request.nodeId])).rows[0]
    if(head?(Number(head.generation)!==request.expectedGeneration||head.node_revision_id!==request.baseRevisionId):request.expectedGeneration!==0)conflict('Node draft base changed')
    if(request.baseRevisionId!==null){
      const base=(await client.query('SELECT node_id FROM evo_v2.node_revision WHERE id=$1',[request.baseRevisionId])).rows[0]
      assert.ok(base?.node_id===request.nodeId,'Base revision belongs to a different or missing node')
    }else{
      assert.equal((await client.query('SELECT 1 FROM evo_v2.content_node WHERE id=$1',[request.nodeId])).rowCount,0,'Existing node requires an explicit base revision')
    }
    const references=[]
    for(const version of request.referenceVersions){
      const row=(await client.query('SELECT metadata FROM evo_v2.reference_revision WHERE reference_id=$1 AND content_sha256=$2',[version.referenceId,version.sha256])).rows[0]
      assert.ok(row&&row.metadata.id===version.referenceId,'Exact reference version is unavailable')
      assert.equal(sha256(stableJson(row.metadata)),version.sha256,'Reference metadata hash differs')
      references.push(row.metadata)
    }
    const revision=prepareNodeRevision({...request,parentRevisionId:request.baseRevisionId,references})
    assert.deepEqual(revision.dependencies.map(row=>row.referenceId).sort(),request.referenceVersions.map(row=>row.referenceId).sort(),'Only actually used references may be attached')
    const kind=request.document.node.identity.kind??null
    await client.query('INSERT INTO evo_v2.content_node(id,kind) VALUES($1,$2) ON CONFLICT DO NOTHING',[request.nodeId,kind])
    const node=(await client.query('SELECT kind FROM evo_v2.content_node WHERE id=$1',[request.nodeId])).rows[0]
    assert.equal(node.kind,kind,'A node cannot change its recorded kind')
    await client.query(`INSERT INTO evo_v2.node_revision(id,node_id,parent_revision_id,content_sha256,document,identity,source_files,delivery_bindings,origin_commit,created_by)
      VALUES($1,$2,$3,$4,$5,$6,'{}','[]',NULL,$7) ON CONFLICT DO NOTHING`,[revision.revisionId,request.nodeId,request.baseRevisionId,revision.contentSha256,request.document,request.document.node.identity,actorId])
    const actual=(await client.query('SELECT node_id,parent_revision_id,content_sha256,created_by FROM evo_v2.node_revision WHERE id=$1',[revision.revisionId])).rows[0]
    assert.ok(actual&&actual.node_id===request.nodeId&&actual.parent_revision_id===request.baseRevisionId&&actual.content_sha256===revision.contentSha256,'Existing immutable revision differs')
    assert.ok(isDeepStrictEqual(await readRevision(client,revision.revisionId),request.document),'Revision readback differs')
    for(const dependency of revision.dependencies)await client.query(`INSERT INTO evo_v2.revision_dependency(revision_id,reference_version_id)
      SELECT $1,version_id FROM evo_v2.reference_revision WHERE reference_id=$2 AND content_sha256=$3 ON CONFLICT DO NOTHING`,[revision.revisionId,dependency.referenceId,dependency.referenceSha256])
    const deps=(await client.query(`SELECT r.reference_id,r.content_sha256 FROM evo_v2.revision_dependency d JOIN evo_v2.reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=$1`,[revision.revisionId])).rows
    assert.deepEqual(deps.map(row=>[row.reference_id,row.content_sha256]).sort(),revision.dependencies.map(row=>[row.referenceId,row.referenceSha256]).sort(),'Revision bibliography differs')
    const generation=request.expectedGeneration+1
    await client.query(`INSERT INTO evo_v2.node_draft_head(workspace_id,node_id,node_revision_id,generation,updated_by) VALUES($1,$2,$3,$4,$5)
      ON CONFLICT(workspace_id,node_id) DO UPDATE SET node_revision_id=EXCLUDED.node_revision_id,generation=EXCLUDED.generation,updated_by=EXCLUDED.updated_by,updated_at=now()`,[request.workspaceId,request.nodeId,revision.revisionId,generation,actorId])
    const result={workspaceId:request.workspaceId,nodeId:request.nodeId,revisionId:revision.revisionId,generation,contentSha256:revision.contentSha256}
    await client.query("INSERT INTO evo_v2.page_write_receipt(request_id,operation,input_sha256,result) VALUES($1,'node-draft',$2,$3)",[request.requestId,digest,result])
    await client.query('COMMIT');return result
  }catch(error){await client.query('ROLLBACK').catch(()=>{});throw error}
}

export async function readNodeDraft(client,{workspaceId,nodeId,ownerId},readerOptions){
  const row=(await client.query(`SELECT h.node_revision_id,h.generation::text FROM evo_v2.node_draft_head h JOIN evo_v2.authoring_workspace w ON w.id=h.workspace_id WHERE h.workspace_id=$1 AND h.node_id=$2 AND w.owner_id=$3`,[workspaceId,nodeId,ownerId])).rows[0]
  if(!row)return null
  const document=await readRevision(client,row.node_revision_id,readerOptions)
  const references=(await client.query('SELECT r.metadata FROM evo_v2.revision_dependency d JOIN evo_v2.reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=$1 ORDER BY r.reference_id',[row.node_revision_id])).rows.map(row=>row.metadata)
  return {revisionId:row.node_revision_id,generation:Number(row.generation),document,references,projection:resolveNodeDocument(document,{references})}
}

/** Append explicit adopted bibliographic metadata, never scrape or invent it. */
export async function registerReferenceVersion(client,{workspaceId,metadata},{ownerId,actorId}){
  assert.match(workspaceId??'',uuid)
  assert.ok(ownerId&&actorId,'Trusted owner and actor required')
  createContentReferenceCatalogue([metadata])
  const digest=sha256(stableJson(metadata))
  await client.query('BEGIN')
  try{
    const workspace=(await client.query('SELECT owner_id FROM evo_v2.authoring_workspace WHERE id=$1 FOR SHARE',[workspaceId])).rows[0]
    assert.equal(workspace?.owner_id,ownerId,'Workspace is not owned by this service principal')
    await client.query('INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata) VALUES($1,$2,$3) ON CONFLICT DO NOTHING',[metadata.id,digest,metadata])
    const actual=(await client.query('SELECT metadata FROM evo_v2.reference_revision WHERE reference_id=$1 AND content_sha256=$2',[metadata.id,digest])).rows[0]
    assert.deepEqual(actual.metadata,metadata,'Existing reference version differs')
    await client.query('COMMIT');return {referenceId:metadata.id,sha256:digest}
  }catch(error){await client.query('ROLLBACK').catch(()=>{});throw error}
}
