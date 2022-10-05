import './index.css'
import { FaAngleDoubleDown} from "react-icons/fa";
import { Link } from 'react-scroll';
function Projects() {
    return(
        <div className="Projects section" id="projects">
            <div>
                <h2 className='title'>My Projects</h2>
            </div>
            <div className="projectCard">

            </div>
            <div className="projectCard">
                    
            </div>
            <div className="projectCard">
                    
            </div>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                <FaAngleDoubleDown className="projectArrow" />
            </Link>  

            
        </div>
    )
}

export default Projects;