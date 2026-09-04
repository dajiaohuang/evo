import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
})

for (const [scope, id, total] of [
  ['Actinopterygii', '323C6', '35,928'],
  ['Agnatha and Myxini', '3C2LN', '141'],
  ['Sarcopterygii', '4N6QX', '8'],
  ['Insecta', '32222', '941,223'],
  ['non-Crocodylia Reptilia', '3256B', '12,622'],
] as const) {
  test(`Web ${scope} stays collapsed and summary-only`, async ({ page }) => {
    const rowRequests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes('itis-') && request.url().endsWith('.jsonl.gz')) rowRequests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
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

test('non-Crocodylia Reptilia is not shown for a Crocodylia lineage', async ({ page }) => {
  await page.goto('./#/registry?release=COL26.8&id=3FFQ3')
  await expect(page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS non-Crocodylia Reptilia exact nomenclatural mapping' })).toHaveCount(0)
})
