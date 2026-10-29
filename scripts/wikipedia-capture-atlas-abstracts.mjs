import assert from 'node:assert/strict'
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
const local = resolve('.git/evo-wikipedia-col26-8')
mkdirSync(local, { recursive: true })
const checkpoint = resolve(local, 'atlas-abstracts.json')
const mapping = JSON.parse(readFileSync('public/wikipedia/mapping.json', 'utf8'))
const snapshots = existsSync(checkpoint) ? JSON.parse(readFileSync(checkpoint, 'utf8')) : {}
const titles = new Map()
for (const entry of Object.values(mapping.entries)) {
  if (entry.status !== 'matched') continue
  if (entry.title) titles.set(`en:${entry.title}`, { locale: 'en', title: entry.title })
  if (entry.zhTitle) titles.set(`zh:${entry.zhTitle}`, { locale: 'zh', title: entry.zhTitle })
}
for (const locale of ['en', 'zh']) {
  const pending = [...titles.entries()].filter(([key, value]) => value.locale === locale && !Object.hasOwn(snapshots, key))
  for (let offset = 0; offset < pending.length; offset += 20) {
    const batch = pending.slice(offset, offset + 20)
    const query = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', redirects: '1',
      titles: batch.map(([, value]) => value.title).join('|'), prop: 'extracts|info|revisions|pageprops', inprop: 'url',
      rvprop: 'ids|timestamp', exintro: '1', explaintext: '1', exlimit: '20' })
    const response = await fetch(`https://${locale}.wikipedia.org/w/api.php?${query}`, { signal: AbortSignal.timeout(30000),
      headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; local Wikipedia abstract snapshots)' } })
    if (!response.ok) throw new Error(`Wikipedia ${locale} HTTP ${response.status}; batch remains pending`)
    const data = await response.json()
    if (!Array.isArray(data.query?.pages) || data.continue) throw new Error(`Incomplete Wikipedia batch response: ${JSON.stringify({ continuation: data.continue, error: data.error, warnings: data.warnings })}`)
    const aliases = new Map([...(data.query.normalized ?? []), ...(data.query.redirects ?? [])].map(row => [row.from, row.to]))
    const pages = new Map(data.query.pages.map(page => [page.title, page]))
    for (const [key, value] of batch) {
      let title = value.title
      const seen = new Set()
      while (aliases.has(title) && !seen.has(title)) { seen.add(title); title = aliases.get(title) }
      const page = pages.get(title)
      if (!page || page.missing || page.ns !== 0 || Object.hasOwn(page.pageprops ?? {}, 'disambiguation') || !page.extract || !page.revisions?.[0]?.revid) {
        snapshots[key] = { status: 'unavailable', locale, requestedTitle: value.title, checkedAt: new Date().toISOString() }
        continue
      }
      const url = new URL(page.fullurl)
      assert.equal(url.origin, `https://${locale}.wikipedia.org`)
      snapshots[key] = { status: 'available', locale, requestedTitle: value.title, title: page.title, extract: page.extract,
        url: url.href, revisionId: page.revisions[0].revid, revisionTimestamp: page.revisions[0].timestamp,
        checkedAt: new Date().toISOString(), attributionUrl: `${url.origin}/w/index.php?title=${encodeURIComponent(page.title)}&action=history`,
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }
    }
    const temporary = checkpoint + '.tmp'
    writeFileSync(temporary, JSON.stringify(snapshots))
    renameSync(temporary, checkpoint)
    console.log(JSON.stringify({ locale, completed: Object.keys(snapshots).length, total: titles.size }))
    await new Promise(resolve => setTimeout(resolve, 1200))
  }
}
const total = Object.keys(snapshots).length
assert.equal(total, titles.size)
const output = { schemaVersion: 1, generatedAt: new Date().toISOString(), source: 'Wikipedia TextExtracts API', total,
  available: Object.values(snapshots).filter(row => row.status === 'available').length, snapshots }
writeFileSync('public/wikipedia/abstracts.json', JSON.stringify(output) + '\n')
console.log(JSON.stringify({ status: 'complete', total, available: output.available }))
