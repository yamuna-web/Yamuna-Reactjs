import React, { useRef } from 'react';

const UseRefFocus = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default UseRefFocus;
