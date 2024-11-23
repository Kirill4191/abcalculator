import React, { useState } from 'react';
import './index.css';
import api from './api';
import StickyNavbar from './components/StickyNavbar';
import Button from './components/Button';
import GeneralContainer from './components/GeneralContainer';

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
        <StickyNavbar/>
        <h1 className="font-bold text-h4 font-sans">AB Test Calculator</h1>
        
        <GeneralContainer title="Choose a test">
        <p>Input to choose a test here</p>
        </GeneralContainer>

        <GeneralContainer title="Input parameters">
        <p>Input of params here</p>
        </GeneralContainer>

        <div className="api-section">
          <Button variant="primary" onClick={fetchSampleSize}>
            Calculate
          </Button>
          
          <GeneralContainer title="Result">
          
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {sampleSize !== null && <p>Sample Size: {sampleSize}</p>}
          
          </GeneralContainer>
        </div>

        <GeneralContainer title="Report">
        <p>Report here</p>
        </GeneralContainer>

      </div>
  );
}