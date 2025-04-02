import Loading from 'src/components/Loading';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useMemo } from 'react';

// Define the route
export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const navigate = useNavigate();

  // Define redirect mappings with fallbacks for undefined env vars
  const redirectMap = useMemo((): Record<string, string> => {
    const pathUrlOrderProd =
      process.env.PATH_URL_ORDER_PRODUCTION ||
      'https://souvenir-order.netlify.app';
    const pathUrlStockProd =
      process.env.PATH_URL_STOCK_PRODUCTION ||
      'https://souvenir-stock.netlify.app';
    const pathUrlLocal = process.env.PATH_URL_LOCAL || 'http://localhost:3000';

    return {
      [pathUrlOrderProd]: '/public/products',
      [pathUrlStockProd]: '/admin/products',
      [`${pathUrlOrderProd}/public`]: '/public/products',
      [`${pathUrlStockProd}/admin`]: '/admin/products',
      [pathUrlLocal]: '/public/products',
      [`${pathUrlLocal}/public`]: '/public/products',
      [`${pathUrlLocal}/admin`]: '/admin/products',
    };
  }, []); // Empty dependency array since env vars are static at build time

  useEffect(() => {
    // Skip execution during SSR
    if (typeof window === 'undefined') return;

    const currentURL = window.location.origin;
    const targetRoute = redirectMap[currentURL];

    if (targetRoute) {
      // Debug log (optional, remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log(`Redirecting from ${currentURL} to ${targetRoute}`);
      }
      navigate({ to: targetRoute, replace: true });
    }
  }, [navigate, redirectMap]);

  return <Loading />;
}

export default Home;
