import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('evo-atlas-language', 'en')
    localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

test('@cross-browser projection changes and dragging redraw geographic layers before release', async ({ page }) => {
  await page.goto('./#/explore?view=map&age=65&lat=0&lng=160&zoom=2')
  const canvas = page.locator('.projected-map__vectors')
  await expect(page.getByText(/CAO2024 nearest frame 65 Ma/)).toBeVisible()
  await expect(canvas).toHaveAttribute('data-projection', 'mercator')
  await page.getByRole('combobox', { name: 'Map projection' }).selectOption('equal-earth')
  await expect(canvas).toHaveAttribute('data-projection', 'equal-earth')
  await expect(canvas).toHaveAttribute('data-center', '0,160')
  await page.getByRole('button', { name: 'Hide map panels', exact: true }).click()
  const before = Number(await canvas.getAttribute('data-render-count'))
  await canvas.scrollIntoViewIfNeeded()
  const bounds = (await canvas.boundingBox())!
  const x = bounds.x + bounds.width * .5; const y = bounds.y + bounds.height * .6
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x - 90, y + 35, { steps: 5 })
  // Assert while pointer capture is still active, not after moveend.
  await expect.poll(async () => Number(await canvas.getAttribute('data-render-count'))).toBeGreaterThan(before)
  await expect(canvas).not.toHaveAttribute('data-center', '0,160')
  const moved = await canvas.getAttribute('data-center')
  await page.mouse.up()
  await expect(page).toHaveURL(/projection=equal-earth/)
  await page.getByRole('combobox', { name: 'Map projection' }).selectOption('mercator')
  await expect(canvas).toHaveAttribute('data-center', moved!)
  await expect(canvas).toHaveAttribute('data-projection', 'mercator')
  await page.getByRole('combobox', { name: 'Map projection' }).selectOption('equal-earth')
  await page.getByRole('button', { name: 'Tree', exact: true }).click()
  await page.getByRole('button', { name: 'Map', exact: true }).click()
  await expect(canvas).toHaveAttribute('data-center', moved!)
  await expect(page.getByRole('combobox', { name: 'Map projection' })).toHaveValue('equal-earth')
  await canvas.press('Home')
  await expect(canvas).toHaveAttribute('data-center', '0,0')
})

test('terrain follows projection and view changes without another grid download', async ({ page }) => {
  const requests: string[] = []
  page.on('request', (request) => { if (/paleotopography.*\.i16\.gz/.test(request.url())) requests.push(request.url()) })
  await page.goto('./#/explore?view=map&age=65')
  await page.getByLabel('PALEOMAP elevation and bathymetry').check()
  const terrain = page.locator('.projected-map__terrain')
  const vectors = page.locator('.projected-map__vectors')
  await expect(terrain).toBeVisible()
  await expect(terrain).toHaveAttribute('data-projection', 'mercator')
  await page.getByRole('combobox', { name: 'Map projection' }).selectOption('equal-earth')
  await expect(terrain).toBeVisible()
  await expect(terrain).toHaveAttribute('data-projection', 'equal-earth')
  await vectors.press('ArrowRight')
  await expect.poll(async () => terrain.getAttribute('data-center')).toBe(await vectors.getAttribute('data-center'))
  expect(requests).toHaveLength(1)
  await page.reload()
  await expect(page.getByRole('combobox', { name: 'Map projection' })).toHaveValue('equal-earth')
})

test('phone touch dragging updates the projection before the finger lifts', async ({ page, context }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./#/explore?view=map&age=65&projection=equal-earth')
  await expect(page.getByText(/CAO2024 nearest frame 65 Ma/)).toBeVisible()
  await page.getByRole('button', { name: 'Hide map panels', exact: true }).click()
  const canvas = page.locator('.projected-map__vectors')
  const box = (await canvas.boundingBox())!
  const before = await canvas.getAttribute('data-center')
  const client = await context.newCDPSession(page)
  const point = { x: box.x + box.width / 2, y: box.y + box.height / 2 }
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] })
  await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: point.x + 60, y: point.y + 25 }] })
  await expect(canvas).not.toHaveAttribute('data-center', before!)
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  await expect(page).toHaveURL(/projection=equal-earth/)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
})
