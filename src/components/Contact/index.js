import { FaAngleDoubleUp } from 'react-icons/fa';
import './index.css'
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <div className="Contact section" id="contact">
            <h2>Contact Me:</h2>
            <Form className='contactInput'>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>

                <Button variant="outline-primary" type="submit" className="btn">
                    Submit
                </Button>
            </Form>

            <Link to="home" spy={true} smooth={true} offset={50} duration={250}>
                <FaAngleDoubleUp className="upArrow" />
            </Link>
        </div>
    )
}

export default Contact;