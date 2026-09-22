import { useEffect, useState } from 'react'
import { loadCatalogueKnowledge, loadCatalogueSanbiDescriptions, loadCatalogueFoaDescriptions, loadCatalogueMesoDescriptions, loadCatalogueMossDescriptions, loadCatalogueMossChinaDescriptions, loadCatalogueFnaDescriptions, loadCatalogueBrazilFloraDescriptions, loadCatalogueTurkeyDescriptions, loadCatalogueFloraChinaDescriptions, loadCataloguePakistanDescriptions, loadCatalogueFdacDescriptions, loadCataloguePlaziDescriptions, loadCatalogueNicaraguaDescriptions, loadCataloguePanamaDescriptions } from '../../data-client/staticDataClient'
import type { CatalogueKnowledgeRecord, CatalogueRuntimeManifest } from '../../data-client/types'
import { CatalogueKnowledge } from './CatalogueKnowledge'
import { MbgFloraDescriptions } from './MbgFloraDescriptions'

export function CatalogueContent({ id, rank, manifest, zh }: { id: string; rank: string; manifest: CatalogueRuntimeManifest; zh: boolean }) {
  const [sanbi, setSanbi] = useState<Awaited<ReturnType<typeof loadCatalogueSanbiDescriptions>>>(null)
  const [sanbiError, setSanbiError] = useState(false)
  const [foa, setFoa] = useState<Awaited<ReturnType<typeof loadCatalogueFoaDescriptions>>>(null)
  const [foaError, setFoaError] = useState(false)
  const [meso, setMeso] = useState<Awaited<ReturnType<typeof loadCatalogueMesoDescriptions>>>(null)
  const [mesoError, setMesoError] = useState(false)
  const [moss, setMoss] = useState<Awaited<ReturnType<typeof loadCatalogueMossDescriptions>>>(null)
  const [mossError, setMossError] = useState(false)
  const [mossChina, setMossChina] = useState<Awaited<ReturnType<typeof loadCatalogueMossChinaDescriptions>>>(null)
  const [mossChinaError, setMossChinaError] = useState(false)
  const [fna, setFna] = useState<Awaited<ReturnType<typeof loadCatalogueFnaDescriptions>>>(null)
  const [fnaError, setFnaError] = useState(false)
  const [brazilFlora, setBrazilFlora] = useState<Awaited<ReturnType<typeof loadCatalogueBrazilFloraDescriptions>>>(null)
  const [brazilFloraError, setBrazilFloraError] = useState(false)
  const [turkey, setTurkey] = useState<Awaited<ReturnType<typeof loadCatalogueTurkeyDescriptions>>>(null)
  const [turkeyError, setTurkeyError] = useState(false)
  const [floraChina, setFloraChina] = useState<Awaited<ReturnType<typeof loadCatalogueFloraChinaDescriptions>>>(null)
  const [floraChinaError, setFloraChinaError] = useState(false)
  const [pakistan, setPakistan] = useState<Awaited<ReturnType<typeof loadCataloguePakistanDescriptions>>>(null)
  const [pakistanError, setPakistanError] = useState(false)
  const [fdac, setFdac] = useState<Awaited<ReturnType<typeof loadCatalogueFdacDescriptions>>>(null)
  const [fdacError, setFdacError] = useState(false)
  const [plazi, setPlazi] = useState<Awaited<ReturnType<typeof loadCataloguePlaziDescriptions>>>(null)
  const [plaziError, setPlaziError] = useState(false)
  const [knowledge, setKnowledge] = useState<CatalogueKnowledgeRecord | null>(null)
  const [knowledgeStatus, setKnowledgeStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [nicaragua, setNicaragua] = useState<Awaited<ReturnType<typeof loadCatalogueNicaraguaDescriptions>>>(null)
  const [nicaraguaError, setNicaraguaError] = useState(false)
  const [panama, setPanama] = useState<Awaited<ReturnType<typeof loadCataloguePanamaDescriptions>>>(null)
  const [panamaError, setPanamaError] = useState(false)
  useEffect(() => {
    let cancelled = false
    const startDescriptions = (available: Set<string> | null) => {
      const request = <T,>(key: keyof CatalogueRuntimeManifest, load: (id: string) => Promise<T>, success: (record: T) => void, failure: (error: boolean) => void) => {
        if (!manifest[key] || rank !== 'species' || (available && !available.has(key))) return
        void load(id).then(record => {
          if (available && !record) throw new Error('Indexed description is missing')
          if (!cancelled) success(record)
        }).catch(() => { if (!cancelled) failure(true) })
      }
      request('mesoDescriptions', loadCatalogueMesoDescriptions, setMeso, setMesoError)
      request('fdacDescriptions', loadCatalogueFdacDescriptions, setFdac, setFdacError)
      request('mossDescriptions', loadCatalogueMossDescriptions, setMoss, setMossError)
      request('mossChinaDescriptions', loadCatalogueMossChinaDescriptions, setMossChina, setMossChinaError)
      request('fnaDescriptions', loadCatalogueFnaDescriptions, setFna, setFnaError)
      request('brazilFloraDescriptions', loadCatalogueBrazilFloraDescriptions, setBrazilFlora, setBrazilFloraError)
      request('turkeyDescriptions', loadCatalogueTurkeyDescriptions, setTurkey, setTurkeyError)
      request('floraChinaDescriptions', loadCatalogueFloraChinaDescriptions, setFloraChina, setFloraChinaError)
      request('pakistanDescriptions', loadCataloguePakistanDescriptions, setPakistan, setPakistanError)
      request('foaDescriptions', loadCatalogueFoaDescriptions, setFoa, setFoaError)
      request('plaziDescriptions', loadCataloguePlaziDescriptions, setPlazi, setPlaziError)
      request('sanbiDescriptions', loadCatalogueSanbiDescriptions, setSanbi, setSanbiError)
      request('nicaraguaDescriptions', loadCatalogueNicaraguaDescriptions, setNicaragua, setNicaraguaError)
      request('panamaDescriptions', loadCataloguePanamaDescriptions, setPanama, setPanamaError)
    }
    if (manifest.knowledge) {
      void loadCatalogueKnowledge(id).then(record => {
        if (cancelled) return
        setKnowledge(record)
        setKnowledgeStatus('ready')
        startDescriptions(new Set(record?.descriptionCollections ?? []))
      }).catch(() => { if (!cancelled) setKnowledgeStatus('error') })
    } else startDescriptions(null)

    return () => { cancelled = true }
  }, [id, rank, manifest])
  return <>
    {manifest.knowledge && <CatalogueKnowledge record={knowledge} status={knowledgeStatus} zh={zh} />}
    {nicaraguaError && <p role="status">{zh ? '尼加拉瓜植物志暂时无法加载。' : 'Flora of Nicaragua could not be loaded.'}</p>}
    {nicaragua && manifest.nicaraguaDescriptions && <MbgFloraDescriptions record={nicaragua} source={manifest.nicaraguaDescriptions.source} zh={zh} />}
    {panamaError && <p role="status">{zh ? '巴拿马植物志暂时无法加载。' : 'Flora of Panama could not be loaded.'}</p>}
    {panama && manifest.panamaDescriptions && <MbgFloraDescriptions record={panama} source={manifest.panamaDescriptions.source} zh={zh} />}
    {plaziError && <p role="status">{zh ? 'Plazi 原文描述暂时无法加载。' : 'Plazi original descriptions could not be loaded.'}</p>}
    {plazi && manifest.plaziDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? 'Plazi 分类描述（原文）' : 'Plazi taxonomic descriptions (original text)'}</h2>
      <p>{zh ? '保留原始文献与标本范围，不代表全球完整档案或当前保育评价。原文可能存在排印、提取或表述差异。' : 'Original publication and specimen scope; not a complete global dossier or current conservation assessment. Source text may contain typographic, extraction or wording discrepancies.'}</p>
      <p><a href={manifest.plaziDescriptions.source.sourceUrl}>{manifest.plaziDescriptions.source.provider}</a> · <a href={manifest.plaziDescriptions.source.licenseUrl}>{manifest.plaziDescriptions.source.license}</a></p>
      {plazi.descriptions.map((description) => <details key={`${description.archiveSha256}:${description.rowNumber}`}>
        <summary>{zh ? ({ diagnosis: '鉴别特征', description: '形态描述', biology_ecology: '生物学与生态' }[description.type]) : description.type} · {description.language}</summary>
        <p lang={description.language} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        <p lang="en">{description.citation}</p>
        <p lang="en">{description.limitations}</p>
        {description.sourceAuthorship && <p>{zh ? '原始署名：' : 'Source authorship: '}{description.sourceAuthorship}</p>}
        {description.sourceScientificName && <p>{zh ? '来源名称：' : 'Source name: '}{description.sourceScientificName} · {description.sourceColUsageId}</p>}
        <small><a href={description.treatmentUrl}>{zh ? '原始分类处理' : 'Original treatment'}</a> · description.txt:{description.rowNumber} · {description.mappingBasis}</small>
      </details>)}
    </section>}
    {sanbiError && <p role="status">{zh ? 'SANBI 描述暂时无法加载。' : 'SANBI descriptions could not be loaded.'}</p>}
    {sanbi && manifest.sanbiDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? 'SANBI 植物描述（英文原文）' : 'SANBI botanical descriptions (original English)'}</h2>
      <p>{zh ? '南非区域来源；不代表全球分布或完整物种档案。不同年份的分类概念可能不同。' : 'Regional South African source; not a global distribution or complete species dossier. Taxonomic concepts may differ across source dates.'}</p>
      <p><a href={manifest.sanbiDescriptions.source.sourceUrl}>{manifest.sanbiDescriptions.source.provider} — {manifest.sanbiDescriptions.source.title}</a> · {manifest.sanbiDescriptions.source.sourceVersion} · {manifest.sanbiDescriptions.source.issued} · <a href={manifest.sanbiDescriptions.source.licenseUrl}>{manifest.sanbiDescriptions.source.license}</a></p>
      {sanbi.descriptions.map((description) => <details key={`${description.rowNumber}:${description.sourceId}`}>
        <summary>{zh ? ({ Morphology: '形态', Diagnostic: '鉴别特征', Habitat: '生境' }[description.type]) : description.type}</summary>
        <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        <p lang="en">{description.citation}</p>
        <small>{sanbi.wfoId} · description.txt:{description.rowNumber} · {description.sourceId}</small>
      </details>)}
    </section>}
    {foaError && <p role="status">{zh ? '澳大利亚植物志描述暂时无法加载。' : 'Flora of Australia descriptions could not be loaded.'}</p>}
    {foa && manifest.foaDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '澳大利亚植物志描述（英文原文）' : 'Flora of Australia descriptions (original English)'}</h2>
      <p>{zh ? '澳大利亚区域历史来源；不代表全球分布或完整物种档案。不同年份的分类概念可能不同。' : 'Historical Australian regional source; not a global distribution or complete species dossier. Taxonomic concepts may differ across source dates.'}</p>
      <p><a href={manifest.foaDescriptions.source.sourceUrl}>{manifest.foaDescriptions.source.provider} — {manifest.foaDescriptions.source.title}</a> · {manifest.foaDescriptions.source.sourceVersion} · <a href={manifest.foaDescriptions.source.licenseUrl}>{manifest.foaDescriptions.source.license}</a></p>
      {foa.descriptions.map((description) => <details key={`${description.rowNumber}:${description.sourceId}`}>
        <summary>{zh ? ({ Morphology: '形态', Biology: '生物学', Diagnostic: '鉴别特征', Ecology: '生态', Habitat: '生境' }[description.type]) : description.type}</summary>
        <p lang={description.language || 'en'} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        <p lang="en">{description.citation}</p>
        <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>CC BY 4.0</a></p>
        <small><a href={description.sourceUrl}>{zh ? '原始来源' : 'Original source'}</a> · {foa.wfoId} · {description.rowNumber} · {description.sourceId}</small>
      </details>)}
    </section>}
    {mesoError && <p role="status">{zh ? '中美洲植物志摘录暂时无法加载。' : 'Flora Mesoamericana excerpts could not be loaded.'}</p>}
    {meso && manifest.mesoDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '中美洲植物志原文摘录' : 'Flora Mesoamericana original excerpts'}</h2>
      <p>{zh ? '区域历史来源，不代表全球分布或完整物种档案。来源档案存在 4,000 字符上限，摘录可能在句中结束；未补写缺失内容。不同年份的分类概念可能不同。' : 'Historical regional source, not a global distribution or complete species dossier. The source archive has a 4,000-character limit and excerpts may end mid-sentence; missing text has not been reconstructed. Taxonomic concepts may differ across dates.'}</p>
      <p><a href={manifest.mesoDescriptions.source.sourceUrl}>{manifest.mesoDescriptions.source.provider} — {manifest.mesoDescriptions.source.title}</a> · <a href={manifest.mesoDescriptions.source.licenseUrl}>{manifest.mesoDescriptions.source.license}</a></p>
      {meso.descriptions.map((description) => <details key={description.rowNumber}>
        <summary>{description.language === 'es' ? (zh ? '西班牙语原文摘录' : 'Original Spanish excerpt') : (zh ? '英语原文摘录' : 'Original English excerpt')}</summary>
        {description.atSourceCharacterLimit && <p>{zh ? '此条达到来源字符上限，可能被截断。' : 'This entry reaches the source character limit and may be truncated.'}</p>}
        <p lang={description.language} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        <ul>{description.references.map((reference) => <li key={reference.sourceId}>
          {reference.sourceUrl ? <a href={reference.sourceUrl}>{reference.citation}</a> : reference.citation}
          <small> · {reference.sourceId} · reference.txt:{reference.referenceRowNumber}</small>
        </li>)}</ul>
        <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>CC BY 4.0</a></p>
        <small>{meso.wfoId} · description.txt:{description.rowNumber}</small>
      </details>)}
    </section>}
    {fdacError && <p role="status">{zh ? 'FDAC 原文描述暂时无法加载。' : 'FDAC original descriptions could not be loaded.'}</p>}
    {fdac && manifest.fdacDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? 'FDAC 植物描述（原文）' : 'FDAC botanical descriptions (original text)'}</h2>
      <p>{zh ? '区域历史来源，原文语言未声明；不代表全球分布或完整物种档案。引用缺失会明确标示，不补写引用。' : 'Historical regional source with no declared source language; not a global distribution or complete species dossier. Missing citations are marked explicitly and have not been invented.'}</p>
      <p><a href={manifest.fdacDescriptions.source.sourceUrl}>{manifest.fdacDescriptions.source.provider} — {manifest.fdacDescriptions.source.title}</a> · {manifest.fdacDescriptions.source.sourceVersion} · {manifest.fdacDescriptions.source.retrievedAt} · <a href={manifest.fdacDescriptions.source.licenseUrl}>{manifest.fdacDescriptions.source.license}</a></p>
      {fdac.descriptions.map((description) => <details key={`${description.rowNumber}:${description.sourceId}`}>
        <summary>{description.type === 'habitat' ? (zh ? '生境' : 'Habitat') : (zh ? '形态' : 'Morphology')}</summary>
        <p lang="und" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        <p>{description.languageNote}</p>
        {description.citationMissingInSource
          ? <p role="note">{zh ? '来源未提供引用；此处不补写。' : 'The source provides no citation for this entry; none has been added.'}</p>
          : description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
        <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
        <small>{fdac.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
      </details>)}
    </section>}
    {mossError && <p role="status">{zh ? '中美洲藓类植物志描述暂时无法加载。' : 'Moss Flora of Central America descriptions could not be loaded.'}</p>}
    {moss && manifest.mossDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '中美洲藓类植物志' : 'Moss Flora of Central America'}</h2>
      <p>{zh ? '区域历史节选，不代表全球分布或完整物种档案。原文为纯文本；达到来源字符边界的条目可能在句中截断。来源末尾未闭合标记仅说明原始标记状态，不断言文字缺失。' : 'Historical regional excerpts, not a complete global species dossier or distribution. Source text is displayed as plain text; entries at the source character boundary may end mid-sentence. An unclosed source-end marker records source markup state only and does not assert missing text.'}</p>
      <p><a href={manifest.mossDescriptions.source.sourceUrl}>{manifest.mossDescriptions.source.provider} — {manifest.mossDescriptions.source.title}</a> · {manifest.mossDescriptions.source.sourceVersion} · {manifest.mossDescriptions.source.retrievedAt} · <a href={manifest.mossDescriptions.source.licenseUrl}>{manifest.mossDescriptions.source.license}</a></p>
      {moss.descriptions.map((description) => <details key={description.rowNumber}>
        <summary>{zh ? '一般描述' : 'General description'}</summary>
        {description.atSourceCharacterLimit && <p role="note">{zh ? '此条达到来源字符边界，可能被截断。' : 'This entry reaches the source character boundary and may be truncated.'}</p>}
        {description.sourceEndUnclosed && <p role="note">{zh ? '来源末尾标记未闭合；这不表示文字缺失。' : 'The source-end marker is unclosed; this does not indicate missing text.'}</p>}
        <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        {description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
        <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
        <small>{moss.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
      </details>)}
    </section>}
    {mossChinaError && <p role="status">{zh ? '中国藓类植物志描述暂时无法加载。' : 'Moss Flora of China descriptions could not be loaded.'}</p>}
    {mossChina && manifest.mossChinaDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '中国藓类植物志' : 'Moss Flora of China'}</h2>
      <p>{zh ? '区域历史英文原文，非完整全球档案或现代全球分布记录。原文以纯文本显示，未补写来源缺失的引用。' : 'Historical regional source in original English; not a complete global dossier or modern global distribution record. Source text is displayed as plain text, with no citations added where the source is missing them.'}</p>
      <p>{zh ? `来源名称：${mossChina.scientificName}${mossChina.sourceAuthorship ? ` ${mossChina.sourceAuthorship}` : ''}` : `Source name: ${mossChina.scientificName}${mossChina.sourceAuthorship ? ` ${mossChina.sourceAuthorship}` : ''}`}</p>
      <p><a href={manifest.mossChinaDescriptions.source.sourceUrl}>{manifest.mossChinaDescriptions.source.provider} — {manifest.mossChinaDescriptions.source.title}</a> · {manifest.mossChinaDescriptions.source.sourceVersion} · {manifest.mossChinaDescriptions.source.retrievedAt} · <a href={manifest.mossChinaDescriptions.source.licenseUrl}>{manifest.mossChinaDescriptions.source.license}</a></p>
      {mossChina.descriptions.map((description) => <details key={description.rowNumber}>
        <summary>{zh ? '一般描述' : 'General description'}</summary>
        <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        {description.citationMissingInSource
          ? <p role="note">{zh ? '来源未提供引用；此处不补写。' : 'The source provides no citation for this entry; none has been added.'}</p>
          : description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
        <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
        <small>{mossChina.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
      </details>)}
    </section>}
    {fnaError && <p role="status">{zh ? '北美植物志描述暂时无法加载。' : 'Flora of North America descriptions could not be loaded.'}</p>}
    {fna && manifest.fnaDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '北美植物志' : 'Flora of North America'}</h2>
      <p>{zh ? '区域历史英文来源，非完整全球档案或现代全球分布记录。原文以纯文本显示，未补写来源缺失的引用。' : 'Historical regional source in original English; not a complete global dossier or modern global distribution record. Source text is displayed as plain text, with no citations added where the source is missing them.'}</p>
      <p><a href={manifest.fnaDescriptions.source.sourceUrl}>{manifest.fnaDescriptions.source.provider} — {manifest.fnaDescriptions.source.title}</a> · {manifest.fnaDescriptions.source.sourceVersion} · {manifest.fnaDescriptions.source.retrievedAt} · <a href={manifest.fnaDescriptions.source.licenseUrl}>{manifest.fnaDescriptions.source.license}</a></p>
      {fna.descriptions.map((description) => <details key={description.rowNumber}>
        <summary>{zh ? '一般描述' : 'General description'}</summary>
        <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        {description.sourceEndUnclosed && <p role="note">{zh ? '来源末尾标记未闭合；仅凭此项无法判断是否缺失文字。' : 'The source-end marker is unclosed; this alone does not establish whether text is missing.'}</p>}
        {description.citationMissingInSource
          ? <p role="note">{zh ? '来源未提供引用；此处不补写。' : 'The source provides no citation for this entry; none has been added.'}</p>
          : description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
        <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
        <small>{fna.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
      </details>)}
    </section>}
    {brazilFloraError && <p role="status">{zh ? '巴西植物志描述暂时无法加载。' : 'Brazil flora descriptions could not be loaded.'}</p>}
    {brazilFlora && manifest.brazilFloraDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '巴西植物志' : 'Brazil flora source descriptions'}</h2>
      <p>{zh ? '巴西区域历史来源（较早快照），不是完整物种档案或当前名录。原文按来源语言以纯文本显示，不推断性状。' : 'Historical regional Brazil source (older snapshot), not a complete species dossier or current census. Original text is shown as plain text in its source language; no traits are inferred.'}</p>
      <p><a href={manifest.brazilFloraDescriptions.source.sourceUrl}>{manifest.brazilFloraDescriptions.source.provider} — {manifest.brazilFloraDescriptions.source.title}</a> · {manifest.brazilFloraDescriptions.source.sourceVersion} · {manifest.brazilFloraDescriptions.source.retrievedAt} · <a href={manifest.brazilFloraDescriptions.source.licenseUrl}>{manifest.brazilFloraDescriptions.source.license}</a></p>
      {brazilFlora.descriptions.map((description) => <details key={description.rowNumber}>
        <summary>{description.type === 'morphology' ? (zh ? '形态' : 'Morphology') : description.type === 'habit' ? (zh ? '习性' : 'Habit') : (zh ? '生境' : 'Habitat')}</summary>
        <p lang={description.language} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        {description.citationScope === 'description-source'
          ? description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)
          : <p>{description.datasetCitation}</p>}
        <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
        <small>{brazilFlora.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''} · {description.citationScope}</small>
      </details>)}
      </section>}
    {turkeyError && <p role="status">{zh ? '土耳其植物志描述暂时无法加载。' : 'Turkey flora descriptions could not be loaded.'}</p>}
    {floraChinaError && <p role="status">{zh ? '中国植物志描述暂时无法加载。' : 'Flora of China descriptions could not be loaded.'}</p>}
    {floraChina && manifest.floraChinaDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '中国植物志来源描述' : 'Flora of China source descriptions'}</h2>
      <p>{zh ? '中国区域历史英文原文，不是完整物种档案或当前名录。描述以纯文本显示，不含图版、PDF 或另行编写的摘要。' : 'Historical regional English source from China, not a complete species dossier or current census. Descriptions are displayed as plain text; no figures, PDFs or authored summaries are included.'}</p>
      <p><a href={manifest.floraChinaDescriptions.source.sourceUrl}>{manifest.floraChinaDescriptions.source.provider} — {manifest.floraChinaDescriptions.source.title}</a> · {manifest.floraChinaDescriptions.source.sourceVersion} · {manifest.floraChinaDescriptions.source.retrievedAt} · <a href={manifest.floraChinaDescriptions.source.licenseUrl}>{manifest.floraChinaDescriptions.source.license}</a></p>
      <details>
        <summary>{zh ? '一般描述' : 'General description'}</summary>
        <p lang={floraChina.language} style={{ whiteSpace: 'pre-wrap' }}>{floraChina.text}</p>
        <p>{floraChina.citation}</p>
        <p>{floraChina.rightsHolder} · {floraChina.rights} · <a href={floraChina.license}>{floraChina.license}</a></p>
        <small>{floraChina.wfoId} · {floraChina.sourceId} · {zh ? '描述记录' : 'description record'} {floraChina.descriptionRecordNumber} · {zh ? '引用记录' : 'reference record'} {floraChina.referenceRecordNumber} · {zh ? '描述来源级引用' : 'description-source citation'}</small>
      </details>
    </section>}
    {turkey && manifest.turkeyDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '土耳其植物志来源描述' : 'Turkey flora source descriptions'}</h2>
      <p>{zh ? '土耳其区域历史来源（2024年2月20日快照），不是完整物种档案或当前名录。土耳其语原文以纯文本显示，不含图版、PDF 或另行编写的摘要。' : 'Historical regional source from Turkey (20 February 2024 snapshot), not a complete species dossier or current census. Original Turkish text is shown as plain text; no figures, PDFs or authored summaries are included.'}</p>
      <p>{zh ? '来源名称：' : 'Source name: '}{turkey.sourceScientificName} {turkey.sourceAuthorship} · {zh ? '科：' : 'Family: '}{turkey.sourceFamily}</p>
      <p><a href={manifest.turkeyDescriptions.source.sourceUrl}>{manifest.turkeyDescriptions.source.provider} — {manifest.turkeyDescriptions.source.title}</a> · {manifest.turkeyDescriptions.source.sourceVersion} · {manifest.turkeyDescriptions.source.retrievedAt} · <a href={manifest.turkeyDescriptions.source.licenseUrl}>{manifest.turkeyDescriptions.source.license}</a></p>
      {turkey.descriptions.map((description) => <details key={description.descriptionRecordNumber}>
        <summary>{zh ? '形态' : 'Morphology'}</summary>
        <p lang={description.language} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        <p>{description.datasetCitation}</p>
        <p>{description.rights} · <a href={description.license}>{description.license}</a></p>
        <small>{turkey.wfoId} · {zh ? '描述记录' : 'description record'} {description.descriptionRecordNumber} · {zh ? '数据集级引用' : 'dataset citation'}</small>
      </details>)}
    </section>}
    {pakistanError && <p role="status">{zh ? '巴基斯坦植物志描述暂时无法加载。' : 'Flora of Pakistan descriptions could not be loaded.'}</p>}
    {pakistan && manifest.pakistanDescriptions && <section className="catalogue-source-card">
      <h2>{zh ? '巴基斯坦植物志' : 'Flora of Pakistan'}</h2>
      <p>{zh ? '区域历史英文原文，非完整全球档案或分布记录。原文以纯文本显示，未补写来源缺失的引用。' : 'Historical regional source in original English; not a complete global species dossier or distribution record. Source text is displayed as plain text, with no citations added where the source is missing them.'}</p>
      <p><a href={manifest.pakistanDescriptions.source.sourceUrl}>{manifest.pakistanDescriptions.source.provider} — {manifest.pakistanDescriptions.source.title}</a> · {manifest.pakistanDescriptions.source.sourceVersion} · {manifest.pakistanDescriptions.source.retrievedAt} · <a href={manifest.pakistanDescriptions.source.licenseUrl}>{manifest.pakistanDescriptions.source.license}</a></p>
      {pakistan.descriptions.map((description) => <details key={description.rowNumber}>
        <summary>{zh ? '一般描述' : 'General description'}</summary>
        <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
        {description.citationMissingInSource
          ? <p role="note">{zh ? '来源未提供引用；此处不补写。' : 'The source provides no citation for this entry; none has been added.'}</p>
          : description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
        <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
        <small>{pakistan.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
      </details>)}
    </section>}
  </>
}
