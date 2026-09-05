import { Capacitor } from '@capacitor/core'

export type FrontendTarget = 'web' | 'android' | 'ios'
export type FrontendEdition = 'full-web' | 'native-full' | 'github-pages-preview'
export type FrontendDataProfile = 'web-light' | 'native-full'

export const FRONTEND_CONTRACT_SCHEMA_VERSION = 1 as const
export const FRONTEND_BACKEND_PROTOCOL_VERSION = 'v1' as const
export const FRONTEND_TREE_PAGE_SIZE = 200 as const
export const FRONTEND_TREE_OVERSCAN_ROWS = 8 as const
export const FRONTEND_TREE_MAX_MATERIALIZED_ROWS = 120_000 as const

export interface FrontendContractInput {
  mode?: string
  pagesPreview?: string
  nativeApp?: string
  nativePlatform?: string
  backendBaseUrl?: string
}

export interface FrontendCapabilityContract {
  schemaVersion: typeof FRONTEND_CONTRACT_SCHEMA_VERSION
  target: FrontendTarget
  edition: FrontendEdition
  native: boolean
  content: {
    profile: FrontendDataProfile
    scope: 'full' | 'selected-preview'
    timelineSceneCards: 'map-overlay'
  }
  backend: {
    protocolVersion: typeof FRONTEND_BACKEND_PROTOCOL_VERSION
    configured: boolean
    mode: 'optional' | 'disabled'
  }
  tree: {
    representation: 'packed-adjacency'
    rendering: 'windowed'
    pageSize: typeof FRONTEND_TREE_PAGE_SIZE
    overscanRows: typeof FRONTEND_TREE_OVERSCAN_ROWS
    maxMaterializedRows: typeof FRONTEND_TREE_MAX_MATERIALIZED_ROWS
  }
  sync: {
    strategy: 'release-pinned-on-demand'
    realtime: false
  }
}

function normalize(value: string | undefined): string {
  return value?.trim().toLowerCase() ?? ''
}

export function resolveFrontendTarget(nativePlatform?: string): FrontendTarget {
  const platform = normalize(nativePlatform)
  if (platform === 'android') return 'android'
  if (platform === 'ios') return 'ios'
  return 'web'
}

export function resolveFrontendContract(input: FrontendContractInput = {}): FrontendCapabilityContract {
  const target = resolveFrontendTarget(input.nativePlatform)
  const native = normalize(input.nativeApp) === 'true' || target === 'android' || target === 'ios'
  const pagesPreview = normalize(input.pagesPreview) === 'true' && input.mode !== 'mobile' && !native
  const edition: FrontendEdition = pagesPreview ? 'github-pages-preview' : native ? 'native-full' : 'full-web'
  const backendConfigured = Boolean(input.backendBaseUrl?.trim()) && edition !== 'github-pages-preview'

  return {
    schemaVersion: FRONTEND_CONTRACT_SCHEMA_VERSION,
    target,
    edition,
    native,
    content: {
      profile: native ? 'native-full' : 'web-light',
      scope: pagesPreview ? 'selected-preview' : 'full',
      timelineSceneCards: 'map-overlay',
    },
    backend: {
      protocolVersion: FRONTEND_BACKEND_PROTOCOL_VERSION,
      configured: backendConfigured,
      mode: backendConfigured ? 'optional' : 'disabled',
    },
    tree: {
      representation: 'packed-adjacency',
      rendering: 'windowed',
      pageSize: FRONTEND_TREE_PAGE_SIZE,
      overscanRows: FRONTEND_TREE_OVERSCAN_ROWS,
      maxMaterializedRows: FRONTEND_TREE_MAX_MATERIALIZED_ROWS,
    },
    sync: {
      strategy: 'release-pinned-on-demand',
      realtime: false,
    },
  }
}

export const frontendContract = resolveFrontendContract({
  mode: import.meta.env.MODE,
  pagesPreview: import.meta.env.VITE_PAGES_PREVIEW,
  nativeApp: import.meta.env.VITE_NATIVE_APP,
  nativePlatform: import.meta.env.VITE_NATIVE_PLATFORM ?? Capacitor.getPlatform(),
  backendBaseUrl: import.meta.env.VITE_EVO_API_BASE_URL,
})
