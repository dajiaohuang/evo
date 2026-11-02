import { expect, test } from '@playwright/test'

test('timeline follows a drag from anywhere on its track and commits the release position', async ({ page }) => {
  await page.goto('./?lang=en#/home?age=66')
  const svg = page.locator('svg').filter({ has: page.locator('circle[style*="ew-resize"]') })
  const bounds = (await svg.boundingBox())!
  const y = bounds.y + 60
  const x = bounds.x + bounds.width * .62
  await page.mouse.move(bounds.x + bounds.width * .8, y)
  await page.mouse.down()
  await page.mouse.move(x, y, { steps: 10 })
  await page.mouse.up()
  const expected = (1 - (x - bounds.x - 8) / (bounds.width - 16)) * 538.8
  await expect(page.getByRole('spinbutton', { name: 'Age in millions of years' })).toHaveValue(expected.toFixed(1))
  await expect.poll(() => new URLSearchParams(new URL(page.url()).hash.split('?')[1]).get('age')).toBe(expected.toFixed(1))
  const canvas = page.locator('.projected-map__vectors')
  await expect(canvas).toHaveAttribute('data-render-quality', 'full', { timeout: 30000 })
})

test('map keeps rendering when the vector worker cannot start', async ({ page }) => {
  await page.route('**/*mapVectors.worker*', route => route.abort())
  await page.goto('./?lang=en#/home?age=0')
  const canvas = page.locator('.projected-map__vectors')
  await expect(canvas).toHaveAttribute('data-renderer', 'main', { timeout: 30000 })
  const before = await canvas.getAttribute('data-center')
  const box = (await canvas.boundingBox())!
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await page.mouse.down()
  await page.mouse.move(box.x + box.width / 2 + 80, box.y + box.height / 2 + 20, { steps: 5 })
  await page.mouse.up()
  await expect(canvas).not.toHaveAttribute('data-center', before!)
  await expect(canvas).toHaveAttribute('data-render-quality', 'full')
})
