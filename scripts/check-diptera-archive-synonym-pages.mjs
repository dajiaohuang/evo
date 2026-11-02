import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'

const root = '.git/evo-wikipedia-col26-8/'
const input = readFileSync(root + 'diptera-archive-synonym-title-candidates-20261031.json')
const candidates = JSON.parse(input), checks = []
for (const row of candidates.matches) row.locale = new URL(row.url).hostname.split('.')[0]
const locales = [...new Set(candidates.matches.map(row => row.locale))].sort()
for (const locale of locales) {
  assert.match(locale, /^[a-z0-9-]+$/)
  const rows = candidates.matches.filter(row => row.locale === locale)
  const titles = [...new Set(rows.map(row => row.matchedTitle))]
  for (let offset = 0; offset < titles.length; offset += 40) {
    const selected = titles.slice(offset, offset + 40)
    const url = new URL(`https://${locale}.wikipedia.org/w/api.php`)
    for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: selected.join('|'), redirects: '1', maxlag: '5' })) url.searchParams.set(key, value)
    const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; reptile vernacular link identity verification)' }, signal: AbortSignal.timeout(30000) })
    if (!response.ok) throw new Error(`${locale} HTTP ${response.status}`)
    const data = await response.json(); if (data.error) throw new Error(JSON.stringify(data.error))
    const aliases = new Map([...(data.query.normalized ?? []), ...(data.query.redirects ?? [])].map(row => [row.from, row.to]))
    const pages = new Map(data.query.pages.map(row => [row.title, row]))
    for (const row of rows.filter(value => selected.includes(value.matchedTitle))) {
      let title = row.matchedTitle; const seen = new Set()
      while (aliases.has(title) && !seen.has(title)) { seen.add(title); title = aliases.get(title) }
      const page = pages.get(title), item = page?.pageprops?.wikibase_item ?? null
      checks.push({ ...row, canonicalTitle: title, item, status: !page || page.missing ? 'missing' : Object.hasOwn(page.pageprops ?? {}, 'disambiguation') ? 'disambiguation' : 'available' })
    }
  }
  console.log(JSON.stringify({ locale, checked: rows.length }))
}
const proof = { sourceSha256: createHash('sha256').update(input).digest('hex'), checkedAt: new Date().toISOString(), checks }
writeFileSync(root + 'diptera-archive-synonym-page-checks-20261031.json', JSON.stringify(proof), { flag: 'wx' })
console.log(JSON.stringify({ status: 'checked', rows: checks.length, nodes: new Set(checks.map(row => row.node)).size, available: checks.filter(row => row.status === 'available').length, unkeyed: checks.filter(row => row.status === 'available' && !row.item).length, items: new Set(checks.map(row => row.item).filter(Boolean)).size }))
