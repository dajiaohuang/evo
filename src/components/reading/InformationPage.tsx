import { lazy, Suspense } from 'react'
import { useI18n } from '../../i18n'
import type { AppRoute } from '../../utils/routing'

const DataPage = lazy(() => import('../pages/InfoPages').then(module => ({ default: module.DataPage })))
const MethodsPage = lazy(() => import('../pages/InfoPages').then(module => ({ default: module.MethodsPage })))
const AboutPage = lazy(() => import('../pages/PortalPages').then(module => ({ default: module.AboutPage })))
const tabs = ['science', 'sources', 'about'] as const

export function InformationPage({ params, onNavigate }: { params: URLSearchParams; onNavigate: (route: AppRoute, params?: Record<string, string>) => void }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const tab = tabs.find(tab => tab === params.get('tab')) ?? 'science'
  const labels = zh ? ['科学解释', '来源与下载', '关于'] : ['Science explained', 'Sources and downloads', 'About']
  return <div className="information-reader">
    <nav className="reading-window__toolbar" aria-label={zh ? '资料与方法' : 'Information and methods'}>
      <div>{tabs.map((value, index) => <button type="button" key={value} aria-pressed={tab === value} onClick={() => onNavigate('info', {tab: value})}>{labels[index]}</button>)}</div>
    </nav>
    <Suspense fallback={<p role="status">{zh ? '正在打开资料…' : 'Opening the material…'}</p>}>
      {tab === 'science' ? <MethodsPage onNavigate={onNavigate} /> : tab === 'sources' ? <DataPage onNavigate={onNavigate} /> : <AboutPage onNavigate={onNavigate} />}
    </Suspense>
  </div>
}
