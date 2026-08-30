import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import ts from 'typescript'
import { readJson, rootDir } from './data-lib.mjs'

const distRoot = join(rootDir, 'dist')
if (!existsSync(join(distRoot, 'index.html'))) throw new Error('dist/index.html is missing; run the Vite build before generating static pages.')

const origin = 'https://dajiaohuang.github.io'
const basePath = '/evo'
const baseUrl = `${origin}${basePath}`
const repositoryUrl = 'https://github.com/dajiaohuang/evo'
const manifest = readJson('data/manifest.json')
const releaseHistory = existsSync(join(distRoot, 'data', 'releases.json')) ? readJson('dist/data/releases.json') : { releases: [{ datasetVersion: manifest.datasetVersion, generatedAt: manifest.generatedAt, bytes: 0, filesIndex: '' }] }
const entities = readJson('data/registry/entities/entities.json')
const registry = readJson('data/registry/package-registry.json')
const profiles = readJson('data/registry/taxon-profiles.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json').filter((story) => story.evidenceStatus === 'available-with-limitations')
const claims = readJson('data/evidence/claims.json')
const claimStatementsZh = readJson('data/evidence/claim-statements.zh.json')
const chineseTranslations = loadChineseTranslations()
const references = readJson('data/references.json')
const timeScale = readJson('data/time-scale.json')
const media = readJson('data/media.json')
const periodUnits = timeScale.units.filter((unit) => unit.itp === 'period')
const occurrences = periodUnits.flatMap((period) => readJson(`data/fossils/${period.nam.toLowerCase()}.json`).map((record) => ({ ...record, period: period.nam })))

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
  'dapingian-cryptospores': 'early-land-plants',
  'ordovician-sporangia': 'early-land-plants',
  'asteroxylon-rooting-system': 'early-land-plants',
  'metzgeriothallus-record': 'early-land-plants',
  'extant-gymnosperm-backbone': 'gymnosperms',
  'living-cycad-radiation-model': 'gymnosperms',
  'cycadaceae-palaeogene-crown-model': 'gymnosperms',
  'cycad-latitudinal-contraction': 'gymnosperms',
  'tiaojishan-ginkgoxylon': 'gymnosperms',
  'conifer-hemisphere-node-pattern': 'gymnosperms',
  'angiosperm-expansion': 'angiospermae',
  'c4-grassland-expansion': 'angiospermae',
  'crown-angiosperm-calibration-sensitivity': 'angiospermae',
  'barremian-montsechia': 'angiospermae',
  'crato-cratolirion': 'angiospermae',
  'yixian-leefructus': 'angiospermae',
  'great-plains-c4-phytolith-transition': 'angiospermae',
  'early-silurian-qianodus-tooth-whorls': 'chondrichthyes',
  'rongxi-fanjingshania-dermoskeleton': 'chondrichthyes',
  'chongqing-xiushanosteus-complete-body': 'early-fishes',
  'chongqing-shenacanthus-body-plan': 'chondrichthyes',
  'givetian-gladbachus-mosaic-anatomy': 'chondrichthyes',
  'famennian-priscomyzon-oral-disc': 'early-fishes',
  'mazon-creek-myxinikela-stem-hagfish': 'early-fishes',
  'cheirolepis-eifelian-endoskeleton': 'actinopterygii',
  'fukangichthys-crown-actinopterygian-recalibration': 'actinopterygii',
  'holostei-genomic-support': 'actinopterygii',
  'teleost-3r-model-age': 'actinopterygii',
  'anisian-stem-teleosteomorph-record': 'actinopterygii',
  'neopterygian-caudal-fin-mosaic': 'actinopterygii',
  'eloposteoglossocephala-genome-structure': 'actinopterygii',
  'kungurian-gerobatrachus-stem-batrachian': 'amphibia',
  'early-triassic-triadobatrachus-ct': 'amphibia',
  'norian-funcusvermis-stem-caecilian': 'amphibia',
  'oxfordian-beiyanerpeton-salamandroid': 'amphibia',
  'oligocene-ymboirana-crown-caecilian': 'amphibia',
  'xenopus-tropicalis-draft-genome': 'amphibia',
  'xenopus-thyroid-receptor-metamorphosis': 'amphibia',
  'extant-amphibian-7238-species-timetree': 'amphibia',
  'echinerpeton-neural-spine-specimen': 'mammal-origins',
  'raranimus-basal-therapsid-snout': 'mammal-origins',
  'haramiyavia-ct-crown-boundary': 'mammal-origins',
  'riograndia-brasilodon-jaw-joint-homoplasy': 'mammal-origins',
  'jurassic-mammaliaform-jaw-ear-load-shift': 'mammal-origins',
  'liaoconodon-ossified-meckel-link': 'mammal-origins',
  'meckel-cartilage-clast-experiment': 'mammal-origins',
  'cartorhynchus-holotype-body-plan': 'marine-reptiles-pterosaurs',
  'chaohusaurus-maternal-specimen': 'marine-reptiles-pterosaurs',
  'stenopterygius-soft-tissues': 'marine-reptiles-pterosaurs',
  'rhaeticosaurus-holotype-histology': 'marine-reptiles-pterosaurs',
  'polycotylus-gravid-specimen': 'marine-reptiles-pterosaurs',
  'plesiosaur-four-flipper-model': 'marine-reptiles-pterosaurs',
  'tupandactylus-feather-melanosomes': 'marine-reptiles-pterosaurs',
  'hamipterus-egg-assemblage': 'marine-reptiles-pterosaurs',
  'giant-pterosaur-launch-model': 'marine-reptiles-pterosaurs',
  'indohyus-aquatic-raoellid-evidence': 'cetartiodactyla',
  'pakicetus-composite-terrestrial-skeleton': 'cetartiodactyla',
  'ambulocetus-holotype-locomotion': 'cetartiodactyla',
  'peregocetus-holotype-amphibious-dispersal': 'cetartiodactyla',
  'basilosaurus-hind-limb-specimens': 'cetartiodactyla',
  'aegicetus-holotype-tail-propulsion': 'cetartiodactyla',
  'whale-hippo-retroposon-topology': 'cetartiodactyla',
  'extant-cetacean-supermatrix-tree': 'cetartiodactyla',
  'eunotosaurus-rib-histology-shell-model': 'turtles-lepidosaurs',
  'pappochelys-gastralia-shell-mosaic': 'turtles-lepidosaurs',
  'odontochelys-plastron-dorsal-shell-mosaic': 'turtles-lepidosaurs',
  'caribemys-crown-turtle-calibration': 'turtles-lepidosaurs',
  'taytalura-stem-lepidosaur-skull': 'turtles-lepidosaurs',
  'megachirella-ct-stem-squamate': 'turtles-lepidosaurs',
  'bellairsia-synchrotron-stem-squamate': 'turtles-lepidosaurs',
  'cryptovaranoides-competing-topologies': 'turtles-lepidosaurs',
  'tetrapods-on-land': 'tetrapod-transition',
  'zachelmie-digit-trackways': 'tetrapod-transition',
  'tiktaalik-body-plan-mosaic': 'tetrapod-transition',
  'tiktaalik-pectoral-fin': 'tetrapod-transition',
  'elpistostege-digit-bearing-fin': 'tetrapod-transition',
  'acanthostega-eight-digit-limb': 'tetrapod-transition',
  'ichthyostega-joint-mobility': 'tetrapod-transition',
  'dinosaur-radiation': 'dinosauria',
  'perissodactyl-radiation': 'perissodactyla',
  'eocene-oligocene-transition': 'perissodactyla',
  'early-homo-dispersal': 'primates',
  'homo-sapiens-admixture': 'primates',
}

const labels = {
  en: {
    atlas: 'Evo Atlas', catalog: 'Catalog', stories: 'Stories', explorer: 'Explorer', research: 'Research', data: 'Data', about: 'About',
    evidence: 'Evidence boundary', claims: 'Claim ledger', references: 'References', limitations: 'Known limits', open: 'Open in Explorer',
    report: 'Report an evidence issue', home: 'Atlas home', noHumanReview: 'Maintainer review not completed', automated: 'Automated data audit passed',
    dataset: 'Dataset release', methods: 'Methods', breadcrumbs: 'Breadcrumbs', range: 'Represented range', package: 'Content package',
  },
  zh: {
    atlas: 'Evo Atlas 演化图谱', catalog: '目录', stories: '故事', explorer: '探索器', research: '研究', data: '数据', about: '关于',
    evidence: '证据边界', claims: '主张账本', references: '参考文献', limitations: '已知局限', open: '在探索器中打开',
    report: '报告证据问题', home: '图谱首页', noHumanReview: '尚未完成维护者审阅', automated: '自动数据审计已通过',
    dataset: '数据集发布', methods: '方法', breadcrumbs: '面包屑导航', range: '呈现年代范围', package: '内容包',
  },
}

const maturityLabels = {
  en: { 'generated-scaffold': 'Generated scaffold', structured: 'Structured', 'source-linked': 'Source linked', 'curated-draft': 'Curated draft', published: 'Published' },
  zh: { 'generated-scaffold': '生成式骨架', structured: '结构完整', 'source-linked': '来源已关联', 'curated-draft': '策展草稿', published: '已发布' },
}

