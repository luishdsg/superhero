import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/design/organism/home';
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
  </Router>
); 

reportWebVitals();
