import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';
import Seo from '@/components/layouts/Seo';
import { NotFound } from '@/components/NotFound';
import DefaultLayoutAdmin from '@/layouts/admin/default';
import DefaultLayoutPublic from '@/layouts/public/default';
import { queryClient } from '@/services/queryClient';
import appCss from '@/styles/app.css?url';
import { seo } from '@/utils/seo';
import { isDevelopment } from '@/utils/url';
import { HeroUIProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createRootRouteWithContext,
  NavigateOptions,
  Outlet,
  ToOptions,
  useLocation,
  useRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Meta, Scripts } from '@tanstack/start';
import * as React from 'react';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';

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

  return (
    <html lang='en'>
      <head>
        <Seo />

        {/* Cloudinary */}
        <script
          src='https://upload-widget.cloudinary.com/latest/global/all.js'
          type='text/javascript'
        />
        <script src='https://media-library.cloudinary.com/global/all.js' />

        <Meta />
      </head>
      <body>
        <HeroUIProvider
          navigate={(to, options) => router.navigate({ to, ...options })}
          useHref={(to) => router.buildLocation({ to }).href}
        >
          <QueryClientProvider client={queryClient}>
            <Layout>{children}</Layout>
            {isDevelopment && (
              <TanStackRouterDevtools position='bottom-right' />
            )}
            <ReactQueryDevtools initialIsOpen />
            {/* Render ToastContainer client-side only */}
            {typeof window !== 'undefined' && (
              <Suspense fallback={null}>
                <ToastifyClient />
              </Suspense>
            )}
          </QueryClientProvider>
        </HeroUIProvider>
        <Scripts />
      </body>
    </html>
  );
}
