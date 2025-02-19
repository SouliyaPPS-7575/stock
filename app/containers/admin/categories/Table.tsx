import { useCategories } from '@/hooks/categories/useCategories';
import { Categories } from '@/model/categories';
import {
  Button,
  Table as HeroTable,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@heroui/react';
import React from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'ACTIONS', uid: 'actions' },
];

export default function Table() {
  const { categories, isLoading } = useCategories();

  const renderCell = (category: Categories, columnKey: React.Key) => {
    const cellValue = category[columnKey as keyof Categories];
    switch (columnKey) {
      case 'actions':
        return (
          <div className='flex gap-3'>
            <Tooltip content='Edit'>
              <button
                className='text-blue-500 text-lg hover:text-blue-700'
                aria-label='Edit'
              >
                <FaEdit />
              </button>
            </Tooltip>
            <Tooltip color='danger' content='Delete'>
              <button
                className='text-red-500 text-lg hover:text-red-700'
                aria-label='Delete'
              >
                <FaTrash />
              </button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  // Handler for the "Create" button
  const handleCreate = () => {
    console.log('Create new category');
    // Add logic to open a modal or navigate to a create page
  };

  return (
    <>
      {/* Wrapper div for positioning the button */}
      <div className='flex justify-end mb-2 mt-3'>
        {/* Create Button */}
        <Button
          onPress={handleCreate}
          className='bg-blue-500 hover:bg-blue-700 text-white'
        >
          <FaPlus />
          Create
        </Button>
      </div>

      {/* Table */}
      <HeroTable isStriped aria-label='Categories Table' isHeaderSticky>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          ))}
        </TableHeader>
        <TableBody isLoading={isLoading}>
          {categories.map((category) => (
            <TableRow key={category.id}>
              {columns.map((column) => (
                <TableCell key={column.uid}>
                  {renderCell(category as Categories, column.uid)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </HeroTable>
    </>
  );
}
