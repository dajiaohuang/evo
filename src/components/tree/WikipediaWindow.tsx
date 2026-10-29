import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../../i18n'
import './WikipediaWindow.css'
import { loadCatalogueWikipedia, loadWikipediaMapping, wikipediaSummary, type WikipediaAbstract } from '../../services/wikipedia'

export function WikipediaWindow({ name, catalogueId, onClose }: { name: string; catalogueId?: string; onClose: () => void }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const dialog = useRef<HTMLDialogElement>(null)
  const [result, setResult] = useState<{ title: string; extract: string; url: string; locale: string; revisionId?: number; revisionTimestamp?: string; attributionUrl?: string; licenseUrl?: string; licenseLabel?: string } | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'missing' | 'ambiguous' | 'candidates' | 'not-applicable' | 'not-assessed' | 'error'>('loading')
  const [options, setOptions] = useState<Array<{ item: string; parentNames: string[]; url: string; snapshot?: WikipediaAbstract }>>([])
  const [showingCandidate, setShowingCandidate] = useState(false)
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
    if (catalogueId) void loadCatalogueWikipedia(catalogueId).then(entry => {
      if (active && (entry?.status === 'matched' || entry?.status === 'abstract-pending') && entry.url) setVerifiedUrl(entry.url)
    }).catch(() => undefined)
    else void loadWikipediaMapping().then(mapping => {
      const entry = mapping.entries[name]
      if (active && entry?.status === 'matched' && entry.url) {
        setVerifiedUrl(language === 'zh' && entry.zhTitle ? `https://zh.wikipedia.org/wiki/${encodeURIComponent(entry.zhTitle.replaceAll(' ', '_'))}` : entry.url)
        setGenusArticle(entry.scope === 'species-mentioned-in-genus-lead')
      }
    }).catch(() => undefined)
    const timeout = window.setTimeout(() => { if (active) { setStatus('error'); controller.abort() } }, 15000)
    void wikipediaSummary(name, language, controller.signal, catalogueId)
      .then(data => {
        if (!active || controller.signal.aborted) return
        if (data.status === 'ready') setResult(data)
        if (data.status === 'candidates') setOptions(data.options)
        setStatus(data.status)
      }).catch(() => { if (!controller.signal.aborted) setStatus('error') })
      .finally(() => window.clearTimeout(timeout))
    return () => { active = false; window.clearTimeout(timeout); controller.abort() }
  }, [name, language, catalogueId])
  return createPortal(<dialog className="wikipedia-window" ref={dialog} aria-labelledby="wikipedia-heading" onCancel={onClose}>
    <header><div><small>Wikipedia · {result?.locale.toUpperCase() ?? (zh ? '百科预览' : 'PREVIEW')}</small><h2 id="wikipedia-heading">{result?.title ?? name}</h2><i>{name}</i></div><button type="button" onClick={onClose} aria-label={zh ? '关闭维基百科浮窗' : 'Close Wikipedia window'}>×</button></header>
    <div className="wikipedia-window__body" aria-live="polite">
      {genusArticle && <p>{zh ? '该物种在属级条目的导言中有明确记录，以下为对应属的百科条目。' : 'This species is explicitly named in the genus article’s lead. The preview is the corresponding genus article.'}</p>}
      {showingCandidate && <p>{zh ? '这是同名候选条目，分类身份尚未确认。' : 'This is a same-name candidate; its taxonomic identity has not been confirmed.'}</p>}
      {status === 'loading' && <p role="status">{zh ? '正在读取维基百科…' : 'Loading Wikipedia…'}</p>}
      {status === 'ready' && <><p lang={result?.locale}>{result?.extract}</p><small>{zh ? '摘要来自维基百科，保存时的修订：' : 'Wikipedia summary, saved revision: '}{result?.revisionId ?? '—'}{result?.revisionTimestamp ? ` · ${result.revisionTimestamp}` : ''} · <a href={result?.attributionUrl ?? result?.url} target="_blank" rel="noopener noreferrer">{zh ? '作者和编辑历史' : 'Contributors and history'}</a> · <a href={result?.licenseUrl ?? 'https://creativecommons.org/licenses/by-sa/4.0/'} target="_blank" rel="noopener noreferrer">{result?.licenseLabel ?? 'CC BY-SA 4.0'}</a></small></>}
      {status === 'missing' && <p>{zh ? '未找到名称对应的唯一条目，可前往维基百科搜索。' : 'No unambiguous article found for this name. Search Wikipedia instead.'}</p>}
      {status === 'ambiguous' && <p>{zh ? '这个名称存在同名条目，尚未确认唯一对应。请搜索并核对分类。' : 'This name is ambiguous. Search Wikipedia and check the classification.'}</p>}
      {status === 'candidates' && <><p>{zh ? '发现同名条目，但分类身份尚未确认。请选择候选并核对上级分类。' : 'Same-name articles were found, but their taxonomic identity is unconfirmed. Select a candidate and check its parent taxon.'}</p><ul>{options.map(option => <li key={option.item}>
        <span>{option.parentNames.length ? option.parentNames.join(' / ') : (zh ? '上级分类未知' : 'Parent taxon unknown')} · {option.item.split('/').at(-1)}</span>{' '}
        {option.snapshot?.title && option.snapshot.extract && option.snapshot.url
          ? <button type="button" onClick={() => { const snapshot = option.snapshot!; setResult({ title: snapshot.title!, extract: snapshot.extract!, url: snapshot.url!, locale: snapshot.locale, revisionId: snapshot.revisionId, revisionTimestamp: snapshot.revisionTimestamp, attributionUrl: snapshot.attributionUrl, licenseUrl: snapshot.licenseUrl, licenseLabel: snapshot.licenseLabel }); setShowingCandidate(true); setStatus('ready') }}>{zh ? '查看候选摘要' : 'View candidate summary'}</button>
          : <a href={option.url} target="_blank" rel="noopener noreferrer">{zh ? '打开候选条目 ↗' : 'Open candidate ↗'}</a>}
      </li>)}</ul></>}
      {status === 'not-applicable' && <p>{zh ? '这是项目内的研究材料或导航分组，不是独立物种条目。' : 'This is a project research item or navigation group, not a taxon article.'}</p>}
      {status === 'not-assessed' && <p>{zh ? '该节点的本地百科摘要尚未完成核对。' : 'The local Wikipedia summary for this node has not been verified yet.'}</p>}
      {status === 'error' && <p role="alert">{zh ? '暂时无法读取本站保存的维基百科摘要，可打开原站查询。' : 'The locally saved Wikipedia summary could not be loaded. Open Wikipedia to look up this name.'}</p>}
    </div>
    <footer><a href={result?.url ?? verifiedUrl ?? `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(name)}`} target="_blank" rel="noopener noreferrer">{zh ? (result || verifiedUrl ? '打开完整 Wikipedia 条目 ↗' : '在 Wikipedia 搜索 ↗') : (result || verifiedUrl ? 'Open full Wikipedia article ↗' : 'Search Wikipedia ↗')}</a></footer>
  </dialog>, document.body)
}
