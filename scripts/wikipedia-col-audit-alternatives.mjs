import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import {gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/c-scratch/',dir=root+'snapshot-trogoniformes-1/'
const audit=new DatabaseSync(root+'live-identity-audit.sqlite')
audit.exec("CREATE TABLE IF NOT EXISTS alternatives(url TEXT NOT NULL,item TEXT NOT NULL,locale TEXT NOT NULL,title TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',target_title TEXT,actual_item TEXT,checked_at TEXT,PRIMARY KEY(url,item)); CREATE INDEX IF NOT EXISTS alternatives_next ON alternatives(status,locale)")
if(process.argv.includes('--init')){
 const conflicts=new Set(audit.prepare("SELECT url,item FROM jobs WHERE status IN ('identity-conflict','disambiguation','missing','no-item')").all().map(r=>r.url+'\0'+r.item))
 const inv=new DatabaseSync(dir+'inventory.sqlite',{readOnly:true}),node=inv.prepare('SELECT name FROM nodes WHERE id=?'),names=inv.prepare('SELECT candidates_json FROM names WHERE name=?')
 const manifest=JSON.parse(readFileSync(dir+'manifest.json')),add=audit.prepare('INSERT OR IGNORE INTO alternatives(url,item,locale,title) VALUES (?,?,?,?)')
 let nodes=0
 audit.exec('BEGIN IMMEDIATE')
 try{for(const shard of Object.values(manifest.shards))for(const [id,entry] of Object.entries(JSON.parse(gunzipSync(readFileSync(dir+shard.path))).entries)){
  if(!conflicts.has(entry.url+'\0'+entry.item))continue
  nodes++;const n=node.get(id),row=names.get(n.name),candidate=JSON.parse(row.candidates_json).find(c=>c.item===entry.item)
  assert.ok(candidate,`Missing candidate for ${id}`)
  for(const value of candidate.articles){const u=new URL(value);assert.match(u.hostname,/^[a-z0-9-]+\.wikipedia\.org$/);add.run(value,entry.item,u.hostname.split('.')[0],decodeURIComponent(u.pathname.slice(6)).replaceAll('_',' '))}
 }audit.exec('COMMIT')}catch(e){audit.exec('ROLLBACK');throw e}
 console.log(JSON.stringify({status:'initialized',nodes,jobs:audit.prepare('SELECT COUNT(*) n FROM alternatives').get().n}));audit.close();inv.close();process.exit()
}
const nextLocale=audit.prepare("SELECT locale FROM alternatives WHERE status='pending' GROUP BY locale ORDER BY CASE locale WHEN 'en' THEN 0 WHEN 'zh' THEN 1 ELSE 2 END,COUNT(*) DESC LIMIT 1")
const next=audit.prepare("SELECT url,item,title FROM alternatives WHERE status='pending' AND locale=? LIMIT 50"),update=audit.prepare("UPDATE alternatives SET status=?,target_title=?,actual_item=?,checked_at=? WHERE url=? AND item=? AND status='pending'")
let batches=0
while(true){
 const locale=nextLocale.get()?.locale;if(!locale)break
 const rows=next.all(locale),url=new URL(`https://${locale}.wikipedia.org/w/api.php`)
 url.search=new URLSearchParams({action:'query',prop:'pageprops',ppprop:'wikibase_item|disambiguation',titles:rows.map(r=>r.title).join('|'),redirects:'1',format:'json',formatversion:'2',maxlag:'5'})
 const response=await fetch(url,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; alternative link verification)'},signal:AbortSignal.timeout(60000)})
 if(!response.ok)throw Error(`Wikipedia ${locale}: HTTP ${response.status}; checkpoint preserved`)
 const data=await response.json();if(data.error)throw Error(`Wikipedia ${locale}: ${JSON.stringify(data.error)}; checkpoint preserved`)
 const aliases=new Map([...(data.query.normalized??[]),...(data.query.redirects??[])].map(r=>[r.from,r.to])),pages=new Map(data.query.pages.map(p=>[p.title,p]))
 audit.exec('BEGIN IMMEDIATE')
 try{for(const row of rows){let title=row.title;const seen=new Set();while(aliases.has(title)&&!seen.has(title)){seen.add(title);title=aliases.get(title)}const page=pages.get(title),actual=page?.pageprops?.wikibase_item??null,status=!page||page.missing?'missing':Object.hasOwn(page.pageprops??{},'disambiguation')?'disambiguation':!actual?'no-item':row.item.endsWith('/'+actual)?'matched':'identity-conflict';assert.equal(update.run(status,title,actual,new Date().toISOString(),row.url,row.item).changes,1)}audit.exec('COMMIT')}catch(e){audit.exec('ROLLBACK');throw e}
 if(++batches%10===0)console.log(JSON.stringify({batches,counts:audit.prepare('SELECT status,COUNT(*) n FROM alternatives GROUP BY status').all()}))
 await new Promise(resolve=>setTimeout(resolve,1200))
}
console.log(JSON.stringify({status:'checked',counts:audit.prepare('SELECT status,COUNT(*) n FROM alternatives GROUP BY status').all()}));audit.close()
