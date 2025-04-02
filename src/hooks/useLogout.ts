import { useNavigate } from '@tanstack/react-router';
import pb from 'src/services/pocketbaseService';
import { useState } from 'react';

export const useLogout = () => {
     const navigate = useNavigate(); // Get navigation function from TanStack Router
     const [isOpen, setIsOpen] = useState(false);

     const openModalLogout = () => setIsOpen(true);
     const closeModalLogout = () => setIsOpen(false);

     const logout = () => {
          pb.authStore.clear(); // Clear PocketBase authentication
          navigate({ to: '/login' }); // Redirect user to login page
     };

     const handleLogout = () => {
          logout(); // Call the logout function
          closeModalLogout();
     };

     return {
          // Return the logout function
          logout,
          handleLogout,

          // State and functions
          openModalLogout,
          closeModalLogout,
          isOpen
      };
};