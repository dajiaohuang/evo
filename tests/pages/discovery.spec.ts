import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { readFileSync } from 'node:fs'

const coreContentDefinition = JSON.parse(readFileSync(new URL('../../data/pages-preview.json', import.meta.url), 'utf8')) as { taxonIds: string[] }
const entities = JSON.parse(readFileSync(new URL('../../data/registry/entities/entities.json', import.meta.url), 'utf8')) as { id: string }[]

const coreDirectoryCount = entities.filter(entity => coreContentDefinition.taxonIds.includes(entity.id)).length

test('reading trails and geological entries retain actual source destinations without JavaScript', async ({ page }) => {
  await page.goto('./zh/')
  await expect(page.locator('.reading-trails li')).toHaveCount(3)
  await expect(page.locator('.reading-time li')).toHaveCount(12)
  await expect(page.locator('.reading-preview img')).toHaveAttribute('alt', /512\.825 Ma.*模型/)
  await page.getByRole('link', { name: '不构成祖先阶梯的十二个灵长类档案' }).click()
  await expect(page.locator('.refs li').first()).toBeVisible()
  await page.goto('./zh/taxa/?q=missing')
  await expect(page.locator('.directory-tools')).toBeHidden()
  await expect(page.getByRole('link', { name: /Perissodactyla/ })).toBeVisible()
})

test.describe('optional directory controls', () => {
  test.use({ javaScriptEnabled: true })

  test('home and directory have no serious automated accessibility violations', async ({ page }) => {
    for (const path of ['zh/', 'zh/taxa/?q=Perissodactyla']) {
      await page.goto(`./${path}`)
      await expect(page.locator('body')).toHaveCSS('color', 'rgb(230, 238, 233)')
      if (path.includes('/taxa/')) {
        await expect(page.getByRole('status')).toHaveText(`显示 1 / ${coreDirectoryCount} 条`)
        await expect(page.getByRole('combobox')).toHaveCSS('color', 'rgb(230, 238, 233)')
      }
      const result = await new AxeBuilder({ page }).analyze()
      expect(result.violations.filter(item => ['serious', 'critical'].includes(item.impact ?? ''))).toEqual([])
    }
  })

  test('mix languages, share and restore a query, clear to source order', async ({ page }) => {
    const payloads: string[] = []
    page.on('request', request => { if (/\.(?:js|wasm|gz)(?:\?|$)/.test(request.url())) payloads.push(new URL(request.url()).pathname) })
    await page.goto('./zh/taxa/')
    const input = page.getByRole('searchbox', { name: '查找条目' })
    const first = await page.locator('.directory li a').first().getAttribute('href')
    await input.fill('奇蹄 Perissodactyla')
    await expect(page.locator('.directory li:visible')).toHaveCount(1)
    await expect(page.getByRole('status')).toHaveText(`显示 1 / ${coreDirectoryCount} 条`)
    await page.getByLabel('排列顺序').selectOption('name-desc')
    await expect(page).toHaveURL(/sort=name-desc/)
    await page.reload()
    await expect(input).toHaveValue('奇蹄 Perissodactyla')
    await expect(page.locator('.directory li:visible')).toHaveCount(1)
    await page.locator('.language').getByRole('link', { name: 'EN', exact: true }).click()
    await expect(page.getByRole('searchbox', { name: 'Find an entry' })).toHaveValue('奇蹄 Perissodactyla')
    await expect(page.locator('.directory li:visible')).toHaveCount(1)
    await page.locator('.language').getByRole('link', { name: '中文' }).click()
    await page.getByRole('button', { name: '清除筛选' }).click()
    await expect(input).toBeFocused()
    await expect(page.locator('.directory li a').first()).toHaveAttribute('href', first!)
    await expect(page).toHaveURL(/\/zh\/taxa\/$/)
    await expect(page.locator('.directory li:visible')).toHaveCount(coreDirectoryCount)
    await page.getByLabel('排列顺序').selectOption('name')
    const alphabeticalLast = await page.locator('.directory li').last().getAttribute('data-label')
    await page.getByLabel('排列顺序').selectOption('name-desc')
    await expect(page.locator('.directory li').first()).toHaveAttribute('data-label', alphabeticalLast!)
    expect(payloads.every(path => path === '/evo/directory-controls.js')).toBe(true)
  })

  test('literal hostile queries stay text, empty state recovers, accents normalize', async ({ page }) => {
    await page.goto('./intervals/?q=%22%3E%3Cimg%20src%3Dx%3E')
    await expect(page.locator('[data-directory-empty]')).toBeVisible()
    await expect(page.locator('img[src="x"]')).toHaveCount(0)
    const input = page.getByRole('searchbox', { name: 'Find an entry' })
    await input.fill('dévoNIAN period')
    await expect(page.locator('.directory li:visible')).toHaveCount(1)
    await expect(page.locator('[data-directory-empty]')).toBeHidden()
    await input.press('Enter')
    await page.locator('.directory li:visible a').click()
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Devonian/)
  })

  test('composition waits for committed text and narrow layout stays within the viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('./zh/taxa/')
    const input = page.getByRole('searchbox', { name: '查找条目' })
    await input.focus()
    await input.dispatchEvent('compositionstart')
    // Playwright fill commits composition in Firefox. Emit intermediate IME
    // input instead, then explicitly commit it below.
    await input.evaluate(element => {
      (element as HTMLInputElement).value = '奇蹄 Perissodactyla'
      element.dispatchEvent(new InputEvent('input', { bubbles: true, isComposing: true, data: '奇蹄 Perissodactyla' }))
    })
    await expect(page).toHaveURL(/\/zh\/taxa\/$/)
    await expect(page.locator('.directory li:visible')).toHaveCount(coreDirectoryCount)
    await input.dispatchEvent('compositionend')
    await expect(page.locator('.directory li:visible')).toHaveCount(1)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    await page.goto('./zh/')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    expect(await page.evaluate(() => [...document.scripts].every(script => script.type === 'application/ld+json'))).toBe(true)
  })
})
