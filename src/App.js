import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Logika untuk mendapatkan data pengguna berdasarkan token
      setUser({ username: 'dani' }); // Misalnya, set pengguna secara manual
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? (
            <Navigate to="/dashboard" />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        />
        <Route
          path="/dashboard/*"
          element={user ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;
