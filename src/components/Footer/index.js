import './index.css';
import { Link } from 'react-scroll';
import {FaAngleDoubleUp } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaCircle} from "react-icons/fa";
function Footer() {
    return (
        <div className="Footer">
             <Link to="home" spy={true} smooth={false} offset={50} duration={250}>
                <div className='upArrowWrapper'>
                    <FaAngleDoubleUp className= "upArrow"/>
                </div>        
            </Link>
            <div className='footerText'>
                Chris Manfredi 2023 &nbsp; <FaCircle className='circleFooter'/> &nbsp;
                <a href="https://github.com/ChrisManfredijr" target="_blank" rel="noopener noreferrer"><FaGithub className='footerBtn'/>Github</a>
                &nbsp; <FaCircle className='circleFooter'/> &nbsp;
                <a href="https://www.linkedin.com/in/chris-manfredi-3b09b5114/" target="_blank" rel="noopener noreferrer"><FaLinkedin  className='footerBtn'/>LinkedIn</a>
            </div>
        </div>
    )
}
//
export default Footer;