const reviewLabels = {
  en: { 'not-reviewed': 'Maintainer review not performed', 'in-review': 'Maintainer review in progress', 'reviewed-with-caveats': 'Maintainer reviewed with caveats', reviewed: 'Maintainer reviewed' },
  zh: { 'not-reviewed': '维护者尚未审阅', 'in-review': '维护者审阅中', 'reviewed-with-caveats': '维护者审阅通过但有保留', reviewed: '维护者已审阅' },
}
const externalExpertLabels = { en: 'External expert review not performed', zh: '未进行外部专家审阅' }

const staticCss = `
  :root{color-scheme:dark;--bg:#081115;--surface:#0e1b20;--line:#2a4248;--muted:#91a29a;--text:#e6eee9;--accent:#6ddab1;--warn:#d7b68c;font-family:Inter,ui-sans-serif,system-ui,sans-serif}*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 82% 0,rgba(109,218,177,.07),transparent 28%),var(--bg);color:var(--text);line-height:1.65}a{color:var(--accent)}header.site{height:58px;padding:0 max(20px,calc((100vw - 1120px)/2));display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #1a2d32;background:rgba(8,17,21,.94)}header.site>a{font:700 14px Georgia,serif;letter-spacing:.14em;text-decoration:none}nav{display:flex;gap:15px}nav a{color:var(--muted);font-size:11px;text-decoration:none}.page{width:min(920px,calc(100% - 36px));margin:auto;padding:68px 0 110px}.crumbs{color:var(--muted);font:11px ui-monospace,monospace}.crumbs a{color:var(--muted)}h1{margin:35px 0 0;font:500 clamp(46px,8vw,82px)/1 Georgia,serif;letter-spacing:-.045em}h1 em{color:#a8dec8}.dek{max-width:760px;margin:28px 0;color:#b8c6bf;font:17px/1.75 Georgia,serif}.status{display:grid;grid-template-columns:1fr auto;gap:8px 20px;margin:34px 0;padding:16px;border:1px solid #7a684e;background:rgba(215,182,140,.045)}.status strong{font:500 16px Georgia,serif}.pills{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px}.pill{padding:4px 7px;border:1px solid var(--line);color:var(--muted);font:700 9px ui-monospace,monospace;text-transform:uppercase}.pill.warn{color:var(--warn);border-color:#7a684e}.pill.good{color:var(--accent);border-color:#3b8068}.facts{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #1a2d32}.facts div{padding:18px;border-right:1px solid #1a2d32}.facts div:last-child{border:0}.facts small,.eyebrow{display:block;color:var(--muted);font:9px ui-monospace,monospace;text-transform:uppercase}.facts strong{display:block;margin-top:5px;font:500 16px Georgia,serif}section{margin-top:58px;padding-top:34px;border-top:1px solid #1a2d32}h2{font:500 31px Georgia,serif}.claim{margin:10px 0;padding:18px;border:1px solid #1a2d32;background:var(--surface)}.claim small{color:var(--accent);font:9px ui-monospace,monospace;text-transform:uppercase}.claim p{margin:9px 0;color:#c3cec8}.claim code{color:var(--muted);font-size:10px}.refs,.directory{padding:0;list-style:none}.refs li,.directory li{padding:14px 0;border-bottom:1px solid #1a2d32}.refs strong,.refs span,.directory strong,.directory span{display:block}.refs span,.directory span{color:var(--muted);font-size:11px}.directory a{text-decoration:none}.actions{display:flex;flex-wrap:wrap;gap:9px;margin-top:34px}.button{display:inline-flex;min-height:44px;align-items:center;padding:0 16px;border:1px solid var(--accent);background:var(--accent);color:#07130f;font-weight:750;text-decoration:none}.button.secondary{border-color:var(--line);background:var(--surface);color:var(--text)}.language{margin-left:auto;color:var(--muted);font:10px ui-monospace,monospace}.language a{margin-left:9px}.notice{padding:18px;border-left:2px solid var(--warn);background:var(--surface);color:var(--muted)}footer{padding:30px max(20px,calc((100vw - 1120px)/2));border-top:1px solid #1a2d32;color:var(--muted);font:10px ui-monospace,monospace}@media(max-width:700px){header.site{height:auto;min-height:58px;align-items:flex-start;padding-block:15px;gap:15px}nav{display:none}.page{padding-top:42px}.status{grid-template-columns:1fr}.pills{justify-content:flex-start}.facts{grid-template-columns:1fr}.facts div{border-right:0;border-bottom:1px solid #1a2d32}.actions{flex-direction:column}.button{justify-content:center}}@media print{header.site,.language,.actions,footer{display:none}.page{width:100%;padding:0;color:#111}body{background:#fff;color:#111}.status,.claim,.notice{background:#fff;border-color:#bbb}.dek,.refs span,.directory span{color:#333}a{color:#111;text-decoration:none}}
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
<body><header class="site"><a href="${basePath}/">EVO ATLAS</a><nav><a href="${basePath}/">${text.atlas}</a><a href="${basePath}/#/catalog">${text.catalog}</a><a href="${basePath}/#/stories">${text.stories}</a><a href="${basePath}/#/explore">${text.explorer}</a><a href="${basePath}/#/research">${text.research}</a><a href="${basePath}/#/data">${text.data}</a><a href="${basePath}/#/about">${text.about}</a></nav><span class="language"><a lang="en" href="${language === 'en' ? url : alternateUrl}">EN</a><a lang="zh-CN" href="${language === 'zh' ? url : alternateUrl}">中文</a></span></header><main class="page"><div class="crumbs" aria-label="${text.breadcrumbs}">${crumbHtml}</div>${body}</main><footer>EVO ATLAS / ${escapeHtml(manifest.datasetVersion)} · Static-first · Source-aware · Open data</footer></body></html>`
}

function referenceRecords(ids) {
  return [...new Set(ids)].flatMap((id) => referenceById.has(id) ? [referenceById.get(id)] : [])
}

function loadChineseTranslations() {
  const translations = new Map()
  for (const [fileName, dictionaryName, scriptKind] of [['index.tsx', 'zh', ts.ScriptKind.TSX], ['marineZh.ts', 'marineZh', ts.ScriptKind.TS], ['cetartiodactylaZh.ts', 'cetartiodactylaZh', ts.ScriptKind.TS], ['turtleLepidosaurZh.ts', 'turtleLepidosaurZh', ts.ScriptKind.TS]]) {
    const sourcePath = join(rootDir, 'src', 'i18n', fileName)
    const source = ts.createSourceFile(sourcePath, readFileSync(sourcePath, 'utf8'), ts.ScriptTarget.Latest, true, scriptKind)
    let dictionary = null
    const visit = (node) => {
      if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === dictionaryName && ts.isObjectLiteralExpression(node.initializer)) dictionary = node.initializer
      ts.forEachChild(node, visit)
    }
    visit(source)
    if (!dictionary) throw new Error(`Could not read the ${dictionaryName} translation dictionary for static publication.`)
    for (const property of dictionary.properties) {
      if (!ts.isPropertyAssignment(property) || !ts.isStringLiteralLike(property.initializer)) continue
      const key = ts.isStringLiteralLike(property.name) ? property.name.text : ts.isIdentifier(property.name) ? property.name.text : null
      if (key) translations.set(key, property.initializer.text)
    }
  }
  if (translations.size < 100) throw new Error('The zh translation dictionary is unexpectedly incomplete.')
  return translations
}

function localize(language, value) {
  const source = String(value ?? '')
  if (language !== 'zh') return source
  return claimStatementsZh[source] ?? chineseTranslations.get(source) ?? compactAmphibianTranslation(source) ?? source
}

function compactAmphibianTranslation(source) {
  const value = source.toLowerCase()
  const exact = { 'caecilian total group': '无足类总群', 'living caecilians': '现生蚓螈', amphibia: '两栖纲', anura: '无尾目', caudata: '有尾目', gymnophiona: '无足目' }
  if (exact[value]) return exact[value]
  if (/receptor|trα|trβ|metamorphosis|experimental causation/.test(value)) return '爪蟾受体敲除实验区分 TRβ 尾部退化与 TRα 后肢发育效应；结论限于该模型与器官。'
  if (/7,238|10,000-tree|4,061|15-gene|model nodes|global extant-species|molecular and taxonomic|col26\.8/.test(value)) return '7,238 种合成树仅有 4,061 种具分子数据；其余为分类推断，模型时间不等于化石或命名覆盖。'
  if (/gerobatrachus|usnm 489135|clear fork|stem batrachia|kungurian|leonardian|proposed topology/.test(value)) return 'USNM 489135 记录蛙螈类干群镶嵌性状；不代表冠群、祖先或全球首现。'
  if (/triadobatrachus|mnhn\.f\.mae\.126|sakamena|stem salientia|split nodule|frog-lineage|induan|olenekian|historical provenance/.test(value)) return 'MNHN.F.MAE.126 的微型 CT 支持跳跃类干群；未证明冠群无尾目或特化跳跃。'
  if (/funcusvermis|pefo 43891|thunderstorm ridge|gymnophionomorpha|total-group occurrence|caecilian total-group|many individuals|not one articulated|global fad/.test(value)) return 'Funcusvermis 骨床支持无足类总群；孤立骨骼不设定冠群或全球首现。'
  if (/beiyanerpeton|pkup v060|tiaojishan|salamandroid|salamandroidea|dated flow|157 ± 3|overlying trachyandesite|association strengthens/.test(value)) return 'PKUP V0601–V0606 支持牛津期蝾螈总科记录；年龄与幼态持续解释均有边界。'
  if (/ymboirana|dgm 1462|tremembé|typhlonect|living-family|crown display|ct-informed comparative/.test(value)) return 'DGM 1462-R 暂归水栖蚓螈科；冠群界线因缺少正式系统检验而保持低置信度。'
  if (/xenopus|draft assembly|one individual|nigerian inbred|genome is not|genomic reference|7.6-fold|aamc00000000|extant genomic/.test(value)) return '热带爪蟾草图基因组是单一个体现生参照，不代表全部两栖类或祖先。'
  if (/five amphibian fossils|follow named specimens/.test(value)) return '五组具名化石展示不同边界，不混同总群、冠群、祖先与全球首现。'
  if (/living amphibian data|compare one frog genome/.test(value)) return '比较现生基因组、变态实验与模型时间树，同时保留样本和推断边界。'
  return undefined
}

