import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'

const distRoot = join(rootDir, 'dist')
if (!existsSync(join(distRoot, 'index.html'))) throw new Error('dist/index.html is missing; run the Vite build before generating static pages.')

const origin = 'https://dajiaohuang.github.io'
const basePath = '/evo'
const baseUrl = `${origin}${basePath}`
const repositoryUrl = 'https://github.com/dajiaohuang/evo'
const manifest = readJson('data/manifest.json')
const entities = readJson('data/registry/entities/entities.json')
const registry = readJson('data/registry/package-registry.json')
const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json').filter((story) => story.evidenceStatus === 'available-with-limitations')
const claims = readJson('data/evidence/claims.json')
const claimStatementsZh = readJson('data/evidence/claim-statements.zh.json')
const references = readJson('data/references.json')

const entityById = new Map(entities.map((entry) => [entry.id, entry]))
const packageById = new Map(registry.packages.map((entry) => [entry.id, entry]))
const profileByEntityId = new Map(profiles.flatMap((profile) => [[profile.id, profile], [profile.treeNodeId, profile]]))
const referenceById = new Map(references.map((entry) => [entry.id, entry]))
const claimsBySubject = new Map()
for (const claim of claims) {
  if (!claimsBySubject.has(claim.subjectId)) claimsBySubject.set(claim.subjectId, [])
  claimsBySubject.get(claim.subjectId).push(claim)
}

const eventOwners = {
  'plants-on-land': 'early-land-plants',
  'angiosperm-expansion': 'angiospermae',
  'c4-grassland-expansion': 'angiospermae',
  'tetrapods-on-land': 'tetrapod-transition',
  'dinosaur-radiation': 'dinosauria',
  'perissodactyl-radiation': 'perissodactyla',
  'eocene-oligocene-transition': 'perissodactyla',
  'early-homo-dispersal': 'primates',
  'homo-sapiens-admixture': 'primates',
}

const labels = {
  en: {
    atlas: 'Evo Atlas', catalog: 'Catalog', stories: 'Stories', explorer: 'Explorer', research: 'Research', about: 'About',
    evidence: 'Evidence boundary', claims: 'Claim ledger', references: 'References', limitations: 'Known limits', open: 'Open in Explorer',
    report: 'Report an evidence issue', home: 'Atlas home', noHumanReview: 'No human scientific review', automated: 'Automated data audit passed',
    dataset: 'Dataset release', methods: 'Methods', breadcrumbs: 'Breadcrumbs', range: 'Represented range', package: 'Content package',
  },
  zh: {
    atlas: 'Evo Atlas 演化图谱', catalog: '目录', stories: '故事', explorer: '探索器', research: '研究', about: '关于',
    evidence: '证据边界', claims: '主张账本', references: '参考文献', limitations: '已知局限', open: '在探索器中打开',
    report: '报告证据问题', home: '图谱首页', noHumanReview: '尚未完成人工科学审阅', automated: '自动数据审计已通过',
    dataset: '数据集发布', methods: '方法', breadcrumbs: '面包屑导航', range: '呈现年代范围', package: '内容包',
  },
}

const maturityLabels = {
  en: { core: 'Core navigation', 'generated-scaffold': 'Generated scaffold', 'curator-draft': 'Curator draft', 'source-complete': 'Source complete', 'expert-reviewed': 'Expert reviewed', 'published-featured': 'Published featured' },
  zh: { core: '核心导航', 'generated-scaffold': '生成式骨架', 'curator-draft': '策展草稿', 'source-complete': '来源完备', 'expert-reviewed': '专家审阅', 'published-featured': '精选发布' },
}

