import React, { useMemo, useState } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const factorial = useMemo(() => {
    const compute = (n) => {
      return n <= 0 ? 1 : n * compute(n - 1);
    };
    return compute(number);
  }, [number]);

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
      <p>Factorial: {factorial}</p>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle: {toggle.toString()}</button>
    </div>
  );
};

export default UseMemoExample;
