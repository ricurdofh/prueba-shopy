import React from 'react';
import FormComponent from './components/formComponent';
import ApiComponent from './components/apiComponent';
import logo from './star.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{marginTop: '20px'}}>
        <FormComponent />
      </div>
      <ApiComponent />
    </div>
  );
}

export default App;
