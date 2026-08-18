import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        id: '/evo/',
        name: 'Evo Atlas — Deep-Time Evidence Explorer',
        short_name: 'Evo Atlas',
        description: 'Explore deep-time evolution through linked fossil, paleogeographic and phylogenetic evidence.',
        theme_color: '#081115',
        background_color: '#081115',
        display: 'standalone',
        scope: '/evo/',
        start_url: '/evo/#/home',
        icons: [
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,json}'],
        navigateFallback: '/evo/index.html',
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  base: '/evo/',
})
