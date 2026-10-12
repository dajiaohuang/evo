import { Activity, Suspense, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { useI18n } from '../../i18n'
import './ReadingWindow.css'

// Keep recent reading positions and local interactions while a map scene,
// comparison or source window is opened. This is an in-session UI cache.
export function ReadingWindow({ routeKey, page, onClose }: { routeKey: string; page: ReactNode; onClose: () => void }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const visible = Boolean(page)
  const [entries, setEntries] = useState<Array<{ key: string; page: ReactNode }>>([])
  const [expanded, setExpanded] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const signature = `${visible}:${routeKey}`
  const [shownKey, setShownKey] = useState(signature)
  const scroll = useRef<HTMLDivElement>(null)
  const positions = useRef(new Map<string, number>())
  const closeButton = useRef<HTMLButtonElement>(null)
  if (page && !entries.some(entry => entry.key === routeKey)) {
    const next = [...entries.slice(-5), { key: routeKey, page }]
    setEntries(next)
  }
  if (shownKey !== signature) { setShownKey(signature); if (visible) setCollapsed(false) }
  useLayoutEffect(() => {
    if (visible && scroll.current) scroll.current.scrollTop = positions.current.get(routeKey) ?? 0
    if (visible) closeButton.current?.focus({ preventScroll: true })
  }, [routeKey, visible])
  useLayoutEffect(() => {
    for (const key of positions.current.keys()) if (!entries.some(entry => entry.key === key)) positions.current.delete(key)
  }, [entries])
  if (!entries.length) return null
  return <aside className={`reading-window${expanded ? ' is-expanded' : ''}${collapsed ? ' is-collapsed' : ''}${!page ? ' is-hidden' : ''}`} aria-label={zh ? '阅读窗' : 'Reading window'}>
    {collapsed && <button className="reading-window__resume" onClick={() => setCollapsed(false)}>{zh ? '继续阅读' : 'Resume reading'} ↑</button>}
    <Activity mode={collapsed ? 'hidden' : 'visible'}>
      <div className="reading-window__toolbar">
        <span>{zh ? '阅读' : 'Reading'}</span>
        <div>
          <button type="button" onClick={() => setExpanded(!expanded)} aria-pressed={expanded}>{zh ? expanded ? '地图并排' : '扩大阅读窗' : expanded ? 'Alongside the map' : 'Expand reading'}</button>
          <button type="button" onClick={() => setCollapsed(true)} aria-label={zh ? '收起阅读窗' : 'Fold reading window'}>⌄</button>
          <button ref={closeButton} type="button" onClick={onClose} aria-label={zh ? '关闭阅读窗，回到地图' : 'Close reading and return to the map'}>×</button>
        </div>
      </div>
      <div className="reading-window__scroll" ref={scroll} onScroll={event => positions.current.set(routeKey, event.currentTarget.scrollTop)}>
        {entries.map(entry => <Activity key={entry.key} mode={page && entry.key === routeKey ? 'visible' : 'hidden'}><Suspense fallback={<p role="status">{zh ? '正在打开内容…' : 'Opening this account…'}</p>}>{entry.page}</Suspense></Activity>)}
      </div>
    </Activity>
  </aside>
}
