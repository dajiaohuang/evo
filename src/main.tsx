import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'leaflet/dist/leaflet.css'
import './index.css'
import App from './App'
import { I18nProvider } from './i18n'
import { registerSW } from 'virtual:pwa-register'
import { initializeNativeRuntime } from './platform/nativeRuntime'
import { frontendContract } from './platform/frontendContract'

document.documentElement.dataset.frontendTarget = frontendContract.target
document.documentElement.dataset.frontendEdition = frontendContract.edition
document.documentElement.dataset.contentScope = frontendContract.content.scope

if (import.meta.env.VITE_NATIVE_APP === 'true') {
  document.documentElement.dataset.offlineReady = 'true'
  void initializeNativeRuntime().catch((error) => {
    console.warn('Evo Atlas native runtime initialization failed.', error)
  })
} else {
  registerSW({
    immediate: true,
    onOfflineReady() {
      document.documentElement.dataset.offlineReady = 'true'
      window.dispatchEvent(new Event('evo:offline-ready'))
    },
    onRegisterError(error) {
      console.warn('Evo Atlas service worker registration failed.', error)
    },
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
)
