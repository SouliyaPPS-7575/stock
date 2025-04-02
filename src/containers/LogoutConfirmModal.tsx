import { useLogout } from 'src/hooks/useLogout';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/modal';
import { Button, Link } from '@heroui/react';

export const LogoutConfirmModal = () => {
  const {
    // Return the logout function
    handleLogout,

    // State and functions
    openModalLogout,
    closeModalLogout,
    isOpen,
  } = useLogout();

  return (
    <>
      {/* Logout Open Modal */}
      <Link
        isExternal
        title='Logout'
        className='flex items-center gap-2 cursor-pointer'
        onPress={openModalLogout}
      >
        <span className='font-bold text-red-500'>Logout</span>
      </Link>

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={closeModalLogout}>
        <ModalContent>
          <ModalHeader>Confirm Logout</ModalHeader>
          <ModalBody>Are you sure you want to log out?</ModalBody>
          <ModalFooter>
            <Button variant='ghost' onPress={closeModalLogout}>
              Cancel
            </Button>
            <Button color='danger' onPress={handleLogout}>
              Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
