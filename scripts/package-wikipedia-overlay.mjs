import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, lstatSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, resolve } from 'node:path'

const local = resolve('.git/platform-v2/local/wikipedia-20261029')
const overlay = join(local, 'overlay')
const sha = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
const releaseTargetCommit = process.argv[2]
assert.match(releaseTargetCommit ?? '', /^[a-f0-9]{40}$/)
const release = JSON.parse(readFileSync('public/release.json', 'utf8'))
assert.equal(release.deploymentCommitSha, sha)
writeFileSync(join(overlay, 'evo/release.json'), JSON.stringify(release, null, 2) + '\n')
writeFileSync('dist/release.json', JSON.stringify(release, null, 2) + '\n')
const base = JSON.parse(readFileSync('deployment-artifact.json', 'utf8'))
assert.ok(!base.overlay, 'Do not silently chain overlays')
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
const bytes = readFileSync(archive)
assert.ok(bytes.length < 100 * 1024 * 1024)
const digest = value => createHash('sha256').update(value).digest('hex')
const tag = 'vercel-wikipedia-20261029-' + sha.slice(0, 12)
const descriptor = { ...base, sourceCommit: sha, baseSourceCommit: base.sourceCommit, releaseTargetCommit,
  packagedAt: new Date().toISOString(), baseFiles: base.files, baseUnpackedBytes: base.unpackedBytes,
  overlay: { url: `https://github.com/dajiaohuang/evo/releases/download/${tag}/evo-wikipedia-overlay.tar.gz`,
    sha256: digest(bytes), bytes: bytes.length, files, unpackedBytes, mappingSha256: digest(mapBytes), names: map.uniqueNames, counts: map.counts },
  nodePages: { status: 'paused', replacement: 'wikipedia', manifestSha256: digest(readFileSync(join(overlay, 'evo/nodes/manifest.json'))) } }
delete descriptor.fullReading
delete descriptor.files
delete descriptor.unpackedBytes
writeFileSync('deployment-artifact.json', JSON.stringify(descriptor, null, 2) + '\n')
writeFileSync(join(local, 'release-notes.md'), `Wikipedia tree update: all ${map.uniqueNames} represented names checked. ${map.counts.matched} article links, ${map.counts.missing} without a confirmed article, ${map.counts['not-applicable']} research/navigation items. Original node readers paused; authoring sources retained. Reuses the existing immutable scientific-data artifact with a verified UI and link-table overlay.\n`)
console.log(JSON.stringify({ tag, archive, sourceCommit: sha, overlay: descriptor.overlay }))
