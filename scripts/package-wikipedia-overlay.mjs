import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, existsSync, lstatSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, resolve, relative, isAbsolute, sep } from 'node:path'

const workspaceIndex = process.argv.indexOf('--workspace')
const local = resolve(workspaceIndex < 0 ? '.git/platform-v2/local/wikipedia-20261029' : process.argv[workspaceIndex + 1])
const localRoot = resolve('.git/platform-v2/local')
const child = relative(localRoot, local)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep), 'Workspace must be inside local publication material')
const overlay = join(local, 'overlay')
const sha = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
const releaseTargetCommit = process.argv[2]
assert.match(releaseTargetCommit ?? '', /^[a-f0-9]{40}$/)
const release = JSON.parse(readFileSync('public/release.json', 'utf8'))
assert.equal(release.deploymentCommitSha, sha)
writeFileSync(join(overlay, 'evo/release.json'), JSON.stringify(release, null, 2) + '\n')
writeFileSync('dist/release.json', JSON.stringify(release, null, 2) + '\n')
const previous = JSON.parse(readFileSync('deployment-artifact.json', 'utf8'))
const base = { ...previous }
const baseSourceCommit = previous.baseSourceCommit ?? previous.sourceCommit
delete base.overlay
assert.equal(base.datasetVersion, release.datasetVersion)
const mapBytes = readFileSync('public/wikipedia/mapping.json')
const map = JSON.parse(mapBytes)
assert.equal(map.uniqueNames, map.checkedNames)
let files = 0, unpackedBytes = 0
function walk(path) {
  for (const name of readdirSync(path)) {
    const file = join(path, name), stat = lstatSync(file)
    assert.ok(!stat.isSymbolicLink())
    if (stat.isDirectory()) walk(file)
    else { assert.ok(stat.isFile()); files++; unpackedBytes += stat.size }
  }
}
walk(overlay)
const archive = join(local, 'evo-wikipedia-overlay.tar.gz')
assert.ok(!existsSync(archive))
execFileSync('tar', ['-czf', archive, '-C', overlay, 'evo'], { stdio: 'inherit' })
const archiveBytes = statSync(archive).size
assert.ok(archiveBytes < 1024 * 1024 * 1024)
const digest = value => createHash('sha256').update(value).digest('hex')
const archiveHash = createHash('sha256')
for await (const chunk of createReadStream(archive)) archiveHash.update(chunk)
const archiveSha256 = archiveHash.digest('hex')
const snapshotIndex = process.argv.indexOf('--catalogue-snapshot')
const cataloguePath = snapshotIndex >= 0 ? join(resolve(process.argv[snapshotIndex + 1]), 'manifest.json') : join(overlay, 'evo/wikipedia/col/manifest.json')
const catalogueBytes = existsSync(cataloguePath) ? readFileSync(cataloguePath) : null
const catalogue = catalogueBytes ? JSON.parse(catalogueBytes) : null
const tag = `vercel-wikipedia-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${sha.slice(0, 12)}-${archiveSha256.slice(0, 8)}`
const descriptor = { ...base, sourceCommit: sha, baseSourceCommit, releaseTargetCommit,
  packagedAt: new Date().toISOString(), baseFiles: previous.baseFiles ?? previous.files, baseUnpackedBytes: previous.baseUnpackedBytes ?? previous.unpackedBytes,
  overlay: { url: `https://github.com/dajiaohuang/evo/releases/download/${tag}/evo-wikipedia-overlay.tar.gz`,
    sha256: archiveSha256, bytes: archiveBytes, files, unpackedBytes, mappingSha256: digest(mapBytes), names: map.uniqueNames, counts: map.counts,
    ...(catalogueBytes ? { catalogueManifestSha256: digest(catalogueBytes), catalogueStats: catalogue.stats,
      catalogueOrigin: 'https://raw.githubusercontent.com/dajiaohuang/evo/evo-wikipedia-data/' } : {}) },
  nodePages: { status: 'paused', replacement: 'wikipedia', manifestSha256: digest(readFileSync(join(overlay, 'evo/nodes/manifest.json'))) } }
delete descriptor.fullReading
delete descriptor.files
delete descriptor.unpackedBytes
writeFileSync('deployment-artifact.json', JSON.stringify(descriptor, null, 2) + '\n')
writeFileSync(join(local, 'release-notes.md'), `Wikipedia tree update: ${map.uniqueNames} atlas names checked; catalogue coverage ${catalogue?.stats?.queriedNodes ?? 0} / ${catalogue?.stats?.totalNodes ?? 0} nodes. This is ${catalogue?.status ?? 'atlas-only'} coverage, with unmatched nodes remaining unassessed. The window uses links without fetching abstracts. Reuses the existing immutable scientific-data artifact with a verified UI and link-table overlay.\n`)
console.log(JSON.stringify({ tag, archive, sourceCommit: sha, overlay: descriptor.overlay }))
