import { useEffect, useRef, useState } from 'react'
import { loadCatalogueKnowledge, loadCatalogueManifest, loadCurrentManifest } from '../../data-client/staticDataClient'
import type { CatalogueKnowledgeProfile } from '../../data-client/types'
import { ReaderInlineText } from '../reading/ReaderInlineText'

export function CatalogueChildPreview({ id, release, datasetVersion, name, authorship, rank, status, zh, onRead }: {
  id: string; release: string; datasetVersion?: string; name: string; authorship?: string | null; rank: string; status: string; zh: boolean; onRead: () => void
}) {
  const language = zh ? 'zh' : 'en'
  const key = `${datasetVersion ?? ''}:${release}:${id}`
  const [result, setResult] = useState<{ key: string; state: 'loading' | 'ready' | 'error'; profile?: CatalogueKnowledgeProfile }>({ key, state: 'ready' })
  const request = useRef<{ key: string; state: 'idle' | 'loading' | 'ready' | 'error'; generation: number }>({ key, state: 'idle', generation: 0 })
  useEffect(() => {
    request.current = { key, state: 'idle', generation: request.current.generation + 1 }
    return () => { request.current.generation++; request.current.state = 'ready' }
  }, [key])
  const load = (retry = false) => {
    const current = request.current
    if (current.key !== key || current.state === 'loading' || current.state === 'ready' || (current.state === 'error' && !retry)) return
    current.state = 'loading'
    const generation = current.generation
    setResult({ key, state: 'loading' })
    void (async () => {
      if (datasetVersion !== undefined) {
        const manifest = await loadCurrentManifest()
        if (manifest.datasetVersion !== datasetVersion || manifest.catalogue.releaseAlias !== release) throw new Error('Content dataset differs from the API dataset')
        const catalogue = await loadCatalogueManifest()
        if (catalogue.releaseAlias !== release) throw new Error('Content catalogue release mismatch')
      }
      const record = await loadCatalogueKnowledge(id)
      if (record && (record.colId !== id || record.releaseAlias !== release || (record.profile && record.profile.colId !== id))) throw new Error('Preview identity or release mismatch')
      return record?.profile
    })().then(profile => {
      if (request.current.key !== key || request.current.generation !== generation) return
      request.current.state = 'ready'; setResult({ key, state: 'ready', profile })
    }).catch(() => {
      if (request.current.key !== key || request.current.generation !== generation) return
      request.current.state = 'error'; setResult({ key, state: 'error' })
    })
  }
  const current = result.key === key ? result : undefined
  const profile = current?.profile
  const ids = profile?.summarySourceIds
  const valid = !!profile?.summary?.en?.trim() && !!profile.summary.zh?.trim() && Array.isArray(ids) && ids.length > 0 && new Set(ids).size === ids.length && ids.every(id => typeof id === 'string' && !!id.trim() && profile.sources.filter(source => source.id === id).length === 1)
  const text = valid ? profile?.summary?.[language] : undefined
  const sourceText = (value: string | { en?: string; zh?: string } | undefined) => typeof value === 'string' ? value : value?.[language] ?? value?.en ?? value?.zh ?? ''
  return <li className="catalogue-child-preview" onMouseEnter={() => load()} onFocus={() => load()}>
    <button type="button" onClick={onRead}><span><i>{name}</i>{authorship && <small>{authorship}</small>}</span><span><small>{rank} · {status}</small><code>{id}</code></span></button>
    <details key={key} onToggle={event => { if (event.currentTarget.open) load() }}>
      <summary>{zh ? '科学短介绍' : 'Short science preview'}</summary>
      {current?.state === 'loading' && <p role="status">{zh ? '正在读取介绍…' : 'Loading the preview…'}</p>}
      {current?.state === 'error' && <><p role="status">{zh ? '短介绍暂不可用；仍可打开名称资料。' : 'The preview is unavailable; the name record can still be opened.'}</p><button type="button" onClick={() => load(true)}>{zh ? '重试短介绍' : 'Retry preview'}</button></>}
      {current?.state === 'ready' && (text ? <p lang={language}><ReaderInlineText text={text} /></p> : <p>{zh ? '没有来源绑定有效的双语科学短介绍。' : 'No valid source-bound bilingual science preview is available.'}</p>)}
      {text && profile && <details><summary>{zh ? '短介绍来源与适用范围' : 'Preview sources and scope'}</summary><ul>{ids!.map(id => profile.sources.find(source => source.id === id)!).map(source => <li key={source.id}>
        {source.url ? <a href={source.url} target="_blank" rel="noreferrer">{sourceText(source.title)}</a> : <strong>{sourceText(source.title)}</strong>}
        {source.scope && <p>{sourceText(source.scope)}</p>}
        {source.locator && <p>{source.locator}</p>}
        {['version', 'publishedAt', 'accessedAt', 'license', 'licenseVersion', 'licenseAppliesTo', 'licenseAssessment', 'rights', 'rightsHolder', 'attribution'].map(field => { const value = source[field as keyof typeof source]; return typeof value === 'string' ? <p key={field}>{value}</p> : null })}
        {source.licenseUrl && <a href={source.licenseUrl} target="_blank" rel="noreferrer">{zh ? '许可原文' : 'Recorded licence'}</a>}
      </li>)}</ul></details>}
    </details>
  </li>
}
