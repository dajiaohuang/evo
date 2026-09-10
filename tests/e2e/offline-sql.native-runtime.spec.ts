import { expect, test } from '@playwright/test'

test('native SQL runs and exports using bundled assets without external network access', async ({ page, baseURL }) => {
  test.setTimeout(90_000)
  const external: string[] = []
  const sqlAssets: string[] = []
  await page.route('**/*', route => {
    const url = new URL(route.request().url())
    if (url.origin !== new URL(baseURL!).origin) { external.push(url.href); return route.abort() }
    if (url.pathname.includes('/sql/')) sqlAssets.push(url.pathname)
    return route.continue()
  })
  await page.addInitScript(() => {
    localStorage.setItem('evo-atlas-language', 'en')
    localStorage.setItem('evo-explorer-guide-v2', 'dismissed')
  })
  await page.goto('./#/lab')
  await page.getByRole('button', { name: 'Run query →', exact: true }).click()
  const workspace = page.locator('.local-sql-workspace')
  await workspace.locator('summary').click()
  await expect(workspace).toContainText('bundled for offline use')
  await workspace.getByRole('textbox').fill('SELECT 42 AS offline_answer')
  await workspace.getByRole('button', { name: 'Run SQL', exact: true }).click()
  await expect(workspace.locator('tbody td')).toHaveText('42', { timeout: 45_000 })
  const download = page.waitForEvent('download', { timeout: 40_000 })
  await workspace.getByRole('button', { name: 'Export Parquet', exact: true }).click()
  const artifact = await Promise.race([
    download,
    workspace.locator('.sql-error').waitFor({ state: 'visible', timeout: 40_000 }).then(async () => {
      throw new Error(await workspace.locator('.sql-error').innerText())
    }),
  ])
  expect(artifact.suggestedFilename()).toMatch(/\.parquet$/)
  expect(sqlAssets).toHaveLength(3)
  expect(external).toEqual([])
})
