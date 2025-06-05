import React from 'react';

const SiblingA = ({ sendData }) => {
  return <button onClick={() => sendData('Data from Sibling A')}>Send</button>;
};

export default SiblingA;
