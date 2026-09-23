import { expect, test } from '@playwright/test'

test('native app bundles the selected core and gates full-catalogue routes', async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
  await page.goto('./#/home')

  await expect(page.locator('html')).toHaveAttribute('data-frontend-edition', 'native-core')
  await expect(page.locator('html')).toHaveAttribute('data-content-scope', 'selected-preview')
  await expect(page.locator('body')).not.toContainText('GitHub Pages preview edition')

  const bundle = await page.evaluate(async () => {
    const current = await (await fetch('./data/current.json')).json()
    const releases = await (await fetch('./data/releases.json')).json()
    const release = releases.releases.find((entry: { datasetVersion: string }) => entry.datasetVersion === current.datasetVersion)
    const inventory = await (await fetch(`./data/${release.filesIndex}`)).json()
    return { current, files: inventory.files as Array<{ url: string }> }
  })

  expect(bundle.current.edition).toBe('native-core')
  expect(bundle.current.deliveryProfile).toBe('web-light')
  expect(bundle.current.previewScope.catalogue).toBe('omitted')
  expect(bundle.current.previewScope.packageIds).toEqual(['atlas-core', 'perissodactyla', 'cetartiodactyla', 'dinosauria', 'primates'])
  expect(bundle.files.some((file) => file.url.includes('/downloads/'))).toBe(false)
  expect(bundle.files.some((file) => /catalogue\/(hierarchy|search|source-checklists)\//.test(file.url))).toBe(false)
  expect(bundle.files.some((file) => file.url.includes('catalogue/resource-packs/'))).toBe(false)

  await page.goto('./#/registry?release=COL26.8&id=5BSG3')
  await expect(page.locator('[data-pages-preview-gate]')).toBeVisible()
})
