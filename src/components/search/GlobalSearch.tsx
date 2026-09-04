import { useEffect, useRef, useState } from 'react'
import { searchCatalog } from '../../services/catalog'
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
  const [staticResults, setStaticResults] = useState<SearchResult[] | null>(null)
  const [catalogueResults, setCatalogueResults] = useState<CatalogueRecord[] | null>(null)
  const [catalogueManifest, setCatalogueManifest] = useState<CatalogueRuntimeManifest | null>(null)
  const [catalogueTotalMatches, setCatalogueTotalMatches] = useState(0)
  const [catalogueTargets, setCatalogueTargets] = useState<Record<string, CatalogueTargetRecord>>({})
  const [catalogueError, setCatalogueError] = useState(false)
  const [catalogueLoading, setCatalogueLoading] = useState(false)
  const [backendCatalogueResults, setBackendCatalogueResults] = useState<BackendNameSearchRecord[] | null>(null)
  const [backendReleaseAlias, setBackendReleaseAlias] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const fallbackResults = searchCatalog(query).filter((result) => {
    if (!isPagesPreview) return true
    const parsed = parseRouteHash(result.route)
    return !isPreviewRouteLocked(parsed.route, parsed.params)
  })
  const results = query.trim() && staticResults ? staticResults : fallbackResults

  useEffect(() => {
    let cancelled = false
    const normalized = query.trim()
    if (!normalized) return () => { cancelled = true }
    const timer = window.setTimeout(() => {
      void searchStaticData(normalized).then((entries) => {
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
        if (!cancelled) setStaticResults(null)
      })
      if (!isPagesPreview) {
        setCatalogueLoading(true)
        setCatalogueError(false)
        if (isBackendConfigured()) {
          void Promise.all([loadBackendCapabilities(), searchBackendNames(normalized, { limit: 24 })]).then(([capabilities, response]) => {
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
          void searchCatalogue(normalized).then(({ manifest, records, totalMatches, resolutionTargets }) => {
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
      window.clearTimeout(timer)
    }
  }, [query])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const typing = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA'
      if ((event.key === '/' && !typing) || (event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey))) {
        event.preventDefault()
        setOpen(true)
      }
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open) window.requestAnimationFrame(() => inputRef.current?.focus())
  }, [open])

  const selectResult = (route: string) => {
    setOpen(false)
    setQuery('')
    setStaticResults(null)
    setCatalogueResults(null)
    setCatalogueTotalMatches(0)
    setCatalogueTargets({})
    setCatalogueError(false)
    setCatalogueLoading(false)
    setBackendCatalogueResults(null)
    setBackendReleaseAlias(null)
    const parsed = parseRouteHash(route)
    onNavigate(parsed.route, Object.fromEntries(parsed.params.entries()))
  }

  return (
    <>
      <button className="global-search-trigger" onClick={() => setOpen(true)}>
        <span aria-hidden="true">⌕</span>
        {t('Search')}
        <kbd>⌘ K</kbd>
      </button>

      {open && (
        <div className="global-search-overlay" role="dialog" aria-modal="true" aria-label={t('Search Evo Atlas')}>
          <button className="global-search-backdrop" onClick={() => setOpen(false)} aria-label={t('Close search')} />
          <section className="global-search-panel">
            <label className="global-search-input">
              <span aria-hidden="true">⌕</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  const nextQuery = event.target.value
                  setQuery(nextQuery)
                  setStaticResults(null)
                  setCatalogueResults(null)
                  setBackendCatalogueResults(null)
                  setCatalogueTotalMatches(0)
                  setCatalogueTargets({})
                  setCatalogueError(false)
                  if (!nextQuery.trim()) setCatalogueLoading(false)
                }}
                placeholder={t('Search taxa, intervals, events, places…')}
              />
              <kbd>ESC</kbd>
            </label>

            <div className="global-search-summary">
              <span>{query ? t('{count} results', { count: results.length + catalogueTotalMatches }) : t('Featured field stories')}</span>
              <span>{t('English / 中文 / scientific names')}</span>
            </div>

            <div className="global-search-results">
              {results.map((result) => (
                <button key={`${result.kind}:${result.id}`} onClick={() => selectResult(result.route)}>
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
              {!isPagesPreview && isBackendConfigured() && (backendCatalogueResults ?? []).map((record) => {
                const targetId = record.acceptedId ?? record.id
                return <button
                  type="button"
                  className="catalogue-search-result"
                  key={`backend-col:${record.id}`}
                  onClick={() => {
                    if (!backendReleaseAlias) return
                    setOpen(false)
                    setQuery('')
                    onNavigate('registry', { release: backendReleaseAlias, id: targetId })
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
                  className="catalogue-search-result"
                  key={`col:${record.id}`}
                  onClick={() => {
                    if (!catalogueManifest) return
                    setOpen(false)
                    setQuery('')
                    onNavigate('registry', { release: catalogueManifest.releaseAlias, id: targetId })
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
              {results.length === 0 && (catalogueResults?.length ?? backendCatalogueResults?.length ?? 0) === 0 && !catalogueLoading && !catalogueError && query.trim().length >= 3 && (
                <div className="global-search-empty">{t('No catalog entry matches “{query}”.', { query })}</div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
