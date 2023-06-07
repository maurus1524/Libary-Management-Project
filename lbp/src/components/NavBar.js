import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook} from 'react-icons/fa';
import {TbAdjustments} from 'react-icons/tb'

function Navbar() {
  return (
    <nav className="navbar" style={{justifyContent:"space-around",height:"10%"}}>
      <Link to="/" className="nav-link">
        <FaHome className="icon" />
        {" Home"}
      </Link>
      <Link to="/home" className="nav-link">
        <FaBook className="icon" />
        {" Books"}
      </Link>
      <Link to="/filter" className="nav-link">
        <TbAdjustments className="icon" />
        {" Filter"}
      </Link>
    </nav>
  );
}

export default Navbar;
