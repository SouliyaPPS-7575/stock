import { useEffect } from 'react';

const Seo: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log(
              'Service Worker registered successfully with scope:',
              registration.scope
            );
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });

      let deferredPrompt: any;
      const hasShownA2HS = localStorage.getItem('hasShownA2HS') === 'true';

      if (!hasShownA2HS) {
        window.addEventListener('beforeinstallprompt', (event) => {
          event.preventDefault();
          deferredPrompt = event;

          const installAlert = document.createElement('div');
          installAlert.style.position = 'fixed';
          installAlert.style.bottom = '20px';
          installAlert.style.left = '50%';
          installAlert.style.transform = 'translateX(-50%)';
          installAlert.style.backgroundColor = '#ffffff';
          installAlert.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
          installAlert.style.borderRadius = '12px';
          installAlert.style.padding = '15px 20px';
          installAlert.style.zIndex = '999';
          installAlert.style.display = 'flex';
          installAlert.style.alignItems = 'center';
          installAlert.style.justifyContent = 'space-between';
          installAlert.style.width = '95%';
          installAlert.style.maxWidth = '400px';
          installAlert.style.fontFamily = 'Arial, sans-serif';

          installAlert.innerHTML = `
            <div style="flex: 1; z-index: 999;">
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #333;">
                Add to Home Screen
              </p>
              <p style="margin: 0; font-size: 14px; color: #666;">
                Install this app for a better user experience!
              </p>
            </div>
            <div style="display: flex; align-items: center; gap: 10px; z-index: 999;">
              <button id="install-pwa-button" style="
                background-color: #ab5f14;
                color: #ffffff;
                font-size: 14px;
                font-weight: bold;
                border: none;
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s;
              ">Install</button>
              <button id="close-alert-button" style="
                background-color: #bdbdbd;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
                border: none;
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s;
              ">Close</button>
            </div>
          `;

          document.body.appendChild(installAlert);

          const timeout = setTimeout(() => {
            installAlert.remove();
          }, 15000);

          document
            .getElementById('install-pwa-button')
            ?.addEventListener('click', async () => {
              clearTimeout(timeout);
              if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                  localStorage.setItem('hasShownA2HS', 'true');
                }
                deferredPrompt = null;
              }
              installAlert.remove();
            });

          document
            .getElementById('close-alert-button')
            ?.addEventListener('click', () => {
              clearTimeout(timeout);
              installAlert.remove();
              localStorage.setItem('hasShownA2HS', 'false');
            });
        });
      }
    }
  }, []);

  return (
    <article>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Souvenir Stock</title>
      <meta name='description' content='Souvenir Stock Sale App' />
      <link rel='manifest' href='/manifest.json' />
      <meta property='og:title' content='Souvenir Stock' />
      <meta property='og:description' content='Souvenir Stock Sale App' />
      <meta
        property='og:image'
        content='https://stock-order.netlify.app/images/favicon.svg'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://stock-order.netlify.app' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='Souvenir Stock' />
      <meta name='twitter:description' content='Souvenir Stock Sale App' />
      <meta
        name='twitter:image'
        content='https://stock-order.netlify.app/images/favicon.svg'
      />
      <link rel='icon' type='image/png' href='/images/favicon.svg' />
      <link rel='icon' href='/images/favicon.svg' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#fff' />
      <meta name='apple-mobile-web-app-title' content='souvenirstock' />
      <meta name='theme-color' content='#fff' />
      <link rel='apple-touch-icon' href='/images/favicon.svg' />
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          .install-alert {
            z-index: 9999;
            position: fixed;
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
            pointer-events: auto;
          }
          .modal {
            position: fixed;
            z-index: 9999;
          }
          .install-alert *,
          .modal * {
            pointer-events: auto;
          }
          .install-alert-blocker,
          .modal-blocker {
            pointer-events: none;
          }
          .sticky-element {
            position: sticky;
            z-index: 999;
          }
        `}
      </style>
    </article>
  );
};

export default Seo;
