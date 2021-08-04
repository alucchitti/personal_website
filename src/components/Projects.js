import Card from './Card'
import {FaLink} from 'react-icons/fa'
import tweet from './images/tweet.gif'
import movie from './images/movie.gif'
import crossword from './images/crossword.jfif'

const Projects = () => {
    return (
        <div id='projects'>
            <h1 id='Projects'>Latest Projects</h1>
            <Card imgSrc={tweet} alt={'Desc'} heading={"Who's Tweeting?"} subheading={'Flask, React, scikit-learn'} details={'A web app that predicts whether former President Obama or Khloe Kardashian is more likely to tweet user entered text.'} date={<a href='https://alucchitti.github.io/tweet_predictor/' target="_blank" rel="noopener noreferrer"><FaLink size={20}/></a>}/>
            <Card imgSrc={movie} alt={'Movie Demo'} heading={"What's that Movie?"} subheading={'HTML/CSS, JavaScript'} details={'Developed a web app using the OMDb API that allows users to search for movie titles and view movie details'} date={<a href='https://alucchitti.github.io/MovieSearch/' target="_blank" rel="noopener noreferrer"><FaLink size={20}/></a>}/>
            <Card imgSrc={crossword} alt={'Crossword Puzzle'} heading={'Cossword Puzzle Solver'} subheading={'Java'} details={'A program that recursively solves a crossword puzzle handling closed squares and predefined letters in a given board.'} date={''}/>
        </div>
    )
}

export default Projects