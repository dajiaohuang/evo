import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { chromium } from '@playwright/test'
import { readerInlineParts, paragraphParts } from '../src/utils/nodeReading.mjs'

const arg = name => { const i = process.argv.indexOf(name); return i < 0 ? null : process.argv[i + 1] }
const base = new URL(arg('--base') ?? 'http://127.0.0.1:4176/evo/nodes/')
const output = resolve(arg('--out'))
const publicRoot = resolve(arg('--site') ?? 'public/nodes')
const manifest = JSON.parse(await readFile(join(publicRoot, 'manifest.json'), 'utf8'))
const index = JSON.parse(gunzipSync(await readFile(join(publicRoot, manifest.directory.path))))
const samples = [
  index.find(row => row.id === '9ce61f2c-bfe4-5129-ad7c-bad3259fcf43'),
  index.find(row => row.key === 'COL:8GNQF'),
  index.find(row => row.locales.length === 0),
].filter(Boolean)
assert.equal(samples.length, 3)
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1365, height: 900 }, serviceWorkers: 'block' })
const errors = [], checks = []
page.on('pageerror', error => errors.push(error.message))
try {
  await page.goto(base.href, { waitUntil: 'domcontentloaded' })
  await page.waitForFunction(() => document.querySelectorAll('.card').length === 50 || document.querySelector('.error'), undefined, { timeout: 60000 })
  assert.equal(await page.locator('.error').count(), 0, await page.locator('main').innerText())
  assert.ok((await page.locator('[role=status]').innerText()).includes(manifest.nodes.toLocaleString()))
  checks.push('Full directory count and bounded first page')
  await page.getByRole('searchbox').fill('Drypetes amazonica')
  await page.getByRole('button', { name: '查找', exact: true }).click()
  await page.waitForFunction(() => document.querySelectorAll('.card').length === 1)
  assert.match(await page.locator('.card').innerText(), /Drypetes amazonica/)
  await page.locator('.card').click()
  await page.waitForSelector('.article .body', { timeout: 60000 })
  assert.equal(await page.locator('h1').innerText(), 'Drypetes amazonica')
  checks.push('Search and open current authored node')
  for (const sample of samples) {
    const records = JSON.parse(gunzipSync(await readFile(join(publicRoot, sample.shard))))
    const record = records.find(row => row.id === sample.id)
    const url = new URL(base); url.search = new URLSearchParams({ key: sample.key ?? sample.id, lang: 'zh' })
    await page.goto(url.href, { waitUntil: 'domcontentloaded' })
    await page.waitForSelector('.article .body', { timeout: 60000 })
    for (const locale of ['zh', 'en']) {
      if (locale === 'en') {
        await page.locator('#language').click()
        await page.waitForSelector('.article .body', { timeout: 60000 })
      }
      const expected = record.content.pages[locale]?.length ? record.content.pages[locale] : Object.values(record.content.pages).find(value => value.length) ?? []
      const actual = await page.locator('.body section').evaluateAll(sections => sections.map(section => ({ title: section.querySelector('h2').textContent, paragraphs: [...section.querySelectorAll('p')].map(p => p.textContent) })))
      const plain = text => readerInlineParts(text).map(part => part.text).join('')
      assert.deepEqual(actual, expected.map(section => ({ title: plain(section.title), paragraphs: paragraphParts(section.body).map(plain) })))
      assert.equal(await page.locator('.source-list a[href^="javascript:"]').count(), 0)
      checks.push({ node: sample.id, locale, exactSections: expected.length })
    }
    if (sample === samples[0]) {
      await page.screenshot({ path: output + '.desktop.png', fullPage: false })
      await page.setViewportSize({ width: 390, height: 844 })
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
      await page.screenshot({ path: output + '.mobile.png', fullPage: false })
      checks.push('390px mobile viewport has no page overflow')
      await page.setViewportSize({ width: 1365, height: 900 })
    }
  }
  const linked = new URL(base); linked.search = '?id=00b25b53-cc3a-5ae0-993d-210339a69aac&lang=en'
  await page.goto(linked.href, { waitUntil: 'domcontentloaded' })
  await page.waitForSelector('.body a[href="https://doi.org/10.6084/m9.figshare.4644424.v5"]', { timeout: 60000 })
  checks.push('Recorded Markdown source link opens its exact DOI target')
  const table = new URL(base); table.search = '?id=2fc969a5-6754-53c1-a841-46b532c7224c&lang=zh'
  await page.goto(table.href, { waitUntil: 'domcontentloaded' })
  await page.waitForSelector('.body table', { timeout: 60000 })
  assert.equal(await page.locator('.body table tbody tr').count(), 4)
  await page.setViewportSize({ width: 390, height: 844 })
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
  checks.push('Recorded four-specimen table remains within the mobile viewport')
  const unknown = new URL(base); unknown.search = '?id=missing-node&lang=en'
  await page.goto(unknown.href, { waitUntil: 'domcontentloaded' })
  await page.waitForSelector('.error', { timeout: 60000 })
  assert.equal(await page.locator('.article').count(), 0)
  checks.push('Unknown exact ID does not fall back to another node')
  assert.deepEqual(errors, [])
  const result = { status: 'passed', checkedAt: new Date().toISOString(), base: base.href, nodes: manifest.nodes, languagePages: manifest.languagePages, checks, browserErrors: errors }
  await writeFile(output, JSON.stringify(result, null, 2) + '\n', { flag: 'wx' })
  console.log(JSON.stringify(result))
} finally { await browser.close() }
