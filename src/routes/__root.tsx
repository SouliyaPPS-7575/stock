import appCss from '@/styles/app.css?url';
import { HeroUIProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createRootRouteWithContext,
  HeadContent,
  NavigateOptions,
  Outlet,
  ToOptions,
  useLocation,
  useRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Scripts } from '@tanstack/react-router';
import * as React from 'react';
import { lazy, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { DefaultCatchBoundary } from 'src/components/DefaultCatchBoundary';
import Seo from 'src/components/layouts/Seo';
import { NotFound } from 'src/components/NotFound';
import DefaultLayoutAdmin from 'src/layouts/admin/default';
import DefaultLayoutPublic from 'src/layouts/public/default';
import { seo } from 'src/utils/seo';
import { isDevelopment } from 'src/utils/url';

// Lazy-load ToastContainer for client-side only
const ToastifyClient = lazy(() =>
  import('react-toastify').then((module) => {
    return {
      default: () => (
        <>
          <module.ToastContainer
            style={{ zIndex: 50 }}
            autoClose={3000}
            position='top-right'
          />
        </>
      ),
    };
  })
);

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Stock',
        description: `Stock`,
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/favicon.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/favicon.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/favicon.svg',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/images/favicon.svg' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

declare module '@react-types/shared' {
  interface RouterConfig {
    href: ToOptions['to'];
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const location = useLocation();
  const currentPath = location.pathname;

  const Layout = currentPath.startsWith('/admin')
    ? DefaultLayoutAdmin
    : DefaultLayoutPublic;

  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang='en'>
      <head>
        <Seo />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&family=Phetsarath+OT:wght@400;700&family=Poppins:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />

        {/* Cloudinary */}
        <script
          src='https://upload-widget.cloudinary.com/latest/global/all.js'
          type='text/javascript'
        />
        <script src='https://media-library.cloudinary.com/global/all.js' />

        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        <HeroUIProvider
          navigate={(to, options) => router.navigate({ to, ...options })}
          useHref={(to) => router.buildLocation({ to }).href}
        >
          <QueryClientProvider client={queryClient}>
            <Layout>{children}</Layout>
            {isDevelopment && (
              <TanStackRouterDevtools position='bottom-right' />
            )}
            <ReactQueryDevtools buttonPosition='bottom-left' />
            {/* Render ToastContainer client-side only */}
            {typeof window !== 'undefined' && <ToastifyClient />}
          </QueryClientProvider>
        </HeroUIProvider>
        <Scripts />
      </body>
    </html>
  );
}
