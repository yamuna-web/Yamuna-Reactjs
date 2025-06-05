import React from 'react';
import useCounter from './useCounter';

const CounterComponent = () => {
  const { count, increment, decrement } = useCounter(5);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterComponent;
