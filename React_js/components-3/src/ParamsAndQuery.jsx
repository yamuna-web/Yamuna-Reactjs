// ParamsAndQuery.jsx
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const ParamsAndQuery = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const filter = searchParams.get('filter');

  return (
    <div>
      <h3>Route Parameter: {id}</h3>
      <h4>Query Parameter 'filter': {filter}</h4>
    </div>
  );
};

export default ParamsAndQuery;
