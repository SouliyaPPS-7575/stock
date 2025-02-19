import { Products } from '@/model/products';
import { DEPLOY_URL } from '@/routes/api/url';
import { queryOptions } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'redaxios';
import { useQueryCollection } from '../pocketbase/useQueryCollection';

// ✅ Query Function ssr
export const viewProductQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await axios.get(`${DEPLOY_URL}/api/products/view/${id}`);
      const product = response.data as Products;

      product.imageurl = Array.isArray(product.imageurl)
        ? product.imageurl.map((url) =>
            url.startsWith('http') ? url : `${DEPLOY_URL}${url}`
          )
        : [];

      return product;
    },
  });

// ✅ Hook Using React Query
export const useView = (id: string) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // SSR Data
  // const { data } = useQuery(viewProductQueryOptions(id));

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
