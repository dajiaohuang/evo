import { expect, test } from '@playwright/test'

test('Web source browser remains closed, then exposes ITIS-only scope summaries without row requests', async ({ page }) => {
  const requests: string[] = []
  page.on('request', (request) => { if (request.url().includes('itis-') && request.url().endsWith('.jsonl.gz')) requests.push(request.url()) })
  await page.goto('./#/data')
  const browser = page.locator('.itis-browser')
  await expect(browser.locator('summary')).toBeVisible()
  await expect(browser).not.toHaveAttribute('open')
  expect(requests).toEqual([])
  await browser.locator('summary').click()
  await browser.getByRole('combobox', { name: 'Resource pack', exact: true }).selectOption('protists-chromists')
  await browser.getByRole('combobox', { name: 'ITIS collection', exact: true }).selectOption('itis-euglenozoa-tsn-crosswalk')
  await expect(browser).toContainText('Web provides summaries only')
  await expect(browser.getByRole('combobox', { name: 'Record partition', exact: true }).locator('option:checked')).toHaveText('Source-only records (276)')
  await browser.getByRole('combobox', { name: 'Record partition', exact: true }).selectOption('col')
  await expect(browser).toContainText('This pinned partition has no records')
  await expect(browser.getByRole('combobox', { name: 'Choose a file', exact: false })).toHaveCount(0)
  expect(requests).toEqual([])
})
