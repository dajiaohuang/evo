import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed'))
})

test('language switch localizes the shell and scientific content, then persists', async ({ page }) => {
  await page.addInitScript(() => {
    if (!window.localStorage.getItem('evo-atlas-language')) window.localStorage.setItem('evo-atlas-language', 'en')
  })
  await page.goto('./#/taxa?id=perissodactyla')
  await expect(page.getByText('A once-dominant radiation of hoofed mammals', { exact: false })).toBeVisible()

  await page.getByRole('button', { name: '中文', exact: true }).click()

  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN')
  await expect(page).toHaveTitle('Perissodactyla — Evo Atlas')
  await expect(page.getByRole('button', { name: '探索器', exact: true })).toBeVisible()
  await expect(page.getByText('这是一支曾占优势的有蹄哺乳动物辐射', { exact: false })).toBeVisible()

  await page.reload()
  await expect(page.getByRole('button', { name: '探索器', exact: true })).toBeVisible()
  expect(await page.evaluate(() => window.localStorage.getItem('evo-atlas-language'))).toBe('zh')
})

test('global search indexes structured Chinese ontology and interval names', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'zh'))
  await page.goto('./#/home')
  await page.getByRole('button', { name: '更多页面' }).click()
  await page.getByRole('navigation', { name: '详细工具' }).getByRole('button', { name: /^目录/ }).click()
  await page.locator('.global-search-trigger').click()
  const search = page.getByPlaceholder('搜索类群、地质时段、事件、地点…')

  await search.fill('哺乳动物')
  await expect(page.getByRole('button', { name: /哺乳动物.*Mammalia/ })).toBeVisible()

  await search.fill('侏罗纪')
  await expect(page.getByRole('button', { name: /侏罗纪.*Jurassic/ })).toBeVisible()
})

test('Data Lab localizes validation errors and reports export completion', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'zh'))
  await page.goto('./#/lab')

  await page.getByLabel('较老边界（Ma）').fill('10')
  await page.getByLabel('较新边界（Ma）').fill('20')
  await page.getByRole('button', { name: '运行查询 →' }).click()
  await expect(page.getByRole('alert')).toContainText('较老边界必须大于或等于较年轻边界')

  await page.getByLabel('较老边界（Ma）').fill('20')
  await page.getByLabel('较新边界（Ma）').fill('10')
  await page.getByRole('button', { name: '运行查询 →' }).click()
  await expect(page.locator('.lab-results__toolbar strong')).toContainText(/匹配 .* 条/)
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('button', { name: '导出数据包 .zip' }).click()
  await downloadPromise
  await expect(page.getByRole('button', { name: '导出已就绪' })).toBeVisible()
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
  await expect.poll(() => page.url()).toContain('dataset=2026.08-static-v5-rc4')
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
  await expect.poll(() => page.url()).toContain('dataset=2026.08-static-v5-rc4')
})

test('a service-worker upgrade removes dataset A caches and dataset B remains coherent', async ({ page }) => {
  await page.goto('./#/home')
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready
    const oldCache = await caches.open('evo-runtime-data-2026.08-static-v3')
    await oldCache.put('/evo/data/packages/atlas-core/manifest.json', new Response(JSON.stringify({ version: '2026.08-static-v3' })))
    const upgraded = await navigator.serviceWorker.register('/evo/sw.js?upgrade-test=2026.08-static-v5-rc4', { scope: '/evo/upgrade-test/' })
    const worker = upgraded.installing ?? upgraded.waiting ?? upgraded.active
    if (worker?.state !== 'activated') await new Promise<void>((resolve) => worker?.addEventListener('statechange', () => {
      if (worker.state === 'activated') resolve()
    }))
    await upgraded.unregister()
  })
  await expect.poll(() => page.evaluate(async () => (await caches.keys()).includes('evo-runtime-data-2026.08-static-v3'))).toBe(false)

  await page.goto('./#/data')
  await expect(page.locator('.package-row')).toHaveCount(25)
  const releaseState = await page.evaluate(async () => {
    const current = await fetch('/evo/data/current.json', { cache: 'no-store' }).then((response) => response.json()) as {
      datasetVersion: string
      releaseBase: string
      packages: { manifests: Record<string, { url: string }> }
    }
    const manifestFiles = Object.values(current.packages.manifests)
    const history = await fetch('/evo/data/releases.json', { cache: 'no-store' }).then((response) => response.json()) as { releases: Array<{ datasetVersion: string }> }
    const versions = await Promise.all(manifestFiles.map((file) => fetch(`/evo/data/${file.url}`).then((response) => response.json()).then((manifest) => manifest.version as string)))
    return { datasetVersion: current.datasetVersion, releaseBase: current.releaseBase, urls: manifestFiles.map((file) => file.url), versions, retained: history.releases.map((entry) => entry.datasetVersion) }
  })
  expect(releaseState.releaseBase).toBe('releases/2026.08-static-v5-rc4/')
  expect(releaseState.urls.every((url) => url.startsWith(releaseState.releaseBase))).toBe(true)
  expect(releaseState.versions.every((version) => version === releaseState.datasetVersion)).toBe(true)
  expect(releaseState.retained[0]).toBe(releaseState.datasetVersion)

  await page.evaluate(async () => { await caches.open('evo-runtime-data-manual-clear-test') })
  await page.getByRole('button', { name: 'Clear offline data' }).click()
  await expect.poll(() => page.evaluate(async () => (await caches.keys()).filter((name) => name.startsWith('evo-runtime-data-') || name.startsWith('evo-explicit-offline-packages-')))).toEqual([])
})

test('an active service worker does not replace static knowledge pages with the app shell', async ({ page }) => {
  await page.goto('./#/home')
  await page.evaluate(async () => { await navigator.serviceWorker.ready })
  await page.goto('./taxa/perissodactyla/')
  await expect(page).toHaveTitle('Odd-toed Ungulates · Perissodactyla — Evo Atlas')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://dajiaohuang.github.io/evo/taxa/perissodactyla/')
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1)
})

test('browser back and forward preserve hash navigation', async ({ page }) => {
  await page.goto('./#/home')
  await page.getByRole('button', { name: 'Open more pages' }).click()
  await page.getByRole('navigation', { name: 'Detailed tools' }).getByRole('button', { name: /^Catalog/ }).click()
  await expect(page).toHaveTitle('Catalog — Evo Atlas')
  await page.goBack()
  await expect(page).toHaveTitle('Evo Atlas — Deep-Time Evidence Explorer')
  await page.goForward()
  await expect(page).toHaveTitle('Catalog — Evo Atlas')
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