function renderReferences(records, language) {
  if (!records.length) return `<p class="notice">${language === 'zh' ? '此静态摘要没有可用的参考文献记录。' : 'No reference record is available for this static summary.'}</p>`
  return `<ol class="refs">${records.map((reference) => `<li><a href="${escapeHtml(reference.url)}" rel="noreferrer"><strong>${escapeHtml(reference.title)}</strong></a><span>${escapeHtml(reference.authors)}${reference.publishedYear ? ` · ${reference.publishedYear}` : ''}${reference.doi ? ` · DOI ${escapeHtml(reference.doi)}` : ''}</span></li>`).join('')}</ol>`
}

function reviewBoundary(language, packageEntry) {
  if (packageEntry?.reviewStatus === 'reviewed') return language === 'zh' ? '维护者已针对精确内容摘要记录审阅决定；这不表示外部专家同行评审。' : 'The maintainer recorded a decision against an exact content digest; this is not external expert peer review.'
  if (packageEntry?.reviewStatus === 'reviewed-with-caveats') return language === 'zh' ? '维护者已审阅该内容摘要但保留公开问题；请查看包级审阅记录。' : 'The maintainer reviewed this content digest with public caveats; inspect the package review record.'
  if (packageEntry?.reviewStatus === 'in-review') return language === 'zh' ? '已生成审阅包，维护者决定仍在进行；自动检查不等于审阅完成。' : 'A review packet exists and the maintainer decision is still in progress; automated checks are not a completed review.'
  return language === 'zh' ? '自动检查仅覆盖结构、标识符、翻译与链接；尚未完成维护者审阅，也未进行外部专家审阅。' : 'Automated checks cover structure, identifiers, translations and links only; maintainer and external expert review are not complete.'
}

function intervalSlug(interval) {
  return interval.oid.includes(':') ? interval.oid.split(':').at(-1) : interval.oid
}

function formatBoundary(value, uncertainty, approximate) {
  return `${approximate ? '~' : ''}${value}${uncertainty === null || uncertainty === undefined ? '' : ` ± ${uncertainty}`} Ma`
}

function shortHash(value) {
  return createHash('sha256').update(String(value), 'utf8').digest('hex').slice(0, 8)
}

function readableSlug(value) {
  const normalized = String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return normalized || 'unnamed'
}

function namedObjectSlug(value) {
  return `${readableSlug(value)}-${shortHash(value)}`
}

function localitySlug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function addToSet(record, key, value) {
  const normalized = String(value ?? '').trim()
  if (normalized) record[key].add(normalized)
}

function summarizeOccurrenceGroups(keySelector, initializer) {
  const groups = new Map()
  for (const occurrence of occurrences) {
    const key = String(keySelector(occurrence) ?? '').trim()
    if (!key) continue
    if (!groups.has(key)) groups.set(key, initializer(key, occurrence))
    const group = groups.get(key)
    group.occurrenceCount += 1
    group.olderMa = Math.max(group.olderMa, Number(occurrence.eag))
    group.youngerMa = Math.min(group.youngerMa, Number(occurrence.lag))
    addToSet(group, 'collections', occurrence.cid)
    addToSet(group, 'taxa', occurrence.tna)
    addToSet(group, 'countries', occurrence.cc2)
    addToSet(group, 'states', occurrence.stp)
    addToSet(group, 'formations', occurrence.formation)
    addToSet(group, 'members', occurrence.member)
    addToSet(group, 'periods', occurrence.period)
    addToSet(group, 'referenceIds', occurrence.referenceId)
    addToSet(group, 'coordinatePrecisions', occurrence.coordinatePrecision)
  }
  return [...groups.values()].sort((left, right) => left.name.localeCompare(right.name, 'en'))
}

const formationGroups = summarizeOccurrenceGroups(
  (occurrence) => occurrence.formation,
  (name) => ({ name, slug: namedObjectSlug(name), occurrenceCount: 0, olderMa: -Infinity, youngerMa: Infinity, collections: new Set(), taxa: new Set(), countries: new Set(), states: new Set(), formations: new Set(), members: new Set(), periods: new Set(), referenceIds: new Set(), coordinatePrecisions: new Set() }),
)

const localityGroups = summarizeOccurrenceGroups(
  (occurrence) => occurrence.cid,
  (name, first) => ({ name, slug: localitySlug(name), occurrenceCount: 0, olderMa: -Infinity, youngerMa: Infinity, collections: new Set(), taxa: new Set(), countries: new Set(), states: new Set(), formations: new Set(), members: new Set(), periods: new Set(), referenceIds: new Set(), coordinatePrecisions: new Set(), longitude: Number(first.lng), latitude: Number(first.lat), paleolongitude: Number(first.paleolng), paleolatitude: Number(first.paleolat), paleoModelId: first.paleoModelId, geographicScale: first.geographicScale }),
)

const traitGroups = [...profiles.reduce((groups, profile) => {
  for (const trait of profile.traits ?? []) {
    if (!groups.has(trait)) groups.set(trait, { name: trait, slug: namedObjectSlug(trait), profiles: [], referenceIds: new Set(), packageIds: new Set() })
    const group = groups.get(trait)
    group.profiles.push(profile)
    const packageId = entityById.get(profile.treeNodeId)?.packageId
    if (packageId) group.packageIds.add(packageId)
    for (const referenceId of profile.referenceIds ?? []) group.referenceIds.add(referenceId)
  }
  return groups
}, new Map()).values()].sort((left, right) => left.name.localeCompare(right.name, 'en'))

function writeCollectionIndex({ kind, titleEn, titleZh, descriptionEn, descriptionZh, items }) {
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? `${kind}/` : `zh/${kind}/`
    const alternatePath = language === 'en' ? `zh/${kind}/` : `${kind}/`
    const title = language === 'zh' ? titleZh : titleEn
    const description = language === 'zh' ? descriptionZh : descriptionEn
    const list = items.map((item) => {
      const label = language === 'zh' ? item.titleZh ?? item.titleEn : item.titleEn
      const href = `${basePath}/${language === 'zh' ? 'zh/' : ''}${item.path}`
      const meta = language === 'zh' ? item.metaZh ?? item.metaEn : item.metaEn
      return `<li><a href="${escapeHtml(href)}"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(meta ?? '')}</span></a></li>`
    }).join('')
    const body = `<span class="eyebrow">${text.catalog} / ${escapeHtml(kind)}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><div class="facts"><div><small>${language === 'zh' ? '条目' : 'Entries'}</small><strong>${items.length}</strong></div><div><small>${language === 'zh' ? '数据版本' : 'Dataset version'}</small><strong>${escapeHtml(manifest.datasetVersion)}</strong></div><div><small>${language === 'zh' ? '出版形式' : 'Publication form'}</small><strong>HTML + JSON-LD</strong></div></div><section><h2>${language === 'zh' ? '全部条目' : 'All entries'}</h2><ol class="directory">${list}</ol></section>`
    write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, type: 'CollectionPage', jsonLd: { mainEntity: { '@type': 'ItemList', numberOfItems: items.length, itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: language === 'zh' ? item.titleZh ?? item.titleEn : item.titleEn, url: `${baseUrl}/${language === 'zh' ? 'zh/' : ''}${item.path}` })) }, dateModified: manifest.generatedAt }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: title, url: `${baseUrl}/${path}` }], body }))
  }
  sitemapUrls.add(`${baseUrl}/${kind}/`)
  indexPageCount += 2
}

