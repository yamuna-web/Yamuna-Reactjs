import React, { useState } from "react";
import "./App.css";
import Products from "./Products"; 

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const appId = 'your_actual_app_id'; 
  const appKey = 'your_actual_app_key'; 
  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    setResults([]); 
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.edamam.com/search?q=${encodeURIComponent(search)}&app_id=${appId}&app_key=${appKey}&from=0&to=9`
      );

      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      // Check if there are results
      if (data.hits.length === 0) {
        setError('No recipes found for your search.');
      } else {
        setResults(data.hits); // Store fetched data in results state
      }
    } catch (err) {
      console.error('API Error:', err);
      setError('Failed to fetch recipes. Please check your API keys or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <center>
        <h2>🍽️ Food Recipe App</h2>

        {/* Search Form */}
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for recipes..."
            required
          />
          <br />
          <input type="submit" value="Search" />
        </form>

        {/* Loading & Error Handling */}
        {loading && <p>Loading recipes...</p>}

        {error && (
          <p style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>
            {error}
          </p>
        )}

        
        <div>
          {/* Only render Products if there are results */}
          {results.length > 0 && <Products data={results} />}
        </div>
      </center>
    </div>
  );
}

export default App;