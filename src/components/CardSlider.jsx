import React, { useState } from 'react'
import './CardSlider.css'
import rstep from '../images/r-step.png'
import lstep from '../images/l-step.png'

const cardData = [
    { id: 1, question: 'A foglalkozások egyéni vagy csoportos formában zajlanak?', answer: 'Egyéni és csoportos foglalkozások külön-külön és együtt is elérhetőek. A legalkalmasabb terápiás forma és összetétel megállapítását előzetes konzultáció és állapotfelmérés előzi meg.' },
    { id: 2, question: 'Hány éves kortól kezdhetjük el a fejlesztést?', answer: 'Már korai életszakaszban is előfordulhatnak eltérő fejlődésmenetre utaló jelek, ezért már 1 hónapos kortól is elkezdhetjük a korrigáló fejlesztést.' },
    { id: 3, question: 'Milyen ruházatban érkezzen a gyermek a foglalkozásra?', answer: 'Kényelmes, mozgásszabadságot biztosító, évszaknak megfelelő ruházatban. A csoportos foglalkozásokra ajánlott csúszásgátló zoknit hozni.' },
    { id: 4, question: 'Mennyi időbe telik egy foglalkozás?', answer: 'A fejlesztő foglalkozások 50 perc hosszúságúak. A teljes órából visszamaradó időben a szülők tájékoztatása történik a fejlesztés történéseiről, az elvégzett feladatokról és otthoni gyakorlatok javaslása.' },
    { id: 5, question: 'Szülőként részt vehetek a foglalkozásokon?', answer: '2,5-3 éves kor felett a foglalkozások szülői jelenlét nélkül zajlanak. Csoportos foglalkozás esetén az első 1-2 alkalommal a szülő bent tartózkodhat a gyermekével, a további fejlesztések azonban már szülő nélkül történnek.' },
    { id: 6, question: 'Mi történik, ha nem tudunk részt venni a foglalkozáson?', answer: 'A foglalkozást megelőző 24 órában való lemondás esetében a fejlesztés díjának 100%-át meg kell téríteni (helyfenntartás miatt).' },
    { id: 7, question: 'Járhatunk egyéni és csoportos foglalkozásra is?', answer: 'Természetesen! Amennyiben a gyermek csoportba illeszthető, mindkét foglalkozási forma igénybe vehető. Sőt, ajánlott!' },
  ];

const CardSlider = () => {
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
