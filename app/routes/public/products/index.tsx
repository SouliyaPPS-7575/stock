import Loading from '@/components/Loading'
import ProductList from '@/containers/public/products/ProductList'
import { useInfiniteCollection } from '@/hooks/pocketbase/useInfiniteCollection'
import { Products } from '@/model/products'
import { Button, Link } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/public/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {
    items: products,
    loadMoreRef,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteCollection({
    collection: 'products',
    pageSize: 12,
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="p-2 z-0 min-h-screen">
      {/* List of Product Cards */}
      <ProductList products={products as unknown as Products[]} />

      {/* Infinite Scroll Trigger */}
      {isFetchingNextPage && <Loading />}
      <div ref={loadMoreRef} className="h-10" />

      {/* Floating "Create" Button */}
      <Button
        color="primary"
        className="fixed bottom-20 right-4 p-4 rounded-full shadow-lg focus:outline-none z-10"
        as={Link}
        href="/public/products/create"
      >
        + Create
      </Button>
    </div>
  )
}
