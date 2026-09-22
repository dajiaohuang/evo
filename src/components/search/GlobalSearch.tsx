import { useEffect, useRef, useState } from 'react'
import { searchCatalogue, searchStaticData } from '../../data-client/staticDataClient'
import type { CatalogueRecord, CatalogueRuntimeManifest, CatalogueTargetRecord } from '../../data-client/types'
import { parseRouteHash, type AppRoute } from '../../utils/routing'
import type { SearchResult } from '../../types'
import { useI18n } from '../../i18n'
import { getPackagePublication, scientificMaturityLabel } from '../../services/publication'
import { isPagesPreview, isPreviewRouteLocked } from '../../config/pagesPreview'
import { isBackendConfigured, loadBackendCapabilities, searchBackendNames, type BackendNameSearchRecord } from '../../data-client/backendClient'
import './GlobalSearch.css'

type SearchResultKind = SearchResult['kind']

const kindLabels: Record<SearchResultKind, string> = {
  taxon: 'Taxon',
  event: 'Event',
  story: 'Story',
  tree: 'Tree',
  interval: 'Time',
  place: 'Place',
}

interface GlobalSearchProps {
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

export function GlobalSearch({ onNavigate }: GlobalSearchProps) {
  const { language, t } = useI18n()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [attempt, setAttempt] = useState(0)
  const [composing, setComposing] = useState(false)
  const [staticResults, setStaticResults] = useState<SearchResult[] | null>(null)
  const [staticError, setStaticError] = useState(false)
  const [catalogueResults, setCatalogueResults] = useState<CatalogueRecord[] | null>(null)
  const [catalogueManifest, setCatalogueManifest] = useState<CatalogueRuntimeManifest | null>(null)
  const [catalogueTotalMatches, setCatalogueTotalMatches] = useState(0)
  const [catalogueTargets, setCatalogueTargets] = useState<Record<string, CatalogueTargetRecord>>({})
  const [catalogueError, setCatalogueError] = useState(false)
  const [catalogueLoading, setCatalogueLoading] = useState(false)
  const [backendCatalogueResults, setBackendCatalogueResults] = useState<BackendNameSearchRecord[] | null>(null)
  const [backendReleaseAlias, setBackendReleaseAlias] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const results = staticResults ?? []

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()
    const normalized = query.trim()
    if (!open || !normalized || composing) return () => { cancelled = true; controller.abort() }
    const timer = window.setTimeout(() => {
      void searchStaticData(normalized, 16, controller.signal).then((entries) => {
        if (cancelled) return
        setStaticResults(entries.filter((entry) => {
          if (!entry.route) return false
          if (!isPagesPreview) return true
          const parsed = parseRouteHash(entry.route)
          return !isPreviewRouteLocked(parsed.route, parsed.params)
        }).map((entry) => {
          const kind: SearchResultKind = entry.kind === 'event' ? 'event'
            : entry.kind === 'story' ? 'story'
              : entry.kind === 'period' || entry.kind === 'interval' ? 'interval'
                : entry.kind === 'place' ? 'place'
                  : entry.kind === 'profile' ? 'taxon'
                    : 'tree'
          const publication = getPackagePublication(entry.packageId)
          return {
            id: entry.id,
            kind,
            title: entry.titleEn ?? entry.title,
            titleZh: entry.titleZh,
            subtitle: entry.title,
            subtitleZh: entry.title,
            keywords: entry.terms.filter((term): term is string => typeof term === 'string').join(' '),
            route: entry.route!,
            scientificMaturity: publication?.scientificMaturity,
          }
        }))
      }).catch(() => {
        if (!cancelled) { setStaticResults(null); setStaticError(true) }
      })
      if (!isPagesPreview && normalized.length >= 3) {
        setCatalogueLoading(true)
        setCatalogueError(false)
        if (isBackendConfigured()) {
          void Promise.all([loadBackendCapabilities(), searchBackendNames(normalized, { limit: 24, signal: controller.signal })]).then(([capabilities, response]) => {
            if (cancelled) return
            setBackendReleaseAlias(capabilities.treeIndex.releaseAlias)
            setBackendCatalogueResults(response.records.filter((record) => record.kind === 'catalogue-name'))
            setCatalogueTotalMatches(response.totalMatches)
            setCatalogueLoading(false)
          }).catch(() => {
            if (!cancelled) {
              setBackendCatalogueResults(null)
              setCatalogueTotalMatches(0)
              setCatalogueError(true)
              setCatalogueLoading(false)
            }
          })
        } else {
          void searchCatalogue(normalized, 12, controller.signal).then(({ manifest, records, totalMatches, resolutionTargets }) => {
            if (cancelled) return
            setCatalogueManifest(manifest)
            setCatalogueResults(records)
            setCatalogueTotalMatches(totalMatches)
            setCatalogueTargets(resolutionTargets)
            setCatalogueLoading(false)
          }).catch(() => {
            if (!cancelled) {
              setCatalogueResults(null)
              setCatalogueTotalMatches(0)
              setCatalogueTargets({})
              setCatalogueError(true)
              setCatalogueLoading(false)
            }
          })
        }
      }
    }, 120)
    return () => {
      cancelled = true
      controller.abort()
      window.clearTimeout(timer)
    }
  }, [open, query, attempt, composing])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.isComposing || event.keyCode === 229) return
      const target = event.target as HTMLElement | null
      const typing = target?.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]')
      if ((event.key === '/' && !typing && !event.ctrlKey && !event.metaKey && !event.altKey) || (event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey))) {
        event.preventDefault()
        setOpen(true)
      }
      if (event.key === 'Escape') { setOpen(false); setComposing(false) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const origin = document.activeElement instanceof HTMLElement && document.activeElement !== document.body ? document.activeElement : triggerRef.current
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus())
    const keepFocus = (event: KeyboardEvent) => {
      if (event.isComposing || event.keyCode === 229) return
      const resultButtons = Array.from(panelRef.current?.querySelectorAll<HTMLButtonElement>('[data-search-result]') ?? [])
      const current = resultButtons.indexOf(document.activeElement as HTMLButtonElement)
      const inInput = document.activeElement === inputRef.current
      if (event.key === 'ArrowDown' && (inInput || current >= 0) && resultButtons.length) {
        event.preventDefault(); resultButtons[(current + 1) % resultButtons.length]?.focus(); return
      }
      if (event.key === 'ArrowUp' && (inInput || current >= 0) && resultButtons.length) {
        event.preventDefault()
        if (current === 0) inputRef.current?.focus()
        else resultButtons[inInput ? resultButtons.length - 1 : current - 1]?.focus()
        return
      }
      if (current >= 0 && (event.key === 'Home' || event.key === 'End')) {
        event.preventDefault(); resultButtons[event.key === 'Home' ? 0 : resultButtons.length - 1]?.focus(); return
      }
      if (inInput && event.key === 'Enter' && resultButtons.length) { event.preventDefault(); resultButtons[0].click(); return }
      if (event.key !== 'Tab') return
      const focusable = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('input, button, a[href]') ?? [])
      const first = focusable[0]
      const last = focusable.at(-1)
      if (!panelRef.current?.contains(document.activeElement)) { event.preventDefault(); first?.focus() }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    window.addEventListener('keydown', keepFocus)
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('keydown', keepFocus); if (origin?.isConnected) origin.focus() }
  }, [open])

  const resetResults = () => {
    setStaticResults(null)
    setStaticError(false)
    setCatalogueResults(null)
    setCatalogueTotalMatches(0)
    setCatalogueTargets({})
    setCatalogueError(false)
    setCatalogueLoading(false)
    setBackendCatalogueResults(null)
    setBackendReleaseAlias(null)
  }

  const selectResult = (route: string) => {
    setOpen(false)
    setComposing(false)
    setQuery('')
    resetResults()
    const parsed = parseRouteHash(route)
    onNavigate(parsed.route, Object.fromEntries(parsed.params.entries()))
  }

  return (
    <>
      <button ref={triggerRef} className="global-search-trigger" aria-label={t('Search')} onClick={() => setOpen(true)}>
        <span aria-hidden="true">⌕</span>
        {t('Search')}
        <kbd>⌘ K</kbd>
      </button>

      {open && (
        <div className="global-search-overlay" role="dialog" aria-modal="true" aria-label={t('Search Evo Atlas')}>
          <button className="global-search-backdrop" tabIndex={-1} aria-hidden="true" onClick={() => { setOpen(false); setComposing(false) }} />
          <section ref={panelRef} className="global-search-panel">
            <div className="global-search-input">
              <span aria-hidden="true">⌕</span>
              <input
                ref={inputRef}
                value={query}
                aria-label={t('Search taxa, intervals, events, places…')}
                aria-describedby="global-search-help"
                autoComplete="off"
                onCompositionStart={() => setComposing(true)}
                onCompositionEnd={() => setComposing(false)}
                onChange={(event) => {
                  const nextQuery = event.target.value
                  setQuery(nextQuery)
                  resetResults()
                }}
                placeholder={t('Search taxa, intervals, events, places…')}
              />
              <button type="button" className="global-search-close" aria-label={t('Close search')} onClick={() => { setOpen(false); setComposing(false) }}>×</button>
            </div>

            <div className="global-search-summary">
              <span role="status" aria-live="polite">{query.trim() ? composing ? (language === 'zh' ? '正在输入…' : 'Composing…') : (staticResults === null && !staticError) || catalogueLoading ? (language === 'zh' ? '正在搜索…' : 'Searching…') : t('{count} results', { count: results.length + catalogueTotalMatches }) : language === 'zh' ? '搜索名称与证据' : 'Search names and evidence'}</span>
              <span>{t('English / 中文 / scientific names')}</span>
            </div>
            <p id="global-search-help" className="global-search-help">{language === 'zh' ? '↑ ↓ 选择结果 · Enter 打开 · Esc 关闭' : '↑ ↓ choose a result · Enter opens · Esc closes'}</p>

            <div className="global-search-results">
              {staticError && <p role="alert">{language === 'zh' ? '内容索引暂不可用，请重试。' : 'The content index is unavailable. Please retry.'}</p>}
              {results.map((result) => (
                <button data-search-result key={`${result.kind}:${result.id}`} onClick={() => selectResult(result.route)}>
                  <span className={`search-kind search-kind--${result.kind}`}>{t(kindLabels[result.kind])}</span>
                  <span className="search-result-copy">
                    <strong>{t(language === 'zh' ? result.titleZh ?? result.title : result.title)}</strong>
                    <small>{language === 'zh' && result.subtitleZh
                      ? result.subtitleZh
                      : result.subtitle.split(' · ').map((part) => t(part)).join(' · ')}</small>
                    {result.scientificMaturity && <small className={`search-maturity search-maturity--${result.scientificMaturity}`}>{t(scientificMaturityLabel(result.scientificMaturity))}</small>}
                  </span>
                  <i aria-hidden="true">↗</i>
                </button>
              ))}
              {query.trim() && !isPagesPreview && (
                <div className="catalogue-search-heading">
                  <span>{language === 'zh' ? 'Catalogue of Life 命名登记册' : 'Catalogue of Life nomenclatural registry'}</span>
                  <small>
                    {isBackendConfigured()
                      ? `${backendReleaseAlias ?? 'current'} · ${language === 'zh' ? '后端按需索引 · 不等同于内容档案' : 'backend-routed index · not an Atlas dossier'}`
                      : `${catalogueManifest?.releaseAlias ?? 'COL26.8'} · ${catalogueManifest?.releaseDate ?? '2026-08-20'} · ${language === 'zh' ? '上游约 80% 覆盖 · 不等同于内容档案' : '≈80% upstream coverage · not an Atlas dossier'}`}
                    {(catalogueResults || backendCatalogueResults) && catalogueTotalMatches > (catalogueResults?.length ?? backendCatalogueResults?.length ?? 0)
                      ? ` · ${language === 'zh' ? `显示前 ${catalogueResults?.length ?? backendCatalogueResults?.length ?? 0} / 共 ${catalogueTotalMatches}` : `showing ${catalogueResults?.length ?? backendCatalogueResults?.length ?? 0} of ${catalogueTotalMatches}`}`
                      : ''}
                  </small>
                </div>
              )}
              {!isPagesPreview && catalogueLoading && <div className="catalogue-search-note">{language === 'zh' ? '正在按需读取名称分片…' : 'Loading the relevant name shard…'}</div>}
              {!isPagesPreview && catalogueError && <div className="catalogue-search-note catalogue-search-note--error">{language === 'zh' ? '物种注册表暂不可用，或分片完整性校验失败。' : 'The species registry is unavailable, or shard verification failed.'}</div>}
              {(staticError || catalogueError) && <button type="button" className="global-search-retry" onClick={() => { resetResults(); setAttempt(value => value + 1); inputRef.current?.focus() }}>{language === 'zh' ? '重试搜索' : 'Retry search'}</button>}
              {!isPagesPreview && isBackendConfigured() && (backendCatalogueResults ?? []).map((record) => {
                const targetId = record.acceptedId ?? record.id
                return <button
                  type="button"
                  data-search-result
                  className="catalogue-search-result"
                  key={`backend-col:${record.id}`}
                  onClick={() => {
                    if (!backendReleaseAlias) return
                    selectResult(`#/registry?release=${encodeURIComponent(backendReleaseAlias)}&id=${encodeURIComponent(targetId)}`)
                  }}
                >
                  <span className="search-kind search-kind--catalogue">CoL</span>
                  <span className="search-result-copy">
                    <strong><i>{record.title}</i>{record.authorship ? ` ${record.authorship}` : ''}</strong>
                    <small>{record.status === 'accepted' ? (language === 'zh' ? '已接受物种名' : 'Accepted catalogue name') : `${record.status ?? record.kind} · ${language === 'zh' ? '解析至' : 'resolves to'} ${targetId}`}</small>
                    <small>{record.source}</small>
                  </span>
                  <i aria-hidden="true">→</i>
                </button>
              })}
              {!isPagesPreview && !isBackendConfigured() && (catalogueResults ?? []).map((record) => {
                const targetId = record.status === 'accepted' ? record.id : record.acceptedId ?? record.id
                const target = catalogueTargets[targetId]
                const classification = record.classification
                  .map((value, index) => value ? `${catalogueManifest?.classificationFields[index] ?? ''} ${value}`.trim() : null)
                  .filter((value): value is string => Boolean(value))
                  .slice(-2)
                  .join(' · ')
                return <button
                  type="button"
                  data-search-result
                  className="catalogue-search-result"
                  key={`col:${record.id}`}
                  onClick={() => {
                    if (!catalogueManifest) return
                    selectResult(`#/registry?release=${encodeURIComponent(catalogueManifest.releaseAlias)}&id=${encodeURIComponent(targetId)}`)
                  }}
                >
                  <span className="search-kind search-kind--catalogue">CoL</span>
                  <span className="search-result-copy">
                    <strong>
                      <i>{record.authorship && record.scientificName.endsWith(record.authorship)
                        ? record.scientificName.slice(0, -record.authorship.length).trim()
                        : record.scientificName}</i>
                      {record.authorship ? ` ${record.authorship}` : ''}
                    </strong>
                    <small>{record.status === 'accepted'
                      ? (language === 'zh' ? '已接受物种名' : 'Accepted species name')
                      : `${record.status} · ${language === 'zh' ? '解析至' : 'resolves to'} ${target?.status ?? 'target'} ${targetId}`}</small>
                    <small>{[classification, record.sourceDatasetId ? `source ${record.sourceDatasetId}` : null].filter(Boolean).join(' · ')}</small>
                  </span>
                  <i aria-hidden="true">→</i>
                </button>
              })}
              {!isPagesPreview && query.trim().length > 0 && query.trim().length < 3 && (
                <div className="catalogue-search-note">{language === 'zh' ? '输入至少 3 个字符以搜索完整物种登记册。' : 'Type at least 3 characters to search the complete species registry.'}</div>
              )}
              {staticResults !== null && !staticError && results.length === 0 && (catalogueResults?.length ?? backendCatalogueResults?.length ?? 0) === 0 && !catalogueLoading && !catalogueError && query.trim().length >= 3 && (
                <div className="global-search-empty">{t('No catalog entry matches “{query}”.', { query })}</div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
