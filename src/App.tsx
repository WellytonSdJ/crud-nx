import React, { useEffect, useState } from 'react'
import Home from '@pages/home';
import Dashboard from '@pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/header';
import { useThemeStore } from '@store/themeStore';

const App: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode)

  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'
  }, [isDarkMode])
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
    </Router>
  )
}

export default App