import { useEffect, useRef, useState } from 'react'
import { searchCatalog } from '../../services/catalog'
import { parseRouteHash, type AppRoute } from '../../utils/routing'
import './GlobalSearch.css'

const kindLabels = {
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
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const results = searchCatalog(query)

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
    const parsed = parseRouteHash(route)
    onNavigate(parsed.route, Object.fromEntries(parsed.params.entries()))
  }

  return (
    <>
      <button className="global-search-trigger" onClick={() => setOpen(true)}>
        <span aria-hidden="true">⌕</span>
        Search
        <kbd>⌘ K</kbd>
      </button>

      {open && (
        <div className="global-search-overlay" role="dialog" aria-modal="true" aria-label="Search Evo Atlas">
          <button className="global-search-backdrop" onClick={() => setOpen(false)} aria-label="Close search" />
          <section className="global-search-panel">
            <label className="global-search-input">
              <span aria-hidden="true">⌕</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search taxa, intervals, events, places…"
              />
              <kbd>ESC</kbd>
            </label>

            <div className="global-search-summary">
              <span>{query ? `${results.length} results` : 'Featured field stories'}</span>
              <span>English / 中文 / scientific names</span>
            </div>

            <div className="global-search-results">
              {results.map((result) => (
                <button key={`${result.kind}:${result.id}`} onClick={() => selectResult(result.route)}>
                  <span className={`search-kind search-kind--${result.kind}`}>{kindLabels[result.kind]}</span>
                  <span className="search-result-copy">
                    <strong>{result.title}</strong>
                    <small>{result.subtitle}</small>
                  </span>
                  <i aria-hidden="true">↗</i>
                </button>
              ))}
              {results.length === 0 && (
                <div className="global-search-empty">No catalog entry matches “{query}”.</div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
