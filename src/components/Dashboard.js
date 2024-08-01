import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CalendarPage from './CalendarPage';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    onLogout();
    navigate('/');
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="content">
        <Routes>
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="profile" element={<h2>Profile Page</h2>} />
          <Route path="settings" element={<h2>Settings Page</h2>} />
          <Route path="calendar" element={<CalendarPage />} />
        </Routes>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </div>
  );
};

export default Dashboard;
