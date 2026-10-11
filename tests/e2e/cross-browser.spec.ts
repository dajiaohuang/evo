import { expect, test, type Page } from '@playwright/test'

const currentDatasetVersion = async (page: Page) => page.evaluate(async () => {
  const current = await fetch('/evo/data/current.json', { cache: 'no-store' }).then((response) => response.json()) as { datasetVersion: string }
  return current.datasetVersion
})

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

test('@cross-browser public navigation reaches the catalog and evidence dossier', async ({ page }) => {
  await page.goto('./#/home')
  const navigation = page.getByRole('navigation', { name: 'Primary navigation' })
  for (const label of ['Read', 'Explore', 'Groups & species', 'Workspace']) {
    await expect(navigation.getByRole('button', { name: label, exact: true })).toBeVisible()
  }

  await navigation.getByRole('button', { name: 'Groups & species', exact: true }).click()
  await expect(page).toHaveTitle('Catalog — Evo Atlas')
  await expect(page.getByRole('heading', { name: 'Read along the branches of life' })).toBeVisible()
  await page.getByRole('button', { name: 'Browse taxon dossiers' }).click()
  await page.getByRole('button', { name: /Perissodactyla/ }).first().click()
  await expect(page).toHaveTitle('Perissodactyla — Evo Atlas')
  await expect(page.getByRole('link', { name: /Report an evidence issue/ }).first()).toBeVisible()
})

test('@cross-browser static knowledge pages expose metadata and a working app handoff', async ({ page }) => {
  await page.goto('./taxa/perissodactyla/')
  await expect(page).toHaveTitle('Odd-toed Ungulates · Perissodactyla — Evo Atlas')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://dajiaohuang.github.io/evo/taxa/perissodactyla/')
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1)

  await expect(page.getByRole('heading', { name: 'References', exact: true })).toBeVisible()
  await page.getByRole('link', { name: /Open in Explorer/ }).click()
  await expect(page).toHaveURL(/#\/explore\?.*profile=perissodactyla/)
  await expect(page).toHaveTitle('Explore — Evo Atlas')
})

test('@cross-browser Explorer restores a versioned share state', async ({ page }) => {
  await page.goto('./#/explore?age=34&view=tree&taxon=perissodactyla')
  const datasetVersion = await currentDatasetVersion(page)
  await expect(page.getByRole('button', { name: 'Tree', exact: true })).toHaveClass(/is-active/)
  await expect(page.getByText('34.0', { exact: true })).toBeVisible()
  await expect.poll(() => page.url()).toContain(`dataset=${datasetVersion}`)
})
