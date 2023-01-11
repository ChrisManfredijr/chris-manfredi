import './index.css';
import { Link } from 'react-scroll';
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaCircle } from "react-icons/fa";
function Footer() {
    return (
        <div className="Footer">
            <div className='upArrowWrapper'>
                <Link to="home" spy={true} smooth={false} offset={50} duration={250}>
                    <FaAngleDoubleUp className="upArrow" />
                </Link>
            </div>
            <div className='footerText'>
                CHRIS MANFREDI 2023 &nbsp; <FaCircle className='circleFooter' /> &nbsp;
                <a href="https://github.com/ChrisManfredijr" target="_blank" rel="noopener noreferrer"><FaGithub className='footerBtn' />GITHUB</a>
                &nbsp; <FaCircle className='circleFooter' /> &nbsp;
                <a href="https://www.linkedin.com/in/chris-manfredi-3b09b5114/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='footerBtn' />LINKEDIN</a>
            </div>
        </div>
    )
}
//
export default Footer;