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
    console.log('=> currentURL in useEffect:', currentURL); // Debugging log

    if (currentURL === 'https://souvenir-order.netlify.app') {
      navigate({ to: '/public/products', replace: true });
    }

    if (currentURL === 'https://souvenir-stock.netlify.app') {
      navigate({ to: '/admin/products', replace: true });
    }

    if (currentURL === 'http://localhost:3000') {
      navigate({ to: '/admin/products', replace: true });
    }
  }, [navigate]);

  return <Loading />;
}
