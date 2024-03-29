import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';
import { useState } from 'react';
import '../styles/Slideshow.css';
import React from 'react';

function Slideshow({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  if (currentPicture < 0) {
    setCurrentPicture(pictures.length - 1);
  }
  if (currentPicture >= pictures.length) {
    setCurrentPicture(0);
  }

  return (
    <div className='slideshow'>
      {pictures.length > 1 && (
        <React.Fragment>
          <div className='control'>
            <img
              src={arrowLeft}
              alt='arrow-left'
              onClick={() => setCurrentPicture(currentPicture - 1)}
            />
            <img
              src={arrowRight}
              alt='arrow-right'
              onClick={() => setCurrentPicture(currentPicture + 1)}
            />
          </div>
          <span className='count'>
            {currentPicture + 1}/{pictures.length + 1}
          </span>
        </React.Fragment>
      )}
      <img
        className='slide'
        src={pictures[currentPicture]}
        alt='Interieur du logement'
      />
    </div>
  );
}

export default Slideshow;
