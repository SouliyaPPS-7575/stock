import { ErrorComponents } from 'src/components/ErrorComponents';
import Loading from 'src/components/Loading';
import { NotFound } from 'src/components/NotFound';
import { fetchProduct } from 'src/hooks/products/useView';
import { Button, Card, CardBody } from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';
import { Image as ImageAntd } from 'antd';
import { memo, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Define the route with SSR
export const Route = createFileRoute('/public/products/ssr/view/$id')({
  loader: ({ params: { id } }) => fetchProduct({ data: id }), // SSR data fetch
  errorComponent: ErrorComponents,
  notFoundComponent: () => <NotFound>Not found</NotFound>,
  component: () => <RouteComponent />,
  pendingComponent: () => <Loading />, // Fast loading state
  pendingMs: 0, // Immediate pending state for responsiveness
});

// Memoized RouteComponent
const RouteComponent = memo(() => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const data = Route.useLoaderData();

  // Early return for no data
  if (!data) {
    return <NotFound>No product data available</NotFound>;
  }

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev < data?.imageurl?.length - 1 ? prev + 1 : prev
    );
  };

  const handleBack = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleAddToCart = () => {
    console.log(`Added ${data?.name} to cart!`);
    // Add your cart logic here
  };

  // Memoized Thumbnails component
  const Thumbnails = memo(() =>
    data?.imageurl?.length > 0 ? (
      data.imageurl.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Thumbnail ${index + 1}`}
          className={`w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
            selectedImageIndex === index
              ? 'border-4 border-orange-400'
              : 'border border-gray-300'
          }`}
          onClick={() => setSelectedImageIndex(index)}
        />
      ))
    ) : (
      <img
        src="https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain"
        alt="Default Thumbnail"
        className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg"
      />
    )
  );

  return (
    <Card shadow="lg" className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
      <CardBody className="p-4 flex flex-col items-center">
        {/* Main Product Display */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 gap-4 w-full max-w-4xl place-items-center text-center mx-auto">
            <div className="flex flex-col justify-center items-center relative w-full">
              <ImageAntd
                src={
                  data?.imageurl?.[selectedImageIndex] ||
                  'https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain'
                }
                alt="Selected Product"
                className="w-full h-auto max-w-[500px] max-h-[500px] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                preview={true}
              />
              {data?.imageurl?.length > 1 && (
                <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4">
                  <button
                    className={`p-2 bg-gray-500 text-white rounded-full ${
                      selectedImageIndex === 0
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-400'
                    }`}
                    onClick={handleBack}
                    disabled={selectedImageIndex === 0}
                  >
                    <FaArrowLeft size={20} />
                  </button>
                  <button
                    className={`p-2 bg-gray-500 text-white rounded-full ${
                      selectedImageIndex === data?.imageurl?.length - 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-400'
                    }`}
                    onClick={handleNext}
                    disabled={selectedImageIndex === data?.imageurl?.length - 1}
                  >
                    <FaArrowRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap gap-2 justify-center items-center overflow-x-auto whitespace-nowrap w-full py-2 mt-4">
          <Thumbnails />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <p className="text-2xl font-bold text-gray-900">{data?.name}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <p className="text-lg font-medium">Quantity: {data?.quantity}</p>
            <p className="text-lg font-medium">Price: ${data?.price}</p>
          </div>
          {/* Render HTML content safely */}
          <div
            className="max-w-md text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data?.description || '' }}
          />
          <Button
            size="sm"
            color="primary"
            onPress={handleAddToCart}
            className="w-full max-w-xs mt-1 px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          >
            Add to Cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
});

RouteComponent.displayName = 'RouteComponent';

export default RouteComponent;