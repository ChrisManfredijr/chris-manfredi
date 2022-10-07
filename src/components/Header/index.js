import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './index.css'
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='Nav'>
        <Container >
          <Navbar.Brand href="#home">Chris Manfredi</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="home" spy={true} smooth={true} duration={500}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" spy={true} smooth={true} duration={500}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="projects" spy={true} smooth={true} duration={500}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;