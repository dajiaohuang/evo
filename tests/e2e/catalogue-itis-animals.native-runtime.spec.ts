import { expect, test } from '@playwright/test'

for (const [scope, id, name, tsn, shard] of [
  ['Nematoda', '87LKG', 'Abunema indicum', '61958', 'itis-nematoda-sidecar-'],
  ['Annelida', '325RY', 'Ctenodrilus parvulus', '204537', 'itis-annelida-sidecar-'],
  ['Platyhelminthes', '322VJ', 'Cryptostiopera cornuta', '1039003', 'itis-platyhelminthes-sidecar-'],
] as const) {
  test(`native ${scope} loads one exact ITIS row`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => { if (request.url().includes(shard) && request.url().endsWith('.jsonl.gz')) requests.push(request.url()) })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${scope} exact nomenclatural mapping` })
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
