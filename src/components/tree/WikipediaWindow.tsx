import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../../i18n'
import './WikipediaWindow.css'
import { loadWikipediaMapping, wikipediaSummary } from '../../services/wikipedia'

export function WikipediaWindow({ name, onClose }: { name: string; onClose: () => void }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const dialog = useRef<HTMLDialogElement>(null)
  const [result, setResult] = useState<{ title: string; extract: string; url: string; locale: string } | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'missing' | 'ambiguous' | 'not-applicable' | 'error'>('loading')
  const [verifiedUrl, setVerifiedUrl] = useState<string | null>(null)
  const [genusArticle, setGenusArticle] = useState(false)
  useEffect(() => {
    const opener = document.activeElement
    const element = dialog.current
    element?.showModal()
    return () => {
      element?.close()
      if (opener instanceof HTMLElement || opener instanceof SVGElement) opener.focus()
    }
  }, [])
  useEffect(() => {
    const controller = new AbortController()
    let active = true
    void loadWikipediaMapping().then(mapping => {
      const entry = mapping.entries[name]
      if (active && entry?.status === 'matched' && entry.url) {
        setVerifiedUrl(language === 'zh' && entry.zhTitle ? `https://zh.wikipedia.org/wiki/${encodeURIComponent(entry.zhTitle.replaceAll(' ', '_'))}` : entry.url)
        setGenusArticle(entry.scope === 'species-mentioned-in-genus-lead')
      }
    }).catch(() => undefined)
    const timeout = window.setTimeout(() => { if (active) { setStatus('error'); controller.abort() } }, 15000)
    void wikipediaSummary(name, language, controller.signal)
      .then(data => {
        if (!active || controller.signal.aborted) return
        if (data.status === 'ready') setResult(data)
        setStatus(data.status)
      }).catch(() => { if (!controller.signal.aborted) setStatus('error') })
      .finally(() => window.clearTimeout(timeout))
    return () => { active = false; window.clearTimeout(timeout); controller.abort() }
  }, [name, language])
  return createPortal(<dialog className="wikipedia-window" ref={dialog} aria-labelledby="wikipedia-heading" onCancel={onClose}>
    <header><div><small>Wikipedia · {result?.locale.toUpperCase() ?? (zh ? '百科预览' : 'PREVIEW')}</small><h2 id="wikipedia-heading">{result?.title ?? name}</h2><i>{name}</i></div><button type="button" onClick={onClose} aria-label={zh ? '关闭维基百科浮窗' : 'Close Wikipedia window'}>×</button></header>
    <div className="wikipedia-window__body" aria-live="polite">
      {genusArticle && <p>{zh ? '该物种在属级条目的导言中有明确记录，以下为对应属的百科条目。' : 'This species is explicitly named in the genus article’s lead. The preview is the corresponding genus article.'}</p>}
      {status === 'loading' && <p role="status">{zh ? '正在读取维基百科…' : 'Loading Wikipedia…'}</p>}
      {status === 'ready' && <><p lang={result?.locale}>{result?.extract}</p><small>{zh ? '摘要来自维基百科，完整条目、作者及许可见原文。' : 'Summary from Wikipedia. See the article for full text, contributors and license.'} <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></small></>}
      {status === 'missing' && <p>{zh ? '未找到名称对应的唯一条目，可前往维基百科搜索。' : 'No unambiguous article found for this name. Search Wikipedia instead.'}</p>}
      {status === 'ambiguous' && <p>{zh ? '这个名称存在同名条目，尚未确认唯一对应。请搜索并核对分类。' : 'This name is ambiguous. Search Wikipedia and check the classification.'}</p>}
      {status === 'not-applicable' && <p>{zh ? '这是项目内的研究材料或导航分组，不是独立物种条目。' : 'This is a project research item or navigation group, not a taxon article.'}</p>}
      {status === 'error' && <p role="alert">{zh ? '暂时无法加载维基百科，可直接打开原站查询。' : 'Wikipedia could not be loaded. Open the site to look up this name.'}</p>}
    </div>
    <footer><a href={result?.url ?? verifiedUrl ?? `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(name)}`} target="_blank" rel="noopener noreferrer">{zh ? (result || verifiedUrl ? '打开完整 Wikipedia 条目 ↗' : '在 Wikipedia 搜索 ↗') : (result || verifiedUrl ? 'Open full Wikipedia article ↗' : 'Search Wikipedia ↗')}</a></footer>
  </dialog>, document.body)
}
