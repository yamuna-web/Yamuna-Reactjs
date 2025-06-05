// FetchOnMount.jsx
import React, { useEffect, useState } from 'react';

const FetchOnMount = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default FetchOnMount;
