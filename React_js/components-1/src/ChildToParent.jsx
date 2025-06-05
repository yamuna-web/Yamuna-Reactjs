import React, { useState } from 'react';

const ChildToParent = () => {
  const [message, setMessage] = useState('');

  const handleData = (childData) => {
    setMessage(childData);
  };

  return (
    <div>
      <Child sendData={handleData} />
      <p>Message from child: {message}</p>
    </div>
  );
};

const Child = ({ sendData }) => {
  return (
    <button onClick={() => sendData('Hello Parent!')}>Send to Parent</button>
  );
};

export default ChildToParent;
