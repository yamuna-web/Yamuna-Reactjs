import React from 'react';

const Child = React.memo(({ value }) => {
  console.log('Child rendered');
  return <p>Value: {value}</p>;
});

const MemoComponent = () => {
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState('React');

  return (
    <div>
      <Child value={value} />
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};

export default MemoComponent;
