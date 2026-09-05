import { expect, test } from '@playwright/test'

test('@cross-browser Flora of China loads a real description with source attribution', async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
  const shards: string[] = []
  page.on('response', response => {
    if (/\/flora-china-[a-f0-9]+\.json\.gz/.test(response.url()) && response.ok()) shards.push(response.url())
  })
  await page.goto('./#/registry?release=COL26.8&id=3D2QL')
  const card = page.locator('.catalogue-source-card').filter({ has: page.getByRole('heading', { name: 'Flora of China source descriptions', exact: true }) })
  await expect(card).toBeVisible()
  await expect(card).toContainText('Historical regional English source from China')
  const details = card.locator('details')
  await expect(details).not.toHaveAttribute('open', '')
  await details.locator('summary').click()
  await expect(card.locator('p[lang="en"]')).toContainText('Shrubs 1-3 m tall.')
  await expect(card).toContainText('Eurya chinensis R. Br. in Flora of China')
  await expect(card).toContainText('description record 10')
  await expect(card).toContainText('reference record 42')
  await expect(card).toContainText('Missouri Botanical Garden')
  await expect(card.locator('img, script, iframe')).toHaveCount(0)
  expect(shards).toHaveLength(1)
})
