import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join} from 'node:path'
import {gunzipSync} from 'node:zlib'
import {sha256} from './model.mjs'

/** A bounded, byte-verified local transfer boundary shared by import and audit. */
export async function readExportBatch(directory,file){
  assert.match(file.path,/^(?:nodes-\d{4}|references)\.ndjson\.gz$/,'Unsafe batch filename')
  const bytes=await readFile(join(directory,file.path));assert.equal(sha256(bytes),file.sha256,'Export batch hash differs')
  const decoded=gunzipSync(bytes,{maxOutputLength:64*1024**2})
  if(file.decodedSha256)assert.equal(sha256(decoded),file.decodedSha256,'Decoded export hash differs')
  const rows=decoded.toString('utf8').trimEnd().split('\n').map(line=>JSON.parse(line))
  assert.equal(rows.length,file.records,'Export batch count differs')
  return rows
}
