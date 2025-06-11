import React, { useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';

const ThrottledScroll = () => {
  const logScroll = () => {
    console.log('Scroll Y:', window.scrollY, 'at', new Date().toLocaleTimeString());
  };

  const throttledLogScroll = useCallback(
    throttle(logScroll, 500, { leading: true, trailing: true }),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledLogScroll);
    return () => {
      throttledLogScroll.cancel();
      window.removeEventListener('scroll', throttledLogScroll);
    };
  }, [throttledLogScroll]);

  return (
    <div style={{ height: '200vh', padding: '2rem' }}>
      <h2>Throttled Scroll Logger</h2>
      <p>Open the console and scroll—logs appear max once every 0.5 s.</p>
    </div>
  );
};

export default ThrottledScroll;
