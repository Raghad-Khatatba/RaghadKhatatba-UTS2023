import React, { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
import * as math from 'mathjs';

function App() {
  const [result, setResult] = useState('');
  
  const handleClick = (buttonName) => {
    try {
      if (buttonName === '=') {
        setResult((prevResult) => {
          const newResult = math.evaluate(prevResult); // Use mathjs.evaluate to safely evaluate the expression
          return newResult.toString();
        });
      } else if (buttonName === 'AC') {
        setResult('');
      } else if (buttonName === '+/-') {
        setResult((prevResult) => (prevResult[0] === '-' ? prevResult.slice(1) : '-' + prevResult));
      } else {
        setResult((prevResult) => prevResult + buttonName);
      }
    } catch (error) {
      setResult('Error');
    }
  };  

  return (
    <div className="app">
      <Display value={result} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
