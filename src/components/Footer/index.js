import './index.css';
import { Link } from 'react-scroll';
import {FaAngleDoubleUp } from "react-icons/fa";

function Footer() {
    return (
        <div className="Footer">
             <Link to="home" spy={true} smooth={true} offset={50} duration={250}>
                <div className='upArrowWrapper'>
                <FaAngleDoubleUp className= "upArrow" />
                </div>        
            </Link>
            <h4 className='footerText'>CHRIS MANFREDI © 2022 </h4>
        </div>
    )
}

export default Footer;