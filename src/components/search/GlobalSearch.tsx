import { useEffect, useRef, useState } from 'react'
import { searchCatalog } from '../../services/catalog'
import { searchStaticData } from '../../data-client/staticDataClient'
import { parseRouteHash, type AppRoute } from '../../utils/routing'
import type { SearchResult } from '../../types'
import { useI18n } from '../../i18n'
import { getPackagePublication, scientificMaturityLabel } from '../../services/publication'
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
  const inputRef = useRef<HTMLInputElement>(null)
  const fallbackResults = searchCatalog(query)
  const results = query.trim() && staticResults ? staticResults : fallbackResults

  useEffect(() => {
    let cancelled = false
    const normalized = query.trim()
    if (!normalized) return () => { cancelled = true }
    const timer = window.setTimeout(() => {
      void searchStaticData(normalized).then((entries) => {
        if (cancelled) return
        setStaticResults(entries.filter((entry) => entry.route).map((entry) => {
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
                  setQuery(event.target.value)
                  setStaticResults(null)
                }}
                placeholder={t('Search taxa, intervals, events, places…')}
              />
              <kbd>ESC</kbd>
            </label>

            <div className="global-search-summary">
              <span>{query ? t('{count} results', { count: results.length }) : t('Featured field stories')}</span>
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
              {results.length === 0 && (
                <div className="global-search-empty">{t('No catalog entry matches “{query}”.', { query })}</div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