const staticCss = `
:root{color-scheme:dark;--bg:#081115;--surface:#0e1b20;--line:#2a4248;--muted:#91a29a;--text:#e6eee9;--accent:#6ddab1;--warn:#d7b68c;font-family:Inter,ui-sans-serif,system-ui,sans-serif}*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 82% 0,rgba(109,218,177,.07),transparent 28%),var(--bg);color:var(--text);line-height:1.65}a{color:var(--accent)}header.site{height:58px;padding:0 max(20px,calc((100vw - 1120px)/2));display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #1a2d32;background:rgba(8,17,21,.94)}header.site>a{font:700 14px Georgia,serif;letter-spacing:.14em;text-decoration:none}nav{display:flex;gap:18px}nav a{color:var(--muted);font-size:12px;text-decoration:none}.page{width:min(920px,calc(100% - 36px));margin:auto;padding:68px 0 110px}.crumbs{color:var(--muted);font:11px ui-monospace,monospace}.crumbs a{color:var(--muted)}h1{margin:35px 0 0;font:500 clamp(46px,8vw,82px)/1 Georgia,serif;letter-spacing:-.045em}h1 em{color:#a8dec8}.dek{max-width:760px;margin:28px 0;color:#b8c6bf;font:17px/1.75 Georgia,serif}.status{display:grid;grid-template-columns:1fr auto;gap:8px 20px;margin:34px 0;padding:16px;border:1px solid #7a684e;background:rgba(215,182,140,.045)}.status strong{font:500 16px Georgia,serif}.pills{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pill{padding:4px 7px;border:1px solid var(--line);color:var(--muted);font:700 9px ui-monospace,monospace;text-transform:uppercase}.pill.warn{color:var(--warn);border-color:#7a684e}.pill.good{color:var(--accent);border-color:#3b8068}.facts{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #1a2d32}.facts div{padding:18px;border-right:1px solid #1a2d32}.facts div:last-child{border:0}.facts small,.eyebrow{display:block;color:var(--muted);font:9px ui-monospace,monospace;text-transform:uppercase}.facts strong{display:block;margin-top:5px;font:500 16px Georgia,serif}section{margin-top:58px;padding-top:34px;border-top:1px solid #1a2d32}h2{font:500 31px Georgia,serif}.claim{margin:10px 0;padding:18px;border:1px solid #1a2d32;background:var(--surface)}.claim small{color:var(--accent);font:9px ui-monospace,monospace;text-transform:uppercase}.claim p{margin:9px 0;color:#c3cec8}.claim code{color:var(--muted);font-size:10px}.refs{padding:0;list-style:none}.refs li{padding:14px 0;border-bottom:1px solid #1a2d32}.refs strong,.refs span{display:block}.refs span{color:var(--muted);font-size:11px}.actions{display:flex;flex-wrap:wrap;gap:9px;margin-top:34px}.button{display:inline-flex;min-height:44px;align-items:center;padding:0 16px;border:1px solid var(--accent);background:var(--accent);color:#07130f;font-weight:750;text-decoration:none}.button.secondary{border-color:var(--line);background:var(--surface);color:var(--text)}.language{margin-left:auto;color:var(--muted);font:10px ui-monospace,monospace}.language a{margin-left:9px}.notice{padding:18px;border-left:2px solid var(--warn);background:var(--surface);color:var(--muted)}footer{padding:30px max(20px,calc((100vw - 1120px)/2));border-top:1px solid #1a2d32;color:var(--muted);font:10px ui-monospace,monospace}@media(max-width:700px){header.site{height:auto;min-height:58px;align-items:flex-start;padding-block:15px;gap:15px}nav{display:none}.page{padding-top:42px}.status{grid-template-columns:1fr}.pills{justify-content:flex-start}.facts{grid-template-columns:1fr}.facts div{border-right:0;border-bottom:1px solid #1a2d32}.actions{flex-direction:column}.button{justify-content:center}}
`

function escapeHtml(value) {
  return String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;')
}

function xmlEscape(value) {
  return escapeHtml(value)
}

function write(relativePath, content) {
  const target = join(distRoot, ...relativePath.split('/'))
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, content, 'utf8')
}

