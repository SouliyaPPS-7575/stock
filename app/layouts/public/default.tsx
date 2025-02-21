import { MenuProvider } from '@/components/layouts/MenuProvider';
import { Navbar } from '@/components/layouts/public/navbar';
import { useRouterState } from '@tanstack/react-router';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useRouterState({ select: (state) => state.location });
  const currentPath = location.pathname;
  const isLoginPage = currentPath === '/login';
  
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
