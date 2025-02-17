import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    return redirect({
      to: '/public/products',
    });
  },
  component: Home,
});

function Home() {
  return <></>;
}
