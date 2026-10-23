import { gunzipSync } from './inflate.mjs'
import { readerInlineParts, paragraphParts } from './node-reading.mjs'

const main = document.querySelector('main')
let params = new URLSearchParams(location.search)
let language = params.get('lang') === 'en' ? 'en' : 'zh'
let manifestPromise, indexPromise
const cache = new Map()
const text = (zh, en) => language === 'zh' ? zh : en
const localized = value => typeof value === 'string' ? value : value?.[language] ?? value?.en ?? value?.zh ?? ''
const display = value => typeof value === 'object' && value !== null ? localized(value) || JSON.stringify(value) : String(value ?? '')
const el = (tag, value, className) => { const node = document.createElement(tag); if (value !== undefined) node.textContent = display(value); if (className) node.className = className; return node }
const safeUrl = value => { try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null } catch { return null } }
function link(label, href) { const node = el('a', label); node.href = href; return node }
function inline(parent, value) {
  const plain = text => {
    for (const part of readerInlineParts(text)) parent.append(part.type === 'text' ? document.createTextNode(part.text) : el(part.type === 'emphasis' ? 'em' : 'code', part.text))
  }
  const expression = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g
  let cursor = 0
  for (const match of value.matchAll(expression)) {
    plain(value.slice(cursor, match.index))
    const href = safeUrl(match[2])
    if (href) { const a = link('', href); for (const part of readerInlineParts(match[1])) a.append(part.type === 'text' ? document.createTextNode(part.text) : el(part.type === 'emphasis' ? 'em' : 'code', part.text)); a.target = '_blank'; a.rel = 'noreferrer'; parent.append(a) }
    else plain(match[0])
    cursor = match.index + match[0].length
  }
  plain(value.slice(cursor))
}
function proseBlock(value) {
  const lines = value.split('\n')
  if (lines.length >= 2 && /^\|.*\|$/.test(lines[0]) && /^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[1])) {
    const wrapper = el('div', undefined, 'table-scroll'), table = el('table')
    wrapper.tabIndex = 0; wrapper.setAttribute('aria-label', text('材料对照表，可横向滚动', 'Material comparison table, horizontally scrollable'))
    const cells = line => line.slice(1, -1).split('|').map(value => value.trim())
    const head = el('thead'), heading = el('tr')
    for (const value of cells(lines[0])) { const cell = el('th'); cell.scope = 'col'; inline(cell, value); heading.append(cell) }
    head.append(heading); table.append(head)
    const body = el('tbody')
    for (const line of lines.slice(2)) { const row = el('tr'); for (const value of cells(line)) { const cell = el('td'); inline(cell, value); row.append(cell) } body.append(row) }
    table.append(body); wrapper.append(table); return wrapper
  }
  const paragraph = el('p'); inline(paragraph, value); return paragraph
}
async function digest(bytes) { return [...new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))].map(v => v.toString(16).padStart(2, '0')).join('') }
async function manifest() {
  return manifestPromise ??= fetch('./manifest.json', { cache: 'no-cache' }).then(async response => {
    if (!response.ok) throw Error('Publication manifest unavailable')
    const value = await response.json()
    if (!value.complete) throw Error('Publication is incomplete')
    return value
  })
}
async function data(path) {
  if (cache.has(path)) return cache.get(path)
  const promise = (async () => {
    const m = await manifest(), descriptor = m.files.find(file => file.path === path)
    if (!descriptor) throw Error('This record is not in the published edition')
    const response = await fetch('./' + path)
    if (!response.ok) throw Error('Reading data unavailable')
    const bytes = new Uint8Array(await response.arrayBuffer())
    // Some static hosts set Content-Encoding:gzip, so fetch has already decoded
    // the body. Verify that representation against its own recorded hash.
    const compressed = bytes[0] === 0x1f && bytes[1] === 0x8b
    const expectedBytes = compressed ? descriptor.bytes : descriptor.decodedBytes
    const expectedHash = compressed ? descriptor.sha256 : descriptor.decodedSha256
    if (bytes.length !== expectedBytes || await digest(bytes) !== expectedHash) throw Error('Reading data integrity check failed')
    return JSON.parse(new TextDecoder().decode(compressed ? gunzipSync(bytes) : bytes))
  })()
  cache.set(path, promise)
  if (cache.size > 6) cache.delete(cache.keys().next().value)
  return promise
}
function route(query = {}) { const value = new URLSearchParams({ ...query, lang: language }); return './?' + value }
function updateLabels() {
  document.documentElement.lang = language
  document.querySelector('#language').textContent = text('English', '中文')
  document.querySelector('#directory-link').textContent = text('全部页面', 'All pages')
  document.querySelector('#directory-link').href = route()
  document.querySelector('#map-link').textContent = text('古地图', 'Paleomap')
}
document.querySelector('#language').addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh'; params.set('lang', language)
  history.replaceState(null, '', '?' + params); void render()
})
async function directory() {
  document.title = text('全部页面 · Evo Atlas', 'All pages · Evo Atlas')
  const title = el('h1', text('沿着一个名字，读进生命的故事', 'Follow a name into the story of life'))
  const intro = el('p', text('查找已有的物种、类群与研究材料。每篇保留原有正文和来源；没有正文的对象显示其名称资料。', 'Find existing species, groups and research material. Accounts retain their text and sources; entries without prose show their recorded identity.'), 'muted')
  const form = el('form', undefined, 'search')
  const search = el('input'); search.type = 'search'; search.name = 'q'; search.value = params.get('q') ?? ''; search.placeholder = text('名称、学名或标识', 'Name, scientific name or identifier'); search.setAttribute('aria-label', search.placeholder)
  const select = el('select'); select.setAttribute('aria-label', text('正文语言', 'Account language'))
  for (const [value, label] of [['', text('全部语言', 'All languages')], ['zh', '中文'], ['en', 'English']]) { const option = el('option', label); option.value = value; select.append(option) }
  select.value = params.get('locale') ?? ''
  const submit = el('button', text('查找', 'Search')); submit.type = 'submit'; form.append(search, select, submit)
  const status = el('p', text('正在读取目录…', 'Loading the directory…'), 'muted'); status.setAttribute('role', 'status')
  const results = el('ul', undefined, 'cards'), pager = el('nav', undefined, 'pagination'); pager.setAttribute('aria-label', text('目录分页', 'Directory pages'))
  main.replaceChildren(title, intro, form, status, results, pager)
  const m = await manifest()
  const entries = await (indexPromise ??= data(m.directory.path))
  let page = Math.max(0, Number(params.get('page')) || 0)
  function apply() {
    const query = search.value.trim().toLocaleLowerCase(), locale = select.value
    const matches = entries.filter(entry => (!locale || entry.locales.includes(locale)) && (!query || [display(entry.name), entry.scientificName, entry.key, entry.id].some(value => String(value ?? '').toLocaleLowerCase().includes(query))))
    const count = Math.max(1, Math.ceil(matches.length / 50)); page = Math.min(page, count - 1)
    params = new URLSearchParams({ lang: language, ...(query ? { q: search.value.trim() } : {}), ...(locale ? { locale } : {}), ...(page ? { page: String(page) } : {}) }); history.replaceState(null, '', '?' + params)
    status.textContent = text(`找到 ${matches.length.toLocaleString()} 个对象`, `${matches.length.toLocaleString()} entries`)
    results.replaceChildren()
    for (const entry of matches.slice(page * 50, page * 50 + 50)) {
      const item = el('li'), a = link('', route({ id: entry.id })); a.className = 'card'
      a.append(el('strong', localized(entry.name) || entry.scientificName || entry.key), el('small', entry.locales.length ? entry.locales.map(locale => locale === 'zh' ? '中文' : 'English').join(' · ') : text('名称资料', 'Name record')))
      if (entry.scientificName && entry.scientificName !== localized(entry.name)) a.append(el('small', entry.scientificName))
      item.append(a); results.append(item)
    }
    if (!matches.length) results.append(el('li', text('没有找到匹配对象。可以尝试学名或较短的关键词。', 'No matching entry. Try a scientific name or a shorter search.'), 'empty'))
    const previous = el('button', text('上一页', 'Previous')), next = el('button', text('下一页', 'Next'))
    previous.disabled = page === 0; next.disabled = page + 1 === count
    previous.onclick = () => { page--; apply(); form.scrollIntoView() }; next.onclick = () => { page++; apply(); form.scrollIntoView() }
    pager.replaceChildren(previous, el('span', `${page + 1} / ${count}`), next)
  }
  form.onsubmit = event => { event.preventDefault(); page = 0; apply() }; select.onchange = () => { page = 0; apply() }
  apply()
}
function sourcesIn(value, output = new Map()) {
  if (!value || typeof value !== 'object') return output
  for (const [key, child] of Object.entries(value)) {
    if (['sources', 'readerSources', 'sourceRefs', 'references'].includes(key) && Array.isArray(child)) {
      for (const source of child) if (source && typeof source === 'object' && source.title) output.set(JSON.stringify(source), source)
    }
    if (typeof child === 'object') sourcesIn(child, output)
  }
  return output
}
function sourceList(record) {
  const list = el('ol', undefined, 'source-list')
  const sources = [...sourcesIn(record.content.records).values()]
  const canonicalIds = new Set(sources.map(s => s.referenceId ?? s.id))
  for (const row of record.references) if (!canonicalIds.has(row.id)) sources.push(row.metadata)
  for (const source of sources) {
    const item = el('li'), title = localized(source.title) || source.id, url = safeUrl(source.url) || (source.doi ? safeUrl('https://doi.org/' + source.doi) : null)
    if (url) { const a = link(title, url); a.target = '_blank'; a.rel = 'noreferrer'; item.append(a) } else item.append(el('strong', title))
    for (const [field, label] of [['authors', text('作者', 'Authors')], ['scope', text('适用范围', 'Scope')], ['locator', text('材料定位', 'Locator')], ['readingLocator', text('原文定位', 'Text locator')], ['version', text('来源版本', 'Source version')], ['publishedAt', text('出版日期', 'Published')], ['accessedAt', text('访问日期', 'Accessed')], ['license', text('记录的许可', 'Recorded license')], ['rights', text('权利说明', 'Rights')], ['attribution', text('署名', 'Attribution')]]) {
      if (source[field] !== undefined) item.append(el('p', `${label}：${Array.isArray(source[field]) ? source[field].map(display).join('; ') : display(source[field])}`))
    }
    if (safeUrl(source.readingUrl)) { const a = link(text('打开所引材料', 'Open cited material'), safeUrl(source.readingUrl)); a.target = '_blank'; a.rel = 'noreferrer'; item.append(a) }
    list.append(item)
  }
  return list
}
async function article(key) {
  const prefix = (await digest(new TextEncoder().encode(key))).slice(0, 2)
  const lookup = await data(`lookup/${prefix}.json.gz`), target = Object.hasOwn(lookup, key) ? lookup[key] : null
  if (!target) throw Error(text('此版本没有这个对象。', 'This entry is not in the published edition.'))
  const batch = await data(target.shard), record = batch.find(row => row.id === target.id)
  if (!record) throw Error('Published record is missing')
  const content = record.content, identity = content.identity
  const name = localized(identity.displayName) || localized(identity.scientificName) || record.key || record.id
  document.title = `${name} · Evo Atlas`
  const article = el('article', undefined, 'article')
  article.append(link(text('← 全部页面', '← All pages'), route()))
  article.firstChild.className = 'back'
  article.append(el('h1', name))
  if (identity.scientificName && display(identity.scientificName) !== name) article.append(el('p', identity.scientificName, 'muted'))
  const available = Object.entries(content.pages).filter(([, sections]) => sections.length)
  const pageLocale = content.pages[language]?.length ? language : available[0]?.[0]
  const sections = pageLocale ? content.pages[pageLocale] : []
  if (pageLocale && pageLocale !== language) article.append(el('p', text('以下保留现有原语言正文。', 'The available original-language account is retained below.'), 'original-language'))
  if (sections.length > 1) {
    const toc = el('nav', undefined, 'toc'); toc.setAttribute('aria-label', text('本文内容', 'In this account'))
    for (const section of sections) { const a = link('', '#' + section.key); inline(a, section.title); toc.append(a) }
    article.append(toc)
  }
  const body = el('div', undefined, 'body'); if (pageLocale) body.lang = pageLocale
  for (const section of sections) {
    const part = el('section'); part.id = section.key
    const heading = el('h2'); inline(heading, section.title); part.append(heading)
    for (const paragraph of paragraphParts(section.body)) part.append(proseBlock(paragraph))
    body.append(part)
  }
  if (!sections.length) body.append(el('p', text('这个对象目前保留名称与来源资料，尚无独立正文。', 'This entry retains its identity and sources; no separate prose account is recorded.')))
  article.append(body)
  const identityDetails = el('details'); identityDetails.append(el('summary', text('名称与分类来源', 'Identity and classification source')))
  const facts = el('dl', undefined, 'facts')
  for (const [key, label] of [['rank', text('分类级别', 'Rank')], ['kind', text('对象类型', 'Object kind')], ['scientificName', text('学名', 'Scientific name')]]) if (identity[key]) facts.append(el('dt', label), el('dd', identity[key]))
  for (const [key, label] of [['authority', text('分类来源', 'Classification authority')], ['release', text('版本', 'Release')], ['publishedAt', text('来源日期', 'Source date')], ['status', text('名称状态', 'Name status')]]) if (identity.classification?.[key]) facts.append(el('dt', label), el('dd', identity.classification[key]))
  identityDetails.append(facts)
  if (safeUrl(identity.classification?.sourceUrl)) identityDetails.append(link(text('打开分类记录', 'Open classification record'), safeUrl(identity.classification.sourceUrl)))
  article.append(identityDetails)
  const sources = el('section'); sources.append(el('h2', text('材料与来源', 'Material and sources')), sourceList(record)); article.append(sources)
  const download = el('button', text('下载本文与来源', 'Download this account and sources'), 'download')
  download.onclick = () => { const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' }), url = URL.createObjectURL(blob), a = link('', url); a.download = record.id + '.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000) }
  article.append(download)
  main.replaceChildren(article)
}
async function render() {
  updateLabels(); main.replaceChildren(el('p', text('正在打开页面…', 'Opening the page…')))
  try { const key = params.get('id') ?? params.get('key'); if (key) await article(key); else await directory() }
  catch (error) { const box = el('div', undefined, 'error'); box.append(el('h1', text('页面暂时无法打开', 'This page could not be opened')), el('p', error.message), link(text('返回全部页面', 'Return to all pages'), route())); main.replaceChildren(box) }
}
void render()
