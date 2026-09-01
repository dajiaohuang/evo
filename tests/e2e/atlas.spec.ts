import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'

const currentDatasetVersion = async (page: Page) => page.evaluate(async () => {
  const current = await fetch('/evo/data/current.json', { cache: 'no-store' }).then((response) => response.json()) as { datasetVersion: string }
  return current.datasetVersion
})

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed'))
})

test('language switch localizes the shell and scientific content, then persists', async ({ page }) => {
  await page.addInitScript(() => {
    if (!window.localStorage.getItem('evo-atlas-language')) window.localStorage.setItem('evo-atlas-language', 'en')
  })
  await page.goto('./#/taxa?id=perissodactyla')
  await expect(page.getByText('An early Eocene radiation whose initially similar branches', { exact: false })).toBeVisible()

  await page.getByRole('button', { name: '中文', exact: true }).click()

  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN')
  await expect(page).toHaveTitle('Perissodactyla — Evo Atlas')
  await expect(page.getByRole('button', { name: '探索器', exact: true })).toBeVisible()
  await expect(page.getByText('一次早始新世辐射；最初相近的分支后来分化为马、貘、犀牛', { exact: false })).toBeVisible()

  await page.reload()
  await expect(page.getByRole('button', { name: '探索器', exact: true })).toBeVisible()
  await expect.poll(async () => {
    try {
      return await page.evaluate(() => window.localStorage.getItem('evo-atlas-language'))
    } catch {
      return null
    }
  }).toBe('zh')
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
  await expect(page.getByRole('button', { name: /^时间 侏罗纪 Jurassic$/ })).toBeVisible()
})

