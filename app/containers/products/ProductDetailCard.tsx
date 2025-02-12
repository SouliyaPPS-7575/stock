import { Products } from '@/model/products';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@heroui/react';

function ProductDetailCard({ product }: { product: Products }) {
  return (
    <Card className="overflow-hidden relative w-[420px] border-small border-foreground/10 bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')] bg-right-bottom">
      {/* Card Header */}
      <CardHeader>
        <div className='flex items-center gap-3'>
          <Avatar className='border-small border-white/20 bg-transparent' />
          <p className='text-large font-medium text-white'>{product?.name}</p>
        </div>
      </CardHeader>

      {/* Card Body */}
      <CardBody className='px-3'>
        <div className='flex flex-col gap-2 px-2'>
          <p className='text-large font-medium text-white/80'>
            {product?.description}
          </p>
          <div className='flex gap-2'>
            <Badge className='text-white/90'>
              Quantity: {product?.quantity}
            </Badge>
            <Badge className='text-white/90'>Price: ${product?.price}</Badge>
          </div>
        </div>
      </CardBody>

      {/* Card Footer */}
      <CardFooter className='justify-between gap-2'>
        {/* Edit Button */}
        <Button
          fullWidth
          variant='bordered'
          className='border-small border-white/20 bg-white/10 text-white'
          onClick={() => console.log('Edit product')}
        >
          Edit
        </Button>

        {/* Delete Button */}
        <Button
          fullWidth
          variant='bordered'
          className='border-small border-white/20 bg-white/10 text-white'
          onClick={() => console.log('Delete product')}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductDetailCard;
