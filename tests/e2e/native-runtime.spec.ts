import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-atlas-language', 'en')
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

for (const [id, prefix] of [
  ['322C4', 'worms-mollusca'], ['32N29', 'worms-porifera'],
  ['323D7', 'worms-cnidaria'], ['325RY', 'worms-annelida'], ['3233F', 'osf-orthoptera'],
  ['87LKG', 'worms-nematoda'], ['322FY', 'worms-crustacea'], ['328ST', 'worms-radiozoa'],
  ['326BJ', 'chilobase'], ['345WT', 'scorpion-files'], ['32C2F', 'worms-loricifera'],
]) {
  test(`native data loads ${prefix} and its separate source-only partition on demand`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(`/${prefix}-`) && request.url().endsWith('.json.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ has: page.locator('summary').filter({ hasText: '— Source name mapping' }) })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(requests).toEqual([])
    await details.locator('summary').click()
    await expect(details).toContainText('This record: accepted')
    expect(requests).toHaveLength(1)
    expect(requests[0]).not.toContain('/assets/data/')
    await details.getByText('Browse separate source-only records', { exact: true }).click()
    await expect(details.locator('details li').first()).toBeVisible()
    expect(requests.filter((url) => /(?:upstream|source)-only/.test(url))).toHaveLength(1)
    await expect(details).toContainText('These records have no assigned COL ID')
  })
}

for (const [id, prefix] of [
  ['34DQ4', 'worms-chaetognatha'], ['35VXG', 'worms-rhombozoa'],
  ['3GLZ3', 'worms-gnathostomulida'], ['3JCX7', 'worms-priapulida'],
]) {
  test(`native data loads complete ${prefix} mapping on demand`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(`/${prefix}-`) && request.url().endsWith('.json.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ has: page.locator('summary').filter({ hasText: '— Source name mapping' }) })
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(requests).toEqual([])
    await details.locator('summary').click()
    await expect(details).toContainText('This record: accepted')
    expect(requests).toHaveLength(1)
    expect(requests[0]).not.toContain('/assets/data/')
    await expect(details.getByText('Browse separate source-only records', { exact: true })).toHaveCount(0)
  })
}

test('native full-resolution PaleoDEM loads from the document data directory and renders', async ({ page }) => {
  const requests: string[] = []
  page.on('request', (request) => {
    if (request.url().includes('/paleotopography/') && request.url().endsWith('.i16.gz')) requests.push(request.url())
  })
  await page.goto('./#/explore?view=map&age=65')
  await page.getByLabel('PALEOMAP elevation and bathymetry').check()
  await expect.poll(() => page.locator('canvas.leaflet-tile').evaluateAll((canvases) => canvases.some((canvas) => {
    const tile = canvas as HTMLCanvasElement
    const pixels = tile.getContext('2d')?.getImageData(0, 0, tile.width, tile.height).data
    return pixels ? pixels.some((value, index) => index % 4 === 3 && value !== 0) : false
  }))).toBe(true)
  expect(requests).toHaveLength(1)
  expect(requests[0]).not.toContain('preview-03deg')
  expect(requests[0]).not.toContain('/assets/data/')
})

for (const [id, name, tsn] of [
  ['323X9', 'Cryptyma cocona', '571428'],
  ['5VXN8', 'Australobius abbreviatus', '1087545'],
] as const) {
  test(`native Myriapoda mapping loads ${name} from its real root on demand`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes('itis-myriapoda-sidecar-') && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS Myriapoda exact nomenclatural mapping' })
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

for (const [id, expectedStatus, names] of [
  ['3S67T', 'Multiple exact candidates', ['Lamyctes andinus', 'Lamyctes neglectus']],
  ['363VR', 'Explicit synonym redirect', ['Otostigmus gravelyi']],
] as const) {
  test(`native Myriapoda mapping preserves ${id} status and source links`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes('itis-myriapoda-sidecar-') && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure').filter({ hasText: 'ITIS Myriapoda exact nomenclatural mapping' })
    await expect(details).not.toHaveAttribute('open')
    expect(requests).toHaveLength(0)
    await details.locator('summary').click()
    await expect(details).toContainText(expectedStatus)
    for (const name of names) await expect(details).toContainText(name)
    await expect(details).not.toContainText('undefined')
    for (const tsn of id === '3S67T' ? ['1089704', '1089740'] : ['1090822']) {
      await expect(details.locator(`a[href*="search_value=${tsn}"]`)).toBeVisible()
    }
    expect(requests).toHaveLength(1)
    expect(requests[0]).not.toContain('/assets/data/')
  })
}

for (const [scope, id, name, tsn, shardPrefix] of [
  ['Chondrichthyes', '3247M', 'Ctenacis fehlmanni', '160559', 'itis-chondrichthyes-sidecar-'],
  ['Chelicerata', '3235D', 'Cryptothele alluaudi', '877405', 'itis-chelicerata-sidecar-'],
] as const) {
  test(`native ${scope} mapping loads one real accepted row on demand`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(shardPrefix) && request.url().endsWith('.jsonl.gz')) requests.push(request.url())
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
