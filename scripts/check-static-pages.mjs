import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { rootDir } from './data-lib.mjs'

const output = resolve(rootDir, 'dist-pages')
function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isSymbolicLink()) throw new Error(`Unexpected Pages symlink: ${path}`)
    return entry.isDirectory() ? walk(path) : [path]
  })
}
const files = walk(output)
const failures = new Set()
const htmlFiles = files.filter((file) => file.endsWith('.html'))
const bytes = files.reduce((sum, file) => sum + statSync(file).size, 0)
if (bytes > 64 * 1024 * 1024) failures.add('Static site exceeds its 64 MiB budget')
for (const file of files) {
  const path = relative(output, file).replaceAll('\\', '/')
  if (/\.(?:js|mjs|wasm|gz|zip)$/i.test(path) && !['sw.js', 'map-controls.js'].includes(path)) failures.add(`Runtime payload shipped: ${path}`)
  if (path === 'map-controls.js' && statSync(file).size > 8 * 1024) failures.add('Map enhancement exceeds 8 KiB')
  if (/^(?:assets|data\/releases|node_modules)\//.test(path)) failures.add(`Runtime directory shipped: ${path}`)
}
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8')
  const path = relative(output, file)
  const isMap = /^(?:zh\/)?map\/(?:[a-z]+\/)?index\.html$/.test(path.replaceAll('\\', '/'))
  const checkedHtml = isMap ? html.replace('<script src="/evo/map-controls.js" defer></script>', '') : html
  if (/<script(?!\s+type="application\/ld\+json")\b/i.test(checkedHtml)) failures.add(`Unexpected executable script in ${path}`)
  if (/\bhref="[^"\s]*\/#\//.test(html)) failures.add(`SPA link in ${path}`)
  if (!/<html lang="(?:en|zh-CN)"/.test(html)) failures.add(`Missing language in ${path}`)
  for (const match of html.matchAll(/\b(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), `https://dajiaohuang.github.io/evo/${relative(output, file).replaceAll('\\', '/')}`)
    if (url.origin !== 'https://dajiaohuang.github.io') continue
    if (!url.pathname.startsWith('/evo/')) { failures.add(`Link escapes site: ${url.pathname} in ${path}`); continue }
    const local = decodeURIComponent(url.pathname.slice('/evo/'.length))
    const target = resolve(output, local, local.endsWith('/') || local === '' ? 'index.html' : '')
    if (!target.startsWith(output) || !existsSync(target) || !statSync(target).isFile()) failures.add(`Missing ${url.pathname} linked by ${path}`)
  }
}
for (const path of ['index.html', 'zh/index.html', 'map/index.html', 'zh/map/index.html', 'apps/index.html', 'zh/apps/index.html', 'taxa/perissodactyla/index.html', 'methods/index.html', '404.html']) {
  if (!existsSync(join(output, path))) failures.add(`Missing required page: ${path}`)
}
const manifest = JSON.parse(readFileSync(join(output, 'static-pages-manifest.json'), 'utf8'))
const maps = JSON.parse(readFileSync(join(output, 'map/manifest.json'), 'utf8'))
if (maps.frames.length !== 13 || manifest.pages.maps !== 26) failures.add('Expected 13 bilingual reading map frames')
if (maps.frames.some((frame) => frame.bytes > 2 * 1024 * 1024)) failures.add('Reading map exceeds 2 MiB per frame')
if (manifest.edition !== 'github-pages-static') failures.add('Missing static edition marker')
if (!readFileSync(join(output, 'data/manifest.json')).equals(readFileSync(join(rootDir, 'data/manifest.json')))) failures.add('Published source metadata changed')
if (failures.size) {
  console.error([...failures].slice(0, 30).join('\n'))
  throw new Error(`${failures.size} static Pages contract failure(s)`)
}
console.log(`Static Pages passed: ${htmlFiles.length} HTML pages, ${(bytes / 1024 / 1024).toFixed(2)} MiB; local links, source metadata and runtime exclusion verified.`)
