import { buildPbdbReaderDelivery } from './pbdb-reader.mjs'
import { isPbdbTaxonId, pbdbClassificationId } from '../src/utils/pbdbIdentity.mjs'
import { staticPathSegment } from '../src/utils/staticPath.mjs'
import { paragraphParts } from '../src/utils/nodeReading.mjs'
import { readerInlineHtml } from '../src/utils/readerInlineHtml.mjs'

const escapeHtml = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;')

function localized(value, language) {
  return typeof value === 'string' ? value : value?.[language] ?? value?.en ?? value?.zh ?? ''
}

function pageAccounts(record) {
  return Array.isArray(record?.contexts) && record.contexts.length ? record.contexts : [record]
}

export function pbdbReaderSegmentPath(id) {
  if (!isPbdbTaxonId(id)) return null
  return `pbdb/${staticPathSegment(id)}/`
}

export function pbdbReaderPath(id, language = 'en') {
  const segment = pbdbReaderSegmentPath(id)
  return segment ? `${language === 'zh' ? 'zh/' : ''}${segment}` : null
}

export function pbdbReaderHref(id, { language = 'en', basePath = '/evo', staticEdition = true, supportedIds = new Set() } = {}) {
  if (!isPbdbTaxonId(id) || !supportedIds.has(id)) return null
  const base = basePath.replace(/\/$/, '')
  if (!staticEdition) return `${base}/#/pbdb?id=${encodeURIComponent(id)}`
  return `${base}/${pbdbReaderPath(id, language)}`
}

/** Group canonical identities with the PBDB delivery codec, preserving its separate source contexts. */
export function groupPbdbReaderPages(records, datasetVersion = 'static-pages') {
  const payloads = new Map()
  const delivery = buildPbdbReaderDelivery(records, {
    datasetVersion,
    writeGzipJson: (path, value) => {
      payloads.set(path, value)
      return { url: path, bytes: 0, sha256: '0'.repeat(64) }
    },
  })
  return delivery.files.flatMap(file => payloads.get(file.path) ?? [])
}

export function pbdbIdentityContexts(record) {
  const id = record?.pbdbTaxonId
  if (!isPbdbTaxonId(id)) return []
  return pageAccounts(record).flatMap((account, accountIndex) => {
    const identities = []
    if (account?.identity) identities.push({ identity: account.identity, context: null, accountIndex })
    for (const scoped of Array.isArray(account?.scopedIdentities) ? account.scopedIdentities : []) {
      if (scoped?.identity) identities.push({ identity: scoped.identity, context: scoped.context ?? null, accountIndex })
    }
    return identities.filter(({ identity }) => pbdbClassificationId(identity.classification) === id)
  })
}

export function pbdbReaderNames(record) {
  const names = new Set([
    ...pbdbIdentityContexts(record).map(({ identity }) => identity.scientificName),
    ...pageAccounts(record).map(account => account.profile?.scientificName),
  ].filter(value => typeof value === 'string' && value.trim()))
  return [...names].sort((left, right) => left.localeCompare(right, 'en'))
}

export function pbdbReaderName(record) {
  const names = pbdbReaderNames(record)
  return names.length === 1 ? names[0] : `PBDB taxon ${record.pbdbTaxonId}`
}

export function pbdbReaderDirectoryItems(records) {
  return records.map(record => {
    const name = pbdbReaderName(record)
    const ranks = new Set(pbdbIdentityContexts(record).map(({ identity }) => identity.rank).filter(Boolean))
    const rank = ranks.size === 1 ? [...ranks][0] : null
    return {
      path: pbdbReaderSegmentPath(record.pbdbTaxonId),
      titleEn: name,
      titleZh: pbdbReaderName(record),
      metaEn: `${record.pbdbTaxonId}${rank ? ` · ${rank}` : ''}`,
      metaZh: `${record.pbdbTaxonId}${rank ? ` · ${rank}` : ''}`,
    }
  }).filter(item => item.path).sort((left, right) => left.titleEn.localeCompare(right.titleEn, 'en') || left.path.localeCompare(right.path))
}

export function buildPbdbTaxonomyIndex(records) {
  const byId = new Map(records.filter(record => isPbdbTaxonId(record?.pbdbTaxonId)).map(record => [record.pbdbTaxonId, record]))
  const members = new Map()
  for (const record of byId.values()) {
    for (const { identity } of pbdbIdentityContexts(record)) {
      const parentId = identity.classification?.parentSourceIdentifier
      if (!isPbdbTaxonId(parentId) || parentId === record.pbdbTaxonId || !byId.has(parentId)) continue
      if (!members.has(parentId)) members.set(parentId, new Set())
      members.get(parentId).add(record.pbdbTaxonId)
    }
  }
  return new Map([...byId].map(([id, record]) => [id, {
    record,
    memberIds: [...(members.get(id) ?? [])].sort((left, right) => left.localeCompare(right)),
  }]))
}

