import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

for (const [id, scope, name, tsn, prefix] of [
  ['323CW', 'Amphibia', 'Cryptotriton alvarezdeltoroi', '586361', 'itis-tsn-sidecar-'],
  ['333WW', 'Collembola and Protura', 'Cylindropygus ferox', '723760', 'itis-collembola-protura-sidecar-'],
  ['34FJF', 'Collembola and Protura', 'Delamarentulus barrai', '771844', 'itis-collembola-protura-sidecar-'],
] as const) {
  test(`native ${scope} ${id} loads one exact shard`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(prefix) && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
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
    expect(requests).toHaveLength(1)
    expect(requests[0]).not.toContain('/assets/data/')
  })
}
