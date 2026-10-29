import { expect, test } from '@playwright/test'

for (const width of [1440, 390]) {
  for (const longitude of [0, 179]) {
    test(`dragging keeps land visible at ${width}px near longitude ${longitude}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.goto(`./#/home?age=0&projection=equal-earth&lat=0&lng=${longitude}&zoom=2`)
      const canvas = page.locator('.projected-map__vectors')
      const landPixels = () => canvas.evaluate(element => {
        const surface = element as HTMLCanvasElement
        const data = surface.getContext('2d')!.getImageData(0, 0, surface.width, surface.height).data
        let count = 0
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 1] > data[i] * 1.35 && data[i + 2] < data[i + 1] * .9) count++
        }
        return count
      })
      await expect.poll(landPixels).toBeGreaterThan(5000)
      const box = (await canvas.boundingBox())!
      await page.mouse.move(box.x + box.width * .5, box.y + box.height * .5)
      await page.mouse.down()
      await page.mouse.move(box.x + box.width * .7, box.y + box.height * .55, { steps: 20 })
      const held = await landPixels()
      const center = await canvas.getAttribute('data-center')
      await page.mouse.up()
      await expect(canvas).toHaveAttribute('data-center', center!)
      const resting = await landPixels()
      // A flipped island used to cover the globe during the held drag and
      // disappear on release. Compare the same camera, not two map locations.
      expect(Math.abs(held - resting) / resting).toBeLessThan(.15)
      expect(resting).toBeGreaterThan(5000)
    })
  }
}