test('global search lazily resolves accepted Catalogue of Life species without claiming a dossier', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/catalog')
  await page.locator('.global-search-trigger').click()
  const search = page.getByPlaceholder('Search taxa, intervals, events, places…')

  await search.fill('Homo sapiens')
  await expect(page.getByText('Catalogue of Life nomenclatural registry')).toBeVisible()
  await expect(page.getByText(/COL26\.8 · 2026-08-20 · ≈80% upstream coverage · not an Atlas dossier/)).toBeVisible()
  const result = page.locator('button.catalogue-search-result', { hasText: 'Homo sapiens' }).first()
  await expect(result).toContainText('Accepted species name')
  await result.click()
  await expect(page).toHaveURL(/#\/registry\?release=COL26\.8&id=6MB3T$/)
  await expect(page.getByRole('heading', { name: /Homo sapiens/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Exclusive resource ownership' })).toBeVisible()
  await expect(page.locator('.catalogue-owner-card')).toContainText('Primates')
  await expect(page.locator('.catalogue-owner-card')).toContainText('530')
  await expect(page.locator('.catalogue-owner-card')).toContainText('does not imply an Evo Atlas dossier')
  await expect(page.getByRole('link', { name: /Verify the upstream record/ })).toHaveAttribute('href', /checklistbank\.org\/dataset\/316115\/taxon\/6MB3T$/)

  await page.goto('./#/catalog')
  await page.locator('.global-search-trigger').click()
  const synonymSearch = page.getByPlaceholder('Search taxa, intervals, events, places…')
  await synonymSearch.fill('Felis leo')
  const synonym = page.locator('button.catalogue-search-result', { hasText: 'Felis leo' }).first()
  await expect(synonym).toContainText('synonym · resolves to accepted 4CGXP')
  await synonym.click()
  await expect(page).toHaveURL(/#\/registry\?release=COL26\.8&id=4CGXP$/)

  await page.goto('./#/catalog')
  await page.locator('.global-search-trigger').click()
  await page.getByPlaceholder('Search taxa, intervals, events, places…').fill('Aaronsohnia pubescens')
  const resolvingName = page.locator('button.catalogue-search-result', { hasText: 'Aaronsohnia pubescens' }).first()
  await expect(resolvingName).toContainText('synonym · resolves to accepted 9CF4V')
  await resolvingName.click()
  await expect(page).toHaveURL(/#\/registry\?release=COL26\.8&id=9CF4V$/)
  await expect(page.getByRole('heading', { name: /Otoglyphis pubescens subsp\. pubescens/ })).toBeVisible()
  await expect(page.locator('.catalogue-status')).toHaveText('Accepted')
  await expect(page.locator('.catalogue-taxon-heading dl')).toContainText('subspecies')
  await expect(page.locator('.catalogue-taxon-heading dl')).toContainText('Resolution target')
  await expect(page.locator('.catalogue-lineage')).toContainText('outside the accepted-species ancestor closure')
  await expect(page.locator('.catalogue-ownership-section')).toContainText('not forced into accepted-species resource partitions')
  await expect(page.locator('.catalogue-owner-card')).toHaveCount(0)
  await expect(page.locator('.catalogue-source-card')).toContainText('Synonymic Checklists of the Vascular Plants of the World')

  await page.goto('./#/catalog')
  await page.locator('.global-search-trigger').click()
  await page.getByPlaceholder('Search taxa, intervals, events, places…').fill('par')
  await expect(page.locator('.catalogue-search-heading small')).toContainText(/showing 12 of \d+/)
})

test('Catalog publishes every research preset with bilingual evidence limits and working routes', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/catalog')

  const cards = page.locator('.research-preset-card')
  await expect(cards).toHaveCount(279)
  await expect(cards.locator('code')).toHaveText(Array(279).fill('available-with-limitations'))
  const lifePreset = cards.filter({ hasText: 'Life source-bound evidence' })
  await expect(lifePreset).toContainText('Limitations')
  await expect(lifePreset).toContainText('does not establish an exact origin')
  await lifePreset.getByRole('link', { name: /Open research preset/ }).click()
  await expect(page).toHaveURL(/#\/explore\?taxon=life&view=tree$/)

  await page.goto('./#/catalog')
  await page.getByRole('button', { name: '中文', exact: true }).click()
  const chineseLifePreset = page.locator('.research-preset-card').filter({ hasText: '地球生命来源限定证据' })
  await expect(chineseLifePreset).toBeVisible()
  await expect(chineseLifePreset).toContainText('探索器入口不能确立精确起源')
})

test('comparison scenes hydrate both requested profile subjects', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/compare?left=metamynodon&right=paraceratherium')

  await expect(page.getByLabel('Taxon A')).toHaveValue('metamynodon')
  await expect(page.getByLabel('Taxon B')).toHaveValue('paraceratherium')
})

test('interpretive reconstruction images are paired with visible AI and uncertainty notices', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/taxa?id=lycophyta')

  const reconstruction = page.locator('.media-card--reconstruction')
  await expect(reconstruction.getByRole('img')).toHaveAttribute('alt', 'A small branching Asteroxylon exemplar with upright axes and a creeping root-bearing axis')
  await expect(reconstruction.locator('.media-card__badge')).toHaveText('AI-assisted interpretive reconstruction — not a specimen photograph, scale drawing or direct evidence.')
  await expect(reconstruction.locator('.media-card__uncertainty')).toContainText('Asteroxylon is a species-level exemplar.')
})

test('Catalogue search returns every usage in an exact-name homonym cluster larger than 12', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/catalog')
  await page.locator('.global-search-trigger').click()
  await page.getByPlaceholder('Search taxa, intervals, events, places…').fill('Phimenes flavopictum Blanchard, 1845')

  await expect(page.locator('button.catalogue-search-result')).toHaveCount(16)
  await expect(page.locator('.catalogue-search-heading small')).not.toContainText('showing 12')
})

test('Catalogue deep links browse exact parent-child hierarchy without silently switching releases', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/registry?release=COL26.8&id=636X2')
  await expect(page.locator('.catalogue-taxon-heading h1')).toContainText('Homo')
  await expect(page.getByRole('button', { name: /Homo sapiens/ })).toBeVisible()
  await page.getByRole('button', { name: /Homo sapiens/ }).click()
  await expect(page).toHaveURL(/#\/registry\?release=COL26\.8&id=6MB3T$/)
  await expect(page.getByRole('heading', { name: /Homo sapiens/ })).toBeVisible()

  await page.goto('./#/registry?release=COL26.7&id=6MB3T')
  await expect(page.getByRole('heading', { name: 'The requested release is not the published release' })).toBeVisible()
  await expect(page.getByText(/No record was silently substituted/)).toBeVisible()
  await expect(page.getByRole('heading', { name: /Homo sapiens/ })).toHaveCount(0)
})

test('Archaea records expose their pinned LPSN source identifier without implying a dossier', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/registry?release=COL26.8&id=354SW')

  const lpsn = page.locator('.catalogue-lpsn-card')
  await expect(lpsn).toContainText('Pinned LPSN source record')
  await expect(lpsn).toContainText('LPSN 2026-07-26')
  await expect(lpsn).toContainText('not a name-based guess')
  await expect(lpsn).toContainText('claim of completed ecology')
  await expect(lpsn.getByRole('link', { name: /Open the specific LPSN record/ })).toHaveAttribute('href', 'https://lpsn.dsmz.de/taxon/775725')
  await expect(lpsn.getByRole('link', { name: /CC BY-SA 4.0/ })).toHaveAttribute('href', 'https://creativecommons.org/licenses/by-sa/4.0/')
})

test('switching Archaea records never retains the previous LPSN URL', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/registry?release=COL26.8&id=354SW')
  await expect(page.locator('.catalogue-lpsn-card a[href="https://lpsn.dsmz.de/taxon/775725"]')).toBeVisible()

  await page.evaluate(() => { window.location.hash = '#/registry?release=COL26.8&id=354T2' })
  await expect(page).toHaveURL(/#\/registry\?release=COL26\.8&id=354T2$/)
  await expect(page.locator('.catalogue-lpsn-card a[href="https://lpsn.dsmz.de/taxon/775725"]')).toHaveCount(0)
  await expect(page.locator('.catalogue-lpsn-card a[href="https://lpsn.dsmz.de/taxon/775728"]')).toBeVisible()
})

test('Virus records expose the exact pinned ICTV taxonomy and exemplar metadata', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/registry?release=COL26.8&id=__P2cHTzzJfvA8KpCMJQq0')

  const ictv = page.locator('.catalogue-lpsn-card', { hasText: 'Current ICTV taxonomy and virus metadata' })
  await expect(ictv).toContainText('MSL41.v1 · VMR 2026-07-29 · ICTV201907903')
  await expect(ictv).toContainText('All 17,554 current ICTV species ship with the pack; 2 do not yet have a COL26.8 accepted-species ID.')
  await expect(ictv).toContainText('Exemplar virus: Vibrio phage 1.188.A._10N.286.51.A6')
  await expect(ictv.getByRole('link', { name: /Open the specific ICTV taxon record/ })).toHaveAttribute('href', 'https://ictv.global/id/ICTV201907903')
  await expect(ictv.getByRole('link', { name: /GenBank/ })).toHaveAttribute('href', 'https://www.ncbi.nlm.nih.gov/nuccore/MG592554')
  await expect(ictv.getByRole('link', { name: /CC BY 4.0/ })).toHaveAttribute('href', 'https://creativecommons.org/licenses/by/4.0/')
})

