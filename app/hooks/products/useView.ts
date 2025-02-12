import { Products } from "@/model/products";
import { fetchPocketbaseDocument } from "@/services/pocketbaseService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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
          handleBack
     }
}