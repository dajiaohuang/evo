import assert from 'node:assert/strict'
import {connect} from '@tursodatabase/database'
import {readFile,mkdir,realpath,lstat,open} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import {resolve,relative,isAbsolute,sep} from 'node:path'
import {LOCAL_DIRECTORY} from './local-client.mjs'

export const TURSO_DIRECTORY=new URL('turso/',LOCAL_DIRECTORY)
export const TABLE_CONTRACT=JSON.parse(await readFile(new URL('turso-table-contract.json',import.meta.url),'utf8'))
export const SCHEMA=await readFile(new URL('turso-schema.sql',import.meta.url),'utf8')
export const quote=name=>'"'+name.replaceAll('"','""')+'"'
export async function localTursoPath(input,{create=false}={}){
  await mkdir(TURSO_DIRECTORY,{recursive:true})
  const root=await realpath(TURSO_DIRECTORY),target=resolve(input??fileURLToPath(new URL('content.db',TURSO_DIRECTORY)))
  const rel=relative(root,target)
  assert.ok(rel&&!isAbsolute(rel)&&rel!=='..'&&!rel.startsWith('..'+sep),'Database must stay in the local Turso directory')
  const parent=await realpath(resolve(target,'..')),actual=relative(root,parent)
  assert.ok(!isAbsolute(actual)&&actual!=='..'&&!actual.startsWith('..'+sep),'Database parent escapes local Turso directory')
  if(create){const handle=await open(target,'wx');await handle.close()}
  const stat=await lstat(target);assert.ok(stat.isFile()&&!stat.isSymbolicLink(),'Database must be an existing regular local file')
  return target
}
export async function openTurso(path,options={}){
  const target=await localTursoPath(path,options)
  const db=await connect(target)
  await db.exec('PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;')
  return db
}
export function decodeRow(table,row){
  if(!row)return row
  const result={...row}
  for(const col of TABLE_CONTRACT.find(t=>t.name===table).columns){
    if(result[col.name]===null)continue
    if(col.type==='jsonb')result[col.name]=JSON.parse(result[col.name])
    else if(col.type==='boolean')result[col.name]=Boolean(result[col.name])
  }
  return result
}