function issueUrl({ entityId = null, claimId = null, pageUrl }) {
  const subject = claimId ?? entityId ?? 'atlas evidence'
  const body = ['## Evidence issue', '', 'Describe the problem here.', '', '## Reproducible context', '', `- Entity ID: ${entityId ?? 'not specified'}`, `- Claim ID: ${claimId ?? 'not specified'}`, `- Dataset version: ${manifest.datasetVersion}`, `- App version: ${manifest.appVersion}`, `- Page URL: ${pageUrl}`, '', '## Suggested correction and supporting source', ''].join('\n')
  return `${repositoryUrl}/issues/new?${new URLSearchParams({ title: `[Evidence] ${subject}`, body, labels: 'scientific-review,evidence' })}`
}

function pageHtml({ language, title, description, path, alternatePath, type = 'WebPage', robots = 'index,follow', jsonLd = {}, breadcrumbs = [], body }) {
  const text = labels[language]
  const url = `${baseUrl}/${path}`.replace(/\/+$/, '/')
  const alternateUrl = `${baseUrl}/${alternatePath}`.replace(/\/+$/, '/')
  const alternateLanguage = language === 'en' ? 'zh-CN' : 'en'
  const structured = { '@context': 'https://schema.org', '@type': type, name: title, description, url, inLanguage: language === 'zh' ? 'zh-CN' : 'en', isPartOf: { '@type': 'WebSite', name: 'Evo Atlas', url: `${baseUrl}/` }, ...jsonLd }
  const crumbHtml = breadcrumbs.map((entry, index) => `${index ? ' / ' : ''}<a href="${escapeHtml(entry.url)}">${escapeHtml(entry.label)}</a>`).join('')
  return `<!doctype html>
<html lang="${language === 'zh' ? 'zh-CN' : 'en'}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#081115"><meta name="color-scheme" content="dark"><title>${escapeHtml(title)} — Evo Atlas</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="${robots}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="${language === 'en' ? 'en' : 'zh-CN'}" href="${url}"><link rel="alternate" hreflang="${alternateLanguage}" href="${alternateUrl}"><link rel="alternate" hreflang="x-default" href="${language === 'en' ? url : alternateUrl}"><link rel="icon" href="${basePath}/favicon.svg"><link rel="stylesheet" href="${basePath}/static.css"><meta property="og:type" content="article"><meta property="og:site_name" content="Evo Atlas"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${baseUrl}/social-card.svg"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(structured).replaceAll('<', '\\u003c')}</script></head>
<body><header class="site"><a href="${basePath}/">EVO ATLAS</a><nav><a href="${basePath}/#/catalog">${text.catalog}</a><a href="${basePath}/#/stories">${text.stories}</a><a href="${basePath}/#/explore">${text.explorer}</a><a href="${basePath}/#/research">${text.research}</a><a href="${basePath}/#/about">${text.about}</a></nav><span class="language"><a lang="en" href="${language === 'en' ? url : alternateUrl}">EN</a><a lang="zh-CN" href="${language === 'zh' ? url : alternateUrl}">中文</a></span></header><main class="page"><div class="crumbs" aria-label="${text.breadcrumbs}">${crumbHtml}</div>${body}</main><footer>EVO ATLAS / ${escapeHtml(manifest.datasetVersion)} · Static-first · Source-aware · Open data</footer></body></html>`
}

function referenceRecords(ids) {
  return [...new Set(ids)].flatMap((id) => referenceById.has(id) ? [referenceById.get(id)] : [])
}

function renderReferences(records) {
  if (!records.length) return '<p class="notice">No reference record is available for this static summary.</p>'
  return `<ol class="refs">${records.map((reference) => `<li><a href="${escapeHtml(reference.url)}" rel="noreferrer"><strong>${escapeHtml(reference.title)}</strong></a><span>${escapeHtml(reference.authors)}${reference.publishedYear ? ` · ${reference.publishedYear}` : ''}${reference.doi ? ` · DOI ${escapeHtml(reference.doi)}` : ''}</span></li>`).join('')}</ol>`
}

