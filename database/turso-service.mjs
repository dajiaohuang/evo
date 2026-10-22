import assert from 'node:assert/strict'
import {createServer} from 'node:http'
import {readFile,writeFile,open,unlink} from 'node:fs/promises'
import {randomBytes,timingSafeEqual} from 'node:crypto'
import {fileURLToPath,pathToFileURL} from 'node:url'
import {openTurso,TURSO_DIRECTORY,localTursoPath} from './turso-store.mjs'
import {saveTursoDraft,readTursoDraft,checkoutTurso,registerTursoReference,tursoReceipt} from './turso-authoring.mjs'
import {sha256,stableJson} from './model.mjs'

/** Exactly one process owns the Turso file. All client requests, including reads,
 * share this queue so no read can join another request's open transaction.
 * The loopback credential is for trusted local CLI use, not multi-user auth.
 */
export async function startTursoService({database,workspaceId,ownerId,port=0,token=randomBytes(32).toString('hex'),configFile,allowSynthetic=false}){
  database=await localTursoPath(database)
  const lockPath=database+'.service-lock',lock=await open(lockPath,'wx')
  await lock.writeFile(JSON.stringify({pid:process.pid,database,startedAt:new Date().toISOString()}));await lock.close()
  let db,server,pending=0,tail=Promise.resolve(),closed=false
  async function close(){
    if(closed)return;closed=true
    if(server)await new Promise(resolve=>server.close(resolve))
    await tail.catch(()=>{});if(db)await db.close()
    await unlink(lockPath)
  }
  try{
    db=await openTurso(database)
    const migration=await db.prepare('SELECT source_fingerprint FROM turso_local_migration WHERE id=?').get('postgres-local-v1')
    assert.ok(migration||allowSynthetic,'Only a fully migrated store may serve authoring')
    assert.equal((await db.prepare('SELECT owner_id FROM authoring_workspace WHERE id=?').get(workspaceId))?.owner_id,ownerId,'Service workspace owner mismatch')
    const credential=Buffer.from(token)
    server=createServer(async(req,res)=>{
      const send=(status,value)=>{if(res.destroyed)return;res.writeHead(status,{'content-type':'application/json; charset=utf-8','cache-control':'no-store'});res.end(JSON.stringify(value))}
      const supplied=Buffer.from((req.headers.authorization??'').replace(/^Bearer /,''))
      if(req.method!=='POST'||req.headers.origin||req.headers['x-evo-local']!=='authoring-v1'||supplied.length!==credential.length||!timingSafeEqual(supplied,credential)){send(403,{error:'Local CLI access required'});return}
      if(pending>=128){send(503,{error:'Local operation queue is full; reconcile any previous submission before retry'});return}
      pending++
      try{
        const chunks=[];let bytes=0
        for await(const chunk of req){bytes+=chunk.length;assert.ok(bytes<=17*1024**2,'Request too large');chunks.push(chunk)}
        const body=JSON.parse(Buffer.concat(chunks).toString('utf8'))
        assert.ok(body&&typeof body==='object'&&!Array.isArray(body),'Object request required')
        const run=async()=>{
          const actorId=body.actorId
          assert.ok(typeof actorId==='string'&&/^[A-Za-z0-9@._:-]{1,100}$/.test(actorId),'Local actor ID required')
          const context={ownerId,actorId}
          const withWorkspace=value=>{assert.equal(value.workspaceId,workspaceId,'Wrong shared workspace');return value}
          switch(req.url){
            case '/status':return {status:'ready',engine:'turso',database,workspaceId,sourceFingerprint:migration?.source_fingerprint??null,pid:process.pid,publicationEnabled:false}
            case '/shutdown':assert.equal(actorId,'S','Only the local supervisor stops this service');setImmediate(()=>close().catch(error=>console.error(error.message)));return {status:'stopping',pid:process.pid}
            case '/checkout':return checkoutTurso(db,{...body,workspaceId,ownerId})
            case '/read':return readTursoDraft(db,{workspaceId,nodeId:body.nodeId,ownerId})
            case '/submit':return saveTursoDraft(db,withWorkspace(body.request),context)
            case '/reference':return registerTursoReference(db,{workspaceId,metadata:body.metadata},context)
            case '/receipt':return tursoReceipt(db,{requestId:body.requestId,ownerId})
            case '/references':{
              assert.ok(Array.isArray(body.versions)&&body.versions.length<=10000,'Exact reference versions required')
              const result=[]
              for(const v of body.versions){const row=await db.prepare('SELECT metadata FROM reference_revision WHERE reference_id=? AND content_sha256=?').get(v.referenceId,v.sha256);assert.ok(row,'Reference version not found');const metadata=JSON.parse(row.metadata);assert.equal(sha256(stableJson(metadata)),v.sha256);result.push(metadata)}
              return result
            }
            case '/nodes':{
              const limit=body.limit??48;assert.ok(Number.isInteger(limit)&&limit>0&&limit<=200,'Page limit must be 1..200')
              assert.ok(typeof body.source==='string'&&/^[a-f0-9]{40}$/.test(body.source),'Baseline source required')
              const after=body.after??'';assert.equal(typeof after,'string')
              const rows=await db.prepare(`SELECT k.physical_key,k.node_id,k.revision_id AS baseline_revision_id,h.node_revision_id AS draft_revision_id,h.generation,r.identity,n.kind,(SELECT count(*) FROM revision_dependency d WHERE d.revision_id=r.id) AS reference_count FROM import_node_key k JOIN content_node n ON n.id=k.node_id LEFT JOIN node_draft_head h ON h.node_id=k.node_id AND h.workspace_id=? JOIN node_revision r ON r.id=COALESCE(h.node_revision_id,k.revision_id) WHERE k.source_commit=? AND k.physical_key>? ORDER BY k.physical_key LIMIT ?`).all(workspaceId,body.source,after,limit)
              return {nodes:rows.map(r=>({...r,identity:r.identity?JSON.parse(r.identity):null,generation:Number(r.generation??0),baseRevisionId:r.draft_revision_id??r.baseline_revision_id})),nextAfter:rows.length?rows.at(-1).physical_key:null}
            }
            default:throw new Error('Unknown local authoring operation')
          }
        }
        const result=tail.then(run);tail=result.catch(()=>{})
        send(200,{ok:true,result:await result})
      }catch(error){send(error.code==='40001'?409:400,{ok:false,error:error.message,code:error.code??'INVALID_REQUEST'})}
      finally{pending--}
    })
    server.requestTimeout=30000;server.headersTimeout=10000
    await new Promise((ok,no)=>{server.once('error',no);server.listen(port,'127.0.0.1',ok)})
    const config={version:1,endpoint:'http://127.0.0.1:'+server.address().port,token,database,workspaceId,ownerId,pid:process.pid,startedAt:new Date().toISOString()}
    if(configFile)await writeFile(configFile,JSON.stringify(config),{mode:0o600})
    return {config,close}
  }catch(error){await close().catch(()=>{});throw error}
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
  const configFile=arg('--config')??fileURLToPath(new URL('service.json',TURSO_DIRECTORY))
  const service=await startTursoService({database:arg('--database'),workspaceId:arg('--workspace'),ownerId:arg('--owner'),configFile})
  console.log(JSON.stringify({status:'ready',endpoint:service.config.endpoint,pid:process.pid,workspaceId:service.config.workspaceId}))
  for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>service.close().then(()=>process.exit(0)))
}
