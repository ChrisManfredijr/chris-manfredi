import { FaGithubSquare, FaLinkedin, FaAngleDoubleDown } from "react-icons/fa";

function Home() {
    return (
        <div className="Home">
            <div>
                <h1>Chris Manfredi</h1>
                <h2>Fullstack Developer</h2>
                <div>
                    <FaGithubSquare/><FaLinkedin/>
                </div> 
                <FaAngleDoubleDown/>
            </div>
        </div>
    );
}

export default Home;