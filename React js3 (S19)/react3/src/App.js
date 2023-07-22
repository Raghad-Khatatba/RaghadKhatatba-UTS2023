import React from 'react';
import './App.css';
import NameFormControlled from './NameFormControlled';
import NameFormUncontrolled from './NameFormUncontrolled';


function App() {
  return (
    <div className="app">
      <div className="uncontrolled-form">
        <h3>Uncontrolled Component:</h3>
        <NameFormUncontrolled/>
      </div>
      <div className="controlled-form">
        <h3>Controlled Component:</h3>
        <NameFormControlled />
      </div>
    </div>
  );
}

export default App;
