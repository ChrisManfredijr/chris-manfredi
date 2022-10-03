import { FaGithubSquare, FaLinkedin, FaAngleDoubleDown } from "react-icons/fa";
import './index.css';
function Home() {
    return (
        <div className="Home section">
            <div>
                <h1>Chris Manfredi</h1>
                <h2>Fullstack Developer</h2>
                <div>
                    <FaGithubSquare className="githubHome"/><FaLinkedin className="linkedinHome"/>
                </div> 
                <FaAngleDoubleDown className="downArrow"/>
            </div>
        </div>
    );
}

export default Home;