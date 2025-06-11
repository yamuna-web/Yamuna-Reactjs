import React, { useState, useMemo, useCallback } from 'react';
import MemoizedChild from './MemoizedChild'; 

const Usememo = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += number * Math.random();
    }
    return result.toFixed(2);
  }, [number]);

  const handleChildClick = useCallback(() => {
    alert('Child button clicked!');
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-2">React Performance Optimization</h2>

      <div className="mb-4">
        <label className="mr-2">Enter Number: </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          className="border px-2 py-1 rounded"
        />
      </div>

      <p className="mb-4">Expensive Result: {expensiveCalculation}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="p-2 bg-green-500 text-white rounded"
      >
        Increment Count: {count}
      </button>

      <MemoizedChild onClick={handleChildClick} />
    </div>
  );
};

export default Usememo;
