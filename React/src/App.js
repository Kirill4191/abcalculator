import React, { useState } from 'react';
import './index.css';
import api from './api';
import StickyNavbar from './layouts/StickyNavbar';
import Button from './components/Button';
import GeneralContainer from './components/GeneralContainer';
import Layout from './layouts/Layout';
import { Label } from "./components/ui/Label.tsx";
import { RadioGroup, RadioGroupItem } from "./components/ui/RadioGroup.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/Select.tsx";


export default function App() {
  const [sampleSize, setSampleSize] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // States for test selection
  const [testType, setTestType] = useState("sample-size");
  const [testFamily, setTestFamily] = useState("t-tests");
  const [statisticalTest, setStatisticalTest] = useState("");
 
  // Test options data
  const testFamilyOptions = [
    { value: "t-tests", label: "t tests" },
    { value: "z-tests", label: "z tests" },
  ];

  const statisticalTestOptions = {
   "t-tests": [
     { 
       value: "two-independent-means", 
       label: "Means: diff between two independent means (two groups)" 
     },
     // Add more t-test options
   ],
   "z-tests": [
     // Add z-test options
   ]
  };

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

      {/* Header */}
      <div className="col-span-12 text-center">
        <h1 className="font-bold text-h4 font-sans mt-3 mb-4">AB Calculator</h1>
      </div>
      

        {/* Section 1 - Choose a test */}
        <div className="col-start-1 justify-self-end self-center">
          <p className="text-h3 pt-1  ">1</p>
        </div>
        <div className="col-span-10">
          <GeneralContainer title="Choose a test">
          {/* Radio buttons */}
            <RadioGroup value={testType} onValueChange={setTestType} className="grid grid-cols-12 gap-6 mb-4">
              <div className="flex items-center space-x-2 col-start-1 col-span-2">
                <RadioGroupItem value="sample-size" id="sample-size" />
                <Label htmlFor="sample-size" className="!text-p-md">Sample size</Label>
              </div>
              <div className="flex items-center space-x-2 col-start-3 col-span-2">
                <RadioGroupItem value="test-result" id="test-result" />
                <Label htmlFor="test-result" className="!text-p-md">Test result</Label>
              </div>
            </RadioGroup>


          {/* Select menus */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-start-1 col-span-2 space-y-1">
              <Label className="!text-p-md font-semibold">Test family</Label>
              <Select 
                value={testFamily} 
                onValueChange={(value) => {
                  setTestFamily(value);
                  setStatisticalTest(""); // Reset statistical test when family changes
                }}
              >
                <SelectTrigger className="w-full !text-p-md border-black">
                  <SelectValue placeholder="Select test family" />
                </SelectTrigger>
                <SelectContent>
                  {testFamilyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-start-3 col-span-8 space-y-1">
              <Label className="!text-p-md font-semibold">Statistical test</Label>
              <Select 
                value={statisticalTest} 
                onValueChange={setStatisticalTest}
                disabled={!testFamily}
              >
                <SelectTrigger className="w-full !text-p-md border-black">
                  <SelectValue placeholder="Select statistical test" />
                </SelectTrigger>
                <SelectContent>
                  {testFamily && statisticalTestOptions[testFamily]?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
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
          {sampleSize !== null && (
            <div className="flex flex-col items-center gap-2">
              <p className="text-p-lg font-bold">Required Sample Size:</p>
              <p className="text-h5 font-semibold text-blue-800">{Number(sampleSize).toLocaleString('en-US')}</p>
            </div>
          )}
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


// Container 1 w/ selection controls - manage w/ state
// Container 2 w/ input fields - conditional rendering w/ shadcn form