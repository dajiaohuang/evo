import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('evo-atlas-language', 'en'))
})

test('@cross-browser story workspace rejects a malformed shared draft and supports keyboard reordering', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  const broken = Buffer.from(JSON.stringify({ schemaVersion: 1, kind: 'evo-local-story-draft', title: '', titleZh: '', dek: '', steps: [null] })).toString('base64url')
  await page.goto(`./#/stories?id=builder&draft=${broken}`)
  await expect(page.getByRole('status')).toHaveText(/could not be opened/)
  await page.getByRole('button', { name: 'Add Explorer state' }).click()
  const titles = page.getByLabel('Step title', { exact: true })
  await titles.nth(1).fill('Keyboard ordering')
  const move = page.getByRole('button', { name: 'Move step up 2' })
  await move.focus()
  await page.keyboard.press('Enter')
  await expect(titles.first()).toHaveValue('Keyboard ordering')
  await page.getByRole('button', { name: 'Save locally' }).click()
  await expect(page.getByRole('status')).toHaveText('Saved in this browser')
  expect(errors).toEqual([])
  await page.setViewportSize({ width: 390, height: 844 })
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  const audit = await new AxeBuilder({ page }).analyze()
  expect(audit.violations.filter(item => ['serious', 'critical'].includes(item.impact ?? ''))).toEqual([])
  const shared = await page.evaluate(() => {
    const draft = JSON.parse(localStorage.getItem('evo-local-story-draft-v1')!)
    draft.title = 'Next shared lesson'
    return draft
  })
  const encoded = Buffer.from(JSON.stringify(shared)).toString('base64url')
  await page.evaluate(hash => { location.hash = hash }, `#/stories?id=builder&draft=${encoded}`)
  await expect(page.getByLabel('English title', { exact: true })).toHaveValue('Next shared lesson')
})

test('@cross-browser failed story import retains the edited workspace', async ({ page }) => {
  await page.goto('./#/stories?id=builder')
  await page.getByLabel('English title', { exact: true }).fill('Keep the original')
  await page.locator('input[type=file]').setInputFiles({ name: 'invalid.json', mimeType: 'application/json', buffer: Buffer.from('{"steps":[null]}') })
  await expect(page.getByRole('status')).toHaveText('Unsupported story draft structure')
  await expect(page.getByLabel('English title', { exact: true })).toHaveValue('Keep the original')
})
