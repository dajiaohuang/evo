import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,readdirSync,writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { fetchWikidata } from './wikidata-identity-fetch.mjs'
import { identifyNonTaxon } from './wikipedia-nontaxon-evidence.mjs'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex'),now=Date.now()
const db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',{readOnly:true}),cache=new DatabaseSync(root+'cross-locale-wikidata-facts.sqlite')
for(const c of [db,audit,cache])c.exec('PRAGMA busy_timeout=15000')
cache.exec('CREATE TABLE IF NOT EXISTS facts (item TEXT PRIMARY KEY,facts_json TEXT NOT NULL,checked_at INTEGER NOT NULL)')
try {
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
  const held=db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'),node=db.prepare('SELECT name FROM nodes WHERE id=?'),page=audit.prepare('SELECT status,title,locale FROM unkeyed_pages WHERE url=?')
  const candidates=new Map();let stale=0,proofs=0
  for(const file of readdirSync(root)){
    const match=/^nontaxa-other-locales-check-(redirect-)?(?:(ceb|nl|war)-)?after-(\d+)(-additional)?\.json$/.exec(file);if(!match)continue
    const [,redirect,language,after,extra='']=match,mode=redirect?'redirect':'same',suffix=language?language+'-':'',bytes=readFileSync(root+file),data=JSON.parse(bytes),when=Date.parse(data.checkedAt)
    assert.ok(Number.isFinite(when)&&when<=now+60000);if(now-when>=86400000){stale++;continue}
    const originalBytes=readFileSync(root+`live-${mode}-title-nontaxa-holds-${suffix}after-${after}${extra}.json`),original=JSON.parse(originalBytes).holds
    assert.equal(data.sourceSha256,sha(originalBytes));assert.equal(data.after,Number(after));proofs++
    for(const row of data.rows){if(row.missing||row.disambiguation||!/^Q[1-9]\d*$/.test(row.actualItem??'')||row.item.endsWith('/'+row.actualItem)||held.get(row.node,row.url))continue
      assert.ok(original.some(h=>h.node===row.node&&h.item===row.item));assert.equal(node.get(row.node)?.name,row.name)
      const saved=page.get(row.url);assert.ok(saved&&['available','snapshot-available'].includes(saved.status));assert.equal(saved.locale,row.locale);assert.equal(saved.title,row.title)
      candidates.set(`${row.node}\n${row.url}`,{...row,pageCheckedAt:data.checkedAt,pageProofSha256:sha(bytes),sourceProofSha256:sha(originalBytes)})}
  }
  const values=(e,p)=>(e?.claims?.[p]??[]).filter(c=>c.rank!=='deprecated'&&c.mainsnak?.snaktype==='value').map(c=>c.mainsnak.datavalue.value?.id??c.mainsnak.datavalue.value)
  const rows=[...candidates.values()],ids=[...new Set(rows.map(row=>row.actualItem))],facts={},missing=[]
  const getFact=cache.prepare('SELECT facts_json,checked_at FROM facts WHERE item=? AND checked_at>=?'),saveFact=cache.prepare('INSERT INTO facts VALUES(?,?,?) ON CONFLICT(item) DO UPDATE SET facts_json=excluded.facts_json,checked_at=excluded.checked_at')
  const pending=[];for(const id of ids){const saved=getFact.get(id,now-86400000);if(saved)facts[id]={...JSON.parse(saved.facts_json),checkedAt:new Date(saved.checked_at).toISOString()};else pending.push(id)}
  for(let i=0;i<pending.length;i+=40){const url=new URL('https://www.wikidata.org/w/api.php');for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'labels|claims',languages:'en',ids:pending.slice(i,i+40).join('|'),maxlag:'5'}))url.searchParams.set(k,v);const entities=(await fetchWikidata(url)).entities,checkedAt=Date.now();cache.exec('BEGIN IMMEDIATE');try{for(const id of pending.slice(i,i+40)){const e=entities[id];if(!e||e.missing!==undefined){missing.push(id);continue}const fact={label:e.labels?.en?.value??null,instances:values(e,'P31'),names:values(e,'P225')};saveFact.run(id,JSON.stringify(fact),checkedAt);facts[id]={...fact,checkedAt:new Date(checkedAt).toISOString()}}cache.exec('COMMIT')}catch(error){cache.exec('ROLLBACK');throw error}if((i+40)%400===0)console.log(JSON.stringify({status:'checking',checked:Math.min(i+40,pending.length),total:pending.length,cached:ids.length-pending.length}));if(i+40<pending.length)await new Promise(resolve=>setTimeout(resolve,2000))}
  const holds=[]
  const unknownTypes={}
  for(const row of rows){const fact=facts[row.actualItem];if(!fact)continue;const classification=identifyNonTaxon(fact.instances,fact.names);if(!classification){if(!fact.instances.includes('Q16521')&&!fact.names.length)for(const type of fact.instances)unknownTypes[type]=(unknownTypes[type]??0)+1;continue}holds.push({node:row.node,url:row.url,item:`https://www.wikidata.org/entity/${row.actualItem}`,label:fact.label,type:classification.type,reason:`Page identifies ${classification.description}, not a taxon`,entityCheckedAt:fact.checkedAt,pageCheckedAt:row.pageCheckedAt,pageProofSha256:row.pageProofSha256,sourceProofSha256:row.sourceProofSha256})}
  const orderedUnknown=Object.entries(unknownTypes).sort((a,b)=>b[1]-a[1]),unknown=process.argv.includes('--all-types')?orderedUnknown:orderedUnknown.slice(0,20)
  if(!holds.length)console.log(JSON.stringify({status:'nothing-to-hold',proofs,stale,candidates:rows.length,items:ids.length,missing,unknownTypes:unknown}))
  else {const keys=['ncbi_candidate_identity_holds_sha256','candidate_identity_held_urls_sha256'],meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=Object.fromEntries(keys.map(key=>[key,meta.get(key).value]));for(const value of Object.values(previous))assert.match(value,/^[0-9a-f]{64}$/)
    const evidence=Buffer.from(JSON.stringify({previous,exclusionsSha256:sha(exclusions),proofs,stale,candidateCount:rows.length,itemCount:ids.length,missing,entityFacts:facts,holds,checkedAt:new Date().toISOString()})),hash=sha(evidence)
    writeFileSync(root+`cross-locale-nontaxa-batch-${hash.slice(0,16)}.json`,evidence,{flag:'wx'})
    db.exec('BEGIN IMMEDIATE');try{for(const key of keys)assert.equal(meta.get(key).value,previous[key]);const add=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'),addUrl=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)');for(const h of holds){add.run(h.node,h.item,h.reason);addUrl.run(h.node,h.url)}const update=db.prepare('UPDATE meta SET value=? WHERE key=?');for(const key of keys)update.run(hash,key);db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
    console.log(JSON.stringify({status:'held',proofs,stale,candidates:rows.length,items:ids.length,missing,unknownTypes:unknown,holds:holds.length,nodes:new Set(holds.map(h=>h.node)).size,evidenceSha256:hash,examples:holds.slice(0,8)}))}
} finally {db.close();audit.close();cache.close()}
