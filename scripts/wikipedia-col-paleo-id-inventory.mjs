import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync,writeFileSync} from 'node:fs'
import {brotliDecompressSync,gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',dir=process.argv[2];assert.ok(dir)
const mb=readFileSync(dir+'/manifest.json'),manifest=JSON.parse(mb);assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only')
const targets=new Set();for(const f of Object.values(manifest.shards)){const b=readFileSync(dir+'/'+f.path);assert.equal(createHash('sha256').update(b).digest('hex'),f.sha256);for(const [id,e] of Object.entries(JSON.parse(gunzipSync(b)).entries))if(['unresolved','ambiguous'].includes(e.status))targets.add(id)}
const db=new DatabaseSync(dir+'/inventory.sqlite',{readOnly:true}),node=db.prepare('SELECT name,rank,source_dataset_id FROM nodes WHERE id=?')
const defs=[{path:'data/sources/oomycota-species-fungorum-crosswalk-col26.8.json.gz',kind:'fungorum',property:'P1391',id:'indexFungorumId',source:'sourceDatasetId',name:'scientificName',author:'authorship'},{path:'data/sources/foraminifera-wfd-col26.8-crosswalk.json.br',kind:'worms',property:'P850',id:'sourceAphiaId',source:'sourceDatasetId',name:'colScientificName',author:'colAuthorship'}],values=[],sources=[]
for(const s of defs){const bytes=readFileSync(s.path),data=JSON.parse(s.path.endsWith('.br')?brotliDecompressSync(bytes):gunzipSync(bytes));assert.equal(data.source.catalogueRelease,'COL26.8');if(data.colInput?.registryManifestSha256)assert.equal(data.colInput.registryManifestSha256,manifest.registryManifestSha256);let accepted=0,skipped=0
 for(const r of data.records){if(!targets.has(r.colId)||r.status!=='accepted')continue;assert.match(r[s.id]??'',/^\d+$/);const n=node.get(r.colId);assert.ok(n);assert.equal(n.rank,'species');assert.equal(n.source_dataset_id,String(r[s.source]));const authored=r[s.name],author=r[s.author],canonical=author&&authored.endsWith(author)?authored.slice(0,-author.length).trim():authored.trim();if(canonical!==n.name){skipped++;continue}if(s.kind==='worms')assert.equal(r.sourceId,`urn:lsid:marinespecies.org:taxname:${r[s.id]}`);values.push({node:r.colId,kind:s.kind,property:s.property,externalId:r[s.id]});accepted++}
 sources.push({path:s.path,sha256:createHash('sha256').update(bytes).digest('hex'),kind:s.kind,accepted,skippedNameMismatch:skipped})
}
db.close();const out=root+'paleo-id-inventory.json';writeFileSync(out,JSON.stringify({snapshotSha256:createHash('sha256').update(mb).digest('hex'),sources,values}));console.log(JSON.stringify({sources,values:values.length,output:out}))