function reviewBoundary(language, packageEntry) {
  if (packageEntry?.scientificReviewStatus === 'expert-reviewed') return language === 'zh' ? '该范围已由具名领域专家记录审阅决定；请查看审阅记录中的保留意见。' : 'A named domain specialist has recorded a review decision for this scope; inspect the review record for reservations.'
  return language === 'zh' ? '自动检查仅覆盖结构、标识符、翻译与链接，不等同于人工科学审阅。' : 'Automated checks cover structure, identifiers, translations and links only; they are not human scientific review.'
}

const sitemapUrls = new Set([`${baseUrl}/`])
let taxonPageCount = 0
let eventPageCount = 0
let storyPageCount = 0

for (const entity of entities) {
  const profile = profileByEntityId.get(entity.id)
  const packageEntry = packageById.get(entity.packageId)
  const subjectClaims = claimsBySubject.get(`taxon:${profile?.id ?? entity.id}`) ?? []
  const referenceIds = [...entity.referenceIds, ...(profile?.referenceIds ?? []), ...subjectClaims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId))]
  const records = referenceRecords(referenceIds)
  const englishPath = `taxa/${entity.id}/`
  const chinesePath = `zh/taxa/${entity.id}/`
  const canonicalUrl = `${baseUrl}/${englishPath}`
  const indexable = packageEntry?.scientificMaturity !== 'generated-scaffold' && entity.entityKind === 'taxon'
  if (indexable) sitemapUrls.add(canonicalUrl)
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const commonName = language === 'zh' ? entity.names.zh : entity.names.en
    const summary = language === 'zh' ? entity.definition.zh : profile?.overview ?? entity.definition.en
    const title = `${commonName} · ${entity.names.scientific}`
    const claimHtml = subjectClaims.length
      ? subjectClaims.map((claim) => `<article class="claim"><small>${escapeHtml(claim.claimType)} · ${escapeHtml(claim.confidence)}</small><p>${escapeHtml(language === 'zh' ? claimStatementsZh[claim.statement] ?? claim.statement : claim.statement)}</p><code>${escapeHtml(claim.id)}</code></article>`).join('')
      : `<p class="notice">${language === 'zh' ? '该条目尚无主张级证据记录。' : 'No claim-level evidence record is bundled for this entry.'}</p>`
    const maturity = packageEntry?.scientificMaturity ?? 'generated-scaffold'
    const openUrl = profile
      ? `${basePath}/#/explore?profile=${encodeURIComponent(profile.id)}&taxon=${encodeURIComponent(entity.id)}`
      : `${basePath}/#/explore?taxon=${encodeURIComponent(entity.id)}&view=tree`
    const body = `<span class="eyebrow">${text.catalog} / ${escapeHtml(entity.rank)}</span><h1><em>${escapeHtml(entity.names.scientific)}</em></h1><p class="dek">${escapeHtml(summary)}</p><aside class="status"><strong>${escapeHtml(language === 'zh' ? packageEntry?.titleZh : packageEntry?.title)}</strong><div class="pills"><span class="pill ${maturity === 'generated-scaffold' ? '' : 'warn'}">${escapeHtml(maturityLabels[language][maturity])}</span><span class="pill">${text.automated}</span><span class="pill warn">${text.noHumanReview}</span></div><p>${escapeHtml(reviewBoundary(language, packageEntry))}</p></aside><div class="facts"><div><small>${text.range}</small><strong>${entity.temporalRange.olderMa}–${entity.temporalRange.youngerMa || (language === 'zh' ? '现今' : 'Present')} Ma</strong></div><div><small>${text.package}</small><strong>${escapeHtml(entity.packageId)}</strong></div><div><small>PBDB</small><strong>${escapeHtml(entity.externalIds.pbdb ?? (language === 'zh' ? '未关联' : 'Not linked'))}</strong></div></div><section><h2>${text.evidence}</h2><p>${escapeHtml(reviewBoundary(language, packageEntry))}</p></section><section><h2>${text.claims}</h2>${claimHtml}</section><section><h2>${text.limitations}</h2><ul>${entity.limitations.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section><h2>${text.references}</h2>${renderReferences(records)}</section><div class="actions"><a class="button" href="${openUrl}">${text.open} ↗</a><a class="button secondary" href="${escapeHtml(issueUrl({ entityId: entity.id, pageUrl: canonicalUrl }))}">${text.report} ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title, description: summary, path, alternatePath, robots: indexable ? 'index,follow' : 'noindex,follow', jsonLd: { mainEntity: { '@type': 'DefinedTerm', name: entity.names.scientific, alternateName: [entity.names.en, entity.names.zh], identifier: entity.id }, citation: records.map((reference) => ({ '@type': 'CreativeWork', name: reference.title, url: reference.url, identifier: reference.doi ?? reference.id })) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.catalog, url: `${basePath}/#/catalog` }, { label: commonName, url: `${baseUrl}/${path}` }], body }))
    taxonPageCount += 1
  }
}

