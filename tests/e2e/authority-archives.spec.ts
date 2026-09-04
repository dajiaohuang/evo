import { expect, test } from '@playwright/test'

for (const [id, scope] of [
  ['322C4', 'WoRMS · Mollusca'], ['32N29', 'WoRMS · Porifera'],
  ['323D7', 'WoRMS · Cnidaria'], ['325RY', 'WoRMS · Annelida'], ['3233F', 'OSF · Orthoptera'],
]) {
  test(`${scope} stays collapsed and publishes a Web summary rather than a false unmatched result`, async ({ page }) => {
    await page.addInitScript(() => window.localStorage.setItem('evo-atlas-language', 'en'))
    const archiveRequests: string[] = []
    page.on('request', (request) => {
      if (/\/(?:worms-(?:mollusca|porifera|cnidaria|annelida)|osf-orthoptera)-(?:upstream-only-)?\d{3}\.json\.gz/.test(request.url())) archiveRequests.push(request.url())
    })
    await page.goto(`./#/registry?release=COL26.8&id=${id}`)
    const details = page.locator('.catalogue-authority-disclosure')
    await expect(details.locator('summary')).toContainText(scope)
    await expect(details).not.toHaveAttribute('open')
    await details.locator('summary').click()
    await expect(details).toContainText('does not mean this species is unmatched')
    await expect(details.getByRole('link', { name: 'Verify the pinned source version' })).toBeVisible()
    await expect(details).not.toContainText('This record: unmatched')
    expect(archiveRequests).toEqual([])
  })
}
