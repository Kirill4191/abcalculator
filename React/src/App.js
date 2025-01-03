import React, { useState } from 'react';
import './index.css';
import api from './api';
import StickyNavbar from './layouts/StickyNavbar';
import Button from './components/Button';
import GeneralContainer from './components/GeneralContainer';
import Layout from './layouts/Layout';
import { Label } from "./components/ui/Label.tsx";
import { RadioGroup, RadioGroupItem } from "./components/ui/RadioGroup.tsx";


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
    <div className="App bg-[#F4F7FA]">
    <StickyNavbar/>
    <Layout>
      <div className="col-span-12 text-center">
        <h1 className="font-bold text-h4 font-sans mt-3 mb-4">AB Calculator</h1>
      </div>
      
        <div className="col-start-1 justify-self-end self-center">
          <p className="text-h3 pt-1  ">1</p>
        </div>
        <div className="col-span-10">
          <GeneralContainer title="Choose a test">

          <RadioGroup defaultValue="option-one" orientation="horizontal" className="flex space-x-4 mb-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one" className="!text-p-md">Sample size</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two" className="!text-p-md">Test result</Label>
            </div>
          </RadioGroup>

          <p>dfsfdfd</p>


          
          </GeneralContainer>
        </div>

      <div className="col-start-1 justify-self-end self-center">
        <p className="text-h3 pt-1">2</p>
      </div>
      <div className="col-start-2 col-span-10">
        <GeneralContainer title="Input parameters">
          <p className="">Input of params here</p>
        </GeneralContainer>
      </div>

      
      {/* Adjusted button alignment */}
      <div className="col-start-2 col-span-10 flex gap-6">
              <Button variant="primary" onClick={fetchSampleSize}>
                Calculate
              </Button>
              <Button variant="secondary" onClick={()=> setSampleSize(null)}>
              Clear
              </Button>
      </div>
      
      <div className="col-start-1 justify-self-end self-center">
        <p className="text-h3 pt-1">3</p>
      </div>       
      <div className="col-start-2 col-span-10">
        <GeneralContainer title="Result">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {sampleSize !== null && <p>Required Sample Size: {sampleSize}</p>}
        </GeneralContainer>
      </div>

      <div className="col-start-1 justify-self-end self-center">
        <p className="text-h3 pt-1">4</p>
      </div>
      <div className="col-start-2 col-span-10">
        <GeneralContainer title="Report">
          <p className="">Report here</p>
        </GeneralContainer>
      </div>
    </Layout>
  </div>
  );
}