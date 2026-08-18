import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('language switch localizes the shell and scientific content, then persists', async ({ page }) => {
  await page.addInitScript(() => {
    if (!window.localStorage.getItem('evo-atlas-language')) window.localStorage.setItem('evo-atlas-language', 'en')
  })
  await page.goto('./#/taxa?id=perissodactyla')
  await expect(page.getByText('A once-dominant radiation of hoofed mammals', { exact: false })).toBeVisible()

  await page.getByRole('button', { name: '中文', exact: true }).click()

  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN')
  await expect(page).toHaveTitle('类群 — Evo Atlas')
  await expect(page.getByRole('button', { name: '探索', exact: true })).toBeVisible()
  await expect(page.getByText('这是一支曾占优势的有蹄哺乳动物辐射', { exact: false })).toBeVisible()

  await page.reload()
  await expect(page.getByRole('button', { name: '探索', exact: true })).toBeVisible()
  expect(await page.evaluate(() => window.localStorage.getItem('evo-atlas-language'))).toBe('zh')
})

test('deep links keep route state and do not coerce a missing age to zero', async ({ page }) => {
  await page.goto('./#/explore?taxon=perissodactyla')
  await expect(page).toHaveTitle('Explore — Evo Atlas')
  await expect(page.getByText('66.0', { exact: true })).toBeVisible()
  await expect.poll(() => page.url()).toContain('age=66.0')
  expect(page.url()).not.toContain('age=0.0')
})

test('skip and catalog section controls do not corrupt the hash route', async ({ page }) => {
  await page.goto('./#/taxa?id=perissodactyla')
  const originalHash = await page.evaluate(() => window.location.hash)
  await page.keyboard.press('Tab')
  await expect(page.getByRole('button', { name: 'Skip to atlas content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeFocused()
  expect(await page.evaluate(() => window.location.hash)).toBe(originalHash)
  await page.getByRole('button', { name: 'Ecology', exact: true }).click()
  await expect(page.locator('#ecology')).toBeVisible()
  expect(await page.evaluate(() => window.location.hash)).toBe(originalHash)
})

test('Explorer restores state and removes the unsupported global model parameter', async ({ page }) => {
  await page.goto('./#/explore?age=12.3&older=20&younger=5&view=map&lat=10&lng=20&zoom=3&markers=points&coords=modern&land=0&treeMode=fossil-range&model=test-model')
  await expect(page.getByRole('button', { name: 'points' })).toHaveClass(/is-active/)
  await expect(page.getByRole('button', { name: 'modern' })).toHaveClass(/is-active/)
  await expect(page.getByText('Shared time window 20–5 Ma')).toBeVisible()
  await expect.poll(() => page.url()).toContain('dataset=2026.08-m2')
  for (const fragment of ['older=20', 'younger=5', 'lat=10.000', 'lng=20.000', 'zoom=3.00', 'treeMode=fossil-range']) {
    expect(page.url()).toContain(fragment)
  }
  expect(page.url()).not.toContain('model=')
  expect(page.url()).not.toContain('land=')
})

test('Explorer requires confirmation before replacing a mismatched dataset version', async ({ page }) => {
  await page.goto('./#/explore?dataset=2025.01-old&age=66')
  await expect(page.getByRole('alertdialog')).toContainText('2025.01-old')
  expect(page.url()).toContain('dataset=2025.01-old')
  await page.getByRole('button', { name: 'Use current dataset' }).click()
  await expect.poll(() => page.url()).toContain('dataset=2026.08-m2')
})

test('browser back and forward preserve hash navigation', async ({ page }) => {
  await page.goto('./#/home')
  await page.getByRole('button', { name: 'Explore', exact: true }).click()
  await expect(page).toHaveTitle('Explore — Evo Atlas')
  await page.goBack()
  await expect(page).toHaveTitle('Evo Atlas — Deep-Time Evidence Explorer')
  await page.goForward()
  await expect(page).toHaveTitle('Explore — Evo Atlas')
})

test('mobile Explorer panels remain operable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./#/explore?age=66')
  const navigationBox = await page.getByRole('navigation', { name: 'Primary navigation' }).boundingBox()
  expect(navigationBox?.y).toBeGreaterThan(760)
  const inspector = page.locator('aside.explorer-inspector')
  await page.getByRole('button', { name: 'Evidence', exact: true }).click()
  await expect(inspector).toHaveClass(/is-open/)
  await page.getByRole('button', { name: 'Close evidence panel' }).click()
  await expect(inspector).not.toHaveClass(/is-open/)
})

for (const route of ['#/home', '#/taxa?id=perissodactyla', '#/explore?view=tree&treeMode=cladogram&age=20', '#/lab', '#/compare']) {
  test(`has no serious automated accessibility violations on ${route}`, async ({ page }) => {
    await page.goto(`./${route}`)
    await page.waitForLoadState('networkidle')
    const results = await new AxeBuilder({ page }).analyze()
    const serious = results.violations.filter((violation) => violation.impact === 'serious' || violation.impact === 'critical')
    expect(serious).toEqual([])
  })
}
