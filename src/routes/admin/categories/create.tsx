import { useCreate } from 'src/hooks/categories/useCreate';
import {
  Form,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/categories/create')({
  component: RouteComponent,
});

function RouteComponent() {
  const { isOpen, onOpenChange } = useDisclosure({
    defaultOpen: true,
    onClose: () => history.back(),
  });

  const { handleSubmit } = useCreate();

  return (
    <div>
      <Modal
        isOpen={isOpen}
        scrollBehavior='inside'
        onOpenChange={onOpenChange}
        backdrop='opaque'
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <Form validationBehavior='native' onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader className='flex flex-col gap-1'>
              Create Products
            </ModalHeader>
          </ModalContent>
        </Form>
      </Modal>
    </div>
  );
}
