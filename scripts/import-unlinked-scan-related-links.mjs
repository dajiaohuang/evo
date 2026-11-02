import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'
import { similarTaxonNames } from './wikipedia-col-redirect-similarity.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = bytes => createHash('sha256').update(bytes).digest('hex')
const nameParent = process.argv.includes('--name-parent')
const wikidataParents = process.argv.includes('--wikidata-parents')
const wikidataSameParent = process.argv.includes('--wikidata-same-parent')
const treeRelatedRedirects = process.argv.includes('--tree-related-redirects')
assert.ok(Number(nameParent)+Number(wikidataParents)+Number(wikidataSameParent)+Number(treeRelatedRedirects)<=1)
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite'), scan = new DatabaseSync(root + (nameParent ? 'unlinked-name-parent-wikipedia-scan.sqlite' : 'unlinked-live-wikipedia-scan.sqlite'), { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  assert.equal(scan.prepare("SELECT COUNT(*) n FROM targets WHERE status <> 'checked'").get().n, 0)
  const pageBytes = readFileSync(root + (nameParent ? 'unlinked-name-parent-scan-page-checks.json' : 'unlinked-live-scan-page-checks.json')), analysisBytes = readFileSync(root + (nameParent ? 'unlinked-name-parent-scan-redirect-analysis.json' : 'unlinked-live-scan-redirect-analysis.json'))
  const pageChecks = JSON.parse(pageBytes), analysis = JSON.parse(analysisBytes)
  assert.equal(analysis.pageChecksSha256, sha(pageBytes)); assert.equal(pageChecks.manifestSha256, scan.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get().value)
  const parentEntities = {}
  if (nameParent) {
    const ids = [...new Set(analysis.rows.flatMap(row => [...row.sourceParents, ...row.targetParents]))].filter(id => /^Q\d+$/.test(id))
    for (let offset = 0; offset < ids.length; offset += 40) {
      const url = new URL('https://www.wikidata.org/w/api.php')
      for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: ids.slice(offset, offset + 40).join('|'), maxlag: '10' })) url.searchParams.set(key, value)
      const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; genus relationship verification)' }, signal: AbortSignal.timeout(30000) })
      assert.ok(response.ok); const data = await response.json(); assert.ok(!data.error, JSON.stringify(data.error)); Object.assign(parentEntities, data.entities)
    }
  }
  const values = (id, property) => (parentEntities[id]?.claims?.[property] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value).filter(Boolean)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), known = db.prepare('SELECT 1 FROM nodes WHERE id=?'), scanned = scan.prepare('SELECT item,status,col_ids FROM targets WHERE node=?')
  const badUrl = db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'), badItem = db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?')
  const exactLink = db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?')
  const heldUrl = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'), heldItem = db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  const existing = db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?'), groups = new Map()
  for (const row of analysis.rows) {
    const current = node.get(row.node), source = scanned.get(row.node), targetItem = `https://www.wikidata.org/entity/${row.actualItem}`
    if (!current || source?.status !== 'checked' || source.item !== row.item) continue
    if (row.actualItem === row.item || !row.targetNames.length || row.status !== 'identity-review') continue
    const direct = JSON.parse(source.col_ids).includes(row.node)
    const parent = current.parent_id ? node.get(current.parent_id) : null
    const originalName = current.name.split(/\s+/)
    const peerName = row.targetNames.find(name => { const parts = name.split(/\s+/); return originalName.length === 2 && parts.length === 2 && originalName[0] !== parts[0] && originalName[1].length >= 5 && originalName[1] === parts[1] })
    const peerGenus = nameParent && !direct && !exactLink.get(row.node) && current.rank === 'species' && row.sourceNames.includes(current.name) && row.sourceRanks.includes('Q7432') && row.targetRanks.includes('Q7432') && peerName && parent && row.sourceParents.some(sourceParent => values(sourceParent, 'P225').includes(parent.name) && row.targetParents.some(targetParent => values(sourceParent, 'P171').some(common => values(targetParent, 'P171').includes(common)))) && JSON.parse(source.col_ids).every(id => !known.get(id)) && row.targetCols.every(id => !known.get(id))
    const closePrefix = row.targetNames.some(name=>{let a=current.name.toLowerCase(),b=name.toLowerCase(),i=0;while(i<a.length&&i<b.length&&a[i]===b[i])i++;return i>=7})
    const path = value=>{const result=[];for(let i=0;i<15&&value;i++){result.push(value);value=value.parent_id?node.get(value.parent_id):null}return result}
    let relatedTarget
    if(treeRelatedRedirects && direct && current.rank==='species') for(const id of row.targetCols){const target=node.get(id),a=current.name.split(/\s+/),b=target?.name.split(/\s+/)??[];if(!target||target.id===current.id||target.rank!=='species'||a.length!==2||b.length!==2||a[0]===b[0]||a[1].length<5||a[1]!==b[1]||!row.targetNames.includes(target.name))continue;const targetAncestors=new Set(path(target).filter(x=>x.rank==='superfamily').map(x=>x.id));if(path(current).some(x=>x.rank==='superfamily'&&targetAncestors.has(x.id))){relatedTarget=target;break}}
    const relation = treeRelatedRedirects ? relatedTarget ? 'same-superfamily-other-node' : null : wikidataParents ? direct && row.sourceParents.includes(row.actualItem) ? 'wikidata-direct-parent-page' : null : wikidataSameParent ? direct && row.relationship === 'same-parent-rank-review' && closePrefix && row.targetCols.every(id => id === row.node || !known.get(id)) ? 'same-parent-rank-alternate' : null : direct && row.relationship === 'tree-parent' && current.parent_id && row.targetCols.includes(current.parent_id) ? 'tree-parent' : direct && row.relationship === 'same-parent-rank-review' && row.targetNames.some(name => similarTaxonNames(current.name, name)) && row.targetCols.every(id => id === row.node || !known.get(id)) ? 'same-parent-rank-alternate' : peerGenus ? 'same-epithet-other-genus' : null
    if (!relation || existing.get(row.node, targetItem, row.url) || heldUrl.get(row.node, row.url) || heldItem.get(row.node, targetItem) || badUrl.get(row.url) || badItem.get(row.url, targetItem)) continue
    if (wikidataParents || wikidataSameParent || treeRelatedRedirects) {
      const headers={'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; Wikidata parent verification)'}, u=new URL('https://www.wikidata.org/w/api.php'), w=new URL(`https://${row.locale}.wikipedia.org/w/api.php`)
      for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',props:'claims',ids:`${row.item}|${row.actualItem}`,maxlag:'10'}))u.searchParams.set(k,v)
      for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops',ppprop:'wikibase_item|disambiguation',redirects:'1',titles:row.title,maxlag:'10'}))w.searchParams.set(k,v)
      const [ur,wr]=await Promise.all([fetch(u,{headers,signal:AbortSignal.timeout(30000)}),fetch(w,{headers,signal:AbortSignal.timeout(30000)})]);assert.ok(ur.ok&&wr.ok);const [live,pages]=await Promise.all([ur.json(),wr.json()]);assert.ok(!live.error&&!pages.error)
      const value=(id,p)=>(live.entities[id]?.claims?.[p]??[]).filter(c=>c.rank!=='deprecated'&&c.mainsnak?.snaktype==='value').map(c=>c.mainsnak.datavalue.value?.id??c.mainsnak.datavalue.value).filter(Boolean)
      const page=pages.query.pages.find(p=>p.title===row.targetTitle)
      const related=treeRelatedRedirects ? value(row.actualItem,'P10585').includes(relatedTarget.id) && value(row.actualItem,'P225').includes(relatedTarget.name) : wikidataParents?value(row.item,'P171').includes(row.actualItem):value(row.item,'P171').some(id=>value(row.actualItem,'P171').includes(id))&&value(row.item,'P105').some(id=>value(row.actualItem,'P105').includes(id))
      if(!value(row.item,'P10585').includes(row.node)||!value(row.item,'P225').includes(current.name)||!related||!value(row.actualItem,'P225').some(n=>row.targetNames.includes(n))||(wikidataSameParent && value(row.actualItem,'P10585').some(id=>id!==row.node&&known.get(id)))||!page||page.missing||page.pageprops?.wikibase_item!==row.actualItem||Object.hasOwn(page.pageprops??{},'disambiguation'))continue
    }
    const key = `${row.node}\0${targetItem}`
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push({ ...row, targetItem, relation, relatedTarget, targetName: relation === 'same-epithet-other-genus' ? peerName : treeRelatedRedirects ? relatedTarget.name : row.targetNames[0] })
  }
  const candidates = [...groups.values()].map(rows => rows.find(row => row.url === preferredUrls(rows.map(value => value.url))[0]))
  if (!candidates.length) { console.log(JSON.stringify({ status: 'nothing-to-import', reviewedPages: analysis.rows.length })); process.exit(0) }
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('primary_related_source_sha256')?.value; assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, pageChecksSha256: sha(pageBytes), analysisSha256: sha(analysisBytes), exclusionsSha256: sha(exclusions), candidates, checkedAt }))
  writeFileSync(root + (treeRelatedRedirects ? 'unlinked-live-tree-related-proof.json' : wikidataSameParent ? 'unlinked-live-wikidata-same-parent-proof.json' : wikidataParents ? 'unlinked-live-wikidata-parent-proof.json' : nameParent ? 'unlinked-name-parent-scan-related-import-proof.json' : 'unlinked-live-scan-related-import-proof.json'), proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try { const insert = audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)'); for (const c of candidates) { const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, c.targetItem); if (old) { assert.ok(['matched', 'snapshot-matched'].includes(old.status)); assert.equal(old.actual_item, c.actualItem) } else insert.run(c.url, c.targetItem, c.locale, c.targetTitle, 'matched', c.targetTitle, c.actualItem, checkedAt) } audit.exec('COMMIT') } catch (error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get('primary_related_source_sha256').value, previous); const insert = db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)'); for (const c of candidates) insert.run(c.node, `https://www.wikidata.org/entity/${c.item}`, `https://${c.locale}.wikipedia.org/wiki/${encodeURIComponent(c.title.replaceAll(' ', '_'))}`, c.targetItem, c.url, c.targetName, JSON.stringify([c.relation]), JSON.stringify(c.targetCols)); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'primary_related_source_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', candidates: candidates.length, nodes: new Set(candidates.map(c => c.node)).size, proofSha256: sha(proof) }))
} finally { scan.close(); audit.close(); db.close() }
