import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

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
