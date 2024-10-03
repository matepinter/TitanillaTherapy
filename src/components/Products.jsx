import React from 'react'
import "../components/Products.css"
import etsylogo from "../images/etsy-logo.PNG"
import etsy1 from "../images/etsy-1.JPG"
import etsy2 from "../images/etsy-2.JPG"
import etsy3 from "../images/etsy-3.JPG"

const Products = () => {
  return (
    <>
      <div className='top-margin'>
          <h1 className="g-h1" id="products"><span className="g-back">Termékek</span></h1>

          <div className="products scale">
              <p>Célom, hogy támogassam minden gyermek tanulását és fejlődését. Éppen
              ezért készítek különböző képesség-és készségfejlesztő feladatokat és játékokat. </p>
              <div className="etsy-imgs">
                <img src={etsy1} alt="etsy1" className='etsy-img'/>
                <img src={etsy2} alt="etsy2" className='etsy-img'/>
                <img src={etsy3} alt="etsy3" className='etsy-img'/>
              </div>
              <p>Így szeretném segíteni a tudatos szülőket, hogy otthon is megfelelő eszközökkel
              támogassák gyermekük fejlődését.</p>
              <p>Nézz körül az Etsy boltomban, és fedezd fel a legjobb eszközöket a szórakoztató
              tanuláshoz!</p>
              <a href="https://titanillatherapy.etsy.com" target='_blank'><img src={etsylogo} alt="https://titanillatherapy.etsy.com" className='etsy'/></a>
              <p>A kínálatot folyamatosan bővítem, megéri újra ás újra visszalátogatni!</p>
              <p>Használd a “TITANILLA10” kuponkódot, hogy bezsebeld a 10% kedvezményt!</p>
              <a href=" https://titanillatherapy.etsy.com?coupon=TITANILLA10" target='_blank'> https://titanillatherapy.etsy.com?coupon=TITANILLA10</a>
          </div>
        </div>
    </>
  )
}

export default Products