for (const event of events) {
  const subjectClaims = claimsBySubject.get(`event:${event.id}`) ?? []
  const records = referenceRecords(subjectClaims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)))
  const packageEntry = packageById.get(eventOwners[event.id] ?? 'atlas-core')
  const englishPath = `events/${event.id}/`
  const chinesePath = `zh/events/${event.id}/`
  const canonicalUrl = `${baseUrl}/${englishPath}`
  sitemapUrls.add(canonicalUrl)
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const title = language === 'zh' ? event.titleZh : event.title
    const summary = event.summary
    const body = `<span class="eyebrow">${text.catalog} / ${escapeHtml(event.category)}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(summary)}</p><aside class="status"><strong>${escapeHtml(language === 'zh' ? packageEntry?.titleZh : packageEntry?.title)}</strong><div class="pills"><span class="pill">${text.automated}</span><span class="pill warn">${text.noHumanReview}</span></div><p>${escapeHtml(reviewBoundary(language, packageEntry))}</p></aside><div class="facts"><div><small>${text.range}</small><strong>${event.startAge}–${event.endAge} Ma</strong></div><div><small>${language === 'zh' ? '地区' : 'Regions'}</small><strong>${escapeHtml(event.regions.join(' · '))}</strong></div><div><small>${language === 'zh' ? '相关类群' : 'Clades'}</small><strong>${escapeHtml(event.clades.join(' · '))}</strong></div></div><section><h2>${text.claims}</h2>${subjectClaims.map((claim) => `<article class="claim"><small>${escapeHtml(claim.claimType)} · ${escapeHtml(claim.confidence)}</small><p>${escapeHtml(language === 'zh' ? claimStatementsZh[claim.statement] ?? claim.statement : claim.statement)}</p><code>${escapeHtml(claim.id)}</code></article>`).join('')}</section><section><h2>${text.references}</h2>${renderReferences(records)}</section><div class="actions"><a class="button" href="${basePath}/#/events?id=${encodeURIComponent(event.id)}">${text.open} ↗</a><a class="button secondary" href="${escapeHtml(issueUrl({ entityId: `event:${event.id}`, pageUrl: canonicalUrl }))}">${text.report} ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title, description: summary, path, alternatePath, jsonLd: { about: event.clades, temporalCoverage: `${event.startAge}–${event.endAge} Ma`, citation: records.map((reference) => ({ '@type': 'CreativeWork', name: reference.title, url: reference.url })) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.catalog, url: `${basePath}/#/events` }, { label: title, url: `${baseUrl}/${path}` }], body }))
    eventPageCount += 1
  }
}