test('Plant records expose every exact WFO mapping outcome without routing WFO-only species into COL', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  const cases = [
    ['322F4', 'ACCEPTED', 'Open pinned WFO record'],
    ['3237L', 'REDIRECT', 'explicit accepted-name target'],
    ['33CTC', 'AMBIGUOUS', 'wfo-0000377696 · wfo-0001302265'],
    ['322LZ', 'UNMATCHED', 'no substitute was guessed'],
    ['343BQ', 'WITHHELD', 'authorship-is-not-an-exact-trailing-suffix'],
  ] as const
  for (const [id, status, evidence] of cases) {
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const wfo = page.locator('.catalogue-wfo-card')
    await expect(wfo).toContainText(`WFO 2026-06 · COL26.8 · ${status}`)
    await expect(wfo).toContainText(evidence)
    await expect(wfo).toContainText('All 382,438 WFO accepted species ship with the dataset; 60,751 without a provable COL26.8 ID remain in a separate non-COL partition.')
  }
})

test('global search distinguishes registry verification failures from no matches', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, locale: 'en-US', serviceWorkers: 'block' })
  const page = await context.newPage()
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.route('**/catalogue/**', (route) => route.abort())
  await page.goto('./#/catalog')
  await page.locator('.global-search-trigger').click()
  await page.getByPlaceholder('Search taxa, intervals, events, places…').fill('Homo sapiens')
  await expect(page.getByText('The species registry is unavailable, or shard verification failed.')).toBeVisible()
  await expect(page.getByText(/No catalog entry matches/)).toHaveCount(0)
  await context.close()
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

