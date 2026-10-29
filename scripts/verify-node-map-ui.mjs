import { createServer } from 'node:http'
import { existsSync, readFileSync, statSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve, extname, sep } from 'node:path'
import { spawn } from 'node:child_process'

const local = resolve('.git/platform-v2/local/node-map')
mkdirSync(local, { recursive: true })
const remote = process.argv[2]
const server = remote ? null : createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\/evo\/?/, '') || 'index.html'
  const file = ['ui', resolve('public'), resolve('dist')].map(root => {
    const directory = resolve(local, root)
    const candidate = resolve(directory, path)
    return candidate.startsWith(`${directory}${sep}`) && existsSync(candidate) && statSync(candidate).isFile() ? candidate : null
  }).find(Boolean)
  if (!file) { res.writeHead(404); res.end(); return }
  res.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.wasm': 'application/wasm' }[extname(file)] ?? 'application/octet-stream' })
  res.end(readFileSync(file))
})
const config = resolve(local, 'node-map.playwright.config.mjs')
writeFileSync(config, `import { defineConfig } from '@playwright/test'; export default defineConfig({testDir:${JSON.stringify(resolve('tests/e2e'))},testMatch:['node-map.spec.ts','map-gestures.spec.ts','map-no-fossils.spec.ts','topics-paused.spec.ts','map-drag-geometry.spec.ts'],timeout:60000,workers:1,use:{browserName:'chromium',baseURL:process.env.NODE_MAP_BASE_URL,serviceWorkers:'block',locale:'en-US'},outputDir:${JSON.stringify(resolve(local, 'test-results'))},reporter:'list'});\n`)
try {
  if (server) await new Promise(resolveReady => server.listen(0, '127.0.0.1', resolveReady))
  const base = remote ?? `http://127.0.0.1:${server.address().port}/evo/`
  const child = spawn('rtk', ['proxy', 'node', 'node_modules/@playwright/test/cli.js', 'test', '--config', config], {
    stdio: 'inherit', env: { ...process.env, NODE_MAP_BASE_URL: base },
  })
  process.exitCode = await new Promise((done, reject) => { child.on('error', reject); child.on('exit', done) })
} finally { if (server) await new Promise(done => server.close(done)) }