for (const story of stories) {
  const storyClaims = story.steps.flatMap((step) => step.claimLinks.map((link) => claims.find((claim) => claim.id === link.claimId)).filter(Boolean))
  const records = referenceRecords(storyClaims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)))
  const englishPath = `stories/${story.id}/`
  const chinesePath = `zh/stories/${story.id}/`
  sitemapUrls.add(`${baseUrl}/${englishPath}`)
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const title = language === 'zh' ? story.titleZh : story.title
    const steps = story.steps.map((step, index) => `<article class="claim"><small>${String(index + 1).padStart(2, '0')} · ${step.age} Ma · ${escapeHtml(step.view)}</small><h2>${escapeHtml(step.title)}</h2><p>${escapeHtml(step.text)}</p><code>${escapeHtml(step.claimLinks.map((link) => link.claimId).join(' · '))}</code></article>`).join('')
    const body = `<span class="eyebrow">${text.stories} / ${story.durationMinutes} min</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(story.dek)}</p><p class="notice">${language === 'zh' ? '每一步都链接到主张与可复现的探索器状态，但故事本身仍是编辑综合。' : 'Every step links to claims and a reproducible Explorer state, while the narrative remains an editorial synthesis.'}</p><section><h2>${language === 'zh' ? '故事步骤' : 'Story sequence'}</h2>${steps}</section><section><h2>${text.references}</h2>${renderReferences(records)}</section><div class="actions"><a class="button" href="${basePath}/#/stories?id=${encodeURIComponent(story.id)}">${text.open} ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title, description: story.dek, path, alternatePath, jsonLd: { '@type': 'Article', articleSection: 'Evolution story', citation: records.map((reference) => ({ '@type': 'CreativeWork', name: reference.title, url: reference.url })) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.stories, url: `${basePath}/#/stories` }, { label: title, url: `${baseUrl}/${path}` }], body }))
    storyPageCount += 1
  }
}

for (const language of ['en', 'zh']) {
  const text = labels[language]
  const path = language === 'en' ? 'methods/' : 'zh/methods/'
  const alternatePath = language === 'en' ? 'zh/methods/' : 'methods/'
  const title = language === 'zh' ? '方法与证据边界' : 'Methods and evidence boundaries'
  const description = language === 'zh' ? 'Evo Atlas 的静态优先数据流程、采样边界、坐标模型与审阅准入。' : 'Evo Atlas static-first data workflow, sampling boundaries, coordinate models and review gates.'
  const body = `<span class="eyebrow">${text.methods}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><section><h2>${language === 'zh' ? '浏览器即研究工作区' : 'The browser is the research workspace'}</h2><p>${language === 'zh' ? 'GitHub Actions 生成版本化证据，GitHub Pages 提供不可变文件，浏览器完成筛选、关联与可视化。' : 'GitHub Actions prepares versioned evidence, GitHub Pages serves immutable files, and the browser performs filtering, linking and visualization.'}</p></section><section><h2>${text.limitations}</h2><ol>${manifest.limitations.map((limitation) => `<li>${escapeHtml(limitation)}</li>`).join('')}</ol></section><div class="actions"><a class="button" href="${basePath}/#/methods">${text.open} ↗</a><a class="button secondary" href="${repositoryUrl}/blob/main/docs/data-methods.md">${language === 'zh' ? '查看完整方法文档' : 'Read full methods documentation'} ↗</a></div>`
  write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, jsonLd: { about: ['paleontology', 'data provenance', 'sampling', 'scientific review'] }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.methods, url: `${baseUrl}/${path}` }], body }))
}
sitemapUrls.add(`${baseUrl}/methods/`)

