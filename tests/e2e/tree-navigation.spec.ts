import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('evo-atlas-language', 'zh')
    localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
})

test('the corner tree control explains its destination and returns to the saved map', async ({ page }) => {
  await page.goto('./#/home?age=66&lat=12&lng=30&zoom=3&taxon=tetrapoda')
  await expect(page.locator('.projected-map__vectors')).toBeVisible()
  const switcher = page.getByRole('button', { name: '前往物种树', exact: true })
  await switcher.hover()
  await expect(page.getByRole('tooltip', { name: '前往物种树' })).toBeVisible()
  await switcher.click()
  const tree = page.locator('.stage-canvas > div.evo-tree svg[role="tree"]')
  await expect(tree).toBeVisible()
  await expect(tree.locator('[aria-selected="true"]')).toHaveAttribute('aria-label', /四足|Tetrapoda|Tetrapods/)
  await page.getByRole('button', { name: '返回古地图', exact: true }).click()
  await expect(page.locator('.projected-map__vectors')).toBeVisible()
  const params = new URLSearchParams(page.url().split('?')[1])
  expect(params.get('age')).toBe('66.0')
  expect(params.get('lat')).toBe('12.000')
  expect(params.get('lng')).toBe('30.000')
  expect(params.get('zoom')).toBe('3.00')
})

test('a local tree can be explored and reopened without changing its article or camera', async ({ page }) => {
  await page.goto('./#/taxa?id=tiktaalik')
  const panel = page.locator('.local-tree-panel').first()
  await panel.locator(':scope > summary').click()
  const tree = panel.locator('svg[role="tree"]')
  await expect(tree).toBeVisible()
  const initialCount = await tree.locator('[role="treeitem"]').count()
  expect(initialCount).toBeGreaterThan(1)
  expect(await tree.evaluate(svg => {
    const viewport = svg.getBoundingClientRect()
    return [...svg.querySelectorAll('[role="treeitem"] circle')].every(circle => {
      const point = circle.getBoundingClientRect()
      const x = point.x + point.width / 2, y = point.y + point.height / 2
      return x >= viewport.left && x <= viewport.right && y >= viewport.top && y <= viewport.bottom
    })
  })).toBe(true)
  await panel.getByRole('button', { name: '放大树', exact: true }).click()
  await tree.scrollIntoViewIfNeeded()
  const box = (await tree.boundingBox())!
  const beforeDrag = await tree.locator(':scope > g').getAttribute('transform')
  await page.mouse.move(box.x + box.width - 12, box.y + box.height - 12)
  await page.mouse.down()
  await page.mouse.move(box.x + box.width - 57, box.y + box.height - 37, { steps: 8 })
  await page.mouse.up()
  await expect(tree.locator(':scope > g')).not.toHaveAttribute('transform', beforeDrag!)
  const transform = await tree.locator(':scope > g').getAttribute('transform')
  await tree.getByRole('treeitem').first().press('Enter')
  await tree.getByRole('treeitem').first().press('ArrowLeft')
  await expect(tree.getByRole('treeitem')).toHaveCount(1)
  await tree.getByRole('treeitem').first().press('ArrowRight')
  await expect(tree.getByRole('treeitem')).toHaveCount(initialCount)
  await expect(page.locator('h1')).toContainText('Tiktaalik')
  await expect(page).toHaveURL(/#\/taxa\?id=tiktaalik$/)
  await panel.locator(':scope > summary').click()
  await expect(tree).toBeHidden()
  await panel.locator(':scope > summary').click()
  await expect(tree).toBeVisible()
  await expect(tree.locator(':scope > g')).toHaveAttribute('transform', transform!)
})

test('a local branch jumps into the full tree at its corresponding position', async ({ page }) => {
  await page.goto('./#/stories?reading=fins-and-limbs')
  const panel = page.locator('.local-tree-panel')
  await panel.locator(':scope > summary').click()
  await expect(panel.locator('svg[role="tree"]')).toBeVisible()
  await panel.scrollIntoViewIfNeeded()
  await panel.screenshot({ path: test.info().outputPath('local-tree.png') })
  await panel.getByRole('button', { name: '在完整树中定位', exact: false }).click()
  await expect(page).toHaveURL(/#\/home\?.*view=tree/)
  const selected = page.locator('.stage-canvas svg[role="tree"] [aria-selected="true"]')
  await expect(selected).toHaveAttribute('aria-label', /提塔利克|Tiktaalik/)
  const centred = await selected.evaluate(node => {
    const target = node.querySelector('circle')!.getBoundingClientRect()
    const viewport = node.closest('svg')!.getBoundingClientRect()
    return Math.abs(target.x + target.width / 2 - (viewport.x + viewport.width / 2)) < 2
      && Math.abs(target.y + target.height / 2 - (viewport.y + viewport.height / 2)) < 2
  })
  expect(centred).toBe(true)
  await page.locator('.stage-canvas').screenshot({ path: test.info().outputPath('full-tree.png') })
  await page.getByRole('link', {name: '返回刚才的阅读位置'}).click()
  await expect(page.locator('.reading-window')).toBeVisible()
  await expect(panel.locator('svg[role="tree"]')).toBeVisible()
})

test('mobile readers can expand a local tree and reach the full tree without overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./#/taxa?id=perissodactyla')
  const panel = page.locator('.local-tree-panel').first()
  await panel.locator(':scope > summary').click()
  await expect(panel.locator('svg[role="tree"]')).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true)
  await panel.getByRole('button', { name: '在完整树中定位', exact: false }).click()
  await expect(page.getByRole('button', { name: '返回古地图', exact: true })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true)
})
