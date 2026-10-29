import { expect, test } from '@playwright/test'

test('fossil markers stay removed with legacy marker and content settings', async ({ page }) => {
  for (const [age, markers] of [[65, 'points'], [250, 'clusters'], [66, 'density']] as const) {
    await page.goto(`./#/home?age=${age}&mapContent=all&markers=${markers}`)
    const canvas = page.locator('.projected-map__vectors')
    await expect(canvas).toHaveAttribute('data-point-count', '0')
    await expect(page.locator('.map-content-switch')).toHaveCount(0)
    await expect(page.locator('[aria-label="Fossil marker style"]')).toHaveCount(0)
    await canvas.press('ArrowRight')
    await expect(canvas).toHaveAttribute('data-point-count', '0')
  }
})
