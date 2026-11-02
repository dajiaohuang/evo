import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync} from 'node:fs'
import {brotliDecompressSync,gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',dir=process.argv[2];assert.ok(dir)
const mb=readFileSync(dir+'/manifest.json'),manifest=JSON.parse(mb);assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only')
const uncovered=new Set();for(const f of Object.values(manifest.shards)){const b=readFileSync(dir+'/'+f.path);assert.equal(createHash('sha256').update(b).digest('hex'),f.sha256);for(const [id,e] of Object.entries(JSON.parse(gunzipSync(b)).entries))if(['unresolved','ambiguous'].includes(e.status))uncovered.add(id)}
const source=readFileSync('data/sources/ictv-virus-crosswalk-col26.8-msl41.v1.json.br'),data=JSON.parse(brotliDecompressSync(source)),abbreviations=new Map()
for(const row of data.records){if(row.mappingStatus!=='accepted'||!row.taxonomy?.genus)continue;for(const isolate of row.isolates??[]){if(isolate.role!=='exemplar'||!isolate.abbreviations)continue;for(const part of isolate.abbreviations.split(';')){const name=part.trim();if(!/^[A-Za-z][A-Za-z0-9-]{3,25}$/.test(name)||!/[A-Z]/.test(name))continue;if(!abbreviations.has(name))abbreviations.set(name,new Map());abbreviations.get(name).set(row.colId,row.taxonomy.genus)}}}
const hash=createHash('sha256').update(JSON.stringify({manifestSha256:createHash('sha256').update(mb).digest('hex'),crosswalkSha256:createHash('sha256').update(source).digest('hex')})).digest('hex'),db=new DatabaseSync(root+'inventory.sqlite')
db.exec(`PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS ictv_abbr_targets(node_id TEXT NOT NULL,name TEXT NOT NULL,genus TEXT NOT NULL,PRIMARY KEY(node_id,name)); CREATE TABLE IF NOT EXISTS ictv_abbr_lookup(name TEXT PRIMARY KEY,status TEXT NOT NULL DEFAULT 'pending',candidates_json TEXT,checked_at TEXT); CREATE INDEX IF NOT EXISTS ictv_abbr_lookup_status ON ictv_abbr_lookup(status);`)
const prior=db.prepare("SELECT value FROM meta WHERE key='ictv_abbr_source_sha256'").get()?.value;assert.ok(!prior||prior===hash)
if(!prior){const target=db.prepare('INSERT OR IGNORE INTO ictv_abbr_targets VALUES(?,?,?)'),lookup=db.prepare('INSERT OR IGNORE INTO ictv_abbr_lookup(name) VALUES(?)');db.exec('BEGIN IMMEDIATE');try{for(const [name,ids] of abbreviations)if(ids.size===1){const [id,genus]=[...ids][0];if(uncovered.has(id)){target.run(id,name,genus);lookup.run(name)}}db.prepare("INSERT INTO meta(key,value) VALUES('ictv_abbr_source_sha256',?)").run(hash);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}}
console.log(JSON.stringify({status:'complete',names:db.prepare('SELECT COUNT(*) n FROM ictv_abbr_lookup').get().n,nodes:db.prepare('SELECT COUNT(DISTINCT node_id) n FROM ictv_abbr_targets').get().n,sourceSha256:hash}));db.close()
