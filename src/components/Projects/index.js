import './index.css'
import tastemakr from '../../assets/images/tastemakr.png'
import Button from 'react-bootstrap/Button';
function Projects() {
    return (
        <div className="Projects section" id="projects">
            <h2 className='title projectSection'>My Projects:</h2>

            <div className="projectCard">
                <div className='imgWrapper'>
                    <img src={tastemakr} alt="tastemakr website" width="500" height="300" className='projectImg'/>
                </div>
               
                <div className='projectInfo'>
                    <h3 className="projectTitle">Tastemakr</h3>
                    <p>Tastemakr is a search engine which uses the LAST.FM API to generate music recommendations based on user input. Users can log in and save recommendations to the database</p>
                    <div className='projectBtnWrapper'>
                        <Button variant="outline-light" className="projectButton">
                            visit site
                        </Button>
                        <Button variant="outline-light" className="projectButton">
                            view code
                        </Button>
                    </div>
                </div>
                
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