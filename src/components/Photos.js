import ImageSlider from "./ImageSlider"
import { SliderData } from './SliderData';

const Photos = () => {
    return (
        <div id='photos' name='photos'>
            <h1>Recent Park Photos</h1>
            <p>One of my biggest hobbies is exploring the outdoors. Here are few pictures from my recent adventures!</p>
            <ImageSlider slides={SliderData}/>
        </div>
    )
}

export default Photos