test('early land-plant story keeps model, occurrence and exemplar evidence distinct', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'zh'))
  await page.goto('./#/stories?id=early-land-plant-evidence-trail')
  await expect(page.getByRole('heading', { name: '早期陆生植物证据如何改变形态' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '冠群模型时间区间' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '露出陆地上的分散孢子' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '三类轴构成的根系' })).toBeVisible()
  await expect(page.getByText('物种层级实例不能替全部石松类支系提供形态。', { exact: true })).toBeVisible()
  await expect(page.locator('.story-step')).toHaveCount(5)
})

test('gymnosperm story keeps specimens, models and topology distinct', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'zh'))
  await page.goto('./#/stories?id=gymnosperm-evidence-boundaries')
  await expect(page.getByRole('heading', { name: '裸子植物深时研究的六条证据边界' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '一件侏罗纪木材标本' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '冠群年龄随校准而移动' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '拓扑不是时间线' })).toBeVisible()
  await expect(page.getByText('现生种辐射、冠群年龄、干群历史与化石首现必须彼此分开。', { exact: true })).toBeVisible()
  await expect(page.locator('.story-step')).toHaveCount(6)
})

test('trilobite and chelicerate story separates observations, models and catalogue coverage', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/stories?id=trilobites-chelicerates-evidence-boundaries')
  await expect(page.getByRole('heading', { name: 'Trilobites and chelicerates: anatomy, models and disputed roots' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Ash preserves a complete ventral view' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'A giant claw does not equal a complete body' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Genomes do not yet yield one arachnid root' })).toBeVisible()
  await expect(page.getByText('COL26.8 routes 104,126 strictly accepted species names through exact Chelicerata and Trilobita roots;', { exact: false })).toBeVisible()
  await expect(page.locator('.story-step')).toHaveCount(12)
})

test('angiosperm story separates clocks, specimens and vegetation proxies', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'zh'))
  await page.goto('./#/stories?id=angiosperm-evidence-boundaries')
  await expect(page.getByRole('heading', { name: '被子植物历史的七条证据边界' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '一套数据，三组时钟区间' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '同一株单子叶植物的根与花' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '动物食性揭示 C4 生物量' })).toBeVisible()
  await expect(page.getByText('导航树是教育性子集：单子叶与真双子叶植物并不穷尽被子植物，木兰纲也不是目录中的精确真双子叶根。', { exact: true })).toBeVisible()
  await expect(page.locator('.story-step')).toHaveCount(7)
})

test('tetrapod-transition story keeps traces, fins, digits and mobility models distinct', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'zh'))
  await page.goto('./#/stories?id=tetrapods-onto-land')
  await expect(page.getByRole('heading', { name: '鳍—肢转型的七条证据边界' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '没有身体化石的趾印记录' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '仍在鳍内的可动腕部' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '八个趾不等于陆地行走' })).toBeVisible()
  await expect(page.getByText('可行关节动作是模型约束，不是行为的直接观察，也不是每一种泥盆纪四足动物的模板。', { exact: true })).toBeVisible()
  await expect(page.locator('.story-step')).toHaveCount(7)
})

test('marine reptile and pterosaur story keeps specimens and models in three separate radiations', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/stories?id=marine-reptile-pterosaur-evidence-boundaries')
  await expect(page.getByRole('heading', { name: 'Three reptile radiations, ten evidence dossiers' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Older does not mean diagnostically plesiosaurian' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'A short-snouted ichthyosauromorph holotype' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Four flippers tested in a water channel' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Hundreds of eggs, sixteen with embryos' })).toBeVisible()
  await expect(page.getByText('COL26.8 contributes zero accepted species through these fossil-root routes; naming coverage and dossier maturity are independent, and the three radiations remain separate.', { exact: true })).toBeVisible()
  await expect(page.locator('.story-step')).toHaveCount(10)
})

test('cetartiodactyl story separates specimens, interpretations, molecular models and catalogue coverage', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'zh'))
  await page.goto('./#/stories?id=whale-evidence-without-an-ancestor-ladder')
  await expect(page.getByRole('heading', { name: '不构成祖先阶梯的八个鲸类转型档案' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '多组样本支持一个有界推断' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '微小的足不等于行走足' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '2009 年的树不是 2026 年的名录' })).toBeVisible()
  await expect(page.getByText('COL26.8 通过本包精确的偶蹄目与鲸目 usage 根路由 503 个严格接受种；这是命名覆盖，不是 503 棵分子树、化石档案或已评审延限。', { exact: true })).toBeVisible()
  await expect(page.locator('.story-step')).toHaveCount(8)
})

