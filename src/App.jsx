import React, { useState } from 'react';
import Home from './Pages/Home';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
            <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
          </div>
  );
}

export default App;