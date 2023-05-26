import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './componets/layout';
import Learn from './pages/learn/learn';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
