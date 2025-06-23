import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/simplenotesapp/';

  return (
    <header className="header">
      <Link to="/simplenotesapp/" className="logo">NOTES</Link>
      {isHome && (
        <Link to="/simplenotesapp/create" className="create-btn">Create</Link>
      )}
    </header>
  );
};

export default Header;
