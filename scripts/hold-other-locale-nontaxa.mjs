import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { fetchWikidata } from './wikidata-identity-fetch.mjs'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { identifyNonTaxon } from './wikipedia-nontaxon-evidence.mjs'

const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex')
const after=Number(process.argv[2]),locale=process.argv[3]??'sv',redirects=process.argv.includes('--redirects')
assert.ok(Number.isSafeInteger(after)&&after>=0);assert.match(locale,/^[a-z0-9-]+$/)
const mode=redirects?'redirect':'same',prefix=redirects?'redirect-':'',suffix=locale==='sv'?'':locale+'-'
const sourceProof=readFileSync(root+`live-${mode}-title-nontaxa-holds-${suffix}after-${after}.json`)
const bytes=readFileSync(root+`nontaxa-other-locales-check-${prefix}${suffix}after-${after}.json`),data=JSON.parse(bytes)
assert.equal(data.after,after);assert.equal(data.sourceSha256,sha(sourceProof));assert.ok(Date.now()-Date.parse(data.checkedAt)<86400000,'Page observation is too old')
const original=JSON.parse(sourceProof).holds,rows=data.rows.filter(r=>!r.missing&&!r.disambiguation&&/^Q[1-9]\d*$/.test(r.actualItem??'')&&!r.item.endsWith('/'+r.actualItem))
const ids=[...new Set(rows.map(row=>row.actualItem))],entities={}
for(let i=0;i<ids.length;i+=40){const url=new URL('https://www.wikidata.org/w/api.php');for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'labels|claims',languages:'en',ids:ids.slice(i,i+40).join('|'),maxlag:'5'}))url.searchParams.set(k,v);Object.assign(entities,(await fetchWikidata(url)).entities);if(i+40<ids.length)await new Promise(resolve=>setTimeout(resolve,2000))}
const values=(e,p)=>(e?.claims?.[p]??[]).filter(c=>c.rank!=='deprecated'&&c.mainsnak?.snaktype==='value').map(c=>c.mainsnak.datavalue.value?.id??c.mainsnak.datavalue.value)
const holds=[]
const db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',{readOnly:true})
for(const connection of [db,audit])connection.exec('PRAGMA busy_timeout=15000')
try {
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
  for(const row of rows){const entity=entities[row.actualItem],evidence=identifyNonTaxon(values(entity,'P31'),values(entity,'P225'));if(!evidence)continue
    assert.ok(original.some(h=>h.node===row.node&&h.item===row.item));const page=audit.prepare('SELECT status,title,locale FROM unkeyed_pages WHERE url=?').get(row.url);assert.ok(page&&['available','snapshot-available'].includes(page.status));assert.equal(page.locale,row.locale);assert.equal(page.title,row.title)
    holds.push({node:row.node,url:row.url,item:`https://www.wikidata.org/entity/${row.actualItem}`,label:entity.labels?.en?.value??null,type:evidence.type,reason:`Page identifies ${evidence.description}, not a taxon`})}
  if(!holds.length){console.log(JSON.stringify({status:'nothing-to-hold',checked:rows.length}));process.exitCode=0}
  else {const keys=['ncbi_candidate_identity_holds_sha256','candidate_identity_held_urls_sha256'],meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=Object.fromEntries(keys.map(key=>[key,meta.get(key).value]));for(const value of Object.values(previous))assert.match(value,/^[0-9a-f]{64}$/)
    const evidence=Buffer.from(JSON.stringify({previous,sourceSha256:sha(bytes),exclusionsSha256:sha(exclusions),holds,checkedAt:new Date().toISOString()}));writeFileSync(root+`other-locale-nontaxa-holds-${prefix}${suffix}after-${after}.json`,evidence,{flag:'wx'})
    db.exec('BEGIN IMMEDIATE');try{for(const key of keys)assert.equal(meta.get(key).value,previous[key]);const add=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'),addUrl=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)');for(const h of holds){add.run(h.node,h.item,h.reason);addUrl.run(h.node,h.url)}const update=db.prepare('UPDATE meta SET value=? WHERE key=?');for(const key of keys)update.run(sha(evidence),key);db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
    console.log(JSON.stringify({status:'held',count:holds.length,holds,evidenceSha256:sha(evidence)}))}
} finally {db.close();audit.close()}