const sitemapUrls = new Set([`${baseUrl}/`])
let taxonPageCount = 0
let eventPageCount = 0
let storyPageCount = 0
let intervalPageCount = 0
let referencePageCount = 0
let formationPageCount = 0
let localityPageCount = 0
let traitPageCount = 0
let mediaPageCount = 0
let datasetPageCount = 0
let indexPageCount = 0

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
      ? subjectClaims.map((claim) => `<article class="claim"><small>${escapeHtml(localize(language, claim.claimType))} · ${escapeHtml(localize(language, claim.confidence))}</small><p>${escapeHtml(localize(language, claim.statement))}</p><code>${escapeHtml(claim.id)}</code></article>`).join('')
      : `<p class="notice">${language === 'zh' ? '该条目尚无主张级证据记录。' : 'No claim-level evidence record is bundled for this entry.'}</p>`
    const maturity = packageEntry?.scientificMaturity ?? 'generated-scaffold'
    const openUrl = profile
      ? `${basePath}/#/explore?profile=${encodeURIComponent(profile.id)}&taxon=${encodeURIComponent(entity.id)}`
      : `${basePath}/#/explore?taxon=${encodeURIComponent(entity.id)}&view=tree`
    const reviewLabel = reviewLabels[language][packageEntry?.reviewStatus ?? 'not-reviewed']
    const reviewClass = ['reviewed', 'reviewed-with-caveats'].includes(packageEntry?.reviewStatus) ? 'good' : 'warn'
    const body = `<span class="eyebrow">${text.catalog} / ${escapeHtml(localize(language, entity.rank))}</span><h1><em>${escapeHtml(entity.names.scientific)}</em></h1><p class="dek">${escapeHtml(summary)}</p><aside class="status"><strong>${escapeHtml(language === 'zh' ? packageEntry?.titleZh : packageEntry?.title)}</strong><div class="pills"><span class="pill ${maturity === 'published' ? 'good' : maturity === 'generated-scaffold' ? '' : 'warn'}">${escapeHtml(maturityLabels[language][maturity])}</span><span class="pill">${text.automated}</span><span class="pill ${reviewClass}">${escapeHtml(reviewLabel)}</span><span class="pill">${externalExpertLabels[language]}</span></div><p>${escapeHtml(reviewBoundary(language, packageEntry))}</p></aside><div class="facts"><div><small>${text.range}</small><strong>${entity.temporalRange.olderMa}–${entity.temporalRange.youngerMa || (language === 'zh' ? '现今' : 'Present')} Ma</strong></div><div><small>${text.package}</small><strong>${escapeHtml(entity.packageId)}</strong></div><div><small>PBDB</small><strong>${escapeHtml(entity.externalIds.pbdb ?? (language === 'zh' ? '未关联' : 'Not linked'))}</strong></div></div><section><h2>${text.evidence}</h2><p>${escapeHtml(reviewBoundary(language, packageEntry))}</p></section><section><h2>${text.claims}</h2>${claimHtml}</section><section><h2>${text.limitations}</h2><ul>${entity.limitations.map((item) => `<li>${escapeHtml(localize(language, item))}</li>`).join('')}</ul></section><section><h2>${text.references}</h2>${renderReferences(records, language)}</section><div class="actions"><a class="button" href="${openUrl}">${text.open} ↗</a><a class="button secondary" href="${escapeHtml(issueUrl({ entityId: entity.id, pageUrl: canonicalUrl }))}">${text.report} ↗</a></div>`
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
    const summary = localize(language, event.summary)
    const reviewLabel = reviewLabels[language][packageEntry?.reviewStatus ?? 'not-reviewed']
    const reviewClass = ['reviewed', 'reviewed-with-caveats'].includes(packageEntry?.reviewStatus) ? 'good' : 'warn'
    const body = `<span class="eyebrow">${text.catalog} / ${escapeHtml(localize(language, event.category))}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(summary)}</p><aside class="status"><strong>${escapeHtml(language === 'zh' ? packageEntry?.titleZh : packageEntry?.title)}</strong><div class="pills"><span class="pill">${text.automated}</span><span class="pill ${reviewClass}">${escapeHtml(reviewLabel)}</span><span class="pill">${externalExpertLabels[language]}</span></div><p>${escapeHtml(reviewBoundary(language, packageEntry))}</p></aside><div class="facts"><div><small>${text.range}</small><strong>${event.startAge}–${event.endAge} Ma</strong></div><div><small>${language === 'zh' ? '地区' : 'Regions'}</small><strong>${escapeHtml(event.regions.map((region) => localize(language, region)).join(' · '))}</strong></div><div><small>${language === 'zh' ? '相关类群' : 'Clades'}</small><strong>${escapeHtml(event.clades.map((clade) => localize(language, clade)).join(' · '))}</strong></div></div><section><h2>${text.claims}</h2>${subjectClaims.map((claim) => `<article class="claim"><small>${escapeHtml(localize(language, claim.claimType))} · ${escapeHtml(localize(language, claim.confidence))}</small><p>${escapeHtml(localize(language, claim.statement))}</p><code>${escapeHtml(claim.id)}</code></article>`).join('')}</section><section><h2>${text.references}</h2>${renderReferences(records, language)}</section><div class="actions"><a class="button" href="${basePath}/#/events?id=${encodeURIComponent(event.id)}">${text.open} ↗</a><a class="button secondary" href="${escapeHtml(issueUrl({ entityId: `event:${event.id}`, pageUrl: canonicalUrl }))}">${text.report} ↗</a></div>`
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
    const description = localize(language, story.dek)
    const steps = story.steps.map((step, index) => `<article class="claim"><small>${String(index + 1).padStart(2, '0')} · ${step.age} Ma · ${escapeHtml(localize(language, step.view))}</small><h2>${escapeHtml(localize(language, step.title))}</h2><p>${escapeHtml(localize(language, step.text))}</p>${step.annotation ? `<p class="notice">${escapeHtml(localize(language, step.annotation))}</p>` : ''}<code>${escapeHtml(step.claimLinks.map((link) => link.claimId).join(' · '))}</code></article>`).join('')
    const body = `<span class="eyebrow">${text.stories} / ${story.durationMinutes} ${language === 'zh' ? '分钟' : 'min'}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><p class="notice">${language === 'zh' ? '每一步都链接到主张与可复现的探索器状态，但故事本身仍是编辑综合。' : 'Every step links to claims and a reproducible Explorer state, while the narrative remains an editorial synthesis.'}</p><section><h2>${language === 'zh' ? '故事步骤' : 'Story sequence'}</h2>${steps}</section><section><h2>${text.references}</h2>${renderReferences(records, language)}</section><div class="actions"><a class="button" href="${basePath}/#/stories?id=${encodeURIComponent(story.id)}">${text.open} ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, jsonLd: { '@type': 'Article', articleSection: language === 'zh' ? '演化故事' : 'Evolution story', citation: records.map((reference) => ({ '@type': 'CreativeWork', name: reference.title, url: reference.url })) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.stories, url: `${basePath}/#/stories` }, { label: title, url: `${baseUrl}/${path}` }], body }))
    storyPageCount += 1
  }
}

