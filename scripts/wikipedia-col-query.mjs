import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { resolve } from 'node:path'

const db = new DatabaseSync(resolve('.git/evo-wikipedia-col26-8/inventory.sqlite'))
db.exec('PRAGMA busy_timeout=15000')
assert.equal(db.prepare("SELECT value FROM meta WHERE key='inventory_complete'").get()?.value, 'true', 'Complete the frozen inventory first')
db.exec('CREATE INDEX IF NOT EXISTS names_status ON names(status)')
const index = process.argv.indexOf('--batches')
const limit = index >= 0 ? Number(process.argv[index + 1]) : 100
assert.ok(Number.isInteger(limit) && limit >= 1 && limit <= 1000)
const sizeIndex = process.argv.indexOf('--batch-size')
const batchSize = sizeIndex >= 0 ? Number(process.argv[sizeIndex + 1]) : 200
assert.ok(Number.isInteger(batchSize) && batchSize >= 1 && batchSize <= 5000)
const next = db.prepare("SELECT name FROM names WHERE status='pending' ORDER BY rowid LIMIT ?")
const titleIndexReady = db.prepare("SELECT value FROM meta WHERE key='en_titles_complete'").get()?.value === 'true'
const preferred = titleIndexReady ? db.prepare("SELECT n.name FROM names n JOIN exact_english_titles t ON t.name=n.name WHERE n.status='pending' LIMIT ?") : null
const update = db.prepare("UPDATE names SET status='queried', candidates_json=?, checked_at=? WHERE name=? AND status='pending'")
let requests = 0, checked = 0, lastStart = 0, requestSize = batchSize, successfulBatches = 0
for (; requests < limit; requests++) {
  let names = preferred?.all(requestSize).map(row => row.name) ?? []
  if (!names.length) names = next.all(requestSize).map(row => row.name)
  if (!names.length) break
  const query = `SELECT ?name ?item ?rank ?col ?parentName ?article WHERE { VALUES ?name { ${names.map(name => JSON.stringify(name)).join(' ')} } ?item wdt:P225 ?name. OPTIONAL { ?item wdt:P105 ?rank. } OPTIONAL { ?item wdt:P10585 ?col. } OPTIONAL { ?item wdt:P171 ?parent. ?parent wdt:P225 ?parentName. } OPTIONAL { ?article schema:about ?item; schema:isPartOf ?site. FILTER(REGEX(STR(?site), '^https://[a-z0-9-]+[.]wikipedia[.]org/$')) } }`
  const delay = Math.max(0, 1200 - (Date.now() - lastStart))
  if (delay) await new Promise(resolve => setTimeout(resolve, delay))
  lastStart = Date.now()
  let response
  for (let attempt = 0; attempt < 4; attempt++) {
    response = await fetch('https://query.wikidata.org/sparql', {
      method: 'POST', body: new URLSearchParams({ format: 'json', query }),
      signal: AbortSignal.timeout(65000), headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy Wikipedia matching)' },
    })
    if (response.ok || ![429, 500, 502, 503, 504].includes(response.status) || attempt === 3) break
    const retryAfter = Number(response.headers.get('retry-after'))
    if (retryAfter > 30) throw new Error(`Wikidata requested retry after ${retryAfter}s; batch remains pending`)
    const waitMs = Math.min(30000, Math.max(5000 * 2 ** attempt, Number.isFinite(retryAfter) ? retryAfter * 1000 : 0))
    console.warn(`Wikidata HTTP ${response.status}; retrying pending batch in ${waitMs / 1000}s`)
    await response.body?.cancel()
    await new Promise(resolve => setTimeout(resolve, waitMs))
  }
  if (!response.ok) throw new Error(`Wikidata HTTP ${response.status}; batch remains pending`)
  let data
  try { data = await response.json() } catch (error) {
    if (requestSize <= 250) throw error
    requestSize = Math.max(250, Math.floor(requestSize / 2))
    successfulBatches = 0
    console.warn(`Incomplete Wikidata response; retrying pending names with batches of ${requestSize}`)
    continue
  }
  if (!Array.isArray(data.results?.bindings)) throw new Error('Invalid Wikidata response; batch remains pending')
  const records = new Map(names.map(name => [name, new Map()]))
  for (const result of data.results.bindings) {
    const name = result.name?.value, item = result.item?.value
    if (!records.has(name) || !/^http:\/\/www\.wikidata\.org\/entity\/(?:Q\d+|L\d+-S\d+)$/.test(item)) throw new Error(`Unexpected Wikidata identity: ${JSON.stringify({ name, item, known: records.has(name) })}`)
    if (/\/L\d+-S\d+$/.test(item)) continue
    const group = records.get(name)
    if (!group.has(item)) group.set(item, { item: item.replace('http://', 'https://'), ranks: [], colIds: [], parentNames: [], articles: [] })
    const candidate = group.get(item)
    if (result.rank?.value && !candidate.ranks.includes(result.rank.value)) candidate.ranks.push(result.rank.value)
    if (result.col?.value && !candidate.colIds.includes(result.col.value)) candidate.colIds.push(result.col.value)
    if (result.parentName?.value && !candidate.parentNames.includes(result.parentName.value)) candidate.parentNames.push(result.parentName.value)
    if (result.article?.value) {
      const url = new URL(result.article.value)
      if (url.protocol !== 'https:' || !/^[a-z0-9-]+\.wikipedia\.org$/.test(url.hostname) || !url.pathname.startsWith('/wiki/')) throw new Error('Unexpected article URL')
      if (!candidate.articles.includes(url.href)) candidate.articles.push(url.href)
    }
  }
  const at = new Date().toISOString()
  db.exec('BEGIN IMMEDIATE')
  try {
    for (const name of names) {
      const candidates = [...records.get(name).values()].map(candidate => ({ ...candidate, ranks: candidate.ranks.sort(), colIds: candidate.colIds.sort(), parentNames: candidate.parentNames.sort(), articles: candidate.articles.sort() }))
        .sort((a, b) => a.item.localeCompare(b.item))
      assert.equal(update.run(JSON.stringify(candidates), at, name).changes, 1)
    }
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  checked += names.length
  if (++successfulBatches >= 3 && requestSize < batchSize) {
    requestSize = Math.min(batchSize, requestSize * 2)
    successfulBatches = 0
  }
  if ((requests + 1) % 10 === 0) console.log(JSON.stringify({ batches: requests + 1, checked, remaining: db.prepare("SELECT COUNT(*) AS n FROM names WHERE status='pending'").get().n }))
}
const counts = db.prepare('SELECT status,COUNT(*) AS n FROM names GROUP BY status').all()
db.close()
console.log(JSON.stringify({ status: 'checkpoint', batches: requests, checked, counts }))
