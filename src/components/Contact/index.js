import {FaAngleDoubleUp} from 'react-icons/fa';
import './index.css' 
import { Link } from 'react-scroll';
function Contact() {
    return (
        <div className="Contact section" id="contact">
            <Link to="home" spy={true} smooth={true} offset={50} duration={250}>
                <FaAngleDoubleUp className="upArrow"/>
            </Link>
        </div>
    )
}

export default Contact;