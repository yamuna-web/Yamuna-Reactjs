import React, { useState, useEffect } from 'react';

const DebounceInput = () => {
  const [text, setText] = useState('');
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(text), 1000);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here" />
      <p>Debounced Value: {debounced}</p>
    </div>
  );
};
export default DebounceInput;
