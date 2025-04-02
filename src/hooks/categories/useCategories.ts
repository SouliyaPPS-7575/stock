import { Categories } from 'src/model/categories';
import { useQueryFullList } from '../pocketbase/useQueryFullList';

export const useCategories = () => {
  const { data, isLoading } = useQueryFullList<Categories>('categories');

  return {
    categories: data || [],
    isLoading,
  };
};
