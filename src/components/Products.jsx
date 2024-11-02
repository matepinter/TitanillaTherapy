import React from 'react'
import "../components/Products.css"
import etsylogo from "../images/etsy-logo.PNG"
import etsy1 from "../images/etsy-1.WEBP"
import etsy2 from "../images/etsy-2.WEBP"
import etsy3 from "../images/etsy-3.WEBP"
import { useLanguage } from './LanguageContext'
import useSlideIn from "./UseSlideIn";

const Products = () => {
  const { language, translations } = useLanguage();

  const { isVisible, elementRef } = useSlideIn(0.01);

  return (
    <>
    <div ref={elementRef} className={`slide-in-right ${isVisible ? "visible-in" : ""}`}>
      <div className='top-margin'>
          <h1 className="g-h1" id="products"><span className="g-back">{translations[language].prod.h11}</span></h1>

          <div className="products scale">
              <p>{translations[language].prod.p14}</p>
              <div className="etsy-imgs">
                <img src={etsy1} alt="etsy1" className='etsy-img'/>
                <img src={etsy2} alt="etsy2" className='etsy-img'/>
                <img src={etsy3} alt="etsy3" className='etsy-img'/>
              </div>
              <p>{translations[language].prod.p15}</p>
              <p>{translations[language].prod.p16}</p>
              <a href="https://titanillatherapy.etsy.com" target='_blank'><img src={etsylogo} alt="https://titanillatherapy.etsy.com" className='etsy'/></a>
              <p>{translations[language].prod.p17}</p>
              <p>{translations[language].prod.p18}</p>
              <a href=" https://titanillatherapy.etsy.com?coupon=TITANILLA10" target='_blank'> https://titanillatherapy.etsy.com?coupon=TITANILLA10</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
