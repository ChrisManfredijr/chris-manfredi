import './index.css'
import tastemakr from '../../assets/images/tastemakr.png';
import connectfour from '../../assets/images/connectfour.png';
import spotifynow from '../../assets/images/spotifynow.png';

function Projects() {
    return (
        <div className="Projects section" id="projects">

            <h2 className='title projectSection'>My Projects:</h2>

            <div className="projectCard">
                <div className='imgWrapper'>
                    <img src={connectfour} alt="tastemakr website" width="600" height="360" className='projectImg' />
                </div>

                <div className='projectInfo'>
                    <h3 className="projectTitle">Connect Four</h3>
                    <p className='projectBio'>Play Connect Four against another player in the browser. Game will automatically detect wins and keep score. Save this React app as a Progressive Web Application</p>
                    <div className='builtWith'>
                        <ul className="builtWithList">
                            <li>React</li>
                            <li>SPA</li>
                            <li>PWA</li>

                        </ul>
                        <ul className="builtWithList">
                            <li>Game design</li>
                            <li>JSX</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className='projectBtnWrapper'>
                        <a href="https://connectfour-manfredi.netlify.app/" target="_blank" rel="noopener noreferrer" className='underBtn underPrj'>
                            VIEW SITE
                        </a>
                        <a href="https://github.com/ChrisManfredijr/connectfour" target="_blank" rel="noopner noreferrer" className='underBtn underPrj'> 
                            VIEW CODE
                        </a>
                    </div>
                </div>

            </div>
            <div className="projectCard">
                <div className='imgWrapper smallScreenImg'>
                    <img src={tastemakr} alt="tastemakr website" width="600" height="360" className='projectImg projectImgRight' />
                </div>

                <div className='projectInfo projectInfoRight'>
                    <h3 className="projectTitle">Tastemakr</h3>
                    <p className='projectBio'>Generate music recommendations by entering an artist/band name. Login to save and view previously saved recommendations. MERN Stack application with REST api and GraphQL</p>
                    <div className='builtWithRight'>
                        <ul className="builtWithList">
                            <li>React</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>Mongo</li>
                        </ul>
                        <ul className="builtWithList">
                            <li>LAST.FM api</li>
                            <li>React Boostrap</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                    <div className='projectBtnWrapper'>
                        <a href="https://tastemakr.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='underBtn underPrj'>
                                VISIT SITE
                        </a>
                        <a href="https://github.com/ChrisManfredijr/tastemakr" target="_blank" rel="noopner noreferrer" className='underBtn underPrj'>
                            VIEW CODE
                        </a>
                    </div>
                </div>
                <div className='imgWrapper largeScreenImg'>
                    <img src={tastemakr} alt="tastemakr website" width="600" height="360" className='projectImgRight' />
                </div>
            </div>
            <div  className="projectCard">
                <div className='imgWrapper'>
                    <img src={spotifynow} alt="tastemakr website" width="600" height="360" className='projectImg' />
                </div>

                <div className='projectInfo'>
                    <h3 className="projectTitle">Spotify Now</h3>
                    <p className='projectBio'>Login to Spotify to view your top songs and artists for the year. Generate a custom playlist with your top songs. You can also share your playist to the public database. Integrates MVC architecture design patterns and 0Auth.</p>
                    <div className='builtWith'>
                        <ul className="builtWithList">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                        </ul>
                        <ul className="builtWithList">
                            <li>Node</li>
                            <li>Express</li>
                            <li>spotify-web-api-node</li>
                            <li>MySql</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                    <div className='projectBtnWrapper'>
                        <a href="https://spotify-wrapped-now.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='underBtn underPrj'>
                            VISIT SITE
                        </a>
                        <a href="https://github.com/ajjaswal/spotify-now" target="_blank" rel="noopner noreferrer" className='underBtn underPrj'>
                            VIEW CODE
                        </a>
                    </div>
                </div>

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