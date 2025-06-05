import React, { useState } from 'react';

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);

  return <p>Counter: {counter}</p>;
};

export default UseStateHook;
