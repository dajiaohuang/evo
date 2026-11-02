import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { extname, resolve, sep } from 'node:path'
import { chromium } from 'playwright'

const root = resolve('.git/evo-wikipedia-col26-8/ui-reviewed-build-2')
const live = 'https://evo-lovat.vercel.app'
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.gz': 'application/octet-stream', '.svg': 'image/svg+xml' }
const server = createServer(async (request, response) => {
  try {
    const path = new URL(request.url, 'http://localhost').pathname
    if (!path.startsWith('/evo/')) { response.writeHead(404).end(); return }
    const relative = path.slice(5) || 'index.html'
    const file = resolve(root, relative)
    if (!file.startsWith(root + sep)) { response.writeHead(400).end(); return }
    if (existsSync(file) && statSync(file).isFile()) {
      response.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-store' })
      response.end(readFileSync(file)); return
    }
    const upstream = await fetch(live + path, { signal: AbortSignal.timeout(30000) })
    response.writeHead(upstream.status, { 'content-type': upstream.headers.get('content-type') ?? 'application/octet-stream', 'cache-control': 'no-store' })
    response.end(Buffer.from(await upstream.arrayBuffer()))
  } catch { response.writeHead(502).end() }
})
await new Promise(resolveListen => server.listen(0, '127.0.0.1', resolveListen))
let browser
try {
  browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ serviceWorkers: 'block' })
  const page = await context.newPage(), external = []
  page.on('request', request => { if (/^https:\/\/[^/]*wikipedia\.org\//.test(request.url()) || request.url().includes('/wikipedia/abstracts.json')) external.push(request.url()) })
  await page.goto(`http://127.0.0.1:${server.address().port}/evo/#/home?view=tree`, { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /打开全量分类树|Open full catalogue tree/ }).click({ timeout: 30000 })
  const input = page.getByLabel(/搜索名称|Search names/)
  for (const [name, id] of [['Zabrina', '8LTCH'], ['Aa', '8VT59']]) {
    await input.fill(name)
    await page.locator('.backend-tree__results button').filter({ hasText: id }).click({ timeout: 30000 })
    await page.locator('.backend-tree__path a').last().click({ timeout: 30000 })
    const dialog = page.getByRole('dialog')
    await dialog.waitFor({ state: 'visible' })
    await dialog.locator('a[href*="wikipedia.org/wiki/"]').first().waitFor({ state: 'visible', timeout: 30000 })
    console.log(JSON.stringify({ name, id, linkVisible: true }))
    await dialog.getByRole('button', { name: /关闭维基百科浮窗|Close Wikipedia window/ }).click()
  }
  assert.deepEqual(external, [])
  await context.close()
  console.log(JSON.stringify({ status: 'passed', externalWikipediaRequests: external.length }))
} finally {
  if (browser) await browser.close()
  await new Promise(resolveClose => server.close(resolveClose))
}
