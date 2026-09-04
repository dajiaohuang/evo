import { render } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { PaleotopographyLayer } from './PaleotopographyLayer'
import type { RuntimePaleotopographyCollection, RuntimePaleotopographyFrame } from '../../data-client/types'

vi.mock('react-leaflet', () => ({ useMap: () => ({}) }))
vi.mock('leaflet', () => ({ GridLayer: class { addTo() {} removeFrom() {} } }))
vi.mock('../../data-client/staticDataClient', () => ({ runtimeDataUrl: (url: string) => `./data/${url}` }))

afterEach(() => { vi.unstubAllGlobals(); vi.restoreAllMocks() })

it('resolves the native PaleoDEM grid against the page before worker dispatch', () => {
  vi.spyOn(document, 'baseURI', 'get').mockReturnValue('capacitor://localhost/')
  const postMessage = vi.fn()
  const terminate = vi.fn()
  vi.stubGlobal('Worker', class { postMessage = postMessage; terminate = terminate })
  const { unmount } = render(<PaleotopographyLayer
    collection={{ visualization: { tileSize: 256, maximumNativeZoom: 4 } } as RuntimePaleotopographyCollection}
    frame={{ grid: { url: 'releases/test/grid.bin.gz', width: 3600, height: 1800 } } as RuntimePaleotopographyFrame}
  />)
  expect(postMessage).toHaveBeenCalledWith(expect.objectContaining({ type: 'initialize', url: 'capacitor://localhost/data/releases/test/grid.bin.gz' }))
  unmount()
  expect(terminate).toHaveBeenCalledOnce()
})
