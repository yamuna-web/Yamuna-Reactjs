import React from 'react';

const IfElseRender = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </div>
  );
};

export default IfElseRender;
