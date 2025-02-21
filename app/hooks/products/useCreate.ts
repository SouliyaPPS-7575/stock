import { Products } from '@/model/products';
import { createPocketbaseDocument } from '@/services/pocketbaseService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useCloudinaryUpload } from '../useCloudinaryUpload';

export const useCreate = () => {
  const { cld, publicIds, uwConfig, imageUrls, setPublicIds, setImageUrls } =
    useCloudinaryUpload();

  // Mutation to add a new product document to Firestore
  const createProduct = useMutation({
    mutationFn: (data: Products) =>
      createPocketbaseDocument<Products>('products', data),
    onSuccess: () => {
      toast.success('Product created successfully!');
      history.back(); // Navigate back after success
    },
    onError: (error) => {
      toast.error(`Failed to create product: ${error}`);
    },
  });

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as Partial<Products>;

    // Check if image URLs are available, then assign them to formData
    if (!formData.imageurl && imageUrls.length > 0) {
      formData.imageurl = imageUrls; // Array of image URLs
    }

    createProduct.mutateAsync(formData as Products);
  };

  return {
    cld,
    uwConfig,
    publicIds,
    imageUrls,
    setPublicIds,
    setImageUrls,
    isPending: createProduct.isPending,
    handleSubmit,
  };
};
