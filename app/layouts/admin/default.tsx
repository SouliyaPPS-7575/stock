import { MenuProvider } from '@/components/layouts/MenuProvider';
import { Navbar } from '@/components/layouts/admin/navbar';
import pb from '@/services/pocketbaseService';
import { useRouterState, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useRouterState({ select: (state) => state.location });
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isLoginPage = currentPath === '/login';

  useEffect(() => {
    // Check if token exists in localStorage
    const token = pb.authStore.token;

    // If token is not found and user is not on the login page, redirect to login page
    if (!token && !isLoginPage) {
      navigate({ to: '/login' });
    }
  }, [isLoginPage, navigate]);

  return (
    <div className='relative flex flex-col h-screen'>
      {!isLoginPage && (
        <MenuProvider>
          <Navbar />
        </MenuProvider>
      )}
      <main className='container mx-auto max-w-7xl px-1 flex-grow'>
        {children}
      </main>
    </div>
  );
}
