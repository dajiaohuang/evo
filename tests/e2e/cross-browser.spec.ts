import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

test('@cross-browser public navigation reaches the catalog and evidence dossier', async ({ page }) => {
  await page.goto('./#/home')
  const navigation = page.getByRole('navigation', { name: 'Primary navigation' })
  for (const label of ['Atlas', 'Open more pages']) {
    await expect(navigation.getByRole('button', { name: label, exact: true })).toBeVisible()
  }

  await navigation.getByRole('button', { name: 'Open more pages', exact: true }).click()
  await page.getByRole('navigation', { name: 'Detailed tools' }).getByRole('button', { name: /^Catalog/ }).click()
  await expect(page).toHaveTitle('Catalog — Evo Atlas')
  await expect(page.getByRole('heading', { name: 'Find a branch. Inspect its evidence boundary.' })).toBeVisible()
  await page.getByRole('button', { name: /Open the flagship dossier/ }).click()
  await expect(page).toHaveTitle('Perissodactyla — Evo Atlas')
  await expect(page.getByText('Maintainer review in progress', { exact: true }).first()).toBeVisible()
  await expect(page.getByText('External expert review not performed', { exact: true }).first()).toBeVisible()
})

test('@cross-browser static knowledge pages expose metadata and a working app handoff', async ({ page }) => {
  await page.goto('./taxa/perissodactyla/')
  await expect(page).toHaveTitle('Odd-toed Ungulates · Perissodactyla — Evo Atlas')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://dajiaohuang.github.io/evo/taxa/perissodactyla/')
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1)
  await expect(page.getByText('Maintainer review in progress', { exact: true })).toBeVisible()
  await expect(page.getByText('External expert review not performed', { exact: true })).toBeVisible()

  await page.getByRole('link', { name: /Open in Explorer/ }).click()
  await expect(page).toHaveURL(/#\/explore\?.*profile=perissodactyla/)
  await expect(page).toHaveTitle('Explore — Evo Atlas')
})

test('@cross-browser Explorer restores a versioned share state', async ({ page }) => {
  await page.goto('./#/explore?age=34&view=tree&taxon=perissodactyla')
  await expect(page.getByRole('button', { name: 'Tree', exact: true })).toHaveClass(/is-active/)
  await expect(page.getByText('34.0', { exact: true })).toBeVisible()
  await expect.poll(() => page.url()).toContain('dataset=2026.08-static-v5-rc51')
})
