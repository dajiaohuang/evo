import { execFileSync } from 'node:child_process'
import { it } from 'vitest'

it('compares pinned release records without inventing biological correspondence', () => {
  execFileSync('python', ['-B', '-X', 'utf8', 'scripts/compare-col-releases.test.py'], {
    encoding: 'utf8', stdio: 'pipe', timeout: 30_000,
  })
})
