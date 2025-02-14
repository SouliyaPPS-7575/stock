import CloudinaryUploadWidget from '@/components/CloudinaryUploadWidget';
import ImagePreview from '@/components/ImagePreview';
import { useCreate } from '@/hooks/products/useCreate';
import { category } from '@/model/products';
import { Form } from '@heroui/form';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal';
import { Button, Input, Select, SelectItem } from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';
import { JSX } from 'react';

// Define the route
export const Route = createFileRoute('/products/create')({
  component: RouteComponent,
});

// Component
function RouteComponent(): JSX.Element {
  const { isOpen, onOpenChange } = useDisclosure({
    defaultOpen: true,
    onClose: () => history.back(),
  });

  const {
    // Cloudinary Upload
    cld,
    uwConfig,
    publicIds,
    setPublicIds,
    setImageUrls,

    // Form
    isPending,
    handleSubmit,
  } = useCreate();

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
            <ModalBody>
              <Input
                isRequired
                required
                errorMessage='Please enter product name'
                name='name'
                placeholder='Enter product name'
              />
              <Input
                isRequired
                required
                errorMessage='Please enter product description'
                name='description'
                placeholder='Enter product description'
              />
              <Input
                isRequired
                required
                errorMessage='Please enter product quantity'
                name='quantity'
                placeholder='Enter product quantity'
                type='number'
              />
              <Input
                isRequired
                required
                errorMessage='Please enter product price'
                name='price'
                placeholder='Enter product price'
                type='number'
              />
              <Select
                isRequired
                required
                errorMessage='Please select a category'
                name='category'
                placeholder='Select category'
                items={category}
                aria-label='Select category'
              >
                {(category) => <SelectItem>{category.label}</SelectItem>}
              </Select>
              <CloudinaryUploadWidget
                uwConfig={uwConfig}
                setPublicIds={setPublicIds}
                setImageUrls={setImageUrls}
              />
              {publicIds.length > 0 && (
                <div className='preview-images'>
                  {publicIds.map((id) => (
                    <ImagePreview key={id} publicId={id} cld={cld} />
                  ))}
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onOpenChange}>
                Close
              </Button>
              <Button color='primary' type='submit' disabled={isPending}>
                {isPending ? 'Creating...' : 'Create'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Form>
      </Modal>
    </div>
  );
}

export default RouteComponent;
