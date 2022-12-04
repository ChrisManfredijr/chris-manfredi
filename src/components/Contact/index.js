import './index.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithubSquare, FaLinkedin} from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
    
 
    
    
    
    function sendEmail(event) {
        event.preventDefault();
        console.log(event.target.value);

        emailjs.sendForm('gmail', 'template_nzgxzjn', event.target, 'b-HdTsNp9POAZmT8W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            event.target.reset()
    }
    
    return (
       
        <div className="Contact" id="contact">
            
                <h2 className='title'>Contact Me:</h2>
           
            
            
            <div className='contactBtn'>
                <a href="https://github.com/ChrisManfredijr" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="githubHome"/></a>
                <a href="https://www.linkedin.com/in/chris-manfredi-3b09b5114/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="linkedinHome" /></a>
            </div>
            <div className='formWrapper'>
            <Form  className='contactInput' onSubmit={sendEmail}>
                <h3 className='sendMessage'>Send me a message:</h3>
                <Form.Group className="mb-2" controlId="formBasicEmail" >
                    <Form.Control type="name" placeholder="Name" name="name"/>
                </Form.Group>
    
                <Form.Group className="mb-2" controlId="formBasicEmail" >
                    <Form.Control type="email" placeholder="Email" name="email"/>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control type="subject" placeholder="Subject" name="subject"/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={8} placeholder="Message" name="message"/>
                </Form.Group>
                <div className='btnWrapper'>
                    <Button variant="outline-light" type="submit" className="btn">
                        Submit
                    </Button>
                </div>   
            </Form>
            </div>
            
        </div>
    )
}

export default Contact;