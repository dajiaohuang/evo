import { describe, expect, it } from 'vitest'
import { resolveFrontendContract } from './frontendContract'

describe('shared frontend capability contract', () => {
  it('describes the full Web target and its optional current backend', () => {
    const contract = resolveFrontendContract({ mode: 'production', backendBaseUrl: 'https://api.example.test/' })
    expect(contract).toMatchObject({
      schemaVersion: 1,
      target: 'web',
      edition: 'full-web',
      native: false,
      content: { profile: 'web-light', scope: 'full', timelineSceneCards: 'map-overlay' },
      backend: { protocolVersion: 'v1', configured: true, mode: 'optional' },
      tree: { representation: 'packed-adjacency', rendering: 'windowed', pageSize: 200 },
      sync: { strategy: 'release-pinned-on-demand', realtime: false },
    })
  })

  it('keeps Android and iOS full-content targets on the same contract', () => {
    for (const nativePlatform of ['android', 'ios']) {
      const contract = resolveFrontendContract({ mode: 'mobile', nativeApp: 'true', nativePlatform, backendBaseUrl: 'https://api.example.test' })
      expect(contract.target).toBe(nativePlatform)
      expect(contract.edition).toBe('native-full')
      expect(contract.native).toBe(true)
      expect(contract.content).toMatchObject({ profile: 'native-full', scope: 'full' })
      expect(contract.backend).toMatchObject({ protocolVersion: 'v1', configured: true })
    }
  })

  it('makes Pages a selected preview and never lets it use the backend', () => {
    const contract = resolveFrontendContract({ mode: 'production', pagesPreview: 'true', backendBaseUrl: 'https://api.example.test' })
    expect(contract).toMatchObject({
      target: 'web',
      edition: 'github-pages-preview',
      native: false,
      content: { profile: 'web-light', scope: 'selected-preview' },
      backend: { protocolVersion: 'v1', configured: false, mode: 'disabled' },
    })
  })

  it('does not let the Pages flag reduce a native build', () => {
    const contract = resolveFrontendContract({ mode: 'mobile', pagesPreview: 'true', nativeApp: 'true', nativePlatform: 'ios' })
    expect(contract.edition).toBe('native-full')
    expect(contract.content.scope).toBe('full')
  })
})
