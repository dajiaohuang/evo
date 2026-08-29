import { expect, test } from '@playwright/test'

async function expectNoHorizontalOverflow(page: import('@playwright/test').Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true)
}

test('desktop home opens the focused dashboard with presets behind a tutorial choice', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.removeItem('evo-explorer-guide-v2'))
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('./#/home')
  const welcome = page.getByRole('dialog', { name: 'Start with the dashboard or take the quick tour?' })
  await expect(welcome).toBeVisible()
  await expect(welcome.getByRole('button')).toHaveCount(2)
  await welcome.getByRole('button', { name: 'Use the dashboard now' }).click()
  await expect(page.locator('.explorer-stage')).toBeVisible()
  await expect(page.getByRole('complementary', { name: 'Preset scenes' }).getByRole('button')).toHaveCount(4)
  await expect(page.locator('.explorer-nav')).toHaveCount(0)
  await expect(page.locator('.explorer-inspector')).toHaveCount(0)
  await page.getByRole('button', { name: 'Open detailed tools' }).last().click()
  await expect(page.locator('.explorer-nav')).toBeVisible()
  await expect(page.locator('.explorer-inspector')).toBeVisible()
  await expectNoHorizontalOverflow(page)
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
})

test('first Explorer visit explains synchronized views once and remains dismissible', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.removeItem('evo-explorer-guide-v2'))
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./#/home?age=66')
  await page.getByRole('button', { name: 'Take the 3-minute tour' }).click()
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
