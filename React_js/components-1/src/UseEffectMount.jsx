import React, { useEffect } from 'react';

const UseEffectMount = () => {
  useEffect(() => {
    console.log('Mounted!');
  }, []);

  return <p>Mounted (check console)</p>;
};

export default UseEffectMount;
