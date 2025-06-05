import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Parent = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <nav>
        <Link to="child1">Child 1</Link> | <Link to="child2">Child 2</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Parent;