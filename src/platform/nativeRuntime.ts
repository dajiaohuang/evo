import { Capacitor } from '@capacitor/core'
import { App } from '@capacitor/app'
import { Browser } from '@capacitor/browser'
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar, Style } from '@capacitor/status-bar'

const WEB_APP_ORIGIN = 'https://dajiaohuang.github.io'
const WEB_APP_PATH = '/evo/'

const normalizeHash = (value: string): string | null => {
  if (!value.startsWith('#/')) return null
  return value
}

export function routeHashFromAppUrl(rawUrl: string): string | null {
  let url: URL
  try {
    url = new URL(rawUrl)
  } catch {
    return null
  }

  if (url.protocol === 'evoatlas:') {
    const explicitHash = normalizeHash(url.hash)
    if (explicitHash) return explicitHash
    const route = `${url.hostname}${url.pathname}`.replace(/^open\/?/, '').replace(/^\/+|\/+$/g, '')
    return route ? `#/${route}${url.search}` : '#/home'
  }

  if (url.origin === WEB_APP_ORIGIN && url.pathname.startsWith(WEB_APP_PATH)) {
    return normalizeHash(url.hash) ?? '#/home'
  }

  return null
}

function openInternalRoute(rawUrl: string): boolean {
  const hash = routeHashFromAppUrl(rawUrl)
  if (!hash) return false
  if (window.location.hash !== hash) window.location.hash = hash
  return true
}

function installExternalLinkHandling(): void {
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return
    const anchor = event.target.closest<HTMLAnchorElement>('a[href]')
    if (!anchor || anchor.download || event.defaultPrevented) return
    const url = anchor.href
    if (openInternalRoute(url)) {
      event.preventDefault()
      return
    }
    if (!/^https?:\/\//i.test(url)) return
    event.preventDefault()
    void Browser.open({ url })
  }, { capture: true })
}

export async function initializeNativeRuntime(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return
  document.documentElement.dataset.nativePlatform = Capacitor.getPlatform()
  installExternalLinkHandling()

  const listeners = [
    App.addListener('appUrlOpen', ({ url }) => { openInternalRoute(url) }),
    App.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) window.history.back()
      else if (window.location.hash && window.location.hash !== '#/home') window.location.hash = '#/home'
      else void App.exitApp()
    }),
  ]

  const [launchUrlResult] = await Promise.allSettled([
    App.getLaunchUrl(),
    ...listeners,
    StatusBar.setStyle({ style: Style.Light }),
    StatusBar.setBackgroundColor({ color: '#081115' }),
    StatusBar.setOverlaysWebView({ overlay: false }),
  ])
  if (launchUrlResult.status === 'fulfilled' && launchUrlResult.value?.url) {
    openInternalRoute(launchUrlResult.value.url)
  }
  await SplashScreen.hide({ fadeOutDuration: 180 }).catch(() => undefined)
}
