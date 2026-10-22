import assert from 'node:assert/strict'
import {gunzipSync} from 'node:zlib'
import {isDeepStrictEqual} from 'node:util'
import {get} from '@vercel/blob'
import {sha256,stableJson} from './model.mjs'

const cache=new Map()
export async function readRevision(client,revisionId,{readArtifact}={}){
  const row=(await client.query(`SELECT r.*,a.storage_locator,a.bytes::text AS artifact_bytes,a.access FROM evo_v2.node_revision r LEFT JOIN evo_v2.artifact a ON a.sha256=r.payload_artifact_sha256 WHERE r.id=$1`,[revisionId])).rows[0]
  return readRevisionRow(row,revisionId,{readArtifact})
}

/** Shared payload verification for PostgreSQL and the local Turso store. */
export async function readRevisionRow(row,revisionId,{readArtifact}={}){
  assert.ok(row,'Unknown revision')
  if(row.document){
    assert.equal(sha256(stableJson({document:row.document,sourceFiles:row.source_files,deliveryBindings:row.delivery_bindings})),row.content_sha256)
    if(row.identity!==null)assert.ok(isDeepStrictEqual(row.document.node.identity,row.identity),'Stored identity differs from document')
    return row.document
  }
  assert.equal(row.access,'private')
  assert.ok(Number(row.artifact_bytes)<=32*1024**2,'Unexpected oversized revision artifact')
  let records=cache.get(row.payload_artifact_sha256)
  if(!records){
    const response=await (readArtifact??((locator)=>get(locator,{access:'private',storeId:'store_xxrtIBwYQAds7u6s'})))(row.storage_locator)
    assert.ok(response?.statusCode===200,'Private revision object unavailable')
    const chunks=[];let size=0
    for await(const chunk of response.stream){size+=chunk.length;assert.ok(size<=Number(row.artifact_bytes));chunks.push(chunk)}
    const bytes=Buffer.concat(chunks);assert.equal(size,Number(row.artifact_bytes));assert.equal(sha256(bytes),row.payload_artifact_sha256)
    const decoded=gunzipSync(bytes,{maxOutputLength:64*1024**2}).toString('utf8')
    records=decoded.trimEnd().split('\n').map(line=>JSON.parse(line))
    if(cache.size>=8)cache.delete(cache.keys().next().value)
    cache.set(row.payload_artifact_sha256,records)
  }
  const candidates=records.filter(record=>record.revisionId===(row.payload_record_id??revisionId));assert.equal(candidates.length,1)
  const payload=candidates[0]
  assert.equal(payload.nodeId,row.node_id)
  assert.equal(sha256(stableJson({document:payload.document,sourceFiles:payload.sourceFiles,deliveryBindings:payload.deliveryBindings})),row.content_sha256)
  assert.ok(isDeepStrictEqual(payload.document.node.identity,row.identity))
  assert.ok(isDeepStrictEqual(payload.sourceFiles,row.source_files))
  assert.ok(isDeepStrictEqual(payload.deliveryBindings,row.delivery_bindings))
  return structuredClone(payload.document)
}
