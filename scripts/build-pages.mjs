import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = resolve(root, 'dist-pages')
if (output !== join(root, 'dist-pages')) throw new Error('Unexpected Pages output')
if (existsSync(output)) rmSync(output, { recursive: true })
mkdirSync(output, { recursive: true })
const site = JSON.parse(readFileSync(join(root, 'config/site.json'), 'utf8'))
const copy = JSON.parse(readFileSync(join(root, 'pages/copy.json'), 'utf8'))
const template = readFileSync(join(root, 'pages/introduction.html'), 'utf8')
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
for (const [path, language, missing] of [['index.html', 'en', false], ['zh/index.html', 'zh', false], ['404.html', 'zh', true]]) {
  const values = { ...site, ...copy[language], canonical: site.introductionUrl + (language === 'zh' ? 'zh/' : '') }
  values.notice = missing ? `<p class="notice">${escape(values.missing)}</p>` : ''
  const html = template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in values)) throw new Error(`Missing Pages copy: ${language}.${key}`)
    return key === 'notice' ? values[key] : key === 'heading' ? values[key].split('<br>').map(escape).join('<br>') : escape(values[key])
  })
  mkdirSync(resolve(output, path, '..'), { recursive: true })
  writeFileSync(join(output, path), html)
}
for (const name of ['introduction.css', 'retire-legacy-app.js']) copyFileSync(join(root, 'pages', name), join(output, name))
copyFileSync(join(root, 'public/favicon.svg'), join(output, 'favicon.svg'))
copyFileSync(join(root, 'scripts/retire-pages-worker.js'), join(output, 'sw.js'))
writeFileSync(join(output, '.nojekyll'), '')
writeFileSync(join(output, 'robots.txt'), `User-agent: *\nAllow: /evo/\nSitemap: ${site.introductionUrl}sitemap.xml\n`)
writeFileSync(join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${site.introductionUrl}</loc></url><url><loc>${site.introductionUrl}zh/</loc></url></urlset>\n`)
writeFileSync(join(output, 'site.json'), JSON.stringify({ edition: site.pagesEdition, applicationUrl: site.applicationUrl, scientificPayloads: false }, null, 2) + '\n')
console.log('Built bilingual Pages introduction only; scientific generators and authoring data were not read.')
