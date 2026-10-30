import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../../i18n'
import './WikipediaWindow.css'
import { loadCatalogueWikipedia, loadWikipediaMapping } from '../../services/wikipedia'

export function WikipediaWindow({ name, catalogueId, onClose }: { name: string; catalogueId?: string; onClose: () => void }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const dialog = useRef<HTMLDialogElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'candidates' | 'not-assessed' | 'not-applicable' | 'error'>('loading')
  const [url, setUrl] = useState<string | null>(null)
  const [options, setOptions] = useState<Array<{ item: string; parentNames: string[]; url: string }>>([])
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
    let active = true
    setStatus('loading')
    setUrl(null)
    setOptions([])
    setGenusArticle(false)
    const timeout = window.setTimeout(() => { if (active) setStatus('error') }, 15000)
    const request = catalogueId ? loadCatalogueWikipedia(catalogueId).then(entry => {
      if (!active) return
      if ((entry?.status === 'matched' || entry?.status === 'abstract-pending') && entry.url) {
        setUrl(entry.url)
        setStatus('ready')
      } else if (entry?.status === 'candidate' && entry.options?.length) {
        setOptions(entry.options.map(option => ({ item: option.item, parentNames: option.parentNames ?? [], url: option.url })))
        setStatus('candidates')
      } else setStatus('not-assessed')
    }) : loadWikipediaMapping().then(mapping => {
      if (!active) return
      const entry = mapping.entries[name]
      if (entry?.status === 'matched' && entry.url) {
        setUrl(zh && entry.zhTitle ? `https://zh.wikipedia.org/wiki/${encodeURIComponent(entry.zhTitle.replaceAll(' ', '_'))}` : entry.url)
        setGenusArticle(entry.scope === 'species-mentioned-in-genus-lead')
        setStatus('ready')
      } else setStatus(entry?.status === 'not-applicable' ? 'not-applicable' : 'not-assessed')
    })
    void request.catch(() => { if (active) setStatus('error') }).finally(() => window.clearTimeout(timeout))
    return () => { active = false; window.clearTimeout(timeout) }
  }, [name, zh, catalogueId])
  return createPortal(<dialog className="wikipedia-window" ref={dialog} aria-labelledby="wikipedia-heading" onCancel={onClose}>
    <header><div><small>Wikipedia</small><h2 id="wikipedia-heading">{name}</h2></div><button type="button" onClick={onClose} aria-label={zh ? '关闭维基百科浮窗' : 'Close Wikipedia window'}>×</button></header>
    <div className="wikipedia-window__body" aria-live="polite">
      {genusArticle && <p>{zh ? '该物种在属级条目中有记录，链接指向对应的属。' : 'This species is mentioned in the linked genus article.'}</p>}
      {status === 'loading' && <p role="status">{zh ? '正在读取链接…' : 'Loading link…'}</p>}
      {status === 'ready' && <p>{zh ? '已找到 Wikipedia 条目，点击下方链接查看。' : 'A Wikipedia article is available through the link below.'}</p>}
      {status === 'candidates' && <><p>{zh ? '发现候选或关联条目，分类身份尚未确认。请核对条目说明。' : 'Candidate or related articles were found; taxonomic identity is unverified. Check each description.'}</p><ul>{options.map(option => <li key={`${option.item}:${option.url}`}><span>{option.parentNames.length ? option.parentNames.join(' / ') : (zh ? '上级分类未知' : 'Parent taxon unknown')} · {option.item.split('/').at(-1)}</span>{' '}<a href={option.url} target="_blank" rel="noopener noreferrer">{zh ? '打开候选条目 ↗' : 'Open candidate ↗'}</a></li>)}</ul></>}
      {status === 'not-applicable' && <p>{zh ? '这是项目内的研究材料或导航分组，不是独立物种条目。' : 'This is a project research item or navigation group, not a taxon article.'}</p>}
      {status === 'not-assessed' && <p>{zh ? '该节点的 Wikipedia 链接尚未确认。' : 'The Wikipedia link for this node has not been confirmed.'}</p>}
      {status === 'error' && <p role="alert">{zh ? '暂时无法读取链接，可在 Wikipedia 搜索。' : 'The link could not be loaded. Search Wikipedia instead.'}</p>}
    </div>
    <footer><a href={url ?? `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(name)}`} target="_blank" rel="noopener noreferrer">{zh ? (url ? '打开完整 Wikipedia 条目 ↗' : '在 Wikipedia 搜索 ↗') : (url ? 'Open full Wikipedia article ↗' : 'Search Wikipedia ↗')}</a></footer>
  </dialog>, document.body)
}
