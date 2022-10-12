
import './index.css'
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithubSquare, FaLinkedin, FaAngleDoubleUp } from "react-icons/fa";
function Contact() {
    return (
       
        <div className="Contact section" id="contact">
            <h2 className='title'>Contact Me:</h2>
            
            <div className='contactBtn'>
                <a href="https://github.com/ChrisManfredijr" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="githubHome"/></a>
                <a href="https://www.linkedin.com/in/chris-manfredi-3b09b5114/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="linkedinHome" /></a>
            </div>
            
            <Form className='contactInput'>
                <h3 className='sendMessage'>Send me a message:</h3>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="subject" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={8} placeholder="message"/>
                </Form.Group>
                <div className='btnWrapper'>
                    <Button variant="outline-light" type="submit" className="btn">
                        Submit
                    </Button>
                </div>   
            </Form>
            <div>

            </div>
            <Link to="home" spy={true} smooth={true} offset={50} duration={250}>
                <div className='upArrowWrapper'>
                    <FaAngleDoubleUp className="upArrow" />
                </div>        
            </Link>
        </div>
    )
}

export default Contact;