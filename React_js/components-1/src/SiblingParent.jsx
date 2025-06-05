import React, { useState } from 'react';
import SiblingA from './SiblingA';
import SiblingB from './SiblingB';

const SiblingParent = () => {
  const [data, setData] = useState('');

  return (
    <div>
      <SiblingA sendData={setData} />
      <SiblingB receivedData={data} />
    </div>
  );
};

export default SiblingParent;
