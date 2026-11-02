import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { gunzipSync } from 'node:zlib'
import { normalizeScientificName } from './col-registry-lib.mjs'
const out=resolve(process.argv[2]??''),manifest=JSON.parse(readFileSync(join(out,'manifest.json'))),source=readFileSync('data/catalogue-of-life/releases/2026-08-20/registry/manifest.json'),db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite',{readOnly:true}),node=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),ids=new Set();let zabrina=false,shortNames=0;const shortExamples=[]
assert.equal(manifest.schemaVersion,1);assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.registryManifestSha256,createHash('sha256').update(source).digest('hex'));assert.deepEqual(manifest.hierarchyNodeHashes,Object.fromEntries(JSON.parse(source).hierarchy.nodes.files.map(file=>[file.prefix,file.sha256])))
for(const [prefix,f] of Object.entries(manifest.files)){
 assert.equal(f.path,`${prefix}-${f.sha256.slice(0,16)}.json.gz`);const bytes=readFileSync(join(out,f.path));assert.equal(bytes.length,f.bytes);assert.equal(createHash('sha256').update(bytes).digest('hex'),f.sha256)
 const raw=gunzipSync(bytes);assert.equal(raw.length,f.sourceBytes);assert.equal(createHash('sha256').update(raw).digest('hex'),f.sourceSha256);const shard=JSON.parse(raw);assert.equal(shard.prefix,prefix);assert.equal(shard.releaseAlias,manifest.releaseAlias);assert.equal(shard.records.length,f.records)
 for(const r of shard.records){const n=node.get(r.id);assert.ok(n);assert.notEqual(n.rank,'species');assert.equal(r.rank,n.rank);assert.equal(r.parentId,n.parent_id);assert.equal(r.normalizedBare,normalizeScientificName(n.name));assert.equal(r.normalizedBare.replaceAll(' ','').slice(0,2).padEnd(2,'_')||'__',prefix);assert.ok(!ids.has(r.id));ids.add(r.id);if(r.normalizedBare.replaceAll(' ','').length<3){shortNames++;if(shortExamples.length<5)shortExamples.push({id:r.id,name:r.scientificName})}if(r.id==='8LTCH'&&r.normalizedBare==='zabrina'&&prefix==='za')zabrina=true}
}
assert.equal(ids.size,manifest.nodes);assert.equal(ids.size,db.prepare("SELECT COUNT(*) n FROM nodes WHERE rank<>'species' OR rank IS NULL").get().n);assert.ok(zabrina);console.log(JSON.stringify({status:'passed',nodes:ids.size,shards:Object.keys(manifest.files).length,zabrinaSearch:'passed',shortNames,shortExamples}));db.close()
