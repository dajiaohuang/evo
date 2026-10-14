import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { NodeReadingSections } from './NodeReadingSections'
import { CatalogueKnowledge } from '../catalogue/CatalogueKnowledge'
import type { CatalogueSpeciesDossier } from '../../data-client/types'

it('opens the real source beside its finding and retains an explicit source-language account', () => {
  const { container } = render(<NodeReadingSections language="zh" sources={[{ id: 'study:source', title: 'Original study', url: 'https://example.org/paper', scope: 'The sampled specimens only.', locator: 'Section 12, Figure 4', readingUrl: 'https://example.org/author-proof', readingLocator: 'Proof page 2', version: 'release 2', license: 'CC BY 4.0', rightsHolder: 'Museum archive', attribution: 'Museum archive, release 2' }]} sections={[
    { id: 'specimen', topic: 'morphology', title: { en: 'Observed anatomy in the sample' }, text: { en: '*Yutyrannus huali* preserves eight fin spines in a sample labelled `lacustrine - large`; literal <img src=x onerror=alert(1)> remains source text.' }, sourceIds: ['study:source'], locator: 'Fig. 4', context: ['One collection; no behaviour was recorded.'] },
    { id: 'account', title: { en: 'The recorded account' }, text: { en: 'The account keeps its bibliography separately.' } },
  ]} />)
  expect(screen.getByText('Yutyrannus huali').tagName).toBe('EM')
  expect(screen.getByText('lacustrine - large').tagName).toBe('CODE')
  expect(screen.getByRole('heading', { name: 'Observed anatomy in the sample' })).toBeVisible()
  expect(container.textContent).toContain('<img src=x onerror=alert(1)>')
  expect(container.querySelector('img')).toBeNull()
  expect(screen.getByText('Yutyrannus huali').closest('[lang]')).toHaveAttribute('lang', 'en')
  expect(screen.getAllByText(/原语言/)).toHaveLength(2)
  expect(screen.getByText('One collection; no behaviour was recorded.')).toBeVisible()
  fireEvent.click(screen.getByText('本段的来源与材料'))
  expect(screen.getByRole('link', { name: 'Original study ↗' })).toHaveAttribute('href', 'https://example.org/paper')
  expect(screen.getByRole('link', { name: '所引文本 ↗' })).toHaveAttribute('href', 'https://example.org/author-proof')
  const passageCitation = screen.getByText('本段的来源与材料').closest('details')!
  const citationParagraph = (text: string) => within(passageCitation).getByText((_, element) => element?.tagName === 'P' && Boolean(element.textContent?.includes(text)))
  expect(citationParagraph('段落定位：Fig. 4')).toBeVisible()
  expect(citationParagraph('来源定位：Section 12, Figure 4')).toBeVisible()
  expect(citationParagraph('所引文本定位：Proof page 2')).toBeVisible()
  expect(citationParagraph('范围：The sampled specimens only.')).toBeVisible()
  expect(citationParagraph('版本：release 2')).toBeVisible()
  expect(citationParagraph('权利人：Museum archive')).toBeVisible()
  expect(citationParagraph('署名：Museum archive, release 2')).toBeVisible()
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
  expect(within(citation).getByText((_, element) => element?.tagName === 'P' && Boolean(element.textContent?.includes('Scope: Only the deposited row.')))).toBeVisible()
})

it('retains catalogue source locators in the passage and source details', () => {
  const profile = {
    colId: 'account-47', scientificName: 'Example mammal', rank: 'species', sourceDatasetId: 'col-release-7',
    name: { en: 'Example mammal', zh: '示例哺乳动物' },
    sections: [{ topic: 'morphology', title: { en: 'Recorded body account' }, text: { en: 'The checklist records the body account.' }, sourceIds: ['catalogue'], locator: 'Page heading 3' }],
    sources: [{ id: 'catalogue', title: 'Pinned checklist', url: 'https://example.org/checklist', scope: 'Pinned release only.', locator: 'Account section 3', version: 'release 7', license: 'CC BY 4.0', rightsHolder: 'Catalogue project', readingTargets: [{ name: 'Related checklist account', colId: 'col-target-87', release: 'COL26.8' }] }],
    limitations: { en: 'Only this release.', zh: '仅此版本。' },
  }
  const onNavigate = vi.fn()
  render(<CatalogueKnowledge status="ready" zh={false} release="COL26.8" onNavigate={onNavigate} record={{ colId: profile.colId, descriptionCollections: [], profile }} />)
  fireEvent.click(screen.getByRole('button', { name: 'Related checklist account →' }))
  expect(onNavigate).toHaveBeenCalledWith('registry', { release: 'COL26.8', id: 'col-target-87' })
  fireEvent.click(screen.getByText('Sources and material for this passage'))
  const citation = screen.getByText('Sources and material for this passage').closest('details')!
  expect(within(citation).getByText((_, element) => element?.tagName === 'P' && Boolean(element.textContent?.includes('Passage locator: Page heading 3')))).toBeVisible()
  expect(within(citation).getByText((_, element) => element?.tagName === 'P' && Boolean(element.textContent?.includes('Source locator: Account section 3')))).toBeVisible()
  fireEvent.click(screen.getByText('Study sources and scope'))
  const methods = screen.getByText('Study sources and scope').closest('details')!
  expect(within(methods).getByText('Pinned release only.')).toBeVisible()
  expect(within(methods).getByText('release 7')).toBeVisible()
  expect(within(methods).getByText('CC BY 4.0 · Catalogue project')).toBeVisible()
  expect(within(methods).getByText('Source locator: Account section 3')).toBeVisible()
})
