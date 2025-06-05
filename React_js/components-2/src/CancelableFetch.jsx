// CancelableFetch.jsx
import React, { useEffect, useState } from 'react';

const CancelableFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5', {
      signal: controller.signal
    })
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Fetch failed:', err);
        }
      });

    return () => controller.abort(); // cancel on cleanup
  }, []);

  return (
    <ul>
      {data.map(comment => <li key={comment.id}>{comment.name}</li>)}
    </ul>
  );
};

export default CancelableFetch;
