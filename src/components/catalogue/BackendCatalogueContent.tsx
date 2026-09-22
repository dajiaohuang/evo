import { useEffect, useState } from 'react'
import { loadCatalogueManifest, loadCurrentManifest } from '../../data-client/staticDataClient'
import type { CatalogueRuntimeManifest } from '../../data-client/types'
import { CatalogueContent } from './CatalogueContent'

// The API owns taxonomy; bundled content is attached only to the exact dataset
// and catalogue release, never silently borrowed from a different release.
export function BackendCatalogueContent({ id, rank, release, datasetVersion, zh }: {
  id: string; rank: string; release: string; datasetVersion: string; zh: boolean
}) {
  const [manifest, setManifest] = useState<CatalogueRuntimeManifest | null>(null)
  const [unavailable, setUnavailable] = useState(false)
  useEffect(() => {
    let cancelled = false
    void loadCurrentManifest().then(async current => {
      if (current.datasetVersion !== datasetVersion || current.catalogue.releaseAlias !== release) throw new Error('Content dataset differs from the API dataset')
      const loaded = await loadCatalogueManifest()
      if (loaded.releaseAlias !== release) throw new Error('Content catalogue release mismatch')
      if (!cancelled) setManifest(loaded)
    }).catch(() => { if (!cancelled) setUnavailable(true) })
    return () => { cancelled = true }
  }, [datasetVersion, release])
  if (unavailable) return <p role="status">{zh ? '当前服务版本没有可读取的匹配内容包；尚无法判断正文覆盖情况。' : 'A matching content package is unavailable for this service version; text coverage is unknown.'}</p>
  if (!manifest) return <p role="status">{zh ? '正在读取匹配版本的内容包…' : 'Loading the matching content package…'}</p>
  return <CatalogueContent key={`${release}:${id}`} id={id} rank={rank} manifest={manifest} zh={zh} />
}
