// Login.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');

  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    // Fake login process
    localStorage.setItem('token', 'fake-token');
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={handleLogin} disabled={!username}>Login</button>
    </div>
  );
};

export default Login;
