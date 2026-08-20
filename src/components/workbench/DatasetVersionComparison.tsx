import { useEffect, useMemo, useState } from 'react'
import { loadReleaseComparison, loadReleaseHistory, type ReleaseComparison, type ReleaseHistory } from '../../services/releaseHistory'
import { useI18n } from '../../i18n'

function megabytes(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(2)} MiB`
}

export function DatasetVersionComparison() {
  const { t } = useI18n()
  const [history, setHistory] = useState<ReleaseHistory | null>(null)
  const [olderVersion, setOlderVersion] = useState('')
  const [newerVersion, setNewerVersion] = useState('')
  const [comparison, setComparison] = useState<ReleaseComparison | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    void loadReleaseHistory().then((next) => {
      if (cancelled) return
      setHistory(next)
      setNewerVersion(next.releases[0]?.datasetVersion ?? '')
      setOlderVersion(next.releases[1]?.datasetVersion ?? next.releases[0]?.datasetVersion ?? '')
    }).catch((caught: unknown) => {
      if (!cancelled) setError(caught instanceof Error ? caught.message : String(caught))
    })
    return () => { cancelled = true }
  }, [])

  const releases = useMemo(() => history?.releases ?? [], [history])
  const older = useMemo(() => releases.find((release) => release.datasetVersion === olderVersion), [olderVersion, releases])
  const newer = useMemo(() => releases.find((release) => release.datasetVersion === newerVersion), [newerVersion, releases])

  useEffect(() => {
    if (!older || !newer || older.datasetVersion === newer.datasetVersion) {
      return
    }
    let cancelled = false
    void loadReleaseComparison(older, newer).then((next) => { if (!cancelled) { setComparison(next); setError(null) } }).catch((caught: unknown) => {
      if (!cancelled) setError(caught instanceof Error ? caught.message : String(caught))
    })
    return () => { cancelled = true }
  }, [newer, older])

  const activeComparison = comparison?.olderVersion === olderVersion && comparison.newerVersion === newerVersion ? comparison : null

  return (
    <section className="dataset-version-workspace">
      <header><div><small>{t('Dataset version comparison')}</small><h2>{t('Compare immutable release inventories.')}</h2></div><span>{t('Checksum-based · local in browser')}</span></header>
      <p>{t('Comparison uses retained release file indexes. Changed means a stable artifact path has a different SHA-256; it does not by itself explain the scientific meaning of the change.')}</p>
      <div className="dataset-version-workspace__controls">
        <label><span>{t('Older release')}</span><select value={olderVersion} onChange={(event) => setOlderVersion(event.target.value)}>{releases.map((release) => <option key={release.datasetVersion} value={release.datasetVersion}>{release.datasetVersion} · {release.generatedAt}</option>)}</select></label>
        <span>→</span>
        <label><span>{t('Newer release')}</span><select value={newerVersion} onChange={(event) => setNewerVersion(event.target.value)}>{releases.map((release) => <option key={release.datasetVersion} value={release.datasetVersion}>{release.datasetVersion} · {release.generatedAt}</option>)}</select></label>
      </div>
      {!history && !error && <p role="status">{t('Loading retained releases…')}</p>}
      {error && <p role="alert">{error}</p>}
      {history && releases.length < 2 && <p>{t('Only one retained release is available; comparison requires two.')}</p>}
      {olderVersion === newerVersion && olderVersion && <p>{t('Choose two different retained releases.')}</p>}
      {activeComparison && <><div className="dataset-version-workspace__metrics"><article><strong>+{activeComparison.added.length}</strong><span>{t('added artifacts')}</span></article><article><strong>{activeComparison.changed.length}</strong><span>{t('changed artifacts')}</span></article><article><strong>−{activeComparison.removed.length}</strong><span>{t('removed artifacts')}</span></article><article><strong>{activeComparison.unchanged}</strong><span>{t('unchanged artifacts')}</span></article><article><strong>{activeComparison.byteDelta >= 0 ? '+' : ''}{megabytes(activeComparison.byteDelta)}</strong><span>{t('compressed byte delta')}</span></article></div><details><summary>{t('Inspect changed artifact paths')}</summary>{[...activeComparison.added.map((path) => `+ ${path}`), ...activeComparison.changed.map((path) => `~ ${path}`), ...activeComparison.removed.map((path) => `− ${path}`)].slice(0, 100).map((path) => <code key={path}>{path}</code>)}</details></>}
    </section>
  )
}