for (const language of ['en', 'zh']) {
  const text = labels[language]
  const path = language === 'en' ? `datasets/${manifest.datasetVersion}/` : `zh/datasets/${manifest.datasetVersion}/`
  const alternatePath = language === 'en' ? `zh/datasets/${manifest.datasetVersion}/` : `datasets/${manifest.datasetVersion}/`
  const title = `${text.dataset} ${manifest.datasetVersion}`
  const description = language === 'zh' ? 'Evo Atlas 当前静态数据集的范围、记录数、局限与机器可读入口。' : 'Scope, record counts, limitations and machine-readable entry points for the current Evo Atlas static dataset.'
  const body = `<span class="eyebrow">${text.dataset}</span><h1>${escapeHtml(manifest.datasetVersion)}</h1><p class="dek">${escapeHtml(manifest.scopeStatement)}</p><div class="facts"><div><small>${language === 'zh' ? '化石记录' : 'Fossil records'}</small><strong>${manifest.records.fossilOccurrences.toLocaleString()}</strong></div><div><small>${language === 'zh' ? '注册实体' : 'Registry entities'}</small><strong>${manifest.records.registryEntities}</strong></div><div><small>${language === 'zh' ? '内容包' : 'Content packages'}</small><strong>${manifest.records.dataPackages}</strong></div></div><section><h2>${text.evidence}</h2><p>${language === 'zh' ? '奇蹄目保留完整分页查询账本；其余内容包来自非随机、有界的 PBDB 教学样本。查询完整性不等于化石记录完整性。' : 'Perissodactyla preserves a complete paginated query ledger; other packages derive from a non-random bounded PBDB teaching sample. Query completeness is not fossil-record completeness.'}</p></section><section><h2>${text.limitations}</h2><ol>${manifest.limitations.map((limitation) => `<li>${escapeHtml(limitation)}</li>`).join('')}</ol></section><div class="actions"><a class="button" href="${basePath}/#/data">${text.open} ↗</a><a class="button secondary" href="${basePath}/data/current.json">JSON ↗</a></div>`
  write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, type: 'Dataset', jsonLd: { version: manifest.datasetVersion, dateModified: manifest.generatedAt, creator: { '@type': 'Organization', name: 'Evo Atlas contributors', url: repositoryUrl }, license: `${repositoryUrl}/blob/main/DATA_LICENSES.md`, distribution: [{ '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${baseUrl}/data/current.json` }], temporalCoverage: '4567 Ma/Present', variableMeasured: Object.keys(manifest.records) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.dataset, url: `${baseUrl}/${path}` }], body }))
}
sitemapUrls.add(`${baseUrl}/datasets/${manifest.datasetVersion}/`)

write('static.css', staticCss)
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...sitemapUrls].sort().map((url) => `  <url><loc>${xmlEscape(url)}</loc><lastmod>${manifest.generatedAt}</lastmod></url>`).join('\n')}\n</urlset>\n`)
write('robots.txt', `User-agent: *\nAllow: ${basePath}/\nSitemap: ${baseUrl}/sitemap.xml\n`)
write('feed.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom"><title>Evo Atlas releases</title><id>${baseUrl}/feed.xml</id><updated>${manifest.generatedAt}T00:00:00Z</updated><link href="${baseUrl}/feed.xml" rel="self"/><entry><title>${xmlEscape(manifest.datasetVersion)}</title><id>${baseUrl}/datasets/${xmlEscape(manifest.datasetVersion)}/</id><updated>${manifest.generatedAt}T00:00:00Z</updated><link href="${baseUrl}/datasets/${xmlEscape(manifest.datasetVersion)}/"/><summary>${xmlEscape(manifest.scopeStatement)}</summary></entry></feed>\n`)
write('404.html', `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><link rel="stylesheet" href="${basePath}/static.css"><title>Page not found — Evo Atlas</title></head><body><main class="page"><span class="eyebrow">404 / Evo Atlas</span><h1>Evidence page not found.</h1><p class="dek">This static entry does not exist in the published dataset. You can continue in the catalog or Explorer.</p><div class="actions"><a class="button" href="${basePath}/#/catalog">Open catalog</a><a class="button secondary" href="${basePath}/#/explore">Open Explorer</a></div></main></body></html>`)
write('static-pages-manifest.json', `${JSON.stringify({ schemaVersion: 1, datasetVersion: manifest.datasetVersion, generatedAt: manifest.generatedAt, pages: { taxa: taxonPageCount, events: eventPageCount, stories: storyPageCount, methods: 2, datasets: 2 }, sitemapUrls: sitemapUrls.size }, null, 2)}\n`)

console.log(`Generated ${taxonPageCount + eventPageCount + storyPageCount + 4} bilingual static knowledge pages and ${sitemapUrls.size} indexable sitemap URLs.`)