function readReference(references, id) {
  return references instanceof Map ? references.get(id) : references?.[id]
}

function sourceTitle(source, reference, language) {
  return localized(source?.usage?.title ?? source?.title, language)
    || reference?.title
    || source?.id
    || source?.referenceId
    || (language === 'zh' ? '未命名来源' : 'Untitled source')
}

function sourceUrl(source, reference) {
  const value = source?.usage?.url ?? source?.url ?? reference?.url
  if (typeof value !== 'string') return null
  try {
    const url = new URL(value)
    return ['http:', 'https:'].includes(url.protocol) ? url.href : null
  } catch {
    return null
  }
}

function sourceTargets(source, { language, basePath, staticEdition, supportedIds }) {
  const targets = Array.isArray(source?.readingTargets) ? source.readingTargets : Array.isArray(source?.usage?.readingTargets) ? source.usage.readingTargets : []
  const rows = targets.flatMap(target => {
    if (!target || typeof target !== 'object' || Array.isArray(target)) return []
    const id = target.pbdbTaxonId
    if (id === undefined && target.colId !== undefined) return []
    const name = localized(target.name, language) || (language === 'zh' ? '相关 PBDB 记录' : 'Related PBDB record')
    if (typeof id !== 'string' || !isPbdbTaxonId(id)) {
      const recorded = typeof id === 'string' ? ` <code>${escapeHtml(id)}</code>` : ''
      return [`<li><span>${escapeHtml(name)}</span>${recorded}<span class="muted">${language === 'zh' ? '没有可验证的精确 PBDB 分类标识；请查看上方来源。' : 'No exact PBDB taxon identifier is available; use the source above.'}</span></li>`]
    }
    const href = pbdbReaderHref(id, { language, basePath, staticEdition, supportedIds })
    if (!href) return [`<li><span>${escapeHtml(name)}</span> <code>${escapeHtml(id)}</code> <span class="muted">${language === 'zh' ? '此标识没有已发布的阅读页；请查看上方来源 URL 与范围。' : 'No reader page is published for this identifier; see the source URL and scope above.'}</span></li>`]
    return [`<li><a href="${escapeHtml(href)}">${escapeHtml(name)} →</a> <code>${escapeHtml(id)}</code></li>`]
  })
  return rows.length ? `<div class="pbdb-related"><strong>${language === 'zh' ? '关联 PBDB 阅读' : 'Related PBDB reading'}</strong><ul>${rows.join('')}</ul></div>` : ''
}

export function renderPbdbSourceTargets(source, options = {}) {
  return sourceTargets(source, {
    language: options.language ?? 'en',
    basePath: options.basePath ?? '/evo',
    staticEdition: options.staticEdition ?? true,
    supportedIds: options.supportedIds ?? new Set(),
  })
}

