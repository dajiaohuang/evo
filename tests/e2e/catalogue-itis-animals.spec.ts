import { expect, test } from '@playwright/test'

for (const [scope, id, total] of [
  ['Nematoda', '87LKG', '19,604'],
  ['Annelida', '325RY', '18,982'],
  ['Platyhelminthes', '322VJ', '27,007'],
] as const) {
  test(`Web ${scope} ITIS disclosure is collapsed and summary-only`, async ({ page }) => {
    const rows: string[] = []
    page.on('request', (request) => { if (request.url().includes('itis-') && request.url().endsWith('.jsonl.gz')) rows.push(request.url()) })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${scope} exact nomenclatural mapping` })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(rows).toEqual([])
    await details.locator('summary').click()
    await expect(details).toContainText('COL records in scope')
    await expect(details).toContainText(total)
    await expect(details).toContainText('Web provides the summary only')
    expect(rows).toEqual([])
  })
}

test('Annelida lineage does not expose the Nematoda scope', async ({ page }) => {
  await page.goto('./#/registry?release=COL26.8&id=325RY')
  await expect(page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS Nematoda exact nomenclatural mapping' })).toHaveCount(0)
})
