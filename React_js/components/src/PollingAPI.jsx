// PollingAPI.jsx
import React, { useEffect, useState } from 'react';

const PollingAPI = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
        .then(res => res.json())
        .then(data => setTime(data.datetime));
    }, 5000);

    
    return () => clearInterval(interval);
  }, []);

  return <p>Time: {time}</p>;
};

export default PollingAPI;
