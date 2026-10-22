import assert from 'node:assert/strict'
import {writeFile} from 'node:fs/promises'
import {openTurso,decodeRow} from './turso-store.mjs'
import {readRevisionRow} from './read-revision.mjs'
import {readLocalArtifact} from './local-artifacts.mjs'
const index=process.argv.indexOf('--database'),database=process.argv[index+1];assert.ok(index>=0&&database,'--database required')
const db=await openTurso(database);let count=0,pages=0
try{
  while(true){
    const rows=await db.prepare('SELECT r.*,a.storage_locator,a.bytes AS artifact_bytes,a.access FROM node_revision r LEFT JOIN artifact a ON a.sha256=r.payload_artifact_sha256 ORDER BY r.payload_artifact_sha256,r.id LIMIT 1000 OFFSET ?').all(count)
    if(!rows.length)break
    for(const row of rows){const document=await readRevisionRow(decodeRow('node_revision',row),row.id,{readArtifact:readLocalArtifact});pages+=Object.keys(document.pages).length}
    count+=rows.length;if(count%20000===0)console.log(JSON.stringify({verifiedRevisions:count}))
  }
  assert.equal(count,Number((await db.prepare('SELECT count(*) n FROM node_revision').get()).n))
  assert.deepEqual(await db.prepare('PRAGMA foreign_key_check').all(),[])
  const report={status:'passed',at:new Date().toISOString(),database,verifiedRevisions:count,languagePages:pages,method:'All immutable revisions decoded, content hash / identity / raw source hashes / delivery bindings verified against every row; all foreign keys checked',remoteAccessed:false}
  await writeFile(database+'.readback.json',JSON.stringify(report,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(report))
}finally{await db.close()}
