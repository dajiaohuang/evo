import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'

// This output is dedicated to Pages. Never stage or delete shared scientific
// data or the full Web/native artifacts while producing the reading edition.
const output = resolve(rootDir, 'dist-pages')
if (output !== join(rootDir, 'dist-pages')) throw new Error('Unexpected Pages output directory')
if (existsSync(output)) rmSync(output, { recursive: true })
mkdirSync(join(output, 'data'), { recursive: true })
execFileSync(process.execPath, ['scripts/build-release.mjs'], { cwd: rootDir, stdio: 'inherit' })
execFileSync(process.execPath, ['scripts/generate-static-pages.mjs'], {
  cwd: rootDir, stdio: 'inherit', env: { ...process.env, EVO_STATIC_PAGES: 'true' },
})
for (const name of ['favicon.svg', 'social-card.svg', 'release.json']) {
  copyFileSync(join(rootDir, 'public', name), join(output, name))
}
copyFileSync(join(rootDir, 'data/manifest.json'), join(output, 'data/manifest.json'))
for (const media of readJson('data/media.json')) {
  if (media.contentOrigin !== 'ai-assisted-interpretive-reconstruction' || !media.asset) continue
  const source = resolve(rootDir, media.asset.path)
  if (!source.startsWith(`${join(rootDir, 'data')}/`) && !source.startsWith(`${join(rootDir, 'data')}\\`)) throw new Error('Unsafe illustration path')
  const bytes = readFileSync(source)
  if (bytes.length !== media.asset.bytes || createHash('sha256').update(bytes).digest('hex') !== media.asset.sha256) {
    throw new Error(`Illustration does not match canonical descriptor: ${media.id}`)
  }
  mkdirSync(join(output, 'illustrations'), { recursive: true })
  copyFileSync(source, join(output, 'illustrations', basename(source)))
}
// Existing installations may still check this URL. Retire only this scope's
// registration without deleting shared-origin caches or reloading user tabs.
copyFileSync(join(rootDir, 'scripts/retire-pages-worker.js'), join(output, 'sw.js'))
writeFileSync(join(output, '.nojekyll'), '')
const release = JSON.parse(readFileSync(join(output, 'release.json'), 'utf8'))
writeFileSync(join(output, 'release.json'), `${JSON.stringify({ ...release, edition: 'github-pages-static' }, null, 2)}\n`)
console.log('Built the Pages reading edition with lightweight SVG maps; no full application runtime or scientific shards staged.')
