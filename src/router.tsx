import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routerWithQueryClient } from '@tanstack/react-router-with-query';
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary';
import Loading from './components/Loading';
import { NotFound } from './components/NotFound';
import { routeTree } from './routeTree.gen';
import { queryClient } from './services/queryClient';

// ✅ Ensure only ONE function is declared
export function createRouter() {
  return routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      context: { queryClient },
      defaultPreload: 'intent',
      defaultErrorComponent: DefaultCatchBoundary,
      defaultNotFoundComponent: () => <NotFound />,
      defaultPendingComponent: Loading,
      scrollRestoration: true,
    }),
    queryClient
  );
}

export const router = createRouter();

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
