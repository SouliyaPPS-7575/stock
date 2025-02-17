import { Products } from "@/model/products";
import { DEPLOY_URL } from "@/routes/api/url";
import { fetchPocketbaseDocument } from "@/services/pocketbaseService";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from 'redaxios';

export const viewProductQueryOptions = (id: string) =>
     queryOptions({
          queryKey: ['product', id],
          queryFn: async () => {
               const response = await axios.get<Products>(
                    `${DEPLOY_URL}/api/products/view/${id}`
               );
               const product = response.data;

               // ✅ Ensure all image URLs are absolute before SSR renders
               product.imageurl = product.imageurl.map((url) =>
                    url.startsWith('http') ? url : `${DEPLOY_URL}${url}`
               );

               return product;
          },
     });

export const useView = (id: string) => {
     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

     const { data } = useQuery({
          queryKey: ['product', id],
          queryFn: () => fetchPocketbaseDocument<Products>('products', id),
          enabled: !!id, // Only fetch if ID is available
     });

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
          // data
          data,

          // State
          setSelectedImageIndex,
          selectedImageIndex,

          // Function
          handleNext,
          handleBack,
     }
}