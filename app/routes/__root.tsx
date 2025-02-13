import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';
import Seo from '@/components/layouts/Seo';
import { NotFound } from '@/components/NotFound';
import DefaultLayout from '@/layouts/default';
import { router } from '@/router';
import { queryClient } from '@/services/queryClient';
import appCss from '@/styles/app.css?url';
import { seo } from '@/utils/seo';
import { HeroUIProvider } from '@heroui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createRootRoute,
  NavigateOptions,
  Outlet,
  ToOptions,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Meta, Scripts } from '@tanstack/start';
import * as React from 'react';

export const isDevelopment = import.meta.env.MODE === 'development';

export const Route = createRootRoute({
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
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
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
  return (
    <html>
      <head>
        <Seo />
        <script src='/sw.js'></script>
        <Meta />
      </head>
      <body>
        <HeroUIProvider
          navigate={(to, options) => router.navigate({ to, ...options })}
          useHref={(to) => router.buildLocation({ to }).href}
        >
          <QueryClientProvider client={queryClient}>
            <DefaultLayout>
              <section className='flex flex-col items-center justify-center gap-1 py-1 md:py-0'>
                {children}
              </section>
            </DefaultLayout>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HeroUIProvider>

        {isDevelopment && <TanStackRouterDevtools position='bottom-right' />}
        <Scripts />
      </body>
    </html>
  );
}
