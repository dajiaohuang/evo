import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('evo-atlas-language', 'en')
    localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

test('@cross-browser tree selection and view switching preserve exploration state', async ({ page }) => {
  await page.goto('./#/explore?age=66&view=tree')
  const tree = page.locator('svg[role="tree"]')
  const first = tree.locator('[role="treeitem"]').first()
  await expect(first).toBeVisible()
  await first.evaluate((node) => node.setAttribute('data-scene-sentinel', 'retained'))
  await first.press('Enter')
  await expect(page.getByRole('spinbutton', { name: 'Age in millions of years' })).toHaveValue('66')
  await expect(tree.locator('[data-scene-sentinel="retained"]')).toHaveCount(1)
  await page.getByRole('button', { name: 'Collapse selected clade', exact: true }).click()
  await expect(tree.locator('[role="treeitem"]')).toHaveCount(1)
  await page.getByRole('button', { name: 'Map', exact: true }).click()
  await page.getByRole('button', { name: 'Tree', exact: true }).click()
  await expect(tree.locator('[role="treeitem"]')).toHaveCount(1)
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('button', { name: 'Reference', exact: true }).click()
  await expect(page).toHaveTitle('Catalog — Evo Atlas')
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('button', { name: 'Explore', exact: true }).click()
  await expect(tree.locator('[role="treeitem"]')).toHaveCount(1)
  await expect(page.getByRole('spinbutton', { name: 'Age in millions of years' })).toHaveValue('66')
})

test('@cross-browser external hashes and back restore state without a workspace remount', async ({ page }) => {
  await page.goto('./#/explore?age=66&view=tree')
  await expect(page.locator('svg[role="tree"]')).toBeVisible()
  await page.locator('main.explorer-workspace').evaluate((node) => node.setAttribute('data-session-sentinel', 'retained'))
  await page.evaluate(() => { location.hash = '#/explore?age=34&view=map' })
  await expect(page.getByRole('spinbutton', { name: 'Age in millions of years' })).toHaveValue('34')
  await expect(page.locator('[data-session-sentinel="retained"]')).toHaveCount(1)
  await page.goBack()
  await expect(page.getByRole('spinbutton', { name: 'Age in millions of years' })).toHaveValue('66')
  await expect(page.getByRole('button', { name: 'Tree', exact: true })).toHaveClass(/is-active/)
})

test('home search keyboard access and mobile evidence do not require detailed mode', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./#/home?age=66')
  await page.getByRole('button', { name: 'Search', exact: true }).waitFor()
  await page.keyboard.press('Control+k')
  await expect(page.getByRole('dialog', { name: 'Search Evo Atlas' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeFocused()
  await page.getByRole('button', { name: 'Evidence', exact: true }).click()
  await expect(page.getByRole('complementary', { name: 'Evidence inspector' })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true)
})

test('playing time commits advancing map requests before pause', async ({ page }) => {
  await page.goto('./#/explore?age=34')
  await expect(page.locator('.projected-map__vectors')).toBeVisible()
  const initial = await page.getByRole('spinbutton', { name: 'Age in millions of years' }).inputValue()
  await page.getByRole('button', { name: 'Play toward the present' }).click()
  await expect.poll(() => page.url()).not.toContain(`age=${Number(initial).toFixed(1)}&`)
  await page.getByRole('button', { name: 'Pause geological time playback' }).click()
  expect(Number(await page.getByRole('spinbutton', { name: 'Age in millions of years' }).inputValue())).toBeLessThan(Number(initial))
})
