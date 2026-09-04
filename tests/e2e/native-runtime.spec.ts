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
]) {
  test(`native data loads ${prefix} and its independent source-only partition on demand`, async ({ page }) => {
    const requests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes(`/${prefix}-`) && request.url().endsWith('.json.gz')) requests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure')
    await expect(details.locator('summary')).toBeVisible()
    await expect(details).not.toHaveAttribute('open')
    expect(requests).toEqual([])
    await details.locator('summary').click()
    await expect(details).toContainText('This record: accepted')
    expect(requests).toHaveLength(1)
    expect(requests[0]).not.toContain('/assets/data/')
    await details.getByText('Browse independent source-only records', { exact: true }).click()
    await expect(details.locator('details li').first()).toBeVisible()
    expect(requests.filter((url) => url.includes('upstream-only'))).toHaveLength(1)
    await expect(details).toContainText('These records have no assigned COL ID')
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
