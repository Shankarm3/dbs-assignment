import React from 'react';
import DataStore from './utils/DataStore';
import HowItWorks from './components/HowItWorks/HowItWorks';
import './css/main.css';

const App = () => {
  const data = DataStore.INSURANCE_DATA;
  return (
    <div className="container">
      <HowItWorks data={data}/>
    </div>
  )

}

export default App;