for (const interval of timeScale.units) {
  const slug = intervalSlug(interval)
  const parent = timeScale.units.find((candidate) => candidate.oid === interval.pid)
  const englishPath = `intervals/${slug}/`
  const chinesePath = `zh/intervals/${slug}/`
  sitemapUrls.add(`${baseUrl}/${englishPath}`)
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const title = language === 'zh' ? interval.namZh : interval.nam
    const rank = language === 'zh' ? ({ eon: '宙', era: '代', period: '纪', epoch: '世', age: '期' }[interval.itp] ?? interval.itp) : interval.itp
    const description = language === 'zh'
      ? `${title}是 ICS ${timeScale.officialVersion} 时间表中的${rank}级单位，当前显示范围为 ${interval.eag}–${interval.lag} Ma。`
      : `${interval.nam} is a ${rank}-level unit in the ICS ${timeScale.officialVersion} timescale, displayed here from ${interval.eag} to ${interval.lag} Ma.`
    const midpoint = ((interval.eag + interval.lag) / 2).toFixed(3)
    const parentLink = parent ? `<a href="${basePath}/${language === 'zh' ? 'zh/' : ''}intervals/${intervalSlug(parent)}/">${escapeHtml(language === 'zh' ? parent.namZh : parent.nam)}</a>` : (language === 'zh' ? '顶级单位' : 'Top-level unit')
    const olderBoundary = formatBoundary(interval.eag, interval.eagUncertaintyMa, interval.eagApproximate)
    const youngerBoundary = formatBoundary(interval.lag, interval.lagUncertaintyMa, interval.lagApproximate)
    const sourceNoteZh = interval.oid === 'epoch:ludlow'
      ? '机器可读 RDF 中罗德洛世的结束年龄与普里道利期重叠；此页按 ICS 2026/06 图表中 422.7 Ma 的普里道利期底界连续投影。'
      : interval.oid === 'age:aquitanian'
        ? '机器可读 RDF 将阿基坦期底界取整为 23.03 Ma；此页按 ICS 2026/06 图表与中新世底界连续投影为 23.04 Ma。'
        : interval.sourceNote
    const sourceNote = interval.sourceNote ? `<p class="notice">${escapeHtml(language === 'zh' ? sourceNoteZh : interval.sourceNote)}</p>` : ''
    const boundaryPolicy = language === 'zh' ? 'eag 与 lag 是下列版本化边界记录的显示投影。显生宙数值年龄不定义地层单位，单位由 GSSP 定义；不确定度为 null 表示图表的 GSSA 或显示值没有给出数值年龄不确定度。' : timeScale.boundaryPolicy
    const body = `<span class="eyebrow">${text.catalog} / ${escapeHtml(rank)}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><div class="facts"><div><small>${text.range}</small><strong>${escapeHtml(olderBoundary)} → ${escapeHtml(youngerBoundary)}</strong></div><div><small>${language === 'zh' ? '上级单位' : 'Parent unit'}</small><strong>${parentLink}</strong></div><div><small>${language === 'zh' ? 'ICS 版本' : 'ICS version'}</small><strong>${escapeHtml(timeScale.officialVersion)}</strong></div></div><section><h2>${text.evidence}</h2><p>${escapeHtml(boundaryPolicy)}</p><p>${language === 'zh' ? '较老边界' : 'Older boundary'}: <strong>${escapeHtml(olderBoundary)}</strong> · ${language === 'zh' ? '较年轻边界' : 'Younger boundary'}: <strong>${escapeHtml(youngerBoundary)}</strong>${interval.sourceId ? ` · <code>${escapeHtml(interval.sourceId)}</code>` : ''}</p><p class="notice">${language === 'zh' ? '数值年龄是版本化显示值；显生宙单位以 GSSP 定义，而非由数值年龄本身定义。' : 'Numerical ages are versioned display values; Phanerozoic units are defined by GSSPs rather than by the numerical ages themselves.'}</p>${sourceNote}</section><section><h2>${text.references}</h2>${renderReferences(referenceRecords([timeScale.source.referenceId]), language)}</section><div class="actions"><a class="button" href="${basePath}/#/explore?age=${midpoint}&view=diversity">${text.open} ↗</a><a class="button secondary" href="${escapeHtml(timeScale.source.url)}" rel="noreferrer">ICS ${escapeHtml(timeScale.officialVersion)} ↗</a><a class="button secondary" href="${escapeHtml(timeScale.source.machineReadableUrl)}" rel="noreferrer">RDF / CC BY 4.0 ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, type: 'DefinedTerm', jsonLd: { identifier: interval.oid, termCode: interval.abr, inDefinedTermSet: { '@type': 'DefinedTermSet', name: `International Chronostratigraphic Chart ${timeScale.officialVersion}`, url: timeScale.source.url }, temporalCoverage: `${interval.eag} Ma/${interval.lag} Ma`, citation: [{ '@type': 'CreativeWork', name: 'International Chronostratigraphic Chart', url: timeScale.source.url }] }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: language === 'zh' ? '地质年代' : 'Geological intervals', url: `${basePath}/${language === 'zh' ? 'zh/' : ''}intervals/` }, { label: title, url: `${baseUrl}/${path}` }], body }))
    intervalPageCount += 1
  }
}

for (const reference of references) {
  const englishPath = `references/${reference.id}/`
  const chinesePath = `zh/references/${reference.id}/`
  sitemapUrls.add(`${baseUrl}/${englishPath}`)
  const supportingClaims = claims.filter((claim) => claim.referenceLinks.some((link) => link.referenceId === reference.id))
  const linkedEntities = entities.filter((entity) => entity.referenceIds.includes(reference.id))
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const description = language === 'zh'
      ? `${reference.authors} 的参考记录；在 Evo Atlas 中关联 ${supportingClaims.length} 条主张和 ${linkedEntities.length} 个实体。`
      : `Reference record by ${reference.authors}; linked to ${supportingClaims.length} claims and ${linkedEntities.length} entities in Evo Atlas.`
    const linkedClaimHtml = supportingClaims.length ? supportingClaims.map((claim) => `<article class="claim"><small>${escapeHtml(localize(language, claim.claimType))} · ${escapeHtml(localize(language, claim.confidence))}</small><p>${escapeHtml(localize(language, claim.statement))}</p><code>${escapeHtml(claim.id)}</code></article>`).join('') : `<p class="notice">${language === 'zh' ? '当前没有主张直接引用此记录。' : 'No claim currently cites this record directly.'}</p>`
    const body = `<span class="eyebrow">${text.references} / ${escapeHtml(localize(language, reference.type))}</span><h1>${escapeHtml(reference.title)}</h1><p class="dek">${escapeHtml(reference.authors)}</p><div class="facts"><div><small>${language === 'zh' ? '年份' : 'Year'}</small><strong>${escapeHtml(reference.publishedYear ?? reference.accessedAt ?? '—')}</strong></div><div><small>${language === 'zh' ? '来源角色' : 'Source role'}</small><strong>${escapeHtml(localize(language, reference.sourceRole))}</strong></div><div><small>DOI / ID</small><strong>${escapeHtml(reference.doi ?? reference.id)}</strong></div></div><section><h2>${language === 'zh' ? '适用范围' : 'Fitness and scope'}</h2><p>${escapeHtml((reference.fitnessFor ?? []).map((value) => localize(language, value)).join(' · '))}</p>${reference.note ? `<p class="notice">${escapeHtml(localize(language, reference.note))}</p>` : ''}</section><section><h2>${text.claims}</h2>${linkedClaimHtml}</section><div class="actions"><a class="button" href="${escapeHtml(reference.url)}" rel="noreferrer">${language === 'zh' ? '打开来源' : 'Open source'} ↗</a>${reference.doi ? `<a class="button secondary" href="https://doi.org/${escapeHtml(reference.doi)}" rel="noreferrer">DOI ↗</a>` : ''}</div>`
    const schemaType = reference.type === 'dataset' ? 'Dataset' : reference.type === 'paper' ? 'ScholarlyArticle' : 'CreativeWork'
    write(`${path}index.html`, pageHtml({ language, title: reference.title, description, path, alternatePath, type: schemaType, jsonLd: { identifier: reference.doi ?? reference.id, author: reference.authors, datePublished: reference.publishedYear, publisher: reference.publisher, sameAs: reference.url, about: reference.fitnessFor }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.references, url: `${basePath}/${language === 'zh' ? 'zh/' : ''}references/` }, { label: reference.title, url: `${baseUrl}/${path}` }], body }))
    referencePageCount += 1
  }
}

const formationByName = new Map(formationGroups.map((formation) => [formation.name, formation]))

for (const formation of formationGroups) {
  const records = referenceRecords([...formation.referenceIds])
  const englishPath = `formations/${formation.slug}/`
  const chinesePath = `zh/formations/${formation.slug}/`
  const canonicalUrl = `${baseUrl}/${englishPath}`
  sitemapUrls.add(canonicalUrl)
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const description = language === 'zh'
      ? `${formation.name} 组名在当前有界化石快照中关联 ${formation.occurrenceCount.toLocaleString()} 条记录；本页是数据聚合，不是正式地层词典条目。`
      : `${formation.name} is linked to ${formation.occurrenceCount.toLocaleString()} records in the current bounded fossil snapshot; this is a data aggregation, not a formal stratigraphic lexicon entry.`
    const members = [...formation.members].sort().slice(0, 24)
    const memberHtml = members.length ? `<ul>${members.map((member) => `<li>${escapeHtml(member)}</li>`).join('')}</ul>` : `<p>${language === 'zh' ? '当前样本没有成员层级字段。' : 'No member-level field is present in the current sample.'}</p>`
    const body = `<span class="eyebrow">${text.catalog} / ${language === 'zh' ? '地层组' : 'formation'}</span><h1>${escapeHtml(formation.name)}</h1><p class="dek">${escapeHtml(description)}</p><p class="notice">${language === 'zh' ? '记录来自非随机、有界的 PBDB 快照；计数、时间跨度和地理覆盖不能解释为地层单位的完整范围或丰度。' : 'Records come from a non-random bounded PBDB snapshot; counts, time spans and geographic coverage are not the complete range or abundance of the stratigraphic unit.'}</p><div class="facts"><div><small>${language === 'zh' ? '样本记录' : 'Sample records'}</small><strong>${formation.occurrenceCount.toLocaleString()}</strong></div><div><small>${text.range}</small><strong>${formation.olderMa}–${formation.youngerMa} Ma</strong></div><div><small>${language === 'zh' ? '化石采集编号' : 'Fossil collections'}</small><strong>${formation.collections.size.toLocaleString()}</strong></div></div><section><h2>${language === 'zh' ? '样本上下文' : 'Sample context'}</h2><p>${language === 'zh' ? '地质纪' : 'Periods'}: ${escapeHtml([...formation.periods].join(' · '))}</p><p>${language === 'zh' ? '国家代码' : 'Country codes'}: ${escapeHtml([...formation.countries].sort().join(' · '))}</p><p>${language === 'zh' ? '去重类群' : 'Distinct taxa'}: ${formation.taxa.size.toLocaleString()}</p></section><section><h2>${language === 'zh' ? '成员字段' : 'Member fields'}</h2>${memberHtml}</section><section><h2>${text.references}</h2>${renderReferences(records, language)}<p><small>${language === 'zh' ? '样本中的来源标识符' : 'Source identifiers present in the sample'}: ${escapeHtml([...formation.referenceIds].slice(0, 20).join(' · '))}</small></p></section><div class="actions"><a class="button" href="${basePath}/#/lab">${language === 'zh' ? '在数据实验室中查询' : 'Query in Data Lab'} ↗</a><a class="button secondary" href="${escapeHtml(issueUrl({ entityId: `formation:${formation.name}`, pageUrl: canonicalUrl }))}">${text.report} ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title: formation.name, description, path, alternatePath, type: 'DefinedTerm', jsonLd: { identifier: `formation:${formation.slug}`, termCode: formation.name, description, temporalCoverage: `${formation.olderMa} Ma/${formation.youngerMa} Ma`, spatialCoverage: [...formation.countries], citation: records.map((reference) => ({ '@type': 'CreativeWork', name: reference.title, url: reference.url })) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: language === 'zh' ? '地层组' : 'Formations', url: `${basePath}/${language === 'zh' ? 'zh/' : ''}formations/` }, { label: formation.name, url: `${baseUrl}/${path}` }], body }))
    formationPageCount += 1
  }
}

