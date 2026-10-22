import assert from 'node:assert/strict'
import {readFile,writeFile,open,unlink,lstat} from 'node:fs/promises'
import {spawn} from 'node:child_process'
import {fileURLToPath} from 'node:url'
import {resolve} from 'node:path'
import {TURSO_DIRECTORY,localTursoPath} from './turso-store.mjs'
import {LOCAL_DIRECTORY} from './local-client.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const command=process.argv[2],configFile=new URL('service.json',TURSO_DIRECTORY)
async function config(){try{return JSON.parse(await readFile(configFile,'utf8'))}catch(error){if(error.code==='ENOENT')return null;throw error}}
async function rpc(c,route){
  const url=new URL(c.endpoint);assert.equal(url.hostname,'127.0.0.1');assert.equal(url.protocol,'http:')
  const response=await fetch(new URL(route,url),{method:'POST',headers:{authorization:'Bearer '+c.token,'x-evo-local':'authoring-v1'},body:JSON.stringify({actorId:'S'}),signal:AbortSignal.timeout(2000)})
  const value=await response.json();assert.ok(response.ok&&value.ok,value.error??'Service failed');return value.result
}
function alive(pid){assert.ok(Number.isInteger(pid)&&pid>0);try{process.kill(pid,0);return true}catch(error){if(error.code==='ESRCH')return false;throw error}}
const prior=await config()
if(command==='status'){
  assert.ok(prior,'No local service configuration');console.log(JSON.stringify(await rpc(prior,'/status')))
}else if(command==='stop'){
  assert.ok(prior,'No local service configuration');console.log(JSON.stringify(await rpc(prior,'/shutdown')))
}else if(command==='start'){
  const database=await localTursoPath(arg('--database')),workspaceId=arg('--workspace'),ownerId=arg('--owner')
  assert.ok(workspaceId&&ownerId,'--workspace and --owner required')
  if(prior){
    let status
    try{status=await rpc(prior,'/status')}catch(error){if(alive(prior.pid))throw Error('Existing service process is alive but status is unknown; reconcile before restart')}
    if(status){assert.equal(resolve(status.database),database);assert.equal(status.workspaceId,workspaceId);console.log(JSON.stringify(status));process.exit(0)}
  }
  const receipt=JSON.parse(await readFile(database+'.migration.json','utf8')),verification=JSON.parse(await readFile(database+'.readback.json','utf8'))
  assert.equal(receipt.status,'migrated-not-activated');assert.equal(verification.status,'passed');assert.equal(resolve(verification.database),database)
  const tests=JSON.parse(await readFile(new URL('authoring-verification.json',TURSO_DIRECTORY),'utf8'));assert.equal(tests.status,'passed')
  const lockPath=database+'.service-lock'
  try{
    const stat=await lstat(lockPath);assert.ok(stat.isFile()&&!stat.isSymbolicLink())
    const lock=JSON.parse(await readFile(lockPath,'utf8'));assert.equal(resolve(lock.database),database)
    assert.equal(alive(lock.pid),false,'Existing DB owner is still alive; no stale-lock removal')
    await unlink(lockPath)
  }catch(error){if(error.code!=='ENOENT')throw error}
  const log=await open(new URL('service.log',TURSO_DIRECTORY),'a')
  const child=spawn(process.execPath,[fileURLToPath(new URL('turso-service.mjs',import.meta.url)),'--database',database,'--workspace',workspaceId,'--owner',ownerId,'--config',fileURLToPath(configFile)],{detached:true,windowsHide:true,stdio:['ignore',log.fd,log.fd]})
  child.unref();await log.close()
  let status
  for(let i=0;i<30;i++){await new Promise(ok=>setTimeout(ok,200));const current=await config();if(current?.pid===child.pid){try{status=await rpc(current,'/status');break}catch{}}if(!alive(child.pid))throw Error('Service exited during startup; inspect local service.log')}
  assert.ok(status,'Service startup unconfirmed; do not relaunch without reconciliation')
  await writeFile(new URL('active-store.json',LOCAL_DIRECTORY),JSON.stringify({engine:'turso',database,workspaceId,ownerId,sourceFingerprint:receipt.sourceFingerprint,activatedAt:new Date().toISOString()}))
  console.log(JSON.stringify(status))
}else throw Error('Use start, status or stop')
