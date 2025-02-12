import { useEffect, useRef } from 'react';

export function useInfiniteScroll({
     hasNextPage,
     isFetchingNextPage,
     fetchNextPage,
}: {
     hasNextPage: boolean;
     isFetchingNextPage: boolean;
     fetchNextPage: () => void;
}) {
     const observerRef = useRef<IntersectionObserver | null>(null);
     const loadMoreRef = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          if (!hasNextPage || isFetchingNextPage) return;

          const handleIntersect: IntersectionObserverCallback = (entries) => {
               if (entries[0].isIntersecting) {
                    fetchNextPage();
               }
          };

          if (loadMoreRef.current) {
               observerRef.current = new IntersectionObserver(handleIntersect);
               observerRef.current.observe(loadMoreRef.current);
          }

          return () => {
               if (observerRef.current) {
                    observerRef.current.disconnect();
               }
          };
     }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

     return loadMoreRef;
}