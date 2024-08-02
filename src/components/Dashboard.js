import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import CalendarPage from './CalendarPage';
import EmailForm from './EmailForm';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    onLogout();
    navigate('/');
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="content">
        {location.pathname === '/dashboard/calendar' && (
          <div className="text-end mb-3">
            <Button variant="primary" onClick={() => navigate('/dashboard/email')}>
              Send Email
            </Button>
          </div>
        )}
        <Routes>
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="email" element={<EmailForm />} />
        </Routes>
        <Button variant="danger" className="mt-2" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </div>
  );
};

export default Dashboard;
