import React, { useState } from 'react'
import "../components/UserReview.css"
import fiveStare from "../images/five-star.PNG"
import rstep from '../images/r-step.PNG'
import lstep from '../images/l-step.PNG'
import mark from "../images/mark.PNG"
import img7 from "../images/img7.WEBP"
import img8 from "../images/img8.WEBP"
import { useLanguage } from './LanguageContext'
import useSlideIn from "./UseSlideIn";


const UserReview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const { language, translations } = useLanguage();

    const { isVisible, elementRef } = useSlideIn(0.1);

    const cardData = [
        { id: 1, review: translations[language].rev.p26},
        { id: 2, review: translations[language].rev.p27},
        { id: 3, review: translations[language].rev.p28},
        { id: 4, review: translations[language].rev.p29},
        { id: 5, review: translations[language].rev.p30}
      ];

    const prevCard = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? cardData.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const nextCard = () => {
      const isLastSlide = currentIndex === cardData.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    return (
        <>
    <div ref={elementRef} className={`slide-in-right ${isVisible ? "visible-in" : ""}`}>
            <div className='top-margin'>
                <div className="o-head">
                    <h1><span className="o-back">{translations[language].rev.h14}</span></h1>
                </div>

                <div className="g-back2-cont">
                <p>{translations[language].rev.p25}</p>
                </div>

                <div className="imgs scale">
                    <img src={img7} alt="img7" className='img7'  loading="lazy"/>
                    <img src={img8} alt="img8" className='img8'  loading="lazy"/>
                </div>

                <div className="slider-container2">
                    <div className="card-slider2" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {cardData.map((card, index) => (
                        <div className="slide-card2" key={card.id}>
                            <img src={fiveStare} alt="stars" className='stars'/>
                            <p className="review">{card.review}</p>
                            <img src={mark} alt="mark" className="mark"/>
                        </div>
                        ))}
                </div>
            
                <div className="slider-buttons2">
                    <button onClick={prevCard} className='step-button2'><img src={lstep}  className="stepper2" alt="<"/></button>
                    <button onClick={nextCard} className='step-button2'><img src={rstep}  className="stepper2"  alt=">"/></button>
                </div>
            
                <div className="dots2">
                    {cardData.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                    ))}
                </div>
                </div>
            </div>
        </div>
        </>
      );
};

export default UserReview;
