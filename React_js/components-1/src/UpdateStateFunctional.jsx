import React, { useState } from 'react';

const UpdateStateFunctional = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default UpdateStateFunctional;
