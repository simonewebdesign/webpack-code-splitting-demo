import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import lodash from 'lodash';

const printStuff = () => {
  return lodash.join(['a', 'b', 'c'], '~');
}

function App() {
  const [string, setString] = useState('String not set.');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ e => setString(printStuff()) }>Set the string!</button>
        <p>{string}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
