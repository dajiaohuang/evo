// @vitest-environment node
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'vitest'

const root = fileURLToPath(new URL('../', import.meta.url))
const pythonTest = join(root, 'scripts/systema-dipterorum-source.test.py')

describe('Systema Dipterorum archive projection', () => {
  it('runs the focused Python replay and provenance regression', () => {
    try {
      execFileSync('python', ['-B', pythonTest], {
        cwd: root,
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 120000,
      })
    } catch (error) {
      const output = [error.stdout, error.stderr].filter(Boolean).join('\n')
      throw new Error(`Python regression failed${output ? `:\n${output}` : ''}`)
    }
  }, 120000)
})
