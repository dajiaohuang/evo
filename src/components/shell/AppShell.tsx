import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import { frontendContract } from '../../platform/frontendContract'
import './AppShell.css'

const GlobalSearch = lazy(() => import('../search/GlobalSearch').then((module) => ({ default: module.GlobalSearch })))

interface AppShellProps {
  route: AppRoute
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
  children: ReactNode
  immersive?: boolean
  focused?: boolean
}

const navItems: Array<{ route: AppRoute; label: string; labelZh: string; activeRoutes: AppRoute[] }> = [
  { route: 'home', label: 'Explore', labelZh: '探索', activeRoutes: ['home', 'explore'] },
  { route: 'catalog', label: 'Reference', labelZh: '资料', activeRoutes: ['catalog', 'registry', 'taxa', 'events'] },
  { route: 'research', label: 'Workspace', labelZh: '工作区', activeRoutes: ['research', 'compare', 'lab'] },
]
const moreItems: Array<{ route: AppRoute; label: string; activeRoutes: AppRoute[] }> = [
  { route: 'stories', label: 'Stories', activeRoutes: ['stories'] },
  { route: 'data', label: 'Data', activeRoutes: ['data'] },
  { route: 'about', label: 'About', activeRoutes: ['about', 'methods'] },
]

export function AppShell({ route, onNavigate, children, immersive = false, focused = false }: AppShellProps) {
  const { language, setLanguage, t } = useI18n()
  const [online, setOnline] = useState(() => navigator.onLine)
  const [offlineReady, setOfflineReady] = useState(() => document.documentElement.dataset.offlineReady === 'true')
  const [showMoreTools, setShowMoreTools] = useState(false)
  const [updateAvailable, setUpdateAvailable] = useState(() => document.documentElement.dataset.updateAvailable === 'true')

  useEffect(() => {
    const markOnline = () => setOnline(true)
    const markOffline = () => setOnline(false)
    const markReady = () => setOfflineReady(true)
    const markUpdate = () => setUpdateAvailable(true)
    window.addEventListener('online', markOnline)
    window.addEventListener('offline', markOffline)
    window.addEventListener('evo:offline-ready', markReady)
    window.addEventListener('evo:update-available', markUpdate)
    return () => {
      window.removeEventListener('online', markOnline)
      window.removeEventListener('offline', markOffline)
      window.removeEventListener('evo:offline-ready', markReady)
      window.removeEventListener('evo:update-available', markUpdate)
    }
  }, [])

  const skipToContent = () => {
    const main = document.getElementById('main-content')
    main?.scrollIntoView({ block: 'start' })
    main?.focus({ preventScroll: true })
  }

  return (
    <div
      className={`app-shell${immersive ? ' app-shell--immersive' : ''}${focused ? ' app-shell--focused' : ''}`}
      data-frontend-target={frontendContract.target}
      data-frontend-edition={frontendContract.edition}
      data-content-scope={frontendContract.content.scope}
    >
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
          {navItems.map((item) => (
            <button
              key={item.route}
              className={item.activeRoutes.includes(route) ? 'is-active' : ''}
              onClick={() => onNavigate(item.route)}
              aria-current={item.activeRoutes.includes(route) ? 'page' : undefined}
            >
              {language === 'zh' ? item.labelZh : item.label}
            </button>
          ))}
          {(
            <button className="focused-tools-trigger" aria-expanded={showMoreTools} onClick={() => setShowMoreTools((open) => !open)}>
              {t(showMoreTools ? 'Close more pages' : 'Open more pages')}
            </button>
          )}
        </nav>

        {showMoreTools && (
          <nav className="focused-tools-menu" aria-label={t('Detailed tools')}>
            {moreItems.map((item) => (
              <button key={item.route} onClick={() => { setShowMoreTools(false); onNavigate(item.route) }}>{t(item.label)}<span>→</span></button>
            ))}
          </nav>
        )}

        <div className="topbar__utilities">
          {updateAvailable && <button className="app-update-button" onClick={() => window.dispatchEvent(new Event('evo:apply-update'))}>
            {language === 'zh' ? '更新并重新加载' : 'Update and reload'}
          </button>}
          <span className={`connectivity-status${online ? '' : ' is-offline'}`} title={t(online ? offlineReady ? 'Online · offline cache ready' : 'Online' : 'Offline · using cached atlas')}>
            <i />{t(online ? offlineReady ? 'cached' : 'online' : 'offline')}
          </span>
          <div className="language-switch" role="group" aria-label={t('Switch language')}>
            <button className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'} lang="en">EN</button>
            <button className={language === 'zh' ? 'is-active' : ''} onClick={() => setLanguage('zh')} aria-pressed={language === 'zh'} lang="zh-CN">中文</button>
          </div>
          <Suspense fallback={null}><GlobalSearch onNavigate={onNavigate} /></Suspense>
        </div>
      </header>
      <div className="app-shell__content" id="main-content" tabIndex={-1}>{children}</div>
    </div>
  )
}
