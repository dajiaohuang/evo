import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { resolve } from 'node:path'
import { mergeCandidates } from './wikipedia-col-merge-candidates.mjs'

// Run after the name query, never concurrently with another Wikidata query.
const db = new DatabaseSync(resolve('.git/evo-wikipedia-col26-8/inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000;
  CREATE TABLE IF NOT EXISTS col_id_lookups (id TEXT PRIMARY KEY, status TEXT NOT NULL DEFAULT 'pending', checked_at TEXT);
  CREATE INDEX IF NOT EXISTS col_id_lookups_status ON col_id_lookups(status);`)
const blockedUntil = db.prepare("SELECT value FROM meta WHERE key='wikidata_not_before'").get()?.value
if (blockedUntil && Date.parse(blockedUntil) > Date.now()) throw new Error(`Wikidata rate limit active until ${blockedUntil}; batch remains pending`)
const initialized = db.prepare("SELECT value FROM meta WHERE key='col_id_lookups_initialized'").get()?.value === 'true'
if (!initialized) {
  db.exec("BEGIN IMMEDIATE; INSERT OR IGNORE INTO col_id_lookups(id) SELECT id FROM nodes; INSERT OR REPLACE INTO meta(key,value) VALUES('col_id_lookups_initialized','true'); COMMIT")
}
const argument = (flag, fallback) => {
  const index = process.argv.indexOf(flag)
  return index < 0 ? fallback : Number(process.argv[index + 1])
}
const limit = argument('--batches', 100), batchSize = argument('--batch-size', 2000)
assert.ok(Number.isSafeInteger(limit) && limit > 0 && limit <= 1000)
assert.ok(Number.isSafeInteger(batchSize) && batchSize > 0 && batchSize <= 5000)
const next = db.prepare("SELECT l.id,n.name FROM col_id_lookups l JOIN nodes n ON n.id=l.id JOIN names s ON s.name=n.name WHERE l.status='pending' AND s.status='queried' LIMIT ?")
const unresolvedNext = db.prepare("SELECT l.id,n.name FROM col_id_lookups l JOIN nodes n ON n.id=l.id JOIN names s ON s.name=n.name WHERE l.status='pending' AND s.status='queried' AND s.candidates_json='[]' LIMIT ?")
const readName = db.prepare('SELECT candidates_json FROM names WHERE name=?')
const updateName = db.prepare('UPDATE names SET candidates_json=?, abstract_queue_version=0 WHERE name=?')
const mark = db.prepare("UPDATE col_id_lookups SET status='queried',checked_at=? WHERE id=? AND status='pending'")
let batches = 0, checked = 0, lastStart = 0, requestSize = batchSize, successfulBatches = 0
for (; batches < limit; batches++) {
  let rows = unresolvedNext.all(requestSize)
  if (!rows.length) rows = next.all(requestSize)
  if (!rows.length) break
  const query = `SELECT ?id ?item ?rank ?col ?parentName ?article WHERE { VALUES ?id { ${rows.map(row => JSON.stringify(row.id)).join(' ')} } ?item wdt:P10585 ?id. OPTIONAL { ?item wdt:P105 ?rank. } OPTIONAL { ?item wdt:P10585 ?col. } OPTIONAL { ?item wdt:P171 ?parent. ?parent wdt:P225 ?parentName. } OPTIONAL { ?article schema:about ?item; schema:isPartOf ?site. FILTER(REGEX(STR(?site), '^https://[a-z0-9-]+[.]wikipedia[.]org/$')) } }`
  const delay = Math.max(0, 1200 - (Date.now() - lastStart))
  if (delay) await new Promise(resolve => setTimeout(resolve, delay))
  lastStart = Date.now()
  const response = await fetch('https://query.wikidata.org/sparql', { method: 'POST', body: new URLSearchParams({ format: 'json', query }), signal: AbortSignal.timeout(65000), headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy Wikipedia matching)' } })
  if (!response.ok) {
    const retryAfter = Number(response.headers.get('retry-after'))
    if (retryAfter > 0) {
      const until = new Date(Date.now() + retryAfter * 1000).toISOString()
      db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('wikidata_not_before',?)").run(until)
      throw new Error(`Wikidata HTTP ${response.status}, retry after ${until}; batch remains pending`)
    }
    throw new Error(`Wikidata HTTP ${response.status}; batch remains pending`)
  }
  let data
  try { data = await response.json() } catch (error) {
    if (requestSize <= 250) throw error
    requestSize = Math.max(250, Math.floor(requestSize / 2))
    successfulBatches = 0
    console.warn(`Incomplete Wikidata response; retrying pending IDs with batches of ${requestSize}`)
    continue
  }
  if (!Array.isArray(data.results?.bindings)) throw new Error('Invalid Wikidata response; batch remains pending')
  const byId = new Map(rows.map(row => [row.id, []]))
  for (const result of data.results.bindings) {
    const id = result.id?.value, item = result.item?.value
    if (!byId.has(id) || !/^http:\/\/www\.wikidata\.org\/entity\/Q\d+$/.test(item)) throw new Error(`Unexpected Wikidata identity: ${JSON.stringify({ id, item })}`)
    const candidate = { item: item.replace('http://', 'https://'), ranks: result.rank?.value ? [result.rank.value] : [], colIds: result.col?.value ? [result.col.value] : [], parentNames: result.parentName?.value ? [result.parentName.value] : [], articles: [] }
    if (result.article?.value) {
      const url = new URL(result.article.value)
      if (url.protocol !== 'https:' || !/^[a-z0-9-]+\.wikipedia\.org$/.test(url.hostname) || !url.pathname.startsWith('/wiki/')) throw new Error('Unexpected article URL')
      candidate.articles.push(url.href)
    }
    // The queried ID is an exact statement even when an OPTIONAL binding is absent.
    candidate.colIds.push(id)
    byId.get(id).push(candidate)
  }
  const at = new Date().toISOString()
  db.exec('BEGIN IMMEDIATE')
  try {
    const grouped = new Map()
    for (const row of rows) {
      if (!grouped.has(row.name)) grouped.set(row.name, [])
      grouped.get(row.name).push(...byId.get(row.id))
      assert.equal(mark.run(at, row.id).changes, 1)
    }
    for (const [name, incoming] of grouped) if (incoming.length) {
      const original = JSON.parse(readName.get(name).candidates_json)
      updateName.run(JSON.stringify(mergeCandidates(original, incoming)), name)
    }
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  checked += rows.length
  if (++successfulBatches >= 3 && requestSize < batchSize) {
    requestSize = Math.min(batchSize, requestSize * 2)
    successfulBatches = 0
  }
  if ((batches + 1) % 10 === 0) console.log(JSON.stringify({ batches: batches + 1, checked }))
}
console.log(JSON.stringify({ status: 'checkpoint', batches, checked, counts: db.prepare('SELECT status,COUNT(*) AS n FROM col_id_lookups GROUP BY status').all() }))
db.close()
