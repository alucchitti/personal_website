import Card from './Card'
import uss from './images/uss.jpg'

const Experience = () => {
    return (
        <div id='experience'>
            <h1>Latest Experience</h1>
            <Card imgSrc={uss} alt={'U.S. Steel logo'} heading={'U.S. Steel'} subheading={'Data Science Intern'} details={'As a data science intern for U.S. Steel, I worked to improve the steelmaking process by predicting the future with machine learning models.'} date={'May 2021 - August 2021'}/>
        </div>
    )
}

export default Experience