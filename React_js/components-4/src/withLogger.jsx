import React, { useEffect } from 'react';

const withLogger = WrappedComponent => {
  return props => {
    useEffect(() => {
      console.log('Component Mounted:', WrappedComponent.name);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
