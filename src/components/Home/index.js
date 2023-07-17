import './index.css';
import { Link } from 'react-scroll';
import Chris from '../../assets/images/chris.webp';

const Home = () => {
    return <div>
        <div className="Home section" id="home">
            <div className="homeWrapper">
                <div>
                    <div className='titleSection'>
                        <h1 className="name">Chris Manfredi</h1>
                        <h2 className="subTitle">Web Developer</h2>
                    </div>
                    <div className="homeButtons">
                        <Link to="about" spy={false} smooth={false} offset={-90} duration={500} className="underBtn">ABOUT ME</Link>
                        <a href="https://github.com/ChrisManfredijr" target="_blank" rel="noopener noreferrer" className="underBtn">GITHUB</a>
                        <a href="https://www.linkedin.com/in/chris-manfredi-3b09b5114/" target="_blank" rel="noopener noreferrer" className="underBtn">LINKEDIN</a>
                    </div>
                </div>
                <div className="photo">
                    <div className="photoWrapper">
                        <img src={Chris} alt="Chris Manfredi, Fullstack Developer" width="295" height="435" className="photo" />
                    </div>
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