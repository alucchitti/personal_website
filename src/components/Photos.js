import ImageSlider from "./ImageSlider"
import { SliderData } from './SliderData';

const Photos = () => {
    return (
        <div id='photos'>
            <h1 id='Photos'>Recent Park Photos</h1>
            <p>One of my biggest hobbies is exploring the outdoors. Here are few pictures of my recent adventures!</p>
            <ImageSlider slides={SliderData}/>
        </div>
    )
}

export default Photos