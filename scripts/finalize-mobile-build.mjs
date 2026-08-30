import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { loadEnv } from 'vite'
import { rootDir } from './data-lib.mjs'

const outputRoot = resolve(rootDir, 'dist-mobile')
const expectedOutputRoot = join(rootDir, 'dist-mobile')
if (outputRoot !== expectedOutputRoot || !existsSync(join(outputRoot, 'index.html'))) {
  throw new Error(`Mobile build output is missing or unsafe: ${outputRoot}`)
}

const shellResources = ['favicon.svg', 'release.json']
for (const name of shellResources) {
  const source = join(rootDir, 'public', name)
  if (!existsSync(source)) throw new Error(`Required mobile shell resource is missing: public/${name}`)
  const destination = join(outputRoot, name)
  mkdirSync(dirname(destination), { recursive: true })
  copyFileSync(source, destination)
}

if (existsSync(join(outputRoot, 'data'))) {
  throw new Error('Mobile shell must not bundle public/data; scientific data is loaded from the versioned Pages endpoint')
}

const fileEnvironment = loadEnv('mobile', rootDir, 'VITE_')
const processEnvironment = Object.fromEntries(
  Object.entries(process.env).filter(([name, value]) => name.startsWith('VITE_') && value !== undefined),
)
const mobileEnvironment = { ...fileEnvironment, ...processEnvironment }
const dataRoot = mobileEnvironment.VITE_DATA_ROOT
if (mobileEnvironment.VITE_NATIVE_APP !== 'true' || !dataRoot?.startsWith('https://') || /(?:localhost|127\.0\.0\.1)/i.test(dataRoot)) {
  throw new Error('Mobile build must use native mode and a production HTTPS VITE_DATA_ROOT')
}

function filesBelow(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

const files = filesBelow(outputRoot)
const totalBytes = files.reduce((sum, file) => sum + statSync(file).size, 0)
const limitBytes = 12 * 1024 * 1024
if (totalBytes > limitBytes) {
  throw new Error(`Mobile shell is ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; limit is ${limitBytes / 1024 / 1024} MiB`)
}
const unexpectedDataFiles = files
  .map((file) => relative(outputRoot, file).replaceAll(sep, '/'))
  .filter((file) => file === 'data' || file.startsWith('data/'))
if (unexpectedDataFiles.length) throw new Error(`Mobile shell contains runtime data: ${unexpectedDataFiles.slice(0, 3).join(', ')}`)

console.log(`Mobile shell contract passed: ${files.length} files, ${(totalBytes / 1024 / 1024).toFixed(2)} MiB, data root ${dataRoot}`)
