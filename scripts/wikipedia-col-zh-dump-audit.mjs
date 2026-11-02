import assert from 'node:assert/strict'
import {createReadStream,readFileSync,writeFileSync} from 'node:fs'
import {createHash} from 'node:crypto'
import {createGunzip} from 'node:zlib'
import {createInterface} from 'node:readline'
import {DatabaseSync} from 'node:sqlite'

const base='.git/evo-wikipedia-col26-8/c-scratch/',dir=base+'zh-metadata/'
const filenames=['page','redirect','page_props'].map(x=>`zhwiki-latest-${x}.sql.gz`)
const expected=[286144416,19006224,53990379]
const checksum=readFileSync(dir+'zhwiki-latest-sha1sums.txt','utf8')
const hashes=[]
for(let i=0;i<filenames.length;i++){
 const hash=createHash('sha256'),sha1=createHash('sha1');let bytes=0
 for await(const chunk of createReadStream(dir+filenames[i])){hash.update(chunk);sha1.update(chunk);bytes+=chunk.length}
 assert.equal(bytes,expected[i],`Incomplete source ${filenames[i]}`)
 const dateName=filenames[i].replace('latest','20261001'),line=checksum.split('\n').find(row=>row.endsWith('  '+dateName))
 assert.ok(line,`Missing official checksum for ${dateName}`)
 const actual=sha1.digest('hex');assert.equal(actual,line.slice(0,40),`Checksum mismatch for ${dateName}`)
 hashes.push({file:filenames[i],bytes,sha1:actual,sha256:hash.digest('hex')})
}
const audit=new DatabaseSync(base+'live-identity-audit.sqlite',{readOnly:true})
const jobs=audit.prepare("SELECT url,item,title FROM jobs WHERE locale='zh'").all()
const titleJobs=new Map()
for(const job of jobs){const title=job.title.replaceAll(' ','_');let list=titleJobs.get(title);if(!list)titleJobs.set(title,list=[]);list.push(job)}
const unescapeSql=s=>s.replace(/\\([0bnrtZ\\'"%_])/g,(_,c)=>({'0':'\0',b:'\b',n:'\n',r:'\r',t:'\t',Z:'\x1a'}[c]??c))
async function scan(name,fn){let lines=0;const rl=createInterface({input:createReadStream(dir+`zhwiki-latest-${name}.sql.gz`).pipe(createGunzip()),crlfDelay:Infinity});for await(const line of rl){if(!line.startsWith('('))continue;fn(line);if(++lines%2000000===0)console.log(JSON.stringify({scan:name,rows:lines}))}return lines}
const pagePattern=/^\((\d+),0,'((?:\\.|[^'])*)',(\d+),/u
const sourcePages=new Map()
await scan('page',line=>{const m=pagePattern.exec(line);if(!m)return;const title=unescapeSql(m[2]);if(titleJobs.has(title))sourcePages.set(Number(m[1]),{title,redirect:m[3]==='1'})})
console.log(JSON.stringify({stage:'source-pages',found:sourcePages.size,requested:titleJobs.size}))
const redirects=new Map(),targetTitles=new Set()
const redirectPattern=/^\((\d+),0,'((?:\\.|[^'])*)','((?:\\.|[^'])*)',/u
await scan('redirect',line=>{const m=redirectPattern.exec(line);if(!m)return;const id=Number(m[1]);if(!sourcePages.has(id)||m[3]!=='')return;const title=unescapeSql(m[2]);redirects.set(id,title);targetTitles.add(title)})
console.log(JSON.stringify({stage:'redirects',found:redirects.size}))
const targetPages=new Map()
await scan('page',line=>{const m=pagePattern.exec(line);if(!m)return;const title=unescapeSql(m[2]);if(targetTitles.has(title))targetPages.set(title,{id:Number(m[1]),redirect:m[3]==='1'})})
const relevant=new Set([...sourcePages.keys(),...[...targetPages.values()].map(p=>p.id)]),properties=new Map()
const propPattern=/^\((\d+),'(wikibase_item|disambiguation)','((?:\\.|[^'])*)',/u
await scan('page_props',line=>{const m=propPattern.exec(line);if(!m)return;const id=Number(m[1]);if(!relevant.has(id))return;let p=properties.get(id);if(!p)properties.set(id,p={});p[m[2]]=unescapeSql(m[3])})
const outPath=dir+'zh-snapshot-results.sqlite',out=new DatabaseSync(outPath)
out.exec('CREATE TABLE IF NOT EXISTS results(url TEXT NOT NULL,item TEXT NOT NULL,status TEXT NOT NULL,actual_item TEXT,target_title TEXT,PRIMARY KEY(url,item)); BEGIN')
const insert=out.prepare('INSERT OR REPLACE INTO results VALUES(?,?,?,?,?)'),counts={matched:0,conflict:0,unresolved:0},seen=new Set()
for(const [id,page] of sourcePages){
 let targetId=id,targetTitle=page.title
 if(page.redirect){targetTitle=redirects.get(id);const target=targetPages.get(targetTitle);if(!target||target.redirect){targetId=null}else targetId=target.id}
 const prop=properties.get(targetId),actual=prop?.wikibase_item??null
 for(const job of titleJobs.get(page.title)){const status=!actual||prop.disambiguation!==undefined?'unresolved':job.item.endsWith('/'+actual)?'matched':'conflict';counts[status]++;seen.add(job.url+'\0'+job.item);insert.run(job.url,job.item,status,actual,targetTitle??null)}
}
for(const job of jobs)if(!seen.has(job.url+'\0'+job.item)){counts.unresolved++;insert.run(job.url,job.item,'unresolved',null,null)}
out.exec('COMMIT');writeFileSync(dir+'zh-snapshot-metadata.json',JSON.stringify({source:'https://dumps.wikimedia.org/zhwiki/latest/',lastModified:'2026-10-01',hashes,counts,jobs:jobs.length},null,2))
console.log(JSON.stringify({status:'complete',counts,jobs:jobs.length}));out.close();audit.close()
