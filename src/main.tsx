import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { I18nProvider } from './i18n'
import { registerSW } from 'virtual:pwa-register'
import { initializeNativeRuntime } from './platform/nativeRuntime'
import { frontendContract } from './platform/frontendContract'

document.documentElement.dataset.frontendTarget = frontendContract.target
document.documentElement.dataset.frontendEdition = frontendContract.edition
document.documentElement.dataset.contentScope = frontendContract.content.scope
document.documentElement.dataset.shellVersion = 'map-fullscreen-v2'
const shellEntry = new URL(window.location.href)
if (shellEntry.searchParams.has('__evo_ui')) {
  shellEntry.searchParams.delete('__evo_ui')
  if (shellEntry.pathname === '/evo/index.html') shellEntry.pathname = '/evo/'
  window.history.replaceState(window.history.state, '', shellEntry.pathname + shellEntry.search + shellEntry.hash)
}

if (import.meta.env.VITE_NATIVE_APP === 'true') {
  document.documentElement.dataset.offlineReady = 'true'
  void initializeNativeRuntime().catch((error) => {
    console.warn('Evo Atlas native runtime initialization failed.', error)
  })
} else {
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      document.documentElement.dataset.updateAvailable = 'true'
      window.dispatchEvent(new Event('evo:update-available'))
      void updateSW(true)
    },
    onRegisteredSW(_url, registration) {
      const check = () => {
        if (document.visibilityState === 'visible') void registration?.update().catch(() => undefined)
      }
      check()
      document.addEventListener('visibilitychange', check)
      window.addEventListener('online', check)
    },
    onOfflineReady() {
      document.documentElement.dataset.offlineReady = 'true'
      window.dispatchEvent(new Event('evo:offline-ready'))
    },
    onRegisterError(error) {
      console.warn('Evo Atlas service worker registration failed.', error)
    },
  })
  window.addEventListener('evo:apply-update', () => { void updateSW(true) })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
)
