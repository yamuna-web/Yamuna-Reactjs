import React, { useEffect, useState } from 'react';

const UseEffectUpdate = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('Updated!');
  }, [value]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type to trigger update"
    />
  );
};

export default UseEffectUpdate;
