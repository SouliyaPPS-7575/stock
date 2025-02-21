import Loading from '@/components/Loading';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === 'undefined') return; // Prevent SSR issues

    const currentURL = window.location.origin;

    // Mapping object for URL redirection
    const redirectMap: Record<string, string> = {
      [`${process.env.PATH_URL_ORDER_PRODUCTION}`]: '/public/products',
      [`${process.env.PATH_URL_STOCK_PRODUCTION}`]: '/admin/products',
      [`${process.env.PATH_URL_ORDER_PRODUCTION}/public`]: '/public/products',
      [`${process.env.PATH_URL_STOCK_PRODUCTION}/admin`]: '/admin/products',
      [`${process.env.PATH_URL_LOCAL}`]: '/public/products',
      [`${process.env.PATH_URL_LOCAL}/public`]: '/public/products',
      [`${process.env.PATH_URL_LOCAL}/admin`]: '/admin/products',
    };

    const targetRoute = redirectMap[currentURL];
    if (targetRoute) {
      navigate({ to: targetRoute, replace: true });
    }
  }, [navigate]);

  return <Loading />;
}
