import React from 'react'
import './Nav.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark,faBars } from '@fortawesome/free-solid-svg-icons'
// import {AiFillCloseSquare} from 'react-icons/ai'
// import {FaBars} from 'react-icons/fa'


function NavBari() {
  return (



    <div>


<Navbar expand="lg" className="bg-black  ">
    <Container>
      <Navbar.Brand href="#home">
  
<span  id='chakkuh'>AMAL</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navi">
        <Nav.Link className='text-white' id='text' href="#link">Home</Nav.Link>
          <Nav.Link className='text-white' id='text' href="#link">Projects</Nav.Link>
          <Nav.Link className='text-white' id='text' href="#link">Skills</Nav.Link>
          <Nav.Link className='text-white' id='text' href="#link">Projects</Nav.Link>
          <Nav.Link className='text-white' id='text' href="#link">Contact</Nav.Link>
          <Nav.Link className='text-white' id='text' href="#link">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )



    
   
    // <nav>
    //   <input type='checkbox' id='check'/>
    //   <label for='check'>
    //   {/* <FontAwesomeIcon icon="fa-sharp fa-light fa-bars" /> */}
    //   <AiFillCloseSquare id='btn'/>
    //   <FaBars id='cancel'/>
    //   </label>
    //   <ul>
    //     <h1>Chakkuhh</h1>
    //     <li><a href='#'>Home</a></li>
    //     <li><a href='#'>Projects</a></li>
    //     <li><a href='#'>Skills</a></li>
    //     <li><a href='#'>Contact</a></li>
    //     <li><a href='#'>About</a></li>
    //   </ul>
    // </nav>
    
  
}

export default NavBari