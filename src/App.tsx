import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App({ ssr = false }: { ssr?: boolean }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ssr ? 'SSR' : 'CLIENT'}</p>
          <button onClick={increment}>Increment</button>
          <p>{count}</p>
        </header>
      </div>
  );
}

export default App;
