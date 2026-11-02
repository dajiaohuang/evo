import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {existsSync,readFileSync} from 'node:fs'
import {gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/c-scratch/',snapshot=root+'snapshot-synonym-edges-1/',path=root+'contextual-inverse-query.sqlite'
const manifestBytes=readFileSync(snapshot+'manifest.json'),manifest=JSON.parse(manifestBytes),hash=createHash('sha256').update(manifestBytes).digest('hex')
if(process.argv.includes('--init')){
 assert.ok(!existsSync(path),'Existing checkpoint must be preserved')
 const db=new DatabaseSync(path);db.exec("CREATE TABLE meta(key TEXT PRIMARY KEY,value TEXT NOT NULL);CREATE TABLE targets(item TEXT PRIMARY KEY,status TEXT NOT NULL DEFAULT 'pending',results_json TEXT,checked_at TEXT);CREATE INDEX targets_status ON targets(status);BEGIN")
 db.prepare('INSERT INTO meta VALUES (?,?)').run('manifest_sha256',hash)
 const add=db.prepare('INSERT OR IGNORE INTO targets(item) VALUES (?)');let nodes=0
 for(const shard of Object.values(manifest.shards))for(const e of Object.values(JSON.parse(gunzipSync(readFileSync(snapshot+shard.path))).entries))if(e.status==='unresolved'&&e.matchKind==='matched-name-parent-rank'&&/^https:\/\/www\.wikidata\.org\/entity\/Q\d+$/.test(e.item??'')){add.run(e.item);nodes++}
 db.exec('COMMIT');console.log(JSON.stringify({status:'initialized',nodes,items:db.prepare('SELECT COUNT(*) n FROM targets').get().n}));db.close();process.exit()
}
assert.ok(existsSync(path),'Initialize checkpoint first')
const db=new DatabaseSync(path);assert.equal(db.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get().value,hash)
const blocked=db.prepare("SELECT value FROM meta WHERE key='not_before'").get()?.value;if(blocked&&Date.now()<Date.parse(blocked))throw Error(`Wikidata rate limit active until ${blocked}`)
const next=db.prepare("SELECT item FROM targets WHERE status='pending' LIMIT 200"),update=db.prepare("UPDATE targets SET status='queried',results_json=?,checked_at=? WHERE item=? AND status='pending'")
const arg=process.argv.indexOf('--batches'),max=arg<0?100:Number(process.argv[arg+1]);assert.ok(Number.isInteger(max)&&max>0&&max<=500)
for(let batch=0;batch<max;batch++){
 const rows=next.all();if(!rows.length)break
 const values=rows.map(r=>'wd:'+r.item.split('/').at(-1)).join(' ')
 const query=`SELECT ?source ?target ?name ?rank ?targetCol ?article WHERE { VALUES ?source { ${values} } ?target wdt:P1420 ?source. ?article schema:about ?target; schema:isPartOf ?site. FILTER(REGEX(STR(?site), '^https://[a-z0-9-]+[.]wikipedia[.]org/$')) OPTIONAL { ?target wdt:P225 ?name } OPTIONAL { ?target wdt:P105 ?rank } OPTIONAL { ?target wdt:P10585 ?targetCol } }`
 const response=await fetch('https://query.wikidata.org/sparql',{method:'POST',body:new URLSearchParams({format:'json',query}),headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy synonym link audit)'},signal:AbortSignal.timeout(65000)})
 if(!response.ok){if(response.status===429){const seconds=Number(response.headers.get('retry-after')),until=Date.now()+Math.max(3600000,Number.isFinite(seconds)?seconds*1000:0);db.prepare("INSERT OR REPLACE INTO meta VALUES('not_before',?)").run(new Date(until).toISOString())}throw Error(`Wikidata HTTP ${response.status}; checkpoint preserved`)}
 const data=await response.json();assert.ok(Array.isArray(data.results?.bindings));const result=new Map(rows.map(r=>[r.item,[]]))
 for(const row of data.results.bindings){const key=row.source.value.replace('http://','https://');assert.ok(result.has(key));result.get(key).push(row)}
 db.exec('BEGIN IMMEDIATE');try{for(const row of rows)assert.equal(update.run(JSON.stringify(result.get(row.item)),new Date().toISOString(),row.item).changes,1);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}
 if((batch+1)%10===0)console.log(JSON.stringify({batches:batch+1,counts:db.prepare('SELECT status,COUNT(*) n FROM targets GROUP BY status').all()}))
 await new Promise(resolve=>setTimeout(resolve,3000))
}
console.log(JSON.stringify({status:'checkpoint',counts:db.prepare('SELECT status,COUNT(*) n FROM targets GROUP BY status').all()}));db.close()
