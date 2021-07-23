import Card from './Card'
import movie from './images/movie.gif'
import crossword from './images/crossword.jfif'

const Projects = () => {
    return (
        <div id='projects'>
            <h1>Latest Projects</h1>
            <Card imgSrc={movie} alt={'Desc'} heading={"Who's Tweeting?"} subheading={'Python, Pandas, Django'} details={'A web app that predicts whether President Biden or Kim Kardashian is more likely to tweet user entered text. Uses ...'} date={'August 2021'}/>
            <Card imgSrc={movie} alt={'Movie Demo'} heading={"What's that Movie?"} subheading={'HTML/CSS, JavaScript'} details={'Developed a web app using the OMDb API that allows users to search for movie titles and view movie details'} date={'June 2021'}/>
            <Card imgSrc={crossword} alt={'Crossword Puzzle'} heading={'Cossword Puzzle Solver'} subheading={'Java'} details={'A program that recursively solves a crossword puzzle handling closed squares and predefined letters in a given board.'} date={'February 2021'}/>
        </div>
    )
}

export default Projects