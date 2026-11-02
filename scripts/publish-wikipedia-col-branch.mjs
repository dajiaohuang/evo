import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { execFileSync } from 'node:child_process'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { publicationConflictAllowed } from './wikipedia-col-publication-conflicts.mjs'

const source = resolve(process.argv[2] ?? '')
const auditArg = process.argv.indexOf('--audit-db')
assert.ok(auditArg >= 0 && process.argv[auditArg + 1], '--audit-db is required for publication')
const auditPath = resolve(process.argv[auditArg + 1])
const root = resolve('.git/evo-wikipedia-col26-8')
const child = relative(root, source)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep), 'Snapshot must be in its matching workspace')
const repoArg = process.argv.indexOf('--repo')
const repo = repoArg < 0 ? join(root, 'published-data') : resolve(process.argv[repoArg + 1] ?? '')
const repoChild = relative(root, repo)
assert.ok(repoChild && !isAbsolute(repoChild) && repoChild !== '..' && !repoChild.startsWith('..' + sep), 'Publication workspace must be in the matching workspace')
const remote = 'https://github.com/dajiaohuang/evo.git'
const ref = 'refs/heads/evo-wikipedia-data'
const git = (...args) => execFileSync('rtk', ['proxy', 'git', ...args], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }).trim()
if (!existsSync(repo)) {
  git('clone', '--single-branch', '--branch', 'evo-wikipedia-data', '--depth', '1', remote, repo)
  git('-C', repo, 'config', 'user.name', 'dajiaohuang')
  git('-C', repo, 'config', 'user.email', '108231307+dajiaohuang@users.noreply.github.com')
}
assert.equal(git('-C', repo, 'remote', 'get-url', 'origin'), remote)
assert.equal(git('-C', repo, 'branch', '--show-current'), 'evo-wikipedia-data')
assert.equal(git('-C', repo, 'status', '--porcelain'), '', 'Data publication workspace contains unrelated changes')
let head = ''
try { head = git('-C', repo, 'rev-parse', 'HEAD') } catch { /* new branch */ }
const remoteLine = git('-C', repo, 'ls-remote', '--heads', 'origin', ref)
const remoteHead = remoteLine ? remoteLine.split(/\s+/)[0] : ''
if (remoteHead && remoteHead !== head) throw new Error('Remote data branch changed; reconcile before publishing')
const bytes = readFileSync(join(source, 'manifest.json'))
const manifest = JSON.parse(bytes)
assert.equal(manifest.releaseAlias, 'COL26.8')
assert.equal(manifest.contentMode, 'links-only', 'Only link-only data can be published')
for (const args of [
  ['scripts/wikipedia-col-audit-preflight.mjs', '--audit-db', auditPath],
  ['scripts/verify-wikipedia-col-export.mjs', source],
  ['scripts/verify-wikipedia-col-page-audit.mjs', source, auditPath],
]) execFileSync(process.execPath, args, { stdio: 'inherit' })
// A URL can redirect away from an earlier identity while a related candidate
// intentionally points to the verified destination. Check the published pair.
const inventory = new DatabaseSync(join(root, 'inventory.sqlite'), { readOnly: true })
const conflicts = new Set(inventory.prepare("SELECT url FROM article_jobs WHERE status='identity-conflict'").all().map(row => row.url))
inventory.close()
const audit = new DatabaseSync(auditPath, { readOnly: true })
const auditedPair = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?')
for (const file of Object.values(manifest.shards)) {
  const data = JSON.parse(gunzipSync(readFileSync(join(source, file.path))))
  for (const [id, entry] of Object.entries(data.entries)) {
    for (const option of [entry, ...(entry.options ?? [])]) assert.ok(publicationConflictAllowed(option, conflicts, (url, item) => auditedPair.get(url, item)), `Node ${id} still exposes an identity conflict; regenerate the snapshot`)
  }
}
audit.close()
if (existsSync(join(repo, 'manifest.json'))) {
  const previous = JSON.parse(readFileSync(join(repo, 'manifest.json'), 'utf8'))
  assert.equal(previous.registryManifestSha256, manifest.registryManifestSha256)
  assert.ok(manifest.stats.queriedNodes >= previous.stats.queriedNodes, 'Do not regress checked coverage')
}
for (const [prefix, file] of Object.entries(manifest.shards)) {
  assert.equal(file.path, `id-${prefix}-${file.sha256.slice(0, 16)}.json.gz`)
  const data = readFileSync(join(source, file.path))
  assert.equal(data.length, file.bytes)
  assert.equal(createHash('sha256').update(data).digest('hex'), file.sha256)
  const dest = join(repo, file.path)
  if (existsSync(dest)) assert.equal(createHash('sha256').update(readFileSync(dest)).digest('hex'), file.sha256)
  else copyFileSync(join(source, file.path), dest)
}
writeFileSync(join(repo, 'README.md'), '# Evo Atlas Wikipedia links\n\nGenerated public link data for the COL26.8 tree. Candidate links are marked as unconfirmed. Historical content-addressed shards are retained; the manifest reports coverage and pending nodes.\n')
writeFileSync(join(repo, 'vercel.json'), JSON.stringify({ git: { deploymentEnabled: { 'evo-wikipedia-data': false } } }, null, 2) + '\n')
writeFileSync(join(repo, 'manifest.json'), bytes)
git('-C', repo, 'add', '--', '.')
if (git('-C', repo, 'status', '--porcelain')) git('-C', repo, 'commit', '-m', `Update COL26.8 Wikipedia snapshots (${manifest.stats.queriedNodes} checked)`)
const nextHead = git('-C', repo, 'rev-parse', 'HEAD')
git('-C', repo, 'push', 'origin', `HEAD:${ref}`)
const verified = git('-C', repo, 'ls-remote', '--heads', 'origin', ref).split(/\s+/)[0]
assert.equal(verified, nextHead)
console.log(JSON.stringify({ status: 'published', ref, head: nextHead, queriedNodes: manifest.stats.queriedNodes,
  totalNodes: manifest.stats.totalNodes, manifestSha256: createHash('sha256').update(bytes).digest('hex'), source: source }))
