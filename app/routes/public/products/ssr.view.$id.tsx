import { ErrorComponents } from '@/components/ErrorComponents'
import { NotFound } from '@/components/NotFound'
import { fetchProduct } from '@/hooks/products/useView'
import { Card, CardBody, Image } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'
import { Image as ImageAntd } from 'antd'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const Route = createFileRoute('/public/products/ssr/view/$id')({
  loader: ({ params: { id } }) => fetchProduct({ data: id }), // Pass `id` as `{ data: id }`
  errorComponent: ErrorComponents,
  component: RouteComponent,
  notFoundComponent: () => {
    return <NotFound>Not found</NotFound>
  },
})

function RouteComponent() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // ✅ Use SSR-fetched data directly
  const data = Route.useLoaderData()

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev < data.imageurl.length - 1 ? prev + 1 : prev,
    )
  }

  const handleBack = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <div>
      <Card shadow="lg" className="w-screen max-w-none mx-auto px-4 md:px-8">
        <CardBody className="p-4">
          <div className="flex flex-col md:flex-row w-full">
            {/* Main Image */}
            <div className="flex-1 flex flex-col justify-center items-center p-4 relative w-full">
              <ImageAntd
                src={
                  data.imageurl[selectedImageIndex] ||
                  'https://via.placeholder.com/400'
                }
                alt="Selected Product"
                className="w-full h-auto object-contain rounded-lg shadow-md"
              />

              {/* Navigation Buttons */}
              <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-2">
                <button
                  className={`p-2 bg-gray-500 text-white rounded-full ${selectedImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                  onClick={handleBack}
                  disabled={selectedImageIndex === 0}
                >
                  <FaArrowLeft size={20} />
                </button>
                <button
                  className={`p-2 bg-gray-500 text-white rounded-full ${selectedImageIndex === data.imageurl.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                  onClick={handleNext}
                  disabled={selectedImageIndex === data.imageurl.length - 1}
                >
                  <FaArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 md:w-1/4">
              {data.imageurl.map((url, index) => (
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
          <div className="mt-8 flex flex-col items-center text-center space-y-4">
            <p className="text-2xl font-bold text-gray-900">{data.name}</p>
            <p className="text-lg font-medium">Quantity: {data.quantity}</p>
            <p className="text-lg font-medium">Price: ${data.price}</p>
            <p className="max-w-lg text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
