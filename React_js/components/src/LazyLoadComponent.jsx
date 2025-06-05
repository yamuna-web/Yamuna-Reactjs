import React, { Suspense, lazy } from 'react';

const LazyChild = lazy(() => import('./LazyChild'));

const LazyLoadComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyChild />
    </Suspense>
  );
};

export default LazyLoadComponent;