for (const locality of localityGroups) {
  const records = referenceRecords([...locality.referenceIds])
  const englishPath = `localities/${locality.slug}/`
  const chinesePath = `zh/localities/${locality.slug}/`
  const canonicalUrl = `${baseUrl}/${englishPath}`
  sitemapUrls.add(canonicalUrl)
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const title = language === 'zh' ? `PBDB 采集记录 ${locality.name}` : `PBDB collection ${locality.name}`
    const description = language === 'zh'
      ? `${locality.name} 在当前快照中聚合 ${locality.occurrenceCount.toLocaleString()} 条化石记录；它是数据库采集编号，不等同于经过现场核验的现代地点。`
      : `${locality.name} aggregates ${locality.occurrenceCount.toLocaleString()} fossil records in the current snapshot; it is a database collection identifier, not a field-verified modern place.`
    const formationLinks = [...locality.formations].sort().slice(0, 20).map((name) => {
      const formation = formationByName.get(name)
      return formation ? `<li><a href="${basePath}/${language === 'zh' ? 'zh/' : ''}formations/${formation.slug}/">${escapeHtml(name)}</a></li>` : `<li>${escapeHtml(name)}</li>`
    }).join('')
    const modernCoordinates = Number.isFinite(locality.longitude) && Number.isFinite(locality.latitude) ? `${locality.latitude.toFixed(5)}, ${locality.longitude.toFixed(5)}` : (language === 'zh' ? '未提供' : 'Not provided')
    const paleoCoordinates = Number.isFinite(locality.paleolongitude) && Number.isFinite(locality.paleolatitude) ? `${locality.paleolatitude.toFixed(2)}, ${locality.paleolongitude.toFixed(2)}` : (language === 'zh' ? '未提供' : 'Not provided')
    const body = `<span class="eyebrow">${text.catalog} / ${language === 'zh' ? '采集地' : 'locality'}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><p class="notice">${language === 'zh' ? '现代坐标、古坐标和年代继承自当前有界 PBDB 数据快照，可能经过舍入、历史地名转换或板块重建；请在使用前核对原始来源。' : 'Modern coordinates, paleocoordinates and ages are inherited from the bounded PBDB snapshot and may reflect rounding, historical naming or plate reconstruction; verify the primary source before reuse.'}</p><div class="facts"><div><small>${language === 'zh' ? '样本记录' : 'Sample records'}</small><strong>${locality.occurrenceCount.toLocaleString()}</strong></div><div><small>${text.range}</small><strong>${locality.olderMa}–${locality.youngerMa} Ma</strong></div><div><small>${language === 'zh' ? '地区' : 'Region'}</small><strong>${escapeHtml([...locality.countries, ...locality.states].join(' · '))}</strong></div></div><section><h2>${language === 'zh' ? '坐标与模型' : 'Coordinates and model'}</h2><p>${language === 'zh' ? '现代坐标' : 'Modern coordinates'}: <strong>${escapeHtml(modernCoordinates)}</strong></p><p>${language === 'zh' ? '古坐标' : 'Paleocoordinates'}: <strong>${escapeHtml(paleoCoordinates)}</strong> · ${escapeHtml(locality.paleoModelId ?? (language === 'zh' ? '模型未记录' : 'model not recorded'))}</p><p>${language === 'zh' ? '精度字段' : 'Precision fields'}: ${escapeHtml([...locality.coordinatePrecisions].join(' · ') || (language === 'zh' ? '未记录' : 'not recorded'))} · ${escapeHtml(locality.geographicScale ?? '')}</p></section><section><h2>${language === 'zh' ? '关联地层组' : 'Linked formations'}</h2>${formationLinks ? `<ul>${formationLinks}</ul>` : `<p>${language === 'zh' ? '当前样本未提供地层组。' : 'No formation is provided in the current sample.'}</p>`}</section><section><h2>${text.references}</h2>${renderReferences(records, language)}<p><small>${language === 'zh' ? '样本中的来源标识符' : 'Source identifiers present in the sample'}: ${escapeHtml([...locality.referenceIds].slice(0, 20).join(' · '))}</small></p></section><div class="actions"><a class="button" href="${basePath}/#/lab">${language === 'zh' ? '在数据实验室中查询' : 'Query in Data Lab'} ↗</a><a class="button secondary" href="${escapeHtml(issueUrl({ entityId: `locality:${locality.name}`, pageUrl: canonicalUrl }))}">${text.report} ↗</a></div>`
    const geo = Number.isFinite(locality.longitude) && Number.isFinite(locality.latitude) ? { '@type': 'GeoCoordinates', longitude: locality.longitude, latitude: locality.latitude } : undefined
    write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, type: 'Place', jsonLd: { identifier: locality.name, geo, temporalCoverage: `${locality.olderMa} Ma/${locality.youngerMa} Ma`, citation: records.map((reference) => ({ '@type': 'CreativeWork', name: reference.title, url: reference.url })) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: language === 'zh' ? '采集地' : 'Localities', url: `${basePath}/${language === 'zh' ? 'zh/' : ''}localities/` }, { label: title, url: `${baseUrl}/${path}` }], body }))
    localityPageCount += 1
  }
}

for (const trait of traitGroups) {
  const records = referenceRecords([...trait.referenceIds])
  const englishPath = `traits/${trait.slug}/`
  const chinesePath = `zh/traits/${trait.slug}/`
  const canonicalUrl = `${baseUrl}/${englishPath}`
  sitemapUrls.add(canonicalUrl)
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const title = localize(language, trait.name)
    const description = language === 'zh'
      ? `“${title}”是 ${trait.profiles.length} 个策展类群档案中使用的描述性性状短语；它不是标准化本体术语或独立同源性判断。`
      : `“${trait.name}” is a descriptive trait phrase used by ${trait.profiles.length} curated taxon profile(s); it is not a normalized ontology term or an independent homology judgment.`
    const linkedProfiles = trait.profiles.map((profile) => `<li><a href="${basePath}/${language === 'zh' ? 'zh/' : ''}taxa/${encodeURIComponent(profile.treeNodeId)}/"><strong>${escapeHtml(language === 'zh' ? profile.commonNameZh : profile.commonName)}</strong><span><em>${escapeHtml(profile.scientificName)}</em> · ${profile.firstAppearance}–${profile.lastAppearance || (language === 'zh' ? '现今' : 'Present')} Ma</span></a></li>`).join('')
    const body = `<span class="eyebrow">${text.catalog} / ${language === 'zh' ? '性状' : 'trait'}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><p class="notice">${language === 'zh' ? '性状短语来自编辑性类群档案；跨类群比较前需要核对标本、定义、同源性和编码尺度。' : 'Trait phrases come from editorial taxon profiles; specimen attribution, definitions, homology and coding scale require verification before comparative use.'}</p><div class="facts"><div><small>${language === 'zh' ? '关联档案' : 'Linked profiles'}</small><strong>${trait.profiles.length}</strong></div><div><small>${language === 'zh' ? '来源记录' : 'Source records'}</small><strong>${records.length}</strong></div><div><small>${text.package}</small><strong>${escapeHtml([...trait.packageIds].join(', '))}</strong></div></div><section><h2>${language === 'zh' ? '关联类群' : 'Linked taxa'}</h2><ol class="directory">${linkedProfiles}</ol></section><section><h2>${text.references}</h2>${renderReferences(records, language)}</section><div class="actions"><a class="button" href="${basePath}/#/taxa">${language === 'zh' ? '浏览类群档案' : 'Browse taxon dossiers'} ↗</a><a class="button secondary" href="${escapeHtml(issueUrl({ entityId: `trait:${trait.name}`, pageUrl: canonicalUrl }))}">${text.report} ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, type: 'DefinedTerm', jsonLd: { identifier: `trait:${trait.slug}`, termCode: trait.name, subjectOf: trait.profiles.map((profile) => ({ '@type': 'Taxon', name: profile.scientificName, identifier: profile.treeNodeId })), citation: records.map((reference) => ({ '@type': 'CreativeWork', name: reference.title, url: reference.url })) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: language === 'zh' ? '性状' : 'Traits', url: `${basePath}/${language === 'zh' ? 'zh/' : ''}traits/` }, { label: title, url: `${baseUrl}/${path}` }], body }))
    traitPageCount += 1
  }
}

for (const asset of media) {
  const englishPath = `media/${asset.id}/`
  const chinesePath = `zh/media/${asset.id}/`
  const canonicalUrl = `${baseUrl}/${englishPath}`
  sitemapUrls.add(canonicalUrl)
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? englishPath : chinesePath
    const alternatePath = language === 'en' ? chinesePath : englishPath
    const title = localize(language, asset.title)
    const description = language === 'zh' ? asset.captionZh : asset.caption
    const body = `<span class="eyebrow">${text.catalog} / ${language === 'zh' ? '媒体' : 'media'}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><aside class="status"><strong>${escapeHtml(localize(language, asset.rightsStatus))}</strong><div class="pills"><span class="pill ${asset.rightsStatus === 'reusable' ? 'good' : 'warn'}">${escapeHtml(localize(language, asset.license))}</span></div><p>${escapeHtml(localize(language, asset.licenseNote))}</p></aside><div class="facts"><div><small>${language === 'zh' ? '类型' : 'Type'}</small><strong>${escapeHtml(localize(language, asset.type))}</strong></div><div><small>${language === 'zh' ? '创作者' : 'Creator'}</small><strong>${escapeHtml(localize(language, asset.creator))}</strong></div><div><small>${language === 'zh' ? '主题范围' : 'Subject scope'}</small><strong>${escapeHtml(asset.subjectScope)}</strong></div></div><section><h2>${language === 'zh' ? '权利与替代文本' : 'Rights and alternative text'}</h2><p>${escapeHtml(language === 'zh' ? asset.altTextZh : asset.altText)}</p><p class="notice">${language === 'zh' ? '本目录记录不授予复用权；请在原始来源核验创作者、许可和上下文。' : 'This catalog record does not grant reuse rights; verify creator, license and context at the original source.'}</p></section><div class="actions"><a class="button" href="${escapeHtml(asset.sourceUrl)}" rel="noreferrer">${language === 'zh' ? '打开原始来源' : 'Open original source'} ↗</a><a class="button secondary" href="${basePath}/${language === 'zh' ? 'zh/' : ''}taxa/${encodeURIComponent(asset.taxonId)}/">${language === 'zh' ? '查看关联类群' : 'View linked taxon'} ↗</a><a class="button secondary" href="${escapeHtml(issueUrl({ entityId: `media:${asset.id}`, pageUrl: canonicalUrl }))}">${text.report} ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, type: 'CreativeWork', jsonLd: { identifier: asset.id, creator: asset.creator, license: asset.license, conditionsOfAccess: asset.rightsStatus, isBasedOn: asset.sourceUrl, about: asset.subjectScope, dateModified: asset.reviewedAt }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: language === 'zh' ? '媒体' : 'Media', url: `${basePath}/${language === 'zh' ? 'zh/' : ''}media/` }, { label: title, url: `${baseUrl}/${path}` }], body }))
    mediaPageCount += 1
  }
}

