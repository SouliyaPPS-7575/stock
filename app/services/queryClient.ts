import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

// Modify Client to initialize queryClient
const createQueryClient = () => {
     return new QueryClient({
          defaultOptions: {
               queries: {
                    retry: 1, // Retry failed queries 1 time
                    staleTime: 5000, // Keep the data fresh for 5 seconds (adjust based on use case)
                    refetchOnWindowFocus: true, // Refetch data when window gets focus
                    throwOnError(error) {
                         if (error instanceof Error) {
                              console.log('=> Mutation error:', error);
                              return false;
                         }
                         return true;
                    },
               },
               mutations: {
                    onSuccess: (data) => {
                         toast.success('Successfully!', {
                              position: 'top-right',
                              autoClose: 2000,
                         });

                         console.log('=> Mutation success:', data);
                    },
                    onError: (error) => {
                         if (error instanceof Error) {
                              toast.error('Failed, Please try again later.', {
                                   position: 'top-right',
                                   autoClose: 2000,
                              });
                              console.log('=> Mutation error:', error);
                         }
                    },

               },
          },
     });
};

// Initialize query client with global error handler
export const queryClient = createQueryClient();