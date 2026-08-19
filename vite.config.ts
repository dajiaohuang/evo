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
        globPatterns: ['**/*.{html,css,svg}', 'assets/index-*.js', 'assets/rolldown-runtime-*.js', 'assets/vendor~index-*.js', 'assets/vendor~index~*.js', 'assets/vendor~workbox-window*.js', 'data/current.json', 'data/core/*.json.gz'],
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
          {
            urlPattern: ({ url, sameOrigin }) => sameOrigin && /^\/evo\/data\/(?:packages|package-search-index|occurrences|maps)\//.test(url.pathname),
            handler: 'CacheFirst',
            options: {
              cacheName: 'evo-runtime-data-v1',
              expiration: { maxEntries: 220, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  base: '/evo/',
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{ name: 'vendor', test: /node_modules[\\/]/, entriesAware: true }],
        },
      },
    },
  },
})
