import { FaAngleDoubleDown, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-scroll';
import "./index.css";
function About() {
    return (
        <div className="About section" id='about'>
            <h2 className="title">About Me</h2>
            <div className="photo">
                <FaUserCircle />
            </div>
            <p>My Name is Chris Manfredi, I am a Fullstack Developer...</p>
            <div className="skillSection">
                <div className="skillBox">
                    <ul className="skillList">
                        <li><h3>Frontend</h3></li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="skillBox">
                    <ul className="skillList">
                        <li><h3>Backend</h3></li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>mySql</li>
                        <li>MongoDB</li>
                        <li>React</li>
                    </ul>
                </div>

                <div className="skillBox">
                    <ul className="skillList">
                        <li><h3>Concepts</h3></li>
                        <li>Test Driven Development</li>
                        <li>Object Oriented Programming</li>
                        <li>Model View Controller</li>
                        <li>MERN Stack</li>
                        <li>Model View Controller</li>
                    </ul>
                </div>

                <div>
                </div>
            </div>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                <FaAngleDoubleDown className="aboutArrow" />
            </Link>
            <div className="triangleLight triangleDark">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}

export default About;