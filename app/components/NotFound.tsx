import { Link } from '@tanstack/react-router';

export function NotFound({ children }: { children?: any }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center space-y-4 p-6 bg-gray-100 dark:bg-gray-900'>
      <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
        Page Not Found
      </h1>
      <p className='text-gray-600 dark:text-gray-400'>
        {children || 'The page you are looking for does not exist.'}
      </p>
      <div className='flex gap-4'>
        <button
          onClick={() => window.history.back()}
          className='bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg uppercase font-bold text-sm transition'
        >
          Go Back
        </button>
        <Link
          to='/'
          className='bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg uppercase font-bold text-sm transition'
        >
          Start Over
        </Link>
      </div>
    </div>
  );
}
