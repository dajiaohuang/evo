import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import './AppShell.css'

const GlobalSearch = lazy(() => import('../search/GlobalSearch').then((module) => ({ default: module.GlobalSearch })))

interface AppShellProps {
  route: AppRoute
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
  children: ReactNode
  immersive?: boolean
  focused?: boolean
}

const navItems: Array<{ route: AppRoute; label: string; activeRoutes: AppRoute[] }> = [
  { route: 'home', label: 'Atlas', activeRoutes: ['home'] },
  { route: 'catalog', label: 'Catalog', activeRoutes: ['catalog', 'taxa', 'events'] },
  { route: 'stories', label: 'Stories', activeRoutes: ['stories'] },
  { route: 'explore', label: 'Explorer', activeRoutes: ['explore'] },
  { route: 'research', label: 'Research', activeRoutes: ['research', 'compare', 'lab'] },
  { route: 'data', label: 'Data', activeRoutes: ['data'] },
  { route: 'about', label: 'About', activeRoutes: ['about', 'methods'] },
]

export function AppShell({ route, onNavigate, children, immersive = false, focused = false }: AppShellProps) {
  const { language, setLanguage, t } = useI18n()
  const [online, setOnline] = useState(() => navigator.onLine)
  const [offlineReady, setOfflineReady] = useState(() => document.documentElement.dataset.offlineReady === 'true')
  const [showMoreTools, setShowMoreTools] = useState(false)

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

  const skipToContent = () => {
    const main = document.getElementById('main-content')
    main?.scrollIntoView({ block: 'start' })
    main?.focus({ preventScroll: true })
  }

  return (
    <div className={`app-shell${immersive ? ' app-shell--immersive' : ''}${focused ? ' app-shell--focused' : ''}`}>
      <button className="skip-link" type="button" onClick={skipToContent}>{t('Skip to atlas content')}</button>
      <header className="topbar">
        <button className="brand" onClick={() => onNavigate('home')} aria-label={t('Evo Atlas home')}>
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

        <nav className="topbar__nav" aria-label={t('Primary navigation')}>
          {(focused ? navItems.filter((item) => item.route === 'home') : navItems).map((item) => (
            <button
              key={item.route}
              className={item.activeRoutes.includes(route) ? 'is-active' : ''}
              onClick={() => onNavigate(item.route)}
              aria-current={item.activeRoutes.includes(route) ? 'page' : undefined}
            >
              {t(item.label)}
            </button>
          ))}
          {focused && (
            <button className="focused-tools-trigger" aria-expanded={showMoreTools} onClick={() => setShowMoreTools((open) => !open)}>
              {t(showMoreTools ? 'Close more pages' : 'Open more pages')}
            </button>
          )}
        </nav>

        {focused && showMoreTools && (
          <nav className="focused-tools-menu" aria-label={t('Detailed tools')}>
            {navItems.filter((item) => item.route !== 'home' && item.route !== 'explore').map((item) => (
              <button key={item.route} onClick={() => { setShowMoreTools(false); onNavigate(item.route) }}>{t(item.label)}<span>→</span></button>
            ))}
          </nav>
        )}

        <div className="topbar__utilities">
          <span className={`connectivity-status${online ? '' : ' is-offline'}`} title={t(online ? offlineReady ? 'Online · offline cache ready' : 'Online' : 'Offline · using cached atlas')}>
            <i />{t(online ? offlineReady ? 'cached' : 'online' : 'offline')}
          </span>
          <div className="language-switch" role="group" aria-label={t('Switch language')}>
            <button className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'} lang="en">EN</button>
            <button className={language === 'zh' ? 'is-active' : ''} onClick={() => setLanguage('zh')} aria-pressed={language === 'zh'} lang="zh-CN">中文</button>
          </div>
          {!focused && <Suspense fallback={null}><GlobalSearch onNavigate={onNavigate} /></Suspense>}
        </div>
      </header>
      <div className="app-shell__content" id="main-content" tabIndex={-1}>{children}</div>
    </div>
  )
}
