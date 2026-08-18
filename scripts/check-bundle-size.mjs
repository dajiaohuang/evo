import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = process.cwd()
const dist = join(root, 'dist')

function filesBelow(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

const files = filesBelow(dist)
const totalBytes = files.reduce((sum, path) => sum + statSync(path).size, 0)
const initialChunks = files.filter((path) => /[/\\]assets[/\\]index-[^/\\]+\.js$/.test(path))
const oversizedInitial = initialChunks.filter((path) => statSync(path).size > 450 * 1024)
const serviceWorker = readFileSync(join(dist, 'sw.js'), 'utf8')
const fossilChunksPrecached = ['cambrian', 'ordovician', 'silurian', 'devonian', 'carboniferous', 'permian', 'triassic', 'jurassic', 'cretaceous', 'paleogene', 'neogene', 'quaternary']
  .filter((name) => new RegExp(`assets/${name}-[^"']+\\.js`).test(serviceWorker))

const failures = []
if (totalBytes > 25 * 1024 * 1024) failures.push(`dist is ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; budget is 25 MiB`)
for (const path of oversizedInitial) failures.push(`${relative(root, path)} is ${(statSync(path).size / 1024).toFixed(1)} KiB; initial JS budget is 450 KiB`)
if (fossilChunksPrecached.length) failures.push(`service worker precaches lazy fossil chunks: ${fossilChunksPrecached.join(', ')}`)

if (failures.length) {
  console.error('Bundle budget failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Bundle budget passed: ${(totalBytes / 1024 / 1024).toFixed(2)} MiB total, ${initialChunks.length} initial JS chunk(s), fossil datasets remain runtime-cached.`)
}
