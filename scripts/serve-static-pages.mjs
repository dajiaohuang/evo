import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, resolve, sep } from 'node:path'
import { rootDir } from './data-lib.mjs'

const root = resolve(rootDir, 'dist-pages')
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.json': 'application/json', '.xml': 'application/xml', '.js': 'text/javascript' }
const port = Number(process.env.PAGES_PORT ?? 4180)
createServer((request, response) => {
  const url = new URL(request.url, 'http://localhost')
  if (url.pathname === '/evo') { response.writeHead(301, { Location: '/evo/' }); response.end(); return }
  let file
  try {
    file = resolve(root, decodeURIComponent(url.pathname.replace(/^\/evo\//, '')))
    if (!url.pathname.startsWith('/evo/') || (file !== root && !file.startsWith(`${root}${sep}`))) throw new Error('Outside root')
    if (existsSync(file) && statSync(file).isDirectory()) {
      if (!url.pathname.endsWith('/')) { response.writeHead(301, { Location: `${url.pathname}/${url.search}` }); response.end(); return }
      file = join(file, 'index.html')
    }
    if (!existsSync(file) || !statSync(file).isFile()) throw new Error('Not found')
    response.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' })
  } catch {
    file = join(root, '404.html')
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
  }
  createReadStream(file).pipe(response)
}).listen(port, '127.0.0.1', () => console.log(`Static Pages at http://127.0.0.1:${port}/evo/`))
