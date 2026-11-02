import { DatabaseSync } from 'node:sqlite'
import { createHash } from 'node:crypto'
import { writeFileSync } from 'node:fs'
import { gbifExactRelationship } from './gbif-identity-match.mjs'
import { assertWithinLiveCeiling } from './wikipedia-live-contiguous-pages.mjs'
const inventory=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite',{readOnly:true}),live=new DatabaseSync('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite',{readOnly:true})
const cache=new DatabaseSync('.git/evo-wikipedia-col26-8/gbif-live-match-cache.sqlite')
cache.exec('PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS matches (name TEXT PRIMARY KEY, result TEXT NOT NULL, checked_at INTEGER NOT NULL)')
const lookup=inventory.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?'),pairs=[]
const locale=process.argv[4]??'sv';if(!/^[a-z0-9-]+$/.test(locale))throw Error('Invalid locale');const suffix=locale==='sv'?'':locale+'-'
const ceiling=live.prepare('SELECT last_rowid FROM checkpoint WHERE kind=?').get(`unkeyed:${locale}`)?.last_rowid??0
const after=Number(process.argv[2]??0),through=Number(process.argv[3]??ceiling)
assertWithinLiveCeiling(after,through,ceiling)
for(const row of live.prepare("SELECT url,title,target_title,actual_item FROM results WHERE kind='unkeyed' AND status='available' AND locale=? AND actual_item IS NOT NULL AND title<>target_title AND source_rowid>? AND source_rowid<=?").iterate(locale,after,through)){
 const sources=lookup.all(row.title),targets=lookup.all(row.target_title)
 if(sources.length!==1||targets.length!==1||sources[0].id===targets[0].id||targets[0].parent_id===sources[0].id)continue
 if(sources[0].rank!=='species'||targets[0].rank!=='species')continue
 pairs.push({url:row.url,item:row.actual_item,source:sources[0],target:targets[0]})
}
const matches={},matchCheckedAt={}
const getCached=cache.prepare('SELECT result,checked_at FROM matches WHERE name=? AND checked_at>=?'),saveCached=cache.prepare('INSERT INTO matches VALUES(?,?,?) ON CONFLICT(name) DO UPDATE SET result=excluded.result,checked_at=excluded.checked_at')
for(const name of new Set(pairs.flatMap(p=>[p.source.name,p.target.name]))){const cached=getCached.get(name,Date.now()-7*86400000);if(cached){matches[name]=JSON.parse(cached.result);matchCheckedAt[name]=new Date(cached.checked_at).toISOString();continue}const url=new URL('https://api.gbif.org/v1/species/match');url.searchParams.set('name',name);url.searchParams.set('strict','true');let response;for(let attempt=0;attempt<6;attempt++){response=await fetch(url,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon identity checks)'},signal:AbortSignal.timeout(30000)});if(response.status!==429&&response.status!==503)break;const header=response.headers.get('retry-after'),seconds=Math.max(30,header&&/^\d+$/.test(header)?Number(header):120);console.log(JSON.stringify({status:'gbif-backoff',http:response.status,seconds}));if(attempt===5)throw Error(`GBIF HTTP ${response.status}; retry after ${seconds}s`);await new Promise(resolve=>setTimeout(resolve,seconds*1000))}if(!response.ok)throw Error(`GBIF HTTP ${response.status}`);matches[name]=await response.json();const checkedAt=Date.now();matchCheckedAt[name]=new Date(checkedAt).toISOString();saveCached.run(name,JSON.stringify(matches[name]),checkedAt);await new Promise(resolve=>setTimeout(resolve,200))}
const rows=pairs.map(p=>({...p,sourceMatch:matches[p.source.name],targetMatch:matches[p.target.name],sourceMatchCheckedAt:matchCheckedAt[p.source.name],targetMatchCheckedAt:matchCheckedAt[p.target.name]}));const proof={locale,after,through,checkedAt:new Date().toISOString(),rows};const bytes=Buffer.from(JSON.stringify(proof));writeFileSync(`.git/evo-wikipedia-col26-8/live-redirect-distinct-gbif-${suffix}${after}-${through}.json`,bytes,{flag:'wx'});console.log(JSON.stringify({pairs:rows.length,sha256:createHash('sha256').update(bytes).digest('hex'),distinct:rows.filter(r=>gbifExactRelationship(r.sourceMatch,r.targetMatch)==='distinct').length}));inventory.close();live.close();cache.close()
