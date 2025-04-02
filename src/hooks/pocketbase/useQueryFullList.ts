import pb, { fetchAllPocketbaseDocuments } from 'src/services/pocketbaseService';
import { queryClient } from 'src/services/queryClient';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useQueryFullList = <T extends Record<string, any>>(
  collection: string
) => {
  const { data, isLoading } = useQuery<T[]>({
    queryKey: [collection],
    queryFn: async () => fetchAllPocketbaseDocuments<T>(collection),
    enabled: true,
  });

  // Keep state updated with query data
  const [itemsState, setItemsState] = useState(data);

  // Update state only if data is different
  useEffect(() => {
    if (data !== itemsState) {
      setItemsState(data); // Update state only if data is different
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
  }, [collection]);

  return { data: itemsState, isLoading };
};
