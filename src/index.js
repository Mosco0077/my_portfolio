import React from 'react';
import './styles.css'; // Import your styles
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter> */}
    
    <App />
  </React.StrictMode>
);

