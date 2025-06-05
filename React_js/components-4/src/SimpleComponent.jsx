import React from 'react';
import withLogger from './withLogger';

const SimpleComponent = () => {
  return <p>Hello from SimpleComponent</p>;
};

export default withLogger(SimpleComponent);