test('crocodylomorph and bird story separates specimens, functions, topologies and clocks', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/stories?id=crocodylomorph-bird-evidence-boundaries')
  await expect(page.getByRole('heading', { name: 'Two archosaur branches, eleven evidence dossiers' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'A suchian can resemble a theropod' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'A wind tunnel tests feasibility' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'A calibrated time tree is a model' })).toBeVisible()
  await expect(page.getByText('COL26.8 routes 11,071 accepted living species into this package. That is a nomenclatural coverage boundary, not fossil completeness, direct ancestry or agreement on a single crown-bird date.', { exact: true })).toBeVisible()
  await expect(page.locator('.story-step')).toHaveCount(11)
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
  const datasetVersion = await currentDatasetVersion(page)
  await expect(page.getByRole('button', { name: 'points' })).toHaveClass(/is-active/)
  await expect(page.getByRole('button', { name: 'modern' })).toHaveClass(/is-active/)
  await expect(page.getByText('Shared time window 20–5 Ma')).toBeVisible()
  await expect.poll(() => page.url()).toContain(`dataset=${datasetVersion}`)
  for (const fragment of ['older=20', 'younger=5', 'lat=10.000', 'lng=20.000', 'zoom=3.00', 'treeMode=fossil-range']) {
    expect(page.url()).toContain(fragment)
  }
  expect(page.url()).not.toContain('model=')
  expect(page.url()).not.toContain('land=')
})

test('Explorer requires confirmation before replacing a mismatched dataset version', async ({ page }) => {
  await page.goto('./#/explore?dataset=2025.01-old&age=66')
  const datasetVersion = await currentDatasetVersion(page)
  await expect(page.getByRole('alertdialog')).toContainText('2025.01-old')
  expect(page.url()).toContain('dataset=2025.01-old')
  await page.getByRole('button', { name: 'Use current dataset' }).click()
  await expect.poll(() => page.url()).toContain(`dataset=${datasetVersion}`)
})

test('a service-worker upgrade removes dataset A caches and dataset B remains coherent', async ({ page }) => {
  await page.goto('./#/home')
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready
    const oldCache = await caches.open('evo-runtime-data-2026.08-static-v3')
    await oldCache.put('/evo/data/packages/atlas-core/manifest.json', new Response(JSON.stringify({ version: '2026.08-static-v3' })))
    const upgraded = await navigator.serviceWorker.register('/evo/sw.js?upgrade-test=2026.08-static-v5-rc7', { scope: '/evo/upgrade-test/' })
    const worker = upgraded.installing ?? upgraded.waiting ?? upgraded.active
    if (worker?.state !== 'activated') await new Promise<void>((resolve) => worker?.addEventListener('statechange', () => {
      if (worker.state === 'activated') resolve()
    }))
    await upgraded.unregister()
  })
  await expect.poll(() => page.evaluate(async () => (await caches.keys()).includes('evo-runtime-data-2026.08-static-v3'))).toBe(false)

  await page.goto('./#/data')
  await expect(page.locator('.package-row')).toHaveCount(25)
  await expect(page.getByRole('heading', { name: 'One species, one resource partition' })).toBeVisible()
  await expect(page.locator('.ownership-row')).toHaveCount(33)
  await expect(page.locator('.ownership-row--nomenclatural-resource-pack')).toHaveCount(7)
  await expect(page.locator('.ownership-row--catalogue-only')).toHaveCount(1)
  await expect(page.locator('.ownership-summary')).toContainText('2,183,133')
  await expect(page.locator('.ownership-summary')).toContainText('7nomenclatural packs')
  await expect(page.getByRole('link', { name: 'Download ZIP' })).toHaveCount(0)
  await expect(page.getByText(/Pages light omits duplicate ZIPs; full data is bundled with Android\/iOS/).first()).toBeVisible()
  await expect(page.getByRole('button', { name: 'Save offline' }).first()).toBeVisible()
  await expect(page.locator('.ownership-proof')).toContainText('0 unmatched')
  await expect(page.getByRole('button', { name: /Save complete Atlas \(\d+ MiB\)/ })).toBeVisible()
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
  expect(releaseState.releaseBase).toBe(`releases/${releaseState.datasetVersion}/`)
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

