import {execFile,spawn} from 'node:child_process'
import {once} from 'node:events'
import {promisify} from 'node:util'
import {writeFile,mkdir,access,unlink} from 'node:fs/promises'
import {randomBytes} from 'node:crypto'
import {createServer} from 'node:net'
import {fileURLToPath} from 'node:url'
import {resolve,join} from 'node:path'
import pg from 'pg'
import {LOCAL_DIRECTORY,localConfig,connectLocal} from './local-client.mjs'
import {applyMigrations} from './migrations.mjs'

const run=promisify(execFile),command=process.argv[2]
const directory=fileURLToPath(LOCAL_DIRECTORY),data=join(directory,'pgdata')
if(!['start','stop','status','migrate'].includes(command))throw new Error('Use start, stop, status or migrate')
await mkdir(directory,{recursive:true})
async function exists(path){try{await access(path);return true}catch(error){if(error.code==='ENOENT')return false;throw error}}
const binary=process.env.EVO_LOCAL_POSTGRES_BIN??resolve('.git/tools/postgresql-17.11/pgsql/bin')
const executable=name=>join(binary,name+(process.platform==='win32'?'.exe':''))
async function pgRun(name,args){return run(executable(name),args,{windowsHide:true,maxBuffer:1024**2})}
if(command==='start'){
  if(!await exists(new URL('connection.json',LOCAL_DIRECTORY))){
    const server=createServer();await new Promise((ok,no)=>{server.once('error',no);server.listen(0,'127.0.0.1',ok)})
    const port=server.address().port;await new Promise(ok=>server.close(ok))
    const config={host:'127.0.0.1',port,user:'evo_local',database:'evo_local',password:randomBytes(32).toString('hex')}
    await writeFile(new URL('connection.json',LOCAL_DIRECTORY),JSON.stringify(config),{flag:'wx',mode:0o600})
  }
  const config=await localConfig()
  if(!await exists(join(data,'PG_VERSION'))){
    const passwordFile=join(directory,'init-password')
    await writeFile(passwordFile,config.password,{mode:0o600})
    await pgRun('initdb',['-D',data,'-U',config.user,'--pwfile='+passwordFile,'--auth=scram-sha-256','--encoding=UTF8','--locale=C'])
    await unlink(passwordFile)
    await writeFile(join(data,'postgresql.auto.conf'),`listen_addresses = '127.0.0.1'\nport = ${config.port}\nmax_connections = 12\nshared_buffers = '16MB'\nwork_mem = '4MB'\nmaintenance_work_mem = '32MB'\nmax_wal_size = '128MB'\nmin_wal_size = '32MB'\n`)
  }
  let running=false
  try{await pgRun('pg_ctl',['-D',data,'status']);running=true}catch(error){if(error.code!==3)throw error}
  if(!running){
    // Windows server children inherit pipes; ignore them so pg_ctl can finish.
    const child=spawn(executable('pg_ctl'),['-D',data,'-l',join(directory,'postgres.log'),'-w','start'],{windowsHide:true,stdio:'ignore'})
    const [code]=await once(child,'exit');if(code!==0)throw new Error('Local PostgreSQL start failed; inspect postgres.log')
  }
  const admin=new pg.Client({...config,database:'postgres',connectionTimeoutMillis:5000})
  await admin.connect()
  try{if(!(await admin.query("SELECT 1 FROM pg_database WHERE datname='evo_local'")).rowCount)await admin.query('CREATE DATABASE evo_local')}finally{await admin.end()}
  console.log(JSON.stringify({status:'running',host:config.host,port:config.port,database:config.database,dataDirectory:data}))
}else if(command==='stop'){
  await pgRun('pg_ctl',['-D',data,'-m','fast','-w','stop'])
  console.log(JSON.stringify({status:'stopped',dataPreserved:true}))
}else{
  const client=await connectLocal()
  try{
    const migrations=command==='migrate'?await applyMigrations(client):undefined
    const row=(await client.query('SELECT version(),pg_database_size(current_database())::text bytes')).rows[0]
    console.log(JSON.stringify({status:'passed',...row,...(migrations?{migrations}:{}),remoteDatabaseAccessed:false}))
  }finally{await client.end()}
}
