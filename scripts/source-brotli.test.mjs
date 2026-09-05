import { execFileSync } from 'node:child_process'
import { brotliDecompressSync } from 'node:zlib'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, test } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

test('Python source storage preserves binary and UTF-8 bytes through Node Brotli', () => {
  const source = Buffer.concat([Buffer.from('C₃ 中国植物志\n', 'utf8'), Buffer.from([0, 13, 10, 255])])
  const script = "import sys; sys.path.insert(0, 'scripts'); from source_brotli import compress_source; sys.stdout.buffer.write(compress_source(sys.stdin.buffer.read()))"
  const run = () => execFileSync('python', ['-B', '-c', script], { cwd: root, input: source, timeout: 30000 })
  const compressed = run()
  expect(brotliDecompressSync(compressed)).toEqual(source)
  expect(run()).toEqual(compressed)
})
