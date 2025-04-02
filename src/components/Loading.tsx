import { Spinner } from '@heroui/react';

function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Spinner />
    </div>
  );
}

export default Loading;
