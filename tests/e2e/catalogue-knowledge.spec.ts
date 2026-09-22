import { expect, test } from '@playwright/test'

test('Perissodactyla coverage and a species introduction use bounded content requests @cross-browser', async ({ page }) => {
  const descriptions: string[] = []
  const knowledge: string[] = []
  page.on('request', request => {
    if (request.url().includes('/catalogue/descriptions/')) descriptions.push(request.url())
    if (request.url().includes('/catalogue/knowledge/')) knowledge.push(request.url())
  })
  await page.goto('./#/registry?release=COL26.8&id=623DW')
  const content = page.getByRole('region', { name: 'Content and evidence' })
  await expect(content.getByRole('heading', { name: 'Odd-toed ungulates' })).toBeVisible()
  await expect(content).toContainText('19')
  await expect(content).toContainText('four')
  expect(descriptions).toHaveLength(0)
  expect(knowledge).toHaveLength(1)
  await page.goto('./#/registry?release=COL26.8&id=7TKN2')
  await expect(content.getByRole('heading', { name: 'Domestic horse', exact: true })).toBeVisible()
  await expect(content).toContainText('domestic derivative')
  expect(descriptions).toHaveLength(0)
})

test('corrected Cestrum identity exposes its original Plazi paragraphs', async ({ page }) => {
  await page.goto('./#/registry?release=COL26.8&id=69MZK')
  await expect(page.getByRole('heading', { name: 'Plazi taxonomic descriptions (original text)' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Cestrum rugulosum')
  const section = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Plazi taxonomic descriptions (original text)' }) }).last()
  await expect(section.locator('details').first()).toBeVisible()
  await section.locator('summary').first().click()
  await expect(section.locator('details[open]')).toContainText('Original treatment')
})

for (const [id, title] of [['32494', 'Flora de Nicaragua'], ['3254D', 'Flora of Panama']] as const) {
  test(`${title} retained excerpts are readable on a narrow screen`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const heading = page.getByRole('heading', { name: new RegExp(`${title}.*Original source excerpts`) })
    await expect(heading).toBeVisible()
    const section = page.locator('section').filter({ has: heading }).last()
    await section.locator('summary').first().click()
    await expect(section.locator('details[open]')).toContainText('description.txt:')
    await expect(section.locator('details[open]')).toContainText('Missouri')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  })
}
