import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {existsSync,readFileSync} from 'node:fs'
import {gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'

const root='.git/evo-wikipedia-col26-8/c-scratch/'
const snapshot=root+'snapshot-trogoniformes-1/',dbPath=root+'live-identity-audit.sqlite'
const bytes=readFileSync(snapshot+'manifest.json'),hash=createHash('sha256').update(bytes).digest('hex'),manifest=JSON.parse(bytes)
if(process.argv.includes('--init')){
 assert.ok(!existsSync(dbPath),'Audit already exists; preserve its checkpoint')
 const db=new DatabaseSync(dbPath)
 db.exec("PRAGMA journal_mode=WAL; CREATE TABLE meta(key TEXT PRIMARY KEY,value TEXT NOT NULL); CREATE TABLE jobs(url TEXT NOT NULL,item TEXT NOT NULL,locale TEXT NOT NULL,title TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',target_title TEXT,actual_item TEXT,checked_at TEXT,PRIMARY KEY(url,item)); CREATE INDEX jobs_next ON jobs(status,locale); BEGIN")
 db.prepare('INSERT INTO meta VALUES (?,?)').run('manifest_sha256',hash)
 const add=db.prepare('INSERT OR IGNORE INTO jobs(url,item,locale,title) VALUES (?,?,?,?)')
 let nodes=0
 for(const shard of Object.values(manifest.shards))for(const entry of Object.values(JSON.parse(gunzipSync(readFileSync(snapshot+shard.path))).entries)){
  if(!['matched','abstract-pending'].includes(entry.status)||!entry.url||!/^https:\/\/www\.wikidata\.org\/entity\/Q\d+$/.test(entry.item??''))continue
  const url=new URL(entry.url);if(!/^[a-z0-9-]+\.wikipedia\.org$/.test(url.hostname)||!url.pathname.startsWith('/wiki/'))continue
  add.run(entry.url,entry.item,url.hostname.split('.')[0],decodeURIComponent(url.pathname.slice(6)).replaceAll('_',' '));nodes++
 }
 db.exec('COMMIT');console.log(JSON.stringify({status:'initialized',nodes,jobs:db.prepare('SELECT COUNT(*) n FROM jobs').get().n}));db.close();process.exit()
}
assert.ok(existsSync(dbPath),'Initialize audit first')
const db=new DatabaseSync(dbPath)
assert.equal(db.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get().value,hash,'Snapshot changed')
const next=db.prepare("SELECT url,item,title FROM jobs WHERE status='pending' AND locale=? LIMIT 50"),update=db.prepare('UPDATE jobs SET status=?,target_title=?,actual_item=?,checked_at=? WHERE url=? AND item=? AND status=\'pending\'')
const localeIndex=process.argv.indexOf('--locale'),locale=localeIndex>=0?process.argv[localeIndex+1]:'en'
assert.match(locale,/^[a-z0-9-]+$/)
const maxIndex=process.argv.indexOf('--batches'),max=maxIndex>=0?Number(process.argv[maxIndex+1]):100
assert.ok(Number.isInteger(max)&&max>0&&max<=1000)
for(let batch=0;batch<max;batch++){
 const rows=next.all(locale);if(!rows.length)break
 const url=new URL(`https://${locale}.wikipedia.org/w/api.php`)
 url.search=new URLSearchParams({action:'query',prop:'pageprops',ppprop:'wikibase_item|disambiguation',titles:rows.map(r=>r.title).join('|'),redirects:'1',format:'json',formatversion:'2',maxlag:'5'})
 const response=await fetch(url,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; link identity audit)'},signal:AbortSignal.timeout(60000)})
 if(!response.ok)throw Error(`Wikipedia ${locale}: HTTP ${response.status}; retry-after ${response.headers.get('retry-after')??'unspecified'}, checkpoint preserved`)
 const data=await response.json();if(data.error)throw Error(`Wikipedia ${locale}: ${JSON.stringify(data.error)}; checkpoint preserved`)
 const aliases=new Map([...(data.query.normalized??[]),...(data.query.redirects??[])].map(r=>[r.from,r.to])),pages=new Map(data.query.pages.map(p=>[p.title,p]))
 db.exec('BEGIN IMMEDIATE')
 try{for(const row of rows){
  let title=row.title;const seen=new Set();while(aliases.has(title)&&!seen.has(title)){seen.add(title);title=aliases.get(title)}
  const page=pages.get(title),actual=page?.pageprops?.wikibase_item??null
  const status=!page||page.missing?'missing':Object.hasOwn(page.pageprops??{},'disambiguation')?'disambiguation':!actual?'no-item':row.item.endsWith('/'+actual)?'matched':'identity-conflict'
  assert.equal(update.run(status,title,actual,new Date().toISOString(),row.url,row.item).changes,1)
 }db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
 if((batch+1)%10===0)console.log(JSON.stringify({locale,batches:batch+1,counts:db.prepare('SELECT status,COUNT(*) n FROM jobs WHERE locale=? GROUP BY status').all(locale)}))
 await new Promise(resolve=>setTimeout(resolve,1200))
}
console.log(JSON.stringify({status:'checkpoint',locale,counts:db.prepare('SELECT status,COUNT(*) n FROM jobs WHERE locale=? GROUP BY status').all(locale)}))
db.close()
