import Loading from 'src/components/Loading';
import ProductList from 'src/containers/admin/products/ProductList';
import { useInfiniteCollection } from 'src/hooks/pocketbase/useInfiniteCollection';
import { Products } from 'src/model/products';
import { Button, Link } from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/products/')({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    items: products,
    loadMoreRef,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteCollection({
    collection: 'products',
    pageSize: 12,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className='flex flex-col items-center justify-center gap-1 py-1 md:py-0'>
      <div className='p-2 z-0 min-h-screen'>
        {/* List of Product Cards */}
        <ProductList products={products as Products[]} />

        {/* Infinite Scroll Trigger */}
        {isFetchingNextPage && <Loading />}
        <div ref={loadMoreRef} className='h-10' />

        {/* Floating "Create" Button */}
        <Button
          color='primary'
          className='fixed bottom-20 right-4 p-4 rounded-full shadow-lg focus:outline-none z-10'
          as={Link}
          href='/admin/products/create'
        >
          + Create
        </Button>
      </div>
    </section>
  );
}