function sourceMarkup(source, { language, references, basePath, staticEdition, supportedIds }) {
  const reference = readReference(references, source?.referenceId)
  const title = sourceTitle(source, reference, language)
  const url = sourceUrl(source, reference)
  const link = url ? `<a href="${escapeHtml(url)}" rel="noreferrer">${escapeHtml(title)} ↗</a>` : `<strong>${escapeHtml(title)}</strong>`
  const usage = source?.usage ?? {}
  const values = [
    [language === 'zh' ? '来源标识符' : 'Source identifier', source?.id],
    [language === 'zh' ? '参考文献标识符' : 'Reference identifier', source?.referenceId],
    [language === 'zh' ? '来源 URL' : 'Source URL', source?.usage?.url ?? source?.url ?? reference?.url],
    [language === 'zh' ? '来源范围' : 'Source scope', usage.scope ?? source?.scope],
    [language === 'zh' ? '来源定位' : 'Source locator', usage.locator ?? source?.locator],
    [language === 'zh' ? '版本' : 'Version', usage.version ?? source?.version ?? source?.sourceVersion ?? reference?.version ?? reference?.sourceVersion],
    [language === 'zh' ? '发布日期' : 'Published', usage.publishedAt ?? source?.publishedAt ?? reference?.publishedAt],
    [language === 'zh' ? '访问日期' : 'Accessed', usage.accessedAt ?? source?.accessedAt ?? reference?.accessedAt],
    [language === 'zh' ? '许可' : 'License', usage.license ?? source?.license ?? reference?.license],
    [language === 'zh' ? '许可版本' : 'License version', usage.licenseVersion ?? source?.licenseVersion ?? reference?.licenseVersion],
    [language === 'zh' ? '许可链接' : 'License URL', usage.licenseUrl ?? source?.licenseUrl ?? reference?.licenseUrl],
    [language === 'zh' ? '许可适用范围' : 'License applies to', usage.licenseAppliesTo ?? source?.licenseAppliesTo ?? reference?.licenseAppliesTo],
    [language === 'zh' ? '许可评估' : 'License assessment', usage.licenseAssessment ?? source?.licenseAssessment ?? reference?.licenseAssessment],
    [language === 'zh' ? '权利人' : 'Rights holder', usage.rightsHolder ?? source?.rightsHolder ?? reference?.rightsHolder],
    [language === 'zh' ? '权利说明' : 'Rights', usage.rights ?? source?.rights ?? reference?.rights],
    [language === 'zh' ? '署名' : 'Attribution', usage.attribution ?? source?.attribution ?? reference?.attribution],
    [language === 'zh' ? '响应校验和' : 'Response SHA-256', usage.responseSha256 ?? source?.responseSha256],
  ].filter(([, value]) => value !== undefined && value !== null && value !== '')
  if (reference) {
    const citation = [
      Array.isArray(reference.authors) ? reference.authors.join('; ') : reference.authors,
      reference.publishedYear,
      reference.doi ? `DOI ${reference.doi}` : null,
    ].filter(Boolean).join(' · ')
    if (citation) values.push([language === 'zh' ? '引用' : 'Citation', citation])
  }
  const metadata = values.length
    ? `<dl class="pbdb-source-fields">${values.map(([label, value]) => {
      const display = localized(value, language)
      const linkValue = typeof display === 'string' ? sourceUrl({ url: display }) : null
      return `<dt>${escapeHtml(label)}</dt><dd>${linkValue ? `<a href="${escapeHtml(linkValue)}" rel="noreferrer">${escapeHtml(display)}</a>` : escapeHtml(display)}</dd>`
    }).join('')}</dl>`
    : ''
  const targets = sourceTargets(source, { language, basePath, staticEdition, supportedIds })
  return `<li class="pbdb-source">${link}${metadata}${targets}</li>`
}

function renderSections(sections, sources, options, idPrefix) {
  if (!Array.isArray(sections) || !sections.length) return ''
  const sourceById = new Map(sources.filter(source => source?.id).map(source => [source.id, source]))
  const { language } = options
  return sections.map((section, index) => {
    const rawText = section?.text
    const availableLanguage = typeof rawText === 'string' ? language : rawText?.[language] ? language : rawText?.en ? 'en' : rawText?.zh ? 'zh' : language
    const text = localized(rawText, language)
    const title = localized(section?.title, language) || section?.topic || section?.id || (language === 'zh' ? '阅读内容' : 'Reading material')
    const paragraphs = paragraphParts(text).map(paragraph => `<p>${readerInlineHtml(paragraph)}</p>`).join('')
    const sourceIds = Array.isArray(section?.sourceIds) ? section.sourceIds : []
    const citations = sourceIds.length ? `<details class="reader-citations"><summary>${language === 'zh' ? '本段的来源与材料' : 'Sources and material for this passage'}</summary><ul>${sourceIds.map(id => sourceById.has(id)
      ? sourceMarkup(sourceById.get(id), options)
      : `<li>${language === 'zh' ? '来源信息暂不可用：' : 'Source details are unavailable: '}<code>${escapeHtml(id)}</code></li>`).join('')}</ul>${section?.locator ? `<p>${language === 'zh' ? '段落定位：' : 'Passage locator: '}${escapeHtml(section.locator)}</p>` : ''}</details>` : ''
    const fallback = availableLanguage === language ? '' : `<p class="notice">${language === 'zh' ? '以下保留现有原语言内容。' : 'The available source-language account is retained below.'}</p>`
    const context = [section?.context, section?.scope, section?.qualifier].filter(Boolean).map(value => `<p class="reader-scope-note"><strong>${language === 'zh' ? '范围与限定：' : 'Scope and qualification: '}</strong>${escapeHtml(localized(value, language))}</p>`).join('')
    return `<article class="reader-section" id="${escapeHtml(idPrefix)}-${index}"><h2>${escapeHtml(title)}</h2>${fallback}<div lang="${availableLanguage}">${paragraphs}</div>${context}${citations}</article>`
  }).join('')
}

