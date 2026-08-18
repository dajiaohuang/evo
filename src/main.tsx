import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'leaflet/dist/leaflet.css'
import './index.css'
import App from './App'
import { I18nProvider } from './i18n'
import { registerSW } from 'virtual:pwa-register'

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
)
