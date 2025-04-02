import { Categories } from 'src/model/categories';
import { createPocketbaseDocument } from 'src/services/pocketbaseService';
import { useMutation } from '@tanstack/react-query';

export const useCreate = () => {
  const create = useMutation({
    mutationFn: (data: Categories) =>
      createPocketbaseDocument<Categories>('categories', data),
  });

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    create.mutateAsync(e.currentTarget);
  };

  return {
    handleSubmit,
  };
};
