import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve, relative, isAbsolute, sep } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { gunzipSync, gzipSync } from 'node:zlib'
import { classify } from './wikipedia-col-identity.mjs'

const root = resolve('data/catalogue-of-life/releases/2026-08-20/registry')
const manifestBytes = readFileSync(join(root, 'manifest.json'))
const manifest = JSON.parse(manifestBytes)
const local = resolve('.git/evo-wikipedia-col26-8')
const option = process.argv.indexOf('--out')
assert.ok(option >= 0 && process.argv[option + 1], '--out is required')
const out = resolve(process.argv[option + 1])
const child = relative(local, out)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep), 'Output must be inside the local matching workspace')
assert.ok(!existsSync(out), 'Choose a new empty export path')
const db = new DatabaseSync(join(local, 'inventory.sqlite'), { readOnly: true })
assert.equal(db.prepare("SELECT value FROM meta WHERE key='inventory_complete'").get()?.value, 'true')
assert.equal(db.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get()?.value, createHash('sha256').update(manifestBytes).digest('hex'))
const queryName = db.prepare('SELECT status,candidates_json FROM names WHERE name=?')
const parentName = db.prepare('SELECT name FROM nodes WHERE id=?')
const article = db.prepare('SELECT item_id,status,snapshot_json FROM article_jobs WHERE url=?')
const exactTitle = db.prepare('SELECT status,snapshot_json FROM exact_title_jobs WHERE name=?')
const dumpedTitle = db.prepare('SELECT title FROM exact_english_titles WHERE name=?')
const preferredUrls = urls => [...urls].sort((a, b) => {
  const rank = url => new URL(url).hostname === 'zh.wikipedia.org' ? 0 : new URL(url).hostname === 'en.wikipedia.org' ? 1 : 2
  return rank(a) - rank(b) || a.localeCompare(b)
})
db.exec('BEGIN')
const stats = { totalNodes: manifest.hierarchy.counts.nodes, queriedNodes: 0, pendingNodes: 0, matchedWithAbstract: 0,
  matchedAwaitingAbstract: 0, matchedWithoutSitelink: 0, candidatesWithAbstract: 0, candidatesAwaitingAbstract: 0, ambiguous: 0, unresolved: 0 }
