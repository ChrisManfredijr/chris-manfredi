import "./index.css";
import Chris from '../../assets/images/chris.webp';
import CV from '../../assets/ChrisManfredi.pdf'
import { FaHtml5, FaCss3Alt,FaJs,FaReact, FaNodeJs, FaServer, FaDatabase, FaLeaf} from "react-icons/fa";

function About() {
    return (
        <div className="About section" id='about'>
            <h2 className="title aboutTitle" data-aos="fade-in">About Me</h2>
            
                
                <div className="photoWrapper">
                    <img src={Chris} alt="Chris Manfredi, Fullstack Developer" width="295" height="435" className="photo" />
                </div>

                <div className="paragraphWrapper" >
                    <p className="aboutParagraph">My name is Chris Manfredi and I am a frontend developer with a background in business data analytics. I graduated from the University of Connecticut where I developed an interest in coding after building relational databases with SQL. To gain the technical skills I needed to build fullstack applications, I attended a coding bootcamp and learned the fundamentals of web development. I also served in the United States Marine Corps Reserve where I learned discipline, attention to detail and the ability to work in a team, all of which have helped me to become a better developer. In my free time, I enjoy playing guitar and snowboarding. With my unique set of skills, I am excited to use my passion for coding to build high-quality and user-friendly websites.
                    </p>

                    <br/>
                    <div className="aboutBtnWrapper">
                        <a href={CV} target="_blank" rel="noopener noreferrer" className="underBtn underBtnPrj">
                         - RESUME -
                        </a>
                    </div>
            </div>

            <div className="skillSection">
                <div className="skillBox Frontend" data-aos="fade-up">
                    <ul className="skillList" >
                        <li className="nameWrapper"><h3 className="skillName">Frontend</h3></li>
                        <li><FaHtml5/> HTML</li>
                        <li><FaCss3Alt/> CSS</li>
                        <li><FaJs/> JavaScript</li>
                        <li><FaReact/> React</li>
                    </ul>
                </div>

                <div className="skillBox Backend" data-aos="fade-up">
                    <ul className="skillList">
                        <li className="nameWrapper"><h3 className="skillName">Backend</h3></li>
                        <li><FaNodeJs/> Node</li>
                        <li><FaServer/> Express</li>
                        <li><FaDatabase/> SQL</li>
                        <li><FaLeaf/> MongoDB</li>
                        
                    </ul>
                </div>

                <div className="skillBox Concepts" data-aos="fade-up">
                    <ul className="skillList">
                        <li className="nameWrapper"><h3 className="skillName">Concepts</h3></li>
                        <li>TDD</li>
                        <li>OOP</li>
                        <li>MVC</li>
                        <li>MERN</li>
                    </ul>
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


export default About;