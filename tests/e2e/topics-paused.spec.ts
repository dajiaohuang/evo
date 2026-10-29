import { expect, test } from '@playwright/test'

test('topics are absent from navigation, map and former reading routes', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/home?age=66')
  await page.locator('.atlas-menu-toggle').click()
  await expect(page.locator('.topbar__nav').getByRole('button', { name: 'Read', exact: true })).toHaveCount(0)
  await expect(page.locator('.map-temporal-cards')).toHaveCount(0)
  for (const hash of ['#/stories', '#/stories?id=rise-and-fall-perissodactyls', '#/stories?reading=fins-and-limbs']) {
    await page.goto(`./${hash}`)
    await expect(page.getByRole('heading', { name: 'Topics are temporarily offline', exact: true })).toBeVisible()
    await expect(page.locator('.story-page, .reading-page, .reader-article')).toHaveCount(0)
    await expect(page.locator('.reading-window a[href*="#/stories"]')).toHaveCount(0)
  }
  await page.goto('./#/catalog')
  await expect(page.getByRole('heading', { name: 'Groups and species', exact: true })).toBeVisible()
  await expect(page.locator('.portal-featured, .reading-card')).toHaveCount(0)
  await page.getByRole('button', { name: 'Open species tree', exact: true }).click()
  await expect(page).toHaveURL(/view=tree/)
})
