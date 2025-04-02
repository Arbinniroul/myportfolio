import React, { useState } from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
        <Routes>
      <Route path="/" element={
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      } />
       <Route path="/login" element={
        <Login darkMode={darkMode} setDarkMode={setDarkMode} />
      } />
    </Routes>
          </div>
  );
}

export default App;