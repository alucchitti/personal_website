import Card from './Card'
import uss from './images/uss.jpg'
import pitt from './images/pitt.png'
import cap1 from './images/cap1.jpg'

const Experience = () => {
    return (
        <div id='experience'>
            <h1 id='Experience'>Latest Experience</h1>
            <Card imgSrc={cap1} alt={'Capital One logo'} heading={'Capital One'} subheading={'Software Engineer Intern'} details={'Developed an internal tool to automate access request submissions using React and Express.js saving associates over 24,000 hours a year.'} date={'August 2021'}/>
            <Card imgSrc={uss} alt={'U.S. Steel logo'} heading={'U.S. Steel'} subheading={'Data Science Intern'} details={'As a data science intern for U.S. Steel, I worked to improve the steelmaking process by predicting the future with machine learning models.'} date={'May 2021 - August 2021'}/>
            <Card imgSrc={pitt} alt={'University of Pittsburgh logo'} heading={'University of Pittsburgh'} subheading={'Student Athlete Tutor'} details={'Supported the learning and understanding of topics in a variety of CS courses to promote personal and academic development in student athletes.'} date={'August 2020 - April 2021'}/>
        </div>
    )
}

export default Experience