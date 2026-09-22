// Progressive enhancement: the complete, source-backed list is the fallback.
(() => {
  const form = document.querySelector('.directory-tools')
  const list = document.querySelector('[data-directory]')
  if (!form || !list) return
  const input = form.querySelector('input')
  const sort = form.querySelector('select')
  const count = form.querySelector('output')
  const empty = document.querySelector('[data-directory-empty]')
  const zh = document.documentElement.lang.startsWith('zh')
  const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()
  const entries = [...list.children].map((node, index) => ({
    node, index, label: node.dataset.label, search: normalize(node.dataset.search),
  }))
  const collator = new Intl.Collator(zh ? 'zh-CN' : 'en', { numeric: true, sensitivity: 'base' })
  let ordering = 'source'
  let timer
  let composing = false
  const apply = (updateUrl = true) => {
    const query = input.value.trim().slice(0, 240)
    const tokens = normalize(query).split(/\s+/).filter(Boolean)
    let visible = 0
    for (const entry of entries) {
      const matches = tokens.every(token => entry.search.includes(token))
      const hidden = !matches
      if (entry.node.hidden !== hidden) entry.node.hidden = hidden
      if (matches) visible++
    }
    if (ordering !== sort.value) {
      ordering = sort.value
      const sorted = [...entries].sort((a, b) => ordering === 'source' ? a.index - b.index
        : (ordering === 'name-desc' ? -1 : 1) * collator.compare(a.label, b.label) || a.index - b.index)
      const fragment = document.createDocumentFragment()
      for (const entry of sorted) fragment.append(entry.node)
      list.append(fragment)
    }
    count.textContent = zh ? `显示 ${visible} / ${entries.length} 条` : `Showing ${visible} of ${entries.length} entries`
    empty.hidden = visible !== 0
    const url = new URL(location.href)
    if (query) url.searchParams.set('q', query)
    else url.searchParams.delete('q')
    if (sort.value !== 'source') url.searchParams.set('sort', sort.value)
    else url.searchParams.delete('sort')
    if (updateUrl) history.replaceState(null, '', url)
    for (const link of document.querySelectorAll('.language a')) {
      const translated = new URL(link.href)
      for (const key of ['q', 'sort']) {
        if (url.searchParams.has(key)) translated.searchParams.set(key, url.searchParams.get(key))
        else translated.searchParams.delete(key)
      }
      link.href = translated.href
    }
  }
  const restore = () => {
    clearTimeout(timer)
    const params = new URLSearchParams(location.search)
    input.value = (params.get('q') || '').slice(0, 240)
    sort.value = ['name', 'name-desc'].includes(params.get('sort')) ? params.get('sort') : 'source'
    apply(false)
  }
  const schedule = () => {
    clearTimeout(timer)
    if (!composing) timer = setTimeout(apply, 120)
  }
  input.addEventListener('compositionstart', () => { composing = true; clearTimeout(timer) })
  input.addEventListener('compositionend', () => { composing = false; schedule() })
  input.addEventListener('input', schedule)
  form.addEventListener('submit', event => { event.preventDefault(); clearTimeout(timer); if (!composing) apply() })
  sort.addEventListener('change', () => { clearTimeout(timer); apply() })
  form.querySelector('button').addEventListener('click', () => {
    clearTimeout(timer)
    input.value = ''
    sort.value = 'source'
    apply()
    input.focus()
  })
  window.addEventListener('popstate', restore)
  window.addEventListener('pageshow', event => { if (event.persisted) restore() })
  // Batch the initial filtering with rendering. Hiding hundreds of entries
  // during deferred-script evaluation can invalidate inherited styles in WebKit.
  requestAnimationFrame(() => {
    restore()
    form.hidden = false
  })
})()
