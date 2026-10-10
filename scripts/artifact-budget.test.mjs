import { expect, it } from 'vitest'
import { pagesDeploymentBudgetFailure, releaseRetentionByteLimit } from './artifact-budget.mjs'

it('keeps the Pages deployment limit at exactly 650 MiB', () => {
  expect(pagesDeploymentBudgetFailure('github-pages-preview', 650 * 1024 * 1024)).toBeNull()
  expect(pagesDeploymentBudgetFailure('github-pages-preview', 650 * 1024 * 1024 + 1)).toContain('hard limit is 650 MiB')
})

it('does not apply a Pages deployment total to explicitly full Web data', () => {
  expect(pagesDeploymentBudgetFailure('full-web', 651 * 1024 * 1024)).toBeNull()
})

it('reports full Web data size and bounds preview editions at 650 MiB', () => {
  expect(releaseRetentionByteLimit('full-web')).toBeNull()
  for (const edition of ['pages-preview', 'github-pages-preview', 'native-core']) {
    expect(releaseRetentionByteLimit(edition)).toBe(650 * 1024 * 1024)
  }
})
