import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

for (const [id, title, name, tsn, shard] of [
  ['3FFQ3', 'Crocodylia', 'Gavialis gangeticus', '202218', 'itis-crocodylia-sidecar-'],
  ['35JV8', 'Perissodactyla', 'Dicerorhinus sumatrensis', '625002', 'itis-perissodactyla-sidecar-'],
  ['342N9', 'Cetartiodactyla', 'Dama dama', '552472', 'itis-cetartiodactyla-sidecar-'],
  ['34B7X', 'Primates', 'Daubentonia madagascariensis', '572886', 'itis-primates-sidecar-'],
  ['322FY', 'Crustacea', 'Cryptosoma bairdii', '621742', 'itis-crustacea-sidecar-'],
] as const) {
  test(`native ${title} loads one exact ITIS shard and evidence`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(shard) && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${title} exact nomenclatural mapping` })
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
