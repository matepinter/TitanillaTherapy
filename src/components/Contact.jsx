import React from 'react'
import "../components/Contact.css"
import faceicon from "../images/face-icon.PNG"
import instaicon from "../images/insta-icon.PNG"
import phone from "../images/phone-icon.PNG"
import mail from "../images/mail-icon.PNG"
import loc from "../images/loc-icon.PNG"
import house from "../images/home-icon.PNG"

const Contact = () => {
  return (
    <>
        <div className='top-margin'>
            <div className="o-head" id="contact">
                    <h1><span className="o-back">Kapcsolat</span></h1>
            </div>

            <div className="contacts">
                <p className="cont-text">Én azért vagyok, hogy támogassalak téged és gyermekedet minden lépésnél a
                fejlődés útján.</p>
                <p className="cont-text">Együtt, csapatként tegyünk meg mindent a gyermeked fejlődése érdekében!</p>
                <p className="cont-text">Ha kérdésed van, vagy szeretnél többet megtudni arról, hogyan segíthetek, ne
                habozz kapcsolatba lépni velem!</p>

                <div className="contact-cont">
                    <div className="contact">
                        <img src={phone} alt="phone" className="contact-icon"/>
                        <p>+41779428144</p>
                    </div>
                    <div className="contact">
                        <img src={mail} alt="mail" className="contact-icon"/>
                        <p>titanilla.gyogyped@gmail.com</p>
                    </div>
                    <div className="contact">
                        <img src={loc} alt="loc" className="contact-icon"/>
                        <p>Svájc, online Magyarország</p>
                    </div>
                    <div className="contact">
                        <img src={house} alt="house" className="contact-icon"/>
                        <p>Csoportos foglalkozás helye:
                        BewegungsRAUM, Baslerstrasse 20,
                        4665 Oftringen 
                        </p>
                    </div>
                </div>

                <div className="socials scale">
                    <h1>Közösségi média</h1>
                    <p> Itt elolvashatod a legújabb bejegyzéseimet a gyógypedagógia világából,
                    valamint hasznos tippeket és tanácsokat a szülők számára.</p>
                    <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=61556636301910" target='_blank'><img src={faceicon} alt="https://www.facebook.com/profile.php?id=61556636301910" className='social-icon'/></a>
                        <a href="https://www.instagram.com/titanillatherapy/" target='_blank'><img src={instaicon} alt=" https://www.instagram.com/titanillatherapy/" className='social-icon'/></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
