import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, existsSync, lstatSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, resolve, relative, isAbsolute, sep } from 'node:path'

const index = process.argv.indexOf('--out')
assert.ok(index >= 0, '--out is required')
const root = process.cwd(), archive = resolve(process.argv[index + 1])
const local = resolve(root, '.git/platform-v2/local'), child = relative(local, archive)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep), 'Archive must be local build material')
assert.ok(!existsSync(archive), 'Do not overwrite an existing deployment artifact')
const release = JSON.parse(readFileSync('dist/release.json', 'utf8'))
const current = JSON.parse(readFileSync('dist/data/current.json', 'utf8'))
const readingBytes = readFileSync('dist/nodes/manifest.json')
const reading = JSON.parse(readingBytes)
const sha = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
assert.equal(release.deploymentCommitSha, sha)
assert.equal(release.datasetVersion, current.datasetVersion)
assert.equal(current.edition, 'full-web'); assert.equal(reading.complete, true)
let files = 0, unpackedBytes = 0
function walk(path) {
  for (const name of readdirSync(path)) {
    const target = join(path, name), stat = lstatSync(target)
    assert.ok(!stat.isSymbolicLink(), 'Deployment must not follow filesystem links')
    if (stat.isDirectory()) walk(target)
    else { assert.ok(stat.isFile()); files++; unpackedBytes += stat.size }
  }
}
walk('dist')
// bsdtar on the native Windows build host; only the generated dist tree enters
// the archive. The rename supplies the existing deployment wrapper's evo prefix.
execFileSync('tar', ['-czf', archive, '--options', 'gzip:compression-level=6', '-s', ',^dist,evo,', 'dist'], { stdio: 'inherit' })
const hash = createHash('sha256')
for await (const chunk of createReadStream(archive)) hash.update(chunk)
const tag = `vercel-20261023-${sha.slice(0, 12)}`
const descriptor = {
  schemaVersion: 1, url: `https://github.com/dajiaohuang/evo/releases/download/${tag}/evo-site.tar.gz`,
  sha256: hash.digest('hex'), bytes: statSync(archive).size, sourceCommit: sha, releaseTargetCommit: sha,
  datasetVersion: current.datasetVersion, edition: current.edition, files, unpackedBytes,
  packagedAt: new Date().toISOString(),
  fullReading: { manifestSha256: createHash('sha256').update(readingBytes).digest('hex'), nodes: reading.nodes, languagePages: reading.languagePages, snapshotAt: reading.snapshotAt },
}
writeFileSync('deployment-artifact.json', JSON.stringify(descriptor, null, 2) + '\n')
console.log(JSON.stringify({ archive, tag, ...descriptor }))
