import {readFile,writeFile,mkdir} from 'node:fs/promises'
import {gunzipSync} from 'node:zlib'
import {resolve,join} from 'node:path'
import {isDeepStrictEqual} from 'node:util'
import {connect,PROJECT_ID,safeError} from './client.mjs'
import {sha256,stableJson} from './model.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const folder=arg('--from');if(!folder)throw new Error('--from requires a completed export directory')
const input=resolve(folder),manifest=JSON.parse(await readFile(join(input,'manifest.json'),'utf8'))
if(!manifest.completed||!/^[a-f0-9]{40}$/.test(manifest.sourceCommit))throw new Error('Export is incomplete')
const pilot=process.argv.includes('--pilot'),maxBytes=Number(arg('--max-db-bytes')??850*1024**2)
if(!Number.isSafeInteger(maxBytes)||maxBytes<1)throw new Error('Invalid database capacity bound')
const out=resolve(import.meta.dirname,'../.git/platform-v2/import',manifest.sourceCommit)
await mkdir(out,{recursive:true})
const receipt={projectId:PROJECT_ID,sourceCommit:manifest.sourceCommit,manifestSha256:sha256(await readFile(join(input,'manifest.json'))),mode:pilot?'pilot':'full',status:'running',batches:[],maxDatabaseBytes:maxBytes,productionCutover:false}
const receiptPath=join(out,pilot?'pilot.json':'full.json')
const client=await connect()
const uploadReceipt=JSON.parse(await readFile(new URL(`../.git/platform-v2/uploads/${manifest.sourceCommit}.json`,import.meta.url),'utf8'))
const verifiedObjects=new Map(uploadReceipt.objects.filter(row=>row.verifiedReadback).map(row=>[row.sha256,row]))
async function rows(file){
  const bytes=await readFile(join(input,file.path));if(sha256(bytes)!==file.sha256)throw new Error('Export batch hash mismatch '+file.path)
  const decoded=gunzipSync(bytes);if(file.decodedSha256&&sha256(decoded)!==file.decodedSha256)throw new Error('Decoded export hash mismatch')
  const records=decoded.toString('utf8').trimEnd().split('\n').map(line=>JSON.parse(line));if(records.length!==file.records)throw new Error('Batch count mismatch')
  return records
}
async function transact(id,file,work){
  const existing=(await client.query('SELECT source_commit,payload_sha256,record_count FROM evo_v2.import_batch WHERE id=$1',[id])).rows[0]
  if(existing){if(existing.source_commit!==manifest.sourceCommit||existing.payload_sha256!==file.sha256||existing.record_count!==file.records)throw new Error('Existing import receipt differs');receipt.batches.push({id,status:'reconciled',records:file.records});return}
  const bytes=Number((await client.query('SELECT pg_database_size(current_database())::text AS bytes')).rows[0].bytes)
  if(bytes>=maxBytes)throw new Error('Database capacity watermark reached; no automatic plan upgrade')
  await client.query('BEGIN')
  try{
    await work()
    await client.query('INSERT INTO evo_v2.import_batch(id,source_commit,payload_sha256,record_count) VALUES ($1,$2,$3,$4)',[id,manifest.sourceCommit,file.sha256,file.records])
    await client.query('COMMIT')
    receipt.batches.push({id,status:'committed-and-readback-verified',records:file.records})
  }catch(error){await client.query('ROLLBACK').catch(()=>{});throw error}
  await writeFile(receiptPath,JSON.stringify(receipt,null,2)+'\n')
}
try{
  const references=await rows(manifest.referenceFile)
  for(let offset=0;offset<references.length;offset+=250){
    const subset=references.slice(offset,offset+250),file={records:subset.length,sha256:sha256(stableJson(subset))}
    await transact('references:'+manifest.sourceCommit+':'+offset,file,async()=>{
      await client.query(`INSERT INTO evo_v2.reference_revision(reference_id,content_sha256,metadata,origin_commit)
        SELECT x."referenceId",x."contentSha256",x.metadata,$2 FROM jsonb_to_recordset($1::jsonb) AS x("referenceId" text,"contentSha256" text,metadata jsonb) ON CONFLICT DO NOTHING`,[JSON.stringify(subset),manifest.sourceCommit])
      await client.query(`INSERT INTO evo_v2.import_reference_key(source_commit,reference_id,reference_sha256)
        SELECT $2,x."referenceId",x."contentSha256" FROM jsonb_to_recordset($1::jsonb) x("referenceId" text,"contentSha256" text) ON CONFLICT DO NOTHING`,[JSON.stringify(subset),manifest.sourceCommit])
      const actual=(await client.query(`SELECT r.reference_id,r.content_sha256,r.metadata FROM evo_v2.reference_revision r JOIN evo_v2.import_reference_key k ON k.reference_id=r.reference_id AND k.reference_sha256=r.content_sha256 WHERE k.source_commit=$2 AND k.reference_id=ANY($1::text[])`,[subset.map(row=>row.referenceId),manifest.sourceCommit])).rows
      if(actual.length!==subset.length)throw new Error('Reference readback count mismatch')
      for(const row of subset){const match=actual.find(value=>value.reference_id===row.referenceId&&value.content_sha256===row.contentSha256);if(!match||!isDeepStrictEqual(match.metadata,row.metadata))throw new Error('Reference readback mismatch '+row.referenceId)}
    })
  }
  const selected=pilot?[...new Set([0,Math.floor(manifest.batches.length/2),manifest.batches.length-1])].map(i=>manifest.batches[i]):manifest.batches
  for(const file of selected){
    const records=await rows(file)
    const object=verifiedObjects.get(file.sha256)
    if(!object)throw new Error('Content payload has not passed private Blob readback: '+file.path)
    const artifact=(await client.query('SELECT bytes::text,storage_locator,access FROM evo_v2.artifact WHERE sha256=$1',[file.sha256])).rows[0]
    if(!artifact||artifact.bytes!==String(file.bytes)||artifact.storage_locator!==object.url||artifact.access!=='private')throw new Error('Verified content object descriptor differs')
    await transact('nodes:'+manifest.sourceCommit+':'+file.path,file,async()=>{
      const payload=JSON.stringify(records.map(row=>({nodeId:row.nodeId,revisionId:row.revisionId,physicalKey:row.physicalKey,kind:row.kind,contentSha256:row.contentSha256,identity:row.document.node.identity,sourceFiles:row.sourceFiles,deliveryBindings:row.deliveryBindings})))
      await client.query(`INSERT INTO evo_v2.content_node(id,kind) SELECT x."nodeId",x.kind FROM jsonb_to_recordset($1::jsonb) x("nodeId" uuid,kind text) ON CONFLICT DO NOTHING`,[payload])
      await client.query(`INSERT INTO evo_v2.node_revision(id,node_id,content_sha256,document,identity,payload_artifact_sha256,source_files,delivery_bindings,origin_commit,created_by)
        SELECT x."revisionId",x."nodeId",x."contentSha256",NULL,x.identity,$3,x."sourceFiles",x."deliveryBindings",$2,'migration:'||$2
        FROM jsonb_to_recordset($1::jsonb) x("revisionId" uuid,"nodeId" uuid,"contentSha256" text,identity jsonb,"sourceFiles" jsonb,"deliveryBindings" jsonb) ON CONFLICT DO NOTHING`,[payload,manifest.sourceCommit,file.sha256])
      await client.query(`INSERT INTO evo_v2.import_node_key(source_commit,physical_key,node_id,revision_id)
        SELECT $2,x."physicalKey",x."nodeId",x."revisionId" FROM jsonb_to_recordset($1::jsonb) x("physicalKey" text,"nodeId" uuid,"revisionId" uuid) ON CONFLICT DO NOTHING`,[payload,manifest.sourceCommit])
      const dependencies=records.flatMap(row=>row.dependencies.map(dependency=>({revisionId:row.revisionId,referenceId:dependency.referenceId,referenceSha256:dependency.referenceSha256})))
      if(dependencies.length)await client.query(`INSERT INTO evo_v2.revision_dependency(revision_id,reference_version_id)
        SELECT x."revisionId",r.version_id FROM jsonb_to_recordset($1::jsonb) x("revisionId" uuid,"referenceId" text,"referenceSha256" text)
        JOIN evo_v2.reference_revision r ON r.reference_id=x."referenceId" AND r.content_sha256=x."referenceSha256" ON CONFLICT DO NOTHING`,[JSON.stringify(dependencies)])
      const actual=(await client.query(`SELECT r.*,n.kind FROM evo_v2.node_revision r JOIN evo_v2.content_node n ON n.id=r.node_id WHERE r.id=ANY($1::uuid[])`,[records.map(row=>row.revisionId)])).rows
      if(actual.length!==records.length)throw new Error('Node readback count mismatch')
      for(const row of records){const match=actual.find(value=>value.id===row.revisionId);if(!match||match.node_id!==row.nodeId||match.kind!==row.kind||match.content_sha256!==row.contentSha256||match.document!==null||match.payload_artifact_sha256!==file.sha256||!isDeepStrictEqual(match.identity,row.document.node.identity)||!isDeepStrictEqual(match.source_files,row.sourceFiles)||!isDeepStrictEqual(match.delivery_bindings,row.deliveryBindings)||sha256(stableJson({document:row.document,sourceFiles:match.source_files,deliveryBindings:match.delivery_bindings}))!==match.content_sha256)throw new Error('Native metadata/private-payload roundtrip differs for '+row.physicalKey)}
      const actualDependencies=(await client.query('SELECT d.revision_id,r.reference_id,r.content_sha256 AS reference_sha256 FROM evo_v2.revision_dependency d JOIN evo_v2.reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=ANY($1::uuid[])',[records.map(row=>row.revisionId)])).rows
      if(actualDependencies.length!==dependencies.length)throw new Error('Dependency readback count mismatch')
      for(const row of dependencies){const match=actualDependencies.find(value=>value.revision_id===row.revisionId&&value.reference_id===row.referenceId);if(!match||match.reference_sha256!==row.referenceSha256)throw new Error('Dependency readback differs')}
    })
    console.log(JSON.stringify({batch:file.path,processed:receipt.batches.length-22,mode:receipt.mode}))
  }
  const counts=(await client.query(`SELECT (SELECT count(*)::integer FROM evo_v2.import_node_key WHERE source_commit=$1) nodes,(SELECT count(*)::integer FROM evo_v2.import_reference_key WHERE source_commit=$1) AS "references",pg_database_size(current_database())::text bytes`,[manifest.sourceCommit])).rows[0]
  if(!pilot&&(counts.nodes!==manifest.nodes||counts.references!==manifest.references))throw new Error('Full import count mismatch')
  receipt.status='passed';receipt.counts=counts;await writeFile(receiptPath,JSON.stringify(receipt,null,2)+'\n')
  console.log(JSON.stringify({status:'passed',mode:receipt.mode,...counts}))
}catch(error){receipt.status='failed';receipt.error=safeError(error);await writeFile(receiptPath,JSON.stringify(receipt,null,2)+'\n');console.error(safeError(error));process.exitCode=1}
finally{await client.end()}
