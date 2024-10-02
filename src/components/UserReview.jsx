import React, { useState } from 'react'
import "../components/UserReview.css"
import fiveStare from "../images/five-star.png"
import rstep from '../images/r-step.png'
import lstep from '../images/l-step.png'
import mark from "../images/mark.png"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.jpg"

const cardData = [
    { id: 1, review: '“Nagyon alapos felmérést végzettel a gyermekeknél. Játékos feladatok voltak, az együttműködés is nagyon jól ment. A fejlesztés is szuper!”'},
    { id: 2, review: '“A kisfiam járt Titához, a foglalkozás minden percét élvezte, mi szülők is nagyon sok támogatástkaptunk Titától nem csakszakmailag, hanem emberileg is. Sok nehéz pillanatban tartott meg minket. És ami a legfontosabb a kisfiam nagyon sokat fejlődött a közös munka során. Lelkiismeretes és elhivatott szakember, én nagyon jó szívvel tudom őt ajánlani!“'},
    { id: 3, review: '“Gyermekcentrikus, türelmes, megbízható, ügyesen teremt kapcsolatot a gyerekekkel. A gyerekek gyorsan oldódnak a közelèben. Kreatív feladatokkal, jàtèkosan fejleszti, tanítja a gyerekeket. Mi kèt gyerekkel jàrunk hozzà rendszeresen. A gyerekek mindig vàrjàk a fogalkozásokat,szívesen vesznek rèszt a foglalkozásokon. Csak ajánlani tudom Őt.”'},
    { id: 4, review: '“Titanilla a legnagyobb szeretettel , türelemmel és szaktudással vezeti minden egyes foglalkozását. Minden találkozó után látszik a fejlődés a kislányunkon. Nagyon sokat köszönhetünk neki. Mindenkinek csak ajánlani tudom.”'}
  ];

const UserReview = () => {
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
        <>
            <div className='top-margin'>
                <div className="o-head">
                    <h1><span className="o-back">Visszajelzések</span></h1>
                </div>

                <div className="g-back2-cont">
                <p>Együttműködéseim során mind a szülőktől, mind a gyermekektől pozitív
                    visszajelzéseket kaptam. Olvasd el te is, mit mondtak rólam azok, akik már
                    igénybe vették szolgáltatásaimat.</p>
                </div>

                <div className="imgs scale">
                    <img src={img7} alt="img7" className='img7' />
                    <img src={img8} alt="img8" className='img8' />
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
        </>
      );
};

export default UserReview;