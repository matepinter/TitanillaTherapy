import React from 'react'
import '../components/Services.css'
import img5 from '../images/img5.JPG'
import img6 from '../images/img6.JPG'
import { useLanguage } from './LanguageContext'

const Services = () => {
    const { language, translations } = useLanguage();

  return (
    <>
        <div className='top-margin'>
            <div className="o-head" id='services'>
                <h1><span className="o-back">{translations[language].serv.h5}</span></h1>
            </div>

            <div className="p-back3 scale">
                <div className="dropdown">
                    <img src={translations[language].serv.serv1} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            {translations[language].serv.servs1.map((card) => (
                                <li key={card}>{card}</li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={translations[language].serv.serv2} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            {translations[language].serv.servs2.map((card) => (
                                <li key={card}>{card}</li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={translations[language].serv.serv3} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            {translations[language].serv.servs3.map((card) => (
                                <li key={card}>{card}</li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={translations[language].serv.serv4} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            {translations[language].serv.servs5.map((card) => (
                                <li key={card}>{card}</li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={translations[language].serv.serv5} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            {translations[language].serv.servs5.map((card) => (
                                <li key={card}>{card}</li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={translations[language].serv.serv6} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            {translations[language].serv.servs6.map((card) => (
                                <li key={card}>{card}</li>
                                ))}
                        </ul>
                    </div>
                </div>

            </div>

            <div className="serv scale">
                <div className="serv-cont">
                    <div className="serv-texts">
                        <div className="serv-text">
                            <h1 className="serv-name">{translations[language].serv.h6}</h1>
                            <p className="serv-desc">{translations[language].serv.p10}</p>
                        </div>
                        <div className="serv-text">
                            <h1 className="serv-name">{translations[language].serv.h7}</h1>
                            <p className="serv-desc">{translations[language].serv.p11}</p>
                        </div>
                    </div>
                    <img src={img5} alt="img5" className='img5'/>
                </div>

                <div className="serv-cont">
                    <img src={img6} alt="img6" className='img6'/>
                    <div className="serv-texts">
                        <div className="serv-text">
                            <h1 className="serv-name">{translations[language].serv.h8}</h1>
                            <p className="serv-desc">{translations[language].serv.p12}</p>
                        </div>
                        <div className="serv-text">
                            <h1 className="serv-name">{translations[language].serv.h9}</h1>
                            <p className="serv-desc">{translations[language].serv.p13}</p>
                        </div>
                    </div>
                    <img src={img6} alt="img6 img-block" className='img6 img-hide'/>
                </div>
            </div>

            <div className="prices top-margin">
                <h1 className="g-h1"><span className="g-back">{translations[language].serv.h10}</span></h1>
                <div className="p-back4">
                    {translations[language].serv.prices.map((card) => (
                                <p key={card} className='price'>{card}</p>
                                ))}
                </div>
                <div className="p-back4 p-hide">
                    {translations[language].serv.prices1.map((card) => (
                                <p key={card} className='price'>{card}</p>
                                ))}
                </div>
            </div>
        </div> 
    </>
  )
}

export default Services
