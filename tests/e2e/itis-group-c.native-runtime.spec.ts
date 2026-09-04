import { expect, test } from '@playwright/test'

for (const [scope, id, name, tsn, prefix] of [
  ['Mollusca, Brachiopoda and Graptolithina', '329PB', 'Cucumerunio novaehollandiae', '983816', 'itis-mollusca-brachiopoda-tsn-sidecar-'],
  ['Porifera and Cnidaria', '323D7', 'Cryptotrochus brevipalus', '572011', 'itis-porifera-cnidaria-sidecar-'],
  ['Echinodermata', '325R4', 'Ctenodiscus australis', '989662', 'itis-echinodermata-sidecar-'],
  ['Carnivora', '339RB', 'Cynogale bennettii', '621977', 'itis-tsn-sidecar-'],
  ['other mammals', '323B3', 'Cryptotis brachyonyx', '709774', 'itis-tsn-sidecar-'],
] as const) {
  test(`native ${scope} loads one real accepted row on demand`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(prefix) && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: `ITIS ${scope} exact nomenclatural mapping` })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(requests).toHaveLength(0)
    await details.locator('summary').click()
    await expect(details).toContainText('Exact accepted-name match')
    await expect(details).toContainText(name)
    await expect(details).toContainText(tsn)
    expect(requests).toHaveLength(1)
    expect(requests[0]).not.toContain('/assets/data/')
  })
}
