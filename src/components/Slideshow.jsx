import {arrowLeft} from '../assets/arrow-left.png';
import {arrowRight} from '../assets/arrow-right.png';
import {useState} from 'react';
import '../styles/Slideshow.css';


function Slideshow({pictures}){
    const [currentPicture, setCurrentPicture] = useState(0);

    return(
        <div className="slideshow">

        </div>
    );

}

export default Slideshow;