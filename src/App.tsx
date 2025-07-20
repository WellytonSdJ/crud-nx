import React from 'react'
import Home from '@pages/home';
import Dashboard from '@pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
      </Router>
  )
}

export default App