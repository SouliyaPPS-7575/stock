import { Products } from '@/model/products';
import { router } from '@/router';
import { Badge, Button, Card, CardBody, CardFooter, Image } from '@heroui/react';

export default function ProductList({ products }: { products: Products[] }) {
  const handleAddToCart = (product: Products) => {
    console.log(`Added to cart: ${product.name}`);
    // Implement your cart logic here
  };
  
  return (
    <div className='mb-20 z-0'>
      {products.length === 0 ? (
        <p className='text-center text-gray-500 text-lg'>No products found</p>
      ) : (
        /* Desktop/Tablet/Mobile Grid View */
        <div className='gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {products.map((product: Products, index) => (
            <div key={index} className='relative'>
              <Badge
                size='lg'
                color='primary'
                className='px-2 py-1 text-xs sm:text-sm md:text-base font-bold rounded-full absolute top-3 right-3 z-10'
                content={product.quantity}
              >
                <Card
                  isPressable
                  shadow='sm'
                  onPress={() => {
                    router.navigate({ to: `/public/products/view/${product.id}` });
                  }}
                  className='rounded-lg overflow-hidden relative'
                >
                  {/* Product Image */}
                  <CardBody className='p-0'>
                    <Image
                      alt={product.name}
                      src={
                        product?.imageurl?.[0]
                          ? product?.imageurl?.[0]
                          : 'https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain'
                      }
                      className='w-[175px] sm:w-[160px] md:w-[180px]object-cover h-[170px] sm:h-[160px] md:h-[180px] rounded-t-lg'
                    />
                  </CardBody>

                  {/* Product Details */}
                  <CardFooter className='flex flex-col items-center px-1 py-1 space-y-1'>
                    <b className='text-center w-full max-w-[100px] truncate'>
                      {product.name}
                    </b>
                    <p className='text-default-500 text-center w-full max-w-[100px] truncate'>
                      ${product.price}
                    </p>

                    {/* Add to Cart Button */}
                    <Button
                      size='sm'
                      color='primary'
                      onPress={() => {
                        handleAddToCart(product);
                      }}
                      className='w-full mt-1'
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </Badge>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
