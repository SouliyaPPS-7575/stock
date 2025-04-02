import pb from 'src/services/pocketbaseService';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { RecordModel } from 'pocketbase';
import { useEffect, useMemo, useState } from 'react';
import { useInfiniteScroll } from '../useInfiniteScroll';

type FetchOptions = {
  collection: string;
  pageSize?: number;
  sort?: string;
};

export const useInfiniteCollection = <T extends Record<string, any>>({
  collection,
  pageSize = 12,
  sort = 'created',
}: FetchOptions) => {
  const queryClient = useQueryClient(); // React Query client

  // Function to fetch data
  const fetchCollection: any = async ({ pageParam = 1 }) => {
    const response = await pb
      .collection(collection)
      .getList(pageParam, pageSize, { sort });
    return response;
  };

  // Infinite Query for pagination
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery<T | RecordModel>({
      queryKey: [collection],
      queryFn: fetchCollection,
      getNextPageParam: (lastPage) =>
        lastPage?.page < lastPage?.totalPages ? lastPage.page + 1 : undefined,
      staleTime: 1,
      initialPageParam: 1,
    });

  // Flatten paginated data into one array
  const items = useMemo(
    () => data?.pages.flatMap((page) => page.items) ?? [],
    [data]
  );

  // Keep state updated with query data
  const [itemsState, setItemsState] = useState<T[]>(items);

  // Update state only if data is different
  useEffect(() => {
    if (items !== itemsState) {
      setItemsState(items); // Update state only if data is different
    }
  }, [data, itemsState]);

  // Setup real-time listener
  useEffect(() => {
    let isMounted = true;

    const subscribe = async () => {
      try {
        await pb.collection(collection).subscribe('*', (e) => {
          if (!isMounted) return;

          console.log('Realtime event:', e.action, e.record);

          // Instead of modifying state directly, invalidate query
          queryClient.invalidateQueries({
            queryKey: [collection],
          });
        });
      } catch (error) {
        console.error('Realtime subscription failed:', error);
      }
    };

    subscribe();

    return () => {
      isMounted = false;
      pb.collection(collection).unsubscribe();
    };
  }, [collection, queryClient]);

  // Infinite scroll trigger
  const loadMoreRef = useInfiniteScroll({
    hasNextPage: !!hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  return {
    items: itemsState,
    loadMoreRef,
    isLoading,
    isFetchingNextPage,
  };
};
