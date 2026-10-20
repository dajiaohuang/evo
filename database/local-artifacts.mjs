import assert from 'node:assert/strict'
import {readFile,writeFile,mkdir,lstat} from 'node:fs/promises'
import {Readable} from 'node:stream'
import {LOCAL_DIRECTORY} from './local-client.mjs'
import {sha256} from './model.mjs'

const objects=new URL('objects/',LOCAL_DIRECTORY)
export async function putLocalArtifact(bytes){
  assert.ok(bytes.length<=32*1024**2,'Local artifact exceeds 32 MiB compressed limit')
  const hash=sha256(bytes);await mkdir(objects,{recursive:true})
  const path=new URL(hash+'.gz',objects)
  try{await writeFile(path,bytes,{flag:'wx'})}catch(error){if(error.code!=='EEXIST')throw error}
  const stat=await lstat(path);assert.ok(stat.isFile()&&!stat.isSymbolicLink(),'Local artifact is not a regular file')
  assert.equal(sha256(await readFile(path)),hash,'Existing local artifact differs')
  return {sha256:hash,bytes:bytes.length,locator:'local:sha256:'+hash}
}
export async function readLocalArtifact(locator){
  assert.match(locator,/^local:sha256:[a-f0-9]{64}$/,'Only content-addressed local objects are supported')
  const hash=locator.slice('local:sha256:'.length),path=new URL(hash+'.gz',objects),stat=await lstat(path)
  assert.ok(stat.isFile()&&!stat.isSymbolicLink()&&stat.size<=32*1024**2,'Invalid or oversized local artifact')
  const bytes=await readFile(path);assert.equal(sha256(bytes),hash,'Local artifact differs')
  return {statusCode:200,stream:Readable.from([bytes])}
}
