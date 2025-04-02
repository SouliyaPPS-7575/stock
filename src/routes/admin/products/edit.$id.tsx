import { useEdit } from 'src/hooks/products/useEdit'
import { useView } from 'src/hooks/products/useView'
import { category } from 'src/model/products'
import { Form } from '@heroui/form'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal'
import { Button, Input, Select, SelectItem } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/products/edit/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { isOpen, onOpenChange } = useDisclosure({
    defaultOpen: true,
    onClose: () => history.back(),
  })

  const { editProduct, handleSubmit } = useEdit(id)

  const { data } = useView(id);
  
  return (
    <div>
      <Modal
        isOpen={isOpen}
        scrollBehavior="inside"
        onOpenChange={onOpenChange}
        backdrop="opaque"
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <Form validationBehavior="native" onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Create Products
            </ModalHeader>
            <ModalBody>
              <Input
                defaultValue={data?.name}
                isRequired
                required
                errorMessage="Please enter product name"
                name="name"
                placeholder="Enter product name"
              />
              <Input
                defaultValue={data?.description}
                isRequired
                required
                errorMessage="Please enter product description"
                name="description"
                placeholder="Enter product description"
              />
              <Input
                defaultValue={data?.quantity}
                isRequired
                required
                errorMessage="Please enter product quantity"
                name="quantity"
                placeholder="Enter product quantity"
                type="number"
              />
              <Input
                defaultValue={data?.price}
                isRequired
                required
                errorMessage="Please enter product price"
                name="price"
                placeholder="Enter product price"
                type="number"
              />
              <Select
                defaultSelectedKeys={data?.category ? [data.category] : []}
                isRequired
                name="category"
                placeholder="Select category"
                items={category}
                aria-label="Select category"
              >
                {(cat) => <SelectItem>{cat.label}</SelectItem>}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onOpenChange}>
                Close
              </Button>
              <Button
                color="primary"
                type="submit"
                disabled={editProduct.isPending}
              >
                {editProduct.isPending ? 'Creating...' : 'Create'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Form>
      </Modal>
    </div>
  )
}