test('dense CAO2024 coastlines select and request distinct frames within the Cretaceous', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, locale: 'en-US', serviceWorkers: 'block' })
  const page = await context.newPage()
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
    window.localStorage.setItem('evo-atlas-language', 'en')
  })
  const coastlineRequests: string[] = []
  page.on('request', (request) => {
    if (/\/maps\/coastlines\/ma-[\d.]+\.json\.gz(?:[?#]|$)/.test(request.url())) coastlineRequests.push(request.url())
  })

  await page.goto('./#/explore?view=map&age=102')
  await expect(page.getByText('CAO2024 nearest frame 100 Ma · requested 102 Ma · Δ 2 Myr', { exact: true })).toBeVisible()
  await expect.poll(() => coastlineRequests.some((url) => url.includes('/maps/coastlines/ma-0100.000.json.gz'))).toBe(true)

  const ageInput = page.locator('.explorer-timeline input[type="number"]')
  await ageInput.fill('108')
  await expect(page.getByText('CAO2024 nearest frame 110 Ma · requested 108 Ma · Δ 2 Myr', { exact: true })).toBeVisible()
  await expect.poll(() => coastlineRequests.some((url) => url.includes('/maps/coastlines/ma-0110.000.json.gz'))).toBe(true)
  expect(new Set(coastlineRequests.map((url) => url.match(/ma-[\d.]+\.json\.gz/)?.[0]).filter(Boolean)).size).toBeGreaterThanOrEqual(2)

  await context.close()
})

test('the complete PaleoDEM series loads one Web preview grid per selected age and renders canvas tiles', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, locale: 'en-US', serviceWorkers: 'block' })
  const page = await context.newPage()
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
    window.localStorage.setItem('evo-atlas-language', 'en')
  })
  const gridRequests: string[] = []
  page.on('request', (request) => {
    if (/\/maps\/paleotopography\/scotese-wright-2018-paleodem-v2\/grids\/ma-\d{4}\.preview-03deg\.i16\.gz(?:[?#]|$)/.test(request.url())) {
      gridRequests.push(request.url())
    }
  })

  await page.goto('./#/explore?view=map&age=65')
  const terrain = page.getByLabel('PALEOMAP elevation and bathymetry')
  await expect(terrain).toBeEnabled()
  await terrain.check()
  await expect(page.getByText(/Nearest nominal frame 65 Ma for requested 65 Ma; no temporal interpolation/)).toBeVisible()
  await expect(page.getByText('Internal NetCDF description: PALEOMAP:KT_Boundary, 66 Ma', { exact: true })).toBeVisible()
  await expect(page.getByText(/Web and browser-offline use a checksummed 0.3° exact every-third-cell preview/)).toBeVisible()
  await expect(page.getByText(/Web Mercator display ends at ±85.051° latitude/)).toBeVisible()
  await expect(page.getByText(/independent of CAO2024 geometry, CAO2024 observations and PBDB palaeocoordinates/)).toBeVisible()
  await expect.poll(() => gridRequests.filter((url) => url.includes('ma-0065.preview-03deg.i16.gz')).length).toBe(1)
  await expect.poll(() => page.locator('canvas.leaflet-tile').evaluateAll((canvases) => canvases.some((canvas) => {
    const context = (canvas as HTMLCanvasElement).getContext('2d')
    if (!context) return false
    const pixels = context.getImageData(0, 0, (canvas as HTMLCanvasElement).width, (canvas as HTMLCanvasElement).height).data
    for (let index = 3; index < pixels.length; index += 4) if (pixels[index] !== 0) return true
    return false
  }))).toBe(true)

  const ageInput = page.locator('.explorer-timeline input[type="number"]')
  await ageInput.fill('68')
  await expect(page.getByText(/Nearest nominal frame 70 Ma for requested 68 Ma; no temporal interpolation/)).toBeVisible()
  await expect.poll(() => gridRequests.filter((url) => url.includes('ma-0070.preview-03deg.i16.gz')).length).toBe(1)
  expect(gridRequests).toHaveLength(2)

  await context.close()
})

