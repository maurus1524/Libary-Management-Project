import React from 'react';
import logo from './image.jpg';
import NavBar from './NavBar';

function Startpg() {
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
      <div className="left-half">
        <div className="image-container" >
        <img src={logo} alt="Library" className='homeImg'/>
        </div>
      </div>
      <div className="right-half">
        <h1>Welcome to the Library Management System</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat vel
          lacus a semper. Morbi in dui quis metus efficitur consectetur. Integer
          pellentesque auctor augue, sit amet venenatis neque consequat id. Duis
          convallis elit a semper ultrices. Proin at orci sit amet ex iaculis
          consequat.
        </p>
        <button className="btn">Get Started</button>
      </div>
    </div>
    </>
  );
}

export default Startpg;