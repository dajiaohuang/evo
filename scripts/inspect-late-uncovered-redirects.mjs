import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const input = JSON.parse(readFileSync('.git/evo-wikipedia-col26-8/late-uncovered-title-item-checks.json'))
const importing = process.argv.includes('--import')
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: !importing })
try {
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const known = db.prepare('SELECT 1 FROM nodes WHERE id=?')
  const existing = db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=?')
  const rankIds = { species: 'Q7432', genus: 'Q34740' }
  const rows = input.rows.filter(row => row.status === 'available' && row.item && row.claims && row.kind === 'accepted' && row.name === row.nodeInfo.name && rankIds[row.nodeInfo.rank] && row.claims.ranks.includes(rankIds[row.nodeInfo.rank]) && row.claims.names.length && !existing.get(row.node) && row.claims.colIds.every(id => !known.get(id)))
  const ids = [...new Set(rows.flatMap(row => row.claims.parents))].filter(id => /^Q\d+$/.test(id))
  const entities = {}
  for (let offset = 0; offset < ids.length; offset += 40) {
    const url = new URL('https://www.wikidata.org/w/api.php')
    for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: ids.slice(offset, offset + 40).join('|'), maxlag: '10' })) url.searchParams.set(key, value)
    const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; candidate parent verification)' }, signal: AbortSignal.timeout(30000) })
    assert.ok(response.ok); const data = await response.json(); assert.ok(!data.error); Object.assign(entities, data.entities)
  }
  const values = (id, prop = 'P225') => (entities[id]?.claims?.[prop] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value)
  const candidates = rows.flatMap(row => {
    const current = node.get(row.node), parent = current?.parent_id && node.get(current.parent_id)
    if (!parent) return []
    let relation = row.claims.parents.some(id => values(id).includes(parent.name)) ? 'same-parent-rank-redirect' : null
    if (!relation && current.rank === 'species') {
      const sourceParts = current.name.split(/\s+/)
      const targetName = row.claims.names.find(name => { const parts = name.split(/\s+/); return sourceParts.length === 2 && parts.length === 2 && sourceParts[0] !== parts[0] && sourceParts[1].length >= 4 && sourceParts[1] === parts[1] })
      if (targetName && row.claims.parents.some(id => values(id, 'P10585').some(col => { const targetParent = node.get(col); return targetParent?.rank === 'genus' && targetParent.name === targetName.split(/\s+/)[0] && targetParent.parent_id === parent.parent_id }))) relation = 'same-epithet-other-genus'
    }
    return relation ? [{ node: row.node, name: row.name, targetNames: row.claims.names, item: row.item, locale: row.locale, canonicalTitle: row.canonicalTitle, originalUrl: row.url, relation }] : []
  })
  if (importing && candidates.length) {
    const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
    try {
      const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
      checkPageAudit(audit, db, exclusions)
      const sha = bytes => createHash('sha256').update(bytes).digest('hex')
      const headers = { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; redirect candidate verification)' }
      const targetUrl = new URL('https://www.wikidata.org/w/api.php')
      for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: [...new Set(candidates.map(row => row.item))].join('|'), maxlag: '10' })) targetUrl.searchParams.set(key, value)
      const response = await fetch(targetUrl, { headers, signal: AbortSignal.timeout(30000) }); assert.ok(response.ok)
      const targets = await response.json(); assert.ok(!targets.error)
      const value = (id, property) => (targets.entities[id]?.claims?.[property] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value).filter(Boolean)
      const accepted = []
      for (const c of candidates) {
        const current = node.get(c.node), parent = node.get(current.parent_id), names = value(c.item, 'P225'), parents = value(c.item, 'P171'), colIds = value(c.item, 'P10585')
        const matchingParent = c.relation === 'same-parent-rank-redirect' ? parents.some(id => values(id).includes(parent.name)) : parents.some(id => values(id, 'P10585').some(col => { const targetParent = node.get(col); return targetParent?.rank === 'genus' && targetParent.parent_id === parent.parent_id && names.some(name => name.split(/\s+/)[0] === targetParent.name) }))
        if (!names.some(name => c.targetNames.includes(name)) || !value(c.item, 'P105').includes(rankIds[current.rank]) || colIds.some(id => known.get(id)) || !matchingParent) continue
        const pageUrl = new URL(`https://${c.locale}.wikipedia.org/w/api.php`)
        for (const [key, val] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', redirects: '1', titles: c.name, maxlag: '10' })) pageUrl.searchParams.set(key, val)
        const pageResponse = await fetch(pageUrl, { headers, signal: AbortSignal.timeout(30000) }); assert.ok(pageResponse.ok)
        const page = await pageResponse.json(); assert.ok(!page.error)
        const actual = page.query.pages.find(row => row.title === c.canonicalTitle)
        if (!actual || actual.missing || actual.pageprops?.wikibase_item !== c.item || Object.hasOwn(actual.pageprops ?? {}, 'disambiguation')) continue
        const url = `https://${c.locale}.wikipedia.org/wiki/${encodeURIComponent(c.canonicalTitle.replaceAll(' ', '_'))}`, item = `https://www.wikidata.org/entity/${c.item}`
        if (db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(c.node, url) || db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(c.node, item) || db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(url) || db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(url, item) || db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?').get(c.node)) continue
        accepted.push({ ...c, url, fullItem: item, colIds, targetName: names[0] })
      }
      if (accepted.length) {
        const previous = db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value
        const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, sourceSha256: sha(readFileSync('.git/evo-wikipedia-col26-8/late-uncovered-title-item-checks.json')), exclusionsSha256: sha(exclusions), accepted, checkedAt }))
        writeFileSync('.git/evo-wikipedia-col26-8/late-uncovered-peer-genus-proof.json', proof, { flag: 'wx' })
        audit.exec('BEGIN IMMEDIATE')
        try { for (const c of accepted) { const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, c.fullItem); if (old) { assert.ok(['matched', 'snapshot-matched'].includes(old.status)); assert.equal(old.actual_item, c.item) } else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(c.url, c.fullItem, c.locale, c.canonicalTitle, 'matched', c.canonicalTitle, c.item, checkedAt) } audit.exec('COMMIT') } catch (error) { audit.exec('ROLLBACK'); throw error }
        db.exec('BEGIN IMMEDIATE')
        try { assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value, previous); const insert = db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)'); for (const c of accepted) insert.run(c.node, `Wikipedia:${c.locale}:${c.name}`, c.originalUrl, c.fullItem, c.url, c.targetName, JSON.stringify([c.relation]), JSON.stringify(c.colIds)); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'primary_related_source_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
      }
      console.log(JSON.stringify({ status: 'imported', count: accepted.length, nodes: accepted.map(row => row.node) }))
    } finally { audit.close() }
  }
  console.log(JSON.stringify({ considered: rows.length, candidates }))
} finally { db.close() }
