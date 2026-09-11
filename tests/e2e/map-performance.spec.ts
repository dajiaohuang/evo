import { expect, test } from '@playwright/test'

test('continuous drag reprojects the current view without a render backlog', async ({ page }, testInfo) => {
  await page.addInitScript(() => {
    localStorage.setItem('evo-atlas-language', 'en')
    localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
  await page.goto('./#/explore?view=map&age=0&projection=equal-earth&zoom=2')
  await expect(page.getByText(/CAO2024 nearest frame 0 Ma/)).toBeVisible()
  await page.getByLabel('PALEOMAP elevation and bathymetry').check()
  await expect(page.locator('.projected-map__terrain')).toBeVisible()
  await page.getByRole('button', { name: 'Hide map panels', exact: true }).click()
  const canvas = page.locator('.projected-map__vectors')
  const bounds = (await canvas.boundingBox())!
  const x = bounds.x + bounds.width / 2; const y = bounds.y + bounds.height / 2
  const samples: { render: number; latency: number; frame: number; terrain: string | null }[] = []
  await page.mouse.move(x, y)
  await page.mouse.down()
  for (let step = 1; step <= 45; step += 1) {
    await page.mouse.move(x + step * 3, y + Math.sin(step / 8) * 35)
    samples.push(await canvas.evaluate((element) => ({ render: Number(element.dataset.renderMs), latency: Number(element.dataset.inputLatencyMs), frame: Number(element.dataset.renderCount), terrain: document.querySelector('.projected-map__terrain:not([hidden])')?.getAttribute('data-render-id') ?? null })))
  }
  console.log('Render phases:', await canvas.getAttribute('data-phases'))
  await page.mouse.up()
  const percentile = (values: number[]) => [...values].sort((a, b) => a - b)[Math.floor(values.length * .95)]
  const result = { renderP95Ms: percentile(samples.map((sample) => sample.render)), inputToRenderP95Ms: percentile(samples.map((sample) => sample.latency)), renderedFrames: new Set(samples.map((sample) => sample.frame)).size, terrainFrames: new Set(samples.flatMap((sample) => sample.terrain ? [sample.terrain] : [])).size }
  await testInfo.attach('drag-performance.json', { body: JSON.stringify({ result, samples }, null, 2), contentType: 'application/json' })
  console.log('Map drag performance:', JSON.stringify(result))
  expect(result.renderedFrames).toBeGreaterThan(10)
  await expect(page.locator('.projected-map__terrain')).toBeVisible()
  await expect.poll(async () => page.locator('.projected-map__terrain').getAttribute('data-center')).toBe(await canvas.getAttribute('data-center'))
})
