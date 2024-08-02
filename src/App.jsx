
import React from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <div className="page">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );    
}

export default App
