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
      'https://souvenir-order.netlify.app': '/public/products',
      'https://souvenir-stock.netlify.app': '/admin/products',
      'https://souvenir-order.netlify.app/public': '/public/products',
      'https://souvenir-stock.netlify.app/admin': '/admin/products',
      'http://localhost:3000': '/public/products',
      'http://localhost:3000/public': '/public/products',
      'http://localhost:3000/admin': '/admin/products',
    };

    const targetRoute = redirectMap[currentURL];
    if (targetRoute) {
      navigate({ to: targetRoute, replace: true });
    }
  }, [navigate]);

  return <Loading />;
}
