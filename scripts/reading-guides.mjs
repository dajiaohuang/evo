const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]))

export function readingGuideCards(guides, language, basePath) {
  const prefix = `${basePath}/${language === 'zh' ? 'zh/' : ''}`
  return `<div class="reader-guide-grid">${guides.map(guide => `<article><h3><a href="${prefix}read/${escape(guide.id)}/">${escape(guide.title[language])}</a></h3><p>${escape(guide.dek[language])}</p></article>`).join('')}</div>`
}

export function generateReadingGuides({ guides, references, write, pageHtml, basePath, baseUrl, sitemapUrls }) {
  for (const guide of guides) {
    const sources = guide.referenceIds.map(id => {
      const reference = references.find(reference => reference.id === id)
      if (!reference) throw new Error(`Reading chapter ${guide.id} refers to missing reference ${id}`)
      return reference
    })
    for (const language of ['en', 'zh']) {
      const zh = language === 'zh'
      const prefix = zh ? 'zh/' : ''
      const path = `${prefix}read/${guide.id}/`
      const body = `<span class="eyebrow">${zh ? '生命演化 · 阅读主线' : 'Life and evolution · Reading chapters'}</span><h1>${escape(guide.title[language])}</h1><p class="dek">${escape(guide.dek[language])}</p><div class="reader-guide-prose">${guide.sections.map(section => `<section><h2>${escape(section.title[language])}</h2><p>${escape(section.text[language])}</p></section>`).join('')}</div><aside class="notice"><strong>${escape(guide.term.name[language])}</strong><p>${escape(guide.term.meaning[language])}</p></aside><section><h2>${zh ? '继续认识这个类群' : 'Continue with this group'}</h2><p>${zh ? '详情页保留更多形态、生态和具体研究。' : 'The detail page retains morphology, ecology and specific studies.'}</p><a href="${basePath}/${prefix}taxa/${escape(guide.taxonId)}/">${zh ? '阅读类群或物种详情' : 'Read the group or species details'} →</a></section><section><h2>${zh ? '本文依据的研究' : 'Studies behind this chapter'}</h2><ol class="refs">${sources.map(source => `<li><a href="${escape(source.url)}">${escape(source.title)}</a><span>${source.publishedYear ?? ''}${source.doi ? ` · DOI ${escape(source.doi)}` : ''}</span></li>`).join('')}</ol></section>`
      write(`${path}index.html`, pageHtml({ language, title: guide.title[language], description: guide.dek[language], path, alternatePath: `${zh ? '' : 'zh/'}read/${guide.id}/`, type: 'Article', jsonLd: { citation: sources.map(source => ({ '@type': 'CreativeWork', name: source.title, url: source.url })) }, breadcrumbs: [{ label: zh ? '阅读' : 'Read', url: `${basePath}/${prefix}` }], body }))
      if (!zh) sitemapUrls.add(`${baseUrl}/${path}`)
    }
  }
  return guides.length * 2
}

export const readingGuideCss = '.reader-guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}.reader-guide-grid article{padding:24px;border:1px solid var(--line);border-radius:10px}.reader-guide-grid h3{font-size:22px;line-height:1.5;margin:0 0 16px}.reader-guide-grid p,.reader-guide-prose p{font-size:18px;line-height:1.95;max-width:42em}.reader-guide-prose h2{font-size:26px;line-height:1.5}@media(max-width:650px){.reader-guide-grid{grid-template-columns:1fr}.reader-guide-prose p{font-size:17px}}'
