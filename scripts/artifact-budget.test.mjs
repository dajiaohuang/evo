import { expect, it } from 'vitest'
import { pagesDeploymentBudgetFailure } from './artifact-budget.mjs'

it('keeps the Pages deployment limit at exactly 650 MiB', () => {
  expect(pagesDeploymentBudgetFailure('github-pages-preview', 650 * 1024 * 1024)).toBeNull()
  expect(pagesDeploymentBudgetFailure('github-pages-preview', 650 * 1024 * 1024 + 1)).toContain('hard limit is 650 MiB')
})

it('does not apply a Pages deployment total to explicitly full Web data', () => {
  expect(pagesDeploymentBudgetFailure('full-web', 651 * 1024 * 1024)).toBeNull()
})

it('keeps missing and unknown editions subject to the Pages limit', () => {
  for (const edition of [undefined, null, '', 'unknown', 'native-full']) {
    expect(pagesDeploymentBudgetFailure(edition, 651 * 1024 * 1024)).toContain('hard limit is 650 MiB')
  }
})
