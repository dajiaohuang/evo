import { useEffect, useState, type ReactNode } from 'react'
import type { AppRoute } from '../../utils/routing'
import { GlobalSearch } from '../search/GlobalSearch'
import './AppShell.css'

interface AppShellProps {
  route: AppRoute
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
  children: ReactNode
  immersive?: boolean
}

const navItems: Array<{ route: AppRoute; label: string }> = [
  { route: 'home', label: 'Atlas' },
  { route: 'explore', label: 'Explore' },
  { route: 'stories', label: 'Stories' },
  { route: 'compare', label: 'Compare' },
  { route: 'lab', label: 'Lab' },
  { route: 'data', label: 'Data' },
]

export function AppShell({ route, onNavigate, children, immersive = false }: AppShellProps) {
  const [online, setOnline] = useState(() => navigator.onLine)
  const [offlineReady, setOfflineReady] = useState(() => document.documentElement.dataset.offlineReady === 'true')

  useEffect(() => {
    const markOnline = () => setOnline(true)
    const markOffline = () => setOnline(false)
    const markReady = () => setOfflineReady(true)
    window.addEventListener('online', markOnline)
    window.addEventListener('offline', markOffline)
    window.addEventListener('evo:offline-ready', markReady)
    return () => {
      window.removeEventListener('online', markOnline)
      window.removeEventListener('offline', markOffline)
      window.removeEventListener('evo:offline-ready', markReady)
    }
  }, [])

  return (
    <div className={`app-shell${immersive ? ' app-shell--immersive' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to atlas content</a>
      <header className="topbar">
        <button className="brand" onClick={() => onNavigate('home')} aria-label="Evo Atlas home">
          <span className="brand__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand__text">
            <strong>EVO</strong>
            <small>ATLAS</small>
          </span>
        </button>

        <nav className="topbar__nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.route}
              className={route === item.route ? 'is-active' : ''}
              onClick={() => onNavigate(item.route)}
              aria-current={route === item.route ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="topbar__utilities">
          <span className={`connectivity-status${online ? '' : ' is-offline'}`} title={online ? offlineReady ? 'Online · offline cache ready' : 'Online' : 'Offline · using cached atlas'}>
            <i />{online ? offlineReady ? 'cached' : 'online' : 'offline'}
          </span>
          <GlobalSearch onNavigate={onNavigate} />
        </div>
      </header>
      <div className="app-shell__content" id="main-content" tabIndex={-1}>{children}</div>
    </div>
  )
}
