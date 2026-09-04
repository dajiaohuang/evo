import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

for (const [id, title, total] of [
  ['3FFQ3', 'Crocodylia', 27], ['35JV8', 'Perissodactyla', 19], ['342N9', 'Cetartiodactyla', 503],
  ['34B7X', 'Primates', 530], ['322FY', 'Crustacea', 80890],
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
    await expect(details).toContainText('Web provides the summary only; row-level mappings ship with the complete Android and iOS data profile.')
    await expect(details.locator('dd').first()).toHaveText(total.toLocaleString('en-US'))
    expect(rowRequests).toEqual([])
  })
}
