import { useState, useEffect, useCallback, type ReactNode } from 'react'
import './AppLayout.css'

interface AppLayoutProps {
  map: ReactNode
  tree: ReactNode
  timeline: ReactNode
  details: ReactNode
}

export function AppLayout({ map, tree, timeline, details }: AppLayoutProps) {
  const [fullscreen, setFullscreen] = useState<'tree' | 'map' | null>(null)

  const exitFullscreen = useCallback(() => setFullscreen(null), [])

  useEffect(() => {
    if (!fullscreen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [fullscreen])

  const cls = ['app-layout', fullscreen ? `app-layout--fs-${fullscreen}` : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls}>
      <div
        className="app-layout__tree"
        onDoubleClick={(e) => {
          if ((e.target as HTMLElement).closest('svg')) {
            setFullscreen(fullscreen === 'tree' ? null : 'tree')
          }
        }}
      >
        {tree}
        {fullscreen === 'tree' && (
          <button className="app-layout__fs-exit" onClick={exitFullscreen}>
            ✕
          </button>
        )}
      </div>
      <div className="app-layout__details">{details}</div>
      <div
        className="app-layout__map"
        onDoubleClick={(e) => {
          const el = e.target as HTMLElement
          if (!el.closest('.leaflet-interactive') && !el.closest('.leaflet-control')) {
            setFullscreen(fullscreen === 'map' ? null : 'map')
          }
        }}
      >
        {map}
        {fullscreen === 'map' && (
          <button className="app-layout__fs-exit" onClick={exitFullscreen}>
            ✕
          </button>
        )}
      </div>
      <div className="app-layout__timeline">{timeline}</div>
    </div>
  )
}
