import { Products } from '@/model/products';
import { Badge, Card, CardBody, CardFooter, Image } from '@heroui/react';
import { Link, useRouter } from '@tanstack/react-router';
import React from 'react';

// Memoized ProductCard to prevent unnecessary re-renders
const ProductCard = React.memo(({ product }: { product: Products }) => {
  const router = useRouter();
  const params = '/admin/products/view/$id';

  // Prefetch the product view route (use prefetch for v1.x, preloadRoute for v0.x)
  const prefetchRoute = () => {
    // Fallback for older versions (v0.x)
    router.preloadRoute({
      to: params,
      params: { id: product.id },
    });
  };

  return (
    <>
      <Badge
        size='lg'
        color='primary'
        className='px-2 py-1 text-xs sm:text-sm md:text-base font-bold rounded-full absolute top-3 right-3 z-10'
        content={product?.quantity}
      >
        <Link
          to={params}
          className='no-underline' // Optional: Remove underline
          params={{ id: product.id }}
          onMouseEnter={prefetchRoute} // Prefetch on hover
          onFocus={prefetchRoute} // Prefetch on focus
          preload='intent' // Preload intent for faster navigation
        >
          <Card
            isPressable
            shadow='sm'
            className='rounded-lg overflow-hidden relative'
          >
            {/* Product Image */}
            <CardBody className='p-0'>
              <Image
                alt={product?.name}
                src={
                  product?.imageurl?.[0]
                    ? product?.imageurl?.[0]
                    : 'https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain'
                }
                className='w-[140px] sm:w-[160px] md:w-[180px]object-cover h-[110px] sm:h-[160px] md:h-[180px] rounded-t-lg'
              />
            </CardBody>

            {/* Product Details */}
            <CardFooter className='flex flex-col items-center px-1 py-1 space-y-1'>
              <b className='text-center w-full max-w-[100px] truncate'>
                {product?.name}
              </b>
              <p className='text-default-500 text-center w-full max-w-[100px] truncate'>
                ${product?.price}
              </p>
            </CardFooter>
          </Card>
        </Link>
      </Badge>
    </>
  );
});

export default function ProductList({ products }: { products: Products[] }) {
  return (
    <div className='mb-20 z-0'>
      {products.length === 0 ? (
        <p className='text-center text-gray-500 text-lg'>No products found</p>
      ) : (
        /* Desktop/Tablet/Mobile Grid View */
        <div className='gap-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
