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
        <div className="relative min-h-screen">
        {/* Base Grid Layout */}
        <div className="fixed inset-0 mx-auto px-20 pointer-events-none">
                <div className="h-full max-w-[1440px] mx-auto">
                  <div className="grid grid-cols-12 gap-6 h-full">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="col-span-1 h-full bg-gray-100/10 border-x border-gray-200/20" />
                    ))}
                  </div>
                </div>
              </div>
        <StickyNavbar/>
        <div className="relative mx-auto max-w-[1440px] px-20">
          <h1 className="font-bold text-h4 font-sans text-center mt-3 mb-4">AB Test Calculator</h1>
          
          <GeneralContainer number = "1" title="Choose a test">
          <p className = "mt-3">Input to choose a test here</p>
          </GeneralContainer>

          <GeneralContainer number = "2" title="Input parameters">
          <p className = "mt-3">Input of params here</p>
          </GeneralContainer>

          <div className="api-section">
            <Button variant="primary" onClick={fetchSampleSize}>
              Calculate
            </Button>
          </div>
            
          <GeneralContainer number = "3"  title="Result">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {sampleSize !== null && <p>Sample Size: {sampleSize}</p>}
          </GeneralContainer>
          

          <GeneralContainer number = "4"  title="Report">
          <p className = "mt-3">Report here</p>
          </GeneralContainer>

      </div>
      </div>
      </div>
  );
}