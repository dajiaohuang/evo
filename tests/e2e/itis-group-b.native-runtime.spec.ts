import { expect, test } from '@playwright/test'

for (const [scope, id, name, tsn, shardPrefix] of [
  ['Actinopterygii', '323C6', 'Cryptotomus roseus', '170857', 'itis-actinopterygii-sidecar-'],
  ['Agnatha and Myxini', '3C2LN', 'Eudontomyzon danfordi', '159734', 'itis-agnatha-myxini-sidecar-'],
  ['Sarcopterygii', '4N6QX', 'Protopterus aethiopicus', '649771', 'itis-sarcopterygii-sidecar-'],
  ['Insecta', '32222', 'Cryptoripersia corpulenta', '1272469', 'itis-insecta-sidecar-'],
  ['non-Crocodylia Reptilia', '3256B', 'Ctenoblepharys adspersa', '1056535', 'itis-tsn-sidecar-'],
] as const) {
  test(`native ${scope} loads one real accepted row on demand`, async ({ page }) => {
    await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(shardPrefix) && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${scope} exact nomenclatural mapping` })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(requests).toEqual([])
    await details.locator('summary').click()
    await expect(details).toContainText('Exact accepted-name match')
    await expect(details).toContainText(name)
    await expect(details).toContainText(tsn)
    await expect.poll(() => requests.length).toBe(1)
    expect(requests[0]).not.toContain('/assets/data/')
  })
}
