import { describe, expect, it } from 'vitest'
import { taskAssets } from './bundle-task-metrics.mjs'

describe('task dependency accounting', () => {
  it('counts transitive and shared imports once, excluding unrelated dynamic entries', () => {
    const manifest = {
      entry: { file: 'entry.js', imports: ['vendor', 'shared'], dynamicImports: ['sql'] },
      vendor: { file: 'vendor.js' }, shared: { file: 'shared.js', imports: ['vendor'], css: ['shared.css'] },
      map: { file: 'map.js', imports: ['shared'] }, sql: { file: 'sql.js' },
    }
    expect(taskAssets(manifest, ['entry', 'map'])).toEqual(['entry.js', 'map.js', 'shared.css', 'shared.js', 'vendor.js'])
  })
})
