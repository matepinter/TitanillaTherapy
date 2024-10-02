import React from 'react'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import AboutInfo from './components/AboutInfo'
import UserReview from './components/UserReview'
import Services from './components/Services'
import Contact from './components/Contact'
import Products from './components/Products'
import Footer from './components/Footer'
import { LanguageProvider } from './components/LanguageContext';


function App() {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    const offset = 150;
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <LanguageProvider>
        <Navbar scrollToComponent={scrollToComponent} />
        <MainPage />
        <AboutInfo />
        <Services />
        <Products />
        <Contact />
        <UserReview />
        <Footer scrollToComponent={scrollToComponent}/>
      </LanguageProvider>
    </div>
  )
}

export default App; 
