import React from 'react'
import './MainPage.css'
import CardSlider from '../components/CardSlider'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import step1 from '../images/step1.png'
import step2 from '../images/step2.png'
import step3 from '../images/step3.png'
import step4 from '../images/step4.png'
import rarrow from '../images/r-arrow.png'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import card5 from '../images/card5.png'



const MainPage = () => {

  return (
    <>
      <div className="main-contents scale" id="home">
          <div className="main-content">
              <p className="p1">A tanulás nálam játékos formában történik.
                                Olyan foglalkozásokat tartok, ahol együtt
                                játszunk, tanulunk, és közben észrevétlenül
                                fejlődünk.</p>
              <img src={img1} alt="img1" className='img1'/>
          </div>
          <div className="main-content">
              <img src={img2} alt="img2" className='img2'/>
              <p className="p2">Hiszem, hogy minden gyermek különleges, és ki
                                kell járnia a saját ösvényét a fejlődés útján. Az én
                                célom, hogy ezen a néha rögös úton támogatást
                                nyújtsak a gyermekeknek és családjaiknak.</p>
              <img src={img2} alt="img2" className='img2 img2-2'/>
          </div>
          <div className="main-content">
              <p className="p3">Nagyfokú elhivatottságot, empátiát, szakmai
                                felkészültséget, tapasztalatot és szeretetet
                                nyújtok a hozzám forduló, segítséget és
                                támogatást váró családok számára.</p>
              <img src={img3} alt="img2" className='img3'/>
          </div>
      </div>

      <div className="p-back scale">
          <img src={card1} className="icon"/>
          <img src={card2} className="icon"/>
          <img src={card3} className="icon"/>
          <img src={card4} className="icon"/>
          <img src={card5} className="icon"/>
      </div>

      <div className='top-margin'>
        <h1 className="g-h1"><span className="g-back">Gyakori kérdések</span></h1>
      </div>

      <CardSlider />

      <div className="first-steps">
        <p className="head">Kezdő lépések!</p>
        <div className="steps">
          <div className="step-card">
            <img src={step1} className="step"/>
            <p>Kérj időpontot!</p>
          </div>

          <img src={rarrow} className="r-arrow"/>

          <div className="step-card">
            <img src={step2} className="step"/>
            <p>Telefonos konzultáció</p>
          </div>

          <img src={rarrow} className="r-arrow"/>

          <div className="step-card">
            <img src={step3} className="step"/>
            <p>Személyes találkozó</p>
          </div>

          <img src={rarrow} className="r-arrow"/>

          <div className="step-card">
            <img src={step4} className="step"/>
            <p>Együttműködés megkezdése</p>
          </div>
        </div>
        <p className="l-text">Tedd meg az első lépést! Keress meg telefonon, WhatsApp-on vagy
          e-mailben, hogy megbeszéljük, hogyan tudok segíteni
          gyermekednek.</p>
      </div>
    </>
  )
}


export default MainPage
