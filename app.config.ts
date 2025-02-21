import { defineConfig } from '@tanstack/start/config';
import 'dotenv/config';
import { VitePWA } from 'vite-plugin-pwa';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    preset: 'netlify',
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',

        pwaAssets: {
          disabled: false,
          config: true,
        },
        manifest: {
          name: 'Souvenir Stock',
          short_name: 'Souvenir Stock',
          description: 'Souvenir Stock Sale App',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          icons: [
            {
              src: '/images/favicon.svg',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/images/favicon.svg',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,
          navigateFallback: '/',
          runtimeCaching: [
            {
              urlPattern:
                /\.(?:js|css|woff2?|png|jpg|jpeg|gif|svg|ico|webp|avif)$/i,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'static-assets',
                expiration: {
                  maxEntries: 200,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: ({ request }) => request.mode === 'navigate',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'html-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
                },
              },
            },
            {
              urlPattern: new RegExp(
                process.env.API_BASE_URL || 'https://example-api.com/.*'
              ),
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
    define: {
      'process.env.CLOUDINARY_NAME': JSON.stringify(
        process.env.CLOUDINARY_NAME
      ),
      'process.env.CLOUDINARY_UPLOAD_PRESET': JSON.stringify(
        process.env.CLOUDINARY_UPLOAD_PRESET
      ),
    },
    build: {
      chunkSizeWarningLimit: 4000, // Increase chunk warning size to 1 MB
      rollupOptions: {
        external: ['h3'],
        treeshake: true, // Ensure tree-shaking removes unused imports
      },
    },
    esbuild: {
      logLevel: 'silent', // Suppresses esbuild warnings
    },
  },
});
