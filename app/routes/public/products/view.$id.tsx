import Loading from '@/components/Loading';
import { useView } from '@/hooks/products/useView';
import { Card, CardBody, Image } from '@heroui/react';
import { createFileRoute, useMatch } from '@tanstack/react-router';
import { Image as ImageAntd } from 'antd';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Route = createFileRoute('/public/products/view/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { params } = useMatch({ from: Route.id });
  const { id } = params;

  const {
    // data
    data,
    isLoading,

    // State
    setSelectedImageIndex,
    selectedImageIndex,

    // Function
    handleNext,
    handleBack,
  } = useView(id);

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <Card shadow='lg' className='w-screen max-w-none mx-auto px-4 md:px-8'>
          <CardBody className='p-4'>
            <div className='flex flex-col md:flex-row w-full'>
              {/* Main Image */}
              <div className='flex-1 flex flex-col justify-center items-center p-4 relative w-full'>
                <ImageAntd
                  src={
                    data?.imageurl?.[selectedImageIndex] ||
                    'https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain'
                  }
                  alt='Selected Product'
                  className='w-full h-auto object-contain rounded-lg shadow-md'
                />
                {/* Navigation Buttons */}
                <div className='flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-2'>
                  <button
                    className={`p-2 bg-gray-500 text-white rounded-full ${
                      selectedImageIndex === 0
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-200'
                    }`}
                    onClick={handleBack}
                    disabled={selectedImageIndex === 0}
                  >
                    <FaArrowLeft size={20} />
                  </button>

                  <button
                    className={`p-2 bg-gray-500 text-white rounded-full ${
                      data?.imageurl &&
                      selectedImageIndex === data?.imageurl?.length - 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-200'
                    }`}
                    onClick={handleNext}
                    disabled={
                      data?.imageurl &&
                      selectedImageIndex === data?.imageurl?.length - 1
                    }
                  >
                    <FaArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className='flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 md:w-1/4'>
                {data?.imageurl?.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 md:w-full md:h-32 object-cover rounded-lg cursor-pointer ${selectedImageIndex === index ? 'border-4 border-orange-400' : 'border border-gray-300'}`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className='mt-8 flex flex-col items-center text-center space-y-4'>
              <p className='text-2xl font-bold text-gray-900'>{data?.name}</p>
              <p className='text-lg font-medium'>Quantity: {data?.quantity}</p>
              <p className='text-lg font-medium'>Price: ${data?.price}</p>
              <p className='max-w-lg text-gray-600 leading-relaxed'>
                {data?.description}
              </p>
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
}
