import { useEffect, useState } from 'react'
import type { AppRoute } from '../../utils/routing'
import { loadPbdbReaderIndex } from '../../data-client/staticDataClient'
import { isPbdbTaxonId } from '../../utils/pbdbIdentity.mjs'

interface ReadingTarget {
  name: string
  route: 'registry' | 'pbdb'
  params: Record<string, string>
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

// eslint-disable-next-line react-refresh/only-export-components -- Pure source-target resolver is also exercised as a delivery contract.
export function recordedReadingTargets(sources: readonly unknown[], release?: string, supportedPbdbTargets: ReadonlySet<string> = new Set()): ReadingTarget[] {
  const targets = new Map<string, ReadingTarget>()
  for (const source of sources) {
    if (!isRecord(source) || !Array.isArray(source.readingTargets)) continue
    for (const target of source.readingTargets) {
      if (!isRecord(target) || typeof target.name !== 'string' || !target.name.trim()) continue
      const targetRelease = typeof target.release === 'string' ? target.release : release
      if (typeof target.colId === 'string' && target.colId && targetRelease && (!release || targetRelease === release)) {
        const key = `COL:${targetRelease}:${target.colId}`
        if (!targets.has(key)) targets.set(key, { name: target.name, route: 'registry', params: { release: targetRelease, id: target.colId } })
      } else if (isPbdbTaxonId(target.pbdbTaxonId) && supportedPbdbTargets.has(target.pbdbTaxonId)) {
        const key = `PBDB:${target.pbdbTaxonId}`
        if (!targets.has(key)) targets.set(key, { name: target.name, route: 'pbdb', params: { id: target.pbdbTaxonId } })
      }
    }
  }
  return [...targets.values()]
}

export function SourceRelatedReading({ sources, release, language, onNavigate }: {
  sources: readonly unknown[]
  release?: string
  language: 'en' | 'zh'
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}) {
  const [pbdbLoad, setPbdbLoad] = useState<{ status: 'loading' | 'ready' | 'error'; ids: ReadonlySet<string> }>({ status: 'loading', ids: new Set() })
  const needsPbdb = sources.some(source => isRecord(source) && Array.isArray(source.readingTargets)
    && source.readingTargets.some(target => isRecord(target) && isPbdbTaxonId(target.pbdbTaxonId)))
  useEffect(() => {
    let active = true
    if (needsPbdb) void loadPbdbReaderIndex().then(entries => {
      if (active) setPbdbLoad({ status: 'ready', ids: new Set(entries.map(entry => entry.pbdbTaxonId)) })
    }).catch(() => { if (active) setPbdbLoad({ status: 'error', ids: new Set() }) })
    return () => { active = false }
  }, [needsPbdb])
  const targets = recordedReadingTargets(sources, release, pbdbLoad.ids)
  if (!targets.length && !needsPbdb) return null
  return <nav className="node-reading__contents" aria-label={language === 'zh' ? '关联资料' : 'Related material'}>
    {needsPbdb && pbdbLoad.status === 'loading' && <p role="status">{language === 'zh' ? '正在确认关联 PBDB 资料…' : 'Checking related PBDB material…'}</p>}
    {needsPbdb && pbdbLoad.status === 'error' && <p role="status">{language === 'zh' ? '关联 PBDB 资料暂时无法加载。' : 'Related PBDB material could not be loaded.'}</p>}
    {needsPbdb && pbdbLoad.status === 'ready' && !targets.some(target => target.route === 'pbdb') && <p>{language === 'zh' ? '这些 PBDB 标识没有已发布的阅读资料。' : 'No published reader for these recorded PBDB identifiers.'}</p>}
    {targets.map(target => <button key={`${target.route}:${target.params.id}`} type="button" onClick={() => onNavigate(target.route, target.params)}>{target.name} →</button>)}
  </nav>
}
