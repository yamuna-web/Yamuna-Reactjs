// useAuth.js (custom hook)
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  return { isAuth, setIsAuth, logout };
};
