import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Add this import for dropdown icons

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
        <Link to="/unicode-and-akruti-converter" className="nav-item" onClick={() => onConverterClick('unicodeToAkruti')}>Unicode to Akruti</Link>
        <Link to="/unicode-and-akruti-converter" className="nav-item" onClick={() => onConverterClick('akrutiToUnicode')}>Akruti to Unicode</Link>
        <Link to="/sreelipi-to-unicode" className="nav-item">Sreelipi to Unicode</Link>
        <div className="dropdown">
          <Link className="dropbtn">
            <span>More Tools </span>
            <FaChevronDown className="dropdown-icon" />
          </Link>
          <div className="dropdown-content">
            <Link to="/text-process" className="dropdown-item">Remove Line Brakes</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
