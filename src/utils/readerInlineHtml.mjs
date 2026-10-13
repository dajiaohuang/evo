import { readerInlineParts } from './nodeReading.mjs'

/** Render the reader's two supported inline forms as escaped static HTML. */
export function readerInlineHtml(text) {
  return readerInlineParts(text).map(({ type, text: value }) => {
    const escaped = value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;')
    if (type === 'emphasis') return `<em>${escaped}</em>`
    if (type === 'code') return `<code>${escaped}</code>`
    return escaped
  }).join('')
}
