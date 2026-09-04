import { expect, test } from '@playwright/test'

for (const [packageId, collection, name, tsn] of [
  ['fungi', 'itis-fungi-tsn-crosswalk', 'Cyanoderma bradypi', '11465'],
  ['bacteria', 'itis-bacteria-tsn-crosswalk', 'Nitrobacter winogradskyi', '64'],
  ['other-animals', 'itis-platyhelminthes-tsn-crosswalk', 'Macrostomum sensitivum', '54016'],
  ['protists-chromists', 'itis-euglenozoa-tsn-crosswalk', 'Eutreptia marina', '9606'],
  ['amphibia', 'itis-2026-08-26-tsn-crosswalk', 'Phrynocerus testudiniceps', '550547'],
] as const) {
  test(`native ${packageId} opens a real ITIS source-only record on demand`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => { if (request.url().includes('itis-') && request.url().endsWith('.jsonl.gz')) requests.push(request.url()) })
    await page.goto('./#/data')
    const browser = page.locator('.itis-browser')
    await expect(browser.locator('summary')).toBeVisible()
    await expect(browser).not.toHaveAttribute('open')
    await browser.locator('summary').click()
    await browser.getByRole('combobox', { name: 'Resource pack', exact: true }).selectOption(packageId)
    await browser.getByRole('combobox', { name: 'ITIS collection', exact: true }).selectOption(collection)
    expect(requests).toEqual([])
    await browser.getByRole('combobox', { name: 'Choose a file', exact: false }).selectOption('0')
    await expect(browser.getByRole('link', { name: `${name} (${tsn})`, exact: true })).toHaveAttribute('href', new RegExp(`search_value=${tsn}$`))
    await expect(browser).toContainText('not globally deduplicated additional species')
    expect(requests).toHaveLength(1)
    expect(requests[0]).not.toContain('/assets/data/')
  })
}

for (const [packageId, name, colId, status] of [
  ['fungi', 'Cryptosphaerella annonae Speg.', '322GR', 'No exact match'],
  ['bacteria', 'Cylindrospermum alatosporum F.E. Fritsch', '333YG', 'Exact accepted-name match'],
] as const) {
  test(`native ${packageId} keeps independent ITIS COL mapping rows accessible`, async ({ page }) => {
    await page.goto('./#/data')
    const browser = page.locator('.itis-browser')
    await browser.locator('summary').click()
    await browser.getByRole('combobox', { name: 'Resource pack', exact: true }).selectOption(packageId)
    await browser.getByRole('combobox', { name: 'ITIS collection', exact: true }).selectOption(`itis-${packageId}-tsn-crosswalk`)
    await browser.getByRole('combobox', { name: 'Record partition', exact: true }).selectOption('col')
    await browser.getByRole('combobox', { name: 'Choose a file', exact: false }).selectOption('0')
    const first = browser.locator('.itis-browser__rows > li').first()
    await expect(first).toContainText(name)
    await expect(first).toContainText(`COL ${colId}`)
    await expect(first).toContainText(status)
  })
}

test('native zero-row scope remains a stated empty boundary', async ({ page }) => {
  await page.goto('./#/data')
  const browser = page.locator('.itis-browser')
  await browser.locator('summary').click()
  await browser.getByRole('combobox', { name: 'Resource pack', exact: true }).selectOption('protists-chromists')
  await browser.getByRole('combobox', { name: 'ITIS collection', exact: true }).selectOption('itis-metamonada-tsn-crosswalk')
  await expect(browser).toContainText('This pinned partition has no records')
  await expect(browser.getByRole('combobox', { name: 'Choose a file', exact: false })).toHaveCount(0)
})
