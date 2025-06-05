import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosInterceptors = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Create Axios instance
    const api = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/',
    });

    // Request Interceptor
    api.interceptors.request.use(
      (config) => {
        config.headers['Authorization'] = 'Bearer fake-token-123';
        console.log('Request Interceptor:', config);
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('Global Error Handler:', error.message);
        setError('Failed to fetch data.');
        return Promise.reject(error);
      }
    );

    // Fetch data
    api.get('/posts?_limit=5')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));

  }, []);

  return (
    <div>
      <h2>Axios with Interceptors</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosInterceptors;
