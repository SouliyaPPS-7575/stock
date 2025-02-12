import Table from '@/containers/categories/Table';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/categories/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Table />
    </>
  );
}
