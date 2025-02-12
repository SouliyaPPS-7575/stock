import { Products } from "@/model/products";
import { updatePocketbaseDocument } from "@/services/pocketbaseService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useEdit = (id: string) => {
     const editProduct = useMutation({
          mutationFn: (data: Products) =>
               updatePocketbaseDocument<Products>('products', id, data),
          onSuccess: () => {
               toast.success('Product created successfully!', {
                    position: 'top-right',
                    autoClose: 2000,
               });
               history.back(); // Navigate back after success
          },
          onError: (error) => {
               toast.error(`Failed to create product: ${error}`, {
                    position: 'top-right',
                    autoClose: 2000,
               });
          },
     });

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
          e.preventDefault();
     }

     return {
          editProduct,
          handleSubmit
     }
}