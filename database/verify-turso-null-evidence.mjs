import assert from 'node:assert/strict'
import {randomUUID} from 'node:crypto'
import {writeFile} from 'node:fs/promises'
import {openTurso,SCHEMA,TURSO_DIRECTORY} from './turso-store.mjs'
import {saveTursoDraft,readTursoDraft} from './turso-authoring.mjs'
import {migrateNullEvidence} from './turso-null-evidence-migration.mjs'
const checks=[]
const oldSchema=SCHEMA.replace("json_type(document,'$.evidence') IN ('object','null')","json_type(document,'$.evidence') = 'object'")
assert.notEqual(oldSchema,SCHEMA)
for(const fixed of [false,true,'migrated']){
 const path=new URL(`null-evidence-${randomUUID()}.db`,TURSO_DIRECTORY).pathname.replace(/^\/([A-Z]:)/,'$1')
 const db=await openTurso(path,{create:true}),workspaceId=randomUUID(),ownerId='synthetic-null-evidence'
 const document={node:{schemaVersion:1,identity:{kind:'test-only'},relationships:[],structure:{sections:{en:[],zh:[]}}},evidence:null,pages:{}}
 const request={requestId:randomUUID(),workspaceId,nodeId:randomUUID(),baseRevisionId:null,expectedGeneration:0,document,referenceVersions:[]}
 try{
  const schema=fixed===true?SCHEMA:oldSchema
  await db.exec(schema)
  await db.prepare('INSERT INTO authoring_workspace(id,owner_id,label) VALUES(?,?,?)').run(workspaceId,ownerId,'Synthetic only')
  if(fixed==='migrated'){
   const seedNode=randomUUID(),seedRevision=randomUUID()
   await db.prepare('INSERT INTO content_node(id,kind) VALUES(?,?)').run(seedNode,'synthetic')
   await db.prepare('INSERT INTO node_revision(id,node_id,content_sha256,document,created_by) VALUES(?,?,?,?,?)').run(seedRevision,seedNode,'a'.repeat(64),JSON.stringify({node:{identity:{kind:'synthetic'}},evidence:{},pages:{}}),'fixture')
   await db.prepare('INSERT INTO node_draft_head(workspace_id,node_id,node_revision_id,generation,updated_by) VALUES(?,?,?,?,?)').run(workspaceId,seedNode,seedRevision,1,'fixture')
   assert.deepEqual(await migrateNullEvidence(db),{changed:true,rows:1})
   assert.deepEqual(await migrateNullEvidence(db),{changed:false})
   await assert.rejects(db.prepare('DELETE FROM node_revision WHERE id=?').run(seedRevision),/immutable/)
   assert.deepEqual(await db.prepare('PRAGMA foreign_key_check').all(),[])
  }
  if(!fixed){await assert.rejects(saveTursoDraft(db,request,{ownerId,actorId:'fixture'}),/CHECK constraint failed/);assert.equal((await db.prepare('SELECT count(*) n FROM node_revision').get()).n,0)}
  else {const result=await saveTursoDraft(db,request,{ownerId,actorId:'fixture'});assert.equal(result.generation,1);assert.deepEqual((await readTursoDraft(db,{workspaceId,nodeId:request.nodeId,ownerId})).document,document)}
  checks.push({fixed,path,passed:true})
 }finally{await db.close()}
}
const result={at:new Date().toISOString(),checks,liveDatabaseChanged:false}
await writeFile(new URL('null-evidence-verification-20261023.json',TURSO_DIRECTORY),JSON.stringify(result,null,2))
console.log(JSON.stringify(result))
