import React, { useState } from 'react';

const FormInput = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormInput;
