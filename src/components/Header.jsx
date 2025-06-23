// components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <Link to="/" className="logo">NOTES</Link>
      {isHome && (
        <Link to="/create" className="create-btn">Create</Link>
      )}
    </header>
  );
};

export default Header;
