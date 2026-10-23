import assert from 'node:assert/strict'
import { readFile, writeFile, mkdir, copyFile, lstat } from 'node:fs/promises'
import { constants } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { resolve, relative, isAbsolute, sep } from 'node:path'
import { TURSO_DIRECTORY } from './turso-store.mjs'

// Take a closed-engine snapshot, then immediately restore the same authoring
// service. Never copy a live database or race the service's transaction queue.
const index = process.argv.indexOf('--out')
assert.ok(index >= 0, '--out is required')
const root = fileURLToPath(TURSO_DIRECTORY)
const folder = resolve(process.argv[index + 1])
const child = relative(root, folder)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep))
await mkdir(folder, { recursive: false })
const config = JSON.parse(await readFile(new URL('service.json', TURSO_DIRECTORY), 'utf8'))
const control = fileURLToPath(new URL('turso-control.mjs', import.meta.url))
const run = args => JSON.parse(execFileSync(process.execPath, [control, ...args], { encoding: 'utf8' }).trim())
const before = run(['status'])
assert.equal(before.database, config.database)
assert.equal(before.workspaceId, config.workspaceId)
const live = pid => { try { process.kill(pid, 0); return true } catch (e) { if (e.code === 'ESRCH') return false; throw e } }
const receipt = { schemaVersion: 1, status: 'started', startedAt: new Date().toISOString(), workspaceId: config.workspaceId, sourceFingerprint: before.sourceFingerprint, files: [] }
let stopped = false
try {
  const shutdown = run(['stop'])
  assert.equal(shutdown.pid, before.pid)
  stopped = true
  for (let i = 0; i < 120 && live(before.pid); i++) await new Promise(r => setTimeout(r, 250))
  assert.equal(live(before.pid), false, 'Original service has not drained; do not copy')
  try { await lstat(config.database + '.service-lock'); throw Error('Original service lock remains') } catch (e) { if (e.code !== 'ENOENT') throw e }
  receipt.capturedAt = new Date().toISOString()
  for (const suffix of ['', '-wal']) {
    let stat
    try { stat = await lstat(config.database + suffix) } catch (e) { if (suffix && e.code === 'ENOENT') continue; throw e }
    assert.ok(stat.isFile() && !stat.isSymbolicLink())
    await copyFile(config.database + suffix, resolve(folder, 'snapshot.db' + suffix), constants.COPYFILE_EXCL)
    receipt.files.push({ path: 'snapshot.db' + suffix, bytes: stat.size })
  }
  receipt.status = 'captured'
} finally {
  if (stopped) {
    const resumed = run(['start', '--database', config.database, '--workspace', config.workspaceId, '--owner', config.ownerId])
    assert.equal(resumed.status, 'ready')
    assert.equal(resumed.database, config.database)
    receipt.serviceRestoredAt = new Date().toISOString()
    receipt.servicePid = resumed.pid
  }
  await writeFile(resolve(folder, 'snapshot.json'), JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' })
}
console.log(JSON.stringify(receipt))
