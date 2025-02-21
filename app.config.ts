import { defineConfig } from '@tanstack/start/config';
import { loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsConfigPaths from 'vite-tsconfig-paths';

// Load environment variables based on mode
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

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
        // ... your PWA config remains unchanged
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
                  maxAgeSeconds: 60 * 60 * 24 * 30,
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
                  maxAgeSeconds: 60 * 60 * 24 * 7,
                },
              },
            },
            {
              urlPattern: new RegExp(
                env.API_BASE_URL || 'https://example-api.com/.*'
              ),
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 7,
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
      'process.env.PATH_URL_PRODUCTION': JSON.stringify(env.PATH_URL_PRODUCTION),
      'process.env.PATH_URL_LOCAL': JSON.stringify(env.PATH_URL_LOCAL),
      'process.env.VITE_BASE_URL': JSON.stringify(env.VITE_BASE_URL),
      'process.env.POCKETBASE_URL': JSON.stringify(env.POCKETBASE_URL),
      'process.env.CLOUDINARY_NAME': JSON.stringify(env.CLOUDINARY_NAME),
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.API_SECRET': JSON.stringify(env.API_SECRET),
      'process.env.CLOUDINARY_UPLOAD_PRESET': JSON.stringify(
        env.CLOUDINARY_UPLOAD_PRESET
      ),
      'process.env.CLOUDINARY_URL': JSON.stringify(env.CLOUDINARY_URL),
    },
    build: {
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        external: ['h3'],
        treeshake: true,
      },
    },
    esbuild: {
      logLevel: 'silent',
    },
  },
});
