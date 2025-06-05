import React, { useState } from 'react';

const Forminputstate = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forminputstate;