writeCollectionIndex({
  kind: 'taxa', titleEn: 'Taxa', titleZh: '类群',
  descriptionEn: 'Every registered taxon and navigation concept, with maturity and evidence boundaries kept visible.',
  descriptionZh: '全部已注册类群与导航概念，并明确显示内容成熟度和证据边界。',
  items: entities.map((entity) => { const packageEntry = packageById.get(entity.packageId); return { path: `taxa/${entity.id}/`, titleEn: `${entity.names.en} · ${entity.names.scientific}`, titleZh: `${entity.names.zh} · ${entity.names.scientific}`, metaEn: `${entity.rank} · ${maturityLabels.en[packageEntry?.scientificMaturity ?? 'generated-scaffold']}`, metaZh: `${localize('zh', entity.rank)} · ${maturityLabels.zh[packageEntry?.scientificMaturity ?? 'generated-scaffold']}` } }),
})
writeCollectionIndex({ kind: 'events', titleEn: 'Evolutionary events', titleZh: '演化事件', descriptionEn: 'Bounded evolutionary transitions with claims, sources, uncertainty and reproducible Explorer handoffs.', descriptionZh: '具有主张、来源、不确定性和可复现探索器入口的演化转折。', items: events.map((event) => ({ path: `events/${event.id}/`, titleEn: event.title, titleZh: event.titleZh, metaEn: `${event.startAge}–${event.endAge} Ma · ${event.category}`, metaZh: `${event.startAge}–${event.endAge} Ma · ${localize('zh', event.category)}` })) })
writeCollectionIndex({ kind: 'stories', titleEn: 'Guided stories', titleZh: '引导故事', descriptionEn: 'Published editorial narratives whose steps resolve to claims and reproducible Explorer states.', descriptionZh: '每一步均解析到主张和可复现探索器状态的已发布编辑叙事。', items: stories.map((story) => ({ path: `stories/${story.id}/`, titleEn: story.title, titleZh: story.titleZh, metaEn: `${story.durationMinutes} min · ${story.steps.length} steps`, metaZh: `${story.durationMinutes} 分钟 · ${story.steps.length} 步` })) })
writeCollectionIndex({ kind: 'intervals', titleEn: 'Geological intervals', titleZh: '地质年代', descriptionEn: `Versioned eons, eras, periods, epochs and ages from the International Chronostratigraphic Chart ${timeScale.officialVersion}.`, descriptionZh: `来自国际年代地层表 ${timeScale.officialVersion} 的版本化宙、代、纪、世和期。`, items: timeScale.units.map((interval) => ({ path: `intervals/${intervalSlug(interval)}/`, titleEn: interval.nam, titleZh: interval.namZh, metaEn: `${interval.itp} · ${interval.eag}–${interval.lag} Ma`, metaZh: `${({ eon: '宙', era: '代', period: '纪', epoch: '世', age: '期' }[interval.itp] ?? interval.itp)} · ${interval.eag}–${interval.lag} Ma` })) })
writeCollectionIndex({ kind: 'formations', titleEn: 'Formations', titleZh: '地层组', descriptionEn: 'Named formation fields aggregated from the bounded occurrence snapshot, with sampling caveats and source identifiers.', descriptionZh: '从有界化石记录快照聚合的地层组字段，并保留采样局限和来源标识符。', items: formationGroups.map((formation) => ({ path: `formations/${formation.slug}/`, titleEn: formation.name, titleZh: formation.name, metaEn: `${formation.occurrenceCount.toLocaleString()} records · ${formation.olderMa}–${formation.youngerMa} Ma`, metaZh: `${formation.occurrenceCount.toLocaleString()} 条记录 · ${formation.olderMa}–${formation.youngerMa} Ma` })) })
writeCollectionIndex({ kind: 'localities', titleEn: 'Fossil localities', titleZh: '化石采集地', descriptionEn: 'PBDB collection identifiers with bounded occurrence, coordinate, formation and reconstruction context.', descriptionZh: '带有有界记录、坐标、地层组和古地理重建上下文的 PBDB 采集编号。', items: localityGroups.map((locality) => ({ path: `localities/${locality.slug}/`, titleEn: `PBDB collection ${locality.name}`, titleZh: `PBDB 采集记录 ${locality.name}`, metaEn: `${locality.occurrenceCount.toLocaleString()} records · ${[...locality.countries].join(' · ')}`, metaZh: `${locality.occurrenceCount.toLocaleString()} 条记录 · ${[...locality.countries].join(' · ')}` })) })
writeCollectionIndex({ kind: 'traits', titleEn: 'Traits', titleZh: '性状', descriptionEn: 'Descriptive phrases extracted from curated taxon profiles, linked back to dossiers and references without claiming ontology normalization.', descriptionZh: '从策展类群档案提取并回链到档案和来源的描述性短语，不宣称已完成本体标准化。', items: traitGroups.map((trait) => ({ path: `traits/${trait.slug}/`, titleEn: trait.name, titleZh: localize('zh', trait.name), metaEn: `${trait.profiles.length} linked profile(s)`, metaZh: `${trait.profiles.length} 个关联档案` })) })
writeCollectionIndex({ kind: 'references', titleEn: 'References', titleZh: '参考文献', descriptionEn: 'The source ledger used by published entities, claims, ranges, events and stories.', descriptionZh: '公开实体、主张、年代范围、事件和故事使用的来源账本。', items: references.map((reference) => ({ path: `references/${reference.id}/`, titleEn: reference.title, titleZh: reference.title, metaEn: `${reference.authors} · ${reference.publishedYear ?? reference.accessedAt ?? 'n.d.'}`, metaZh: `${reference.authors} · ${reference.publishedYear ?? reference.accessedAt ?? '无日期'}` })) })
writeCollectionIndex({ kind: 'media', titleEn: 'Media', titleZh: '媒体', descriptionEn: 'Rights-aware records for external media and learning resources; no reuse right is implied by catalog inclusion.', descriptionZh: '保留权利信息的外部媒体与学习资源记录；进入目录不代表获得复用许可。', items: media.map((asset) => ({ path: `media/${asset.id}/`, titleEn: asset.title, titleZh: localize('zh', asset.title), metaEn: `${asset.type} · ${asset.rightsStatus}`, metaZh: `${localize('zh', asset.type)} · ${localize('zh', asset.rightsStatus)}` })) })
writeCollectionIndex({ kind: 'datasets', titleEn: 'Dataset releases', titleZh: '数据集版本', descriptionEn: 'Versioned static releases with scope, checksums, downloads and known limitations.', descriptionZh: '带有范围、校验和、下载及已知局限的版本化静态发布。', items: releaseHistory.releases.map((release) => ({ path: `datasets/${release.datasetVersion}/`, titleEn: release.datasetVersion, titleZh: release.datasetVersion, metaEn: `${release.generatedAt} · ${(release.bytes / 1024 / 1024).toFixed(2)} MiB retained artifacts`, metaZh: `${release.generatedAt} · ${(release.bytes / 1024 / 1024).toFixed(2)} MiB 保留产物` })) })

