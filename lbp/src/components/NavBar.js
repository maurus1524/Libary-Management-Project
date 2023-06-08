import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook} from 'react-icons/fa';
import {TbAdjustments} from 'react-icons/tb'
import { BsBookmarkHeart } from 'react-icons/bs'

function Navbar() {
  return (
    <nav className="navbar" style={{justifyContent:"space-around",height:"10%"}}>
      <Link to="/" className="nav-link">
        <FaHome className="icon" />
        <span> Home</span> 
      </Link>
      <Link to="/home" className="nav-link">
        <FaBook className="icon" />
        <span> Book</span> 
      </Link>
      <Link to="/filter" className="nav-link">
        <TbAdjustments className="icon" />
        <span> Filter</span>
      </Link>
      <Link to="/bookmark" className="nav-link">
        <BsBookmarkHeart className="icon" />
        <span> Bookmark</span>
      </Link>
    </nav>
  );
}

export default Navbar;
