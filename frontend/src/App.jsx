import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "sonner"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      <Toaster position="top-right" richColors />

      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/login"
          element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
