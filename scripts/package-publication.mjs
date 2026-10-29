import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { cpSync, createReadStream, existsSync, lstatSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { dirname, join, resolve, relative, isAbsolute, sep } from 'node:path'

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
const releaseTargetIndex = process.argv.indexOf('--release-target')
const releaseTargetCommit = releaseTargetIndex >= 0 ? process.argv[releaseTargetIndex + 1] : sha
assert.match(releaseTargetCommit, /^[a-f0-9]{40}$/, 'Release tag target must be a known full commit SHA')
assert.equal(release.deploymentCommitSha, sha)
assert.equal(release.datasetVersion, current.datasetVersion)
assert.equal(current.edition, 'full-web'); assert.equal(reading.status, 'paused')
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
// Windows bsdtar lacks -s path transformation. Stage only the verified regular
// dist files under the deployment wrapper's evo prefix.
const staging = mkdtempSync(join(dirname(archive), 'publication-stage-'))
cpSync(resolve('dist'), join(staging, 'evo'), { recursive: true, errorOnExist: true })
execFileSync('tar', ['-czf', archive, '--options', 'gzip:compression-level=6', '-C', staging, 'evo'], { stdio: 'inherit' })
assert.equal(dirname(staging), dirname(archive))
rmSync(staging, { recursive: true })
const hash = createHash('sha256')
for await (const chunk of createReadStream(archive)) hash.update(chunk)
const tag = `vercel-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${sha.slice(0, 12)}`
const descriptor = {
  schemaVersion: 1, url: `https://github.com/dajiaohuang/evo/releases/download/${tag}/evo-site.tar.gz`,
  sha256: hash.digest('hex'), bytes: statSync(archive).size, sourceCommit: sha, releaseTargetCommit,
  datasetVersion: current.datasetVersion, edition: current.edition, files, unpackedBytes,
  packagedAt: new Date().toISOString(),
  nodePages: { status: 'paused', replacement: 'wikipedia', manifestSha256: createHash('sha256').update(readingBytes).digest('hex') },
}
writeFileSync('deployment-artifact.json', JSON.stringify(descriptor, null, 2) + '\n')
console.log(JSON.stringify({ archive, tag, ...descriptor }))
