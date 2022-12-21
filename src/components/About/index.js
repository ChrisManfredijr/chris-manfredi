import  {FaFilePdf}  from "react-icons/fa";
import Chris from '../../assets/images/chris.png';
import Button from 'react-bootstrap/Button';
import CV from '../../assets/ChrisManfredi.pdf'
import "./index.css";


function About() {
    
   
    
    return (
     
        <div className="About section" id='about'>
            <h2 data-aos="fade-left" className="title aboutTitle">About Me</h2>
            <div className="photoWrapper">
                <img src={Chris} alt= "Chris Manfredi, Fullstack Developer" width="295" height="435" className="photo"/>
            </div>
            <p className="aboutParagraph">My name is Chris Manfredi, I am web developer commited to life-long learning and constant improvement.</p>
            <a href={CV} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-light" className="CvButton">
                        Resume <FaFilePdf/>
                    </Button> 
            </a>        
            <div className="skillSection">
                <div data-aos="fade-up" className="skillBox Frontend">
                    <ul className="skillList">
                        <li className="nameWrapper"><h3 className="skillName">Frontend</h3></li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                    </ul>
                </div>
                <div data-aos="fade-up" className="skillBox Backend">
                    <ul className="skillList">
                        <li className="nameWrapper"><h3 className="skillName">Backend</h3></li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>mySql</li>
                        <li>MongoDB</li>
                        <li>React</li>
                    </ul>
                </div>

                <div data-aos="fade-up" className="skillBox Concepts">
                    <ul className="skillList">
                        <li className="nameWrapper"><h3 className="skillName">Concepts</h3></li>
                        <li>Test Driven Development</li>
                        <li>Object Oriented Programming</li>
                        <li>Model View Controller</li>
                        <li>MERN Stack</li>
                       
                    </ul>
                </div>

                <div>
                </div>
            </div>
            <div className="slant">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}
/*
                <div className="skillBox">
                    <ul className="skillList">
                        <li><h3 className="skillName">Concepts</h3></li>
                        <li>Test Driven Development</li>
                        <li>Object Oriented Programming</li>
                        <li>Model View Controller</li>
                        <li>MERN Stack</li>
                        <li>Model View Controller</li>
                    </ul>
                </div>
*/

export default About;