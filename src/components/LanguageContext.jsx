// src/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

// Create the context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// LanguageProvider component to wrap your app
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
