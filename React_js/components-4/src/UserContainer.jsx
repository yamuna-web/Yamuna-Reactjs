import React, { useEffect, useState } from 'react';
import UserList from './UserList';

const UserContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate API
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]);
    }, 1000);
  }, []);

  return <UserList users={users} />;
};

export default UserContainer;
