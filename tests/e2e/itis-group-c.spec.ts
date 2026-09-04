import { expect, test } from '@playwright/test'

for (const [scope, id, total] of [
  ['Mollusca, Brachiopoda and Graptolithina', '329PB', '159,801'],
  ['Porifera and Cnidaria', '323D7', '30,521'],
  ['Echinodermata', '325R4', '11,891'],
  ['Carnivora', '339RB', '310'],
  ['other mammals', '323B3', '5,099'],
] as const) {
  test(`Web ${scope} remains collapsed and summary-only`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes('itis-') && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${scope} exact nomenclatural mapping` })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(requests).toHaveLength(0)
    await details.locator('summary').click()
    await expect(details).toContainText('COL records in scope')
    await expect(details).toContainText(total)
    await expect(details).toContainText('Web provides the summary only')
    expect(requests).toHaveLength(0)
  })
}
