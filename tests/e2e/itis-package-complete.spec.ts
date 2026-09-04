import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

for (const [id, scope, total] of [
  ['323CW', 'Amphibia', '8,923'],
  ['333WW', 'Collembola and Protura', '9,668'],
  ['34FJF', 'Collembola and Protura', '9,668'],
] as const) {
  test(`Web ${scope} ${id} remains summary-only`, async ({ page }) => {
    const rowRequests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes('itis-') && request.url().endsWith('.jsonl.gz')) rowRequests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    await expect(page.getByRole('heading').first()).toBeVisible()
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${scope} exact nomenclatural mapping` })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(rowRequests).toEqual([])
    await details.locator('summary').click()
    await expect(details).toContainText('COL records in scope')
    await expect(details).toContainText(total)
    await expect(details).toContainText('Web provides the summary only')
    expect(rowRequests).toEqual([])
  })
}

test('Amphibia evidence is not shown on a Collembola lineage', async ({ page }) => {
  await page.goto('./#/registry?release=COL26.8&id=333WW')
  await expect(page.getByRole('heading').first()).toBeVisible()
  await expect(page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS Amphibia exact nomenclatural mapping' })).toHaveCount(0)
})
