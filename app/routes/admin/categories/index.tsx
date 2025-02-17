import Table from '@/containers/admin/categories/Table';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/categories/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Table />
    </>
  );
}
