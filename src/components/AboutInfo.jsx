import React from 'react'
import '../components/AboutInfo.css'
import img4 from "../images/img4.JPG"
import hat from "../images/edu_hat.PNG"
import pap from "../images/edu_pap.PNG"
import { useLanguage } from './LanguageContext';

const AboutInfo = () => {
    const { changeLanguage } = useLanguage();

    const { language, translations } = useLanguage();

  return (
    <>
        <div className="about top-margin" id="about">
            <h1 className="g-h1"><span className="g-back">{translations[language].about.h3}</span></h1>

            <div className="p-back2">
                    <div className="text">
                        <p>{translations[language].about.p5}</p>

                        <p>{translations[language].about.p6}</p>

                        <p>{translations[language].about.p7}</p>

                        <p>{translations[language].about.p8}</p>

                        <p>{translations[language].about.p9}</p>
                    </div>

                    <div className="img4-div scale">
                        <img src= {img4} className="img4"/>
                    </div>
            </div>
        </div>

        <div className='top-margin'>
            <h1 className="g-h1"><span className="g-back">{translations[language].about.h4}</span></h1>
        </div>

        <div className="studies">

            <div className="studies-cont">
                <div className="sch">
                    <div className="uni-cont">
                        <img src={hat} alt="hat" className='edu-icon'/>
                        <p className="uni">{translations[language].about.uni1}</p>
                    </div>
                    <p className="dep"> {translations[language].about.maj1}</p>
                </div>
                <div className="sch">
                    <div className="uni-cont">
                        <img src={hat} alt="hat" className='edu-icon'/>
                        <p className="uni">{translations[language].about.uni2}</p>
                    </div>
                    <p className="dep">{translations[language].about.maj2}</p>
                </div>
                <div className="sch d-show">
                    <div className="uni-cont">
                        <img src={pap} alt="pap" className='edu-icon'/>
                        <p className="uni">{translations[language].about.cert}</p>
                    </div>
                    {translations[language].about.certs.map((card) => (
                        <p className="dep">{card}</p>
                        ))}
                </div>
            </div>

            <div className="studies-cont d-hide">
                <div className="sch">
                    <div className="uni-cont">
                        <img src={pap} alt="pap" className='edu-icon'/>
                        <p className="uni">{translations[language].about.cert}</p>
                    </div>
                    {translations[language].about.certs.map((card) => (
                        <p className="dep">{card}</p>
                        ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutInfo