import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (!isNaN(value) && value !== '') {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    } else {
      setFahrenheit('');
    }
  };
  

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (!isNaN(value) && value !== '') {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div>
      <div className="input-group">
        <label htmlFor="celsius">Celsius (°C):</label>
        <input
          type="text"
          id="celsius"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
        />
      </div>

      <div className="input-group">
        <label htmlFor="fahrenheit">Fahrenheit (°F):</label>
        <input
          type="text"
          id="fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
