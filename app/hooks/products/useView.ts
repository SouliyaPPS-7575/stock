import { Products } from "@/model/products";
import { DEPLOY_URL } from "@/routes/api/url";
import { fetchPocketbaseDocument } from "@/services/pocketbaseService";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from 'redaxios';

export const ViewProductQueryOptions = (id: string) =>
     queryOptions({
          queryKey: ['product', id],
          queryFn: () =>
               axios
                    .get<Products>('http://localhost:3000' + '/api/products/view/' + id)
                    .then((r) => r.data)
                    .catch(() => {
                         throw new Error('Failed to fetch user')
                    }),
          enabled: !!id
     })


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