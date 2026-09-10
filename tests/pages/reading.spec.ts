import { expect, test } from '@playwright/test'

test('read and navigate bilingual evidence without JavaScript', async ({ page }) => {
  const runtimeRequests: string[] = []
  page.on('request', request => { if (/\.(?:js|wasm|gz)(?:\?|$)/.test(request.url())) runtimeRequests.push(request.url()) })
  await page.goto('./')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Read evolution through its evidence')
  await page.locator('.language').getByRole('link', { name: '中文' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('从证据阅读生命演化')
  await page.getByRole('link', { name: /类群与证据/ }).click()
  await page.getByRole('link', { name: /Perissodactyla/ }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Perissodactyla')
  await expect(page.locator('.refs li').first()).toBeVisible()
  await expect(page.locator('.claim').first()).toBeVisible()
  await expect(page.locator('a[href*="/#/"]')).toHaveCount(0)
  await expect(page.getByRole('navigation').getByRole('link', { name: '应用' })).toBeVisible()
  expect(runtimeRequests).toEqual([])
})

test('edition boundaries and direct links stay readable on small screens', async ({ page }) => {
  await page.goto('./zh/apps/')
  await expect(page.getByRole('heading', { name: 'Android', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'iOS', exact: true })).toBeVisible()
  await expect(page.getByText(/未签名 Archive/)).toBeVisible()
  await expect(page.getByRole('link', { name: 'Android 验证构建' })).toHaveAttribute('href', /native-android\.yml$/)
  await page.goto('./zh/methods/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('方法与证据边界')
  await expect(page.getByText(/不在此静态阅读版运行/)).toBeVisible()
})

test('detail breadcrumbs return to their collection and retain the reading language', async ({ page }) => {
  for (const language of ['', 'zh/']) {
    for (const [collection, id] of [['stories', 'rise-and-fall-perissodactyls'], ['events', 'perissodactyl-radiation']]) {
      await page.goto(`./${language}${collection}/${id}/`)
      await expect(page.locator('.crumbs a').first()).toHaveAttribute('href', `/evo/${language}`)
      await expect(page.locator('.crumbs a').nth(1)).toHaveAttribute('href', `/evo/${language}${collection}/`)
      await page.locator('.crumbs a').nth(1).click()
      await expect(page).toHaveURL(new RegExp(`/evo/${language}${collection}/$`))
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    }
  }
})

test('missing pages return a real 404 with a working reading entry', async ({ page }) => {
  const response = await page.goto('./missing-static-page/')
  expect(response?.status()).toBe(404)
  await page.getByRole('link', { name: '浏览中文内容' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('从证据阅读生命演化')
})

test('keyboard navigation and layout remain usable', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: true, viewport: { width: 390, height: 844 } })
  const page = await context.newPage()
  await page.goto('./zh/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: '跳到正文' })).toBeFocused()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  expect(await page.evaluate(() => [...document.scripts].every(script => script.type === 'application/ld+json'))).toBe(true)
  await context.close()
})
