import './index.css'
import tastemakr from '../../assets/images/tastemakr.webp';
import connectfour from '../../assets/images/connectfour.webp';
import spotifynow from '../../assets/images/spotifynow.webp';

function Projects() {
    const projectArray = [
        {
            name: 'Connect Four',
            img: connectfour,
            bio: 'Play Connect Four against another player in the browser. Game will automatically detect wins and keep score. Save this React app as a Progressive Web Application',
            tech: ['React ', 'SPA ', 'PWA ', 'Game-Design ', 'JSX ', 'CSS '],
            site: 'https://connectfour-manfredi.netlify.app/',
            github: 'https://github.com/ChrisManfredijr/connectfour'
        },
        {
            name: 'Tastemakr',
            img: tastemakr,
            bio: 'Generate music recommendations by entering an artist/band name. Login to save and view previously saved recommendations. MERN Stack application with REST api and GraphQL',
            tech: ['React ', 'Express ', 'Node ', 'MongoDB ', 'Last.FM-API ', 'GraphQL '],
            site: 'https://tastemakr.herokuapp.com/',
            github: 'https://github.com/ChrisManfredijr/tastemakr'
        },
        {
            name: 'Spotify Now',
            img: spotifynow,
            bio: 'Login to Spotify to view your top songs and artists for the year. Generate a custom playlist with your top songs. You can also share your playist to the public database. Integrates MVC architecture design patterns and 0Auth.',
            tech: ['HTML', ' CSS ', 'JavaScript ', 'Handlebars ', 'REST API  ', 'OAuth ', 'MySql '],
            site: 'https://spotify-now-app.herokuapp.com/',
            github: 'https://github.com/ajjaswal/spotify-now'
        },

    ]


    return (
        <div className="Projects section" id="projects">
            <h2 className='title ProjectTitle'>My Projects:</h2>

            <div className='projectSection'>
                {projectArray.map((card, index) => {
                    return (

                        <div className='projectCardWrapper' key={index}>
                            {index % 2 === 0 ?
                                <div className="projectCard">
                                    <a  href={card.site} target="_blank" rel="noopener noreferrer" className='imgWrapper'>
                                        <img src={card.img} width="640" height="360" className='projectImg'alt={card.name}/>
                                    </a>

                                    <div className='ProjectInfo'>
                                        <h3 className='projectName'>{card.name}</h3>
                                        <p className='projectBio'>{card.bio}</p>

                                        <div className='techStack'>
                                            {card.tech}
                                        </div>
                                        <div className='projectButtonWrapper'>
                                            <a href={card.site} target="_blank" rel="noopener noreferrer" className='underBtn underPrj'>
                                                VISIT SITE
                                            </a>
                                            <a href={card.github} target="_blank" rel="noopner noreferrer" className='underBtn underPrj'>
                                                VIEW CODE
                                            </a>
                                        </div>
                                    </div>
                                </div> 

                                :

                                <div className="projectCard projectCardRight"  >
                                    <div className='ProjectInfo ProjectInfoRight'>
                                        <h3 className='projectName'>{card.name}</h3>
                                        <p className='projectBio'>{card.bio}</p>
                                        <div className='techStack techStackRight'>
                                            {card.tech}
                                        </div>
                                        <div className='projectButtonWrapper'>
                                            <a href={card.site} target="_blank" rel="noopener noreferrer" className='underBtn underPrj underPrjRight'>
                                                VISIT SITE
                                            </a>
                                            <a href={card.github} target="_blank" rel="noopner noreferrer" className='underBtn underPrj underPrjRight'>
                                                VIEW CODE
                                            </a>
                                        </div>
                                    </div>
                                    <a href={card.site} target="_blank" rel="noopener noreferrer" className='imgWrapper' >
                                        <img src={card.img} width="640" height="360" className='projectImg' alt={card.name}/>
                                    </a>
                                </div>
                            }

                        </div>
                    );

                })}
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