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
            
            <div className="triangleLight triangleProjects">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                </svg>
            </div>
            
        </div>
    )
}

export default Projects;