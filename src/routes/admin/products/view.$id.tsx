import Loading from 'src/components/Loading';
import { useView } from 'src/hooks/products/useView';
import { router } from 'src/router';
import { Button, Card, CardBody, CardFooter } from '@heroui/react';
import { createFileRoute, useMatch } from '@tanstack/react-router';
import { Image as ImageAntd } from 'antd';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Route = createFileRoute('/admin/products/view/$id')({
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
        <Card
          shadow='lg'
          className='w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8'
        >
          <CardBody className='p-4 flex flex-col items-center'>
            {/* Main Product Display */}
            <div className='flex justify-center w-full'>
              <div className='grid grid-cols-1 md:grid-cols-1 gap-4 w-full max-w-4xl place-items-center text-center mx-auto'>
                {/* Main Image */}
                <div className='flex flex-col justify-center items-center relative w-full'>
                  <ImageAntd
                    src={
                      data?.imageurl?.[selectedImageIndex] ||
                      'https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain'
                    }
                    alt='Selected Product'
                    className='w-full h-auto max-w-[500px] max-h-[500px] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105'
                  />
                  {/* Navigation Buttons */}
                  <div className='flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4'>
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
                        data?.imageurl &&
                        selectedImageIndex === data.imageurl.length - 1
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-gray-400'
                      }`}
                      onClick={handleNext}
                      disabled={
                        data?.imageurl &&
                        selectedImageIndex === data.imageurl.length - 1
                      }
                    >
                      <FaArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/* Sidebar for Thumbnails */}
            <div className='flex flex-wrap gap-2 justify-center items-center overflow-x-auto whitespace-nowrap w-full py-2'>
              {data?.imageurl?.length > 0 ? (
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
                  src='https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain'
                  alt='Default Thumbnail'
                  className='w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer'
                />
              )}
            </div>

            <br />
            {/* Product Details */}
            <div className='flex flex-col justify-center items-center text-center space-y-4'>
              <p className='text-2xl font-bold text-gray-900'>{data?.name}</p>

              <div className='flex flex-wrap justify-center gap-4'>
                <p className='text-lg font-medium'>
                  Quantity: {data?.quantity}
                </p>
                <p className='text-lg font-medium'>Price: ${data?.price}</p>
              </div>

              <p className='max-w-md text-gray-600 leading-relaxed'>
                {data?.description}
              </p>
            </div>
          </CardBody>

          {/* Footer Buttons */}
          <CardFooter className='flex justify-center gap-4'>
            <Button
              variant='solid'
              className='bg-blue-500 hover:bg-blue-600 text-white border-blue-500'
              onPress={() =>
                router.navigate({
                  to: '/admin/products/edit/$id',
                  params: { id },
                })
              }
            >
              Edit
            </Button>
            <Button
              variant='solid'
              className='bg-red-500 hover:bg-red-600 text-white border-red-500'
              onPress={() => console.log('Delete product')}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
