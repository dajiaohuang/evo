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
  const cases = [
    { name: 'Heterocorticium', id: 'CB2WY', target: /Proterochaete/, label: /synonym or basionym|异名或基名关系/ },
    { name: 'Drosophila starki', id: 'V93W3', target: /Drosophila_bromeliae/, label: /species-group page, not a species article|物种组页面，并非该物种专页/ },
    { name: 'Drosophila stylipennis', id: 'V99Q5', target: /Drosophila_bromeliae/, label: /species-group page, not a species article|物种组页面，并非该物种专页/ },
    { name: 'Chiasmia trigonata', id: '94RK2', target: /Chiasmia_simplicilinea/, label: /subspecies.*different tree node|亚种.*另一个树节点/ },
  ]
  for (const row of cases) {
    await input.fill(row.name)
    await page.locator('.backend-tree__results button').filter({ hasText: row.id }).click({ timeout: 30000 })
    await page.locator('.backend-tree__path a').last().click({ timeout: 30000 })
    const dialog = page.getByRole('dialog')
    await dialog.waitFor({ state: 'visible' })
    const link = dialog.locator('a[href*="wikipedia.org/wiki/"]').first()
    await link.waitFor({ state: 'visible', timeout: 30000 })
    assert.match(await link.getAttribute('href'), row.target)
    assert.match(await dialog.innerText(), row.label)
    console.log(JSON.stringify({ node: row.id, linkVisible: true, labelVerified: true }))
    await dialog.getByRole('button', { name: /关闭维基百科浮窗|Close Wikipedia window/ }).click()
  }
  assert.deepEqual(external, [])
  await context.close()
  console.log(JSON.stringify({ status: 'passed', externalWikipediaRequests: 0 }))
} finally { await browser.close() }
