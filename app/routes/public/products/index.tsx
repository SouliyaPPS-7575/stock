import Loading from '@/components/Loading';
import ProductList from '@/containers/public/products/ProductList';
import { useInfiniteCollection } from '@/hooks/pocketbase/useInfiniteCollection';
import { Products } from '@/model/products';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/public/products/')({
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
      </div>
    </section>
  );
}
