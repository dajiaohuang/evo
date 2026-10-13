import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import { NodeReadingSections } from './NodeReadingSections'
import { CatalogueKnowledge } from '../catalogue/CatalogueKnowledge'
import type { CatalogueSpeciesDossier } from '../../data-client/types'

it('opens the real source beside its finding and retains an explicit source-language account', () => {
  render(<NodeReadingSections language="zh" sources={[{ id: 'study:source', title: 'Original study', url: 'https://example.org/paper', scope: 'The sampled specimens only.' }]} sections={[
    { id: 'specimen', topic: 'morphology', text: { en: 'Two specimens preserve eight fin spines.' }, sourceIds: ['study:source'], locator: 'Fig. 4', context: ['One collection; no behaviour was recorded.'] },
    { id: 'account', title: { en: 'The recorded account' }, text: { en: 'The account keeps its bibliography separately.' } },
  ]} />)
  expect(screen.getByText('Two specimens preserve eight fin spines.').closest('[lang]')).toHaveAttribute('lang', 'en')
  expect(screen.getAllByText(/原语言/)).toHaveLength(2)
  expect(screen.getByText('One collection; no behaviour was recorded.')).toBeVisible()
  fireEvent.click(screen.getByText('本段的来源与材料'))
  expect(screen.getByRole('link', { name: 'Original study ↗' })).toHaveAttribute('href', 'https://example.org/paper')
  expect(screen.getByText('Fig. 4')).toBeVisible()
  expect(screen.getByText('The account keeps its bibliography separately.')).toBeVisible()
  expect(screen.getAllByText('本段的来源与材料')).toHaveLength(1)
})

it('opens an authored dossier account with its registered source instead of repeating an archive excerpt', () => {
  const dossier: CatalogueSpeciesDossier = {
    identity: { method: 'Recorded regional row', scope: 'One deposited row.' },
    lifeStatusScope: { wild: 'Not specified.', domesticated: 'Not specified.', fossil: 'Not specified.' },
    sources: [],
    readerSources: [{ id: 'paper', title: 'Recorded study', url: 'https://example.org/recorded-study', scope: 'Only the deposited row.' }],
    readerSections: [{ id: 'body', title: { en: 'Leaves in the regional record' }, text: { en: 'The regional record describes paired leaves.' }, sourceIds: ['paper'] }],
    facets: { morphology: { status: 'partially-supported', claims: [{ text: 'Exact original archive wording.', sourceIds: ['paper'], locator: 'Row 4', placeTimeScope: 'One regional row.', lifeStatus: 'Not specified.' }] } },
  }
  render(<CatalogueKnowledge status="ready" zh={false} record={{ colId: 'recorded-usage', descriptionCollections: [], dossier }} />)
  expect(screen.getByText('The regional record describes paired leaves.')).toBeVisible()
  expect(screen.queryByText('Exact original archive wording.')).not.toBeInTheDocument()
  fireEvent.click(screen.getByText('Sources and material for this passage'))
  expect(screen.getByRole('link', { name: 'Recorded study ↗' })).toHaveAttribute('href', 'https://example.org/recorded-study')
  const citation = screen.getByText('Sources and material for this passage').closest('details')!
  expect(within(citation).getByText('Only the deposited row.')).toBeVisible()
})
