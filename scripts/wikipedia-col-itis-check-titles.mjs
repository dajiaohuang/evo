import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'

const root = '.git/evo-wikipedia-col26-8/'
const casefold = process.argv.includes('--casefold')
const mddIoc = process.argv.includes('--mdd-ioc')
assert.ok(!(casefold&&mddIoc))
const bytes = readFileSync(root + (mddIoc ? 'mdd-ioc-vernacular-title-candidates.json' : casefold ? 'itis-vernacular-casefold-candidates.json' : 'itis-vernacular-title-candidates-expanded.json'))
const sourceSha256 = createHash('sha256').update(bytes).digest('hex')
const candidates = JSON.parse(bytes).matches
const results = []
let last = 0
for (const locale of [...new Set(candidates.map(x => x.locale))].sort()) {
  const titles = [...new Set(candidates.filter(x => x.locale === locale).map(x => x.title))]
  for (let i = 0; i < titles.length; i += 50) {
    const batch = titles.slice(i, i + 50)
    const delay = Math.max(0, 1500 - (Date.now() - last))
    if (delay) await new Promise(resolve => setTimeout(resolve, delay))
    const query = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', redirects: '1', titles: batch.join('|'), prop: 'pageprops', maxlag: '5' })
    last = Date.now()
    const response = await fetch(`https://${locale}.wikipedia.org/w/api.php?${query}`, { signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; article title verification)' } })
    assert.equal(response.status, 200, `${locale} HTTP status`)
    const data = await response.json()
    assert.ok(!data.error && !data.continue, JSON.stringify(data.error ?? data.continue))
    assert.ok(Array.isArray(data.query?.pages))
    const aliases = new Map([...(data.query.normalized ?? []), ...(data.query.redirects ?? [])].map(x => [x.from, x.to]))
    const pages = new Map(data.query.pages.map(x => [x.title, x]))
    for (const requested of batch) {
      let title = requested
      const seen = new Set()
      while (aliases.has(title) && !seen.has(title)) { seen.add(title); title = aliases.get(title) }
      const page = pages.get(title)
      const status = !page || page.missing || page.ns !== 0 ? 'unavailable' : Object.hasOwn(page.pageprops ?? {}, 'disambiguation') ? 'disambiguation' : 'available'
      results.push({ locale, requested, title, status, item: page?.pageprops?.wikibase_item ?? null })
    }
    console.log(JSON.stringify({ locale, checked: Math.min(i + batch.length, titles.length), total: titles.length }))
  }
}
writeFileSync(root + (mddIoc ? 'mdd-ioc-vernacular-title-checks.json' : `itis-vernacular-title-checks${casefold ? '-casefold' : ''}.json`), JSON.stringify({ sourceSha256, checkedAt: new Date().toISOString(), results }))
console.log(JSON.stringify({ status: 'complete', counts: Object.fromEntries(['available', 'unavailable', 'disambiguation'].map(s => [s, results.filter(x => x.status === s).length])) }))
