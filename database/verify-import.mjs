import assert from 'node:assert/strict'
import {readFile,writeFile} from 'node:fs/promises'
import {gunzipSync} from 'node:zlib'
import {resolve,join} from 'node:path'
import {isDeepStrictEqual} from 'node:util'
import {connect,PROJECT_ID,safeError} from './client.mjs'
import {sha256,stableJson} from './model.mjs'
import {readRevision} from './read-revision.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const input=resolve(arg('--from')??''),manifest=JSON.parse(await readFile(join(input,'manifest.json'),'utf8'))
assert.ok(manifest.completed)
const uploads=JSON.parse(await readFile(new URL(`../.git/platform-v2/uploads/${manifest.sourceCommit}.json`,import.meta.url),'utf8'))
assert.equal(uploads.status,'passed');const verified=new Map(uploads.objects.map(row=>[row.sha256,row]))
const client=await connect(),receipt={status:'running',projectId:PROJECT_ID,sourceCommit:manifest.sourceCommit,checkedNodes:0,checkedReferenceEdges:0,checkedReferences:0,actualPrivateReads:[],productionCutover:false}
const selected=new Map(),ids=new Set(['N6S2','8GNQF','HY5','3KTM2','6G5JP'])
try{
  for(const file of manifest.batches){
    assert.ok(verified.has(file.sha256));const bytes=await readFile(join(input,file.path));assert.equal(sha256(bytes),file.sha256)
    const decoded=gunzipSync(bytes);assert.equal(sha256(decoded),file.decodedSha256)
    const records=decoded.toString('utf8').trimEnd().split('\n').map(line=>JSON.parse(line))
    const actual=(await client.query('SELECT r.*,n.kind FROM evo_v2.node_revision r JOIN evo_v2.content_node n ON n.id=r.node_id WHERE r.id=ANY($1::uuid[])',[records.map(row=>row.revisionId)])).rows
    assert.equal(actual.length,records.length)
    for(const row of records){
      const native=actual.find(value=>value.id===row.revisionId)
      assert.ok(native&&native.node_id===row.nodeId&&native.kind===row.kind&&native.payload_artifact_sha256===file.sha256&&native.document===null)
      assert.equal(native.content_sha256,sha256(stableJson({document:row.document,sourceFiles:row.sourceFiles,deliveryBindings:row.deliveryBindings})))
      assert.ok(isDeepStrictEqual(native.identity,row.document.node.identity)&&isDeepStrictEqual(native.source_files,row.sourceFiles)&&isDeepStrictEqual(native.delivery_bindings,row.deliveryBindings))
      for(const binding of row.deliveryBindings)if(ids.has(binding.inject?.colId))selected.set(binding.inject.colId,{revisionId:row.revisionId,document:row.document})
      if(row.physicalKey==='reading-guide-chimpanzees-in-place')selected.set('kind-absent-guide',{revisionId:row.revisionId,document:row.document})
    }
    const expected=records.flatMap(row=>row.dependencies.map(dependency=>[row.revisionId,dependency.referenceId,dependency.referenceSha256].join('\0'))).sort()
    const edges=(await client.query('SELECT d.revision_id,r.reference_id,r.content_sha256 FROM evo_v2.revision_dependency d JOIN evo_v2.reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=ANY($1::uuid[])',[records.map(row=>row.revisionId)])).rows.map(row=>[row.revision_id,row.reference_id,row.content_sha256].join('\0')).sort()
    assert.deepEqual(edges,expected)
    receipt.checkedNodes+=records.length;receipt.checkedReferenceEdges+=edges.length
    if(receipt.checkedNodes%10000===0)console.log(JSON.stringify({nativeNodesVerified:receipt.checkedNodes}))
  }
  const refBytes=await readFile(join(input,manifest.referenceFile.path));assert.equal(sha256(refBytes),manifest.referenceFile.sha256)
  const references=gunzipSync(refBytes).toString('utf8').trimEnd().split('\n').map(line=>JSON.parse(line))
  const actualReferences=(await client.query('SELECT r.reference_id,r.content_sha256,r.metadata FROM evo_v2.reference_revision r JOIN evo_v2.import_reference_key k ON k.reference_id=r.reference_id AND k.reference_sha256=r.content_sha256 WHERE k.source_commit=$1',[manifest.sourceCommit])).rows
  assert.equal(actualReferences.length,references.length)
  for(const row of references){const native=actualReferences.find(value=>value.reference_id===row.referenceId);assert.ok(native&&native.content_sha256===row.contentSha256&&isDeepStrictEqual(native.metadata,row.metadata))}
  receipt.checkedReferences=references.length
  assert.equal(selected.size,6)
  for(const [label,row] of selected){const native=await readRevision(client,row.revisionId);assert.ok(isDeepStrictEqual(native,row.document));receipt.actualPrivateReads.push({label,revisionId:row.revisionId,allCanonicalFieldsEqual:true,recordedKind:native.node.identity.kind??null})}
  const counts=(await client.query(`SELECT (SELECT count(*)::integer FROM evo_v2.import_node_key WHERE source_commit=$1) nodes,(SELECT count(*)::integer FROM evo_v2.revision_dependency) edges,pg_database_size(current_database())::text bytes`,[manifest.sourceCommit])).rows[0]
  assert.equal(counts.nodes,manifest.nodes);assert.equal(counts.edges,receipt.checkedReferenceEdges);assert.equal(receipt.checkedNodes,manifest.nodes)
  receipt.status='passed';receipt.databaseBytes=counts.bytes
  await writeFile(new URL('../.git/platform-v2/verified-import.json',import.meta.url),JSON.stringify(receipt,null,2)+'\n');console.log(JSON.stringify(receipt))
}catch(error){receipt.status='failed';receipt.error=safeError(error);await writeFile(new URL('../.git/platform-v2/verified-import.json',import.meta.url),JSON.stringify(receipt,null,2)+'\n');console.error(safeError(error));process.exitCode=1}finally{await client.end()}
