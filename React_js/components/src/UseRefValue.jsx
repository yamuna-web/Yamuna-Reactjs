import React, { useRef, useState } from 'react';

const UseRefValue = () => {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1;
    alert(`Current count (no re-render): ${countRef.current}`);
  };

  return (
    <div>
      <button onClick={increment}>Increment Ref Count</button>
      <button onClick={() => setRenderCount((r) => r + 1)}>Force Re-render</button>
    </div>
  );
};

export default UseRefValue;