function renderIdentityList(record, language) {
  const rows = pbdbIdentityContexts(record)
  if (!rows.length) return `<p class="notice">${language === 'zh' ? '没有可显示的精确 PBDB 分类身份。' : 'No exact PBDB classification identity is available for display.'}</p>`
  return `<ul class="pbdb-identities">${rows.map(({ identity, context }) => {
    const classification = identity.classification ?? {}
    const sourceUrl = typeof classification.sourceUrl === 'string' ? sourceUrlLink(classification.sourceUrl, language) : ''
    const displayName = localized(identity.displayName, language)
    return `<li><strong>${escapeHtml(identity.scientificName ?? (language === 'zh' ? '未记录名称' : 'Name not recorded'))}</strong>${identity.rank ? ` · ${escapeHtml(identity.rank)}` : ''}${displayName && displayName !== identity.scientificName ? `<p>${language === 'zh' ? '显示名：' : 'Display name: '}${escapeHtml(displayName)}</p>` : ''}${context ? `<p>${language === 'zh' ? '独立来源上下文：' : 'Independent source context: '}<code>${escapeHtml(context)}</code></p>` : ''}<dl><dt>${language === 'zh' ? '分类来源' : 'Classification source'}</dt><dd>${escapeHtml(classification.authority ?? (language === 'zh' ? '未记录' : 'Not recorded'))}${classification.release ? ` · ${escapeHtml(classification.release)}` : ''}</dd>${classification.parentSourceIdentifier ? `<dt>${language === 'zh' ? '记录的上级标识符' : 'Recorded parent identifier'}</dt><dd><code>${escapeHtml(classification.parentSourceIdentifier)}</code></dd>` : ''}${sourceUrl ? `<dt>${language === 'zh' ? '分类来源 URL' : 'Classification source URL'}</dt><dd>${sourceUrl}</dd>` : ''}${classification.placement ? `<dt>${language === 'zh' ? '记录的分类说明' : 'Recorded classification note'}</dt><dd>${escapeHtml(classification.placement)}</dd>` : ''}</dl></li>`
  }).join('')}</ul>`
}

function sourceUrlLink(value, language) {
  try {
    const url = new URL(value)
    if (!['http:', 'https:'].includes(url.protocol)) return `<code>${escapeHtml(value)}</code>`
    return `<a href="${escapeHtml(url.href)}" rel="noreferrer">${language === 'zh' ? '查看记录的分类来源' : 'Open recorded classification source'} ↗</a>`
  } catch {
    return `<code>${escapeHtml(value)}</code>`
  }
}

function renderTaxonomy(record, taxonomyIndex, options) {
  const { language, supportedIds } = options
  const id = record.pbdbTaxonId
  const identities = pbdbIdentityContexts(record)
  const parents = identities.flatMap(({ identity, context }) => {
    const parentId = identity.classification?.parentSourceIdentifier
    return isPbdbTaxonId(parentId) ? [{ parentId, context }] : []
  })
  const parentRows = parents.map(({ parentId, context }) => {
    const href = pbdbReaderHref(parentId, { ...options, supportedIds })
    const target = href ? `<a href="${escapeHtml(href)}"><code>${escapeHtml(parentId)}</code></a>` : `<code>${escapeHtml(parentId)}</code><span class="muted">${language === 'zh' ? '（无已发布阅读页）' : ' (no published reader)'}</span>`
    return `<li>${context ? `<span>${escapeHtml(context)} · </span>` : ''}${language === 'zh' ? '记录的 PBDB 上级：' : 'Recorded PBDB parent: '}${target}</li>`
  }).join('')
  const members = taxonomyIndex.get(id)?.memberIds ?? []
  const memberRows = members.map(memberId => {
    const member = taxonomyIndex.get(memberId)?.record
    const href = pbdbReaderHref(memberId, options)
    if (!member || !href) return ''
    return `<li><a href="${escapeHtml(href)}">${escapeHtml(pbdbReaderName(member))}</a> <code>${escapeHtml(memberId)}</code></li>`
  }).filter(Boolean).join('')
  const note = language === 'zh'
    ? '以下链接只按记录的 PBDB 上级标识符排列，表示该来源中的分类路径；它们不是系统发育树，也不表示直接祖先关系。'
    : 'These links follow recorded PBDB parent identifiers as a source classification path. They are not a phylogenetic tree and do not imply direct ancestry.'
  return `<details class="reader-scope pbdb-taxonomy"><summary>${language === 'zh' ? '来源分类与成员' : 'Source classification and members'}</summary><p>${note}</p>${parentRows ? `<ul class="pbdb-parents">${parentRows}</ul>` : `<p>${language === 'zh' ? '没有记录可用的 PBDB 上级标识符。' : 'No recorded PBDB parent identifier is available.'}</p>`}${members.length ? `<details><summary>${language === 'zh' ? `记录的直接分类成员（${members.length}）` : `Recorded direct classification members (${members.length})`}</summary><ul class="pbdb-members">${memberRows}</ul></details>` : `<p>${language === 'zh' ? '当前已发布记录中没有引用此上级标识符的成员页面。' : 'No published member page records this parent identifier.'}</p>`}</details>`
}

