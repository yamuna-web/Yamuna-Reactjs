import React from 'react';
import DataFetcher from './DataFetcher';

const RenderPropsExample = () => {
  return (
    <DataFetcher
      render={data => (
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    />
  );
};

export default RenderPropsExample;

