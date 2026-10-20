import { Activity, Suspense, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { useI18n } from '../../i18n'
import './ReadingWindow.css'

// Keep recent reading positions and local interactions while a map scene,
// comparison or source window is opened. This is an in-session UI cache.
function isVisible(element: HTMLElement) {
  if (!element.isConnected || element.closest('[hidden], [aria-hidden="true"], [inert]')) return false
  for (let ancestor: HTMLElement | null = element; ancestor; ancestor = ancestor.parentElement) {
    const style = window.getComputedStyle(ancestor)
    if (style.display === 'none' || style.visibility === 'hidden' || style.visibility === 'collapse') return false
  }
  return true
}

function isVisibleOutsideReader(element: HTMLElement, reader: HTMLElement | null) {
  return !reader?.contains(element) && isVisible(element)
}

function focusFallback(reader: HTMLElement | null) {
  const active = document.activeElement
  if (active instanceof HTMLElement && isVisibleOutsideReader(active, reader)) return
  const candidate = document.querySelector<HTMLElement>(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )
  if (candidate && isVisibleOutsideReader(candidate, reader)) candidate.focus({ preventScroll: true })
}

export function ReadingWindow({ routeKey, page, onClose, closeLabel }: { routeKey: string; page: ReactNode; onClose: () => void; closeLabel?: string }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const visible = Boolean(page)
  const [entries, setEntries] = useState<Array<{ key: string; page: ReactNode }>>([])
  const [expanded, setExpanded] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const signature = `${visible}:${routeKey}`
  const [shownKey, setShownKey] = useState(signature)
  const scroll = useRef<HTMLDivElement>(null)
  const reader = useRef<HTMLElement>(null)
  const positions = useRef(new Map<string, number>())
  const closeButton = useRef<HTMLButtonElement>(null)
  const opener = useRef<HTMLElement | null>(null)
  const wasVisible = useRef(false)
  const previousRouteKey = useRef(routeKey)
  if (page && !entries.some(entry => entry.key === routeKey)) {
    const next = [...entries.slice(-5), { key: routeKey, page }]
    setEntries(next)
  }
  if (shownKey !== signature) { setShownKey(signature); if (visible) setCollapsed(false) }
  useLayoutEffect(() => {
    const routeChanged = previousRouteKey.current !== routeKey
    previousRouteKey.current = routeKey
    if (visible) {
      if (!wasVisible.current) {
        const active = document.activeElement
        opener.current = active instanceof HTMLElement && !reader.current?.contains(active) ? active : null
        closeButton.current?.focus({ preventScroll: true })
      } else if (routeChanged) {
        const active = document.activeElement
        const activeIsVisibleReaderControl = active instanceof HTMLElement
          && Boolean(reader.current?.contains(active))
          && isVisible(active)
        const activeIsVisibleOutside = active instanceof HTMLElement && isVisibleOutsideReader(active, reader.current)
        if (!activeIsVisibleReaderControl && !activeIsVisibleOutside) closeButton.current?.focus({ preventScroll: true })
      }
      if (scroll.current) scroll.current.scrollTop = positions.current.get(routeKey) ?? 0
    } else if (wasVisible.current) {
      const trigger = opener.current
      if (trigger && isVisibleOutsideReader(trigger, reader.current)) trigger.focus({ preventScroll: true })
      else focusFallback(reader.current)
      opener.current = null
    }
    wasVisible.current = visible
  }, [routeKey, visible])
  useLayoutEffect(() => {
    for (const key of positions.current.keys()) if (!entries.some(entry => entry.key === key)) positions.current.delete(key)
  }, [entries])
  const closeReader = () => onClose()
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!visible || event.key !== 'Escape' || event.defaultPrevented) return
    const target = event.target
    if (!(target instanceof HTMLElement)) return
    if (target.isContentEditable || target.closest('input, textarea, select, [role="dialog"], [role="alertdialog"]')) return
    event.preventDefault()
    event.stopPropagation()
    closeReader()
  }
  if (!entries.length) return null
  return <aside ref={reader} onKeyDown={handleKeyDown} className={`reading-window${expanded ? ' is-expanded' : ''}${collapsed ? ' is-collapsed' : ''}${!page ? ' is-hidden' : ''}`} aria-label={zh ? '阅读窗' : 'Reading window'}>
    {collapsed && <button className="reading-window__resume" onClick={() => setCollapsed(false)}>{zh ? '继续阅读' : 'Resume reading'} ↑</button>}
    <Activity mode={collapsed ? 'hidden' : 'visible'}>
      <div className="reading-window__toolbar">
        <span>{zh ? '阅读' : 'Reading'}</span>
        <div>
          <button type="button" onClick={() => setExpanded(!expanded)} aria-pressed={expanded}>{zh ? expanded ? '地图并排' : '扩大阅读窗' : expanded ? 'Alongside the map' : 'Expand reading'}</button>
          <button type="button" onClick={() => setCollapsed(true)} aria-label={zh ? '收起阅读窗' : 'Fold reading window'}>⌄</button>
          <button ref={closeButton} type="button" onClick={closeReader} aria-label={closeLabel ?? (zh ? '关闭阅读窗，回到地图' : 'Close reading and return to the map')}>×</button>
        </div>
      </div>
      <div className="reading-window__scroll" ref={scroll} onScroll={event => positions.current.set(routeKey, event.currentTarget.scrollTop)}>
        {entries.map(entry => <Activity key={entry.key} mode={page && entry.key === routeKey ? 'visible' : 'hidden'}><Suspense fallback={<p role="status">{zh ? '正在打开内容…' : 'Opening this account…'}</p>}>{entry.page}</Suspense></Activity>)}
      </div>
    </Activity>
  </aside>
}
