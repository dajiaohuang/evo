import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync} from 'node:fs'
import {DatabaseSync} from 'node:sqlite'
const input='.git/evo-wikipedia-col26-8/paleo-id-inventory.json',bytes=readFileSync(input),inventory=JSON.parse(bytes),hash=createHash('sha256').update(bytes).digest('hex')
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec(`PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS paleo_id_targets(node_id TEXT NOT NULL,property TEXT NOT NULL,external_id TEXT NOT NULL,kind TEXT NOT NULL,PRIMARY KEY(node_id,property,external_id)); CREATE TABLE IF NOT EXISTS paleo_id_lookup(property TEXT NOT NULL,id TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',candidates_json TEXT,checked_at TEXT,PRIMARY KEY(property,id)); CREATE INDEX IF NOT EXISTS paleo_id_lookup_status ON paleo_id_lookup(status,property);`)
const previous=db.prepare("SELECT value FROM meta WHERE key='paleo_id_source_sha256'").get()?.value;assert.ok(!previous||previous===hash,'Authority identifier inventory changed')
if(!previous){const target=db.prepare('INSERT OR IGNORE INTO paleo_id_targets VALUES(?,?,?,?)'),id=db.prepare('INSERT OR IGNORE INTO paleo_id_lookup(property,id) VALUES(?,?)');db.exec('BEGIN IMMEDIATE');try{for(const row of inventory.values){assert.ok(['P850','P1391'].includes(row.property));target.run(row.node,row.property,row.externalId,row.kind);id.run(row.property,row.externalId)}db.prepare("INSERT INTO meta(key,value) VALUES('paleo_id_source_sha256',?)").run(hash);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}}
const until=db.prepare("SELECT value FROM meta WHERE key='wikidata_not_before'").get()?.value;if(until&&Date.parse(until)>Date.now())throw Error(`Wikidata rate limit active until ${until}`)
const first=db.prepare("SELECT property FROM paleo_id_lookup WHERE status='pending' LIMIT 1"),next=db.prepare("SELECT id FROM paleo_id_lookup WHERE status='pending' AND property=? ORDER BY rowid LIMIT 200"),update=db.prepare("UPDATE paleo_id_lookup SET status='queried',candidates_json=?,checked_at=? WHERE property=? AND id=? AND status='pending'")
let batches=0,checked=0
for(;batches<1000;batches++){
 const property=first.get()?.property;if(!property)break;assert.ok(['P850','P1391'].includes(property));const ids=next.all(property).map(r=>r.id)
 const query=`SELECT ?id ?item ?rank ?col ?parentName ?article WHERE { VALUES ?id { ${ids.map(id=>JSON.stringify(id)).join(' ')} } ?item wdt:${property} ?id. OPTIONAL { ?item wdt:P105 ?rank } OPTIONAL { ?item wdt:P10585 ?col } OPTIONAL { ?item wdt:P171 ?parent. ?parent wdt:P225 ?parentName } OPTIONAL { ?article schema:about ?item; schema:isPartOf ?site. FILTER(REGEX(STR(?site), '^https://[a-z0-9-]+[.]wikipedia[.]org/$')) } }`
 let response
 for(let attempt=0;attempt<4;attempt++){
  try{response=await fetch('https://query.wikidata.org/sparql',{method:'POST',body:new URLSearchParams({format:'json',query}),signal:AbortSignal.timeout(65000),headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy Wikipedia matching)'}})}catch(e){if(attempt===3)throw e;await new Promise(r=>setTimeout(r,5000*2**attempt));continue}
  if(response.ok||![429,500,502,503,504].includes(response.status)||attempt===3)break
  const retry=Number(response.headers.get('retry-after'));if(retry>30){const deadline=new Date(Date.now()+retry*1000).toISOString();db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('wikidata_not_before',?)").run(deadline);throw Error(`Wikidata requested retry after ${retry}s, until ${deadline}`)}
  await response.body?.cancel();await new Promise(r=>setTimeout(r,Math.max(5000*2**attempt,retry*1000||0)))
 }
 if(!response?.ok)throw Error(`Wikidata HTTP ${response?.status}; batch remains pending`)
 const bindings=(await response.json()).results?.bindings;assert.ok(Array.isArray(bindings));const groups=new Map(ids.map(id=>[id,new Map()]))
 for(const row of bindings){const id=row.id?.value,item=row.item?.value;assert.ok(groups.has(id));assert.match(item,/^http:\/\/www\.wikidata\.org\/entity\/Q\d+$/);const group=groups.get(id);if(!group.has(item))group.set(item,{item:item.replace('http:','https:'),ranks:[],colIds:[],parentNames:[],articles:[]});const v=group.get(item)
  for(const [k,f] of [['ranks','rank'],['colIds','col'],['parentNames','parentName']]){const x=row[f]?.value;if(x&&!v[k].includes(x))v[k].push(x)}
  if(row.article?.value){const url=new URL(row.article.value);assert.equal(url.protocol,'https:');assert.match(url.hostname,/^[a-z0-9-]+\.wikipedia\.org$/);assert.ok(url.pathname.startsWith('/wiki/'));if(!v.articles.includes(url.href))v.articles.push(url.href)}
 }
 db.exec('BEGIN IMMEDIATE');try{for(const id of ids)assert.equal(update.run(JSON.stringify([...groups.get(id).values()]),new Date().toISOString(),property,id).changes,1);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}
 checked+=ids.length;if((batches+1)%10===0)console.log(JSON.stringify({property,batches:batches+1,checked,remaining:db.prepare("SELECT COUNT(*) n FROM paleo_id_lookup WHERE status='pending'").get().n}));await new Promise(r=>setTimeout(r,1200))
}
console.log(JSON.stringify({status:'checkpoint',batches,checked,counts:db.prepare('SELECT property,status,COUNT(*) n FROM paleo_id_lookup GROUP BY property,status').all()}));db.close()
