import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar" style={{justifyContent:"space-around",height:"10%"}}>
      <Link to="/" className="nav-link">
        <FaHome className="icon" />
        Home
      </Link>
      <Link to="/home" className="nav-link">
        <FaBook className="icon" />
        Books
      </Link>
      <Link to="/" className="nav-link">
        <FaUser className="icon" />
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;
