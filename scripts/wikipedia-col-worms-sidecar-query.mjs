import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {existsSync,readFileSync} from 'node:fs'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',input=root+'worms-sidecar-inventory.json',bytes=readFileSync(input),inventory=JSON.parse(bytes),hash=createHash('sha256').update(bytes).digest('hex'),path=root+'c-scratch/worms-sidecar-query.sqlite'
if(process.argv.includes('--init')){
 assert.ok(!existsSync(path),'Existing checkpoint must be preserved')
 const manifest=readFileSync(root+'c-scratch/snapshot-nomenclatural-inverse-1/manifest.json');assert.equal(createHash('sha256').update(manifest).digest('hex'),inventory.snapshotSha256)
 for(const source of inventory.sources)assert.equal(createHash('sha256').update(readFileSync(source.path)).digest('hex'),source.sha256,source.path)
 const db=new DatabaseSync(path);db.exec("CREATE TABLE meta(key TEXT PRIMARY KEY,value TEXT NOT NULL);CREATE TABLE targets(node_id TEXT NOT NULL,external_id TEXT NOT NULL,PRIMARY KEY(node_id,external_id));CREATE TABLE lookup(id TEXT PRIMARY KEY,status TEXT NOT NULL DEFAULT 'pending',results_json TEXT,checked_at TEXT);CREATE INDEX lookup_status ON lookup(status);BEGIN")
 db.prepare('INSERT INTO meta VALUES (?,?)').run('inventory_sha256',hash)
 const target=db.prepare('INSERT OR IGNORE INTO targets VALUES (?,?)'),id=db.prepare('INSERT OR IGNORE INTO lookup(id) VALUES (?)')
 for(const row of inventory.values){assert.match(row.externalId,/^\d+$/);target.run(row.node,row.externalId);id.run(row.externalId)}
 db.exec('COMMIT');console.log(JSON.stringify({status:'initialized',nodes:db.prepare('SELECT COUNT(*) n FROM targets').get().n,ids:db.prepare('SELECT COUNT(*) n FROM lookup').get().n}));db.close();process.exit()
}
assert.ok(existsSync(path),'Initialize checkpoint first')
const db=new DatabaseSync(path);assert.equal(db.prepare("SELECT value FROM meta WHERE key='inventory_sha256'").get().value,hash)
const blocked=db.prepare("SELECT value FROM meta WHERE key='not_before'").get()?.value;if(blocked&&Date.now()<Date.parse(blocked))throw Error(`Wikidata rate limit active until ${blocked}`)
let size=200;const next=db.prepare("SELECT id FROM lookup WHERE status='pending' LIMIT ?"),update=db.prepare("UPDATE lookup SET status='queried',results_json=?,checked_at=? WHERE id=? AND status='pending'")
const arg=process.argv.indexOf('--batches'),max=arg<0?100:Number(process.argv[arg+1]);assert.ok(Number.isInteger(max)&&max>0&&max<=1000)
for(let batch=0;batch<max;batch++){
 const rows=next.all(size);if(!rows.length)break
 const query=`SELECT ?id ?item ?rank ?col ?name ?article WHERE { VALUES ?id { ${rows.map(r=>JSON.stringify(r.id)).join(' ')} } ?item wdt:P850 ?id. ?article schema:about ?item; schema:isPartOf ?site. FILTER(REGEX(STR(?site), '^https://[a-z0-9-]+[.]wikipedia[.]org/$')) OPTIONAL { ?item wdt:P105 ?rank } OPTIONAL { ?item wdt:P10585 ?col } OPTIONAL { ?item wdt:P225 ?name } }`
 let response
 for(let attempt=0;attempt<4;attempt++){
  response=await fetch('https://query.wikidata.org/sparql',{method:'POST',body:new URLSearchParams({format:'json',query}),headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; WoRMS identifier link audit)'},signal:AbortSignal.timeout(65000)})
  if(response.ok||![500,502,503,504].includes(response.status)||attempt===3)break
  await response.body?.cancel();await new Promise(resolve=>setTimeout(resolve,5000*2**attempt))
 }
 if(!response.ok){if(response.status===429){const seconds=Number(response.headers.get('retry-after')),until=Date.now()+Math.max(3600000,Number.isFinite(seconds)?seconds*1000:0);db.prepare("INSERT OR REPLACE INTO meta VALUES('not_before',?)").run(new Date(until).toISOString())}throw Error(`Wikidata HTTP ${response.status}; checkpoint preserved`)}
 let data;try{data=await response.json()}catch(e){if(size<=50)throw e;size=Math.max(50,Math.floor(size/2));console.warn(`Incomplete response; retry with ${size} identifiers`);batch--;continue}
 assert.ok(Array.isArray(data.results?.bindings));const results=new Map(rows.map(r=>[r.id,[]]))
 for(const row of data.results.bindings){assert.ok(results.has(row.id?.value));assert.match(row.item?.value??'',/^http:\/\/www\.wikidata\.org\/entity\/Q\d+$/);const u=new URL(row.article.value);assert.equal(u.protocol,'https:');assert.match(u.hostname,/^[a-z0-9-]+\.wikipedia\.org$/);assert.ok(u.pathname.startsWith('/wiki/'));results.get(row.id.value).push(row)}
 db.exec('BEGIN IMMEDIATE');try{for(const row of rows)assert.equal(update.run(JSON.stringify(results.get(row.id)),new Date().toISOString(),row.id).changes,1);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}
 if((batch+1)%10===0)console.log(JSON.stringify({batches:batch+1,counts:db.prepare('SELECT status,COUNT(*) n FROM lookup GROUP BY status').all(),withArticles:db.prepare("SELECT COUNT(*) n FROM lookup WHERE status='queried' AND results_json!='[]'").get().n}))
 await new Promise(resolve=>setTimeout(resolve,3000))
}
console.log(JSON.stringify({status:'checkpoint',counts:db.prepare('SELECT status,COUNT(*) n FROM lookup GROUP BY status').all(),withArticles:db.prepare("SELECT COUNT(*) n FROM lookup WHERE status='queried' AND results_json!='[]'").get().n}));db.close()
