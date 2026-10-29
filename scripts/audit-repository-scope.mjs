import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, posix } from 'node:path'

const archive = JSON.parse(readFileSync('archive/manifest.json', 'utf8'))
for (const file of archive.files) {
  assert.ok(existsSync(file.to), `Missing archive: ${file.to}`)
  assert.equal(createHash('sha256').update(readFileSync(file.to)).digest('hex'), file.sha256, `Archive hash changed: ${file.to}`)
}
const tracked = execFileSync('git', ['ls-files', '-z'], { maxBuffer: 100 * 1024 * 1024 }).toString().split('\0').filter(Boolean)
const counts = {}
for (const path of tracked) {
  const area = path.includes('/') ? path.split('/')[0] : '(root)'
  counts[area] = (counts[area] ?? 0) + 1
}
const currentDocs = readdirSync('docs').filter(name => name.endsWith('.md')).map(name => `docs/${name}`)
const documents = ['README.md', 'ROADMAP.md', 'AGENTS.md', 'CLAUDE.md', 'CONTRIBUTING.md', 'PRIVACY.md', ...currentDocs, 'docs/templates/node-presentation.md', 'database/README.md']
const broken = []
for (const file of documents) {
  const value = readFileSync(file, 'utf8')
  for (const [, href] of value.matchAll(/!?\[[^\]\n]*\]\(([^\s)]+)\)/g)) {
    if (/^(?:[a-z]+:|#|\/|<)/i.test(href)) continue
    const target = posix.normalize(posix.join(dirname(file), href.split('#')[0]))
    if (target !== 'docs/repository-audit.json' && !existsSync(target)) broken.push({ file, href, target })
  }
}
assert.deepEqual(broken, [], 'Broken current documentation links')
const ignore = readFileSync('.vercelignore', 'utf8')
assert.ok(ignore.startsWith('/*\n'), 'Vercel must use an upload allowlist')
assert.ok(!ignore.includes('!/archive') && !ignore.includes('!/content') && !ignore.includes('!/data'), 'Source/archive upload is forbidden')
assert.ok(!existsSync('public/wikipedia/abstracts.json'), 'Retired abstracts remain in public')
const report = {
  schemaVersion: 1, auditedAt: new Date().toISOString(), sourceCommit: execFileSync('git', ['rev-parse', 'HEAD']).toString().trim(),
  indexedFilesExamined: tracked.length, indexedFilesByArea: counts, archiveFilesVerified: archive.files.length,
  currentDocumentsChecked: documents.length, brokenCurrentLinks: broken.length,
  remoteScope: 'current-git-files-and-site-delivery-only', oldReleasesAndDeployments: 'retained',
  evidenceLimit: 'Path classification, archive byte verification, documentation links and upload contracts; scientific source contents were not re-reviewed.',
}
writeFileSync('docs/repository-audit.json', JSON.stringify(report, null, 2) + '\n')
console.log(JSON.stringify(report))
