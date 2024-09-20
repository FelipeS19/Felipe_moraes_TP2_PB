// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="navbar-title">
          ACME
        </Typography>
        <div className="navbar-links">
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {!currentUser && (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
          {currentUser && (
            <>
              <Button color="inherit" component={Link} to="/fornecedores">
                Fornecedores
              </Button>
              <Button color="inherit" component={Link} to="/cotaçoes">
                Cotações
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
              <Typography variant="body2" className="navbar-status">
                Logado como: {currentUser.name}
              </Typography>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
