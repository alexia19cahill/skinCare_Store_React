// este compoenete es el nav que se muestra en la pagina principal
// estas son las importaiones de bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// importacion de las hojas de estilos
import "../styles/home.css"
// importacion del link desde react
import { Link } from "react-router-dom";
// esta funcion es para el nav
function navbarprin() {
  return (
  <div className='colorf'>
    <Navbar  expand="lg" >
      <Container className="bg-body-tertiary">
        <Navbar.Brand href="#home">LEXIUS</Navbar.Brand>
        <br />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
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
              <Link id='lrcolor' to='/products'>ADMIN</Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
</div>
    
  );
 
}



export default navbarprin;
