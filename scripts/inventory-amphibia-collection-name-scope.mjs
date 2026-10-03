import fs from 'node:fs'
import crypto from 'node:crypto'
import {gunzipSync} from 'node:zlib'
const base='docs/amphibia-content',source=JSON.parse(fs.readFileSync('data/catalogue-of-life/releases/2026-08-20/global-sources/itis/itis-global-original-rc130.json')).source
const identities=JSON.parse(fs.readFileSync(`${base}/itis-distribution-coverage.json`)).ledger
const tsnToCol=new Map(identities.map(r=>[r.sourceTsn,r.colId]))
const synonyms=[],names=new Map(),inputs=[]
function rows(member,retain){for(const file of source.members.find(r=>r.member===member).files){const bytes=fs.readFileSync(file.path);if(crypto.createHash('sha256').update(bytes).digest('hex')!==file.sha256)throw Error(`Changed archive shard: ${file.path}`);let retained=0;for(const line of gunzipSync(bytes).toString('utf8').split('\n'))if(line&&retain(JSON.parse(line)))retained++;if(retained)inputs.push({...file,member,retainedRows:retained})}}
rows('Synonym.tsv',r=>{if(!tsnToCol.has(r.fields.taxonID))return false;synonyms.push(r);return true})
const needed=new Set(synonyms.map(r=>r.fields.nameID))
rows('Name.tsv',r=>{if(!needed.has(r.fields.ID))return false;names.set(r.fields.ID,r);return true})
const accepted=new Set(JSON.parse(fs.readFileSync(`${base}/full-roster-literature-collection.json`)).names.map(r=>r.name)),queue=new Map()
function add(name,concept){if(!name||name==='NULL'||accepted.has(name))return;if(!queue.has(name))queue.set(name,{name,concepts:[]});queue.get(name).concepts.push(concept)}
for(const r of synonyms){const n=names.get(r.fields.nameID);if(!n)throw Error(`Missing name row ${r.fields.nameID}`);add(n.fields.scientificName,{authority:'archived ITIS synonym lead',id:tsnToCol.get(r.fields.taxonID),sourceTsn:r.fields.taxonID,synonymLocator:r.locator,nameLocator:n.locator,authorship:n.fields.authorship,conceptEquivalenceCertified:false})}
const placeholders=JSON.parse(fs.readFileSync(`${base}/collection-placeholder-coverage.json`))
for(const r of placeholders.rows)if(r.concepts.some(c=>c.rank!=='species'))for(const c of r.concepts)add(r.name,{...c,path:r.path,role:'higher-taxon literal-name discovery',conceptEquivalenceCertified:false})
const result={sourceArchiveSha256:source.archiveSha256,sourceInputs:inputs,archivedSynonymRows:synonyms.length,acceptedNamesExcludedAsAlreadyQueried:accepted.size,names:[...queue.values()],scope:'Archived synonym names and higher taxon names, with raw locators retained; mentions are research leads, never automatically assigned biological claims.',biologicalClaimsAssigned:false}
fs.writeFileSync(`${base}/expanded-literature-name-scope.json`,JSON.stringify(result,null,2)+'\n')
console.log(JSON.stringify({archivedSynonymRows:synonyms.length,additionalLiteralNames:queue.size,inputs:inputs.length}))
