
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './componets/layout';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
