import React, { useEffect } from 'react';

const UseEffectUnmount = () => {
  useEffect(() => {
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []);

  return <p>I will cleanup on unmount (check console)</p>;
};

export default UseEffectUnmount;
