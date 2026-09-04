import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

const fixtures = [
  ['Amoebozoa', '3574B', 'No exact match'],
  ['Apicomplexa', '322PR', 'Exact accepted-name match'],
  ['Bigyra', '36MJR', 'No exact match'],
  ['Cercozoa', '3ZNLP', 'No exact match'],
  ['Ciliophora', '32T8X', 'Exact accepted-name match'],
  ['Dinoflagellata', '3HRNV', 'Exact accepted-name match'],
  ['Ochrophyta', '45W37', 'Exact accepted-name match'],
  ['Oomycota', '38RD6', 'Exact accepted-name match'],
] as const

for (const [scope, id, status] of fixtures) {
  test(`native ${scope} loads one real ITIS row on demand`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(`itis-${scope.toLowerCase()}-sidecar-`) && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${scope} exact nomenclatural mapping` })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(requests).toEqual([])
    await details.locator('summary').click()
    await expect(details).toContainText(status)
    await expect.poll(() => requests.length).toBe(1)
    expect(requests[0]).not.toContain('/assets/data/')
  })
}

test('native Oomycota does not attach to an excluded Albuginales species', async ({ page }) => {
  await page.goto('./#/registry?release=COL26.8&id=4QL2X')
  await expect(page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS Oomycota exact nomenclatural mapping' })).toHaveCount(0)
})
