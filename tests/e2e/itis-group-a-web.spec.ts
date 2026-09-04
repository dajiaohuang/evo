import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

for (const [id, title] of [
  ['3FFQ3', 'Crocodylia'], ['35JV8', 'Perissodactyla'], ['342N9', 'Cetartiodactyla'],
  ['34B7X', 'Primates'], ['322FY', 'Crustacea'],
] as const) {
  test(`Web ${title} shows the ITIS summary without a row fetch`, async ({ page }) => {
    const rowRequests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes('itis-') && request.url().endsWith('.jsonl.gz')) rowRequests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${title} exact nomenclatural mapping` })
    await expect(details).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    await expect.poll(() => rowRequests.length).toBe(0)
    await details.locator('summary').click()
    await expect(details).toContainText('A name crosswalk, not an extantness audit.')
    expect(rowRequests).toEqual([])
  })
}
