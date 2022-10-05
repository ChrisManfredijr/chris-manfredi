import { FaGithubSquare, FaLinkedin, FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-scroll';
import './index.css';
function Home() {
    return (
        <div className="Home section" id="home">
            <div>
                <h1>Chris Manfredi</h1>
                <h2>Fullstack Developer</h2>
                <div>
                    <FaGithubSquare className="githubHome"/><FaLinkedin className="linkedinHome"/>
                </div> 
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                    <FaAngleDoubleDown className="downArrow"/>
                </Link>    
            </div>
        </div>
    );
}

export default Home;