test('ages beyond the CAO2024 range remain unavailable instead of clamping to 1800 Ma', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, locale: 'en-US', serviceWorkers: 'block' })
  const page = await context.newPage()
  await page.addInitScript(() => {
    window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
    window.localStorage.setItem('evo-atlas-language', 'en')
  })
  const coastlineRequests: string[] = []
  page.on('request', (request) => {
    if (/\/maps\/coastlines\//.test(request.url())) coastlineRequests.push(request.url())
  })

  await page.goto('./#/explore?view=map&age=1800.1')
  const ledger = page.locator('.map-model-ledger')
  await expect(ledger.locator('div', { has: page.getByText('Requested age', { exact: true }) })).toContainText('1,800.1 Ma')
  await expect(ledger.locator('div', { has: page.getByText('coastlines', { exact: true }) })).toContainText('unavailable')
  await expect(page.getByText('coastlines is unavailable; other verified layers remain visible.', { exact: true })).toBeVisible()
  await expect(page.getByLabel('nearest coastline frame')).toBeDisabled()
  await expect(page.getByText(/CAO2024 nearest frame 1,800 Ma/)).toHaveCount(0)
  expect(coastlineRequests.some((url) => url.includes('ma-1800.000.json.gz'))).toBe(false)

  await context.close()
})

test('a detailed CAO2024 layer reports its independently selected frame age', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/explore?view=map&age=107')
  await expect(page.getByText('CAO2024 nearest frame 105 Ma · requested 107 Ma · Δ 2 Myr', { exact: true })).toBeVisible()

  const continentalCrust = page.getByLabel('continental-crust extent')
  await expect(continentalCrust).toBeEnabled()
  await continentalCrust.check()
  const ledger = page.locator('.map-model-ledger')
  await expect(ledger.locator('div', { has: page.getByText('coastlines', { exact: true }) })).toContainText('105 Ma · Δ 2 Myr')
  await expect(ledger.locator('div', { has: page.getByText('continentalPolygons', { exact: true }) })).toContainText('104.55 Ma · Δ 2.45 Myr')
})

test('CAO2024 point data loads separately from geometry and exposes source fields', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
  await page.goto('./#/explore?view=map&age=1000')

  await page.getByLabel('Palaeomagnetic poles and sample sites').check()
  await expect(page.getByText('Palaeomagnetic poles and sample sites · 15', { exact: true })).toBeVisible()
  await expect(page.getByText('Observation points are source data or model constraints, not geometry, terrain, elevation or bathymetry. Raw source positions never replace missing reconstructed positions.')).toBeVisible()

  await page.getByText('Text and table alternative', { exact: true }).click()
  await expect(page.getByText(/15 reconstructed observations intersect 1,000 Ma/)).toBeVisible()
  await page.getByRole('button', { name: 'View raw fields' }).first().click()
  await expect(page.getByRole('region', { name: 'CAO2024 observation details' })).toContainText('Source feature ID')
  await expect(page.getByRole('region', { name: 'CAO2024 observation details' })).toContainText('not supplied by this source feature')
})

for (const route of ['#/home', '#/taxa?id=perissodactyla', '#/registry?release=COL26.8&id=6MB3T', '#/explore?view=tree&treeMode=cladogram&age=20', '#/lab', '#/compare']) {
  test(`has no serious automated accessibility violations on ${route}`, async ({ page }) => {
    await page.goto(`./${route}`)
    await page.waitForLoadState('networkidle')
    const results = await new AxeBuilder({ page }).analyze()
    const serious = results.violations.filter((violation) => violation.impact === 'serious' || violation.impact === 'critical')
    expect(serious).toEqual([])
  })
}
