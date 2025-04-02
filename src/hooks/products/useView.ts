import { Products } from 'src/model/products';
import { useState } from 'react';
import { useQueryCollection } from '../pocketbase/useQueryCollection';
import { fetchPocketbaseDocument } from 'src/services/pocketbaseService';
import { createServerFn } from '@tanstack/react-start';

// ✅ Server Function
export const fetchProduct = createServerFn({ method: 'GET' })
  .validator((d: string) => d)
  .handler(async ({ data: id }) => {
    const data = await fetchPocketbaseDocument<Products>('products', id);
    return data;
  });

// ✅ Hook Using React Query Client Side Function
export const useView = (id: string) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { data, isLoading } = useQueryCollection<Products>('products', id);

  const handleNext = () => {
    if (data?.imageurl && selectedImageIndex < data.imageurl.length - 1) {
      setSelectedImageIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex((prev) => prev - 1);
    }
  };

  return {
    // Data
    data,
    isLoading,

    // States
    selectedImageIndex,

    // Functions
    setSelectedImageIndex,
    handleNext,
    handleBack,
  };
};
