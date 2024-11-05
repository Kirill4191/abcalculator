import React, { useState } from 'react';
import './App.css';
import api from './api';


export default function App() {
  
  const [sampleSize, setSampleSize] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const fetchSampleSize = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/calculator/sample-size');
      setSampleSize(response.data['sample-size']);
    } catch (err) {
      console.error('Error fetching sample size:', err);
      setError('Failed to fetch sample size.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>AB Test Calculator</h1>

      

      <div className="api-section">
        <button type="button" onClick={fetchSampleSize}>
          Get Sample Size
        </button>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {sampleSize !== null && <p>Sample Size: {sampleSize}</p>}
      </div>
    </div>
  );
};