import assert from 'node:assert/strict'
import {readFile,writeFile} from 'node:fs/promises'
import {gunzipSync} from 'node:zlib'
import {resolve,join} from 'node:path'
import {isDeepStrictEqual} from 'node:util'
import {connect,safeError,PROJECT_ID} from './client.mjs'
import {sha256} from './model.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const input=resolve(arg('--from')??''),manifest=JSON.parse(await readFile(join(input,'manifest.json'),'utf8'))
assert.ok(manifest.completed,'Completed source export required')
const uploads=JSON.parse(await readFile(new URL(`../.git/platform-v2/uploads/${manifest.sourceCommit}.json`,import.meta.url),'utf8'))
const verified=new Set(uploads.objects.filter(row=>row.verifiedReadback).map(row=>row.sha256))
const client=await connect()
try{
  await client.query('BEGIN')
  await client.query('SELECT pg_advisory_xact_lock($1)',[2026102002])
  await client.query('LOCK TABLE evo_v2.content_node,evo_v2.node_revision,evo_v2.import_node_key,evo_v2.revision_dependency,evo_v2.import_batch,evo_v2.release_item IN ACCESS EXCLUSIVE MODE')
  const guard=(await client.query(`SELECT (SELECT count(*)::integer FROM evo_v2.channel) channels,(SELECT count(*)::integer FROM evo_v2.release_item) published_items,(SELECT count(*)::integer FROM evo_v2.node_revision WHERE origin_commit<>$1 OR created_by<>('migration:'||$1)) foreign_rows`,[manifest.sourceCommit])).rows[0]
  assert.deepEqual(guard,{channels:0,published_items:0,foreign_rows:0},'Only this unpublished migration copy may be rebuilt')
  let checked=0
  for(const file of manifest.batches){
    const existing=(await client.query('SELECT id FROM evo_v2.import_batch WHERE id=$1',['nodes:'+manifest.sourceCommit+':'+file.path])).rows[0]
    if(!existing)continue
    assert.ok(verified.has(file.sha256),'A previously imported batch has no verified cloud copy')
    const bytes=await readFile(join(input,file.path));assert.equal(sha256(bytes),file.sha256)
    const rows=gunzipSync(bytes).toString('utf8').trimEnd().split('\n').map(line=>JSON.parse(line))
    const actual=(await client.query('SELECT id,node_id,content_sha256,document,source_files,delivery_bindings FROM evo_v2.node_revision WHERE id=ANY($1::uuid[])',[rows.map(row=>row.revisionId)])).rows
    assert.equal(actual.length,rows.length)
    for(const row of rows){const live=actual.find(value=>value.id===row.revisionId);assert.ok(live&&live.node_id===row.nodeId&&live.content_sha256===row.contentSha256&&isDeepStrictEqual(live.document,row.document)&&isDeepStrictEqual(live.source_files,row.sourceFiles)&&isDeepStrictEqual(live.delivery_bindings,row.deliveryBindings),'Unrecognized or changed migration data')}
    checked+=rows.length
  }
  const actualCount=(await client.query('SELECT count(*)::integer AS count FROM evo_v2.node_revision')).rows[0].count
  assert.equal(checked,actualCount,'Every private database body must be recoverable from its verified object')
  // Explicit derived staging tables only. No CASCADE, source/reference/Auth
  // tables, production channels, or scientific objects are deleted.
  await client.query('TRUNCATE evo_v2.release_item,evo_v2.import_node_key,evo_v2.revision_dependency,evo_v2.node_revision,evo_v2.content_node,evo_v2.import_batch')
  await client.query('COMMIT')
  const bytes=(await client.query('SELECT pg_database_size(current_database())::text bytes')).rows[0].bytes
  const receipt={status:'passed',projectId:PROJECT_ID,sourceCommit:manifest.sourceCommit,verifiedRecoverableNodes:checked,derivedUnpublishedCopyRebuilt:true,databaseBytesAfter:bytes,sourceObjectsRetained:true,productionCutover:false}
  await writeFile(new URL('../.git/platform-v2/storage-rebuild.json',import.meta.url),JSON.stringify(receipt,null,2)+'\n')
  console.log(JSON.stringify(receipt))
}catch(error){await client.query('ROLLBACK').catch(()=>{});console.error(safeError(error));process.exitCode=1}finally{await client.end()}
