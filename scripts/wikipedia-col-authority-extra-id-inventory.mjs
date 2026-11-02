import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync,writeFileSync} from 'node:fs'
import {gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',dir=process.argv[2];assert.ok(dir)
const bytes=readFileSync(dir+'/manifest.json'),manifest=JSON.parse(bytes);assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only')
const db=new DatabaseSync(dir+'/inventory.sqlite',{readOnly:true}),get=db.prepare('SELECT rank,source_dataset_id FROM nodes WHERE id=?'),targets=new Set()
for(const f of Object.values(manifest.shards)){const b=readFileSync(dir+'/'+f.path);assert.equal(createHash('sha256').update(b).digest('hex'),f.sha256);for(const [id,e] of Object.entries(JSON.parse(gunzipSync(b)).entries))if(['unresolved','ambiguous'].includes(e.status))targets.add(id)}
const defs=[{path:'data/sources/avilist-v2025b-crosswalk-col26.8.json.gz',kind:'avibase',property:'P2026',rows:'colRecords',source:'colSourceDatasetId',id:r=>/^avibase-([A-Z0-9]{8}|[A-Z0-9]{16})$/.exec(r.avibaseId??'')?.[1]},{path:'data/sources/fishbase-authority-crosswalk-col26.8.json.gz',kind:'worms',property:'P850',rows:'records',source:'sourceDatasetId',id:r=>/^urn:lsid:marinespecies\.org:taxname:(\d+)$/.exec(r.fishBaseId??'')?.[1]}]
const values=[],sources=[]
for(const spec of defs){const dataBytes=readFileSync(spec.path),data=JSON.parse(gunzipSync(dataBytes));let accepted=0
 for(const row of data[spec.rows]){if(!targets.has(row.colId)||row.status!=='accepted')continue;const externalId=spec.id(row);if(!externalId)continue;const node=get.get(row.colId);assert.ok(node);assert.equal(node.rank,'species');assert.equal(node.source_dataset_id,String(row[spec.source]));values.push({node:row.colId,kind:spec.kind,property:spec.property,externalId});accepted++}
 sources.push({path:spec.path,sha256:createHash('sha256').update(dataBytes).digest('hex'),kind:spec.kind,accepted})
}
db.close();const out=root+'authority-extra-id-inventory.json';writeFileSync(out,JSON.stringify({snapshotSha256:createHash('sha256').update(bytes).digest('hex'),sources,values}));console.log(JSON.stringify({unmatchedNodes:targets.size,sources,values:values.length,output:out}))
