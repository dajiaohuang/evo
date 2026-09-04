import { expect, test } from '@playwright/test'

for (const [id, scope] of [
  ['322C4', 'WoRMS · Mollusca'], ['32N29', 'WoRMS · Porifera'],
  ['323D7', 'WoRMS · Cnidaria'], ['325RY', 'WoRMS · Annelida'], ['328ST', 'WoRMS · Radiozoa'], ['3233F', 'OSF · Orthoptera'],
]) {
  test(`${scope} stays collapsed and publishes a Web summary rather than a false unmatched result`, async ({ page }) => {
    await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
    const archiveRequests: string[] = []
    page.on('request', (request) => {
      if (/\/(?:worms-(?:mollusca|porifera|cnidaria|annelida|radiozoa)|osf-orthoptera)-(?:upstream-only-)?\d{3}\.json\.gz/.test(request.url())) archiveRequests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure')
    await expect(details.locator('summary')).toContainText(scope)
    await expect(details).not.toHaveAttribute('open')
    await details.locator('summary').click()
    await expect(details).toContainText('does not mean this species is unmatched')
    await expect(details.getByRole('link', { name: 'Verify the pinned source version' })).toBeVisible()
    await expect(details).not.toContainText('This record: unmatched')
    expect(archiveRequests).toEqual([])
  })
}

test('real Chilopoda species exposes the collapsed dual-root ITIS summary', async ({ page }) => {
  const requests: string[] = []
  page.on('request', (request) => {
    if (request.url().includes('itis-myriapoda-sidecar-') && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
  })
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/registry?release=COL26.8&id=5VXN8')
  const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS Myriapoda exact nomenclatural mapping' })
  await expect(details.locator('summary')).toBeVisible()
  await expect(details).not.toHaveAttribute('open')
  await details.locator('summary').click()
  await expect(details).toContainText('COL records in scope')
  await expect(details).toContainText('17,351')
  await expect(details).toContainText('Separate ITIS source-only species')
  await expect(details).not.toContainText('This COL ID was not found')
  expect(requests).toHaveLength(0)
})

for (const [scope, id, total] of [
  ['Chondrichthyes', '3247M', '1,359'],
  ['Chelicerata', '3235D', '99,511'],
] as const) {
  test(`Web ${scope} disclosure stays summary-only for a real species`, async ({ page }) => {
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
    await expect(details).not.toContainText('This COL ID was not found')
    expect(requests).toHaveLength(0)
  })
}
