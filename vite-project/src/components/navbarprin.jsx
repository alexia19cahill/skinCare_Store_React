
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"
import { Link } from "react-router-dom";

function navbarprin() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LEXIUS</Navbar.Brand>
        <br />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">OFFERS</Nav.Link>
           <Link id='lrcolor' to='/about'>ABOUT US</Link>
            <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">FACE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">LIPS </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HAIR</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="ACCOUNT" id="basic-nav-dropdown">
              <Link id='lrcolor' to='/login'>LOGIN</Link>
             <br />
              <Link id='lrcolor' to='/register'>REGISTER</Link>
              <NavDropdown.Divider />
            </NavDropdown>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
  );
 

}



export default navbarprin;
