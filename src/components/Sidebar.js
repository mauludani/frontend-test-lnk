import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column vh-100 sidebar">
            <Nav className="flex-column">
                <NavLink to="/dashboard" className="nav-link">Home</NavLink>
            </Nav>
        </div>
    );
};

export default Sidebar;
