import { expect, test } from '@playwright/test'

const app = 'https://evo-lovat.vercel.app/evo/'

test('both languages lead to the application without loading scientific data', async ({ page }) => {
  const payloads: string[] = []
  page.on('request', request => { if (/\/(?:data|nodes|assets|archive)\/|\.(?:gz|wasm|zip)(?:\?|$)/.test(request.url())) payloads.push(request.url()) })
  await page.goto('./')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Moving continents.')
  await expect(page.getByRole('link', { name: 'Open the atlas' })).toHaveAttribute('href', app)
  await page.getByRole('link', { name: '中文', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('大陆在移动')
  await expect(page.getByRole('link', { name: '打开古地图应用' })).toHaveAttribute('href', app)
  await expect(page.getByRole('link', { name: '进入物种树' })).toHaveAttribute('href', app + '#/home?view=tree')
  expect(payloads).toEqual([])
})

test('old reading addresses return a real 404 with the current entry', async ({ page }) => {
  const response = await page.goto('./zh/read/fins-and-limbs/')
  expect(response?.status()).toBe(404)
  await expect(page.locator('.notice')).toContainText('先前的版本')
  await expect(page.getByRole('link', { name: '打开古地图应用' })).toHaveAttribute('href', app)
})

test('phone layout and keyboard entry work', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: true, isMobile: false, hasTouch: false, viewport: { width: 390, height: 844 } })
  const page = await context.newPage()
  await page.goto('./zh/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: '跳到正文' })).toBeFocused()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await expect(page.getByRole('link', { name: '打开古地图应用' })).toBeVisible()
  await context.close()
})
