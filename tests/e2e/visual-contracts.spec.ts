import { expect, test } from '@playwright/test'

async function expectNoHorizontalOverflow(page: import('@playwright/test').Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true)
}

test('desktop home keeps primary paths and hero instrument in the opening composition', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('./#/home')
  await expect(page.locator('.hero__content')).toBeVisible()
  await expect(page.locator('.hero__instrument')).toBeVisible()
  await expect(page.locator('.audience-grid > button')).toHaveCount(3)

  const hero = await page.locator('.hero').boundingBox()
  const instrument = await page.locator('.hero__instrument').boundingBox()
  expect(hero).not.toBeNull()
  expect(instrument).not.toBeNull()
  expect(instrument!.x).toBeGreaterThan(hero!.x + hero!.width / 2)
  await expectNoHorizontalOverflow(page)
  await expect(page.locator('.hero')).toHaveScreenshot('home-hero-desktop.png', { animations: 'disabled', maxDiffPixelRatio: 0.01 })
})

test('mobile static dossier keeps evidence status, actions and prose inside the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./taxa/perissodactyla/')
  await expect(page.locator('.status')).toBeVisible()
  await expect(page.locator('.actions .button')).toHaveCount(2)
  const status = await page.locator('.status').boundingBox()
  expect(status).not.toBeNull()
  expect(status!.x).toBeGreaterThanOrEqual(0)
  expect(status!.x + status!.width).toBeLessThanOrEqual(391)
  await expectNoHorizontalOverflow(page)
  await expect(page.locator('.status')).toHaveScreenshot('flagship-evidence-status-mobile.png', { animations: 'disabled', maxDiffPixelRatio: 0.01 })
})

test('first Explorer visit explains synchronized views once and remains dismissible', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.removeItem('evo-explorer-guide-v1'))
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./#/explore?age=66')
  const guide = page.getByRole('complementary', { name: 'Explorer quick guide' })
  await expect(guide).toBeVisible()
  await expect(guide.getByRole('listitem')).toHaveCount(3)
  await expect(guide).toHaveScreenshot('explorer-quick-guide-mobile.png', { animations: 'disabled', maxDiffPixelRatio: 0.01 })
  await guide.getByRole('button', { name: 'Start exploring' }).click()
  await expect(guide).toBeHidden()
  await page.reload()
  await expect(page.getByRole('complementary', { name: 'Explorer quick guide' })).toHaveCount(0)
  await expectNoHorizontalOverflow(page)
})
