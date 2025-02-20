import pb from '@/services/pocketbaseService'; // Import PocketBase instance
import { Button, Form, Input } from '@heroui/react';
import { useMutation } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';

type LoginForm = {
  email: string;
  password: string;
};

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [action, setAction] = useState<string | null>(null);

  // TanStack Query mutation for login
  const loginMutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      return await pb
        .collection('users')
        .authWithPassword(data.email.trim(), data.password);
    },
    onSuccess: (data) => {
      // Store the token in localStorage
      const token = data.token;
      if (token) {
        pb.authStore.save(token); // Save token in PocketBase's auth store
      }
      // Redirect upon successful login
      navigate({ to: '/admin/products' });
      toast.success('Login successful!');
      setAction('Login successful');
    },
    onError: (error) => {
      toast.error('Login failed. Please check your credentials.');
      console.error('Login Error:', error);
      setAction('Login failed');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as LoginForm;
    loginMutation.mutate(formData);
  };

  return (
    <section className='flex flex-col items-center justify-center gap-1 py-1 md:py-0'>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <Form
          className='w-full max-w-sm flex flex-col gap-4'
          validationBehavior='native'
          onReset={() => setAction('reset')}
          onSubmit={handleSubmit}
        >
          <h2 className='text-center text-2xl font-bold'>Login</h2>

          {/* Email Field */}
          <Input
            isRequired
            errorMessage='Please enter a valid email'
            label='Email'
            labelPlacement='outside'
            name='email'
            placeholder='Enter your email'
            type='email'
          />

          {/* Password Field */}
          <Input
            isRequired
            errorMessage='Please enter your password'
            label='Password'
            labelPlacement='outside'
            name='password'
            placeholder='Enter your password'
            type='password'
          />

          {/* Buttons */}
          <div className='flex gap-2'>
            <Button
              color='primary'
              type='submit'
              isLoading={loginMutation.isPending}
            >
              {loginMutation.isPending ? 'Logging in...' : 'Login'}
            </Button>
            <Button type='reset' variant='flat'>
              Reset
            </Button>
          </div>

          {/* Action message */}
          {action && (
            <div className='text-small text-default-500'>
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
      </div>
    </section>
  );
}
