import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import { NodeReadingSections } from './NodeReadingSections'
import { catalogueReadingSections } from '../../utils/nodeReading.mjs'
import type { CatalogueSpeciesDossier } from '../../data-client/types'

it('renders unknown rights assessment beside the declared license without implying verified permission', () => {
  render(<NodeReadingSections language="zh" sources={[{ id: 'study:source', title: 'Original study', license: 'CC BY 4.0', licenseUrl: 'https://example.org/license', licenseAssessment: 'unknown' }]} sections={[
    { id: 'specimen', title: { en: 'Observed anatomy' }, text: { en: 'Observed in the recorded sample.' }, sourceIds: ['study:source'] },
  ]} />)

  fireEvent.click(screen.getByText('本段的来源与材料'))
  const citation = screen.getByText('本段的来源与材料').closest('details')!
  expect(within(citation).getByText('记录的许可声明：')).toBeVisible()
  expect(within(citation).getByRole('link', { name: 'CC BY 4.0' })).toHaveAttribute('href', 'https://example.org/license')
  expect(within(citation).getByText('权利状态未确认：记录的许可字符串不代表已核验该许可适用于此项材料。')).toBeVisible()
  expect(within(citation).queryByText(/^许可：/)).not.toBeInTheDocument()
})

it('shows facet evidence gaps alongside the claim, outside its collapsed source details', () => {
  const dossier: CatalogueSpeciesDossier = {
    identity: { method: 'Recorded regional row', scope: 'One deposited row.' },
    lifeStatusScope: { wild: 'Not specified.', domesticated: 'Not specified.', fossil: 'Not specified.' },
    sources: [{ id: 'paper', title: 'Recorded study', url: 'https://example.org/recorded-study', version: 'Recorded version', locator: 'Study record', license: 'Not stated', scope: 'Only the deposited row.' }],
    facets: { morphology: { status: 'partially-supported', gaps: ['Does not establish a species-wide pattern.'], claims: [{ text: 'The regional record describes paired leaves.', sourceIds: ['paper'], locator: 'Row 4', placeTimeScope: 'One regional row.', lifeStatus: 'Not specified.' }] } },
  }
  render(<NodeReadingSections language="en" sources={[{ id: 'study:paper', title: 'Recorded study', url: 'https://example.org/recorded-study', scope: 'Only the deposited row.' }]} sections={catalogueReadingSections(undefined, dossier)} />)

  expect(screen.getByText('The regional record describes paired leaves.')).toBeVisible()
  const gap = screen.getByText('Does not establish a species-wide pattern.')
  expect(gap).toBeVisible()
  expect(gap.closest('details')).toBeNull()
  fireEvent.click(screen.getByText('Sources and material for this passage'))
  expect(screen.getByRole('link', { name: 'Recorded study ↗' })).toHaveAttribute('href', 'https://example.org/recorded-study')
})
