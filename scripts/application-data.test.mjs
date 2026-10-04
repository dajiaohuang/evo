import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync, strFromU8 } from 'fflate'
import { describe, expect, it } from 'vitest'
import { applicationManifest, encodeApplicationReferences, applicationDataPlugin } from './application-data.mjs'

const decode = source => JSON.parse(strFromU8(gunzipSync(Uint8Array.from(atob(encodeApplicationReferences(source)), value => value.charCodeAt(0)))))

describe('application source metadata encoding', () => {
  it('preserves every recorded reference field, variant and ordered contributor', () => {
    const references = JSON.parse(readFileSync('data/references.json', 'utf8'))
    expect(decode(references)).toEqual(references)
    expect(decode([{ title: '中文\u2029é', authors: ['A', 'B'], variants: [{ raw: '  exact source  ' }] }])).toEqual([{ title: '中文\u2029é', authors: ['A', 'B'], variants: [{ raw: '  exact source  ' }] }])
  })
  it('retains all displayed manifest metadata and leaves the source checksum table intact', () => {
    const manifest = JSON.parse(readFileSync('data/manifest.json', 'utf8'))
    const projected = applicationManifest(manifest)
    expect(projected).toEqual(Object.fromEntries(Object.entries(manifest).filter(([key]) => key !== 'checksums')))
    expect(Object.keys(manifest.checksums).length).toBeGreaterThan(0)
  })
  it('keeps full raw manifest imports separate from the map application closure', () => {
    const plugin = applicationDataPlugin(process.cwd())
    const importer = resolve('src/services/lab.ts')
    expect(plugin.resolveId('../../data/manifest.json', importer)).toBe('\0evo:application-manifest')
    expect(plugin.resolveId('../../data/manifest.json?raw', importer)).toBeUndefined()
    expect(plugin.resolveId('../../data/references.json', importer)).toBe('\0evo:application-references')
  })
})
