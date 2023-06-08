import React from 'react';
import logo from './image.jpg';
import NavBar from './NavBar';

function Startpg() {
  return (
    <div style={{background:"#32354d"}}>
    <NavBar></NavBar>
    <div className="container">
      <div className="left-half">
        <div className="image-container" >
        <img src={logo} alt="Library" className='homeImg' style={{translate:"-10%"}}/>
        </div>
      </div>
      <div className="right-half" style={{translate:"-4%"}}>
        <h1>TechScribe Library Hub</h1>
        <p>
        Discover a world of knowledge at your fingertips. Our user-friendly digital library offers a seamless interface, empowering you to explore, borrow, and engage with captivating books. Enjoy intuitive navigation, filtering and convenient access to a vast collection of literary treasures.
        </p>
        <a href ="http://localhost:3000/home" style={{color:"white",background:"black",width:"75%",marginLeft:"12.5%"}} className="btn">Get Started</a>
      </div>
    </div>
    </div>
  );
}

export default Startpg;