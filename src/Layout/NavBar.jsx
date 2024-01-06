import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useMatch } from "react-router-dom";
import logo from '../assets/Logo.svg'
import face from '../assets/Face.svg'
import '../styles/NavBar.css'


const NavBar = () => {
    const isAbout = useMatch('/AllTask')
    const isNew = useMatch('/NewTask')
  return (
    <>
      <Navbar expand="lg" className="container mt-4">
        <Container fluid>
          <div className="d-flex"> <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <div className="TD">          <h2> <Link to='/' className="text-decoration-none text-dark TD">  TaskDuty </Link>  </h2>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>
              <div className="d-flex gap-4 lh-base align-items-center">
                {!isNew && 'NewTask' && (                <Link to='/NewTask' className="text-decoration-none text-dark"> <h4> New Task </h4>  </Link>)}
                {!isAbout && 'AllTask' && (                <Link to='/AllTask' className="text-decoration-none text-dark"> <h4> All Task </h4>  </Link>
)}
                <Link className="text-decoration-none text-dark "> <img src={face} className='face'alt="" /> </Link>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;