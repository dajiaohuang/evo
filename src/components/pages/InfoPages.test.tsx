import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { DataPage } from './InfoPages'

const mounts = vi.hoisted(() => vi.fn())
vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en', number: String, t: (text: string) => text }) }))
vi.mock('../workbench/DatasetVersionComparison', () => ({ DatasetVersionComparison: () => { mounts(); return <div>Release comparison mounted</div> } }))
vi.mock('../../data-client/staticDataClient', async (original) => ({
  ...await original<typeof import('../../data-client/staticDataClient')>(),
  loadCurrentManifest: () => new Promise(() => {}), loadPackageRegistry: () => new Promise(() => {}),
  loadEntityLinkageCoverage: () => new Promise(() => {}), loadCatalogueManifest: () => new Promise(() => {}),
  loadCatalogueSpeciesOwnership: () => new Promise(() => {}),
}))
vi.mock('../../services/release', async (original) => ({ ...await original<typeof import('../../services/release')>(), loadReleaseMetadata: () => new Promise(() => {}) }))
vi.mock('../../data-client/offlinePackages', async (original) => ({ ...await original<typeof import('../../data-client/offlinePackages')>(), getCompleteAtlasOfflinePlan: () => new Promise(() => {}) }))
afterEach(() => { cleanup(); vi.clearAllMocks() })

it('mounts release comparison only while sources disclosure is open', async () => {
  render(<DataPage onNavigate={vi.fn()} />)
  expect(mounts).not.toHaveBeenCalled()
  const details = screen.getByText('Compare dataset versions').closest('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
  await screen.findByText('Release comparison mounted')
  details.open = false
  fireEvent(details, new Event('toggle'))
  await waitFor(() => expect(screen.queryByText('Release comparison mounted')).toBeNull())
})
