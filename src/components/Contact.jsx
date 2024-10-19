import React from 'react'
import "../components/Contact.css"
import faceicon from "../images/face-icon.PNG"
import instaicon from "../images/insta-icon.PNG"
import phone from "../images/phone-icon.PNG"
import mail from "../images/mail-icon.PNG"
import loc from "../images/loc-icon.PNG"
import house from "../images/home-icon.PNG"
import { useLanguage } from './LanguageContext'
import useSlideIn from "./UseSlideIn";

const Contact = () => {
    const { language, translations } = useLanguage();

    const { isVisible, elementRef } = useSlideIn(0.1);

  return (
    <>
    <div ref={elementRef} className={`slide-in-right ${isVisible ? "visible-in" : ""}`}>
        <div className='top-margin'>
            <div className="o-head" id="contact">
                    <h1><span className="o-back">{translations[language].cont.h12}</span></h1>
            </div>

            <div className="contacts">
                <p className="cont-text">{translations[language].cont.p19}</p>
                <p className="cont-text">{translations[language].cont.p20}</p>
                <p className="cont-text">{translations[language].cont.p21}</p>

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
                        <p>{translations[language].cont.p22}</p>
                    </div>
                    <div className="contact">
                        <img src={house} alt="house" className="contact-icon"/>
                        <p>{translations[language].cont.p23}</p>
                    </div>
                </div>

                <div className="socials scale">
                    <h1>{translations[language].cont.h13}</h1>
                    <p>{translations[language].cont.p24}</p>
                    <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=61556636301910" target='_blank'><img src={faceicon} alt="https://www.facebook.com/profile.php?id=61556636301910" className='social-icon'/></a>
                        <a href="https://www.instagram.com/titanillatherapy/" target='_blank'><img src={instaicon} alt=" https://www.instagram.com/titanillatherapy/" className='social-icon'/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
