import React from 'react'
import './MainPage.css'
import CardSlider from '../components/CardSlider'
import img1 from '../images/img1.JPG'
import img2 from '../images/img2.JPG'
import img3 from '../images/img3.JPG'
import step1 from '../images/step1.PNG'
import step2 from '../images/step2.PNG'
import step3 from '../images/step3.PNG'
import step4 from '../images/step4.PNG'
import rarrow from '../images/r-arrow.PNG'
import aarrow from '../images/a-arrow.PNG'
import { useLanguage } from './LanguageContext';
import useSlideIn from "./UseSlideIn";



const MainPage = ({ scrollToComponent }) => {
  const { language, translations } = useLanguage();

  const { isVisible, elementRef } = useSlideIn(0.1);

  return (
    <>
      <div ref={elementRef} className={`slide-in-right ${isVisible ? "visible-in" : ""}`}>
        <div className="main-contents scale" id="home">
            <div className="main-content">
                <p className="p1">{translations[language].main.p1}</p>
                <img src={img1} alt="img1" className='img1' loading="lazy"/>
            </div>
            <div className="main-content">
                <img src={img2} alt="img2" className='img2' loading="lazy"/>
                <p className="p2">{translations[language].main.p2}</p>
                <img src={img2} alt="img2" className='img2 img2-2'/>
            </div>
            <div className="main-content">
                <p className="p3">{translations[language].main.p3}</p>
                <img src={img3} alt="img2" className='img3' loading="lazy"/>
            </div>
        </div>
        

        <div className="p-back">
          <div className="flex-div">
            <img src={translations[language].main.card1} className="icon"/>
            <img src={translations[language].main.card2} className="icon"/>
            <img src={translations[language].main.card3} className="icon"/>
            <img src={translations[language].main.card4} className="icon"/>
            <img src={translations[language].main.card5} className="icon"/>
          </div>
          <div className="anchor">
            <a href="#services" onClick={(e) => {e.preventDefault(); scrollToComponent('services');}} className="a-flex">
              <img src={aarrow} alt="arrow" className='aarrow'/>
              <p className='anch-p'>{translations[language].nav.servicies}</p>
            </a>
          </div>
        </div>

        <div className='top-margin'>
          <h1 className="g-h1"><span className="g-back">{translations[language].main.h1}</span></h1>
        </div>

        <CardSlider />

        <div className="first-steps">
          <p className="head">{translations[language].main.h2}</p>
          <div className="steps">
            <div className="step-card">
              <img src={step1} className="step"/>
              <p>{translations[language].main.rec}</p>
            </div>

            <img src={rarrow} className="r-arrow"/>

            <div className="step-card">
              <img src={step2} className="step"/>
              <p>{translations[language].main.tel}</p>
            </div>

            <img src={rarrow} className="r-arrow"/>

            <div className="step-card">
              <img src={step3} className="step"/>
              <p>{translations[language].main.fac}</p>
            </div>

            <img src={rarrow} className="r-arrow"/>

            <div className="step-card">
              <img src={step4} className="step"/>
              <p>{translations[language].main.tog}</p>
            </div>
          </div>
          <p className="l-text">{translations[language].main.p4}</p>
          <div className="anchor">
            <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToComponent('contact');}} className="a-flex">
              <img src={aarrow} alt="arrow" className='aarrow'/>
              <p className='anch-p'>{translations[language].nav.contacts}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}


export default MainPage
