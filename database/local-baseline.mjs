import assert from 'node:assert/strict'
import {readFile,writeFile,mkdir} from 'node:fs/promises'
import {resolve,join} from 'node:path'
import {gzipSync} from 'node:zlib'
import {isDeepStrictEqual} from 'node:util'
import {connectLocal,LOCAL_DIRECTORY} from './local-client.mjs'
import {putLocalArtifact,readLocalArtifact} from './local-artifacts.mjs'
import {readRevision} from './read-revision.mjs'
import {validateNodeAggregate,collectNodeReferenceBindings,createContentReferenceCatalogue} from '../scripts/node-content.mjs'
import {sha256,stableJson,internalId} from './model.mjs'
import {readExportBatch} from './export-batches.mjs'

const i=process.argv.indexOf('--from');assert.ok(i>=0,'--from requires a completed local export')
const directory=resolve(process.argv[i+1]),manifest=JSON.parse(await readFile(join(directory,'manifest.json'),'utf8'))
assert.ok(manifest.completed&&/^[a-f0-9]{40}$/.test(manifest.sourceCommit),'Incomplete or unidentified export')
const rows=file=>readExportBatch(directory,file)
const references=await rows(manifest.referenceFile),refs=new Map(references.map(row=>[row.referenceId,row.metadata]))
createContentReferenceCatalogue([...refs.values()])
for(const reference of references){assert.equal(reference.referenceId,reference.metadata.id);assert.equal(sha256(stableJson(reference.metadata)),reference.contentSha256)}
const client=await connectLocal(),report={status:'running',sourceCommit:manifest.sourceCommit,recordedAt:new Date().toISOString(),nodes:0,references:references.length,referenceEdges:0,correctedNodes:0,addedReferenceEdges:0,objects:0,objectBytes:0,batches:[],cloudAccessed:false,scientificFilesChanged:false,productionCutover:false,scope:'All canonical node aggregates and adopted bibliography; taxonomy, maps and other runtime datasets retain their existing frozen files.'}
async function capacity(){assert.ok(Number((await client.query('SELECT pg_database_size(current_database())::text bytes')).rows[0].bytes)<512*1024**2,'Local baseline exceeds 512 MiB database watermark')}
try{
  await capacity();await client.query('BEGIN')
  try{
    await client.query(`INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata,origin_commit)
      SELECT x."referenceId",x."contentSha256",x.metadata,$2 FROM jsonb_to_recordset($1::jsonb) x("referenceId" text,"contentSha256" text,metadata jsonb) ON CONFLICT DO NOTHING`,[JSON.stringify(references),manifest.sourceCommit])
    const actual=(await client.query('SELECT reference_id,content_sha256,metadata FROM evo_v2.reference_revision WHERE reference_id=ANY($1::text[])',[references.map(row=>row.referenceId)])).rows
    for(const ref of references)assert.ok(actual.some(row=>row.reference_id===ref.referenceId&&row.content_sha256===ref.contentSha256&&isDeepStrictEqual(row.metadata,ref.metadata)),'Reference readback differs')
    await client.query('COMMIT')
  }catch(error){await client.query('ROLLBACK');throw error}
  for(const file of manifest.batches){
    const input=await rows(file),pack=[],metadata=[],edges=[]
    for(const row of input){
      validateNodeAggregate(row.document)
      assert.equal(sha256(stableJson({document:row.document,sourceFiles:row.sourceFiles,deliveryBindings:row.deliveryBindings})),row.contentSha256)
      const bindings=collectNodeReferenceBindings(row.document,refs)
      const versions=[...bindings.keys()].sort().map(id=>[id,sha256(stableJson(refs.get(id)))])
      const revisionId=internalId('revision/'+row.nodeId+'/'+row.contentSha256+'/references/'+sha256(stableJson(versions)))
      const previous=new Set(row.dependencies.map(dependency=>dependency.referenceId)),added=[...bindings.keys()].filter(id=>!previous.has(id))
      if(added.length)report.correctedNodes++;report.addedReferenceEdges+=added.length
      pack.push({nodeId:row.nodeId,revisionId,document:row.document,sourceFiles:row.sourceFiles,deliveryBindings:row.deliveryBindings})
      metadata.push({nodeId:row.nodeId,revisionId,physicalKey:row.physicalKey,kind:row.kind,contentSha256:row.contentSha256,identity:row.document.node.identity,sourceFiles:row.sourceFiles,deliveryBindings:row.deliveryBindings})
      for(const [referenceId,referenceSha256] of versions)edges.push({revisionId,referenceId,referenceSha256})
    }
    const object=await putLocalArtifact(gzipSync(Buffer.from(pack.map(stableJson).join('\n')+'\n'),{level:6}))
    const id='local-baseline-v3:'+manifest.sourceCommit+':'+file.path
    await capacity();await client.query('BEGIN')
    try{
      await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',[id])
      const prior=(await client.query('SELECT payload_sha256 FROM evo_v2.import_batch WHERE id=$1',[id])).rows[0]
      if(prior)assert.equal(prior.payload_sha256,object.sha256,'Existing baseline receipt differs')
      else{
        await client.query("INSERT INTO evo_v2.artifact(sha256,bytes,media_type,storage_locator,access) VALUES($1,$2,'application/gzip',$3,'private') ON CONFLICT DO NOTHING",[object.sha256,object.bytes,object.locator])
        const artifact=(await client.query('SELECT bytes::text,storage_locator FROM evo_v2.artifact WHERE sha256=$1',[object.sha256])).rows[0]
        assert.equal(artifact.bytes,String(object.bytes));assert.equal(artifact.storage_locator,object.locator)
        const data=JSON.stringify(metadata)
        await client.query(`INSERT INTO evo_v2.content_node(id,kind) SELECT x."nodeId",x.kind FROM jsonb_to_recordset($1::jsonb) x("nodeId" uuid,kind text) ON CONFLICT DO NOTHING`,[data])
        await client.query(`INSERT INTO evo_v2.node_revision(id,node_id,content_sha256,document,identity,payload_artifact_sha256,source_files,delivery_bindings,origin_commit,created_by)
          SELECT x."revisionId",x."nodeId",x."contentSha256",NULL,x.identity,$3,x."sourceFiles",x."deliveryBindings",$2,'local-migration'
          FROM jsonb_to_recordset($1::jsonb) x("revisionId" uuid,"nodeId" uuid,"contentSha256" text,identity jsonb,"sourceFiles" jsonb,"deliveryBindings" jsonb) ON CONFLICT DO NOTHING`,[data,manifest.sourceCommit,object.sha256])
        await client.query(`INSERT INTO evo_v2.import_node_key(source_commit,physical_key,node_id,revision_id)
          SELECT $2,x."physicalKey",x."nodeId",x."revisionId" FROM jsonb_to_recordset($1::jsonb) x("physicalKey" text,"nodeId" uuid,"revisionId" uuid) ON CONFLICT DO NOTHING`,[data,manifest.sourceCommit])
        if(edges.length)await client.query(`INSERT INTO evo_v2.revision_dependency(revision_id,reference_version_id)
          SELECT x."revisionId",r.version_id FROM jsonb_to_recordset($1::jsonb) x("revisionId" uuid,"referenceId" text,"referenceSha256" text)
          JOIN evo_v2.reference_revision r ON r.reference_id=x."referenceId" AND r.content_sha256=x."referenceSha256" ON CONFLICT DO NOTHING`,[JSON.stringify(edges)])
        await client.query('INSERT INTO evo_v2.import_batch(id,source_commit,payload_sha256,record_count) VALUES($1,$2,$3,$4)',[id,manifest.sourceCommit,object.sha256,pack.length])
      }
      // All rows, not a sample: native identity, body, file hashes and delivery bindings.
      for(const row of pack)assert.deepEqual(await readRevision(client,row.revisionId,{readArtifact:readLocalArtifact}),row.document)
      const actual=(await client.query(`SELECT d.revision_id,r.reference_id,r.content_sha256 FROM evo_v2.revision_dependency d JOIN evo_v2.reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=ANY($1::uuid[])`,[pack.map(row=>row.revisionId)])).rows
      assert.deepEqual(actual.map(row=>[row.revision_id,row.reference_id,row.content_sha256]).sort(),edges.map(row=>[row.revisionId,row.referenceId,row.referenceSha256]).sort(),'Full bibliography readback differs')
      const keys=(await client.query('SELECT physical_key,node_id,revision_id FROM evo_v2.import_node_key WHERE source_commit=$1 AND physical_key=ANY($2::text[])',[manifest.sourceCommit,metadata.map(row=>row.physicalKey)])).rows
      assert.deepEqual(keys.map(row=>[row.physical_key,row.node_id,row.revision_id]).sort(),metadata.map(row=>[row.physicalKey,row.nodeId,row.revisionId]).sort())
      await client.query('COMMIT')
    }catch(error){await client.query('ROLLBACK');throw error}
    report.nodes+=pack.length;report.referenceEdges+=edges.length;report.objects++;report.objectBytes+=object.bytes
    report.batches.push({id,sha256:object.sha256,records:pack.length})
    await mkdir(LOCAL_DIRECTORY,{recursive:true});await writeFile(new URL('baseline-import.json',LOCAL_DIRECTORY),JSON.stringify(report,null,2)+'\n')
    if(report.objects%50===0)console.log(JSON.stringify({batches:report.objects,nodes:report.nodes}))
  }
  assert.equal(report.nodes,manifest.nodes)
  report.status='passed';report.databaseBytes=Number((await client.query('SELECT pg_database_size(current_database())::text bytes')).rows[0].bytes)
  await writeFile(new URL('baseline-import.json',LOCAL_DIRECTORY),JSON.stringify(report,null,2)+'\n')
  const {batches,...summary}=report;console.log(JSON.stringify(summary))
}finally{await client.end()}
