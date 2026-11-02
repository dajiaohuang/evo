import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
try {
  const context = await browser.newContext({ serviceWorkers: 'block' })
  const page = await context.newPage(), external = []
  page.on('request', request => { if (/^https:\/\/[^/]*wikipedia\.org\//.test(request.url()) || request.url().includes('/wikipedia/abstracts.json')) external.push(request.url()) })
  await page.goto('https://evo-lovat.vercel.app/evo/#/home?view=tree', { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /打开全量分类树|Open full catalogue tree/ }).click({ timeout: 30000 })
  const input = page.getByLabel(/搜索名称|Search names/)
  for (const [name, id, expected] of [['Zabrina', '8LTCH', null], ['Aa', '8VT59', null], ['Clastostelium recurvatum', 'VRZH', /ancestor taxon|上级分类/], ['Denitrificimonas', 'CRXVS', /descendant taxon|下级分类/]]) {
    await input.fill(name)
    await page.locator('.backend-tree__results button').filter({ hasText: id }).click({ timeout: 30000 })
    await page.locator('.backend-tree__path a').last().click({ timeout: 30000 })
    const dialog = page.getByRole('dialog')
    await dialog.waitFor({ state: 'visible' })
    await dialog.locator('a[href*="wikipedia.org/wiki/"]').first().waitFor({ state: 'visible', timeout: 30000 })
    if (expected) assert.match(await dialog.innerText(), expected)
    console.log(JSON.stringify({ name, id, linkVisible: true, relationshipVerified: Boolean(expected) }))
    await dialog.getByRole('button', { name: /关闭维基百科浮窗|Close Wikipedia window/ }).click()
  }
  assert.deepEqual(external, [])
  await context.close()
  console.log(JSON.stringify({ status: 'passed', externalWikipediaRequests: 0 }))
} finally { await browser.close() }
