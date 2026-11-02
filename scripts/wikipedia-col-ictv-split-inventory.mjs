import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync,createReadStream} from 'node:fs'
import {brotliDecompressSync,gunzipSync,createGunzip} from 'node:zlib'
import {createInterface} from 'node:readline'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',dir=process.argv[2];assert.ok(dir,'Provide the published snapshot')
const manifestBytes=readFileSync(dir+'/manifest.json'),manifest=JSON.parse(manifestBytes);assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only')
const uncovered=new Set();for(const f of Object.values(manifest.shards)){const b=readFileSync(dir+'/'+f.path);assert.equal(createHash('sha256').update(b).digest('hex'),f.sha256);for(const [id,e] of Object.entries(JSON.parse(gunzipSync(b)).entries))if(['unresolved','ambiguous'].includes(e.status))uncovered.add(id)}
const path='data/sources/ictv-virus-crosswalk-col26.8-msl41.v1.json.br',bytes=readFileSync(path),data=JSON.parse(brotliDecompressSync(bytes)),names=new Map(),splitKeys=new Set()
for(const row of data.records){if(row.mappingStatus!=='accepted')continue;for(const isolate of row.isolates??[]){if(isolate.role!=='exemplar')continue;const raw=isolate.virusNames?.trim();if(!raw)continue;for(const part of raw.split(';')){const name=part.trim();if(!name||name.length>180||/[,|\n\r]/.test(name))continue;const title=(name[0].toUpperCase()+name.slice(1)).replaceAll(' ','_');if(!names.has(title))names.set(title,new Set());names.get(title).add(row.colId);if(raw.includes(';'))splitKeys.add(title)}}}
const targets=new Map([...names].filter(([title,ids])=>splitKeys.has(title)&&ids.size===1&&uncovered.has([...ids][0])).map(([title,ids])=>[title,[...ids][0]]))
const sourceHash=createHash('sha256').update(JSON.stringify({manifestSha256:createHash('sha256').update(manifestBytes).digest('hex'),crosswalkSha256:createHash('sha256').update(bytes).digest('hex')})).digest('hex')
const db=new DatabaseSync(root+'inventory.sqlite');db.exec(`PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS ictv_split_targets(node_id TEXT NOT NULL,locale TEXT NOT NULL,title TEXT NOT NULL,url TEXT NOT NULL,PRIMARY KEY(node_id,locale,title)); CREATE TABLE IF NOT EXISTS ictv_split_pages(locale TEXT NOT NULL,title TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',item TEXT,canonical_title TEXT,checked_at TEXT,PRIMARY KEY(locale,title)); CREATE TABLE IF NOT EXISTS ictv_split_entities(item TEXT PRIMARY KEY,status TEXT NOT NULL DEFAULT 'pending',col_ids TEXT,rank_ids TEXT,checked_at TEXT);`)
const previous=db.prepare("SELECT value FROM meta WHERE key='ictv_split_source_sha256'").get()?.value;assert.ok(!previous||previous===sourceHash,'ICTV multilingual inventory source changed')
if(!previous)db.prepare("INSERT INTO meta(key,value) VALUES('ictv_split_source_sha256',?)").run(sourceHash)
const projects=JSON.parse(readFileSync(root+'sources/wikipedia-projects.json')).projects,done=db.prepare('SELECT value FROM meta WHERE key=?'),insert=db.prepare('INSERT OR IGNORE INTO ictv_split_targets VALUES(?,?,?,?)'),page=db.prepare('INSERT OR IGNORE INTO ictv_split_pages(locale,title) VALUES(?,?)'),record=db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)')
let processed=0,matches=0
for(const project of projects){const locale=project.locale;assert.match(locale,/^[a-z0-9-]+$/);const file=root+`sources/${locale}wiki-titles-ns0.gz`,receipt=JSON.parse(readFileSync(file+'.receipt.json'));assert.equal(receipt.locale,locale);assert.equal(receipt.url,`https://dumps.wikimedia.org/${project.dbname}/latest/${project.dbname}-latest-all-titles-in-ns0.gz`)
 const key=`ictv_split_scan_${locale}`,existing=done.get(key)?.value;if(existing){assert.equal(existing,receipt.sha256);continue}
 const hash=createHash('sha256');for await(const chunk of createReadStream(file))hash.update(chunk);assert.equal(hash.digest('hex'),receipt.sha256)
 const found=[];for await(const line of createInterface({input:createReadStream(file).pipe(createGunzip()),crlfDelay:Infinity})){const node=targets.get(line);if(node)found.push({node,title:line,url:`https://${locale}.wikipedia.org/wiki/${encodeURIComponent(line)}`})}
 db.exec('BEGIN IMMEDIATE');try{for(const match of found){matches+=insert.run(match.node,locale,match.title,match.url).changes;page.run(locale,match.title)}record.run(key,receipt.sha256);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}
 processed++;if(processed%20===0)console.log(JSON.stringify({processed,projects:projects.length,matches,targets:targets.size}))
}
console.log(JSON.stringify({status:'complete',processed,targets:targets.size,matches:db.prepare('SELECT COUNT(*) n FROM ictv_split_targets').get().n,pages:db.prepare('SELECT COUNT(*) n FROM ictv_split_pages').get().n,sourceSha256:sourceHash}));db.close()