for (const language of ['en', 'zh']) {
  const text = labels[language]
  const path = language === 'en' ? 'methods/' : 'zh/methods/'
  const alternatePath = language === 'en' ? 'zh/methods/' : 'methods/'
  const title = language === 'zh' ? '方法与证据边界' : 'Methods and evidence boundaries'
  const description = language === 'zh' ? 'Evo Atlas 的静态优先数据流程、采样边界、坐标模型与审阅准入。' : 'Evo Atlas static-first data workflow, sampling boundaries, coordinate models and review gates.'
  const body = `<span class="eyebrow">${text.methods}</span><h1>${escapeHtml(title)}</h1><p class="dek">${escapeHtml(description)}</p><section><h2>${language === 'zh' ? '浏览器即研究工作区' : 'The browser is the research workspace'}</h2><p>${language === 'zh' ? 'GitHub Actions 生成版本化证据，GitHub Pages 提供不可变文件，浏览器完成筛选、关联与可视化。' : 'GitHub Actions prepares versioned evidence, GitHub Pages serves immutable files, and the browser performs filtering, linking and visualization.'}</p></section><section><h2>${text.limitations}</h2><ol>${manifest.limitations.map((limitation) => `<li>${escapeHtml(localize(language, limitation))}</li>`).join('')}</ol></section><div class="actions"><a class="button" href="${basePath}/#/methods">${text.open} ↗</a><a class="button secondary" href="${repositoryUrl}/blob/main/docs/data-methods.md">${language === 'zh' ? '查看完整方法文档' : 'Read full methods documentation'} ↗</a></div>`
  write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, jsonLd: { about: ['paleontology', 'data provenance', 'sampling', 'scientific review'] }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.methods, url: `${baseUrl}/${path}` }], body }))
}
sitemapUrls.add(`${baseUrl}/methods/`)

for (const language of ['en', 'zh']) {
  const text = labels[language]
  const path = language === 'en' ? `datasets/${manifest.datasetVersion}/` : `zh/datasets/${manifest.datasetVersion}/`
  const alternatePath = language === 'en' ? `zh/datasets/${manifest.datasetVersion}/` : `datasets/${manifest.datasetVersion}/`
  const title = `${text.dataset} ${manifest.datasetVersion}`
  const description = language === 'zh' ? 'Evo Atlas 当前静态数据集的范围、记录数、局限与机器可读入口。' : 'Scope, record counts, limitations and machine-readable entry points for the current Evo Atlas static dataset.'
  const body = `<span class="eyebrow">${text.dataset}</span><h1>${escapeHtml(manifest.datasetVersion)}</h1><p class="dek">${escapeHtml(localize(language, manifest.scopeStatement))}</p><div class="facts"><div><small>${language === 'zh' ? '化石记录' : 'Fossil records'}</small><strong>${manifest.records.fossilOccurrences.toLocaleString()}</strong></div><div><small>${language === 'zh' ? '注册实体' : 'Registry entities'}</small><strong>${manifest.records.registryEntities}</strong></div><div><small>${language === 'zh' ? '内容包' : 'Content packages'}</small><strong>${manifest.records.dataPackages}</strong></div></div><section><h2>${text.evidence}</h2><p>${language === 'zh' ? '奇蹄目保留完整分页查询账本；其余内容包来自非随机、有界的 PBDB 教学样本。查询完整性不等于化石记录完整性。' : 'Perissodactyla preserves a complete paginated query ledger; other packages derive from a non-random bounded PBDB teaching sample. Query completeness is not fossil-record completeness.'}</p></section><section><h2>${text.limitations}</h2><ol>${manifest.limitations.map((limitation) => `<li>${escapeHtml(localize(language, limitation))}</li>`).join('')}</ol></section><div class="actions"><a class="button" href="${basePath}/#/data">${text.open} ↗</a><a class="button secondary" href="${basePath}/data/current.json">JSON ↗</a></div>`
  write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, type: 'Dataset', jsonLd: { version: manifest.datasetVersion, dateModified: manifest.generatedAt, creator: { '@type': 'Organization', name: 'Evo Atlas contributors', url: repositoryUrl }, license: `${repositoryUrl}/blob/main/DATA_LICENSES.md`, distribution: [{ '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${baseUrl}/data/current.json` }], temporalCoverage: '4567 Ma/Present', variableMeasured: Object.keys(manifest.records) }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.dataset, url: `${baseUrl}/${path}` }], body }))
  datasetPageCount += 1
}
sitemapUrls.add(`${baseUrl}/datasets/${manifest.datasetVersion}/`)

for (const release of releaseHistory.releases.filter((entry) => entry.datasetVersion !== manifest.datasetVersion)) {
  for (const language of ['en', 'zh']) {
    const text = labels[language]
    const path = language === 'en' ? `datasets/${release.datasetVersion}/` : `zh/datasets/${release.datasetVersion}/`
    const alternatePath = language === 'en' ? `zh/datasets/${release.datasetVersion}/` : `datasets/${release.datasetVersion}/`
    const title = `${text.dataset} ${release.datasetVersion}`
    const description = language === 'zh' ? `Evo Atlas 保留数据版本 ${release.datasetVersion} 的不可变产物清单。` : `Retained immutable artifact inventory for Evo Atlas dataset ${release.datasetVersion}.`
    const body = `<span class="eyebrow">${text.dataset} / ${language === 'zh' ? '保留版本' : 'retained release'}</span><h1>${escapeHtml(release.datasetVersion)}</h1><p class="dek">${escapeHtml(description)}</p><p class="notice">${language === 'zh' ? '这是用于版本比较和复现的保留产物清单；科学解释应使用该版本自身的方法、包状态和局限记录。' : 'This is a retained artifact inventory for comparison and reproducibility; scientific interpretation must use that release’s own methods, package states and limitations.'}</p><div class="facts"><div><small>${language === 'zh' ? '生成日期' : 'Generated'}</small><strong>${escapeHtml(release.generatedAt)}</strong></div><div><small>${language === 'zh' ? '保留大小' : 'Retained bytes'}</small><strong>${(release.bytes / 1024 / 1024).toFixed(2)} MiB</strong></div><div><small>SHA-256</small><strong>${language === 'zh' ? '逐文件清单' : 'Per-file index'}</strong></div></div><section><h2>${text.evidence}</h2><p>${language === 'zh' ? '文件索引保留每个静态产物的路径、字节数和 SHA-256，可在研究工作区与其他保留版本比较。' : 'The file index retains path, byte size and SHA-256 for every static artifact and can be compared with another retained release in Research.'}</p></section><div class="actions"><a class="button" href="${basePath}/data/${escapeHtml(release.filesIndex)}">${language === 'zh' ? '打开文件索引' : 'Open file index'} ↗</a><a class="button secondary" href="${basePath}/#/lab">${language === 'zh' ? '比较版本' : 'Compare releases'} ↗</a></div>`
    write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath, type: 'Dataset', jsonLd: { version: release.datasetVersion, dateModified: release.generatedAt, creator: { '@type': 'Organization', name: 'Evo Atlas contributors', url: repositoryUrl }, license: `${repositoryUrl}/blob/main/DATA_LICENSES.md`, distribution: [{ '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${baseUrl}/data/${release.filesIndex}` }] }, breadcrumbs: [{ label: text.home, url: `${basePath}/` }, { label: text.dataset, url: `${basePath}/${language === 'zh' ? 'zh/' : ''}datasets/` }, { label: release.datasetVersion, url: `${baseUrl}/${path}` }], body }))
    datasetPageCount += 1
  }
  sitemapUrls.add(`${baseUrl}/datasets/${release.datasetVersion}/`)
}

write('static.css', staticCss)
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...sitemapUrls].sort().map((url) => `  <url><loc>${xmlEscape(url)}</loc><lastmod>${manifest.generatedAt}</lastmod></url>`).join('\n')}\n</urlset>\n`)
write('robots.txt', `User-agent: *\nAllow: ${basePath}/\nSitemap: ${baseUrl}/sitemap.xml\n`)
write('feed.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom"><title>Evo Atlas releases</title><id>${baseUrl}/feed.xml</id><updated>${manifest.generatedAt}T00:00:00Z</updated><link href="${baseUrl}/feed.xml" rel="self"/><entry><title>${xmlEscape(manifest.datasetVersion)}</title><id>${baseUrl}/datasets/${xmlEscape(manifest.datasetVersion)}/</id><updated>${manifest.generatedAt}T00:00:00Z</updated><link href="${baseUrl}/datasets/${xmlEscape(manifest.datasetVersion)}/"/><summary>${xmlEscape(manifest.scopeStatement)}</summary></entry></feed>\n`)
write('404.html', `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><link rel="stylesheet" href="${basePath}/static.css"><title>Page not found — Evo Atlas</title></head><body><main class="page"><span class="eyebrow">404 / Evo Atlas</span><h1>Evidence page not found.</h1><p class="dek">This static entry does not exist in the published dataset. You can continue in the catalog or Explorer.</p><div class="actions"><a class="button" href="${basePath}/#/catalog">Open catalog</a><a class="button secondary" href="${basePath}/#/explore">Open Explorer</a></div></main></body></html>`)
const pageCounts = {
  taxa: taxonPageCount,
  events: eventPageCount,
  stories: storyPageCount,
  intervals: intervalPageCount,
  formations: formationPageCount,
  localities: localityPageCount,
  traits: traitPageCount,
  references: referencePageCount,
  media: mediaPageCount,
  collectionIndexes: indexPageCount,
  methods: 2,
  datasets: datasetPageCount,
}
write('static-pages-manifest.json', `${JSON.stringify({ schemaVersion: 3, datasetVersion: manifest.datasetVersion, generatedAt: manifest.generatedAt, pages: pageCounts, sitemapUrls: sitemapUrls.size }, null, 2)}\n`)

console.log(`Generated ${Object.values(pageCounts).reduce((sum, count) => sum + count, 0)} bilingual static knowledge pages and ${sitemapUrls.size} indexable sitemap URLs.`)
