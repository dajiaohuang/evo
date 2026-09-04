import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

const positiveScopes = [
  ['Amoebozoa', '3574B', 1337],
  ['Apicomplexa', '322PR', 21],
  ['Bigyra', '36MJR', 53],
  ['Cercozoa', '3ZNLP', 52],
  ['Ciliophora', '3245V', 8507],
  ['Dinoflagellata', '3HRNL', 259],
  ['Ochrophyta', '45W37', 1101],
  ['Oomycota', '33PPP', 1494],
] as const

for (const [scope, id, total] of positiveScopes) {
  test(`Web ${scope} uses the real COL-root projection without fetching rows`, async ({ page }) => {
    const rowRequests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(`itis-${scope.toLowerCase()}-sidecar-`) && request.url().endsWith('.jsonl.gz')) rowRequests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${scope} exact nomenclatural mapping` })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(rowRequests).toEqual([])
    await details.locator('summary').click()
    await expect(details).toContainText('COL records in scope')
    await expect(details.locator('dd').first()).toHaveText(total.toLocaleString('en-US'))
    await expect(details).toContainText('Web provides the summary only')
    expect(rowRequests).toEqual([])
  })
}

test('Web Oomycota exposes the four-order projection, not the 5K phylum total', async ({ page }) => {
  await page.goto('./#/registry?release=COL26.8&id=33PPP')
  const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS Oomycota exact nomenclatural mapping' })
  await details.locator('summary').click()
  await expect(details.locator('dd').first()).toHaveText('1,494')
  await expect(details).not.toContainText('1,673')
})

test('zero-COL protist scopes are not attached to a nearby species page', async ({ page }) => {
  await page.goto('./#/registry?release=COL26.8&id=322PR')
  await expect(page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS Apicomplexa exact nomenclatural mapping' })).toBeVisible()
  await expect(page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS metamonada exact nomenclatural mapping' })).toHaveCount(0)
})
