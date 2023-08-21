import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
function Header() {
  return (
    <>
      <Navbar className='nav'>
        <Container className='nav-bar'>
          <Nav className="lg-auto nav-links">
            <Nav.Link as={Link} to="home" spy={true} smooth={false} duration={500}>
              HOME 
            </Nav.Link>
            <Nav.Link as={Link} to="about" spy={true} smooth={false} duration={500} offset={-110}>
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="projects" spy={true} smooth={false} duration={500} offset={-110}>
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="contact" spy={true} smooth={false} duration={500} offset={-150}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;