const shards = {}
mkdirSync(out, { recursive: true })
for (const source of manifest.hierarchy.nodes.files) {
  const bytes = readFileSync(join(root, source.path))
  assert.equal(createHash('sha256').update(bytes).digest('hex'), source.sha256, source.path)
  const rows = gunzipSync(bytes).toString('utf8').split('\n').filter(Boolean)
  assert.equal(rows.length, source.records)
  const entries = {}
  for (const line of rows) {
    const row = JSON.parse(line)
    const author = row.authorship?.trim()
    const name = author && row.scientificName.endsWith(author) ? row.scientificName.slice(0, -author.length).trim() : row.scientificName.trim()
    const result = queryName.get(name)
    if (!result || result.status !== 'queried') { stats.pendingNodes++; continue }
    stats.queriedNodes++
    const candidates = JSON.parse(result.candidates_json)
    const identity = classify({ ...row, parentName: row.parentId ? parentName.get(row.parentId)?.name : undefined }, candidates)
    const fallback = exactTitle.get(name)
    const savedFallback = fallback?.status === 'available' && fallback.snapshot_json ? JSON.parse(fallback.snapshot_json) : null
    const fallbackSnapshot = savedFallback && !['identity-conflict', 'unavailable'].includes(article.get(savedFallback.url)?.status) ? savedFallback : null
    const titleCandidate = !['ambiguous', 'unavailable'].includes(fallback?.status) ? dumpedTitle.get(name)?.title : undefined
    const titleCandidateUrl = titleCandidate ? `https://en.wikipedia.org/wiki/${encodeURIComponent(titleCandidate)}` : undefined
    const fallbackOption = fallbackSnapshot ? { item: fallbackSnapshot.wikidataItem ? `https://www.wikidata.org/entity/${fallbackSnapshot.wikidataItem}` : `Wikipedia:${fallbackSnapshot.title}`,
      parentNames: [], ranks: [], url: fallbackSnapshot.url, abstracts: [fallbackSnapshot] }
      : titleCandidateUrl && !['identity-conflict', 'unavailable'].includes(article.get(titleCandidateUrl)?.status) ? { item: `Wikipedia:${titleCandidate}`, parentNames: [], ranks: [],
        url: titleCandidateUrl, abstracts: [] } : null
    if (identity.status === 'unresolved' && fallbackOption) {
      entries[row.id] = { status: 'candidate', options: [fallbackOption] }
      stats.candidatesWithAbstract++
      continue
    }
    if (identity.status.startsWith('ambiguous') || identity.status === 'candidate-name') {
      const selected = identity.status === 'candidate-name' ? candidates.filter(candidate => candidate.item === identity.item) : candidates
      const options = selected.filter(candidate => candidate.articles.length).map(candidate => {
        const abstracts = []
        const usable = preferredUrls(candidate.articles.filter(url => !['identity-conflict', 'unavailable'].includes(article.get(url)?.status)))
        for (const url of usable) {
          const saved = article.get(url)
          if (saved?.item_id === candidate.item && saved.status === 'available' && saved.snapshot_json) abstracts.push(JSON.parse(saved.snapshot_json))
        }
        return { item: candidate.item, parentNames: candidate.parentNames, ranks: candidate.ranks, url: abstracts[0]?.url ?? usable[0], abstracts }
      }).filter(option => option.url)
      if (fallbackOption && !options.some(option => option.url === fallbackOption.url)) options.push(fallbackOption)
      if (options.length) {
        entries[row.id] = { status: 'candidate', options }
        if (options.some(option => option.abstracts.length)) stats.candidatesWithAbstract++
        else stats.candidatesAwaitingAbstract++
      } else { entries[row.id] = { status: 'ambiguous' }; stats.ambiguous++ }
      continue
    }
    if (!['matched-col-id', 'matched-name-parent-rank'].includes(identity.status)) { entries[row.id] = { status: 'unresolved' }; stats.unresolved++; continue }
    const usableArticles = preferredUrls(identity.articles.filter(url => !['identity-conflict', 'unavailable'].includes(article.get(url)?.status)))
    if (!usableArticles.length) {
      if (fallbackOption && fallbackOption.item === identity.item) {
        entries[row.id] = { status: 'matched', item: identity.item, matchKind: identity.status, url: fallbackOption.url, abstracts: fallbackOption.abstracts }
        stats.matchedWithAbstract++
      } else if (fallbackOption) {
        entries[row.id] = { status: 'candidate', options: [fallbackOption] }
        stats.candidatesWithAbstract++
      } else { entries[row.id] = { status: 'unresolved', item: identity.item, matchKind: identity.status }; stats.matchedWithoutSitelink++ }
      continue
    }
    const available = []
    for (const url of usableArticles) {
      const saved = article.get(url)
      if (saved?.item_id === identity.item && saved.status === 'available' && saved.snapshot_json) available.push(JSON.parse(saved.snapshot_json))
    }
    if (fallbackOption?.item === identity.item && !available.some(snapshot => snapshot.url === fallbackOption.url)) available.push(...fallbackOption.abstracts)
    if (!available.length) {
      entries[row.id] = { status: 'abstract-pending', item: identity.item, matchKind: identity.status, url: usableArticles[0] }
      stats.matchedAwaitingAbstract++
    } else {
      entries[row.id] = { status: 'matched', item: identity.item, matchKind: identity.status, url: available[0].url, abstracts: available }
      stats.matchedWithAbstract++
    }
  }
  // Publish links only. Previously captured extracts remain local and are not
  // included in the generated data; the existing client supports link-only
  // abstract-pending entries and candidate options without abstracts.
  for (const entry of Object.values(entries)) {
    if (entry.status === 'matched') {
      entry.status = 'abstract-pending'
      delete entry.abstracts
    }
    for (const option of entry.options ?? []) option.abstracts = []
  }
  const raw = Buffer.from(JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8', entries }))
  const output = gzipSync(raw, { level: 6, mtime: 0 })
  const outputHash = createHash('sha256').update(output).digest('hex')
  const path = `id-${source.prefix}-${outputHash.slice(0, 16)}.json.gz`
  writeFileSync(join(out, path), output)
  shards[source.prefix] = { path, sha256: outputHash, bytes: output.length,
    sourceSha256: createHash('sha256').update(raw).digest('hex'), sourceBytes: raw.length, entries: Object.keys(entries).length }
  console.log(`${path}: ${Object.keys(entries).length} checked`)
}
assert.equal(stats.queriedNodes + stats.pendingNodes, stats.totalNodes)
stats.matchedAwaitingAbstract += stats.matchedWithAbstract
stats.matchedWithAbstract = 0
stats.candidatesAwaitingAbstract += stats.candidatesWithAbstract
stats.candidatesWithAbstract = 0
db.exec('COMMIT')
db.close()
writeFileSync(join(out, 'manifest.json'), JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8', contentMode: 'links-only', generatedAt: new Date().toISOString(),
  registryManifestSha256: createHash('sha256').update(manifestBytes).digest('hex'), status: stats.pendingNodes ? 'partial' : 'queried', stats, shards }, null, 2) + '\n')
console.log(JSON.stringify({ status: 'exported', out, stats }))
