import { FaGithubSquare, FaLinkedin} from "react-icons/fa";
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import './index.css';

import { useState, useEffect, useRef } from 'react'
import trunk from 'vanta/dist/vanta.trunk.min'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(trunk({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 2.00,
                scaleMobile: 1.00,
                backgroundColor: 0x212325,
                spacing: 12.00

            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef} id="">
        
        <div className="Home section" id="home">
            <div>
                <h1 className="name">Chris Manfredi</h1>
                <h2 className="subTitle">Web  Developer</h2>
                <div className="homeButtons">
                
                    <Link to="about" spy={true} smooth={false} offset={-90} duration={500}>
                        <Button variant="outline-light" className="aboutButton">
                        About Me
                        </Button> 
                    </Link>
                <a href="https://github.com/ChrisManfredijr" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="githubHome"/></a>
                <a href="https://www.linkedin.com/in/chris-manfredi-3b09b5114/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="linkedinHome" /></a>
                
                </div>
            </div>
        </div>

     
       
        <div className="triangleLight">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
            </svg>
        </div>
    </div>
}

export default Home;