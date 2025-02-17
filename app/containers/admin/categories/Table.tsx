import {
  Table as HeroTable,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@heroui/react';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export interface Categories {
  id: string;
  name: string;
}

const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'ACTIONS', uid: 'actions' },
];

const categories: Categories[] = [
  { id: '1', name: 'Technology' },
  { id: '2', name: 'Health' },
  { id: '3', name: 'Finance' },
  { id: '4', name: 'Education' },
];

export default function Table() {
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

  return (
    <HeroTable isStriped aria-label='Categories Table'>
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.uid}>{column.name}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            {columns.map((column) => (
              <TableCell key={column.uid}>
                {renderCell(category, column.uid)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </HeroTable>
  );
}