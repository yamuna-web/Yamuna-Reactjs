import React, { useEffect, useState } from 'react';

const DataFetcher = ({ render }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(['Item A', 'Item B', 'Item C']);
    }, 1000);
  }, []);

  return render(data);
};

export default DataFetcher;

