import React, { useState, useCallback } from 'react';

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert(`Clicked! Count is ${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={handleClick}>Show Count</button>
    </div>
  );
};

export default UseCallbackExample;
