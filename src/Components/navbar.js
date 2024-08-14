import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ onConverterClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="Unnatipathe_logo.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/unicode-and-akruti-converter" className="nav-item" onClick={() => onConverterClick('unicodeToAkruti')}>Unicode to Akruti Converter</Link>
        <Link to="/unicode-and-akruti-converter" className="nav-item" onClick={() => onConverterClick('akrutiToUnicode')}> Akruti to Unicode Converter</Link>
        <Link to="/sreelipi-to-unicode" className="nav-item">Sreelipi to Unicode</Link>
      </div>
    </nav>

  );
};

export default Navbar;
