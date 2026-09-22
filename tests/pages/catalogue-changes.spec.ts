import { expect, test } from '@playwright/test'

test('inspect real release changes without JavaScript or registry downloads', async ({ page }) => {
  const payloads: string[] = []
  page.on('request', request => { if (/\.(?:js|wasm|gz)(?:\?|$)/.test(request.url())) payloads.push(request.url()) })
  await page.goto('./zh/')
  await page.getByRole('link', { name: /名录版本对比/ }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('物种名录的版本变化')
  await expect(page.locator('.facts')).toContainText('2,186,768')
  await expect(page.locator('.facts')).toContainText('+3,635')
  await expect(page.getByRole('cell', { name: '45,387', exact: true })).toBeVisible()
  await expect(page.getByText(/应用当前仍使用 COL26.8/)).toBeVisible()
  await page.getByText('标识符替换 · 示例', { exact: true }).click()
  const links = page.locator('details[open] a[href*="checklistbank.org/dataset/"]')
  await expect(links.first()).toHaveAttribute('href', /\/316115\/taxon\//)
  await expect(links.nth(1)).toHaveAttribute('href', /\/316321\/taxon\//)
  await page.locator('.language').getByRole('link', { name: 'EN', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('How the species checklist changed')
  await expect(page.getByRole('link', { name: 'Machine-readable report', exact: true })).toHaveAttribute('href', /2026-08-20--2026-09-11\/manifest.json$/)
  expect(payloads).toEqual([])
})
