import { render, screen } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { BackendCatalogueContent } from './BackendCatalogueContent'
const mocks = vi.hoisted(() => ({ loadCurrentManifest: vi.fn(), loadCatalogueManifest: vi.fn() }))
vi.mock('../../data-client/staticDataClient', () => mocks)
vi.mock('./CatalogueContent', () => ({ CatalogueContent: ({ id }: { id: string }) => <p>Matched content: {id}</p> }))
beforeEach(() => {
  mocks.loadCurrentManifest.mockReset().mockResolvedValue({ datasetVersion: 'RC150', catalogue: { releaseAlias: 'COL26.8' } })
  mocks.loadCatalogueManifest.mockReset().mockResolvedValue({ releaseAlias: 'COL26.8' })
})
it('attaches content only after both dataset and catalogue release match', async () => {
  render(<BackendCatalogueContent id="species" rank="species" datasetVersion="RC150" release="COL26.8" zh={false} />)
  expect(await screen.findByText('Matched content: species')).toBeInTheDocument()
})
it('rejects an older dataset even when its catalogue alias matches', async () => {
  render(<BackendCatalogueContent id="species" rank="species" datasetVersion="RC151" release="COL26.8" zh={false} />)
  expect(await screen.findByText(/text coverage is unknown/)).toBeInTheDocument()
  expect(mocks.loadCatalogueManifest).not.toHaveBeenCalled()
})
it('rejects a mismatched catalogue manifest', async () => {
  mocks.loadCatalogueManifest.mockResolvedValue({ releaseAlias: 'COL26.9' })
  render(<BackendCatalogueContent id="species" rank="species" datasetVersion="RC150" release="COL26.8" zh={false} />)
  expect(await screen.findByText(/text coverage is unknown/)).toBeInTheDocument()
  expect(screen.queryByText('Matched content: species')).not.toBeInTheDocument()
})
