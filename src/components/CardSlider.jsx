import React, { useState } from 'react'
import './CardSlider.css'
import rstep from '../images/r-step.PNG'
import lstep from '../images/l-step.PNG'
import { useLanguage } from './LanguageContext';


const CardSlider = () => {
  const { language, translations } = useLanguage();


  const cardData = [
    { id: 1, question: translations[language].slider.que1, answer: translations[language].slider.ans1 },
    { id: 2, question: translations[language].slider.que2, answer: translations[language].slider.ans2 },
    { id: 3, question: translations[language].slider.que3, answer: translations[language].slider.ans3 },
    { id: 4, question: translations[language].slider.que4, answer: translations[language].slider.ans4 },
    { id: 5, question: translations[language].slider.que5, answer: translations[language].slider.ans5 },
    { id: 6, question: translations[language].slider.que6, answer: translations[language].slider.ans6 },
    { id: 7, question: translations[language].slider.que7, answer: translations[language].slider.ans7 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="slider-container">
      <div
        className="card-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cardData.map((card, index) => (
          <div className="slide-card" key={card.id}>
            <p className="question">{card.question}</p>
            <p className="answer">{card.answer}</p>
          </div>
        ))}
      </div>

      <div className="slider-buttons">
        <button onClick={prevCard} className="step-button"><img src={lstep}  className="stepper" alt="<"/></button>
        <button onClick={nextCard} className="step-button"><img src={rstep}  className="stepper"  alt=">"/></button>
      </div>

      <div className="dots">
        {cardData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
