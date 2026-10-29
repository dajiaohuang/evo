import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const root = resolve('dist-pages')
const site = JSON.parse(readFileSync('config/site.json', 'utf8'))
const allowed = new Set(['index.html', 'zh/index.html', '404.html', 'introduction.css', 'retire-legacy-app.js', 'favicon.svg', 'sw.js', '.nojekyll', 'robots.txt', 'sitemap.xml', 'site.json'])
const files = []
function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    assert.ok(!entry.isSymbolicLink(), 'No symlinks in Pages output')
    const path = join(directory, entry.name)
    if (entry.isDirectory()) walk(path)
    else files.push(relative(root, path).replaceAll('\\', '/'))
  }
}
walk(root)
assert.deepEqual(new Set(files), allowed, 'Pages may contain only the introduction allowlist')
const bytes = files.reduce((sum, path) => sum + statSync(join(root, path)).size, 0)
assert.ok(bytes <= 256 * 1024, 'Pages introduction exceeds 256 KiB')
for (const path of files.filter(path => path.endsWith('.html'))) {
  const html = readFileSync(join(root, path), 'utf8')
  assert.match(html, /<html lang="(?:en|zh-CN)">/)
  assert.ok(!html.includes('{{'), `Unresolved copy in ${path}`)
  assert.ok(html.includes(`href="${site.applicationUrl}"`), 'Missing application entry')
  assert.ok(!/\b(?:src|href)="[^"\s]*(?:data\/releases|nodes\/|archive\/|\.wasm|\.gz)/.test(html), 'Scientific/archive payload linked')
  for (const [, href] of html.matchAll(/\b(?:href|src)="([^"#]+)"/g)) {
    const url = new URL(href.replaceAll('&amp;', '&'), site.introductionUrl + path)
    if (url.origin !== new URL(site.introductionUrl).origin) continue
    assert.ok(url.pathname.startsWith('/evo/'), 'Introduction link escapes site')
    let local = url.pathname.slice('/evo/'.length)
    if (!local || local.endsWith('/')) local += 'index.html'
    assert.ok(allowed.has(local), `Missing local link ${local}`)
  }
}
assert.equal(JSON.parse(readFileSync(join(root, 'site.json'))).edition, 'application-introduction')
console.log(`Pages introduction passed: ${files.length} files, ${bytes} bytes; no application, archive or scientific data payloads.`)
