import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Unicode-and-akruti-converter" className="nav-item">Unicode & Akruti Converter</Link>
        <Link to="/sreelipi-to-unicode" className="nav-item">Sreelipi to Unicode</Link>
      </div>
    </nav>

  );
};

export default Navbar;
