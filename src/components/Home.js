import {FaGithubSquare, FaLinkedin, FaFilePdf} from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'
import resume from './images/AnthonyLucchittiResume.pdf'

const Home = () => {
    return (
        <div id='home'>
            <h1>Hi, I'm Anthony<span> (he/him)</span></h1>
            <h3>CS Student. Aspiring Developer. Data Enthusiast.</h3>
            <div id="icons">
                <a href='https://github.com/alucchitti' target="_blank" rel="noopener noreferrer"><FaGithubSquare size={28}/></a>
                <a href={resume} target="_blank" rel="noopener noreferrer"><FaFilePdf size={28}/></a>
                <a href='mailto:alucchitti@pitt.edu'><RiMailFill size={28}/></a>
                <a href='https://www.linkedin.com/in/alucchitti/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={28}/></a>
            </div>
            <p>Hello! I am a junior Computer Science and Applied Statistics student at the University of Pittsburgh. I enjoy finding new ways to solve problems using technology. Feel free to explore my portfolio to see what I've been working on recently!</p>
        </div>
    )
}

export default Home