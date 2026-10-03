import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
import { parse, stringify } from 'yaml'
const source=process.cwd(),target=path.resolve(process.argv[2]??'')
if(!process.argv[2]||target===source)throw Error('Independent verification checkout required')
const root='content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia',registry='data/catalogue-of-life/releases/2026-08-20/registry',map=parse(fs.readFileSync(path.join(target,'content/projection-map.yaml'),'utf8'))
const profileInput=map.generatedInputs['data/knowledge/catalogue-profiles.json.gz']?'data/knowledge/catalogue-profiles.json.gz':'data/knowledge/catalogue-profiles.json'
const profiles=new Map(map.generatedInputs[profileInput].template.records.filter(r=>r.contentRecord?.path===root||r.contentRecord?.path?.startsWith(root+'/')).map(r=>[r.contentRecord.inject.colId,r.contentRecord.path])),expected=new Map()
const manifest=JSON.parse(fs.readFileSync(path.join(source,registry,'manifest.json'))),hash=b=>crypto.createHash('sha256').update(b).digest('hex')
for(const file of manifest.hierarchy.nodes.files){const bytes=fs.readFileSync(path.join(source,registry,file.path));if(hash(bytes)!==file.sha256)throw Error('Pinned COL shard checksum changed');const raw=zlib.gunzipSync(bytes);if(hash(raw)!==file.sourceSha256)throw Error('Pinned COL decoded checksum changed');for(const line of raw.toString('utf8').split('\n'))if(line){const node=JSON.parse(line);if(profiles.has(node.id))expected.set(node.id,node)}}
if(expected.size!==profiles.size)throw Error('Some owned profiles lack exact pinned COL concepts')
const changes=[];let processed=0
const projectionBytes=fs.readFileSync(path.join(target,profileInput)),projectionDecoded=profileInput.endsWith('.gz')?zlib.gunzipSync(projectionBytes):projectionBytes,previousProfiles=new Map(JSON.parse(projectionDecoded).records.map(r=>[r.colId,r]))
const initialProjectionDeltas=[...profiles].flatMap(([colId,dir])=>{const old=previousProfiles.get(colId),node=expected.get(colId),fields={};for(const field of ['scientificName','rank','sourceDatasetId'])if(old?.[field]!==node[field])fields[field]={previousProjection:old?.[field],pinned:node[field]};return Object.keys(fields).length?[{colId,path:dir,fields}]:[]})
function replace(file,next,bytes){const staged=`${file}.identity.tmp`;fs.writeFileSync(staged,next);for(let attempt=0;attempt<3;attempt++){if(fs.readFileSync(file,'utf8')!==bytes)throw Error('Concurrent profile edit; staged file retained');try{fs.renameSync(staged,file);return}catch(e){if(!['EPERM','EACCES','EBUSY','UNKNOWN'].includes(e.code)||attempt===2)throw e;Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,500)}}}
for(const [colId,dir]of profiles){
 const node=expected.get(colId)
 for(const workspace of [source,target]){
  const file=path.join(workspace,dir,'evidence.md'),bytes=fs.readFileSync(file,'utf8'),match=/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(bytes)
  if(!match)throw Error('Missing canonical front matter')
  const head=parse(match[1]),profile=head.records['catalogue-profile'],delta={}
  for(const field of ['scientificName','rank','sourceDatasetId'])if(profile[field]!==node[field]){delta[field]={previous:profile[field],pinned:node[field]};profile[field]=node[field]}
  if(Object.keys(delta).length){const next='---\n'+stringify(head,{lineWidth:0})+'---\n'+bytes.slice(match[0].length);replace(file,next,bytes);changes.push({workspace,colId,path:dir,fields:delta})}
 }
 processed++;if(processed%2000===0)console.log(JSON.stringify({processed,total:profiles.size,changedCopies:changes.length}))
}
const excludedProfiles=[...expected.values()].filter(n=>n.status!=='accepted').map(n=>({colId:n.id,path:profiles.get(n.id),status:n.status,scientificName:n.scientificName,canonicalReaderRetained:true}))
for(const workspace of [source,target]){const file=path.join(workspace,'content/projection-map.yaml'),ownMap=parse(fs.readFileSync(file,'utf8')),ids=new Set(excludedProfiles.map(n=>n.colId)),descriptor=ownMap.generatedInputs['data/knowledge/catalogue-profiles.json.gz']??ownMap.generatedInputs['data/knowledge/catalogue-profiles.json'];descriptor.template.records=descriptor.template.records.filter(r=>!ids.has(r.contentRecord?.inject?.colId));fs.writeFileSync(file,stringify(ownMap,{lineWidth:0}))}
const receipt={pinnedManifest:`${registry}/manifest.json`,profiles:profiles.size,changedCopiesThisPass:changes.length,changedProfiles:initialProjectionDeltas.length,initialProjectionSha256:hash(projectionBytes),initialProjectionDeltas,changesThisPass:changes,excludedFromAcceptedProfileProjection:excludedProfiles,readerBodiesUnchanged:true,identityBasedOnExactColId:true,newTaxonIdsMinted:0}
for(const workspace of [source,target])fs.writeFileSync(path.join(workspace,'docs/amphibia-content/profile-identity-reconciliation.json'),JSON.stringify(receipt,null,2)+'\n')
console.log(JSON.stringify({profiles:receipt.profiles,changedProfiles:receipt.changedProfiles,readerBodiesUnchanged:true}))
