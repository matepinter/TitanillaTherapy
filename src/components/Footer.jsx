import React from 'react'
import "../components/Footer.css"
import { useLanguage } from './LanguageContext';

const Footer = ({ scrollToComponent }) => {
  const { language, translations } = useLanguage();

  return (
    <>
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-left">
              <h3>Titanila Therapy</h3>
              <p>&copy; {translations[language].nav.copy}</p>
            </div>

            <div className="footer-center">
            <h4>{translations[language].nav.quick}</h4>
            <ul>
                <li><a href="#home" onClick={(e) => {e.preventDefault(); scrollToComponent('home');}}>{translations[language].nav.main}</a></li>
                <li><a href="#about" onClick={(e) => {e.preventDefault(); scrollToComponent('about');}}>{translations[language].nav.about}</a></li>
                <li><a href="#services" onClick={(e) => {e.preventDefault(); scrollToComponent('services');}}>{translations[language].nav.servicies}</a></li>
                <li><a href="#products" onClick={(e) => {e.preventDefault(); scrollToComponent('products');}}>{translations[language].nav.products}</a></li>
                <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToComponent('contact');}}>{translations[language].nav.contacts}</a></li>
            </ul>
            </div>

            <div className="footer-right">
            <h4>{translations[language].nav.follow}</h4>
            <ul className="socials">
                <li><a href="https://www.facebook.com/profile.php?id=61556636301910" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/titanillatherapy/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://titanillatherapy.etsy.com" target="_blank" rel="noopener noreferrer">Etsy</a></li>
            </ul>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer
