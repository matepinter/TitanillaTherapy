import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png'
import { useLanguage } from './LanguageContext';


const Navbar = ({ scrollToComponent }) => {
  const { changeLanguage } = useLanguage();

  const { language, translations } = useLanguage();

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className='container'>
        <img src={logo} alt="logo" className='logo'/>
        <ul className={`list ${mobileMenu ? "" : "hide-menu"}`}>
            <li><a href="#home" onClick={(e) => {e.preventDefault(); scrollToComponent('home');}}>{translations[language].nav.main}</a></li>
            <li><a href="#about" onClick={(e) => {e.preventDefault(); scrollToComponent('about');}}>{translations[language].nav.about}</a></li>
            <li><a href="#services" onClick={(e) => {e.preventDefault(); scrollToComponent('services');}}>{translations[language].nav.servicies}</a></li>
            <li><a href="#products" onClick={(e) => {e.preventDefault(); scrollToComponent('products');}}>{translations[language].nav.products}</a></li>
            <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToComponent('contact');}}>{translations[language].nav.contacts}</a></li>
            <li className='hide-lang'><button onClick={() => changeLanguage('de')}>Deutsch</button></li>
            <li className='hide-lang'><button onClick={() => changeLanguage('en')}>English</button></li>
            <li className='hide-lang'><button onClick={() => changeLanguage('hu')}>Magyar</button></li>
        </ul>
        <div className="lang-change">
          <button onClick={() => changeLanguage('de')}>Deutsch</button>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('hu')}>Magyar</button>
        </div>
        <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar