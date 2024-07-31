import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);

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
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;
