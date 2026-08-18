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
        globPatterns: ['**/*.{html,css,svg}', 'assets/index-*.js', 'assets/workbox-window*.js'],
        navigateFallback: '/evo/index.html',
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.startsWith('/evo/assets/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'evo-lazy-assets-v1',
              expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  base: '/evo/',
})
