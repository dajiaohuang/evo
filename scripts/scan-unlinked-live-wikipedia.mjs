import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'

const root = '.git/evo-wikipedia-col26-8/', published = root + 'published-data-reviewed-20261031/'
const manifestBytes = readFileSync(published + 'manifest.json'), manifest = JSON.parse(manifestBytes)
assert.equal(manifest.contentMode, 'links-only')
const manifestHash = createHash('sha256').update(manifestBytes).digest('hex')
const sites = new Set(JSON.parse(readFileSync(root + 'sources/wikipedia-projects.json')).projects.map(project => project.dbname))
const mode = process.argv.includes('--name-parent') ? 'matched-name-parent-rank' : 'matched-col-id'
const db = new DatabaseSync(root + (mode === 'matched-col-id' ? 'unlinked-live-wikipedia-scan.sqlite' : 'unlinked-name-parent-wikipedia-scan.sqlite'))
db.exec("PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS meta(key TEXT PRIMARY KEY,value TEXT NOT NULL); CREATE TABLE IF NOT EXISTS targets(node TEXT PRIMARY KEY,item TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',col_ids TEXT,links TEXT,checked_at TEXT)")
const meta = db.prepare('SELECT value FROM meta WHERE key=?')
try {
  const existingHash = meta.get('manifest_sha256')?.value
  if (existingHash) assert.equal(existingHash, manifestHash, 'Checkpoint belongs to another manifest')
  else {
    db.exec('BEGIN IMMEDIATE')
    try {
      const insert = db.prepare('INSERT INTO targets(node,item) VALUES(?,?)')
      for (const shard of Object.values(manifest.shards)) {
        const compressed = readFileSync(published + shard.path)
        assert.equal(createHash('sha256').update(compressed).digest('hex'), shard.sha256)
        for (const [node, entry] of Object.entries(JSON.parse(gunzipSync(compressed)).entries)) {
          const item = /^https:\/\/www\.wikidata\.org\/entity\/(Q\d+)$/.exec(entry.item ?? '')?.[1]
          if (entry.status === 'unresolved' && entry.matchKind === mode && item) insert.run(node, item)
        }
      }
      db.prepare('INSERT INTO meta VALUES(?,?)').run('manifest_sha256', manifestHash)
      db.prepare('INSERT INTO meta VALUES(?,?)').run('match_mode', mode)
      db.prepare('INSERT INTO meta VALUES(?,?)').run('initialized_at', new Date().toISOString())
      db.exec('COMMIT')
    } catch (error) { db.exec('ROLLBACK'); throw error }
  }
  const counts = () => db.prepare("SELECT COUNT(*) total, SUM(status='checked') checked, SUM(status='checked' AND links <> '[]') with_links FROM targets").get()
  if (meta.get('match_mode')) assert.equal(meta.get('match_mode').value, mode, 'Checkpoint uses another matching mode')
  console.log(JSON.stringify({ status: 'checkpoint-ready', mode, ...counts() }))
  const take = db.prepare("SELECT node,item FROM targets WHERE status='pending' ORDER BY node LIMIT 40")
  const save = db.prepare("UPDATE targets SET status='checked',col_ids=?,links=?,checked_at=? WHERE node=? AND status='pending'")
  let batches = 0
  for (;;) {
    const rows = take.all(); if (!rows.length) break
    const url = new URL('https://www.wikidata.org/w/api.php')
    for (const [k, v] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'sitelinks|claims', ids: [...new Set(rows.map(row => row.item))].join('|'), maxlag: '10' })) url.searchParams.set(k, v)
    let data
    for (let attempt = 0; attempt < 4; attempt++) {
      try {
        const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; Wikipedia link inventory)' }, signal: AbortSignal.timeout(30000) })
        if (!response.ok) throw new Error(`Wikidata HTTP ${response.status}`)
        data = await response.json(); if (data.error) throw new Error(`Wikidata ${data.error.code}: ${data.error.info}`)
        break
      } catch (error) {
        if (attempt === 3) throw error
        await new Promise(resolve => setTimeout(resolve, 3000 * (attempt + 1)))
      }
    }
    const checkedAt = new Date().toISOString()
    db.exec('BEGIN IMMEDIATE')
    try {
      for (const row of rows) {
        const entity = data.entities[row.item]
        if (!entity || entity.missing !== undefined || entity.redirects) throw new Error(`Missing or redirected entity ${row.item}`)
        const colIds = (entity.claims?.P10585 ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value)
        const links = Object.entries(entity.sitelinks ?? {}).filter(([site]) => sites.has(site)).map(([site, value]) => ({ site, title: value.title }))
        assert.equal(save.run(JSON.stringify(colIds), JSON.stringify(links), checkedAt, row.node).changes, 1)
      }
      db.exec('COMMIT')
    } catch (error) { db.exec('ROLLBACK'); throw error }
    batches++
    if (batches % 20 === 0) console.log(JSON.stringify({ status: 'checking', ...counts() }))
  }
  console.log(JSON.stringify({ status: 'complete', ...counts() }))
} finally { db.close() }
