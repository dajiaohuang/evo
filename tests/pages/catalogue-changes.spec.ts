import { expect, test } from '@playwright/test'

test('core Pages preview omits full catalogue changes and heavy payloads', async ({ page }) => {
  const payloads: string[] = []
  page.on('request', request => { if (/\.(?:js|wasm|gz)(?:\?|$)/.test(request.url())) payloads.push(request.url()) })
  await page.goto('./zh/')
  await expect(page.getByRole('link', { name: /名录版本对比/ })).toHaveCount(0)
  expect(payloads).toEqual([])
})