function renderAccount(account, accountIndex, accountCount, options) {
  const profile = account?.profile
  const atlasProfile = account?.atlasProfile
  const catalogueSources = Array.isArray(profile?.sources) ? profile.sources : []
  const atlasSources = Array.isArray(atlasProfile?.readerSources) ? atlasProfile.readerSources : []
  const heading = accountCount > 1
    ? `<h2>${options.language === 'zh' ? `独立来源条目 ${accountIndex + 1}` : `Independent source account ${accountIndex + 1}`}</h2>`
    : ''
  const catalogueSections = renderSections(profile?.sections, catalogueSources, options, `pbdb-catalogue-${accountIndex}`)
  const atlasSections = renderSections(atlasProfile?.readerSections, atlasSources, options, `pbdb-atlas-${accountIndex}`)
  const limitations = localized(atlasProfile?.readerLimitations, options.language)
  const sources = [
    catalogueSources.length ? `<details class="reader-scope"><summary>${options.language === 'zh' ? '本条目的来源与权利信息' : 'Sources and rights for this account'}</summary><ul>${catalogueSources.map(source => sourceMarkup(source, options)).join('')}</ul></details>` : '',
    atlasSources.length ? `<details class="reader-scope"><summary>${options.language === 'zh' ? '补充阅读来源与权利信息' : 'Additional reader sources and rights'}</summary><ul>${atlasSources.map(source => sourceMarkup(source, options)).join('')}</ul></details>` : '',
  ].join('')
  const noText = !catalogueSections && !atlasSections
    ? `<p class="notice">${options.language === 'zh' ? '此分类身份没有已记录的阅读正文；请使用上方的来源身份与原始来源。' : 'No reader prose is recorded for this classification identity; use the source identity and original source above.'}</p>`
    : ''
  return `<section class="pbdb-account">${heading}${catalogueSections ? `<section class="pbdb-catalogue-account">${catalogueSections}</section>` : ''}${atlasSections ? `<section class="pbdb-atlas-account">${atlasSections}</section>` : ''}${limitations ? `<p class="reader-limitations">${escapeHtml(limitations)}</p>` : ''}${sources}${noText}</section>`
}

export function renderPbdbReaderBody(record, { language = 'en', references = new Map(), supportedIds = new Set(), taxonomyIndex = new Map(), basePath = '/evo', staticEdition = true } = {}) {
  if (!isPbdbTaxonId(record?.pbdbTaxonId)) throw new Error('Cannot render a PBDB reader without an exact txn identifier')
  const options = { language, references, supportedIds, basePath, staticEdition }
  const accounts = pageAccounts(record)
  const names = pbdbReaderNames(record)
  const title = names.length === 1 ? names[0] : `PBDB taxon ${record.pbdbTaxonId}`
  const identityLabel = language === 'zh' ? '记录的 PBDB 身份' : 'Recorded PBDB identity'
  const description = language === 'zh'
    ? `PBDB 分类记录 ${record.pbdbTaxonId} 的来源范围阅读页。`
    : `A source-scoped reader for PBDB taxon record ${record.pbdbTaxonId}.`
  return {
    title,
    description,
    body: `<span class="eyebrow">PBDB / <code>${escapeHtml(record.pbdbTaxonId)}</code></span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><section class="pbdb-identity"><h2>${identityLabel}</h2><p>${language === 'zh' ? '本页按准确记录的 txn 标识组织；名称、分类来源及彼此独立的来源条目分别保留。' : 'This page is keyed by the exact recorded txn identifier; names, classification sources and independent source accounts remain separately identified.'}</p>${renderIdentityList(record, language)}</section>${renderTaxonomy(record, taxonomyIndex, options)}${accounts.map((account, index) => renderAccount(account, index, accounts.length, options)).join('')}`,
  }
}
