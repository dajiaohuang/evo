import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = b => createHash('sha256').update(b).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const bytes = readFileSync(root + 'late-taxon-gbif-checks.json'), source = JSON.parse(bytes)
  assert.equal(source.sourceSha256, sha(readFileSync(root + 'late-no-col-instance-checks.json')))
  const get = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const ancestry = id => { const result=[]; let node=get.get(id); while(node && result.length<24) { result.push({id:node.id,name:node.name,rank:node.rank}); node=node.parent_id && get.get(node.parent_id) } return result }
  const specifications = [{node:'BY65Q',target:'9WT88',item:'Q730937',sourceAncestor:'Diptera',targetAncestor:'Nematoda'}, {node:'CPS5N',target:'6FNBL',item:'Q5382128',sourceAncestor:'Erebidae',targetAncestor:'Noctuidae'}]
  const holds = specifications.map(spec => { const row=source.pairs.find(r=>r.node===spec.node && r.item===spec.item); assert.ok(row); const sourceLineage=ancestry(spec.node), targetLineage=ancestry(spec.target); assert.equal(sourceLineage[0].name,row.source); assert.equal(targetLineage[0].name,row.target); assert.ok(sourceLineage.some(n=>n.name===spec.sourceAncestor)); assert.ok(targetLineage.some(n=>n.name===spec.targetAncestor)); return { ...spec, sourceLineage, targetLineage, reason:`Different tree lineages: ${spec.sourceAncestor} versus ${spec.targetAncestor}` } })
  const key='ncbi_candidate_identity_holds_sha256',meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=meta.get(key).value; assert.match(previous,/^[0-9a-f]{64}$/)
  const proof=Buffer.from(JSON.stringify({previous,evidenceSha256:sha(bytes),exclusionsSha256:sha(exclusions),holds,checkedAt:new Date().toISOString()}));writeFileSync(root+'late-redirect-lineage-conflicts.json',proof,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE');try{assert.equal(meta.get(key).value,previous);const insert=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)');for(const h of holds)insert.run(h.node,`https://www.wikidata.org/entity/${h.item}`,h.reason);db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),key);db.exec('COMMIT')}catch(e){db.exec('ROLLBACK');throw e}
  console.log(JSON.stringify({status:'held',nodes:holds.map(h=>h.node)}))
} finally {audit.close();db.close()}
