import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'

const Home = () => {
    return (
        <div id='home'>
            <h1>Hi, I'm Anthony</h1>
            <h3>Software Developer. Data Enthusiast. Aspiring Polymath.</h3>
            <div id="icons">
                <a href='https://github.com/alucchitti' target="_blank" rel="noopener noreferrer"><FaGithubSquare size={28}/></a>
                <a href='mailto:alucchitti@pitt.edu'><RiMailFill size={28}/></a>
                <a href='https://www.linkedin.com/in/alucchitti/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={28}/></a>
            </div>
            <p>I'm a software developer based out of the Washington, D.C. area. I enjoy finding new ways to solve problems using technology. Explore my portfolio to see what I've been working on recently!</p>
        </div>
    )
}

export default Home