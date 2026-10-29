import assert from 'node:assert/strict'
import { writeFileSync } from 'node:fs'
import { chromium } from '@playwright/test'
const base = new URL(process.argv[2])
const browser = await chromium.launch({ headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' })
  const wikipediaRequests = []
  page.on('request', request => { if (/^https:\/\/[^/]*wikipedia\.org\//.test(request.url())) wikipediaRequests.push(request.url()) })
  await page.goto(new URL('#/home?view=tree', base).href)
  const node = page.locator('svg [data-node-id="pan"]')
  await node.waitFor({ state: 'attached', timeout: 30000 })
  await node.focus()
  await node.dispatchEvent('keydown', { key: 'Enter' })
  const dialog = page.getByRole('dialog')
  await dialog.waitFor({ state: 'visible' })
  await dialog.locator('.wikipedia-window__body p[lang]').waitFor({ timeout: 25000 })
  const url = await dialog.locator('footer a').getAttribute('href')
  assert.match(url, /^https:\/\/(?:en|zh)\.wikipedia\.org\/wiki\//)
  assert.ok(await dialog.locator('.wikipedia-window__body p[lang]').textContent())
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
  await page.keyboard.press('Escape')
  assert.equal(await dialog.count(), 0)
  assert.ok(await node.evaluate(element => element === document.activeElement))
  assert.deepEqual(wikipediaRequests, [])
  await page.getByRole('button', { name: /打开全量分类树|Open full catalogue tree/ }).click()
  await page.getByRole('tree', { name: /可展开分类树|Expandable catalogue tree/ }).waitFor({ state: 'visible', timeout: 30000 })
  await page.getByLabel(/搜索名称|Search names/).fill('Acer crassum')
  await page.locator('.backend-tree__results button').filter({ hasText: '9487' }).click()
  const selected = page.locator('.backend-tree__path a').last()
  await selected.waitFor({ state: 'visible' })
  await selected.click()
  const colDialog = page.getByRole('dialog')
  await colDialog.locator('.wikipedia-window__body p[lang]').waitFor({ timeout: 30000 })
  assert.ok(await colDialog.locator('.wikipedia-window__body p[lang]').textContent())
  assert.deepEqual(wikipediaRequests, [])
  const result = { status: 'passed', checkedAt: new Date().toISOString(), base: base.href, articleUrl: url,
    checks: ['atlas selection', 'locally stored Wikipedia text', 'canonical article link', '390px viewport', 'Escape closes', 'focus restored', 'full catalogue search', 'local catalogue abstract', 'no direct browser requests to Wikipedia'] }
  if (process.argv[3]) writeFileSync(process.argv[3], JSON.stringify(result, null, 2) + '\n')
  console.log(JSON.stringify(result))
} finally { await browser.close() }
