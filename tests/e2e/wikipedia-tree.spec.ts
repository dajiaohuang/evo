import { test, expect } from '@playwright/test'

test('tree opens a real Wikipedia preview and preserves the tree on close', async ({ page }) => {
  await page.goto('./#/home?view=tree')
  const node = page.locator('svg [data-node-id="pan"]')
  await expect(node).toBeAttached()
  await node.focus()
  await node.dispatchEvent('keydown', { key: 'Enter' })
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog.locator('footer a')).toHaveAttribute('href', /wikipedia.org\/wiki\//, { timeout: 20000 })
  await expect(dialog.locator('.wikipedia-window__body p[lang]')).not.toBeEmpty({ timeout: 20000 })
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(node).toBeFocused()
  expect(page.url()).not.toContain('#/taxa')
})

test('old interactive and static node readers are paused', async ({ page }) => {
  await page.goto('./#/taxa?id=perissodactyla')
  await expect(page.getByRole('heading', { name: /节点页面暂时下线|Node pages are temporarily offline/ })).toBeVisible()
  await page.goto('./taxa/perissodactyla/')
  await expect(page.locator('main')).toContainText(/temporarily offline|暂时下线/)
  await expect(page.locator('.reader-article')).toHaveCount(0)
  await page.goto('./nodes/?id=anything')
  await expect(page.getByRole('heading', { name: '节点页面暂时下线' })).toBeVisible()
  const response = await page.request.get('./nodes/data/0000.json.gz')
  // Vite preview returns its HTML fallback for absent files; Vercel returns 404.
  expect([200, 404]).toContain(response.status())
  const bytes = await response.body()
  expect(bytes.subarray(0, 2).equals(Buffer.from([0x1f, 0x8b]))).toBe(false)
  expect(response.headers()['content-type']).not.toMatch(/gzip|octet-stream/)
})

test('Wikipedia modal fits a phone viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./#/home?view=tree')
  const node = page.locator('svg [data-node-id="life"]')
  await expect(node).toBeAttached()
  await node.dispatchEvent('keydown', { key: 'Enter' })
  await expect(page.getByRole('dialog')).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
