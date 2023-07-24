import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="app">
      <h1>Error Boundary Sample</h1>

      <ErrorBoundary>
        <Counter />
        <Counter />
      </ErrorBoundary>

      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>

      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
