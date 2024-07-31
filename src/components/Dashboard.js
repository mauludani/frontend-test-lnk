import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Dashboard = ({ onLogout }) => {
  return (
    <Container>
      <h2>Dashboard</h2>
      <Button variant="danger" onClick={onLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
