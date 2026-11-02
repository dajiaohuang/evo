import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { similarTaxonNames } from './wikipedia-col-redirect-similarity.mjs'

const root = '.git/evo-wikipedia-col26-8/', sha = b => createHash('sha256').update(b).digest('hex')
const descendantMode = process.argv.includes('--descendants')
const peerMode = process.argv.includes('--peers')
const homonymMode = process.argv.includes('--homonym-peers')
const hybridPeerMode = process.argv.includes('--hybrid-name-peer')
const rankConflictMode = process.argv.includes('--rank-conflicts')
assert.ok(Number(descendantMode) + Number(peerMode) + Number(homonymMode) + Number(hybridPeerMode) + Number(rankConflictMode) <= 1)
const inputBytes = readFileSync(root + (hybridPeerMode ? 'late-hybrid-title-items.json' : 'late-uncovered-title-item-checks.json')), input = JSON.parse(inputBytes)
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), byName = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?'), has = db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=?'), exact = db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?')
  const grouped = new Map()
  for (const row of input.rows) {
    if (row.status !== 'available' || !row.claims || row.kind !== 'accepted' || row.name !== row.nodeInfo.name || has.get(row.node) || exact.get(row.node)) continue
    let current = node.get(row.node), ancestor
    if (rankConflictMode) {
      const current=node.get(row.node),rankIds={genus:'Q34740',species:'Q7432'}
      if(rankIds[current.rank] && row.claims.names.includes(current.name) && row.claims.ranks.includes(rankIds[current.rank])) for(const id of row.claims.colIds){const target=node.get(id);if(target&&target.id!==current.id&&(target.parent_id===current.id||current.parent_id===target.id)){ancestor=target;break}}
    } else if (hybridPeerMode) {
      const current=node.get(row.node)
      if (row.claims.names.includes(current.name)) for(const id of row.claims.colIds) { const target=node.get(id); if(target && target.id!==current.id && target.rank===current.rank && target.parent_id && target.parent_id===current.parent_id){ancestor=target;break} }
    } else if (homonymMode) {
      const current = node.get(row.node)
      const ancestors = value => { const result=[]; for(let i=0;i<15 && value;i++){ result.push(value); value=value.parent_id ? node.get(value.parent_id) : null } return result }
      for (const name of row.claims.names) for (const target of byName.all(name)) {
        if (target.id === current.id || !row.claims.colIds.includes(target.id) || target.name !== current.name || target.rank !== current.rank) continue
        const targetAncestors = new Set(ancestors(target).filter(a=>a.rank==='family').map(a=>a.id))
        if (ancestors(current).some(a=>a.rank==='family' && targetAncestors.has(a.id))) { ancestor = target; break }
      }
    } else if (peerMode) {
      for (const name of row.claims.names) for (const target of byName.all(name)) {
        const current = node.get(row.node)
        const sameGenus = current.rank === 'species' && current.name.split(/\s+/)[0] === target.name.split(/\s+/)[0]
        if (target.id !== current.id && row.claims.colIds.includes(target.id) && target.rank === current.rank && target.parent_id && target.parent_id === current.parent_id && (sameGenus || similarTaxonNames(current.name,target.name))) { ancestor = target; break }
      }
    } else if (!descendantMode) {
      for (let i = 0; i < 10 && current?.parent_id; i++) { current = node.get(current.parent_id); if (row.claims.colIds.includes(current?.id) && row.claims.names.includes(current.name)) { ancestor = current; break } }
    } else {
      for (const name of row.claims.names) for (const target of byName.all(name)) {
        if (!row.claims.colIds.includes(target.id)) continue
        let parent = target
        for (let i = 0; i < 10 && parent?.parent_id; i++) { parent = node.get(parent.parent_id); if (parent?.id === row.node) { ancestor = target; break } }
        if (ancestor) break
      }
    }
    if (!ancestor || (!rankConflictMode && row.canonicalTitle === row.name && ancestor.name !== row.name)) continue
    const url = `https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.canonicalTitle.replaceAll(' ', '_'))}`
    if (!grouped.has(row.node)) grouped.set(row.node, [])
    grouped.get(row.node).push({ ...row, ancestor, targetUrl: url, targetItem: `https://www.wikidata.org/entity/${row.item}` })
  }
  const proposals = [...grouped.values()].map(rows => rows.find(row => row.targetUrl === preferredUrls(rows.map(value => value.targetUrl))[0]))
  const headers = { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; ancestor page verification)' }, accepted = []
  for (const c of proposals) {
    const itemUrl = new URL('https://www.wikidata.org/w/api.php')
    for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: c.item, maxlag: '10' })) itemUrl.searchParams.set(key, value)
    const pageUrl = new URL(`https://${c.locale}.wikipedia.org/w/api.php`)
    for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', redirects: '1', titles: hybridPeerMode ? c.matchedTitle : c.name, maxlag: '10' })) pageUrl.searchParams.set(key, value)
    const [itemResponse, pageResponse] = await Promise.all([fetch(itemUrl, { headers, signal: AbortSignal.timeout(30000) }), fetch(pageUrl, { headers, signal: AbortSignal.timeout(30000) })]); assert.ok(itemResponse.ok && pageResponse.ok)
    const [itemData, pageData] = await Promise.all([itemResponse.json(), pageResponse.json()]); assert.ok(!itemData.error && !pageData.error)
    const values = prop => (itemData.entities[c.item]?.claims?.[prop] ?? []).filter(v => v.rank !== 'deprecated' && v.mainsnak?.snaktype === 'value').map(v => v.mainsnak.datavalue.value?.id ?? v.mainsnak.datavalue.value).filter(Boolean)
    const page = pageData.query.pages.find(value => value.title === c.canonicalTitle)
    if (peerMode && !pageData.query.redirects?.length) continue
    const rankIds={genus:'Q34740',species:'Q7432'}
    if (!values('P10585').includes(c.ancestor.id) || !values('P225').includes(hybridPeerMode || rankConflictMode ? c.name : c.ancestor.name) || (rankConflictMode&&!values('P105').includes(rankIds[node.get(c.node).rank])) || !page || page.missing || page.pageprops?.wikibase_item !== c.item || Object.hasOwn(page.pageprops ?? {}, 'disambiguation')) continue
    if (db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(c.node, c.targetUrl) || db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(c.node, c.targetItem) || db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(c.targetUrl) || db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(c.targetUrl, c.targetItem)) continue
    accepted.push({ ...c, liveColIds: values('P10585') })
  }
  if (!accepted.length) { console.log(JSON.stringify({ status: 'nothing-to-import', proposals: proposals.length })); process.exit(0) }
  const previous = db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value, checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ previous, sourceSha256: sha(inputBytes), exclusionsSha256: sha(exclusions), accepted, checkedAt }))
  writeFileSync(root + (rankConflictMode ? 'late-uncovered-rank-conflict-proof.json' : hybridPeerMode ? 'late-hybrid-name-peer-proof.json' : homonymMode ? 'late-uncovered-homonym-peer-proof.json' : peerMode ? 'late-uncovered-peer-proof.json' : descendantMode ? 'late-uncovered-descendant-proof.json' : 'late-uncovered-ancestor-proof.json'), proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try { for (const c of accepted) { const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.targetUrl, c.targetItem); if (old) { assert.ok(['matched', 'snapshot-matched'].includes(old.status)); assert.equal(old.actual_item, c.item) } else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(c.targetUrl, c.targetItem, c.locale, c.canonicalTitle, 'matched', c.canonicalTitle, c.item, checkedAt) } audit.exec('COMMIT') } catch (error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value, previous); const insert = db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)'); for (const c of accepted) insert.run(c.node, `Wikipedia:${c.locale}:${c.name}`, c.url, c.targetItem, c.targetUrl, c.ancestor.name, JSON.stringify([rankConflictMode ? 'same-name-rank-col-conflict' : hybridPeerMode ? 'same-name-other-tree-node' : homonymMode ? 'same-name-family-peer' : peerMode ? 'tree-peer-redirect' : descendantMode ? 'tree-descendant-page' : 'tree-ancestor-page']), JSON.stringify(c.liveColIds)); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'primary_related_source_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', proposals: proposals.length, nodes: accepted.map(c => c.node), proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
