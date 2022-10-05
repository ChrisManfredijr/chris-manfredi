import { FaAngleDoubleDown, FaUserCircle } from "react-icons/fa";
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

            <FaAngleDoubleDown className="aboutArrow" />
            
        </div>
    );
}

export default About;